// src/pages/Services/ResearchMethodologySupport/ResearchMethodologySupportPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Search,
  ClipboardList,
  BarChart3,
  Users,
  PieChart,
  FileText,
  CheckCircle,
  Lightbulb,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Clock,
  MessageSquare,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./ResearchMethodologySupportPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── Variants ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Research Methodology Consulting Page ──────────────────────
const ResearchMethodologySupportPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Research Methodology Consulting | Scape Data Solutions"
      description="Expert guidance on research design, methodology selection, sampling strategies, and questionnaire development."
      path="/services/research-methodology-consulting"
      schema={buildServiceSchema({
        name: "Research Methodology Consulting",
        description: "Expert guidance on research design, methodology selection, sampling strategies, and questionnaire development.",
        path: "/services/research-methodology-consulting",
      })}
    />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <BookOpen size={14} /> <span>Research Methodology Consulting</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Design Your <span className={styles.highlight}>Research</span> With Confidence
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Get expert guidance on research design, methodology selection, sampling strategies,
              and questionnaire development. We help you build a solid foundation so your study
              delivers valid, reliable, and actionable results.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Get Expert Guidance <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#how-we-help" className={styles.heroBtnSecondary}>
                  See How We Help <Search size={15} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>500+</span>
                <span className={styles.statLabel}>Research Projects Advised</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>97%</span>
                <span className={styles.statLabel}>Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.9/5</span>
                <span className={styles.statLabel}>Client Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── OVERVIEW ────────────────────────────────────────────── */}
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
              <h2>Get Your <span className={styles.highlight}>Methodology</span> Right</h2>
              <p>
                A flawed research design can undermine even the most brilliant idea. Our consulting
                service helps you make the right decisions from the start — whether you're a student
                preparing a thesis, a researcher designing a study, or an organization planning an
                impact evaluation.
              </p>
              <p>
                We guide you through every step: defining your research question, choosing between
                qualitative and quantitative approaches, selecting sampling methods, designing
                questionnaires, and ensuring ethical compliance. We also help you align your
                methodology with your analysis plan, so everything connects seamlessly.
              </p>
              <p>
                We don't just give generic advice — we tailor our recommendations to your specific
                context, discipline, and resources. Our goal is to equip you with a clear, defensible
                methodology that your supervisor, committee, or stakeholders will approve.
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
                <ClipboardList size={48} />
                <span>Research Design Blueprint</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE HELP ──────────────────────────────────────────── */}
      <section className={styles.helpSection} id="how-we-help">
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            How We Help You
          </motion.h2>

          <div className={styles.helpGrid}>
            {[
              {
                icon: <Target size={22} />,
                title: "Research Question Formulation",
                desc: "Refine your broad ideas into precise, researchable questions and hypotheses.",
              },
              {
                icon: <BarChart3 size={22} />,
                title: "Methodology Selection",
                desc: "Choose between qualitative, quantitative, or mixed methods with confidence.",
              },
              {
                icon: <Users size={22} />,
                title: "Sampling Strategy",
                desc: "Determine sample size, sampling technique, and recruitment approach.",
              },
              {
                icon: <FileText size={22} />,
                title: "Questionnaire & Instrument Design",
                desc: "Design valid, reliable surveys, interview guides, and observation protocols.",
              },
              {
                icon: <Shield size={22} />,
                title: "Ethics & Compliance",
                desc: "Ensure your study meets ethical standards and institutional requirements.",
              },
              {
                icon: <TrendingUp size={22} />,
                title: "Alignment with Analysis",
                desc: "Ensure your methodology supports your planned statistical or qualitative analysis.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.helpCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
              >
                <div className={styles.helpIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACHES ───────────────────────────────────────────── */}
      <section className={styles.approachesSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Research Approaches We Support
          </motion.h2>

          <div className={styles.approachesGrid}>
            {[
              {
                title: "Quantitative Research",
                desc: "Surveys, experiments, correlational studies, and statistical modeling.",
                icon: <BarChart3 size={26} />,
              },
              {
                title: "Qualitative Research",
                desc: "Interviews, focus groups, ethnography, case studies, and content analysis.",
                icon: <MessageSquare size={26} />,
              },
              {
                title: "Mixed Methods",
                desc: "Combine quantitative and qualitative approaches for deeper insights.",
                icon: <PieChart size={26} />,
              },
              {
                title: "Literature Reviews",
                desc: "Systematic reviews, meta-analyses, and scoping reviews.",
                icon: <BookOpen size={26} />,
              },
              {
                title: "Experimental Design",
                desc: "RCTs, quasi-experiments, and factorial designs.",
                icon: <ClipboardList size={26} />,
              },
              {
                title: "Survey Research",
                desc: "Cross-sectional, longitudinal, and online/offline survey designs.",
                icon: <Search size={26} />,
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                className={styles.approachCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className={styles.approachIcon}>{approach.icon}</div>
                <h3>{approach.title}</h3>
                <p>{approach.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Our Consulting Process
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                step: "01",
                title: "Initial Consultation",
                desc: "We discuss your research goals, discipline, and constraints.",
              },
              {
                step: "02",
                title: "Literature & Context Review",
                desc: "We review relevant literature to inform your design choices.",
              },
              {
                step: "03",
                title: "Methodology Proposal",
                desc: "We present a tailored methodology plan with clear rationale.",
              },
              {
                step: "04",
                title: "Instrument Development",
                desc: "We help you create or refine your data collection instruments.",
              },
              {
                step: "05",
                title: "Ethics Review Support",
                desc: "We assist with ethics applications and compliance documentation.",
              },
              {
                step: "06",
                title: "Final Review & Handover",
                desc: "We review your full design and provide a final consultation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.processCard}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className={styles.processStep}>{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ────────────────────────────────────────────── */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Why Work With Us?
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {[
              {
                icon: <Lightbulb size={18} />,
                title: "Expert Guidance",
                desc: "Our consultants have years of academic and applied research experience.",
              },
              {
                icon: <CheckCircle size={18} />,
                title: "Tailored Solutions",
                desc: "We adapt to your field, resources, and timeline — no cookie‑cutter advice.",
              },
              {
                icon: <Clock size={18} />,
                title: "Save Time",
                desc: "Avoid common pitfalls and costly redesigns by getting it right first time.",
              },
              {
                icon: <TrendingUp size={18} />,
                title: "Increase Quality",
                desc: "Rigorous methodology leads to credible, publishable results.",
              },
              {
                icon: <Users size={18} />,
                title: "Supervisor/Committee Support",
                desc: "We help you build a case that will satisfy your advisors.",
              },
              {
                icon: <Zap size={18} />,
                title: "Confidence & Clarity",
                desc: "Walk into your study with a clear plan and peace of mind.",
              },
            ].map((benefit, index) => (
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

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Build a Solid Research Foundation?</h2>
            <p>
              Let's discuss your study. We'll help you design a methodology that produces credible,
              impactful results — and gives you confidence every step of the way.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Start Your Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ResearchMethodologySupportPage;