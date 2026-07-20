// src/pages/Services/DataCleaning/DataCleaningPage.jsx
//
// Dedicated page for /services/data-cleaning.

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, Users, Sparkles } from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SEO from "../../../components/SEO/SEO";
import { fadeUp, staggerContainer, VIEW_ONCE } from "../../../utils/animations";
import styles from "./DataCleaningPage.module.css";

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
      d="M140 100 L260 100" stroke="#fdb840" strokeWidth="2" markerEnd="url(#arrow-clean)"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VIEW_ONCE}
      transition={{ duration: 0.6, delay: 0.6 }}
    />
    <defs>
      <marker id="arrow-clean" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
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

const DataCleaningPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data Cleaning",
    description:
      "Duplicate removal, missing data handling, and standardization of messy datasets before analysis.",
    provider: { "@type": "ProfessionalService", name: "Scape Data Solutions" },
    areaServed: ["US", "CA", "PK", "KE"],
  };

  return (
    <>
      <SEO
        title="Data Cleaning | Scape Data Solutions"
        description="Duplicates, missing values, inconsistent labels — sorted before analysis begins. Every change documented."
        path="/services/data-cleaning"
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
              <Sparkles size={13} /> For Anyone With Messy Data
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Data <span className={styles.highlight}>Cleaning</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Duplicates, missing values, inconsistent labels — sorted before analysis begins.
            </motion.p>
            <motion.p className={styles.heroQuote} variants={fadeUp}>
              "My data is messy."
            </motion.p>
            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>1M+</span>
                <span className={styles.statLabel}>Rows cleaned to date</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Traceable cleaning log</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>Any</span>
                <span className={styles.statLabel}>Format accepted</span>
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
            {["Students", "NGOs", "Companies", "Researchers"].map((a) => (
              <motion.div key={a} variants={fadeUp} className={styles.audienceChip}>
                <Users size={15} /> {a}
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Problem statement ── */}
        <Reveal className={styles.problemSection}>
          <motion.p variants={fadeUp} className={styles.problemText}>
            Messy data — duplicate entries, inconsistent category labels, missing values, mismatched
            date formats — is the single biggest reason analysis takes longer than it should, and the
            biggest reason results end up wrong.
          </motion.p>
          <motion.p variants={fadeUp} className={styles.problemText}>
            We clean your dataset properly: standardizing categories, handling missing values with
            documented, defensible methods, and removing duplicates, so whatever analysis comes next
            is built on a solid foundation.
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
              "Duplicate and outlier detection",
              "Missing data handling (imputation or documented exclusion)",
              "Standardizing inconsistent categories and labels",
              "Data type and format correction",
              "A cleaning log documenting every change made",
            ].map((o) => (
              <motion.div key={o} variants={fadeUp} className={styles.offeringCard}>
                <CheckCircle size={18} className={styles.offeringIcon} />
                <span>{o}</span>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className={styles.toolsRow}>
            <span className={styles.toolsLabel}>Tools we use:</span>
            {["Excel", "Python (Pandas)", "R", "SPSS", "OpenRefine"].map((t) => (
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
              { title: "Send Raw Data", description: "Any format — Excel, CSV, SPSS, database export." },
              { title: "Diagnostic Pass", description: "We identify duplicates, missing values, inconsistent coding, and structural issues." },
              { title: "Cleaning", description: "Issues are resolved using documented, defensible methods — nothing silently changed." },
              { title: "Clean Data + Log", description: "You receive the cleaned dataset plus a log explaining every change made, for full transparency." },
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
              "Every change is logged — nothing is altered without a record",
              "Methods are defensible for academic and audit purposes",
              "Works with any format or platform",
              "Often paired with our analysis or visualization services next",
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
              { q: "Will you change my data without telling me?", a: "Never — every change is documented in a cleaning log delivered alongside your data." },
              { q: "How do you handle missing values?", a: "Depending on context: documented exclusion, mean/median imputation, or model‑based imputation — always explained." },
              { q: "Can you clean data from multiple sources at once?", a: "Yes, including merging and reconciling datasets from different tools or time periods." },
              { q: "Do you also analyze the data after cleaning?", a: "Yes — this pairs directly with our Research Data Analysis or Survey Data Analysis services." },
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
              { title: "Common SPSS Mistakes", slug: "common-spss-mistakes" },
              { title: "Handling Missing Data: A Practical Guide", slug: "handling-missing-data" },
              { title: "Cleaning Kobo/ODK Survey Exports", slug: "cleaning-kobo-odk-survey-exports" },
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
            <motion.h2 variants={fadeUp}>Spreadsheet giving you a headache?</motion.h2>
            <motion.p variants={fadeUp}>Send it over — we'll clean it and document every change.</motion.p>
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

export default DataCleaningPage;