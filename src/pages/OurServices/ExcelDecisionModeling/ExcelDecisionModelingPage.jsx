// src/pages/Services/ExcelDecisionModeling/ExcelDecisionModelingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Table,
  Calculator,
  LineChart,
  BarChart3,
  TrendingUp,
  Settings,
  Target,
  CheckCircle,
  Clock,
  Lightbulb,
  Zap,
  FileSpreadsheet,
  PieChart,
  Brain,
  GitBranch,
  Users,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./ExcelDecisionModelingPage.module.css";
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

// ─── Excel Decision Modeling Page ──────────────────────────────
const ExcelDecisionModelingPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Excel Decision Modeling | Scape Data Solutions"
      description="We transform your Excel files into powerful decision-making tools — financial models, forecasts, and scenario planners."
      path="/services/excel-decision-modeling"
      schema={buildServiceSchema({
        name: "Excel Decision Modeling",
        description: "We transform your Excel files into powerful decision-making tools — financial models, forecasts, and scenario planners.",
        path: "/services/excel-decision-modeling",
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
              <FileSpreadsheet size={14} /> <span>Excel & Spreadsheet Decision Modeling</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Turn Spreadsheets Into <span className={styles.highlight}>Decision Engines</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Transform your Excel files into powerful decision-making tools. We build custom
              financial models, forecasting systems, optimization solvers, and scenario planners
              that give you clarity, confidence, and control over your business choices.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Build Your Model <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#features" className={styles.heroBtnSecondary}>
                  See Features <Calculator size={15} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>800+</span>
                <span className={styles.statLabel}>Models Built</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>95%</span>
                <span className={styles.statLabel}>Accuracy Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.7/5</span>
                <span className={styles.statLabel}>Client Rating</span>
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
              <h2>Excel <span className={styles.highlight}>Reimagined</span></h2>
              <p>
                Excel is the world's most used business tool — but most spreadsheets are messy,
                error-prone, and limited. We help you build models that are robust, transparent, and
                designed for decision-making. From financial forecasts and pricing optimizers to
                resource allocation and risk simulations, we turn your data into actionable insight.
              </p>
              <p>
                Our models combine advanced Excel features — Power Query, Power Pivot, Solver, VBA,
                and dynamic arrays — with best practices in structure, documentation, and usability.
                The result: spreadsheets that are fast, reliable, and easy to update, so you can
                focus on the decisions, not the formula errors.
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
                <Calculator size={48} />
                <span>Decision Modeling</span>
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
            What We Build
          </motion.h2>

          <div className={styles.featuresGrid}>
            {[
              {
                icon: <TrendingUp size={22} />,
                title: "Financial Forecasting",
                desc: "Revenue, expense, cash flow, and balance sheet projections with scenario analysis.",
              },
              {
                icon: <Settings size={22} />,
                title: "Optimization Models",
                desc: "Resource allocation, pricing, production planning, and logistics optimization using Excel Solver.",
              },
              {
                icon: <GitBranch size={22} />,
                title: "What-If & Scenario Analysis",
                desc: "Model multiple outcomes with data tables, scenario manager, and Monte Carlo simulations.",
              },
              {
                icon: <LineChart size={22} />,
                title: "Predictive Analytics",
                desc: "Regression, time series forecasting, and trend analysis using Excel's advanced functions.",
              },
              {
                icon: <PieChart size={22} />,
                title: "Dashboard & Reporting",
                desc: "Interactive dashboards with charts, slicers, and pivot tables for executive reporting.",
              },
              {
                icon: <Brain size={22} />,
                title: "Custom VBA Automation",
                desc: "Automate repetitive tasks, build user forms, and create custom functions with VBA.",
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

      {/* ─── APPLICATION AREAS ───────────────────────────────────── */}
      <section className={styles.applicationsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Where Our Models Are Used
          </motion.h2>

          <div className={styles.applicationsGrid}>
            {[
              {
                title: "Finance & Accounting",
                desc: "Budgeting, financial planning, investment analysis, and valuation.",
                icon: <Table size={24} />,
              },
              {
                title: "Operations & Supply Chain",
                desc: "Inventory optimization, production scheduling, and logistics planning.",
                icon: <BarChart3 size={24} />,
              },
              {
                title: "Sales & Marketing",
                desc: "Sales forecasting, pricing strategies, campaign ROI modeling.",
                icon: <Target size={24} />,
              },
              {
                title: "HR & Workforce Planning",
                desc: "Staffing models, compensation analysis, and headcount forecasting.",
                icon: <Users size={24} />,
              },
              {
                title: "Project Management",
                desc: "Cost-benefit analysis, resource allocation, risk assessment.",
                icon: <GitBranch size={24} />,
              },
              {
                title: "Strategic Planning",
                desc: "Long-term scenario planning, M&A analysis, and business case development.",
                icon: <TrendingUp size={24} />,
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                className={styles.applicationCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className={styles.applicationIcon}>{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
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
            Our Modeling Process
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                step: "01",
                title: "Requirements Gathering",
                desc: "We understand your decisions, data, and desired outcomes.",
              },
              {
                step: "02",
                title: "Data Preparation",
                desc: "We clean, structure, and import your data into a robust Excel environment.",
              },
              {
                step: "03",
                title: "Model Design",
                desc: "We design the logic, formulas, and layout for clarity and performance.",
              },
              {
                step: "04",
                title: "Prototype & Review",
                desc: "We build a prototype and refine it with your feedback.",
              },
              {
                step: "05",
                title: "Automation & Integration",
                desc: "We add VBA, Power Query, and other automation for efficiency.",
              },
              {
                step: "06",
                title: "Training & Handover",
                desc: "We train your team and provide documentation for ongoing use.",
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
            Why Excel Modeling?
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {[
              {
                icon: <CheckCircle size={18} />,
                title: "Proven & Trusted",
                desc: "Excel is used by over 750 million people — your team already knows it.",
              },
              {
                icon: <Zap size={18} />,
                title: "Fast & Flexible",
                desc: "Build and adjust models quickly without expensive software development.",
              },
              {
                icon: <Lightbulb size={18} />,
                title: "Full Transparency",
                desc: "Every formula is visible — no black boxes. You understand how decisions are made.",
              },
              {
                icon: <Clock size={18} />,
                title: "Save Time",
                desc: "Automate manual calculations and reporting, freeing up your team for analysis.",
              },
              {
                icon: <Target size={18} />,
                title: "Better Decisions",
                desc: "Test scenarios, optimize variables, and make choices backed by solid data.",
              },
              {
                icon: <TrendingUp size={18} />,
                title: "Scalable",
                desc: "Models can grow with your business — add new data, products, or regions easily.",
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
            <h2>Turn Your Spreadsheets Into a Strategic Asset</h2>
            <p>
              Let's build a model that gives you clarity, confidence, and control. Whether you need
              a financial forecast, an optimizer, or a full decision support system, we can help.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Start Your Project <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ExcelDecisionModelingPage;