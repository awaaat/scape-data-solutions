// src/pages/Services/InsuranceClaimsAnalytics/InsuranceClaimsAnalyticsPage.jsx
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
  Users,
  DollarSign,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./InsuranceClaimsAnalyticsPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── YOUR IMAGES ──────────────────────────────────────────────────
const heroImage = "/Images/site-images/solutions-insurance-resource.webp";
const featureImage = "/Images/site-images/solutions-insurance-underwriting.webp";

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
const InsuranceClaimsAnalyticsPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.2 });

  return (
    <PageLayout>
    <SEO
      title="Insurance Claims Analytics | Scape Data Solutions"
      description="AI-powered claims analytics that optimize processing, detect fraud, and improve loss ratios."
      path="/services/insurance-claims-analytics"
      schema={buildServiceSchema({
        name: "Insurance Claims Analytics",
        description: "AI-powered claims analytics that optimize processing, detect fraud, and improve loss ratios.",
        path: "/services/insurance-claims-analytics",
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
              {/* Badge removed entirely */}
              <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                Process Claims <span className={styles.highlight}>Smarter.</span><br />
                <span className={styles.highlight}>Detect Fraud Faster.</span>
              </motion.h1>
              <motion.p className={styles.heroSub} variants={fadeUp}>
                AI‑powered claims analytics that optimises processing, detects fraud, and improves
                loss ratios. Turn claims data into actionable intelligence for better underwriting
                and customer experience.
              </motion.p>
              <motion.div className={styles.heroCta} variants={fadeUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className={styles.heroBtn}>
                    Optimise Your Claims <ArrowRight size={16} />
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
                  <motion.span
                    className={styles.statValue}
                    initial={{ opacity: 0 }}
                    animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    40%
                  </motion.span>
                  <span className={styles.statLabel}>Fraud Reduction</span>
                </div>
                <div className={styles.statItem}>
                  <motion.span
                    className={styles.statValue}
                    initial={{ opacity: 0 }}
                    animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    50%
                  </motion.span>
                  <span className={styles.statLabel}>Processing Speed Improvement</span>
                </div>
                <div className={styles.statItem}>
                  <motion.span
                    className={styles.statValue}
                    initial={{ opacity: 0 }}
                    animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    15%
                  </motion.span>
                  <span className={styles.statLabel}>Loss Ratio Improvement</span>
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
              <img
                src={heroImage}
                alt="Insurance claims analytics dashboard"
                className={styles.heroImg}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── LOGOS / TRUST BAR ──────────────────────────────────── */}
      <section className={styles.logosSection}>
        <div className={styles.container}>
          <p className={styles.logosLabel}>Trusted by leading insurers and claims managers</p>
        </div>
      </section>

      {/* ─── NUMBERS / STATS ────────────────────────────────────── */}
      <section className={styles.numbersSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.numbersHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2>
              The Smarter Way to Run Claims. <br />
              <span style={{ fontWeight: 400 }}>Because Every Dollar and Minute Counts.</span>
            </h2>
            <p>
              Our AI‑driven intelligence combines with smart, customisable process automation
              so your team can manage claims, incidents, and fraud without the manual work,
              the missed deadlines, or the compliance risk.
            </p>
          </motion.div>

          <motion.div
            className={styles.numbersGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              { value: "40%", label: "Fraud Reduction" },
              { value: "50%", label: "Faster Processing" },
              { value: "15%", label: "Loss Ratio Improvement" },
              { value: "99.9%", label: "System Uptime" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.numberCard}
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <span className={styles.numberValue}>{item.value}</span>
                <span className={styles.numberLabel}>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── VALUE PROPS (ICON GRID) ────────────────────────────── */}
      <section className={styles.valuePropsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.valuePropsHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2>
              Built for Claims Optimisation, <br />
              <span style={{ fontWeight: 400 }}>Powered by AI</span>
            </h2>
          </motion.div>

          <motion.div
            className={styles.valuePropsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Shield size={28} />,
                title: "AI‑Driven Fraud Detection",
                desc: "Identify suspicious patterns, duplicate claims, and organised fraud rings. Our models analyse claim networks and historical data to flag high‑risk claims before they are paid.",
              },
              {
                icon: <DollarSign size={28} />,
                title: "Predictive Settlement Costing",
                desc: "Forecast claims costs accurately for reserves and pricing. Incorporate claim characteristics, historical data, and external factors to provide reliable cost estimates.",
              },
              {
                icon: <Users size={28} />,
                title: "Frictionless Claims Experience",
                desc: "A 360‑degree case view with automated reminders and AI document review. Employees and claimants can initiate requests via QR code or phone, no passwords needed.",
              },
              {
                icon: <BarChart3 size={28} />,
                title: "Real‑Time Performance Dashboards",
                desc: "Monitor claims KPIs, processing times, and fraud alerts in real time. Identify bottlenecks and make data‑driven decisions to continuously improve operations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.valuePropCard}
                variants={fadeUp}
                whileHover={{ y: -6, borderColor: "#45AFDF" }}
              >
                <div className={styles.valuePropIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURE DETAILS (LEFT-RIGHT) ──────────────────────── */}
      <section className={styles.featureDetailsSection}>
        <div className={styles.container}>
          <div className={styles.featureDetails}>
            {/* Feature 1 */}
            <motion.div
              className={`${styles.featureBlock} ${styles.leftImage}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.featureContent}>
                <div className={styles.featureBadge}>Claims Fraud Detection</div>
                <h2>AI‑Assisted Claims Fraud Detection</h2>
                <p>
                  Identify suspicious patterns, duplicate claims, and organised fraud rings.
                  Our AI models analyse claim networks and historical data to flag high‑risk
                  claims before they are paid.
                </p>
              </div>
              <div className={styles.featureImage}>
                <img
                  src={featureImage}
                  alt="Claims fraud detection analytics"
                  className={styles.featureImg}
                />
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className={`${styles.featureBlock} ${styles.rightImage}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.featureContent}>
                <div className={styles.featureBadge}>Settlement Cost Prediction</div>
                <h2>Predictive Settlement Cost Modeling</h2>
                <p>
                  Forecast claims costs accurately for reserves and pricing. Our models
                  incorporate claim characteristics, historical data, and external factors
                  to provide reliable cost estimates.
                </p>
              </div>
              <div className={styles.featureImage}>
                <div className={styles.imagePlaceholder}>
                  <DollarSign size={60} color="#6A3BAD" />
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className={`${styles.featureBlock} ${styles.leftImage}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.featureContent}>
                <div className={styles.featureBadge}>Claims Trend Analysis</div>
                <h2>Comprehensive Claims Trend Analysis</h2>
                <p>
                  Analyse claims frequency, severity, and drivers over time. Identify emerging
                  risks, understand loss drivers, and make data‑driven decisions to improve
                  underwriting and pricing.
                </p>
              </div>
              <div className={styles.featureImage}>
                <div className={styles.imagePlaceholder}>
                  <LineChart size={60} color="#6A3BAD" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS STEPS ────────────────────────────────────────── */}
      <section className={styles.processSection} id="how-it-works">
        <div className={styles.container}>
          <motion.div
            className={styles.processHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2>How Complete Claims Analytics Works</h2>
          </motion.div>

          <motion.div
            className={styles.processGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                step: "01",
                title: "Data Integration",
                desc: "Combine claims data, policy data, and external fraud indicators.",
              },
              {
                step: "02",
                title: "AI Fraud Detection",
                desc: "Flag suspicious claims using network analysis and anomaly detection.",
              },
              {
                step: "03",
                title: "Predictive Cost Modeling",
                desc: "Predict settlement costs and reserve requirements with accuracy.",
              },
              {
                step: "04",
                title: "Optimisation & Reporting",
                desc: "Streamline workflows and generate real‑time performance dashboards.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`${styles.processCard} ${styles[`card${index + 1}`]}`}
                variants={fadeUp}
                whileHover={{ backgroundColor: "#3c1c63", color: "#fff" }}
              >
                <div className={styles.processNumber}>{item.step}</div>
                <div className={styles.processContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── INTEGRATIONS ────────────────────────────────────────── */}
      <section className={styles.integrationsSection}>
        <div className={styles.container}>
          <div className={styles.integrationsGrid}>
            <motion.div
              className={styles.integrationsContent}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.integrationsBadge}>Quickly Connect</div>
              <h2>Integrates Seamlessly With Your Policy Systems</h2>
              <p>
                Connect our platform to your existing policy and claims systems via API or SFTP.
                Automated data flow means reduced manual entry, synchronised information, and
                fewer errors. Our solution fits into your ecosystem – you don't rebuild around it.
              </p>
              <ul>
                <li>Works with the tools you already use – from policy systems to payment platforms.</li>
                <li>If it's not listed here, we can build the integration.</li>
              </ul>
              <div className={styles.integrationsCta}>
                <Link to="/contact" className={styles.btnPrimary}>
                  Schedule a Demo
                </Link>
              </div>
            </motion.div>

            <motion.div
              className={styles.integrationsLogos}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <h3>Connect with:</h3>
              <div className={styles.logoGrid}>
                {["Policy Administration", "CRM", "Payment Platforms", "Risk Management",
                  "Fraud Detection", "Document Management"].map((name, i) => (
                  <div key={i} className={styles.integrationLogo}>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.testimonialsHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Trusted by Leading Organisations</h2>
            <p>
              Our platform streamlines operations for organisations of all sizes across
              insurance, risk management, and related sectors. Clients trust us to handle
              their most sensitive claims processes while maintaining compliance and
              improving operational efficiency.
            </p>
          </motion.div>

          <motion.div
            className={styles.testimonialsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              {
                quote:
                  "The flexibility and intuitive design, built with compliance in mind, have been a game‑changer for our complex claims environment.",
              },
              {
                quote:
                  "Our teams across the country now have a shared experience through the platform. It has reduced friction and freed up hours to focus on customers.",
              },
              {
                quote:
                  "Centralised visibility and accountability have transformed how we manage claims. Everything is in one place – no more chasing down records.",
              },
            ].map((item, index) => (
              <motion.div key={index} className={styles.testimonialCard} variants={fadeUp}>
                <div className={styles.testimonialQuote}>
                  <span className={styles.quoteIcon}>“</span>
                  <p>{item.quote}</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.authorName}>Claims Manager</span>
                  <span className={styles.authorTitle}>Major Insurance Carrier</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER CTA ───────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground} />
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <h2>See AI‑Powered Claims Analytics in Action</h2>
            <p>
              See how our platform combines AI‑driven fraud detection, predictive costing,
              and frictionless claimant experience to make claims management truly manageable.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Schedule a Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default InsuranceClaimsAnalyticsPage;