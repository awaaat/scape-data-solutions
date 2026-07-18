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
  Radio,
  Scan,
  Zap,
  AlertCircle,
  Award,
  Cpu,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./MedicalImagingAnalyticsPage.module.css";
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
    title: "Data Integration & Standardization",
    desc: "We connect to your PACS, RIS, EHR, and other imaging repositories. We standardize DICOM metadata, radiology reports, and clinical outcomes data into a unified analytics platform that enables cross‑modal and longitudinal analysis."
  },
  {
    icon: <Scan size={22} />,
    title: "AI-Powered Anomaly Detection",
    desc: "We deploy deep learning models trained on large, diverse imaging datasets to detect suspicious findings — nodules, fractures, masses, and other pathology — with accuracy that matches or exceeds expert readers. We detect subtle patterns that human eyes might miss."
  },
  {
    icon: <Target size={22} />,
    title: "Priority Triage & Escalation",
    desc: "We assign urgency scores to each study, flagging critical findings for immediate review. We reduce time to diagnosis for life‑threatening conditions and ensure that urgent cases are read first."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Workflow Optimization & Capacity Planning",
    desc: "We analyze reading queues, assignment patterns, and turnaround times. We recommend optimal distribution of work, shift scheduling, and resource allocation to reduce backlog and improve efficiency."
  },
  {
    icon: <Activity size={22} />,
    title: "Quality & Performance Monitoring",
    desc: "We track individual radiologist performance metrics — accuracy, sensitivity, specificity, and reporting speed. We identify outliers and opportunities for targeted education and feedback."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Model Improvement",
    desc: "We refresh AI models with new imaging data and outcome feedback, continuously improving detection accuracy and reducing false positives. We ensure your AI system evolves with your practice."
  },
];

const features = [
  {
    icon: <Radio size={22} />,
    title: "Multi‑Modality AI Detection",
    desc: "AI models trained on X‑ray, CT, MRI, ultrasound, and mammography. Detect a wide range of findings — from pulmonary nodules to intracranial hemorrhage to vertebral fractures."
  },
  {
    icon: <Target size={22} />,
    title: "Intelligent Triage & Worklist Prioritization",
    desc: "Automatically prioritize studies based on clinical urgency, patient acuity, and referring provider requests. Ensure critical findings are never overlooked."
  },
  {
    icon: <Clock size={22} />,
    title: "Real‑Time Turnaround Analytics",
    desc: "Monitor reading time, report delivery, and patient wait times in real‑time. Identify bottlenecks and take corrective action instantly."
  },
  {
    icon: <Users size={22} />,
    title: "Radiologist Performance Scorecards",
    desc: "Individualized dashboards showing accuracy, case volume, turnaround time, and peer comparison. Support coaching and continuing education."
  },
  {
    icon: <Cpu size={22} />,
    title: "Integration with Existing Systems",
    desc: "Seamless integration with PACS, RIS, and EHR via HL7, DICOMweb, and FHIR. No disruption to clinical workflows."
  },
  {
    icon: <Eye size={22} />,
    title: "Explainable AI & Interpretability",
    desc: "Heatmaps and overlay visualizations that show exactly which regions of the image influenced the AI's decision. Build trust and facilitate clinical review."
  },
];

const benefits = [
  {
    icon: <Zap size={18} />,
    title: "Faster Diagnosis & Treatment",
    desc: "Reduce report turnaround times by 30‑50%, enabling earlier treatment and improved patient outcomes."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Higher Diagnostic Accuracy",
    desc: "Reduce missed findings and false positives. AI‑assisted readings have been shown to improve sensitivity by 10‑20% without compromising specificity."
  },
  {
    icon: <BarChart3 size={18} />,
    title: "Improved Operational Efficiency",
    desc: "Streamline reading queues, optimize scheduling, and reduce backlog. Achieve more with existing staff."
  },
  {
    icon: <Heart size={18} />,
    title: "Better Patient Outcomes",
    desc: "Earlier detection of critical conditions saves lives and reduces long‑term morbidity."
  },
  {
    icon: <Users size={18} />,
    title: "Radiologist Satisfaction & Retention",
    desc: "AI assistance reduces burnout by automating repetitive tasks and reducing cognitive load. Radiologists can focus on complex cases."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Differentiation",
    desc: "Offer advanced imaging analytics that attract referring physicians and patients. Lead in diagnostic excellence."
  },
];

const MedicalImagingAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Medical Imaging & Radiology Analytics | Scape Data Solutions"
      description="AI and analytics applied to medical imaging to improve diagnostic accuracy and optimize radiology workflow."
      path="/services/medical-imaging-radiology-analytics"
      schema={buildServiceSchema({
        name: "Medical Imaging & Radiology Analytics",
        description: "AI and analytics applied to medical imaging to improve diagnostic accuracy and optimize radiology workflow.",
        path: "/services/medical-imaging-radiology-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Radio size={14} /> <span>Imaging & Radiology Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Smarter Imaging. <span className={styles.highlight}>Faster Diagnosis.</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Apply AI and analytics to medical imaging to improve diagnostic accuracy, prioritize
              urgent cases, and optimize radiology workflow. Transform your radiology department into
              a high‑performance diagnostic engine.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Transform Your Radiology <ArrowRight size={16} />
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
                <span className={styles.statLabel}>Turnaround Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10-20%</span>
                <span className={styles.statLabel}>Accuracy Gain</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>40%</span>
                <span className={styles.statLabel}>Workflow Efficiency</span>
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
            <h2>Radiology is Overwhelmed — <span className={styles.highlight}>AI Can Help</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Increase in imaging volume over the past decade, outpacing radiologist workforce growth and driving burnout.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>15%</span>
                <p>Of clinically significant findings are initially missed — a major source of diagnostic error and litigation.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of radiologists report burnout, driven by high workload, after‑hours reading, and pressure to increase speed.</p>
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
                AI-Powered <span className={styles.highlight}>Imaging Insights</span>
              </h2>
              <p>
                Radiology departments face increasing volumes, shrinking turnaround times, and
                growing expectations for diagnostic accuracy. Traditional workflows are reaching
                their limits, and radiologist burnout is at crisis levels.
              </p>
              <p>
                Our Medical Imaging & Radiology Analytics service uses advanced AI to assist
                radiologists in detecting anomalies, prioritizing urgent findings, and improving
                diagnostic confidence. We integrate with your PACS and RIS to analyze image data,
                historical reports, and clinical outcomes in real‑time.
              </p>
              <p>
                Our AI models are trained on millions of images across multiple modalities — X‑ray,
                CT, MRI, ultrasound, mammography — to detect early signs of pathology, reduce
                missed findings, and streamline report generation. We provide explainable AI
                with heatmaps and visual overlays that build trust and facilitate review.
              </p>
              <p>
                Enhance diagnostic quality, reduce turnaround times, and improve patient outcomes
                — all while reducing radiologist burnout and improving job satisfaction.
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
                <Radio size={48} />
                <span>Medical Imaging Analytics</span>
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
                <h4>AI‑Assisted Detection Engine</h4>
                <p>Deep learning models that flag suspicious findings across modalities, with heatmaps and confidence scores.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Priority Triage & Worklist</h4>
                <p>Automated prioritization of studies based on clinical urgency, with real‑time escalation for critical findings.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Radiologist Performance Dashboard</h4>
                <p>Individualized scorecards tracking accuracy, volume, turnaround time, and peer comparison.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Workflow Optimization Insights</h4>
                <p>Actionable recommendations to reduce turnaround, balance workload, and eliminate bottlenecks.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Quality & Safety Reports</h4>
                <p>Quarterly reports on diagnostic accuracy, missed findings rate, and adherence to best practices.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Continuous Model Improvement</h4>
                <p>Ongoing retraining with new imaging data and outcome feedback to maintain and improve AI performance.</p>
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
            <h2>Ready to Transform Your Radiology Department?</h2>
            <p>
              Let's implement AI and analytics to enhance your imaging workflow and diagnostic
              accuracy. You'll deliver faster, more accurate diagnoses, reduce burnout, and
              set a new standard for imaging excellence.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Transform Your Radiology <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MedicalImagingAnalyticsPage;
