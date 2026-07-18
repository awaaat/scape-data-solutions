// src/pages/Services/StatisticalAnalysisConsulting/StatisticalAnalysisConsultingPage.jsx
//
// Dedicated page for /services/statistical-consulting.

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, Users, Sparkles } from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SEO from "../../../components/SEO/SEO";
import { fadeUp, staggerContainer, VIEW_ONCE } from "../../../utils/animations";
import styles from "./StatisticalAnalysisConsultingPage.module.css";

// ─── Decision-tree pulse animated break (specific to this page) ──
const DecisionTreeBreak = () => {
  const nodes = [
    { x: 200, y: 25 }, { x: 100, y: 100 }, { x: 300, y: 100 },
    { x: 50, y: 175 }, { x: 150, y: 175 }, { x: 250, y: 175 }, { x: 350, y: 175 },
  ];
  const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]];
  return (
    <svg viewBox="0 0 400 200" className={styles.breakSvg}>
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="#fdb840" strokeWidth="1.5" opacity="0.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={VIEW_ONCE}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i} cx={n.x} cy={n.y} r={i === 0 ? 9 : 6}
          fill={i === 0 ? "#fdb840" : "#ffffff"}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={VIEW_ONCE}
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ delay: i * 0.15, duration: 0.4, type: "spring" }}
        />
      ))}
    </svg>
  );
};

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

const StatisticalAnalysisConsultingPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Statistical Consulting",
    description:
      "Test-selection guidance, study design review, and analysis consulting for anyone unsure which statistical method fits their data.",
    provider: { "@type": "ProfessionalService", name: "Scape Data Solutions" },
    areaServed: ["US", "CA", "PK", "KE"],
  };

  return (
    <>
      <SEO
        title="Statistical Consulting | Scape Data Solutions"
        description="Not sure whether you need a t-test, ANOVA, or regression? Get expert statistical consulting before you run anything."
        path="/services/statistical-consulting"
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
              <Sparkles size={13} /> For Anyone Unsure Which Test to Use
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Statistical <span className={styles.highlight}>Consulting</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Not sure whether you need a t‑test, ANOVA, or regression? Start here.
            </motion.p>
            <motion.p className={styles.heroQuote} variants={fadeUp}>
              "I don't know which statistical test to use."
            </motion.p>
            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>1‑on‑1</span>
                <span className={styles.statLabel}>Consultation sessions</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>30min</span>
                <span className={styles.statLabel}>Free initial scoping call</span>
              </div>
              <div className={styles.statBlock}>
                <span className={styles.statValue}>15+</span>
                <span className={styles.statLabel}>Test types covered</span>
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
            {["Students", "Researchers", "NGOs", "Businesses"].map((a) => (
              <motion.div key={a} variants={fadeUp} className={styles.audienceChip}>
                <Users size={15} /> {a}
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Problem statement ── */}
        <Reveal className={styles.problemSection}>
          <motion.p variants={fadeUp} className={styles.problemText}>
            Most analysis mistakes happen before a single test is run — the wrong test is chosen for
            the data type, the hypothesis, or the sample size. Our Statistical Consulting service is
            the entry point for anyone who isn't sure what their data actually needs.
          </motion.p>
          <motion.p variants={fadeUp} className={styles.problemText}>
            We walk through your variables, your hypotheses, and your study design, and tell you
            exactly which statistical approach fits — then, if you want, we run it for you.
          </motion.p>
        </Reveal>

        {/* ── Animated break ── */}
        <section className={styles.breakSection}>
          <DecisionTreeBreak />
        </section>

        {/* ── Offerings ── */}
        <Reveal className={styles.offeringsSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            What's Included
          </motion.h2>
          <div className={styles.offeringsGrid}>
            {[
              "Test‑selection guidance based on variable type and design",
              "Sample size and power calculations",
              "Study design review",
              "Interpretation support for results you've already run",
              "Ongoing consulting retainers for organizations",
            ].map((o) => (
              <motion.div key={o} variants={fadeUp} className={styles.offeringCard}>
                <CheckCircle size={18} className={styles.offeringIcon} />
                <span>{o}</span>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className={styles.toolsRow}>
            <span className={styles.toolsLabel}>Tools we use:</span>
            {["SPSS", "STATA", "R", "Python", "Excel"].map((t) => (
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
              { title: "Book a Scoping Call", description: "Tell us your research question, variables, and what you're trying to find out." },
              { title: "We Map the Right Method", description: "We match your design to the correct statistical test or modeling approach." },
              { title: "Guided or Done‑for‑You", description: "Choose to run it yourself with our guidance, or hand it off entirely." },
              { title: "Sign‑off", description: "You leave with a documented rationale for the method chosen — useful for methodology chapters and reviewer responses." },
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
              "We explain the 'why' behind every recommendation",
              "Works for one‑off questions or ongoing organizational support",
              "No pressure to over‑complicate — simplest correct test wins",
              "Available for both academic and business contexts",
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
              { q: "Do I need to already have data?", a: "No — this service is often used before data collection, to design the study correctly from the start." },
              { q: "Can you review a test I already ran?", a: "Yes, we frequently review and correct analysis that's already been done." },
              { q: "Is this only for students?", a: "No — we support NGOs, companies, and independent researchers just as often." },
              { q: "How is this different from Research Data Analysis?", a: "This service focuses on the decision of what to do; Research Data Analysis focuses on doing it." },
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
              { title: "How to Choose the Right Statistical Test", slug: "choosing-the-right-statistical-test" },
              { title: "Parametric vs Non‑Parametric Tests", slug: "parametric-vs-nonparametric-tests" },
              { title: "Sample Size Calculation Basics", slug: "sample-size-calculation-basics" },
              { title: "Common SPSS Mistakes", slug: "common-spss-mistakes" },
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
            <motion.h2 variants={fadeUp}>Not sure where to start?</motion.h2>
            <motion.p variants={fadeUp}>Book a free 30‑minute scoping call before you run anything.</motion.p>
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

export default StatisticalAnalysisConsultingPage;