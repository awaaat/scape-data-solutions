// src/pages/Services/CreditRiskScoring/CreditRiskScoringPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CreditCard,
  Shield,
  CheckCircle,
  Clock,
  Zap,
  Eye,
  Target,
  Users,
  BarChart3,
  Database,
  Activity,
  FileText,
  Search,
  PieChart,
  LineChart,
  Send,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import { apiService } from "../../../services/api";
import styles from "./CreditRiskScoringPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

const dataOverviewImg = "/Images/site-images/CA Data Overview.webp";
const analystImg = "/Images/site-images/Financial Analyst Image.webp";

// ─── SCROLL ANIMATION WRAPPER ────────────────────────────────────
const ScrollReveal = ({ children, delay = 0, direction = "up" }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={variants}
    >
    <SEO
      title="Credit Risk Scoring | Scape Data Solutions"
      description="AI-powered credit risk scoring that helps lenders assess borrower risk accurately and lend with confidence."
      path="/services/credit-risk-scoring"
      schema={buildServiceSchema({
        name: "Credit Risk Scoring",
        description: "AI-powered credit risk scoring that helps lenders assess borrower risk accurately and lend with confidence.",
        path: "/services/credit-risk-scoring",
      })}
    />
      {children}
    </motion.div>
  );
};

// ─── LIVE CREDIT SCORE SIMULATOR ────────────────────────────────
const LiveCreditSimulator = () => {
  const [score, setScore] = useState(72);
  const [payment, setPayment] = useState(72);
  const [utilization, setUtilization] = useState(38);
  const [income, setIncome] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      const change = Math.floor(Math.random() * 5) - 2;
      setScore(prev => Math.max(15, Math.min(98, prev + change)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newScore = Math.round(payment * 0.4 + (100 - utilization) * 0.3 + income * 0.3);
    setScore(Math.max(15, Math.min(98, newScore)));
  }, [payment, utilization, income]);

  const getTier = (s) => {
    if (s < 55) return { label: "Declined", color: "#FF0201" };
    if (s < 80) return { label: "Manual Review", color: "#FDB840" };
    return { label: "Approved", color: "#27ae60" };
  };

  const tier = getTier(score);
  const needleAngle = -90 + (score / 100) * 180;

  const sliders = [
    { key: "payment", label: "Payment History", value: payment, set: setPayment, hint: "On-time payments over 24 months" },
    { key: "utilization", label: "Credit Utilization", value: utilization, set: setUtilization, hint: "Lower is better" },
    { key: "income", label: "Income Stability", value: income, set: setIncome, hint: "Consistency of verified income" },
  ];

  return (
    <div className={styles.simulatorWrapper}>
      <div className={styles.simulator}>
        <div className={styles.gaugeSection}>
          <svg viewBox="0 0 300 170" className={styles.gaugeSvg}>
            <defs>
              <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF0201" />
                <stop offset="50%" stopColor="#FDB840" />
                <stop offset="100%" stopColor="#27ae60" />
              </linearGradient>
            </defs>
            <path d="M20,160 A130,130 0 0,1 280,160" fill="none" stroke="#eee" strokeWidth="14" strokeLinecap="round" />
            <motion.path
              d="M20,160 A130,130 0 0,1 280,160"
              fill="none"
              stroke="url(#gaugeGrad)"
              strokeWidth="14"
              strokeLinecap="round"
              animate={{ pathLength: score / 100 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            />
            <motion.line
              x1="150"
              y1="160"
              x2="150"
              y2="45"
              stroke="#0D1C1F"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ transformOrigin: "150px 160px" }}
              animate={{ rotate: needleAngle }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            />
            <circle cx="150" cy="160" r="8" fill="#0D1C1F" />
          </svg>

          <div className={styles.gaugeReadout}>
            <motion.span 
              key={score} 
              className={styles.gaugeValue}
              animate={{ scale: [1, 1.1, 1], color: tier.color }}
              transition={{ duration: 0.3 }}
            >
              {score}
            </motion.span>
            <span className={styles.gaugeLabel}>Live Credit Score</span>
          </div>

          <motion.div
            key={tier.label}
            className={styles.decisionBadge}
            style={{ 
              background: tier.label === "Declined" ? "rgba(255,2,1,0.15)" : 
                         tier.label === "Manual Review" ? "rgba(253,184,64,0.15)" : 
                         "rgba(39,174,96,0.15)",
              color: tier.color,
              borderColor: tier.color
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            {tier.label}
          </motion.div>
        </div>

        <div className={styles.sliderSection}>
          <span className={styles.sliderSectionLabel}>Adjust Borrower Profile</span>
          {sliders.map((s) => (
            <div key={s.key} className={styles.sliderRow}>
              <div className={styles.sliderRowTop}>
                <span className={styles.sliderLabel}>{s.label}</span>
                <motion.span 
                  className={styles.sliderValue}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.2 }}
                >
                  {s.value}
                </motion.span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={s.value}
                onChange={(e) => s.set(Number(e.target.value))}
                className={styles.slider}
                style={{ "--slider-fill": `${s.value}%` }}
              />
              <span className={styles.sliderHint}>{s.hint}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── LIVE STATS BAR ──────────────────────────────────────────────
const LiveStatsBar = () => {
  const [stats, setStats] = useState([
    { label: "Applications Processed", value: 8472 },
    { label: "Approval Rate", value: 68, suffix: "%" },
    { label: "Avg Response", value: 2.4, suffix: "s" },
    { label: "Default Rate", value: 3.8, suffix: "%" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => prev.map((stat, i) => {
        const change = Math.floor(Math.random() * 4) - 2;
        if (i === 0) return { ...stat, value: stat.value + change };
        if (i === 1) return { ...stat, value: Math.max(50, Math.min(85, stat.value + change * 0.5)) };
        if (i === 2) return { ...stat, value: Math.max(0.5, Math.min(5, Number((stat.value + change * 0.1).toFixed(1)))) };
        if (i === 3) return { ...stat, value: Math.max(0.5, Math.min(10, Number((stat.value + change * 0.1).toFixed(1)))) };
        return stat;
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.statsBar}>
      {stats.map((stat, i) => (
        <motion.div key={i} className={styles.statItem}>
          <motion.span 
            className={styles.statValue}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            {stat.value}{stat.suffix || ""}
          </motion.span>
          <span className={styles.statLabel}>{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

// ─── BORROWER FIELD ──────────────────────────────────────────────
const BorrowerField = () => {
  const dots = Array.from({ length: 48 });
  return (
    <div className={styles.borrowerField}>
      {dots.map((_, i) => {
        const approved = Math.random() > 0.35;
        return (
          <motion.span
            key={i}
            className={styles.borrowerDot}
            style={{
              left: `${(i % 12) * 8.3 + 2}%`,
              top: `${Math.floor(i / 12) * 25 + 10}%`,
              background: approved ? "#27ae60" : "#FF0201",
            }}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: (i % 6) * 0.3,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

// ─── LIVE SIGNAL BARS ─────────────────────────────────────────────
const LiveSignalBars = () => {
  const bars = [
    { label: "Payment History", base: 75 },
    { label: "Cash Flow", base: 70 },
    { label: "Credit Utilization", base: 45 },
    { label: "Income Stability", base: 65 },
    { label: "Debt Service", base: 55 },
    { label: "Collateral", base: 60 },
  ];

  const [values, setValues] = useState(bars.map(b => b.base));
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setValues(prev => prev.map((v, i) => {
        const change = Math.floor(Math.random() * 8) - 4;
        return Math.max(10, Math.min(95, v + change));
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.signalBars}>
      {bars.map((bar, i) => (
        <div
          key={bar.label}
          className={styles.signalBarCol}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          {hovered === i && (
            <div className={styles.signalTooltip}>
              <strong>{values[i]}%</strong>
              <span>{bar.label}</span>
            </div>
          )}
          <motion.div
            className={styles.signalBar}
            animate={{ 
              height: `${values[i]}%`,
              background: values[i] > 70 ? "#27ae60" : values[i] > 40 ? "#FDB840" : "#FF0201"
            }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
          >
            <motion.div
              className={styles.signalBarGlow}
              animate={{ 
                opacity: [0.3, 0.8, 0.3],
                background: values[i] > 70 ? "#27ae60" : values[i] > 40 ? "#FDB840" : "#FF0201"
              }}
              transition={{ duration: 2 + i * 0.2, repeat: Infinity }}
            />
          </motion.div>
          <span className={styles.signalBarLabel}>{bar.label}</span>
        </div>
      ))}
    </div>
  );
};

// ─── SCORING PIPELINE ─────────────────────────────────────────────
const ScoringPipeline = () => {
  const stages = [
    { icon: <Database size={18} />, title: "Data Integration", desc: "Combine traditional and alternative data sources" },
    { icon: <BarChart3 size={18} />, title: "Predictive Modeling", desc: "ML models predict default probability" },
    { icon: <Target size={18} />, title: "Risk Segmentation", desc: "Borrowers segmented into risk tiers" },
    { icon: <Eye size={18} />, title: "Explainable AI", desc: "Clear explanations for every score" },
    { icon: <Activity size={18} />, title: "Real-Time Monitoring", desc: "Dynamic risk assessment" },
    { icon: <FileText size={18} />, title: "Automated Underwriting", desc: "Streamlined approvals" },
  ];

  return (
    <div className={styles.pipeline}>
      <div className={styles.pipelineTrack}>
        <motion.div
          className={styles.pipelinePulse}
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className={styles.pipelineStages}>
        {stages.map((stage, i) => (
          <ScrollReveal key={stage.title} delay={i * 0.08} direction="up">
            <div className={styles.pipelineStage}>
              <motion.div
                className={styles.pipelineNode}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity }}
              >
                {stage.icon}
              </motion.div>
              <span className={styles.pipelineIndex}>{String(i + 1).padStart(2, "0")}</span>
              <h4 className={styles.pipelineTitle}>{stage.title}</h4>
              <p className={styles.pipelineDesc}>{stage.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────
const CreditRiskScoringPage = () => {
  const formRef = useRef(null);
  const successRef = useRef(null);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showTop, setShowTop] = useState(false);
  const [particles, setParticles] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Credit Risk Scoring",
    message: "",
  });

  // ── Particles ──────────────────────────────────────────────────
  useEffect(() => {
    setParticles(Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 12 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.2 + 0.05,
    })));
  }, []);

  // ── Show/hide scroll-to-top ──────────────────────────────────
  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // ── Scroll to top when success state appears ──────────────────
  useEffect(() => {
    if (!submitted) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }, [submitted]);

  // ── Handlers ─────────────────────────────────────────────────
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await apiService.submitLead(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", phone: "", service: "Credit Risk Scoring", message: "" });
    } catch (err) {
      setError(
        err.message ||
        "Failed to send message. Please email us directly at info@scapedatasolutions.com",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <Helmet>
        <title>Credit Risk Scoring | Scape Data Solutions</title>
        <meta name="description" content="AI-powered credit risk scoring with real-time analytics and predictive modeling." />
      </Helmet>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <BorrowerField />
        <div className={styles.container}>
          <ScrollReveal direction="down" delay={0.1}>
            <motion.div
              className={styles.heroBadge}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CreditCard size={13} /> <span>Live Credit Risk Scoring</span>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>Lend Smart.</span>
              <span className={styles.heroTitleLine} style={{ color: "#FF0201" }}>Lend Safe.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <p className={styles.heroSub}>
              AI-driven credit risk assessment with real-time scoring, predictive analytics, and explainable decisions.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <div className={styles.heroCta}>
              <a href="#demo" className={styles.heroBtn}>
                Start Scoring <ArrowRight size={15} />
              </a>
              <a href="#how-it-works" className={styles.heroBtnSecondary}>
                See How It Works <Eye size={14} />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.5}>
            <p className={styles.simulatorHint}>← Drag sliders or watch live updates →</p>
            <LiveCreditSimulator />
            <LiveStatsBar />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── OVERVIEW WITH IMAGE ─────────────────────────────── */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <ScrollReveal direction="left" delay={0.1}>
              <div className={styles.overviewText}>
                <h3>Real <strong>Credit Data. Defensible Analysis.</strong></h3>
                <h4><strong>See how our solution cuts through credit risk opacity:</strong></h4>
                <ul className={styles.overviewList}>
                  <li>
                    <h4><strong>Evaluate borrowers against real peer data derived from actual financials and loan agreements.</strong></h4>
                  </li>
                  <li>
                    <h4><strong>Generate ratings-aligned credit risk scores using a standardized methodology.</strong></h4>
                  </li>
                  <li>
                    <h4><strong>Compare borrower performance relative to industry, region, and rating-category peer aggregates.</strong></h4>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className={styles.overviewImage}>
                <img src={dataOverviewImg} alt="Credit Data Overview" className={styles.overviewImg} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── DARK METRICS BAR ────────────────────────────────── */}
      <section className={styles.metricsSection}>
        <div className={styles.container}>
          <div className={styles.metricsGrid}>
            <ScrollReveal direction="up" delay={0.1}>
              <div className={styles.metricItem}>
                <motion.span 
                  className={styles.metricNumber}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ~80
                </motion.span>
                <span className={styles.metricLabel}>Private Credit Metrics</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className={styles.metricItem}>
                <motion.span 
                  className={styles.metricNumber}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  &gt;7,700
                </motion.span>
                <span className={styles.metricLabel}>Underlying Companies</span>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className={styles.metricItem}>
                <motion.span 
                  className={styles.metricNumber}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  Millions
                </motion.span>
                <span className={styles.metricLabel}>of Data Points</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── THREE TOOLS ──────────────────────────────────────── */}
      <section className={styles.toolsSection}>
        <div className={styles.container}>
          <ScrollReveal direction="up" delay={0.1}>
            <h3 className={styles.sectionTitleSmall}>The Solution: Three Integrated Tools</h3>
          </ScrollReveal>
          <div className={styles.toolsGrid}>
            <ScrollReveal direction="up" delay={0.2}>
              <motion.div 
                className={`${styles.toolCard} ${styles.toolCardDark}`}
                whileHover={{ y: -4 }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className={styles.toolIcon}><Search size={22} /></div>
                <h4>Data Explorer</h4>
                <p>Surface aggregates of real company financial statements and loan statistics.</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <motion.div 
                className={`${styles.toolCard} ${styles.toolCardDark}`}
                whileHover={{ y: -4 }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <div className={styles.toolIcon}><PieChart size={22} /></div>
                <h4>Data Overview</h4>
                <p>Visualize trends, ratio distributions, and key performance metrics.</p>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.4}>
              <motion.div 
                className={`${styles.toolCard} ${styles.toolCardDark}`}
                whileHover={{ y: -4 }}
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className={styles.toolIcon}><LineChart size={22} /></div>
                <h4>Credit Estimates Tool</h4>
                <p>Apply a scoring framework using six quantitative inputs.</p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── FEATURE LIST WITH IMAGE ─────────────────────────── */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            <ScrollReveal direction="left" delay={0.1}>
              <div className={styles.featureImage}>
                <img src={analystImg} alt="Financial Analyst" className={styles.featureImg} />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>Everything credit teams need to compare borrowers.</h3>
                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}><BarChart3 size={18} /></div>
                    <div>
                      <h4>Aggregated Private Credit Metrics</h4>
                      <p>Compare borrowers against nearly 80 segment statistics spanning financial statements, debt schedules, and credit estimates.</p>
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}><Target size={18} /></div>
                    <div>
                      <h4>Precise Peer Segmentation</h4>
                      <p>Filter peers by credit quality, industry, geography, and transaction type.</p>
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}><Database size={18} /></div>
                    <div>
                      <h4>Flexible Delivery</h4>
                      <p>Review relevant peer aggregates and export directly to Excel for credit memos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── PIPELINE ─────────────────────────────────────────── */}
      <section className={styles.pipelineSection} id="how-it-works">
        <div className={styles.container}>
          <ScrollReveal direction="up" delay={0.1}>
            <h3 className={styles.sectionTitleSmall}>How We Score Risk</h3>
            <p className={styles.sectionLead}>
              A single continuous pipeline — data flows in, a score comes out.
            </p>
          </ScrollReveal>
          <ScoringPipeline />
        </div>
      </section>

      {/* ─── BUILT FOR ────────────────────────────────────────── */}
      <section className={styles.builtForSection}>
        <div className={styles.container}>
          <ScrollReveal direction="up" delay={0.1}>
            <div className={styles.builtForContent}>
              <h5 className={styles.builtForLabel}>Built For:</h5>
              <div className={styles.builtForTags}>
                {[
                  "Private Credit Investors",
                  "CLO Managers",
                  "Credit Analysts",
                  "Portfolio Managers",
                  "Bank Lenders",
                  "Risk Management",
                  "Investor Relations",
                  "Rating Advisors"
                ].map((tag, i) => (
                  <motion.span
                    key={tag}
                    className={styles.builtForTag}
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay: i * 0.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FINAL CTA WITH WORKING FORM ──────────────────────── */}
      <section className={styles.ctaSection} id="demo">
        <div className={styles.container}>
          {submitted ? (
            /* ─── SUCCESS STATE ─────────────────────────────── */
            <ScrollReveal direction="up" delay={0.1}>
              <div className={styles.successContent}>
                <motion.div
                  className={styles.successIcon}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 350, delay: 0.2 }}
                >
                  <CheckCircle size={56} />
                </motion.div>

                <h2 className={styles.successTitle}>Demo Request Received!</h2>

                <p className={styles.successText}>
                  Thank you for your interest in our Credit Risk Scoring solution.
                  We've received your request and will get back to you within 24 hours.
                </p>

                <div className={styles.nextSteps}>
                  <h3>What happens next?</h3>
                  <ul>
                    {[
                      "We'll review your request",
                      "A team member will reach out within 24 hours",
                      "We'll schedule a personalized demo",
                      "You'll receive a custom proposal",
                    ].map((s, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.3 + i * 0.12,
                          type: "spring",
                          stiffness: 280,
                        }}
                      >
                        {s}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href="/services"
                  className={styles.homeButton}
                  whileHover={{ scale: 1.03, backgroundColor: "#1a1a2e", color: "#fdb840" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Our Services
                </motion.a>
              </div>
            </ScrollReveal>
          ) : (
            /* ─── FORM ────────────────────────────────────────── */
            <div className={styles.ctaGrid}>
              <ScrollReveal direction="left" delay={0.1}>
                <div className={styles.ctaText}>
                  {/* Floating particles */}
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    {particles.map((p, i) => (
                      <motion.div
                        key={i}
                        style={{
                          position: "absolute",
                          left: `${p.x}%`,
                          top: `${p.y}%`,
                          width: p.size,
                          height: p.size,
                          borderRadius: "50%",
                          backgroundColor: "#FF0201",
                          opacity: p.opacity,
                          pointerEvents: "none",
                        }}
                        animate={{
                          y: [0, -25, 0],
                          x: [0, 10, 0],
                          opacity: [p.opacity, p.opacity * 3, p.opacity],
                        }}
                        transition={{
                          duration: p.duration,
                          delay: p.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>

                  <motion.div
                    className={styles.ctaBadge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Sparkles size={13} /> Free Demo
                  </motion.div>

                  <h2>Ratings-Grade Rigor.<br />Real-World Results.</h2>
                  <ul className={styles.ctaList}>
                    <li>Built for Credit Workflows</li>
                    <li>Real Private Company Data</li>
                    <li>Flexible Delivery</li>
                  </ul>
                  <p>See how our solution delivers the transparency and precision you need.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <div className={styles.ctaForm}>
                  <div className={styles.formCard}>
                    <motion.div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 11.5,
                        color: "#555",
                        paddingBottom: 10,
                        borderBottom: "1px solid #f0f0f0",
                        marginBottom: 16,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <motion.span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          backgroundColor: "#00e676",
                          display: "inline-block",
                        }}
                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                      />
                      Our team is online and ready to help
                    </motion.div>

                    <h4>Request a Demo</h4>

                    <AnimatePresence>
                      {error && (
                        <motion.div
                          className={styles.errorBox}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className={styles.demoForm}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Corporate Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <input
                        type="hidden"
                        name="service"
                        value="Credit Risk Scoring Demo"
                      />
                      <textarea
                        name="message"
                        placeholder="Tell us about your credit risk challenges..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                      />
                      <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={loading}
                        whileHover={!loading ? { scale: 1.02 } : {}}
                        whileTap={!loading ? { scale: 0.98 } : {}}
                      >
                        {loading ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              style={{
                                display: "inline-block",
                                width: 16,
                                height: 16,
                                border: "2px solid #fff",
                                borderTopColor: "transparent",
                                borderRadius: "50%",
                              }}
                            />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Send size={15} /> Request a Demo
                          </>
                        )}
                      </button>
                      <p className={styles.privacy}>
                        By submitting, you agree to our privacy policy. We'll never share your information.
                      </p>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default CreditRiskScoringPage;