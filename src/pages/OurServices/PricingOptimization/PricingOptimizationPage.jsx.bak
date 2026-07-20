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
  GitBranch,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./PricingOptimizationPage.module.css";
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
    title: "Data Aggregation & Price Benchmarking",
    desc: "We connect to your internal sales, cost, and inventory data, as well as external sources — competitor pricing, market indices, and economic indicators. We establish a comprehensive baseline of your current pricing landscape and competitive positioning."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Price Elasticity & Demand Sensitivity Analysis",
    desc: "We use statistical modeling to estimate how price changes affect demand for each product. We identify products with high sensitivity (elastic) versus low sensitivity (inelastic), enabling targeted price adjustments that maximize revenue."
  },
  {
    icon: <Target size={22} />,
    title: "Dynamic Pricing Model Development",
    desc: "We build machine learning models that recommend optimal prices in real‑time based on demand, inventory, competitor actions, and market conditions. We incorporate business rules and constraints, ensuring recommendations align with your brand strategy."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Scenario Simulation & What‑If Analysis",
    desc: "We enable you to simulate the impact of different pricing strategies — across products, categories, and regions — before implementing them. You can test the effect of discounts, markdowns, and bundle pricing on revenue and profit."
  },
  {
    icon: <Layers size={22} />,
    title: "Promotion & Discount Optimization",
    desc: "We analyze the profitability of past promotions and recommend optimal discount levels and timing. We identify cannibalization risks and ensure promotions drive incremental revenue rather than just shifting sales."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Monitoring, Reporting & Continuous Refinement",
    desc: "We provide real‑time dashboards that track pricing performance, competitor movements, and margin changes. We continuously refine models based on new data to ensure your pricing remains competitive and profitable."
  },
];

const features = [
  {
    icon: <DollarSign size={22} />,
    title: "Real‑time Price Recommendations",
    desc: "Receive optimal price suggestions for each SKU, updated dynamically based on demand, stock levels, and competitor pricing."
  },
  {
    icon: <PieChart size={22} />,
    title: "Elasticity & Profitability Mapping",
    desc: "Visualize product and category elasticity, with a clear view of where price changes yield the greatest impact on profit."
  },
  {
    icon: <Target size={22} />,
    title: "Competitor Price Tracking & Response",
    desc: "Monitor competitor pricing and adjust your strategy proactively. Stay competitive without sacrificing margins."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Promotion ROI & Cannibalization Analysis",
    desc: "Measure the true incremental revenue of promotions and identify cannibalization effects to design more effective campaigns."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Price Change Impact Forecasting",
    desc: "Predict the financial impact of price changes — on revenue, margin, and market share — enabling confident decision‑making."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Operational Dashboards",
    desc: "Provide tailored views for leadership and category managers, with drill‑down capabilities for detailed analysis."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "Revenue & Margin Growth",
    desc: "Optimize pricing to increase total revenue and gross margin, balancing volume and profitability."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Competitive Advantage",
    desc: "Stay ahead of competitors by making data‑driven pricing adjustments that capture market share."
  },
  {
    icon: <Zap size={18} />,
    title: "Promotional Efficiency",
    desc: "Maximize the return on promotional spend by targeting discounts where they have the greatest impact."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Inventory Optimization",
    desc: "Align pricing with inventory goals — clear excess stock without excessive discounting."
  },
  {
    icon: <Target size={18} />,
    title: "Customer Segmentation Pricing",
    desc: "Implement personalized pricing strategies based on customer segments, enhancing loyalty and lifetime value."
  },
  {
    icon: <Award size={18} />,
    title: "Agile Decision‑Making",
    desc: "React quickly to market changes with real‑time pricing insights and automated recommendations."
  },
];

const PricingOptimizationPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Pricing Optimization | Scape Data Solutions"
      description="AI-powered pricing optimization that analyzes demand elasticity and market conditions to recommend optimal prices."
      path="/services/pricing-optimization"
      schema={buildServiceSchema({
        name: "Pricing Optimization",
        description: "AI-powered pricing optimization that analyzes demand elasticity and market conditions to recommend optimal prices.",
        path: "/services/pricing-optimization",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <DollarSign size={14} /> <span>Pricing Optimization</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Maximize Profit with <span className={styles.highlight}>Intelligent Pricing</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered pricing optimization that analyzes demand elasticity, competitor activity, and
              market conditions to recommend optimal prices. Unlock revenue growth and margin expansion
              without guesswork.
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
                <span className={styles.statLabel}>Competitor Coverage</span>
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
            <h2>Pricing is a High‑Stakes <span className={styles.highlight}>Balancing Act</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of retailers rely on gut feel or manual spreadsheets for pricing decisions, leading to millions in lost profit.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Potential profit increase achievable with data‑driven pricing, according to McKinsey.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>50%</span>
                <p>Of retailers lack competitor price tracking, putting them at a significant disadvantage.</p>
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
                Turn Pricing into a <span className={styles.highlight}>Profit Engine</span>
              </h2>
              <p>
                Pricing is the most powerful lever for profitability in retail — yet it's often the
                most under‑optimized. Traditional methods like cost‑plus or competitor‑matching are
                blunt instruments that ignore customer behavior, market dynamics, and real‑time
                conditions.
              </p>
              <p>
                Our Pricing Optimization service uses AI and machine learning to analyze price
                elasticity, demand sensitivity, competitor pricing, and inventory levels to recommend
                optimal prices. We provide dynamic pricing models that adapt to changing conditions,
                ensuring you capture maximum revenue and margin.
              </p>
              <p>
                We also help you design smarter promotions — identifying discounts that drive incremental
                revenue without cannibalizing your core business. Our scenario planning tools allow you
                to test strategies before implementation, reducing risk and increasing confidence.
              </p>
              <p>
                Unlock hidden profit potential with data‑driven pricing that responds to the market
                in real‑time.
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
                <h4>Dynamic Price Recommendations</h4>
                <p>Real‑time recommended prices for each SKU, optimized for revenue or margin targets, updated as conditions change.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Elasticity & Profitability Report</h4>
                <p>Detailed analysis of price sensitivity and profit potential for each product, category, and customer segment.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Competitor Price Intelligence Dashboard</h4>
                <p>Track competitor pricing and receive alerts when significant changes occur, enabling proactive response.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Promotion Optimization Plan</h4>
                <p>Recommendations for optimal discount levels, timing, and product selection to maximize incremental revenue.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Scenario Simulation & What‑If Analysis</h4>
                <p>Interactive tool to test the financial impact of various pricing strategies before implementation.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Operational Dashboards</h4>
                <p>Tailored views for leadership and category managers, with drill‑down capabilities for detailed analysis.</p>
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
            <h2>Ready to Unlock Your Pricing Potential?</h2>
            <p>
              Let's build a pricing optimization system that maximizes your revenue and margin while
              staying competitive. You'll make smarter pricing decisions with confidence and agility.
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

export default PricingOptimizationPage;
