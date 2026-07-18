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
  Truck,
  Package,
  AlertCircle,
  Award,
  Zap,
  Layers,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./HealthcareSupplyChainAnalyticsPage.module.css";
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
    title: "Data Integration & Consolidation",
    desc: "We connect to your ERP, inventory management systems, procurement platforms, and supplier databases. We consolidate item master data, purchase orders, invoices, and consumption records into a unified analytics layer."
  },
  {
    icon: <Package size={22} />,
    title: "Inventory Optimization & Par Level Analysis",
    desc: "We analyze usage patterns, lead times, and variability to recommend optimal inventory levels. We identify slow‑moving, expired, and overstocked items — and quantify the cost of carrying excess inventory."
  },
  {
    icon: <Truck size={22} />,
    title: "Supplier Performance & Value Analysis",
    desc: "We evaluate suppliers on cost, quality, reliability, and responsiveness. We identify opportunities for consolidation, renegotiation, and strategic sourcing. We benchmark pricing against market averages."
  },
  {
    icon: <DollarSign size={22} />,
    title: "Spend Analytics & Waste Reduction",
    desc: "We analyze spend across categories, departments, and product lines. We identify variation in pricing, utilization, and waste — and recommend interventions that reduce cost without compromising care."
  },
  {
    icon: <Target size={22} />,
    title: "Demand Forecasting & Procurement Planning",
    desc: "We forecast demand for supplies based on historical utilization, seasonal patterns, and clinical trends. We optimize procurement schedules and order quantities to minimize stockouts and overstock."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Improvement",
    desc: "We provide real‑time dashboards that track inventory turns, fill rates, and cost savings. We alert you to potential shortages, price increases, and compliance issues."
  },
];

const features = [
  {
    icon: <Package size={22} />,
    title: "Real‑Time Inventory Dashboard",
    desc: "View inventory levels, turnover rates, and stock‑out risks across all departments and locations. Identify items approaching expiry."
  },
  {
    icon: <Truck size={22} />,
    title: "Supplier Scorecards",
    desc: "Compare suppliers on cost, quality, delivery, and compliance. Automate vendor performance tracking."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Spend Categorization & Variability Analysis",
    desc: "Classify spend by category, department, and product. Highlight unwarranted price variation and utilization differences."
  },
  {
    icon: <Target size={22} />,
    title: "Demand Forecasting Engine",
    desc: "Predict demand for each item using machine learning, incorporating seasonality, trends, and external factors."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Shortage & Recall Alerts",
    desc: "Receive alerts when inventory falls below safety stock levels or when suppliers issue recalls."
  },
  {
    icon: <Layers size={22} />,
    title: "Value Analysis & Standardization",
    desc: "Identify opportunities to standardize items across departments, reduce variation, and negotiate volume discounts."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "Significant Cost Reduction",
    desc: "Reduce supply chain costs by 10‑20% through optimized inventory, supplier negotiations, and waste reduction."
  },
  {
    icon: <Package size={18} />,
    title: "Improved Inventory Management",
    desc: "Eliminate stockouts of critical supplies and reduce excess inventory carrying costs. Achieve lean, efficient inventory."
  },
  {
    icon: <Zap size={18} />,
    title: "Enhanced Operational Efficiency",
    desc: "Streamline procurement processes, reduce manual effort, and improve order accuracy."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Better Supplier Relationships",
    desc: "Use performance data to strengthen partnerships and negotiate better contracts."
  },
  {
    icon: <Heart size={18} />,
    title: "Improved Patient Safety",
    desc: "Ensure availability of critical supplies and timely identification of product recalls."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Achieve operational excellence that reduces costs and enhances your reputation."
  },
];

const HealthcareSupplyChainAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Healthcare Supply Chain Analytics | Scape Data Solutions"
      description="AI-powered analytics that reduce supply chain costs and optimize inventory across your healthcare organization."
      path="/services/healthcare-supply-chain-analytics"
      schema={buildServiceSchema({
        name: "Healthcare Supply Chain Analytics",
        description: "AI-powered analytics that reduce supply chain costs and optimize inventory across your healthcare organization.",
        path: "/services/healthcare-supply-chain-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Truck size={14} /> <span>Supply Chain & Inventory Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Optimize Your <span className={styles.highlight}>Healthcare Supply Chain</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that reduces supply chain costs, optimizes inventory, and improves
              supplier performance. Achieve operational excellence across your healthcare organization.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Supply Chain <ArrowRight size={16} />
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
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Inventory Turn Improvement</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>95%</span>
                <span className={styles.statLabel}>Fill Rate</span>
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
            <h2>Healthcare Supply Chains are <span className={styles.highlight}>Inefficient and Costly</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$30B</span>
                <p>Wasted annually in the U.S. healthcare supply chain due to overstock, expired products, and procurement inefficiencies.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of hospitals lack visibility into their supply chain costs — making it impossible to identify savings opportunities.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>25%</span>
                <p>Of medical supplies expire before use — a direct waste of resources that could be avoided with better inventory management.</p>
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
                Transform Your <span className={styles.highlight}>Supply Chain</span> with Data
              </h2>
              <p>
                Healthcare supply chains are among the most complex and costly in any industry.
                Yet most organizations lack the visibility needed to identify and capture savings
                opportunities. Overstocking, expiring products, and supplier pricing variations
                drive unnecessary expense without improving patient care.
              </p>
              <p>
                Our Healthcare Supply Chain & Inventory Analytics service provides end‑to‑end
                visibility into your supply chain — from procurement to consumption. We analyze
                spend, inventory, supplier performance, and utilization to identify savings
                opportunities and drive operational efficiency.
              </p>
              <p>
                We help you optimize inventory levels, reduce waste, consolidate suppliers, and
                negotiate better contracts. Our predictive analytics forecast demand and guide
                procurement planning, ensuring that critical supplies are always available when
                needed — without excess.
              </p>
              <p>
                Achieve measurable cost reduction, improve operational efficiency, and enhance
                patient safety through better supply chain management.
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
                <Truck size={48} />
                <span>Supply Chain Analytics</span>
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
            Our Approach
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
                <h4>Supply Chain Performance Dashboard</h4>
                <p>Real‑time visibility into inventory levels, fill rates, supplier performance, and cost metrics across all departments.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Inventory Optimization Recommendations</h4>
                <p>Actionable guidance on par levels, reorder points, and order quantities. Eliminate excess and reduce waste.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Supplier Scorecards & Performance Reports</h4>
                <p>Comprehensive evaluation of supplier cost, quality, delivery, and compliance. Identify top performers and opportunities.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Spend & Waste Analysis Report</h4>
                <p>Quantified analysis of spend by category, variation, and waste. Prioritized opportunities for cost reduction.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Demand Forecast & Procurement Plan</h4>
                <p>Predictive demand forecasts with optimized procurement schedules to minimize cost and ensure availability.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Alerting & Compliance Monitoring</h4>
                <p>Automated alerts for stock‑outs, recalls, price changes, and compliance issues.</p>
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
            <h2>Ready to Optimize Your Supply Chain?</h2>
            <p>
              Let's analyze your supply chain data to unlock savings, improve inventory management,
              and drive operational efficiency. You'll achieve measurable cost reduction while
              ensuring the right supplies are always available.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Start Optimizing <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HealthcareSupplyChainAnalyticsPage;
