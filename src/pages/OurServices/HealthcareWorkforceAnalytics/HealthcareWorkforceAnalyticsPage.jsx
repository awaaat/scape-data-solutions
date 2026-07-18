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
  Calendar,
  UserCheck,
  AlertCircle,
  Award,
  Zap,
  UserCog,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./HealthcareWorkforceAnalyticsPage.module.css";
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
    title: "Workforce Data Integration",
    desc: "We connect to your HRIS, scheduling systems, time & attendance, payroll, and EHR to create a unified workforce dataset. We capture skills, certifications, shift preferences, and performance metrics."
  },
  {
    icon: <Calendar size={22} />,
    title: "Staffing Optimization & Demand Forecasting",
    desc: "We analyze patient volume, acuity, and historical staffing patterns to forecast demand. We recommend optimal staffing levels — minimizing over-staffing and under-staffing across departments and shifts."
  },
  {
    icon: <UserCheck size={22} />,
    title: "Clinician Productivity & Performance Analytics",
    desc: "We track individual and team productivity — patient encounters, procedure volumes, documentation quality, and time-to-care. We identify top performers and areas for improvement."
  },
  {
    icon: <Activity size={22} />,
    title: "Burnout & Retention Risk Prediction",
    desc: "We use machine learning to identify staff at risk of burnout based on workload patterns, overtime, and engagement signals. We recommend interventions to reduce turnover and improve retention."
  },
  {
    icon: <DollarSign size={22} />,
    title: "Labor Cost & Productivity Analysis",
    desc: "We analyze labor costs by department, role, and shift. We identify cost drivers — overtime, agency usage, and inefficient scheduling — and recommend strategies to reduce spending without compromising care."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Workforce Monitoring",
    desc: "We provide real-time dashboards that track staffing levels, productivity, and financial metrics. We alert you to emerging issues and enable proactive resource reallocation."
  },
];

const features = [
  {
    icon: <Users size={22} />,
    title: "Staffing Demand Dashboard",
    desc: "Real‑time visibility into staffing gaps, projected vs. actual demand, and fill rates by department and shift."
  },
  {
    icon: <UserCog size={22} />,
    title: "Clinician Performance Scorecards",
    desc: "Individualized metrics for productivity, quality, and patient satisfaction. Compare across peers and departments."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Burnout Risk Alerts",
    desc: "Early warning system that flags staff with high burnout potential, enabling proactive support and intervention."
  },
  {
    icon: <DollarSign size={22} />,
    title: "Labor Cost Optimization",
    desc: "Identify cost‑saving opportunities — reducing overtime, optimizing shift mix, and minimizing agency utilization."
  },
  {
    icon: <Calendar size={22} />,
    title: "Scheduling Optimization",
    desc: "Automated scheduling recommendations that balance staff preferences, skills, and department needs."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Workforce Planning & Forecasting",
    desc: "Predict future workforce needs based on patient demand projections, retirement rates, and recruitment pipelines."
  },
];

const benefits = [
  {
    icon: <UserCheck size={18} />,
    title: "Reduced Staffing Costs",
    desc: "Optimize staffing to reduce overtime and agency spend by 10‑20% while maintaining quality."
  },
  {
    icon: <Users size={18} />,
    title: "Improved Clinician Retention",
    desc: "Reduce burnout and turnover by identifying and addressing drivers of dissatisfaction early."
  },
  {
    icon: <Zap size={18} />,
    title: "Enhanced Productivity",
    desc: "Improve clinician efficiency and patient throughput with data‑driven performance insights."
  },
  {
    icon: <Heart size={18} />,
    title: "Better Patient Outcomes",
    desc: "Appropriate staffing levels lead to better care, fewer readmissions, and higher patient satisfaction."
  },
  {
    icon: <Target size={18} />,
    title: "Data‑Driven Decision Making",
    desc: "Replace intuition with real‑time data to make workforce decisions that are both cost‑effective and patient‑centric."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Employer Advantage",
    desc: "Build a reputation as a great place to work, attracting and retaining top talent."
  },
];

const HealthcareWorkforceAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Healthcare Workforce & Staffing Analytics | Scape Data Solutions"
      description="AI-powered analytics that optimize staffing, reduce burnout, and improve clinician productivity."
      path="/services/healthcare-workforce-staffing-analytics"
      schema={buildServiceSchema({
        name: "Healthcare Workforce & Staffing Analytics",
        description: "AI-powered analytics that optimize staffing, reduce burnout, and improve clinician productivity.",
        path: "/services/healthcare-workforce-staffing-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Users size={14} /> <span>Workforce & Staffing Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Optimize Your <span className={styles.highlight}>Healthcare Workforce</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that optimizes staffing, reduces burnout, and improves clinician
              productivity. Build a resilient workforce that delivers exceptional patient care.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Workforce <ArrowRight size={16} />
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
                <span className={styles.statLabel}>Staffing Cost Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>25%</span>
                <span className={styles.statLabel}>Burnout Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15%</span>
                <span className={styles.statLabel}>Productivity Gain</span>
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
            <h2>Healthcare Workforce Challenges are <span className={styles.highlight}>Accelerating</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>50%</span>
                <p>Of clinicians report burnout — a crisis that threatens patient safety and drives turnover costing billions.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$9B</span>
                <p>Annual cost of physician turnover alone — largely preventable with better workforce management.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Of hospitals operate with inadequate staffing — increasing mortality risk and patient dissatisfaction.</p>
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
                Build a <span className={styles.highlight}>Resilient Workforce</span> with Data
              </h2>
              <p>
                Healthcare organizations are facing unprecedented workforce challenges — clinician
                burnout, staffing shortages, rising labor costs, and increasing patient demand.
                Traditional workforce management approaches are no longer sufficient.
              </p>
              <p>
                Our Healthcare Workforce & Staffing Analytics service provides comprehensive visibility
                into your workforce — from staffing patterns and productivity to burnout risk and
                retention drivers. We help you optimize staffing levels, reduce labor costs, and
                improve clinician engagement.
              </p>
              <p>
                We use predictive analytics to forecast demand, identify at‑risk staff, and recommend
                targeted interventions. Our dashboards give you real‑time insights into workforce
                performance, enabling proactive decision‑making.
              </p>
              <p>
                Achieve operational excellence, reduce burnout, and create a workplace where clinicians
                can thrive — and patients can receive the highest quality care.
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
                <span>Workforce Analytics</span>
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
                <h4>Workforce Performance Dashboard</h4>
                <p>Real‑time visibility into staffing levels, productivity, labor costs, and employee engagement across the organization.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Staffing Optimization Plan</h4>
                <p>Actionable recommendations for shift scheduling, staffing ratios, and recruitment priorities to meet demand efficiently.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Burnout Risk & Retention Report</h4>
                <p>Identification of at‑risk staff and teams, with targeted interventions to reduce burnout and improve retention.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Productivity & Performance Scorecards</h4>
                <p>Individualized and team‑level productivity metrics, with benchmarks and improvement targets.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Labor Cost & Efficiency Analysis</h4>
                <p>Comprehensive breakdown of labor costs by role, department, and shift, with actionable cost‑saving opportunities.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Workforce Forecasting Model</h4>
                <p>Predictive model that forecasts future staffing needs based on patient demand, retirement rates, and recruitment pipelines.</p>
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
            <h2>Ready to Build a Resilient Workforce?</h2>
            <p>
              Let's analyze your workforce data to optimize staffing, reduce burnout, and improve
              productivity. You'll create a workplace where clinicians can thrive and patients
              receive the highest quality care.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Start Optimizing <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HealthcareWorkforceAnalyticsPage;
