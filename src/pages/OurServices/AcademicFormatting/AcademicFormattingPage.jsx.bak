import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, CheckCircle, Clock, Users, Award, Shield, Zap, Star,
  ChevronDown, Loader2, FileText, BookOpen, PenTool, Sparkles,
  Send, Play, Pause, FileCheck, FileSpreadsheet, FileImage, FileCode,
  Download, Upload, RefreshCw, Table, List, AlignLeft,
  Type, Hash, Eye, EyeOff, Save, Printer, Layout,
  Columns, Rows, Grid, PanelTop, PanelBottom, Sidebar, FileUp,
  Folder, CheckSquare, Square, ThumbsUp, MessageSquare, UserCheck,
  FolderOpen, ExternalLink, Globe, GitBranch, Lightbulb, BarChart3
} from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./AcademicFormattingPage.module.css";
import SEO from "../../../components/SEO/SEO";
import { apiService } from "../../../services/api";

// ========== TYPEWRITER HOOK ==========
const ROTATING_WORDS = [
  "APA, MLA, Chicago",
  "Harvard, IEEE, AMA",
  "Thesis & Dissertation Templates",
  "Journal Submission Ready",
  "Citation Perfection"
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

// ========== ANIMATED STAT COUNTER ==========
function AnimatedStat({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");
  const target = parseFloat(value.replace(/,/g, ""));
  const hasDecimal = value.includes(".");

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
  }, [inView, target, value, suffix, hasDecimal]);

  return <span ref={ref}>{display}</span>;
}

// ========== ANIMATION VARIANTS ==========
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 }
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const springTransition = { type: "spring", stiffness: 120, damping: 14 };

// ========== MAIN COMPONENT ==========
export default function AcademicFormattingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "", email: "", documentType: "", styleGuide: "", details: ""
  });

  const { text: typedHeadline } = useTypewriter(ROTATING_WORDS);
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 500], [0, -50]);

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
        message: `Document Type: ${formData.documentType}\nStyle Guide: ${formData.styleGuide}\nDetails: ${formData.details}`,
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

  // ===== UNIQUE DATA =====
  const styleGuides = [
    { name: "APA 7th", usage: "Psychology, Education, Social Sciences", color: "#3b82f6" },
    { name: "MLA 9th", usage: "Literature, Arts, Humanities", color: "#8b5cf6" },
    { name: "Chicago 17th", usage: "History, Business, Fine Arts", color: "#ec4899" },
    { name: "Harvard", usage: "Physical Sciences, Social Sciences", color: "#22c55e" },
    { name: "IEEE", usage: "Engineering, Computer Science", color: "#f59e0b" },
    { name: "AMA 11th", usage: "Medical, Health Sciences", color: "#ef4444" }
  ];

  const templates = [
    { name: "Thesis Template", format: "Word", downloads: "2.3k" },
    { name: "Dissertation Template", format: "LaTeX", downloads: "1.8k" },
    { name: "Journal Manuscript", format: "Word", downloads: "3.1k" },
    { name: "Research Paper", format: "Google Docs", downloads: "4.2k" },
    { name: "Grant Proposal", format: "PDF", downloads: "1.5k" },
    { name: "Book Chapter", format: "Word", downloads: "0.9k" }
  ];

  const formattingFeatures = [
    { icon: <Type size={20} />, title: "Typography", desc: "Correct font families, sizes, and styles for all text elements." },
    { icon: <AlignLeft size={20} />, title: "Margins & Layout", desc: "Perfect margins, indentation, and text alignment." },
    { icon: <Hash size={20} />, title: "Page Numbering", desc: "Consistent headers, footers, and page numbers." },
    { icon: <List size={20} />, title: "Table of Contents", desc: "Auto‑generated TOC with correct hierarchy." },
    { icon: <FileCheck size={20} />, title: "Citations & References", desc: "Properly formatted citations and bibliography." },
    { icon: <Table size={20} />, title: "Figures & Tables", desc: "Numbering, captions, and placement of visuals." },
    { icon: <Columns size={20} />, title: "Multi‑Column Layout", desc: "Formatting for two‑column or multi‑column documents." },
    { icon: <PanelTop size={20} />, title: "Front Matter", desc: "Title pages, abstracts, acknowledgements, and more." }
  ];

  const whyChoose = [
    { icon: <Award size={22} />, title: "100% Error‑Free", desc: "Every document is triple‑checked against the official style guide." },
    { icon: <Clock size={22} />, title: "24‑48 Hour Delivery", desc: "Most formatting jobs are completed within 24‑48 hours." },
    { icon: <Users size={22} />, title: "One Expert Per Project", desc: "Your document is handled by a single specialist from start to finish." },
    { icon: <Zap size={22} />, title: "Human + AI Review", desc: "Smart tools catch the basics; humans ensure perfection." },
    { icon: <Shield size={22} />, title: "100% Confidential", desc: "Your research data is never shared or stored after delivery." },
    { icon: <Star size={22} />, title: "Free Re‑formatting", desc: "If changes are requested, we re‑format at no extra cost." }
  ];

  const faqs = [
    { q: "Which style guides do you support?", a: "We support all major academic styles: APA, MLA, Chicago, Harvard, IEEE, AMA, ACS, and many more." },
    { q: "How long does formatting take?", a: "Most documents are completed within 24–48 hours. Rush options are available." },
    { q: "What file formats do you accept?", a: "We accept Word (.docx), LaTeX (.tex), Google Docs, PDF, and plain text." },
    { q: "Can you convert between styles?", a: "Yes. We can reformat your entire document from one style to another." },
    { q: "Do you format tables and figures?", a: "Yes. All tables, figures, and captions are correctly numbered and positioned." },
    { q: "Is there a free sample?", a: "Yes! We offer a free formatting check of your first 3 pages." }
  ];

  const fileFormats = [
    { name: "Microsoft Word", icon: <FileText size={16} /> },
    { name: "LaTeX", icon: <FileCode size={16} /> },
    { name: "Google Docs", icon: <FileSpreadsheet size={16} /> },
    { name: "PDF", icon: <FileImage size={16} /> },
    { name: "Plain Text", icon: <FileText size={16} /> },
    { name: "Rich Text", icon: <FileText size={16} /> }
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Academic Formatting Services | APA, MLA, Chicago, IEEE & More"
        description="Professional academic formatting for theses, dissertations, and journal manuscripts. 100% compliance with APA, MLA, Chicago, IEEE, Harvard, and AMA."
        path="/services/academic-formatting"
      />

      <Navbar activeNav="services" />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* ========== SECTION 1: HERO ========== */}
        <motion.section
          className={styles.hero}
          style={{ y: heroParallax }}
        >
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <motion.div
                className={styles.heroLeft}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className={styles.heroBadge}
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                >
                  <Sparkles size={14} />
                  <span>Perfect Formatting, Every Time</span>
                </motion.div>

                <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }}>
                  Academic Formatting & Style Guide Compliance
                </motion.h1>

                <motion.div
                  className={styles.heroTypewriter}
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                >
                  <h2>{typedHeadline}<span className={styles.caret}>|</span></h2>
                </motion.div>

                <motion.p
                  className={styles.heroDesc}
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                >
                  Get your document perfectly formatted to meet any style guide.
                  We handle APA, MLA, Chicago, IEEE, Harvard, and more — so you can focus on your research.
                </motion.p>

                <motion.div
                  className={styles.heroStats}
                  variants={staggerContainer}
                >
                  {[
                    { value: "5,000+", label: "Documents Formatted" },
                    { value: "99.7%", label: "Compliance Rate" },
                    { value: "24h", label: "Average Turnaround" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className={styles.heroStat}
                      variants={scaleIn}
                      transition={{ ...springTransition, delay: i * 0.1 }}
                    >
                      <span className={styles.heroStatValue}>
                        <AnimatedStat value={stat.value.replace(/[^0-9.]/g, "")} suffix={stat.value.replace(/[0-9.]/g, "")} />
                      </span>
                      <span className={styles.heroStatLabel}>{stat.label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className={styles.heroButtons}
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                >
                  <motion.a
                    href="#contact"
                    className={styles.btnPrimary}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Free Sample Formatting
                    <ArrowRight size={18} />
                  </motion.a>
                  <motion.a
                    href="#templates"
                    className={styles.btnSecondary}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Browse Templates
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                className={styles.heroRight}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <div className={styles.styleSelector}>
                  <div className={styles.styleSelectorHeader}>
                    <span className={styles.styleSelectorLabel}>Select Your Style Guide</span>
                    <span className={styles.styleSelectorStatus}>✓ Ready</span>
                  </div>
                  <div className={styles.styleSelectorBody}>
                    {styleGuides.slice(0, 4).map((guide, i) => (
                      <motion.div
                        key={i}
                        className={styles.styleSelectorItem}
                        whileHover={{ x: 6, scale: 1.02 }}
                        transition={springTransition}
                      >
                        <span
                          className={styles.styleSelectorDot}
                          style={{ backgroundColor: guide.color }}
                        />
                        <span className={styles.styleSelectorName}>{guide.name}</span>
                        <span className={styles.styleSelectorUsage}>{guide.usage.split(",")[0]}</span>
                        <CheckCircle size={14} className={styles.styleSelectorCheck} />
                      </motion.div>
                    ))}
                  </div>
                  <div className={styles.styleSelectorFooter}>
                    <span className={styles.styleSelectorCount}>6+ style guides supported</span>
                    <span className={styles.styleSelectorMore}>+ More available</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========== SECTION 2: STYLE GUIDES GALLERY ========== */}
        <motion.section
          className={`${styles.section} ${styles.sectionAlt}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>We Format for Every Major Style Guide</h2>
              <p>Your document — perfectly formatted to match your university or journal's exact requirements.</p>
            </motion.div>

            <motion.div className={styles.styleGallery} variants={staggerContainer}>
              {styleGuides.map((guide, i) => (
                <motion.div
                  key={i}
                  className={styles.styleGalleryItem}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.05 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div
                    className={styles.styleGalleryDot}
                    style={{ backgroundColor: guide.color }}
                  />
                  <h3>{guide.name}</h3>
                  <p>{guide.usage}</p>
                  <div className={styles.styleGalleryBadge}>100% compliant</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION 3: BEFORE & AFTER COMPARISON ========== */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>See the Difference</h2>
              <p>Raw manuscript vs. professionally formatted document — side by side.</p>
            </motion.div>

            <motion.div className={styles.comparison} variants={staggerContainer}>
              <motion.div className={styles.comparisonBefore} variants={zoomIn}>
                <div className={styles.comparisonLabel}>
                  <span className={styles.comparisonBadge}>BEFORE</span>
                  <span className={styles.comparisonError}>❌</span>
                </div>
                <div className={styles.comparisonContent}>
                  <div className={styles.comparisonLine}>This is a sample paragraph with <span className={styles.comparisonWrong}>wrong</span> formatting.</div>
                  <div className={styles.comparisonLine}>- Inconsistent margins</div>
                  <div className={styles.comparisonLine}>- Wrong font size</div>
                  <div className={styles.comparisonLine}>- Missing page numbers</div>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.comparisonAfter}`}
                variants={zoomIn}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.comparisonLabel}>
                  <span className={styles.comparisonBadge}>AFTER</span>
                  <span className={styles.comparisonSuccess}>✅</span>
                </div>
                <div className={styles.comparisonContent}>
                  <div className={styles.comparisonLine}>This is a sample paragraph with <span className={styles.comparisonCorrect}>correct</span> formatting.</div>
                  <div className={styles.comparisonLine}>- Perfect margins</div>
                  <div className={styles.comparisonLine}>- Correct font size</div>
                  <div className={styles.comparisonLine}>- Page numbers added</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION 4: FORMATTING FEATURES ========== */}
        <motion.section
          className={`${styles.section} ${styles.sectionAlt}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Everything We Format</h2>
              <p>From fonts to citations — we handle every detail of your document.</p>
            </motion.div>

            <motion.div className={styles.featuresGrid} variants={staggerContainer}>
              {formattingFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  className={styles.featureCard}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: i * 0.04 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION 5: TEMPLATES ========== */}
        <motion.section
          id="templates"
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Download Pre‑Formatted Templates</h2>
              <p>Start your writing with a perfectly formatted template — already set up for your style guide.</p>
            </motion.div>

            <motion.div className={styles.templatesGrid} variants={staggerContainer}>
              {templates.map((template, i) => (
                <motion.div
                  key={i}
                  className={styles.templateCard}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.04 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className={styles.templateIcon}>
                    <FileText size={24} />
                  </div>
                  <div className={styles.templateInfo}>
                    <h4>{template.name}</h4>
                    <span>{template.format}</span>
                    <span className={styles.templateDownloads}>📥 {template.downloads} downloads</span>
                  </div>
                  <button className={styles.templateBtn}>
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION 6: FILE FORMATS ========== */}
        <motion.section
          className={`${styles.section} ${styles.sectionAlt}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>We Work With Any File Format</h2>
              <p>Send us your document as is — we handle the rest.</p>
            </motion.div>

            <motion.div className={styles.formatsGrid} variants={staggerContainer}>
              {fileFormats.map((format, i) => (
                <motion.div
                  key={i}
                  className={styles.formatItem}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.04 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                >
                  {format.icon}
                  <span>{format.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION 7: WHY CHOOSE ========== */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Why Researchers Choose Us</h2>
              <p>We deliver perfection, every time.</p>
            </motion.div>

            <motion.div className={styles.whyGrid} variants={staggerContainer}>
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.whyCard}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className={styles.whyIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION 8: PROCESS ========== */}
        <motion.section
          id="process"
          className={`${styles.section} ${styles.sectionAlt}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>How It Works</h2>
              <p>Four simple steps to a perfectly formatted document.</p>
            </motion.div>

            <motion.div className={styles.process} variants={staggerContainer}>
              {[
                { num: "01", title: "Upload Your Document", desc: "Send us your file and tell us which style guide you need." },
                { num: "02", title: "We Scan & Analyze", desc: "Our system detects formatting issues and creates a correction plan." },
                { num: "03", title: "Expert Formatting", desc: "A specialist applies all changes with meticulous attention." },
                { num: "04", title: "Final Review & Delivery", desc: "We double‑check everything and deliver your perfect document." }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  className={styles.processStep}
                  variants={i % 2 === 0 ? slideLeft : slideRight}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                >
                  <motion.div
                    className={styles.processNum}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...springTransition, delay: i * 0.12 + 0.15 }}
                  >
                    {step.num}
                  </motion.div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION 9: FAQ ========== */}
        <motion.section
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Frequently Asked Questions</h2>
              <p>Quick answers about our formatting services.</p>
            </motion.div>

            <motion.div className={styles.faqGrid} variants={staggerContainer}>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={styles.faqItem}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.04 }}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(i)}
                  >
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
                        className={styles.faqAnswer}
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION 10: CONTACT ========== */}
        <motion.section
          id="contact"
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          ref={formRef}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.ctaBox}
              variants={scaleIn}
              transition={{ ...springTransition, delay: 0.1 }}
            >
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
                    <p>We've received your formatting request. A specialist will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.h2 variants={fadeUp} initial="hidden" animate="visible">
                      Get Your Document Formatted Perfectly
                    </motion.h2>
                    <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.05 }}>
                      Request a free formatting sample and quote — no obligation.
                    </motion.p>

                    {error && (
                      <motion.div
                        className={styles.errorMessage}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p>{error}</p>
                      </motion.div>
                    )}

                    <motion.form
                      onSubmit={handleSubmit}
                      className={styles.contactForm}
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div className={styles.formRow} variants={fadeUp}>
                        <div className={styles.formGroup}>
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name *"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address *"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </motion.div>

                      <motion.div className={styles.formRow} variants={fadeUp}>
                        <div className={styles.formGroup}>
                          <select
                            name="documentType"
                            required
                            value={formData.documentType}
                            onChange={handleChange}
                          >
                            <option value="">Document Type *</option>
                            <option value="thesis">Thesis</option>
                            <option value="dissertation">Dissertation</option>
                            <option value="journal">Journal Manuscript</option>
                            <option value="research">Research Paper</option>
                            <option value="grant">Grant Proposal</option>
                            <option value="book">Book Chapter</option>
                          </select>
                        </div>
                        <div className={styles.formGroup}>
                          <select
                            name="styleGuide"
                            required
                            value={formData.styleGuide}
                            onChange={handleChange}
                          >
                            <option value="">Style Guide *</option>
                            <option value="apa">APA 7th</option>
                            <option value="mla">MLA 9th</option>
                            <option value="chicago">Chicago 17th</option>
                            <option value="harvard">Harvard</option>
                            <option value="ieee">IEEE</option>
                            <option value="ama">AMA 11th</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </motion.div>

                      <motion.div className={styles.formGroup} variants={fadeUp}>
                        <textarea
                          name="details"
                          placeholder="Tell us about your document – field of study, word count, any specific requirements..."
                          rows={5}
                          required
                          value={formData.details}
                          onChange={handleChange}
                        />
                      </motion.div>

                      <motion.button
                        type="submit"
                        className={styles.btnPrimary}
                        disabled={loading}
                        variants={fadeUp}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {loading ? (
                          <><Loader2 className={styles.spinner} size={18} /> Processing...</>
                        ) : (
                          <>Get Free Formatting Sample <Send size={16} /></>
                        )}
                      </motion.button>

                      <motion.p className={styles.privacyNote} variants={fadeUp}>
                        Your document stays confidential. We never share your data.
                      </motion.p>
                    </motion.form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}