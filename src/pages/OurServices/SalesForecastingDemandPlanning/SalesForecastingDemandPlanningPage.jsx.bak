// src/pages/Services/SalesForecastingDemandPlanning/SalesForecastingDemandPlanningPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  LineChart,
  Target,
  CheckCircle,
  Clock,
  Zap,
  Eye,
  Users,
  Database,
  Activity,
  Calendar,
  PieChart,
  Shield,
  DollarSign,
  Percent,
  Building2,
  Gauge,
  ChevronDown,
  Play,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./SalesForecastingDemandPlanningPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── Images ──────────────────────────────────────────────────────
const forecast1 = "/Images/site-images/forecast-1.png";
const forecast2 = "/Images/site-images/forecast-2.png";

// ─── Animation Variants ─────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeUpFast = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const fadeUpSlow = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
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
const revealOnceTight = { once: false, amount: 0.35 };

// ─── Animated Counter ────────────────────────────────────────────
const AnimatedCounter = ({ target, label, suffix = "%", prefix = "", duration = 2200 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const step = Math.max(0.5, target / (duration / 16));
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
  }, [isInView, target, duration]);

  return (
    <motion.div
      className={styles.counterItem}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scaleUp}
    >
    <SEO
      title="Sales Forecasting & Demand Planning | Scape Data Solutions"
      description="AI-powered forecasting that helps you predict future sales with up to 95% accuracy."
      path="/services/sales-forecasting-demand-planning"
      schema={buildServiceSchema({
        name: "Sales Forecasting & Demand Planning",
        description: "AI-powered forecasting that helps you predict future sales with up to 95% accuracy.",
        path: "/services/sales-forecasting-demand-planning",
      })}
    />
      <span className={styles.counterValue}>
        {prefix}
        {count}
        {suffix}
      </span>
      <span className={styles.counterLabel}>{label}</span>
    </motion.div>
  );
};

// ─── Animated Gauge ─────────────────────────────────────────────
const AnimatedGauge = ({ target, label, color = "#fb5004" }) => {
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

  const displayValue = Math.round(count);

  return (
    <div className={styles.gaugeItem} ref={ref}>
      <div className={styles.gaugeWrap}>
        <svg viewBox="0 0 120 120" className={styles.gaugeSvg}>
          <circle cx="60" cy="60" r="52" className={styles.gaugeTrack} />
          <motion.circle
            cx="60"
            cy="60"
            r="52"
            className={styles.gaugeFill}
            style={{ stroke: color }}
            transform="rotate(-90 60 60)"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: target / 100 } : { pathLength: 0 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          />
        </svg>
        <div className={styles.gaugeValue}>{displayValue}%</div>
      </div>
      <p className={styles.gaugeLabel}>{label}</p>
    </div>
  );
};

// ─── Main Component ─────────────────────────────────────────────
const SalesForecastingDemandPlanningPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageLayout>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className={styles.heroSection} ref={heroRef}>
        <motion.div className={styles.heroOverlay} style={{ scale: heroScale, opacity: heroOpacity }} />

        <motion.div
          className={styles.heroBlobOne}
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={styles.heroBlobTwo}
          animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <motion.span
                className={styles.liveDot}
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <TrendingUp size={14} /> <span>Sales Forecasting & Demand Planning</span>
            </motion.div>

            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Predict Sales. <span className={styles.highlight}>Plan Demand.</span>
            </motion.h1>

            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered forecasting that helps you predict future sales with up to 95% accuracy.
              Optimize inventory, align production, and drive revenue growth with confidence.
            </motion.p>

            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Start Forecasting <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                <a href="#how-it-works" className={styles.heroBtnSecondary}>
                  See How It Works <Eye size={15} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className={styles.heroStats} variants={staggerChildrenFast}>
              <motion.div variants={scaleUp}>
                <AnimatedCounter target={95} label="Forecast Accuracy" />
              </motion.div>
              <motion.div variants={scaleUp}>
                <AnimatedCounter target={20} label="Revenue Increase" prefix="+" />
              </motion.div>
              <motion.div variants={scaleUp}>
                <AnimatedCounter target={15} label="Inventory Reduction" prefix="-" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img src={forecast2} alt="Sales Forecasting Dashboard" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ LOGO STRIP ═══════════════════════ */}
      <section className={styles.logoStrip}>
        <div className={styles.container}>
          <motion.p
            className={styles.logoStripLabel}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnceTight}
            variants={fadeUpFast}
          >
            Trusted by industry leaders
          </motion.p>
          <motion.div
            className={styles.logoGrid}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnceTight}
            variants={staggerChildrenFast}
          >
            <motion.span variants={scaleUp}>TechCorp</motion.span>
            <motion.span variants={scaleUp}>FinSecure</motion.span>
            <motion.span variants={scaleUp}>RetailPro</motion.span>
            <motion.span variants={scaleUp}>HealthPlus</motion.span>
            <motion.span variants={scaleUp}>EduGlobal</motion.span>
            <motion.span variants={scaleUp}>LogiTech</motion.span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ OVERVIEW ═══════════════════════ */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.overviewGrid}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.div className={styles.overviewText} variants={slideInLeft}>
              <motion.h2 variants={fadeUp}>
                Predict with <span className={styles.highlight}>Precision</span>
              </motion.h2>
              <motion.p variants={fadeUp}>
                No business can afford to guess demand — yet many still rely on spreadsheets and gut
                feel. Our Sales Forecasting & Demand Planning service replaces guesswork with data
                science. We combine your internal sales data with external signals like economic
                indicators, competitor pricing, seasonality, and even weather patterns.
              </motion.p>
              <motion.p variants={fadeUp}>
                We tailor our models to your specific industry — whether you're selling software
                subscriptions, consumer goods, industrial equipment, or services. Our system
                generates rolling forecasts that update as new data arrives, so you always have a
                current view of expected demand.
              </motion.p>
              <motion.p variants={fadeUp}>
                This enables smarter inventory management, better pricing strategies, and more
                effective sales territory planning — all driving growth and profitability.
              </motion.p>
              <motion.div className={styles.overviewStats} variants={staggerChildrenFast}>
                <motion.div className={styles.overviewStat} variants={scaleUp}>
                  <span>95%</span>
                  <label>Forecast Accuracy</label>
                </motion.div>
                <motion.div className={styles.overviewStat} variants={scaleUp}>
                  <span>20%</span>
                  <label>Revenue Uplift</label>
                </motion.div>
                <motion.div className={styles.overviewStat} variants={scaleUp}>
                  <span>15%</span>
                  <label>Cost Reduction</label>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className={styles.overviewImage} variants={slideInRight}>
              <motion.img
                src={forecast1}
                alt="Forecast KPI Dashboard"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
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
            variants={fadeUpSlow}
          >
            <motion.div
              className={styles.pageBreakIcon}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <TrendingUp size={32} />
            </motion.div>
            <h3>Data-Driven Decision Making</h3>
            <p>
              Replace guesswork with accurate, AI-powered forecasts that give you confidence in every
              business decision — from inventory planning to revenue targets.
            </p>
            <div className={styles.pageBreakStats}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span>3-5x</span>
                <label>ROI from accurate forecasting</label>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span>60%</span>
                <label>Faster planning cycles</label>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
      <section className={styles.howSection} id="how-it-works">
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeUp}>How We Predict Demand</motion.h2>
            <motion.p variants={fadeUp}>
              Our AI-powered forecasting engine combines multiple data sources and advanced modeling
              techniques to deliver accurate, actionable predictions.
            </motion.p>
          </motion.div>

          <div className={styles.howGrid}>
            {[
              { icon: <Database size={22} />, title: "Data Integration", desc: "Combine internal sales, inventory, and pricing data with external signals." },
              { icon: <Calendar size={22} />, title: "Seasonality & Trends", desc: "Identify seasonal patterns, trends, and cyclical behavior in your sales." },
              { icon: <LineChart size={22} />, title: "Time Series Modeling", desc: "Advanced ARIMA, Prophet, and deep learning models for accurate predictions." },
              { icon: <BarChart3 size={22} />, title: "Scenario Planning", desc: "Model different outcomes — best case, worst case, and most likely." },
              { icon: <Activity size={22} />, title: "Real-Time Updates", desc: "Rolling forecasts that update automatically with new data." },
              { icon: <Target size={22} />, title: "Actionable Insights", desc: "Recommendations for inventory, pricing, and sales strategy adjustments." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.howItem}
                initial="hidden"
                whileInView="visible"
                viewport={revealOnceTight}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 4 }}
              >
                <motion.div
                  className={styles.howIcon}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            variants={fadeUpSlow}
          >
            <motion.div
              className={styles.pageBreakIcon}
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <Gauge size={32} />
            </motion.div>
            <h3>Real-Time Visibility</h3>
            <p>
              Get instant insight into your sales pipeline, demand trends, and inventory needs with
              intuitive dashboards that update in real-time.
            </p>
            <div className={styles.pageBreakStats}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span>24/7</span>
                <label>Real-time forecast updates</label>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span>100%</span>
                <label>Data transparency</label>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ FEATURES ═══════════════════════ */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeUp}>Core Capabilities</motion.h2>
            <motion.p variants={fadeUp}>
              Everything you need to forecast with confidence and plan with precision.
            </motion.p>
          </motion.div>

          <div className={styles.featuresGrid}>
            {[
              { icon: <TrendingUp size={22} />, title: "Demand Sensing", desc: "Detect shifts in demand patterns in real-time and adjust forecasts accordingly." },
              { icon: <PieChart size={22} />, title: "Product-Level Forecasting", desc: "Granular forecasts by product, category, region, and customer segment." },
              { icon: <Shield size={22} />, title: "Inventory Optimization", desc: "Recommend optimal stock levels to prevent stockouts and overstock." },
              { icon: <Users size={22} />, title: "Sales Team Planning", desc: "Align sales territories, quotas, and incentives with demand forecasts." },
              { icon: <Clock size={22} />, title: "Rolling Forecasts", desc: "Continuous updates that reflect the latest market conditions." },
              { icon: <Zap size={22} />, title: "What-If Analysis", desc: "Test the impact of price changes, promotions, and external events." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureItem}
                initial="hidden"
                whileInView="visible"
                viewport={revealOnceTight}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className={styles.featureIcon}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ GAUGES ═══════════════════════ */}
      <section className={styles.gaugesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeUp}>Measurable Results</motion.h2>
            <motion.p variants={fadeUp}>
              Our clients consistently achieve exceptional results across key performance indicators.
            </motion.p>
          </motion.div>

          <motion.div
            className={styles.gaugesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnceTight}
            variants={staggerChildrenFast}
          >
            <motion.div variants={scaleUp}>
              <AnimatedGauge target={95} label="Forecast Accuracy" />
            </motion.div>
            <motion.div variants={scaleUp}>
              <AnimatedGauge target={85} label="Inventory Optimization" color="#0a2f38" />
            </motion.div>
            <motion.div variants={scaleUp}>
              <AnimatedGauge target={90} label="Customer Satisfaction" color="#16606e" />
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
            variants={fadeUpSlow}
          >
            <motion.div
              className={styles.pageBreakIcon}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <DollarSign size={32} />
            </motion.div>
            <h3>Maximize Revenue & Minimize Risk</h3>
            <p>
              Accurate forecasting helps you capture more sales opportunities while reducing waste
              and inefficiency across your entire supply chain.
            </p>
            <div className={styles.pageBreakStats}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span>20%</span>
                <label>Revenue increase potential</label>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <span>15%</span>
                <label>Inventory cost reduction</label>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ BENEFITS ═══════════════════════ */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnce}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeUp}>Why Choose Us?</motion.h2>
            <motion.p variants={fadeUp}>
              Our forecasting solutions deliver measurable results that drive business growth.
            </motion.p>
          </motion.div>

          <div className={styles.benefitsGrid}>
            {[
              { icon: <Target size={18} />, title: "95% Forecast Accuracy", desc: "Highly reliable predictions that you can base critical decisions on." },
              { icon: <TrendingUp size={18} />, title: "Revenue Growth", desc: "Capture more sales by avoiding stockouts and optimizing pricing." },
              { icon: <BarChart3 size={18} />, title: "Cost Reduction", desc: "Reduce inventory holding costs by up to 15% with better planning." },
              { icon: <CheckCircle size={18} />, title: "Data-Driven Confidence", desc: "Make decisions backed by robust analytics — not gut feel." },
              { icon: <Clock size={18} />, title: "Faster Response Times", desc: "Respond quickly to market changes with real-time forecast updates." },
              { icon: <Zap size={18} />, title: "Scalable Solutions", desc: "From startups to enterprises — forecasting that grows with you." },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitItem}
                initial="hidden"
                whileInView="visible"
                viewport={revealOnceTight}
                variants={fadeUp}
                transition={{ delay: index * 0.06 }}
                whileHover={{ x: 6 }}
              >
                <motion.div
                  className={styles.benefitIcon}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {benefit.icon}
                </motion.div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIAL ═══════════════════════ */}
      <section className={styles.testimonialSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.testimonialContent}
            initial="hidden"
            whileInView="visible"
            viewport={revealOnceTight}
            variants={fadeUpSlow}
          >
            <motion.div
              className={styles.testimonialQuote}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              “
            </motion.div>
            <blockquote>
              Our forecasting accuracy improved by 40% within three months. We now have complete
              confidence in our inventory planning and sales targets.
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <strong>Sarah Johnson</strong>
              <span>VP of Operations, RetailTech</span>
            </div>
          </motion.div>
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealOnceTight}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to Predict with Confidence?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={revealOnceTight}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's build a forecasting system that gives you clarity, reduces risk, and drives
              growth. You'll know what's coming — and be ready for it.
            </motion.p>

            <motion.div
              className={styles.ctaButtons}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={revealOnceTight}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.ctaBtn}>
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.p
              className={styles.ctaConsent}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={revealOnceTight}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              By submitting this form, you consent to our privacy statement and agree to
              sign up to our mailing list.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SalesForecastingDemandPlanningPage;