// src/pages/Home/HomePage.jsx
import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight, BarChart3, BarChart2, Server, TrendingUp, Database, Shield,
  Users, Award, Zap, Globe, Heart, DollarSign, Cpu, Cloud, Star,
  ChevronDown, ChevronLeft, ChevronRight, ChevronUp, CheckCircle, Loader2, Send,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../Home/HomePage.module.css";
import { submitLead } from "../../services/api";
import SEO from "../../components/SEO/SEO";

const ACCENT = "#3b82f6";

// Rotating hero words - tied to real services, not filler buzzwords
const ROTATING_WORDS = ["Revenue Growth", "Predictive Analytics", "Real-Time Dashboards", "Lower Costs", "Faster Decisions"];

function useTypewriter(words, speed = 140, pause = 15000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [holding, setHolding] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let t;
    if (!deleting && text.length < current.length) {
      setHolding(false);
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      setHolding(true);
      t = setTimeout(() => { setHolding(false); setDeleting(true); }, pause);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return { text, holding };
}

const FEATURES = [
  { key: "analytics", title: "Data Analytics", icon: <BarChart3 size={22} />, link: "/services" },
  { key: "etl", title: "ETL & Integration", icon: <Server size={22} />, link: "/services" },
  { key: "bi", title: "BI Dashboards", icon: <BarChart2 size={22} />, link: "/services" },
  { key: "predictive", title: "Predictive Analytics", icon: <TrendingUp size={22} />, link: "/services" },
];

// --- Custom mini-visuals: four distinct UI metaphors, like x.ai's tiles ---
function DataAnalyticsViz() {
  return (
    <div className={styles.vizPanel}>
      <div className={styles.vizPanelHead}>
        <span>Revenue by Region</span>
        <span className={styles.vizPanelBadge}>Live</span>
      </div>
      <svg viewBox="0 0 260 90" className={styles.vizChartSvg} preserveAspectRatio="none">
        <polyline points="0,70 40,55 80,60 120,35 160,42 200,20 240,28" fill="none" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="200" cy="20" r="3" fill="#3b82f6" />
      </svg>
      <div className={styles.vizLegendRow}>
        <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
      </div>
    </div>
  );
}

function EtlViz() {
  const lines = [
    { c: "#22c55e", t: "extract → 3 sources connected" },
    { c: "#3b82f6", t: "transform: dedup 12,402 rows" },
    { c: "#eab308", t: "load → warehouse.sales" },
    { c: "#22c55e", t: "pipeline complete (4.2s)" },
  ];
  return (
    <div className={styles.vizTerminalWindow}>
      <div className={styles.vizTermDots}>
        <span style={{ background: "#ff5f57" }} />
        <span style={{ background: "#febc2e" }} />
        <span style={{ background: "#28c840" }} />
      </div>
      <div className={styles.vizTermBody}>
        {lines.map((l, i) => (
          <div key={i} className={styles.vizLogLine}>
            <span className={styles.vizLogDot} style={{ background: l.c }} />
            {l.t}
          </div>
        ))}
        <div className={styles.vizTermCursor}>run --watch</div>
      </div>
    </div>
  );
}

function BiDashboardsViz() {
  const bars = [40, 65, 50, 80, 60, 90];
  return (
    <div className={styles.vizCollage}>
      <div className={styles.vizCollageBig}>
        <span className={styles.vizWidgetLabel}>Revenue</span>
        <div className={styles.vizMiniBars}>
          {bars.map((h, i) => (
            <div key={i} className={styles.vizMiniBar} style={{ height: `${h}%` }} />
          ))}
        </div>
        <span className={styles.vizWidgetVal}>$482K</span>
      </div>
      <div className={styles.vizCollageSmall}>
        <span className={styles.vizWidgetLabel}>Users</span>
        <span className={styles.vizMiniArrow}>↗</span>
        <span className={styles.vizWidgetVal}>12.4K</span>
      </div>
      <div className={styles.vizCollageSmall}>
        <span className={styles.vizWidgetLabel}>Growth</span>
        <span className={styles.vizMiniArrow}>↗</span>
        <span className={styles.vizWidgetVal}>+23%</span>
      </div>
    </div>
  );
}

function PredictiveViz() {
  return (
    <div className={styles.vizChatWrap}>
      <div className={styles.vizBubbleLeft}>Forecast churn for next quarter?</div>
      <div className={styles.vizTyping}><span/><span/><span/></div>
      <div className={styles.vizBubbleRight}>Predicted 4.2% churn, down from 6.1%, model confidence 91%.</div>
    </div>
  );
}

const FEATURE_VIZ = {
  analytics: DataAnalyticsViz,
  etl: EtlViz,
  bi: BiDashboardsViz,
  predictive: PredictiveViz,
};

const SERVICES = [
  { icon: <BarChart3 size={20} />, title: "Data Analytics & Visualization", desc: "We turn your raw numbers into clear, visual dashboards that highlight what's working, what's not, and where your next opportunity lies.", tools: ["Tableau", "Power BI", "Looker"] },
  { icon: <Database size={20} />, title: "SQL & Data Warehousing", desc: "We design and optimize databases that store your business data in one secure, fast-to-query place.", tools: ["PostgreSQL", "Snowflake", "Redshift"] },
  { icon: <Server size={20} />, title: "ETL & Data Integration", desc: "We bring together data from sales, marketing, and operations into one trusted, accurate system.", tools: ["Apache Airflow", "dbt", "Fivetran"] },
  { icon: <BarChart2 size={20} />, title: "Business Intelligence Dashboards", desc: "We build dashboards your whole team can explore on their own, no coding needed.", tools: ["Tableau", "Power BI", "Looker"] },
  { icon: <TrendingUp size={20} />, title: "Predictive Analytics & Forecasting", desc: "We use your past data to predict sales, churn, and market shifts so you can plan ahead.", tools: ["Prophet", "XGBoost", "ARIMA"] },
  { icon: <Shield size={20} />, title: "Data Governance & Security", desc: "We set up clear rules and strong protections to keep your data safe and fully compliant.", tools: ["GDPR", "HIPAA", "SOC 2"] },
  { icon: <Cloud size={20} />, title: "Cloud Data Migration", desc: "We move your data infrastructure to the cloud with zero downtime, cutting costs while improving scalability.", tools: ["AWS", "Azure", "GCP"] },
  { icon: <Cpu size={20} />, title: "Custom AI & Machine Learning", desc: "We build and deploy custom models tailored to your business, from recommendation engines to fraud detection.", tools: ["PyTorch", "TensorFlow", "MLflow"] },
];

const TECH_ROW1 = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Apache Airflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];
const TECH_ROW2 = [
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
];
const T1_DUP = [...TECH_ROW1, ...TECH_ROW1];
const T2_DUP = [...TECH_ROW2, ...TECH_ROW2];

const TESTIMONIALS = [
  { name: "Omar AlQabandi", role: "CEO", company: "BilBio Kuwait", img: "/Images/site-images/Omar-AlQabandi.webp.webp", quote: "The team delivered on time and on budget, with quality work.", rating: 5 },
  { name: "Nathan French", role: "Director of I.T.", company: "Treaterpro.com", img: "/Images/site-images/nathan.webp", quote: "The best team I've worked with for complex projects.", rating: 5 },
  { name: "Charles Johnson", role: "CEO", company: "BidLock, LLC", img: "/Images/site-images/charles_johnson.webp", quote: "Phenomenal team. Professional, patient, and truly the best in the business.", rating: 5 },
];

const WHY_CHOOSE = [
  { icon: <Users size={18} />, title: "Domain Expertise", desc: "Deep experience in SQL, data modeling, and analytics, not just generic tech consulting." },
  { icon: <Award size={18} />, title: "Proven Methodologies", desc: "Industry best practices for governance, ETL, and dashboard development." },
  { icon: <Shield size={18} />, title: "Security & Compliance", desc: "GDPR, HIPAA, and SOC 2 aligned from day one." },
  { icon: <Zap size={18} />, title: "Agile Delivery", desc: "Short sprints, incremental value, feedback built into every step." },
  { icon: <Globe size={18} />, title: "Global Reach", desc: "Teams across the US, Pakistan, and Canada for round-the-clock support." },
  { icon: <Heart size={18} />, title: "Long-Term Partnership", desc: "Average engagement exceeds 3 years, we become part of your team." },
  { icon: <Database size={18} />, title: "Full-Stack Data Expertise", desc: "From raw ingestion to executive dashboards, we own the entire pipeline end-to-end." },
  { icon: <BarChart3 size={18} />, title: "Measurable Impact", desc: "Every engagement is tied to a clear metric (revenue, cost, or time saved), not vanity reporting." },
];

const CASE_STUDIES = [
  { title: "E-Commerce Revenue Growth", client: "RetailMax", challenge: "Stagnant sales and 74% cart abandonment.", solution: "Real-time analytics pipeline with dynamic pricing.", result: "85% revenue growth in 6 months" },
  { title: "Healthcare Cost Reduction", client: "HealthTech Solutions", challenge: "Rising operational costs, long wait times.", solution: "Predictive models for patient flow and staffing.", result: "45% cost reduction" },
  { title: "Supply Chain Optimization", client: "Industrial Leader", challenge: "Inefficient inventory across 12 warehouses.", solution: "Real-time inventory dashboard with auto-reorder.", result: "50% cost savings" },
];

const INDUSTRIES = [
  { icon: <Heart size={18} />, name: "Healthcare" },
  { icon: <DollarSign size={18} />, name: "Finance" },
  { icon: <BarChart2 size={18} />, name: "Retail" },
  { icon: <Cpu size={18} />, name: "Manufacturing" },
  { icon: <Cloud size={18} />, name: "Technology" },
  { icon: <Globe size={18} />, name: "Logistics" },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const VIEWPORT = { once: false, amount: 0.15 };

export default function HomePage() {
  const [testi, setTesti] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [expandedCase, setExpandedCase] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [counters, setCounters] = useState({ clients: 0, projects: 0, satisfaction: 0, countries: 0 });
  const [codeTab, setCodeTab] = useState("python");

  const { text: typedHeadline, holding } = useTypewriter(ROTATING_WORDS);
  const counterRef = useRef(null);
  const isCounterInView = useInView(counterRef, { once: false, amount: 0.4 });

  useEffect(() => {
    const t = setInterval(() => setTesti((t) => (t + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(() => setActiveIndustry((p) => (p + 1) % INDUSTRIES.length), 2600);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  useEffect(() => {
    if (!isCounterInView) return;
    const targets = { clients: 200, projects: 500, satisfaction: 99.5, countries: 60 };
    let step = 0;
    const steps = 80;
    const iv = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCounters({
        clients: targets.clients * ease,
        projects: targets.projects * ease,
        satisfaction: targets.satisfaction * ease,
        countries: targets.countries * ease,
      });
      if (step >= steps) clearInterval(iv);
    }, 1800 / steps);
    return () => clearInterval(iv);
  }, [isCounterInView]);

  const stars = (n = 5) => [...Array(n)].map((_, i) => <Star key={i} size={12} fill={ACCENT} color={ACCENT} />);
  const change = (f, v) => setFormData((p) => ({ ...p, [f]: v }));

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Valid email required";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setFormErrors(errs); return; }
    setLoading(true);
    setSubmitError(null);
    try {
      await submitLead({ name: formData.name, email: formData.email, message: formData.message, company: "", phone: "", service: "" });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const CODE_SNIPPETS = {
    python: `import pandas as pd
from sqlalchemy import create_engine

engine = create_engine("postgresql://user:pass@host/db")
df = pd.read_sql("SELECT * FROM sales", engine)
df["revenue"] = df["price"] * df["quantity"]
df.to_sql("daily_revenue", engine, if_exists="replace")`,
    sql: `SELECT
  date_trunc('day', created_at) AS day,
  SUM(price * quantity) AS revenue
FROM sales
GROUP BY 1
ORDER BY 1 DESC
LIMIT 30;`,
    r: `library(dplyr)
sales <- read.csv("sales.csv")
sales %>%
  mutate(revenue = price * quantity) %>%
  group_by(day = as.Date(created_at)) %>%
  summarise(total = sum(revenue))`,
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Scape Data Solutions | Data Analytics, SQL, BI & AI Services"
        description="We provide expert data analytics, SQL development, BI dashboards, ETL pipelines, and predictive modeling for businesses of all sizes."
        path="/"
      />
      <Navbar activeNav="home" />

      <main>
        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <h1 className={styles.heroTitleRow}>
                <span className={styles.heroTitle}>Turn Data Into</span>
                <div className={styles.typeBox}>
                  <span className={styles.heroTitle}>
                    <span className={styles.typeText}>
                      {typedHeadline}
                      {!holding && <span className={styles.typeCaret}>|</span>}
                    </span>
                  </span>
                </div>
              </h1>
              <p className={styles.heroSub}>
                Stop guessing. Start knowing. We help you make smarter business decisions, reduce costs, and unlock new revenue streams with data you already have.
              </p>
              <div className={styles.heroBtnRow}>
                <Link to="/contact" className={styles.btnPrimary}>
                  Start Growing Your Business <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className={styles.btnSecondary}>
                  See Our Work
                </Link>
              </div>
              <div className={styles.trustRow}>
                {["GDPR", "HIPAA", "SOC 2", "ISO 27001"].map((b) => (
                  <span key={b} className={styles.trustBadge}>{b}</span>
                ))}
              </div>
            </div>

            <motion.div className={styles.featureGrid} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={stagger}>
              {FEATURES.map((f, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Link to={f.link} className={styles.featureCard}>
                    <div className={styles.featureVisual}>
                      {(() => { const Viz = FEATURE_VIZ[f.key]; return <Viz />; })()}
                    </div>
                    <div className={styles.featureCardIcon}>{f.icon}</div>
                    <div className={styles.featureCardBody}>
                      <span className={styles.featureCardTitle}>{f.title}</span>
                      <span className={styles.featureCardCta}>Explore →</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ DEV / CODE SECTION ═══ */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.devGrid}>
              <div className={styles.devTextBlock}>
                <p className={styles.secLabel}>For data teams</p>
                <h2 className={styles.secTitle}>One platform.<br />Every data need.</h2>
                <p className={styles.devDesc}>
                  From ETL to dashboards, we provide a unified data stack that scales with your business. Start building in days, not months.
                </p>
                <div className={styles.devActions}>
                  <Link to="/contact" className={styles.btnPrimary}>Get Started</Link>
                  <Link to="/services" className={styles.btnSecondary}>View Services</Link>
                </div>
                <div className={styles.devStats}>
                  <div><p className={styles.devStatNum}>1M+</p><p className={styles.devStatLabel}>Data points processed daily</p></div>
                  <div><p className={styles.devStatNum}>&lt;200ms</p><p className={styles.devStatLabel}>Average query latency</p></div>
                  <div><p className={styles.devStatNum}>5+</p><p className={styles.devStatLabel}>Integration methods</p></div>
                </div>
              </div>

              <div>
                <div className={styles.codeWindow}>
                  <div className={styles.codeHeader}>
                    <span className={styles.codeDot} style={{ background: "#ff5f57" }} />
                    <span className={styles.codeDot} style={{ background: "#febc2e" }} />
                    <span className={styles.codeDot} style={{ background: "#28c840" }} />
                    <button className={styles.codeCopy} onClick={() => navigator.clipboard.writeText(CODE_SNIPPETS[codeTab])}>Copy</button>
                  </div>
                  <div className={styles.codeBody}>
                    <pre className={styles.codePre}><code>{CODE_SNIPPETS[codeTab]}</code></pre>
                  </div>
                  <div className={styles.codeTabs}>
                    {Object.keys(CODE_SNIPPETS).map((k) => (
                      <button key={k} className={`${styles.codeTab} ${codeTab === k ? styles.codeTabActive : ""}`} onClick={() => setCodeTab(k)}>
                        {k === "python" ? "Python" : k === "sql" ? "SQL" : "R"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ STATS BAND ═══ */}
        <motion.section className={styles.statsBand} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.statsGrid} ref={counterRef}>
              <div>
                <span className={styles.statsNumber}>{Math.floor(counters.clients)}+</span>
                <p className={styles.statsLabel}>Happy Clients</p>
              </div>
              <div>
                <span className={styles.statsNumber}>{Math.floor(counters.projects)}+</span>
                <p className={styles.statsLabel}>Projects Delivered</p>
              </div>
              <div>
                <span className={styles.statsNumber}>{counters.satisfaction.toFixed(1)}%</span>
                <p className={styles.statsLabel}>Satisfaction Rate</p>
              </div>
              <div>
                <span className={styles.statsNumber}>{Math.floor(counters.countries)}+</span>
                <p className={styles.statsLabel}>Countries Served</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ SERVICES ═══ */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={`${styles.secHead}`} style={{ textAlign: "center" }}>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Our Services</h2>
              <p className={`${styles.secSubtitle} ${styles.secSubtitleCenter}`}>
                We specialize in every layer of the data stack, from raw ingestion to executive dashboards.
              </p>
            </div>
            <motion.ul className={styles.serviceList} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={stagger}>
              {SERVICES.map((svc, i) => (
                <motion.li key={i} className={styles.serviceItem} variants={fadeUp}>
                  <span className={styles.serviceIcon} style={{ color: ACCENT }}>{svc.icon}</span>
                  <div>
                    <h3 className={styles.serviceTitle}>{svc.title}</h3>
                    <p className={styles.serviceDesc}>{svc.desc}</p>
                    <ul className={styles.serviceToolsList}>
                      {svc.tools.map((tool, j) => <li key={j} className={styles.serviceToolItem}>{tool}</li>)}
                    </ul>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.section>

        {/* ═══ TECHNOLOGIES ═══ */}
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Technologies We Use</h2>
            </div>
          </div>
          <div className={styles.techBlock}>
            <div className={styles.marqueeRow}>
              <div className={styles.marqueeTrack}>
                {T1_DUP.map((t, i) => (
                  <div key={i} className={styles.techChip}>
                    <div className={styles.techChipIcon}><img src={t.icon} alt={t.name} /></div>
                    <span className={styles.techChipName}>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.marqueeRow}>
              <div className={`${styles.marqueeTrack} ${styles.marqueeRev}`}>
                {T2_DUP.map((t, i) => (
                  <div key={i} className={styles.techChip}>
                    <div className={styles.techChipIcon}><img src={t.icon} alt={t.name} /></div>
                    <span className={styles.techChipName}>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRIES ═══ */}
        <motion.section className={styles.industriesSection} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Industries We Serve</h2>
            </div>
            <ul className={styles.industryList}>
              {INDUSTRIES.map((ind, i) => (
                <li
                  key={i}
                  className={`${styles.industryItem} ${activeIndustry === i ? styles.industryItemActive : ""}`}
                  onClick={() => setActiveIndustry(i)}
                >
                  <span style={{ color: ACCENT }}>{ind.icon}</span>
                  <span className={styles.industryName}>{ind.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* ═══ WHY CHOOSE US ═══ */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Why Choose Us</h2>
            </div>
            <dl className={styles.whyDefList}>
              {WHY_CHOOSE.map((item, i) => (
                <div key={i} className={styles.whyDefRow}>
                  <dt className={styles.whyDefTerm}>
                    <span style={{ color: ACCENT }}>{item.icon}</span>
                    {item.title}
                  </dt>
                  <dd className={styles.whyDefDesc}>{item.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.section>

        {/* ═══ CASE STUDIES ═══ */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Case Studies</h2>
            </div>
            <div className={styles.caseList}>
              {CASE_STUDIES.map((s, i) => (
                <div key={i} className={styles.caseItem} onClick={() => setExpandedCase(expandedCase === i ? null : i)}>
                  <div className={styles.caseHeader}>
                    <div>
                      <span className={styles.caseTitle}>{s.title}</span>
                      <span className={styles.caseClient}>, {s.client}</span>
                    </div>
                    <span className={styles.caseResult}>{s.result}</span>
                    <ChevronDown size={16} style={{ transform: expandedCase === i ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
                  </div>
                  <AnimatePresence>
                    {expandedCase === i && (
                      <motion.div className={styles.caseBody} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                        <p><strong>Challenge:</strong> {s.challenge}</p>
                        <p><strong>Solution:</strong> {s.solution}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ═══ TESTIMONIALS ═══ */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>What Our Clients Say</h2>
            </div>
            <div className={styles.testiWrap}>
              <AnimatePresence mode="wait">
                <motion.div key={testi} className={styles.testiCard} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
                  <div className={styles.testiTop}>
                    <img src={TESTIMONIALS[testi].img} alt={TESTIMONIALS[testi].name} className={styles.testiAv} />
                    <div>
                      <strong className={styles.testiName}>{TESTIMONIALS[testi].name}</strong>
                      <p className={styles.testiRole}>{TESTIMONIALS[testi].role}, {TESTIMONIALS[testi].company}</p>
                      <div className={styles.stars}>{stars(TESTIMONIALS[testi].rating)}</div>
                    </div>
                  </div>
                  <p className={styles.testiQ}>{TESTIMONIALS[testi].quote}</p>
                  <div className={styles.testiFooter}>
                    <span style={{ fontSize: ".78rem", color: "var(--color-text-secondary)" }}>{testi + 1} / {TESTIMONIALS.length}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className={styles.testiNav}>
                <button className={styles.testiBtn} onClick={() => setTesti((t) => (t - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}><ChevronLeft size={16} /></button>
                <div className={styles.testiDots}>
                  {TESTIMONIALS.map((_, i) => (
                    <span key={i} className={`${styles.tDot} ${i === testi ? styles.tDotOn : ""}`} onClick={() => setTesti(i)} />
                  ))}
                </div>
                <button className={styles.testiBtn} onClick={() => setTesti((t) => (t + 1) % TESTIMONIALS.length)}><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ GET STARTED ═══ */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Choose How To Get Started</h2>
            </div>
            <div className={styles.getStartedGrid}>
              <div className={styles.getStartedCard}>
                <h3 className={styles.getStartedCardTitle}>Build on your own</h3>
                <p className={styles.getStartedCardDesc}>Access our full data stack with self-service tools.</p>
                <hr className={styles.getStartedDivider} />
                <ul className={styles.getStartedList}>
                  <li>Connect to 100+ data sources</li>
                  <li>Build dashboards without code</li>
                  <li>Automated ETL pipelines</li>
                  <li>Comprehensive documentation</li>
                </ul>
                <Link to="/contact" className={styles.btnPrimary} style={{ justifyContent: "center" }}>Start Building</Link>
              </div>
              <div className={styles.getStartedCard}>
                <h3 className={styles.getStartedCardTitle}>Get extra support</h3>
                <p className={styles.getStartedCardDesc}>Custom solutions and hands-on help for your team.</p>
                <hr className={styles.getStartedDivider} />
                <ul className={styles.getStartedList}>
                  <li>Dedicated data architect</li>
                  <li>Custom schema design</li>
                  <li>On-demand training</li>
                  <li>24/7 monitoring and alerts</li>
                </ul>
                <Link to="/contact" className={styles.btnSecondary} style={{ justifyContent: "center" }}>Contact Sales</Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ═══ CONTACT ═══ */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Get In Touch</h2>
              <p className={`${styles.secSubtitle} ${styles.secSubtitleCenter}`}>
                Have a data challenge? Reach out and we'll get back to you within one business day.
              </p>
            </div>
            {submitted ? (
              <div className={styles.formOk}><CheckCircle size={20} /> Thank you, our data team will be in touch shortly.</div>
            ) : (
              <form className={styles.cForm} onSubmit={handleSubmit} noValidate>
                {submitError && <div style={{ color: "#e74c3c", fontSize: 14 }}>{submitError}</div>}
                <div className={styles.fGroup}>
                  <label className={styles.fLabel}>Your Name *</label>
                  <input type="text" value={formData.name} onChange={(e) => change("name", e.target.value)} />
                  {formErrors.name && <span className={styles.fErr}>{formErrors.name}</span>}
                </div>
                <div className={styles.fGroup}>
                  <label className={styles.fLabel}>Email Address *</label>
                  <input type="email" value={formData.email} onChange={(e) => change("email", e.target.value)} />
                  {formErrors.email && <span className={styles.fErr}>{formErrors.email}</span>}
                </div>
                <div className={styles.fGroup}>
                  <label className={styles.fLabel}>Message *</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => change("message", e.target.value)} />
                  {formErrors.message && <span className={styles.fErr}>{formErrors.message}</span>}
                </div>
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? <><Loader2 size={16} className={styles.spinner} /> Sending…</> : <><Send size={14} /> Send Message</>}
                </button>
                <p className={styles.privacy}>By submitting this form, you agree to our privacy policy.</p>
              </form>
            )}
          </div>
        </motion.section>
      </main>

      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            className={styles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}