// src/pages/Services/PortfolioOptimization/PortfolioOptimizationPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  Database,
  Activity,
  Shield,
  PieChart,
  GitBranch,
  DollarSign,
  Users,
  ChevronUp,
  Sparkles,
  Play,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import { apiService } from "../../../services/api";
import styles from "./PortfolioOptimizationPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── YOUR IMAGES - Using public path ────────────────────────────
const introImage = "/Images/site-images/AM-IntroImage-TI-1220x1220-1.webp";
const bottomImage = "/Images/site-images/AM-BottomImage-RiskIntel-1240x1240-1.webp";
const taxImage = "/Images/site-images/tax-1-1.webp";

// ─── SCROLL REVEAL ────────────────────────────────────────────────
const ScrollReveal = ({ children, delay = 0, direction = "up" }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? -30 : direction === "right" ? 30 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
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
      title="Portfolio Optimization & Risk Management | Scape Data Solutions"
      description="AI-powered portfolio optimization and risk management that helps investors maximize returns while minimizing risk."
      path="/services/portfolio-optimization-risk-management"
      schema={buildServiceSchema({
        name: "Portfolio Optimization & Risk Management",
        description: "AI-powered portfolio optimization and risk management that helps investors maximize returns while minimizing risk.",
        path: "/services/portfolio-optimization-risk-management",
      })}
    />
      {children}
    </motion.div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────
const PortfolioOptimizationPage = () => {
  const [showTop, setShowTop] = useState(false);
  const demoFormRef = useRef(null);

  // ── Demo request form state ──────────────────────────────────
  const [demoData, setDemoData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    assetClass: "",
  });
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoError, setDemoError] = useState(null);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDemoChange = (e) => {
    setDemoData({ ...demoData, [e.target.name]: e.target.value });
  };

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
    setDemoLoading(true);
    setDemoError(null);
    try {
      await apiService.submitLead({
        name: `${demoData.firstName} ${demoData.lastName}`.trim(),
        email: demoData.email,
        company: demoData.company,
        service: demoData.assetClass
          ? `Portfolio Optimization Demo — ${demoData.assetClass}`
          : "Portfolio Optimization Demo",
        message: `Requested a portfolio optimization demo. Asset class interest: ${
          demoData.assetClass || "Not specified"
        }.`,
      });
      setDemoSubmitted(true);
      setDemoData({ firstName: "", lastName: "", email: "", company: "", assetClass: "" });
    } catch (err) {
      setDemoError(
        err.message ||
        "Failed to send your request. Please email us directly at info@scapedatasolutions.com"
      );
    } finally {
      setDemoLoading(false);
    }
  };

  const faqs = [
    {
      q: "What is portfolio optimization?",
      a: "Portfolio optimization is the process of selecting the best mix of assets to maximize returns for a given level of risk, or minimize risk for a given level of expected return."
    },
    {
      q: "How does risk management work?",
      a: "Risk management involves identifying, assessing, and prioritizing risks, then applying resources to minimize, control, and monitor the impact of unfortunate events."
    },
    {
      q: "What is the best asset allocation strategy?",
      a: "The best asset allocation depends on your goals, risk tolerance, and time horizon. Our AI-powered optimization helps you find the optimal allocation for your specific needs."
    },
    {
      q: "How do you measure portfolio risk?",
      a: "We use multiple risk metrics including Value at Risk (VaR), Conditional VaR (CVaR), standard deviation, beta, drawdown analysis, and stress testing."
    },
  ];

  const benefits = [
    {
      icon: <TrendingUp size={18} />,
      title: "Higher Returns",
      desc: "Achieve superior risk-adjusted returns through optimized allocation."
    },
    {
      icon: <Shield size={18} />,
      title: "Lower Volatility",
      desc: "Reduce portfolio volatility and drawdowns with smart risk management."
    },
    {
      icon: <Target size={18} />,
      title: "Goal-Aligned",
      desc: "Tailored to your specific return targets, risk tolerance, and constraints."
    },
    {
      icon: <CheckCircle size={18} />,
      title: "Regulatory Compliance",
      desc: "Meet fiduciary and regulatory requirements with robust risk reports."
    },
    {
      icon: <Clock size={18} />,
      title: "Real-Time Monitoring",
      desc: "Track portfolio performance and risk metrics continuously."
    },
    {
      icon: <Zap size={18} />,
      title: "Fast Implementation",
      desc: "Deploy optimized portfolios quickly with clear execution plans."
    },
  ];

  const features = [
    {
      icon: <BarChart3 size={20} />,
      title: "Mean-Variance Optimization",
      desc: "Modern portfolio theory for optimal risk-return tradeoffs."
    },
    {
      icon: <Shield size={20} />,
      title: "Value at Risk (VaR)",
      desc: "Quantify potential losses and set risk limits accordingly."
    },
    {
      icon: <LineChart size={20} />,
      title: "Stress Testing",
      desc: "Simulate extreme market conditions and assess portfolio resilience."
    },
    {
      icon: <Users size={20} />,
      title: "Multi-Asset Allocation",
      desc: "Optimize across stocks, bonds, commodities, and alternatives."
    },
    {
      icon: <Clock size={20} />,
      title: "Dynamic Rebalancing",
      desc: "Auto-rebalance portfolios to maintain target allocations."
    },
    {
      icon: <Target size={20} />,
      title: "Factor Investing",
      desc: "Incorporate value, momentum, quality, and low-volatility factors."
    },
  ];

  const howItems = [
    {
      icon: <Database size={20} />,
      title: "Data Integration",
      desc: "Asset prices, volatility, correlations, and macroeconomic data."
    },
    {
      icon: <Target size={20} />,
      title: "Risk-Return Analysis",
      desc: "Assess expected returns and risk metrics for each asset class."
    },
    {
      icon: <PieChart size={20} />,
      title: "Portfolio Construction",
      desc: "Optimize asset allocation using Markowitz and advanced models."
    },
    {
      icon: <Shield size={20} />,
      title: "Risk Monitoring",
      desc: "Track VaR, CVaR, drawdowns, and tail risk in real-time."
    },
    {
      icon: <GitBranch size={20} />,
      title: "Scenario Analysis",
      desc: "Test portfolio resilience under different market conditions."
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Performance Attribution",
      desc: "Understand what's driving returns and where risk is concentrated."
    },
  ];

  return (
    <PageLayout>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg} />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <ScrollReveal direction="up" delay={0.1}>
              <div className={styles.heroContent}>
                <motion.div
                  className={styles.heroBadge}
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <PieChart size={12} /> <span>Portfolio Optimization</span>
                </motion.div>
                <h1 className={styles.heroTitle}>
                  Maximize Returns.
                  <span className={styles.highlight}> Minimize Risk.</span>
                </h1>
                <p className={styles.heroSub}>
                  Build resilient investment portfolios with AI-powered optimization and risk analytics.
                  Achieve optimal asset allocation, hedge against volatility, and make data-driven
                  investment decisions.
                </p>
                <div className={styles.heroCta}>
                  <a href="#demo-form" className={styles.heroBtn}>
                    Optimize Your Portfolio <ArrowRight size={14} />
                  </a>
                  <a href="#how-it-works" className={styles.heroBtnSecondary}>
                    See How It Works <Eye size={13} />
                  </a>
                </div>
                <div className={styles.heroStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>25%</span>
                    <span className={styles.statLabel}>Risk Reduction</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>18%</span>
                    <span className={styles.statLabel}>Return Improvement</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>95%</span>
                    <span className={styles.statLabel}>Stress Test Accuracy</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className={styles.heroForm} id="demo-form" ref={demoFormRef}>
                <div className={styles.formCard}>
                  {demoSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ textAlign: "center", padding: "8px 0" }}
                    >
                      <CheckCircle size={36} style={{ marginBottom: 12 }} />
                      <h4>Request received</h4>
                      <p>
                        Thanks — a member of our team will reach out within 24 hours
                        to schedule your demo.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <h4>Request a Demo</h4>
                      <p>See how our portfolio optimization can improve your returns</p>

                      <AnimatePresence>
                        {demoError && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            style={{
                              fontSize: 12,
                              color: "#b3261e",
                              background: "rgba(179,38,30,0.08)",
                              border: "1px solid rgba(179,38,30,0.25)",
                              borderRadius: 8,
                              padding: "10px 12px",
                              marginBottom: 12,
                            }}
                          >
                            {demoError}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <form className={styles.demoForm} onSubmit={handleDemoSubmit}>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name *"
                          value={demoData.firstName}
                          onChange={handleDemoChange}
                          required
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name *"
                          value={demoData.lastName}
                          onChange={handleDemoChange}
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Corporate Email *"
                          value={demoData.email}
                          onChange={handleDemoChange}
                          required
                        />
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={demoData.company}
                          onChange={handleDemoChange}
                        />
                        <select
                          name="assetClass"
                          className={styles.selectInput}
                          value={demoData.assetClass}
                          onChange={handleDemoChange}
                        >
                          <option value="">Asset Class Interest</option>
                          <option value="Stocks">Stocks</option>
                          <option value="Bonds">Bonds</option>
                          <option value="Commodities">Commodities</option>
                          <option value="Alternatives">Alternatives</option>
                          <option value="All Asset Classes">All Asset Classes</option>
                        </select>
                        <button type="submit" className={styles.submitBtn} disabled={demoLoading}>
                          {demoLoading ? "Sending..." : (
                            <>Request Demo <ArrowRight size={14} /></>
                          )}
                        </button>
                      </form>
                      <p className={styles.privacy}>
                        By submitting, you agree to our privacy policy.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── VIDEO/IMAGE SECTION ─────────────────────────────────── */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <div className={styles.videoGrid}>
            <ScrollReveal direction="right" delay={0.2}>
              <div className={styles.videoText}>
                <h2>Scale Your Ability to Monitor Risk Globally 24/7</h2>
                <p>
                  Our AI-powered risk analytics automatically identifies and informs you of risks 
                  near your portfolio—helping you minimize the amount of time and effort it takes 
                  to initiate a risk response.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
              <div className={styles.videoImage}>
                <img src={introImage} alt="Risk Intelligence" className={styles.videoImg} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── FEATURES LIST ─────────────────────────────────────────── */}
      <section className={styles.featuresListSection}>
        <div className={styles.container}>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className={styles.sectionTitleSmall}>Know First and Act With Certainty</h2>
          </ScrollReveal>
          <div className={styles.featuresList}>
            {[
              { icon: taxImage, title: "Real-Time Threat Warnings", desc: "Receive real-time threat warnings from tens of thousands of sources." },
              { icon: taxImage, title: "Analyst-Verified Intel", desc: "Focus on the facts, not false alarms with verified intelligence." },
              { icon: taxImage, title: "Automated Risk Response", desc: "Respond to risks faster with automated impact assessments and alerts." },
              { icon: taxImage, title: "24/7 Access to Analysts", desc: "Gather instant insights on developing threats with trained analysts." },
              { icon: taxImage, title: "In-Depth Analyst Briefs", desc: "Stay ahead of planned and ongoing events with detailed briefs." },
              { icon: taxImage, title: "Visual Intelligence", desc: "See your entire risk profile in one clear picture." },
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={0.06 + index * 0.04}>
                <div className={styles.featuresListItem}>
                  <div className={styles.featuresListItemIcon}>
                    <img src={item.icon} alt="" className={styles.featuresListItemImg} />
                  </div>
                  <div className={styles.featuresListItemContent}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className={styles.featuresCta}>
            <a href="#demo-form" className={styles.btnRed}>REQUEST DEMO</a>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─────────────────────────────────────────── */}
      <section className={styles.featuresGridSection}>
        <div className={styles.container}>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className={styles.sectionTitleSmall}>Core Capabilities</h2>
          </ScrollReveal>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <ScrollReveal key={index} direction="up" delay={0.08 + index * 0.06}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE DO IT ────────────────────────────────────────── */}
      <section className={styles.howSection} id="how-it-works">
        <div className={styles.container}>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className={styles.howTitle}>How We Optimize Portfolios</h2>
          </ScrollReveal>
          <div className={styles.howGrid}>
            {howItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={0.08 + index * 0.06}>
                <div className={styles.howCard}>
                  <div className={styles.howIcon}>{item.icon}</div>
                  <h5 className={styles.howCardTitle}>{item.title}</h5>
                  <p className={styles.howCardText}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ────────────────────────────────────────────── */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className={styles.sectionTitleSmall}>Why Choose Us?</h2>
          </ScrollReveal>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} direction="up" delay={0.06 + index * 0.04}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM IMAGE SECTION ─────────────────────────────────── */}
      <section className={styles.bottomSection}>
        <div className={styles.container}>
          <div className={styles.bottomGrid}>
            <ScrollReveal direction="up" delay={0.1}>
              <div className={styles.bottomText}>
                <h2>When a Risk Materializes, You'll Know About It</h2>
                <p>
                  Our platform helps you keep a finger on the pulse of your portfolio, 
                  monitoring everything that's important to you.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <div className={styles.bottomImage}>
                <img src={bottomImage} alt="Risk Intelligence" className={styles.bottomImg} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <ScrollReveal direction="left" delay={0.1}>
              <div className={styles.faqLeft}>
                <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                <p className={styles.faqText}>
                  Find answers to common questions about portfolio optimization and risk management.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className={styles.faqRight}>
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={styles.faqItem}
                  >
                    <button
                      className={styles.faqQuestion}
                      onClick={(e) => {
                        const parent = e.currentTarget.closest(`.${styles.faqItem}`);
                        if (parent) {
                          parent.classList.toggle(styles.faqItemOpen);
                        }
                      }}
                    >
                      <h3>{faq.q}</h3>
                      <span className={styles.faqPlus} />
                    </button>
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg} />
        <div className={styles.container}>
          <ScrollReveal direction="up" delay={0.1}>
            <div className={styles.ctaContent}>
              <h2>Start Protecting Your Portfolio Today</h2>
              <Link to="/contact" className={styles.ctaBtn}>
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SCROLL TO TOP ────────────────────────────────────────── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className={styles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.08 }}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </PageLayout>
  );
};

export default PortfolioOptimizationPage;