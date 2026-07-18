// src/pages/Services/ResearchDataAnalysis/ResearchDataAnalysisPage.jsx
//
// Dedicated page for /services/research-data-analysis.
// Nothing generic here — content, copy, and structure are specific
// to this one service. Only Navbar/Footer/SEO and the shared
// framer-motion variants (src/utils/animations.js) are reused.

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, Users, Sparkles } from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SEO from "../../../components/SEO/SEO";
import { fadeUp, staggerContainer, VIEW_ONCE } from "../../../utils/animations";
import styles from "./ResearchDataAnalysisPage.module.css";

// ─── Regression scatter+line animated break (specific to this page) ──
const RegressionBreak = () => (
  <svg viewBox="0 0 400 200" className={styles.breakSvg}>
    <line x1="20" y1="170" x2="380" y2="170" stroke="#fdb840" strokeWidth="1" opacity="0.3" />
    <line x1="20" y1="170" x2="20" y2="20" stroke="#fdb840" strokeWidth="1" opacity="0.3" />
    {[...Array(14)].map((_, i) => {
      const x = 40 + i * 24 + (i % 3) * 6;
      const y = 160 - i * 9 - (i % 4) * 8;
      return (
        <motion.circle
          key={i} cx={x} cy={y} r="4" fill="#fdb840"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.85, scale: 1 }}
          viewport={VIEW_ONCE}
          transition={{ delay: i * 0.06, duration: 0.4, type: "spring" }}
        />
      );
    })}
    <motion.line
      x1="30" y1="165" x2="370" y2="30"
      stroke="#ffffff" strokeWidth="2.5"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={VIEW_ONCE}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
    />
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

const ResearchDataAnalysisPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Research Data Analysis",
    description:
      "Statistical analysis of collected research data — descriptive and inferential statistics, regression, and results write-up.",
    provider: { "@type": "ProfessionalService", name: "Scape Data Solutions" },
    areaServed: ["US", "CA", "PK", "KE"],
  };

  return (
    <>
      <SEO
        title="Research Data Analysis | Scape Data Solutions"
        description="You've collected your data. We turn it into defensible, publication-ready statistical results — for researchers, NGOs, and postgraduate students."
        path="/services/research-data-analysis"
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
              <Sparkles size={13} /> For Researchers, NGOs & Postgraduate Students
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Research Data <span className={styles.highlight}>Analysis</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              You've collected your data. We turn it into defensible, publication‑ready results.
            </motion.p>
            <motion.p className={styles.heroQuote} variants={fadeUp}>
              "I have collected data. Help me analyze it."
            </motion.p>
            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>500+</span>
                <span className={styles.statLabel}>Datasets analyzed</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>48hrs</span>
                <span className={styles.statLabel}>Typical turnaround</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Confidential handling</span>
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
            {["Postgraduate Students", "NGOs", "Independent Researchers", "Academic Institutions"].map((a) => (
              <motion.div key={a} variants={fadeUp} className={styles.audienceChip}>
                <Users size={15} /> {a}
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Problem statement ── */}
        <Reveal className={styles.problemSection}>
          <motion.p variants={fadeUp} className={styles.problemText}>
            You've spent months collecting data — surveys, lab results, field observations — and now
            you're staring at a spreadsheet that doesn't mean anything yet. Analyzing it correctly,
            choosing the right tests, and writing results a supervisor or reviewer won't reject is a
            different skill from collecting it.
          </motion.p>
          <motion.p variants={fadeUp} className={styles.problemText}>
            We take your raw data and turn it into clean, correctly‑run statistical output with
            plain‑language interpretation, so you understand exactly what your results mean and can
            defend them in a viva or peer review.
          </motion.p>
        </Reveal>

        {/* ── Animated break ── */}
        <section className={styles.breakSection}>
          <RegressionBreak />
        </section>

        {/* ── Offerings ── */}
        <Reveal className={styles.offeringsSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            What's Included
          </motion.h2>
          <div className={styles.offeringsGrid}>
            {[
              "Descriptive statistics (means, frequencies, cross‑tabs)",
              "Inferential tests — t‑tests, ANOVA, chi‑square, correlation",
              "Regression analysis (linear, logistic, multiple)",
              "Reliability testing (Cronbach's Alpha)",
              "Results write‑up in APA format",
              "One round of clarification/revision included",
            ].map((o) => (
              <motion.div key={o} variants={fadeUp} className={styles.offeringCard}>
                <CheckCircle size={18} className={styles.offeringIcon} />
                <span>{o}</span>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className={styles.toolsRow}>
            <span className={styles.toolsLabel}>Tools we use:</span>
            {["SPSS", "STATA", "R", "Excel", "Python"].map((t) => (
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
              { title: "Share Your Data", description: "Send your raw dataset and research questions/hypotheses in whatever format you have it." },
              { title: "We Confirm the Right Tests", description: "We map your questions and variable types to the correct statistical tests before running anything." },
              { title: "Analysis & Output", description: "We run the analysis and produce clean tables, figures, and syntax/output files." },
              { title: "Interpretation & Handover", description: "You receive a plain‑language write‑up of what each result means, ready to drop into your paper or report." },
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
              "Correct test selection, not just running whatever SPSS defaults to",
              "Interpretation written in plain English, not just raw output",
              "Confidential handling — your data is never shared or reused",
              "Direct access to the analyst, not a call center",
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
              { q: "What file formats can you work with?", a: "Excel, CSV, SPSS (.sav), STATA (.dta), or even paper questionnaires we can help you digitize first." },
              { q: "How long does analysis take?", a: "Most standard datasets are turned around in 24–72 hours depending on complexity and sample size." },
              { q: "Will you explain the results to me?", a: "Yes — every deliverable includes a written interpretation, and we're available for a follow‑up call if needed." },
              { q: "Is my data kept confidential?", a: "Always. We sign NDAs on request and never reuse or share client data." },
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

        {/* ── Related articles (content silo) ── */}
        <Reveal className={styles.articlesSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            Related Articles
          </motion.h2>
          <div className={styles.articlesGrid}>
            {[
              { title: "How to Choose the Right Statistical Test", slug: "choosing-the-right-statistical-test" },
              { title: "How to Interpret Regression Results", slug: "interpreting-regression-results" },
              { title: "ANOVA vs MANOVA: What's the Difference?", slug: "anova-vs-manova" },
              { title: "Cronbach's Alpha Explained", slug: "cronbachs-alpha-explained" },
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
            <motion.h2 variants={fadeUp}>Have data sitting on your laptop?</motion.h2>
            <motion.p variants={fadeUp}>Send it over and we'll tell you exactly which tests it needs.</motion.p>
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

export default ResearchDataAnalysisPage;