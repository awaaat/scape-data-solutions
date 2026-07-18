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
  Percent,
  Gift,
  ShoppingBag,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./RetailPromotionAnalyticsPage.module.css";
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
    title: "Promotion Data Integration & Normalization",
    desc: "We consolidate data from your promotional planning systems, POS, e‑commerce, and loyalty programs. We normalize campaigns — discounts, bundles, free shipping, coupons — into a consistent framework for analysis, regardless of channel or promotion type."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Incremental Revenue & Cannibalization Analysis",
    desc: "We use causal inference techniques to separate the true incremental impact of promotions from baseline sales. We quantify cannibalization — how much of the promotion's lift comes at the expense of other products or regular‑price sales — to ensure promotions drive net growth."
  },
  {
    icon: <Target size={22} />,
    title: "ROI & Profitability Assessment",
    desc: "We calculate the return on investment for each promotion, considering not only revenue but also margin, customer acquisition, and long‑term value. We identify which promotions deliver the best returns and which should be discontinued."
  },
  {
    icon: <PieChart size={22} />,
    title: "Promotion Timing & Duration Optimization",
    desc: "We analyze the relationship between promotion duration, timing, and performance. We identify optimal campaign lengths and seasonal windows that maximize impact and minimize profitability erosion."
  },
  {
    icon: <Gift size={22} />,
    title: "Promotion Type & Channel Effectiveness",
    desc: "We compare the performance of different promotion types — percentage discounts, fixed discounts, BOGO, free shipping — across channels. We identify which formats resonate best with specific customer segments and drive the highest conversion."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Post‑Promotion Customer Behavior Analysis",
    desc: "We track customer behavior after promotions — repeat purchase rate, average order value, and brand engagement. We assess whether promotions attract new loyal customers or just discount‑seekers, informing long‑term strategy."
  },
];

const features = [
  {
    icon: <Percent size={22} />,
    title: "Promotion Performance Dashboard",
    desc: "Real‑time tracking of promotion KPIs — revenue lift, profit impact, redemption rates, and ROI — with drill‑down to individual campaigns."
  },
  {
    icon: <Gift size={22} />,
    title: "Cannibalization & Incrementality Analysis",
    desc: "Quantify the true incremental revenue driven by promotions and identify any negative impact on regular‑price sales."
  },
  {
    icon: <Target size={22} />,
    title: "Profit & Margin Impact Assessment",
    desc: "Measure the effect of promotions on gross margin and profitability, ensuring that discounts don't erode overall financial health."
  },
  {
    icon: <PieChart size={22} />,
    title: "Promotion Type & Channel Attribution",
    desc: "Compare performance of different promotion formats and distribution channels to identify the most effective combinations."
  },
  {
    icon: <Clock size={22} />,
    title: "Timing & Duration Analysis",
    desc: "Discover optimal promotion timing and duration for each product category and customer segment."
  },
  {
    icon: <Users size={22} />,
    title: "Customer Segment Performance",
    desc: "Analyze promotion response by customer segment (new vs. existing, high‑value vs. low‑value) to tailor future campaigns."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "Higher Promotion ROI",
    desc: "Increase the return from promotional spend by focusing on campaigns that drive incremental revenue and profitability."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Reduced Wasteful Discounting",
    desc: "Eliminate promotions that cannibalize regular‑price sales or attract only discount‑seekers, preserving margin."
  },
  {
    icon: <Target size={18} />,
    title: "Smarter Promotion Strategy",
    desc: "Use data to design promotions that align with your business goals — whether it's revenue growth, customer acquisition, or brand loyalty."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Campaign Optimization",
    desc: "Continuously test and refine promotions with real‑time feedback, adapting quickly to market response."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Improved Customer Lifetime Value",
    desc: "Attract and retain profitable customers through well‑targeted promotions that encourage repeat business."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Outperform competitors by making data‑driven promotion decisions that maximize impact and minimize cost."
  },
];

const RetailPromotionAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Promotion & Discount Performance Analytics | Scape Data Solutions"
      description="AI-powered analytics that measure promotion ROI and identify cannibalization to protect margins."
      path="/services/promotion-discount-performance"
      schema={buildServiceSchema({
        name: "Promotion & Discount Performance Analytics",
        description: "AI-powered analytics that measure promotion ROI and identify cannibalization to protect margins.",
        path: "/services/promotion-discount-performance",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Percent size={14} /> <span>Promotion & Discount Performance</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Maximize the Impact of <span className={styles.highlight}>Every Promotion</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that measures promotion ROI, identifies cannibalization, and optimizes
              campaign strategy. Drive incremental revenue while protecting margins.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Promotions <ArrowRight size={16} />
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
                <span className={styles.statLabel}>ROI Improvement</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15%</span>
                <span className={styles.statLabel}>Incremental Revenue Lift</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10%</span>
                <span className={styles.statLabel}>Margin Protection</span>
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
            <h2>Promotions are a <span className={styles.highlight}>Double‑Edged Sword</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of promotions fail to generate incremental profit — they simply shift sales or attract discount‑seekers, eroding margins.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of retailers lack the analytics to measure promotion cannibalization, leading to poorly designed campaigns.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$200B</span>
                <p>Estimated annual waste in retail promotions that fail to deliver net positive returns.</p>
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
                Turn Promotions into a <span className={styles.highlight}>Profit Driver</span>
              </h2>
              <p>
                Promotions are a powerful tool for driving sales, clearing inventory, and acquiring
                customers. But without rigorous analysis, they can also erode margins, cannibalize
                regular‑price sales, and attract unprofitable customers. Many retailers operate
                promotions on intuition rather than data, wasting significant marketing spend.
              </p>
              <p>
                Our Promotion & Discount Performance Analysis service provides a complete view of
                promotion effectiveness. We measure true incremental revenue — separating promotion‑driven
                lift from baseline sales. We quantify cannibalization, ensuring you understand how much
                of the promotion's revenue is incremental versus shifted from other products or channels.
              </p>
              <p>
                We also assess profitability, considering not just revenue but also margin impact,
                customer acquisition costs, and long‑term customer value. We help you identify which
                promotions deliver the best returns and which should be discontinued.
              </p>
              <p>
                We also provide guidance on promotion timing, duration, type, and channel to maximize
                effectiveness. Ultimately, we help you build a data‑driven promotion strategy that
                balances revenue growth with margin protection.
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
                <Percent size={48} />
                <span>Promotion Performance</span>
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
                <h4>Promotion Performance Dashboard</h4>
                <p>Real‑time view of promotion KPIs — revenue lift, incremental sales, ROI, and margin impact — for all active and historical campaigns.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Cannibalization & Incrementality Report</h4>
                <p>Detailed assessment of how much promotion revenue is incremental and how much is cannibalized from other products or channels.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Promotion ROI & Profitability Scorecard</h4>
                <p>Ranked list of promotions by financial return, enabling data‑driven decisions on which campaigns to repeat, modify, or discontinue.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Promotion Type & Channel Effectiveness Report</h4>
                <p>Comparative analysis of promotion formats and channels, with recommendations for the most effective combinations.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Customer Segment Response Analysis</h4>
                <p>Understanding of how different customer segments respond to promotions, enabling personalized campaign design.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Post‑Promotion Customer Retention Report</h4>
                <p>Tracking of customer behavior after promotions — repeat purchase rate, AOV changes, and loyalty impact.</p>
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
            <h2>Ready to Make Every Promotion Count?</h2>
            <p>
              Let's analyze your promotion data to unlock significant ROI improvements, reduce
              wasteful discounting, and build a promotion strategy that drives sustainable growth.
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

export default RetailPromotionAnalyticsPage;
