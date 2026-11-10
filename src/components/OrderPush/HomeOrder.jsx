// src/components/OrderPush/HomeOrder.jsx
// Home-only order sections: a one-line composer, and a "which one is you" scenario grid.
import { createElement, useState } from "react";
import { ArrowRight, FileText, MessagesSquare, LayoutDashboard, Hourglass } from "lucide-react";
import s from "./OrderPush.module.css";
import { orderUrl } from "./orderLinks";
import { SERVICE_CARDS, categories } from "../../data/servicesData";
const CATLABEL = { academic: "Academic & Research", analytics: "Advanced Analytics", finance: "Finance & Risk", healthcare: "Healthcare & Life Sciences", manufacturing: "Manufacturing & Supply Chain", retail: "Retail & E-Commerce", "assignment-help": "Assignment & Software Help", "academic-writing": "Academic Writing & Publishing", "research-methods": "Statistical & Research Methods", "ai-ml": "AI & Machine Learning", "data-engineering": "Data Engineering & BI Tools" };

export function OrderDesk() {
  const [svc, setSvc] = useState("");
  const slug = svc || null;
  return (
    <section className={s.desk} aria-label="Order desk">
      <div className={s.deskInner}>
        <p className={s.kicker}>Order desk · open now</p>
        <p className={s.deskSentence}>
          I need help with{" "}
          <span className={s.selWrap}>
            <select value={svc} onChange={(e) => setSvc(e.target.value)} aria-label="What do you need">
              <option value="">pick one…</option>
              {categories.map((c) => { const items = SERVICE_CARDS.filter((x) => x.category === c && x.href); return items.length ? (<optgroup key={c} label={CATLABEL[c] || c}>{items.map((x) => <option key={x.href} value={x.href.replace("/services/", "")}>{x.title.replace(/&amp;/g, "&")}</option>)}</optgroup>) : null; })}
              <option value="other">Something else</option>
            </select>
          </span>{" "}
          and I want a quote <em>today</em>.
        </p>
        <a className={s.orderBtnLg} href={orderUrl({ service: slug || null, medium: "home-desk" })}>Start my order <ArrowRight size={18} /></a>
        <ul className={s.deskPoints}>
          <li><b>2 min</b> to fill in</li>
          <li><b>24 h</b> to a fixed quote</li>
          <li><b>$0</b> until you agree</li>
        </ul>
      </div>
    </section>
  );
}

const SCENES = [
  { Icon: MessagesSquare, tag: "Scenario 01", t: "“My supervisor sent my stats back.”", d: "We redo the analysis properly and show you why each test was chosen.", slug: "dissertation-statistics-help", c: "supervisor" },
  { Icon: FileText, tag: "Scenario 02", t: "“I have survey data and no idea where to start.”", d: "Send the file. We clean it, run it, and hand back tables you can paste in.", slug: "survey-data-analysis", c: "survey" },
  { Icon: LayoutDashboard, tag: "Scenario 03", t: "“My team needs a dashboard by Friday.”", d: "One clear view of the numbers that matter, built around your data.", slug: "dashboard-development", c: "dashboard" },
  { Icon: Hourglass, tag: "Scenario 04", t: "“My deadline is this week.”", d: "Rush orders are what the 24-hour quote is for. Mark it urgent and go.", slug: null, c: "rush" },
];
export function SituationGrid() {
  return (
    <section className={s.scenes} aria-label="Which one sounds like you">
      <div className={s.scenesInner}>
        <h2 className={s.scenesTitle}>Which one sounds like you?</h2>
        <p className={s.scenesSub}>Tap yours. The order form opens already set up for it.</p>
        <div className={s.sceneGrid}>
          {SCENES.map(({ Icon, tag, t, d, slug, c }, n) => (
            <a key={c} className={s.scene} style={{ "--tilt": `${[-1.2, 0.8, -0.6, 1][n]}deg` }} href={orderUrl({ service: slug, medium: "home-scenario", content: c })}>
              <span className={s.sceneTag}>{tag}</span>
              {createElement(Icon, { size: 22, className: s.sceneIcon })}
              <strong>{t}</strong>
              <span>{d}</span>
              <span className={s.sceneGo}>Order this <ArrowRight size={15} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
