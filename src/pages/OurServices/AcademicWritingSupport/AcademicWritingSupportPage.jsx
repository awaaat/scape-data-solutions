import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, CheckCircle, Clock, Users, Award, Shield, Zap, Star,
  ChevronDown, Loader2, FileText, BookOpen, PenTool, Sparkles,
  Send, FileCheck, FileSpreadsheet, FileImage, FileCode,
  Download, Upload, RefreshCw, Table, List, AlignLeft,
  Type, Hash, Eye, EyeOff, Save, Printer, Layout,
  Columns, Rows, Grid, PanelTop, PanelBottom, Sidebar, FileUp,
  Folder, CheckSquare, Square, ThumbsUp, MessageSquare, UserCheck,
  FolderOpen, ExternalLink, Globe, GitBranch, Lightbulb, BarChart3,
  Search, Scan, Highlighter, Eraser, Check, X, PenLine, MousePointer,
  BookMarked, GraduationCap, Target, TrendingUp, Layers, ArrowRightCircle,
  SpellCheck, Pencil, AlignJustify, Library, Quote, Clock4, Hourglass,
  Rocket, Eye as EyeIcon, Filter, BookA, ScrollText, User, Briefcase,
  ClipboardList, Microscope, PieChart, GitMerge, Award as AwardIcon,
  BookOpenCheck, FilePenLine, Scroll, UsersRound, Crown, HeartHandshake,
  BadgeCheck, Gavel, Scale, Bookmark, FileCheck2, Sparkle, Flame, Workflow
} from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./AcademicWritingSupportPage.module.css";
import SEO from "../../../components/SEO/SEO";
import { apiService } from "../../../services/api";

// ========== TYPEWRITER HOOK ==========
const ROTATING_WORDS = [
  "Spelling Mistakes",
  "Grammar Errors",
  "Punctuation Issues",
  "Style Inconsistencies",
  "Clarity Problems"
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

const fadeDown = {
  hidden: { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
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

// ========== FLOATING ERROR BADGE ==========
function FloatingBadge({ text, color, delay, x, y, rotate }) {
  return (
    <motion.div
      className={styles.floatingBadge}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.9, y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
      style={{ left: x, top: y, transform: `rotate(${rotate}deg)` }}
    >
      <span className={styles.floatingBadgeDot} style={{ background: color }} />
      <span className={styles.floatingBadgeText}>{text}</span>
    </motion.div>
  );
}

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
      setError(err.message || "Failed to send. Please email info@academichelp.co");
    } finally {
      setLoading(false);
    }
  };

  // ===== UNIQUE DATA =====
  const commonErrors = [
    { icon: <SpellCheck size={22} />, title: "Spelling", example: "'examine' → 'examines'", color: "#3b82f6" },
    { icon: <PenLine size={22} />, title: "Grammar", example: "'They was' → 'They were'", color: "#8b5cf6" },
    { icon: <Type size={22} />, title: "Punctuation", example: "'its' → 'it's'", color: "#ec4899" },
    { icon: <AlignJustify size={22} />, title: "Style", example: "Inconsistent tone", color: "#f59e0b" }
  ];

  const proofreaders = [
    { name: "Dr. Sarah Mitchell", field: "English Literature", experience: "14 years", badge: "Senior" },
    { name: "Dr. James Chen", field: "History", experience: "10 years", badge: "Expert" },
    { name: "Prof. Emma Walsh", field: "Psychology", experience: "18 years", badge: "Lead" }
  ];

  const turnaroundOptions = [
    { label: "Standard", time: "48 hours", icon: <Clock size={20} />, desc: "Best value" },
    { label: "Express", time: "24 hours", icon: <Rocket size={20} />, desc: "Most popular" },
    { label: "Rush", time: "12 hours", icon: <Zap size={20} />, desc: "Emergency" }
  ];

  const whatWeDontChange = [
    { icon: <Scale size={18} />, text: "We don't rewrite your arguments" },
    { icon: <Bookmark size={18} />, text: "We don't change your research findings" },
    { icon: <Gavel size={18} />, text: "We don't alter your academic voice" },
    { icon: <Shield size={18} />, text: "We only fix errors, not meaning" }
  ];

  const whyNeedProofreading = [
    { icon: <EyeIcon size={20} />, title: "You've read it too many times", desc: "After 10+ revisions, you literally can't see your own typos anymore." },
    { icon: <Search size={20} />, title: "Reviewers notice everything", desc: "A single typo can distract from your research and reduce your credibility." },
    { icon: <Clock4 size={20} />, title: "Time is precious", desc: "You've spent months on your work. Protect it with one final polish." },
    { icon: <Star size={20} />, title: "First impressions matter", desc: "Your supervisor, examiner, or journal editor will read the first page carefully." }
  ];

  const faqs = [
    { q: "What's the difference between proofreading and editing?", a: "Proofreading fixes surface errors—spelling, grammar, punctuation, and consistency. Editing addresses structure, argument flow, and content organization." },
    { q: "Will you change my meaning?", a: "No. We only correct errors and improve clarity. Your argument, research, and voice remain exactly as you wrote them." },
    { q: "Do you proofread citations?", a: "Yes. We check formatting consistency of in‑text citations and bibliography entries." },
    { q: "How long does proofreading take?", a: "Standard is 48 hours. Express is 24 hours. Rush is 12 hours." },
    { q: "What file formats do you accept?", a: "We accept Word (.docx), Google Docs, PDF, and LaTeX files." },
    { q: "Is there a free sample?", a: "Yes! We offer a free proofreading sample of your first 2 pages." }
  ];

  const trustBadges = [
    { icon: <BadgeCheck size={24} />, label: "100% Satisfaction" },
    { icon: <Shield size={24} />, label: "Confidential" },
    { icon: <Users size={24} />, label: "PhD Experts" },
    { icon: <Zap size={24} />, label: "Fast Turnaround" }
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

        {/* ========== HERO: FLOATING BADGES (NO LEFT/RIGHT SPLIT) ========== */}
        <motion.section
          className={styles.hero}
          style={{ y: heroParallax }}
        >
          <div className={styles.container}>
            <div className={styles.heroCenter}>

              {/* Floating Badges */}
              <FloatingBadge text="typo" color="#ef4444" delay={0} x="8%" y="12%" rotate={-8} />
              <FloatingBadge text="grammar" color="#8b5cf6" delay={0.8} x="82%" y="18%" rotate={6} />
              <FloatingBadge text="punctuation" color="#ec4899" delay={1.6} x="5%" y="68%" rotate={5} />
              <FloatingBadge text="style" color="#f59e0b" delay={2.4} x="88%" y="72%" rotate={-6} />

              <motion.div
                className={styles.heroContent}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }}>
                  Write Smarter Today <br />
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
                  Professional proofreading for academic work. We catch spelling, grammar,
                  punctuation, and style errors so your work is polished and ready for submission.
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
                    href="#errors"
                    className={styles.btnSecondary}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Common Errors
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========== SECTION: ERRORS WE ELIMINATE ========== */}
        <motion.section
          id="errors"
          className={styles.errorsSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.errorsHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>What We Catch</h2>
              <p>Every document contains more errors than you think. We catch them all.</p>
            </motion.div>

            <motion.div className={styles.errorsGrid} variants={staggerContainer}>
              {commonErrors.map((error, i) => (
                <motion.div
                  key={i}
                  className={styles.errorCard}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                >
                  <div className={styles.errorIcon} style={{ color: error.color }}>
                    {error.icon}
                  </div>
                  <div className={styles.errorInfo}>
                    <h4>{error.title}</h4>
                    <span className={styles.errorExample}>{error.example}</span>
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
              <p>See exactly what we fix.</p>
            </motion.div>

            <motion.div className={styles.beforeAfter} variants={staggerContainer}>
              <motion.div className={styles.beforeColumn} variants={zoomIn}>
                <div className={styles.beforeAfterLabel}>
                  <X size={18} />
                  <span>Before</span>
                  <span className={styles.beforeAfterCount}>12 errors</span>
                </div>
                <div className={styles.beforeAfterContent}>
                  <p className={styles.beforeAfterLine}>The study <span className={styles.errorHighlight}>examine</span> the relationship between variables.</p>
                  <p className={styles.beforeAfterLine}>Our findings indicate a <span className={styles.errorHighlight}>clearer</span> pattern of results.</p>
                  <p className={styles.beforeAfterLine}>These results are consistent with <span className={styles.errorHighlight}>previous work</span>.</p>
                  <p className={styles.beforeAfterLine}>However, <span className={styles.errorHighlight}>further investigation</span> is required...</p>
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
                  <p className={styles.beforeAfterLine}>The study <span className={styles.correctHighlight}>examines</span> the relationship between variables.</p>
                  <p className={styles.beforeAfterLine}>Our findings indicate a <span className={styles.correctHighlight}>clear</span> pattern of results.</p>
                  <p className={styles.beforeAfterLine}>These results are consistent with <span className={styles.correctHighlight}>prior research</span>.</p>
                  <p className={styles.beforeAfterLine}>However, <span className={styles.correctHighlight}>additional investigation</span> is required...</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: OUR PROOFREADERS ========== */}
        <motion.section
          className={styles.teamSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.teamHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Your Work, Reviewed by Experts</h2>
              <p>Experienced academics who understand your field.</p>
            </motion.div>

            <motion.div className={styles.teamGrid} variants={staggerContainer}>
              {proofreaders.map((p, i) => (
                <motion.div
                  key={i}
                  className={styles.teamCard}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className={styles.teamAvatar}>
                    <User size={32} className={styles.teamAvatarIcon} />
                    <span className={styles.teamBadge}>{p.badge}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p className={styles.teamField}>{p.field}</p>
                  <p className={styles.teamExperience}>{p.experience} experience</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: TURNAROUND TIMES ========== */}
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

        {/* ========== SECTION: WHAT WE DON'T CHANGE ========== */}
        <motion.section
          className={styles.boundarySection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.boundaryHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>What We Don't Change</h2>
              <p>We respect your work. We only fix errors, not meaning.</p>
            </motion.div>

            <motion.div className={styles.boundaryGrid} variants={staggerContainer}>
              {whatWeDontChange.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.boundaryItem}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.06 }}
                  whileHover={{ x: 6 }}
                >
                  <span className={styles.boundaryIcon}>{item.icon}</span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: WHY YOU NEED PROOFREADING ========== */}
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
              <h2>Why Your Work Needs a Final Polish</h2>
              <p>Four reasons even the best writers need proofreading.</p>
            </motion.div>

            <motion.div className={styles.whyGrid} variants={staggerContainer}>
              {whyNeedProofreading.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.whyCard}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <div className={styles.whyIcon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: QUALITY GUARANTEE ========== */}
        <motion.section
          className={styles.guaranteeSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.guaranteeBox}
              variants={scaleIn}
              transition={{ ...springTransition, delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className={styles.guaranteeIcon}>
                <BadgeCheck size={48} />
              </div>
              <h2>100% Satisfaction Guarantee</h2>
              <p>Not completely satisfied? We'll proofread your entire document again at no extra cost.</p>
              <div className={styles.guaranteeBadges}>
                {trustBadges.map((badge, i) => (
                  <span key={i} className={styles.guaranteeBadge}>
                    {badge.icon}
                    {badge.label}
                  </span>
                ))}
              </div>
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
              <p>Everything you need to know about proofreading.</p>
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
                          placeholder="Tell us about your document – field of study, any specific concerns..."
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