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
  GitBranch,
  Layers,
  Zap,
  AlertCircle,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./ClinicalPathwayOptimizationPage.module.css";
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
    title: "Data Collection & Harmonization",
    desc: "We aggregate clinical data from EHRs, order sets, and outcome registries to build a comprehensive view of current care patterns. This includes treatment sequences, medication choices, procedure timing, and resource utilization across your organization."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Pathway Mapping & Variation Analysis",
    desc: "We map your existing care pathways and analyze variation across providers, departments, and sites. We identify unwarranted variation — differences in care that cannot be explained by patient characteristics or preferences — and quantify their impact on outcomes and costs."
  },
  {
    icon: <Target size={22} />,
    title: "Outcome Correlation & Benchmarking",
    desc: "We link pathways to clinical outcomes — complication rates, length of stay, readmissions, mortality, and patient satisfaction. We benchmark your pathways against evidence-based guidelines and peer institutions to identify high-performing practices."
  },
  {
    icon: <FileText size={22} />,
    title: "Evidence-Based Protocol Development",
    desc: "We integrate published guidelines, clinical trials, and local expertise to design optimized pathways. We identify the care practices that consistently deliver superior outcomes at lower costs and codify them into standardized protocols."
  },
  {
    icon: <Activity size={22} />,
    title: "Implementation & Change Management",
    desc: "We support the deployment of optimized pathways through clinician engagement, education, and decision support integration. We help you navigate resistance to change and ensure buy-in from key stakeholders."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Improvement",
    desc: "We monitor adherence to optimized pathways and track outcomes in real-time. We refresh pathways based on new evidence and emerging best practices, ensuring your care remains at the forefront of quality and efficiency."
  },
];

const features = [
  {
    icon: <Layers size={22} />,
    title: "End-to-End Process Mapping",
    desc: "Visualize the complete patient journey from admission to discharge. Identify bottlenecks, delays, and opportunities for care redesign."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Outcome Analytics & Prediction",
    desc: "Link pathways to complication rates, readmission risk, length of stay, and mortality. Predict outcomes based on pathway adherence."
  },
  {
    icon: <Users size={22} />,
    title: "Provider & Department Benchmarking",
    desc: "Compare pathway performance across providers, departments, and sites. Identify variation and share best practices."
  },
  {
    icon: <FileText size={22} />,
    title: "Order Set Optimization",
    desc: "Design evidence-based order sets that drive adherence to optimized pathways. Integrate with your EHR for seamless deployment."
  },
  {
    icon: <Clock size={22} />,
    title: "Real-Time Adherence Monitoring",
    desc: "Track clinician adherence to optimized pathways in real-time. Provide feedback and alerts to drive continuous improvement."
  },
  {
    icon: <Eye size={22} />,
    title: "Clinical Decision Support Integration",
    desc: "Embed pathway recommendations into clinical workflows at the point of care. Provide clinicians with evidence-based guidance when they need it most."
  },
];

const benefits = [
  {
    icon: <Shield size={18} />,
    title: "Improved Clinical Quality",
    desc: "Standardize evidence-based care and reduce unwarranted variation. Achieve consistently better outcomes across your organization."
  },
  {
    icon: <BarChart3 size={18} />,
    title: "Reduced Practice Variation",
    desc: "Eliminate unwarranted variation that drives costs and worsens outcomes. Deliver care that is grounded in the best available evidence."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Lower Care Costs",
    desc: "Eliminate waste, over-utilization, and unnecessary procedures. Achieve sustainable cost reduction without compromising quality."
  },
  {
    icon: <Heart size={18} />,
    title: "Better Patient Outcomes",
    desc: "Reduce complications, readmissions, and length of stay. Improve patient survival and functional recovery."
  },
  {
    icon: <Zap size={18} />,
    title: "Enhanced Operational Efficiency",
    desc: "Streamline care delivery, reduce delays, and improve throughput. Achieve more with existing resources."
  },
  {
    icon: <Users size={18} />,
    title: "Increased Provider Satisfaction",
    desc: "Provide clinicians with clear, evidence-based guidance that reduces uncertainty and improves the care experience."
  },
];

const ClinicalPathwayOptimizationPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Clinical Pathway Optimization | Scape Data Solutions"
      description="Analyze and optimize clinical pathways to reduce unwarranted variation and improve patient outcomes with data-driven insights."
      path="/services/clinical-pathway-optimization"
      schema={buildServiceSchema({
        name: "Clinical Pathway Optimization",
        description: "Analyze and optimize clinical pathways to reduce unwarranted variation and improve patient outcomes with data-driven insights.",
        path: "/services/clinical-pathway-optimization",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <GitBranch size={14} /> <span>Clinical Pathway Optimization</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Standardize Care, <span className={styles.highlight}>Improve Outcomes</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Analyze and optimize clinical pathways to reduce unwarranted variation, enhance quality,
              and improve patient outcomes with data-driven insights. Achieve consistent, evidence-based
              care across your entire organization.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Pathways <ArrowRight size={16} />
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
                <span className={styles.statValue}>25-40%</span>
                <span className={styles.statLabel}>Variation Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15-20%</span>
                <span className={styles.statLabel}>Length of Stay Decrease</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20-30%</span>
                <span className={styles.statLabel}>Complication Reduction</span>
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
                Evidence-Based <span className={styles.highlight}>Care Pathways</span>
              </h2>
              <p>
                Clinical pathways are essential for delivering consistent, high-quality care. Yet
                many organizations struggle with unwarranted variation — differences in care that
                cannot be explained by patient characteristics or preferences. These variations
                drive higher costs, worse outcomes, and provider frustration.
              </p>
              <p>
                Our Clinical Pathway Optimization service uses advanced process mining and outcome
                analytics to identify best practices, reduce unwarranted variation, and standardize
                care across your organization. We analyze treatment patterns, outcomes, and resource
                utilization to identify pathways associated with superior results.
              </p>
              <p>
                We help you implement evidence-based protocols, monitor adherence, and continuously
                improve based on new evidence and outcomes. We integrate with your EHR to embed
                pathway recommendations into clinical workflows at the point of care.
              </p>
              <p>
                The result: better patient outcomes, reduced length of stay, improved resource
                efficiency, and a culture of continuous improvement that elevates your organization's
                reputation for clinical excellence.
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
                <GitBranch size={48} />
                <span>Clinical Pathway Optimization</span>
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
            The Variation Challenge
          </motion.h2>
          <div className={styles.challengesGrid}>
            {[
              { icon: <AlertCircle size={22} />, title: "Unwarranted Variation", desc: "Unwarranted variation in care is widespread and costly. Patients with similar conditions receive different care depending on who treats them, where they are treated, and when they present." },
              { icon: <BarChart3 size={22} />, title: "Inconsistent Outcomes", desc: "Variation drives inconsistent outcomes, with some providers achieving superior results while others lag behind. This undermines quality and creates inequity in care." },
              { icon: <DollarSign size={22} />, title: "Hidden Costs of Variation", desc: "Variation leads to over-utilization of low-value services, under-utilization of high-value services, and inefficient resource allocation. These hidden costs erode margins." },
              { icon: <Users size={22} />, title: "Clinician Burnout & Frustration", desc: "Uncertainty about the 'right' way to care drives clinician frustration and burnout. Evidence-based pathways provide clarity and reduce cognitive burden." },
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
            How We Optimize Clinical Pathways
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
            <h2>Ready to Optimize Your Clinical Pathways?</h2>
            <p>
              Let's analyze your care pathways to standardize best practices, reduce unwarranted
              variation, and improve patient outcomes. You'll deliver more consistent, evidence-based
              care that patients and providers appreciate.
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

export default ClinicalPathwayOptimizationPage;
