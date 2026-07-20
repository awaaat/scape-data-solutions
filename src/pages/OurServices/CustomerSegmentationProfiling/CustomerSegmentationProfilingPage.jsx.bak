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
  Layers,
  GitBranch,
  AlertCircle,
  Award,
  Zap,
  UserCheck,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./CustomerSegmentationProfilingPage.module.css";
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
    title: "Data Integration & Enrichment",
    desc: "We consolidate data from your CRM, POS, e‑commerce, social media, and third‑party sources. We build unified customer profiles enriched with demographic, behavioral, and transactional data to create a 360‑degree view of each customer."
  },
  {
    icon: <Layers size={22} />,
    title: "Segmentation Modeling",
    desc: "We use machine learning algorithms — clustering (K‑means, DBSCAN), RFM analysis, and behavioral segmentation — to group customers into meaningful segments based on purchase behavior, engagement, demographics, and lifetime value."
  },
  {
    icon: <PieChart size={22} />,
    title: "Segment Profiling & Persona Development",
    desc: "We create detailed profiles for each segment — demographics, preferences, purchase drivers, channel affinity, and pain points. We develop actionable personas that help you tailor marketing, product, and service strategies."
  },
  {
    icon: <Target size={22} />,
    title: "Segmentation‑Based Strategy Recommendations",
    desc: "We translate segmentation insights into concrete recommendations — personalized marketing campaigns, product recommendations, pricing strategies, and channel investments tailored to each segment's unique needs."
  },
  {
    icon: <Activity size={22} />,
    title: "Segment Performance Monitoring",
    desc: "We track segment‑level performance metrics — acquisition cost, retention rate, average order value, and lifetime value. We monitor segment shifts over time and recommend adjustments to your strategy."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Learning & Optimization",
    desc: "We continuously refine segmentation models as new data emerges. We adapt to changing customer behavior, ensuring your segmentation strategy remains accurate and actionable."
  },
];

const features = [
  {
    icon: <Users size={22} />,
    title: "Unified Customer Profiles",
    desc: "Consolidate data from multiple sources to create a single, comprehensive view of each customer, enabling accurate segmentation."
  },
  {
    icon: <PieChart size={22} />,
    title: "RFM & Behavioral Segmentation",
    desc: "Segment customers by Recency, Frequency, Monetary value, and behavioral attributes such as browsing patterns, product affinity, and engagement."
  },
  {
    icon: <Target size={22} />,
    title: "Persona Development",
    desc: "Create rich, actionable personas for each segment that guide marketing, product, and service strategies with clarity."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Dynamic & Adaptive Segmentation",
    desc: "Segments evolve with customer behavior. Our models automatically update to reflect changing preferences and market conditions."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Segment Performance Dashboards",
    desc: "Real‑time dashboards that track key segment metrics — size, value, churn rate, and engagement — enabling data‑driven decisions."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Marketing Dashboards",
    desc: "Tailored views for leadership and marketing teams, with drill‑down capabilities to understand segment composition and trends."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "Increased Revenue & CLV",
    desc: "Tailor marketing and offers to each segment, boosting conversion rates and customer lifetime value by 15‑25%."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Improved Marketing ROI",
    desc: "Focus marketing spend on segments with the highest potential — reducing waste and improving ROI by 20‑30%."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Customer Acquisition",
    desc: "Identify and target high‑value lookalike segments, accelerating customer acquisition and reducing CAC."
  },
  {
    icon: <Users size={18} />,
    title: "Better Customer Retention",
    desc: "Understand the needs and pain points of each segment, enabling personalized retention strategies that reduce churn."
  },
  {
    icon: <Target size={18} />,
    title: "Data‑Driven Product Development",
    desc: "Design products and features that resonate with specific customer segments, increasing adoption and satisfaction."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Understand your customers better than competitors, enabling superior targeting, messaging, and product positioning."
  },
];

const CustomerSegmentationProfilingPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Customer Segmentation & Profiling | Scape Data Solutions"
      description="AI-powered customer segmentation and profiling that uncovers hidden patterns and identifies high-value segments."
      path="/services/customer-segmentation-profiling"
      schema={buildServiceSchema({
        name: "Customer Segmentation & Profiling",
        description: "AI-powered customer segmentation and profiling that uncovers hidden patterns and identifies high-value segments.",
        path: "/services/customer-segmentation-profiling",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Users size={14} /> <span>Customer Segmentation & Profiling</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Know Your Customers <span className={styles.highlight}>Deeply</span>. Grow Your Business <span className={styles.highlight}>Smarter</span>.
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered customer segmentation and profiling that uncovers hidden patterns, identifies
              high‑value segments, and enables personalized experiences. Turn customer data into a
              strategic advantage.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Start Segmenting <ArrowRight size={16} />
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
                <span className={styles.statLabel}>CLV Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20-30%</span>
                <span className={styles.statLabel}>Marketing ROI Lift</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>5+</span>
                <span className={styles.statLabel}>Customer Segments Identified</span>
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
            <h2>One‑Size‑Fits‑All Marketing <span className={styles.highlight}>Doesn't Work</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of businesses treat all customers the same — sending generic messages that fail to resonate, leading to low engagement and high churn.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of companies lack the data and tools to segment customers effectively, missing opportunities to personalize experiences and drive loyalty.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$100B+</span>
                <p>Estimated annual revenue opportunity lost due to ineffective customer segmentation and targeting.</p>
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
                Unlock the Power of <span className={styles.highlight}>Customer Understanding</span>
              </h2>
              <p>
                Customers are not a monolith. They have different needs, preferences, behaviors, and
                values. Yet many businesses treat them identically — sending the same messages,
                offering the same products, and failing to create meaningful connections.
              </p>
              <p>
                Our Customer Segmentation & Profiling service uses AI and machine learning to
                uncover hidden patterns in your customer data. We segment your customers into
                meaningful groups based on demographic, behavioral, and transactional attributes.
              </p>
              <p>
                We create detailed personas for each segment — understanding what drives them, what
                they value, and how they interact with your brand. We translate these insights into
                actionable strategies for marketing, product development, and customer experience.
              </p>
              <p>
                With our solution, you deliver personalized experiences at scale, increase customer
                loyalty, and maximize the lifetime value of every customer.
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
                <span>Customer Segmentation</span>
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
            How We Build Customer Segmentation
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
                <h4>Customer Segmentation Model</h4>
                <p>A data‑driven segmentation model that groups your customers into distinct segments based on behavior, demographics, and value.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Persona & Segment Profiles</h4>
                <p>Detailed profiles for each segment, including demographics, motivations, preferences, and channel affinity.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Segment‑Based Strategy Playbook</h4>
                <p>Actionable recommendations for marketing, product, and service strategies tailored to each segment's unique needs.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Segment Performance Dashboard</h4>
                <p>Real‑time tracking of segment metrics — size, value, churn, engagement — enabling ongoing optimization.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Lookalike & Expansion Opportunities</h4>
                <p>Identification of lookalike audiences and potential expansion segments to fuel growth.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Marketing Dashboards</h4>
                <p>Tailored dashboards for leadership and marketing teams, with drill‑down to segment‑level insights.</p>
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
            <h2>Ready to Understand Your Customers?</h2>
            <p>
              Let's build a customer segmentation and profiling system that unlocks growth,
              improves marketing efficiency, and builds lasting customer relationships.
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

export default CustomerSegmentationProfilingPage;
