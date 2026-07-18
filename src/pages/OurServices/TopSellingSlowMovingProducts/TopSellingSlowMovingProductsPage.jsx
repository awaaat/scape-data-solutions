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
  Package,
  TrendingDown,
  ArrowUp,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./TopSellingSlowMovingProductsPage.module.css";
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
    title: "Product Data Consolidation & Enrichment",
    desc: "We aggregate sales, inventory, and margin data for every SKU across all channels and locations. We enrich product data with attributes like category, brand, price point, seasonality, and supplier information to enable multi‑dimensional analysis of product performance."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Performance Ranking & Classification",
    desc: "We rank products by revenue, units sold, gross margin, and turnover. We classify products into categories — top‑sellers, steady performers, slow‑movers, and dead stock — based on performance thresholds and business rules. This classification drives strategic decisions."
  },
  {
    icon: <Package size={22} />,
    title: "ABC & Pareto Analysis",
    desc: "We apply ABC classification (A: high‑value, B: medium, C: low) and Pareto analysis (80/20 rule) to identify the products that contribute most to revenue and profit. This enables focused management on the most impactful SKUs."
  },
  {
    icon: <TrendingDown size={22} />,
    title: "Slow‑Moving & Excess Inventory Identification",
    desc: "We identify products with low turnover, excessive stock, or approaching expiration/obsolescence. We quantify the carrying cost and write‑off risk, enabling proactive markdowns, promotions, or discontinuation decisions."
  },
  {
    icon: <Target size={22} />,
    title: "Product Lifecycle & Seasonality Analysis",
    desc: "We analyze product performance over time — launch phase, growth, maturity, and decline. We identify seasonal patterns and recommend timing for replenishment, promotion, and phase‑out to maximize revenue and minimize waste."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Action Planning",
    desc: "We provide real‑time dashboards that track product performance and highlight changes. We generate alerts for emerging top‑sellers or underperforming products, and recommend specific actions — reorder, promote, discount, or discontinue."
  },
];

const features = [
  {
    icon: <Package size={22} />,
    title: "Top‑Sellers & Best‑Performing Products Dashboard",
    desc: "Real‑time view of your top revenue‑generating and highest‑margin products, with drill‑down to categories and locations."
  },
  {
    icon: <TrendingDown size={22} />,
    title: "Slow‑Moving & Obsolete Product Tracker",
    desc: "Identify products with declining sales, excess inventory, or approaching expiry. Quantify carry cost and write‑off risk."
  },
  {
    icon: <PieChart size={22} />,
    title: "ABC & Pareto Classification",
    desc: "Classify products by revenue contribution and profit impact, enabling focused management on high‑impact SKUs."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Seasonality & Trend Detection",
    desc: "Automatically detect seasonal patterns and demand trends, enabling proactive planning and promotional timing."
  },
  {
    icon: <Target size={22} />,
    title: "Product Lifecycle & Phase‑Out Recommendations",
    desc: "Identify products in decline and recommend optimal timing for discontinuation, markdown, or clearance."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Category Manager Dashboards",
    desc: "Tailored views for leadership and category managers, with drill‑down to individual SKUs and suppliers."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "Increased Revenue & Profit",
    desc: "Focus resources on top‑selling, high‑margin products that drive the most value, while eliminating underperformers."
  },
  {
    icon: <Zap size={18} />,
    title: "Reduced Inventory Waste",
    desc: "Proactively manage slow‑moving and obsolete stock, minimizing carrying costs and write‑offs."
  },
  {
    icon: <Target size={18} />,
    title: "Optimized Product Mix",
    desc: "Balance your assortment to maximize revenue, margin, and customer satisfaction, based on performance data."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Better Supplier Negotiation",
    desc: "Use product performance data to negotiate better terms with suppliers and optimize replenishment."
  },
  {
    icon: <Clock size={18} />,
    title: "Faster Product Innovation",
    desc: "Identify gaps in your assortment and emerging trends, enabling faster introduction of successful new products."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Build a product portfolio that consistently outperforms competitors, with data‑driven decisions at every stage."
  },
];

const TopSellingSlowMovingProductsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Top-Selling & Slow-Moving Products Analysis | Scape Data Solutions"
      description="AI-powered analysis that identifies top-selling and slow-moving products for data-driven assortment decisions."
      path="/services/top-selling-slow-moving-products"
      schema={buildServiceSchema({
        name: "Top-Selling & Slow-Moving Products Analysis",
        description: "AI-powered analysis that identifies top-selling and slow-moving products for data-driven assortment decisions.",
        path: "/services/top-selling-slow-moving-products",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Package size={14} /> <span>Top-Selling & Slow-Moving Products</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Maximize the Value of <span className={styles.highlight}>Every Product</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analysis that identifies top‑selling and slow‑moving products, enabling
              data‑driven assortment decisions, inventory optimization, and revenue growth.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Analyze Your Product Mix <ArrowRight size={16} />
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
                <span className={styles.statLabel}>Revenue Lift</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>25%</span>
                <span className={styles.statLabel}>Slow‑Mover Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15%</span>
                <span className={styles.statLabel}>Margin Improvement</span>
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
            <h2>Product Portfolios are <span className={styles.highlight}>Unwieldy</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Of SKUs account for 80% of revenue, while the remaining 70% of products contribute only 20% — wasting inventory and capital.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>50%</span>
                <p>Of slow‑moving inventory goes unmanaged, accumulating costs and eventually being written off.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$100B+</span>
                <p>Estimated annual loss in retail due to poor product lifecycle management and slow‑moving inventory.</p>
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
                Transform Your <span className={styles.highlight}>Product Portfolio</span>
              </h2>
              <p>
                Every product in your assortment has a story — some are consistent revenue generators,
                others are high‑margin niche offerings, and many are slow‑moving items that tie up
                capital and space. Without visibility into product performance, you risk overinvesting
                in underperformers and missing opportunities to promote winners.
              </p>
              <p>
                Our Top‑Selling & Slow‑Moving Products Analysis service provides a comprehensive view
                of product performance across your entire portfolio. We rank products by revenue,
                margin, and turnover, and classify them into categories: top‑sellers, steady performers,
                slow‑movers, and obsolete inventory.
              </p>
              <p>
                We use ABC and Pareto analysis to identify the products that truly drive your business,
                enabling focused management and investment. We also detect seasonal trends and product
                lifecycle stages, guiding replenishment, promotion, and phase‑out decisions.
              </p>
              <p>
                With our insights, you can optimize your product mix, reduce waste, and maximize
                profitability from every SKU — building a lean, high‑performance product portfolio.
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
                <Package size={48} />
                <span>Product Performance Analysis</span>
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
                <h4>Product Performance Dashboard</h4>
                <p>Real‑time view of product rankings by revenue, margin, and turnover, with classification into top‑sellers, steady, slow‑moving, and obsolete.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>ABC & Pareto Classification Report</h4>
                <p>Detailed categorization of products by revenue and profit contribution, enabling focused management on high‑impact SKUs.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Slow‑Moving & Excess Inventory Plan</h4>
                <p>Actionable recommendations for managing slow‑moving inventory — markdowns, promotions, bundling, or discontinuation — with quantified cost and risk.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Seasonality & Trend Forecast</h4>
                <p>Identification of seasonal patterns and emerging trends, with recommendations for timing of replenishment and promotions.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Product Lifecycle & Phase‑Out Recommendations</h4>
                <p>Guidance on optimal timing for product discontinuation, clearance, or replacement, minimizing write‑off loss.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Category Manager Dashboards</h4>
                <p>Tailored views for leadership and category managers, with drill‑down to supplier, category, and individual SKU levels.</p>
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
            <h2>Ready to Optimize Your Product Portfolio?</h2>
            <p>
              Let's analyze your product data to identify top‑sellers, manage slow‑moving inventory,
              and build a lean, high‑performance product mix. You'll maximize revenue, reduce waste,
              and improve profitability across every SKU.
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

export default TopSellingSlowMovingProductsPage;
