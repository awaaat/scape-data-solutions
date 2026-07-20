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
  ThumbsUp,
  ShoppingBag,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./ProductRecommendationsPage.module.css";
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
    title: "Data Collection & Integration",
    desc: "We aggregate customer behavior data — purchase history, browsing patterns, cart additions, ratings, and reviews — from your e‑commerce platform, POS, and mobile apps. We also incorporate product metadata (category, price, brand) for comprehensive analysis."
  },
  {
    icon: <Layers size={22} />,
    title: "Collaborative & Content‑Based Filtering",
    desc: "We employ advanced machine learning techniques: collaborative filtering (recommending based on similar users' behavior) and content‑based filtering (matching product attributes to user preferences). This hybrid approach ensures personalized and serendipitous recommendations."
  },
  {
    icon: <Target size={22} />,
    title: "Contextual & Real‑Time Recommendations",
    desc: "We factor in real‑time context — browsing session, device, location, time of day, and current promotions — to surface the most relevant products. Recommendations adapt instantly as user behavior evolves, maximizing conversion potential."
  },
  {
    icon: <ShoppingBag size={22} />,
    title: "Personalized Cross‑Sell & Up‑Sell",
    desc: "We identify product associations (frequently bought together) and customer propensity to upgrade. We recommend complementary items and premium alternatives, boosting average order value and customer lifetime value."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "A/B Testing & Optimization",
    desc: "We continuously test different recommendation strategies — algorithm variants, placement, and content — to identify what drives the highest engagement and revenue. We optimize based on real‑world performance data."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Performance Monitoring & Continuous Learning",
    desc: "We track recommendation‑driven metrics — click‑through rates, conversion rates, and revenue per recommendation — and retrain models as new data arrives. We ensure recommendations stay relevant as customer preferences evolve."
  },
];

const features = [
  {
    icon: <ThumbsUp size={22} />,
    title: "Personalized Product Recommendations",
    desc: "Serve individualized product suggestions on your website, email, and mobile app, tailored to each user's unique tastes."
  },
  {
    icon: <ShoppingBag size={22} />,
    title: "Cross‑Sell & Bundle Recommendations",
    desc: "Identify products frequently purchased together and recommend complementary items to increase basket size."
  },
  {
    icon: <Target size={22} />,
    title: "Up‑Sell & Premium Alternatives",
    desc: "Suggest higher‑value products based on customer preferences and purchase history to boost average order value."
  },
  {
    icon: <Eye size={22} />,
    title: "Real‑Time Personalization",
    desc: "Adapt recommendations instantly based on user actions — viewing, searching, adding to cart — for maximum relevance."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "A/B Testing & Experimentation",
    desc: "Run controlled tests to validate recommendation effectiveness and continuously refine strategy."
  },
  {
    icon: <PieChart size={22} />,
    title: "Performance & ROI Dashboards",
    desc: "Track recommendation performance metrics and revenue attribution, demonstrating the value of your personalization efforts."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "Increased Sales & Revenue",
    desc: "Drive incremental revenue through relevant recommendations that encourage additional purchases."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Higher Average Order Value",
    desc: "Increase basket size by suggesting complementary items and premium upgrades that customers are likely to buy."
  },
  {
    icon: <Users size={18} />,
    title: "Improved Customer Experience",
    desc: "Deliver relevant, helpful recommendations that reduce search effort and make shopping more enjoyable."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Conversion",
    desc: "Shorten the path to purchase by presenting the most relevant products at each stage of the journey."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Increased Customer Loyalty",
    desc: "Personalized experiences build stronger connections and encourage repeat visits and purchases."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Differentiation",
    desc: "Offer a superior shopping experience that sets you apart from competitors and attracts discerning customers."
  },
];

const ProductRecommendationsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Product Recommendations | Scape Data Solutions"
      description="AI-powered product recommendations that increase cross-sell and up-sell and boost average order value."
      path="/services/product-recommendations"
      schema={buildServiceSchema({
        name: "Product Recommendations",
        description: "AI-powered product recommendations that increase cross-sell and up-sell and boost average order value.",
        path: "/services/product-recommendations",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <ThumbsUp size={14} /> <span>Product Recommendations</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Deliver <span className={styles.highlight}>Personalized</span> Shopping Experiences
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered product recommendations that increase cross‑sell and up‑sell, boost average
              order value, and enhance customer satisfaction — all while maximizing revenue.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Start Personalizing <ArrowRight size={16} />
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
                <span className={styles.statLabel}>Revenue Lift</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20%</span>
                <span className={styles.statLabel}>AOV Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
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
            <h2>One‑Size‑Fits‑All Recommendations <span className={styles.highlight}>Don't Work</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>80%</span>
                <p>Of shoppers are more likely to make a purchase from a brand that offers personalized experiences — yet most retailers don't deliver.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of consumers say they would abandon a site that shows irrelevant product recommendations.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$300B</span>
                <p>Estimated annual revenue opportunity from personalization in retail, according to BCG.</p>
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
                <span className={styles.highlight}>Intelligent</span> Recommendations, <span className={styles.highlight}>Real</span> Results
              </h2>
              <p>
                In a crowded retail landscape, personalized product recommendations are no longer a
                luxury — they're an expectation. Shoppers want brands to understand their needs and
                present products that are relevant and timely.
              </p>
              <p>
                Our Product Recommendations service leverages machine learning to analyze customer
                behavior — purchase history, browsing patterns, cart activity, and product affinities —
                to suggest items each shopper is most likely to buy. We combine collaborative filtering
                (what similar customers like) with content‑based filtering (matching product attributes)
                for a hybrid approach that delivers superior results.
              </p>
              <p>
                We go beyond generic recommendations by incorporating real‑time context — session
                behavior, device, location, and current promotions — to ensure suggestions are always
                relevant. Our engine also recommends complementary products (cross‑sell) and premium
                alternatives (up‑sell), increasing average order value.
              </p>
              <p>
                We continuously test and refine our algorithms with A/B experiments, ensuring
                recommendations drive measurable lift in revenue, conversion, and customer satisfaction.
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
                <ThumbsUp size={48} />
                <span>Product Recommendations</span>
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
                <h4>Custom Recommendation Engine</h4>
                <p>AI-powered engine integrated with your website, app, or email system, serving real‑time personalized product suggestions.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Cross‑Sell & Up‑Sell Strategy</h4>
                <p>Data‑driven recommendations for complementary products and premium alternatives that maximize basket value.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Performance & ROI Dashboard</h4>
                <p>Track recommendation‑driven metrics — CTR, conversion rate, revenue per recommendation — to quantify impact.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>A/B Testing & Experimentation Framework</h4>
                <p>Run controlled tests to validate recommendation strategies and continuously optimize performance.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Segmentation & Personalization Rules</h4>
                <p>Define recommendation logic based on customer segments, behavioral triggers, and business rules (e.g., inventory constraints).</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Continuous Model Retraining</h4>
                <p>Automated retraining of recommendation models as new customer data becomes available, ensuring ongoing relevance.</p>
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
            <h2>Ready to Personalize Your Shopping Experience?</h2>
            <p>
              Let's implement a product recommendation engine that delivers relevant, personalized
              suggestions to every shopper — driving revenue, loyalty, and customer satisfaction.
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

export default ProductRecommendationsPage;
