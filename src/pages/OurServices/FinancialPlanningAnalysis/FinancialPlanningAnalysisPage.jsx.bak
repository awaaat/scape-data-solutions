import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Clock,
  Eye,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Database,
  Activity,
  Heart,
  FileText,
  DollarSign,
  PieChart,
  GitBranch,
  AlertCircle,
  Award,
  Zap,
  Calendar,
  Calculator,
  LineChart,
  Layers,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./FinancialPlanningAnalysisPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const steps = [
  {
    icon: <Database size={22} />,
    title: "Data Integration & Financial Data Consolidation",
    desc: "We connect to your ERP, accounting systems, banking platforms, and financial databases. We consolidate P&L, balance sheet, cash flow, and operational data from multiple sources into a unified, auditable financial data model. We ensure data accuracy, consistency, and completeness across all entities and time periods."
  },
  {
    icon: <Calendar size={22} />,
    title: "Budgeting & Rolling Forecast Development",
    desc: "We build dynamic budgeting and rolling forecasting models that incorporate historical trends, seasonality, and business drivers. We automate the budgeting process, enabling faster, more accurate planning. We provide real‑time visibility into budget vs. actuals, enabling proactive management and timely adjustments."
  },
  {
    icon: <LineChart size={22} />,
    title: "Scenario Planning & Sensitivity Analysis",
    desc: "We enable you to model multiple scenarios — best case, worst case, and most likely — to assess the financial impact of strategic decisions, market changes, or operational disruptions. We test the sensitivity of key assumptions — revenue growth, cost inflation, interest rates — to understand their impact on financial outcomes."
  },
  {
    icon: <Target size={22} />,
    title: "Variance Analysis & Performance Monitoring",
    desc: "We analyze variances between actual performance and budget, forecast, or prior periods. We identify the root causes of variances — price vs. volume, cost drivers, operational inefficiencies — and recommend corrective actions to improve financial performance."
  },
  {
    icon: <PieChart size={22} />,
    title: "Profitability & Margin Analysis",
    desc: "We analyze profitability at multiple levels — product, customer, channel, and business unit. We identify high‑margin and low‑margin segments, understand cost drivers, and recommend strategies to improve profitability. We track gross margin, contribution margin, and EBITDA trends over time."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Strategic Reporting",
    desc: "We provide real‑time financial dashboards and automated reporting that track key metrics — revenue, expenses, cash flow, EBITDA, and working capital. We deliver actionable insights to finance leaders and executives, enabling faster, smarter decision‑making and strategic planning."
  },
];

const features = [
  {
    icon: <Calculator size={22} />,
    title: "Dynamic Budgeting & Rolling Forecasts",
    desc: "Automate and accelerate the budgeting process with rolling forecasts that adapt to changing business conditions."
  },
  {
    icon: <LineChart size={22} />,
    title: "Scenario Planning & Sensitivity Analysis",
    desc: "Model multiple financial scenarios and test the impact of key assumptions to make confident strategic decisions."
  },
  {
    icon: <Target size={22} />,
    title: "Variance & Root Cause Analysis",
    desc: "Identify and analyze variances between actuals and budget, understand root causes, and recommend corrective actions."
  },
  {
    icon: <PieChart size={22} />,
    title: "Multi‑Dimensional Profitability Analysis",
    desc: "Analyze profitability by product, customer, channel, and business unit to identify high‑value segments and improvement opportunities."
  },
  {
    icon: <FileText size={22} />,
    title: "Automated Financial Reporting",
    desc: "Generate accurate, auditable financial reports on demand, reducing manual effort and improving reporting speed and accuracy."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Board Dashboards",
    desc: "Tailored dashboards for leadership and board members, with drill‑down to key financial metrics and performance drivers."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "10‑15% Improvement in Financial Performance",
    desc: "Optimize budgeting, forecasting, and resource allocation to achieve superior financial outcomes."
  },
  {
    icon: <Zap size={18} />,
    title: "50% Faster Planning Cycles",
    desc: "Automate and streamline budgeting and forecasting processes, reducing planning time and enabling more frequent updates."
  },
  {
    icon: <Target size={18} />,
    title: "Enhanced Strategic Decision‑Making",
    desc: "Use scenario planning and sensitivity analysis to evaluate strategic options and make confident, evidence‑based decisions."
  },
  {
    icon: <Shield size={18} />,
    title: "Reduced Financial Risk",
    desc: "Identify risks early through variance analysis, scenario planning, and real‑time monitoring, enabling proactive mitigation."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Greater Transparency & Accountability",
    desc: "Provide clear, accurate financial data and reporting to stakeholders, building trust and accountability."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Outperform competitors with superior financial planning, agility, and performance monitoring capabilities."
  },
];

const FinancialPlanningAnalysisPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Financial Planning & Analysis | Scape Data Solutions"
      description="AI-powered financial planning and analysis that transforms budgeting, forecasting, and performance monitoring."
      path="/services/financial-planning-analysis"
      schema={buildServiceSchema({
        name: "Financial Planning & Analysis",
        description: "AI-powered financial planning and analysis that transforms budgeting, forecasting, and performance monitoring.",
        path: "/services/financial-planning-analysis",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Calculator size={14} /> <span>Financial Planning & Analysis (FP&A)</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Plan Smarter. <span className={styles.highlight}>Execute Faster.</span> <span className={styles.highlight}>Grow Profitably.</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered financial planning and analysis that transforms budgeting, forecasting, and
              performance monitoring. Make smarter, faster financial decisions with data‑driven
              insights and automated workflows.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Transform Your FP&A <ArrowRight size={16} />
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
                <span className={styles.statValue}>50%</span>
                <span className={styles.statLabel}>Faster Planning Cycles</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10-15%</span>
                <span className={styles.statLabel}>Performance Improvement</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99%</span>
                <span className={styles.statLabel}>Forecast Accuracy</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.problemSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.problemContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.problemLabel}>The Challenge</span>
            <h2>FP&A is <span className={styles.highlight}>Slow, Manual, and Fragmented</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of finance teams spend more time on data gathering and reconciliation than on analysis and strategic planning.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>45%</span>
                <p>Of companies rely on spreadsheets for budgeting and forecasting — leading to errors, version control issues, and slow cycles.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Of FP&A leaders say their teams lack the tools to perform effective scenario planning and sensitivity analysis — a critical gap in volatile markets.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              <h2>
                Transform FP&A into a <span className={styles.highlight}>Strategic Advantage</span>
              </h2>
              <p>
                In today's fast‑paced, uncertain business environment, financial planning and
                analysis is more critical than ever. Yet many FP&A teams are stuck in manual,
                spreadsheet‑driven processes that are slow, error‑prone, and reactive. They spend
                too much time gathering data and not enough time analyzing it.
              </p>
              <p>
                Our Financial Planning & Analysis service uses AI and automation to transform
                your FP&A function. We consolidate financial and operational data into a unified
                platform, eliminating manual data gathering and reconciliation. We automate
                budgeting, forecasting, and reporting, freeing your team to focus on analysis
                and strategy.
              </p>
              <p>
                We enable scenario planning and sensitivity analysis, so you can test the impact
                of strategic decisions and market changes on your financial outcomes. We provide
                real‑time dashboards that track key metrics and variances, enabling proactive
                management and rapid course correction.
              </p>
              <p>
                With our solution, you make smarter, faster financial decisions, drive better
                business outcomes, and build a more agile, resilient organization.
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
                <span>FP&A Analytics</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.howSection} id="how-it-works">
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            How We Transform Your FP&A
          </motion.h2>
          <div className={styles.howGrid}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={styles.howCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
              >
                <div className={styles.howIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.deliverablesSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            What We Deliver
          </motion.h2>
          <div className={styles.deliverablesGrid}>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Integrated Financial Data Platform</h4>
                <p>A unified, auditable financial data model that consolidates data from all sources, eliminating manual reconciliation and data silos.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Dynamic Budgeting & Rolling Forecast Model</h4>
                <p>Automated, driver‑based budgeting and rolling forecasts that update as new data arrives, enabling faster, more accurate planning.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Scenario Planning & Sensitivity Analysis Tool</h4>
                <p>Interactive tool to model multiple scenarios and test key assumptions, enabling confident strategic decision‑making.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Variance Analysis & Performance Dashboard</h4>
                <p>Real‑time monitoring of budget vs. actuals, with drill‑down to root causes and actionable recommendations.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Profitability & Margin Analysis Report</h4>
                <p>Comprehensive analysis of profitability by product, customer, channel, and business unit, with improvement recommendations.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Board Dashboards</h4>
                <p>Tailored dashboards for leadership and board members, with drill‑down to key financial metrics and performance drivers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Core Capabilities
          </motion.h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
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

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
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

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Transform Your FP&A?</h2>
            <p>
              Let's build a financial planning and analysis system that accelerates your planning
              cycles, improves forecast accuracy, and empowers smarter, faster decisions. You'll
              have the financial clarity and agility to navigate uncertainty and drive profitable
              growth.
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

export default FinancialPlanningAnalysisPage;
