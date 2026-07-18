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
  Beaker,
  FlaskConical,
  ClipboardList,
  AlertCircle,
  Award,
  Zap,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./ClinicalTrialAnalyticsPage.module.css";
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
    title: "Trial Data Integration & Harmonization",
    desc: "We aggregate data from EDC systems, EHRs, patient registries, and laboratory systems. We harmonize disparate data sources into a unified analytics platform that enables comprehensive trial oversight."
  },
  {
    icon: <ClipboardList size={22} />,
    title: "Patient Recruitment Optimization",
    desc: "We analyze electronic health records and patient databases to identify candidates who meet trial eligibility criteria. We predict patient enrollment likelihood and recommend outreach strategies to accelerate recruitment."
  },
  {
    icon: <Activity size={22} />,
    title: "Real‑Time Safety & Efficacy Monitoring",
    desc: "We monitor adverse events, protocol deviations, and endpoint data in real‑time. We provide early warnings of safety signals and emerging efficacy trends, enabling rapid protocol adjustments."
  },
  {
    icon: <Target size={22} />,
    title: "Site Performance & Benchmarking",
    desc: "We compare site enrollment rates, data quality, and protocol adherence across all trial sites. We identify high‑performing sites and those requiring additional support or investigation."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Predictive Analytics for Trial Outcomes",
    desc: "We use machine learning to predict trial success probability based on interim data, historical benchmarks, and external factors. We provide probabilistic forecasts that guide go/no‑go decisions."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Data Quality & Completeness Monitoring",
    desc: "We track missing data, query rates, and data entry timelines. We identify data quality issues early and recommend corrective actions to ensure audit‑ready data."
  },
];

const features = [
  {
    icon: <Beaker size={22} />,
    title: "Patient Recruitment Dashboard",
    desc: "Visualize enrollment progress against targets, identify barriers, and track outreach effectiveness."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Safety Signal Detection",
    desc: "Automated alerts for adverse events and unanticipated safety signals. Ensure patient safety and regulatory compliance."
  },
  {
    icon: <Users size={22} />,
    title: "Site Performance Scorecards",
    desc: "Compare site metrics — enrollment, data quality, query resolution, and protocol compliance."
  },
  {
    icon: <Target size={22} />,
    title: "Trial Success Prediction",
    desc: "Predict the probability of meeting primary endpoints with machine learning models trained on historical trial data."
  },
  {
    icon: <ClipboardList size={22} />,
    title: "Protocol Optimization Insights",
    desc: "Identify protocol elements that drive enrollment delays or high dropout rates. Recommend modifications."
  },
  {
    icon: <FileText size={22} />,
    title: "Regulatory Reporting Automation",
    desc: "Generate DSMB reports, interim analyses, and regulatory submissions with pre‑built templates and automated data extraction."
  },
];

const benefits = [
  {
    icon: <Users size={18} />,
    title: "Faster Patient Enrollment",
    desc: "Accelerate recruitment by 20‑40% using AI‑driven patient identification and targeted outreach."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Reduced Trial Costs",
    desc: "Optimize site selection, reduce data cleaning time, and avoid costly protocol amendments."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Improved Trial Success Rates",
    desc: "Make data‑driven decisions to adapt protocols, focus on high‑performing sites, and increase the probability of success."
  },
  {
    icon: <Shield size={18} />,
    title: "Enhanced Patient Safety",
    desc: "Detect and respond to safety signals earlier, reducing patient risk and regulatory exposure."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Time‑to‑Market",
    desc: "Streamline trial execution, reduce delays, and bring life‑changing therapies to market faster."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Demonstrate operational excellence to sponsors, partners, and regulatory authorities."
  },
];

const ClinicalTrialAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Clinical Trial Analytics | Scape Data Solutions"
      description="AI-powered analytics that optimize patient recruitment, monitor safety and efficacy, and improve trial success rates."
      path="/services/clinical-trial-analytics"
      schema={buildServiceSchema({
        name: "Clinical Trial Analytics",
        description: "AI-powered analytics that optimize patient recruitment, monitor safety and efficacy, and improve trial success rates.",
        path: "/services/clinical-trial-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Beaker size={14} /> <span>Clinical Trial Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Accelerate <span className={styles.highlight}>Clinical Trials</span> with AI
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that optimize patient recruitment, monitor safety and efficacy,
              and improve trial success rates. Bring life‑changing therapies to market faster.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Accelerate Your Trials <ArrowRight size={16} />
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
                <span className={styles.statValue}>20-40%</span>
                <span className={styles.statLabel}>Faster Enrollment</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Cost Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15%</span>
                <span className={styles.statLabel}>Success Rate Increase</span>
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
            <h2>Clinical Trials are <span className={styles.highlight}>Slow, Expensive, and Risky</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>80%</span>
                <p>Of clinical trials fail to meet enrollment timelines, causing costly delays and jeopardizing study validity.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$2.6B</span>
                <p>Average cost to bring a new drug to market — much of which is driven by trial inefficiencies and failures.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>50%</span>
                <p>Of trial data queries are related to data quality issues — leading to re‑work and delayed regulatory submissions.</p>
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
                Data-Driven <span className={styles.highlight}>Trial Optimization</span>
              </h2>
              <p>
                Clinical trials are the cornerstone of medical advancement, yet they remain
                notoriously slow, expensive, and unpredictable. Patient recruitment is a major
                bottleneck, and safety monitoring is often reactive rather than proactive.
              </p>
              <p>
                Our Clinical Trial Analytics service uses AI and advanced analytics to optimize
                every phase of trial execution. We help you identify and enroll eligible patients
                faster, monitor safety and efficacy in real‑time, and predict trial outcomes with
                confidence.
              </p>
              <p>
                We integrate data from EDC systems, EHRs, and patient registries to provide a
                unified view of trial performance. Our dashboards give you real‑time visibility
                into enrollment, data quality, and safety signals, enabling rapid decision‑making
                and protocol adjustments.
              </p>
              <p>
                Accelerate your trials, reduce costs, and increase the probability of success —
                bringing life‑changing therapies to patients sooner.
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
                <Beaker size={48} />
                <span>Clinical Trial Analytics</span>
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
                <h4>Trial Performance Dashboard</h4>
                <p>Real‑time view of enrollment, data quality, site performance, and safety metrics across all active trials.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Patient Recruitment & Enrollment Plan</h4>
                <p>AI‑generated list of eligible patients, with outreach recommendations and enrollment projections.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Safety & Efficacy Monitoring Report</h4>
                <p>Automated safety signal detection and interim efficacy analysis, with clear visualizations and alerts.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Site Scorecards & Benchmarking</h4>
                <p>Comparative analysis of site performance, identifying top‑performers and those needing support.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Trial Success Prediction</h4>
                <p>Probabilistic forecast of trial outcome based on interim data, with recommendations for protocol adjustments.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Regulatory Submission Readiness</h4>
                <p>Automated generation of DSMB reports, interim summaries, and data packages for regulatory bodies.</p>
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
            <h2>Ready to Accelerate Your Clinical Trials?</h2>
            <p>
              Let's implement AI and analytics to optimize patient recruitment, monitor safety,
              and increase trial success rates. You'll bring therapies to market faster and at
              lower cost.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Accelerate Your Trials <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ClinicalTrialAnalyticsPage;
