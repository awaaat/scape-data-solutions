// src/pages/OurServices/DataCleaning/DataCleaningPage.jsx
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, Check, Plus, Minus, RotateCcw, Sparkles, Play, Pause, ShieldCheck, Search, Activity,
  Database, Users, TrendingUp, Briefcase, Brain, Copy, Type, Eraser, GitMerge, Truck, ShoppingBag,
  HeartPulse, ClipboardList,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./DataCleaningPage.module.css";
import SEO from "../../../components/SEO/SEO";
import { buildServiceSchema } from "../../../utils/serviceSchema";

const IMG = "/Images/site-images/data-cleaning/";
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const VP = { once: true, amount: 0.15 };

/* ============================== helpers ============================== */
function useCount(target, run, ms = 1300) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) { setV(0); return undefined; }
    let raf, t0;
    const step = (t) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / ms, 1);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, ms]);
  return v;
}
function useReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });
  return [ref, inView];
}

const titleCase = (s) => s.trim().replace(/\s+/g, " ").toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
const MON = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" };
const isoDate = (d) => {
  let m;
  if ((m = d.match(/^(\d{2})\/(\d{2})\/(\d{4})$/))) return `${m[3]}-${m[1]}-${m[2]}`;
  if ((m = d.match(/^(\d{2})-([A-Za-z]{3})-(\d{2})$/))) return `20${m[3]}-${MON[m[2]]}-${m[1]}`;
  if ((m = d.match(/^(\d{4})\.(\d{2})\.(\d{2})$/))) return `${m[1]}-${m[2]}-${m[3]}`;
  return d;
};
const COUNTRY = {
  usa: "United States", "united states": "United States", us: "United States",
  in: "India", india: "India", china: "China", cn: "China",
  de: "Germany", germany: "Germany", uk: "United Kingdom", "united kingdom": "United Kingdom", gb: "United Kingdom",
};
const CANON = new Set(["United States", "India", "China", "Germany", "United Kingdom"]);

/* ============================ shared engine ============================ */
const RAW = [
  { id: 1, name: "  emma johnson ", email: "EMMA.JOHNSON@EXAMPLE.COM", date: "12/31/2024", country: "usa", amount: "1,200" },
  { id: 2, name: "E. Johnson", email: "emma.johnson@example.com", date: "31-Dec-24", country: "United States", amount: "1200" },
  { id: 3, name: "Priya Sharma", email: "priya.sharma@acme.com", date: "2024.11.05", country: "IN", amount: null },
  { id: 4, name: "PRIYA SHARMA", email: "priya.sharma@acme.com", date: "2024-11-05", country: "India", amount: "980" },
  { id: 5, name: "Wei Chen", email: "", date: "03/15/2024", country: "china", amount: "450" },
  { id: 6, name: "Lukas Meyer", email: "lukas.meyer@firma.de", date: "15-Mar-24", country: "DE", amount: "NaN" },
];
const RULES = [
  { k: "trim", label: "Trim & fix casing" },
  { k: "dates", label: "ISO 8601 dates" },
  { k: "country", label: "Standard countries" },
  { k: "missing", label: "Impute missing values" },
  { k: "dedupe", label: "Merge duplicates" },
];
const MEDIAN = 1090;
const NONE = { trim: false, dates: false, country: false, missing: false, dedupe: false };
const ALL = { trim: true, dates: true, country: true, missing: true, dedupe: true };
const stepActive = (n) => RULES.reduce((o, r, i) => ({ ...o, [r.k]: i < n }), {});

function buildRows(a) {
  let rows = RAW.map((r) => {
    const o = { id: r.id, chg: {} };
    o.name = a.trim ? titleCase(r.name) : r.name;
    o.email = a.trim ? r.email.trim().toLowerCase() : r.email;
    o.date = a.dates ? isoDate(r.date) : r.date;
    o.country = a.country ? COUNTRY[r.country.trim().toLowerCase()] || r.country : r.country;
    const bad = r.amount == null || r.amount === "NaN";
    if (a.missing) {
      o.amount = bad ? MEDIAN.toLocaleString() : Number(String(r.amount).replace(/,/g, "")).toLocaleString();
      if (bad || o.amount !== r.amount) o.chg.amount = 1;
    } else {
      o.amount = r.amount == null ? "—" : r.amount;
    }
    o.badAmount = !a.missing && bad;
    ["name", "email", "date", "country"].forEach((k) => { if (o[k] !== r[k]) o.chg[k] = 1; });
    return o;
  });
  if (a.dedupe) {
    const seen = new Set();
    rows = rows.filter((r) => {
      const key = r.email.trim().toLowerCase();
      if (!key) return true;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  return rows;
}
function countIssues(rows) {
  let n = 0;
  const seen = new Set();
  rows.forEach((r) => {
    if (r.name !== titleCase(r.name)) n++;
    if (!r.email || r.email !== r.email.trim().toLowerCase()) n++;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date)) n++;
    if (!CANON.has(r.country)) n++;
    if (r.badAmount) n++;
    const key = r.email.trim().toLowerCase();
    if (key) { if (seen.has(key)) n++; seen.add(key); }
  });
  return n;
}

const COLS = [["name", "Name"], ["email", "Email"], ["date", "Date"], ["country", "Country"], ["amount", "Amount"]];

const DataTable = ({ active, flashKey }) => {
  const rows = useMemo(() => buildRows(active), [active]);
  return (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead><tr>{COLS.map(([k, l]) => <th key={k}>{l}</th>)}</tr></thead>
        <tbody key={flashKey}>
          {rows.map((r) => (
            <tr key={r.id}>
              {COLS.map(([k]) => {
                const bad = (k === "email" && !r.email) || (k === "amount" && r.badAmount);
                return (
                  <td key={k} className={`${r.chg[k] ? styles.cellChanged : ""} ${bad ? styles.cellBad : ""}`}>
                    <span className={styles.mono}>{k === "email" && !r.email ? "(missing)" : r[k]}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Meter = ({ active }) => {
  const rows = useMemo(() => buildRows(active), [active]);
  const issues = countIssues(rows);
  const pct = Math.max(0, Math.round(100 * (1 - issues / (rows.length * 6))));
  return (
    <div className={styles.labFoot}>
      <div className={styles.meter}><div className={styles.meterFill} style={{ width: `${pct}%` }} /></div>
      <span className={styles.meterText}><strong>{pct}%</strong> clean · {issues} {issues === 1 ? "issue" : "issues"} left · {rows.length} of {RAW.length} records</span>
    </div>
  );
};

/* ============================ reusable bits ============================ */
const Head = ({ n, eyebrow, title, sub }) => (
  <motion.div className={styles.head} initial="hidden" whileInView="visible" viewport={VP} variants={fadeUp}>
    <div className={styles.brk}>
      <span className={styles.brkLine} />
      <span className={styles.brkLabel}><i>§ {n}</i>{eyebrow}</span>
      <span className={styles.brkLine} />
    </div>
    <h2>{title}</h2>
    {sub ? <p>{sub}</p> : null}
  </motion.div>
);

const CELLS = Array.from({ length: 56 });
const StreamBreak = ({ label }) => (
  <div className={styles.streamBand} role="separator" aria-label={label}>
    <div className={styles.container}>
      <div className={styles.stream} aria-hidden="true">
        {CELLS.map((_, i) => <i key={i} style={{ "--i": i }} />)}
      </div>
      <div className={styles.streamLabel}>{label}</div>
    </div>
  </div>
);

const Tbl = ({ cols, rows, caption }) => {
  const [ref, inView] = useReveal();
  return (
    <div ref={ref} data-in={inView} className={styles.tblWrap}>
      <table className={styles.tbl}>
        {caption ? <caption>{caption}</caption> : null}
        <thead><tr>{cols.map((c) => <th key={c.h} scope="col">{c.h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ "--i": i }}>
              {r.map((cell, j) => <td key={j} className={cols[j].c ? styles[cols[j].c] : ""}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Fig = ({ src, alt, w, h, caption, eager }) => (
  <figure className={styles.figure}>
    <img src={`${IMG}${src}`} alt={alt} width={w} height={h} loading={eager ? "eager" : "lazy"} decoding="async" />
    {caption ? <figcaption>{caption}</figcaption> : null}
  </figure>
);

/* ============================ 1. playground ============================ */
const Playground = () => {
  const [active, setActive] = useState(NONE);
  const allOn = Object.values(active).every(Boolean);
  return (
    <div className={styles.lab}>
      <div className={styles.labTop}>
        <div className={styles.chips}>
          {RULES.map((r) => (
            <button key={r.k} type="button" aria-pressed={active[r.k]} className={`${styles.chip} ${active[r.k] ? styles.chipOn : ""}`} onClick={() => setActive((p) => ({ ...p, [r.k]: !p[r.k] }))}>
              {active[r.k] ? <Check size={13} /> : <span className={styles.chipDot} />} {r.label}
            </button>
          ))}
        </div>
        <div className={styles.labActions}>
          <button type="button" className={styles.btnPrimary} onClick={() => setActive(allOn ? NONE : ALL)}>
            <Sparkles size={14} /> {allOn ? "Show raw data" : "Clean everything"}
          </button>
          <button type="button" className={styles.btnGhost} onClick={() => setActive(NONE)} aria-label="Reset"><RotateCcw size={14} /></button>
        </div>
      </div>
      <DataTable active={active} flashKey={JSON.stringify(active)} />
      <Meter active={active} />
      <p className={styles.note}>Sample data. A missing email can't be invented, so it stays flagged for review instead of being guessed.</p>
    </div>
  );
};

/* ============================ 2. tool workbench ============================ */
const TOOLS = [
  { id: "python", label: "Python · pandas", file: "clean_customers.py", lines: [
    { t: "import pandas as pd, numpy as np" },
    { t: "df = pd.read_csv('customers.csv')" },
    { t: "df['name'] = df['name'].str.strip().str.title(); df['email'] = df['email'].str.strip().str.lower()", s: 1 },
    { t: "df['date'] = pd.to_datetime(df['date'], format='mixed').dt.strftime('%Y-%m-%d')", s: 2 },
    { t: "df['country'] = df['country'].str.lower().map(COUNTRY_MAP)", s: 3 },
    { t: "df['amount'] = pd.to_numeric(df['amount'].astype(str).str.replace(',', ''), errors='coerce'); df['amount'] = df['amount'].fillna(df['amount'].median())", s: 4 },
    { t: "df = df.drop_duplicates(subset='email', keep='first')", s: 5 },
    { t: "df.to_csv('customers_clean.csv', index=False)" },
  ] },
  { id: "sql", label: "SQL", file: "customers_clean.sql", lines: [
    { t: "CREATE VIEW customers_clean AS" },
    { t: "SELECT" },
    { t: "  INITCAP(TRIM(name)) AS name, LOWER(TRIM(email)) AS email,", s: 1 },
    { t: "  CAST(TO_DATE(date_raw, 'MM/DD/YYYY') AS DATE) AS date,", s: 2 },
    { t: "  COALESCE(m.country_std, c.country) AS country,", s: 3 },
    { t: "  COALESCE(TRY_CAST(REPLACE(amount, ',', '') AS NUMERIC), med.v) AS amount", s: 4 },
    { t: "FROM customers c LEFT JOIN country_map m ON LOWER(c.country) = m.k" },
    { t: "QUALIFY ROW_NUMBER() OVER (PARTITION BY LOWER(TRIM(email)) ORDER BY updated_at DESC) = 1;", s: 5 },
  ] },
  { id: "r", label: "R · tidyverse", file: "clean_customers.R", lines: [
    { t: "library(tidyverse); library(lubridate); library(janitor)" },
    { t: "df <- read_csv('customers.csv') %>% clean_names()" },
    { t: "df <- df %>%" },
    { t: "  mutate(name = str_to_title(str_trim(name)), email = str_to_lower(email)) %>%", s: 1 },
    { t: "  mutate(date = parse_date_time(date, c('mdy', 'dmy', 'ymd'))) %>%", s: 2 },
    { t: "  mutate(country = recode(str_to_lower(country), !!!country_map)) %>%", s: 3 },
    { t: "  mutate(amount = parse_number(amount), amount = replace_na(amount, median(amount, na.rm = TRUE))) %>%", s: 4 },
    { t: "  distinct(email, .keep_all = TRUE)", s: 5 },
  ] },
  { id: "excel", label: "Excel · Power Query", file: "customers.xlsx", lines: [
    { t: "let" },
    { t: '  Source = Csv.Document(File.Contents("customers.csv"), [Delimiter=","]),' },
    { t: '  Trim = Table.TransformColumns(Source, {{"name", each Text.Proper(Text.Trim(_))}, {"email", Text.Lower}}),', s: 1 },
    { t: '  Dates = Table.TransformColumns(Trim, {{"date", each Date.From(_), type date}}),', s: 2 },
    { t: '  Country = Table.TransformColumns(Dates, {{"country", each CountryMap{[k=Text.Lower(_)]}[v]}}),', s: 3 },
    { t: '  Fill = Table.ReplaceValue(Country, null, MedianAmount, Replacer.ReplaceValue, {"amount"}),', s: 4 },
    { t: '  Dedup = Table.Distinct(Fill, {"email"})', s: 5 },
    { t: "in Dedup" },
  ] },
  { id: "powerbi", label: "Power BI", file: "customers.pbix", lines: [
    { t: "// Power BI ▸ Transform data ▸ Advanced Editor" },
    { t: 'let Source = Sql.Database("server", "crm"), customers = Source{[Schema="dbo", Item="customers"]}[Data],' },
    { t: '  Trim = Table.TransformColumns(customers, {{"name", Text.Proper}, {"email", Text.Lower}}),', s: 1 },
    { t: '  Dates = Table.TransformColumnTypes(Trim, {{"date", type date}}, "en-US"),', s: 2 },
    { t: '  Country = Table.ReplaceValue(Dates, "USA", "United States", Replacer.ReplaceText, {"country"}),', s: 3 },
    { t: '  Fill = Table.ReplaceValue(Country, null, MedianAmount, Replacer.ReplaceValue, {"amount"}),', s: 4 },
    { t: '  Dedup = Table.Distinct(Fill, {"email"}) in Dedup', s: 5 },
    { t: "// DAX ▸ Completeness % = DIVIDE(COUNTROWS(FILTER(Clean, NOT ISBLANK(Clean[email]))), COUNTROWS(Clean))" },
  ] },
  { id: "tableau", label: "Tableau Prep", file: "customers.tflx", lines: [
    { t: "Input     ▸ customers.csv" },
    { t: "Clean     ▸ name, email: Trim Spaces → Make Title Case / Lowercase", s: 1 },
    { t: "Clean     ▸ date: Change Data Type → Date (locale-aware)", s: 2 },
    { t: "Clean     ▸ country: Group Values → Common Characters + Manual", s: 3 },
    { t: "Clean     ▸ amount: Replace Nulls → Median · Remove NaN", s: 4 },
    { t: "Aggregate ▸ Group by email · keep first record", s: 5 },
    { t: "Output    ▸ customers_clean.hyper" },
  ] },
];

const Workbench = () => {
  const [toolId, setToolId] = useState("python");
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const tool = TOOLS.find((t) => t.id === toolId);
  const active = useMemo(() => stepActive(step), [step]);

  useEffect(() => {
    if (!playing) return undefined;
    const t = setInterval(() => setStep((p) => (p >= 5 ? 0 : p + 1)), 1800);
    return () => clearInterval(t);
  }, [playing]);

  const pick = (id) => { setToolId(id); setStep(0); setPlaying(true); };
  const go = (n) => { setStep(n); setPlaying(false); };

  return (
    <div className={styles.bench}>
      <div className={styles.benchTabs} role="tablist">
        {TOOLS.map((t) => (
          <button key={t.id} role="tab" aria-selected={t.id === toolId} type="button" className={`${styles.tab} ${t.id === toolId ? styles.tabOn : ""}`} onClick={() => pick(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className={styles.benchBody}>
        <div className={styles.codePane}>
          <div className={styles.codeBar}>
            <span className={styles.trafficDots}><i /><i /><i /></span>
            <span className={styles.mono}>{tool.file}</span>
            <button type="button" className={styles.ctl} onClick={() => setPlaying((p) => !p)} aria-label={playing ? "Pause" : "Play"}>
              {playing ? <Pause size={13} /> : <Play size={13} />}
            </button>
          </div>
          <div className={styles.codeLines} key={tool.id}>
            {tool.lines.map((l, n) => {
              const cls = l.s ? (l.s === step ? styles.lnActive : l.s < step ? styles.lnDone : styles.lnPending) : "";
              return (
                <button type="button" key={`${tool.id}-${n}`} className={`${styles.codeLine} ${cls}`} style={{ animationDelay: `${n * 70}ms` }} onClick={() => l.s && go(l.s)}>
                  <span className={styles.ln}>{n + 1}</span>
                  <code>{l.t}</code>
                  {l.s && l.s <= step ? <Check size={12} className={styles.lnCheck} /> : null}
                </button>
              );
            })}
          </div>
          <div className={styles.codeFoot}>
            <span>{step === 0 ? "Raw import" : `Step ${step}/5 · ${RULES[step - 1].label}`}</span>
            <span className={styles.stepDots}>
              {[0, 1, 2, 3, 4, 5].map((n) => <i key={n} className={n <= step ? styles.dotOn : ""} />)}
            </span>
          </div>
        </div>
        <div className={styles.outPane}>
          <div className={styles.outHead}>Output preview</div>
          <DataTable active={active} flashKey={`${toolId}-${step}`} />
          <Meter active={active} />
        </div>
      </div>
    </div>
  );
};

/* ============================ 3. pipeline ============================ */
const PROFILE = [["email", 12], ["phone", 31], ["order_date", 8], ["country", 19], ["amount", 5]];
const StageProfile = () => (
  <div className={styles.vizBox}>
    <div className={styles.vizHead}>Column profile · null rate</div>
    {PROFILE.map(([c, v], n) => (
      <div key={c} className={styles.barRow}>
        <span className={styles.mono}>{c}</span>
        <div className={styles.barTrack}><div className={styles.barFill} style={{ "--w": `${v * 2.6}%`, animationDelay: `${n * 130}ms` }} /></div>
        <span className={styles.mono}>{v}%</span>
      </div>
    ))}
    <div className={styles.vizFoot}>3 date formats · 4 country spellings · 2 duplicate keys detected</div>
  </div>
);

const VAL = [
  { id: "8492", s: "'active'", ok: true },
  { id: "null", s: "'UNKNOWN'", ok: false, why: "null id" },
  { id: "8493", s: "'pending'", ok: true },
  { id: "8494", s: "' '", ok: false, why: "empty status" },
  { id: "8495", s: "'active'", ok: true },
  { id: "8496", s: "'actve'", ok: false, why: "invalid enum" },
];
const StageValidate = () => {
  const [t, setT] = useState(0);
  useEffect(() => { const x = setInterval(() => setT((p) => p + 1), 1100); return () => clearInterval(x); }, []);
  const win = [0, 1, 2, 3].map((k) => VAL[(t + k) % VAL.length]);
  return (
    <div className={styles.vizBox}>
      <div className={styles.vizHead}>Validation rules · live record stream</div>
      {win.map((r, k) => (
        <div key={`${t}-${k}`} className={`${styles.valRow} ${r.ok ? styles.valOk : styles.valBad}`}>
          <span className={styles.mono}>{`{ id: ${r.id}, status: ${r.s} }`}</span>
          <span>{r.ok ? <Check size={14} /> : r.why}</span>
        </div>
      ))}
      <div className={styles.vizFoot}>NOT NULL · allowed values · regex · referential integrity</div>
    </div>
  );
};

const StageDedup = () => {
  const [m, setM] = useState(false);
  useEffect(() => { const x = setInterval(() => setM((p) => !p), 2300); return () => clearInterval(x); }, []);
  return (
    <div className={styles.vizBox}>
      <div className={styles.vizHead}>Record linkage · fuzzy matching</div>
      <div className={`${styles.dupStack} ${m ? styles.merged : ""}`}>
        <div className={styles.dupCard}>Emma Johnson · emma.johnson@example.com</div>
        <div className={styles.dupCard}>E. Johnson · emma.johnson@example.com</div>
        <div className={styles.dupCard}>Emma J. · ejohnson@gmail.com</div>
      </div>
      <div className={styles.dupMaster} data-on={m}><GitMerge size={14} /> Golden record · Emma Johnson <span>3 → 1</span></div>
      <div className={styles.vizFoot}>Match score 0.97 · Levenshtein + email key + survivorship rules</div>
    </div>
  );
};

const FORMATS = ["12/31/2024", "31-Dec-24", "2024.12.31", "Dec 31, 2024"];
const StageStandard = () => {
  const [i, setI] = useState(0);
  useEffect(() => { const x = setInterval(() => setI((p) => (p + 1) % FORMATS.length), 1400); return () => clearInterval(x); }, []);
  return (
    <div className={styles.vizBox}>
      <div className={styles.vizHead}>Standardization · formats, units, categories</div>
      <div className={styles.fmtRow}>
        {FORMATS.map((f, n) => <span key={f} className={`${styles.fmtChip} ${n === i ? styles.fmtOn : ""}`}>{f}</span>)}
      </div>
      <div className={styles.fmtArrow}>↓ ISO 8601</div>
      <div className={styles.fmtOut} key={i}>2024-12-31</div>
      <div className={styles.fmtRow}>
        <span className={styles.fmtChip}>USA · U.S. · United States → US</span>
        <span className={styles.fmtChip}>5000 g · 11 lb → 5 kg</span>
      </div>
    </div>
  );
};

const MISS = [12, 14, null, 18, 19, null, null, 24, 26];
const INTERP = MISS.map((v, i) => {
  if (v != null) return v;
  let a = i - 1; while (MISS[a] == null) a--;
  let b = i + 1; while (MISS[b] == null) b++;
  return MISS[a] + ((MISS[b] - MISS[a]) * (i - a)) / (b - a);
});
const MX = (i) => 24 + i * 34;
const MY = (v) => 128 - v * 4;
const StageMissing = () => {
  const [p, setP] = useState(false);
  useEffect(() => { const x = setInterval(() => setP((q) => !q), 2400); return () => clearInterval(x); }, []);
  return (
    <div className={styles.vizBox}>
      <div className={styles.vizHead}>Missing value imputation · {p ? "linear interpolation" : "gaps detected"}</div>
      <svg viewBox="0 0 320 140" className={styles.svg} role="img" aria-label="Time series with missing values filled by interpolation">
        <polyline points={INTERP.map((v, i) => `${MX(i)},${MY(v)}`).join(" ")} className={`${styles.line} ${p ? styles.lineOn : ""}`} />
        {MISS.map((v, i) => v != null
          ? <circle key={i} cx={MX(i)} cy={MY(v)} r="4" className={styles.dotKnown} />
          : <circle key={i} cx={MX(i)} cy={MY(INTERP[i])} r="5" className={p ? styles.dotImp : styles.dotGap} />)}
      </svg>
      <div className={styles.vizFoot}>Mean / median · KNN · regression · time-series interpolation</div>
    </div>
  );
};

const OUT = [48, 52, 50, 47, 53, 120, 51, 49, 50, -20, 52, 51];
const OY = (v) => 130 - (v + 30) * 0.75;
const StageOutliers = () => {
  const [p, setP] = useState(false);
  useEffect(() => { const x = setInterval(() => setP((q) => !q), 2600); return () => clearInterval(x); }, []);
  return (
    <div className={styles.vizBox}>
      <div className={styles.vizHead}>Outlier detection · IQR fences {p ? "· winsorized" : "· flagged"}</div>
      <svg viewBox="0 0 320 140" className={styles.svg} role="img" aria-label="Dot plot with outliers capped at IQR fences">
        <rect x="8" y={OY(70)} width="304" height={OY(30) - OY(70)} className={styles.band} />
        <line x1="8" x2="312" y1={OY(70)} y2={OY(70)} className={styles.fence} />
        <line x1="8" x2="312" y1={OY(30)} y2={OY(30)} className={styles.fence} />
        {OUT.map((v, i) => {
          const out = v > 70 || v < 30;
          const cap = v > 70 ? 70 : v < 30 ? 30 : v;
          return <circle key={i} cx={24 + i * 25} cy={OY(v)} r="4.5" className={out ? (p ? styles.dotImp : styles.dotOut) : styles.dotKnown} style={{ transform: `translateY(${p && out ? OY(cap) - OY(v) : 0}px)`, transition: "transform .9s ease, fill .5s" }} />;
        })}
      </svg>
      <div className={styles.vizFoot}>Z-score · IQR · isolation forest · domain rules (age over 120)</div>
    </div>
  );
};

const QS = [92, 94, 93, 96, 97, 95, 88, 93, 96, 98, 97, 98, 99, 99];
const QX = (i) => 14 + i * 22;
const QY = (v) => 150 - (v - 80) * 6;
const StageMonitor = () => (
  <div className={styles.vizBox}>
    <div className={styles.vizHead}>Data quality monitoring · daily score</div>
    <svg viewBox="0 0 320 150" className={styles.svg} role="img" aria-label="Data quality score over time with alert">
      <line x1="8" x2="312" y1={QY(95)} y2={QY(95)} className={styles.fence} />
      <polyline pathLength="1" points={QS.map((v, i) => `${QX(i)},${QY(v)}`).join(" ")} className={styles.qLine} />
      <circle cx={QX(6)} cy={QY(88)} r="5" className={styles.alertDot} />
    </svg>
    <div className={styles.vizFoot}>Alert at day 7: score 88, below the 95 threshold · rule failed → auto-ticket</div>
  </div>
);

const STAGES = [
  { id: "profile", title: "Data profiling", icon: <Search size={16} />, Visual: StageProfile, desc: "Before touching a value we profile every column: null rates, distinct counts, data types, pattern frequency, min/max and distribution. Profiling is the data quality assessment that tells us exactly what to fix.", points: ["Column and schema profiling", "Pattern and format discovery", "Cardinality and key analysis"] },
  { id: "validate", title: "Data validation", icon: <ShieldCheck size={16} />, Visual: StageValidate, desc: "Business rules become executable tests. Every record is checked for completeness, validity, referential integrity and allowed values, so bad rows are flagged with a reason instead of silently passing.", points: ["Rule-based data testing", "Allowed values, ranges, regex", "Great Expectations and dbt tests"] },
  { id: "dedupe", title: "Deduplication", icon: <Copy size={16} />, Visual: StageDedup, desc: "Exact and fuzzy duplicate detection with record linkage. Matching records are merged into a single golden record using survivorship rules you approve.", points: ["Exact and fuzzy matching", "Entity resolution and MDM", "Survivorship rules"] },
  { id: "standardize", title: "Standardization", icon: <Type size={16} />, Visual: StageStandard, desc: "Dates, phone numbers, addresses, currencies, units and category labels are mapped to one consistent standard so joins, groupings and dashboards stop breaking.", points: ["ISO 8601 dates and E.164 phones", "Address parsing and geocoding", "Unit and currency normalization"] },
  { id: "impute", title: "Missing values", icon: <Eraser size={16} />, Visual: StageMissing, desc: "We diagnose why data is missing (MCAR, MAR or MNAR) before choosing deletion, mean/median, KNN, regression or time-series interpolation, and we flag every imputed cell.", points: ["Missingness diagnostics", "Model-based imputation", "Imputed-value flags"] },
  { id: "outliers", title: "Outlier treatment", icon: <TrendingUp size={16} />, Visual: StageOutliers, desc: "Statistical and domain-aware outlier detection separates true anomalies from entry errors. Values are corrected, capped (winsorized) or retained with a flag, never deleted blindly.", points: ["IQR, z-score, isolation forest", "Winsorizing and capping", "Domain-rule checks"] },
  { id: "monitor", title: "Quality monitoring", icon: <Activity size={16} />, Visual: StageMonitor, desc: "Cleaning is not one-off. Scheduled checks score data quality daily and alert you when accuracy, completeness or freshness drifts, with data lineage back to the source.", points: ["Quality scorecards", "Drift and freshness alerts", "Lineage and audit trail"] },
];

const Pipeline = () => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => setI((p) => (p + 1) % STAGES.length), 5200);
    return () => clearInterval(t);
  }, [paused]);
  const S = STAGES[i];
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className={styles.rail}>
        <div className={styles.railTrack}><div className={styles.railFill} style={{ width: `${(i / (STAGES.length - 1)) * 100}%` }} /></div>
        {STAGES.map((s, n) => (
          <button key={s.id} type="button" className={`${styles.railBtn} ${n === i ? styles.railOn : ""} ${n < i ? styles.railDone : ""}`} onClick={() => setI(n)}>
            <span className={styles.railIcon}>{n < i ? <Check size={15} /> : s.icon}</span>
            <span className={styles.railLabel}>{s.title}</span>
          </button>
        ))}
      </div>
      <div className={styles.stagePanel} key={S.id}>
        <div className={styles.stageText}>
          <span className={styles.stageNum}>Stage {i + 1} of {STAGES.length}</span>
          <h3>{S.title}</h3>
          <p>{S.desc}</p>
          <ul className={styles.checkList}>{S.points.map((p) => <li key={p}><Check size={14} /> {p}</li>)}</ul>
        </div>
        <S.Visual />
      </div>
    </div>
  );
};

/* ============================ 4. quality gauges ============================ */
const DIMS = [
  { k: "Accuracy", b: 71, a: 99 }, { k: "Completeness", b: 64, a: 98 }, { k: "Consistency", b: 58, a: 99 },
  { k: "Validity", b: 69, a: 99 }, { k: "Uniqueness", b: 77, a: 100 }, { k: "Timeliness", b: 82, a: 97 },
];
const R = 34;
const C = 2 * Math.PI * R;
const GaugeRing = ({ label, value }) => {
  const n = useCount(value, true, 900);
  return (
    <div className={styles.gauge}>
      <svg viewBox="0 0 90 90" className={styles.gaugeSvg}>
        <circle cx="45" cy="45" r={R} className={styles.ringBg} />
        <circle cx="45" cy="45" r={R} className={styles.ringFg} strokeDasharray={`${(C * value) / 100} ${C}`} style={{ stroke: value >= 90 ? "var(--ok)" : value >= 70 ? "var(--warn)" : "var(--bad)" }} />
      </svg>
      <span className={styles.gaugeNum}>{n}%</span>
      <span className={styles.gaugeLabel}>{label}</span>
    </div>
  );
};
const Gauges = () => {
  const [after, setAfter] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  useEffect(() => { if (!inView) return undefined; const t = setTimeout(() => setAfter(true), 1600); return () => clearTimeout(t); }, [inView]);
  return (
    <div ref={ref}>
      <div className={styles.dimToggle}>
        <button type="button" className={`${styles.tab} ${!after ? styles.tabOn : ""}`} onClick={() => setAfter(false)}>Before cleaning</button>
        <button type="button" className={`${styles.tab} ${after ? styles.tabOn : ""}`} onClick={() => setAfter(true)}>After cleaning</button>
      </div>
      <div className={styles.gauges}>
        {DIMS.map((d) => <GaugeRing key={d.k} label={d.k} value={after ? d.a : d.b} />)}
      </div>
      <p className={styles.note}>Illustrative scorecard. Every project ships with your own measured before/after data quality scorecard.</p>
    </div>
  );
};

const Counter = ({ to, suffix = "", label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const n = useCount(to, inView);
  return (
    <div className={styles.stat} ref={ref}>
      <span className={styles.statNum}>{n}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

/* ============================ 5. static content ============================ */
const STACK = ["Python", "pandas", "NumPy", "scikit-learn", "R", "tidyverse", "janitor", "SQL", "PostgreSQL", "MySQL", "SQL Server", "Snowflake", "BigQuery", "Excel", "Power Query", "Power BI", "Tableau Prep", "Looker Studio", "SPSS", "Stata", "SAS", "OpenRefine", "dbt", "Great Expectations", "Apache Airflow", "Google Sheets"];

const ISSUES = [
  ["Duplicate records", "E. Johnson / Emma Johnson / JOHNSON, EMMA", "1 golden record", "Exact + fuzzy match, survivorship rules"],
  ["Missing values", "NULL · N/A · – · (blank)", "imputed + flagged", "Median, KNN, regression, interpolation"],
  ["Inconsistent date formats", "12/31/24 · 31-Dec · 2024.12.31", "2024-12-31", "Locale-aware parsing to ISO 8601"],
  ["Outliers and anomalies", "age = 212 · price = -5", "capped / corrected", "IQR fences, z-score, domain rules"],
  ["Typos and misspellings", "Londn · London · LON", "London", "Fuzzy matching, lookup tables"],
  ["Wrong data types", "'1,200' stored as text", "1200 (numeric)", "Type casting, locale-aware parsing"],
  ["Encoding errors", "MÃ¼ller · cafÃ©", "Müller · café", "UTF-8 / Latin-1 mojibake repair"],
  ["Whitespace and casing", "'  emma JOHNSON '", "Emma Johnson", "Trim, collapse spaces, proper case"],
  ["Mixed units and currencies", "5 kg · 5000 g · 11 lb", "5 kg", "Unit conversion tables, FX rates"],
  ["Orphan and broken keys", "order → customer_id 9912 (none)", "repaired / quarantined", "Referential integrity checks"],
  ["Schema drift", "column renamed · new field", "contract enforced", "Schema tests, data contracts"],
  ["Placeholder and invalid values", "test@test.com · 000-000-000", "validated / removed", "Regex, blocklists, validity rules"],
];

const DUP_COSTS = [
  "Inflated customer counts and wrong customer lifetime value",
  "Duplicate marketing, billing and support contacts",
  "Fragmented history, so no single view of the customer",
  "Machine learning models that learn from repeated rows and overstate accuracy",
];
const SIGNS = [
  "Reports from two systems disagree on the same number",
  "The same customer appears under several spellings",
  "Dashboards break when a new date or category format shows up",
  "Analysts spend most of their time fixing data before analysing it",
  "Email campaigns bounce or reach duplicate recipients",
  "Models perform well in testing but fail in production",
  "Join keys fail to match across sources",
  "Nobody can explain where a figure came from",
];

const DIM_TABLE = [
  ["Accuracy", "Values reflect the real-world truth", "Postal code exists for the stated city"],
  ["Completeness", "Required fields are populated", "Percentage of rows with a non-null email"],
  ["Consistency", "The same fact matches across systems", "CRM country equals billing country"],
  ["Validity", "Values follow format and domain rules", "Email matches pattern, age between 0 and 120"],
  ["Uniqueness", "Each entity appears once", "Zero duplicate customer IDs"],
  ["Timeliness", "Data is fresh enough for its use", "Latest record is under 24 hours old"],
];

const USES = [
  { short: "CRM and marketing", icon: <Users size={16} />, title: "CRM and marketing data cleaning", desc: "Deduplicate contacts, standardize names, emails and phone numbers, and merge accounts so segmentation, email deliverability and lead scoring stop leaking revenue.", bullets: ["Contact and account deduplication", "Email syntax and domain validation", "Phone normalization to E.164", "Address standardization and geocoding"], tools: "Python, SQL, Power Query, HubSpot and Salesforce exports" },
  { short: "Survey and research", icon: <ClipboardList size={16} />, title: "Survey and research data cleaning", desc: "Straight-lining, speeders, reverse-coded items, missing responses and Likert scale errors are fixed and documented, ready for SPSS, Stata, R or Python analysis.", bullets: ["Likert recoding and reverse-scored items", "Attention-check and speeder removal", "Missing data diagnostics and imputation", "Codebook and variable label cleanup"], tools: "SPSS, Stata, R, Python, Excel" },
  { short: "Healthcare", icon: <HeartPulse size={16} />, title: "Healthcare and clinical data", desc: "Patient record matching, ICD and CPT code validation, date and unit harmonization, with privacy-aware handling and a full audit trail.", bullets: ["Patient record linkage", "ICD-10 and CPT code validation", "Unit and reference-range harmonization", "De-identification support"], tools: "SQL, Python, R, SAS" },
  { short: "Finance", icon: <Briefcase size={16} />, title: "Finance and accounting data", desc: "Ledger reconciliation, currency and date normalization, duplicate transactions and chart-of-accounts mapping for trustworthy reporting.", bullets: ["Duplicate transaction detection", "Ledger and bank reconciliation", "Currency and FX normalization", "Chart-of-accounts mapping"], tools: "Excel, Power BI, SQL, Python" },
  { short: "E-commerce", icon: <ShoppingBag size={16} />, title: "E-commerce and retail data", desc: "Product catalog cleanup, SKU matching, attribute standardization, price and inventory anomalies, and order data consistency.", bullets: ["SKU and GTIN matching", "Product attribute standardization", "Price and inventory anomaly checks", "Order and returns data consistency"], tools: "Python, SQL, Tableau Prep, Google Sheets" },
  { short: "Machine learning", icon: <Brain size={16} />, title: "Machine learning datasets", desc: "Data preprocessing for ML: leakage-safe imputation, outlier handling, encoding checks, label noise review and train/test hygiene.", bullets: ["Leakage-safe imputation in pipelines", "Duplicate rows across train and test", "Label noise review", "Categorical encoding checks"], tools: "Python, scikit-learn, R, dbt" },
  { short: "Supply chain", icon: <Truck size={16} />, title: "Logistics and supply chain", desc: "Clean shipment, carrier, SKU and location data. Fix timestamps, units and geocodes so ETAs and cost analytics are reliable.", bullets: ["Timestamp and time zone fixes", "Geocoding and address repair", "Carrier and SKU master data", "Unit of measure normalization"], tools: "SQL, Python, Power BI, Excel" },
  { short: "Data migration", icon: <Database size={16} />, title: "Data migration and warehouse loads", desc: "Cleanse and reconcile legacy systems before ETL, so your data warehouse, data lake or ERP migration starts clean.", bullets: ["Legacy system cleanup", "Source-to-target reconciliation", "Referential integrity repair", "ETL-ready staging tables"], tools: "SQL, dbt, Airflow, Python" },
];

const UseCases = () => {
  const [i, setI] = useState(0);
  const u = USES[i];
  return (
    <div className={styles.vtabs}>
      <ul className={styles.vlist} role="tablist">
        {USES.map((x, n) => (
          <li key={x.short} role="presentation">
            <button type="button" role="tab" aria-selected={n === i} className={`${styles.vbtn} ${n === i ? styles.vbtnOn : ""}`} onClick={() => setI(n)}>
              <span className={styles.vicon}>{x.icon}</span>{x.short}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.vpanel} key={u.title}>
        <h3>{u.title}</h3>
        <p>{u.desc}</p>
        <h4>Typical work</h4>
        <ul className={styles.ul}>{u.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        <p className={styles.toolsLine}><strong>Tools:</strong> {u.tools}</p>
      </div>
    </div>
  );
};

const PROCESS = [
  { t: "Data audit", d: "We profile your sources and quantify the problem: nulls, duplicates, format drift and rule violations." },
  { t: "Cleaning rules", d: "We agree on rules for matching, imputation, standardization and what must never be changed." },
  { t: "Build and run", d: "Python, SQL, R or Power Query pipelines clean the data in a reproducible, versioned way." },
  { t: "Validate", d: "Automated tests and sample reviews prove the data meets your quality thresholds." },
  { t: "Deliver", d: "Clean data, scripts, log, dictionary and scorecard are handed over with a walkthrough." },
  { t: "Monitor", d: "Optional scheduled checks keep data quality from drifting after cleanup." },
];
const Timeline = () => {
  const [ref, inView] = useReveal();
  return (
    <ol className={styles.timeline} ref={ref} data-in={inView}>
      {PROCESS.map((s, i) => (
        <li key={s.t} style={{ "--i": i }}>
          <span className={styles.tlNum}>{i + 1}</span>
          <div><h3>{s.t}</h3><p>{s.d}</p></div>
        </li>
      ))}
    </ol>
  );
};

const DELIVERABLES = [
  ["Clean, analysis-ready dataset", "CSV, Excel, SQL tables, Parquet, Power BI or Tableau model", "Ready for dashboards, reports and models"],
  ["Cleaning log and audit trail", "Spreadsheet or table", "Every change recorded: what, why, how many rows"],
  ["Reproducible scripts", "Python, SQL, R or Power Query", "Rerun on next month's data without rework"],
  ["Data quality scorecard", "PDF or dashboard", "Accuracy, completeness, consistency, validity, uniqueness, timeliness"],
  ["Data dictionary", "Document or sheet", "Column definitions, types, rules and allowed values"],
  ["Confidential handling", "NDA-friendly workflow", "Minimal access and secure transfer for sensitive data"],
];

const GUIDE = [
  { h: "What is data cleaning?", p: "Data cleaning (also called data cleansing or data scrubbing) is the process of detecting and correcting inaccurate, incomplete, duplicated or inconsistent records so a dataset is accurate enough for analysis, reporting and machine learning. It is the most time-consuming part of data preparation, and the part that decides whether dashboards, forecasts and models can be trusted. Garbage in, garbage out." },
  { h: "Data cleaning for machine learning", p: "Model quality is capped by data quality. Good data preprocessing handles missing values without leaking information from the test set, treats outliers according to domain knowledge, standardizes categorical labels, removes duplicate rows that inflate accuracy, and reviews label noise. We build these steps inside reproducible pipelines so training and production data are cleaned identically." },
];
const TERMS = [
  ["Data cleaning / cleansing", "Fix errors, duplicates, missing values and inconsistencies", "Analytics and BI reporting"],
  ["Data scrubbing", "Deeper, systematic pass including corrupt and legacy records", "Migrations and warehouse loads"],
  ["Data wrangling / munging", "Cleaning plus reshaping, joining and enriching", "Day-to-day analyst workflow"],
  ["Data preprocessing", "Cleaning plus encoding, scaling and splitting", "Machine learning"],
  ["Data transformation", "Changing structure or format between systems", "ETL and ELT pipelines"],
];
const STEPS7 = [
  ["Data profiling", "Measure null rates, types, patterns and distributions."],
  ["Data validation", "Test records against business and integrity rules."],
  ["Deduplication", "Remove exact and fuzzy duplicates and merge to a golden record."],
  ["Standardization", "Normalize dates, units, addresses and categories."],
  ["Missing value imputation", "Fill or flag gaps using the right method."],
  ["Outlier treatment", "Correct, cap or keep anomalies with a flag."],
  ["Monitoring", "Keep a data quality scorecard and alerts running."],
];
const IMPUTE = [
  ["Listwise deletion", "Few rows missing, completely at random", "Loses data and can bias results"],
  ["Mean / median", "Numeric column, low missingness", "Shrinks variance, hides relationships"],
  ["Mode", "Categorical column", "Over-represents the most common value"],
  ["KNN imputation", "Correlated features, moderate missingness", "Slow on very large data, needs scaling"],
  ["Regression / MICE", "Missing at random with strong predictors", "Model assumptions, leakage if done before the split"],
  ["Interpolation / forward fill", "Time series with short gaps", "Wrong for long gaps or abrupt changes"],
];
const TOOLCMP = [
  ["Excel · Power Query", "Small to mid-size files, business users", "Up to about 1M rows", "Yes, refreshable steps", "Low"],
  ["Power BI", "Cleaning inside the reporting model", "Large with a gateway or import", "Yes, query steps", "Low to medium"],
  ["Python · pandas", "Complex logic, fuzzy matching, ML", "Millions of rows, more with Polars or Spark", "Yes, versioned code", "Medium"],
  ["SQL", "Data already in a warehouse", "Billions of rows", "Yes, views and dbt models", "Medium"],
  ["R · tidyverse", "Statistics, surveys, research", "Millions of rows", "Yes, scripts and Quarto", "Medium"],
  ["Tableau Prep", "Visual, no-code flows", "Mid-size", "Yes, saved flows", "Low"],
  ["OpenRefine", "One-off messy text clustering", "Up to a few hundred thousand rows", "Partial, operation history", "Low"],
];

const HOWTO = [
  { tool: "Excel", steps: ["Convert the range to a Table and load it into Power Query", "Trim, Clean and Proper-case text columns", "Remove duplicates on a business key (email, SKU, ID)", "Set data types, split columns, replace errors and blanks", "Add Data Validation lists to stop bad entry at the source"], code: '=TRIM(CLEAN(A2))\n=PROPER(A2)\n=IFERROR(VALUE(SUBSTITUTE(C2,",","")),"")' },
  { tool: "Power BI", steps: ["Open Transform data and turn on Column quality, distribution and profile", "Fix types, replace errors, fill down, trim and standardize values", "Remove duplicates and merge queries on clean keys", "Keep transformations in Power Query, not DAX", "Add DAX data quality measures (completeness %, duplicate rate)"], code: "Completeness % =\nDIVIDE(\n  COUNTROWS(FILTER(Clean, NOT ISBLANK(Clean[email]))),\n  COUNTROWS(Clean)\n)" },
  { tool: "Python", steps: ["df.info(), df.isna().mean() and df.describe() to profile", "str.strip(), str.lower(), pd.to_datetime(errors='coerce')", "drop_duplicates() and fuzzy matching with rapidfuzz", "SimpleImputer or KNNImputer inside the cross-validation pipeline", "Great Expectations or pandera tests to lock quality in"], code: "df = (df.assign(email=df.email.str.strip().str.lower())\n        .drop_duplicates('email'))" },
  { tool: "SQL", steps: ["TRIM, LOWER, REPLACE and CAST to normalize text and types", "COALESCE and NULLIF to handle blanks and placeholders", "ROW_NUMBER() OVER (PARTITION BY key) to deduplicate", "Use CTEs and views so cleaning is repeatable", "Add constraints and dbt tests so bad data cannot return"], code: "SELECT * FROM (\n  SELECT *, ROW_NUMBER() OVER (\n    PARTITION BY LOWER(email) ORDER BY updated_at DESC) AS rn\n  FROM customers) t\nWHERE rn = 1;" },
  { tool: "R", steps: ["janitor::clean_names(), remove_empty(), get_dupes()", "stringr and lubridate for text and date parsing", "tidyr::replace_na() and naniar for missingness patterns", "dplyr::distinct() and recode() for dedupe and categories", "Document the steps in an R Markdown or Quarto report"], code: "df %>%\n  janitor::clean_names() %>%\n  distinct(email, .keep_all = TRUE)" },
  { tool: "Tableau Prep", steps: ["Add a Clean step and inspect the profile cards", "Group and Replace to fix spelling variants", "Change data types and split fields", "Join or union sources on standardized keys", "Output a clean .hyper extract for dashboards"], code: "Clean step ▸ Group Values ▸ Common Characters\nClean step ▸ Replace Nulls ▸ Median" },
];
const HowTo = () => {
  const [i, setI] = useState(0);
  const h = HOWTO[i];
  return (
    <div>
      <div className={styles.htabs} role="tablist">
        {HOWTO.map((x, n) => (
          <button key={x.tool} type="button" role="tab" aria-selected={n === i} className={`${styles.tab} ${n === i ? styles.tabOn : ""}`} onClick={() => setI(n)}>{x.tool}</button>
        ))}
      </div>
      <div className={styles.howBody} key={h.tool}>
        <ol className={styles.olist}>{h.steps.map((s) => <li key={s}>{s}</li>)}</ol>
        <pre className={styles.pre}><code>{h.code}</code></pre>
      </div>
    </div>
  );
};

const FAQS = [
  { q: "What are data cleaning services?", a: "Data cleaning services find and fix errors in your datasets: duplicates, missing values, inconsistent formats, typos, outliers and invalid entries. The result is a clean, validated, analysis-ready dataset with a log of every change, so your reports, dashboards and machine learning models run on trustworthy data." },
  { q: "What is the difference between data cleaning and data scrubbing?", a: "They overlap heavily. Data cleaning is the general term for correcting data errors. Data scrubbing usually describes a more thorough, systematic pass, for example before a data migration or warehouse load. We treat both as one workflow: profile, validate, deduplicate, standardize, impute and monitor." },
  { q: "Which tools do you use to clean data?", a: "We work in the tool your team already uses: Python (pandas, NumPy, scikit-learn), SQL (PostgreSQL, MySQL, SQL Server, Snowflake, BigQuery), R (tidyverse, janitor), Excel and Power Query, Power BI, Tableau Prep, SPSS, Stata and SAS, plus dbt and Great Expectations for automated data quality tests." },
  { q: "Can you clean data in Excel and Power BI without changing our process?", a: "Yes. We can deliver Power Query steps that refresh automatically in Excel and Power BI, so cleaning reruns when new data arrives. If you prefer code, we hand over Python, SQL or R scripts instead." },
  { q: "How do you handle missing values and outliers?", a: "We first diagnose why values are missing, then choose deletion, mean or median, KNN, regression or time-series interpolation. Imputed values are flagged. Outliers are reviewed against domain rules and corrected, capped or kept with a flag, never deleted blindly." },
  { q: "Will you change or delete my original data?", a: "No. We work on copies, keep the raw data untouched and record every transformation in a cleaning log, so each change can be audited, explained or reversed." },
  { q: "How long does data cleaning take and how is it priced?", a: "It depends on data volume, number of sources and how messy the data is. A free data quality audit gives you a clear scope, timeline and fixed quote before any cleaning starts." },
  { q: "Do you offer ongoing data quality monitoring?", a: "Yes. We can schedule automated checks for completeness, validity, uniqueness and freshness, with alerts and a quality scorecard, so data does not degrade again after cleanup." },
];

/* ============================ page ============================ */
const DataCleaningPage = () => {
  const [open, setOpen] = useState(0);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <PageLayout>
      <SEO
        title="Data Cleaning Services & Data Scrubbing | Scape Technologies"
        description="Data cleaning, data cleansing and data scrubbing services in Python, SQL, R, Excel, Power BI and Tableau Prep. Deduplication, validation, imputation and data quality monitoring."
        path="/services/data-cleaning"
        schema={buildServiceSchema({
          name: "Data Cleaning Services",
          description: "Data cleaning, data cleansing and data scrubbing: profiling, validation, deduplication, standardization, missing value imputation, outlier treatment and quality monitoring.",
          path: "/services/data-cleaning",
        })}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.container}>
            <motion.div className={styles.heroInner} initial="hidden" animate="visible" variants={fadeUp}>
              <span className={styles.badge}><Sparkles size={13} /> Data Cleaning · Data Cleansing · Data Scrubbing</span>
              <h1 className={styles.heroTitle}>Data Cleaning Services That Turn Messy Data Into Analytics-Ready Data</h1>
              <p className={styles.heroSub}>
                We profile, validate, deduplicate, standardize and impute your datasets in Python, SQL, R, Excel Power Query,
                Power BI and Tableau Prep, so dashboards, forecasts and machine learning models run on data you can trust.
              </p>
              <div className={styles.heroCta}>
                <Link to="/contact" className={styles.btnPrimary}>Get a Free Data Quality Audit <ArrowRight size={16} /></Link>
                <a href="#demo" className={styles.btnSecondary}>Try the live demo</a>
              </div>
              <div className={styles.pills}>
                {["Python · pandas", "SQL", "R · tidyverse", "Excel · Power Query", "Power BI", "Tableau Prep", "dbt", "Great Expectations"].map((p, i) => (
                  <span key={p} className={styles.pill} style={{ animationDelay: `${i * 90}ms` }}>{p}</span>
                ))}
              </div>
            </motion.div>
            <Fig eager src="data-cleaning-pipeline.svg" w={1000} h={400}
              alt="Diagram of messy raw customer data flowing through profiling, validation, deduplication and standardization into a clean dataset"
              caption="Five messy rows in, three clean rows out: duplicates merged, dates in ISO 8601, countries as ISO 3166 codes." />
          </div>
        </section>

        {/* STATS */}
        <section className={styles.statsBand}>
          <div className={`${styles.container} ${styles.statGrid}`}>
            <Counter to={12} label="Data issue types fixed" />
            <Counter to={6} label="Toolchains supported" />
            <Counter to={7} label="Cleaning pipeline stages" />
            <Counter to={100} suffix="%" label="Changes audit-logged" />
          </div>
        </section>

        {/* 01 DEMO */}
        <section className={styles.section} id="demo">
          <div className={styles.container}>
            <Head n="01" eyebrow="Live demo" title="Watch dirty data get cleaned" sub="Switch the cleaning rules on one by one. Highlighted cells show exactly what changed, and the quality score updates with every rule." />
            <Playground />
          </div>
        </section>

        <StreamBreak label="raw → clean" />

        {/* 02 WORKBENCH */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Head n="02" eyebrow="Every tool" title="Data cleaning in Python, SQL, R, Excel, Power BI and Tableau Prep" sub="The same dirty dataset, cleaned in five steps in each tool. Pick a stack and watch the code run line by line. Click any line to jump to that step." />
            <Workbench />
          </div>
        </section>

        {/* 03 PIPELINE */}
        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <Head n="03" eyebrow="The pipeline" title="A 7-stage data cleaning and data quality pipeline" sub="From data profiling to continuous monitoring. Hover to pause, or click any stage." />
            <Pipeline />
          </div>
        </section>

        <StreamBreak label="validated · deduplicated · standardized" />

        {/* 04 ISSUES */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Head n="04" eyebrow="What we fix" title="12 data quality problems we find and fix" sub="The most common data errors, how they look in real datasets, and the technique we use for each." />
            <Tbl
              caption="Common data quality issues, how they look, and how they are fixed"
              cols={[{ h: "Data problem", c: "tdStrong" }, { h: "Dirty example", c: "tdBad" }, { h: "Clean result", c: "tdGood" }, { h: "Typical method" }]}
              rows={ISSUES}
            />
            <div className={styles.split}>
              <div>
                <h3>Duplicate records cost more than they look</h3>
                <p>Duplicates are the most expensive data quality problem because they hide inside totals. One customer under four spellings becomes four customers in your reports.</p>
                <ul className={styles.ul}>{DUP_COSTS.map((c) => <li key={c}>{c}</li>)}</ul>
              </div>
              <Fig src="entity-resolution-golden-record.svg" w={900} h={420}
                alt="Four duplicate customer records with different spellings merged into one golden record with a 0.97 match score"
                caption="Record linkage: four fuzzy-matched records become one golden record." />
            </div>
            <h3 className={styles.subTitle}>Signs your data needs cleaning</h3>
            <ul className={styles.signs}>{SIGNS.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </section>

        {/* 05 QUALITY */}
        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <Head n="05" eyebrow="Data quality" title="Measured on the six data quality dimensions" sub="Accuracy, completeness, consistency, validity, uniqueness and timeliness, scored before and after cleaning." />
            <Gauges />
            <Tbl
              caption="The six data quality dimensions and an example check for each"
              cols={[{ h: "Dimension", c: "tdStrong" }, { h: "What it measures" }, { h: "Example check" }]}
              rows={DIM_TABLE}
            />
            <Fig src="data-quality-scorecard-dashboard.svg" w={900} h={460}
              alt="Data quality scorecard dashboard showing completeness, uniqueness and validity improving and rule failures dropping to near zero"
              caption="The scorecard you receive: quality score over time, failed rules and before/after dimensions." />
          </div>
        </section>

        {/* STACK MARQUEE */}
        <section className={styles.marqueeSection} aria-label="Data tools we use">
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {[...STACK, ...STACK].map((s, i) => <span key={`${s}-${i}`} className={styles.stackItem}>{s}</span>)}
            </div>
          </div>
        </section>

        {/* 06 USE CASES */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Head n="06" eyebrow="Use cases" title="Data cleaning for CRM, surveys, healthcare, finance, e-commerce and machine learning" sub="Choose an industry to see the typical work." />
            <UseCases />
          </div>
        </section>

        <StreamBreak label="from audit to monitored" />

        {/* 07 PROCESS */}
        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <Head n="07" eyebrow="How we work" title="Our data cleaning process" />
            <Timeline />
            <Fig src="data-lineage-clean-layer.svg" w={1000} h={380}
              alt="Data lineage diagram showing sources, raw staging, a clean layer with quality tests, and Power BI, Tableau, Excel and ML consumers"
              caption="Where cleaning sits in your stack: sources stay untouched and every consumer reads from the clean layer." />
          </div>
        </section>

        {/* 08 DELIVERABLES */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Head n="08" eyebrow="What you receive" title="Deliverables" />
            <Tbl
              caption="Project deliverables, formats and why each matters"
              cols={[{ h: "Deliverable", c: "tdStrong" }, { h: "Format" }, { h: "Why it matters" }]}
              rows={DELIVERABLES}
            />
          </div>
        </section>

        {/* 09 GUIDE */}
        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <Head n="09" eyebrow="Guide" title="Data cleaning explained: methods, steps and tools" />
            <div className={styles.prose}>
              {GUIDE.map((g) => (
                <article key={g.h}><h3>{g.h}</h3><p>{g.p}</p></article>
              ))}
              <article>
                <h3>Data cleaning vs data cleansing vs data scrubbing vs data wrangling</h3>
                <Tbl caption="How related data preparation terms differ" cols={[{ h: "Term", c: "tdStrong" }, { h: "Scope" }, { h: "Typical use" }]} rows={TERMS} />
              </article>
              <article>
                <h3>The 7 steps of the data cleaning process</h3>
                <ol className={styles.olist}>
                  {STEPS7.map(([a, b]) => <li key={a}><strong>{a}.</strong> {b}</li>)}
                </ol>
              </article>
              <article>
                <h3>How to handle missing values: methods compared</h3>
                <Tbl caption="Missing value imputation methods" cols={[{ h: "Method", c: "tdStrong" }, { h: "Best when" }, { h: "Watch out for" }]} rows={IMPUTE} />
              </article>
              <article>
                <h3>Which data cleaning tool should you use?</h3>
                <Tbl caption="Data cleaning tools compared" cols={[{ h: "Tool", c: "tdStrong" }, { h: "Best for" }, { h: "Scale" }, { h: "Repeatable" }, { h: "Learning curve" }]} rows={TOOLCMP} />
              </article>
            </div>
          </div>
        </section>

        {/* 10 HOW-TO */}
        <section className={styles.section}>
          <div className={styles.container}>
            <Head n="10" eyebrow="How to" title="How to clean data in Excel, Power BI, Python, SQL, R and Tableau Prep" sub="The core steps and one working snippet for each tool." />
            <HowTo />
          </div>
        </section>

        {/* 11 FAQ */}
        <section className={`${styles.section} ${styles.alt}`}>
          <div className={`${styles.container} ${styles.faqWrap}`}>
            <Head n="11" eyebrow="FAQ" title="Data cleaning questions, answered" />
            {FAQS.map((f, i) => (
              <div key={f.q} className={`${styles.faqItem} ${open === i ? styles.faqOpen : ""}`}>
                <button type="button" className={styles.faqQ} onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  <span>{f.q}</span>{open === i ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                <div className={styles.faqA}><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </section>

        <StreamBreak label="clean data, ready for decisions" />

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <motion.div initial="hidden" whileInView="visible" viewport={VP} variants={fadeUp}>
              <h2>Stop analysing dirty data</h2>
              <p>Send us a sample of your messiest dataset. We'll return a free data quality audit with the problems found, the fix plan and a fixed quote.</p>
              <Link to="/contact" className={styles.btnPrimary}>Get Your Free Data Quality Audit <ArrowRight size={16} /></Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default DataCleaningPage;
