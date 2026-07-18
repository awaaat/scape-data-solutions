// src/pages/Services/Chapter4Analysis/Chapter4AnalysisPage.jsx
//
// Dedicated page for /services/chapter-4-analysis.

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, Users, Sparkles } from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SEO from "../../../components/SEO/SEO";
import { fadeUp, staggerContainer, VIEW_ONCE } from "../../../utils/animations";
import styles from "./Chapter4AnalysisPage.module.css";

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

const Chapter4AnalysisPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chapter 4 Analysis",
    description:
      "Data coding, statistical analysis, and results write-up for thesis and dissertation Chapter 4 — Results and Findings.",
    provider: { "@type": "ProfessionalService", name: "Scape Data Solutions" },
    areaServed: ["US", "CA", "PK", "KE"],
  };

  return (
    <>
      <SEO
        title="Chapter 4 Analysis | Scape Data Solutions"
        description="Stuck on results and findings? We get you from data to a defensible Chapter 4, formatted to your university's requirements."
        path="/services/chapter-4-analysis"
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
              <Sparkles size={13} /> For Thesis & Dissertation Students
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              <span className={styles.highlight}>Chapter 4</span> Analysis
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Stuck on results and findings? We get you from data to a defensible Chapter 4.
            </motion.p>
            <motion.p className={styles.heroQuote} variants={fadeUp}>
              "I'm stuck writing Chapter 4."
            </motion.p>
            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>300+</span>
                <span className={styles.statLabel}>Theses supported</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>APA/MLA</span>
                <span className={styles.statLabel}>Formatting included</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>1 free</span>
                <span className={styles.statLabel}>Revision round</span>
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
            {["Undergraduate Students", "Masters Students", "PhD Candidates"].map((a) => (
              <motion.div key={a} variants={fadeUp} className={styles.audienceChip}>
                <Users size={15} /> {a}
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Problem statement ── */}
        <Reveal className={styles.problemSection}>
          <motion.p variants={fadeUp} className={styles.problemText}>
            Chapter 4 is where most students stall — the data is collected, but turning it into a
            coherent Results and Findings chapter that satisfies a supervisor's expectations feels
            impossible without statistical training.
          </motion.p>
          <motion.p variants={fadeUp} className={styles.problemText}>
            We handle the coding, descriptive tables, hypothesis testing, and narrative write‑up,
            structured exactly the way your department expects — objective by objective, hypothesis
            by hypothesis.
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
              "Data coding and cleaning",
              "Descriptive statistics tables and charts",
              "Hypothesis testing aligned to research objectives",
              "APA/MLA formatted results narrative",
              "Alignment check against Chapter 1 & 3",
              "Revision support before your defense",
            ].map((o) => (
              <motion.div key={o} variants={fadeUp} className={styles.offeringCard}>
                <CheckCircle size={18} className={styles.offeringIcon} />
                <span>{o}</span>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className={styles.toolsRow}>
            <span className={styles.toolsLabel}>Tools we use:</span>
            {["SPSS", "STATA", "Excel", "R"].map((t) => (
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
              { title: "Send Chapters 1–3 & Data", description: "We review your objectives, hypotheses, and questionnaire alongside your raw dataset." },
              { title: "Coding & Analysis", description: "Data is coded and analyzed test‑by‑test, matched to each objective or hypothesis." },
              { title: "Chapter 4 Draft", description: "You receive a full draft with tables, figures, and narrative interpretation in your required format." },
              { title: "Revision & Defense Prep", description: "One free revision round, plus a walkthrough so you can defend every result confidently." },
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
              "Results are matched objective‑by‑objective and hypothesis‑by‑hypothesis",
              "Formatted to your university's specific style guide",
              "You'll understand every result well enough to defend it live",
              "Fast turnaround for tight submission deadlines",
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
              { q: "Do you write the whole chapter or just run the stats?", a: "Both — we can run analysis only, or provide the full written Chapter 4 draft, depending on what you need." },
              { q: "Can you match my university's specific format?", a: "Yes, send your department's guidelines and we'll follow them exactly." },
              { q: "What if my supervisor asks for changes?", a: "One revision round is included; further revisions are billed at a reduced rate." },
              { q: "Can you help me prepare for my defense?", a: "Yes, we offer a walkthrough session covering every result so you can answer panel questions confidently." },
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
              { title: "How to Structure a Chapter 4", slug: "how-to-structure-chapter-4" },
              { title: "Common SPSS Mistakes", slug: "common-spss-mistakes" },
              { title: "Aligning Objectives, Hypotheses & Results", slug: "aligning-objectives-hypotheses-results" },
              { title: "How to Interpret Regression Results", slug: "interpreting-regression-results" },
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
            <motion.h2 variants={fadeUp}>Deadline approaching?</motion.h2>
            <motion.p variants={fadeUp}>Send your Chapters 1–3 and data — we'll get Chapter 4 moving.</motion.p>
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

export default Chapter4AnalysisPage;