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
  MessageCircle,
  Star,
  Smile,
  Frown,
  Award,
  Zap,
  AlertCircle,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./PatientExperienceSatisfactionAnalyticsPage.module.css";
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
    title: "Data Collection & Aggregation",
    desc: "We gather patient feedback from all available sources: post-visit surveys, online reviews (Google, Healthgrades, etc.), social media mentions, call center transcripts, and patient complaints. We structure this unstructured data into a unified, analyzable format."
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Sentiment & Emotion Analysis",
    desc: "Using advanced natural language processing (NLP), we classify every piece of feedback as positive, negative, or neutral, and we detect underlying emotions like frustration, gratitude, anxiety, or satisfaction. We go beyond sentiment to capture nuance."
  },
  {
    icon: <FileText size={22} />,
    title: "Theme Extraction & Topic Modeling",
    desc: "We identify recurring themes across patient feedback — wait times, communication, staff empathy, cleanliness, pain management, and more. We discover what patients truly value and what triggers dissatisfaction, even if they don't explicitly state it."
  },
  {
    icon: <Target size={22} />,
    title: "Segmentation & Drill-Down",
    desc: "We break down satisfaction by department, provider, service line, and even time of day. We identify which teams are excelling and which need support, enabling targeted improvement efforts that address specific pain points."
  },
  {
    icon: <Activity size={22} />,
    title: "Action Planning & Prioritization",
    desc: "We translate insights into a prioritized action plan. We help you focus on changes that will have the greatest impact on patient experience, with clear steps, owners, and timelines. We also predict the likely satisfaction gain from each intervention."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Outcome Tracking & Continuous Improvement",
    desc: "We monitor satisfaction trends over time and measure the impact of your improvement efforts. We provide alerts when satisfaction dips and refresh your strategy based on the latest feedback, creating a cycle of continuous improvement."
  },
];

const features = [
  {
    icon: <Star size={22} />,
    title: "Real-Time Sentiment Dashboard",
    desc: "View patient satisfaction metrics in real-time, with drill-down by department, provider, and service line. See trends and outliers at a glance."
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Unstructured Feedback Mining",
    desc: "Extract insights from free-text comments, social media, and call transcripts. Discover themes and topics that surveys alone miss."
  },
  {
    icon: <Users size={22} />,
    title: "Provider & Team Performance Scores",
    desc: "Compare satisfaction scores by individual provider and care team. Identify top performers and those needing support."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Predictive Satisfaction Modeling",
    desc: "Predict which patients are likely to give low scores based on their journey and interaction patterns. Intervene proactively."
  },
  {
    icon: <Clock size={22} />,
    title: "Alerting & Anomaly Detection",
    desc: "Get notified when satisfaction drops below expected thresholds. Detect issues before they become systemic."
  },
  {
    icon: <Eye size={22} />,
    title: "Competitive Benchmarking",
    desc: "Compare your satisfaction scores against regional and national peers. Understand your standing in the market."
  },
];

const benefits = [
  {
    icon: <Award size={18} />,
    title: "Higher HCAHPS & CAHPS Scores",
    desc: "Improve your publicly reported scores and boost reimbursement rates with targeted interventions that address the domains that matter most."
  },
  {
    icon: <Heart size={18} />,
    title: "Enhanced Patient Loyalty & Retention",
    desc: "Patients who feel heard and valued are more likely to return, refer others, and stick with your organization for their long-term care."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Improved Financial Performance",
    desc: "Higher satisfaction correlates with higher margins, increased market share, and stronger payer contracts. Turn patient experience into a competitive advantage."
  },
  {
    icon: <Smile size={18} />,
    title: "Boosted Staff Morale & Engagement",
    desc: "Understanding what drives patient satisfaction helps clinicians and staff improve their interactions. Positive feedback reinforces great care."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Issue Resolution",
    desc: "Detect and address problems early — before they escalate to complaints or reviews. Proactive outreach turns detractors into promoters."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Data-Driven Culture",
    desc: "Build a culture where patient experience is measured, discussed, and continuously improved. Empower teams with real-time feedback."
  },
];

const PatientExperienceSatisfactionAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Patient Experience & Satisfaction Analytics | Scape Data Solutions"
      description="AI and NLP-powered analysis of patient feedback that identifies drivers of satisfaction and improves HCAHPS scores."
      path="/services/patient-experience-satisfaction-analytics"
      schema={buildServiceSchema({
        name: "Patient Experience & Satisfaction Analytics",
        description: "AI and NLP-powered analysis of patient feedback that identifies drivers of satisfaction and improves HCAHPS scores.",
        path: "/services/patient-experience-satisfaction-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Star size={14} /> <span>Patient Experience Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Deliver Care That <span className={styles.highlight}>Patients Love</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Use AI and natural language processing to analyze patient feedback, identify drivers of
              satisfaction, and improve HCAHPS scores. Build a patient‑centric culture that drives
              loyalty, referrals, and financial performance.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Start Improving Experience <ArrowRight size={16} />
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
                <span className={styles.statValue}>10-20 pts</span>
                <span className={styles.statLabel}>HCAHPS Gain</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>90%+</span>
                <span className={styles.statLabel}>Feedback Coverage</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30-50%</span>
                <span className={styles.statLabel}>Detractor Reduction</span>
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
            <span className={styles.problemLabel}>The Problem</span>
            <h2>Patient Experience is a <span className={styles.highlight}>Strategic Imperative</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$1.7B</span>
                <p>Lost annually by hospitals with low HCAHPS scores due to Medicare penalties and reduced market share.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>4x</span>
                <p>More likely patients are to recommend a hospital with excellent communication — yet communication is the most common complaint.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>70%</span>
                <p>Of patient feedback is unstructured — hidden in free‑text comments, reviews, and call transcripts — but rarely analyzed systematically.</p>
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
                Listen to Your <span className={styles.highlight}>Patients</span> — At Scale
              </h2>
              <p>
                Patient experience is more than a metric — it's a reflection of your organization's
                culture, quality, and commitment to patient‑centered care. Yet most healthcare
                providers rely on surveys that capture only a fraction of patient sentiment and
                often miss the real story.
              </p>
              <p>
                Our Patient Experience Analytics service mines patient feedback from every
                available source: surveys, online reviews, social media, call center transcripts,
                and patient complaints. We use natural language processing to uncover themes,
                sentiment, and emerging issues that surveys alone miss.
              </p>
              <p>
                We provide actionable insights for improving communication, care coordination, and
                the overall patient journey. We help you target the specific domains that drive
                HCAHPS scores — communication with nurses, pain management, discharge information,
                and more — with precision and confidence.
              </p>
              <p>
                Boost your reputation, improve patient loyalty, and achieve the financial benefits
                of being a patient‑preferred provider.
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
                <MessageCircle size={48} />
                <span>Patient Experience Analytics</span>
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
                <h4>Comprehensive Sentiment Dashboard</h4>
                <p>Real-time visualization of satisfaction trends, sentiment distribution, and thematic drivers across your organization.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Provider & Department Scorecards</h4>
                <p>Individualized reports for each clinician and care team, highlighting strengths and improvement opportunities.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Actionable Improvement Plan</h4>
                <p>Prioritized list of interventions with predicted impact on satisfaction scores, complete with timelines and owners.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Alert & Escalation System</h4>
                <p>Automated notifications when satisfaction drops, negative sentiment spikes, or specific themes require urgent attention.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Operational Dashboards</h4>
                <p>Tailored views for leadership, quality teams, and frontline managers to track progress and drive accountability.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Quarterly Impact Reports</h4>
                <p>Quantified analysis of the financial and operational benefits achieved through improved patient experience.</p>
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
            <h2>Ready to Transform Patient Experience?</h2>
            <p>
              Let's analyze your patient feedback and build a satisfaction analytics system that
              drives meaningful improvements. You'll gain the insights you need to deliver care
              that patients love — and the data to prove it.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Start Improving <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PatientExperienceSatisfactionAnalyticsPage;
