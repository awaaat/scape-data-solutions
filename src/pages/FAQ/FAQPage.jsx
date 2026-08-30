// src/pages/FAQ/FAQPage.jsx
import { useEffect, useState } from "react";
import SEO from "../../components/SEO/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./FAQPage.module.css";

// ─── FAQ data ──────────────────────────────────────────────────────
const FAQS = [
  { cat:"AI & Machine Learning", q:"What types of machine learning models do you build?", a:"We build supervised, unsupervised, and reinforcement learning models depending on the business problem. This includes regression and classification models for prediction, clustering for customer segmentation, time-series models for forecasting, NLP models for text and document intelligence, and deep learning models for computer vision and unstructured data. Every model is trained on your specific data, not generic public datasets." },
  { cat:"AI & Machine Learning", q:"How accurate are your AI models?", a:"Our models consistently achieve 95–99% accuracy on well-defined problems with sufficient historical data. We are transparent about model performance — we report precision, recall, F1 scores, AUC-ROC curves, and business-level KPIs so you understand exactly what the model can and cannot do. We never oversell." },
  { cat:"AI & Machine Learning", q:"Can you build generative AI or LLM-powered solutions?", a:"Yes. We build RAG (Retrieval-Augmented Generation) pipelines, fine-tune open-source LLMs on your proprietary data, build AI agents for automation, and integrate GPT-4, Claude, Gemini, and open-source models like LLaMA into your workflows. We help you choose the right model architecture for your cost, latency, and accuracy requirements." },
  { cat:"AI & Machine Learning", q:"How do you prevent model bias and ensure fairness?", a:"We apply bias detection techniques during training and evaluation, including demographic parity checks, disparate impact analysis, and SHAP-based explainability to understand what features drive predictions. We document model cards for every production model and build monitoring pipelines to detect model drift and bias in production over time." },
  { cat:"Financial Modelling", q:"What financial modelling capabilities do you offer?", a:"We build quantitative models for risk assessment (credit risk, market risk, operational risk), valuation (DCF, Monte Carlo simulation, options pricing), portfolio optimisation (Markowitz, Black-Litterman, factor models), financial forecasting (revenue, cash flow, P&L), and regulatory reporting (IFRS 9, Basel III, CECL). We work with banks, investment firms, hedge funds, and corporate finance teams." },
  { cat:"Financial Modelling", q:"Can you build algorithmic trading or quantitative research tools?", a:"Yes. We build backtesting frameworks, alpha factor research pipelines, execution algorithms, and real-time market data pipelines. We use Python (pandas, numpy, scipy), R, and C++ for performance-critical components. We integrate with Bloomberg, Refinitiv, and proprietary data feeds." },
  { cat:"Financial Modelling", q:"How do you handle financial data quality and reconciliation?", a:"Financial data quality is non-negotiable. We implement automated reconciliation pipelines, data lineage tracking, and exception reporting so every number is traceable to its source. We follow SOX compliance requirements for auditability and build controls that satisfy internal audit and external regulators." },
  { cat:"Statistical Analysis", q:"What statistical methods do you apply?", a:"Our statisticians apply frequentist and Bayesian inference, hypothesis testing (t-tests, ANOVA, chi-square, Mann-Whitney), regression analysis (OLS, logistic, Poisson, mixed-effects), survival analysis, time-series analysis (ARIMA, SARIMA, VAR, state space models), causal inference (difference-in-differences, instrumental variables, propensity score matching), and experimental design (A/B testing, factorial designs, power analysis)." },
  { cat:"Statistical Analysis", q:"Can you design and analyse A/B tests and experiments?", a:"Yes. We design statistically rigorous experiments — determining sample sizes, randomisation strategies, and guardrail metrics upfront. We analyse results using frequentist or Bayesian methods, control for multiple comparisons, and quantify practical significance alongside statistical significance. We have run experiments at scale across e-commerce, fintech, healthcare, and SaaS platforms." },
  { cat:"Statistical Analysis", q:"Do you offer econometric or causal analysis?", a:"Yes. We use instrumental variables, regression discontinuity, difference-in-differences, synthetic control methods, and directed acyclic graphs (DAGs) to establish causality — not just correlation. This is critical for policy evaluation, marketing mix modelling, and understanding the true impact of business decisions." },
  { cat:"Data Engineering", q:"What data stack do you build on?", a:"We build modern data stacks using dbt for transformation, Airflow or Prefect for orchestration, Kafka or Kinesis for streaming, Spark for large-scale batch processing, and Snowflake, BigQuery, or Databricks as the warehouse or lakehouse layer. We design for scalability, cost-efficiency, and maintainability — not just to get something running." },
  { cat:"Data Engineering", q:"Can you build real-time data pipelines?", a:"Yes. We build sub-100ms latency pipelines for fraud detection, recommendation engines, IoT sensor processing, and live dashboards. We use Apache Flink, Kafka Streams, and AWS Kinesis for event-driven architectures with exactly-once processing semantics and fault tolerance built in." },
  { cat:"Data Engineering", q:"How do you ensure data quality across pipelines?", a:"We implement Great Expectations or dbt tests for schema validation, null checks, referential integrity, and statistical distribution monitoring at every pipeline stage. We build data observability dashboards so your team knows immediately when something breaks or drifts — before it reaches a business report." },
  { cat:"Business Intelligence", q:"What BI tools do you work with?", a:"We are proficient in Tableau, Power BI, Looker, Metabase, and Apache Superset. We also build custom dashboards using React and D3.js when off-the-shelf tools cannot meet performance or customisation requirements. We design dashboards for executives, analysts, and operational teams — each with the right level of detail and interactivity." },
  { cat:"Business Intelligence", q:"How do you ensure dashboards stay accurate as data changes?", a:"We build automated data quality checks upstream, set up alerting for pipeline failures, and version-control all SQL and dashboard definitions. We implement semantic layers (using dbt metrics or LookML) so metric definitions are consistent across every report and cannot diverge over time." },
  { cat:"Security & Compliance", q:"How do you handle sensitive and regulated data?", a:"We implement data classification frameworks, column-level encryption, dynamic data masking, and role-based access control so sensitive fields (PII, PHI, financial data) are only accessible to authorised users. We are experienced with GDPR, HIPAA, CCPA, PCI-DSS, and SOC 2 requirements and build compliance into the architecture from day one." },
  { cat:"Security & Compliance", q:"Do you support on-premise deployments for regulated industries?", a:"Yes. For clients in banking, healthcare, and government where data cannot leave on-premise environments, we deploy on bare-metal or private cloud infrastructure. We have experience with air-gapped environments and can work within strict network security policies." },
  { cat:"Engagement Model", q:"How do engagements typically start?", a:"We start with a free 1-hour discovery call to understand your problem, data maturity, and goals. We then deliver a scoping document with a proposed approach, timeline, team, and fixed-price quote within 5 business days. No vague estimates — you know exactly what you are getting before signing anything." },
  { cat:"Engagement Model", q:"Can we hire dedicated data scientists or engineers from your team?", a:"Yes. We offer embedded team models where our data scientists, ML engineers, or data engineers work as an extension of your team — full-time, virtually, at a fraction of the cost of hiring locally. Minimum engagement is 3 months." },
];

const CATS = ["All", ...Array.from(new Set(FAQS.map(f => f.cat)))];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

// ─── SVG illustration: abstract question mark ──────────────────────
const QuestionMarkSVG = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "180px" }}>
    <circle cx="100" cy="100" r="80" stroke="#3b82f6" strokeWidth="2" opacity="0.08" />
    <circle cx="100" cy="100" r="60" stroke="#3b82f6" strokeWidth="2" opacity="0.12" />
    <path d="M100 30 C70 30 50 50 50 80 C50 100 60 110 75 118 C85 124 90 132 90 142 L90 150" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
    <circle cx="90" cy="168" r="10" fill="#3b82f6" opacity="0.3" />
    <path d="M100 50 C120 50 135 65 135 85 C135 105 120 115 105 125 C95 132 90 142 90 150" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
    <circle cx="90" cy="168" r="8" fill="#3b82f6" opacity="0.6" />
    <circle cx="100" cy="100" r="30" fill="#3b82f6" opacity="0.04" />
  </svg>
);

export default function FAQPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);
  const [open, setOpen] = useState(null);
  const [cat, setCat] = useState("All");

  const filtered = cat === "All" ? FAQS : FAQS.filter(f => f.cat === cat);

  return (
    <div className={styles.page}>
      <SEO
        title="FAQ | Scape Data Solutions"
        description="Frequently asked questions about AI, machine learning, financial modelling, statistics, data engineering, and BI."
        path="/faq"
        schema={faqSchema}
      />

      <Navbar activeNav="faq" />

      <main>
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                  Frequently Asked Questions
                </h1>
                <p className={styles.heroSub}>
                  Deep answers on AI, statistical modelling, financial analytics,
                  data engineering, and how we work. Can’t find what you need?{" "}
                  <Link to="/contact" className={styles.heroLink}>Ask us directly.</Link>
                </p>
              </div>
              <div className={styles.heroVisual}>
                <QuestionMarkSVG />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.container} style={{ padding: "2.5rem 1.5rem" }}>
          <div className={styles.ctaBox} style={{ marginTop: 0 }}>
            <h2>Prefer to just get started?</h2>
            <p>If you already know what you need, skip the questions and submit your project directly through the client portal.</p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="https://portal.scapedatasolutions.com/portal/signup" className={styles.ctaBtn}>Submit a Project <ArrowRight size={16} /></a>
              <a href="https://portal.scapedatasolutions.com/portal/login" className={styles.heroLink}>Log In</a>
            </div>
          </div>
        </section>

        {/* ─── FAQ LIST ────────────────────────────────────────────── */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            {/* Category filter */}
            <div className={styles.catRow}>
              {CATS.map((c, i) => (
                <button
                  key={i}
                  className={cat === c ? styles.catBtnOn : styles.catBtn}
                  onClick={() => { setCat(c); setOpen(null); }}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* FAQ items */}
            <div className={styles.list}>
              <AnimatePresence mode="wait">
                {filtered.map((f, i) => (
                  <motion.div
                    key={f.q}
                    className={styles.item}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, delay: i * 0.03 }}
                  >
                    <div
                      className={styles.question}
                      onClick={() => setOpen(open === i ? null : i)}
                    >
                      <div className={styles.qLeft}>
                        <span className={styles.qCat}>{f.cat}</span>
                        <span className={styles.qText}>{f.q}</span>
                      </div>
                      <motion.span
                        animate={{ rotate: open === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.chevron}
                      >
                        <ChevronDown size={20} />
                      </motion.span>
                    </div>
                    <AnimatePresence>
                      {open === i && (
                        <motion.div
                          className={styles.answer}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p>{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <motion.div
              className={styles.ctaBox}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Still have questions?</h2>
              <p>
                Our data scientists and engineers are happy to discuss your specific problem —
                no sales pitch, just honest advice.
              </p>
              <Link to="/contact" className={styles.ctaBtn}>
                Talk To Our Team <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}