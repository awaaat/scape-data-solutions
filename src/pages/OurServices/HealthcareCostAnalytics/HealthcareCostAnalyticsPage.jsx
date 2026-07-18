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
  Zap,
  AlertCircle,
  Settings,
  Truck,
  Hospital,
  Stethoscope,
  Building,
  ClipboardList,
  Layers,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./HealthcareCostAnalyticsPage.module.css";
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

const howItems = [
  { 
    icon: <Database size={22} />, 
    title: "Data Integration & Consolidation", 
    desc: "We aggregate clinical, claims, supply chain, and operational data into a single, unified view. This includes EHR data, billing systems, procurement records, and departmental budgets." 
  },
  { 
    icon: <DollarSign size={22} />, 
    title: "Cost Allocation & Attribution", 
    desc: "We assign costs to specific services, departments, providers, and patient cohorts. This reveals true profitability and identifies hidden cost drivers across your organization." 
  },
  { 
    icon: <BarChart3 size={22} />, 
    title: "Comprehensive Utilization Review", 
    desc: "We analyze patterns in inpatient admissions, outpatient visits, emergency department usage, and procedural volumes. This identifies over-utilization, under-utilization, and opportunities for care redirection." 
  },
  { 
    icon: <Target size={22} />, 
    title: "Peer Benchmarking", 
    desc: "We compare your costs and utilization metrics against industry peers, regional averages, and historical baselines. This contextualizes your performance and identifies competitive opportunities." 
  },
  { 
    icon: <Activity size={22} />, 
    title: "Root Cause Analysis", 
    desc: "We drill down into high-cost cases and outlier utilization patterns to identify underlying drivers — such as physician practice variation, supply chain inefficiencies, or care coordination gaps." 
  },
  { 
    icon: <CheckCircle size={22} />, 
    title: "Actionable Savings Opportunities", 
    desc: "We deliver prioritized recommendations for cost reduction — from supply chain optimization and vendor renegotiation to care redesign and utilization management programs." 
  },
];

const features = [
  { 
    icon: <BarChart3 size={22} />, 
    title: "Service Line Profitability Analysis", 
    desc: "Understand profitability by service line — cardiology, orthopedics, oncology, etc. Identify which services are profitable and which are subsidizing others." 
  },
  { 
    icon: <Users size={22} />, 
    title: "Physician Cost & Outcome Variation", 
    desc: "Analyze cost and quality variation by individual provider. Identify high-performing physicians and those with opportunities for improvement in cost efficiency." 
  },
  { 
    icon: <Truck size={22} />, 
    title: "Supply Chain & Inventory Analytics", 
    desc: "Optimize procurement, reduce waste, and renegotiate vendor contracts. Identify high-cost supplies and utilization patterns that drive unnecessary spending." 
  },
  { 
    icon: <TrendingUp size={22} />, 
    title: "Utilization Trend Forecasting", 
    desc: "Predict future utilization patterns based on historical trends, demographic shifts, and population health data. Enable proactive capacity planning and resource allocation." 
  },
  { 
    icon: <Target size={22} />, 
    title: "Cost Projection & Scenario Modeling", 
    desc: "Model the financial impact of strategic decisions — new service lines, staffing changes, technology investments, or care model redesigns." 
  },
  { 
    icon: <FileText size={22} />, 
    title: "Executive & Operational Dashboards", 
    desc: "Visual dashboards that provide real-time visibility into cost metrics, utilization trends, and performance against targets. Tailored for clinical, financial, and administrative leaders." 
  },
];

const benefits = [
  { 
    icon: <DollarSign size={18} />, 
    title: "Substantial Cost Reduction", 
    desc: "Identify and eliminate wasteful spending across clinical and operational domains. Achieve sustainable 10-20% cost reductions without compromising quality." 
  },
  { 
    icon: <Zap size={18} />, 
    title: "Operational Efficiency & Leaner Processes", 
    desc: "Streamline care delivery processes, reduce unwarranted variation, and eliminate redundancies. Achieve measurable improvements in throughput and resource utilization." 
  },
  { 
    icon: <Shield size={18} />, 
    title: "Data-Driven Payer & Vendor Negotiations", 
    desc: "Negotiate from a position of strength with clear cost data and benchmarks. Secure better contracts with payers, suppliers, and technology vendors." 
  },
  { 
    icon: <Eye size={18} />, 
    title: "Complete Financial Transparency", 
    desc: "Achieve clarity on where money is being spent, who is driving costs, and where opportunities for savings exist. Build a culture of financial accountability." 
  },
  { 
    icon: <CheckCircle size={18} />, 
    title: "Quality Preservation & Enhancement", 
    desc: "Reduce costs while maintaining or improving quality. Identify high-value care practices that deliver better outcomes at lower costs." 
  },
  { 
    icon: <Target size={18} />, 
    title: "Strategic Resource Allocation", 
    desc: "Allocate resources to the highest-value services and programs. Invest in areas that drive growth, margin, and patient outcomes." 
  },
];

const HealthcareCostAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Healthcare Cost & Utilization Analysis | Scape Data Solutions"
      description="AI-powered analytics that uncover cost drivers and utilization patterns across your healthcare organization."
      path="/services/healthcare-cost-utilization-analysis"
      schema={buildServiceSchema({
        name: "Healthcare Cost & Utilization Analysis",
        description: "AI-powered analytics that uncover cost drivers and utilization patterns across your healthcare organization.",
        path: "/services/healthcare-cost-utilization-analysis",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <DollarSign size={14} /> <span>Cost & Utilization Analysis</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Understand <span className={styles.highlight}>Cost Drivers</span>, Reduce Waste
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that uncovers cost drivers, utilization patterns, and opportunities
              for savings across your healthcare organization. Achieve 10-20% cost reduction without
              compromising quality.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Start Your Cost Analysis <ArrowRight size={16} />
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
                <span className={styles.statValue}>15-20%</span>
                <span className={styles.statLabel}>Cost Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>90%+</span>
                <span className={styles.statLabel}>Spend Visibility</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20-30%</span>
                <span className={styles.statLabel}>Efficiency Gain</span>
              </div>
            </motion.div>
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
                Turn Cost Data into <span className={styles.highlight}>Actionable Savings</span>
              </h2>
              <p>
                Healthcare costs are rising at an unsustainable rate, yet most organizations lack
                clear visibility into what truly drives their spending. Our Cost & Utilization
                Analysis service bridges this gap by aggregating clinical, claims, supply chain,
                and operational data into a comprehensive, actionable view of your cost structure.
              </p>
              <p>
                We analyze service line profitability, physician practice variation, supply chain
                inefficiencies, and patient-level utilization patterns. Our models identify
                opportunities for savings — from vendor renegotiation and care redesign to
                utilization management and operational streamlining.
              </p>
              <p>
                Our dashboards provide transparent cost metrics at every level: by department,
                provider, service line, and patient cohort. This enables clinical and administrative
                leaders to make data-driven decisions that reduce waste, improve efficiency, and
                preserve quality.
              </p>
              <p>
                With our solution, you achieve sustainable cost reduction without compromising
                patient outcomes. You gain the financial clarity needed to navigate value-based care
                and thrive in an increasingly competitive healthcare environment.
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
                <span>Cost & Utilization Analysis</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.challengesSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Challenges We Address
          </motion.h2>
          <div className={styles.challengesGrid}>
            {[
              { icon: <AlertCircle size={22} />, title: "Hidden Cost Drivers", desc: "Many organizations know costs are rising but can't pinpoint the specific drivers — physician variation, supply chain waste, or utilization patterns." },
              { icon: <Eye size={22} />, title: "Limited Spend Visibility", desc: "Most healthcare organizations have fragmented data that prevents a clear view of total cost of care across departments and service lines." },
              { icon: <Settings size={22} />, title: "Inefficient Operations", desc: "Redundant processes, unwarranted variation, and misaligned incentives drive unnecessary costs without improving quality." },
              { icon: <Hospital size={22} />, title: "Pressure on Margins", desc: "Reimbursement pressures, rising labor costs, and supply chain inflation are compressing margins, making cost optimization essential." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.challengeCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
              >
                <div className={styles.challengeIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
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
            How We Drive Cost Optimization
          </motion.h2>
          <div className={styles.howGrid}>
            {howItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.howCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
              >
                <div className={styles.howIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
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
            <h2>Ready to Unlock Healthcare Savings?</h2>
            <p>
              Let's analyze your cost and utilization data to uncover savings opportunities,
              improve efficiency, and strengthen your financial position — all while preserving
              quality and patient outcomes.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Start Your Analysis <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HealthcareCostAnalyticsPage;
