// src/pages/Services/ReportWritingSupport/ReportWritingSupportPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  PenTool,
  Layout,
  BarChart3,
  Users,
  CheckCircle,
  TrendingUp,
  Clock,
  Lightbulb,
  Target,
  Eye,
  BookOpen,
  ClipboardList,
  Zap,
  Star,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./ReportWritingSupportPage.module.css";
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

// ─── Report Writing Support Page ──────────────────────────────
const ReportWritingSupportPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Report Writing Support | Scape Data Solutions"
      description="Expert report writing support that turns your analysis into a compelling, clear, and confident story."
      path="/services/report-writing-support"
      schema={buildServiceSchema({
        name: "Report Writing Support",
        description: "Expert report writing support that turns your analysis into a compelling, clear, and confident story.",
        path: "/services/report-writing-support",
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
              <FileText size={14} /> <span>Report Writing Support</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Turn Your Data Into a <span className={styles.highlight}>Compelling Story</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              You've done the analysis — now let us help you present it with clarity, impact, and
              confidence. From research reports and technical documents to executive summaries and
              policy briefs, we transform results into narratives that inform and persuade.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Get Writing Support <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#how-we-help" className={styles.heroBtnSecondary}>
                  See How We Help <PenTool size={15} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>1,200+</span>
                <span className={styles.statLabel}>Reports Written</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>98%</span>
                <span className={styles.statLabel}>Approval Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.8/5</span>
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
              <h2>Write With <span className={styles.highlight}>Impact</span></h2>
              <p>
                Having great data is one thing — communicating it effectively is another. Many
                researchers, NGOs, and companies struggle to transform their analysis into clear,
                persuasive reports that stakeholders actually read and act on.
              </p>
              <p>
                Our report writing support bridges that gap. We work with you to structure your
                findings, craft compelling narratives, design effective visuals, and ensure your
                message lands with your target audience. Whether you need a full research report, a
                technical document, an executive summary, or a policy brief — we help you tell your
                story with clarity and conviction.
              </p>
              <p>
                We don't just edit grammar — we help you think through your arguments, interpret
                your results meaningfully, and present them in a way that drives decisions. Your
                ideas deserve to be heard, and we make sure they are.
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
                <PenTool size={48} />
                <span>Professional Report Writing</span>
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
            What We Support
          </motion.h2>

          <div className={styles.helpGrid}>
            {[
              {
                icon: <FileText size={22} />,
                title: "Research Reports",
                desc: "Full academic or applied research reports with clear methodology, findings, and conclusions.",
              },
              {
                icon: <Layout size={22} />,
                title: "Technical Documentation",
                desc: "Systematic reports, project documentation, and technical manuals.",
              },
              {
                icon: <BarChart3 size={22} />,
                title: "Data Interpretation & Narrative",
                desc: "We help you interpret your results and craft a compelling, evidence-based story.",
              },
              {
                icon: <Users size={22} />,
                title: "Executive Summaries",
                desc: "Concise, high-impact summaries that give decision-makers the key takeaways.",
              },
              {
                icon: <ClipboardList size={22} />,
                title: "Policy Briefs & Recommendations",
                desc: "Action-oriented reports that translate evidence into practical guidance.",
              },
              {
                icon: <Eye size={22} />,
                title: "Visualization & Presentation",
                desc: "Design effective tables, charts, and infographics that enhance understanding.",
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
            Report Types We Cover
          </motion.h2>

          <div className={styles.approachesGrid}>
            {[
              {
                title: "Academic & Thesis Reports",
                desc: "Chapters 4 & 5, research dissertations, and journal article drafts.",
                icon: <BookOpen size={26} />,
              },
              {
                title: "NGO & M&E Reports",
                desc: "Baseline/endline evaluations, impact assessments, and donor reports.",
                icon: <Target size={26} />,
              },
              {
                title: "Business & Corporate Reports",
                desc: "Market research reports, annual reviews, and internal analytics summaries.",
                icon: <TrendingUp size={26} />,
              },
              {
                title: "Policy Briefs & White Papers",
                desc: "Evidence-based policy documents, advocacy materials, and position papers.",
                icon: <FileText size={26} />,
              },
              {
                title: "Technical Data Reports",
                desc: "Detailed statistical reports with full methodology and interpretations.",
                icon: <BarChart3 size={26} />,
              },
              {
                title: "Executive Summaries",
                desc: "Concise, high-level overviews for busy leaders and decision-makers.",
                icon: <Layout size={26} />,
              },
            ].map((type, index) => (
              <motion.div
                key={index}
                className={styles.approachCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className={styles.approachIcon}>{type.icon}</div>
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
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
            Our Writing Process
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We discuss your findings, audience, goals, and preferred report format.",
              },
              {
                step: "02",
                title: "Outline & Structure",
                desc: "We create a detailed outline that organizes your arguments and evidence.",
              },
              {
                step: "03",
                title: "Drafting",
                desc: "We write the report with clear language, logical flow, and accurate data.",
              },
              {
                step: "04",
                title: "Visualization",
                desc: "We design charts, tables, and infographics that enhance understanding.",
              },
              {
                step: "05",
                title: "Review & Refine",
                desc: "We revise based on your feedback and ensure clarity and precision.",
              },
              {
                step: "06",
                title: "Final Polish",
                desc: "We proofread, format, and deliver a publication-ready document.",
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
            Why Choose Us?
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {[
              {
                icon: <Lightbulb size={18} />,
                title: "Clear, Accessible Language",
                desc: "We translate technical findings into plain language that any audience can understand.",
              },
              {
                icon: <CheckCircle size={18} />,
                title: "Data Accuracy",
                desc: "We ensure every number, statistic, and citation is accurate and properly contextualized.",
              },
              {
                icon: <Clock size={18} />,
                title: "Save Time",
                desc: "Stop wrestling with writing — we deliver polished reports while you focus on your work.",
              },
              {
                icon: <TrendingUp size={18} />,
                title: "Greater Impact",
                desc: "A well-written report gets read, remembered, and acted on — increasing your influence.",
              },
              {
                icon: <Target size={18} />,
                title: "Audience-Focused",
                desc: "We tailor every report to your specific audience — from experts to policymakers.",
              },
              {
                icon: <Star size={18} />,
                title: "Publication-Ready",
                desc: "We deliver documents that are polished, formatted, and ready for submission.",
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
            <h2>Ready to Turn Data Into a Powerful Report?</h2>
            <p>
              Let's discuss your project. We'll help you craft a report that communicates your
              findings with clarity, credibility, and impact — so your audience understands and acts.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Start Your Report <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ReportWritingSupportPage;