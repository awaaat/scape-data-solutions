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
import PortalCallout from "../../components/PortalCallout/PortalCallout";
import styles from "./CompanyPage.module.css";

const ACCENT = "#3b82f6";

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
  { to: 7, suffix: "+", label: "Years in Business" },
  { to: 60, suffix: "+", label: "Countries Served Worldwide" },
  { to: 100, suffix: "%", label: "Client Satisfaction Goal" },
  { to: 24, suffix: "/7", label: "Quick Response Commitment" },
];

const REASONS = [
  { icon: <Zap size={18} />, title: "Quick Response", desc: "Our team is committed to prompt communication, ensuring your queries and concerns are addressed swiftly." },
  { icon: <Users size={18} />, title: "Experienced Team", desc: "With years of experience, our experts bring in-depth knowledge to the table, guaranteeing top-notch solutions." },
  { icon: <Star size={18} />, title: "Professional Staff", desc: "Our dedicated professionals uphold the highest standards of professionalism in all interactions and project executions." },
  { icon: <Target size={18} />, title: "Business Savvy", desc: "We understand both the technical and business dynamics, making us a valuable partner in achieving your goals." },
  { icon: <Layers size={18} />, title: "One-Stop Shop", desc: "From development to support, we cover it all, simplifying your operations and reducing hassle." },
  { icon: <CheckCircle size={18} />, title: "100% Satisfaction", desc: "Your contentment is our priority; we're committed to delivering solutions that exceed your expectations." },
];

const QUICK_LINKS = [
  { title: "Data Analytics", desc: "Actionable insights, fast.", href: "/services" },
  { title: "Custom Solutions", desc: "Tailored to your industry.", href: "/services" },
  { title: "Careers", desc: "Join the team.", href: "/careers" },
];

const OFFICES = [
  { city: "Folsom, CA", country: "USA" },
  { city: "Whitby, ON", country: "Canada" },
  { city: "Lahore", country: "Pakistan" },
  { city: "Nairobi", country: "Kenya" },
  { city: "London", country: "UK" },
];

// Milestones – sentence case labels, proper descriptions, no all caps
const MILESTONES = [
  { 
    date: "2017", 
    label: "Founded with a mission", 
    desc: "Scape Data Solutions launched to help businesses unlock the value hidden in their data, starting with a small team of 4." 
  },
  { 
    date: "2018", 
    label: "First enterprise trust", 
    desc: "A Fortune 500 retailer chose us to build their first unified analytics platform, delivering 6x ROI in year one." 
  },
  { 
    date: "2020", 
    label: "Cross-border expansion", 
    desc: "Opened our US office in Folsom, CA and Canada office in Whitby, ON, serving clients across multiple time zones with 24/7 support." 
  },
  { 
    date: "2022", 
    label: "AI innovation breakthrough", 
    desc: "Launched our predictive analytics practice, helping healthcare clients reduce patient wait times by 45% using machine learning." 
  },
  { 
    date: "2024", 
    label: "Global footprint", 
    desc: "Opened delivery centers in Lahore, Nairobi, and London, and now serve clients in 60+ countries with over 200 projects delivered." 
  },
  { 
    date: "2026", 
    label: "Industry leader", 
    desc: "Recognized as a top-10 data analytics firm by TechReview, a testament to our team's expertise and client-first approach." 
  },
];

export default function CompanyPage() {
  const [showTop, setShowTop] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const latestMilestone = MILESTONES[MILESTONES.length - 1];

  return (
    <div className={styles.page}>
      <SEO
        title="About Scape Data Solutions | Premier Data Analytics Company"
        description="Scape Data Solutions is a premier data analytics firm founded in 2017. Quick response, expert team, 100% client satisfaction goal."
        path="/company"
      />
      <Navbar activeNav="company" />

      <main>
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <motion.section
          className={styles.hero}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
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
                  A premier data analytics firm founded in 2017, driving measurable results for businesses across
                  the Globe.  
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
                  {["Founded 2017", "US & Canada", "100% Satisfaction Goal", "24/7 Response"].map((b) => (
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
                          <h3>{item.title}</h3>
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

        <section className={styles.container} style={{ padding: "3rem 1.5rem" }}>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.4rem" }}>Curious how we actually work?</h2>
            <p style={{ margin: "0 0 1.2rem", opacity: 0.75, maxWidth: "560px" }}>The clearest way to find out is to start. Submit a brief through the client portal and see our process firsthand.</p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="https://portal.scapedatasolutions.com/portal/signup" className={styles.btnPrimary}>Get Started in the Portal <ArrowRight size={16} /></a>
              <Link to="/contact" className={styles.btnSecondary}>Talk to Us First</Link>
            </div>
          </div>
        </section>

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
                Scape Data Solutions was founded with a vision to make data work for you
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
                that covers today's latest data technologies. When our clients are happy, we are successful.
              </motion.p>
              <motion.div variants={fadeUp}>
                <PortalCallout variant={0} />
              </motion.div>
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
                  We are hiring across all our offices. We prioritize in-person work
                  to support our fast-paced, collaborative projects.
                </p>
              </motion.div>
              <motion.div className={styles.officesActions} variants={fadeUp}>
                <Link to="/careers" className={styles.btnPrimary}>Open Roles</Link>
                <Link to="/careers" className={styles.btnSecondary}>Careers</Link>
              </motion.div>
            </div>
            <div className={styles.officesGrid}>
              {OFFICES.map((office) => (
                <motion.div key={office.city} className={styles.officeCard} variants={fadeUp}>
                  {office.city}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── TIMELINE WITH TOOLTIPS ────────────────────────────── */}
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
                From founding to industry leader, every milestone on the way.
              </motion.p>
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
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className={`${styles.timelineDot} ${i === MILESTONES.length - 1 ? styles.timelineDotActive : ""}`} />
                    {hoveredIndex === i && (
                      <div className={styles.timelineTooltip}>
                        <strong>{m.label}</strong>
                        <span>{m.desc}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.timelineLabels}>
              {MILESTONES.map((m, i) => (
                <span
                  key={i}
                  className={styles.timelineLabelItem}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {m.date}
                </span>
              ))}
            </div>

            <div className={styles.timelineActive}>
              <h3 className={styles.timelineActiveTitle}>{latestMilestone.label}</h3>
              <p className={styles.timelineActiveDesc}>{latestMilestone.desc}</p>
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
              <p>
                Please <Link to="/contact" style={{ color: ACCENT, fontWeight: 500 }}>contact us</Link>{" "}
                and find out more about Scape Data Solutions and how we can help you in your data-driven business.
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />

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