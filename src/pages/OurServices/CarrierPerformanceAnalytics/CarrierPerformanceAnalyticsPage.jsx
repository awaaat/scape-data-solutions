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
  Truck,
  AlertCircle,
  Award,
  Zap,
  PieChart,
  GitBranch,
  Gauge,
  ClipboardList,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./CarrierPerformanceAnalyticsPage.module.css";
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
    title: "Data Integration & Consolidation",
    desc: "We connect to your TMS, carrier APIs, freight audit systems, and financial systems. We consolidate data on shipping costs, transit times, service levels, and carrier performance across all your freight modes and regions into a unified analytics platform."
  },
  {
    icon: <PieChart size={22} />,
    title: "Freight Spend & Cost Analytics",
    desc: "We analyze freight spend by carrier, lane, mode, and product category. We identify cost drivers — fuel surcharges, accessorial fees, rate variances — and uncover opportunities to reduce total freight costs by 10‑15%."
  },
  {
    icon: <Truck size={22} />,
    title: "Carrier Performance Scorecarding",
    desc: "We develop comprehensive scorecards that rank carriers on key performance indicators — on‑time delivery rate, transit time consistency, damage rate, claims resolution, and cost competitiveness. We identify top performers and those needing improvement."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Lane & Route Optimization",
    desc: "We analyze lane‑specific performance to identify the optimal carrier for each origin‑destination pair. We recommend carrier assignments that balance cost, service, and reliability for each lane and product type."
  },
  {
    icon: <Activity size={22} />,
    title: "Contract & Rate Benchmarking",
    desc: "We benchmark your current freight rates against industry averages and market indices. We identify contracts that are above market and recommend renegotiation strategies to secure more favorable terms."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Improvement",
    desc: "We provide real‑time dashboards that track carrier performance and freight cost metrics. We alert you to significant changes — cost increases, service degradation — and recommend corrective actions."
  },
];

const features = [
  {
    icon: <PieChart size={22} />,
    title: "Freight Spend & Rate Analysis",
    desc: "Analyze total freight spend by carrier, lane, mode, and product category. Identify cost drivers and savings opportunities."
  },
  {
    icon: <Truck size={22} />,
    title: "Carrier Performance Scorecards",
    desc: "Rank carriers by on‑time delivery, transit time, damage rates, and cost. Identify top performers and those needing improvement."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Lane & Mode Optimization",
    desc: "Identify the optimal carrier and mode for each lane, balancing cost, service, and reliability."
  },
  {
    icon: <FileText size={22} />,
    title: "Contract & Rate Benchmarking",
    desc: "Benchmark current rates against market averages and identify opportunities for renegotiation."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Cost Allocation & Chargeback Analysis",
    desc: "Allocate freight costs accurately to business units, customers, or product lines. Enable fair cost recovery."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Procurement Dashboards",
    desc: "Tailored dashboards for supply chain leaders and procurement teams, with drill‑down to carrier and lane levels."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "10‑15% Freight Cost Reduction",
    desc: "Optimize carrier selection, renegotiate rates, and reduce accessorial fees to achieve significant cost savings."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Improved On‑Time Delivery",
    desc: "Select carriers that consistently meet delivery commitments, improving service levels and customer satisfaction."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Carrier Selection",
    desc: "Reduce the time spent selecting carriers and awarding freight with data‑driven recommendations."
  },
  {
    icon: <Users size={18} />,
    title: "Better Supplier Relationships",
    desc: "Strengthen partnerships with top‑performing carriers and hold underperformers accountable."
  },
  {
    icon: <Target size={18} />,
    title: "Data‑Driven Negotiations",
    desc: "Negotiate from a position of strength with comprehensive performance and benchmarking data."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Achieve superior logistics performance at lower cost, outperforming competitors in service and efficiency."
  },
];

const CarrierPerformanceAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Carrier Performance & Freight Cost Analytics | Scape Data Solutions"
      description="AI-powered analytics that evaluate carrier performance, benchmark freight costs, and optimize carrier selection."
      path="/services/carrier-performance-freight-cost-analytics"
      schema={buildServiceSchema({
        name: "Carrier Performance & Freight Cost Analytics",
        description: "AI-powered analytics that evaluate carrier performance, benchmark freight costs, and optimize carrier selection.",
        path: "/services/carrier-performance-freight-cost-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Truck size={14} /> <span>Carrier Performance & Freight Cost Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Optimize Your <span className={styles.highlight}>Carrier Network</span> and <span className={styles.highlight}>Freight Spend</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that evaluates carrier performance, benchmarks freight costs, and
              optimizes carrier selection. Reduce transportation costs, improve service levels, and
              build a more resilient supply chain.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Freight Spend <ArrowRight size={16} />
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
                <span className={styles.statValue}>10-15%</span>
                <span className={styles.statLabel}>Freight Cost Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>95%</span>
                <span className={styles.statLabel}>On‑Time Delivery</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Carrier Selection Time Reduction</span>
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
            <h2>Carrier Management is <span className={styles.highlight}>Complex and Costly</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of organizations lack visibility into carrier performance — making it impossible to identify underperformers and optimize carrier selection.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Of freight costs are driven by accessorial fees — many of which could be reduced through better carrier selection and contract management.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$100B+</span>
                <p>Estimated annual waste in global freight costs due to suboptimal carrier selection and contract management.</p>
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
                <span className={styles.highlight}>Data‑Driven</span> Carrier Management
              </h2>
              <p>
                Managing a network of carriers is one of the most challenging aspects of logistics.
                With hundreds of lanes, dozens of carriers, and constantly changing market conditions,
                it's nearly impossible to make optimal decisions without data. Most organizations
                rely on gut feel, relationships, or outdated spreadsheets.
              </p>
              <p>
                Our Carrier Performance & Freight Cost Analytics service provides comprehensive
                visibility into your carrier network. We analyze freight spend, transit times,
                on‑time performance, and service quality to identify the best carriers for each
                lane and product type.
              </p>
              <p>
                We develop carrier scorecards that rank performance and highlight opportunities
                for improvement. We benchmark your freight rates against market averages and
                recommend renegotiation strategies that reduce costs.
              </p>
              <p>
                With our solution, you reduce freight costs, improve service levels, and build
                a more resilient, responsive supply chain.
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
                <Truck size={48} />
                <span>Carrier & Freight Analytics</span>
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
            How We Optimize Your Carrier Network
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
                <h4>Carrier Scorecard & Performance Dashboard</h4>
                <p>Comprehensive view of carrier performance — on‑time delivery, transit time, damage rates, and cost — with rankings and trend analysis.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Freight Spend & Rate Analysis</h4>
                <p>Detailed breakdown of freight spend by carrier, lane, mode, and product category. Identification of cost drivers and savings opportunities.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Lane‑Specific Carrier Recommendations</h4>
                <p>Optimal carrier assignments for each lane, balancing cost, service, and reliability. Actionable recommendations for carrier selection.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Rate Benchmarking & Negotiation Support</h4>
                <p>Benchmarking of current freight rates against market averages, with recommendations for renegotiation and contract optimization.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Cost Allocation & Chargeback Reports</h4>
                <p>Accurate allocation of freight costs to business units, customers, or product lines. Enable fair cost recovery and transparency.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Procurement Dashboards</h4>
                <p>Tailored dashboards for supply chain leaders and procurement teams, with drill‑down to carrier and lane levels.</p>
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
            <h2>Ready to Optimize Your Freight Spend?</h2>
            <p>
              Let's analyze your carrier network and freight data to reduce costs, improve service
              levels, and build a more resilient supply chain. You'll have the insights you need
              to negotiate better contracts and select the right carriers for every lane.
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

export default CarrierPerformanceAnalyticsPage;
