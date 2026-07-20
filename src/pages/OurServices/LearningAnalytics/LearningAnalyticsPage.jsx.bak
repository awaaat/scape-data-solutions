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
  GitBranch,
  Layers,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./LearningAnalyticsPage.module.css";
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
    title: "Curriculum Data Integration",
    desc: "We connect to your LMS, gradebooks, assessment platforms, and curriculum management systems. We capture granular data on instructional delivery, student engagement, assignment completion, and assessment performance across all courses and grade levels."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Effectiveness Measurement & Attribution",
    desc: "We use statistical modeling to isolate the impact of specific curricular approaches on student outcomes. We control for student demographics, prior achievement, and external factors to identify what truly drives learning gains."
  },
  {
    icon: <GitBranch size={22} />,
    title: "A/B Testing & Comparative Analysis",
    desc: "We enable rigorous comparison of different teaching methods, curricula, and instructional strategies. We identify which approaches work best for which student populations, enabling evidence-based decisions about curriculum adoption and design."
  },
  {
    icon: <Target size={22} />,
    title: "Learning Gap & Growth Analysis",
    desc: "We track student learning growth over time — not just proficiency at a single point. We identify where students are making progress and where they are stagnating, enabling targeted instructional adjustments."
  },
  {
    icon: <Layers size={22} />,
    title: "Teacher & School Effectiveness",
    desc: "We analyze the relationship between curriculum implementation and student outcomes at the teacher and school level. We identify best practices and support professional development that enhances instructional quality."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Monitoring & Reporting",
    desc: "We provide real‑time dashboards that track curriculum effectiveness and learning outcomes. We generate reports for teachers, curriculum leaders, and administrators, enabling rapid iteration and improvement."
  },
];

const features = [
  {
    icon: <BookOpen size={22} />,
    title: "Curriculum Impact Analysis",
    desc: "Quantify the impact of specific curricula, instructional approaches, and interventions on student learning outcomes, controlling for student characteristics."
  },
  {
    icon: <Target size={22} />,
    title: "Learning Growth & Value-Added Modeling",
    desc: "Measure student learning growth over time and attribute gains to instruction, enabling fair and meaningful evaluation of curriculum effectiveness."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Achievement Gap & Equity Analysis",
    desc: "Identify disparities in learning outcomes across student subgroups and evaluate whether curricula are closing or widening gaps."
  },
  {
    icon: <Users size={22} />,
    title: "Teacher & School Effectiveness Scores",
    desc: "Compare curriculum implementation and outcomes across teachers and schools, identifying best practices and opportunities for improvement."
  },
  {
    icon: <Activity size={22} />,
    title: "Engagement & Participation Analytics",
    desc: "Analyze student engagement with curriculum materials — time on task, completion rates, and interaction patterns — to identify what captures student interest."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Curriculum Dashboards",
    desc: "Tailored views for curriculum leaders, instructional coaches, and administrators, with drill‑down to course, teacher, and student levels."
  },
];

const benefits = [
  {
    icon: <GraduationCap size={18} />,
    title: "Improved Student Learning",
    desc: "Identify and scale the curricula and instructional approaches that deliver the strongest learning gains for students."
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Evidence‑Based Decision Making",
    desc: "Replace intuition with data when making decisions about curriculum adoption, resource allocation, and professional development."
  },
  {
    icon: <Target size={18} />,
    title: "Equity & Inclusion",
    desc: "Ensure that all students, regardless of background, have access to curricula that help them succeed."
  },
  {
    icon: <Zap size={18} />,
    title: "Efficient Resource Allocation",
    desc: "Direct resources — time, money, and talent — toward the curricula and approaches that have the greatest impact on student outcomes."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Accountability & Transparency",
    desc: "Demonstrate the effectiveness of your curriculum to stakeholders — parents, board members, and funders — with clear, evidence‑based reports."
  },
  {
    icon: <Award size={18} />,
    title: "Continuous Improvement",
    desc: "Build a culture of instructional improvement where curriculum is continuously refined based on evidence of what works."
  },
];

const LearningAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Curriculum Effectiveness & Learning Analytics | Scape Data Solutions"
      description="AI-powered analytics that measure instructional impact, identify best practices, and close achievement gaps."
      path="/services/curriculum-effectiveness-learning-analytics"
      schema={buildServiceSchema({
        name: "Curriculum Effectiveness & Learning Analytics",
        description: "AI-powered analytics that measure instructional impact, identify best practices, and close achievement gaps.",
        path: "/services/curriculum-effectiveness-learning-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <BookOpen size={14} /> <span>Curriculum Effectiveness & Learning Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Teach What <span className={styles.highlight}>Works</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that measures instructional impact, identifies best practices, and
              closes achievement gaps. Ensure every student has access to curricula that drive success.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Improve Curriculum Impact <ArrowRight size={16} />
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
                <span className={styles.statValue}>12%</span>
                <span className={styles.statLabel}>Test Score Improvement</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20%</span>
                <span className={styles.statLabel}>Achievement Gap Closure</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.5/5</span>
                <span className={styles.statLabel}>Teacher Satisfaction</span>
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
            <h2>Curriculum Impact is <span className={styles.highlight}>Hard to Measure</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of teachers report that they lack actionable data on the effectiveness of the curricula they use, relying on intuition rather than evidence.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>45%</span>
                <p>Of curriculum decisions are made without rigorous analysis of student outcomes, leading to wasted resources and missed opportunities.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Of achievement gaps can be attributed to inequitable access to effective curricula and instruction — a problem that is both solvable and urgent.</p>
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
                <span className={styles.highlight}>Evidence-Based</span> Curriculum Decisions
              </h2>
              <p>
                Choosing the right curriculum is one of the most consequential decisions an
                educational institution can make. Yet many schools and districts operate without
                reliable data on what actually drives student learning. They adopt curricula based
                on vendor claims, tradition, or intuition — not evidence.
              </p>
              <p>
                Our Curriculum Effectiveness & Learning Analytics service provides rigorous,
                data‑driven answers to the most important questions: Which curricula are working?
                For which students? Under what conditions? What teaching practices amplify impact?
              </p>
              <p>
                We use advanced statistical methods to isolate the impact of curricula from other
                factors — student background, prior achievement, school context. We identify what
                works, for whom, and under what conditions, enabling evidence‑based decisions about
                curriculum adoption, adaptation, and professional development.
              </p>
              <p>
                We also track learning growth over time, identify achievement gaps, and monitor the
                equity of curriculum access. Ultimately, we help you ensure that every student has
                access to curricula that help them thrive.
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
                <BookOpen size={48} />
                <span>Curriculum Effectiveness Analytics</span>
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
                <h4>Curriculum Impact Report</h4>
                <p>Rigorous analysis of the impact of specific curricula and instructional approaches on student learning outcomes, controlling for student characteristics.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Learning Growth & Value-Added Dashboard</h4>
                <p>Real‑time tracking of student growth over time, with attribution to instruction and curriculum, enabling fair evaluation.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Achievement Gap & Equity Analysis</h4>
                <p>Detailed breakdown of performance by student subgroups, with recommendations for closing gaps and ensuring equitable access.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Teacher & School Effectiveness Scores</h4>
                <p>Comparative analysis of curriculum implementation and outcomes across teachers and schools, identifying best practices.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Engagement & Participation Analysis</h4>
                <p>Analysis of student engagement with curriculum materials, identifying what captures student interest and drives persistence.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Curriculum Dashboards</h4>
                <p>Tailored dashboards for curriculum leaders, instructional coaches, and administrators, with drill‑down to course, teacher, and student levels.</p>
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
            <h2>Ready to Teach What Works?</h2>
            <p>
              Let's analyze your curriculum data to identify what drives student learning, close
              achievement gaps, and build an evidence‑based approach to instructional improvement.
              Every student deserves access to curricula that help them succeed.
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

export default LearningAnalyticsPage;
