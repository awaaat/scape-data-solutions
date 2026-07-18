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
  Store,
  MapPin,
  GitBranch,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./StorePerformanceAnalyticsPage.module.css";
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
    title: "Multi‑Store Data Consolidation",
    desc: "We aggregate sales, inventory, staffing, customer, and operational data from every store location. We normalize metrics across stores to enable fair, apples‑to‑apples comparison, accounting for differences in store size, location demographics, and market conditions."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "KPI Definition & Benchmarking Framework",
    desc: "We work with you to define the key performance indicators that matter most — sales per square foot, average transaction value, conversion rate, inventory turnover, labor productivity, and more. We establish benchmarks that enable meaningful comparison across stores."
  },
  {
    icon: <Store size={22} />,
    title: "Store Segmentation & Peer Grouping",
    desc: "We group stores into peer cohorts based on size, format, location type (urban, suburban, rural), and customer demographics. This ensures that each store is compared against its true peers, accounting for context and mitigating unfair comparisons."
  },
  {
    icon: <MapPin size={22} />,
    title: "Geospatial Performance Mapping",
    desc: "We visualize store performance on interactive maps, revealing geographic patterns and regional trends. We identify clusters of high‑performing stores and regions where performance lags, enabling targeted resource allocation and strategy deployment."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Root Cause Analysis & Opportunity Identification",
    desc: "We analyze the drivers of store performance — traffic, conversion, pricing, inventory, staffing, marketing — to identify the underlying factors that separate top performers from underperformers. We uncover best practices and actionable improvement opportunities."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Performance Monitoring & Reporting",
    desc: "We provide real‑time dashboards that track store performance against benchmarks and highlight changes. We automate reporting to keep store managers and regional leaders informed, enabling rapid intervention and celebration of successes."
  },
];

const features = [
  {
    icon: <Store size={22} />,
    title: "Store Scorecard & Ranking System",
    desc: "Rank stores by overall performance and individual KPIs. Identify top performers and those needing improvement, with clear visibility into strengths and gaps."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Peer Group Benchmarking",
    desc: "Compare each store against its peer group — similar size, format, and market context — to identify relative strengths and opportunities."
  },
  {
    icon: <MapPin size={22} />,
    title: "Geospatial Performance Heatmaps",
    desc: "Visualize performance across geographic regions, revealing patterns and correlations with external factors like demographics and competition."
  },
  {
    icon: <Target size={22} />,
    title: "Root Cause & Variance Analysis",
    desc: "Identify the specific drivers of performance variance — traffic, conversion, basket size, pricing — and pinpoint the root causes of underperformance."
  },
  {
    icon: <Users size={22} />,
    title: "Operational & Staffing Benchmarking",
    desc: "Compare staff productivity, labor costs, and operational efficiency metrics across stores to identify best practices and cost-saving opportunities."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Regional Dashboards",
    desc: "Provide tailored views for regional managers and corporate leadership, with drill‑down to individual store and peer group levels."
  },
];

const benefits = [
  {
    icon: <TrendingUp size={18} />,
    title: "Raise Performance Standards",
    desc: "Identify and replicate best practices from top‑performing stores across the chain, raising the performance bar for all locations."
  },
  {
    icon: <Target size={18} />,
    title: "Focused Improvement Initiatives",
    desc: "Prioritize resources and improvement efforts on stores and regions that need them most, maximizing the impact of your investment."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Revenue & Margin Growth",
    desc: "Close the performance gap between top and bottom stores, unlocking significant revenue and profit opportunities across your portfolio."
  },
  {
    icon: <Zap size={18} />,
    title: "Operational Efficiency",
    desc: "Identify inefficiencies and best practices in staffing, inventory, and processes, enabling smarter resource allocation and cost reduction."
  },
  {
    icon: <Users size={18} />,
    title: "Empowered Store Managers",
    desc: "Provide store managers with clear visibility into their performance relative to peers, driving accountability and motivation."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Achieve superior store performance through continuous learning from your own best stores, outperforming competitors in every market."
  },
];

const StorePerformanceAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Store Performance Comparison | Scape Data Solutions"
      description="AI-powered store comparison that benchmarks performance and uncovers best practices across your chain."
      path="/services/store-performance-comparison"
      schema={buildServiceSchema({
        name: "Store Performance Comparison",
        description: "AI-powered store comparison that benchmarks performance and uncovers best practices across your chain.",
        path: "/services/store-performance-comparison",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Store size={14} /> <span>Store Performance Comparison</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Unlock the <span className={styles.highlight}>Secrets</span> of Your Best Stores
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered store comparison that benchmarks performance, uncovers best practices, and
              drives improvement across your entire chain. Elevate every store to the level of your best.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Compare Your Stores <ArrowRight size={16} />
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
                <span className={styles.statValue}>5-10%</span>
                <span className={styles.statLabel}>Same‑Store Sales Lift</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20%</span>
                <span className={styles.statLabel}>Performance Gap Closure</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>95%</span>
                <span className={styles.statLabel}>Store Coverage</span>
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
            <h2>Store Performance Variance is <span className={styles.highlight}>Costly</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Performance gap between top‑ and bottom‑quartile stores in most retail chains — representing significant revenue leakage.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of retailers lack a systematic approach to store benchmarking, relying on ad‑hoc comparisons that fail to control for context.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$100M+</span>
                <p>Potential revenue recovery available to multi‑store retailers through closing the performance gap between stores.</p>
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
                Learn from Your <span className={styles.highlight}>Best</span>, Lift Your <span className={styles.highlight}>Rest</span>
              </h2>
              <p>
                Across any retail chain, there is a significant performance gap between top‑performing
                stores and those that lag behind. This gap isn't random — it reflects differences in
                operational practices, staff performance, customer engagement, and local strategies.
                Yet many retailers lack the visibility to understand what drives these differences.
              </p>
              <p>
                Our Store Performance Comparison service provides a comprehensive, data‑driven view of
                store performance across your entire chain. We benchmark stores on key metrics —
                revenue, productivity, customer satisfaction, inventory efficiency, and more —
                controlling for differences in store size, format, and market context.
              </p>
              <p>
                We segment stores into peer groups for fair comparison and identify the specific
                drivers of performance variance. We uncover best practices from your top stores and
                provide actionable recommendations for underperformers.
              </p>
              <p>
                With our insights, you can raise the performance bar across your entire chain,
                unlock significant revenue growth, and build a culture of continuous improvement.
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
                <Store size={48} />
                <span>Store Performance Comparison</span>
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
                <h4>Store Performance Ranking & Scorecard</h4>
                <p>Ranked list of all stores by overall performance and individual KPIs, with color‑coded indicators of relative strength and weakness.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Peer Group Benchmarking Report</h4>
                <p>Comprehensive comparison of each store against its peer group, controlling for size, format, and market context.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Geospatial Performance Heatmap</h4>
                <p>Interactive map showing store performance across regions, revealing geographic patterns and clusters of excellence or underperformance.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Root Cause & Variance Analysis</h4>
                <p>Detailed analysis of the drivers of performance variance, identifying the specific factors that separate top performers from underperformers.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Best Practice Playbook</h4>
                <p>Actionable recommendations and best practices derived from top‑performing stores, ready for deployment across the chain.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Continuous Monitoring Dashboard</h4>
                <p>Real‑time tracking of store performance against benchmarks, with alerts for significant changes or emerging opportunities.</p>
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
            <h2>Ready to Elevate Every Store to Your Best?</h2>
            <p>
              Let's benchmark your stores, uncover best practices, and build a data‑driven strategy
              to close the performance gap across your entire chain. You'll unlock significant
              revenue growth and operational excellence.
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

export default StorePerformanceAnalyticsPage;
