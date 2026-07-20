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
  Gauge,
  Layers,
  Settings,
  Truck,
  Calendar,
  UserCheck,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./OperationalPerformanceAnalyticsPage.module.css";
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
    title: "Operational Data Integration & Unification",
    desc: "We connect to your ERP, CRM, supply chain systems, production systems, and quality management platforms. We consolidate data from disparate sources into a unified operational data model, creating a single source of truth for all operational metrics — production, inventory, quality, logistics, and service delivery."
  },
  {
    icon: <Gauge size={22} />,
    title: "KPI Definition & Performance Baseline",
    desc: "We work with you to define the key performance indicators that matter most — cycle time, throughput, yield, utilization, defect rate, on‑time delivery, and cost per unit. We establish performance baselines and benchmarks, enabling you to measure progress and identify areas for improvement."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Real‑Time Monitoring & Alerting",
    desc: "We provide real‑time dashboards that display operational KPIs and alert you to deviations from targets. You can monitor production lines, warehouse operations, logistics flows, and service delivery in real‑time, enabling rapid response to issues and opportunities."
  },
  {
    icon: <Target size={22} />,
    title: "Root Cause & Variance Analysis",
    desc: "We analyze variances between actual performance and targets, identifying the root causes of underperformance — equipment breakdowns, supplier delays, labor shortages, or process inefficiencies. We recommend corrective actions to address the underlying issues and prevent recurrence."
  },
  {
    icon: <Layers size={22} />,
    title: "Process Optimization & Continuous Improvement",
    desc: "We identify bottlenecks, inefficiencies, and waste in your operations. We recommend process improvements — Lean, Six Sigma, or automation — that reduce cycle times, improve quality, and lower costs. We track the impact of improvements over time to ensure sustained gains."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Performance Reporting & Strategic Insights",
    desc: "We provide automated reporting that tracks operational performance over time, highlighting trends, seasonality, and areas of improvement. We deliver strategic insights to leadership, enabling data‑driven decisions about resource allocation, capacity planning, and investment."
  },
];

const features = [
  {
    icon: <Gauge size={22} />,
    title: "Real‑Time Operational Dashboards",
    desc: "Monitor production, supply chain, and service delivery performance in real‑time, with alerts for deviations and anomalies."
  },
  {
    icon: <Target size={22} />,
    title: "Root Cause & Variance Analysis",
    desc: "Identify the root causes of operational variances and underperformance, enabling targeted corrective actions."
  },
  {
    icon: <Settings size={22} />,
    title: "Process Optimization & Waste Reduction",
    desc: "Identify bottlenecks, inefficiencies, and waste in operations, and implement Lean or Six Sigma improvements."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "KPI Management & Benchmarking",
    desc: "Define, track, and benchmark key operational KPIs against internal targets and industry standards."
  },
  {
    icon: <Activity size={22} />,
    title: "Predictive Maintenance & Downtime Prevention",
    desc: "Predict equipment failures and maintenance needs using machine learning, reducing unplanned downtime and extending asset life."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Operations Dashboards",
    desc: "Tailored dashboards for leadership and operations teams, with drill‑down to individual processes, plants, or teams."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "10‑20% Cost Reduction",
    desc: "Reduce operational costs through waste elimination, process optimization, and better resource utilization."
  },
  {
    icon: <Zap size={18} />,
    title: "30‑50% Improvement in Cycle Times",
    desc: "Accelerate production and service delivery by identifying and eliminating bottlenecks and inefficiencies."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Higher Quality & Lower Defect Rates",
    desc: "Improve product and service quality through process control, defect reduction, and continuous improvement."
  },
  {
    icon: <Truck size={18} />,
    title: "Improved On‑Time Delivery",
    desc: "Achieve superior customer satisfaction by improving operational reliability and delivery performance."
  },
  {
    icon: <Users size={18} />,
    title: "Enhanced Team Productivity",
    desc: "Empower teams with real‑time data and insights, enabling faster, more effective decision‑making."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Operate more efficiently and effectively than competitors, delivering better value to customers."
  },
];

const OperationalPerformanceAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Operational Performance Analytics | Scape Data Solutions"
      description="AI-powered operational performance analytics that monitor KPIs and identify bottlenecks."
      path="/services/operational-performance-analytics"
      schema={buildServiceSchema({
        name: "Operational Performance Analytics",
        description: "AI-powered operational performance analytics that monitor KPIs and identify bottlenecks.",
        path: "/services/operational-performance-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Gauge size={14} /> <span>Operational Performance Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Run Your Operations with <span className={styles.highlight}>Data‑Driven Excellence</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered operational performance analytics that monitors KPIs, identifies bottlenecks,
              and drives continuous improvement. Achieve operational excellence with real‑time
              visibility and actionable insights.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Operations <ArrowRight size={16} />
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
                <span className={styles.statValue}>10-20%</span>
                <span className={styles.statLabel}>Cost Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30-50%</span>
                <span className={styles.statLabel}>Cycle Time Improvement</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99%</span>
                <span className={styles.statLabel}>On‑Time Delivery</span>
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
            <h2>Operations are <span className={styles.highlight}>Complex and Fragmented</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of organizations lack real‑time visibility into operational performance, leaving them reactive rather than proactive in addressing issues.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of operational leaders report that they struggle to identify the root causes of performance issues due to fragmented data and lack of analytics.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$1T+</span>
                <p>Estimated annual global waste in operations due to inefficiencies, rework, and unplanned downtime — much of which can be recovered with better analytics.</p>
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
                Transform Operations into a <span className={styles.highlight}>Competitive Advantage</span>
              </h2>
              <p>
                Operations are the engine of every business — yet they are often the least visible and
                least optimized function. Without real‑time visibility into performance, organizations
                struggle to identify bottlenecks, waste, and opportunities for improvement.
              </p>
              <p>
                Our Operational Performance Analytics service provides comprehensive, real‑time
                visibility into your operations — production, supply chain, logistics, service
                delivery, and quality. We consolidate data from disparate systems into a unified
                view of operational performance.
              </p>
              <p>
                We define and track key performance indicators (KPIs) that matter most — cycle time,
                throughput, yield, utilization, defect rate, and on‑time delivery. We provide
                real‑time dashboards and alerts that enable rapid response to issues and
                opportunities.
              </p>
              <p>
                We identify root causes of variance, recommend process improvements, and track
                the impact of changes over time. With our solution, you achieve operational
                excellence — reducing costs, improving quality, and delivering superior value
                to customers.
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
                <Gauge size={48} />
                <span>Operational Analytics</span>
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
            How We Drive Operational Excellence
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
                <h4>Operational Performance Dashboard</h4>
                <p>Real‑time view of key operational KPIs — cycle time, throughput, yield, utilization, defect rate, on‑time delivery — with drill‑down capabilities.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Root Cause & Variance Analysis Report</h4>
                <p>Identification of root causes of performance variances, with recommendations for corrective actions to improve performance.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Process Optimization & Improvement Plan</h4>
                <p>Actionable recommendations for process improvements — Lean, Six Sigma, automation — that reduce waste and increase efficiency.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Predictive Maintenance & Asset Utilization Model</h4>
                <p>Machine learning models that predict equipment failures and maintenance needs, reducing unplanned downtime and optimizing asset utilization.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Benchmarking & Industry Comparison</h4>
                <p>Comparison of your operational performance against industry benchmarks and best practices, identifying opportunities for improvement.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Operations Dashboards</h4>
                <p>Tailored dashboards for leadership and operations teams, with drill‑down to individual processes, plants, or teams.</p>
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
            <h2>Ready to Achieve Operational Excellence?</h2>
            <p>
              Let's build an operational performance analytics system that gives you real‑time
              visibility, actionable insights, and continuous improvement capabilities. You'll
              run your operations with data‑driven excellence and outperform competitors.
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

export default OperationalPerformanceAnalyticsPage;
