// src/components/OrderPush/OrderLayer.jsx
// Mounted once in App.jsx, so it appears on EVERY page. Three pieces:
//   1. Order dock   – bottom-left pill, rotating lines, opens a pocket quote
//   2. Scroll toast – a progress ring that tells the reader how far down they are
//   3. Exit modal   – desktop: cursor leaves the top of the window; mobile: 45s in
// Each is capped to once per session once dismissed, so it is persistent, not hostile.
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, X, Sparkles, Zap } from "lucide-react";
import s from "./OrderPush.module.css";
import { orderUrl, SERVICES, isAcademicPath, hashStr, QUIET, seen } from "./orderLinks";

const LINES_ACAD = [
  "Supervisor sent your stats back?",
  "Dataset sitting in a folder, untouched?",
  "Chapter 4 due sooner than you'd like?",
  "SPSS output you can't explain?",
  "Defence date on the calendar?",
];
const LINES_BIZ = [
  "Reports your team never opens?",
  "Spreadsheets held together with hope?",
  "Need a dashboard by next quarter?",
  "A decision waiting on numbers?",
  "Data you pay to store but never use?",
];

function Dock({ academic, onDismiss }) {
  const lines = academic ? LINES_ACAD : LINES_BIZ;
  const [i, setI] = useState(() => hashStr(window.location.pathname) % lines.length);
  const [open, setOpen] = useState(false);
  const [pick, setPick] = useState(null);
  useEffect(() => {
    if (open) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % lines.length), 4800);
    return () => clearInterval(t);
  }, [open, lines.length]);
  const svc = SERVICES.find((x) => x.key === pick);
  return (
    <div className={s.dockWrap}>
      {open && (
        <div className={s.pocket} role="dialog" aria-label="Pocket quote">
          <button className={s.x} onClick={() => setOpen(false)} aria-label="Close"><X size={14} /></button>
          <p className={s.pocketKicker}><Zap size={12} /> 20-second order</p>
          <p className={s.pocketTitle}>What do you need done?</p>
          <div className={s.chips}>
            {SERVICES.map((x) => (
              <button key={x.key} type="button" className={`${s.chip} ${pick === x.key ? s.chipOn : ""}`} onClick={() => setPick(x.key)}>{x.label}</button>
            ))}
          </div>
          <a className={s.orderBtn} href={orderUrl({ service: svc?.slug, medium: "dock-pocket" })}>
            {svc ? "Place my order" : "Start my order"} <ArrowRight size={16} />
          </a>
          <p className={s.fine}>Free quote in 24 hours. You pay nothing until you agree.</p>
        </div>
      )}
      <div className={s.dock}>
        <span className={s.pulse} aria-hidden="true" />
        <button type="button" className={s.dockText} onClick={() => setOpen((o) => !o)} aria-expanded={open}>
          <span key={i} className={s.dockLine}>{lines[i]}</span>
        </button>
        <a className={s.dockGo} href={orderUrl({ medium: "dock" })}>Order <ArrowRight size={14} /></a>
        <button className={s.dockX} onClick={onDismiss} aria-label="Hide for this visit"><X size={13} /></button>
      </div>
    </div>
  );
}

function ScrollToast({ pct, academic, onClose }) {
  const r = 18, c = 2 * Math.PI * r;
  return (
    <div className={s.toast} role="status">
      <svg width="46" height="46" viewBox="0 0 46 46" className={s.ring} aria-hidden="true">
        <circle cx="23" cy="23" r={r} fill="none" stroke="currentColor" strokeOpacity=".15" strokeWidth="4" />
        <circle cx="23" cy="23" r={r} fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} transform="rotate(-90 23 23)" />
        <text x="23" y="27" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">{pct}</text>
      </svg>
      <div className={s.toastBody}>
        <strong>You&apos;re {pct}% down this page.</strong>
        <span>{academic ? "How far along is your analysis?" : "How far along is your data project?"} Hand it over, we&apos;ll finish it.</span>
      </div>
      <a className={s.toastGo} href={orderUrl({ medium: "scroll-toast" })}>Order <ArrowRight size={14} /></a>
      <button className={s.x} onClick={onClose} aria-label="Dismiss"><X size={14} /></button>
    </div>
  );
}

function ExitModal({ academic, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  const opts = academic
    ? [["Fix my analysis", "Supervisor said redo it", "thesis-data-analysis-help"],
       ["Explain my output", "I have results, not answers", "research-results-interpretation"],
       ["Do it from scratch", "Raw dataset, blank page", "spss-data-analysis-help"]]
    : [["Build the dashboard", "Numbers into one clear view", "other"],
       ["Clean up the data", "One trusted source of truth", "research-data-cleaning-service"],
       ["Answer a question", "A decision that needs evidence", "other"]];
  return (
    <div className={s.overlay} onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className={s.modal} role="dialog" aria-modal="true" aria-label="Before you go">
        <button className={s.x} onClick={onClose} aria-label="Close"><X size={16} /></button>
        <p className={s.pocketKicker}><Sparkles size={12} /> One more thing</p>
        <h3 className={s.modalTitle}>Leaving with the problem still unsolved?</h3>
        <p className={s.modalSub}>Pick the closest match. We prefill the order form, you add details, and we reply with a free quote in 24 hours.</p>
        <div className={s.optGrid}>
          {opts.map(([t, d, slug], n) => (
            <a key={t} className={s.opt} href={orderUrl({ service: slug, medium: "exit-modal", content: `opt${n + 1}` })}>
              <span className={s.optNum}>0{n + 1}</span>
              <strong>{t}</strong><em>{d}</em>
              <ArrowRight size={16} className={s.optArrow} />
            </a>
          ))}
        </div>
        <button className={s.nope} onClick={onClose}>No thanks, I&apos;ll keep struggling</button>
      </div>
    </div>
  );
}

export default function OrderLayer() {
  const { pathname } = useLocation();
  const quiet = QUIET.test(pathname);
  const academic = useMemo(() => isAcademicPath(pathname), [pathname]);
  const [dockOn, setDockOn] = useState(false);
  const [toast, setToast] = useState(0);        // 0 = hidden, otherwise the pct to show
  const [modal, setModal] = useState(false);
  const t0 = useRef(0);
  const modalOpen = useRef(false);
  useEffect(() => { modalOpen.current = modal; }, [modal]);

  useEffect(() => { // dock appears shortly after landing on any page
    t0.current = Date.now();
    const reset = setTimeout(() => { setToast(0); setModal(false); setDockOn(false); }, 0);
    if (quiet || seen.get("dock_x")) return () => clearTimeout(reset);
    const t = setTimeout(() => setDockOn(true), 2500);
    return () => { clearTimeout(reset); clearTimeout(t); };
  }, [pathname, quiet]);

  useEffect(() => { // scroll toast: once per session, past 45% and 10s in
    if (quiet) return undefined;
    const on = () => {
      if (seen.get("toast") || modalOpen.current || Date.now() - t0.current < 10000) return;
      const d = document.documentElement;
      const max = d.scrollHeight - window.innerHeight;
      if (max < 600) return;
      const pct = Math.round((window.scrollY / max) * 100);
      if (pct >= 45) { seen.set("toast"); setToast(Math.min(pct, 99)); }
    };
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [pathname, quiet]);

  useEffect(() => { // exit intent (desktop) and 45s nudge (touch)
    if (quiet) return undefined;
    const fire = () => { if (!seen.get("modal")) { seen.set("modal"); setToast(0); setModal(true); } };
    const out = (e) => { if (e.clientY <= 0 && Date.now() - t0.current > 12000) fire(); };
    const touch = window.matchMedia("(hover: none)").matches;
    let timer;
    if (touch) timer = setTimeout(fire, 45000); else document.addEventListener("mouseleave", out);
    return () => { clearTimeout(timer); document.removeEventListener("mouseleave", out); };
  }, [pathname, quiet]);

  if (quiet) return null;
  return (
    <>
      {dockOn && <Dock academic={academic} onDismiss={() => { seen.set("dock_x"); setDockOn(false); }} />}
      {toast > 0 && !modal && <ScrollToast pct={toast} academic={academic} onClose={() => setToast(0)} />}
      {modal && <ExitModal academic={academic} onClose={() => setModal(false)} />}
    </>
  );
}
