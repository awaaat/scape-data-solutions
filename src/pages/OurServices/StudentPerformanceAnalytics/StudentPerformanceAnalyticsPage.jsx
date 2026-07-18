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
  BookOpen,
  GraduationCap,
  AlertCircle,
  Award,
  Zap,
  UserCheck,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./StudentPerformanceAnalyticsPage.module.css";
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
    title: "Data Integration & Student 360",
    desc: "We connect to your Student Information System (SIS), Learning Management System (LMS), attendance records, and behavioral data to build a comprehensive, unified profile for each student — including academic performance, engagement metrics, and social-emotional indicators."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Predictive Modeling & Early Warning",
    desc: "We use machine learning to predict student outcomes — graduation likelihood, course completion, and at‑risk indicators. We flag students who are falling behind weeks or months in advance, enabling proactive intervention before small issues become major problems."
  },
  {
    icon: <Target size={22} />,
    title: "Personalized Learning Paths",
    desc: "We identify each student's strengths, weaknesses, and learning styles. We recommend tailored interventions — tutoring, enrichment, schedule adjustments, or specific resources — to optimize each student's learning journey."
  },
  {
    icon: <Users size={22} />,
    title: "Cohort & Trend Analysis",
    desc: "We track performance across cohorts, grade levels, and demographic groups. We identify achievement gaps, monitor progress toward goals, and evaluate the effectiveness of instructional programs and interventions."
  },
  {
    icon: <Activity size={22} />,
    title: "Engagement & Participation Monitoring",
    desc: "We analyze student engagement — attendance, LMS activity, participation in class, and extracurricular involvement. We identify students who are disengaged and recommend strategies to re‑engage them before they fall behind."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Impact Reporting",
    desc: "We provide real‑time dashboards that track student progress and intervention effectiveness. We generate reports for teachers, administrators, and parents, ensuring transparency and accountability."
  },
];

const features = [
  {
    icon: <GraduationCap size={22} />,
    title: "Graduation & College Readiness Prediction",
    desc: "Predict student likelihood of graduation, college enrollment, and career readiness using machine learning models that incorporate academic, behavioral, and demographic data."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Early Warning System",
    desc: "Automated alerts for students showing signs of academic or behavioral decline, enabling timely intervention and support."
  },
  {
    icon: <Target size={22} />,
    title: "Personalized Intervention Plans",
    desc: "AI‑generated recommendations for tutoring, mentoring, counseling, or schedule adjustments tailored to each student's needs."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Achievement Gap & Equity Analytics",
    desc: "Identify and monitor achievement gaps across student subgroups — by race, socioeconomic status, English language proficiency, and special education status."
  },
  {
    icon: <Users size={22} />,
    title: "Teacher & School Performance Dashboards",
    desc: "Aggregated views for educators and administrators, with drill‑down to individual student and classroom levels."
  },
  {
    icon: <Eye size={22} />,
    title: "Parent & Student Portals",
    desc: "Provide parents and students with access to performance data, progress reports, and personalized learning recommendations."
  },
];

const benefits = [
  {
    icon: <GraduationCap size={18} />,
    title: "Higher Graduation Rates",
    desc: "Identify at‑risk students early and provide targeted support, increasing graduation rates by 15‑25%."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Improved Student Outcomes",
    desc: "Boost test scores, GPA, and course completion rates with personalized learning interventions."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Reduced Dropout Rates",
    desc: "Prevent student dropouts by identifying disengagement early and implementing effective re‑engagement strategies."
  },
  {
    icon: <Target size={18} />,
    title: "Equity & Inclusion",
    desc: "Close achievement gaps by ensuring that all students, regardless of background, receive the support they need to succeed."
  },
  {
    icon: <Zap size={18} />,
    title: "Efficient Resource Allocation",
    desc: "Direct resources — tutoring, counseling, enrichment — to the students who need them most, maximizing impact."
  },
  {
    icon: <Award size={18} />,
    title: "Data‑Driven Culture",
    desc: "Build a school or district culture where data informs instruction, support, and policy decisions at every level."
  },
];

const StudentPerformanceAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Student Performance Analytics | Scape Data Solutions"
      description="AI-powered analytics that identify at-risk students early and personalize learning paths."
      path="/services/student-performance-analytics"
      schema={buildServiceSchema({
        name: "Student Performance Analytics",
        description: "AI-powered analytics that identify at-risk students early and personalize learning paths.",
        path: "/services/student-performance-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <GraduationCap size={14} /> <span>Student Performance Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Predict. <span className={styles.highlight}>Personalize.</span> <span className={styles.highlight}>Succeed.</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that identifies at‑risk students early, personalizes learning paths,
              and improves graduation rates. Transform your educational institution into a data‑driven
              success engine.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Improve Student Outcomes <ArrowRight size={16} />
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
                <span className={styles.statValue}>94%</span>
                <span className={styles.statLabel}>Prediction Accuracy</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15-25%</span>
                <span className={styles.statLabel}>Graduation Rate Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Dropout Reduction</span>
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
            <h2>Student Success is <span className={styles.highlight}>Hard to Predict</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>20%</span>
                <p>Of students drop out of high school — a statistic that has remained stubbornly high for decades, despite significant investment.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of educators report that they lack the data and tools needed to identify at‑risk students early enough to intervene effectively.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>45%</span>
                <p>Of schools use manual processes to track student progress — leaving them reactive rather than proactive in addressing challenges.</p>
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
                Every Student <span className={styles.highlight}>Deserves</span> to Succeed
              </h2>
              <p>
                Students don't fail overnight — they disengage gradually, with warning signs appearing
                weeks or months before they fall behind. Yet most educational institutions lack the
                tools to detect these early signals, leaving them reactive rather than proactive.
              </p>
              <p>
                Our Student Performance Analytics service uses AI and machine learning to predict
                student outcomes with high accuracy. We analyze academic performance, attendance,
                engagement, and behavioral data to identify students at risk of falling behind.
              </p>
              <p>
                We provide early warning alerts, personalized intervention recommendations, and
                actionable insights for teachers, counselors, and administrators. We help you
                create personalized learning paths that address each student's unique needs and
                strengths.
              </p>
              <p>
                Ultimately, we help you build a culture of student success — where every student
                receives the support they need to graduate, pursue higher education, and thrive.
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
                <GraduationCap size={48} />
                <span>Student Performance Analytics</span>
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
                <h4>Student Performance Dashboard</h4>
                <p>Real‑time visibility into student progress, risk levels, and engagement metrics across all grade levels and subjects.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Early Warning & Intervention System</h4>
                <p>Automated alerts for at‑risk students, with personalized intervention recommendations for each student.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Graduation & Readiness Predictions</h4>
                <p>Machine learning forecasts of graduation likelihood, college readiness, and career preparedness.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Achievement Gap & Equity Analysis</h4>
                <p>Detailed breakdowns of performance by demographic subgroups, with actionable strategies to close gaps.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Teacher & School Performance Dashboards</h4>
                <p>Aggregated views for educators and administrators, enabling data‑driven instruction and resource allocation.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Parent & Student Engagement Portals</h4>
                <p>Accessible reports and progress tracking for parents and students, promoting collaboration and accountability.</p>
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
            <h2>Ready to Transform Student Outcomes?</h2>
            <p>
              Let's build a student performance analytics system that helps you identify at‑risk
              students early, personalize learning, and improve graduation rates. Every student
              deserves the opportunity to succeed.
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

export default StudentPerformanceAnalyticsPage;
