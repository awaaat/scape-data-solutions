// src/components/ServiceTemplate/ServiceContentPage.jsx
//
// Shared template for all "OurServices" pages. One component, driven by
// a per-service content object (see src/data/serviceContent/*.js), instead
// of 113 hand-copied files. Matches the design system established by
// DataCleaningPage.jsx: hero -> audience chips -> problem statement ->
// offerings grid -> workflow steps -> why-us -> FAQ -> final CTA.
//
// USAGE (in each thin per-route page file):
//
//   import ServiceContentPage from "../../../components/ServiceTemplate/ServiceContentPage";
//   import { dataEngineering } from "../../../data/serviceContent/tier1";
//   export default function DataEngineeringPage() {
//     return <ServiceContentPage {...dataEngineering} />;
//   }

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, ChevronDown, Users, Sparkles } from "lucide-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SEO from "../SEO/SEO";
import { fadeUp, staggerContainer, VIEW_ONCE } from "../../utils/animations";
import { buildServiceSchema } from "../../utils/serviceSchema";
import styles from "./ServiceContentPage.module.css";

const Reveal = ({ children, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
};

/**
 * @param {string} slug - URL slug, e.g. "data-engineering" (path becomes /services/{slug})
 * @param {string} name - Display name, e.g. "Data Engineering"
 * @param {string} nameHighlight - Word(s) within `name` to render in accent color (must be a substring of name)
 * @param {string} badge - Short eyebrow text above the H1, e.g. "For Growing Data Teams"
 * @param {string} heroSub - One-sentence sub-headline under the H1
 * @param {string} heroQuote - Short italicized "voice of customer" line
 * @param {{value:string,label:string}[]} stats - Exactly 3 hero stat blocks
 * @param {string[]} audience - Who this is for, e.g. ["Enterprises","Startups","Healthcare Providers"]
 * @param {string[]} problem - 2 paragraphs describing the problem this service solves
 * @param {string[]} offerings - 4-6 bullet items for "What's Included"
 * @param {string[]} tools - Tool/tech tags, e.g. ["Python","Airflow","Snowflake"]
 * @param {{title:string,description:string}[]} workflow - Exactly 4 "How It Works" steps
 * @param {string[]} whyUs - 4 bullet reasons to choose Scape Data Solutions for this service
 * @param {{q:string,a:string}[]} faqs - 4-6 FAQ pairs
 * @param {string} metaDescription - 150-160 char SEO meta description
 * @param {string} serviceType - Category label for Schema.org (e.g. "Data Engineering")
 */
const ServiceContentPage = ({
  slug,
  name,
  nameHighlight,
  badge,
  heroSub,
  heroQuote,
  stats,
  audience,
  problem,
  offerings,
  tools,
  workflow,
  whyUs,
  faqs,
  metaDescription,
  serviceType,
}) => {
  const path = `/services/${slug}`;
  const schema = buildServiceSchema({
    name,
    description: metaDescription,
    path,
    serviceType: serviceType || "Data Analytics",
  });

  const titleParts = nameHighlight
    ? name.split(nameHighlight)
    : [name, ""];

  return (
    <>
      <SEO
        title={`${name} | Scape Data Solutions`}
        description={metaDescription}
        path={path}
        schema={schema}
      />
      <Navbar />

      <main className={styles.page}>
        {/* ── Hero ── */}
        <section className={styles.heroSection}>
          <div className={styles.heroGradient} />
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className={styles.heroBadge} variants={fadeUp}>
              <Sparkles size={13} /> {badge}
            </motion.span>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              {titleParts[0]}
              {nameHighlight && (
                <span className={styles.highlight}>{nameHighlight}</span>
              )}
              {titleParts[1]}
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              {heroSub}
            </motion.p>
            {heroQuote && (
              <motion.p className={styles.heroQuote} variants={fadeUp}>
                "{heroQuote}"
              </motion.p>
            )}
            <motion.div className={styles.heroStats} variants={fadeUp}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statBlock}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link to="/contact" className={styles.ctaButton}>
                Get Started <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Who it's for ── */}
        <Reveal className={styles.audienceSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            Who This Is For
          </motion.h2>
          <div className={styles.audienceGrid}>
            {audience.map((a) => (
              <motion.div key={a} variants={fadeUp} className={styles.audienceChip}>
                <Users size={15} /> {a}
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Problem statement ── */}
        <Reveal className={styles.problemSection}>
          {problem.map((p, i) => (
            <motion.p key={i} variants={fadeUp} className={styles.problemText}>
              {p}
            </motion.p>
          ))}
        </Reveal>

        {/* ── Offerings ── */}
        <Reveal className={styles.offeringsSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            What's Included
          </motion.h2>
          <div className={styles.offeringsGrid}>
            {offerings.map((o) => (
              <motion.div key={o} variants={fadeUp} className={styles.offeringCard}>
                <CheckCircle size={18} className={styles.offeringIcon} />
                <span>{o}</span>
              </motion.div>
            ))}
          </div>
          {tools && tools.length > 0 && (
            <motion.div variants={fadeUp} className={styles.toolsRow}>
              <span className={styles.toolsLabel}>Tools we use:</span>
              {tools.map((t) => (
                <span key={t} className={styles.toolTag}>{t}</span>
              ))}
            </motion.div>
          )}
        </Reveal>

        {/* ── Workflow ── */}
        <Reveal className={styles.workflowSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            How It Works
          </motion.h2>
          <div className={styles.workflowGrid}>
            {workflow.map((step, i) => (
              <motion.div key={step.title} variants={fadeUp} className={styles.workflowStep}>
                <span className={styles.workflowNumber}>{String(i + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Why choose us ── */}
        <Reveal className={styles.whySection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            Why Work With Us
          </motion.h2>
          <div className={styles.whyGrid}>
            {whyUs.map((w) => (
              <motion.div key={w} variants={fadeUp} className={styles.whyItem}>
                <CheckCircle size={18} className={styles.offeringIcon} />
                <span>{w}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── FAQ ── */}
        <Reveal className={styles.faqSection}>
          <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
            Frequently Asked Questions
          </motion.h2>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <motion.details key={f.q} variants={fadeUp} className={styles.faqItem}>
                <summary>
                  {f.q} <ChevronDown size={16} className={styles.faqChevron} />
                </summary>
                <p>{f.a}</p>
              </motion.details>
            ))}
          </div>
        </Reveal>

        {/* ── Final CTA ── */}
        <section className={styles.finalCta}>
          <div className={styles.finalCtaInner}>
            <h2>Ready to talk about {name.toLowerCase()}?</h2>
            <p>Tell us about your data and what you're trying to achieve — we'll take it from there.</p>
            <Link to="/contact" className={styles.ctaButton}>
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceContentPage;
