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
  Percent,
  Gauge,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./PricingAnalyticsPage.module.css";
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
    desc: "We consolidate data from your POS, e‑commerce, CRM, competitor pricing sources, and cost accounting systems. We clean and structure historical transaction data, competitor price data, and cost information to build a comprehensive pricing analytics foundation."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Price Elasticity & Demand Sensitivity Analysis",
    desc: "We use advanced statistical modeling — regression, machine learning — to quantify how price changes affect demand for each product and category. We identify products with elastic demand (sensitive to price changes) and inelastic demand, enabling targeted price adjustments that maximize revenue."
  },
  {
    icon: <Percent size={22} />,
    title: "Competitor Price Monitoring & Benchmarking",
    desc: "We continuously monitor competitor pricing across channels and regions. We benchmark your prices against competitors, identify gaps, and recommend strategic adjustments to capture market share without sacrificing margins."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Dynamic Pricing Model Development",
    desc: "We build AI‑powered dynamic pricing models that recommend optimal prices in real‑time based on demand, inventory levels, competitor actions, and market conditions. We incorporate business rules and constraints to align recommendations with your brand strategy."
  },
  {
    icon: <PieChart size={22} />,
    title: "Promotion & Discount Optimization",
    desc: "We analyze the effectiveness of past promotions and discounts, quantifying incremental revenue lift and cannibalization. We recommend optimal discount levels, timing, and product selection to maximize ROI and avoid margin erosion."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Improvement",
    desc: "We provide real‑time dashboards that track pricing performance — revenue, margin, market share — and alert you to significant changes. We continuously refine models based on new data to ensure your pricing remains competitive and profitable."
  },
];

const features = [
  {
    icon: <Gauge size={22} />,
    title: "Real‑Time Price Recommendations",
    desc: "AI-powered price recommendations for each SKU, updated dynamically based on demand, inventory, and competitor actions."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Elasticity & Profitability Analysis",
    desc: "Understand how price changes affect demand and profitability for each product, enabling confident decisions."
  },
  {
    icon: <Target size={22} />,
    title: "Competitor Price Intelligence",
    desc: "Automated tracking of competitor prices across channels, with alerts for significant changes and strategic gaps."
  },
  {
    icon: <Percent size={22} />,
    title: "Promotion & Discount Optimization",
    desc: "Maximize the ROI of promotions by identifying the optimal discount levels, timing, and product selection."
  },
  {
    icon: <PieChart size={22} />,
    title: "Price Segmentation & Personalization",
    desc: "Implement personalized pricing strategies for different customer segments, maximizing revenue and loyalty."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Category Dashboards",
    desc: "Tailored dashboards for leadership and category managers, with drill‑down to product and competitor levels."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "5‑15% Revenue Increase",
    desc: "Capture additional revenue through optimized pricing and dynamic adjustments based on real‑time conditions."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "10‑20% Margin Expansion",
    desc: "Improve profitability by identifying opportunities to increase prices on inelastic products and reducing wasteful discounting."
  },
  {
    icon: <Zap size={18} />,
    title: "Competitive Responsiveness",
    desc: "Respond to competitor price changes faster, maintaining your competitive position without sacrificing margins."
  },
  {
    icon: <Target size={18} />,
    title: "Smarter Promotions",
    desc: "Design promotions that drive incremental revenue, not just shift sales, maximizing ROI and preserving brand value."
  },
  {
    icon: <Users size={18} />,
    title: "Improved Customer Segmentation",
    desc: "Tailor pricing strategies to different customer segments, increasing conversion and loyalty."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Outperform competitors with a data‑driven pricing strategy that balances revenue, margin, and market share."
  },
];

const PricingAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Pricing Analytics & Optimization | Scape Data Solutions"
      description="AI-powered pricing analytics that analyze price elasticity and optimize pricing strategies in real time."
      path="/services/pricing-analytics-optimization"
      schema={buildServiceSchema({
        name: "Pricing Analytics & Optimization",
        description: "AI-powered pricing analytics that analyze price elasticity and optimize pricing strategies in real time.",
        path: "/services/pricing-analytics-optimization",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <DollarSign size={14} /> <span>Pricing Analytics & Optimization</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Price Smarter. <span className={styles.highlight}>Profit More.</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered pricing analytics that analyzes price elasticity, monitors competitor
              pricing, and optimizes pricing strategies in real‑time. Unlock revenue growth and
              margin expansion with data‑driven pricing.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Pricing <ArrowRight size={16} />
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
                <span className={styles.statValue}>5-15%</span>
                <span className={styles.statLabel}>Revenue Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10-20%</span>
                <span className={styles.statLabel}>Margin Expansion</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>90%</span>
                <span className={styles.statLabel}>Competitor Price Coverage</span>
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
            <h2>Pricing is a <span className={styles.highlight}>High‑Stakes</span> Balancing Act</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of businesses price based on intuition or cost‑plus, missing opportunities to optimize for demand and competition.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of promotions fail to generate incremental profit — simply shifting sales or attracting discount‑seekers, eroding margins.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$200B+</span>
                <p>Estimated annual value left on the table by businesses that fail to implement data‑driven pricing strategies.</p>
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
                Turn Pricing into a <span className={styles.highlight}>Strategic Advantage</span>
              </h2>
              <p>
                Pricing is the most powerful lever for profitability — yet it's often the most
                neglected. Traditional cost‑plus or competitor‑matching approaches are blunt
                instruments that fail to capture the nuances of customer demand, competitor
                behavior, and market dynamics.
              </p>
              <p>
                Our Pricing Analytics & Optimization service uses AI and machine learning to
                analyze price elasticity, demand sensitivity, and competitor pricing. We provide
                real‑time recommendations that optimize revenue and margin, balancing customer
                value with business goals.
              </p>
              <p>
                We help you understand how price changes affect demand for each product and
                category, enabling confident decisions. We monitor competitor pricing and
                recommend strategic adjustments to capture market share without sacrificing
                margins.
              </p>
              <p>
                With our solution, you implement dynamic pricing that adapts to market conditions,
                design promotions that drive incremental revenue, and achieve sustainable
                profitability.
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
                <span>Pricing Optimization</span>
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
            How We Optimize Pricing
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
                <h4>Price Elasticity & Demand Sensitivity Report</h4>
                <p>Detailed analysis of how price changes affect demand for each product, with recommendations for pricing adjustments.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Competitor Price Intelligence Dashboard</h4>
                <p>Real‑time tracking of competitor pricing, with alerts for significant changes and strategic gaps.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Dynamic Price Recommendations</h4>
                <p>AI‑powered price recommendations for each SKU, updated in real‑time based on demand, inventory, and competitor actions.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Promotion & Discount Optimization Plan</h4>
                <p>Recommendations for optimal discount levels, timing, and product selection to maximize ROI and preserve margins.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Price Segmentation & Personalization Strategy</h4>
                <p>Guidance on implementing personalized pricing for different customer segments to increase conversion and loyalty.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Category Dashboards</h4>
                <p>Tailored dashboards for leadership and category managers, with drill‑down to product and competitor levels.</p>
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
            <h2>Ready to Price Smarter?</h2>
            <p>
              Let's build a pricing analytics and optimization system that maximizes revenue,
              expands margins, and gives you a competitive edge. You'll have the confidence to
              make pricing decisions that drive profitable growth.
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

export default PricingAnalyticsPage;
