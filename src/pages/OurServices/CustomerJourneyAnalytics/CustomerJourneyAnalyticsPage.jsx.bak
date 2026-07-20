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
  MapPin,
  Globe,
  Radio,
  UserCheck,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./CustomerJourneyAnalyticsPage.module.css";
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
    title: "Data Integration & Journey Mapping",
    desc: "We consolidate data from your CRM, website analytics, mobile app, email, social media, and offline channels. We build a comprehensive customer journey map that visualizes every touchpoint — from awareness to consideration to purchase to loyalty — across all channels and devices."
  },
  {
    icon: <Layers size={22} />,
    title: "Touchpoint & Channel Attribution",
    desc: "We analyze the impact of each touchpoint and channel on customer decisions and conversions. We use multi‑touch attribution models — linear, time‑decay, and Shapley — to assign credit to each interaction, revealing which channels are driving conversions and influencing customer behavior."
  },
  {
    icon: <Target size={22} />,
    title: "Drop‑off & Funnel Analysis",
    desc: "We identify where customers are dropping off in the journey — from awareness to conversion — and diagnose the root causes. We analyze abandonment rates, friction points, and barriers to conversion, enabling targeted interventions to improve conversion rates."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Pathway & Sequence Analysis",
    desc: "We analyze the sequences and pathways customers take to purchase. We identify common paths, variations, and patterns — revealing how different customer segments navigate the journey and which paths are most successful."
  },
  {
    icon: <Activity size={22} />,
    title: "Segmentation & Personalization Opportunities",
    desc: "We segment customers by journey behavior and identify personalized experiences that can improve engagement and conversion. We recommend tailored content, offers, and channel strategies for each segment."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Optimization",
    desc: "We provide real‑time dashboards that track journey metrics — conversion rates, drop‑off points, channel performance, and customer satisfaction. We continuously monitor journey health and recommend improvements to maintain and enhance customer experience."
  },
];

const features = [
  {
    icon: <Globe size={22} />,
    title: "Multi‑Channel Journey Mapping",
    desc: "Visualize the complete customer journey across web, mobile, social, email, and offline channels — identifying touchpoints and interactions at every stage."
  },
  {
    icon: <Target size={22} />,
    title: "Multi‑Touch Attribution",
    desc: "Assign credit to each touchpoint and channel using advanced attribution models, understanding the true impact of each interaction on conversions."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Drop‑off & Funnel Analysis",
    desc: "Identify where customers are abandoning the journey and diagnose the root causes — enabling targeted interventions to improve conversion."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Pathway & Sequence Analysis",
    desc: "Analyze the sequences and patterns customers follow to purchase, revealing insights for optimizing the journey."
  },
  {
    icon: <Users size={22} />,
    title: "Segmentation & Personalization",
    desc: "Segment customers by journey behavior and identify opportunities for personalized experiences that increase engagement and conversion."
  },
  {
    icon: <Eye size={22} />,
    title: "Real‑Time Journey Dashboards",
    desc: "Monitor journey health, channel performance, and customer satisfaction in real‑time, enabling rapid optimization."
  },
];

const benefits = [
  {
    icon: <TrendingUp size={18} />,
    title: "15‑25% Conversion Rate Increase",
    desc: "Optimize the customer journey to reduce friction, improve engagement, and increase conversions across channels."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Time‑to‑Conversion",
    desc: "Identify and remove barriers in the journey, accelerating customer progress from awareness to purchase."
  },
  {
    icon: <Users size={18} />,
    title: "Better Customer Understanding",
    desc: "Gain deep insights into customer behavior, preferences, and pain points — enabling more effective marketing and experience design."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Improved Marketing ROI",
    desc: "Optimize channel and touchpoint investments based on their true impact on conversions, reducing waste and improving ROI."
  },
  {
    icon: <Heart size={18} />,
    title: "Enhanced Customer Loyalty",
    desc: "Deliver a seamless, personalized experience that builds trust, satisfaction, and long‑term loyalty."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Deliver a superior customer experience that differentiates your brand and attracts more customers."
  },
];

const CustomerJourneyAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Customer Journey Analytics | Scape Data Solutions"
      description="AI-powered customer journey analytics that map, analyze, and optimize every touchpoint across channels."
      path="/services/customer-journey-analytics"
      schema={buildServiceSchema({
        name: "Customer Journey Analytics",
        description: "AI-powered customer journey analytics that map, analyze, and optimize every touchpoint across channels.",
        path: "/services/customer-journey-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Globe size={14} /> <span>Customer Journey Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              See the <span className={styles.highlight}>Path to Purchase</span> Like Never Before
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered customer journey analytics that maps, analyzes, and optimizes every touchpoint
              across channels. Understand how customers find you, engage with you, and become loyal
              advocates — and remove friction at every step.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Map Your Customer Journey <ArrowRight size={16} />
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
                <span className={styles.statLabel}>Conversion Lift</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Drop‑off Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20%</span>
                <span className={styles.statLabel}>Marketing ROI Improvement</span>
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
            <h2>Customer Journeys are <span className={styles.highlight}>Complex and Fragmented</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>70%</span>
                <p>Of companies lack a unified view of the customer journey across channels — missing opportunities to optimize the experience and increase conversion.</p>
              </div>
              <div const className={styles.problemStat}>
                <span className={styles.problemNumber}>50%</span>
                <p>Of customers engage with a brand through multiple channels before making a purchase, yet most attribution models fail to capture the full journey.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$100B+</span>
                <p>Estimated annual revenue loss due to poor customer journey optimization — friction, drop‑off, and lack of personalization.</p>
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
                Understand the <span className={styles.highlight}>Complete</span> Customer Story
              </h2>
              <p>
                Customers don't interact with your brand in a simple, linear path. They engage across
                multiple channels, devices, and touchpoints — websites, social media, email, search,
                ads, phone, and in‑person — and each interaction influences their decision to
                purchase or leave.
              </p>
              <p>
                Our Customer Journey Analytics service provides a comprehensive, unified view of the
                customer journey. We consolidate data from every touchpoint and channel to map the
                complete path to purchase — from initial awareness to post‑purchase loyalty.
              </p>
              <p>
                We identify where customers are dropping off, what's driving them away, and what's
                driving them to convert. We reveal the touchpoints and channels that have the greatest
                influence on decisions, enabling you to invest in what works and fix what doesn't.
              </p>
              <p>
                With our solution, you optimize every step of the journey, increase conversion rates,
                and build lasting, profitable customer relationships.
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
                <Globe size={48} />
                <span>Customer Journey Analytics</span>
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
            How We Analyze & Optimize the Journey
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
                <h4>Comprehensive Customer Journey Map</h4>
                <p>Visual, interactive map of the complete customer journey across channels, touchpoints, and stages — from awareness to loyalty.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Multi‑Touch Attribution Model</h4>
                <p>Advanced attribution model that assigns credit to each touchpoint and channel, revealing true drivers of conversions.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Drop‑off & Funnel Analysis Report</h4>
                <p>Identification of key drop‑off points and friction areas, with recommendations for improvement and optimization.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Pathway & Sequence Insights</h4>
                <p>Analysis of the sequences and patterns customers follow to purchase, revealing opportunities for journey optimization.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Segmentation & Personalization Strategy</h4>
                <p>Recommendations for segment‑specific experiences that improve engagement, conversion, and loyalty.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Real‑Time Journey Dashboards</h4>
                <p>Interactive dashboards that track journey metrics — conversion rates, drop‑off, channel performance — enabling continuous optimization.</p>
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
            <h2>Ready to Optimize Your Customer Journey?</h2>
            <p>
              Let's map your customer journey, identify the friction points, and build a seamless,
              personalized experience that converts more customers and builds lasting loyalty.
              You'll know exactly how customers navigate from awareness to advocacy — and how to
              guide them every step of the way.
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

export default CustomerJourneyAnalyticsPage;
