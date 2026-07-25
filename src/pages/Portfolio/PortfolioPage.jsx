import { useEffect, useState, useRef, useCallback } from 'react';
import SEO from "../../components/SEO/SEO";
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronUp,
  Database,
  Server,
  BarChart3,
  Code,
  Cloud,
  ScrollText,
  Compass,
  Layers,
  Gauge,
  X,
} from 'lucide-react';
import styles from './PortfolioPage.module.css';
import homeStyles from '../Home/HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const PORTFOLIO_ITEMS = [
  {
    title: "Northbridge Logistics Control Tower",
    client: "Northbridge Freight Co.",
    category: "Real-Time Analytics",
    filter: "bi",
    desc: "A live operations dashboard consolidating fleet telemetry, warehouse throughput, and delivery SLAs into one command view.",
    fullDesc: "Northbridge ran six regional dispatch boards that never agreed with each other. We replaced them with a single streaming dashboard pulling from GPS telemetry, warehouse scan events, and carrier APIs in real time. Dispatchers now see delays before customers call about them.",
    icon: <Gauge size={18} />,
    year: "2025",
    duration: "14 weeks",
    industry: "Logistics",
    result: "Late-delivery incidents dropped 38% in the first quarter after launch.",
  },
  {
    title: "Ashford Capital Risk Model",
    client: "Ashford Capital Partners",
    category: "Predictive Analytics",
    filter: "ai",
    desc: "A forward-looking credit risk model that reduced default exposure assessment time from days to minutes.",
    fullDesc: "Ashford's underwriting team was manually scoring loan applications against a spreadsheet of static rules. We built a model trained on five years of repayment history, layered with macroeconomic indicators, that scores new applications in real time and flags the ones that need a human look.",
    icon: <Layers size={18} />,
    year: "2025",
    duration: "9 weeks",
    industry: "Finance",
    result: "Assessment time fell from an average of 3 days to under 6 minutes.",
  },
  {
    title: "Mereside Retail Demand Engine",
    client: "Mereside Stores Group",
    category: "AI & Machine Learning",
    filter: "ai",
    desc: "Demand forecasting pipeline tuned to seasonal regional buying patterns across forty store locations.",
    fullDesc: "Mereside was over-ordering perishables at some stores and running out at others, with no model accounting for local seasonality. Our forecasting engine blends historic POS data with regional event calendars and weather signals, then feeds replenishment recommendations straight into their ordering system.",
    icon: <Compass size={18} />,
    year: "2024",
    duration: "11 weeks",
    industry: "Retail",
    result: "Waste from over-ordering cut by 27% across the network.",
  },
  {
    title: "Holmesglen Patient Flow Dashboard",
    client: "Holmesglen Private Hospital",
    category: "Business Intelligence",
    filter: "bi",
    desc: "Bed occupancy and patient-flow visualization that cut average admission delays by a measurable margin.",
    fullDesc: "Ward managers were tracking bed availability on whiteboards updated by hand every few hours. We built a live occupancy dashboard synced to admission and discharge events, with predictive alerts for wards approaching capacity.",
    icon: <BarChart3 size={18} />,
    year: "2024",
    duration: "8 weeks",
    industry: "Healthcare",
    result: "Average admission wait time dropped by 22 minutes.",
  },
  {
    title: "Tyneside Data Pipeline Overhaul",
    client: "Tyneside Digital Solutions",
    category: "Data Engineering",
    filter: "pipelines",
    desc: "Migrated nine legacy batch jobs into a single streaming pipeline, cutting nightly processing time by two-thirds.",
    fullDesc: "Nine separate overnight batch jobs, each with its own quirks and failure modes, were quietly eating six hours of processing time every night. We consolidated them into one streaming pipeline with proper monitoring and alerting, so failures get caught in minutes instead of discovered the next morning.",
    icon: <Database size={18} />,
    year: "2024",
    duration: "16 weeks",
    industry: "Technology",
    result: "Nightly processing time cut from 6 hours to under 2.",
  },
  {
    title: "Goldfields Members App",
    client: "Goldfields Community Credit Union",
    category: "Mobile Analytics",
    filter: "mobile",
    desc: "An in-app analytics layer giving credit union members real-time visibility into savings goals and spend patterns.",
    fullDesc: "Goldfields wanted to give members more than a balance and a transaction list. We built an analytics layer inside their existing app that categorizes spending automatically and tracks progress toward savings goals members set themselves.",
    icon: <Cloud size={18} />,
    year: "2023",
    duration: "10 weeks",
    industry: "Finance",
    result: "Members using the savings-goal feature increased monthly deposits by 19%.",
  },
  {
    title: "Ridgeline Plant Telemetry",
    client: "Ridgeline Precision Manufacturing",
    category: "Data Engineering",
    filter: "pipelines",
    desc: "Sensor-to-dashboard pipeline across three manufacturing floors, surfacing anomalies before they became downtime.",
    fullDesc: "Ridgeline's machines were instrumented, but the data went nowhere useful. It sat in local logs nobody checked until something broke. We piped sensor data into a central time-series store with anomaly detection tuned per machine type, with alerts going straight to the floor supervisor's phone.",
    icon: <Server size={18} />,
    year: "2023",
    duration: "12 weeks",
    industry: "Manufacturing",
    result: "Unplanned downtime reduced by 31% within six months.",
  },
  {
    title: "Coastal Code Insight Suite",
    client: "Coastal Code Collective",
    category: "Custom Development",
    filter: "ai",
    desc: "A bespoke internal analytics suite built to replace four disconnected spreadsheets with one source of truth.",
    fullDesc: "Four teams, four spreadsheets, four versions of the truth. We built a single internal application that pulls from their CRM, billing system, and project tracker, giving leadership one dashboard instead of a weekly reconciliation headache.",
    icon: <Code size={18} />,
    year: "2023",
    duration: "13 weeks",
    industry: "Technology",
    result: "Monthly reporting time dropped from three days to under two hours.",
  },
  {
    title: "Severnside Field Reporting",
    client: "Severnside Utilities",
    category: "Mobile Analytics",
    filter: "mobile",
    desc: "Offline-first field data capture for utility technicians, syncing automatically once back in network range.",
    fullDesc: "Field technicians work in dead zones all day, and the old paper forms meant a full day's lag before anything reached the office. We built an offline-capable mobile app that queues entries locally and syncs the moment a signal is available.",
    icon: <ScrollText size={18} />,
    year: "2022",
    duration: "7 weeks",
    industry: "Energy",
    result: "Reporting lag fell from a full day to under 15 minutes on average.",
  },
  {
    title: "Foothills Markets Loyalty Insights",
    client: "Foothills Fresh Markets",
    category: "Business Intelligence",
    filter: "bi",
    desc: "A loyalty-program dashboard surfacing which promotions actually drove repeat visits, rather than just redemptions.",
    fullDesc: "Foothills had loyalty data but no way to tell which promotions built repeat customers versus which just gave away margin. We built attribution models tied into their existing dashboard so marketing could see lifetime-value impact per campaign, not just redemption counts.",
    icon: <Gauge size={18} />,
    year: "2024",
    duration: "9 weeks",
    industry: "Retail",
    result: "Marketing reallocated 40% of promo spend toward higher-LTV campaigns.",
  },
  {
    title: "Aldgate Financial Client Portal",
    client: "Aldgate Financial Partners",
    category: "Custom Development",
    filter: "ai",
    desc: "A secure client-facing portal giving advisory clients real-time visibility into portfolio performance.",
    fullDesc: "Aldgate's clients were waiting on quarterly PDF statements to see how their portfolios were doing. We built a secure portal with live performance tracking, document storage, and a messaging channel straight to their advisor.",
    icon: <Layers size={18} />,
    year: "2023",
    duration: "15 weeks",
    industry: "Finance",
    result: "Client support calls about portfolio status dropped by 52%.",
  },
  {
    title: "Outback Energy Field Forecasting",
    client: "Outback Energy Partners",
    category: "Predictive Analytics",
    filter: "ai",
    desc: "Output forecasting for distributed generation assets, tuned to regional weather and grid demand patterns.",
    fullDesc: "Outback needed better visibility into expected output from a growing set of distributed generation sites. We built a forecasting model blending weather data, historical output, and grid demand signals, feeding directly into their dispatch planning tools.",
    icon: <Compass size={18} />,
    year: "2022",
    duration: "10 weeks",
    industry: "Energy",
    result: "Forecast accuracy improved enough to cut balancing costs by 16%.",
  },
];

const FILTERS = [
  { key: "all", label: "All Work" },
  { key: "bi", label: "Dashboards & BI" },
  { key: "ai", label: "AI Applications" },
  { key: "pipelines", label: "Data Pipelines" },
  { key: "mobile", label: "Mobile Analytics" },
];

const PROCESS_STEPS = [
  { n: "01", title: "Discovery", body: "We study the data you already have and the decisions it should be informing." },
  { n: "02", title: "Blueprint", body: "A working plan: what gets built, in what order, and how we'll know it worked." },
  { n: "03", title: "Build", body: "Iterative delivery in short cycles, with something usable at the end of each one." },
  { n: "04", title: "Handover", body: "Documentation, training, and a system your team can run without us in the room." },
];

const PortfolioPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const [showTop, setShowTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [pageLoaded, setPageLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

  const gridRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const isGridInView = useInView(gridRef, { once: false, amount: 0.05 });
  const isProcessInView = useInView(processRef, { once: false, amount: 0.25 });
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const t = setTimeout(() => setPageLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelectedItem(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedItem]);

  const fadeUp = {
    hidden: { opacity: 0, y: 34 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
  };
  const staggerFast = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.04 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 26, filter: "blur(4px)" },
    visible: (i) => ({
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { delay: (i % 6) * 0.05, duration: 0.5, ease: "easeOut" },
    }),
  };
  const heroTitleWord = {
    hidden: { opacity: 0, y: 24, rotateX: -40 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };
  const heroImgPrimaryVariant = {
    hidden: { opacity: 0, scale: 0.92, x: 30 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 } },
  };
  const heroImgSecondaryVariant = {
    hidden: { opacity: 0, scale: 0.9, x: -24, y: 24 },
    visible: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 } },
  };
  const stampVariant = {
    hidden: { opacity: 0, scale: 0.4, rotate: -25 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, ease: "backOut", delay: 0.9 } },
  };
  const metaPop = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const heroTitleLine1 = "Work That Earned";
  const heroTitleLine2Words = ["Its", "Keep"];

  const filteredItems =
    activeFilter === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.filter === activeFilter);

  const countFor = (key) =>
    key === "all" ? PORTFOLIO_ITEMS.length : PORTFOLIO_ITEMS.filter((i) => i.filter === key).length;

  const handleIconMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setMagnet({ x: relX * 0.35, y: relY * 0.35 });
  }, []);
  const resetMagnet = useCallback(() => setMagnet({ x: 0, y: 0 }), []);

  return (
    <div className={`${homeStyles.page} ${styles.page}`}>
      <SEO
        title="Portfolio | Scape Data Solutions"
        description="A record of completed engagements across business intelligence, AI applications, data pipelines, and mobile analytics."
        path="/portfolio"
      />

      <Navbar activeNav="portfolio" />

      <main className={homeStyles.mainContent}>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <motion.div initial="hidden" animate={pageLoaded ? "visible" : "hidden"} variants={staggerContainer}>
              <motion.div className={styles.heroEyebrow} variants={fadeUp}>
                Selected Engagements
              </motion.div>
              <motion.h1 className={`${styles.heroTitle} ${styles.display}`} style={{ perspective: 600 }}>
                <motion.span style={{ display: "block" }} initial="hidden" animate={pageLoaded ? "visible" : "hidden"} variants={heroTitleWord} transition={{ delay: 0.1 }}>
                  {heroTitleLine1}
                </motion.span>
                <motion.span style={{ display: "block" }}>
                  {heroTitleLine2Words.map((word, i) => (
                    <motion.span key={word} style={{ display: "inline-block", marginRight: "0.35em" }} initial="hidden" animate={pageLoaded ? "visible" : "hidden"} variants={heroTitleWord} transition={{ delay: 0.22 + i * 0.1 }}>
                      <em>{word}</em>
                    </motion.span>
                  ))}
                </motion.span>
              </motion.h1>
              <motion.p className={styles.heroSub} variants={fadeUp}>
                A record of the dashboards, models, and pipelines we've shipped for
                regional banks, independent hospitals, and growing manufacturers,
                each one built to be used long after launch day.
              </motion.p>
              <motion.div className={styles.heroMetaRow} variants={staggerFast}>
                {[
                  { n: "120+", l: "Projects Delivered" },
                  { n: "9", l: "Industries Served" },
                  { n: "94%", l: "Repeat Engagements" },
                ].map((m) => (
                  <motion.div key={m.l} className={styles.heroMetaItem} variants={metaPop}>
                    <span className={`${styles.heroMetaNumber} ${styles.display}`}>{m.n}</span>
                    <span className={styles.heroMetaLabel}>{m.l}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <div className={styles.heroImageStack}>
              <motion.div className={styles.heroImgSecondary} initial="hidden" animate={pageLoaded ? "visible" : "hidden"} variants={heroImgSecondaryVariant} whileHover={{ y: -6, transition: { duration: 0.35 } }}>
                <img src="/Images/site-images/portfolio-1000x500-1-768x384.jpg" alt="Detail from a recent client engagement" />
                <div className={styles.heroImgFrame} />
              </motion.div>
              <motion.div className={styles.heroImgPrimary} initial="hidden" animate={pageLoaded ? "visible" : "hidden"} variants={heroImgPrimaryVariant} whileHover={{ y: -6, transition: { duration: 0.35 } }}>
                <img src="/Images/site-images/Professional-portfolio-1472x828.webp" alt="Scape Data Solutions portfolio overview" />
                <div className={styles.heroImgFrame} />
                <span className={styles.heroImgCaption}>Field notes, 2022–2025</span>
              </motion.div>
              <motion.div className={styles.heroStamp} initial="hidden" animate={pageLoaded ? "visible" : "hidden"} variants={stampVariant} whileHover={{ rotate: 8, scale: 1.06 }}>
                Est. Record
              </motion.div>
            </div>
          </div>
        </section>

        {/* FILTER BAR */}
        <motion.section className={styles.filterSection} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.6 }} variants={fadeUp}>
          <div className={styles.filterRow}>
            {FILTERS.map((f) => (
              <motion.button
                key={f.key}
                className={`${styles.filterBtn} ${activeFilter === f.key ? styles.filterBtnActive : ""}`}
                onClick={() => setActiveFilter(f.key)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                layout
              >
                {f.label}
                <motion.span layout style={{ marginLeft: 6, fontSize: "0.7rem", opacity: 0.65 }}>
                  {countFor(f.key)}
                </motion.span>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* PORTFOLIO LEDGER GRID */}
        <motion.section className={styles.gridSection} ref={gridRef} initial="hidden" animate={isGridInView ? "visible" : "hidden"} variants={fadeIn}>
          <h2 className={styles.srOnly}>Portfolio Projects</h2>
          <motion.div className={styles.ledgerGrid} variants={staggerContainer} layout>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={styles.ledgerCard}
                  variants={cardVariants}
                  custom={index}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
                  whileHover={{ backgroundColor: "rgba(201, 160, 106, 0.07)", transition: { duration: 0.25 } }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedItem(item)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedItem(item); }}
                >
                  <div className={styles.ledgerCornerFold} />
                  <motion.div
                    className={styles.ledgerStatusDot}
                    animate={hoveredIndex === index ? { scale: [1, 1.6, 1] } : { scale: 1 }}
                    transition={{ duration: 0.6, repeat: hoveredIndex === index ? Infinity : 0 }}
                  />
                  <span className={styles.ledgerIndex}>
                    {String(index + 1).padStart(2, "0")} / {String(filteredItems.length).padStart(2, "0")}
                  </span>
                  <motion.div
                    className={styles.ledgerIcon}
                    onMouseMove={handleIconMouseMove}
                    onMouseLeave={resetMagnet}
                    animate={hoveredIndex === index ? { x: magnet.x, y: magnet.y, rotate: 8, scale: 1.08 } : { x: 0, y: 0, rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 250, damping: 14 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className={`${styles.ledgerTitle} ${styles.display}`}>{item.title}</h3>
                  <p className={styles.ledgerCategory}>{item.category}</p>
                  <p className={styles.ledgerDesc}>{item.desc}</p>
                  <div className={styles.ledgerMetaRow}>
                    <span className={styles.ledgerTag}>{item.year} · {item.duration}</span>
                    <span className={styles.ledgerOpenHint}>View case <ArrowUpRight size={12} /></span>
                    <motion.span className={styles.ledgerArrow} whileHover={{ x: 4, y: -4 }} transition={{ type: "spring", stiffness: 350, damping: 16 }}>
                      <ArrowUpRight size={16} />
                    </motion.span>
                  </div>
                  <div className={styles.ledgerHoverLine} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* PROJECT DETAIL MODAL */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div className={styles.lightbox} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedItem(null)}>
              <motion.div
                className={styles.lightboxContent}
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.lightboxClose} onClick={() => setSelectedItem(null)} aria-label="Close"><X size={18} /></button>
                <div className={styles.lightboxColorBar} />
                <div className={styles.lightboxBody}>
                  <motion.div className={styles.lbIconLarge} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1, type: "spring", stiffness: 300 }}>
                    {selectedItem.icon}
                  </motion.div>
                  <span className={styles.lightboxCategory}>{selectedItem.category}</span>
                  <h2 className={styles.display}>{selectedItem.title}</h2>
                  <div className={styles.lightboxMetaGrid}>
                    <div className={styles.lightboxMetaCell}>
                      <span className={styles.lightboxMetaLabel}>Client</span>
                      <span className={`${styles.lightboxMetaValue} ${styles.display}`}>{selectedItem.client}</span>
                    </div>
                    <div className={styles.lightboxMetaCell}>
                      <span className={styles.lightboxMetaLabel}>Industry</span>
                      <span className={`${styles.lightboxMetaValue} ${styles.display}`}>{selectedItem.industry}</span>
                    </div>
                    <div className={styles.lightboxMetaCell}>
                      <span className={styles.lightboxMetaLabel}>Duration</span>
                      <span className={`${styles.lightboxMetaValue} ${styles.display}`}>{selectedItem.duration}</span>
                    </div>
                  </div>
                  <div className={styles.lightboxLongDesc}><p>{selectedItem.fullDesc}</p></div>
                  <motion.div className={styles.lightboxResultBox} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <strong>Result: </strong>{selectedItem.result}
                  </motion.div>
                  <div className={styles.lightboxActions}>
                    <Link to="/contact" className={styles.lightboxBtn}>Start a Similar Project <ArrowRight size={14} /></Link>
                    <button className={styles.lightboxBtnGhost} onClick={() => setSelectedItem(null)}>Close</button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PROCESS STRIP */}
        <motion.section className={styles.processSection} ref={processRef} initial="hidden" animate={isProcessInView ? "visible" : "hidden"} variants={fadeUp}>
          <div className={styles.processInner}>
            <motion.div className={styles.processHeader} variants={fadeUp}>
              <h2 className={styles.display}>How Each Entry Gets Made</h2>
              <p>The same four stages, every time because consistency is what makes a record trustworthy.</p>
            </motion.div>
            <motion.div className={styles.processRow} variants={staggerContainer}>
              {PROCESS_STEPS.map((step) => (
                <motion.div key={step.n} className={styles.processStep} variants={fadeUp} whileHover={{ y: -3 }}>
                  <span className={styles.processNumber}>{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section className={styles.ctaSection} ref={ctaRef} initial="hidden" animate={isCtaInView ? "visible" : "hidden"} variants={fadeUp}>
          <div className={styles.ctaInner}>
            <h2 className={styles.display}>Add Your Project to the Record</h2>
            <p>Tell us what you're working with, and we'll tell you what's possible.</p>
            <motion.div style={{ display: "inline-block" }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className={styles.ctaButton}>
                Start a Conversation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.section>

      </main>

      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            className={homeStyles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;