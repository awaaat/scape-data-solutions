// src/pages/ServicesPage.jsx
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Phone,
  X,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Activity,
  Server,
  GitBranch,
  MessageSquare,
  Brain,
  Database,
  Zap,
  Sparkles,
  Star,
  Shield,
  Target,
  TrendingUp,
  BarChart3,
  Beaker,
  Code,
  BookOpen,
  Lock,
  Globe,
  CheckCircle,
  Cloud,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./ServicesPage.module.css";
import homeStyles from "../Home/HomePage.module.css";


// ─── Full Service Data (12 services) ────────────────────────────
// Each card's href now uses the query param so "Learn More" goes to filtered view
const SERVICE_CARDS = [
  {
    id: 1,
    category: "ai",
    title: "AI & Machine Learning",
    href: "/services?category=ai-ml",
    tagline: "Intelligence that evolves",
    description: "Predict customer behavior, reduce churn, and automate operations with AI that actually delivers ROI.",
    longDesc: "Stop relying on gut feelings. Our AI helps you predict customer churn before it happens, automate repetitive tasks to cut costs, and detect issues before they impact your bottom line. We train models on YOUR data to solve YOUR specific business problems.",
    features: ["TensorFlow", "PyTorch", "Hugging Face", "MLOps"],
    metrics: { accuracy: "98%", projects: "500+", clients: "200+" },
    liveLoad: 62,
    demand: "High",
    items: [
      "Predictive Modeling",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Engines",
      "Model Deployment & MLOps",
      "Custom AI Integrations",
    ],
  },
  {
    id: 2,
    category: "data",
    title: "Big Data Engineering",
    href: "/services?category=big-data",
    tagline: "Infrastructure at scale",
    description: "Build a reliable, scalable data foundation that handles growth without breaking.",
    longDesc: "Your business generates massive amounts of data. We build the infrastructure to handle it — so you get reliable insights when you need them, without expensive downtime or bottlenecks.",
    features: ["Spark", "Kafka", "Airflow", "AWS"],
    metrics: { throughput: "10M/s", uptime: "99.9%", storage: "5PB+" },
    liveLoad: 78,
    demand: "High",
    items: [
      "Data Pipeline Architecture",
      "Apache Spark & Kafka",
      "Distributed Systems",
      "ETL / ELT Development",
      "Data Lake & Warehouse Setup",
      "Real-Time Stream Processing",
    ],
  },
  {
    id: 3,
    category: "analytics",
    title: "Business Intelligence",
    href: "/services?category=bi",
    tagline: "Insights that drive decisions",
    description: "Turn messy data into clear dashboards that help your entire team make better, faster decisions.",
    longDesc: "Data is worthless if people can't understand it. We build intuitive dashboards that help your sales, marketing, and operations teams see exactly what's happening — so they can act quickly and confidently.",
    features: ["Tableau", "Power BI", "Looker", "Metabase"],
    metrics: { dashboards: "1000+", users: "50K+", adoption: "95%" },
    liveLoad: 54,
    demand: "Medium",
    items: [
      "Tableau Dashboards",
      "Power BI Reports",
      "Looker & Metabase",
      "KPI Tracking Systems",
      "Self-Service Analytics",
      "Executive Reporting",
    ],
  },
  {
    id: 4,
    category: "ai",
    title: "Data Governance & Security",
    href: "/services?category=governance",
    tagline: "Security you can trust",
    description: "Protect your business and build customer trust with enterprise-grade security and regulatory compliance.",
    longDesc: "Data breaches cost millions and destroy trust. We ensure your business is protected with enterprise-grade security, GDPR compliance, and HIPAA readiness — so you can focus on growth, not fines.",
    features: ["Collibra", "Ranger", "OneTrust", "Encryption"],
    metrics: { breaches: "0", compliance: "100%", audits: "Perfect" },
    liveLoad: 41,
    demand: "Medium",
    items: [
      "Data Quality Management",
      "GDPR & HIPAA Compliance",
      "Data Cataloging (Collibra)",
      "Access Control & Masking",
      "Audit Trails & Lineage",
    ],
  },
  {
    id: 5,
    category: "analytics",
    title: "Predictive Analytics",
    href: "/services?category=predictive",
    tagline: "See the future, seize the moment",
    description: "Forecast sales, anticipate demand, and manage risk with 96% accuracy — so you can plan with confidence.",
    longDesc: "Stop reacting to the market — start anticipating it. We help you forecast sales, demand, and risk with uncanny accuracy. The result: you make smarter decisions, faster.",
    features: ["Prophet", "XGBoost", "LightGBM", "Scikit-learn"],
    metrics: { accuracy: "96%", savings: "$5M+", roi: "400%" },
    liveLoad: 67,
    demand: "High",
    items: [
      "Sales & Demand Forecasting",
      "Churn Prediction",
      "Risk Scoring Models",
      "XGBoost & LightGBM",
      "Scenario Planning Tools",
    ],
  },
  {
    id: 6,
    category: "data",
    title: "Real-Time Analytics",
    href: "/services?category=realtime",
    tagline: "Speed of thought processing",
    description: "See what's happening in your business right now. Detect problems instantly, spot opportunities immediately.",
    longDesc: "In today's fast-paced world, waiting for reports means losing opportunities. We give you real-time visibility into your business — so you can detect fraud, spot trends, and respond instantly.",
    features: ["Flink", "Kinesis", "Redis", "Kafka"],
    metrics: { latency: "<50ms", events: "5B/day", availability: "99.99%" },
    liveLoad: 88,
    demand: "High",
    items: [
      "Real-Time Dashboards",
      "Streaming Analytics",
      "Event-Driven Architectures",
      "Alerting & Monitoring",
    ],
  },
  {
    id: 7,
    category: "data",
    title: "Cloud Analytics",
    href: "/services?category=cloud",
    tagline: "Infinite scale, zero limits",
    description: "Scale your infrastructure automatically while reducing costs — on AWS, Azure, or GCP.",
    longDesc: "Stop overpaying for infrastructure you don't need. We design cloud solutions that automatically scale with your business — so you only pay for what you use, when you use it.",
    features: ["AWS", "Azure", "GCP", "Snowflake"],
    metrics: { elasticity: "Unlimited", cost: "-50%", performance: "8x" },
    liveLoad: 59,
    demand: "Medium",
    items: [
      "AWS Analytics Stack",
      "Azure Synapse & Fabric",
      "Google BigQuery Solutions",
      "Snowflake Data Cloud",
      "Cloud Cost Optimization",
      "Multi-Cloud Architecture",
    ],
  },
  {
    id: 8,
    category: "analytics",
    title: "Customer Analytics",
    href: "/services?category=customer",
    tagline: "Know your customers deeply",
    description: "Build a complete, 360-degree view of your customers to boost retention and lifetime value.",
    longDesc: "Your customers leave data everywhere. We unify that data — from sales, support, and marketing — into one complete view. The result: deeper customer understanding, higher retention, and experiences that drive loyalty.",
    features: ["Segment", "Mixpanel", "Amplitude", "Customer.io"],
    metrics: { retention: "+40%", clv: "+60%", satisfaction: "4.8/5" },
    liveLoad: 48,
    demand: "Medium",
    items: [
      "360° Customer Profiles",
      "Segmentation & Cohort Analysis",
      "CLV & Retention Modeling",
      "Mixpanel & Amplitude",
      "Personalization Engines",
    ],
  },
  {
    id: 9,
    category: "ai",
    title: "Custom Development",
    href: "/services?category=custom-dev",
    tagline: "Custom intelligence, built for you",
    description: "Build tools that perfectly fit your business workflows — so you work smarter, not harder.",
    longDesc: "Generic software doesn't fit your unique business. We build custom applications and tools that solve YOUR specific problems — so you work smarter, not harder.",
    features: ["Python", "React", "Node.js", "FastAPI"],
    metrics: { accuracy: "99%", speed: "-70%", models: "5000+" },
    liveLoad: 71,
    demand: "High",
    items: [
      "Python & R Applications",
      "React & Node.js Dashboards",
      "REST & GraphQL APIs",
      "Internal Business Tools",
      "Data-Driven Web Apps",
    ],
  },
  {
    id: 10,
    category: "ai",
    title: "Data Privacy & Trust",
    href: "/services?category=privacy",
    tagline: "Precision at massive scale",
    description: "Protect your customers' data and build trust with robust privacy controls and consent management.",
    longDesc: "Data privacy is a competitive advantage. We help you implement robust privacy controls that protect your customers and build trust — while keeping you compliant with regulations.",
    features: ["Privacy Tools", "Encryption", "Consent Management"],
    metrics: { accuracy: "99.8%", speed: "40x", volume: "500K/day" },
    liveLoad: 37,
    demand: "Medium",
    items: [
      "Privacy by Design",
      "Data Anonymization",
      "Consent Management",
      "Privacy Impact Assessments",
    ],
  },
  {
    id: 11,
    category: "consulting",
    title: "Strategy Consulting",
    href: "/services?category=strategy",
    tagline: "Thought leadership that matters",
    description: "Expert guidance to transform your data from a cost center to a growth engine.",
    longDesc: "Most data initiatives fail. We help you avoid that. We assess where you are, identify opportunities, and build a roadmap that delivers quick wins while building toward long-term growth.",
    features: ["Frameworks", "Roadmapping", "Assessment"],
    metrics: { publications: "300+", citations: "5K+", impact: "High" },
    liveLoad: 29,
    demand: "Low",
    items: [
      "Data Maturity Assessment",
      "Data Strategy Roadmap",
      "Technology Selection",
      "Team Structure Advisory",
      "ROI & Business Case Building",
    ],
  },
  {
    id: 12,
    category: "consulting",
    title: "Training & Upskilling",
    href: "/services?category=training",
    tagline: "Strategy that wins",
    description: "Build your team's data skills with hands-on workshops tailored to your business and industry.",
    longDesc: "Technology without skilled people is wasted investment. We train your team — from basic data literacy to advanced analytics — using YOUR real business data and use cases.",
    features: ["Python", "R", "SQL", "ML", "BI"],
    metrics: { roi: "500%", timeline: "3 months", satisfaction: "98%" },
    liveLoad: 33,
    demand: "Low",
    items: [
      "SQL & Python Workshops",
      "Power BI & Tableau Training",
      "ML Fundamentals Bootcamp",
      "Data Literacy Programs",
      "Custom Corporate Training",
    ],
  },
];

// ─── Category Mapping ─────────────────────────────────────────────
const categories = [
  { id: "all", label: "All Services", icon: <Sparkles size={16} /> },
  { id: "ai", label: "AI & ML", icon: <Brain size={16} /> },
  { id: "data", label: "Data Engineering", icon: <Database size={16} /> },
  { id: "analytics", label: "Analytics", icon: <BarChart3 size={16} /> },
  { id: "consulting", label: "Consulting", icon: <Beaker size={16} /> },
];

const CATEGORY_BREAKDOWN = [
  { label: "AI & ML", key: "ai", color: "#fdb840" },
  { label: "Data Engineering", key: "data", color: "#00d4ff" },
  { label: "Analytics", key: "analytics", color: "#a259ff" },
  { label: "Consulting", key: "consulting", color: "#00e676" },
];

// ─── Helpers ──────────────────────────────────────────────────────
const generateParticles = (count) =>
  Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.2 + 0.05,
  }));

// ─── Variants ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const REPLAY_VIEWPORT = { once: false, amount: 0.15 };

const ServicesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category") || "all";

  const slugToCategory = {
    "ai-ml": "ai",
    "big-data": "data",
    bi: "analytics",
    governance: "ai",
    predictive: "analytics",
    realtime: "data",
    cloud: "data",
    customer: "analytics",
    "custom-dev": "ai",
    privacy: "ai",
    strategy: "consulting",
    training: "consulting",
  };
  const initialCategory = slugToCategory[categoryFromUrl] || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const cardsSectionRef = useRef(null);
  const filterSectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [clock, setClock] = useState(new Date());
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");
  const [chatLog, setChatLog] = useState([
    { from: "bot", text: "Hi! 👋 How can Scape Data Solutions help your business today?" },
  ]);
  const [navOpen, setNavOpen] = useState(false);
  const [compOpen, setCompOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const [portOpen, setPortOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [liveData, setLiveData] = useState([55, 68, 42, 81, 73, 90, 77, 63, 88, 71]);
  const [metricTick, setMetricTick] = useState(0);
  const [particles] = useState(generateParticles(50));
  const [serviceLoads, setServiceLoads] = useState(
    Object.fromEntries(SERVICE_CARDS.map((c) => [c.id, c.liveLoad]))
  );
  const [counters, setCounters] = useState({ clients: 0, projects: 0, satisfaction: 0 });
  const [breakdownPct, setBreakdownPct] = useState(
    Object.fromEntries(CATEGORY_BREAKDOWN.map((c) => [c.key, 0]))
  );

  const introRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: false, amount: 0.2 });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.4 });

    useEffect(() => {
    const newCategory = slugToCategory[categoryFromUrl] || "all";
    setActiveCategory(newCategory);
    if (categoryFromUrl !== "all" && filterSectionRef.current) {
      setTimeout(() => {
        const top =
          filterSectionRef.current.getBoundingClientRect().top +
          window.pageYOffset -
          110;
        window.scrollTo({ top, behavior: "smooth" });
      }, 150);
    }
  }, [location.search]);

  const filteredServices =
    activeCategory === "all"
      ? SERVICE_CARDS
      : SERVICE_CARDS.filter((s) => s.category === activeCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => [...prev.slice(1), Math.floor(Math.random() * 40 + 52)]);
      setMetricTick((t) => t + 1);
      setServiceLoads((prev) => {
        const next = { ...prev };
        SERVICE_CARDS.forEach((c) => {
          const drift = Math.floor(Math.random() * 9) - 4;
          next[c.id] = Math.max(15, Math.min(96, (prev[c.id] ?? c.liveLoad) + drift));
        });
        return next;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
      setShowTop(scrolled > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isStatsInView) return;
    const targets = { clients: 1200, projects: 3500, satisfaction: 99.5 };
    let step = 0;
    const steps = 70;
    const iv = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCounters({
        clients: targets.clients * ease,
        projects: targets.projects * ease,
        satisfaction: targets.satisfaction * ease,
      });
      if (step >= steps) clearInterval(iv);
    }, 1400 / steps);
    return () => clearInterval(iv);
  }, [isStatsInView]);

  useEffect(() => {
    if (!isIntroInView) return;
    const counts = Object.fromEntries(CATEGORY_BREAKDOWN.map((c) => [c.key, 0]));
    SERVICE_CARDS.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    const max = Math.max(...Object.values(counts));
    const targets = Object.fromEntries(
      CATEGORY_BREAKDOWN.map((c) => [c.key, Math.round((counts[c.key] / max) * 100)])
    );
    let step = 0;
    const steps = 50;
    const iv = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setBreakdownPct(
        Object.fromEntries(CATEGORY_BREAKDOWN.map((c) => [c.key, Math.round(targets[c.key] * ease)]))
      );
      if (step >= steps) clearInterval(iv);
    }, 900 / steps);
    return () => clearInterval(iv);
  }, [isIntroInView]);

  const sendChat = () => {
    if (!chatMsg.trim()) return;
    setChatLog((prev) => [...prev, { from: "user", text: chatMsg }]);
    setChatMsg("");
    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for reaching out! Our team will respond within 1 hour. For urgent queries, call +1 (312) 212-3396.",
        },
      ]);
    }, 900);
  };

  const maxLive = Math.max(...liveData);

  return (
    <div className={homeStyles.page}>
      {/* scroll progress */}
      <div className={homeStyles.progressTrack}>
        <motion.div
          className={homeStyles.progressBar}
          style={{ width: `${scrollProgress}%` }}
          animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* particles */}
      <div className={styles.particlesContainer}>
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, 0],
              opacity: [p.opacity, p.opacity * 2, p.opacity],
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

      {/* floating widget */}
      <motion.div
        className={homeStyles.floatingWidget}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.6, type: "spring", stiffness: 200 }}
      >
        <div className={homeStyles.fwHeader}>
          <Activity size={11} /> <span>Live Metrics</span>
          <motion.span
            className={homeStyles.livePulse}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
        <div className={homeStyles.fwBars}>
          {liveData.map((v, i) => (
            <motion.div
              key={i}
              className={homeStyles.fwBar}
              animate={{ height: `${(v / maxLive) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className={homeStyles.fwFoot}>
          <motion.span
            className={homeStyles.fwVal}
            key={liveData[liveData.length - 1]}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {liveData[liveData.length - 1]}K
          </motion.span>
          <span className={homeStyles.fwLbl}>events/sec</span>
        </div>
      </motion.div>

      {/* metrics ticker */}
      <div className={homeStyles.metricsTicker}>
        <div className={homeStyles.metricsTrack}>
          {[
            { label: "Events", val: "8.4M", unit: "/min", icon: <Activity size={13} />, color: "#fdb840", delta: "+2.3%" },
            { label: "Pipelines", val: "1,247", unit: "", icon: <GitBranch size={13} />, color: "#00d4ff", delta: "+18" },
            { label: "Query Time", val: "87", unit: "ms", icon: <Zap size={13} />, color: "#a259ff", delta: "-4ms" },
            { label: "Models", val: "342", unit: "", icon: <Brain size={13} />, color: "#00e676", delta: "+7" },
            { label: "Ingested", val: "14.2", unit: "TB", icon: <Database size={13} />, color: "#ff6b6b", delta: "+1.8TB" },
            { label: "Uptime", val: "99.99", unit: "%", icon: <Server size={13} />, color: "#fdb840", delta: "stable" },
          ]
            .concat([
              { label: "Events", val: "8.4M", unit: "/min", icon: <Activity size={13} />, color: "#fdb840", delta: "+2.3%" },
              { label: "Pipelines", val: "1,247", unit: "", icon: <GitBranch size={13} />, color: "#00d4ff", delta: "+18" },
              { label: "Query Time", val: "87", unit: "ms", icon: <Zap size={13} />, color: "#a259ff", delta: "-4ms" },
              { label: "Models", val: "342", unit: "", icon: <Brain size={13} />, color: "#00e676", delta: "+7" },
              { label: "Ingested", val: "14.2", unit: "TB", icon: <Database size={13} />, color: "#ff6b6b", delta: "+1.8TB" },
              { label: "Uptime", val: "99.99", unit: "%", icon: <Server size={13} />, color: "#fdb840", delta: "stable" },
            ])
            .map((m, i) => (
              <span key={i} className={homeStyles.metricsItem}>
                <span style={{ color: m.color }}>{m.icon}</span>
                <span className={homeStyles.metricsLabel}>{m.label}:</span>
                <motion.span
                  className={homeStyles.metricsVal}
                  key={metricTick}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {m.val}
                  {m.unit}
                </motion.span>
                <span
                  className={homeStyles.metricsDelta}
                  style={{ color: m.delta.startsWith("-") ? "#ff6b6b" : "#00e676" }}
                >
                  {m.delta}
                </span>
              </span>
            ))}
        </div>
      </div>


      <Navbar activeNav="services" />



      <main className={homeStyles.mainContent}>
        {/* HERO SECTION — with banner image as background */}
        <section
          className={styles.heroSection}
          style={{
            backgroundImage: `url(/scape_data_files/services-banner.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div className={styles.heroGradient} style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
          <div className={styles.heroShapes}>
            <motion.div
              className={styles.shape1}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className={styles.shape2}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className={styles.shape3}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className={homeStyles.container}>
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <motion.div
                className={styles.heroBadge}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={14} /> <span>12 Elite Services</span>
              </motion.div>
              <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                Services That <span className={styles.highlight}>Transform</span> Businesses
              </motion.h1>
              <motion.p className={styles.heroSub} variants={fadeUp}>
                From AI to analytics, we deliver end‑to‑end solutions that drive real results for
                your business.
              </motion.p>
              <motion.div
                className={styles.heroStats}
                variants={fadeUp}
                ref={statsRef}
                initial="hidden"
                animate={isStatsInView ? "visible" : "hidden"}
              >
                <motion.div
                  className={styles.statItem}
                  whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(253,184,64,0.2)" }}
                >
                  <div className={styles.statValue}>{Math.floor(counters.clients)}+</div>
                  <div className={styles.statLabel}>Clients</div>
                </motion.div>
                <motion.div
                  className={styles.statItem}
                  whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(253,184,64,0.2)" }}
                >
                  <div className={styles.statValue}>{Math.floor(counters.projects)}+</div>
                  <div className={styles.statLabel}>Projects</div>
                </motion.div>
                <motion.div
                  className={styles.statItem}
                  whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(253,184,64,0.2)" }}
                >
                  <div className={styles.statValue}>{counters.satisfaction.toFixed(1)}%</div>
                  <div className={styles.statLabel}>Satisfaction</div>
                </motion.div>
              </motion.div>
              <motion.div className={styles.heroCta} variants={fadeUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className={styles.heroBtn}>
                    Get Started <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/portfolio" className={styles.heroBtnSecondary}>
                    See Our Work <Star size={15} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div className={styles.liveStatsPanel} variants={fadeUp}>
                {categories
                  .filter((c) => c.id !== "all")
                  .map((cat) => {
                    const catServices = SERVICE_CARDS.filter((s) => s.category === cat.id);
                    const avgLoad = Math.round(
                      catServices.reduce((sum, s) => sum + (serviceLoads[s.id] ?? s.liveLoad), 0) /
                        catServices.length
                    );
                    return (
                      <motion.div
                        key={cat.id}
                        className={styles.liveStatCell}
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(253,184,64,0.1)" }}
                      >
                        <div className={styles.liveStatHead}>
                          {cat.icon} {cat.label}
                          <motion.span
                            className={homeStyles.livePulse}
                            animate={{ opacity: [1, 0.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        </div>
                        <motion.div
                          className={styles.liveStatVal}
                          key={avgLoad}
                          initial={{ opacity: 0.5 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {avgLoad}%
                        </motion.div>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <div className={styles.introSection} ref={introRef}>
          <div className={homeStyles.container}>
            <div className={styles.introGrid}>
              <motion.div
                className={styles.introText}
                initial={{ opacity: 0, x: -30 }}
                animate={isIntroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <p className={styles.introPara}>
                  <strong>Scape Data Solutions</strong> is a hub of technology and a distinction
                  among data firms that offer a full range of analytics and AI services that are
                  constantly being accentuated with new trends and technologies. We can pick up a
                  project from any phase and complete it on time and within budget using our highly
                  successful project development methodology.
                </p>
                <p className={styles.introPara}>
                  We use change control techniques to facilitate clients in modifying solutions
                  whether it's in the design or development phase. No project is taken lightly. From
                  simple dashboards to large-scale AI platforms, we ensure client satisfaction every
                  step of the way.
                </p>
              </motion.div>

              <motion.div
                className={styles.introPanel}
                initial={{ opacity: 0, x: 30 }}
                animate={isIntroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={styles.ipHeader}>
                  <Activity size={14} /> Service Demand Breakdown
                  <motion.span
                    className={homeStyles.livePulse}
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
                {CATEGORY_BREAKDOWN.map((c) => (
                  <div key={c.key} className={styles.metricRow}>
                    <span className={styles.metricLabel}>{c.label}</span>
                    <div className={styles.metricBar}>
                      <motion.div
                        className={styles.metricFill}
                        style={{ backgroundColor: c.color, width: `${breakdownPct[c.key]}%` }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <span className={styles.metricVal}>{breakdownPct[c.key]}%</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* FILTER SECTION */}
        <section className={styles.filterSection} ref={filterSectionRef}>
          <div className={homeStyles.container}>
            <motion.h2
              className={styles.filterTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={REPLAY_VIEWPORT}
              transition={{ duration: 0.5 }}
            >
              Explore by Category
            </motion.h2>
            <div className={styles.categoryFilter}>
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.active : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.06, boxShadow: "0 4px 16px rgba(253,184,64,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: categories.indexOf(cat) * 0.05 }}
                >
                  {cat.icon}
                  {cat.label}
                  {activeCategory === cat.id && (
                    <motion.span
                      className={styles.activeIndicator}
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES CARDS */}
        <section className={styles.servicesSection} ref={cardsSectionRef}>
          <div className={homeStyles.container}>
            <div className={styles.cardsGrid}>
              {filteredServices.map((card) => {
                const load = serviceLoads[card.id] ?? card.liveLoad;
                return (
                  <motion.div
                    key={card.id}
                    className={styles.card}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    variants={cardVariants}
                    whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedService(card)}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className={styles.cardBody}>
                      <h5 className={styles.cardTitle}>
                        <Link
                          to={card.href}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {card.title}
                        </Link>
                      </h5>
                      <p className={styles.cardDescription}>{card.description}</p>

                      <div className={styles.cardMetrics}>
                        <motion.span
                          className={styles.cardMetricChip}
                          key={load}
                          initial={{ opacity: 0.4 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Activity size={10} style={{ marginRight: 3, verticalAlign: "-1px" }} />
                          Demand: {load}%
                        </motion.span>
                        <span className={styles.cardMetricChip}>{card.demand} Priority</span>
                      </div>

                      <ul className={styles.cardList}>
                        {card.items.slice(0, 4).map((item, i) => (
                          <motion.li
                            key={i}
                            className={styles.cardListItem}
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <img
                              src="/scape_data_files/contentul-arroe.webp"
                              alt=""
                              className={styles.arrowIcon}
                              onError={(e) => { e.target.style.display = "none"; }}
                            />
                            {item}
                          </motion.li>
                        ))}
                        {card.items.length > 4 && (
                          <li className={styles.cardListItem}>
                            <span className={styles.moreItems}>+{card.items.length - 4} more</span>
                          </li>
                        )}
                      </ul>
                      <motion.button
                        className={styles.cardBtn}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(card);
                        }}
                      >
                        Learn More <ArrowRight size={14} />
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <div className={styles.ctaStrip}>
          <div className={homeStyles.container}>
            <motion.p
              className={styles.ctaText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={REPLAY_VIEWPORT}
            >
              Please <Link to="/contact">contact us</Link> and find out more about{" "}
              <strong>Scape Data Solutions</strong> and how we can help you grow your business!
            </motion.p>
          </div>
        </div>
      </main>

      {/* FOOTER */}

      <Footer />



      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className={homeStyles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.08, backgroundColor: "#fdb840", color: "#fff" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* CHAT WIDGET */}
      <div className={homeStyles.chatWidget}>
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              className={homeStyles.chatBox}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className={homeStyles.chatHeader}>
                <div className={homeStyles.chatHeaderInfo}>
                  <div className={homeStyles.chatAvatar}>
                    <MessageSquare size={13} />
                  </div>
                  <div>
                    <strong>Scape Data Support</strong>
                    <span>
                      <motion.span
                        className={homeStyles.livePulse}
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      Online
                    </span>
                  </div>
                </div>
                <button onClick={() => setChatOpen(false)}>
                  <X size={15} />
                </button>
              </div>
              <div className={homeStyles.chatLog}>
                {chatLog.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`${homeStyles.chatMsg} ${
                      msg.from === "user" ? homeStyles.chatMsgUser : homeStyles.chatMsgBot
                    }`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </div>
              <div className={homeStyles.chatInput}>
                <input
                  value={chatMsg}
                  onChange={(e) => setChatMsg(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendChat()}
                  placeholder="Type..."
                />
                <motion.button
                  onClick={sendChat}
                  whileHover={{ scale: 1.08, backgroundColor: "#fdb840" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          className={homeStyles.chatToggle}
          onClick={() => setChatOpen(!chatOpen)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          animate={chatOpen ? {} : { y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {chatOpen ? <X size={18} /> : <MessageSquare size={18} />}
          {!chatOpen && (
            <motion.span
              className={homeStyles.chatBadge}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              1
            </motion.span>
          )}
        </motion.button>
      </div>

      {/* SERVICE MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className={styles.modalClose}
                onClick={() => setSelectedService(null)}
                whileHover={{ rotate: 90, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <X size={22} />
              </motion.button>
              <div className={styles.modalHeader} style={{ borderBottom: `3px solid #fdb840` }}>
                <div className={styles.modalIcon} />
                <h2>{selectedService.title}</h2>
                <p>{selectedService.tagline}</p>
              </div>
              <div className={styles.modalBody}>
                <p className={styles.modalDescription}>{selectedService.longDesc}</p>
                <div className={styles.modalMetrics}>
                  {Object.entries(selectedService.metrics).map(([key, value]) => (
                    <div key={key} className={styles.modalMetric}>
                      <div className={styles.modalMetricValue}>{value}</div>
                      <div className={styles.modalMetricLabel}>{key}</div>
                    </div>
                  ))}
                </div>
                <h3>Key Features</h3>
                <ul className={styles.modalFeatures}>
                  {selectedService.features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <CheckCircle size={17} style={{ color: "#fdb840" }} />
                      {f}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className={styles.modalBtn}
                    style={{ borderColor: "#fdb840", color: "#fdb840" }}
                  >
                    Get This Service <ArrowRight size={17} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;
