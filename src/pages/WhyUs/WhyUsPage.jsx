// src/pages/WhyUs/WhyUsPage.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight, Award, Check, ChevronUp, Globe, Heart, MessageSquare,
  Shield, Users, Zap, X, Sparkles, TrendingUp, Clock,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import styles from "./WhyUsPage.module.css";

const ACCENT = "#3b82f6";

// ─── Animation variants ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};
const spring = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};
const VIEWPORT = { once: false, amount: 0.15 };

// ─── Counter ──────────────────────────────────────────────────────────
function Counter({ to, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    let start = null;
    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * to));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(to);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}

// ─── Data ──────────────────────────────────────────────────────────────
const STATS = [
  { to: 200, suffix: "+", label: "Projects Delivered" },
  { to: 99, suffix: "%", label: "Client Satisfaction" },
  { to: 60, suffix: "+", label: "Countries Served" },
  { to: 3, suffix: "+", label: "Avg. Partnership Years" },
];

const REASONS = [
  {
    icon: <Users size={24} />,
    title: "Experienced Team",
    summary: "Decades of combined experience across finance, healthcare, retail, and more.",
    details: [
      "50+ years of combined industry experience",
      "Deep domain expertise in finance, healthcare, retail",
      "We understand YOUR business challenges, not just data",
      "Real‑world experience on every project",
    ],
  },
  {
    icon: <Award size={24} />,
    title: "Proven Track Record",
    summary: "200+ projects delivered with a 99% satisfaction rate.",
    details: [
      "200+ successful projects across 60+ countries",
      "99% client satisfaction – among the highest",
      "Measurable ROI within months, not years",
      "4–7× average ROI in the first year",
    ],
  },
  {
    icon: <Shield size={24} />,
    title: "Security & Trust",
    summary: "Enterprise‑grade security with GDPR, HIPAA, SOC 2, ISO 27001 compliance.",
    details: [
      "GDPR, HIPAA, SOC 2, ISO 27001 compliant",
      "Enterprise‑grade encryption for data at rest and in transit",
      "24/7 threat monitoring and third‑party audits",
      "Your data is protected with the highest standards",
    ],
  },
  {
    icon: <Zap size={24} />,
    title: "Faster Results",
    summary: "Weekly sprints – you see real progress every week.",
    details: [
      "Weekly sprint cycles with live demos – no waiting months",
      "Real, tangible progress you can see and measure",
      "Agile methodology adapted to YOUR business needs",
      "Fast‑track delivery without compromising quality",
    ],
  },
  {
    icon: <Globe size={24} />,
    title: "Global Reach",
    summary: "Offices in the US, Canada, Pakistan, Kenya, and the UK, serving 60+ countries.",
    details: [
      "Offices in the US, Canada, Pakistan, Kenya, and the UK",
      "Serving 60+ countries worldwide",
      "Round‑the‑clock, multilingual support",
      "Global perspective with local expertise",
    ],
  },
  {
    icon: <Heart size={24} />,
    title: "Long‑Term Partnerships",
    summary: "Average engagement spans over 3 years – we grow with you.",
    details: [
      "Average client engagement of 3+ years",
      "We build lasting partnerships, not transactions",
      "We grow with your business, adapting to your needs",
      "Our success is measured by YOUR long‑term success",
    ],
  },
];

// ─── Generated SVG illustration (abstract shape) ─────────────────────
const AbstractShape = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "200px" }}>
    <circle cx="100" cy="100" r="80" stroke="#3b82f6" strokeWidth="2" opacity="0.15" />
    <circle cx="100" cy="100" r="60" stroke="#3b82f6" strokeWidth="2" opacity="0.25" />
    <circle cx="100" cy="100" r="40" fill="#3b82f6" opacity="0.1" />
    <path d="M100 20 L120 80 L180 80 L130 120 L150 180 L100 140 L50 180 L70 120 L20 80 L80 80 L100 20Z" fill="#3b82f6" opacity="0.15" />
    <circle cx="100" cy="100" r="15" fill="#3b82f6" opacity="0.3" />
  </svg>
);

export default function WhyUsPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={styles.page}>
      <SEO
        title="Why Scape Data Solutions | Proven Data & AI Partner"
        description="200+ projects delivered. 99% client satisfaction. 60+ countries. GDPR, HIPAA, SOC 2, ISO 27001. 3+ year average partnerships."
        path="/why-us"
      />
      <Navbar activeNav="why-us" />

      <main>
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <div className={styles.heroLeft}>
                <div className={styles.heroBadge}>
                  <Sparkles size={12} /> Why Scape Data Solutions
                </div>
                <h1 className={styles.heroTitle}>
                  Why Choose Us?
                </h1>
                <p className={styles.heroDesc}>
                  We deliver more than data – we deliver <strong>business transformation</strong>.
                  Trusted by organizations worldwide for our expertise, speed, and commitment.
                </p>
                <div className={styles.heroButtons}>
                  <Link to="/contact" className={styles.btnPrimary}>
                    Get Started <ArrowRight size={16} />
                  </Link>
                  <Link to="/testimonials" className={styles.btnSecondary}>
                    Read Testimonials
                  </Link>
                </div>
                <div className={styles.heroTrust}>
                  {["GDPR", "HIPAA", "SOC 2", "ISO 27001"].map((b) => (
                    <span key={b} className={styles.trustBadge}>
                      <Shield size={12} /> {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.heroRight}>
                <div className={styles.heroStatsGrid}>
                  {STATS.map((stat, i) => (
                    <motion.div
                      key={i}
                      className={styles.heroStatCard}
                      initial="hidden"
                      animate="visible"
                      variants={spring}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className={styles.heroStatNumber}>
                        <Counter to={stat.to} suffix={stat.suffix} />
                      </span>
                      <span className={styles.heroStatLabel}>{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
                <div className={styles.heroVisual}>
                  <AbstractShape />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.container} style={{ padding: "3rem 1.5rem" }}>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.4rem" }}>Ready to see the difference?</h2>
            <p style={{ margin: "0 0 1.2rem", opacity: 0.75, maxWidth: "560px" }}>Put us to the test on a real project. Submit it through the portal and track every milestone from your dashboard.</p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="https://portal.scapedatasolutions.com/portal/signup" className={styles.btnPrimary}>Submit a Project <ArrowRight size={16} /></a>
              <a href="https://portal.scapedatasolutions.com/portal/login" className={styles.btnSecondary}>Log In</a>
            </div>
          </div>
        </section>

        {/* ─── REASONS GRID ────────────────────────────────────────── */}
        <motion.section
          className={styles.reasonsSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>What Sets Us Apart</h2>
              <p className={styles.sectionSub}>Discover what makes Scape Data Solutions the right partner for your business.</p>
            </div>

            <motion.div className={styles.reasonsGrid} variants={stagger}>
              {REASONS.map((reason, i) => (
                <motion.div
                  key={i}
                  className={styles.reasonCard}
                  variants={spring}
                  whileHover={{ y: -4, boxShadow: "0 8px 28px rgba(0,0,0,0.06)", borderColor: ACCENT }}
                >
                  <div className={styles.reasonHeader}>
                    <span className={styles.reasonIcon}>{reason.icon}</span>
                    <h3>{reason.title}</h3>
                  </div>
                  <p className={styles.reasonSummary}>{reason.summary}</p>
                  <ul className={styles.reasonBullets}>
                    {reason.details.map((detail, idx) => (
                      <li key={idx}>
                        <Check size={14} className={styles.bulletCheck} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ─── TESTIMONIAL ──────────────────────────────────────────── */}
        <motion.section
          className={styles.testimonialSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialQuote}>“</div>
              <blockquote>
                The best team I've worked with. They understand our business and deliver results, not excuses.
              </blockquote>
              <cite>– Nathan French, Director of I.T., Treaterpro.com</cite>
              <Link to="/testimonials" className={styles.testimonialLink}>
                Read more testimonials <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* ─── CTA ──────────────────────────────────────────────────── */}
        <motion.section
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Ready to work with the <span style={{ color: ACCENT }}>best</span>?</h2>
              <p className={styles.ctaDesc}>Let's turn your data into a competitive advantage.</p>
              <Link to="/contact" className={styles.btnPrimary}>
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />

      <div className={styles.sideFixed}>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            className={styles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}