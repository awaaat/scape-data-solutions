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
  DollarSign,
  PieChart,
  Package,
  AlertCircle,
  Award,
  Zap,
  Layers,
  Truck,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./InventoryManagementAnalyticsPage.module.css";
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
    title: "Inventory Data Consolidation",
    desc: "We connect to your POS, warehouse management systems, supplier databases, and e-commerce platforms. We consolidate real-time inventory data across all locations and channels into a single source of truth."
  },
  {
    icon: <Layers size={22} />,
    title: "Stock Optimization & Par Level Analysis",
    desc: "We analyze sales velocity, lead times, and seasonality to recommend optimal stock levels for each SKU. We identify overstocked and understocked items, reducing carrying costs and preventing stockouts."
  },
  {
    icon: <Target size={22} />,
    title: "Inventory Turnover & Velocity Analysis",
    desc: "We calculate turnover rates for each product category and location. We identify slow-moving and fast-moving items, enabling strategic markdowns, promotions, and reorder decisions."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Demand-Supply Matching",
    desc: "We forecast demand using machine learning models that incorporate seasonality, promotions, and external factors. We align inventory levels with predicted demand, minimizing overstock and out-of-stock situations."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Supplier & Lead Time Performance",
    desc: "We track supplier reliability — on-time delivery, quality, and lead times. We identify underperforming suppliers and recommend alternatives or renegotiation strategies."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Real‑Time Inventory Monitoring",
    desc: "We provide real‑time dashboards that show inventory levels, stock movements, and alerts for low stock or excess inventory. We enable proactive reordering and markdown decisions."
  },
];

const features = [
  {
    icon: <Package size={22} />,
    title: "Inventory Position Dashboard",
    desc: "View current stock levels by store, warehouse, and channel. Track inventory aging and expiration dates."
  },
  {
    icon: <PieChart size={22} />,
    title: "Category & SKU Performance",
    desc: "Identify top-selling, profitable, and underperforming SKUs. Monitor product lifecycle and phase-out decisions."
  },
  {
    icon: <Target size={22} />,
    title: "Stockout & Overstock Alerts",
    desc: "Receive automated alerts when inventory falls below safety stock or exceeds optimal levels, enabling quick corrective action."
  },
  {
    icon: <Truck size={22} />,
    title: "Supplier Scorecards",
    desc: "Evaluate supplier performance based on delivery timeliness, quality, and cost. Inform procurement decisions."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Demand Forecasting Engine",
    desc: "AI-powered forecasts that predict demand for each SKU at each location, incorporating seasonality and promotions."
  },
  {
    icon: <Eye size={22} />,
    title: "Inventory Valuation & Shrinkage Analysis",
    desc: "Track inventory value, shrinkage, and write-offs. Identify root causes of loss and implement prevention measures."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "Reduced Inventory Carrying Costs",
    desc: "Optimize stock levels to minimize excess inventory, freeing up working capital and reducing storage costs."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Improved Stock Availability",
    desc: "Prevent stockouts of high-demand items, ensuring customer satisfaction and lost sales prevention."
  },
  {
    icon: <Zap size={18} />,
    title: "Increased Inventory Turnover",
    desc: "Accelerate inventory velocity, improving cash flow and reducing the risk of obsolescence."
  },
  {
    icon: <Award size={18} />,
    title: "Better Supplier Negotiation",
    desc: "Use supplier performance data to negotiate better terms, pricing, and delivery schedules."
  },
  {
    icon: <Target size={18} />,
    title: "Data-Driven Replenishment",
    desc: "Replace guesswork with AI-driven replenishment recommendations, reducing manual effort and human error."
  },
  {
    icon: <Shield size={18} />,
    title: "Risk Reduction",
    desc: "Minimize losses from overstock, stockouts, and obsolete inventory, protecting your bottom line."
  },
];

const InventoryManagementAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Inventory Management Analytics | Scape Data Solutions"
      description="AI-powered analytics that optimize stock levels, reduce carrying costs, and prevent stockouts."
      path="/services/inventory-management-analytics"
      schema={buildServiceSchema({
        name: "Inventory Management Analytics",
        description: "AI-powered analytics that optimize stock levels, reduce carrying costs, and prevent stockouts.",
        path: "/services/inventory-management-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Package size={14} /> <span>Inventory Management Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Optimize Your <span className={styles.highlight}>Inventory</span> for Maximum Efficiency
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that optimize stock levels, reduce carrying costs, and prevent stockouts.
              Transform your inventory into a strategic asset that drives profitability and customer satisfaction.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Inventory <ArrowRight size={16} />
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
                <span className={styles.statValue}>15-25%</span>
                <span className={styles.statLabel}>Carrying Cost Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Stockout Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20%</span>
                <span className={styles.statLabel}>Turnover Improvement</span>
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
            <h2>Inventory Management is a <span className={styles.highlight}>Balancing Act</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$1.1T</span>
                <p>Estimated global inventory carrying costs — a significant drag on retail profitability.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>43%</span>
                <p>Of retailers have experienced stockouts of popular items in the past year, leading to lost sales and customer churn.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of inventory managers rely on manual spreadsheets, leading to errors and inefficient replenishment.</p>
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
                Turn Inventory into a <span className={styles.highlight}>Strategic Advantage</span>
              </h2>
              <p>
                Inventory is one of the largest investments a retailer makes — and one of the most
                challenging to manage. Too much stock ties up capital and increases carrying costs;
                too little stock leads to lost sales and dissatisfied customers. Finding the right
                balance is difficult without accurate, real-time data.
              </p>
              <p>
                Our Inventory Management Analytics service provides comprehensive visibility into
                your inventory position across all locations and channels. We analyze sales velocity,
                lead times, seasonality, and supplier performance to recommend optimal stock levels
                for each SKU, at each location.
              </p>
              <p>
                We use machine learning to forecast demand and predict replenishment needs, ensuring
                you have the right products in the right place at the right time. Our dashboards give
                you real-time visibility into inventory performance, turnover, and potential risks.
              </p>
              <p>
                Achieve lean, efficient inventory that maximizes profitability and customer
                satisfaction — and frees up working capital for growth initiatives.
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
                <Package size={48} />
                <span>Inventory Analytics</span>
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
                <h4>Real‑Time Inventory Dashboard</h4>
                <p>View stock levels, turnover, and status across all locations and channels — updated in real-time.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Inventory Optimization Plan</h4>
                <p>Actionable recommendations for stock levels, reorder points, and safety stock for each SKU and location.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Demand Forecast & Replenishment Schedule</h4>
                <p>AI-powered forecasts that drive automated replenishment orders, minimizing manual effort and errors.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Supplier Performance Scorecards</h4>
                <p>Comprehensive evaluation of supplier reliability, lead time, and quality to inform procurement decisions.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Stockout & Overstock Alert System</h4>
                <p>Automated alerts that notify you of potential stockouts or excess inventory, enabling proactive action.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Inventory Valuation & Shrinkage Report</h4>
                <p>Detailed analysis of inventory value, shrinkage, and write-offs with root cause identification.</p>
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
            <h2>Ready to Optimize Your Inventory?</h2>
            <p>
              Let's analyze your inventory data to unlock significant cost savings, improve stock
              availability, and increase profitability. You'll achieve a leaner, more responsive
              supply chain.
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

export default InventoryManagementAnalyticsPage;
