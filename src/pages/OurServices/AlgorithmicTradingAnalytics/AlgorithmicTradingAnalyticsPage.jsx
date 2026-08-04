// src/pages/Services/AlgorithmicTradingAnalytics/AlgorithmicTradingAnalyticsPage.jsx
import React, { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  LineChart,
  Target,
  Clock,
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
  Code2,
  Server,
  PlugZap,
  Layers,
  CheckCircle,
  Zap,
  FileSearch,
  Settings,
  Award,
  Rocket,
  BookOpen,
  Globe,
  Lock,
  ZapIcon,
  DollarSign,
  Percent,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./AlgorithmicTradingAnalyticsPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';
import { apiService } from '../../../services/api';

// ─── SCROLL‑REVEAL WRAPPER ──────────────────────────────────────
const ScrollSection = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

// ─── PLATFORM DATA ────────────────────────────────────────────────
const PLATFORMS = [
  {
    icon: <Code2 size={22} />,
    name: "MetaTrader 4",
    desc: "Run Expert Advisors on the platform traders already know, with our data and execution behind it.",
  },
  {
    icon: <Layers size={22} />,
    name: "ProRealTime",
    desc: "Build, chart and automate strategies visually with ProBuilder, no coding required.",
  },
  {
    icon: <Server size={22} />,
    name: "REST & Streaming API",
    desc: "Push orders and pull live pricing programmatically for fully custom, low-latency systems.",
  },
  {
    icon: <PlugZap size={22} />,
    name: "Python SDK",
    desc: "A lightweight client library for research, backtesting and live deployment in one workflow.",
  },
];

// ─── EXPANDED FAQ (12 questions) ──────────────────────────────────
const FAQ_DATA = [
  { q: "Which platforms do you support?", a: "MetaTrader 4, ProRealTime, and our own REST and streaming API — so you can automate on the tool your desk already trusts." },
  { q: "Can I connect my own broker?", a: "Yes. We integrate with over 100 brokers and data providers, and can build a custom connector for setups outside that list." },
  { q: "Do you provide historical data for backtesting?", a: "We provide tick and bar-level historical data across equities, FX, indices and commodities, going back multiple decades where available." },
  { q: "What risk controls are built in?", a: "Position limits, exposure caps, drawdown kill-switches and real-time alerting are configured before any strategy goes live." },
  { q: "How long does it take to deploy a strategy?", a: "From backtesting to live execution typically takes 2–4 weeks, depending on complexity and data integration needs." },
  { q: "Do you offer managed infrastructure?", a: "Yes. We can host and manage your trading infrastructure on our low‑latency cloud, or you can run everything on your own servers." },
  { q: "What asset classes do you cover?", a: "Equities, FX, commodities, indices, futures, and increasingly crypto via our streaming data feeds." },
  { q: "Can I test strategies with live data before going live?", a: "Absolutely. We provide paper‑trading environments that mirror live market conditions so you can validate before risking real capital." },
  { q: "How is my strategy data kept secure?", a: "All data is encrypted in transit and at rest. We comply with SOC 2 and ISO 27001, and we can sign NDAs and additional confidentiality agreements." },
  { q: "Do you offer training or onboarding?", a: "Yes. Every engagement includes a dedicated onboarding session and documentation, plus optional ongoing training for your quant and dev teams." },
  { q: "Can I export my backtest results?", a: "You can export full backtest reports in CSV, JSON, or PDF, including all trade logs, performance metrics, and equity curves." },
  { q: "What is the minimum commitment?", a: "We offer flexible month‑to‑month plans with no long‑term lock‑in. Enterprise clients can choose annual contracts with volume discounts." },
];

// ─── STATIC TESTIMONIALS ──────────────────────────────────────────
const TESTIMONIALS = [
  { name: "David Chen", role: "Quantitative Trader", quote: "We've been using Scape Data Solutions for over two years. The backtesting engine is the most reliable we've tested, and the execution latency is consistently under 10ms." },
  { name: "Sarah Okafor", role: "Hedge Fund Analyst", quote: "The ability to deploy strategies across multiple platforms from a single interface saved our team months of integration work. The support team actually understands our workflow." },
  { name: "James Whitaker", role: "CTO, Prop Trading Firm", quote: "They don't just sell software—they helped us redesign our entire data pipeline. Our strategies are now more responsive and our risk management is bulletproof." },
];

// ─── COMPARISON TABLE DATA ────────────────────────────────────────
const comparisonData = [
  { feature: "Historical Data Depth", mt4: "5 years", pro: "10 years", api: "20+ years" },
  { feature: "Custom Indicators", mt4: "MQL4", pro: "ProBuilder", api: "Python/R" },
  { feature: "Multi‑timeframe Backtest", mt4: "Limited", pro: "Yes", api: "Advanced" },
  { feature: "Order Routing", mt4: "Standard", pro: "Standard", api: "Smart & DMA" },
  { feature: "Machine Learning Integration", mt4: "No", pro: "No", api: "Native" },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────
const AlgorithmicTradingAnalyticsPage = () => {
  const [showTop, setShowTop] = useState(false);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const [faqSearch, setFaqSearch] = useState("");
  const filteredFaqs = useMemo(() => {
    if (!faqSearch.trim()) return FAQ_DATA;
    const query = faqSearch.toLowerCase().trim();
    return FAQ_DATA.filter(item =>
      item.q.toLowerCase().includes(query) ||
      item.a.toLowerCase().includes(query)
    );
  }, [faqSearch]);

  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [contactLoading, setContactLoading] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactError, setContactError] = useState(null);

  const handleContactChange = (e) => {
    setContactForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactLoading(true);
    setContactError(null);
    try {
      await apiService.submitLead({
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message,
        company: "",
        phone: "",
        service: "Algorithmic Trading Analytics",
      });
      setContactSubmitted(true);
      setContactForm({ name: "", email: "", message: "" });
    } catch (err) {
      setContactError(err.message || "Failed to send. Please email info@scapedatasolutions.com");
    } finally {
      setContactLoading(false);
    }
  };

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
      <SEO
        title="Algorithmic Trading Analytics | Scape Data Solutions"
        description="Build, backtest and deploy algorithmic trading strategies across MetaTrader 4, ProRealTime and our own API — backed by real-time analytics and risk controls."
        path="/services/algorithmic-trading-analytics"
        schema={buildServiceSchema({
          name: "Algorithmic Trading Analytics",
          description: "Build, backtest and deploy algorithmic trading strategies across MetaTrader 4, ProRealTime and our own API — backed by real-time analytics and risk controls.",
          path: "/services/algorithmic-trading-analytics",
        })}
      />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <img className={styles.heroBgImg} src="/Images/site-images/img-main-bg-1.png" alt="" />
        </div>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <motion.div
                className={styles.heroBadge}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp size={12} /> <span>Algorithmic Trading Analytics</span>
              </motion.div>
              <h1 className={styles.heroTitle}>
                Trade Algorithmically.
                <span className={styles.highlight}> On Your Terms.</span>
              </h1>
              <p className={styles.heroSub}>
                Design, backtest and run automated strategies on MetaTrader 4, ProRealTime,
                or our own REST and streaming API — with real-time analytics and risk
                controls built in from day one.
              </p>
              <div className={styles.heroCta}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link to="/contact" className={styles.heroBtn}>
                    Talk to Us <ArrowRight size={14} />
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 }}
                >
                  <a href="#platforms" className={styles.heroBtnSecondary}>
                    See the Platforms <Eye size={13} />
                  </a>
                </motion.div>
              </div>
            </div>

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
          </div>
        </div>

        <div className={styles.heroBgBottom}>
          <div className={styles.heroBgCol1} />
          <div className={styles.heroBgCol2}>
            <img className={styles.heroBgImg2} src="/Images/site-images/img-main-bg-2.png" alt="" />
          </div>
        </div>
      </section>

      {/* ─── WHY ALGORITHMIC TRADING? ──────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.textSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why go algorithmic?</h2>
            <p className={styles.sectionSub}>
              Automation removes emotion, enables scale, and gives you a measurable edge over discretionary trading.
            </p>
            <div className={styles.twoColumn}>
              <div className={styles.textBlock}>
                <p>
                  Algorithmic trading transforms the way you interact with markets. By codifying your strategy into a set of deterministic rules, you eliminate the emotional and cognitive biases that often lead to sub‑optimal decisions. Whether you are a hedge fund, a proprietary trading firm, or an individual quant, the ability to backtest, optimise, and execute systematically gives you a measurable edge.
                </p>
                <ul className={styles.checkList}>
                  <li><CheckCircle size={16} /> Eliminate emotional trading – stick to your plan without hesitation.</li>
                  <li><CheckCircle size={16} /> Backtest and validate your ideas against decades of historical data.</li>
                  <li><CheckCircle size={16} /> Scale your strategy across thousands of instruments without additional headcount.</li>
                  <li><CheckCircle size={16} /> Receive real‑time performance analytics and risk alerts.</li>
                </ul>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>60,000+</span>
                  <span className={styles.statLabel}>Algorithms Deployed</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>17,000+</span>
                  <span className={styles.statLabel}>Markets Covered</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>99.99%</span>
                  <span className={styles.statLabel}>Uptime Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── THE REALITY ────────────────────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.textSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>The reality: strategy is easy, execution is hard</h2>
            <p className={styles.sectionSub}>
              Most traders have great ideas. The bottleneck is turning them into a reliable, production‑ready system.
            </p>
            <div className={styles.textBlock}>
              <p>
                Fragmented data, slow backtesting, disconnected tools, and execution latency are the silent killers of alpha. Even the best strategy will fail if it takes days to test a new parameter, or if your orders are filled at stale prices. Our platform addresses each of these pain points head‑on.
              </p>
              <ol className={styles.numberedList}>
                <li><strong>Fragmented data:</strong> We unify price feeds, fundamentals, sentiment, and alternative data into a single, consistent stream.</li>
                <li><strong>Manual backtesting:</strong> Our engine runs multi‑asset, multi‑timeframe simulations with realistic slippage and fees in seconds, not hours.</li>
                <li><strong>Siloed tools:</strong> Research, development, and execution live in one environment – no more copy‑pasting between systems.</li>
                <li><strong>Delayed execution:</strong> Our low‑latency infrastructure ensures your orders reach the exchange in under 10ms.</li>
              </ol>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── FEATURE COMPARISON TABLE ───────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.tableSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Platform comparison</h2>
            <p className={styles.sectionSub}>
              See how our API stacks up against traditional platforms.
            </p>
            <div className={styles.tableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>MetaTrader 4</th>
                    <th>ProRealTime</th>
                    <th>Scape API</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.feature}</td>
                      <td>{row.mt4}</td>
                      <td>{row.pro}</td>
                      <td>{row.api}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── DATA SOURCES – ICON GRID ───────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.iconGridSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Data sources that drive your strategies</h2>
            <p className={styles.sectionSub}>
              We ingest and normalise data from a wide range of providers, so you can focus on the signal.
            </p>
            <div className={styles.iconGrid}>
              {[
                { icon: <BarChart3 size={24} />, label: "Market Data" },
                { icon: <Database size={24} />, label: "Fundamentals" },
                { icon: <Globe size={24} />, label: "Sentiment" },
                { icon: <ZapIcon size={24} />, label: "Alternative Data" },
                { icon: <Users size={24} />, label: "Social Signals" },
                { icon: <Lock size={24} />, label: "Proprietary Feeds" },
              ].map((item, idx) => (
                <div key={idx} className={styles.iconGridItem}>
                  <div className={styles.iconGridIcon}>{item.icon}</div>
                  <span className={styles.iconGridLabel}>{item.label}</span>
                </div>
              ))}
            </div>
            <p className={styles.iconGridNote}>
              All data is timestamped, cleaned, and normalised to a consistent schema, making it ready for backtesting and live trading without additional preprocessing.
            </p>
          </div>
        </section>
      </ScrollSection>

      {/* ─── EXECUTION INFRASTRUCTURE – VISUAL BAR ──────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.barSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Low‑latency execution infrastructure</h2>
            <p className={styles.sectionSub}>
              Speed matters. Our colocated environment and smart order routing give you a real edge.
            </p>
            <div className={styles.barWrapper}>
              <div className={styles.barItem}>
                <span className={styles.barLabel}>Round‑trip latency</span>
                <div className={styles.barTrack}>
                  <motion.div
                    className={styles.barFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  >
                    8 ms
                  </motion.div>
                </div>
              </div>
              <div className={styles.barItem}>
                <span className={styles.barLabel}>Market data feed</span>
                <div className={styles.barTrack}>
                  <motion.div
                    className={styles.barFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: "92%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  >
                    4 ms
                  </motion.div>
                </div>
              </div>
              <div className={styles.barItem}>
                <span className={styles.barLabel}>Order execution</span>
                <div className={styles.barTrack}>
                  <motion.div
                    className={styles.barFill}
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                  >
                    12 ms
                  </motion.div>
                </div>
              </div>
            </div>
            <div className={styles.textBlock}>
              <p>
                Our infrastructure is hosted in Equinix and Interxion data centres, with direct market access to over 50 venues. Smart order routing minimises market impact, and automated failover ensures 99.99% uptime.
              </p>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── RISK & COMPLIANCE – CHECKLIST ──────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.textSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Risk management and regulatory compliance</h2>
            <p className={styles.sectionSub}>
              Trade with confidence – our controls protect your capital and meet the strictest regulatory standards.
            </p>
            <div className={styles.checklistGrid}>
              {[
                { icon: <Shield size={20} />, title: "Exposure caps", desc: "Maximum notional exposure per asset and overall portfolio." },
                { icon: <AlertTriangle size={20} />, title: "Drawdown limits", desc: "Automatic strategy pause or full liquidation if threshold breached." },
                { icon: <DollarSign size={20} />, title: "Daily loss limits", desc: "Prevents a single bad day from wiping out profits." },
                { icon: <Lock size={20} />, title: "Compliance checks", desc: "Ensure strategies comply with MiFID II, SEC, and CFTC regulations." },
              ].map((item, idx) => (
                <div key={idx} className={styles.checklistItem}>
                  <span className={styles.checklistIcon}>{item.icon}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── CASE STUDY ───────────────────────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.textSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Case study: Doubling Sharpe ratio</h2>
            <p className={styles.sectionSub}>
              How we helped a $500M hedge fund transform its trading outcomes.
            </p>
            <div className={styles.caseStudy}>
              <div className={styles.caseStudyText}>
                <p>
                  A $500M hedge fund was struggling with inconsistent returns and high turnover. Their manual backtesting process took days, and they often missed profitable signals due to outdated data. We migrated their entire workflow to our platform:
                </p>
                <ul>
                  <li><strong>Data integration:</strong> Connected to 10+ data providers for equities and options.</li>
                  <li><strong>Backtesting:</strong> Reduced backtest time from 5 days to 2 hours, enabling rapid iteration.</li>
                  <li><strong>Optimisation:</strong> Used our machine learning tools to fine‑tune parameters and reduce drawdown.</li>
                  <li><strong>Execution:</strong> Deployed to their existing MT4 setup with our low‑latency bridge.</li>
                </ul>
                <p>
                  <strong>Results:</strong> Within 3 months, their Sharpe ratio increased from 1.2 to 2.5, turnover dropped by 40%, and they saved over $200,000 in manual labour costs annually.
                </p>
              </div>
              <div className={styles.caseStudyStats}>
                <div><span>+108%</span><span>Sharpe ratio improvement</span></div>
                <div><span>40%</span><span>Reduction in turnover</span></div>
                <div><span>$200k</span><span>Annual cost savings</span></div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── TRADING PLATFORMS ───────────────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.platformsSection} id="platforms">
          <div className={styles.container}>
            <h2 className={styles.platformsTitle}>Run your strategy where you already work</h2>
            <p className={styles.platformsSub}>
              No forced migration. Connect the tools your desk already uses, or build something entirely custom on our API.
            </p>
            <div className={styles.platformsGrid}>
              {PLATFORMS.map((p, index) => (
                <motion.div
                  key={index}
                  className={styles.platformCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <div className={styles.platformIcon}>{p.icon}</div>
                  <h3 className={styles.platformName}>{p.name}</h3>
                  <p className={styles.platformDesc}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── HOW WE DO IT ────────────────────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.howSection} id="how-it-works">
          <div className={styles.howBg}>
            <img src="/Images/site-images/img-do-bg.png" alt="" />
          </div>
          <div className={styles.container}>
            <h2 className={styles.howTitle}>Here's how we do it.</h2>
            <div className={styles.howGrid}>
              {[
                { icon: <BarChart3 size={20} />, title: "Strategy Backtesting", desc: "Test strategies against decades of tick and bar data with realistic slippage and fees." },
                { icon: <GitBranch size={20} />, title: "Strategy Development", desc: "Design and code algorithms from your trading hypothesis, in whichever platform fits." },
                { icon: <Database size={20} />, title: "Data Integration", desc: "Ingest historical price data, fundamentals, sentiment, and alternative data sets." },
                { icon: <Target size={20} />, title: "Optimization", desc: "Fine-tune parameters and walk-forward test to maximize returns and control drawdown." },
                { icon: <Brain size={20} />, title: "Machine Learning", desc: "Pattern detection and signal generation models trained on your own data." },
                { icon: <Shield size={20} />, title: "Risk Management", desc: "Real-time exposure limits, kill-switches and alerts to protect against adverse moves." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`${styles.howCard} ${styles[`howCard${index % 6}`]}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.06, duration: 0.5 }}
                >
                  <div className={styles.howIcon}>{item.icon}</div>
                  <div className={styles.howCardBody}>
                    <h5 className={styles.howCardTitle}>
                      <span>{item.title.split(' ')[0]}</span>
                      {' ' + item.title.split(' ').slice(1).join(' ')}
                    </h5>
                    <div className={styles.howCardLine} />
                    <p className={styles.howCardText}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── FEATURES CAROUSEL ───────────────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <div className={styles.featuresHeader}>
              <h2 className={styles.featuresTitle}>Check our features</h2>
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
                { icon: <Server size={18} />, title: "17,000+ Markets" },
                { icon: <Code2 size={18} />, title: "Custom Indicators" },
                { icon: <BarChart3 size={18} />, title: "Strategy Backtesting" },
                { icon: <PieChart size={18} />, title: "Portfolio Optimization" },
                { icon: <Activity size={18} />, title: "Real-Time Execution" },
                { icon: <AlertTriangle size={18} />, title: "Risk Controls" },
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
      </ScrollSection>

      {/* ─── METRICS ───────────────────────────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.metricsSection}>
          <div className={styles.container}>
            <div className={styles.metricsGrid}>
              {[
                { icon: <Server size={24} />, value: "17k+", label: "Markets Covered" },
                { icon: <LineChart size={24} />, value: "~60k", label: "Algos Deployed" },
                { icon: <BarChart3 size={24} />, value: "~175k", label: "Live Trades Daily" },
                { icon: <Users size={24} />, value: "100+", label: "Broker & API Integrations" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className={styles.metricCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1 + index * 0.06, duration: 0.5 }}
                >
                  <div className={styles.metricIcon}>{metric.icon}</div>
                  <p className={styles.metricValue}>{metric.value}</p>
                  <p className={styles.metricLabel}>{metric.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <div className={styles.testimonialsHeader}>
              <h2 className={styles.testimonialsTitle}>What our clients say</h2>
              <p className={styles.testimonialsDesc}>
                Real feedback from teams that have deployed strategies with us.
              </p>
            </div>
            <div className={styles.testimonialsGrid}>
              {TESTIMONIALS.map((t, index) => (
                <motion.div
                  key={index}
                  className={styles.testimonialCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.08 + index * 0.08, duration: 0.5 }}
                >
                  <p className={styles.testimonialQuote}>“{t.quote}”</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── FAQ ───────────────────────────────────────────────────── */}
      <ScrollSection delay={0.1}>
        <section className={styles.faqSection}>
          <div className={styles.faqBg} />
          <div className={styles.container}>
            <div className={styles.faqGrid}>
              <div className={styles.faqLeft}>
                <h2 className={styles.faqTitle}>How can we help you?</h2>
                <p className={styles.faqText}>Please enter your question and we will find a right answer for you.</p>
                <form
                  className={styles.faqForm}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className={styles.faqInputGroup}>
                    <input
                      type="text"
                      className={styles.faqInput}
                      placeholder="Enter your question"
                      value={faqSearch}
                      onChange={(e) => setFaqSearch(e.target.value)}
                    />
                    <button className={styles.faqSearchBtn} type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                      </svg>
                    </button>
                  </div>
                </form>
                {filteredFaqs.length === 0 && (
                  <p style={{ marginTop: '1rem', color: '#999' }}>No matching questions found.</p>
                )}
              </div>

              <div className={styles.faqRight}>
                {filteredFaqs.map((faq, index) => (
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
            </div>
          </div>

          {/* ─── CONTACT FORM ───────────────────────────────────────── */}
          <div className={styles.faqContactWrapper}>
            <div className={styles.faqContactBg} />
            <div className={styles.container}>
              <div className={styles.contactSection}>
                {contactSubmitted ? (
                  <motion.div
                    className={styles.contactSuccess}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle size={48} color="#2ecc71" />
                    <h3>Message Sent!</h3>
                    <p>We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <>
                    <p className={styles.contactTitle}>Contact Us</p>
                    {contactError && (
                      <div className={styles.contactError}>
                        {contactError}
                      </div>
                    )}
                    <form className={styles.contactForm} onSubmit={handleContactSubmit}>
                      <div className={styles.contactRow}>
                        <div className={styles.contactGroup}>
                          <label htmlFor="contact_name">Your Name</label>
                          <input
                            className={styles.contactInput}
                            id="contact_name"
                            type="text"
                            placeholder="Type your name"
                            name="name"
                            value={contactForm.name}
                            onChange={handleContactChange}
                            required
                          />
                        </div>
                        <div className={styles.contactGroup}>
                          <label htmlFor="contact_email">Email address</label>
                          <input
                            className={styles.contactInput}
                            id="contact_email"
                            type="email"
                            placeholder="Type your email"
                            name="email"
                            value={contactForm.email}
                            onChange={handleContactChange}
                            required
                          />
                        </div>
                      </div>
                      <div className={styles.contactGroup}>
                        <label htmlFor="contact_message">Message</label>
                        <textarea
                          className={styles.contactTextarea}
                          id="contact_message"
                          placeholder="Type your message here"
                          rows={3}
                          name="message"
                          value={contactForm.message}
                          onChange={handleContactChange}
                          required
                        />
                      </div>
                      <button
                        className={styles.contactSubmit}
                        type="submit"
                        disabled={contactLoading}
                      >
                        {contactLoading ? "Sending..." : "Send"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

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