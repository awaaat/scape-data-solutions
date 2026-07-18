// src/pages/Services/AlgorithmicTradingAnalytics/AlgorithmicTradingAnalyticsPage.jsx
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
  Users,
  Database,
  Activity,
  Shield,
  PieChart,
  GitBranch,
  Brain,
  AlertTriangle,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./AlgorithmicTradingAnalyticsPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

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
      title="Algorithmic Trading Analytics | Scape Data Solutions"
      description="AI-powered algorithmic trading analytics that help firms trade smarter and faster with data-driven strategies."
      path="/services/algorithmic-trading-analytics"
      schema={buildServiceSchema({
        name: "Algorithmic Trading Analytics",
        description: "AI-powered algorithmic trading analytics that help firms trade smarter and faster with data-driven strategies.",
        path: "/services/algorithmic-trading-analytics",
      })}
    />
      {children}
    </motion.div>
  );
};

// ─── MAIN PAGE ────────────────────────────────────────────────────
const AlgorithmicTradingAnalyticsPage = () => {
  const [showTop, setShowTop] = useState(false);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <PageLayout>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <img className={styles.heroBgImg} src="/Images/site-images/img-main-bg-1.png" alt="" />
        </div>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <ScrollReveal direction="up" delay={0.1}>
              <div className={styles.heroContent}>
                <motion.div
                  className={styles.heroBadge}
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp size={12} /> <span>Algorithmic Trading Analytics</span>
                </motion.div>
                <h1 className={styles.heroTitle}>
                  Trade Smarter.
                  <span className={styles.highlight}> Trade Faster.</span>
                </h1>
                <p className={styles.heroSub}>
                  Build and optimize algorithmic trading strategies with advanced analytics, backtesting,
                  and real-time execution. Gain an edge in the markets with data-driven trading decisions.
                </p>
                <div className={styles.heroCta}>
                  <Link to="/contact" className={styles.heroBtn}>
                    Optimize Your Trading <ArrowRight size={14} />
                  </Link>
                  <a href="#how-it-works" className={styles.heroBtnSecondary}>
                    See How It Works <Eye size={13} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className={styles.heroVideo}>
                <div className={styles.videoWrapper}>
                  <video
                    ref={videoRef}
                    className={styles.heroVideoPlayer}
                    autoPlay
                    loop
                    playsInline
                    muted
                  >
                    <source src="/Images/site-images/tt-ad2.mp4" type="video/mp4" />
                  </video>
                  <button
                    className={styles.videoControlBtn}
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 102 102">
                        <rect width="102" height="102" rx="50" fill="#fff" />
                        <g transform="translate(20.998 21)">
                          <path d="M212.5.213a2.135,2.135,0,0,0-2.267.257l-17.1,13.672a2.145,2.145,0,1,0,2.678,3.352L209.43,6.6V32.919a2.143,2.143,0,1,0,4.286,0V2.145A2.15,2.15,0,0,0,212.5.213Z" transform="translate(-192.329 0)" />
                          <path d="M59.393,56.363,46.54,43.509l0,0-21.43-21.43,0,0L20.82,17.789l0,0L3.677.642a2.143,2.143,0,1,0-3.03,3.03L14.13,17.159H12.874a4.239,4.239,0,0,0-4.286,4.286V38.586a4.239,4.239,0,0,0,4.286,4.286h9.96l20.844,16.68a2.144,2.144,0,0,0,3.484-1.676V50.191l9.2,9.2a2.143,2.143,0,1,0,3.034-3.026ZM21.446,38.586H12.874V21.445h5.542l3.03,3.03Zm21.43,14.828L25.732,39.7V28.762L42.876,45.906Z" transform="translate(-0.019 -0.014)" />
                        </g>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 102 102">
                        <rect width="102" height="102" rx="50" fill="#fff" />
                        <g transform="translate(20 -27)">
                          <path d="M53.569.222A2.088,2.088,0,0,0,51.291.49L30.332,17.848H20.316a4.391,4.391,0,0,0-4.308,4.461V40.155a4.391,4.391,0,0,0,4.308,4.461H30.332L51.285,61.976a2.1,2.1,0,0,0,2.282.269,2.24,2.24,0,0,0,1.221-2.013v-58A2.246,2.246,0,0,0,53.569.222ZM28.936,40.155h-8.62V22.31h8.62ZM50.479,55.587,33.245,41.311V21.154L50.479,6.878Z" transform="translate(-16.008 0)" />
                          <path d="M361.853,106.956a2.4,2.4,0,0,0-3.378,3.421,19.164,19.164,0,0,1,0,27.139,2.4,2.4,0,0,0,3.378,3.421,23.978,23.978,0,0,0,0-33.981Z" transform="translate(-357.76 -106.263)" />
                        </g>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className={styles.heroBgBottom}>
          <div className={styles.heroBgCol1} />
          <div className={styles.heroBgCol2}>
            <img className={styles.heroBgImg2} src="/Images/site-images/img-main-bg-2.png" alt="" />
          </div>
        </div>
      </section>

      {/* ─── HOW WE DO IT ────────────────────────────────────────── */}
      <section className={styles.howSection} id="how-it-works">
        <div className={styles.howBg}>
          <img src="/Images/site-images/img-do-bg.png" alt="" />
        </div>
        <div className={styles.container}>
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className={styles.howTitle}>Here's how we do it.</h2>
          </ScrollReveal>
          <div className={styles.howGrid}>
            {[
              { icon: <BarChart3 size={20} />, title: "Strategy Backtesting", desc: "Test strategies against decades of data with realistic assumptions." },
              { icon: <GitBranch size={20} />, title: "Strategy Development", desc: "Design and code algorithms based on your trading hypothesis." },
              { icon: <Database size={20} />, title: "Data Integration", desc: "Ingest historical price data, fundamentals, sentiment, and alternative data." },
              { icon: <Target size={20} />, title: "Optimization", desc: "Fine-tune parameters to maximize returns and minimize risk." },
              { icon: <Brain size={20} />, title: "Machine Learning", desc: "Advanced ML models for pattern detection and signal generation." },
              { icon: <Shield size={20} />, title: "Risk Management", desc: "Real-time risk controls to protect against adverse moves." },
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={0.08 + index * 0.06}>
                <div className={`${styles.howCard} ${styles[`howCard${index % 6}`]}`}>
                  <div className={styles.howIcon}>{item.icon}</div>
                  <div className={styles.howCardBody}>
                    <h5 className={styles.howCardTitle}>
                      <span>{item.title.split(' ')[0]}</span>
                      {' ' + item.title.split(' ').slice(1).join(' ')}
                    </h5>
                    <div className={styles.howCardLine} />
                    <p className={styles.howCardText}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES CAROUSEL ───────────────────────────────────── */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.featuresHeader}>
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className={styles.featuresTitle}>Check our features</h2>
            </ScrollReveal>
          </div>
        </div>
        <div className={styles.featuresCarousel}>
          <div className={styles.featuresTrack}>
            {[
              { icon: <BarChart3 size={18} />, title: "Strategy Backtesting" },
              { icon: <PieChart size={18} />, title: "Portfolio Optimization" },
              { icon: <Activity size={18} />, title: "Real-Time Execution" },
              { icon: <AlertTriangle size={18} />, title: "Risk Controls" },
              { icon: <Clock size={18} />, title: "Market Microstructure" },
              { icon: <TrendingUp size={18} />, title: "Performance Analytics" },
              { icon: <BarChart3 size={18} />, title: "Strategy Backtesting" },
              { icon: <PieChart size={18} />, title: "Portfolio Optimization" },
              { icon: <Activity size={18} />, title: "Real-Time Execution" },
              { icon: <AlertTriangle size={18} />, title: "Risk Controls" },
              { icon: <Clock size={18} />, title: "Market Microstructure" },
              { icon: <TrendingUp size={18} />, title: "Performance Analytics" },
            ].map((feature, index) => (
              <div key={index} className={styles.featuresSlide}>
                <div className={styles.featuresSlideContent}>
                  <div>{feature.icon}</div>
                  <div className={styles.featuresSlideText}>
                    <p>{feature.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METRICS ───────────────────────────────────────────────── */}
      <section className={styles.metricsSection}>
        <div className={styles.container}>
          <div className={styles.metricsGrid}>
            {[
              { icon: <Users size={24} />, value: "405k+", label: "Signups" },
              { icon: <LineChart size={24} />, value: "~60k", label: "Algos" },
              { icon: <BarChart3 size={24} />, value: "~175k", label: "Live Trades Daily" },
              { icon: <Shield size={24} />, value: "100+", label: "Broker APIs" },
            ].map((metric, index) => (
              <ScrollReveal key={index} direction="up" delay={0.1 + index * 0.06}>
                <div className={styles.metricCard}>
                  <div className={styles.metricIcon}>{metric.icon}</div>
                  <p className={styles.metricValue}>{metric.value}</p>
                  <p className={styles.metricLabel}>{metric.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <ScrollReveal direction="up" delay={0.1}>
            <div className={styles.testimonialsHeader}>
              <h2 className={styles.testimonialsTitle}>Testimonials</h2>
              <p className={styles.testimonialsDesc}>
                Check out what fellow Algo-traders have to say
              </p>
            </div>
          </ScrollReveal>
          <div className={styles.testimonialsFrame}>
            <iframe
              src="https://widget.senja.io/widget/c5225f3c-9fc7-4e61-b657-eb1264fd1217"
              frameBorder="0"
              scrolling="no"
              width="80%"
              style={{ overflow: "hidden", height: "300px" }}
              title="Testimonials"
            />
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqBg} />
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <ScrollReveal direction="left" delay={0.1}>
              <div className={styles.faqLeft}>
                <h2 className={styles.faqTitle}>How can we help you?</h2>
                <p className={styles.faqText}>Please enter your question and we will find a right answer for you.</p>
                <form className={styles.faqForm}>
                  <div className={styles.faqInputGroup}>
                    <input
                      type="text"
                      className={styles.faqInput}
                      placeholder="Enter your question"
                    />
                    <button className={styles.faqSearchBtn} type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className={styles.faqRight}>
                {[
                  { q: "What is Algo Trading?", a: "Algo Trading, short for algorithmic trading, refers to the use of computer algorithms to execute trading orders in financial markets." },
                  { q: "How does Algo Trading work?", a: "Algo trading works on engines that receive and process market data in real-time using mathematical models and technical indicators." },
                  { q: "Is Algo Trading profitable?", a: "Algo trading can be profitable, but it depends on various factors such as the effectiveness of the trading strategy and market conditions." },
                  { q: "Is algo trading legal in India?", a: "Yes, algo trading is legal in India. SEBI has established guidelines and regulations for algo trading." },
                ].map((faq, index) => (
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
                <div className={styles.faqMore}>
                  <Link to="/faq" className={styles.faqMoreLink}>
                    <span>More FAQs</span>
                    <i className={styles.arrowIcon}>→</i>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ─── CONTACT FORM ───────────────────────────────────────── */}
        <div className={styles.faqContactWrapper}>
          <div className={styles.faqContactBg} />
          <div className={styles.container}>
            <ScrollReveal direction="up" delay={0.1}>
              <div className={styles.contactSection}>
                <p className={styles.contactTitle}>Contact Us</p>
                <form className={styles.contactForm}>
                  <div className={styles.contactRow}>
                    <div className={styles.contactGroup}>
                      <label htmlFor="contact_name">Your Name</label>
                      <input className={styles.contactInput} id="contact_name" type="text" placeholder="Type your name" />
                    </div>
                    <div className={styles.contactGroup}>
                      <label htmlFor="contact_email">Email address</label>
                      <input className={styles.contactInput} id="contact_email" type="email" placeholder="Type your email" />
                    </div>
                  </div>
                  <div className={styles.contactGroup}>
                    <label htmlFor="contact_message">Message</label>
                    <textarea className={styles.contactTextarea} id="contact_message" placeholder="Type your message here" rows={3} />
                  </div>
                  <button className={styles.contactSubmit} type="submit">Send</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
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

export default AlgorithmicTradingAnalyticsPage;