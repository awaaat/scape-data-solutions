// src/pages/Order/OrderPage.jsx
// On-site order wizard for the parent site. Same backend as the thesis wizard (Django `orders` app, site "main"):
// a draft is created on the first step and saved on every step, files upload to the draft, and submit sends the
// admin + client emails with an SCP-XXXXXX reference. Every step is tailored to the service being ordered:
// its own deliverables, its category's data sources, and an academic or business flow.
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Clock, Lock, Mail, Paperclip, ShieldCheck, X } from "lucide-react";
import SEO from "../../components/SEO/SEO";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { SERVICE_CARDS, categories } from "../../data/servicesData";
import { nameFromSlug, isAcademicPath } from "../../components/OrderPush/orderLinks";
import {
  getCatalog, getOrder, startOrder, saveOrder, submitOrder, uploadOrderFile, deleteOrderFile,
  loadToken, saveToken, clearToken, attribution,
} from "../../services/ordersApi";
import ServiceSearch from "../../components/ServiceSearch/ServiceSearch";
import s from "./OrderPage.module.css";

const decode = (t = "") => t.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
const slugOf = (href = "") => href.replace(/^\/services\//, "").replace(/\/$/, "");
const today = () => new Date().toISOString().slice(0, 10);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CAT = { academic: "Academic & Research", analytics: "Advanced Analytics", finance: "Finance & Risk", healthcare: "Healthcare & Life Sciences",
  manufacturing: "Manufacturing & Supply Chain", retail: "Retail & E-Commerce", "assignment-help": "Assignment & Software Help",
  "academic-writing": "Academic Writing & Publishing", "research-methods": "Statistical & Research Methods", "ai-ml": "AI & Machine Learning",
  "data-engineering": "Data Engineering & BI Tools" };
const ACADEMIC_CATS = new Set(["academic", "assignment-help", "academic-writing", "research-methods"]);
const CORE = new Set(["name", "email", "phone", "country", "academic_level", "data_status", "software", "deadline_window", "deadline", "topic", "details"]);
const LAST = 6; // index of the review step; every flow has 7 steps (0 service, 1 contact, 2 scope, 3 situation, 4 timeline, 5 details, 6 review)

const DEFAULT_LIMITS = { max_files: 10, max_file_mb: 25, allowed_extensions: ["sav", "zsav", "por", "csv", "tsv", "xlsx", "xls", "xlsm", "dta", "rdata", "rds", "sas7bdat", "omv", "jasp", "zip", "pdf", "doc", "docx", "txt", "rtf", "pptx", "json", "png", "jpg", "jpeg"] };

const OPT = {
  level: ["Undergraduate", "Masters", "PhD", "Journal paper / research", "Other"],
  dataStatus: ["I have my dataset ready", "Data collected, needs cleaning", "I only have output or results", "I haven't collected data yet", "Not sure"],
  software: ["SPSS", "Excel", "R", "Stata", "Python", "AMOS / SmartPLS", "Not sure"],
  deadlineAcad: ["Within 48 hours", "Within a week", "1-2 weeks", "2-4 weeks", "More than a month", "Flexible / not sure"],
  deadlineBiz: ["As soon as possible", "Within 2 weeks", "Within a month", "1-3 months", "Flexible"],
  budget: ["Under $500", "$500 - $2,000", "$2,000 - $10,000", "$10,000+", "Not sure yet"],
  size: ["Just me", "2-10", "11-50", "51-200", "200+"],
  tools: ["Excel / Google Sheets", "Power BI", "Tableau", "Python or R", "SQL database", "Looker / Data Studio", "Nothing yet"],
};
// Where the data for THIS kind of service usually lives.
const DATA_SRC = {
  healthcare: ["EHR / EMR export", "Claims or billing data", "Clinical or trial data", "Survey or registry data", "Spreadsheets / CSV", "Not collected yet"],
  finance: ["Market or price data", "Transactions or ledgers", "Credit or loan data", "Spreadsheets / CSV", "Database / warehouse", "Not collected yet"],
  retail: ["POS / sales data", "E-commerce platform", "CRM or loyalty data", "Web / app analytics", "Spreadsheets / CSV", "Not collected yet"],
  manufacturing: ["ERP / MES data", "Sensor / IoT data", "Logistics or TMS data", "Quality records", "Spreadsheets / CSV", "Not collected yet"],
  analytics: ["Spreadsheets / CSV", "Database / warehouse", "CRM or marketing platforms", "Web / app analytics", "Not collected yet"],
  "ai-ml": ["Labelled dataset", "Raw / unlabelled data", "Documents or text", "Database or API", "Not collected yet"],
  "data-engineering": ["Several databases", "SaaS tools / APIs", "Spreadsheets / files", "Streaming / events", "Not sure"],
};
const DELIV = {
  academic: ["Test selection and analysis", "Tables and charts (APA)", "Interpretation of results", "Written results chapter", "Syntax / scripts", "Revisions after feedback"],
  business: ["Data audit", "Analysis and findings", "Dashboard or report", "Model or algorithm", "Documentation", "Handover and training"],
};

function buildSteps(svc, acad) {
  const name = svc?.name || "your service";
  const deliverables = (svc?.items?.length ? svc.items : acad ? DELIV.academic : DELIV.business).slice(0, 15).map((x) => x.slice(0, 100));
  const deadlineOpts = acad ? OPT.deadlineAcad : OPT.deadlineBiz;
  return [
    { key: "service", title: "Which service do you want to order?", subtitle: "Pick the closest match. You can add detail in a moment.",
      fields: [{ key: "service", type: "service", required: true }] },
    { key: "contact", title: `Where should we send your ${name} quote?`, subtitle: "We reply within 24 hours, usually sooner. Your details stay confidential.",
      fields: [
        { key: "name", label: "Full name", required: true, autoComplete: "name", placeholder: "Your full name" },
        { key: "email", label: "Email", type: "email", required: true, autoComplete: "email", placeholder: "you@email.com" },
        { key: "phone", label: "WhatsApp / phone", type: "tel", autoComplete: "tel", placeholder: "+254 700 000 000", hint: "Optional. Include the country code." },
        { key: "country", label: "Country", autoComplete: "country-name", placeholder: "e.g. Kenya" },
      ] },
    { key: "scope", title: `What should ${name} cover?`, subtitle: "Tick everything you want included in this order.",
      fields: [
        { key: "deliverables_wanted", label: "Included in this order", type: "multi", options: deliverables },
        ...(acad ? [] : [{ key: "data_source", label: "Where does your data live?", type: "chips", options: DATA_SRC[svc?.cat] || DATA_SRC.analytics }]),
      ] },
    acad
      ? { key: "situation", title: `Where are you with ${name}?`, subtitle: "This tells us which approach and tools to quote for.",
          fields: [
            { key: "academic_level", label: "Academic level", type: "chips", options: OPT.level },
            { key: "data_status", label: "Data status", type: "chips", options: OPT.dataStatus },
            { key: "software", label: "Software you use or need", type: "chips", options: OPT.software },
          ] }
      : { key: "situation", title: `Tell us about the organisation behind ${name}`, subtitle: "So we scope it for your size and your tools.",
          fields: [
            { key: "company", label: "Company or institution", autoComplete: "organization", placeholder: "Company name" },
            { key: "company_size", label: "Company size", type: "chips", options: OPT.size },
            { key: "tools_in_use", label: "Tools you use today", type: "multi", options: OPT.tools },
          ] },
    { key: "timeline", title: `When do you need ${name}?`, subtitle: acad ? "Tight deadline? We prioritise urgent orders." : "A rough range helps us scope the right solution.",
      fields: [
        { key: "deadline_window", label: "Timeline", type: "chips", options: deadlineOpts },
        { key: "deadline", label: "Or pick an exact date", type: "date" },
        ...(acad ? [] : [{ key: "budget", label: "Budget range", type: "chips", options: OPT.budget }]),
      ] },
    { key: "details", title: `Tell us about your ${name} project`,
      subtitle: acad ? "Objectives, sample size, supervisor comments. Upload your dataset if you have it." : "The problem, the outcome you want, and anything you already have.",
      fields: [
        { key: "topic", label: acad ? "Thesis or assignment title" : "Project name or goal (one line)", placeholder: acad ? "Working title of your thesis or project" : "e.g. Cut weekly reporting from 3 days to 1 hour", maxLength: 200 },
        { key: "details", label: "Details", type: "textarea", maxLength: 5000,
          placeholder: acad ? "Your objectives, sample size, what you've done so far, what your supervisor asked for…" : `What do you need from ${name}? Your data, your goal, and anything we should know.` },
        { key: "files", type: "files" },
      ] },
    { key: "review", title: "Review and place your order", subtitle: "You pay nothing until you agree to our quote.", fields: [] },
  ];
}

function Chips({ options, value, multi, onChange, label }) {
  const on = (o) => (multi ? (value || []).includes(o) : value === o);
  const click = (o) => {
    if (multi) onChange(on(o) ? (value || []).filter((x) => x !== o) : [...(value || []), o]);
    else onChange(on(o) ? "" : o);
  };
  return (
    <div className={s.chips} role={multi ? "group" : "radiogroup"} aria-label={label}>
      {options.map((o) => (
        <button key={o} type="button" aria-pressed={on(o)} className={`${s.chip} ${on(o) ? s.chipOn : ""}`} onClick={() => click(o)}>
          {on(o) && <Check size={14} />}{o}
        </button>
      ))}
    </div>
  );
}

export default function OrderPage() {
  const [params] = useSearchParams();
  const cards = useMemo(() => SERVICE_CARDS.filter((c) => c.href).map((c) => ({
    slug: slugOf(c.href), name: decode(c.title), desc: decode(c.description || ""), cat: c.category,
    items: (c.items || []).map(decode),
  })), []);
  const urlSlug = params.get("service") || "";
  const urlName = params.get("service_name") || "";
  const initial = useMemo(() => {
    if (!urlSlug || urlSlug === "other") return null;
    return cards.find((c) => c.slug === urlSlug) || { slug: urlSlug, name: urlName || nameFromSlug(urlSlug), desc: "", cat: null, items: [] };
  }, [cards, urlSlug, urlName]);

  const [svc, setSvc] = useState(initial);
  const [locked, setLocked] = useState(!!initial);
  const acad = svc ? (svc.cat ? ACADEMIC_CATS.has(svc.cat) : isAcademicPath(`${svc.slug || ""} ${svc.name}`)) : false;
  const steps = useMemo(() => buildSteps(svc, acad), [svc, acad]);

  const [phase, setPhase] = useState("loading"); // loading | ready | done
  const [idx, setIdx] = useState(initial ? 1 : 0);
  const [values, setValues] = useState(() => (params.get("urgent") === "1" && initial
    ? { deadline_window: (initial.cat ? ACADEMIC_CATS.has(initial.cat) : isAcademicPath(initial.slug)) ? "Within 48 hours" : "As soon as possible" } : {}));
  const [files, setFiles] = useState([]);
  const [limits, setLimits] = useState(DEFAULT_LIMITS);
  const [errors, setErrors] = useState({});
  const [banner, setBanner] = useState("");
  const [busy, setBusy] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);
  const [resumed, setResumed] = useState(false);
  const tokenRef = useRef("");
  const attrib = useRef(attribution());
  const step = steps[idx];
  const first = locked ? 1 : 0;

  const set = (k, v) => { setValues((p) => ({ ...p, [k]: v })); setErrors((e) => ({ ...e, [k]: undefined })); };

  useEffect(() => {
    let alive = true;
    getCatalog().then((c) => { if (alive && c?.limits) setLimits(c.limits); }).catch(() => {});
    const resumeParam = params.get("resume");
    const want = resumeParam || loadToken();
    if (!want) { setPhase("ready"); return () => { alive = false; }; }
    getOrder(want).then((o) => {
      if (!alive) return;
      const same = resumeParam || !initial || (o.service || "").toLowerCase() === initial.name.toLowerCase();
      if (!o.is_editable || !same) { clearToken(); setPhase("ready"); return; }
      const v = {};
      ["name", "email", "phone", "country", "academic_level", "data_status", "software", "deadline_window", "deadline", "topic", "details"].forEach((k) => { if (o[k]) v[k] = o[k]; });
      Object.entries(o.extra_answers || {}).forEach(([k, val]) => { v[k] = val; });
      const hit = o.service ? cards.find((c) => c.name.toLowerCase() === o.service.toLowerCase()) : null;
      const rs = hit || (o.service && o.service_slug !== "other" && o.service !== "Something else" ? { slug: o.service_slug, name: o.service, desc: "", cat: null, items: [] } : null);
      if (rs) { setSvc(rs); setLocked(true); }
      setValues(v); setFiles(o.files || []);
      tokenRef.current = o.token; saveToken(o.token); setResumed(true);
      setIdx(Math.min(Math.max(o.current_step || 0, rs ? 1 : 0), LAST));
      setPhase("ready");
    }).catch(() => { clearToken(); if (alive) setPhase("ready"); });
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payloadFor = (st, nextIdx) => {
    const out = {}; const answers = {};
    (st?.fields || []).forEach(({ key, type }) => {
      if (type === "service" || type === "files") return;
      const v = values[key];
      const empty = v === undefined || v === "" || (Array.isArray(v) && !v.length);
      if (CORE.has(key)) { if (!empty) out[key] = v; } else answers[key] = empty ? null : v;
    });
    if (Object.keys(answers).length) out.answers = answers;
    if (svc) out.service = svc.name.slice(0, 150);
    if (typeof nextIdx === "number") out.step = nextIdx;
    return out;
  };

  async function persist(payload) {
    if (tokenRef.current) {
      try { return await saveOrder(tokenRef.current, payload); }
      catch (err) { if (err.status !== 409 && err.status !== 404) throw err; clearToken(); tokenRef.current = ""; }
    }
    const res = await startOrder({ ...attrib.current, ...payload });
    tokenRef.current = res.token; saveToken(res.token);
    return res;
  }

  function validate(st) {
    const miss = {};
    st.fields.forEach((f) => {
      if (f.type === "files") return;
      const v = values[f.key];
      if (f.type === "service") { if (!svc) miss.service = "Please choose a service."; return; }
      if (f.required && (!v || (typeof v === "string" && !v.trim()))) miss[f.key] = f.key === "email" ? "We need your email to send the quote." : f.key === "name" ? "Please tell us your name." : "This field is required.";
      else if (f.key === "name" && v.trim().length < 2) miss.name = "Name looks too short.";
      else if (f.key === "email" && !EMAIL_RE.test(v.trim())) miss.email = "Enter a valid email address.";
    });
    setErrors(miss);
    return Object.keys(miss).length === 0;
  }

  function applyApiErrors(err) {
    if (err.fieldErrors) {
      const fe = {};
      Object.entries(err.fieldErrors).forEach(([k, m]) => { fe[k] = Array.isArray(m) ? m[0] : String(m); });
      setErrors(fe);
      const at = steps.findIndex((st) => st.fields.some((f) => fe[f.key]));
      if (at >= first) setIdx(at);
    }
    setBanner(err.message);
  }

  async function next() {
    if (busy || !step) return;
    setBanner("");
    if (step.key === "review") return finish();
    if (!validate(step)) return;
    setBusy(true);
    try {
      await persist(payloadFor(step, idx + 1));
      setIdx((i) => Math.min(i + 1, LAST));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) { applyApiErrors(err); } finally { setBusy(false); }
  }

  async function finish() {
    setBusy(true); setBanner("");
    try {
      await persist(payloadFor(steps[5], LAST));
      const res = await submitOrder(tokenRef.current, svc ? { service: svc.name.slice(0, 150) } : {});
      clearToken(); tokenRef.current = "";
      setResult(res); setPhase("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) { applyApiErrors(err); } finally { setBusy(false); }
  }

  const back = () => { setBanner(""); setIdx((i) => Math.max(first, i - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); };

  async function onFiles(e) {
    const picked = Array.from(e.target.files || []);
    e.target.value = "";
    if (!picked.length) return;
    setBanner(""); setUploading(true);
    try {
      if (!tokenRef.current) await persist(payloadFor(step, idx));
      const t = tokenRef.current;
      let count = files.length;
      for (const f of picked) {
        if (count >= limits.max_files) { setBanner(`You can attach up to ${limits.max_files} files.`); break; }
        if (f.size > limits.max_file_mb * 1024 * 1024) { setBanner(`${f.name} is larger than ${limits.max_file_mb} MB. Zip it or email it to us.`); continue; }
        try { const rec = await uploadOrderFile(t, f); setFiles((c) => [...c, rec]); count += 1; }
        catch (err) { setBanner(`${f.name}: ${err.message}`); }
      }
    } catch (err) { setBanner(err.message); } finally { setUploading(false); }
  }
  async function removeFile(id) {
    try { await deleteOrderFile(tokenRef.current, id); setFiles((c) => c.filter((f) => f.id !== id)); } catch (err) { setBanner(err.message); }
  }

  const heading = svc ? `Order ${svc.name}` : "Place your order";
  const grouped = categories.map((c) => ({ c, items: cards.filter((x) => x.cat === c) })).filter((g) => g.items.length);
  const seo = <SEO title={`${heading} | Scape Data Solutions`} description={`Order ${svc ? svc.name : "a data service"} from Scape Data Solutions. Free quote in 24 hours.`} path="/order" />;

  if (phase === "done") return (
    <div className={s.page}>
      {seo}<Navbar />
      <main className={s.doneWrap}>
        <span className={s.doneIcon}><Check size={28} /></span>
        <p className={s.eyebrow}>Order received</p>
        <h1 className={s.h1}>Thank you. Your order is in.</h1>
        <p className={s.lead}>
          Your reference is <strong>{result?.reference}</strong>. A confirmation is on its way to <strong>{values.email || "your inbox"}</strong>.
          We reply within <strong>24 hours</strong> with scope, timeline and a fixed price for <strong>{svc?.name || "your order"}</strong>. You pay nothing until you agree.
        </p>
        <p className={s.fine}>Forgot a file or a detail? Just reply to the confirmation email.</p>
        <div className={s.doneBtns}><Link className={s.btn} to="/services">Browse more services <ArrowRight size={16} /></Link><Link className={s.btnGhost} to="/">Back to home</Link></div>
      </main>
      <Footer />
    </div>
  );

  const isReview = step?.key === "review";
  const total = LAST + 1 - first;
  const n = idx - first + 1;

  function renderField(f) {
    const err = errors[f.key] ? <p className={s.err}>{errors[f.key]}</p> : null;
    if (f.type === "service") return (
      <div key="service" className={s.field}>
        <label>Service</label>
        <ServiceSearch cards={cards} value={svc} error={errors.service} onSelect={(c) => { setErrors({}); setSvc(c); }} />
      </div>
    );
    if (f.type === "chips" || f.type === "multi") return (
      <div key={f.key} className={s.field}>
        <label>{f.label}{f.type === "multi" ? <em> (tick all that apply)</em> : null}</label>
        <Chips options={f.options} value={values[f.key]} multi={f.type === "multi"} label={f.label} onChange={(v) => set(f.key, v)} />
        {err}
      </div>
    );
    if (f.type === "textarea") return (
      <div key={f.key} className={s.field}>
        <label htmlFor={`f-${f.key}`}>{f.label}</label>
        <textarea id={`f-${f.key}`} rows={6} maxLength={f.maxLength} value={values[f.key] ?? ""} placeholder={f.placeholder} onChange={(e) => set(f.key, e.target.value)} />
        {err}
      </div>
    );
    if (f.type === "files") return (
      <div key="files" className={s.field}>
        <label className={s.upload}>
          <Paperclip size={16} /> {uploading ? "Uploading…" : "Attach dataset or files"}
          <input type="file" multiple hidden accept={limits.allowed_extensions.map((x) => `.${x}`).join(",")} onChange={onFiles} disabled={uploading} />
        </label>
        <p className={s.fine}>SPSS, Excel, CSV, Stata, PDF, Word and more. Up to {limits.max_file_mb} MB each, {limits.max_files} files.</p>
        {files.length > 0 && (
          <ul className={s.files}>{files.map((f) => (
            <li key={f.id}><span>{f.original_name}</span><button type="button" aria-label={`Remove ${f.original_name}`} onClick={() => removeFile(f.id)}><X size={14} /></button></li>
          ))}</ul>
        )}
      </div>
    );
    return (
      <div key={f.key} className={s.field}>
        <label htmlFor={`f-${f.key}`}>{f.label}{f.required ? " *" : ""}</label>
        <input id={`f-${f.key}`} name={f.key} type={f.type || "text"} value={values[f.key] ?? ""} placeholder={f.placeholder} autoComplete={f.autoComplete}
          maxLength={f.maxLength} min={f.type === "date" ? today() : undefined} aria-invalid={!!errors[f.key]} onChange={(e) => set(f.key, e.target.value)} />
        {f.hint && <p className={s.fine}>{f.hint}</p>}
        {err}
      </div>
    );
  }

  function renderReview() {
    const rows = [["Service", svc?.name || "—"]];
    steps.forEach((st) => st.fields.forEach((f) => {
      const v = values[f.key];
      if (!f.label || v === undefined || v === "" || (Array.isArray(v) && !v.length)) return;
      rows.push([f.label, Array.isArray(v) ? v.join(", ") : String(v)]);
    }));
    if (files.length) rows.push(["Files", files.map((f) => f.original_name).join(", ")]);
    return (
      <div>
        <dl className={s.review}>{rows.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}</dl>
        <p className={s.secure}><Lock size={14} /> You pay nothing until you agree to our quote. Your files stay confidential.</p>
      </div>
    );
  }

  return (
    <div className={s.page}>
      {seo}<Navbar />
      <header className={s.hero}>
        <div className={s.wrap}>
          <p className={s.eyebrow}>{svc ? "Order this service" : "Place an order"}</p>
          <h1 className={s.h1}>{heading}</h1>
          <p className={s.lead}>{svc?.desc || "Tell us what you need done. We reply with a fixed quote within 24 hours, and you pay nothing until you agree to it."}</p>
          <ul className={s.trust}>
            <li><Clock size={18} /> Fixed quote in 24 hours</li>
            <li><ShieldCheck size={18} /> No payment until you agree</li>
            <li><Paperclip size={18} /> Upload your files with the order</li>
          </ul>
        </div>
      </header>

      <main className={s.wrap}>
        <div className={s.grid}>
          <form className={s.card} onSubmit={(e) => { e.preventDefault(); next(); }} noValidate>
            {phase === "loading" ? <p className={s.fine}>Loading your order…</p> : (
              <>
                <div className={s.progress} aria-hidden="true"><div style={{ width: `${Math.round((n / total) * 100)}%` }} /></div>
                {resumed && idx > first && <p className={s.intro}>Welcome back. Your answers are saved.</p>}
                <p className={s.kicker}>Step {n} of {total}</p>
                <h2 className={s.h2}>{stepTitle(step, svc)}</h2>
                {step.subtitle && <p className={s.sub}>{step.subtitle}</p>}
                {banner && <div className={s.err} role="alert">{banner} <a href="mailto:info@scapedatasolutions.com?subject=New%20order">Email us instead</a></div>}
                {isReview ? renderReview() : step.fields.map(renderField)}
                <div className={s.actions}>
                  <button className={s.btn} type="submit" disabled={busy || uploading}>
                    {busy ? "Saving…" : isReview ? `Place order${svc ? ` for ${svc.name.length > 34 ? "this service" : svc.name}` : ""}` : "Continue"} {!busy && <ArrowRight size={16} />}
                  </button>
                  {idx > first && <button type="button" className={s.back} onClick={back} disabled={busy || uploading}><ArrowLeft size={16} /> Back</button>}
                </div>
                <p className={s.fine}>Free quote in 24 hours. No payment until you agree. Prefer email? <a href="mailto:info@scapedatasolutions.com">info@scapedatasolutions.com</a></p>
              </>
            )}
          </form>

          <aside className={s.side}>
            <div className={s.sideCard}>
              <p className={s.kicker}>Your order</p>
              <p className={s.sideService}>{svc?.name || "Choose a service"}</p>
              {svc && cards.some((c) => c.slug === svc.slug) && <Link className={s.sideLink} to={`/services/${svc.slug}`}>View service details <ArrowRight size={14} /></Link>}
            </div>
            {svc?.items?.length > 0 && (
              <div className={s.sideCard}>
                <p className={s.kicker}>What {svc.name.length > 30 ? "this service" : svc.name} includes</p>
                <ul className={s.ticks}>{svc.items.map((x) => <li key={x}><Check size={16} /> {x}</li>)}</ul>
              </div>
            )}
            <div className={s.sideCard}>
              <p className={s.kicker}>What happens next</p>
              <ol className={s.steps}>
                <li><b>1</b><span><strong>You send the brief.</strong> A few questions, your files attached.</span></li>
                <li><b>2</b><span><strong>We quote in 24 hours.</strong> A fixed price and timeline, with your order reference.</span></li>
                <li><b>3</b><span><strong>You approve, we start.</strong> Nothing is charged before you agree.</span></li>
              </ol>
            </div>
            <a className={s.mail} href="mailto:info@scapedatasolutions.com"><Mail size={16} /> info@scapedatasolutions.com</a>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}


// Fills the chosen service into the step headings. Falls back to the backend title when no service is picked yet.
function stepTitle(step, svc) {
  const name = svc && (svc.name || svc.title || svc.label);
  const key = String((step && (step.key || step.id)) || "").toLowerCase();
  if (!name || name === "Something else (not listed)") {
    if (key.includes("service")) return "Which service would you like a quote for?";
    return step.title;
  }
  if (key.includes("service")) return "Which service would you like a quote for?";
  if (key === "contact") return `Get your ${name} quote`;
  if (key === "review") return `Review your ${name} order`;
  return step.title;
}
