// src/pages/Career/CareerPage.jsx
import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ChevronUp, Users, Sparkles, Globe } from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../Home/HomePage.module.css";
import pageStyles from "./CareerPage.module.css";

// ─── Animation Variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const REPLAY_VIEWPORT = { once: false, amount: 0.15 };

// ─── Typewriter Effect ──────────────────────────────────────────
function Typewriter({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        if (index === text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView, text, started]);

  return <span ref={ref}>{displayText}</span>;
}

// ─── Component ──────────────────────────────────────────────────
const CareerPage = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openings = [];

  // ─── Culture / Why Work Here ──────────────────────────────────
  const cultureAreas = [
    {
      icon: Users,
      title: "Small Teams, Real Ownership",
      paragraph:
        "We work in small, focused teams where every voice matters. Decisions are made close to the work, not buried in layers of approval, so you can see the impact of your contributions directly.",
      align: "left",
    },
    {
      icon: Sparkles,
      title: "Built for Growth",
      paragraph:
        "We invest in our people through mentorship, training budgets, and exposure to a wide range of industries and problems. You'll work across financial services, healthcare, retail, and technology — building a breadth of experience that's hard to find elsewhere.",
      align: "right",
    },
    {
      icon: Globe,
      title: "Work That Travels With You",
      paragraph:
        "We hire for outcomes, not hours at a desk. Our team works remotely and async-first, with the flexibility to do great work on a schedule that fits your life.",
      align: "left",
    },
  ];

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Careers | Scape Data Solutions</title>
        <meta
          name="description"
          content="Join our team of data experts – we're hiring data scientists, engineers, and more."
        />
      </Helmet>

      {/* ─── Navbar ────────────────────────────────────────────── */}
      <Navbar activeNav="careers" />

      <main className={styles.mainContent}>

        {/* ════════════════════════════════════════════════════════
            HERO
            ════════════════════════════════════════════════════════ */}
        <section className={pageStyles.hero}>
          <div className={styles.container}>
            <motion.div
              className={pageStyles.heroContent}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className={pageStyles.heroLabel}>JOIN OUR TEAM</div>
              <h1 className={pageStyles.heroTitle}>
                Careers at <span className={pageStyles.accent}>Scape Data</span>
              </h1>
              <p className={pageStyles.heroSubtext}>
                <Typewriter text="Build your career with a team that's shaping the future of data, analytics, and AI for businesses around the world." />
              </p>
              <motion.div
                className={pageStyles.scrollIndicator}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                Learn more about us ↓
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            NO OPENINGS
            ════════════════════════════════════════════════════════ */}
        <section className={pageStyles.noOpeningsSection}>
          <div className={styles.container}>
            <motion.div
              className={pageStyles.noOpeningsContent}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={fadeUp}
            >
              {openings.length > 0 ? (
                <>
                  <h2 className={pageStyles.noOpeningsTitle}>Current Openings</h2>
                  {openings.map((o, i) => (
                    <div key={i} className={pageStyles.noOpeningsText}>
                      <strong>{o.title}</strong> — {o.dept} · {o.location}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  <h2 className={pageStyles.noOpeningsTitle}>No Open Positions Right Now</h2>
                  <p className={pageStyles.noOpeningsText}>
                    We don't have any active roles at the moment, but we're always
                    interested in hearing from talented people. Send us your resume
                    and we'll keep you in mind as new opportunities open up.
                  </p>
                  <Link to="/contact" className={pageStyles.noOpeningsBtn}>
                    Get In Touch
                  </Link>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            CULTURE SECTIONS — asymmetric, icon-led
            ════════════════════════════════════════════════════════ */}
        {cultureAreas.map((area, index) => {
          const isEven = index % 2 === 0;
          const Icon = area.icon;
          return (
            <section
              key={index}
              className={`${styles.sec} ${
                isEven ? pageStyles.sectionLight : pageStyles.sectionDark
              }`}
            >
              <div className={styles.container}>
                <motion.div
                  className={`${pageStyles.cultureBlock} ${
                    area.align === "right" ? pageStyles.cultureBlockRight : ""
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={REPLAY_VIEWPORT}
                  variants={staggerChildren}
                >
                  <motion.div
                    className={pageStyles.cultureIconWrap}
                    variants={area.align === "right" ? slideInRight : slideInLeft}
                  >
                    <Icon size={34} strokeWidth={1.75} />
                  </motion.div>
                  <motion.div
                    className={pageStyles.cultureText}
                    variants={area.align === "right" ? slideInLeft : slideInRight}
                  >
                    <h3 className={pageStyles.cultureTitle}>{area.title}</h3>
                    <p className={pageStyles.cultureParagraph}>{area.paragraph}</p>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* ════════════════════════════════════════════════════════
            CLOSING CTA
            ════════════════════════════════════════════════════════ */}
        <section className={`${styles.sec} ${pageStyles.ctaSection}`}>
          <div className={styles.container}>
            <motion.div
              className={pageStyles.ctaBox}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={fadeUp}
            >
              <h2 className={pageStyles.ctaTitle}>Don't See Your Role?</h2>
              <p className={pageStyles.ctaSub}>
                We're always open to great talent. Send us your resume and tell us
                how you'd like to contribute.
              </p>
              <Link to="/contact" className={pageStyles.ctaBtn}>
                Reach Out
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ─── Footer ────────────────────────────────────────────── */}
      <Footer />

      {/* ─── Back to Top ─────────────────────────────────────────── */}
      {showTop && (
        <motion.button
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          whileHover={{ scale: 1.1, backgroundColor: "#fdb840", color: "#fff" }}
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </div>
  );
};

export default CareerPage;