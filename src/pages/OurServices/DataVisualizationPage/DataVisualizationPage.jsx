// src/pages/Services/DataVisualization/DataVisualizationPage.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BarChart3,
  LayoutDashboard,
  LineChart,
  MonitorSmartphone,
  PieChart,
  Sparkles,
  Zap,
} from "lucide-react";
import PageLayout, {
  fadeUp,
  slideL,
  slideR,
  stagger,
  spring,
  REPLAY_VIEWPORT,
} from "../../../components/Layout/PageLayout";
import styles from "./DataVisualizationPage.module.css";
import hStyles from "../../Home/HomePage.module.css";
import { apiService } from "../../../services/api";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

/* ─── Data ──────────────────────────────────────────────────────────── */
const DELIVERABLES = [
  {
    icon: <LayoutDashboard size={28} />,
    title: "Executive Dashboards",
    description:
      "Real-time dashboards that surface the metrics leadership actually checks daily, built in Power BI, Tableau, or Looker.",
  },
  {
    icon: <LineChart size={28} />,
    title: "Custom Reporting Suites",
    description:
      "Scheduled and self-serve reports that replace manual spreadsheet work across finance, sales, and operations.",
  },
  {
    icon: <PieChart size={28} />,
    title: "Interactive Data Stories",
    description:
      "Narrative-driven visualizations that make complex datasets understandable to non-technical stakeholders.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Embedded Analytics",
    description:
      "White-labeled charts and dashboards embedded directly into your product or client-facing portal.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Audit & Discovery",
    description:
      "We map your existing data sources, KPIs, and reporting pain points before touching a single chart.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "We wireframe dashboard layouts and validate them with stakeholders before building anything production-ready.",
  },
  {
    step: "03",
    title: "Build & Automate",
    description:
      "We build the pipelines and visualizations, then automate refresh schedules so reports stay current without manual work.",
  },
  {
    step: "04",
    title: "Train & Handoff",
    description:
      "We document everything and train your team so dashboards stay useful long after the engagement ends.",
  },
];

const TOOLS = [
  "Power BI",
  "Tableau",
  "Looker",
  "D3.js",
  "Plotly",
  "Metabase",
];

/* ─── Component ─────────────────────────────────────────────────────── */
export default function DataVisualizationPagePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <PageLayout activeNav="services">
    <SEO
      title="Data Visualization | Scape Data Solutions"
      description="We turn scattered spreadsheets and disconnected data sources into clear, interactive dashboards."
      path="/services/data-visualization"
      schema={buildServiceSchema({
        name: "Data Visualization",
        description: "We turn scattered spreadsheets and disconnected data sources into clear, interactive dashboards.",
        path: "/services/data-visualization",
      })}
    />
      <Helmet>
        <title>Data Visualization Services | Scape Data Solutions</title>
        <meta
          name="description"
          content="Custom dashboards, reporting suites, and embedded analytics that turn raw data into decisions your team can act on daily."
        />
        <link
          rel="canonical"
          href="https://www.scapedatasolutions.com/services/data-visualization"
        />
      </Helmet>

      {/* ── Hero ── */}
      <motion.section
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{ paddingTop: "80px" }}
      >
        <div className={styles.heroContent}>
          <motion.div className={hStyles.heroBadge} variants={fadeUp} style={{ marginBottom: 16 }}>
            <Sparkles size={13} /> Data Visualization
          </motion.div>
          <motion.h1 className={styles.heroTitle} variants={slideL}>
            Dashboards Your Team Will Actually Use
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeUp}>
            We turn scattered spreadsheets and disconnected data sources into
            clear, interactive dashboards that make daily decisions faster
            and more confident.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              onClick={() =>
                apiService.trackInteraction("conversion", "data_visualization_hero_cta", {
                  cta: "data_visualization_hero",
                })
              }
              className={styles.heroButton}
            >
              <motion.span
                style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}
                whileHover={{ gap: "1rem" }}
                transition={{ duration: 0.2 }}
              >
                Talk to Us <ArrowRight size={20} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Deliverables ── */}
      <section className={styles.deliverablesSection}>
        <div className={styles.sectionContent}>
          <motion.div
            className={hStyles.secHead}
            initial="hidden"
            whileInView="visible"
            viewport={REPLAY_VIEWPORT}
            variants={fadeUp}
          >
            <h2 className={hStyles.secTitle}>What We Deliver</h2>
          </motion.div>
          <motion.div
            className={styles.deliverablesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={REPLAY_VIEWPORT}
            variants={stagger}
          >
            {DELIVERABLES.map((item, i) => (
              <motion.div
                key={i}
                className={styles.deliverableCard}
                variants={spring}
                whileHover={{ y: -4, boxShadow: "0 8px 28px rgba(0,0,0,0.08)", borderColor: "#fdb840" }}
              >
                <motion.div
                  className={styles.deliverableIcon}
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 350 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className={styles.deliverableTitle}>{item.title}</h3>
                <p className={styles.deliverableDescription}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.processSection}>
        <div className={styles.sectionContent}>
          <motion.div
            className={hStyles.secHead}
            initial="hidden"
            whileInView="visible"
            viewport={REPLAY_VIEWPORT}
            variants={fadeUp}
          >
            <h2 className={hStyles.secTitle}>How We Work</h2>
          </motion.div>
          <motion.div
            className={styles.processGrid}
            initial="hidden"
            whileInView="visible"
            viewport={REPLAY_VIEWPORT}
            variants={stagger}
          >
            {PROCESS.map((item, i) => (
              <motion.div key={i} className={styles.processCard} variants={spring}>
                <div className={styles.processStep}>{item.step}</div>
                <h3 className={styles.processTitle}>{item.title}</h3>
                <p className={styles.processDescription}>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Tools ── */}
      <motion.section
        className={styles.toolsSection}
        initial="hidden"
        whileInView="visible"
        viewport={REPLAY_VIEWPORT}
        variants={fadeUp}
      >
        <div className={styles.sectionContent}>
          <div className={hStyles.secHead}>
            <h2 className={hStyles.secTitle}>Tools We Work With</h2>
          </div>
          <motion.div className={styles.toolsRow} variants={stagger}>
            {TOOLS.map((tool, i) => (
              <motion.span key={i} className={styles.toolChip} variants={spring}>
                <BarChart3 size={14} /> {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── CTA ── */}
      <motion.section
        className={styles.ctaSection}
        initial="hidden"
        whileInView="visible"
        viewport={REPLAY_VIEWPORT}
        variants={fadeUp}
      >
        <div className={styles.ctaContent}>
          <motion.h2 className={styles.ctaTitle} variants={slideL}>
            Ready to See Your Data Clearly?
          </motion.h2>
          <motion.p className={styles.ctaText} variants={fadeUp}>
            Let's build dashboards that get used, not ignored.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              onClick={() =>
                apiService.trackInteraction("conversion", "data_visualization_cta_click", {
                  cta: "data_visualization_bottom",
                })
              }
              className={styles.ctaButton}
            >
              <motion.span
                style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}
                whileHover={{ gap: "1rem" }}
                transition={{ duration: 0.2 }}
              >
                Start Your Journey <ArrowRight size={20} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </PageLayout>
  );
}