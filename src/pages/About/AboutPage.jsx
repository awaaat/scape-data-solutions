// src/pages/AboutPage.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight, Award, ChevronUp, Lightbulb, Shield, Target, TrendingUp, Users,
  CheckCircle, Zap, BarChart, Clock, Layers, Star, Briefcase, Database, Code,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import styles from "./AboutPage.module.css";

const ACCENT = "#3b82f6";

// ─── Animation variants ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
// Hero stats
const STATS = [
  { number: 50, suffix: "+", label: "Years Combined Experience" },
  { number: 200, suffix: "+", label: "Projects Delivered" },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
  { number: 15, suffix: "+", label: "Industry Experts" },
];

// Core values
const VALUES = [
  { icon: <Target size={28} />, title: "Results-Driven", desc: "We measure success by your ROI, not just deliverables." },
  { icon: <Users size={28} />, title: "Partnership Mindset", desc: "We become an extension of your team, invested in your long-term success." },
  { icon: <Award size={28} />, title: "Excellence in Execution", desc: "We deliver enterprise-grade solutions with attention to detail, security, and scalability." },
  { icon: <TrendingUp size={28} />, title: "Continuous Innovation", desc: "We stay ahead of industry trends, constantly evolving our methods." },
  { icon: <Shield size={28} />, title: "Data Security & Privacy", desc: "Your data security is our top priority. We implement industry-leading practices." },
  { icon: <Lightbulb size={28} />, title: "Knowledge Transfer", desc: "We empower your team through comprehensive training and documentation." },
];

// Team members
const TEAM = [
  { name: "Dr. Robert Chen", role: "Chief Data Scientist & CEO", bio: "PhD in Machine Learning from Stanford. 15+ years leading data science teams at Fortune 500 companies.", expertise: ["Deep Learning", "AI Strategy", "Research"], image: "/images/team/robert.jpg" },
  { name: "Elena Rodriguez", role: "Head of Analytics", bio: "Former Head of Analytics at McKinsey. Built and scaled analytics practices across 20+ countries.", expertise: ["BI", "Analytics Strategy", "Team Leadership"], image: "/images/team/elena.jpg" },
  { name: "David Kimani", role: "Lead ML Engineer", bio: "10+ years building production ML systems. Former ML Engineer at Microsoft Azure ML team.", expertise: ["MLOps", "Production Systems", "Cloud"], image: "/images/team/david.jpg" },
  { name: "Sarah Mwangi", role: "Senior Data Scientist", bio: "PhD candidate in Statistics. Specializes in predictive modeling and time-series forecasting.", expertise: ["Statistical Modeling", "Forecasting", "Experimentation"], image: "/images/team/sarah.jpg" },
];

// Milestones (for timeline)
const MILESTONES = [
  { date: "2015", label: "Company Founded" },
  { date: "2017", label: "First Enterprise Client" },
  { date: "2019", label: "Expanded to US Market" },
  { date: "2021", label: "Launched Cloud Analytics Platform" },
  { date: "2023", label: "50+ Team Members" },
  { date: "2025", label: "200+ Projects Completed" },
];

// Table data: expertise matrix
const EXPERTISE_MATRIX = [
  { domain: "Data Engineering", skills: ["ETL/ELT", "Data Warehousing", "Cloud Platforms"], level: "Expert" },
  { domain: "Machine Learning", skills: ["Supervised Learning", "Deep Learning", "NLP"], level: "Advanced" },
  { domain: "Business Intelligence", skills: ["Dashboards", "Reporting", "KPI Design"], level: "Expert" },
  { domain: "Analytics Strategy", skills: ["Roadmapping", "ROI Analysis", "Team Building"], level: "Advanced" },
];

// Services (unordered list)
const SERVICES = [
  "Data Strategy & Consulting",
  "Custom Analytics Solutions",
  "Machine Learning & AI",
  "Business Intelligence Dashboards",
  "Data Engineering & ETL",
  "Training & Knowledge Transfer",
];

// Core principles (ordered list)
const PRINCIPLES = [
  "Understand the business problem first.",
  "Build with scalability and security in mind.",
  "Validate with real data and iterate.",
  "Empower clients through knowledge transfer.",
  "Measure success by tangible outcomes.",
];

export default function AboutPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={styles.page}>
      <SEO
        title="About Us | Expert Data Science Team - Scape Data Solutions"
        description="Scape Data Solutions is a premier data analytics firm with 50+ years of combined experience. Expert team, 200+ projects, 98% satisfaction."
        path="/about"
      />
      <Navbar activeNav="about" />

      <main>
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <div className={styles.heroLeft}>
                <p className={styles.heroLabel}>About us</p>
                <h1 className={styles.heroTitle}>
                  Data Experts You Can <span style={{ color: ACCENT }}>Trust</span>
                </h1>
                <p className={styles.heroDesc}>
                  Founded by data scientists and engineers from leading tech companies,
                  we've grown into a trusted partner for organizations seeking to unlock
                  the power of their data.
                </p>
                <div className={styles.heroButtons}>
                  <Link to="/contact" className={styles.btnPrimary}>
                    Get In Touch <ArrowRight size={16} />
                  </Link>
                  <Link to="/services" className={styles.btnSecondary}>
                    Our Services
                  </Link>
                </div>
              </div>
              <div className={styles.heroRight}>
                <div className={styles.statsGridHero}>
                  {STATS.map((stat, i) => (
                    <motion.div
                      key={i}
                      className={styles.statCard}
                      initial="hidden"
                      animate="visible"
                      variants={spring}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className={styles.statNumber}>
                        <Counter to={stat.number} suffix={stat.suffix} />
                      </span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MISSION ────────────────────────────────────────────── */}
        <motion.section
          className={styles.missionSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.missionBlock}>
              <p className={styles.sectionLabel}>Our mission</p>
              <h2 className={styles.sectionTitle}>
                To democratize data science and make world‑class analytics accessible to businesses of all sizes.
              </h2>
              <p className={styles.missionDesc}>
                We believe every company deserves the competitive advantage that comes from data‑driven decision making.
                Our team combines deep technical expertise with real‑world business experience to deliver measurable results.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ─── VALUES ──────────────────────────────────────────────── */}
        <motion.section
          className={styles.valuesSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger}
        >
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>Our values</h2>
            </div>
            <div className={styles.valuesGrid}>
              {VALUES.map((v, i) => (
                <motion.div key={i} className={styles.valueCard} variants={spring} whileHover={{ y: -4, boxShadow: "0 8px 28px rgba(0,0,0,0.06)" }}>
                  <div className={styles.valueIcon}>{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── SERVICES (Unordered List) ──────────────────────────── */}
        <motion.section
          className={styles.servicesSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>What we do</h2>
            </div>
            <ul className={styles.servicesList}>
              {SERVICES.map((service, i) => (
                <motion.li key={i} variants={spring} whileHover={{ scale: 1.02, x: 8 }}>
                  <CheckCircle size={18} className={styles.listIcon} />
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* ─── EXPERTISE MATRIX (Table) ───────────────────────────── */}
        <motion.section
          className={styles.tableSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>Our expertise</h2>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.expertiseTable}>
                <thead>
                  <tr>
                    <th>Domain</th>
                    <th>Key Skills</th>
                    <th>Proficiency</th>
                  </tr>
                </thead>
                <tbody>
                  {EXPERTISE_MATRIX.map((row, i) => (
                    <motion.tr key={i} variants={spring} whileHover={{ backgroundColor: "#f8fafc" }}>
                      <td>{row.domain}</td>
                      <td>{row.skills.join(", ")}</td>
                      <td><span className={styles.proficiencyBadge}>{row.level}</span></td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* ─── PRINCIPLES (Ordered List) ──────────────────────────── */}
        <motion.section
          className={styles.principlesSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>Our guiding principles</h2>
            </div>
            <ol className={styles.principlesList}>
              {PRINCIPLES.map((p, i) => (
                <motion.li key={i} variants={spring} whileHover={{ scale: 1.02, color: ACCENT }}>
                  {p}
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.section>

        {/* ─── TIMELINE ────────────────────────────────────────────── */}
        <motion.section
          className={styles.timelineSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>Our journey</h2>
            </div>
            <div className={styles.timelineTrack}>
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
            </div>
            <div className={styles.timelineLabels}>
              {MILESTONES.map((m, i) => (
                <span key={i}>{m.date}</span>
              ))}
            </div>
            <div className={styles.timelineActive}>
              <div className={styles.timelineActiveDate}>Today</div>
              <h3 className={styles.timelineActiveTitle}>200+ Projects & Growing</h3>
              <p className={styles.timelineActiveDesc}>
                We continue to expand our expertise and client base, delivering excellence every day.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ─── TEAM ──────────────────────────────────────────────────── */}
        <motion.section
          className={styles.teamSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger}
        >
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>Meet our leadership</h2>
              <p className={styles.sectionSubtitle}>Our team combines deep technical expertise with real‑world business experience</p>
            </div>
            <div className={styles.teamGrid}>
              {TEAM.map((member, i) => (
                <motion.div key={i} className={styles.teamCard} variants={spring} whileHover={{ y: -4, boxShadow: "0 8px 28px rgba(0,0,0,0.06)" }}>
                  <div className={styles.avatarContainer}>
                    <div className={styles.avatarPlaceholder}>{member.name.charAt(0)}</div>
                  </div>
                  <h3>{member.name}</h3>
                  <div className={styles.memberRole}>{member.role}</div>
                  <p className={styles.memberBio}>{member.bio}</p>
                  <div className={styles.expertiseTags}>
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
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
              <h2 className={styles.ctaTitle}>Ready to build something great together?</h2>
              <p className={styles.ctaDesc}>Partner with a team that's committed to your success.</p>
              <Link to="/contact" className={styles.btnPrimary}>
                Start Your Journey <ArrowRight size={16} />
              </Link>
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