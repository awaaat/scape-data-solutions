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
  AlertCircle,
  Award,
  Zap,
  Layers,
  User,
  ShoppingBag,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./CustomerPurchaseAnalysisPage.module.css";
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
    title: "Data Integration & Customer 360",
    desc: "We consolidate data from POS, e‑commerce, loyalty programs, CRM, and customer support interactions to build a unified view of each customer — covering demographics, purchase history, browsing behavior, and engagement patterns."
  },
  {
    icon: <Layers size={22} />,
    title: "RFM & Behavioral Segmentation",
    desc: "We segment customers using Recency, Frequency, Monetary (RFM) analysis, complemented by behavioral metrics like product category preferences, channel usage, and purchase cycles. This reveals high‑value, at‑risk, and loyal customer groups."
  },
  {
    icon: <Target size={22} />,
    title: "Customer Journey & Touchpoint Analysis",
    desc: "We map the entire customer journey — from awareness to purchase — across all channels. We identify key conversion drivers and drop‑off points, enabling you to optimize the customer experience and increase conversion rates."
  },
  {
    icon: <PieChart size={22} />,
    title: "Cohort & Retention Analysis",
    desc: "We analyze customer retention rates, churn patterns, and lifetime value (CLV) across cohorts. We identify which segments have the highest retention and which are most likely to churn, informing targeted retention strategies."
  },
  {
    icon: <Users size={22} />,
    title: "Propensity Modeling & Next‑Best‑Action",
    desc: "We build machine learning models to predict future purchase likelihood, churn probability, and cross‑sell/up‑sell potential. We recommend the next‑best action for each customer — personalized offers, product recommendations, or outreach timing."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Monitoring, Reporting & Continuous Improvement",
    desc: "We provide real‑time dashboards that track customer metrics, segment performance, and the impact of retention efforts. We continuously refine models as new data arrives, ensuring your insights remain fresh and actionable."
  },
];

const features = [
  {
    icon: <User size={22} />,
    title: "Unified Customer Profiles",
    desc: "A single, holistic view of each customer, combining transactional, behavioral, and demographic data for deeper understanding."
  },
  {
    icon: <ShoppingBag size={22} />,
    title: "Purchase Pattern & Basket Analysis",
    desc: "Analyze basket composition, product affinity, and purchase sequences to uncover cross‑sell and up‑sell opportunities."
  },
  {
    icon: <Target size={22} />,
    title: "Customer Lifetime Value (CLV) Prediction",
    desc: "Predict future customer value with machine learning, enabling resource allocation to high‑value segments."
  },
  {
    icon: <PieChart size={22} />,
    title: "Segmentation & Persona Development",
    desc: "Identify distinct customer segments with shared behaviors and needs, enabling personalized marketing and service."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Churn & Retention Risk Scoring",
    desc: "Proactively identify customers at risk of churning and prioritize retention efforts for maximum impact."
  },
  {
    icon: <Eye size={22} />,
    title: "Campaign & Offer Effectiveness Measurement",
    desc: "Track the impact of marketing campaigns on customer behavior and measure incremental revenue lift."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "Increased Customer Lifetime Value",
    desc: "Retain high‑value customers and increase their purchase frequency and average order value over time."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Improved Conversion & Retention",
    desc: "Optimize the customer journey to reduce drop‑off and improve repeat purchase rates."
  },
  {
    icon: <Target size={18} />,
    title: "Personalized Marketing & Service",
    desc: "Deliver relevant offers, recommendations, and communications that resonate with each customer segment."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Decision‑Making",
    desc: "Access real‑time customer insights that enable agile adjustments to marketing, sales, and service strategies."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Reduced Churn",
    desc: "Identify at‑risk customers early and implement preventive measures to improve retention."
  },
  {
    icon: <Award size={18} />,
    title: "Data‑Driven Competitive Advantage",
    desc: "Understand your customers better than competitors, enabling superior product development and customer experience."
  },
];

const CustomerPurchaseAnalysisPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Customer Purchase Analysis | Scape Data Solutions"
      description="AI-powered customer purchase analysis that uncovers buying patterns and predicts future value to maximize revenue."
      path="/services/customer-purchase-analysis"
      schema={buildServiceSchema({
        name: "Customer Purchase Analysis",
        description: "AI-powered customer purchase analysis that uncovers buying patterns and predicts future value to maximize revenue.",
        path: "/services/customer-purchase-analysis",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Users size={14} /> <span>Customer Purchase Analysis</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Understand Your Customers <span className={styles.highlight}>Like Never Before</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Uncover purchase patterns, segment customers, and predict future value with AI-powered
              customer purchase analysis. Drive loyalty, increase CLV, and maximize revenue.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Analyze Your Customers <ArrowRight size={16} />
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
                <span className={styles.statValue}>20-30%</span>
                <span className={styles.statLabel}>CLV Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15%</span>
                <span className={styles.statLabel}>Churn Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>25%</span>
                <span className={styles.statLabel}>Conversion Lift</span>
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
            <h2>Customer Data is a <span className={styles.highlight}>Hidden Asset</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>70%</span>
                <p>Of retailers lack a unified view of customer activity across channels, missing opportunities to personalize experience.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of customers expect brands to understand their needs — yet most retailers can't deliver due to fragmented data.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>45%</span>
                <p>Of marketing spend is wasted due to poor targeting — a direct consequence of inadequate customer understanding.</p>
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
                Turn Customer Data into <span className={styles.highlight}>Actionable Understanding</span>
              </h2>
              <p>
                Your customers generate vast amounts of data with every interaction — purchases, browsing,
                service inquiries, and social engagement. Yet most retailers struggle to combine these
                silos into a cohesive picture of customer behavior, leading to generic experiences that
                fail to resonate.
              </p>
              <p>
                Our Customer Purchase Analysis service transforms your raw customer data into deep,
                actionable understanding. We build a unified view of each customer — their purchase
                history, preferences, channel interactions, and loyalty profile — enabling you to
                deliver personalized experiences at scale.
              </p>
              <p>
                We use RFM analysis, behavioral segmentation, and machine learning to identify high‑value
                segments, predict future purchase behavior, and uncover cross‑sell opportunities. We
                identify at‑risk customers before they churn and recommend targeted retention actions.
              </p>
              <p>
                Ultimately, we help you build customer‑centric strategies that increase loyalty,
                maximize lifetime value, and drive sustainable revenue growth.
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
                <Users size={48} />
                <span>Customer Purchase Analysis</span>
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
                <h4>Customer 360 Dashboard</h4>
                <p>Unified view of each customer's purchase history, preferences, and engagement across all channels.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>RFM & Behavioral Segmentation Report</h4>
                <p>Detailed segmentation that groups customers by recency, frequency, monetary value, and behavioral attributes.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Customer Lifetime Value (CLV) Prediction</h4>
                <p>Machine learning-based forecasts of future customer value, enabling targeted resource allocation.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Churn Risk & Retention Recommendations</h4>
                <p>Identification of customers at risk of churning, with tailored retention strategies for each segment.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Cross‑Sell & Up‑Sell Opportunity Map</h4>
                <p>Actionable insights on product associations and customer propensity, enabling targeted offers.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Campaign Performance & ROI Measurement</h4>
                <p>Quantified impact of marketing and retention efforts on customer behavior and revenue.</p>
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
            <h2>Ready to Truly Understand Your Customers?</h2>
            <p>
              Let's unlock the value hidden in your customer data. You'll gain the insights needed to
              build lasting relationships, increase loyalty, and drive sustainable revenue growth.
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

export default CustomerPurchaseAnalysisPage;
