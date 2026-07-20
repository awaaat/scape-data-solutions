// src/pages/Services/SurveyDataAnalysis/SurveyDataAnalysisPage.jsx
//
// Dedicated page for /services/survey-data-analysis.

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, Users, Sparkles } from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SEO from "../../../components/SEO/SEO";
import { fadeUp, staggerContainer, VIEW_ONCE } from "../../../utils/animations";
import styles from "./SurveyDataAnalysisPage.module.css";

// ─── Messy → clean grid animated break (specific to this page) ──
const MessyCleanBreak = () => (
  <svg viewBox="0 0 400 200" className={styles.breakSvg}>
    {[...Array(9)].map((_, i) => {
      const row = Math.floor(i / 3);
      const col = i % 3;
      const jitter = ((i * 37) % 10) - 5;
      return (
        <motion.rect
          key={`m-${i}`}
          x={20 + col * 30 + jitter} y={30 + row * 30 + jitter}
          width="22" height="14" rx="2"
          fill="#ffffff" opacity="0.25"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: [0, (i % 2 ? 8 : -8), 0] }}
          viewport={VIEW_ONCE}
          transition={{ duration: 1.6, delay: i * 0.05 }}
        />
      );
    })}
    <motion.path
      d="M140 100 L260 100" stroke="#fdb840" strokeWidth="2" markerEnd="url(#arrow-survey)"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VIEW_ONCE}
      transition={{ duration: 0.6, delay: 0.6 }}
    />
    <defs>
      <marker id="arrow-survey" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" fill="#fdb840" />
      </marker>
    </defs>
    {[...Array(9)].map((_, i) => {
      const row = Math.floor(i / 3);
      const col = i % 3;
      return (
        <motion.rect
          key={`c-${i}`}
          x={290 + col * 30} y={30 + row * 30}
          width="22" height="14" rx="2"
          fill="#fdb840"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={VIEW_ONCE}
          transition={{ duration: 0.4, delay: 0.9 + i * 0.05 }}
        />
      );
    })}
  </svg>
);

const Reveal = ({ children, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
};

const SurveyDataAnalysisPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Survey Data Analysis",
    description:
      "Cleaning and statistical analysis of survey exports from Kobo, ODK, Google Forms, and SurveyMonkey for NGOs, companies, and researchers.",
    provider: { "@type": "ProfessionalService", name: "Scape Data Solutions" },
    areaServed: ["US", "CA", "PK", "KE"],
  };

  return (
    <>
      <SEO
        title="Survey Data Analysis | Scape Data Solutions"
        description="From Kobo, ODK, or Google Forms exports to clean, analyzed survey results — for NGOs, companies, and researchers."
        path="/services/survey-data-analysis"
        schema={schema}
      />
      <Navbar />

      <main className={styles.page}>
        {/* ── Hero ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroGradient} />
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className={styles.heroBadge} variants={fadeUp}>
              <Sparkles size={13} /> For NGOs, Companies & Researchers
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              <span className={styles.highlight}>Survey</span> Data Analysis
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              From Kobo, ODK, or Google Forms exports to clean, analyzed results.
            </motion.p>
            <motion.p className={styles.heroQuote} variants={fadeUp}>
              "I've completed a survey."
            </motion.p>
            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>10,000+</span>
                <span className={styles.statLabel}>Survey responses processed</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>5+</span>
                <span className={styles.statLabel}>Platforms supported</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>72hrs</span>
                <span className={styles.statLabel}>Standard turnaround</span>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link to="/contact" className={styles.ctaButton}>
                Get Started <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Who it's for ── */}
        <Reveal className={styles.audienceSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            Who This Is For
          </motion.h2>
          <div className={styles.audienceGrid}>
            {["NGOs", "Companies", "Researchers", "Government Programs"].map((a) => (
              <motion.div key={a} variants={fadeUp} className={styles.audienceChip}>
                <Users size={15} /> {a}
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Problem statement ── */}
        <Reveal className={styles.problemSection}>
          <motion.p variants={fadeUp} className={styles.problemText}>
            Survey exports from KoboToolbox, ODK, Google Forms, or SurveyMonkey rarely arrive
            analysis‑ready — duplicate submissions, inconsistent coding, open‑ended responses, and
            skipped logic all need cleaning first.
          </motion.p>
          <motion.p variants={fadeUp} className={styles.problemText}>
            We take the raw export and deliver a full analysis: response rates, cross‑tabulations,
            significance testing, and a written summary of what the data actually says about your
            target population.
          </motion.p>
        </Reveal>

        {/* ── Animated break ── */}
        <section className={styles.breakSection}>
          <MessyCleanBreak />
        </section>

        {/* ── Offerings ── */}
        <Reveal className={styles.offeringsSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            What's Included
          </motion.h2>
          <div className={styles.offeringsGrid}>
            {[
              "Data cleaning and duplicate/outlier removal",
              "Coding of open‑ended responses",
              "Cross‑tabulation and subgroup analysis",
              "Significance testing across groups",
              "Charts and summary tables ready for reports",
            ].map((o) => (
              <motion.div key={o} variants={fadeUp} className={styles.offeringCard}>
                <CheckCircle size={18} className={styles.offeringIcon} />
                <span>{o}</span>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className={styles.toolsRow}>
            <span className={styles.toolsLabel}>Tools we use:</span>
            {["Kobo Toolbox", "ODK", "SPSS", "Excel", "Power BI"].map((t) => (
              <span key={t} className={styles.toolTag}>{t}</span>
            ))}
          </motion.div>
        </Reveal>

        {/* ── Workflow ── */}
        <Reveal className={styles.workflowSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            How It Works
          </motion.h2>
          <div className={styles.workflowGrid}>
            {[
              { title: "Export Your Data", description: "Send the raw export directly from Kobo, ODK, Google Forms, or your survey tool of choice." },
              { title: "Cleaning & Coding", description: "We remove duplicates, handle missing data, and code open‑ended responses." },
              { title: "Analysis", description: "We run cross‑tabs, significance tests, and subgroup comparisons aligned to your indicators." },
              { title: "Reporting", description: "You receive charts, tables, and a written summary ready to paste into your report or dashboard." },
            ].map((step, i) => (
              <motion.div key={step.title} variants={fadeUp} className={styles.workflowStep}>
                <span className={styles.workflowNumber}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Why choose us ── */}
        <Reveal className={styles.whySection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            Why Work With Us
          </motion.h2>
          <div className={styles.whyGrid}>
            {[
              "Experience with Kobo/ODK exports specific to M&E and field surveys",
              "Handles messy, real‑world data — not just clean textbook datasets",
              "Deliverables formatted for donor and board reports",
              "Fast turnaround for time‑sensitive program reporting",
            ].map((w) => (
              <motion.div key={w} variants={fadeUp} className={styles.whyItem}>
                <CheckCircle size={18} className={styles.offeringIcon} />
                <span>{w}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── FAQ ── */}
        <Reveal className={styles.faqSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            Frequently Asked Questions
          </motion.h2>
          <div className={styles.faqList}>
            {[
              { q: "Can you work directly with Kobo/ODK exports?", a: "Yes, we regularly clean and analyze exports from both platforms without extra formatting on your end." },
              { q: "Do you handle open‑ended questions?", a: "Yes — we code qualitative responses into analyzable categories or provide thematic summaries." },
              { q: "Can you compare results across regions or demographics?", a: "Yes, subgroup and cross‑tabulation analysis is a core part of this service." },
              { q: "Do you also design the survey itself?", a: "Survey design falls under our Research Methodology Consulting service — we can support both." },
            ].map((f) => (
              <motion.details key={f.q} variants={fadeUp} className={styles.faqItem}>
                <summary>
                  {f.q} <ChevronDown size={16} className={styles.faqChevron} />
                </summary>
                <p>{f.a}</p>
              </motion.details>
            ))}
          </div>
        </Reveal>

        {/* ── Related articles ── */}
        <Reveal className={styles.articlesSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            Related Articles
          </motion.h2>
          <div className={styles.articlesGrid}>
            {[
              { title: "Cleaning Kobo/ODK Survey Exports", slug: "cleaning-kobo-odk-survey-exports" },
              { title: "Cross‑Tabulation Explained", slug: "cross-tabulation-explained" },
              { title: "Coding Open‑Ended Survey Responses", slug: "coding-open-ended-survey-responses" },
              { title: "Chi‑Square Tests for Survey Data", slug: "chi-square-tests-survey-data" },
            ].map((a) => (
              <motion.div key={a.slug} variants={fadeUp}>
                <Link to={`/resources/${a.slug}`} className={styles.articleLink}>
                  {a.title} <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Final CTA ── */}
        <section className={styles.finalCta}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEW_ONCE}
            variants={staggerContainer}
            className={styles.finalCtaInner}
          >
            <motion.h2 variants={fadeUp}>Survey closed, data waiting?</motion.h2>
            <motion.p variants={fadeUp}>Send the export and we'll turn it into a report‑ready analysis.</motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/contact" className={styles.ctaButton}>
                Talk To Us <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SurveyDataAnalysisPage;