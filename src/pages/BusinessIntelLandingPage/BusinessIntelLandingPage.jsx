// src/pages/BusinessIntelLandingPage/BusinessIntelLandingPage.jsx
//
// Public marketing page for the business-intel product, living at bare
// /business-intel. Product isn't live yet, so every action funnels to
// Contact rather than a login/signup flow.

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  MapPin,
  ShieldCheck,
  TrendingUp,
  Mail,
  Phone,
  ArrowRight,
  Building2,
  Store,
  Stethoscope,
  Search,
  Cpu,
  FileText,
  Check,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import styles from "./BusinessIntelLandingPage.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const FEATURES = [
  {
    icon: MapPin,
    title: "Site-selection scoring",
    body: "Drop in a location and business type; get a data-backed read on whether it's a strong fit before you sign a lease.",
  },
  {
    icon: TrendingUp,
    title: "Demand & competition context",
    body: "See how investment size, target segment, and planned branch count line up against what the area can realistically support.",
  },
  {
    icon: ShieldCheck,
    title: "Anomaly flags",
    body: "Reports that look statistically off get flagged automatically, so you know when to dig deeper before trusting a result.",
  },
];

const STEPS = [
  {
    icon: Search,
    title: "Describe the location",
    body: "Enter the address, business type, and rough investment size you're considering.",
  },
  {
    icon: Cpu,
    title: "We run the analysis",
    body: "Demand signals, nearby competition density, and demographic fit are pulled together automatically.",
  },
  {
    icon: FileText,
    title: "Get a scored report",
    body: "A clear confidence score plus the underlying breakdown, so you can see exactly why it landed where it did.",
  },
];

const AUDIENCES = [
  {
    icon: Store,
    title: "Retail & franchise operators",
    body: "Compare candidate storefronts against foot-traffic and competitor density before committing to a lease.",
  },
  {
    icon: Stethoscope,
    title: "Dental & veterinary clinics",
    body: "Check whether a neighborhood already has enough coverage, or is genuinely underserved.",
  },
  {
    icon: Building2,
    title: "Medical practices",
    body: "Weigh patient demand against nearby providers before opening a second or third location.",
  },
];

const INCLUDED = [
  "Demand signal for the surrounding area",
  "Nearby competitor density and positioning",
  "A single confidence score you can act on",
  "Underlying breakdown, not just a black-box number",
  "Flags on anything statistically unusual in the data",
];

const FAQS = [
  {
    q: "Is this live yet?",
    a: "It's still being finished. Reach out and we'll let you know where things stand and whether early access is open.",
  },
  {
    q: "What locations does it cover?",
    a: "That's being finalized alongside the rest of the product — get in touch with the area you have in mind.",
  },
  {
    q: "Can this be customized for my industry?",
    a: "Yes — this is built the same way our other analytics work is: tailored to what you actually need to decide.",
  },
];

export default function BusinessIntelLandingPage() {
  return (
    <div className={styles.page}>
      <SEO
        title="Business Location Intelligence | Scape Data Solutions"
        description="Site-selection reports for new business locations -- demand, competition, and risk signals before you commit."
        path="/business-intel"
      />
      <Navbar activeNav="business-intel" />

      <main className={styles.mainContent}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroInner}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className={styles.eyebrow}>
              <BarChart3 size={12} /> Business Location Intelligence
            </span>
            <h1 className={styles.heroTitle}>Know before you open the doors</h1>
            <p className={styles.heroSubtitle}>
              Generate a site-selection report for any location in minutes — demand
              signals, competition density, and a confidence score, so the decision
              to open a branch is backed by data, not a gut feeling.
            </p>
            <div className={styles.heroActions}>
              <Link to="/contact" className={styles.primaryBtn}>
                Contact Us <ArrowRight size={16} />
              </Link>
              <a href="mailto:info@scapedatasolutions.com" className={styles.secondaryBtn}>
                <Mail size={15} /> info@scapedatasolutions.com
              </a>
              <a href="tel:+17575980582" className={styles.secondaryBtn}>
                <Phone size={15} /> +1 (757) 598-0582
              </a>
            </div>
          </motion.div>
        </section>

        <section className={styles.hero} style={{ paddingTop: 0 }}>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "2rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 0.4rem" }}>Already working with us on something else?</h2>
            <p style={{ margin: "0 0 1.2rem", opacity: 0.75, maxWidth: "540px" }}>Existing clients can check active projects, signed agreements, and payments in the client portal.</p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="https://portal.scapedatasolutions.com/portal/login" className={styles.primaryBtn}>Open the Portal <ArrowRight size={16} /></a>
              <Link to="/contact" className={styles.secondaryBtn}>Contact Us</Link>
            </div>
          </div>
        </section>

        {/* ── Mock report visual ── */}
        <section className={styles.reportSection}>
          <motion.div className={styles.reportCard} {...fadeUp}>
            <div className={styles.reportCardHead}>
              <span className={styles.reportCardLabel}>Sample site score</span>
              <span className={styles.reportCardBadge}>Illustrative</span>
            </div>
            <div className={styles.reportScoreRow}>
              <div className={styles.reportScoreCircle}>
                <span className={styles.reportScoreNum}>82</span>
                <span className={styles.reportScoreMax}>/100</span>
              </div>
              <div className={styles.reportScoreBars}>
                <div className={styles.reportBarRow}>
                  <span>Demand</span>
                  <div className={styles.reportBarTrack}>
                    <div className={styles.reportBarFill} style={{ width: "88%" }} />
                  </div>
                </div>
                <div className={styles.reportBarRow}>
                  <span>Competition</span>
                  <div className={styles.reportBarTrack}>
                    <div className={styles.reportBarFill} style={{ width: "64%" }} />
                  </div>
                </div>
                <div className={styles.reportBarRow}>
                  <span>Demographic fit</span>
                  <div className={styles.reportBarTrack}>
                    <div className={styles.reportBarFill} style={{ width: "91%" }} />
                  </div>
                </div>
              </div>
            </div>
            <p className={styles.reportCardFoot}>
              A preview of the kind of breakdown a finished report will include —
              exact fields are still being finalized.
            </p>
          </motion.div>
        </section>

        {/* ── How it works ── */}
        <section className={styles.sec}>
          <motion.div className={styles.secHead} {...fadeUp}>
            <span className={styles.secLabel}>How it works</span>
            <h2 className={styles.secTitleCenter}>Three steps to a decision</h2>
          </motion.div>
          <div className={styles.stepsGrid}>
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className={styles.stepNum}>{i + 1}</div>
                <div className={styles.stepIcon}><Icon size={20} /></div>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepBody}>{body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Features ── */}
        <section className={styles.sec}>
          <motion.div className={styles.secHead} {...fadeUp}>
            <span className={styles.secLabel}>What's in the report</span>
            <h2 className={styles.secTitleCenter}>Built for real estate decisions</h2>
          </motion.div>
          <div className={styles.features}>
            {FEATURES.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className={styles.featureIcon}><Icon size={22} /></div>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureBody}>{body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── What's included checklist ── */}
        <section className={styles.sec}>
          <div className={styles.includedGrid}>
            <motion.div {...fadeUp}>
              <span className={styles.secLabel}>What you get</span>
              <h2 className={styles.secTitle}>Every report includes</h2>
              <p className={styles.includedIntro}>
                Not just a single number — the reasoning behind it, so you can
                defend the decision to a lender, a partner, or your own team.
              </p>
            </motion.div>
            <motion.ul
              className={styles.includedList}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              {INCLUDED.map((item) => (
                <li key={item}>
                  <Check size={16} /> <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* ── Who it's for ── */}
        <section className={styles.sec}>
          <motion.div className={styles.secHead} {...fadeUp}>
            <span className={styles.secLabel}>Who it's for</span>
            <h2 className={styles.secTitleCenter}>Any business that opens physical locations</h2>
          </motion.div>
          <div className={styles.audienceGrid}>
            {AUDIENCES.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                className={styles.audienceCard}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className={styles.audienceIcon}><Icon size={20} /></div>
                <h3 className={styles.audienceTitle}>{title}</h3>
                <p className={styles.audienceBody}>{body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className={styles.sec}>
          <motion.div className={styles.secHead} {...fadeUp}>
            <span className={styles.secLabel}>Questions</span>
            <h2 className={styles.secTitleCenter}>A few things people ask</h2>
          </motion.div>
          <div className={styles.faqList}>
            {FAQS.map(({ q, a }, i) => (
              <motion.div
                key={q}
                className={styles.faqItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
              >
                <h3 className={styles.faqQ}>{q}</h3>
                <p className={styles.faqA}>{a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.section
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <h2>Curious what a report would look like for your next location?</h2>
          <p>Get in touch and we'll walk you through it.</p>
          <Link to="/contact" className={styles.ctaBtn}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
