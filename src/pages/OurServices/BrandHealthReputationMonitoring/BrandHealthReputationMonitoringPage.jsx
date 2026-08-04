// src/pages/Services/BrandHealthReputationMonitoring/BrandHealthReputationMonitoringPage.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Eye,
  Target,
  TrendingUp,
  DollarSign,
  PieChart,
  AlertCircle,
  Award,
  Zap,
  Globe,
  MessageCircle,
  Newspaper,
  Radio,
  Star,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  FileText,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./BrandHealthReputationMonitoringPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── SCROLL REVEAL ──────────────────────────────────────────────
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

// ─── FAQ ACCORDION ──────────────────────────────────────────────
const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className={styles.faqItem}>
    <button className={styles.faqQuestion} onClick={toggle}>
      <span>{question}</span>
      <span className={styles.faqIcon}>
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </span>
    </button>
    <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}>
      <p>{answer}</p>
    </div>
  </div>
);

// ─── EXTENDED DATA – ALL ORIGINAL, DEEP CONTENT ──────────────────
const segmentationData = [
  {
    icon: "❤️",
    title: "Core Loyalists",
    desc: "Highly engaged, repeat purchasers who actively advocate for your brand. They are your most valuable segment, driving organic growth and referrals."
  },
  {
    icon: "💛",
    title: "Fringe Loyalists",
    desc: "Loyal but less engaged – they buy regularly but are open to competitors. They need reinforcement to stay, and are a prime target for loyalty programmes."
  },
  {
    icon: "🔶",
    title: "Potential Loyalists",
    desc: "Currently unconvinced but have high potential to convert with the right messaging and experience. They are the low‑hanging fruit for growth."
  },
  {
    icon: "🌀",
    title: "Indifferent",
    desc: "Aware but unengaged – they don't actively choose your brand. They need a compelling reason to switch, such as a unique value proposition or improved experience."
  },
  {
    icon: "❌",
    title: "Detractors",
    desc: "Negative sentiment and actively discourage others. Immediate intervention is needed to reduce churn and repair reputation through targeted communication and service recovery."
  }
];

const benefitDetails = [
  {
    title: "Precision Targeting for High‑Impact Marketing",
    desc: "Our Brand Affinity‑Relationship Segmentation classifies consumers into distinct groups based on their emotional connection to your brand. This allows you to focus marketing spend on high‑potential segments that are most likely to convert and stay loyal, dramatically improving ROI."
  },
  {
    title: "Maximised ROI & Smarter Marketing Investments",
    desc: "By profiling consumers based on geolocation, media consumption, and retail behaviour, we enable hyper‑targeted campaigns that reach the right people at the right time. This reduces waste and increases conversion rates."
  },
  {
    title: "Holistic Brand Performance Measurement",
    desc: "We track awareness, usage, equity, loyalty, and perception with deep‑dive diagnostics. You get a 360‑degree view of your brand's health, enabling data‑backed decisions at every level."
  },
  {
    title: "Competitive Benchmarking & Market Positioning",
    desc: "We monitor your brand's performance against competitors across all key metrics. You see exactly where you stand, identify gaps, and take action to strengthen your market position."
  },
  {
    title: "Real‑Time & Adaptive Insights",
    desc: "Our dashboards update live as new data flows in. You can customise monitoring frequency (daily, weekly, monthly) and respond instantly to shifts in sentiment or emerging trends."
  },
  {
    title: "Long‑Term Brand Growth & Equity Protection",
    desc: "By focusing on affinity‑based engagement, we help you build sustainable relationships with your consumers. This protects your brand equity and ensures consistent, long‑term growth."
  }
];

const frameworkSteps = [
  {
    num: "01",
    title: "Identify & Segment the Right Consumers",
    desc: "We use our proprietary segmentation model to classify consumers based on their engagement and loyalty levels with your brand – from Core Loyalists to Detractors."
  },
  {
    num: "02",
    title: "Diagnose & Optimise Growth Drivers",
    desc: "We analyze key drivers (equity, promotions, operational factors) to understand what moves the needle for each segment, enabling precise interventions."
  },
  {
    num: "03",
    title: "Precision Targeting for Maximum ROI",
    desc: "By understanding geolocation, media preferences, and retail behaviour of high‑affinity consumers, we help you execute marketing with surgical accuracy."
  },
  {
    num: "04",
    title: "Monitor & Continuously Improve",
    desc: "We provide longitudinal tracking and real‑time insights so you can adapt to market shifts, optimise your strategy, and maintain brand relevance."
  }
];

const emotionContent = [
  "In this era, brand success isn't about how loudly you're seen – it's about how deeply you're felt. The most successful brands are those that forge genuine emotional connections with their consumers. Brand affinity – the deep sense of trust, shared values, and identification – is now the strongest predictor of long‑term loyalty and advocacy.",
  "Traditional brand tracking focuses on awareness and consideration. But in a crowded marketplace, awareness alone doesn't drive conversion. What matters is the strength of the relationship between consumer and brand. Brands with high affinity enjoy stronger customer retention, higher lifetime value, and more organic advocacy.",
  "Our brand health monitoring is designed specifically for this new era. By measuring the depth and quality of consumer‑brand relationships – not just awareness and consideration – we help you build a brand that truly resonates with your audience. We go beyond traditional tracking to capture the emotional drivers that fuel brand growth."
];

const faqData = [
  { q: "What does brand health monitoring include?", a: "Our monitoring includes real‑time sentiment analysis, share of voice tracking, crisis detection, competitive benchmarking, and topic identification across news, social media, reviews, forums, and traditional media." },
  { q: "How accurate is your sentiment analysis?", a: "We achieve over 94% accuracy using advanced natural language processing models trained on millions of data points across industries." },
  { q: "What makes your service different from basic social listening tools?", a: "We go beyond social listening to include news, reviews, forums, and traditional media – with emotion detection, proactive crisis alerts, and competitive benchmarking that provides a complete view of your brand health." },
  { q: "How quickly can I start monitoring my brand?", a: "We can set up comprehensive monitoring within 1‑2 weeks, including dashboards, alerts, and initial sentiment baselines." },
  { q: "Do you track competitors as well?", a: "Yes – we monitor your main competitors and provide comparative insights on share of voice, sentiment, and key topics." },
  { q: "What sources do you monitor?", a: "Over 100,000 sources – including Twitter, Facebook, Instagram, LinkedIn, Reddit, YouTube, news sites, review platforms, forums, blogs, traditional media, and podcasts." },
  { q: "Can I customise the monitoring for my industry?", a: "Absolutely – we tailor keyword sets, competitor lists, and even sentiment models to match your specific industry terminology." },
  { q: "What happens when a crisis is detected?", a: "You receive an immediate alert with a summary of the issue, sentiment drivers, and recommended response actions." },
  { q: "How often are dashboards updated?", a: "Dashboards update in real‑time as new data flows in. You can also set custom alert frequencies (daily digests, weekly summaries) based on your needs." },
  { q: "Do you offer a pilot or trial?", a: "Yes – we offer a two‑week pilot where we monitor your brand and provide a snapshot report with initial insights, so you can see the value before committing." }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CMO, RetailTech",
    quote: "Scape's brand monitoring gave us visibility we never had before. Within weeks, we identified a major customer pain point and turned it into a competitive advantage. Our NPS went up 18 points in six months."
  },
  {
    name: "Michael Torres",
    role: "Head of Brand Strategy, FinServe",
    quote: "We used to rely on annual surveys. Now we have real‑time sentiment tracking that tells us exactly how our brand is perceived after every campaign. It's transformed our marketing decisions."
  },
  {
    name: "Priya Sharma",
    role: "Director of Communications, HealthPlus",
    quote: "The crisis detection feature alone is worth the investment. We caught a brewing issue on social media within hours and responded before it became a headline. That's priceless."
  }
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────
const BrandHealthReputationMonitoringPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [openGeneralFAQ, setOpenGeneralFAQ] = useState(null);
  const toggleGeneralFAQ = (index) => setOpenGeneralFAQ(openGeneralFAQ === index ? null : index);

  return (
    <PageLayout>
      <SEO
        title="Brand Health & Reputation Monitoring | AI Sentiment Analysis | Scape Data Solutions"
        description="Protect your brand reputation with AI-powered sentiment analysis, share of voice tracking, and real-time crisis detection across 100,000+ sources. Monitor news, social media, reviews, and forums 24/7."
        path="/services/brand-health-reputation-monitoring"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "Brand Health & Reputation Monitoring",
              provider: { "@type": "Organization", name: "Scape Data Solutions", url: "https://www.scapedatasolutions.com" },
              areaServed: ["US", "CA", "PK", "KE", "GB"],
              description: "AI-powered brand monitoring with sentiment analysis, share of voice tracking, and crisis detection across news, social media, reviews, forums, and traditional media.",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  price: "Contact for pricing"
                }
              }
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.scapedatasolutions.com/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://www.scapedatasolutions.com/services" },
                { "@type": "ListItem", position: 3, name: "Brand Health & Reputation Monitoring", item: "https://www.scapedatasolutions.com/services/brand-health-reputation-monitoring" }
              ]
            },
            {
              "@type": "FAQPage",
              mainEntity: faqData.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a }
              }))
            }
          ]
        }}
      />

      {/* ═══ HERO ═══ */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div className={styles.heroBadge} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Globe size={14} /> <span>Brand Health & Reputation Monitoring</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Protect Your <span className={styles.highlight}>Reputation</span>. Grow Your <span className={styles.highlight}>Brand</span>.
            </motion.h1>
            <motion.p className={styles.heroSub} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              AI‑powered monitoring that tracks sentiment, share of voice, and risks across all channels. Know what the world thinks about your brand – and act before issues escalate.
            </motion.p>
            <motion.div className={styles.heroCta} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Monitor Your Brand <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#how-it-works" className={styles.heroBtnSecondary}>
                  See How It Works <Eye size={15} />
                </a>
              </motion.div>
            </motion.div>
            <motion.div className={styles.heroStats} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>24/7</span>
                <span className={styles.statLabel}>Real‑Time Monitoring</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100,000+</span>
                <span className={styles.statLabel}>Sources Monitored</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>94%</span>
                <span className={styles.statLabel}>Sentiment Accuracy</span>
              </div>
            </motion.div>
            <motion.div className={styles.trustRow} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              {['Trusted by 200+ Brands', 'SOC 2 Compliant', 'GDPR Ready', '24/7 Support'].map((b, i) => (
                <span key={i} className={styles.trustBadge}>{b}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CHALLENGE ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.problemSection}>
          <div className={styles.container}>
            <div className={styles.problemContent}>
              <span className={styles.problemLabel}>The Challenge</span>
              <h2>Brand Reputation is <span className={styles.highlight}>Fragile</span></h2>
              <div className={styles.problemGrid}>
                <div className={styles.problemStat}>
                  <span className={styles.problemNumber}>80%</span>
                  <p>Of consumers research brands online before purchasing – and negative sentiment can cost you sales before you even know it exists.</p>
                  <div className={styles.problemBar}><div className={styles.problemBarFill} style={{ width: '80%', background: 'rgba(0,0,0,0.3)' }} /></div>
                </div>
                <div className={styles.problemStat}>
                  <span className={styles.problemNumber}>60%</span>
                  <p>Of companies lack real‑time visibility into brand reputation, leaving them reactive rather than proactive.</p>
                  <div className={styles.problemBar}><div className={styles.problemBarFill} style={{ width: '60%', background: 'rgba(0,0,0,0.3)' }} /></div>
                </div>
                <div className={styles.problemStat}>
                  <span className={styles.problemNumber}>$100B+</span>
                  <p>Estimated annual revenue loss due to reputation damage – a risk that can be mitigated with proactive monitoring.</p>
                  <div className={styles.problemBar}><div className={styles.problemBarFill} style={{ width: '95%', background: 'rgba(0,0,0,0.3)' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ OVERVIEW ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.overviewSection}>
          <div className={styles.container}>
            <div className={styles.overviewGrid}>
              <div className={styles.overviewText}>
                <h2>Know Your Brand's <span className={styles.highlight}>True</span> Reputation</h2>
                <p>
                  In the digital age, brand reputation can change in an instant. A viral complaint,
                  a negative review, or a social media crisis can undo years of brand building – often
                  without warning. Yet many organizations lack the visibility to see these threats
                  coming.
                </p>
                <p>
                  Our Brand Health & Reputation Monitoring service provides comprehensive, real‑time
                  visibility into what's being said about your brand across all channels. We monitor
                  news, social media, review sites, forums, and traditional media – capturing every
                  mention, review, and conversation.
                </p>
                <p>
                  We analyse sentiment and emotion, measure share of voice against competitors, and
                  detect emerging issues before they escalate. We provide early warnings of reputation
                  risks, enabling you to respond proactively and protect your brand equity.
                </p>
                <p>
                  With our solution, you build a resilient brand that weathers storms and thrives
                  – earning trust, loyalty, and competitive advantage.
                </p>
                <div className={styles.overviewImage}>
                  <img src="/Images/site-images/brand-dashboard-mockup.png" alt="Brand Health Dashboard preview" />
                  <span className={styles.imageCaption}>Real‑time brand health dashboard</span>
                </div>
              </div>
              <div className={styles.overviewVisual}>
                <div className={styles.dashboardMockup}>
                  <div className={styles.dashHeader}>
                    <span>Brand Health Dashboard</span>
                    <span className={styles.dashLive}>Live</span>
                  </div>
                  <div className={styles.dashGauges}>
                    <div className={styles.gauge}>
                      <svg viewBox="0 0 100 60"><path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e9ecef" strokeWidth="10" strokeLinecap="round" /><path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeDasharray="125" strokeDashoffset="25" /><text x="50" y="40" textAnchor="middle" fontSize="18" fontWeight="700" fill="currentColor">82</text><text x="50" y="54" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.5">Health Score</text></svg>
                    </div>
                    <div className={styles.pie}>
                      <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="32" fill="none" stroke="#e9ecef" strokeWidth="10" /><circle cx="40" cy="40" r="32" fill="none" stroke="#22c55e" strokeWidth="10" strokeDasharray="70" strokeDashoffset="0" /><circle cx="40" cy="40" r="32" fill="none" stroke="#f59e0b" strokeWidth="10" strokeDasharray="40" strokeDashoffset="-70" /><circle cx="40" cy="40" r="32" fill="none" stroke="#ef4444" strokeWidth="10" strokeDasharray="20" strokeDashoffset="-110" /><text x="40" y="44" textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor">68%</text><text x="40" y="56" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.5">Positive</text></svg>
                    </div>
                  </div>
                  <div className={styles.dashSov}>
                    <div className={styles.sovLabel}>Share of Voice <span>32%</span></div>
                    <div className={styles.sovBar}><div style={{ width: '32%' }} /></div>
                    <div className={styles.sovCompetitors}>
                      <span>Competitor A 28%</span>
                      <span>Competitor B 22%</span>
                      <span>Others 18%</span>
                    </div>
                  </div>
                  <div className={styles.dashAlerts}>
                    <span>⚠️ 2 crises detected</span>
                    <span>📈 Sentiment +5%</span>
                    <span>💬 1.2k mentions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ BRAND AFFINITY SEGMENTATION (detailed) ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.segmentationSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Brand Affinity‑Relationship Segmentation</h2>
            <p className={styles.sectionSub}>
              Understand your consumers beyond demographics – classify them based on their emotional connection to your brand.
            </p>
            <div className={styles.segmentationGrid}>
              {segmentationData.map((item, idx) => (
                <div key={idx} className={styles.segItem}>
                  <span className={styles.segIcon}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <p className={styles.segNote}>
              By classifying consumers into these segments, we help you target high‑affinity consumers with precision, reduce wasted spend, and build sustainable brand loyalty.
            </p>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ KEY BENEFITS (deep dive) ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.benefitsDetailSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Key Benefits of Our Brand Monitoring</h2>
            <p className={styles.sectionSub}>
              Our solution is designed to provide actionable, data‑driven insights that go far beyond traditional tracking.
            </p>
            <div className={styles.benefitsDetailGrid}>
              {benefitDetails.map((item, idx) => (
                <div key={idx} className={styles.benefitDetailCard}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ HOW IT WORKS (detailed) ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.howWorksSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How Our Brand Tracking Works</h2>
            <p className={styles.sectionSub}>
              We use an innovative consumer segmentation framework to deliver a 360‑degree view of your brand health.
            </p>
            <div className={styles.howWorksGrid}>
              <div className={styles.howWorksText}>
                <h3>The Brand Affinity‑Relationship Model</h3>
                <p>
                  Unlike standard trackers, we classify consumers based on brand affinity strength, ensuring precise audience targeting for strategic growth. By mapping consumer relationships, we help you focus on conversion‑ready segments, allowing you to fine‑tune marketing efforts and drive affinity‑led growth.
                </p>
                <h3>Comprehensive Health Measurement</h3>
                <p>
                  We evaluate key performance indicators at multiple consumer touchpoints, giving you a granular understanding of your brand's positioning.
                </p>
                <ul>
                  <li><strong>Mind Metrics:</strong> Awareness, salience, top‑of‑mind recall, and brand association.</li>
                  <li><strong>Usage Metrics:</strong> Purchase history, recency of purchase, and consumption patterns.</li>
                  <li><strong>Brand Equity & Loyalty:</strong> Affinity scores, repeat purchase intent, and NPS.</li>
                  <li><strong>Media & Communication Impact:</strong> Campaign effectiveness, ad recall, and message resonance.</li>
                </ul>
              </div>
              <div className={styles.howWorksVisual}>
                <div className={styles.howWorksCard}>
                  {frameworkSteps.map((step, idx) => (
                    <div key={idx} className={styles.howWorksStep}>
                      <span className={styles.howWorksNumber}>{step.num}</span>
                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ ACTIONABLE FRAMEWORK ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.frameworkSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Actionable Growth Framework</h2>
            <p className={styles.sectionSub}>
              Our service is not just a tracking tool – it's a growth accelerator that gives you a clear roadmap.
            </p>
            <div className={styles.frameworkGrid}>
              {frameworkSteps.map((step, idx) => (
                <div key={idx} className={styles.frameworkItem}>
                  <span className={styles.frameworkNumber}>{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ THE AGE OF EMOTION ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.emotionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Brand Tracking in the Age of Emotion</h2>
            <p className={styles.sectionSub} style={{ maxWidth: '700px' }}>
              Why Brand Affinity Now Matters Most
            </p>
            <div className={styles.emotionContent}>
              {emotionContent.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              <div className={styles.emotionCTA}>
                <Link to="/resources/brand-tracking-research" className={styles.emotionLink}>
                  Read More <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ MEASUREMENT TABLE ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.metricsTableSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Comprehensive Brand Health Measurement</h2>
            <p className={styles.sectionSub}>
              We track key performance indicators across multiple dimensions to give you a complete picture.
            </p>
            <div className={styles.metricsTableWrapper}>
              <table className={styles.metricsTable}>
                <thead>
                  <tr>
                    <th>Dimension</th>
                    <th>Metrics Tracked</th>
                    <th>Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Mind Metrics</strong></td>
                    <td>Awareness, salience, top‑of‑mind recall, brand association</td>
                    <td>Measures how well your brand is known and remembered.</td>
                  </tr>
                  <tr>
                    <td><strong>Usage Metrics</strong></td>
                    <td>Purchase history, recency of purchase, consumption patterns</td>
                    <td>Indicates actual consumer behaviour and loyalty.</td>
                  </tr>
                  <tr>
                    <td><strong>Brand Equity & Loyalty</strong></td>
                    <td>Affinity scores, repeat purchase intent, NPS</td>
                    <td>Reveals emotional connection and long‑term value.</td>
                  </tr>
                  <tr>
                    <td><strong>Media & Communication Impact</strong></td>
                    <td>Campaign effectiveness, ad recall, message resonance</td>
                    <td>Shows how your marketing is influencing perception.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ DATA SOURCES ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.sourcesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>100,000+ Sources Monitored</h2>
            <p className={styles.sectionSub}>We capture conversations wherever they happen.</p>
            <div className={styles.sourceGrid}>
              {[
                { icon: <Twitter size={20} />, name: "Twitter/X" },
                { icon: <Facebook size={20} />, name: "Facebook" },
                { icon: <Instagram size={20} />, name: "Instagram" },
                { icon: <Linkedin size={20} />, name: "LinkedIn" },
                { icon: <MessageCircle size={20} />, name: "Reddit" },
                { icon: <Youtube size={20} />, name: "YouTube" },
                { icon: <Newspaper size={20} />, name: "News Sites" },
                { icon: <Star size={20} />, name: "Review Platforms" },
                { icon: <MessageCircle size={20} />, name: "Forums" },
                { icon: <FileText size={20} />, name: "Blogs" },
                { icon: <Radio size={20} />, name: "Traditional Media" },
                { icon: <Globe size={20} />, name: "Podcasts" },
              ].map((s, i) => (
                <div key={i} className={styles.sourceItem}>
                  <span className={styles.sourceIcon}>{s.icon}</span>
                  <span className={styles.sourceName}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ COMPARISON TABLE ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.comparisonSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How We Compare</h2>
            <p className={styles.sectionSub}>See why our solution outperforms basic monitoring tools.</p>
            <div className={styles.comparisonTableWrapper}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Basic Social Listening</th>
                    <th>Advanced Monitoring</th>
                    <th>Scape Brand Health</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Channels Monitored</td><td>Social only</td><td>Social + News</td><td>All (including traditional)</td></tr>
                  <tr><td>Sentiment Accuracy</td><td>~70%</td><td>~85%</td><td>94%+</td></tr>
                  <tr><td>Emotion Detection</td><td>No</td><td>Basic</td><td>Advanced</td></tr>
                  <tr><td>Crisis Alerts</td><td>Manual</td><td>Automated</td><td>Real‑time + Predictive</td></tr>
                  <tr><td>Competitive Insights</td><td>No</td><td>Basic</td><td>Deep</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ ENGAGEMENT MODEL ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.engagementSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How We Partner With You</h2>
            <p className={styles.sectionSub}>A phased approach to ensure lasting brand health.</p>
            <div className={styles.engagementGrid}>
              <div className={styles.engagementCard}>
                <h3>Discovery & Setup</h3>
                <p>We configure your monitoring across all channels, define your competitor set, and set up custom alerts within 1‑2 weeks.</p>
              </div>
              <div className={styles.engagementCard}>
                <h3>Continuous Monitoring</h3>
                <p>Our system runs 24/7, providing live dashboards, weekly digests, and immediate alerts for critical events.</p>
              </div>
              <div className={styles.engagementCard}>
                <h3>Strategic Review</h3>
                <p>We deliver quarterly deep‑dive reports with actionable recommendations for your brand strategy and communications.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ CASE STUDY ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.caseStudySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Case Study: From Crisis to Comeback</h2>
            <p className={styles.sectionSub}>
              How a leading retail brand turned negative sentiment around in 30 days.
            </p>
            <div className={styles.caseStudyGrid}>
              <div className={styles.caseStudyText}>
                <p>
                  A major retail chain experienced a sudden spike in negative sentiment after a supply chain issue led to widespread stock‑outs. Customers took to social media and review platforms to express frustration, and the brand's reputation score dropped from 78 to 42 in just 48 hours.
                </p>
                <p>We deployed our Brand Health & Reputation Monitoring solution to:</p>
                <ul>
                  <li>Detect the crisis within 30 minutes of the first negative mention.</li>
                  <li>Analyze sentiment drivers – identified that "communication" and "transparency" were the root causes.</li>
                  <li>Provide real‑time alerts to the communications team, enabling rapid response.</li>
                  <li>Track sentiment recovery after corrective actions.</li>
                </ul>
                <p><strong>Results:</strong> Within 30 days, sentiment returned to pre‑crisis levels, and the brand's NPS actually increased by 6 points.</p>
                <Link to="/case-studies/brand-monitoring" className={styles.caseStudyLink}>Read Full Case Study →</Link>
              </div>
              <div className={styles.caseStudyStats}>
                <div><span>+36 pts</span><span>Sentiment recovery</span></div>
                <div><span>30 min</span><span>Detection time</span></div>
                <div><span>+6 pts</span><span>NPS increase</span></div>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ CORE CAPABILITIES ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Core Capabilities</h2>
            <div className={styles.featuresGrid}>
              {[
                { icon: <Globe size={22} />, title: "Unified Channel Monitoring", desc: "See all brand mentions from every relevant source in one place." },
                { icon: <MessageCircle size={22} />, title: "Emotion‑Aware Sentiment", desc: "Understand not only what people say but how they feel about your brand." },
                { icon: <Target size={22} />, title: "Competitive Benchmarking", desc: "Know exactly how you stack up against your rivals on every metric." },
                { icon: <AlertCircle size={22} />, title: "Early Warning Alerts", desc: "Get notified the moment a potential issue starts to gain traction." },
                { icon: <PieChart size={22} />, title: "Topic Prioritisation", desc: "Focus your efforts on the topics that have the biggest impact." },
                { icon: <Eye size={22} />, title: "Role‑Based Dashboards", desc: "Tailored views for executives, marketers, and communicators." },
              ].map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ BENEFITS ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
            <div className={styles.benefitsGrid}>
              {[
                { icon: <Shield size={18} />, title: "Protect Your Reputation", desc: "Catch issues early and manage your brand's narrative before problems spiral." },
                { icon: <TrendingUp size={18} />, title: "Build Customer Trust", desc: "Use data to understand and improve how customers perceive your brand." },
                { icon: <Target size={18} />, title: "Outsmart Competitors", desc: "Leverage competitive insights to differentiate and win market share." },
                { icon: <Zap size={18} />, title: "Respond in Minutes", desc: "Real‑time alerts enable fast, effective crisis communication." },
                { icon: <DollarSign size={18} />, title: "Optimise Marketing Spend", desc: "Focus resources on channels and topics that drive positive sentiment." },
                { icon: <Award size={18} />, title: "Build a Resilient Brand", desc: "Long‑term monitoring helps you adapt and grow with confidence." },
              ].map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{benefit.icon}</div>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ TESTIMONIALS ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((t, idx) => (
                <div key={idx} className={styles.testimonialCard}>
                  <blockquote className={styles.testimonialQuote}>{t.quote}</blockquote>
                  <div className={styles.testimonialAuthor}>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ FAQ (collapsible) ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {faqData.map((item, idx) => (
                <FAQItem
                  key={idx}
                  question={item.q}
                  answer={item.a}
                  isOpen={openGeneralFAQ === idx}
                  toggle={() => toggleGeneralFAQ(idx)}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ RELATED SERVICES ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Explore Our Other Services</h2>
            <div className={styles.relatedGrid}>
              <Link to="/services/social-media-analytics" className={styles.relatedLink}>Social Media Analytics</Link>
              <Link to="/services/customer-experience-analytics" className={styles.relatedLink}>Customer Experience Analytics</Link>
              <Link to="/services/competitive-intelligence" className={styles.relatedLink}>Competitive Intelligence</Link>
              <Link to="/services/predictive-analytics" className={styles.relatedLink}>Predictive Analytics</Link>
              <Link to="/services/brand-tracking" className={styles.relatedLink}>Brand Tracking</Link>
              <Link to="/services/marketing-analytics" className={styles.relatedLink}>Marketing Analytics</Link>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ═══ FINAL CTA ═══ */}
      <ScrollSection delay={0.1}>
        <section className={styles.finalCtaSection}>
          <div className={styles.container}>
            <div className={styles.finalCtaContent}>
              <h2>Ready to Protect and Grow Your Brand?</h2>
              <p>
                Let's start your brand health journey today. Get a free consultation and see how Scape's monitoring can transform your brand tracking and drive sustainable growth.
              </p>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link to="/contact" className={styles.finalCtaBtn}>
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollSection>
    </PageLayout>
  );
};

export default BrandHealthReputationMonitoringPage;