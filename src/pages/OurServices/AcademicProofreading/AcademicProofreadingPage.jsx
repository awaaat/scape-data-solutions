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
  FolderOpen, ExternalLink, Globe, GitBranch, Lightbulb, BarChart3,
  Search, Scan, Highlighter, Eraser, Check, X, PenLine, MousePointer,
  BookMarked, GraduationCap, Target, TrendingUp, Layers, ArrowRightCircle,
  SpellCheck, Pencil, AlignJustify, Library, Quote, Clock4, Hourglass,
  Rocket, Eye as EyeIcon, Filter, BookA, ScrollText, User
} from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./AcademicProofreadingPage.module.css";
import SEO from "../../../components/SEO/SEO";
import { apiService } from "../../../services/api";

// ========== TYPEWRITER HOOK ==========
const ROTATING_WORDS = [
  "Grammar & Spelling",
  "Punctuation & Syntax",
  "Style Consistency",
  "Logical Flow",
  "Clarity & Readability"
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
export default function AcademicProofreadingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "", email: "", documentType: "", wordCount: "", details: ""
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
        service: `Academic Proofreading - ${formData.documentType || 'General'}`,
        message: `Document Type: ${formData.documentType}\nWord Count: ${formData.wordCount}\nDetails: ${formData.details}`,
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
  const errorTypes = [
    { name: "Spelling", count: "1,200+", icon: <SpellCheck size={18} />, color: "#3b82f6" },
    { name: "Grammar", count: "800+", icon: <PenLine size={18} />, color: "#8b5cf6" },
    { name: "Punctuation", count: "600+", icon: <Type size={18} />, color: "#ec4899" },
    { name: "Style", count: "400+", icon: <AlignJustify size={18} />, color: "#f59e0b" }
  ];

  const proofreadingChecks = [
    { icon: <SpellCheck size={22} />, title: "Spelling & Grammar", desc: "Every word checked for correct spelling and grammatical accuracy." },
    { icon: <Pencil size={22} />, title: "Punctuation & Syntax", desc: "Commas, periods, semicolons, and sentence structure reviewed." },
    { icon: <AlignJustify size={22} />, title: "Style Consistency", desc: "Consistent tone, voice, and academic style throughout." },
    { icon: <ArrowRightCircle size={22} />, title: "Logical Flow", desc: "Transitions and paragraph connections made smooth and clear." },
    { icon: <Scan size={22} />, title: "Clarity & Readability", desc: "Sentence structure simplified for better understanding." },
    { icon: <Layout size={22} />, title: "Formatting Check", desc: "Headings, fonts, and layout reviewed for consistency." }
  ];

  const proofreaders = [
    { name: "Dr. Sarah Chen", field: "Molecular Biology", experience: "12 years" },
    { name: "Dr. James Okafor", field: "Political Science", experience: "9 years" },
    { name: "Prof. Emma Walsh", field: "English Literature", experience: "15 years" }
  ];

  const whyChoose = [
    { icon: <Award size={22} />, title: "Human + AI Precision", desc: "Smart tools flag potential errors; human experts make the final call." },
    { icon: <Clock size={22} />, title: "Fast Turnaround", desc: "Most proofreading completed within 24-48 hours." },
    { icon: <Users size={22} />, title: "Subject‑Matter Experts", desc: "Proofreaders with background in your field of study." },
    { icon: <Shield size={22} />, title: "Confidentiality Guaranteed", desc: "Your work stays private and secure." },
    { icon: <Zap size={22} />, title: "2‑Pass Review", desc: "Every document is proofread twice for maximum accuracy." },
    { icon: <Star size={22} />, title: "Satisfaction Guaranteed", desc: "We re‑proofread if you're not 100% satisfied." }
  ];

  const faqs = [
    { q: "What's the difference between proofreading and editing?", a: "Proofreading focuses on surface errors like spelling, grammar, and punctuation. Editing addresses structure, argument flow, and content organization." },
    { q: "How long does proofreading take?", a: "Most documents are proofread within 24-48 hours. Rush options are available." },
    { q: "What file formats do you accept?", a: "We accept Word (.docx), Google Docs, PDF, and LaTeX files." },
    { q: "Do you proofread citations?", a: "Yes. We check formatting consistency of in‑text citations and bibliography entries." },
    { q: "Will you change my meaning?", a: "No. We only correct errors and improve clarity. Your argument and voice remain intact." },
    { q: "Is there a free sample?", a: "Yes! We offer a free proofreading sample of your first 2 pages." }
  ];

  const turnaroundOptions = [
    { label: "Standard", time: "48 hours", icon: <Clock size={20} />, desc: "Best for most documents" },
    { label: "Express", time: "24 hours", icon: <Rocket size={20} />, desc: "Most popular" },
    { label: "Rush", time: "12 hours", icon: <Zap size={20} />, desc: "Emergency deadline" }
  ];

  const processSteps = [
    { num: "01", title: "Upload Your Document", desc: "Submit your file and tell us about your field of study." },
    { num: "02", title: "Initial Scan", desc: "Our system detects potential errors and flags them for review." },
    { num: "03", title: "Expert Proofread", desc: "A specialist proofreader reviews and corrects every error." },
    { num: "04", title: "Final Review & Delivery", desc: "A second proofreader checks the document before delivery." }
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Academic Proofreading Services | Grammar, Spelling & Style Check"
        description="Professional academic proofreading for theses, dissertations, and research papers. Eliminate errors in grammar, spelling, punctuation, and style with our expert proofreaders."
        path="/services/academic-proofreading"
      />

      <Navbar activeNav="services" />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        {/* ========== HERO: VISUAL LEFT, CONTENT RIGHT ========== */}
        <motion.section
          className={styles.hero}
          style={{ y: heroParallax }}
        >
          <div className={styles.container}>
            <div className={styles.heroInner}>

              {/* Hero Visual - Left */}
              <motion.div
                className={styles.heroVisual}
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <div className={styles.proofreadDemo}>
                  <div className={styles.demoHeader}>
                    <span className={styles.demoBadge}>Live Proofreading</span>
                    <div className={styles.demoDots}>
                      <span className={styles.demoDot} style={{ background: "#ef4444" }} />
                      <span className={styles.demoDot} style={{ background: "#f59e0b" }} />
                      <span className={styles.demoDot} style={{ background: "#22c55e" }} />
                    </div>
                  </div>
                  <div className={styles.demoBody}>
                    <div className={styles.demoLine}>
                      <span className={styles.demoLabel}>L12</span>
                      <span className={styles.demoText}>The study <span className={styles.demoError}>examine</span> the relationship between...</span>
                      <span className={styles.demoCorrection}>examines</span>
                    </div>
                    <div className={styles.demoLine}>
                      <span className={styles.demoLabel}>L13</span>
                      <span className={styles.demoText}>Our findings indicate a <span className={styles.demoError}>clearer</span> pattern of...</span>
                      <span className={styles.demoCorrection}>clear</span>
                    </div>
                    <div className={styles.demoLine}>
                      <span className={styles.demoLabel}>L14</span>
                      <span className={styles.demoText}>These results are consistent with <span className={styles.demoError}>previous work</span>.</span>
                      <span className={styles.demoCorrection}>prior research</span>
                    </div>
                    <div className={styles.demoLine}>
                      <span className={styles.demoLabel}>L15</span>
                      <span className={styles.demoText}>However, <span className={styles.demoError}>further investigation</span> is required...</span>
                      <span className={styles.demoCorrection}>additional investigation</span>
                    </div>
                    <motion.div
                      className={styles.demoCursor}
                      animate={{ x: [0, 300, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <div className={styles.demoFooter}>
                    <span className={styles.demoStats}>🔍 12 errors found</span>
                    <span className={styles.demoStats}>✏️ 8 corrections made</span>
                    <span className={styles.demoStats}>⏱️ Real‑time</span>
                  </div>
                </div>
              </motion.div>

              {/* Hero Content - Right */}
              <motion.div
                className={styles.heroContent}
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
                  <span>Error‑Free Academic Writing</span>
                </motion.div>

                <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }}>
                  Academic Proofreading & Error Elimination
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
                  Eliminate every spelling, grammar, punctuation, and style error from your academic work.
                  Our expert proofreaders ensure your document is polished, professional, and error‑free.
                </motion.p>

                <motion.div
                  className={styles.heroStats}
                  variants={staggerContainer}
                >
                  {[
                    { value: "15,000+", label: "Documents Proofread" },
                    { value: "99.9%", label: "Accuracy Rate" },
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
                    Free Proofreading Sample
                    <ArrowRight size={18} />
                  </motion.a>
                  <motion.a
                    href="#checks"
                    className={styles.btnSecondary}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    What We Check
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========== SECTION: ERROR TYPES COUNTER ========== */}
        <motion.section
          className={styles.errorSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.errorHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>What We Catch</h2>
              <p>Our proofreaders identify and correct thousands of common academic writing errors.</p>
            </motion.div>

            <motion.div className={styles.errorGrid} variants={staggerContainer}>
              {errorTypes.map((error, i) => (
                <motion.div
                  key={i}
                  className={styles.errorCard}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                >
                  <div className={styles.errorIcon} style={{ background: `${error.color}15`, color: error.color }}>
                    {error.icon}
                  </div>
                  <div className={styles.errorInfo}>
                    <span className={styles.errorName}>{error.name}</span>
                    <span className={styles.errorCount}>{error.count}</span>
                    <span className={styles.errorLabel}>errors corrected</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: BEFORE & AFTER ========== */}
        <motion.section
          className={styles.beforeAfterSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.beforeAfterHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Before & After Proofreading</h2>
              <p>See the difference a professional proofreader makes to your academic writing.</p>
            </motion.div>

            <motion.div className={styles.beforeAfter} variants={staggerContainer}>
              <motion.div className={styles.beforeColumn} variants={zoomIn}>
                <div className={styles.beforeAfterLabel}>
                  <X size={18} />
                  <span>Before</span>
                  <span className={styles.beforeAfterErrors}>12 errors</span>
                </div>
                <div className={styles.beforeAfterContent}>
                  <p className={styles.beforeAfterLine}>The study examine the relationship between variables.</p>
                  <p className={styles.beforeAfterLine}>Our findings indicate a clearer pattern of results.</p>
                  <p className={styles.beforeAfterLine}>These results are consistent with previous work.</p>
                  <p className={styles.beforeAfterLine}>However, further investigation is required to...</p>
                </div>
              </motion.div>

              <motion.div
                className={styles.afterColumn}
                variants={zoomIn}
                transition={{ delay: 0.2 }}
              >
                <div className={styles.beforeAfterLabel}>
                  <Check size={18} />
                  <span>After</span>
                  <span className={styles.beforeAfterClean}>0 errors</span>
                </div>
                <div className={styles.beforeAfterContent}>
                  <p className={styles.beforeAfterLine}>The study <span className={styles.highlight}>examines</span> the relationship between variables.</p>
                  <p className={styles.beforeAfterLine}>Our findings indicate a <span className={styles.highlight}>clear</span> pattern of results.</p>
                  <p className={styles.beforeAfterLine}>These results are consistent with <span className={styles.highlight}>prior research</span>.</p>
                  <p className={styles.beforeAfterLine}>However, <span className={styles.highlight}>additional investigation</span> is required to...</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: PROOFREADING CHECKS ========== */}
        <motion.section
          id="checks"
          className={styles.checksSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.checksHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Every Detail Checked</h2>
              <p>A comprehensive proofreading process that leaves no stone unturned.</p>
            </motion.div>

            <motion.div className={styles.checksGrid} variants={staggerContainer}>
              {proofreadingChecks.map((check, i) => (
                <motion.div
                  key={i}
                  className={styles.checkCard}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className={styles.checkIcon}>{check.icon}</div>
                  <h3>{check.title}</h3>
                  <p>{check.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: TURNAROUND OPTIONS ========== */}
        <motion.section
          className={styles.turnaroundSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.turnaroundHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Choose Your Turnaround</h2>
              <p>Flexible options to match your deadline.</p>
            </motion.div>

            <motion.div className={styles.turnaroundGrid} variants={staggerContainer}>
              {turnaroundOptions.map((option, i) => (
                <motion.div
                  key={i}
                  className={styles.turnaroundCard}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className={styles.turnaroundIcon}>{option.icon}</div>
                  <h3>{option.label}</h3>
                  <span className={styles.turnaroundTime}>{option.time}</span>
                  <span className={styles.turnaroundDesc}>{option.desc}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: OUR PROOFREADERS ========== */}
        <motion.section
          className={styles.proofreadersSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.proofreadersHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Proofreading Team</h2>
              <p>Experienced academics who understand your field.</p>
            </motion.div>

            <motion.div className={styles.proofreadersGrid} variants={staggerContainer}>
              {proofreaders.map((proofreader, i) => (
                <motion.div
                  key={i}
                  className={styles.proofreaderCard}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className={styles.proofreaderAvatar}>
                    <User size={32} className={styles.proofreaderAvatarIcon} />
                    <span className={styles.proofreaderBadge}>✓</span>
                  </div>
                  <h3>{proofreader.name}</h3>
                  <p className={styles.proofreaderField}>{proofreader.field}</p>
                  <p className={styles.proofreaderExperience}>{proofreader.experience} experience</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: WHY CHOOSE ========== */}
        <motion.section
          className={styles.whySection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.whyHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Why Choose Our Proofreading Service</h2>
              <p>We combine human expertise with intelligent tools for flawless results.</p>
            </motion.div>

            <motion.div className={styles.whyGrid} variants={staggerContainer}>
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.whyCard}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className={styles.whyIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: PROCESS ========== */}
        <motion.section
          className={styles.processSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.processHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>How Proofreading Works</h2>
              <p>Four steps to a polished, error‑free document.</p>
            </motion.div>

            <motion.div className={styles.process} variants={staggerContainer}>
              {processSteps.map((step, i) => (
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

        {/* ========== SECTION: FAQ ========== */}
        <motion.section
          className={styles.faqSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.faqHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about our proofreading services.</p>
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

        {/* ========== SECTION: CONTACT ========== */}
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
                    <p>We've received your proofreading request. A specialist will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.h2 variants={fadeUp} initial="hidden" animate="visible">
                      Get Your Document Proofread
                    </motion.h2>
                    <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.05 }}>
                      Request a free proofreading sample and quote.
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
                          <input
                            type="text"
                            name="wordCount"
                            placeholder="Approximate Word Count *"
                            required
                            value={formData.wordCount}
                            onChange={handleChange}
                          />
                        </div>
                      </motion.div>

                      <motion.div className={styles.formGroup} variants={fadeUp}>
                        <textarea
                          name="details"
                          placeholder="Tell us about your document – field of study, any specific concerns, or areas you want us to focus on..."
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
                          <>Get Free Proofreading Sample <Send size={16} /></>
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