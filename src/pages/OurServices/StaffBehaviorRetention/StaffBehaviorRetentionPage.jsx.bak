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
  UserCheck,
  AlertCircle,
  Award,
  Zap,
  UserCog,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./StaffBehaviorRetentionPage.module.css";
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
    title: "Staff Data Integration & Profiling",
    desc: "We connect to your HRIS, performance management systems, payroll, and engagement survey platforms. We build a holistic profile for each staff member — including demographic data, performance history, compensation, and engagement indicators."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Burnout & Disengagement Prediction",
    desc: "Using machine learning, we identify early warning signs of burnout and disengagement — such as increased absenteeism, declining performance, or reduced participation. We flag at‑risk staff weeks or months before they consider leaving."
  },
  {
    icon: <Target size={22} />,
    title: "Turnover Risk & Retention Modeling",
    desc: "We build predictive models that quantify the likelihood of voluntary turnover for each staff member. We identify the key drivers of retention — compensation, workload, professional development, culture — and recommend targeted retention strategies."
  },
  {
    icon: <Users size={22} />,
    title: "Culture & Engagement Analytics",
    desc: "We analyze survey responses, communication patterns, and collaboration data to assess organizational culture and engagement. We identify departments or teams with low morale and recommend interventions to improve workplace climate."
  },
  {
    icon: <UserCog size={22} />,
    title: "Professional Development & Career Pathing",
    desc: "We identify skill gaps, training needs, and career progression opportunities for each staff member. We recommend personalized development plans that align individual goals with organizational needs."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Impact Reporting",
    desc: "We provide real‑time dashboards that track staff engagement, turnover trends, and intervention effectiveness. We help you measure the ROI of retention initiatives and refine strategies over time."
  },
];

const features = [
  {
    icon: <UserCheck size={22} />,
    title: "Retention Risk Scoring",
    desc: "Each staff member receives a retention risk score, with clear drivers — such as compensation, workload, or career development — that inform targeted interventions."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Burnout & Wellness Alerts",
    desc: "Automated alerts for staff showing signs of burnout or disengagement, enabling proactive support and intervention."
  },
  {
    icon: <Target size={22} />,
    title: "Retention Strategy Recommendations",
    desc: "AI‑generated recommendations for retention — including salary adjustments, flexible work arrangements, recognition programs, or mentorship opportunities."
  },
  {
    icon: <Users size={22} />,
    title: "Department & Team Health Dashboards",
    desc: "Aggregated views by department, team, or location, enabling leaders to identify problem areas and celebrate successes."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Turnover Cost & Impact Analysis",
    desc: "Quantify the financial impact of turnover — recruitment costs, lost productivity, knowledge loss — and the ROI of retention efforts."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & HR Dashboards",
    desc: "Tailored dashboards for HR leaders and executives, with drill‑down to individual staff and department levels."
  },
];

const benefits = [
  {
    icon: <UserCheck size={18} />,
    title: "Reduced Turnover",
    desc: "Proactively identify and retain high‑value staff, reducing turnover by 20‑40%."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Lower Recruitment Costs",
    desc: "Save on recruiting, onboarding, and training costs by improving retention."
  },
  {
    icon: <Zap size={18} />,
    title: "Improved Productivity",
    desc: "Engaged staff are more productive, innovative, and committed to organizational goals."
  },
  {
    icon: <Heart size={18} />,
    title: "Better Staff Wellbeing",
    desc: "Prevent burnout by identifying and addressing stressors early, creating a healthier workplace."
  },
  {
    icon: <Target size={18} />,
    title: "Data‑Driven HR Strategy",
    desc: "Replace guesswork with evidence‑based decisions about compensation, benefits, and culture."
  },
  {
    icon: <Award size={18} />,
    title: "Employer Brand & Reputation",
    desc: "Build a reputation as a great place to work, attracting and retaining top talent."
  },
];

const StaffBehaviorRetentionPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Staff Behavior & Retention Analytics | Scape Data Solutions"
      description="AI-powered analytics that predict burnout and identify turnover risk to build a thriving workplace culture."
      path="/services/staff-behavior-retention"
      schema={buildServiceSchema({
        name: "Staff Behavior & Retention Analytics",
        description: "AI-powered analytics that predict burnout and identify turnover risk to build a thriving workplace culture.",
        path: "/services/staff-behavior-retention",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Users size={14} /> <span>Staff Behavior & Retention</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Keep Your <span className={styles.highlight}>Best People</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that predicts burnout, identifies turnover risk, and builds a
              thriving workplace culture. Retain your best staff and reduce costly turnover.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Improve Retention <ArrowRight size={16} />
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
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Retention Improvement</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>40%</span>
                <span className={styles.statLabel}>Burnout Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.7/5</span>
                <span className={styles.statLabel}>Staff Satisfaction</span>
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
            <h2>Staff Turnover is <span className={styles.highlight}>Costly and Disruptive</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>50%</span>
                <p>Of educators report burnout — a crisis that threatens not only staff wellbeing but also the quality of education.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of schools and organizations lack the tools to predict staff turnover, leaving them reactive rather than proactive.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$20,000+</span>
                <p>Average cost of replacing a teacher or professional staff member — a significant financial burden for any institution.</p>
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
                Build a <span className={styles.highlight}>Thriving</span> Workplace
              </h2>
              <p>
                Staff turnover is one of the greatest challenges facing educational institutions
                and organizations today. Burnout, disengagement, and lack of career development
                drive talented professionals away — costing millions in recruitment, training,
                and lost productivity.
              </p>
              <p>
                Our Staff Behavior & Retention service uses AI and advanced analytics to predict
                burnout and turnover risk weeks or months in advance. We identify the key drivers
                of staff satisfaction — compensation, workload, culture, professional development —
                and recommend targeted retention strategies.
              </p>
              <p>
                We provide real‑time dashboards that track staff engagement, turnover trends, and
                the effectiveness of retention initiatives. We help you build a data‑driven HR
                strategy that attracts, develops, and retains top talent.
              </p>
              <p>
                Ultimately, we help you create a workplace where staff feel valued, supported,
                and empowered — resulting in better outcomes for everyone.
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
                <span>Staff Behavior & Retention</span>
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
                <h4>Staff Retention Dashboard</h4>
                <p>Real‑time visibility into staff engagement, retention risk, and turnover trends across your organization.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Turnover Risk & Retention Model</h4>
                <p>Predictive model that identifies staff at risk of leaving, with clear drivers and recommended retention strategies.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Burnout & Wellness Alerts</h4>
                <p>Automated alerts for staff showing signs of burnout or disengagement, enabling proactive support.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Culture & Engagement Insights</h4>
                <p>Analysis of survey data and collaboration patterns to assess workplace culture and identify areas for improvement.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Professional Development Recommendations</h4>
                <p>Personalized development plans for each staff member, aligned with their goals and organizational needs.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Turnover Cost & ROI Analysis</h4>
                <p>Quantified financial impact of turnover and the ROI of retention initiatives, enabling data‑driven investment.</p>
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
            <h2>Ready to Retain Your Best Staff?</h2>
            <p>
              Let's build a staff retention and wellbeing analytics system that helps you identify
              burnout early, reduce turnover, and create a thriving workplace culture. Your staff
              are your greatest asset — invest in their success.
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

export default StaffBehaviorRetentionPage;
