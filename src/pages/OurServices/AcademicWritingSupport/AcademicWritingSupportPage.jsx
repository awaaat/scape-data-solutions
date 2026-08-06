import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, CheckCircle, Clock, Users, Award, Shield, Zap, Star,
  ChevronDown, Loader2, FileText, BookOpen, PenTool, Sparkles,
  Send, Search, Check, X, PenLine, AlignJustify,
  BookMarked, GraduationCap, Target, TrendingUp, Layers, ArrowRightCircle,
  SpellCheck, Pencil, Quote, Clock4, Rocket, Eye as EyeIcon,
  Scroll, Crown, HeartHandshake, BadgeCheck, Gavel, Scale, Bookmark,
  Lightbulb, Compass, ListChecks, Link2, LineChart, MessagesSquare,
  BookText, Milestone, GitCompare, AlertTriangle, Puzzle, Scale3d,
  ListOrdered, Tags, MinusCircle, Asterisk, Brackets, Type as TypeIcon,
  Microscope, Filter, Database, ScanSearch, BarChart3, PieChart,
  Table as TableIcon, ArrowUpRight, Library, GraduationCap as GradIcon,
  FileSearch, ScrollText, NotebookPen, FlaskConical, Presentation
} from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./AcademicWritingSupportPage.module.css";
import SEO from "../../../components/SEO/SEO";
import { apiService } from "../../../services/api";

// ========== TYPEWRITER HOOK ==========
const ROTATING_WORDS = [
  "Task Analysis to Final Draft",
  "Structure and Argument Flow",
  "Citations Done Right",
  "Grammar and Sentence Clarity",
  "Feedback That Actually Helps"
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

// ========== FLOATING BADGE ==========
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

// ========== CUSTOM SVG ILLUSTRATIONS ==========
// Hand-drawn style line illustrations, using CSS variables so they
// adapt automatically to dark mode.

function DocumentIllustration() {
  return (
    <svg viewBox="0 0 320 320" className={styles.illustrationSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="30" width="150" height="200" rx="10" className={styles.illoCard} strokeWidth="2.5" />
      <line x1="92" y1="70" x2="198" y2="70" className={styles.illoLine} strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="92" x2="198" y2="92" className={styles.illoLine} strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="114" x2="170" y2="114" className={styles.illoLine} strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="150" x2="198" y2="150" className={styles.illoLineFaint} strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="172" x2="198" y2="172" className={styles.illoLineFaint} strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="194" x2="150" y2="194" className={styles.illoLineFaint} strokeWidth="3" strokeLinecap="round" />
      <circle cx="228" cy="196" r="34" className={styles.illoAccentCircle} strokeWidth="3" />
      <path d="M212 196 L224 208 L246 182" className={styles.illoAccentStroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M56 230 Q80 250 110 244" className={styles.illoLineFaint} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M100 260 L108 246 L118 258" className={styles.illoLineFaint} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MagnifierIllustration() {
  return (
    <svg viewBox="0 0 200 200" className={styles.illustrationSvgSmall} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="86" cy="86" r="52" className={styles.illoCard} strokeWidth="4" />
      <line x1="124" y1="124" x2="164" y2="164" className={styles.illoAccentStroke} strokeWidth="8" strokeLinecap="round" />
      <line x1="66" y1="76" x2="106" y2="76" className={styles.illoLineFaint} strokeWidth="3" strokeLinecap="round" />
      <line x1="66" y1="96" x2="98" y2="96" className={styles.illoLineFaint} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ChartIllustration() {
  return (
    <svg viewBox="0 0 220 160" className={styles.illustrationSvgSmall} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="16" x2="30" y2="134" className={styles.illoLineFaint} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="30" y1="134" x2="200" y2="134" className={styles.illoLineFaint} strokeWidth="2.5" strokeLinecap="round" />
      <rect x="48" y="90" width="22" height="44" rx="3" className={styles.illoBarSoft} />
      <rect x="86" y="64" width="22" height="70" rx="3" className={styles.illoBarSoft} />
      <rect x="124" y="102" width="22" height="32" rx="3" className={styles.illoBarSoft} />
      <polyline points="52,80 90,50 128,90 166,34" className={styles.illoAccentStroke} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="166" cy="34" r="5" className={styles.illoDot} />
    </svg>
  );
}

function BookIllustration() {
  return (
    <svg viewBox="0 0 200 160" className={styles.illustrationSvgSmall} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 30 Q60 14 100 30 L100 140 Q60 124 20 140 Z" className={styles.illoCard} strokeWidth="3" strokeLinejoin="round" />
      <path d="M180 30 Q140 14 100 30 L100 140 Q140 124 180 140 Z" className={styles.illoCard} strokeWidth="3" strokeLinejoin="round" />
      <line x1="34" y1="54" x2="86" y2="46" className={styles.illoLineFaint} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="34" y1="74" x2="86" y2="66" className={styles.illoLineFaint} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="114" y1="46" x2="166" y2="54" className={styles.illoLineFaint} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="114" y1="66" x2="166" y2="74" className={styles.illoLineFaint} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CompassIllustration() {
  return (
    <svg viewBox="0 0 180 180" className={styles.illustrationSvgSmall} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="90" cy="90" r="66" className={styles.illoCard} strokeWidth="3" />
      <circle cx="90" cy="90" r="6" className={styles.illoDot} />
      <path d="M90 90 L112 46 L100 90 Z" className={styles.illoAccentFill} />
      <path d="M90 90 L68 134 L80 90 Z" className={styles.illoLineFaint} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

// ========== MAIN COMPONENT ==========
export default function AcademicWritingSupportPage() {
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
        service: `Academic Writing Support - ${formData.documentType || 'General'}`,
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

  // ===== CONTENT DATA =====

  const writingProcess = [
    { num: "01", title: "Task Analysis", desc: "We start by making sure the brief is fully understood, what the assignment is really asking for, before a single word gets written." },
    { num: "02", title: "Brainstorming and Research", desc: "Generating and testing ideas, then backing them with credible primary and secondary sources so your argument has real footing." },
    { num: "03", title: "Planning and Thesis", desc: "A clear plan and a strong thesis statement that keeps every paragraph pulling toward one central point." },
    { num: "04", title: "Drafting", desc: "Turning the plan into a full draft, with structure and evidence placement handled so the argument reads logically from start to finish." },
    { num: "05", title: "Reviewing and Editing", desc: "A systematic pass for structure, flow, and clarity, the cyclical review every strong piece of writing goes through." },
    { num: "06", title: "Feedback", desc: "Specific, actionable feedback on what is working and what to change, so your next draft is measurably stronger." }
  ];

  const coreSkills = [
    { icon: <Compass size={22} />, title: "Research and Source Evaluation", desc: "Finding, evaluating, and using primary and secondary sources that actually strengthen your argument instead of padding your reference list." },
    { icon: <Link2 size={22} />, title: "Cohesion and Flow", desc: "The connective tissue of good writing: reference, linking adverbials, and lexical chains that keep ideas tracking logically from sentence to sentence." },
    { icon: <ListChecks size={22} />, title: "Paragraph and Text Structure", desc: "Topic sentences, supporting detail, and recognised text patterns such as cause and effect or problem and solution, used with intent." },
    { icon: <Quote size={22} />, title: "Quoting, Paraphrasing and Citation", desc: "Proper in-text citation and signal phrases so your sources are credited correctly and your work stays clear of plagiarism concerns." },
    { icon: <BookText size={22} />, title: "Grammar and Sentence Patterns", desc: "Clause patterns, noun phrases, and sentence level precision, the grammar that makes academic writing read as clear and authoritative." },
    { icon: <LineChart size={22} />, title: "Data and Graphics Description", desc: "The specific language for describing trends, comparisons, and figures in line graphs, bar charts, and tables, a skill most writers are never taught directly." }
  ];

  const textPatterns = [
    { icon: <ArrowRightCircle size={20} />, title: "Cause and Effect", desc: "Structuring the relationship between why something happens and what results from it, with linking language that signals the connection clearly." },
    { icon: <Puzzle size={20} />, title: "Problem and Solution", desc: "Framing an issue and the response to it so the text reads as one logical unit, not a description followed by an unrelated fix." },
    { icon: <GitCompare size={20} />, title: "Comparison and Contrast", desc: "Setting two or more things side by side using consistent criteria, so similarities and differences are easy for a reader to follow." },
    { icon: <Scale3d size={20} />, title: "Advantages and Disadvantages", desc: "Balancing both sides of a case fairly, with transitions that make the shift from benefit to drawback feel intentional rather than abrupt." },
    { icon: <Tags size={20} />, title: "Classification", desc: "Grouping ideas, sources, or findings into clear categories so a reader can navigate complex information without getting lost." },
    { icon: <ListOrdered size={20} />, title: "Enumeration and Sequence", desc: "Presenting steps, stages, or items in an order that makes the sequence unmistakable, using consistent signal words throughout." }
  ];

  const punctuationItems = [
    { mark: ",", title: "The Comma", desc: "Separating clauses and items without breaking the sentence apart or creating a run-on." },
    { mark: ";", title: "The Semicolon", desc: "Joining two closely related independent clauses without a conjunction, a level of control many writers avoid entirely." },
    { mark: ":", title: "The Colon", desc: "Introducing a list, explanation, or elaboration in a way that signals what is coming next." },
    { mark: "'", title: "The Apostrophe", desc: "Possession and contraction handled correctly, one of the most common academic proofreading flags." },
    { mark: "\"", title: "Quotation Marks", desc: "Correct placement around direct quotes and terms, consistent with your required style guide." },
    { mark: "()", title: "Parentheses", desc: "Adding detail or citation information without disrupting the main sentence structure." }
  ];

  const researchSkills = [
    { icon: <ScanSearch size={18} />, title: "Search Terms and Operators", desc: "Building precise database queries instead of broad searches that return thousands of irrelevant results." },
    { icon: <Library size={18} />, title: "Primary and Secondary Sources", desc: "Knowing which type of source your argument actually needs, and why the distinction matters to your reader." },
    { icon: <Filter size={18} />, title: "Source Evaluation", desc: "Judging credibility, currency, and relevance before a source ever makes it into your reference list." },
    { icon: <Database size={18} />, title: "Source Management", desc: "Keeping citations organised from the first search through to the final bibliography, so nothing gets lost along the way." }
  ];

  const dataLiteracySkills = [
    { icon: <BarChart3 size={18} />, title: "Bar Charts", desc: "Language for comparing categories clearly, including how to describe axes and relative scale." },
    { icon: <LineChart size={18} />, title: "Line Graphs", desc: "Describing trends, fluctuations, and turning points over time with the correct verbs and adverbs." },
    { icon: <PieChart size={18} />, title: "Pie Charts", desc: "Proportion language that avoids vague terms like a lot or a little in favour of precise description." },
    { icon: <TableIcon size={18} />, title: "Tables", desc: "Summarising the most important patterns in a data table without simply restating every number." },
    { icon: <ArrowUpRight size={18} />, title: "Trends and Projections", desc: "The difference between describing what happened and forecasting what is likely to happen next." },
    { icon: <Asterisk size={18} />, title: "Approximation", desc: "Hedging language such as approximately, roughly, and around, used with the right level of confidence." }
  ];

  const vocabularySkills = [
    { icon: <GradIcon size={20} />, title: "Academic Word List", desc: "The core vocabulary that appears far more often in academic writing than in everyday English, and how to use it naturally rather than mechanically." },
    { icon: <Link2 size={20} />, title: "Collocation", desc: "Which words are typically found together in academic contexts, so your phrasing reads as idiomatic rather than slightly off." },
    { icon: <TypeIcon size={20} />, title: "Word Choice", desc: "Choosing the more precise or more formal option between two similar words, a skill that separates strong writing from adequate writing." },
    { icon: <MinusCircle size={20} />, title: "Abstract Nouns", desc: "Turning processes and qualities into the noun forms that academic writing relies on, without making sentences feel clunky." }
  ];

  const documentTypes = [
    { icon: <ScrollText size={20} />, title: "Essays" },
    { icon: <GradIcon size={20} />, title: "Theses" },
    { icon: <BookMarked size={20} />, title: "Dissertations" },
    { icon: <FileText size={20} />, title: "Journal Manuscripts" },
    { icon: <Microscope size={20} />, title: "Research Papers" },
    { icon: <NotebookPen size={20} />, title: "Grant Proposals" },
    { icon: <Library size={20} />, title: "Literature Reviews" },
    { icon: <FlaskConical size={20} />, title: "Lab Reports" },
    { icon: <Presentation size={20} />, title: "Conference Papers" },
    { icon: <BookOpen size={20} />, title: "Book Chapters" },
    { icon: <FileSearch size={20} />, title: "Research Proposals" },
    { icon: <ScrollText size={20} />, title: "Case Studies" }
  ];

  const errorTypes = [
    { icon: <SpellCheck size={22} />, title: "Spelling and Grammar", example: "examine to examines", color: "#3b82f6" },
    { icon: <PenLine size={22} />, title: "Sentence Clarity", example: "Tightened, unambiguous phrasing", color: "#8b5cf6" },
    { icon: <AlignJustify size={22} />, title: "Structure and Flow", example: "Paragraphs that build on each other", color: "#ec4899" },
    { icon: <Milestone size={22} />, title: "Argument Strength", example: "Claims backed by clear evidence", color: "#f59e0b" }
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
    { icon: <Shield size={18} />, text: "We help you write it stronger, it stays your work" }
  ];

  const whyNeedSupport = [
    { icon: <EyeIcon size={20} />, title: "You have read your own work too many times", desc: "After ten or more revisions, it is genuinely hard to see your own structural gaps or typos anymore." },
    { icon: <Search size={20} />, title: "Reviewers notice everything", desc: "A weak transition or unclear thesis can distract from strong research and reduce your credibility." },
    { icon: <Clock4 size={20} />, title: "Time is precious", desc: "You have spent months on the research. Get support at the writing stage so it is not wasted on unclear prose." },
    { icon: <Star size={20} />, title: "First impressions matter", desc: "Your supervisor, examiner, or journal editor forms an opinion from the very first page." }
  ];

  const faqs = [
    { q: "What exactly does writing support include?", a: "We help at every stage: task analysis, planning, structuring your argument, strengthening paragraphs and transitions, tightening grammar and clarity, and reviewing your citations. We never write the content or research for you." },
    { q: "Will you change my meaning or my argument?", a: "No. We help you express your own argument more clearly and correct errors. Your research, findings, and voice remain yours." },
    { q: "Do you help with citation formatting too?", a: "Yes, we check formatting consistency of in-text citations and reference lists, and can flag likely plagiarism risk areas for you to address." },
    { q: "Can you help with describing graphs and data?", a: "Yes. Describing line graphs, bar charts, pie charts, and tables accurately is one of our most requested support areas, especially for report style assignments." },
    { q: "Do you cover grammar at the sentence level too?", a: "Yes. We work on clause patterns, noun phrases, and punctuation, not just spelling. Many of the clarity problems in academic writing sit at the sentence level." },
    { q: "How long does a writing support pass take?", a: "Standard is 48 hours. Express is 24 hours. Rush is 12 hours, depending on document length." },
    { q: "What file formats do you accept?", a: "We accept Word documents, Google Docs, PDF, and LaTeX files." },
    { q: "Is there a free sample?", a: "Yes, we offer a free review of your first two pages before you commit." }
  ];

  const trustBadges = [
    { icon: <BadgeCheck size={24} />, label: "100% Satisfaction" },
    { icon: <Shield size={24} />, label: "Confidential" },
    { icon: <Users size={24} />, label: "Subject Specialists" },
    { icon: <Zap size={24} />, label: "Fast Turnaround" }
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Academic Writing Support | Structure, Clarity and Argument Coaching"
        description="Academic writing support for essays, research papers, and theses. Planning, structure, cohesion, citations, data description, and clarity coaching from experienced writing specialists."
        path="/services/academic-writing-support"
      />
      <Navbar activeNav="services" />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        {/* ========== HERO ========== */}
        <motion.section
          className={styles.hero}
          style={{ y: heroParallax }}
        >
          <div className={styles.container}>
            <div className={styles.heroGrid}>

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
                  <span>Writing Support, Start to Finish</span>
                </motion.div>

                <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }}>
                  Academic Writing Support
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
                  We do not write your paper for you. We help you plan, structure, and clarify your
                  own ideas, from task analysis through to final review, so your writing reads as
                  clearly as your thinking deserves.
                </motion.p>

                <motion.div
                  className={styles.heroStats}
                  variants={staggerContainer}
                >
                  {[
                    { value: "10,000+", label: "Documents Supported" },
                    { value: "98%", label: "Client Satisfaction" },
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
                    Get a Free Sample Review
                    <ArrowRight size={18} />
                  </motion.a>
                  <motion.a
                    href="#process"
                    className={styles.btnSecondary}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    See Our Process
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                className={styles.heroIllo}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.9, delay: 0.2 },
                  scale: { duration: 0.9, delay: 0.2 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
              >
                <FloatingBadge text="structure" color="#8b5cf6" delay={0} x="0%" y="6%" rotate={-8} />
                <FloatingBadge text="clarity" color="#3b82f6" delay={0.8} x="66%" y="10%" rotate={6} />
                <FloatingBadge text="citations" color="#ec4899" delay={1.6} x="-4%" y="72%" rotate={5} />
                <FloatingBadge text="cohesion" color="#f59e0b" delay={2.4} x="70%" y="78%" rotate={-6} />
                <DocumentIllustration />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========== SECTION: THE WRITING PROCESS ========== */}
        <motion.section
          id="process"
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
              <h2>We Support Every Stage of the Writing Process</h2>
              <p>Good writing rarely happens in one pass. We help wherever you are in the cycle, from a blank page to a final draft.</p>
            </motion.div>

            <motion.div className={styles.process} variants={staggerContainer}>
              {writingProcess.map((step, i) => (
                <motion.div
                  key={i}
                  className={styles.processStep}
                  variants={i % 2 === 0 ? slideLeft : slideRight}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <motion.div
                    className={styles.processNum}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...springTransition, delay: i * 0.1 + 0.15 }}
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

        {/* ========== SECTION: CORE SKILLS ========== */}
        <motion.section
          id="skills"
          className={styles.skillsSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.skillsHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>The Skills That Actually Move a Grade</h2>
              <p>Academic writing is a specific, learnable skill set. We work directly on the parts most writers were never explicitly taught.</p>
            </motion.div>

            <motion.div className={styles.skillsGrid} variants={staggerContainer}>
              {coreSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  className={styles.skillCard}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className={styles.skillIcon}>{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <p>{skill.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: TEXT PATTERNS ========== */}
        <motion.section
          id="patterns"
          className={styles.patternsSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.patternsHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Text Patterns We Help You Structure</h2>
              <p>Almost every academic paragraph follows one of a small number of recognisable patterns. Knowing which one you need, and signalling it clearly, is what makes a paragraph easy to follow instead of a wall of text.</p>
            </motion.div>

            <motion.div className={styles.patternsGrid} variants={staggerContainer}>
              {textPatterns.map((pattern, i) => (
                <motion.div
                  key={i}
                  className={styles.patternCard}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.06 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className={styles.patternIcon}>{pattern.icon}</div>
                  <h3>{pattern.title}</h3>
                  <p>{pattern.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: RESEARCH AND SOURCE LITERACY ========== */}
        <motion.section
          id="research"
          className={styles.researchSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <motion.div
                className={styles.splitIllo}
                variants={zoomIn}
                transition={{ duration: 0.7 }}
              >
                <MagnifierIllustration />
              </motion.div>

              <motion.div className={styles.splitContent} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }}>
                  Research and Source Literacy
                </motion.h2>
                <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className={styles.splitLead}>
                  A strong argument is only as strong as the sources holding it up. We help you search efficiently, judge what you find, and keep everything organised so nothing is lost between your first search and your final reference list.
                </motion.p>
                <motion.div className={styles.miniList} variants={staggerContainer}>
                  {researchSkills.map((item, i) => (
                    <motion.div
                      key={i}
                      className={styles.miniListItem}
                      variants={fadeUp}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                    >
                      <span className={styles.miniListIcon}>{item.icon}</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========== SECTION: DATA LITERACY ========== */}
        <motion.section
          id="data"
          className={styles.researchSection}
          style={{ background: "rgba(var(--card), 0.5)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <div className={`${styles.splitLayout} ${styles.splitReverse}`}>
              <motion.div className={styles.splitContent} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }}>
                  Describing Data and Graphics
                </motion.h2>
                <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className={styles.splitLead}>
                  If your assignment involves a chart, a table, or a set of results, you need a specific vocabulary to describe what the data shows. This is one of the most commonly underdeveloped skills in academic writing, and one of the fastest to improve with the right guidance.
                </motion.p>
                <motion.div className={styles.miniList} variants={staggerContainer}>
                  {dataLiteracySkills.map((item, i) => (
                    <motion.div
                      key={i}
                      className={styles.miniListItem}
                      variants={fadeUp}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <span className={styles.miniListIcon}>{item.icon}</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className={styles.splitIllo}
                variants={zoomIn}
                transition={{ duration: 0.7 }}
              >
                <ChartIllustration />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========== SECTION: PUNCTUATION AND PRECISION ========== */}
        <motion.section
          id="punctuation"
          className={styles.punctuationSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.punctuationHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <h2>Punctuation and Sentence Level Precision</h2>
              <p>Small marks carry real meaning in academic writing. Getting them right is part of reading as careful and credible.</p>
            </motion.div>

            <motion.div className={styles.punctuationGrid} variants={staggerContainer}>
              {punctuationItems.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.punctuationItem}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <span className={styles.punctuationMark}>{item.mark}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: VOCABULARY AND WORD CHOICE ========== */}
        <motion.section
          id="vocabulary"
          className={styles.researchSection}
          style={{ background: "rgba(var(--card), 0.5)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <div className={styles.splitLayout}>
              <motion.div
                className={styles.splitIllo}
                variants={zoomIn}
                transition={{ duration: 0.7 }}
              >
                <BookIllustration />
              </motion.div>

              <motion.div className={styles.splitContent} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} transition={{ duration: 0.6 }}>
                  Vocabulary and Word Choice
                </motion.h2>
                <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className={styles.splitLead}>
                  The single most effective way to improve academic writing is a deeper vocabulary, used naturally. We help you choose the more precise word, the more formal register, and the word combinations that native academic writing actually uses.
                </motion.p>
                <motion.div className={styles.miniList} variants={staggerContainer}>
                  {vocabularySkills.map((item, i) => (
                    <motion.div
                      key={i}
                      className={styles.miniListItem}
                      variants={fadeUp}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                    >
                      <span className={styles.miniListIcon}>{item.icon}</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ========== SECTION: DOCUMENT TYPES ========== */}
        <motion.section
          id="documents"
          className={styles.docTypesSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className={styles.container}>
            <motion.div
              className={styles.docTypesHeader}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.docTypesIllo}>
                <CompassIllustration />
              </div>
              <h2>Every Type of Academic Document, Covered</h2>
              <p>Whatever stage of study or publication you are at, there is a good chance we have supported a document just like yours.</p>
            </motion.div>

            <motion.div className={styles.docTypesGrid} variants={staggerContainer}>
              {documentTypes.map((doc, i) => (
                <motion.div
                  key={i}
                  className={styles.docTypeItem}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.04 }}
                  whileHover={{ y: -4, scale: 1.04 }}
                >
                  <span className={styles.docTypeIcon}>{doc.icon}</span>
                  <span>{doc.title}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: WHAT WE STRENGTHEN ========== */}
        <motion.section
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
              <h2>What We Strengthen</h2>
              <p>Every document has room to be clearer. Here is where we focus first.</p>
            </motion.div>

            <motion.div className={styles.errorsGrid} variants={staggerContainer}>
              {errorTypes.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.errorCard}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                >
                  <div className={styles.errorIcon} style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className={styles.errorInfo}>
                    <h4>{item.title}</h4>
                    <span className={styles.errorExample}>{item.example}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ========== SECTION: BEFORE AND AFTER ========== */}
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
              <h2>Before and After Writing Support</h2>
              <p>Same ideas, same voice, just clearer.</p>
            </motion.div>

            <motion.div className={styles.beforeAfter} variants={staggerContainer}>
              <motion.div className={styles.beforeColumn} variants={zoomIn}>
                <div className={styles.beforeAfterLabel}>
                  <X size={18} />
                  <span>Before</span>
                  <span className={styles.beforeAfterCount}>Unclear</span>
                </div>
                <div className={styles.beforeAfterContent}>
                  <p className={styles.beforeAfterLine}>The study examine the relationship between variables and it was showing some results that maybe support the hypothesis.</p>
                  <p className={styles.beforeAfterLine}>Also there is previous work that talk about this topic in general terms.</p>
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
                  <span className={styles.beforeAfterClean}>Clear</span>
                </div>
                <div className={styles.beforeAfterContent}>
                  <p className={styles.beforeAfterLine}>The study <span className={styles.correctHighlight}>examines</span> the relationship between variables, and the results <span className={styles.correctHighlight}>support the hypothesis</span>.</p>
                  <p className={styles.beforeAfterLine}>These findings are consistent with <span className={styles.correctHighlight}>prior research on this topic</span>.</p>
                </div>
              </motion.div>
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
              <h2>What We Do Not Change</h2>
              <p>We respect your work. We help you say it more clearly, we do not say it for you.</p>
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

        {/* ========== SECTION: WHY YOU NEED SUPPORT ========== */}
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
              <h2>Why Even Strong Writers Get Support</h2>
              <p>Four reasons a second, expert perspective makes a measurable difference.</p>
            </motion.div>

            <motion.div className={styles.whyGrid} variants={staggerContainer}>
              {whyNeedSupport.map((item, i) => (
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

        {/* ========== SECTION: GUARANTEE ========== */}
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
              <p>Not completely satisfied? We will review your document again at no extra cost.</p>
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
              <p>Everything you need to know about our writing support service.</p>
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
                    <p>We have received your request. A writing specialist will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.h2 variants={fadeUp} initial="hidden" animate="visible">
                      Get Support With Your Writing
                    </motion.h2>
                    <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.05 }}>
                      Request a free sample review and quote.
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
                            <option value="essay">Essay</option>
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
                          placeholder="Tell us about your document, field of study, what stage it is at, and where you would like the most help..."
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
                          <>Get Free Sample Review <Send size={16} /></>
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