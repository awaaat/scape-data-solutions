import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight, CheckCircle, Clock, Users, Award, Shield, Zap, Star,
  ChevronDown, Loader2, Edit3, FileText, GraduationCap, BookOpen,
  PenTool, TrendingUp, Sparkles, Phone, Mail, Send, Globe, MapPin,
  BarChart, Briefcase, Book, Layers, List, Table, HelpCircle, User,
  BookMarked, Library, Target, RefreshCw, ThumbsUp, MessageSquare,
  File, FileType, Layout, AlignLeft, Type, BookCopy, Eye, Check,
  Circle, Copy, Pen, Palette
} from "lucide-react";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./AcademicFormattingPage.module.css";
import SEO from "../../../components/SEO/SEO";
import { apiService } from "../../../services/api";

// --- Typewriter hook ---
const ROTATING_WORDS = [
  "APA 7th Edition",
  "MLA 9th Edition",
  "Chicago 17th",
  "Harvard Style",
  "IEEE Format"
];

function useTypewriter(words, speed = 100, pause = 2400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [holding, setHolding] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let t;
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      setHolding(true);
      t = setTimeout(() => { setHolding(false); setDeleting(true); }, pause);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else {
      setDeleting(false);
      setWordIndex(i => i + 1);
    }
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return { text, holding };
}

// --- Animated Stat ---
function AnimatedStat({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");

  const match = value.match(/^([\d.,]+)(.*)$/);
  const numericPart = match ? match[1] : value;
  const suffix = match ? match[2] : "";
  const target = parseFloat(numericPart.replace(/,/g, ""));
  const hasDecimal = numericPart.includes(".");

  useEffect(() => {
    if (!inView || isNaN(target)) {
      setDisplay(value);
      return;
    }
    let frame;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const formatted = hasDecimal
        ? current.toFixed(1)
        : Math.round(current).toLocaleString();
      setDisplay(formatted + suffix);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}

// --- Animation variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 }
};
const slideLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};
const springTransition = { type: "spring", stiffness: 120, damping: 14 };

export default function AcademicFormattingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "", email: "", documentType: "", deadline: "", details: ""
  });

  const { text: typedHeadline, holding } = useTypewriter(ROTATING_WORDS);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await apiService.submitLead({
        name: formData.name,
        email: formData.email,
        service: `Academic Formatting - ${formData.documentType || 'General'}`,
        message: `Document Type: ${formData.documentType}\nDeadline: ${formData.deadline}\nDetails: ${formData.details}`,
        company: "Academic Client",
        phone: ""
      });
      setSubmitted(true);
      setTimeout(() => {
        if (successRef.current) {
          successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } catch (err) {
      setError(err.message || "Failed to send. Please email info@scapedatasolutions.com");
    } finally {
      setLoading(false);
    }
  };

  // --- Data (all formatting‑specific) ---
  const styleGuides = [
    { name: "APA 7th", usage: "Psychology, Education, Social Sciences", color: "#3b82f6", example: "(Author, Year)" },
    { name: "MLA 9th", usage: "Literature, Languages, Humanities", color: "#8b5cf6", example: "(Author Page)" },
    { name: "Chicago 17th", usage: "History, Arts, Publishing", color: "#f59e0b", example: "Footnotes / Author-Date" },
    { name: "Harvard", usage: "Business, Economics, Sciences", color: "#10b981", example: "(Author, Year, p. X)" },
    { name: "IEEE", usage: "Engineering, Computer Science", color: "#ef4444", example: "[1]" },
    { name: "AMA 11th", usage: "Medicine, Health Sciences", color: "#06b6d4", example: "Superscript numbers" },
  ];

  const styleSamples = [
    { name: "APA 7th", desc: "Author-date citation with a detailed reference list. Used in 65% of social science journals.", icon: <BookCopy size={24} />, color: "#3b82f6" },
    { name: "MLA 9th", desc: "Author-page in-text citations. Standard for literary analysis and language studies.", icon: <Pen size={24} />, color: "#8b5cf6" },
    { name: "Chicago 17th", desc: "Two systems: notes-bibliography and author-date. Preferred in history and publishing.", icon: <BookOpen size={24} />, color: "#f59e0b" },
    { name: "IEEE", desc: "Numerical citations in brackets. Used in 80% of engineering and computer science papers.", icon: <Layout size={24} />, color: "#ef4444" },
  ];

  const comparisonData = [
    { before: "The data was analysed using a t-test.", after: "The data were analyzed using a t-test." },
    { before: "Smith et al. (2020) states that...", after: "Smith et al. (2020) state that..." },
    { before: "The results are consistent with prior research (Johnson, 2018, p.45).", after: "The results are consistent with prior research (Johnson, 2018, p. 45)." },
  ];

  const features = [
    { icon: <Check size={20} />, title: "Consistent Citations", desc: "Every in‑text citation formatted perfectly to your chosen style guide." },
    { icon: <AlignLeft size={20} />, title: "Flawless Layout", desc: "Margins, spacing, headings – all aligned to journal or university requirements." },
    { icon: <FileType size={20} />, title: "Reference Management", desc: "We work with EndNote, Zotero, Mendeley, and plain text references." },
    { icon: <Clock size={20} />, title: "Fast Turnaround", desc: "Most formatting jobs are returned within 24‑48 hours, even for long documents." },
  ];

  // REPLACED: Templates section removed, now a real Style Guide Comparison Table
  const styleComparison = [
    { style: "APA 7th", citation: "(Author, Year)", bibliography: "Alphabetical by author, hanging indent", commonUse: "Social sciences, education, psychology" },
    { style: "MLA 9th", citation: "(Author Page#)", bibliography: "Alphabetical by author, hanging indent", commonUse: "Literature, languages, humanities" },
    { style: "Chicago 17th", citation: "Footnotes or (Author, Year)", bibliography: "Notes-bibliography or author-date", commonUse: "History, arts, publishing" },
    { style: "Harvard", citation: "(Author, Year, p. X)", bibliography: "Alphabetical by author, hanging indent", commonUse: "Business, economics, sciences" },
    { style: "IEEE", citation: "[1] (numbered)", bibliography: "Numbered in order of appearance", commonUse: "Engineering, computer science" },
    { style: "AMA 11th", citation: "Superscript numbers", bibliography: "Numbered in order of appearance", commonUse: "Medicine, health sciences" },
  ];

  const fileFormats = [
    { name: "DOCX", icon: <FileText size={16} /> },
    { name: "PDF", icon: <File size={16} /> },
    { name: "LaTeX", icon: <Type size={16} /> },
    { name: "TXT", icon: <File size={16} /> },
    { name: "ODT", icon: <FileText size={16} /> },
    { name: "RTF", icon: <FileText size={16} /> },
  ];

  const whyPoints = [
    { icon: <Award size={22} />, title: "PhD‑Level Experts", desc: "Our formatters hold advanced degrees and know every style guide inside out." },
    { icon: <Shield size={22} />, title: "100% Accuracy", desc: "We guarantee your formatting is flawless and ready for submission." },
    { icon: <Users size={22} />, title: "Dedicated Support", desc: "You work with one formatting specialist from start to finish." },
    { icon: <RefreshCw size={22} />, title: "Unlimited Revisions", desc: "If you find any errors, we fix them free of charge." },
  ];

  const processSteps = [
    { num: "01", title: "Upload Your Document", desc: "Send us your file along with your target style guide or journal requirements." },
    { num: "02", title: "Expert Formatting", desc: "Our specialist applies the correct style to every detail – citations, headings, spacing." },
    { num: "03", title: "Quality Check", desc: "We run a double-review to ensure every rule has been followed correctly." },
    { num: "04", title: "Final Delivery", desc: "You receive a perfectly formatted document, ready for submission." },
  ];

  const faqs = [
    { q: "Which style guides do you support?", a: "APA 7th, MLA 9th, Chicago 17th, Harvard, IEEE, AMA, Vancouver, and many more. Just tell us what you need." },
    { q: "How long does formatting take?", a: "Most documents are formatted within 24-48 hours. Rush options are available." },
    { q: "Do you also check reference lists?", a: "Yes. We verify every citation and ensure the reference list is complete and correctly formatted." },
    { q: "Can you format a document from scratch?", a: "Absolutely. We can create a template from scratch or apply formatting to an existing draft." },
    { q: "What about tables and figures?", a: "We can format tables, figures, captions, and ensure they are positioned correctly according to the style guide." },
  ];

  const addOns = [
    "Pre-submission journal formatting – match the journal's exact layout.",
    "Citation check – verify every in-text citation matches the reference list.",
    "Figure and table formatting – ensure all visuals meet publication standards.",
    "Running heads and page numbers – proper placement according to style.",
    "Reference list rebuild – create a complete, correctly styled reference list from your raw citations.",
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Academic Formatting Services | APA, MLA, Chicago & More"
        description="Professional academic formatting for theses, dissertations, and journal manuscripts. We handle APA, MLA, Chicago, and all major style guides with perfect accuracy."
        path="/services/academic-formatting"
      />

      <Navbar activeNav="services" />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* ===== HERO ===== */}
        <section className={styles.hero} style={{ background: 'rgba(var(--primary), 0.01)' }}>
          <div className={styles.container}>
            <div className={styles.heroInner} style={{ gap: '3rem' }}>
              <div className={styles.heroLeft}>
                <motion.div
                  className={styles.heroBadge}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ background: 'rgba(251, 191, 36, 0.08)', borderColor: 'rgba(251, 191, 36, 0.2)', color: '#d97706' }}
                >
                  <Sparkles size={14} /> Trusted by 12,000+ academics
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  style={{ maxWidth: '38rem' }}
                >
                  Academic Formatting & Style Guide Compliance
                </motion.h1>
                <motion.div
                  className={styles.heroTypewriter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 style={{ color: 'rgba(var(--primary), 0.6)' }}>Perfect your citations in <span style={{ color: '#d97706' }}>{typedHeadline}</span><span className={styles.caret}>|</span></h2>
                </motion.div>
                <motion.p
                  className={styles.heroDesc}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Stop losing marks over formatting. We make your document perfectly comply with APA, MLA, Chicago, IEEE, or any other style guide – so you can focus on your research.
                </motion.p>
                <motion.div
                  className={styles.heroStats}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatValue}><AnimatedStat value="98%" /></span>
                    <span className={styles.heroStatLabel}>Correct citations</span>
                  </div>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatValue}><AnimatedStat value="24h" /></span>
                    <span className={styles.heroStatLabel}>Average turnaround</span>
                  </div>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatValue}><AnimatedStat value="6,700+" /></span>
                    <span className={styles.heroStatLabel}>Institutions served</span>
                  </div>
                </motion.div>
                <motion.div
                  className={styles.heroButtons}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <a href="#contact" className={styles.btnPrimary} style={{ background: '#d97706 !important' }}>
                    Get a Free Formatting Sample <ArrowRight size={18} />
                  </a>
                  <a href="#process" className={styles.btnSecondary}>How It Works</a>
                </motion.div>
              </div>

              <motion.div
                className={styles.heroRight}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className={styles.styleSelector} style={{ borderColor: 'rgba(217, 119, 6, 0.15)' }}>
                  <div className={styles.styleSelectorHeader} style={{ borderBottomColor: 'rgba(217, 119, 6, 0.1)' }}>
                    <span className={styles.styleSelectorLabel} style={{ color: '#d97706' }}>Style Guide Selector</span>
                    <span className={styles.styleSelectorStatus} style={{ color: '#d97706' }}>Active</span>
                  </div>
                  <div className={styles.styleSelectorBody}>
                    {styleGuides.map((guide, i) => (
                      <div key={i} className={styles.styleSelectorItem} style={{ borderColor: 'rgba(217, 119, 6, 0.05)' }}>
                        <span className={styles.styleSelectorDot} style={{ background: guide.color }} />
                        <span className={styles.styleSelectorName}>{guide.name}</span>
                        <span className={styles.styleSelectorUsage}>{guide.usage}</span>
                        <span className={styles.styleSelectorCheck} style={{ color: '#d97706' }}>✓</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.styleSelectorFooter} style={{ borderTopColor: 'rgba(217, 119, 6, 0.1)' }}>
                    <span>Supported guides</span>
                    <span className={styles.styleSelectorCount}>6+ styles</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== STYLE GALLERY ===== */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div className={styles.sectionHeader} variants={fadeUp}>
              <h2>Style Guides We Format</h2>
              <p>Every major academic style – applied with precision and consistency.</p>
            </motion.div>
            <div className={styles.styleGallery} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {styleSamples.map((item, i) => (
                <motion.div key={i} className={styles.styleGalleryItem} variants={scaleIn} style={{ borderColor: `${item.color}33`, paddingTop: '2.5rem' }}>
                  <span className={styles.styleGalleryDot} style={{ background: item.color }} />
                  <div style={{ color: item.color, marginBottom: '0.5rem' }}>{item.icon}</div>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                  <span className={styles.styleGalleryBadge} style={{ background: `${item.color}22`, color: item.color }}>Expert</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== BEFORE / AFTER ===== */}
        <motion.section
          className={`${styles.section} ${styles.sectionAlt}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={staggerContainer}
          style={{ background: 'rgba(217, 119, 6, 0.03)' }}
        >
          <div className={styles.container}>
            <motion.div className={styles.sectionHeader} variants={fadeUp}>
              <h2>Before & After – See the Difference</h2>
              <p>We catch the errors that cost you marks.</p>
            </motion.div>
            <div className={styles.comparison}>
              <div className={styles.comparisonBefore} style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                <div className={styles.comparisonLabel}>
                  <span className={styles.comparisonBadge} style={{ color: '#dc2626' }}>Before</span>
                  <span style={{ fontSize: '1.2rem' }}>❌</span>
                </div>
                <div className={styles.comparisonContent}>
                  {comparisonData.map((line, i) => (
                    <div key={i} className={styles.comparisonLine}>
                      <span className={styles.comparisonWrong}>{line.before}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.comparisonAfter} style={{ borderColor: 'rgba(34, 197, 94, 0.3)', background: 'rgba(34, 197, 94, 0.05)' }}>
                <div className={styles.comparisonLabel}>
                  <span className={styles.comparisonBadge} style={{ color: '#16a34a' }}>After</span>
                  <span style={{ fontSize: '1.2rem' }}>✅</span>
                </div>
                <div className={styles.comparisonContent}>
                  {comparisonData.map((line, i) => (
                    <div key={i} className={styles.comparisonLine}>
                      <span className={styles.comparisonCorrect}>{line.after}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ===== FEATURES ===== */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div className={styles.sectionHeader} variants={fadeUp}>
              <h2>Why Formatting Matters</h2>
              <p>Good formatting improves readability, credibility, and your grade.</p>
            </motion.div>
            <div className={styles.featuresGrid}>
              {features.map((feature, i) => (
                <motion.div key={i} className={styles.featureCard} variants={scaleIn}>
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== STYLE GUIDE COMPARISON TABLE (replaces fake templates) ===== */}
        <motion.section
          className={`${styles.section} ${styles.sectionAlt}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={staggerContainer}
          style={{ background: 'rgba(217, 119, 6, 0.03)' }}
        >
          <div className={styles.container}>
            <motion.div className={styles.sectionHeader} variants={fadeUp}>
              <h2>Style Guide Comparison</h2>
              <p>See at a glance how the major style guides differ.</p>
            </motion.div>
            <motion.div variants={staggerContainer} style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', background: 'rgb(var(--card))', borderRadius: '0.875rem', overflow: 'hidden' }}>
                <thead style={{ background: 'rgba(217, 119, 6, 0.08)', borderBottom: '1px solid rgba(var(--border), 0.06)' }}>
                  <tr>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Style</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Citation Format</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Bibliography</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600 }}>Common Use</th>
                  </tr>
                </thead>
                <tbody>
                  {styleComparison.map((item, i) => (
                    <motion.tr
                      key={i}
                      variants={fadeUp}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      style={{ borderBottom: i < styleComparison.length - 1 ? '1px solid rgba(var(--border), 0.04)' : 'none' }}
                      whileHover={{ background: 'rgba(var(--primary), 0.02)' }}
                    >
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>{item.style}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'rgba(var(--primary), 0.7)' }}>{item.citation}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'rgba(var(--primary), 0.7)' }}>{item.bibliography}</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'rgba(var(--primary), 0.7)' }}>{item.commonUse}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.p className={styles.sectionFooter} variants={fadeUp} style={{ textAlign: 'center', maxWidth: '100%' }}>
              <strong>Not sure which style to choose?</strong> We'll help you pick the right one for your discipline.
            </motion.p>
          </div>
        </motion.section>

        {/* ===== FILE FORMATS ===== */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div className={styles.sectionHeader} variants={fadeUp}>
              <h2>Supported File Formats</h2>
              <p>We work with any file type you have.</p>
            </motion.div>
            <div className={styles.formatsGrid}>
              {fileFormats.map((fmt, i) => (
                <motion.div key={i} className={styles.formatItem} variants={scaleIn}>
                  {fmt.icon} {fmt.name}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== WHY CHOOSE ===== */}
        <motion.section
          className={`${styles.section} ${styles.sectionAlt}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={staggerContainer}
          style={{ background: 'rgba(217, 119, 6, 0.03)' }}
        >
          <div className={styles.container}>
            <motion.div className={styles.sectionHeader} variants={fadeUp}>
              <h2>Why Choose Scape Data Solutions</h2>
              <p>We combine formatting expertise with a deep understanding of academic publishing.</p>
            </motion.div>
            <div className={styles.whyGrid}>
              {whyPoints.map((item, i) => (
                <motion.div key={i} className={styles.whyCard} variants={scaleIn}>
                  <span className={styles.whyIcon}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== PROCESS ===== */}
        <motion.section
          id="process"
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div className={styles.sectionHeader} variants={fadeUp}>
              <h2>Our Formatting Process</h2>
              <p>Simple, transparent, and fast.</p>
            </motion.div>
            <div className={styles.process}>
              {processSteps.map((step, i) => (
                <motion.div key={i} className={styles.processStep} variants={slideLeft}>
                  <span className={styles.processNum}>{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== ADD‑ONS (centered) ===== */}
        <motion.section
          className={`${styles.section} ${styles.sectionAlt}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <div className={styles.addOnsContainer}>
              <motion.div className={styles.sectionHeader} variants={fadeUp}>
                <h2>Formatting Add‑Ons</h2>
                <p>Enhance your formatting service with these additional options.</p>
              </motion.div>
              <motion.ol variants={staggerContainer} style={{ paddingLeft: '1.5rem' }}>
                {addOns.map((item, i) => (
                  <motion.li key={i} variants={slideLeft} transition={{ delay: i * 0.05 }}>
                    {item}
                  </motion.li>
                ))}
              </motion.ol>
              <motion.p className={styles.sectionFooter} variants={fadeUp}>
                Our experts will advise you on which add‑ons best suit your project.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* ===== FAQ ===== */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div className={styles.sectionHeader} variants={fadeUp}>
              <h2>Frequently Asked Questions</h2>
              <p>All you need to know about our formatting services.</p>
            </motion.div>
            <div className={styles.faqGrid}>
              {faqs.map((faq, i) => (
                <motion.div key={i} className={styles.faqItem} variants={fadeUp}>
                  <button className={styles.faqQuestion} onClick={() => toggleFaq(i)}>
                    <span>{faq.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.faqAnswer}
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== CONTACT ===== */}
        <motion.section
          id="contact"
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={fadeUp}
          ref={formRef}
        >
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    ref={successRef}
                    className={styles.successMessage}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={springTransition}
                  >
                    <CheckCircle size={48} color="#22c55e" />
                    <h3>Thank You!</h3>
                    <p>Your request has been received. We'll send a free formatting sample within 2 hours.</p>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2>Ready for Perfect Formatting?</h2>
                    <p>Get a free formatting sample and quote – no obligation.</p>
                    {error && <div className={styles.errorMessage}>{error}</div>}
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <input type="text" name="name" placeholder="Full Name *" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className={styles.formGroup}>
                          <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} />
                        </div>
                      </div>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <select name="documentType" required value={formData.documentType} onChange={handleChange}>
                            <option value="">Document Type *</option>
                            <option value="thesis">Thesis</option>
                            <option value="dissertation">Dissertation</option>
                            <option value="journal">Journal Manuscript</option>
                            <option value="research">Research Paper</option>
                            <option value="grant">Grant Proposal</option>
                            <option value="book">Academic Book/Chapter</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className={styles.formGroup}>
                          <input type="date" name="deadline" required value={formData.deadline} onChange={handleChange} />
                        </div>
                      </div>
                      <div className={styles.formGroup}>
                        <textarea name="details" placeholder="Tell us about your document – style guide, word count, and any special requirements..." rows={5} required value={formData.details} onChange={handleChange} />
                      </div>
                      <button type="submit" className={styles.btnPrimary} disabled={loading} style={{ background: '#d97706 !important' }}>
                        {loading ? <><Loader2 className={styles.spinner} size={18} /> Processing...</> : <>Get Free Sample & Quote <Send size={16} /></>}
                      </button>
                      <p className={styles.privacyNote}>By submitting, you agree to our privacy policy. Your document stays confidential.</p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}