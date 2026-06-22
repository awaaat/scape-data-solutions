// src/pages/Company/CompanyPage.jsx
// Refactored to match HomePage structure — uses Navbar & Footer components

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, CheckCircle, ChevronDown, ChevronRight, ChevronUp,
  Clock, Facebook, Layers, Linkedin, Mail, MessageSquare,
  Phone, Star, Target, Twitter, Users, X, Youtube, Zap,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../Home/HomePage.module.css";
import companyStyles from "./CompanyPage.module.css";

// ─── Animation Variants ────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const slideL = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const slideR = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } } };
const spring = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } } };
const REPLAY_VIEWPORT = { once: false, amount: 0.15 };

// ─── Navigation Data (used in footer links) ────────────────────
const NAV_COMPANY = [
  { label: "Company", href: "/company" },
  { label: "History", href: "/history" },
  { label: "Why Us?", href: "/why-us" },
  { label: "Management", href: "/management" },
  { label: "Expertise", href: "/expertise" },
  { label: "Pricing", href: "/pricing" },
  { label: "Career", href: "/career" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];
const NAV_SERVICES = [
  { label: "AI & Machine Learning", href: "/services/ai-ml" },
  { label: "Big Data Engineering", href: "/services/big-data" },
  { label: "Business Intelligence", href: "/services/bi" },
  { label: "Data Governance", href: "/services/governance" },
  { label: "Predictive Analytics", href: "/services/predictive" },
  { label: "Real-Time Analytics", href: "/services/realtime" },
  { label: "Cloud Analytics", href: "/services/cloud" },
  { label: "Customer Analytics", href: "/services/customer" },
  { label: "Custom Development", href: "/services/custom-dev" },
  { label: "Data Privacy", href: "/services/privacy" },
  { label: "Strategy Consulting", href: "/services/strategy" },
  { label: "Training & Upskilling", href: "/services/training" },
];
const NAV_PORTFOLIO = [
  { label: "Dashboards & BI", href: "/portfolio/bi" },
  { label: "AI Applications", href: "/portfolio/ai" },
  { label: "Data Pipelines", href: "/portfolio/pipelines" },
  { label: "Mobile Analytics", href: "/portfolio/mobile" },
];

// ─── Animated Counter ───────────────────────────────────────────
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

const COMPANY_STATS = [
  { to: 50, suffix: "+", label: "Years Combined Experience" },
  { to: 2, suffix: "", label: "Countries — US & Canada" },
  { to: 100, suffix: "%", label: "Client Satisfaction Goal" },
  { to: 24, suffix: "/7", label: "Quick Response Commitment" },
];

// ─── Component ──────────────────────────────────────────────────
export default function CompanyPage() {
  const [showTop, setShowTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [heroMouse, setHeroMouse] = useState({ x: 50, y: 50 });
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");
  const [chatLog, setChatLog] = useState([{ from: "bot", text: "Hi! 👋 How can Scape Data Solutions help your business grow today?" }]);

  // Scroll to top button + scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendChat = () => {
    if (!chatMsg.trim()) return;
    setChatLog(prev => [...prev, { from: "user", text: chatMsg }]);
    setChatMsg("");
    setTimeout(() => {
      setChatLog(prev => [...prev, {
        from: "bot",
        text: "Thanks for reaching out! Our team will respond within 1 hour. For urgent queries, call +1 (312) 212-3396 or WhatsApp us."
      }]);
    }, 900);
  };

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHeroMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className={styles.page}>

      {/* Scroll Progress Bar */}
      <div className={companyStyles.scrollProgressTrack}>
        <motion.div
          className={companyStyles.scrollProgressBar}
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* ── Navbar (imported, same as home page) ── */}
      <Navbar activeNav="company" />

      {/* ── Main Content ── */}
      <main className={styles.mainContent}>

        {/* ─── DARK HERO with background image ─── */}
        <section
          className={companyStyles.companyHeroDark}
          onMouseMove={handleHeroMouseMove}
          style={{ "--mx": `${heroMouse.x}%`, "--my": `${heroMouse.y}%` }}
        >
          {/* Background photo */}
          <div className={companyStyles.heroBgImage} />
          {/* Dark overlay */}
          <div className={companyStyles.heroOverlay} />
          {/* Mouse-tracked glow */}
          <div className={companyStyles.heroGlow} />
          {/* Floating orbs */}
          <motion.div
            className={companyStyles.heroOrb1}
            animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={companyStyles.heroOrb2}
            animate={{ y: [0, 16, 0], x: [0, -14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className={styles.container}>
            <div className={companyStyles.heroContent}>

              {/* Breadcrumb */}
              <motion.div
                className={companyStyles.heroBreadcrumb}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link to="/">Home</Link>
                <ChevronRight size={12} />
                <span>Company</span>
              </motion.div>

              {/* Badge pill */}
              <motion.div
                className={companyStyles.heroBadge}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <motion.span
                  className={companyStyles.heroBadgeDot}
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                {"ABOUT SCAPE DATA SOLUTIONS".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  >
                    {word}{i < 3 ? "\u00A0" : ""}
                  </motion.span>
                ))}
              </motion.div>

              {/* Title */}
              <h1 className={companyStyles.heroTitle}>
                <div className={companyStyles.heroWordRow}>
                  {["Who", "We"].map((word, i) => (
                    <motion.span
                      key={i}
                      className={companyStyles.heroWord}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.55 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {word}
                    </motion.span>
                  ))}
                  <motion.span
                    className={`${companyStyles.heroWord} ${companyStyles.heroHighlight}`}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.79, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Are
                  </motion.span>
                </div>
              </h1>

              <motion.div
                className={companyStyles.heroUnderline}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
              />

              {/* Subtext */}
              <p className={companyStyles.heroSubtext}>
                {"A premier data analytics firm with over 7 years of combined experience, driving measurable results for businesses across the US & Canada."
                  .split(" ")
                  .map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 + i * 0.035, duration: 0.35 }}
                      style={{ display: "inline-block", marginRight: "4px" }}
                    >
                      {word}
                    </motion.span>
                  ))}
              </p>

              {/* Hero stats row */}
              <div className={companyStyles.heroStatsRow}>
                {[
                  { number: "50+", label: "Years Experience" },
                  { number: "2", label: "Countries" },
                  { number: "100%", label: "Satisfaction Goal" },
                  { number: "24/7", label: "Response" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    className={companyStyles.heroStat}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + i * 0.12, duration: 0.5, ease: "easeOut" }}
                  >
                    <div className={companyStyles.heroStatNumber}>{s.number}</div>
                    <div className={companyStyles.heroStatLabel}>{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className={companyStyles.heroCtas}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <Link to="/contact" className={companyStyles.heroCtaPrimary}>
                    Get In Touch <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.85, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  <Link to="/services" className={companyStyles.heroCtaSecondary}>
                    Our Services <ChevronRight size={16} />
                  </Link>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* By The Numbers — animated stats strip */}
        <section className={companyStyles.statsStrip}>
          <div className={styles.container}>
            <motion.div
              className={companyStyles.statsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={stagger}
            >
              {COMPANY_STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className={companyStyles.statCard}
                  variants={spring}
                  whileHover={{ y: -4, borderColor: "#fdb840" }}
                >
                  <div className={companyStyles.statNumber}>
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className={companyStyles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission / About Section */}
        <section className={`${styles.sec} ${companyStyles.missionSection}`}>
          <div className={styles.container}>
            <div className={companyStyles.missionBlock}>
              <motion.div
                className={companyStyles.missionLeft}
                initial="hidden"
                whileInView="visible"
                viewport={REPLAY_VIEWPORT}
                variants={slideL}
              >
                <h2 className={companyStyles.missionTitle}>
                  <span className={companyStyles.accent}>Scape Data Solutions</span> Was Founded With Over 7 Years of Combined Experience
                </h2>
                <p className={companyStyles.missionDesc}>
                  With a driving vision to provide excellent solutions to enhance efficiency and competitive benefit to companies by enabling data technologies into their business.
                </p>
                <p className={companyStyles.missionDesc}>
                  Our company is made up of an exclusive and talented collection of professionals from varied technical and creative backgrounds. Our constant drive towards technological innovation, quick response time and quality service has propelled us into a premium position in the data analytics space.
                </p>
                <p className={companyStyles.missionDesc}>
                  <span className={companyStyles.accent}>Scape Data Solutions</span> pivots on client satisfaction with an area of expertise that covers today's latest data technologies. This ensures the customer's lifelong experience of development and approval which results in mutual growth. When our clients are happy – <motion.strong
                    className={companyStyles.yellow}
                    animate={{ textShadow: ["0 0 0px rgba(253,184,64,0)", "0 0 12px rgba(253,184,64,0.6)", "0 0 0px rgba(253,184,64,0)"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >WE ARE SUCCESSFUL</motion.strong>.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sister Company */}
        <section className={`${styles.sec} ${companyStyles.sisterSection}`}>
          <div className={styles.container}>
            <div className={companyStyles.sisterCompany}>
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <motion.div
                    className={companyStyles.sisterLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={REPLAY_VIEWPORT}
                    variants={slideL}
                  >
                    <h3 className={companyStyles.sisterTitle}>Our Sister Company</h3>
                    <motion.div
                      className={companyStyles.sisterIcon}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.08, rotate: 4 }}
                    >
                      <img src="/Images/site-images/desktop_applications.webp" alt="PC Component" />
                    </motion.div>
                  </motion.div>
                </div>
                <div className="col-lg-9">
                  <motion.div
                    className={companyStyles.sisterDesc}
                    initial="hidden"
                    whileInView="visible"
                    viewport={REPLAY_VIEWPORT}
                    variants={slideR}
                  >
                    <p>
                      <strong>PC‑Component Inc.</strong> is another root of <span className={companyStyles.accent}>Scape Data Solutions</span> where you can find a wide range of affordable computer products including personal desktops, home entertainment systems, high‑end gamer systems and business workstations or servers. We have been in this business since 1994 so you can rest assured that you are getting the highest quality products and services.
                    </p>
                    <p className="mt-3">
                      Our expert techs can help you with just about any computer problem. Whether you are a homeowner, student, or large company, call us today. We will save you money and boost the productivity in your computer operations.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons to Partner */}
        <section className={`${styles.sec} ${companyStyles.reasonsSection}`}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <h3 className={styles.secTitle}>
                <span className={companyStyles.accent}>Reasons</span> to Partner With <span className={companyStyles.accent}>Scape Data Solutions</span>
              </h3>
            </div>
            <motion.div
              className={companyStyles.reasonsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={stagger}
            >
              {[
                { icon: <Zap size={28} />, title: "Quick Response", desc: "Our team is committed to prompt communication, ensuring your queries and concerns are addressed swiftly." },
                { icon: <Users size={28} />, title: "Experienced Team", desc: "With years of experience, our experts bring in-depth knowledge to the table, guaranteeing top-notch solutions." },
                { icon: <Star size={28} />, title: "Professional Staff", desc: "Our dedicated professionals uphold the highest standards of professionalism in all interactions and project executions." },
                { icon: <Target size={28} />, title: "Business Savvy", desc: "We not only understand the technical aspects but also the business dynamics, making us a valuable partner in achieving your goals." },
                { icon: <Layers size={28} />, title: "One-Stop Shop", desc: "From development to support, we cover it all, simplifying your operations and reducing hassle." },
                { icon: <CheckCircle size={28} />, title: "100% Satisfaction", desc: "Your contentment is our priority; we're committed to delivering solutions that exceed your expectations." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={companyStyles.reasonCard}
                  variants={spring}
                  whileHover={{ y: -4, boxShadow: "0 8px 28px rgba(253,184,64,0.15)" }}
                >
                  <motion.div
                    className={companyStyles.reasonIcon}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Box */}
        <div className={companyStyles.contactBox}>
          <div className={styles.container}>
            <div className={companyStyles.contactBoxContent}>
              <p>
                Please <Link to="/contact">contact us</Link> and find out more about <span className={companyStyles.accent}>Scape Data Solutions</span> and how we can help you in your data‑driven business!
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* ── Footer (imported, same as home page) ── */}
      <Footer />

      {/* Back to Top */}
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

      {/* Chat Widget */}
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
                <div className={styles.chatAvatar}><MessageSquare size={14} /></div>
                <div>
                  <strong>Scape Data Support</strong>
                  <span><span className={styles.livePulse} />Online</span>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)}><X size={16} /></button>
            </div>
            <div className={styles.chatLog}>
              {chatLog.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`${styles.chatMsg} ${msg.from === "user" ? styles.chatMsgUser : styles.chatMsgBot}`}
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
              <motion.button
                onClick={sendChat}
                whileHover={{ scale: 1.1, backgroundColor: "#fdb840" }}
              >
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