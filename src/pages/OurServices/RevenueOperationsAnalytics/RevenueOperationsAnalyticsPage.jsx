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
  Layers,
  Calendar,
  UserCheck,
  Briefcase,
  Radio,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./RevenueOperationsAnalyticsPage.module.css";
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
    title: "Data Integration & Revenue Data Unification",
    desc: "We connect to your CRM, marketing automation, sales engagement, customer success, and billing platforms. We consolidate data from disparate systems into a unified revenue data model, creating a single source of truth for all revenue-generating activities — leads, opportunities, deals, customer success, and retention."
  },
  {
    icon: <Layers size={22} />,
    title: "Sales Performance & Pipeline Analytics",
    desc: "We analyze sales pipeline health — lead volume, conversion rates, velocity, and deal size. We identify bottlenecks in the sales process, understand what drives win/loss, and provide actionable insights to improve conversion rates and accelerate sales cycles."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Marketing Attribution & Campaign ROI",
    desc: "We measure the ROI of marketing campaigns across channels — digital, social, email, events. We use multi-touch attribution to understand how marketing influences pipeline and revenue, enabling you to optimize marketing spend and improve ROI."
  },
  {
    icon: <Target size={22} />,
    title: "Customer Success & Retention Analytics",
    desc: "We analyze customer health scores, usage patterns, and engagement to predict churn and expansion opportunities. We identify high-risk accounts and recommend interventions — outreach, training, or product recommendations — to improve retention and drive upsell and cross-sell."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Revenue Forecasting & Pipeline Management",
    desc: "We build accurate revenue forecasts using AI models that incorporate pipeline data, historical win rates, seasonality, and economic indicators. We enable pipeline management with real-time visibility into opportunities, risks, and expected closing dates."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Executive Dashboards & Strategic Insights",
    desc: "We provide real‑time dashboards that track key revenue metrics — pipeline coverage, win rate, average deal size, customer acquisition cost (CAC), and lifetime value (LTV). We deliver strategic insights to revenue leaders and executives, enabling data-driven decisions about go-to-market strategy, investment, and resource allocation."
  },
];

const features = [
  {
    icon: <Briefcase size={22} />,
    title: "Sales Pipeline Analytics",
    desc: "Analyze pipeline health, conversion rates, and sales velocity to optimize sales execution and improve win rates."
  },
  {
    icon: <Radio size={22} />,
    title: "Multi‑Touch Marketing Attribution",
    desc: "Understand the impact of each marketing channel on pipeline and revenue, enabling optimized marketing spend and ROI."
  },
  {
    icon: <Users size={22} />,
    title: "Customer Health & Churn Prediction",
    desc: "Predict customer churn risk and identify expansion opportunities with AI-driven customer health scores and engagement analysis."
  },
  {
    icon: <Target size={22} />,
    title: "Revenue Forecasting & Pipeline Management",
    desc: "Build accurate revenue forecasts with real‑time visibility into pipeline, risks, and opportunities, enabling confident planning."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "CAC & LTV Analysis",
    desc: "Optimize customer acquisition cost and lifetime value with data-driven insights into sales and marketing efficiency."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive Revenue Dashboards",
    desc: "Tailored dashboards for revenue leaders and executives, with drill‑down to pipeline, forecast, and customer health metrics."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "10‑20% Revenue Growth",
    desc: "Unlock revenue growth by optimizing sales execution, marketing ROI, and customer retention strategies."
  },
  {
    icon: <Target size={18} />,
    title: "30‑50% Faster Sales Cycles",
    desc: "Accelerate sales by identifying and removing bottlenecks in the sales process, improving conversion rates and velocity."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Improved Forecast Accuracy",
    desc: "Achieve 90‑95% forecast accuracy with AI‑driven revenue models that incorporate pipeline and market data."
  },
  {
    icon: <Users size={18} />,
    title: "Reduced Churn & Increased Retention",
    desc: "Proactively identify and address customer risk, reducing churn and increasing customer lifetime value."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Better Sales & Marketing Alignment",
    desc: "Build a revenue engine where sales, marketing, and customer success teams are aligned around common goals and metrics."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Outperform competitors by building a data‑driven revenue engine that consistently delivers predictable growth."
  },
];

const RevenueOperationsAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Revenue Operations Analytics | Scape Data Solutions"
      description="AI-powered revenue operations analytics that unify sales, marketing, and customer success data."
      path="/services/revenue-operations-analytics"
      schema={buildServiceSchema({
        name: "Revenue Operations Analytics",
        description: "AI-powered revenue operations analytics that unify sales, marketing, and customer success data.",
        path: "/services/revenue-operations-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <DollarSign size={14} /> <span>Revenue Operations (RevOps) Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Unlock <span className={styles.highlight}>Predictable Revenue</span> Growth
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered revenue operations analytics that unify sales, marketing, and customer
              success data. Optimize every revenue-generating activity from lead to retention and
              build a scalable, data‑driven revenue engine.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Revenue Engine <ArrowRight size={16} />
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
                <span className={styles.statLabel}>Revenue Growth</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30-50%</span>
                <span className={styles.statLabel}>Faster Sales Cycles</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>95%</span>
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
            <h2>Revenue Data is <span className={styles.highlight}>Siloed and Unpredictable</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>70%</span>
                <p>Of companies have sales, marketing, and customer success teams operating with separate, disconnected data — preventing a unified view of the revenue lifecycle.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of revenue leaders lack accurate forecasting, leading to missed targets, resource misallocation, and investor uncertainty.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$1T+</span>
                <p>Estimated annual revenue lost due to poor alignment between sales, marketing, and customer success — a problem that RevOps analytics can solve.</p>
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
                Build a <span className={styles.highlight}>Predictable</span> Revenue Engine
              </h2>
              <p>
                Revenue operations (RevOps) is the fastest-growing function in modern go-to-market
                organizations. Yet many companies still operate with siloed data and disconnected
                processes — sales, marketing, and customer success teams each using their own tools
                and metrics, creating blind spots and missed opportunities.
              </p>
              <p>
                Our Revenue Operations Analytics service provides a unified view of the entire
                revenue lifecycle — from lead generation to customer retention. We consolidate
                data from your CRM, marketing automation, sales engagement, and customer success
                platforms to create a single source of truth for all revenue activities.
              </p>
              <p>
                We analyze sales pipeline health, marketing attribution, customer health, and
                retention to identify opportunities for optimization. We build accurate revenue
                forecasts with AI-driven models that incorporate pipeline, historical win rates,
                and market conditions.
              </p>
              <p>
                With our solution, you build a predictable revenue engine that aligns sales,
                marketing, and customer success teams around common goals, accelerates growth,
                and delivers consistent, reliable results.
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
                <DollarSign size={48} />
                <span>Revenue Operations Analytics</span>
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
            How We Optimize Your Revenue Engine
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
                <h4>Unified Revenue Data Platform</h4>
                <p>A single source of truth for all revenue-generating activities, consolidating data from CRM, marketing automation, and customer success platforms.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Sales Pipeline & Performance Dashboard</h4>
                <p>Real‑time visibility into pipeline health, conversion rates, velocity, and win/loss patterns, with actionable insights to improve sales execution.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Marketing Attribution & ROI Report</h4>
                <p>Multi‑touch attribution analysis that quantifies the impact of each marketing channel on pipeline and revenue, enabling optimized marketing spend.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Customer Health & Churn Prediction Model</h4>
                <p>AI-driven customer health scores and churn prediction models that identify at‑risk accounts and expansion opportunities, with retention recommendations.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Revenue Forecasting & Pipeline Management Tool</h4>
                <p>Accurate, real‑time revenue forecasts with pipeline visibility, enabling confident planning and resource allocation.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive Revenue Dashboards</h4>
                <p>Tailored dashboards for revenue leaders and executives, with drill‑down to pipeline, forecast, and customer health metrics.</p>
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
            <h2>Ready to Build a Predictable Revenue Engine?</h2>
            <p>
              Let's unify your revenue data, optimize your go‑to‑market strategy, and build a
              revenue engine that consistently delivers predictable growth. You'll have the
              visibility, alignment, and insights to achieve your revenue goals.
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

export default RevenueOperationsAnalyticsPage;
