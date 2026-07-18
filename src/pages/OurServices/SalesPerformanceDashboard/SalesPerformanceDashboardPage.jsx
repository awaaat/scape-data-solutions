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
  Calendar,
  AlertCircle,
  Award,
  Zap,
  LayoutDashboard,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./SalesPerformanceDashboardPage.module.css";
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
    title: "Data Integration & Unification",
    desc: "We connect to your POS systems, e-commerce platforms, CRM, and inventory databases. We unify data across channels — online, in-store, and mobile — to create a single source of truth for sales performance."
  },
  {
    icon: <LayoutDashboard size={22} />,
    title: "KPI Definition & Dashboard Design",
    desc: "We work with you to define the key performance indicators that matter most — revenue, units sold, average order value, conversion rate, and more. We design intuitive dashboards tailored to your business needs."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Sales Trend & Pattern Analysis",
    desc: "We analyze historical sales data to identify trends, seasonality, and cyclical patterns. We highlight growth opportunities and potential risks, enabling proactive decision-making."
  },
  {
    icon: <Target size={22} />,
    title: "Store & Channel Performance Comparison",
    desc: "We compare sales performance across stores, regions, and channels. We identify top-performing locations and channels, and uncover best practices that can be replicated."
  },
  {
    icon: <Users size={22} />,
    title: "Sales Team & Individual Performance",
    desc: "We track individual sales representative performance — revenue per rep, conversion rate, and customer satisfaction. We enable coaching and incentive alignment."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Real‑Time Monitoring & Alerts",
    desc: "We provide real-time dashboards that update automatically with each transaction. We alert you to significant deviations from targets, enabling immediate corrective action."
  },
];

const features = [
  {
    icon: <DollarSign size={22} />,
    title: "Revenue & Sales Metrics",
    desc: "Track daily, weekly, and monthly revenue with breakdowns by product category, channel, and store."
  },
  {
    icon: <PieChart size={22} />,
    title: "Product & Category Performance",
    desc: "Identify top-selling products, categories, and brands. Monitor product lifecycle and inventory turnover."
  },
  {
    icon: <Calendar size={22} />,
    title: "Sales Forecasting & Trend Projection",
    desc: "Forecast future sales using machine learning models that incorporate seasonality and market trends."
  },
  {
    icon: <Users size={22} />,
    title: "Sales Rep & Team Scorecards",
    desc: "Compare individual and team performance against targets, with insights for coaching and rewards."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Anomaly Detection & Alerts",
    desc: "Automatically flag unusual dips or spikes in sales, enabling rapid investigation and response."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Operational Dashboards",
    desc: "Tailored views for leadership and frontline managers, with drill-down capabilities for detailed analysis."
  },
];

const benefits = [
  {
    icon: <TrendingUp size={18} />,
    title: "Revenue Growth",
    desc: "Identify underperforming areas and opportunities for growth, enabling data‑driven strategies to increase sales."
  },
  {
    icon: <Zap size={18} />,
    title: "Operational Efficiency",
    desc: "Streamline operations by focusing on high‑impact activities and eliminating waste."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Improved Profitability",
    desc: "Optimize product mix, pricing, and promotions based on performance insights to boost margins."
  },
  {
    icon: <Users size={18} />,
    title: "Enhanced Sales Team Performance",
    desc: "Equip sales teams with real‑time data to improve conversion rates and customer satisfaction."
  },
  {
    icon: <Target size={18} />,
    title: "Better Decision‑Making",
    desc: "Replace guesswork with actionable insights from your sales data, empowering leaders at all levels."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Stay ahead of competitors by quickly adapting to changing sales trends and customer preferences."
  },
];

const SalesPerformanceDashboardPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Sales Performance Dashboard | Scape Data Solutions"
      description="AI-powered dashboards that provide real-time visibility into sales performance across stores and channels."
      path="/services/sales-performance-dashboard"
      schema={buildServiceSchema({
        name: "Sales Performance Dashboard",
        description: "AI-powered dashboards that provide real-time visibility into sales performance across stores and channels.",
        path: "/services/sales-performance-dashboard",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <LayoutDashboard size={14} /> <span>Sales Performance Dashboard</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Turn Your Sales Data into <span className={styles.highlight}>Actionable Intelligence</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered dashboards that provide real‑time visibility into sales performance across
              stores, channels, and products. Drive revenue growth with data‑driven decision‑making.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Build Your Dashboard <ArrowRight size={16} />
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
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Faster Decision-Making</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15%</span>
                <span className={styles.statLabel}>Revenue Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99.9%</span>
                <span className={styles.statLabel}>Data Accuracy</span>
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
            <h2>Retail Sales Data is <span className={styles.highlight}>Scattered & Underutilized</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>70%</span>
                <p>Of retailers lack a unified view of sales performance across channels, making it difficult to identify trends and opportunities.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of sales managers spend more time compiling reports than analyzing them — time that could be spent on strategy.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>25%</span>
                <p>Revenue potential is lost due to delayed responses to underperformance or missed opportunities.</p>
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
                Visualize Your Sales <span className={styles.highlight}>Like Never Before</span>
              </h2>
              <p>
                In retail, sales data is generated at every touchpoint — POS, e‑commerce, mobile apps,
                and more. But without a unified dashboard, this data remains siloed and underutilized.
                Your team spends hours compiling reports instead of taking action.
              </p>
              <p>
                Our Sales Performance Dashboard service consolidates all your sales data into a single,
                intuitive dashboard. We provide real‑time visibility into revenue, units sold,
                average order value, conversion rates, and more. We segment data by store, channel,
                product category, and sales team.
              </p>
              <p>
                Our dashboards are designed for speed and clarity — enabling you to spot trends,
                identify underperformers, and seize opportunities instantly. We also include forecasting
                and anomaly detection to help you stay ahead of the curve.
              </p>
              <p>
                Empower your sales leaders and frontline teams with the insights they need to drive
                revenue growth and operational excellence.
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
                <LayoutDashboard size={48} />
                <span>Sales Performance Dashboard</span>
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
                <h4>Custom Sales Dashboard</h4>
                <p>Interactive, real‑time dashboard tailored to your KPIs, with drill‑down to store, channel, and product levels.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Store & Channel Performance Report</h4>
                <p>Comparative analysis of sales performance across locations and channels, highlighting top performers and gaps.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Sales Forecast & Projection</h4>
                <p>Machine learning‑powered forecasts that incorporate seasonality, trends, and promotional impacts.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Sales Team Scorecards</h4>
                <p>Individual and team performance metrics, with benchmarks and coaching recommendations.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Anomaly Detection & Alerts</h4>
                <p>Automated alerts for unusual sales patterns, enabling rapid investigation and response.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Operational Views</h4>
                <p>Tailored dashboards for leadership and frontline managers, with role‑based access and permissions.</p>
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
            <h2>Ready to Transform Your Sales Performance?</h2>
            <p>
              Let's build a custom sales performance dashboard that gives you real‑time visibility
              into your business. You'll make faster, smarter decisions and drive measurable revenue
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

export default SalesPerformanceDashboardPage;
