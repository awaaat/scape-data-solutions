// src/components/OrderPush/HomeOrder.jsx
// Home-only order sections: a one-line composer, and a "which one is you" scenario grid.
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, GraduationCap, Briefcase, ShoppingCart, HeartPulse, Landmark, Factory, Bot, Hourglass } from "lucide-react";
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

// ── Which one sounds like you? 70 real situations. Each card opens the order form on the matching service.
const SCENARIO_GROUPS = [
  { id: "students", label: "Students & researchers", Icon: GraduationCap, items: [
    ["My supervisor sent my stats back.", "We redo the analysis properly and show you why each test was chosen.", "dissertation-statistics-help"],
    ["I have survey data and no idea where to start.", "Send the file. We clean it, run it, and hand back tables you can paste in.", "survey-data-analysis"],
    ["I don't know which statistical test to use.", "Tell us your question. We pick the test and justify it.", "statistical-analysis-consulting"],
    ["My Chapter 4 is due and it's empty.", "Analysis, tables, interpretation and the written results.", "chapter-4-analysis"],
    ["I have SPSS output I can't explain.", "Plain-English interpretation, APA-ready.", "spss-data-analysis"],
    ["My Cronbach's alpha is too low.", "We find the weak items and fix the scale properly.", "cronbach-alpha-analysis"],
    ["My questionnaire needs validating.", "Content and construct validity, reliability, the full write-up.", "questionnaire-validation"],
    ["My model needs SEM or AMOS.", "Model specification, fit indices and reporting.", "amos-sem-analysis"],
    ["I need a systematic literature review.", "Search, screening, synthesis and a clean write-up.", "systematic-literature-review"],
    ["My paper has to go to a journal.", "Formatting, cover letter and submission support.", "journal-submission-support"],
    ["My research proposal is due.", "Objectives, methodology and a defensible design.", "research-proposal-help"],
    ["I have 20 interview transcripts.", "Coding and thematic analysis you can defend.", "thematic-analysis-services"],
    ["My Python assignment won't run.", "Working, commented code and an explanation.", "python-assignment-help"],
    ["Stata or EViews econometrics has me stuck.", "Regression, panel and time-series, done and explained.", "econometrics-assignment-help"],
    ["I need my writing proofread before submission.", "Clarity, grammar and consistency, tracked changes.", "academic-proofreading"],
    ["My machine learning assignment is due.", "Models, evaluation and a write-up that shows your reasoning.", "machine-learning-assignment-help"],
    ["I'm doing a meta-analysis.", "Effect sizes, heterogeneity and forest plots.", "meta-analysis-services"],
    ["I have a dataset and a blank page.", "We take you from raw file to finished results.", "research-data-analysis"],
  ]},
  { id: "business", label: "Business & operations", Icon: Briefcase, items: [
    ["My team needs a dashboard by Friday.", "One clear view of the numbers that matter, built around your data.", "dashboard-development"],
    ["Our spreadsheets are held together with hope.", "A proper decision model you can trust and update.", "excel-decision-modeling"],
    ["Our data is a mess.", "Duplicates, gaps and bad formats fixed at the source.", "data-cleaning"],
    ["Our reports take days and nobody trusts them.", "Automated Power BI reporting with one version of the truth.", "power-bi-consulting"],
    ["We want Tableau but nobody knows it.", "Dashboards built and your team trained.", "tableau-consulting"],
    ["We keep running out of stock, or over-ordering.", "Demand forecasts that plan the next quarter.", "demand-forecasting"],
    ["Our data lives in five places that don't agree.", "One warehouse, one set of numbers.", "data-warehouse-development"],
    ["Sales are dropping and we don't know why.", "A sales dashboard that shows where and when.", "sales-performance-dashboard"],
    ["Customers are leaving.", "Find who is about to leave and what keeps the rest.", "customer-churn-lifetime-value"],
    ["We don't really know our customers.", "Segments you can market to differently.", "customer-segmentation-profiling"],
    ["Is our marketing spend working?", "Marketing mix modelling shows what each channel returns.", "marketing-mix-modeling"],
    ["We don't know how to price this.", "Data-backed pricing that protects margin.", "pricing-optimization"],
    ["Good people keep quitting.", "Workforce analytics on attrition and retention.", "workforce-hr-analytics"],
    ["We're moving systems and can't lose data.", "Planned, tested data migration.", "data-migration"],
    ["Revenue operations is a black box.", "Pipeline, conversion and revenue in one view.", "revenue-operations-analytics"],
    ["We need a plan for the year with numbers behind it.", "Financial planning and variance analysis.", "financial-planning-analysis"],
  ]},
  { id: "retail", label: "Retail & e-commerce", Icon: ShoppingCart, items: [
    ["I can't tell what's selling.", "Top sellers and slow movers, by store and week.", "top-selling-slow-moving-products"],
    ["Stock is either empty or piling up.", "Inventory analytics that set the right levels.", "inventory-management-analytics"],
    ["I want customers to buy more per visit.", "Basket analysis for cross-sell and bundles.", "market-basket-analysis"],
    ["I want recommendations like the big shops.", "A recommender built on your own sales data.", "product-recommendations"],
    ["Are my discounts actually working?", "Promotion lift versus margin given away.", "promotion-discount-performance"],
    ["Which store is underperforming?", "Like-for-like store comparison.", "store-performance-comparison"],
    ["What are people saying about my brand?", "Sentiment and reputation monitoring.", "brand-health-reputation-monitoring"],
    ["My loyalty programme isn't loyal.", "Who's engaged, who's lapsing, what to offer.", "customer-loyalty-analytics"],
    ["Where do customers drop off?", "Customer journey analytics, end to end.", "customer-journey-analytics"],
    ["I need a retail dashboard for the owners.", "Daily sales, margin and stock in one screen.", "retail-dashboard-development"],
  ]},
  { id: "health", label: "Healthcare", Icon: HeartPulse, items: [
    ["Our beds are always full.", "Bed utilisation and discharge-flow analytics.", "bed-utilization-analytics"],
    ["Too many patients come back.", "Readmission risk prediction to target follow-up.", "readmission-risk-prediction"],
    ["Patients wait too long.", "Patient flow analytics from door to discharge.", "patient-flow-analytics"],
    ["Claims keep getting denied.", "Claims analytics that find the pattern.", "medical-claims-analytics"],
    ["We're starting a telehealth programme.", "Remote monitoring analytics and alerts.", "telehealth-remote-monitoring-analytics"],
    ["I run a clinic and fly blind on numbers.", "Clinic analytics owners actually read.", "clinic-analytics"],
    ["I have clinical trial data to analyse.", "Trial analysis that stands up to review.", "clinical-trial-analytics"],
    ["Staffing is always off.", "Healthcare workforce and rota analytics.", "healthcare-workforce-staffing-analytics"],
    ["Patient satisfaction scores are slipping.", "Find the drivers behind the scores.", "patient-experience-satisfaction-analytics"],
    ["Healthcare costs are climbing.", "Cost and utilisation analysis by service line.", "healthcare-cost-utilization-analysis"],
  ]},
  { id: "finance", label: "Finance & risk", Icon: Landmark, items: [
    ["We keep getting hit by fraud.", "Detection models that flag it early.", "fraud-detection-prevention"],
    ["I need to score borrowers properly.", "Credit risk scoring you can explain to a regulator.", "credit-risk-scoring"],
    ["I have financial statements to dissect.", "Ratio, trend and peer analysis.", "financial-statement-analysis"],
    ["My portfolio is too exposed.", "Optimisation and risk management.", "portfolio-optimization-risk-management"],
    ["The regulator wants numbers we can't produce.", "Compliance reporting analytics.", "regulatory-compliance-analytics"],
    ["Insurance claims costs are rising.", "Claims analytics and leakage detection.", "insurance-claims-analytics"],
    ["I want to test a trading strategy.", "Backtesting and algorithmic analytics.", "algorithmic-trading-analytics"],
  ]},
  { id: "ops", label: "Manufacturing & logistics", Icon: Factory, items: [
    ["Our machines break without warning.", "Predictive maintenance from sensor data.", "predictive-maintenance"],
    ["Defects keep reaching customers.", "Quality control analytics at the line.", "quality-control-analytics"],
    ["Deliveries are always late.", "Last-mile delivery analytics.", "last-mile-delivery-analytics"],
    ["Fleet costs are out of control.", "Telematics analytics on fuel, idle and routes.", "fleet-management-telematics"],
    ["Our warehouse is a maze.", "Layout and inventory optimisation.", "warehouse-optimization-inventory-management"],
    ["Routes are planned by hand.", "Route optimisation that cuts distance and time.", "route-optimization-planning"],
    ["We can't see where shipments are.", "Supply chain visibility and tracking.", "supply-chain-visibility-tracking"],
    ["Freight costs eat our margin.", "Carrier performance and cost benchmarking.", "carrier-performance-freight-cost-analytics"],
    ["Production output is uneven.", "Production analytics on throughput and downtime.", "production-analytics"],
  ]},
  { id: "tech", label: "AI & data engineering", Icon: Bot, items: [
    ["I want a chatbot that actually helps.", "Built on your content, with a human hand-off.", "chatbot-development"],
    ["We want our own LLM tool.", "LLM development around your documents.", "llm-development"],
    ["We do the same tasks by hand every day.", "AI automation of the repetitive work.", "ai-automation"],
    ["I have data and a prediction problem.", "A machine learning model and the plan to use it.", "machine-learning-consulting"],
    ["We need to read images automatically.", "Computer vision for inspection and counting.", "computer-vision-solutions"],
    ["We have piles of text nobody reads.", "NLP that summarises and classifies it.", "natural-language-processing"],
    ["Our model works on my laptop only.", "MLOps to deploy and monitor it properly.", "mlops-consulting"],
    ["Data needs to flow between systems nightly.", "ETL pipelines that don't break.", "etl-pipeline-development"],
    ["I don't know where AI fits in my business.", "A straight consultation on where it pays.", "ai-consulting"],
  ]},
];
const RUSH = { rush: true, Icon: Hourglass, q: "My deadline is this week.", d: "Rush orders are what the 24-hour quote is for. Mark it urgent and go." };

// Interleave the groups so every row mixes different people; the rush card shows up early.
const MIXED = (() => {
  const lists = SCENARIO_GROUPS.map((g) => g.items.map(([q, d, slug]) => ({ q, d, slug, Icon: g.Icon, tag: g.label })));
  const out = []; const max = Math.max(...lists.map((l) => l.length));
  for (let i = 0; i < max; i++) lists.forEach((l) => { if (l[i]) out.push(l[i]); });
  out.splice(3, 0, RUSH);
  return out;
})();
const HOLD = 10000;  // ms each row stays on screen
const OUT = 450;     // ms the leaving animation takes

function perRow() {
  if (typeof window === "undefined") return 4;
  return window.innerWidth >= 1100 ? 4 : window.innerWidth >= 700 ? 2 : 1;
}

export function SituationGrid() {
  const [per, setPer] = useState(perRow);
  const [page, setPage] = useState(0);
  const [phase, setPhase] = useState("in");
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);
  useEffect(() => {
    const on = () => setPer(perRow());
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);
  const pages = Math.ceil(MIXED.length / per);
  const row = useMemo(() => Array.from({ length: per }, (_, i) => MIXED[(page * per + i) % MIXED.length]), [page, per]);

  const goTo = (n) => {
    clearTimeout(timer.current);
    setPhase("out");
    timer.current = setTimeout(() => { setPage(((n % pages) + pages) % pages); setPhase("in"); }, OUT);
  };
  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(() => goTo(page + 1), HOLD);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, paused, pages]);
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <section className={s.scenes} aria-label="Which one sounds like you">
      <div className={s.scenesInner}>
        <h2 className={s.scenesTitle}>Which one sounds like you?</h2>
        <p className={s.scenesSub}>Tap yours. The order form opens already set up for it.</p>
        <div className={s.pageRow} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} aria-live="off">
          <div className={s.sceneGrid} style={{ gridTemplateColumns: `repeat(${per}, minmax(0, 1fr))` }} key={`${page}-${per}`}>
            {row.map((c, n) => {
              const Ic = c.Icon;
              return (
                <a key={c.q} className={`${s.scene} ${s.pageCard} ${phase === "in" ? s.pageIn : s.pageOut} ${c.rush ? s.sceneRush : ""}`}
                  style={{ "--i": n, "--tilt": `${[-1.2, 0.8, -0.6, 1][n % 4]}deg` }}
                  href={c.rush ? orderUrl({ service: null, urgent: true, medium: "home-scenario", content: "rush" }) : orderUrl({ service: c.slug, medium: "home-scenario", content: c.slug })}>
                  <span className={s.sceneTag}>{c.rush ? "Short on time" : c.tag}</span>
                  <Ic size={22} className={s.sceneIcon} />
                  <strong>&ldquo;{c.q}&rdquo;</strong>
                  <span>{c.d}</span>
                  <span className={s.sceneGo}>Order this <ArrowRight size={15} /></span>
                </a>
              );
            })}
          </div>
        </div>
        <div className={s.pageDots} role="tablist" aria-label="Choose a set of situations">
          {Array.from({ length: pages }, (_, i) => (
            <button key={i} type="button" role="tab" aria-selected={i === page} aria-label={`Set ${i + 1} of ${pages}`}
              className={`${s.pageDot} ${i === page ? s.pageDotOn : ""}`} onClick={() => goTo(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
