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
  Package,
  Calendar,
  AlertCircle,
  Award,
  Zap,
  Layers,
  GitBranch,
  PieChart,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./InventoryDemandForecastingPage.module.css";
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
    title: "Data Integration & Preparation",
    desc: "We consolidate data from your POS, ERP, inventory systems, supplier portals, and external sources — weather, economic indicators, and market trends. We harmonize historical sales data, stock levels, lead times, and seasonality into a unified forecasting platform."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Demand Forecasting & Predictive Modeling",
    desc: "We apply advanced machine learning — ARIMA, Prophet, XGBoost, and neural networks — to generate accurate demand forecasts. We incorporate seasonality, trends, promotional impacts, and external factors to produce predictions with 90‑95% accuracy."
  },
  {
    icon: <Layers size={22} />,
    title: "Multi‑Level & Multi‑Location Forecasting",
    desc: "We generate forecasts at multiple levels — SKU, category, warehouse, store, and region. You get granular visibility into demand patterns, enabling localized inventory planning and optimal allocation across your network."
  },
  {
    icon: <Target size={22} />,
    title: "Inventory Optimization & Safety Stock Calculation",
    desc: "We calculate optimal reorder points, safety stock levels, and order quantities for each SKU and location. We balance service level targets with carrying costs to minimize total inventory cost while maximizing availability."
  },
  {
    icon: <Package size={22} />,
    title: "Replenishment & Procurement Planning",
    desc: "We generate automated replenishment recommendations — when to order, how much, and from which supplier. We incorporate lead times, supplier reliability, and minimum order quantities to create practical, executable plans."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Optimization",
    desc: "We track forecast accuracy, inventory turns, and service levels in real‑time. We automatically retrain models as new data arrives, ensuring that your forecasts and inventory plans stay current and effective."
  },
];

const features = [
  {
    icon: <Calendar size={22} />,
    title: "Short‑ & Long‑Term Forecasting",
    desc: "Generate forecasts at daily, weekly, monthly, and seasonal horizons — from immediate replenishment to annual strategic planning."
  },
  {
    icon: <Layers size={22} />,
    title: "SKU & Category‑Level Forecasting",
    desc: "Granular forecasts for every SKU, product category, and location, enabling targeted inventory decisions and promotional planning."
  },
  {
    icon: <Target size={22} />,
    title: "Safety Stock & Reorder Point Calculation",
    desc: "Optimize safety stock levels and reorder points to achieve your service level targets while minimizing carrying costs."
  },
  {
    icon: <PieChart size={22} />,
    title: "Promotional Impact Analysis",
    desc: "Quantify the impact of promotions on baseline demand. Distinguish between incremental sales and cannibalization to inform promotional strategy."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Anomaly & Outlier Detection",
    desc: "Automatically detect and handle outliers — supply disruptions, demand spikes, or data errors — to keep forecasts robust."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Operational Dashboards",
    desc: "Tailored views for leadership, planners, and buyers, with drill‑down capabilities for detailed analysis and reporting."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "15‑25% Inventory Reduction",
    desc: "Optimize stock levels to free up working capital, reduce carrying costs, and minimize obsolescence."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "98%+ Service Levels",
    desc: "Ensure product availability and customer satisfaction with accurate demand forecasting and replenishment planning."
  },
  {
    icon: <Zap size={18} />,
    title: "50% Faster Replenishment Decisions",
    desc: "Automate replenishment calculations and recommendations, eliminating manual spreadsheet work and guesswork."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "10‑15% Revenue Lift",
    desc: "Capture more sales by avoiding stockouts and ensuring that high‑demand products are always available."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Outperform competitors with superior inventory availability and lower costs through optimized demand planning."
  },
  {
    icon: <Shield size={18} />,
    title: "Risk Reduction",
    desc: "Protect against supply disruptions, demand volatility, and obsolescence with proactive, data‑driven planning."
  },
];

const InventoryDemandForecastingPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Demand Forecasting & Inventory Planning | Scape Data Solutions"
      description="AI-powered demand forecasting and inventory planning that reduces stockouts and lowers carrying costs."
      path="/services/demand-forecasting-inventory-planning"
      schema={buildServiceSchema({
        name: "Demand Forecasting & Inventory Planning",
        description: "AI-powered demand forecasting and inventory planning that reduces stockouts and lowers carrying costs.",
        path: "/services/demand-forecasting-inventory-planning",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Package size={14} /> <span>Demand Forecasting & Inventory Planning</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Predict Demand. <span className={styles.highlight}>Optimize Inventory.</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered demand forecasting and inventory planning that reduces stockouts, lowers
              carrying costs, and improves profitability. Achieve 90‑95% forecast accuracy with
              machine learning.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Start Forecasting <ArrowRight size={16} />
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
                <span className={styles.statValue}>90-95%</span>
                <span className={styles.statLabel}>Forecast Accuracy</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15-25%</span>
                <span className={styles.statLabel}>Inventory Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>98%</span>
                <span className={styles.statLabel}>Service Level</span>
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
            <h2>Inventory is a <span className={styles.highlight}>Delicate Balance</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of businesses hold excess inventory to compensate for poor demand forecasting — tying up capital and increasing carrying costs.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Of stockouts are caused by inaccurate demand forecasts, leading to lost sales and unhappy customers.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$1.1T</span>
                <p>Estimated annual cost of excess inventory globally — a massive opportunity for improvement through better forecasting.</p>
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
                Forecast Demand. <span className={styles.highlight}>Plan Inventory.</span>
              </h2>
              <p>
                Demand forecasting and inventory planning are the foundation of a successful supply
                chain. Get it right, and you reduce costs, improve service levels, and free up working
                capital. Get it wrong, and you face stockouts, excess inventory, and unhappy customers.
              </p>
              <p>
                Our Demand Forecasting & Inventory Planning service uses advanced machine learning to
                predict future demand with 90‑95% accuracy. We incorporate historical sales data,
                seasonality, trends, promotions, and external factors — weather, economic indicators —
                to build robust, reliable forecasts.
              </p>
              <p>
                We then translate forecasts into actionable inventory plans — calculating optimal
                reorder points, safety stock levels, and order quantities for each SKU and location.
                We generate automated replenishment recommendations, eliminating manual guesswork and
                reducing planning time.
              </p>
              <p>
                With our solution, you reduce inventory costs by 15‑25%, achieve 98%+ service levels,
                and improve profitability across your supply chain.
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
                <span>Inventory Planning</span>
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
            How We Optimize Inventory
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
                <h4>Granular Demand Forecasts</h4>
                <p>Accurate, automated forecasts at SKU, category, and location levels, with confidence intervals and scenario analysis.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Inventory Optimization Recommendations</h4>
                <p>Actionable recommendations for safety stock, reorder points, and order quantities, tailored to each SKU and location.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Automated Replenishment Plans</h4>
                <p>Clear, executable replenishment schedules — when to order, how much, and from which supplier — to ensure availability.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Promotional Lift & Impact Analysis</h4>
                <p>Detailed assessment of promotional effectiveness and impact on baseline demand, enabling smarter promotion planning.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Forecast Accuracy & Performance Dashboards</h4>
                <p>Real‑time tracking of forecast accuracy, inventory turns, and service levels, with automated alerts and reporting.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Continuous Model Retraining & Improvement</h4>
                <p>Automated retraining of models as new data arrives, ensuring forecasts stay accurate and responsive to changing conditions.</p>
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
              Let's build a demand forecasting and inventory planning system that reduces costs,
              improves service levels, and frees up working capital. You'll have the visibility
              and confidence to make smarter supply chain decisions.
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

export default InventoryDemandForecastingPage;
