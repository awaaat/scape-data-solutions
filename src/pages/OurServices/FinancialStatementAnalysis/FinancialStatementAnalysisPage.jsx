// src/pages/Services/FinancialStatementAnalysis/FinancialStatementAnalysisPage.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  FileText,
  BarChart3,
  LineChart,
  Target,
  CheckCircle,
  Clock,
  Zap,
  Eye,
  Database,
  Activity,
  Shield,
  PieChart,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Gauge,
  ClipboardList,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./FinancialStatementAnalysisPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── YOUR IMAGES - Using public path ────────────────────────────
const heroImage = "/Images/site-images/finacial-5.png";
const screenshotInput = "/Images/site-images/finacial-1-st.png";
const screenshotRatios = "/Images/site-images/finacial-2-st.png";
const screenshotCashflow = "/Images/site-images/finacial-3-st.png";
const screenshotRating = "/Images/site-images/finacial-4-st.png";

// ─── Animation Variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// ─── Main Component ───────────────────────────────────────────────
const FinancialStatementAnalysisPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.2 });

  return (
    <PageLayout>
    <SEO
      title="Financial Statement Analysis | Scape Data Solutions"
      description="AI-powered analysis of your balance sheet, income statement, and cash flow, benchmarked to reveal real financial health."
      path="/services/financial-statement-analysis"
      schema={buildServiceSchema({
        name: "Financial Statement Analysis",
        description: "AI-powered analysis of your balance sheet, income statement, and cash flow, benchmarked to reveal real financial health.",
        path: "/services/financial-statement-analysis",
      })}
    />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section ref={heroRef} className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <motion.div className={styles.heroBadge} variants={fadeUp}>
                <FileText size={14} /> <span>Financial Statement Analysis</span>
              </motion.div>
              <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                Detect <span className={styles.highlight}>irregularities</span> before they cost you
              </motion.h1>
              <motion.p className={styles.heroSub} variants={fadeUp}>
                AI‑powered analysis of your balance sheet, income statement, and cash flow —
                reclassified, scored, and benchmarked so you can see the real health of the
                business at a glance, not just the raw numbers.
              </motion.p>
              <motion.div className={styles.heroCta} variants={fadeUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className={styles.heroBtn}>
                    Analyze Your Statements <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="#how-it-works" className={styles.heroBtnSecondary}>
                    See How It Works <Eye size={15} />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div className={styles.heroStats} variants={fadeUp}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>95%</span>
                  <span className={styles.statLabel}>Anomaly Detection Rate</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>60%</span>
                  <span className={styles.statLabel}>Faster Review Time</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>35+</span>
                  <span className={styles.statLabel}>Ratios Calculated</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroImageWrap}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={scaleIn}
              transition={{ delay: 0.2 }}
            >
              <img src={heroImage} alt="Financial statement analysis dashboard" className={styles.heroImg} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LOGOS / TRUST BAR ──────────────────────────────────── */}
      <section className={styles.logosSection}>
        <div className={styles.container}>
          <p className={styles.logosLabel}>Built for accountants, CFOs, lenders, and investors</p>
        </div>
      </section>

      {/* ─── OVERVIEW ────────────────────────────────────────────── */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <motion.div
              className={styles.overviewText}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h2>
                Go beyond the numbers with <strong>a full picture</strong>
              </h2>
              <p>
                Financial statements hold a lot of information — and a few red flags that are
                easy to miss. We take your Statement of Financial Position and Income Statement
                (IFRS or GAAP, up to five years of history) and reclassify them the way analysts
                actually read them: current vs. non‑current, financial debt isolated from trade
                liabilities, EBIT and EBITDA broken out clearly.
              </p>
              <p>
                From there we calculate the ratios that matter across profitability, liquidity,
                capital structure, and solvency, compare them against industry benchmarks, and
                flag the deviations worth a second look.
              </p>
              <p>
                Whether you're an auditor, a lender assessing creditworthiness, or a finance team
                closing the books, you get a clear, evidence‑backed view of where the risk lives.
              </p>
            </motion.div>
            <motion.div
              className={styles.overviewVisual}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <img src={screenshotInput} alt="Financial data input screen" className={styles.overviewImg} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────── */}
      <section className={styles.howSection} id="how-it-works">
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            How we detect anomalies
          </motion.h2>

          <motion.div
            className={styles.howGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <FileText size={22} />,
                title: "Statement extraction",
                desc: "Pull structured data from the balance sheet, income statement, and cash flow statement.",
              },
              {
                icon: <ClipboardList size={22} />,
                title: "Reclassification",
                desc: "Rebuild the statements the way analysts read them — current/non‑current, financial debt isolated.",
              },
              {
                icon: <BarChart3 size={22} />,
                title: "Ratio & trend analysis",
                desc: "Calculate 35+ ratios across profitability, liquidity, solvency, and capital structure.",
              },
              {
                icon: <AlertTriangle size={22} />,
                title: "Anomaly detection",
                desc: "Flag unusual entries, outliers, and patterns that don't match the company's own history.",
              },
              {
                icon: <Target size={22} />,
                title: "Benchmarking & rating",
                desc: "Compare against industry peers and run recognized bankruptcy‑risk models for a rating score.",
              },
              {
                icon: <FileText size={22} />,
                title: "Automated reporting",
                desc: "Get a finished report with charts, ratios, and plain‑language commentary, ready to edit.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.howCard}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 8px 30px rgba(10,47,56,0.1)" }}
              >
                <div className={styles.howIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SCREENSHOTS / WHAT YOU GET ─────────────────────────── */}
      <section className={styles.screensSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            What's inside the report
          </motion.h2>

          <motion.div
            className={styles.screensGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                img: screenshotInput,
                title: "Guided data entry",
                desc: "Enter up to five years of balance sheet and income statement data. We flag input errors and suggest corrections as you go.",
              },
              {
                img: screenshotRatios,
                title: "Full ratio breakdown",
                desc: "Profitability, liquidity, solvency, and capital‑structure ratios, each with a plain‑language explanation of what it means.",
              },
              {
                img: screenshotCashflow,
                title: "Cash flow statement",
                desc: "See where cash was generated or absorbed during the year, plus automatically calculated Free Cash Flow to the Firm and to Equity.",
              },
              {
                img: screenshotRating,
                title: "Rating & stress test",
                desc: "A credit‑style rating built on recognized bankruptcy‑risk models, plus a sales‑drop stress test to check debt coverage.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.screenCard}
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <div className={styles.screenImgWrap}>
                  <img src={item.img} alt={item.title} className={styles.screenImg} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────── */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Core capabilities
          </motion.h2>

          <motion.div
            className={styles.featuresGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <DollarSign size={22} />,
                title: "Balance sheet analysis",
                desc: "Detect anomalies in assets, liabilities, and equity composition.",
              },
              {
                icon: <TrendingUp size={22} />,
                title: "Income statement review",
                desc: "Flag unusual revenue recognition, expense patterns, and margins.",
              },
              {
                icon: <PieChart size={22} />,
                title: "Cash flow anomalies",
                desc: "Identify gaps between reported earnings and actual cash flow.",
              },
              {
                icon: <AlertTriangle size={22} />,
                title: "Fraud indicators",
                desc: "Surface red flags like revenue manipulation or hidden expenses.",
              },
              {
                icon: <Clock size={22} />,
                title: "Historical trend analysis",
                desc: "Track performance across up to five years for pattern detection.",
              },
              {
                icon: <Gauge size={22} />,
                title: "Sensitivity & stress testing",
                desc: "Model revenue drops of 5%, 10%, and 30% to test debt coverage.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(10,47,56,0.1)" }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── BENEFITS ────────────────────────────────────────────── */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Why choose us?
          </motion.h2>

          <motion.div
            className={styles.benefitsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Target size={18} />,
                title: "Early risk detection",
                desc: "Catch financial risks before they become major problems.",
              },
              {
                icon: <Zap size={18} />,
                title: "Faster reviews",
                desc: "Cut review time by up to 60% with automated anomaly detection.",
              },
              {
                icon: <CheckCircle size={18} />,
                title: "Higher accuracy",
                desc: "Fewer false positives, more time on genuine risks.",
              },
              {
                icon: <Shield size={18} />,
                title: "Fraud prevention",
                desc: "Deter and detect financial fraud with proactive monitoring.",
              },
              {
                icon: <Eye size={18} />,
                title: "Complete visibility",
                desc: "A comprehensive view of financial statement risks, not just a summary.",
              },
              {
                icon: <Clock size={18} />,
                title: "Audit ready",
                desc: "Editable, exportable reports with clear evidence and explanations.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitCard}
                variants={fadeUp}
                whileHover={{ x: 6 }}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Ready to detect financial risks?</h2>
            <p>
              Let's analyze your financial statements for hidden risks, anomalies, and fraud
              indicators — so you can move forward with clarity and confidence.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Get Started <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FinancialStatementAnalysisPage;