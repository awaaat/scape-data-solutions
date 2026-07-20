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
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./ReadmissionRiskPredictionPage.module.css";
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
  { icon: <Database size={22} />, title: "Data Integration", desc: "EHR, claims, social determinants, and patient-reported data." },
  { icon: <Target size={22} />, title: "Risk Scoring", desc: "Each patient receives a readmission probability score." },
  { icon: <BarChart3 size={22} />, title: "Driver Analysis", desc: "Identify the key factors driving readmission risk." },
  { icon: <Heart size={22} />, title: "Intervention Recommendations", desc: "Actionable care plans for high-risk patients." },
  { icon: <Activity size={22} />, title: "Outcome Tracking", desc: "Monitor readmission rates and model performance." },
  { icon: <TrendingUp size={22} />, title: "Continuous Learning", desc: "Models improve with new patient data." },
];

const features = [
  { icon: <Shield size={22} />, title: "Early Warning System", desc: "Flag high-risk patients at discharge." },
  { icon: <Clock size={22} />, title: "30-Day Prediction", desc: "Accurate forecasts of readmission probability." },
  { icon: <Eye size={22} />, title: "Explainable AI", desc: "Understand the reasons behind each risk score." },
  { icon: <Target size={22} />, title: "Actionable Insights", desc: "Recommended interventions for each patient." },
  { icon: <BarChart3 size={22} />, title: "Population Analytics", desc: "Aggregate trends and hospital-level performance." },
  { icon: <FileText size={22} />, title: "Integration", desc: "Works with your EHR and care management systems." },
];

const benefits = [
  { icon: <Shield size={18} />, title: "Reduce Readmissions", desc: "Cut 30-day readmissions by up to 30%." },
  { icon: <DollarSign size={18} />, title: "Save Costs", desc: "Avoid Medicare penalties and reduce unnecessary hospitalizations." },
  { icon: <Heart size={18} />, title: "Improve Outcomes", desc: "Better care transitions and patient follow-up." },
  { icon: <CheckCircle size={18} />, title: "Value-Based Care", desc: "Demonstrate quality performance to payers." },
  { icon: <Clock size={18} />, title: "Early Intervention", desc: "Intervene before complications arise." },
  { icon: <Users size={18} />, title: "Patient Satisfaction", desc: "Better discharge planning leads to happier patients." },
];

const ReadmissionRiskPredictionPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Readmission Risk Prediction | Scape Data Solutions"
      description="AI-powered readmission risk prediction that identifies patients at high risk of 30-day readmission."
      path="/services/readmission-risk-prediction"
      schema={buildServiceSchema({
        name: "Readmission Risk Prediction",
        description: "AI-powered readmission risk prediction that identifies patients at high risk of 30-day readmission.",
        path: "/services/readmission-risk-prediction",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Heart size={14} /> <span>Readmission Risk Prediction</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Predict. <span className={styles.highlight}>Prevent.</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered readmission risk prediction that identifies patients at high risk of 30-day
              readmission. Intervene early, improve outcomes, and reduce penalties.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Get Started <ArrowRight size={16} />
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
                <span className={styles.statLabel}>Readmission Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>92%</span>
                <span className={styles.statLabel}>Prediction Accuracy</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20%</span>
                <span className={styles.statLabel}>Cost Savings</span>
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
                Stop <span className={styles.highlight}>Readmissions</span> Before They Happen
              </h2>
              <p>
                Hospital readmissions are costly and often preventable. Our Readmission Risk Prediction
                service uses machine learning to analyze patient data - demographics, clinical history,
                labs, medications, and social determinants - to identify those most likely to return
                within 30 days.
              </p>
              <p>
                We flag at-risk patients at discharge, enabling care teams to schedule follow-ups, adjust
                medications, and connect patients with community resources. Our models continuously learn
                from outcomes, improving accuracy over time.
              </p>
              <p>
                Reduce readmission penalties, improve patient outcomes, and demonstrate value-based care
                success with our predictive insights.
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
                <Heart size={48} />
                <span>Readmission Risk Prediction</span>
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
            How It Works
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
            <h2>Ready to Reduce Readmissions?</h2>
            <p>
              Let's build a readmission prediction model that helps you identify at-risk patients early
              and improve care transitions.
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

export default ReadmissionRiskPredictionPage;
