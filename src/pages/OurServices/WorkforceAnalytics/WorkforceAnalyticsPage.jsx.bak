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
  UserCheck,
  UserCog,
  Calendar,
  Layers,
  Briefcase,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./WorkforceAnalyticsPage.module.css";
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
    title: "HR Data Integration & Unification",
    desc: "We connect to your HRIS, payroll, performance management, recruitment, and employee engagement platforms. We consolidate data from disparate sources into a unified employee data model, creating a single source of truth for all workforce metrics — demographics, performance, compensation, attendance, and engagement."
  },
  {
    icon: <UserCheck size={22} />,
    title: "Employee Performance & Productivity Analytics",
    desc: "We analyze employee performance metrics — productivity, quality, goal achievement, and competencies. We identify top performers and those needing development, and we correlate performance with engagement, tenure, and training to understand what drives excellence."
  },
  {
    icon: <Heart size={22} />,
    title: "Employee Engagement & Sentiment Analysis",
    desc: "We analyze employee engagement survey data, pulse surveys, and feedback to measure engagement, satisfaction, and sentiment. We identify drivers of engagement and disengagement, enabling targeted interventions to improve morale and retention."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Turnover & Retention Risk Modeling",
    desc: "We use machine learning to predict employee turnover risk, identifying high‑potential leavers and the drivers of attrition. We recommend retention strategies — compensation adjustments, career development, flexible work arrangements — to reduce turnover and preserve talent."
  },
  {
    icon: <UserCog size={22} />,
    title: "Recruitment & Talent Acquisition Analytics",
    desc: "We analyze recruitment funnels — sourcing channels, time‑to‑fill, cost‑per‑hire, quality of hire — to optimize your talent acquisition strategy. We identify the most effective sourcing channels and recommend improvements to attract and select top talent."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Workforce Planning & Scenario Modeling",
    desc: "We provide workforce planning capabilities that forecast future talent needs based on business growth, attrition rates, and skills gaps. We model different scenarios — expansion, restructuring, automation — to inform strategic workforce decisions."
  },
];

const features = [
  {
    icon: <Users size={22} />,
    title: "Unified Employee Profiles",
    desc: "Comprehensive, 360‑degree profiles for every employee — combining performance, engagement, compensation, and development data."
  },
  {
    icon: <Activity size={22} />,
    title: "Performance & Productivity Tracking",
    desc: "Monitor individual and team performance metrics against goals, with trend analysis and predictive insights."
  },
  {
    icon: <Heart size={22} />,
    title: "Engagement & Sentiment Monitoring",
    desc: "Continuous analysis of employee sentiment from surveys and feedback, with alerts for declining engagement."
  },
  {
    icon: <Target size={22} />,
    title: "Turnover Risk Prediction",
    desc: "Machine learning models that predict attrition risk and recommend proactive retention strategies."
  },
  {
    icon: <Briefcase size={22} />,
    title: "Recruitment Funnel Analytics",
    desc: "Analyze sourcing channels, candidate conversion, time‑to‑fill, and quality of hire to optimize recruitment."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & HR Dashboards",
    desc: "Tailored dashboards for HR leaders and executives, with drill‑down to department, role, and individual levels."
  },
];

const benefits = [
  {
    icon: <UserCheck size={18} />,
    title: "10‑20% Improvement in Retention",
    desc: "Proactively identify and address attrition drivers, retaining your best talent and reducing recruitment costs."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "15‑25% Increase in Productivity",
    desc: "Optimize performance management, training, and engagement to unlock the full potential of your workforce."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Reduced Hiring Costs",
    desc: "Improve recruitment efficiency and quality of hire, reducing cost‑per‑hire and time‑to‑fill by up to 30%."
  },
  {
    icon: <Heart size={18} />,
    title: "Higher Employee Engagement",
    desc: "Build a positive workplace culture with data‑driven insights into what drives satisfaction and commitment."
  },
  {
    icon: <Target size={18} />,
    title: "Better Talent Decisions",
    desc: "Make objective, data‑driven decisions about promotions, compensation, and talent development."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Attract, develop, and retain top talent, creating a workforce that outperforms competitors."
  },
];

const WorkforceAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Workforce & HR Analytics | Scape Data Solutions"
      description="AI-powered workforce and HR analytics that optimize employee performance, engagement, and retention."
      path="/services/workforce-hr-analytics"
      schema={buildServiceSchema({
        name: "Workforce & HR Analytics",
        description: "AI-powered workforce and HR analytics that optimize employee performance, engagement, and retention.",
        path: "/services/workforce-hr-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Users size={14} /> <span>Workforce & HR Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Build a <span className={styles.highlight}>High‑Performing</span> Workforce
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered workforce and HR analytics that optimizes employee performance, engagement,
              retention, and recruitment. Transform your people data into a strategic advantage.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Transform Your Workforce <ArrowRight size={16} />
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
                <span className={styles.statLabel}>Retention Improvement</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15-25%</span>
                <span className={styles.statLabel}>Productivity Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Reduced Hiring Costs</span>
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
            <h2>HR Decisions are <span className={styles.highlight}>Often Based on Intuition, Not Data</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>70%</span>
                <p>Of organizations lack the analytics to predict employee turnover, leaving them reactive when talent leaves unexpectedly.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of HR leaders report that they lack a unified view of workforce data — performance, engagement, compensation — making it hard to connect the dots.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$100B+</span>
                <p>Estimated annual cost of employee turnover — a significant opportunity for savings through better retention analytics.</p>
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
                Turn People Data into a <span className={styles.highlight}>Strategic Asset</span>
              </h2>
              <p>
                Your employees are your most valuable asset — yet many organizations make critical
                HR decisions based on intuition rather than data. Without analytics, you can't
                predict turnover, measure engagement, or optimize talent acquisition.
              </p>
              <p>
                Our Workforce & HR Analytics service provides comprehensive visibility into your
                workforce. We consolidate data from HRIS, payroll, performance management, and
                engagement platforms to create unified employee profiles. We analyze performance,
                engagement, turnover risk, and recruitment effectiveness.
              </p>
              <p>
                We use machine learning to predict turnover and recommend retention strategies.
                We identify drivers of engagement and disengagement, enabling targeted interventions.
                We optimize recruitment funnels to attract and select top talent.
              </p>
              <p>
                With our solution, you build a high‑performing, engaged workforce that drives
                business success — and you do it with data, not guesswork.
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
                <span>Workforce & HR Analytics</span>
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
            How We Build a Data‑Driven HR Strategy
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
                <h4>Unified Employee Profiles</h4>
                <p>Comprehensive profiles for every employee, combining performance, engagement, compensation, and development data in one place.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Performance & Productivity Dashboard</h4>
                <p>Real‑time visibility into individual and team performance metrics, with trend analysis and predictive insights.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Engagement & Sentiment Report</h4>
                <p>Analysis of employee sentiment and engagement, with identification of drivers and recommendations for improvement.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Turnover Risk & Retention Plan</h4>
                <p>Machine learning model that predicts turnover risk for each employee, with personalized retention recommendations.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Recruitment Funnel & Quality of Hire Report</h4>
                <p>Analysis of recruitment sourcing, time‑to‑fill, cost‑per‑hire, and quality of hire, with optimization recommendations.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Workforce Planning & Scenario Model</h4>
                <p>Forecasts of future workforce needs based on business growth, attrition, and skills gaps, with scenario planning capabilities.</p>
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
            <h2>Ready to Build a High‑Performing Workforce?</h2>
            <p>
              Let's analyze your workforce data to optimize performance, engagement, and retention.
              You'll build a data‑driven HR strategy that attracts, develops, and retains top talent
              — and drives business success.
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

export default WorkforceAnalyticsPage;
