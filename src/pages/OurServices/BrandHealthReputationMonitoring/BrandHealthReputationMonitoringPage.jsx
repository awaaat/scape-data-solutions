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
  AlertCircle,
  Award,
  Zap,
  Globe,
  MessageCircle,
  Newspaper,
  Radio,
  Star,
  ThumbsUp,
  ThumbsDown,
  Share2,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./BrandHealthReputationMonitoringPage.module.css";
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
    icon: <Globe size={22} />,
    title: "Data Collection & Monitoring Setup",
    desc: "We deploy comprehensive brand monitoring across all relevant channels — news sites, social media platforms, review sites, forums, blogs, and traditional media. We capture every mention, review, rating, and conversation about your brand, competitors, and industry."
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Sentiment & Emotion Analysis",
    desc: "We use advanced natural language processing (NLP) to classify each mention as positive, negative, or neutral, and detect underlying emotions — frustration, delight, trust, anger. We go beyond simple sentiment to capture nuance and intensity."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Share of Voice & Competitive Benchmarking",
    desc: "We measure your brand's share of voice relative to competitors — tracking mentions, engagement, and sentiment across channels. We benchmark your performance against industry peers and identify competitive gaps and opportunities."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Crisis Detection & Reputation Risk Alerts",
    desc: "We monitor for spikes in negative sentiment, volume, or emerging issues that could escalate into reputation crises. We provide real‑time alerts and early warning signals, enabling proactive response and damage control."
  },
  {
    icon: <PieChart size={22} />,
    title: "Topic & Theme Identification",
    desc: "We analyze the topics and themes driving brand conversations — product quality, customer service, pricing, innovation, sustainability. We identify what customers care about most and what's driving sentiment, positive or negative."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Reporting & Actionable Insights",
    desc: "We provide comprehensive reports and dashboards that track brand health metrics — sentiment index, share of voice, net sentiment score, and crisis alerts. We translate data into actionable recommendations for brand strategy, marketing, and communication."
  },
];

const features = [
  {
    icon: <Globe size={22} />,
    title: "Comprehensive Multi‑Channel Monitoring",
    desc: "Monitor brand mentions across news, social media, review sites, forums, and traditional media — capturing the full spectrum of conversations about your brand."
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Sentiment & Emotion Analysis",
    desc: "Classify sentiment with high accuracy and detect underlying emotions such as frustration, delight, trust, anger — revealing the true health of your brand."
  },
  {
    icon: <Target size={22} />,
    title: "Share of Voice & Competitive Benchmarking",
    desc: "Measure your brand's share of voice against competitors and identify gaps and opportunities in the market."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Crisis Detection & Real‑Time Alerts",
    desc: "Receive early warnings of emerging reputation risks, enabling proactive response and damage control."
  },
  {
    icon: <PieChart size={22} />,
    title: "Topic & Theme Analysis",
    desc: "Understand the key drivers of brand sentiment — product quality, customer service, pricing, innovation — and prioritize improvement areas."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Marketing Dashboards",
    desc: "Tailored dashboards for leadership and marketing teams, with drill‑down to sentiment trends, topics, and competitive benchmarks."
  },
];

const benefits = [
  {
    icon: <Shield size={18} />,
    title: "Proactive Reputation Management",
    desc: "Identify and address reputation risks early, preventing crises and protecting brand equity."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Increased Brand Trust & Loyalty",
    desc: "Understand what drives customer sentiment and take action to improve trust and loyalty."
  },
  {
    icon: <Target size={18} />,
    title: "Competitive Insights",
    desc: "Benchmark against competitors and identify opportunities to differentiate and capture market share."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Crisis Response",
    desc: "React to reputation threats in minutes, not days — with real‑time alerts and actionable insights."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Improved Marketing ROI",
    desc: "Focus brand messaging and marketing efforts on topics that resonate with customers and drive positive sentiment."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Build a strong, resilient brand that earns customer trust and loyalty, outperforming competitors."
  },
];

const BrandHealthReputationMonitoringPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Brand Health & Reputation Monitoring | Scape Data Solutions"
      description="AI-powered brand monitoring that tracks sentiment, share of voice, and reputation risks across all channels."
      path="/services/brand-health-reputation-monitoring"
      schema={buildServiceSchema({
        name: "Brand Health & Reputation Monitoring",
        description: "AI-powered brand monitoring that tracks sentiment, share of voice, and reputation risks across all channels.",
        path: "/services/brand-health-reputation-monitoring",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Globe size={14} /> <span>Brand Health & Reputation Monitoring</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Protect Your <span className={styles.highlight}>Reputation</span>. Build Your <span className={styles.highlight}>Brand</span>.
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered brand monitoring that tracks sentiment, share of voice, and reputation risks
              across all channels. Know what the world thinks about your brand — and take action
              before issues escalate.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Monitor Your Brand <ArrowRight size={16} />
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
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Real‑Time Monitoring</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100,000+</span>
                <span className={styles.statLabel}>Sources Monitored</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>94%</span>
                <span className={styles.statLabel}>Sentiment Accuracy</span>
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
            <h2>Brand Reputation is <span className={styles.highlight}>Fragile</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>80%</span>
                <p>Of consumers research brands online before making a purchase — and negative sentiment can cost you sales before you even know it exists.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of companies lack real‑time visibility into brand reputation, leaving them reactive rather than proactive when issues arise.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$100B+</span>
                <p>Estimated annual revenue loss due to reputation damage — a risk that can be mitigated with proactive monitoring.</p>
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
                Know Your Brand's <span className={styles.highlight}>True</span> Reputation
              </h2>
              <p>
                In the digital age, brand reputation can change in an instant. A viral complaint,
                a negative review, or a social media crisis can undo years of brand building — often
                without warning. Yet many organizations lack the visibility to see these threats
                coming.
              </p>
              <p>
                Our Brand Health & Reputation Monitoring service provides comprehensive, real‑time
                visibility into what's being said about your brand across all channels. We monitor
                news, social media, review sites, forums, and traditional media — capturing every
                mention, review, and conversation.
              </p>
              <p>
                We analyze sentiment and emotion, measure share of voice against competitors, and
                detect emerging issues before they escalate. We provide early warnings of reputation
                risks, enabling you to respond proactively and protect your brand equity.
              </p>
              <p>
                With our solution, you build a resilient brand that weathers storms and thrives
                — earning trust, loyalty, and competitive advantage.
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
                <span>Brand Reputation Monitoring</span>
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
            How We Monitor Your Brand
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
                <h4>Brand Health Dashboard</h4>
                <p>Real‑time view of brand sentiment, share of voice, and reputation metrics across all monitored channels.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Sentiment & Emotion Analysis Report</h4>
                <p>Detailed analysis of sentiment trends and emotional drivers — positive, negative, neutral — with actionable insights.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Share of Voice & Competitive Benchmark</h4>
                <p>Comparative analysis of your brand's share of voice against competitors, with gap analysis and recommendations.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Crisis Detection & Early Warning Alerts</h4>
                <p>Real‑time alerts for spikes in negative sentiment, volume, or emerging issues — enabling proactive response.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Topic & Theme Identification</h4>
                <p>Identification of key topics driving brand sentiment — product quality, service, pricing, innovation — with recommendations.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Marketing Dashboards</h4>
                <p>Tailored dashboards for leadership and marketing teams, with drill‑down to sentiment trends, topics, and competitive insights.</p>
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
            <h2>Ready to Protect and Grow Your Brand?</h2>
            <p>
              Let's build a brand monitoring system that gives you real‑time visibility, early
              warnings, and actionable insights to protect your reputation and build a stronger,
              more resilient brand.
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

export default BrandHealthReputationMonitoringPage;
