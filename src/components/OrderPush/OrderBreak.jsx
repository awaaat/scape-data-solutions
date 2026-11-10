// src/components/OrderPush/OrderBreak.jsx
// Rendered at the top of the shared Footer, so every page ends with an order push.
// Six different formats; the page's URL picks which one, so neighbouring pages feel different.
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Check, Scissors } from "lucide-react";
import s from "./OrderPush.module.css";
import { orderUrl, isAcademicPath, hashStr, QUIET } from "./orderLinks";

/* 1 ── thermal receipt */
function Receipt() {
  const rows = [["Test chosen for your question", "✓"], ["Assumptions checked", "✓"], ["Tables, charts, syntax", "✓"], ["Plain-English write-up", "✓"], ["Revisions in scope", "✓"]];
  return (
    <div className={s.receiptWrap}>
      <div className={s.receipt}>
        <p className={s.rHead}>SCAPE DATA SOLUTIONS</p>
        <p className={s.rSub}>ORDER SLIP · NO. {String(1000 + (new Date().getDate() * 37) % 900)}</p>
        <div className={s.rule} />
        {rows.map(([a, b]) => (<p key={a} className={s.rRow}><span>{a}</span><i /><b>{b}</b></p>))}
        <div className={s.rule} />
        <p className={s.rRow}><span>QUOTE</span><i /><b>FREE</b></p>
        <p className={s.rRow}><span>PAY TODAY</span><i /><b>$0.00</b></p>
        <a className={s.tear} href={orderUrl({ medium: "break-receipt" })}><Scissors size={14} /> Tear off &amp; place this order</a>
      </div>
      <div className={s.receiptText}>
        <h3>Here&apos;s exactly what you get.</h3>
        <p>No mystery packages. Tell us what you need, and we send a fixed quote within 24 hours.</p>
      </div>
    </div>
  );
}

/* 2 ── deadline calculator */
function Deadline() {
  const [d, setD] = useState("");
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const days = d ? Math.ceil((new Date(d + "T00:00:00") - today) / 864e5) : null;
  const orderBy = d ? new Date(new Date(d + "T00:00:00").getTime() - 7 * 864e5) : null;
  const msg = days === null ? "Pick your deadline and we'll tell you when to order."
    : days < 0 ? "That date has passed. Pick the next one."
    : days <= 3 ? `${days} day${days === 1 ? "" : "s"} left. This is a rush job, order right now and mark it urgent.`
    : days <= 10 ? `${days} days left. Order today and there's still room for revisions.`
    : `${days} days left. Order by ${orderBy.toLocaleDateString(undefined, { month: "short", day: "numeric" })} to leave a week for feedback.`;
  return (
    <div className={s.calc}>
      <p className={s.kicker}>Deadline check</p>
      <h3>When is it due?</h3>
      <div className={s.calcRow}>
        <input type="date" value={d} min={today.toISOString().slice(0, 10)} onChange={(e) => setD(e.target.value)} aria-label="Deadline date" />
        <a className={s.orderBtn} href={orderUrl({ medium: "break-deadline", content: d || undefined })}>Order before it&apos;s late <ArrowRight size={16} /></a>
      </div>
      <p className={s.calcMsg} aria-live="polite">{msg}</p>
    </div>
  );
}

/* 3 ── which test do I need */
const GOALS = [
  ["Compare two or more groups", "t-test or ANOVA", "thesis-data-analysis-help"],
  ["Find a relationship", "Pearson or Spearman correlation", "spss-data-analysis-help"],
  ["Predict an outcome", "Linear or logistic regression", "regression-analysis-help"],
  ["Check my survey is reliable", "Cronbach's alpha, factor analysis", "cronbach-alpha-reliability-analysis"],
];
function TestPicker() {
  const [g, setG] = useState(null);
  return (
    <div className={s.calc}>
      <p className={s.kicker}>Ten-second test finder</p>
      <h3>What are you trying to show?</h3>
      <div className={s.chips}>
        {GOALS.map(([t], n) => (<button key={t} type="button" className={`${s.chip} ${g === n ? s.chipOn : ""}`} onClick={() => setG(n)}>{t}</button>))}
      </div>
      <div className={s.calcRow}>
        <p className={s.calcMsg} aria-live="polite">{g === null ? "Pick one. We'll name the test." : <>You probably need: <strong>{GOALS[g][1]}</strong>.</>}</p>
        <a className={s.orderBtn} href={orderUrl({ service: g === null ? undefined : GOALS[g][2], medium: "break-testpicker" })}>
          {g === null ? "Skip, just order" : "Order this analysis"} <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

/* 4 ── terminal */
function Terminal() {
  return (
    <div className={s.term}>
      <div className={s.termBar}><i /><i /><i /><span>~/your-project</span></div>
      <pre className={s.termBody}>
        <span className={s.tP}>$</span> scape order --start{"\n"}
        <span className={s.tOk}>✔</span> dataset received (any format){"\n"}
        <span className={s.tOk}>✔</span> scope + fixed quote in 24h{"\n"}
        <span className={s.tOk}>✔</span> payment: nothing until you agree{"\n"}
        <span className={s.tP}>$</span> <span className={s.caret} />
      </pre>
      <a className={s.termRun} href={orderUrl({ medium: "break-terminal" })}>Run it <kbd>↵</kbd></a>
    </div>
  );
}

/* 5 ── pain checklist (sticky-note) */
const PAINS_A = ["My supervisor questioned my statistics", "I don't know which test fits my question", "My dataset is messy and I'm scared to touch it", "I can run it but can't explain the output", "My deadline is closer than my progress"];
const PAINS_B = ["Our reports take days and nobody trusts them", "Data lives in five places that don't agree", "We can't see what's driving revenue or churn", "Our dashboard is a spreadsheet in disguise", "A decision is waiting on numbers we don't have"];
function Pains({ academic }) {
  const list = academic ? PAINS_A : PAINS_B;
  const [on, setOn] = useState([]);
  const toggle = (n) => setOn((a) => (a.includes(n) ? a.filter((x) => x !== n) : [...a, n]));
  return (
    <div className={s.note}>
      <p className={s.kicker}>Tick what&apos;s true</p>
      <ul className={s.pains}>
        {list.map((p, n) => (
          <li key={p}><label><input type="checkbox" checked={on.includes(n)} onChange={() => toggle(n)} /><span className={s.box}>{on.includes(n) && <Check size={14} />}</span>{p}</label></li>
        ))}
      </ul>
      <div className={s.calcRow}>
        <p className={s.calcMsg} aria-live="polite">{on.length === 0 ? "Even one is enough to start." : `You ticked ${on.length}. We handle ${on.length === 1 ? "it" : `all ${on.length}`}.`}</p>
        <a className={s.orderBtn} href={orderUrl({ medium: "break-pains", content: String(on.length) })}>{on.length ? "Hand it over" : "Order anyway"} <ArrowRight size={16} /></a>
      </div>
    </div>
  );
}

/* 6 ── loud marquee */
function Marquee() {
  const txt = "ORDER NOW ✦ FREE QUOTE ✦ 24H REPLY ✦ NO PAYMENT UNTIL YOU AGREE ✦ ";
  return (
    <a className={s.marq} href={orderUrl({ medium: "break-marquee" })} aria-label="Place an order">
      <div className={s.marqRow}><span>{txt.repeat(4)}</span></div>
      <div className={`${s.marqRow} ${s.marqRev}`}><span>{txt.repeat(4)}</span></div>
      <span className={s.marqBtn}>Start your order <ArrowRight size={18} /></span>
    </a>
  );
}

export default function OrderBreak() {
  const { pathname } = useLocation();
  const academic = isAcademicPath(pathname);
  const Pick = useMemo(() => {
    const pool = academic
      ? [Receipt, Deadline, TestPicker, Terminal, () => <Pains academic />, Marquee]
      : [Receipt, Deadline, Terminal, () => <Pains academic={false} />, Marquee];
    return pool[hashStr(pathname) % pool.length];
  }, [pathname, academic]);
  if (QUIET.test(pathname)) return null;
  return (
    <section className={s.breakSec} aria-label="Place an order">
      <div className={s.breakInner}><Pick /></div>
    </section>
  );
}
