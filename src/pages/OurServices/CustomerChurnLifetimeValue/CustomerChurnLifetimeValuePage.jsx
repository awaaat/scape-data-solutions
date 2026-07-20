import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  Users,
  AlertTriangle,
  LineChart,
  Target,
  Clock,
  BarChart3,
  Database,
  Quote,
  ChevronDown,
  Play,
  Activity,
  CreditCard,
  Headphones,
  MessageCircle,
  TrendingDown,
  Heart,
  DollarSign,
  CheckCircle,
  Shield,
  Zap,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./CustomerChurnLifetimeValuePage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── Images ──────────────────────────────────────────────────────
const heroImg = "/Images/site-images/churn-4.png";
const featureImg = "/Images/site-images/churn-3.jpeg";
const testimonialImg = "/Images/site-images/churn-2.jpeg";
const ctaImg = "/Images/site-images/churn-1.png";
const churnMetaImg = "/Images/site-images/churn-meta.webp";
const churn6Img = "/Images/site-images/churn-6.webp";

// ─── Animation Variants ─────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeUpFast = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const staggerChildrenFast = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const revealOnce = { once: false, amount: 0.25 };
const revealOnceTight = { once: false, amount: 0.4 };

// ─── Animated Counter ────────────────────────────────────────────
const AnimatedNumber = ({ target, label, suffix = "%", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2200;
      const step = Math.max(0.1, target / (duration / 16));
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(interval);
    }
    setCount(0);
  }, [isInView, target]);

  return (
    <motion.div
      className={styles.statItem}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scaleUp}
    >
    <SEO
      title="Customer Churn & Lifetime Value Analysis | Scape Data Solutions"
      description="Predictive churn modeling and lifetime value analysis that bring your sales, marketing, and service teams together."
      path="/services/customer-churn-lifetime-value"
      schema={buildServiceSchema({
        name: "Customer Churn & Lifetime Value Analysis",
        description: "Predictive churn modeling and lifetime value analysis that bring your sales, marketing, and service teams together.",
        path: "/services/customer-churn-lifetime-value",
      })}
    />
      <span className={styles.statValue}>
        {prefix}
        {count}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  );
};

// ─── Small ring gauge ────────────────────────────────────────────
const StatGauge = ({ target, prefix = "", suffix = "", label, color, decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1800;
      const step = Math.max(0.05, target / (duration / 16));
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(interval);
    }
    setCount(0);
  }, [isInView, target]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.round(count);

  return (
    <div className={styles.gaugeItem} ref={ref}>
      <div className={styles.gaugeRingWrap}>
        <svg viewBox="0 0 120 120" className={styles.gaugeRing}>
          <circle cx="60" cy="60" r="52" className={styles.gaugeTrack} />
          <motion.circle
            cx="60"
            cy="60"
            r="52"
            className={styles.gaugeFill}
            style={{ stroke: color }}
            transform="rotate(-90 60 60)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 0.78 } : { pathLength: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          />
        </svg>
        <div className={styles.gaugeValue}>
          {prefix}
          {displayValue}
          {suffix}
        </div>
      </div>
      <p className={styles.gaugeLabel}>{label}</p>
    </div>
  );
};

// ─── Animated CLV trend line ────────────────────────────────────
const ClvTrendChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  return (
    <div className={styles.trendChartWrap} ref={ref}>
      <svg viewBox="0 0 300 100" className={styles.trendSvg} preserveAspectRatio="none">
        <motion.path
          d="M0,82 C35,78 55,52 88,48 C126,43 148,62 182,38 C222,14 252,26 300,8"
          className={styles.trendLine}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        <motion.circle
          cx="300"
          cy="8"
          r="5"
          className={styles.trendDot}
          animate={{ scale: [1, 1.7, 1], opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <span className={styles.trendLabel}>Illustrative 12-month CLV trend, per cohort</span>
    </div>
  );
};

// ─── Animated donut chart ───────────────────────────────────────
const dataSegments = [
  { length: 0.32, offset: 0, color: "#fb5004", label: "Behavioral data", pct: "32%" },
  { length: 0.27, offset: 0.32, color: "#0a2f38", label: "Transactional data", pct: "27%" },
  { length: 0.23, offset: 0.59, color: "#16606e", label: "Support & service data", pct: "23%" },
  { length: 0.18, offset: 0.82, color: "#e8a33d", label: "Sentiment & social data", pct: "18%" },
];

const DataDonut = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  return (
    <div className={styles.donutWrap} ref={ref}>
      <motion.svg
        viewBox="0 0 200 200"
        className={styles.donutSvg}
        animate={{ rotate: [0, 4, 0, -4, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="100" cy="100" r="70" className={styles.donutTrack} />
        {dataSegments.map((s, i) => (
          <motion.circle
            key={s.label}
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke={s.color}
            strokeWidth="26"
            pathOffset={s.offset}
            transform="rotate(-90 100 100)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: s.length } : { pathLength: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: i * 0.15 }}
          />
        ))}
      </motion.svg>
      <ul className={styles.donutLegend}>
        {dataSegments.map((s) => (
          <li key={s.label}>
            <span className={styles.legendDot} style={{ background: s.color }} />
            <span className={styles.legendText}>{s.label}</span>
            <span className={styles.legendPct}>{s.pct}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ─── Solution timeline data ──────────────────────────────────────
const solutionSteps = [
  {
    icon: <AlertTriangle size={22} />,
    title: "Churn Risk Scoring",
    desc: "Every customer gets a live probability-to-churn score, recalculated daily from hundreds of behavioral and transactional signals.",
  },
  {
    icon: <LineChart size={22} />,
    title: "Lifetime Value Prediction",
    desc: "Forecast forward revenue for each account by combining purchase history, engagement depth, and cohort behavior.",
  },
  {
    icon: <Target size={22} />,
    title: "Retention Playbooks",
    desc: "Risk scores route straight into playbooks built around your brand with the right offer, channel, and moment.",
  },
  {
    icon: <Clock size={22} />,
    title: "Early Warning System",
    desc: "Watch for quiet signals that precede cancellation and flag them weeks before it becomes a lost account.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "ROI Measurement",
    desc: "Every intervention is tracked back to revenue saved, showing exactly what your retention spend buys.",
  },
  {
    icon: <Database size={22} />,
    title: "360° Customer View",
    desc: "CRM, billing, support, product analytics, and social listening unified into a single customer record.",
  },
];

// ─── Results copy ─────────────────────────────────────────────────
const resultQuotes = [
  {
    quote:
      "Our churn rate dropped by 40% within three months. We've never had such clear visibility into customer health.",
    author: "VP of Customer Success",
    company: "Enterprise SaaS Company",
  },
  {
    quote:
      "We've saved over $2M in lost revenue in the first year. The lifetime value predictions have been equally valuable.",
    author: "Director of Analytics",
    company: "FinTech Firm",
  },
  {
    quote:
      "Our NPS jumped 15 points. We're proactively reaching out with tailored interventions instead of reacting.",
    author: "Head of Customer Experience",
    company: "E-commerce Brand",
  },
];

// ─── FAQ Data ──────────────────────────────────────────────────
const faqItems = [
  {
    q: "What data do I need to get started?",
    a: "We need customer transaction history, support tickets, product usage logs, and demographic data. The more data you have, the more accurate our predictions will be.",
  },
  {
    q: "How long until I see results?",
    a: "Most clients see initial predictions within 2-4 weeks. The models continue to improve over 90 days as they learn from your unique customer patterns.",
  },
  {
    q: "Can I customize the retention playbooks?",
    a: "Absolutely. You define the triggers, channels, and offers that match your brand. We provide a flexible framework you can adapt to your specific needs.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use enterprise-grade encryption for all data. We anonymize sensitive fields and comply with GDPR and CCPA.",
  },
  {
    q: "What's the typical ROI?",
    a: "Our clients typically see a return of 5-10 times their investment within the first year. We provide detailed ROI projections during onboarding.",
  },
];

// ─── Main Component ─────────────────────────────────────────────
const CustomerChurnLifetimeValuePage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <PageLayout>

      {/* ═══════════════════════ HERO SECTION ═══════════════════════ */}
      <section className={styles.heroSection} ref={heroRef}>
        <div className={styles.heroOverlay} style={{ 
          transform: `scale(${heroScale})`, 
          opacity: heroOpacity 
        }} />
        
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <motion.div 
              className={styles.heroText}
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.div className={styles.heroBadge} variants={fadeUp}>
                <span className={styles.liveDot} />
                <Users size={14} /> 
                <span>Customer Churn & Lifetime Value</span>
              </motion.div>

              <motion.h1 variants={fadeUp}>
                One platform. Every customer. <span className={styles.highlight}>Zero churn.</span>
              </motion.h1>

              <motion.p variants={fadeUp}>
                Bring your sales, marketing, and service teams together in one place. 
                AI built in from day one. Never lose another customer to preventable churn.
              </motion.p>

              <motion.div className={styles.heroCta} variants={fadeUp}>
                <Link to="/contact" className={styles.btnPrimary}>
                  Book a demo <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className={styles.btnSecondary}>
                  Take a product tour <Play size={15} />
                </Link>
              </motion.div>

              <motion.div className={styles.heroStats} variants={staggerChildrenFast}>
                <AnimatedNumber target={35} label="Churn Reduction" />
                <AnimatedNumber target={50} label="CLV Increase" />
                <AnimatedNumber target={96} label="Prediction Accuracy" />
              </motion.div>
            </motion.div>

            <motion.div 
              className={styles.heroImage}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <img src={heroImg} alt="Customer churn analytics" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ LOGO STRIP ═══════════════════════ */}
      <section className={styles.logoStrip}>
        <div className={styles.container}>
          <p>Trusted by industry leaders</p>
          <div className={styles.logoGrid}>
            <span>TechCorp</span>
            <span>FinSecure</span>
            <span>RetailPro</span>
            <span>HealthPlus</span>
            <span>EduGlobal</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ THE PROBLEM ═══════════════════════ */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <motion.div
            className={styles.twoColumn}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.div className={styles.columnContent} variants={slideInLeft}>
              <h2>The hidden cost of customer churn</h2>
              <p>
                Customer churn is one of the most critical metrics for sustainable growth.
                In today's market, retaining existing customers isn't just a cost-saving measure.
                It's a strategic imperative.
              </p>
              <p>
                When a customer leaves, you lose more than their current subscription.
                You lose their entire lifetime value. Years of revenue. Referral business.
                Upsell opportunities. And the social proof that loyal customers provide.
              </p>
              <p>
                Acquiring a new customer costs 5-7 times more than retaining an existing one.
                Yet most businesses only discover they've lost a customer when it's too late.
              </p>
              <div className={styles.statCards}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>5-7x</span>
                  <span>Cost to acquire vs retain</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>68%</span>
                  <span>Leave due to perceived indifference</span>
                </div>
              </div>
            </motion.div>

            <motion.div className={styles.columnImage} variants={slideInRight}>
              <img src={featureImg} alt="Customer churn impact" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ PAGE BREAK 1 ═══════════════════════ */}
      <section className={styles.pageBreak}>
        <div className={styles.container}>
          <motion.div
            className={styles.pageBreakContent}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnceTight}
            variants={fadeUp}
          >
            <div className={styles.pageBreakIcon}>
              <TrendingDown size={32} />
            </div>
            <h3>The True Cost of Customer Churn</h3>
            <p>
              Every customer lost represents not just a missed renewal, but the cumulative 
              value of years of future purchases, referrals, and advocacy.
            </p>
            <div className={styles.pageBreakStats}>
              <div>
                <span>5-7x</span>
                <label>More expensive to acquire than retain</label>
              </div>
              <div>
                <span>25-95%</span>
                <label>Profit increase from 5% churn reduction</label>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ WHY CUSTOMERS LEAVE ═══════════════════════ */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <motion.div
            className={styles.twoColumn}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.div className={styles.columnImage} variants={slideInLeft}>
              <img src={testimonialImg} alt="Why customers leave" />
            </motion.div>

            <motion.div className={styles.columnContent} variants={slideInRight}>
              <h2>Why customers really leave</h2>
              <p>
                Price is rarely the real reason customers leave. The truth is more nuanced.
              </p>
              <p>
                68% of customers leave because they feel the company doesn't care about them.
                Not because of price. Not because of product. Because they feel undervalued.
              </p>
              <p>
                Common drivers include poor onboarding. Product complexity. Inadequate support.
                A lack of perceived value relative to cost.
              </p>
              <p>
                Churn is rarely caused by a single factor. It's the accumulation of negative
                experiences that erode goodwill. Until the relationship breaks.
              </p>
              <p>
                Most churn is also silent. Customers rarely announce their frustration before
                they leave; they quietly reduce usage, stop opening emails, and let renewal
                dates pass.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ PAGE BREAK 2 ═══════════════════════ */}
      <section className={styles.pageBreak}>
        <div className={styles.container}>
          <motion.div
            className={styles.pageBreakContent}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnceTight}
            variants={fadeUp}
          >
            <div className={styles.pageBreakIcon}>
              <Heart size={32} />
            </div>
            <h3>The Human Element of Retention</h3>
            <p>
              Customers don't leave products — they leave relationships. Understanding the 
              emotional drivers behind churn is the key to preventing it.
            </p>
            <div className={styles.pageBreakStats}>
              <div>
                <span>68%</span>
                <label>Leave because they feel unvalued</label>
              </div>
              <div>
                <span>4x</span>
                <label>More likely to stay with personal outreach</label>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ LIFETIME VALUE ═══════════════════════ */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <motion.div
            className={styles.twoColumn}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.div className={styles.columnContent} variants={slideInLeft}>
              <h2>The strategic value of lifetime value</h2>
              <p>
                Customer Lifetime Value (CLV) is the total revenue you can expect from a
                single customer over the entire relationship.
              </p>
              <p>
                Understanding CLV helps you make smarter decisions. About acquisition spending.
                About retention investment. About resource allocation.
              </p>
              <p>
                A sophisticated approach to CLV goes beyond simple revenue calculations.
                It incorporates acquisition costs. Operating costs. Engagement patterns.
                The likelihood of future purchases.
              </p>
              <p>
                This reveals which customer segments are most valuable. Which are at risk.
                Where intervention yields the greatest return.
              </p>
              <ClvTrendChart />
            </motion.div>

            <motion.div className={styles.columnImage} variants={slideInRight}>
              <img src={ctaImg} alt="Customer lifetime value" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ PAGE BREAK 3 ═══════════════════════ */}
      <section className={styles.pageBreak}>
        <div className={styles.container}>
          <motion.div
            className={styles.pageBreakContent}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnceTight}
            variants={fadeUp}
          >
            <div className={styles.pageBreakIcon}>
              <DollarSign size={32} />
            </div>
            <h3>Maximizing Value Over Time</h3>
            <p>
              Understanding Customer Lifetime Value transforms how you invest in retention, 
              acquisition, and customer success — driving sustainable growth.
            </p>
            <div className={styles.pageBreakStats}>
              <div>
                <span>3-5x</span>
                <label>Higher CLV for retained customers</label>
              </div>
              <div>
                <span>70%</span>
                <label>Of revenue comes from existing customers</label>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ HOW WE SOLVE CHURN ═══════════════════════ */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeUp}>How we approach churn prediction</motion.h2>
            <motion.p variants={fadeUp}>
              We combine cutting-edge AI with deep domain expertise. We don't just tell you
              who might leave. We explain why. And we give you strategies to keep them engaged.
            </motion.p>
          </motion.div>

          <div className={styles.pipeline}>
            {solutionSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                className={styles.pipelineStep}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={revealOnceTight}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className={styles.pipelineIcon}>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + idx * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {step.icon}
                  </motion.div>
                </div>
                <div className={styles.pipelineText}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ THE DATA ═══════════════════════ */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeUp}>The data behind our predictions</motion.h2>
            <motion.p variants={fadeUp}>
              Our models are only as good as the data they're built on. We integrate signals
              from across the customer journey to build a complete picture of customer health.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.dataGrid}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnceTight}
            variants={fadeUp}
          >
            <DataDonut />
            <div className={styles.dataDescriptions}>
              <div className={styles.dataItem}>
                <Activity size={18} />
                <p>
                  <strong>Behavioral data</strong> — product usage, feature adoption, login
                  frequency, and session duration. Often the earliest warning sign.
                </p>
              </div>
              <div className={styles.dataItem}>
                <CreditCard size={18} />
                <p>
                  <strong>Transactional data</strong> — purchase history, invoice patterns,
                  payment behavior, and upsell adoption. Reduced spend is an early risk flag.
                </p>
              </div>
              <div className={styles.dataItem}>
                <Headphones size={18} />
                <p>
                  <strong>Support & service data</strong> — ticket volume, resolution time,
                  and sentiment. Frequent tickets signal friction building toward churn.
                </p>
              </div>
              <div className={styles.dataItem}>
                <MessageCircle size={18} />
                <p>
                  <strong>Sentiment & social data</strong> — surveys, reviews, and direct
                  communication. We track sentiment shifts before they become problems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ RESULTS ═══════════════════════ */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={fadeUp}
          >
            Real results from <span className={styles.highlight}>real customers</span>
          </motion.h2>

          <motion.div
            className={styles.gaugeRow}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnceTight}
            variants={staggerChildrenFast}
          >
            <StatGauge target={40} suffix="%" label="Average churn reduction" color="#fb5004" />
            <StatGauge target={2} prefix="$" suffix="M+" label="Revenue saved, year one" color="#0a2f38" />
            <StatGauge target={15} prefix="+" label="Average NPS increase" color="#16606e" />
          </motion.div>

          <div className={styles.testimonials}>
            {resultQuotes.map((item, idx) => (
              <motion.div
                key={item.author}
                className={styles.testimonial}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealOnceTight}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Quote size={26} />
                <blockquote>"{item.quote}"</blockquote>
                <div className={styles.author}>
                  <strong>{item.author}</strong>
                  <span> — {item.company}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FEATURES GRID ═══════════════════════ */}
      <section className={styles.sectionLight}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeUp}>Why teams choose our solution</motion.h2>
          </motion.div>

          <div className={styles.featureGrid}>
            <motion.div 
              className={styles.featureCard}
              initial="hidden"
              whileInView="visible"
              viewport={revealOnceTight}
              variants={fadeUp}
            >
              <Shield size={32} />
              <h3>Enterprise-grade security</h3>
              <p>Your data is protected with military-grade encryption and compliance with all major regulations.</p>
            </motion.div>

            <motion.div 
              className={styles.featureCard}
              initial="hidden"
              whileInView="visible"
              viewport={revealOnceTight}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              <Zap size={32} />
              <h3>Real-time predictions</h3>
              <p>Get instant churn risk scores updated daily with the latest behavioral and transactional data.</p>
            </motion.div>

            <motion.div 
              className={styles.featureCard}
              initial="hidden"
              whileInView="visible"
              viewport={revealOnceTight}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <CheckCircle size={32} />
              <h3>Proven ROI</h3>
              <p>Our clients see an average of 5-10x return on investment within the first year of implementation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FAQ ═══════════════════════ */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnceTight}
            variants={fadeUp}
          >
            Frequently asked questions
          </motion.h2>

          <div className={styles.faqList}>
            {faqItems.map((item, idx) => (
              <motion.div
                key={item.q}
                className={styles.faqItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={revealOnceTight}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <button
                  className={`${styles.faqButton} ${activeFaq === idx ? styles.active : ""}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{item.q}</span>
                  <motion.span animate={{ rotate: activeFaq === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
                <motion.div
                  className={`${styles.faqPanel} ${activeFaq === idx ? styles.open : ""}`}
                  initial={{ height: 0 }}
                  animate={{ height: activeFaq === idx ? "auto" : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{item.a}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={revealOnceTight}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Begin your churn reduction journey today</h2>
            <p>
              You've made it this far. Ready to predict churn and transform retention?
              Speak to one of our advisors today. In a 1:1 video chat, we'll cover your
              growth strategies, introduce our churn prediction suite, and define your
              next steps.
            </p>
            <Link to="/contact" className={styles.ctaBtn}>
              Schedule Now <ArrowRight size={18} />
            </Link>
            <p className={styles.ctaConsent}>
              By submitting this form, you consent to our privacy statement and agree to
              sign up to our mailing list.
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CustomerChurnLifetimeValuePage;