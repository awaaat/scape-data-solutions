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
  Smartphone,
  Wifi,
  Monitor,
  Zap,
  AlertCircle,
  Award,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./TelehealthRemoteMonitoringAnalyticsPage.module.css";
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
    title: "Data Aggregation & Integration",
    desc: "We connect to your telehealth platforms, remote monitoring devices (wearables, BP cuffs, glucose monitors), EHR, and billing systems. We consolidate data from these disparate sources into a unified analytics layer, enabling comprehensive visibility into virtual care performance."
  },
  {
    icon: <Users size={22} />,
    title: "Engagement & Utilization Analytics",
    desc: "We track visit volume, patient activation, device adherence, and program participation. We identify patients who are engaged and those who are at risk of dropping out. We analyze utilization patterns by condition, demography, and referral source."
  },
  {
    icon: <Heart size={22} />,
    title: "Clinical Outcome Measurement",
    desc: "We measure clinical improvements — changes in blood pressure, glucose levels, weight, symptom scores, and functional status. We link these outcomes to specific interventions and identify which programs yield the best results."
  },
  {
    icon: <DollarSign size={22} />,
    title: "Cost & ROI Analysis",
    desc: "We quantify the financial impact of virtual care: reductions in ED visits, hospitalizations, length of stay, and total cost of care. We calculate ROI for each program, enabling you to prioritize investments and negotiate with payers."
  },
  {
    icon: <Target size={22} />,
    title: "Patient Segmentation & Personalization",
    desc: "We segment patients by clinical condition, risk level, digital literacy, and engagement patterns. We identify which patient cohorts benefit most from virtual care, allowing you to tailor programs and outreach strategies."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Program Optimization & Scaling",
    desc: "We recommend program adjustments — timing, frequency, communication channels, and device selection — to maximize engagement and outcomes. We help you scale successful programs and decommission underperforming ones."
  },
];

const features = [
  {
    icon: <Monitor size={22} />,
    title: "Real-Time Program Dashboard",
    desc: "View key metrics — active patients, device adherence, clinical alerts, and cost savings — in a single, interactive dashboard. Track performance over time and across programs."
  },
  {
    icon: <Activity size={22} />,
    title: "Clinical Alert & Escalation",
    desc: "Identify patients with concerning readings and prioritize follow-up. Automate alerts to care teams for timely intervention, reducing adverse events."
  },
  {
    icon: <Users size={22} />,
    title: "Patient Engagement Score",
    desc: "Compute an engagement score for each patient based on device usage, response rates, and visit attendance. Identify disengaged patients for targeted outreach."
  },
  {
    icon: <DollarSign size={22} />,
    title: "Cost Savings Calculator",
    desc: "Quantify savings from avoided ED visits, hospitalizations, and reduced readmissions. Visualize cumulative savings by program and patient cohort."
  },
  {
    icon: <Smartphone size={22} />,
    title: "Device & Technology Performance",
    desc: "Track device reliability, data transmission delays, and patient-reported usability. Identify technology barriers and inform device selection."
  },
  {
    icon: <FileText size={22} />,
    title: "ROI & Value Reporting",
    desc: "Generate reports for leadership, payers, and investors demonstrating the clinical and financial value of your virtual care programs."
  },
];

const benefits = [
  {
    icon: <Users size={18} />,
    title: "Higher Patient Engagement",
    desc: "Boost program participation and device adherence with data-driven interventions. Engaged patients are more likely to achieve better clinical outcomes."
  },
  {
    icon: <Heart size={18} />,
    title: "Improved Clinical Outcomes",
    desc: "Achieve better management of chronic conditions — hypertension, diabetes, CHF — with continuous monitoring and proactive care."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Significant Cost Reduction",
    desc: "Reduce unnecessary ED visits, avoidable hospitalizations, and total cost of care. Demonstrate value to payers and employers."
  },
  {
    icon: <Zap size={18} />,
    title: "Data-Driven Program Expansion",
    desc: "Scale programs that work and decommission those that don't. Allocate resources to the highest-ROI interventions."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Lead in virtual care innovation and attract patients, clinicians, and payers who value digital health services."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Patient & Provider Satisfaction",
    desc: "Patients appreciate the convenience and responsiveness of virtual care; providers benefit from reduced burnout and better continuity."
  },
];

const TelehealthRemoteMonitoringAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Telehealth & Remote Monitoring Analytics | Scape Data Solutions"
      description="Advanced analytics that measure engagement, clinical outcomes, and ROI of telehealth programs."
      path="/services/telehealth-remote-monitoring-analytics"
      schema={buildServiceSchema({
        name: "Telehealth & Remote Monitoring Analytics",
        description: "Advanced analytics that measure engagement, clinical outcomes, and ROI of telehealth programs.",
        path: "/services/telehealth-remote-monitoring-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Wifi size={14} /> <span>Telehealth & Remote Monitoring</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Optimize Virtual Care <span className={styles.highlight}>with Data</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Measure engagement, clinical outcomes, and ROI of telehealth and remote patient monitoring
              programs with advanced analytics. Scale what works and improve what doesn't.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Start Optimizing <ArrowRight size={16} />
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
                <span className={styles.statValue}>30-50%</span>
                <span className={styles.statLabel}>Engagement Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20-30%</span>
                <span className={styles.statLabel}>Cost Savings</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>95%+</span>
                <span className={styles.statLabel}>Data Accuracy</span>
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
            <h2>Virtual Care is Growing — but <span className={styles.highlight}>Measuring Its Impact</span> is Hard</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>68%</span>
                <p>Of healthcare organizations lack standardized metrics to evaluate telehealth program performance, making it difficult to justify investment.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>2x</span>
                <p>Higher patient engagement is associated with better clinical outcomes, yet most providers cannot identify which patients are disengaging until it's too late.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>45%</span>
                <p>Of remote monitoring programs fail to achieve ROI because they lack real-time analytics to optimize protocols and patient selection.</p>
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
                Scale Virtual Care <span className={styles.highlight}>Intelligently</span>
              </h2>
              <p>
                Telehealth and remote patient monitoring are transforming healthcare delivery,
                offering convenience, improved access, and cost savings. But without robust analytics,
                it's nearly impossible to know if your programs are delivering the expected clinical
                and financial returns.
              </p>
              <p>
                Our Telehealth & Remote Monitoring Analytics service provides comprehensive metrics on
                utilization, patient engagement, clinical outcomes, and financial performance. We help
                you identify which patients benefit most from virtual care, optimize program design,
                and demonstrate ROI to stakeholders.
              </p>
              <p>
                We integrate data from telehealth platforms, remote monitoring devices, EHRs, and
                billing systems to give you a 360‑degree view of virtual care performance. Our
                dashboards provide real‑time visibility into program performance, enabling rapid
                adjustments and continuous improvement.
              </p>
              <p>
                Expand your virtual care programs with confidence, knowing that every decision is
                backed by data.
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
                <Wifi size={48} />
                <span>Telehealth & RPM Analytics</span>
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
                <h4>Program Performance Dashboard</h4>
                <p>Real-time visualization of key metrics — active patients, device adherence, visit volume, and clinical alerts — for each virtual care program.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Patient Engagement & Retention Report</h4>
                <p>Identify patients who are disengaging and predict dropout risk. Receive recommendations for re-engagement strategies.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Clinical Outcome Analysis</h4>
                <p>Quantify improvements in clinical metrics — BP, glucose, weight, symptom scores — and link them to specific interventions and patient cohorts.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Cost Savings & ROI Calculation</h4>
                <p>Measure avoided ED visits, hospitalizations, and reduced length of stay. Calculate ROI by program and patient segment.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Optimization Recommendations</h4>
                <p>Actionable insights to improve engagement, clinical outcomes, and financial performance — including protocol adjustments, device selection, and communication strategies.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Payer Reporting</h4>
                <p>Professional reports for leadership, payers, and investors demonstrating the value of your virtual care programs.</p>
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
            <h2>Ready to Optimize Virtual Care?</h2>
            <p>
              Let's build analytics for your telehealth and remote monitoring programs to maximize
              their impact. You'll gain the insights you need to scale what works, improve what doesn't,
              and demonstrate value to every stakeholder.
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

export default TelehealthRemoteMonitoringAnalyticsPage;
