// src/pages/Services/MarketSentimentAnalysis/MarketSentimentAnalysisPage.jsx
import React, { useRef, useState, useEffect } from "react";
import SEO from "../../../components/SEO/SEO";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Users,
  FileText,
  PieChart,
  BarChart3,
  CheckCircle,
  Mail,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import { apiService } from "../../../services/api";
import styles from "./MarketSentimentAnalysisPage.module.css";

// ─── YOUR REAL IMAGES ──────────────────────────────────────────────
const heroImage = "/Images/site-images/lottie-preview-image.webp";
const monitoringImage = "/Images/site-images/media-monitoring-image.webp";
const listeningImage = "/Images/site-images/media-listening-img.webp";

// ─── REAL YOUTUBE VIDEOS ──────────────────────────────────────────
// Video 1: "What is Sentiment Analysis?" by IBM Technology
const videoSentimentAnalysis = "https://www.youtube.com/embed/5HQCNAsSO-s";
// Video 2: "What is Market Sentiment Analysis? - Sentiment Analysis Techniques"
const videoMarketSentiment = "https://www.youtube.com/embed/4OikYqwHDvw";

// ─── Animation Variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const tabContentVariants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.6 } },
};

// ─── Main Component ───────────────────────────────────────────────
const MarketSentimentAnalysisPage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState(0);
  const tabInterval = useRef(null);

  // ─── Contact Form State ──────────────────────────────────────────
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const tabsData = [
    {
      title: "Financial Analysts & Traders",
      desc: "Monitor market-moving news and track sentiment to make data-driven investment decisions. Identify trends before they become mainstream.",
      img: listeningImage,
    },
    {
      title: "PR & Marketing Teams",
      desc: "Understand brand perception and monitor campaign performance across all media channels. Track sentiment in real-time.",
      img: monitoringImage,
    },
    {
      title: "Corporate Strategy Teams",
      desc: "Gain competitive intelligence and stay informed on industry trends for strategic decisions. Identify opportunities and threats.",
      img: listeningImage,
    },
    {
      title: "Government & Public Sector",
      desc: "Track public opinion, monitor policy changes, and keep up with global sentiment trends. Make data-driven policy decisions.",
      img: monitoringImage,
    },
  ];

  useEffect(() => {
    tabInterval.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabsData.length);
    }, 4000);
    return () => clearInterval(tabInterval.current);
  }, [tabsData.length]);

  const handleTabHover = (index) => {
    clearInterval(tabInterval.current);
    setActiveTab(index);
    setTimeout(() => {
      tabInterval.current = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % tabsData.length);
      }, 4000);
    }, 5000);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await apiService.submitLead(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
    } catch (err) {
      setError(
        err.message ||
        "Failed to send message. Please email us directly at info@scapedatasolutions.com"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <SEO
        title="Market Sentiment Analysis | Scape Data Solutions"
        description="AI-powered market sentiment analysis. Monitor brand perception, predict market movements, and gain competitive intelligence from news, social media, and financial data."
        path="/services/market-sentiment-analysis"
        schema={buildServiceSchema({
          name: "Market Sentiment Analysis",
          description: "AI-powered market sentiment analysis. Monitor brand perception, predict market movements, and gain competitive intelligence from news, social media, and financial data.",
          path: "/services/market-sentiment-analysis",
        })}
      />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section ref={heroRef} className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className={styles.heroVideo}
            preload="none"
          >
            <source src="/videos/hero-bg.webm" type="video/webm" />
          </video>
        </div>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <motion.div
                className={styles.heroBadge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles size={13} /> AI-Powered Sentiment Analysis
              </motion.div>
              <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                Market Intelligence that puts the world's sentiment <span className={styles.highlight}>at your fingertips</span>
              </motion.h1>
              <motion.p className={styles.heroSub} variants={fadeUp}>
                AI-powered sentiment analysis across 100,000+ sources with instant alerts,
                brand perception tracking, and competitive intelligence for better decisions.
                Understand what the market truly thinks about your brand, competitors, and industry.
              </motion.p>
              <motion.div className={styles.heroCta} variants={fadeUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="#contact" className={styles.heroBtn}>
                    Book a Demo <ArrowRight size={16} />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={scaleIn}
              transition={{ delay: 0.2 }}
            >
              <img
                src={heroImage}
                alt="Market sentiment analysis dashboard"
                className={styles.heroImg}
              />
            </motion.div>
          </div>
        </div>

        {/* Trust bar */}
        <motion.div
          className={styles.trustBar}
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.container}>
            <p className={styles.trustText}>
              Trusted by financial analysts, marketers, and strategists in 20+ countries.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ─── WATCH IN ACTION ────────────────────────────────────── */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.videoContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Watch <span className={styles.highlight}>Market Sentiment Analysis</span> in Action
            </h2>
            <p>Discover how AI-powered sentiment analysis is transforming market intelligence and helping businesses make better decisions.</p>
            <div className={styles.videoWrapper}>
              <iframe
                width="100%"
                height="auto"
                src={videoSentimentAnalysis}
                title="What is Sentiment Analysis? - IBM Technology"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── INSIGHTS CARDS ───────────────────────────────────────── */}
      <section className={styles.insightsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            The Ultimate <span className={styles.highlight}>Market Insights</span> Suite
          </motion.h2>

          <p className={styles.sectionSubtitle}>
            Our comprehensive sentiment analysis platform gives you real-time visibility into
            market perception, competitor positioning, and emerging trends. Make data-driven
            decisions with confidence.
          </p>

          <motion.div
            className={styles.insightsGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              { icon: <Globe size={24} />, title: "Brand Monitoring", desc: "Track brand perception across news, social media, and forums. Understand what people are saying about your brand in real-time.", img: monitoringImage },
              { icon: <Users size={24} />, title: "Social Listening", desc: "Monitor conversations and sentiment across all major platforms. Capture every mention, comment, and conversation that matters.", img: listeningImage },
              { icon: <BarChart3 size={24} />, title: "Trend Analysis", desc: "Identify emerging trends and sentiment shifts in real-time. Stay ahead of the curve and anticipate market movements.", img: monitoringImage },
              { icon: <PieChart size={24} />, title: "Sentiment Scoring", desc: "AI-powered sentiment analysis with 94% accuracy. Classify text as positive, negative, or neutral with context-aware precision.", img: listeningImage },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.insightCard}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.insightCardImage}
                  loading="lazy"
                />
                <div className={styles.insightIcon}>{item.icon}</div>
                <div className={styles.insightContent}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className={styles.insightArrow}>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* The Sentiment Edge */}
          <motion.div
            className={styles.edgeBox}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3>The Sentiment Edge</h3>
            <p>Where market perception becomes clarity, and clarity becomes your competitive advantage. Our platform gives you the insights you need to make smarter, faster decisions.</p>
            <div className={styles.edgeStats}>
              <div className={styles.edgeStat}>
                <strong>100K+</strong>
                <label>Sources Analyzed</label>
                <p>Tracking every voice. Every outlet. Every signal that shapes market perception. From major news outlets to niche blogs and social platforms.</p>
              </div>
              <div className={styles.edgeStat}>
                <strong>&lt;200ms</strong>
                <label>Alert Speed</label>
                <p>Alerts faster than competitors, keeping you a step ahead always. React to sentiment shifts before they impact your business.</p>
              </div>
              <div className={styles.edgeStat}>
                <strong>94%</strong>
                <label>Accuracy Rate</label>
                <p>AI-powered sentiment detection with industry-leading precision. Reduce false positives and focus on what truly matters.</p>
              </div>
              <div className={styles.edgeStat}>
                <strong>80+</strong>
                <label>Languages</label>
                <p>Break language barriers and monitor sentiment across global markets. Understand conversations in any language, anywhere.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ANIMATED TABS ─────────────────────────────────────────── */}
      <section className={styles.tabsSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.tabsHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2>
              All-in-One Sentiment Analysis <br />
              <span className={styles.highlight}>for Everyone</span>
            </h2>
            <p>
              Market sentiment analysis empowers you regardless of your role. Whether you're a
              financial analyst, marketer, strategist, or public sector pro, our platform gives
              you the insights you need to make better decisions.
            </p>
          </motion.div>

          <div className={styles.tabsWrapper}>
            <div className={styles.tabsButtons}>
              {tabsData.map((tab, index) => (
                <motion.div
                  key={index}
                  className={`${styles.tabButton} ${activeTab === index ? styles.active : ""}`}
                  onMouseEnter={() => handleTabHover(index)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={styles.tabIconPlaceholder} />
                  <div className={styles.tabText}>
                    <h3>{tab.title}</h3>
                    <p>{tab.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className={styles.tabsContent}>
              {tabsData.map((tab, index) => (
                <motion.div
                  key={index}
                  className={`${styles.tabImage} ${activeTab === index ? styles.active : ""}`}
                  initial="hidden"
                  animate={activeTab === index ? "visible" : "hidden"}
                  variants={tabContentVariants}
                >
                  <img src={tab.img} alt={tab.title} loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ────────────────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>
              Ready to unlock <br /> market sentiment insights?
            </h2>
            <p>
              Get in touch to learn how our sentiment analysis platform can be customized for your needs.
              From brand monitoring to competitive intelligence, we have the solutions you need to stay ahead.
            </p>
            <a href="#contact" className={styles.ctaBtnLarge}>
              Book a Demo <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────────── */}
      <section className={styles.howSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            How Sentiment Analysis <span className={styles.highlight}>Stands Out</span>
          </motion.h2>

          <p className={styles.sectionSubtitle}>
            Our platform combines cutting-edge AI with deep market understanding to deliver
            actionable insights. Here's how we help you stay ahead of the competition.
          </p>

          {[
            {
              title: "Real-Time Sentiment Monitoring",
              desc: "Our platform tracks mentions, trends, and sentiment in real time. Stay ahead with instant alerts across 100k+ global sources. Whether it's breaking news, social media chatter, or industry reports, we capture it all.",
              points: [
                "Instant Tracking – See sentiment shifts as they happen, not hours later.",
                "Global Reach – From major outlets to micro blogs and social platforms.",
                "Smart Alerts – Get notified on topics that matter to you.",
                "Custom Sources – Choose your data set & make informed decisions.",
              ],
              img: monitoringImage,
              reverse: false,
            },
            {
              title: "AI-Powered Sentiment Scoring",
              desc: "Track global conversations in real time. Our sentiment analysis tool identifies positive, negative, or neutral reactions to help you spot trends and protect your reputation quickly. With 94% accuracy, you can trust the insights you receive.",
              points: [
                "Instant Insights – Positive, negative, or neutral in real time.",
                "Global Reach – 100k+ sources, 80+ languages, 235+ regions.",
                "Always On – Alerts for sentiment shifts and potential crises.",
                "AI Precision – Filters noise, highlights what truly matters.",
              ],
              img: listeningImage,
              reverse: true,
            },
            {
              title: "Competitive Intelligence",
              desc: "Understand how your brand compares to competitors. Track sentiment trends and identify opportunities and threats in your market. Know what your competitors are doing and how the market perceives them.",
              points: [
                "Competitor Benchmarking – Compare sentiment against industry peers.",
                "Share of Voice – Understand your market presence vs competitors.",
                "Trend Analysis – Identify emerging threats and opportunities.",
                "Actionable Reports – Data-driven insights ready for strategy.",
              ],
              img: monitoringImage,
              reverse: false,
            },
            {
              title: "Predictive Market Insights",
              desc: "Anticipate market movements before they happen. Our platform identifies sentiment patterns that predict future market behavior. Make proactive decisions based on data, not guesswork.",
              points: [
                "Pattern Recognition – Identify sentiment patterns that signal change.",
                "Risk Detection – Spot reputation risks before they escalate.",
                "Opportunity Identification – Uncover market opportunities early.",
                "Data-Driven Decisions – Back your strategy with objective sentiment data.",
              ],
              img: listeningImage,
              reverse: true,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.howBlock} ${item.reverse ? styles.reverse : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className={styles.howContent}>
                <strong className={styles.howTag}>Catch the pulse of the market as it happens.</strong>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <h4>Enhance your market intelligence with:</h4>
                <ol className={styles.howList}>
                  {item.points.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ol>
              </div>
              <div className={styles.howAnim}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className={styles.howAnimImage}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── ACTIONABLE INSIGHTS ───────────────────────────────────── */}
      <section className={styles.actionableSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.actionableTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Actionable <span className={styles.highlight}>Insights</span>, <br />
            No Clutter, Informed Decisions.
          </motion.h2>

          <p className={styles.actionableSubtitle}>
            Our platform delivers clear, actionable insights that help you make better decisions
            faster. No noise, no clutter – just the information you need to succeed.
          </p>

          <motion.div
            className={styles.actionableStats}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
          >
            {[
              { value: "56x", label: "Faster Response", desc: "React instantly with real-time sentiment alerts and analysis. Stay ahead of issues before they become crises." },
              { value: "26 Hrs", label: "Saved Per Week", desc: "Automate sentiment monitoring and customize reports to save valuable time. Focus on strategy, not data gathering." },
              { value: "94%", label: "Accuracy Rate", desc: "Industry-leading sentiment detection that beats other monitoring tools. Trust the insights you receive." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`${styles.actionableStat} ${index === 1 ? styles.centerBox : ""}`}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.actionableIcon} />
                <strong>{item.value}</strong>
                <p className={styles.actionableHighlight}>{item.label}</p>
                <p className={styles.actionableDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.actionableVideo}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              width="100%"
              height="auto"
              src={videoMarketSentiment}
              title="What is Market Sentiment Analysis? - Sentiment Analysis Techniques"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT SECTION (Functional) ──────────────────────────── */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.container}>
          {submitted ? (
            /* ─── SUCCESS STATE ─────────────────────────────── */
            <motion.div
              className={styles.successContent}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <motion.div
                className={styles.successIcon}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 350, delay: 0.2 }}
              >
                <CheckCircle size={64} />
              </motion.div>
              <h2 className={styles.successTitle}>Message Received!</h2>
              <p className={styles.successText}>
                Thank you for reaching out! We've received your message and will
                get back to you within 24 hours.
              </p>
              <div className={styles.nextSteps}>
                <h3>What happens next?</h3>
                <ul>
                  {[
                    "We'll review your inquiry",
                    "A team member will reach out within 24 hours",
                    "We'll schedule a free consultation call",
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
              <button
                onClick={() => setSubmitted(false)}
                className={styles.homeButton}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            /* ─── CONTACT FORM ────────────────────────────────── */
            <div className={styles.contactWrapper}>
              <motion.div
                className={styles.contactText}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <strong>Ready to Try Sentiment Analysis?</strong>
                <h2>Smarter Insights. Stronger Moves.</h2>
                <p>
                  Track the stories that matter, filter the rest, and make decisions in real time.
                  Our platform gives you the insights you need to stay ahead of the competition.
                </p>
                <p>Elevate your market strategy with:</p>
                <ul>
                  <li>Ongoing monitoring with &lt;200ms alerts</li>
                  <li>AI-powered sentiment analysis across every platform</li>
                  <li>Actionable insights across 100k+ sources</li>
                  <li>Custom feeds &amp; dashboards tailored to your business</li>
                  <li>Competitive intelligence and brand benchmarking</li>
                  <li>Predictive market insights and trend detection</li>
                </ul>

                <div className={styles.contactMethods}>
                  <div className={styles.contactMethod}>
                    <Mail size={17} />
                    <div>
                      <span className={styles.methodLabel}>Email</span>
                      <span className={styles.methodValue}>info@scapedatasolutions.com</span>
                    </div>
                  </div>
                  <div className={styles.contactMethod}>
                    <Phone size={17} />
                    <div>
                      <span className={styles.methodLabel}>Phone</span>
                      <span className={styles.methodValue}>+1 (757) 598-0582</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={styles.contactForm}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.formPlaceholder}>
                  <h3>Get in Touch</h3>
                  <p>Fill out the form and we'll get back to you shortly.</p>

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

                  <form onSubmit={handleSubmit}>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 2712 345 678"
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label>What can we help you with? *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select an area...</option>
                        {[
                          "I want to understand my business data better",
                          "I need a dashboard or reporting system",
                          "I want to predict customer behaviour or sales",
                          "I need help automating decisions with data",
                          "I want to improve my marketing with data",
                          "I need to clean up or organise my data",
                          "I want to reduce costs using data insights",
                          "I need a data strategy for my business",
                          "I'm not sure — I just know data can help me",
                        ].map(o => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Tell Us About Your Project *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Tell us about your data challenges, goals, and what you're hoping to achieve..."
                      />
                    </div>

                    <div className={styles.formCheckbox}>
                      <input type="checkbox" id="agree" required />
                      <label htmlFor="agree">
                        By checking this, you agree to our Privacy Policy and to receive communications.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={loading}
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
                              border: "2px solid #1a1a2e",
                              borderTopColor: "transparent",
                              borderRadius: "50%",
                            }}
                          />
                          Processing...
                        </>
                      ) : (
                        <><Send size={16} /> Send Message</>
                      )}
                    </button>

                    <p className={styles.privacy}>
                      By submitting this form, you agree to our privacy policy.
                      We'll never share your information.
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default MarketSentimentAnalysisPage;