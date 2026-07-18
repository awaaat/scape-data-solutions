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
  Calendar,
  AlertCircle,
  Award,
  Zap,
  LineChart,
  GitBranch,
  Layers,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./DemandForecastingPage.module.css";
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
    title: "Data Integration & Time‑Series Aggregation",
    desc: "We connect to your POS, e‑commerce, inventory, and external data sources (weather, holidays, economic indicators). We aggregate historical sales data into a clean, time‑series format optimized for forecasting."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Exploratory Data Analysis & Pattern Discovery",
    desc: "We analyze sales patterns — seasonality, trends, cyclicality, and promotional impacts. We identify key drivers of demand, enabling us to build robust forecasting models that capture underlying behavior."
  },
  {
    icon: <LineChart size={22} />,
    title: "Model Development & Selection",
    desc: "We develop multiple forecasting models — ARIMA, Prophet, exponential smoothing, and machine learning (XGBoost, LSTM). We select the best‑performing model for each product category and location, balancing accuracy and interpretability."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Scenario Planning & What‑If Analysis",
    desc: "We enable you to simulate different scenarios — promotional intensity, supply disruptions, or market shifts. You can assess how changes in key drivers affect demand, enabling proactive decision‑making."
  },
  {
    icon: <Target size={22} />,
    title: "Forecast Integration & Automation",
    desc: "We integrate forecasts directly into your planning systems — inventory replenishment, workforce scheduling, and budgeting. We automate forecast updates, ensuring you always have the most current predictions."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Forecast Accuracy Monitoring & Improvement",
    desc: "We continuously track forecast accuracy against actual sales. We retrain models as new data arrives, and we refine approaches to minimize error and adapt to changing market conditions."
  },
];

const features = [
  {
    icon: <Calendar size={22} />,
    title: "Short‑ & Long‑Term Forecasting",
    desc: "Generate daily, weekly, monthly, and seasonal forecasts tailored to your planning horizons — from immediate replenishment to annual budgeting."
  },
  {
    icon: <Layers size={22} />,
    title: "Product & Category‑Level Forecasting",
    desc: "Obtain granular forecasts for individual SKUs, product categories, and store‑location combinations, enabling targeted inventory and promotion decisions."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Promotional Lift Analysis",
    desc: "Quantify the impact of promotions on baseline demand. Distinguish between incremental sales and cannibalization, enabling smarter marketing spend."
  },
  {
    icon: <Activity size={22} />,
    title: "Anomaly & Outlier Detection",
    desc: "Automatically detect and handle outliers — such as supply disruptions or sudden demand spikes — ensuring forecasts remain robust and reliable."
  },
  {
    icon: <Eye size={22} />,
    title: "Forecast Visualization & Reporting",
    desc: "Interactive dashboards that show forecasts, confidence intervals, and actuals, with drill‑down to product and location levels."
  },
  {
    icon: <Target size={22} />,
    title: "Integrated Demand Sensing",
    desc: "Incorporate real‑time signals — competitor pricing, social media trends, weather — to adjust forecasts dynamically and stay responsive."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "Reduced Inventory Costs",
    desc: "Forecast demand accurately to optimize stock levels, minimizing carrying costs and write‑offs."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Improved Service Levels",
    desc: "Ensure high stock availability of best‑sellers, increasing customer satisfaction and loyalty."
  },
  {
    icon: <Zap size={18} />,
    title: "Agile Promotional Execution",
    desc: "Plan promotions with confidence, knowing their expected lift, and avoid stockouts or overstock during campaigns."
  },
  {
    icon: <Award size={18} />,
    title: "Data‑Driven Strategic Planning",
    desc: "Align production, procurement, and staffing with reliable demand projections, improving operational efficiency."
  },
  {
    icon: <Target size={18} />,
    title: "Competitive Responsiveness",
    desc: "Quickly adapt to market changes with forecasts that incorporate real‑time signals, staying ahead of competitors."
  },
  {
    icon: <Shield size={18} />,
    title: "Risk Mitigation",
    desc: "Identify potential demand gaps or supply issues early, enabling proactive mitigation strategies."
  },
];

const DemandForecastingPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Demand Forecasting | Scape Data Solutions"
      description="AI-powered demand forecasting that delivers accurate sales predictions for optimized inventory and smarter promotions."
      path="/services/demand-forecasting"
      schema={buildServiceSchema({
        name: "Demand Forecasting",
        description: "AI-powered demand forecasting that delivers accurate sales predictions for optimized inventory and smarter promotions.",
        path: "/services/demand-forecasting",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <LineChart size={14} /> <span>Demand Forecasting</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Predict Demand with <span className={styles.highlight}>Unrivaled Accuracy</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered demand forecasting that delivers accurate sales predictions, enabling optimized
              inventory, smarter promotions, and agile decision‑making.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Forecast Your Demand <ArrowRight size={16} />
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
                <span className={styles.statValue}>20%</span>
                <span className={styles.statLabel}>Inventory Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Stockout Reduction</span>
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
            <h2>Demand Uncertainty is <span className={styles.highlight}>Costly and Risky</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of retailers admit to having inadequate demand forecasting capabilities, leading to frequent stockouts or overstock.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$1.1T</span>
                <p>Estimated annual loss globally due to inaccurate forecasting — from excess inventory and lost sales.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>45%</span>
                <p>Of demand planners spend most of their time on data preparation, leaving little for analysis and insight.</p>
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
                See the Future of Your <span className={styles.highlight}>Sales</span>
              </h2>
              <p>
                Demand forecasting is the foundation of effective retail planning — yet many
                retailers still rely on historical averages or manual guesses. These approaches fail
                to capture seasonality, trends, promotional impacts, and unexpected external factors,
                leading to costly mismatches between supply and demand.
              </p>
              <p>
                Our Demand Forecasting service uses advanced machine learning to generate highly
                accurate sales predictions. We incorporate a wide range of internal and external
                data — sales history, inventory, promotions, weather, holidays, and economic trends —
                to build robust forecasting models.
              </p>
              <p>
                We deliver forecasts at multiple levels: product, category, store, region, and total.
                Our models automatically adjust to changing patterns, ensuring you always have the
                most current and reliable demand projections. We also provide scenario planning,
                so you can test the impact of different strategies.
              </p>
              <p>
                Reduce uncertainty, optimize inventory, and make smarter decisions with our
                predictive insights.
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
                <LineChart size={48} />
                <span>Demand Forecasting</span>
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
                <h4>Granular Demand Forecasts</h4>
                <p>Product‑level, category‑level, and store‑level forecasts with confidence intervals — updated automatically.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Scenario Planning & Sensitivity Analysis</h4>
                <p>Interactive tools to model the impact of promotions, price changes, or external events on future demand.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Forecast Accuracy Reporting</h4>
                <p>Continuous tracking of forecast error (MAPE, RMSE) with automated model retraining to maintain accuracy.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Integration with Planning Systems</h4>
                <p>Seamless export of forecasts to your inventory, procurement, and workforce planning tools.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Promotional Lift & Cannibalization Analysis</h4>
                <p>Detailed assessment of promotion effectiveness, enabling smarter marketing spend and inventory allocation.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Automated Alerts & Anomaly Detection</h4>
                <p>Notify you when actual demand deviates significantly from forecasts, enabling rapid response.</p>
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
            <h2>Ready to Predict Your Future Demand?</h2>
            <p>
              Let's build a demand forecasting system that gives you clarity, reduces risk, and
              drives profitability. You'll have the confidence to make strategic decisions with
              accurate, reliable predictions.
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

export default DemandForecastingPage;
