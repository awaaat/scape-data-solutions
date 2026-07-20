// src/pages/Services/FraudDetectionPrevention/FraudDetectionPreventionPage.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  ArrowRight,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Eye,
  Target,
  Users,
  BarChart3,
  Database,
  Activity,
  Bell,
  Lock,
  TrendingUp,
  AlertOctagon,
  Fingerprint,
  Network,
  Scan,
  Gauge,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  DollarSign,
  CreditCard,
  UserCheck,
  Ban,
  TrendingDown,
  Award,
  FileCheck,
  Share2,
  Globe,
  Play, // ← Added Play icon import
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./FraudDetectionPreventionPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── Custom Hook for Scroll Animations ──────────────────────────
const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};

// ─── Animated Counter ─────────────────────────────────────────────
const AnimatedCounter = ({ target, suffix = "", prefix = "" }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <span ref={ref} className={styles.statValue}>
    <SEO
      title="Fraud Detection & Prevention | Scape Data Solutions"
      description="AI-powered fraud detection and prevention that identifies suspicious activity in real time."
      path="/services/fraud-detection-prevention"
      schema={buildServiceSchema({
        name: "Fraud Detection & Prevention",
        description: "AI-powered fraud detection and prevention that identifies suspicious activity in real time.",
        path: "/services/fraud-detection-prevention",
      })}
    />
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// ─── Pulsing Dot ──────────────────────────────────────────────────
const PulsingDot = () => (
  <span className={styles.pulsingDot}>
    <span className={styles.pulseRing} />
    <span className={styles.pulseDot} />
  </span>
);

// ─── Fraud Detection & Prevention Page ──────────────────────────
const FraudDetectionPreventionPage = () => {
  const heroControls = useAnimation();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible");
    }
  }, [heroControls, heroInView]);

  return (
    <PageLayout>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className={styles.heroSection} ref={heroRef}>
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient} />
          <div className={styles.heroGridPattern} />
          <div className={styles.heroParticles}>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={styles.particle}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                }}
              />
            ))}
          </div>
        </div>

        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate={heroControls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
          >
            <motion.div
              className={styles.heroBadge}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
            >
              <Shield size={14} />
              <span>AI-Powered Financial Security</span>
              <PulsingDot />
            </motion.div>

            <motion.h1
              className={styles.heroTitle}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
            >
              <span className={styles.titleLine}>Stop Financial Fraud</span>
              <span className={styles.titleLine}>
                Before It <span className={styles.highlight}>Strikes</span>
              </span>
            </motion.h1>

            <motion.p
              className={styles.heroSub}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
              }}
            >
              Our AI detects fraudulent transactions in real-time — analyzing behavior, patterns,
              and anomalies across millions of data points. Protect revenue, trust, and compliance
              with adaptive intelligence that evolves with every threat.
            </motion.p>

            <motion.div
              className={styles.heroCta}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
              }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  <ShieldCheck size={18} />
                  Start Protecting Now
                  <ArrowRight size={16} className={styles.btnArrow} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#how-it-works" className={styles.heroBtnSecondary}>
                  <Scan size={16} />
                  See The Technology
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroStats}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
              }}
            >
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <TrendingDown size={20} />
                </div>
                <div>
                  <AnimatedCounter target={85} suffix="%" />
                  <span className={styles.statLabel}>Fraud Reduction</span>
                </div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <Target size={20} />
                </div>
                <div>
                  <AnimatedCounter target={99.2} suffix="%" prefix="" />
                  <span className={styles.statLabel}>Detection Accuracy</span>
                </div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <Award size={20} />
                </div>
                <div>
                  <span className={styles.statValue}>&lt;0.5%</span>
                  <span className={styles.statLabel}>False Positives</span>
                </div>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <Clock size={20} />
                </div>
                <div>
                  <span className={styles.statValue}>&lt;100ms</span>
                  <span className={styles.statLabel}>Detection Speed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroScrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll</span>
          <ChevronRight size={16} className={styles.scrollArrow} />
        </motion.div>
      </section>

      {/* ─── TRUST INDICATORS ────────────────────────────────────── */}
      <section className={styles.trustSection}>
        <div className={styles.container}>
          <motion.p
            className={styles.trustLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by leading financial institutions worldwide
          </motion.p>
          <div className={styles.trustLogos}>
            {["🏦", "💳", "🏛️", "📊", "🔒", "🌐"].map((logo, i) => (
              <motion.div
                key={i}
                className={styles.trustLogo}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
              >
                <span>{logo}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OVERVIEW ────────────────────────────────────────────── */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <motion.div
              className={styles.overviewVisual}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.fraudVisual}>
                <div className={styles.visualShield}>
                  <Shield size={64} className={styles.shieldIcon} />
                  <div className={styles.shieldPulse} />
                </div>
                <div className={styles.visualNodes}>
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={styles.visualNode}
                      style={{
                        animationDelay: `${i * 0.3}s`,
                        transform: `rotate(${i * 60}deg) translateX(80px)`,
                      }}
                    >
                      <div className={styles.nodeDot} />
                    </div>
                  ))}
                </div>
                <div className={styles.visualMetrics}>
                  <div className={styles.metricPill}>
                    <span className={styles.metricDot} />
                    1,247 threats blocked
                  </div>
                  <div className={styles.metricPill}>
                    <span className={styles.metricDot} />
                    $4.2M saved
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className={styles.overviewText}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.overviewBadge}>
                <Sparkles size={14} />
                <span>Intelligent Defense</span>
              </div>
              <h2>
                AI That <span className={styles.highlight}>Thinks Like</span> a Fraud Investigator
              </h2>
              <p>
                Financial fraud has evolved from simple chargebacks to sophisticated
                multi-layered attacks. Our AI doesn't just look for known patterns — it
                <strong> understands behavior</strong>, <strong>detects anomalies</strong>, and
                <strong> adapts in real-time</strong> to emerging threats.
              </p>
              <p>
                We process <strong>hundreds of behavioral signals</strong> per transaction —
                from typing patterns and device fingerprints to purchase history and location
                velocity. The result: a <strong>holistic risk profile</strong> that catches
                fraudsters while keeping genuine customers flowing smoothly.
              </p>
              <div className={styles.overviewHighlights}>
                <div className={styles.highlightItem}>
                  <CheckCircle size={16} />
                  <span>Real-time scoring in &lt;100ms</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle size={16} />
                  <span>99.2% accuracy with minimal false positives</span>
                </div>
                <div className={styles.highlightItem}>
                  <CheckCircle size={16} />
                  <span>Self-learning models that evolve with threats</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────── */}
      <section className={styles.howSection} id="how-it-works">
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className={styles.sectionBadge}>
              <Activity size={14} />
              <span>Detection Pipeline</span>
            </div>
            <h2 className={styles.sectionTitle}>
              How We <span className={styles.highlight}>Stop Fraud</span> in Its Tracks
            </h2>
            <p className={styles.sectionSub}>
              A multi-layered approach that combines behavioral analytics, pattern recognition,
              and adaptive machine learning for comprehensive protection.
            </p>
          </motion.div>

          <div className={styles.howTimeline}>
            {[
              {
                icon: <Database size={24} />,
                title: "Data Ingestion",
                desc: "Connect to transaction streams, user profiles, device data, and external threat intelligence feeds.",
                color: "#fdb840",
                delay: 0,
              },
              {
                icon: <Fingerprint size={24} />,
                title: "Behavioral Profiling",
                desc: "Build unique behavioral fingerprints for each user — typing speed, mouse patterns, navigation flow.",
                color: "#f5a623",
                delay: 0.1,
              },
              {
                icon: <Network size={24} />,
                title: "Pattern Recognition",
                desc: "Analyze transaction sequences, velocity, location changes, and network relationships.",
                color: "#e89020",
                delay: 0.2,
              },
              {
                icon: <Gauge size={24} />,
                title: "Risk Scoring",
                desc: "Score each transaction on a 0-1000 scale with granular risk factors and explanations.",
                color: "#d47d1a",
                delay: 0.3,
              },
              {
                icon: <AlertOctagon size={24} />,
                title: "Threat Response",
                desc: "Automated actions: block, challenge, flag for review, or allow with enhanced monitoring.",
                color: "#c06a14",
                delay: 0.4,
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Continuous Learning",
                desc: "Models retrain daily with new fraud patterns, improving accuracy over time.",
                color: "#a8580e",
                delay: 0.5,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.timelineStep}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.timelineConnector}>
                  <div
                    className={styles.timelineDot}
                    style={{ background: item.color }}
                  />
                  {index < 5 && <div className={styles.timelineLine} />}
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon} style={{ background: `${item.color}20`, color: item.color }}>
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────── */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className={styles.sectionBadge}>
              <Zap size={14} />
              <span>Core Capabilities</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Enterprise-Grade <span className={styles.highlight}>Fraud Prevention</span>
            </h2>
          </motion.div>

          <div className={styles.featuresGrid}>
            {[
              {
                icon: <BarChart3 size={24} />,
                title: "Multi-Dimensional Scoring",
                desc: "Risk scores factor in amount, velocity, location, device, behavior, and network relationships.",
                color: "#fdb840",
              },
              {
                icon: <Fingerprint size={24} />,
                title: "Device Fingerprinting",
                desc: "Track unique device signatures across sessions to identify suspicious access patterns.",
                color: "#f5a623",
              },
              {
                icon: <Users size={24} />,
                title: "Network Analysis",
                desc: "Detect coordinated fraud rings through relationship mapping and cluster detection.",
                color: "#e89020",
              },
              {
                icon: <Clock size={24} />,
                title: "Real-Time Velocity Checks",
                desc: "Flag abnormal transaction frequency, location changes, and timing patterns.",
                color: "#d47d1a",
              },
              {
                icon: <Eye size={24} />,
                title: "Explainable AI Decisions",
                desc: "Every alert includes clear reasoning — no black boxes, supporting investigation.",
                color: "#c06a14",
              },
              {
                icon: <Lock size={24} />,
                title: "Adaptive ML Models",
                desc: "Models that continuously learn from new fraud patterns and evolving attack vectors.",
                color: "#a8580e",
              },
              {
                icon: <Bell size={24} />,
                title: "Smart Alerting",
                desc: "Prioritized alerts with risk context, recommended actions, and automated responses.",
                color: "#914a0b",
              },
              {
                icon: <FileCheck size={24} />,
                title: "Compliance Automation",
                desc: "Built-in AML, KYC, and PCI-DSS reporting with comprehensive audit trails.",
                color: "#7a3d09",
              },
            ].map((feature, index) => {
              const { ref, controls } = useScrollAnimation();
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className={styles.featureCard}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.05 } },
                  }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                >
                  <div
                    className={styles.featureIcon}
                    style={{ background: `${feature.color}15`, color: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <div className={styles.featureGlow} style={{ background: feature.color }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ────────────────────────────────────────────── */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className={styles.sectionBadge}>
              <Shield size={14} />
              <span>Why Choose Us</span>
            </div>
            <h2 className={styles.sectionTitle}>
              The <span className={styles.highlight}>Intelligent</span> Advantage
            </h2>
          </motion.div>

          <div className={styles.benefitsGrid}>
            {[
              {
                icon: <TrendingDown size={22} />,
                title: "85% Fraud Reduction",
                desc: "Dramatically cut fraud losses with proactive detection that stops attacks before they complete.",
              },
              {
                icon: <CheckCircle size={22} />,
                title: "99.2% Accuracy",
                desc: "Industry-leading detection rates with minimal false positives — keep legitimate customers happy.",
              },
              {
                icon: <Zap size={22} />,
                title: "Sub-100ms Response",
                desc: "Real-time protection that doesn't compromise transaction speed or user experience.",
              },
              {
                icon: <ShieldCheck size={22} />,
                title: "Regulatory Confidence",
                desc: "Meet AML, KYC, GDPR, and PCI-DSS requirements with comprehensive audit trails.",
              },
              {
                icon: <Globe size={22} />,
                title: "Global Threat Intelligence",
                desc: "Leverage real-time threat feeds and cross-institutional fraud pattern sharing.",
              },
              {
                icon: <UserCheck size={22} />,
                title: "Customer Trust",
                desc: "Protect your reputation with secure transactions that build lasting customer confidence.",
              },
            ].map((benefit, index) => {
              const { ref, controls } = useScrollAnimation();
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  className={styles.benefitCard}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.08 } },
                  }}
                  whileHover={{ x: 8 }}
                >
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaGradient} />
          <div className={styles.ctaPattern} />
        </div>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.ctaBadge}>
              <Sparkles size={16} />
              <span>Ready to secure your financial operations?</span>
            </div>
            <h2>
              Protect Your Revenue &amp; <br />
              <span className={styles.highlight}>Build Trust</span> With Every Transaction
            </h2>
            <p>
              Join leading financial institutions that trust our AI to detect fraud in real-time,
              reduce losses, and maintain customer confidence. Let's build your custom fraud
              prevention strategy.
            </p>
            <div className={styles.ctaButtons}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.ctaBtn}>
                  <ShieldCheck size={18} />
                  Start Your Security Assessment
                  <ArrowRight size={18} className={styles.btnArrow} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.ctaBtnSecondary}>
                  <Play size={18} />
                  Watch Demo
                </Link>
              </motion.div>
            </div>
            <div className={styles.ctaTrust}>
              <div className={styles.trustBadge}>
                <Lock size={14} />
                <span>Enterprise-grade security</span>
              </div>
              <div className={styles.trustBadge}>
                <Users size={14} />
                <span>Trusted by 500+ financial institutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FraudDetectionPreventionPage;