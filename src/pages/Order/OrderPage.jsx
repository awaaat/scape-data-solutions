// src/pages/Order/OrderPage.jsx - on-site order page. The heading, summary and submission all name the exact
// service the visitor came from (/order?service=<slug>&service_name=<name>). Submits through the existing lead API.
import { useEffect, useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Check, ArrowRight, Mail, Clock, ShieldCheck, FileText } from "lucide-react";
import SEO from "../../components/SEO/SEO";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { apiService } from "../../services/api";
import { SERVICE_CARDS, categories } from "../../data/servicesData";
import { nameFromSlug } from "../../components/OrderPush/orderLinks";
import s from "./OrderPage.module.css";

const decode = (t = "") => t.replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"');
const CAT = { academic: "Academic & Research", analytics: "Advanced Analytics", finance: "Finance & Risk", healthcare: "Healthcare & Life Sciences",
  manufacturing: "Manufacturing & Supply Chain", retail: "Retail & E-Commerce", "assignment-help": "Assignment & Software Help",
  "academic-writing": "Academic Writing & Publishing", "research-methods": "Statistical & Research Methods", "ai-ml": "AI & Machine Learning",
  "data-engineering": "Data Engineering & BI Tools" };
const slugOf = (href = "") => href.replace(/^\/services\//, "").replace(/\/$/, "");

export default function OrderPage() {
  const [params] = useSearchParams();
  const urlSlug = params.get("service") || "";
  const urlName = params.get("service_name") || "";
  const cards = useMemo(() => SERVICE_CARDS.filter((c) => c.href).map((c) => ({ slug: slugOf(c.href), title: decode(c.title), desc: decode(c.description || ""), cat: c.category })), []);
  const [slug, setSlug] = useState(urlSlug && urlSlug !== "other" ? urlSlug : "");
  const card = cards.find((c) => c.slug === slug);
  const serviceName = card ? card.title : slug ? (urlName && slug === urlSlug ? urlName : nameFromSlug(slug)) : "";
  const [f, setF] = useState({ name: "", email: "", phone: "", company: "", deadline: "", details: "", urgent: params.get("urgent") === "1" });
  const [state, setState] = useState({ busy: false, err: "", done: false });
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!slug && !urlName) { setState({ busy: false, err: "Please choose the service you want to order.", done: false }); return; }
    setState({ busy: true, err: "", done: false });
    const lines = [f.details.trim(), "", "— ORDER DETAILS —", `Service ordered: ${serviceName || "Not listed (see details)"}`,
      slug ? `Service page: /services/${slug}` : "", f.deadline ? `Deadline: ${f.deadline}` : "", f.urgent ? "URGENT: yes, please reply today" : "",
      params.get("utm_medium") ? `Came from: ${params.get("utm_medium")} on ${params.get("utm_campaign") || "site"}` : ""].filter((x, i) => x !== "" || i < 2);
    try {
      await apiService.submitLead({ name: f.name, email: f.email, phone: f.phone, company: f.company,
        service: `ORDER: ${serviceName || "Other"}`.slice(0, 150), message: lines.join("\n") });
      setState({ busy: false, err: "", done: true });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) { setState({ busy: false, err: err.message || "Something went wrong. Please try again.", done: false }); }
  };

  const heading = serviceName ? `Order ${serviceName}` : "Place your order";
  const grouped = categories.map((c) => ({ c, items: cards.filter((x) => x.cat === c) })).filter((g) => g.items.length);

  if (state.done) return (
    <div className={s.page}>
      <SEO title="Order received | Scape Data Solutions" description="Your order has been received." path="/order" />
      <Navbar />
      <main className={s.doneWrap}>
        <span className={s.doneIcon}><Check size={28} /></span>
        <p className={s.eyebrow}>Order received</p>
        <h1 className={s.h1}>Thanks, {f.name.split(" ")[0] || "we have it"}. Your order is in.</h1>
        <p className={s.lead}>We have your request for <strong>{serviceName || "your service"}</strong>. A fixed quote will reach <strong>{f.email}</strong> within 24 hours. You pay nothing until you agree to it.</p>
        <div className={s.doneBtns}><Link className={s.btn} to="/services">Browse more services <ArrowRight size={16} /></Link><Link className={s.btnGhost} to="/">Back to home</Link></div>
      </main>
      <Footer />
    </div>
  );

  return (
    <div className={s.page}>
      <SEO title={`${heading} | Scape Data Solutions`} description={`Order ${serviceName || "a data service"} from Scape Data Solutions. Free quote in 24 hours.`} path="/order" />
      <Navbar />
      <header className={s.hero}>
        <div className={s.wrap}>
          <p className={s.eyebrow}>{serviceName ? "Order this service" : "Place an order"}</p>
          <h1 className={s.h1}>{heading}</h1>
          <p className={s.lead}>{card?.desc || "Tell us what you need done. We reply with a fixed quote within 24 hours, and you pay nothing until you agree to it."}</p>
          <ul className={s.trust}>
            <li><Clock size={18} /> Fixed quote in 24 hours</li>
            <li><ShieldCheck size={18} /> No payment until you agree</li>
            <li><FileText size={18} /> Send files with your reply</li>
          </ul>
        </div>
      </header>

      <main className={s.wrap}>
        <div className={s.grid}>
          <form className={s.card} onSubmit={submit} noValidate>
            <h2 className={s.h2}>Your order details</h2>
            <div className={s.field}>
              <label htmlFor="svc">Service</label>
              <select id="svc" value={slug} onChange={(e) => setSlug(e.target.value)}>
                <option value="">{urlName && !slug ? `${urlName} (not listed, describe below)` : "Choose a service…"}</option>
                {grouped.map((g) => (<optgroup key={g.c} label={CAT[g.c] || g.c}>{g.items.map((x) => <option key={x.slug} value={x.slug}>{x.title}</option>)}</optgroup>))}
              </select>
            </div>
            <div className={s.row2}>
              <div className={s.field}><label htmlFor="n">Full name</label><input id="n" value={f.name} onChange={set("name")} required minLength={2} autoComplete="name" /></div>
              <div className={s.field}><label htmlFor="e">Email</label><input id="e" type="email" value={f.email} onChange={set("email")} required autoComplete="email" /></div>
            </div>
            <div className={s.row2}>
              <div className={s.field}><label htmlFor="p">Phone / WhatsApp <em>(optional)</em></label><input id="p" value={f.phone} onChange={set("phone")} autoComplete="tel" /></div>
              <div className={s.field}><label htmlFor="c">Company or institution <em>(optional)</em></label><input id="c" value={f.company} onChange={set("company")} autoComplete="organization" /></div>
            </div>
            <div className={s.row2}>
              <div className={s.field}><label htmlFor="d">Deadline <em>(optional)</em></label><input id="d" type="date" value={f.deadline} onChange={set("deadline")} min={new Date().toISOString().slice(0, 10)} /></div>
              <label className={s.check}><input type="checkbox" checked={f.urgent} onChange={set("urgent")} /><span><b>This is urgent</b><small>We reply the same day</small></span></label>
            </div>
            <div className={s.field}>
              <label htmlFor="m">What do you need? <em>(at least a sentence)</em></label>
              <textarea id="m" rows={6} value={f.details} onChange={set("details")} required minLength={10}
                placeholder={serviceName ? `Tell us about your ${serviceName.toLowerCase()} needs: your data, goal and anything we should know.` : "Describe your project, your data and your goal."} />
            </div>
            {state.err && <p className={s.err} role="alert">{state.err}</p>}
            <button className={s.btn} type="submit" disabled={state.busy}>{state.busy ? "Sending your order…" : serviceName ? `Place order for ${serviceName.length > 34 ? "this service" : serviceName}` : "Place my order"} <ArrowRight size={16} /></button>
            <p className={s.fine}>Free quote in 24 hours. No payment until you agree. Prefer email? <a href="mailto:info@scapedatasolutions.com">info@scapedatasolutions.com</a></p>
          </form>

          <aside className={s.side}>
            <div className={s.sideCard}>
              <p className={s.kicker}>Your order</p>
              <p className={s.sideService}>{serviceName || "Choose a service"}</p>
              {card && <Link className={s.sideLink} to={`/services/${card.slug}`}>View service details <ArrowRight size={14} /></Link>}
            </div>
            <div className={s.sideCard}>
              <p className={s.kicker}>What happens next</p>
              <ol className={s.steps}>
                <li><b>1</b><span><strong>You send the brief.</strong> The form on this page, plus any files by reply.</span></li>
                <li><b>2</b><span><strong>We quote in 24 hours.</strong> A fixed price and timeline, not an estimate range.</span></li>
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
