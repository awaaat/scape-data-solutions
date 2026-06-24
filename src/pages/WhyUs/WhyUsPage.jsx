// src/pages/WhyUs/WhyUsPage.jsx
// Complete file – hero spread across section, left-aligned with decorative element,
// two-column reason cards with detailed bullet points, full animations.

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  Check,
  CheckCircle,
  ChevronUp,
  Globe,
  Heart,
  MessageSquare,
  Shield,
  Users,
  X,
  Zap,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../Home/HomePage.module.css";
import pageStyles from "./WhyUsPage.module.css";
import SEO from "../../components/SEO/SEO";

// ─── Animation Variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const slideL = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const slideR = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};
const spring = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
};
const REPLAY_VIEWPORT = { once: false, amount: 0.15 };

// ─── Animated Counter ────────────────────────────────────────────
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

// ─── Component ──────────────────────────────────────────────────
export default function WhyUsPage() {
  const [showTop, setShowTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");
  const [chatLog, setChatLog] = useState([
    { from: "bot", text: "Hi! 👋 How can Scape Data Solutions help your business grow today?" },
  ]);

  // ─── Scroll tracking ──────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Chat ─────────────────────────────────────────────────────
  const sendChat = () => {
    if (!chatMsg.trim()) return;
    setChatLog((prev) => [...prev, { from: "user", text: chatMsg }]);
    setChatMsg("");
    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for reaching out! Our team will respond within 1 hour. For urgent queries, call +1 (312) 212-3396 or WhatsApp us.",
        },
      ]);
    }, 900);
  };

  // ─── Data ──────────────────────────────────────────────────────
  const reasons = [
    {
      icon: <Users size={28} />,
      title: "Experienced Team",
      summary: "Our experts have decades of combined experience across finance, healthcare, retail, and more.",
      details: [
        "50+ years of combined industry experience across multiple sectors",
        "Deep domain expertise in finance, healthcare, retail, and technology",
        "We understand YOUR business challenges, not just data",
        "Our team brings real-world experience to every project",
      ],
      color: "#fdb840",
    },
    {
      icon: <Award size={28} />,
      title: "Proven Track Record",
      summary: "3,500+ projects delivered with a 99.5% satisfaction rate from clients worldwide.",
      details: [
        "3,500+ successful projects delivered across 60+ countries",
        "99.5% client satisfaction rate – among the highest in the industry",
        "Clients see measurable ROI within months, not years",
        "4–7× average return on investment in the first year",
      ],
      color: "#00d4ff",
    },
    {
      icon: <Shield size={28} />,
      title: "Security & Trust",
      summary: "Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance built‑in.",
      details: [
        "GDPR, HIPAA, SOC 2, and CCPA compliant by design",
        "Enterprise-grade encryption for data at rest and in transit",
        "24/7 threat monitoring and regular third‑party audits",
        "Your data is protected with the highest industry standards",
      ],
      color: "#a259ff",
    },
    {
      icon: <Zap size={28} />,
      title: "Faster Results",
      summary: "We work in weekly sprints – you see real progress every single week.",
      details: [
        "Weekly sprint cycles with live demos – no waiting months",
        "Real, tangible progress you can see and measure",
        "Agile methodology adapted to YOUR business needs",
        "Fast‑track delivery without compromising on quality",
      ],
      color: "#00e676",
    },
    {
      icon: <Globe size={28} />,
      title: "Global Reach",
      summary: "Offices in the US, Canada, and Pakistan, serving 60+ countries.",
      details: [
        "Offices strategically located in the US, Canada, and Pakistan",
        "Serving clients across 60+ countries worldwide",
        "Round‑the‑clock, multilingual support teams",
        "Truly global perspective with local expertise",
      ],
      color: "#ff6b6b",
    },
    {
      icon: <Heart size={28} />,
      title: "Long‑Term Partnerships",
      summary: "Our average engagement spans over 3 years – we grow with your business.",
      details: [
        "Average client engagement of 3+ years – we're in it for the long haul",
        "We build lasting partnerships, not transactional relationships",
        "We grow with your business, adapting to your evolving needs",
        "Our success is measured by YOUR long‑term success",
      ],
      color: "#fdb840",
    },
  ];

  const stats = [
    { to: 3500, suffix: "+", label: "Projects Delivered" },
    { to: 99, suffix: "%", label: "Satisfaction Rate" },
    { to: 60, suffix: "+", label: "Countries Served" },
    { to: 3, suffix: "+", label: "Avg. Partnership Years" },
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Why Choose Scape Data Solutions | Proven Data & AI Partner"
        description="3500+ projects delivered. 99.5% client satisfaction. Clients in 60+ countries. GDPR, HIPAA, SOC 2 and ISO 27001 compliant. Experienced team, weekly sprint delivery, 4-7x average ROI, and 3+ year average client partnerships. Trusted by banks, hospitals, manufacturers and tech firms worldwide."
        path="/why-us"
      />

      {/* Scroll Progress Bar */}
      <div className={pageStyles.scrollProgressTrack}>
        <motion.div
          className={pageStyles.scrollProgressBar}
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* ─── Navbar ────────────────────────────────────────────── */}
      <Navbar activeNav="why-us" />

      {/* ─── Main ────────────────────────────────────────────────── */}
      <main className={styles.mainContent}>

        {/* ════════════════════════════════════════════════════════
            HERO – Spread layout, left‑aligned with decorative circle
            ════════════════════════════════════════════════════════ */}
        <section
          className={pageStyles.hero}
          style={{
            backgroundImage: `url('/Images/site-images/why-choose-us.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            position: "relative",
          }}
        >
          <div className={pageStyles.heroOverlay} />

          <div className={`${styles.container} ${pageStyles.heroContainer}`}>
            {/* Left content – left‑aligned */}
            <div className={pageStyles.heroContent}>
              <motion.div
                className={pageStyles.heroBadge}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: 0.1 }}
              >
                <span className={pageStyles.heroBadgeDot} />
                WHY SCAPE DATA SOLUTIONS
              </motion.div>

              <motion.h1
                className={pageStyles.heroTitle}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: 0.2 }}
              >
                Why Choose <span className={pageStyles.accent}>Us?</span>
              </motion.h1>

              <motion.p
                className={pageStyles.heroSubtext}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: 0.3 }}
              >
                We deliver more than data – we deliver{" "}
                <strong>business transformation</strong>.
              </motion.p>

              <motion.div
                className={pageStyles.heroCtas}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contact" className={pageStyles.heroCtaPrimary}>
                  Get Started <ArrowRight size={16} />
                </Link>
                <Link to="/testimonials" className={pageStyles.heroCtaSecondaryLight}>
                  Read Testimonials
                </Link>
              </motion.div>

              <motion.div
                className={pageStyles.trustRow}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: 0.5 }}
              >
                {["GDPR", "HIPAA", "SOC 2", "ISO 27001"].map((b, i) => (
                  <span key={i} className={pageStyles.trustBadgeLight}>
                    <Shield size={12} /> {b}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right decorative element – floating stat circle */}
            <motion.div
              className={pageStyles.heroDeco}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className={pageStyles.decoCircle}>
                <span>7+</span>
                <small>Years Experience</small>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            STATS STRIP – Animated counters
            ════════════════════════════════════════════════════════ */}
        <section className={pageStyles.statsStrip}>
          <div className={styles.container}>
            <motion.div
              className={pageStyles.statsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={stagger}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className={pageStyles.statCard}
                  variants={spring}
                  whileHover={{ y: -4, borderColor: "#fdb840" }}
                >
                  <div className={pageStyles.statNumber}>
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className={pageStyles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            REASONS – Two‑column grid with bullet details
            ════════════════════════════════════════════════════════ */}
        <section className={`${styles.sec} ${pageStyles.reasonsSection}`}>
          <div className={styles.container}>
            <div className={pageStyles.sectionHeader}>
              <h3 className={pageStyles.sectionTitle}>
                Why We're <span className={pageStyles.accent}>Different</span>
              </h3>
              <p className={pageStyles.sectionSubtitle}>
                Discover what sets us apart from the competition
              </p>
            </div>

            <motion.div
              className={pageStyles.reasonsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={stagger}
            >
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  className={pageStyles.reasonCard}
                  variants={spring}
                  whileHover={{
                    y: -6,
                    boxShadow: `0 8px 28px ${r.color}20`,
                    borderColor: r.color,
                  }}
                >
                  <div className={pageStyles.reasonHeader}>
                    <motion.div
                      className={pageStyles.reasonIcon}
                      style={{ color: r.color }}
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    >
                      {r.icon}
                    </motion.div>
                    <h4 className={pageStyles.reasonTitle}>{r.title}</h4>
                  </div>

                  <p className={pageStyles.reasonSummary}>{r.summary}</p>

                  <ul className={pageStyles.reasonBullets}>
                    {r.details.map((detail, idx) => (
                      <li key={idx}>
                        <Check size={16} className={pageStyles.bulletIcon} style={{ color: r.color }} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    className={pageStyles.reasonLine}
                    style={{ backgroundColor: r.color }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.05 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            TESTIMONIAL
            ════════════════════════════════════════════════════════ */}
        <section className={`${styles.sec} ${pageStyles.testimonialSection}`}>
          <div className={styles.container}>
            <motion.div
              className={pageStyles.testimonialCard}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={slideL}
            >
              <div className={pageStyles.testimonialIcon}>“</div>
              <blockquote className={pageStyles.testimonialQuote}>
                The best team I've worked with. They understand our business and deliver results, not excuses.
              </blockquote>
              <cite className={pageStyles.testimonialCite}>
                – Nathan French, Director of I.T., Treaterpro.com
              </cite>
              <Link to="/testimonials" className={pageStyles.testimonialLink}>
                Read more testimonials <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            CTA – Call to Action
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
              <h2 className={pageStyles.ctaTitle}>
                Ready to Work with the <span className={pageStyles.accent}>Best</span>?
              </h2>
              <p className={pageStyles.ctaSub}>
                Let's turn your data into a competitive advantage.
              </p>
              <Link to="/contact" className={pageStyles.ctaBtn}>
                Get Started <ArrowRight size={18} />
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

      {/* ─── Chat Widget ────────────────────────────────────────── */}
      <div className={styles.chatWidget}>
        {chatOpen && (
          <motion.div
            className={styles.chatBox}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderInfo}>
                <div className={styles.chatAvatar}>
                  <MessageSquare size={14} />
                </div>
                <div>
                  <strong>Scape Data Support</strong>
                  <span>
                    <span className={styles.livePulse} />
                    Online
                  </span>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)}>
                <X size={16} />
              </button>
            </div>
            <div className={styles.chatLog}>
              {chatLog.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`${styles.chatMsg} ${
                    msg.from === "user" ? styles.chatMsgUser : styles.chatMsgBot
                  }`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>
            <div className={styles.chatInput}>
              <input
                value={chatMsg}
                onChange={(e) => setChatMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendChat()}
                placeholder="Type your message..."
              />
              <motion.button onClick={sendChat} whileHover={{ scale: 1.1, backgroundColor: "#fdb840" }}>
                <ArrowRight size={15} />
              </motion.button>
            </div>
          </motion.div>
        )}
        <motion.button
          className={styles.chatToggle}
          onClick={() => setChatOpen(!chatOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={chatOpen ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {chatOpen ? <X size={20} /> : <MessageSquare size={20} />}
          {!chatOpen && (
            <motion.span
              className={styles.chatBadge}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              1
            </motion.span>
          )}
        </motion.button>
      </div>

    </div>
  );
}