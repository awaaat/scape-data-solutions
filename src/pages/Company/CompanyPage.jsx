import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight, CheckCircle, ChevronUp,
  Layers, Star, Target, Users, Zap,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import styles from "./CompanyPage.module.css";

const ACCENT = "#3b82f6";

// ─── Animation variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const VIEWPORT = { once: false, amount: 0.15 };

// ─── Counter ──────────────────────────────────────────────────────
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

// ─── Data ──────────────────────────────────────────────────────────
const COMPANY_STATS = [
  { to: 50, suffix: "+", label: "Years Combined Experience" },
  { to: 2, suffix: "", label: "Countries — US & Canada" },
  { to: 100, suffix: "%", label: "Client Satisfaction Goal" },
  { to: 24, suffix: "/7", label: "Quick Response Commitment" },
];

const REASONS = [
  { icon: <Zap size={18} />, title: "Quick Response", desc: "Our team is committed to prompt communication, ensuring your queries and concerns are addressed swiftly." },
  { icon: <Users size={18} />, title: "Experienced Team", desc: "With years of experience, our experts bring in-depth knowledge to the table, guaranteeing top-notch solutions." },
  { icon: <Star size={18} />, title: "Professional Staff", desc: "Our dedicated professionals uphold the highest standards of professionalism in all interactions and project executions." },
  { icon: <Target size={18} />, title: "Business Savvy", desc: "We understand both the technical and business dynamics, making us a valuable partner in achieving your goals." },
  { icon: <Layers size={18} />, title: "One-Stop Shop", desc: "From development to support, we cover it all, simplifying your operations and reducing hassle." },
  { icon: <CheckCircle size={18} />, title: "100% Satisfaction", desc: "Your contentment is our priority — we're committed to delivering solutions that exceed your expectations." },
];

const QUICK_LINKS = [
  { title: "Data Analytics", desc: "Actionable insights, fast.", href: "/services" },
  { title: "Custom Solutions", desc: "Tailored to your industry.", href: "/services" },
  { title: "Careers", desc: "Join the team.", href: "/careers" },
];

const OFFICES = ["Palo Alto", "Seattle", "Memphis", "London"];

const MILESTONES = [
  { date: "1994", label: "PC‑Component Inc. Founded" },
  { date: "2017", label: "Scape Data Solutions Launched" },
  { date: "2020", label: "Expanded to US & Canada" },
  { date: "2026", label: "50+ Years Combined Experience" },
];

export default function CompanyPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className={styles.page}>
      <SEO
        title="About Scape Data Solutions | Premier Data Analytics Company"
        description="Scape Data Solutions is a premier data analytics firm with 50+ years of combined experience. Quick response, expert team, 100% client satisfaction goal."
        path="/company"
      />
      <Navbar activeNav="company" />

      <main>
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <motion.section
          className={styles.hero}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className={styles.heroGrid} />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <motion.div className={styles.heroLeft} variants={fadeUp}>
                <motion.p className={styles.heroLabel} variants={fadeUp}>Our mission</motion.p>
                <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                  Who We Are
                </motion.h1>
                <motion.p className={styles.heroDesc} variants={fadeUp}>
                  A premier data analytics firm with over 7 years of combined
                  experience, driving measurable results for businesses across
                  the US &amp; Canada.
                </motion.p>
                <motion.div className={styles.heroButtons} variants={fadeUp}>
                  <Link to="/contact" className={styles.btnPrimary}>
                    Get In Touch <ArrowRight size={16} />
                  </Link>
                  <Link to="/services" className={styles.btnSecondary}>
                    Our Services
                  </Link>
                </motion.div>
                <motion.div className={styles.trustRow} variants={fadeUp}>
                  {["50+ Yrs Experience", "US & Canada", "100% Satisfaction Goal", "24/7 Response"].map((b) => (
                    <span key={b} className={styles.trustBadge}>{b}</span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div className={styles.heroRight} variants={fadeUp}>
                <div className={styles.heroQuickLinks}>
                  {QUICK_LINKS.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      custom={i}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link to={item.href} className={styles.quickLinkItem}>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                        <ArrowRight size={16} className={styles.quickLinkArrow} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ─── STATS BAND ──────────────────────────────────────────── */}
        <motion.section
          className={styles.statsBand}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {COMPANY_STATS.map((stat, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <span className={styles.statsNumber}>
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </span>
                  <p className={styles.statsLabel}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── MISSION ────────────────────────────────────────────── */}
        <motion.section
          className={styles.missionSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <div className={styles.missionBlock}>
              <motion.p className={styles.sectionLabel} variants={fadeUp}>Our story</motion.p>
              <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
                Scape Data Solutions was founded with over 7 years of combined experience
              </motion.h2>
              <motion.p className={styles.missionDesc} variants={fadeUp}>
                With a driving vision to provide excellent solutions to enhance efficiency
                and competitive benefit to companies by enabling data technologies into their business.
              </motion.p>
              <motion.p className={styles.missionDesc} variants={fadeUp}>
                Our company is made up of an exclusive and talented collection of professionals
                from varied technical and creative backgrounds. Our constant drive towards
                technological innovation, quick response time and quality service has propelled
                us into a premium position in the data analytics space.
              </motion.p>
              <motion.p className={styles.missionDesc} variants={fadeUp}>
                Scape Data Solutions pivots on client satisfaction with an area of expertise
                that covers today's latest data technologies. When our clients are happy —
                we are successful.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* ─── REASONS ────────────────────────────────────────────── */}
        <motion.section
          className={styles.coreSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <div className={styles.coreHead}>
              <motion.h2 className={styles.coreTitle} variants={fadeUp}>Reasons to Partner With Us</motion.h2>
            </div>
            <div className={styles.coreGrid}>
              {REASONS.map((item, i) => (
                <motion.div key={i} className={styles.coreCard} variants={fadeUp} transition={{ delay: i * 0.04 }}>
                  <span className={styles.coreIcon}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── OFFICES ────────────────────────────────────────────── */}
        <motion.section
          className={styles.officesSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <div className={styles.officesHead}>
              <motion.div variants={fadeUp}>
                <p className={styles.officesLabel}>Offices</p>
                <h2 className={styles.officesTitle}>Collaboration across borders</h2>
                <p className={styles.officesDesc}>
                  We are hiring across all our offices. We prioritize in‑person work
                  to support our fast‑paced, collaborative projects.
                </p>
              </motion.div>
              <motion.div className={styles.officesActions} variants={fadeUp}>
                <Link to="/careers" className={styles.btnPrimary}>Open Roles</Link>
                <Link to="/careers" className={styles.btnSecondary}>Careers</Link>
              </motion.div>
            </div>
            <div className={styles.officesGrid}>
              {OFFICES.map((city) => (
                <motion.div key={city} className={styles.officeCard} variants={fadeUp}>
                  {city}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── TIMELINE ────────────────────────────────────────────── */}
        <motion.section
          className={styles.timelineSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <div className={styles.timelineHead}>
              <motion.h2 className={styles.timelineTitle} variants={fadeUp}>Our path of progress</motion.h2>
              <motion.p className={styles.timelineSub} variants={fadeUp}>
                From founding to industry leader — every milestone on the way.
              </motion.p>
            </div>

            <motion.div className={styles.timelineTrack} variants={fadeUp}>
              <div className={styles.timelineRail} />
              <div className={styles.timelineProgress} style={{ width: "100%" }} />
              <div className={styles.timelineDots}>
                {MILESTONES.map((m, i) => (
                  <div
                    key={i}
                    className={styles.timelineDotWrapper}
                    style={{ left: `${(i / (MILESTONES.length - 1)) * 100}%` }}
                  >
                    <div className={`${styles.timelineDot} ${i === MILESTONES.length - 1 ? styles.timelineDotActive : ""}`} />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className={styles.timelineLabels} variants={fadeUp}>
              {MILESTONES.map((m, i) => (
                <span key={i}>{m.date}</span>
              ))}
            </motion.div>

            <motion.div className={styles.timelineActive} variants={fadeUp}>
              <div className={styles.timelineActiveDate}>July 2026</div>
              <h3 className={styles.timelineActiveTitle}>50+ Years Combined Experience</h3>
              <p className={styles.timelineActiveDesc}>
                A milestone that reflects our depth of expertise and commitment to excellence.
              </p>
            </motion.div>
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
              <p>
                Please <Link to="/contact" style={{ color: ACCENT, fontWeight: 500 }}>contact us</Link>{" "}
                and find out more about Scape Data Solutions and how we can help you in your data-driven business.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />

      <div className={styles.sideFixed}>
        <a href="https://wa.me/+923218465214" className={styles.sideBtnWA}>WhatsApp</a>
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