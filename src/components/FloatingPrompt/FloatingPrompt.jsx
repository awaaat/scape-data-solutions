// src/components/FloatingPrompt/FloatingPrompt.jsx
//
// v6:
//   - Cooldown between appearances is now 20s (was 4s) — stays up at least
//     that long before it's eligible to fire again.
//   - Position is now truly random anywhere on screen (computed in JS,
//     applied via inline style), not just 4 fixed corners — the earlier
//     corner-class approach couldn't express "anywhere," only fixed spots.
//     Keeps clear of the navbar (top ~90px) and the AuthFloatingCTA area
//     (bottom ~100px) so it never spawns on top of either.
//
// Shows on EVERY page. Stays up until dismissed or clicked (no auto-hide).
// Idle re-fires on a loop while dormant, gated by the 20s cooldown above.
// Explicit dismiss (X) still silences it for the session.

import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";
import styles from "./FloatingPrompt.module.css";
import PROMPT_QUESTIONS from "./promptQuestions";

const HIDDEN_ON = []; // shows on every page now, including auth/dashboard

// No VISIBLE_MS — the bubble now stays up until the visitor dismisses it
// or clicks through, instead of auto-hiding.
const SESSION_COOLDOWN_MS = 20000;    // stays up 20s minimum before it can re-fire
const MAX_APPEARANCES_SESSION = 25;   // effectively "keeps showing" for the session
const SCROLL_TRIGGER_PCT = 0.15;      // fires almost as soon as they scroll at all
const IDLE_TRIGGER_MS = 4000;         // 4s of no scroll re-fires it
const FIRST_VISIT_NUDGE_MS = 2000;    // fires 2s after landing on any page
const MAX_FIRES_PER_PAGE = 6;         // can refire repeatedly on the same page

const STORAGE_DISMISSED = "fp_dismissed";
const STORAGE_COUNT = "fp_shown_count";
const STORAGE_LAST_SHOWN = "fp_last_shown_at";

const dismissedForSession = () => sessionStorage.getItem(STORAGE_DISMISSED) === "1";
const shownCount = () => parseInt(sessionStorage.getItem(STORAGE_COUNT) || "0", 10);
const lastShownAt = () => parseInt(sessionStorage.getItem(STORAGE_LAST_SHOWN) || "0", 10);
const canFire = () =>
  !dismissedForSession() &&
  shownCount() < MAX_APPEARANCES_SESSION &&
  Date.now() - lastShownAt() > SESSION_COOLDOWN_MS;

function pickQuestion(pathname, exclude) {
  const pool = PROMPT_QUESTIONS.filter((q) => q.text !== exclude?.text);
  const contextual = pool.find((q) => pathname.startsWith(q.path));
  if (contextual) return contextual;
  return pool[Math.floor(Math.random() * pool.length)];
}

const NAVBAR_CLEARANCE_PX = 90;   // don't spawn under the fixed navbar
const BOTTOM_CLEARANCE_PX = 100;  // don't spawn under/on top of AuthFloatingCTA
const EDGE_MARGIN_PX = 16;        // keep fully on-screen
const BUBBLE_W = 280;             // matches max-width in CSS
const BUBBLE_H = 70;              // rough rendered height incl. padding

function pickRandomPosition() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxLeft = Math.max(EDGE_MARGIN_PX, vw - BUBBLE_W - EDGE_MARGIN_PX);
  const maxTop = Math.max(NAVBAR_CLEARANCE_PX, vh - BUBBLE_H - BOTTOM_CLEARANCE_PX);
  const left = EDGE_MARGIN_PX + Math.random() * (maxLeft - EDGE_MARGIN_PX);
  const top = NAVBAR_CLEARANCE_PX + Math.random() * (maxTop - NAVBAR_CLEARANCE_PX);
  return { left: Math.round(left), top: Math.round(top) };
}

export default function FloatingPrompt() {
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [question, setQuestion] = useState(null);
  const [position, setPosition] = useState(() => pickRandomPosition());
  const [pulse, setPulse] = useState(false);
  const firesOnThisPageRef = useRef(0);
  const lastQuestionRef = useRef(null);

  const fire = () => {
    if (firesOnThisPageRef.current >= MAX_FIRES_PER_PAGE || !canFire()) return;
    firesOnThisPageRef.current += 1;
    const q = pickQuestion(location.pathname, lastQuestionRef.current);
    lastQuestionRef.current = q;
    setQuestion(q);
    setPosition(pickRandomPosition());
    setVisible(true);
    setPulse(true);
    setTimeout(() => setPulse(false), 1600);
    sessionStorage.setItem(STORAGE_COUNT, String(shownCount() + 1));
    sessionStorage.setItem(STORAGE_LAST_SHOWN, String(Date.now()));
  };

  useEffect(() => {
    firesOnThisPageRef.current = 0;
    if (HIDDEN_ON.includes(location.pathname) || dismissedForSession() || shownCount() >= MAX_APPEARANCES_SESSION) {
      setVisible(false);
      return undefined;
    }

    let idleTimer = null;
    let firstVisitTimer = null;

    const resetIdle = () => {
      clearTimeout(idleTimer);
      const tick = () => {
        fire();
        idleTimer = setTimeout(tick, IDLE_TRIGGER_MS); // reschedule — keeps firing while dormant
      };
      idleTimer = setTimeout(tick, IDLE_TRIGGER_MS);
    };

    const onScroll = () => {
      resetIdle();
      const doc = document.documentElement;
      const scrolled = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (scrolled >= SCROLL_TRIGGER_PCT) fire();
    };

    const onMouseLeaveTop = (e) => {
      // Real exit-intent: cursor leaves the document entirely (relatedTarget
      // is null, meaning it went to the browser chrome, not another element
      // on the page) AND it was heading upward (clientY near 0). This won't
      // false-trigger just from hovering near the navbar, unlike a wide
      // hover-zone check would.
      if (e.clientY <= 0 && !e.relatedTarget) fire();
    };

    resetIdle();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseLeaveTop);

    // Quick nudge: fires shortly after landing on THIS page (every page,
    // not just the first of the session) — subject to the normal cooldown
    // and session cap, so it still can't double up with another trigger
    // that already fired within the cooldown window.
    firstVisitTimer = setTimeout(fire, FIRST_VISIT_NUDGE_MS);

    return () => {
      clearTimeout(idleTimer);
      clearTimeout(firstVisitTimer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseLeaveTop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleDismiss = (e) => {
    e.stopPropagation();
    sessionStorage.setItem(STORAGE_DISMISSED, "1");
    setVisible(false);
  };

  const handleClick = () => {
    if (question?.path) navigate(question.path);
    setVisible(false);
    // no longer sets STORAGE_DISMISSED here — clicking through used to
    // silence it for the rest of the session, which fought against
    // showing it on every page. Now only the X button dismisses for good.
  };

  if (!visible || !question || HIDDEN_ON.includes(location.pathname)) return null;

  return (
    <div
      className={`${styles.bubble} ${pulse ? styles.pulse : ""}`}
      style={{ left: `${position.left}px`, top: `${position.top}px` }}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()}
    >
      <MessageCircle size={16} className={styles.icon} />
      <span className={styles.text}>{question.text}</span>
      <button type="button" className={styles.dismiss} aria-label="Dismiss" onClick={handleDismiss}>
        <X size={14} />
      </button>
    </div>
  );
}
