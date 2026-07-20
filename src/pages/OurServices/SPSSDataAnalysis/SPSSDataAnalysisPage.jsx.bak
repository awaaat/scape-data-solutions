// src/pages/Services/SPSSDataAnalysis/SPSSDataAnalysisPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  PieChart,
  LineChart,
  CheckCircle,
  Clock,
  Target,
  Users,
  BookOpen,
  ClipboardList,
  FileText,
  TrendingUp,
  Zap,
  Lightbulb,
  Settings,
  GitBranch,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./SPSSDataAnalysisPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── Variants ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── SPSS Data Analysis Page ──────────────────────────────────
const SPSSDataAnalysisPage = () => {
  return (
    <PageLayout>
    <SEO
      title="SPSS Data Analysis | Scape Data Solutions"
      description="Expert, accurate SPSS data analysis, from descriptive statistics to complex inferential tests and predictive modeling."
      path="/services/spss-data-analysis"
      schema={buildServiceSchema({
        name: "SPSS Data Analysis",
        description: "Expert, accurate SPSS data analysis, from descriptive statistics to complex inferential tests and predictive modeling.",
        path: "/services/spss-data-analysis",
      })}
    />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <BarChart3 size={14} /> <span>SPSS Data Analysis</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Expert <span className={styles.highlight}>SPSS</span> Data Analysis
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Get accurate, professional analysis of your research data using SPSS. From data
              cleaning and descriptive statistics to complex inferential tests and predictive
              modeling, we help you extract meaningful insights and present them with confidence.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Start Your Analysis <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#features" className={styles.heroBtnSecondary}>
                  See What We Do <ClipboardList size={15} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>2,500+</span>
                <span className={styles.statLabel}>SPSS Projects Completed</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>98%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.9/5</span>
                <span className={styles.statLabel}>Average Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── OVERVIEW ────────────────────────────────────────────── */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <motion.div
              className={styles.overviewText}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2>SPSS Analysis <span className={styles.highlight}>Done Right</span></h2>
              <p>
                SPSS is one of the most widely used statistical tools for social science, business,
                and health research. But getting the analysis right requires more than clicking
                buttons — it demands a deep understanding of statistical theory, data handling, and
                interpretation.
              </p>
              <p>
                We offer comprehensive SPSS data analysis services for researchers, students, and
                organizations. Whether you need help with data entry, cleaning, descriptive
                statistics, hypothesis testing, regression, factor analysis, or advanced modeling —
                we ensure your analysis is accurate, properly interpreted, and presented in a way
                that supports your research objectives.
              </p>
              <p>
                We work with SPSS (all versions) and provide clear outputs, APA‑formatted tables,
                and detailed explanations so you can confidently present your findings.
              </p>
            </motion.div>
            <motion.div
              className={styles.overviewVisual}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.visualPlaceholder}>
                <BarChart3 size={48} />
                <span>SPSS Data Analysis</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────── */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            What We Do With SPSS
          </motion.h2>

          <div className={styles.featuresGrid}>
            {[
              {
                icon: <Settings size={22} />,
                title: "Data Preparation & Cleaning",
                desc: "Data entry, variable coding, missing value handling, and outlier detection.",
              },
              {
                icon: <PieChart size={22} />,
                title: "Descriptive Statistics",
                desc: "Frequencies, means, standard deviations, cross-tabulations, and charts.",
              },
              {
                icon: <GitBranch size={22} />,
                title: "Inferential Statistics",
                desc: "T-tests, ANOVA, chi-square, correlation, and non-parametric tests.",
              },
              {
                icon: <TrendingUp size={22} />,
                title: "Regression & Predictive Models",
                desc: "Linear, logistic, and multiple regression; stepwise selection.",
              },
              {
                icon: <Target size={22} />,
                title: "Advanced Multivariate Techniques",
                desc: "Factor analysis, cluster analysis, MANOVA, and discriminant analysis.",
              },
              {
                icon: <FileText size={22} />,
                title: "Reporting & Interpretation",
                desc: "APA-formatted tables, clear interpretations, and actionable insights.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMON TESTS ────────────────────────────────────────── */}
      <section className={styles.testsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Statistical Tests We Perform
          </motion.h2>

          <div className={styles.testsGrid}>
            {[
              { label: "T-Tests", icon: <BarChart3 size={18} /> },
              { label: "ANOVA / ANCOVA", icon: <LineChart size={18} /> },
              { label: "Chi-Square", icon: <PieChart size={18} /> },
              { label: "Correlation", icon: <TrendingUp size={18} /> },
              { label: "Linear Regression", icon: <GitBranch size={18} /> },
              { label: "Logistic Regression", icon: <Target size={18} /> },
              { label: "Factor Analysis", icon: <ClipboardList size={18} /> },
              { label: "Cluster Analysis", icon: <Users size={18} /> },
              { label: "MANOVA", icon: <BarChart3 size={18} /> },
              { label: "Reliability (Cronbach's Alpha)", icon: <CheckCircle size={18} /> },
            ].map((test, index) => (
              <motion.div
                key={index}
                className={styles.testChip}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <span className={styles.testIcon}>{test.icon}</span>
                <span>{test.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            How We Work
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We discuss your research questions, data, and desired outcomes.",
              },
              {
                step: "02",
                title: "Data Preparation",
                desc: "We clean, code, and structure your data in SPSS.",
              },
              {
                step: "03",
                title: "Analysis",
                desc: "We run the appropriate statistical tests and verify assumptions.",
              },
              {
                step: "04",
                title: "Interpretation",
                desc: "We interpret the results in the context of your research.",
              },
              {
                step: "05",
                title: "Reporting",
                desc: "We provide APA‑formatted tables, charts, and clear explanations.",
              },
              {
                step: "06",
                title: "Review & Revise",
                desc: "We incorporate your feedback and ensure the analysis meets your needs.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.processCard}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className={styles.processStep}>{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
            Why Choose Our SPSS Services?
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {[
              {
                icon: <CheckCircle size={18} />,
                title: "Statistically Sound",
                desc: "We ensure assumptions are checked and tests are correctly applied.",
              },
              {
                icon: <Lightbulb size={18} />,
                title: "Clear Interpretation",
                desc: "We explain results in plain English — not just SPSS output.",
              },
              {
                icon: <Clock size={18} />,
                title: "Timely Delivery",
                desc: "We work to your deadlines, delivering quality analysis on time.",
              },
              {
                icon: <Users size={18} />,
                title: "Academic & Professional",
                desc: "Experience with theses, journal articles, and business research.",
              },
              {
                icon: <BookOpen size={18} />,
                title: "APA-Ready Output",
                desc: "Tables and figures formatted according to APA guidelines.",
              },
              {
                icon: <Zap size={18} />,
                title: "Confidential & Secure",
                desc: "Your data is handled with strict confidentiality and security.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ x: 4 }}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Analyze Your Data With SPSS?</h2>
            <p>
              Let's talk about your research. We'll provide expert SPSS analysis that gives you
              accurate results, clear interpretations, and the confidence to present your findings.
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

export default SPSSDataAnalysisPage;