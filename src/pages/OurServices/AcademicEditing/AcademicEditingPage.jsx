import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight, CheckCircle, Clock, Users, Award, Shield, Zap, Star,
  ChevronDown, Loader2, Edit3, FileText, GraduationCap, BookOpen,
  PenTool, TrendingUp, Sparkles, Phone, Mail, Send
} from "lucide-react";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import styles from "./AcademicEditingPage.module.css";
import SEO from "../../../components/SEO/SEO";
import { apiService } from "../../../services/api";

const ROTATING_WORDS = [
  "Theses & Dissertations",
  "Journal Manuscripts",
  "Research Papers",
  "Grant Proposals",
  "Academic Books"
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

/* Animated count-up for hero / stat numbers, e.g. "12,000+", "98%", "2.4x" */
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const springTransition = { type: "spring", stiffness: 120, damping: 14 };

export default function AcademicEditingPage() {
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
        service: `Academic Editing - ${formData.documentType || 'General'}`,
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

  const editingServices = [
    { icon: <Edit3 size={24} />, title: "Substantive Editing", desc: "A close, sentence‑by‑sentence pass through your argument, checking that each section builds logically into the next, that transitions actually connect ideas, and that your central thesis stays visible from the introduction through to the conclusion." },
    { icon: <PenTool size={24} />, title: "Copy Editing & Language Polish", desc: "Grammar, punctuation, sentence rhythm, and word choice tightened line by line, so your voice comes through clearly and your writing reads the way a well‑trained academic editor would want it to." },
    { icon: <FileText size={24} />, title: "Precision Proofreading", desc: "A final, careful read for typos, formatting slips, citation inconsistencies, and layout errors — the kind of small details that are easy to miss after you've spent months inside your own manuscript." }
  ];

  const advancedSupport = [
    { icon: <GraduationCap size={24} />, title: "Thesis & Dissertation", desc: "Chapter‑by‑chapter review that keeps your methodology, findings, and discussion consistent from your proposal through to your final defense copy, with formatting checked against your university's guidelines." },
    { icon: <BookOpen size={24} />, title: "Journal Manuscript", desc: "Editing calibrated to your target journal's house style and word‑count limits, plus a submission‑readiness check so your paper looks the part before it reaches a reviewer's desk." },
    { icon: <TrendingUp size={24} />, title: "Research Paper", desc: "A close look at how your data is presented — tables, figures, statistical language, and results sections — so the numbers and the narrative around them tell the same clear story." }
  ];

  const whyChoosePoints = [
    { icon: <Award size={22} />, title: "PhD‑Level Editors", desc: "Every manuscript is matched with an editor who holds an advanced degree in a related field, so terminology and context are never guesswork." },
    { icon: <Users size={22} />, title: "One Dedicated Editor", desc: "You work with the same editor from first draft to final polish, which means fewer inconsistencies and no need to re‑explain your project halfway through." },
    { icon: <Clock size={22} />, title: "Careful, Unhurried Review", desc: "We build in enough time for a proper close read rather than a rushed skim, because good editing can't be done in a hurry." },
    { icon: <Star size={22} />, title: "Track Record of Results", desc: "Thousands of theses, papers, and manuscripts edited, with a strong record of acceptances and successful defenses among our clients." },
    { icon: <Shield size={22} />, title: "Total Confidentiality", desc: "Your work is never shared, published, or reused. We sign NDAs on request and keep every document strictly private." },
    { icon: <CheckCircle size={22} />, title: "Revisions Included", desc: "If something isn't quite right after your first round of edits, we'll revise it until you're satisfied — no extra charge." }
  ];

  const faqs = [
    { q: "Who actually edits my document?", a: "A dedicated academic editor with subject‑matter background in your field, not a generic proofreading pool. You'll work with the same person throughout your project." },
    { q: "What types of academic documents do you edit?", a: "We edit all types including theses, dissertations, research papers, journal manuscripts, grant proposals, and book chapters across every academic discipline." },
    { q: "What's the difference between your editing levels?", a: "Substantive editing focuses on overall structure and argument flow. Copy editing polishes language and grammar. Proofreading is the final check for typos and formatting." },
    { q: "How fast can I get my document back?", a: "Standard delivery is 5‑7 business days. Express services are available from 24 hours for urgent manuscripts, depending on length." },
    { q: "Do you follow specific style guides?", a: "Yes. Our editors are experienced with APA, MLA, Chicago, Harvard, AMA, ACS, IEEE, and more, and will follow your target publication's requirements exactly." },
    { q: "Is my research kept confidential?", a: "Absolutely. We sign NDAs on request and never share, publish, or reuse your work in any form." }
  ];

  const processSteps = [
    { num: "01", title: "Upload Your Document", desc: "Send us your manuscript along with any style guide, target journal, or supervisor requirements we should know about." },
    { num: "02", title: "Expert Editor Review", desc: "A PhD editor with relevant subject expertise reads your document closely and edits it line by line, with your goals in mind throughout." },
    { num: "03", title: "Detailed Feedback", desc: "Receive your edited document along with notes on the bigger structural or argument‑level changes your editor made and why." },
    { num: "04", title: "Final Polish & Support", desc: "Unlimited revisions. Our team refines the manuscript with you until you're confident it's ready for submission." }
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Academic Editing Services | Thesis, Dissertation & Manuscript Editing"
        description="Professional academic editing for theses, dissertations, research papers, and journal manuscripts. Work with an experienced, dedicated editor for faster turnaround and stronger results."
        path="/services/academic-editing"
      />

      <Navbar activeNav="services" />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* HERO – loads immediately, staggered entrance */}
        <motion.section 
          className={styles.hero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <motion.div 
                className={styles.heroText}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className={styles.badge}
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  style={{ display: "inline-flex" }}
                >
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2 }}
                    style={{ display: "inline-flex" }}
                  >
                    <Sparkles size={14} />
                  </motion.span>
                  {" "}Trusted by Researchers Worldwide
                </motion.div>

                <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }}>
                  Academic Editing & Proofreading
                </motion.h1>

                <motion.div
                  className={styles.typewriterContainer}
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
                  Give your research the editing it deserves. Our experienced academic editors work closely
                  with you to sharpen your argument, tighten your language, and prepare a manuscript that's
                  genuinely ready for submission, defense, or publication.
                </motion.p>

                <motion.div
                  className={styles.heroStats}
                  variants={staggerContainer}
                >
                  {[
                    { value: "12,000+", label: "Documents Edited" },
                    { value: "98%", label: "Acceptance Rate" },
                    { value: "2.4x", label: "Faster Turnaround" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      variants={scaleIn}
                      transition={{ ...springTransition, delay: i * 0.1 }}
                    >
                      <span><AnimatedStat value={stat.value} /></span>
                      <span>{stat.label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className={styles.heroCtas}
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                >
                  <motion.a
                    href="#contact"
                    className={styles.btnPrimary}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Get a Free Sample Edit
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                      style={{ display: "inline-flex" }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </motion.a>
                  <motion.a
                    href="#process"
                    className={styles.btnSecondary}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    How It Works
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div 
                className={styles.heroVisual}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -10, 0]
                }}
                transition={{
                  opacity: { duration: 0.9, delay: 0.2 },
                  scale: { duration: 0.9, delay: 0.2 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.1 }
                }}
              >
                <div className={styles.codeEditorDemo}>
                  <div className={styles.editorHeader}>
                    <div className={styles.dots}>
                      <span className={styles.dotRed} />
                      <span className={styles.dotYellow} />
                      <span className={styles.dotGreen} />
                    </div>
                    <span>manuscript_edited_draft.docx</span>
                  </div>
                  <motion.div
                    className={styles.codeContent}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    transition={{ delayChildren: 0.6 }}
                  >
                    <motion.div className={styles.codeLine} variants={fadeUp} transition={{ duration: 0.5 }}>
                      <span className={styles.cGreen}>Abstract</span>
                    </motion.div>
                    <motion.div className={styles.codeLine} variants={fadeUp} transition={{ duration: 0.5 }}>
                      This <span className={styles.cHighlight}>study</span> examines the relationship between…
                    </motion.div>
                    <motion.div className={styles.codeLine} variants={fadeUp} transition={{ duration: 0.5 }}>
                      <span className={styles.cYellow}>// Editor note: tighten this transition</span>
                    </motion.div>
                    <motion.div className={styles.codeLine} variants={fadeUp} transition={{ duration: 0.5 }}>
                      Our <span className={styles.cHighlight}>findings</span> demonstrate a significant…
                    </motion.div>
                    <motion.div className={styles.codeLine} variants={fadeUp} transition={{ duration: 0.5 }}>
                      <span className={styles.cGreen}>Keywords:</span> methodology, analysis, academic writing
                    </motion.div>
                    <motion.div className={styles.codeLine} variants={fadeUp} transition={{ duration: 0.5 }} style={{ marginTop: '12px' }}>
                      <span className={styles.cBlue}>📝</span> <span style={{ color: '#a1a1aa' }}>First read‑through complete</span>
                    </motion.div>
                    <motion.div className={styles.codeLine} variants={fadeUp} transition={{ duration: 0.5 }}>
                      <span className={styles.cBlue}>👨‍🔬</span> <span style={{ color: '#a1a1aa' }}>PhD editor final polish in progress</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ABOUT THE SERVICE – scroll animation */}
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
              <h2>Editing Built Around Your Research, Not a Template</h2>
              <p>What sets a careful, subject‑aware edit apart from a generic language check.</p>
            </motion.div>
            <div className={styles.textColumns}>
              <motion.div variants={slideLeft} transition={{ duration: 0.6 }}>
                <p>
                  Every manuscript we take on is assigned to an editor with real background in that subject area,
                  because understanding the field matters as much as understanding grammar. Before a single line
                  is changed, your editor reads the whole document to understand your argument, your data, and
                  what you're trying to say — then edits with that full picture in mind, not just sentence by sentence.
                </p>
                <p>
                  We work across every stage of the academic pipeline: early‑draft structural feedback, line‑level
                  language editing, and the final proofreading pass before submission. Along the way you get a
                  responsive editor who answers questions, explains their changes when asked, and adjusts to your
                  supervisor's or journal's specific requirements — the kind of back‑and‑forth that turns a good
                  manuscript into one that's genuinely ready to be read by a committee, reviewer, or examiner.
                </p>
              </motion.div>
              <motion.div
                className={styles.statsColumn}
                variants={staggerContainer}
              >
                <motion.div
                  className={styles.statItem}
                  variants={scaleIn}
                  transition={springTransition}
                  whileHover={{ scale: 1.04, y: -3 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                    style={{ display: "inline-flex" }}
                  >
                    <Award size={24} />
                  </motion.span>
                  <div><strong><AnimatedStat value="98%" /></strong> <span>of clients report improved clarity and readability</span></div>
                </motion.div>
                <motion.div
                  className={styles.statItem}
                  variants={scaleIn}
                  transition={{ ...springTransition, delay: 0.1 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
                    style={{ display: "inline-flex" }}
                  >
                    <GraduationCap size={24} />
                  </motion.span>
                  <div><strong><AnimatedStat value="40+" /></strong> <span>academic disciplines covered by our editing team</span></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SERVICES – staggered card entrance */}
        <motion.section 
          id="services"
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
              <h2>Editing Services</h2>
              <p>Three tiers of support, tailored to wherever your document is in its journey.</p>
            </motion.div>

            <motion.div className={styles.servicesGrid} variants={staggerContainer}>
              {editingServices.map((service, i) => (
                <motion.div 
                  key={i} 
                  className={styles.serviceItem}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div
                    className={styles.serviceIcon}
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={springTransition}
                  >
                    {service.icon}
                  </motion.div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ADVANCED SUPPORT – staggered card entrance */}
        <motion.section 
          className={styles.section}
          style={{ background: 'transparent' }}
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
              <h2>Specialized Document Support</h2>
              <p>In‑depth editing for longer, more complex academic works.</p>
            </motion.div>
            <motion.div className={styles.servicesGrid} variants={staggerContainer}>
              {advancedSupport.map((service, i) => (
                <motion.div 
                  key={i} 
                  className={styles.serviceItem}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div
                    className={styles.serviceIcon}
                    whileHover={{ rotate: 12, scale: 1.15 }}
                    transition={springTransition}
                  >
                    {service.icon}
                  </motion.div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* WHAT A THOROUGH EDIT COVERS – staggered list */}
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
              <h2>What a Thorough Edit Actually Covers</h2>
              <p>The details a careful editor checks that are easy to overlook on your own.</p>
            </motion.div>
            <motion.div className={styles.benefitsList} variants={staggerContainer}>
              <ul>
                {[
                  "Clarity review to catch where your writing loses the reader",
                  "Full style‑guide compliance check (APA, MLA, Chicago, and more)",
                  "Careful check for repeated or recycled passages within your own work",
                  "Review of how your figures, tables, and results are described in the text",
                  "Word‑choice suggestions drawn from how your field actually writes"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={slideLeft}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    whileHover={{ x: 6 }}
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...springTransition, delay: i * 0.08 + 0.15 }}
                      style={{ display: "inline-flex" }}
                    >
                      <CheckCircle size={18} />
                    </motion.span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.p 
              className={styles.sectionFooter}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Fixing typos is the easy part. A good editor also tells you where an argument needs strengthening,
              where a section runs too long, or where a reader might get lost — <strong>the kind of feedback
              that only comes from someone who has actually read your work closely.</strong>
            </motion.p>
          </div>
        </motion.section>

        {/* HOW IT WORKS – staggered steps with animated connector */}
        <motion.section 
          id="process"
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
              <h2>How Our Editing Process Works</h2>
              <p>A seamless, transparent process from submission to publication‑ready output.</p>
            </motion.div>
            <motion.div className={styles.processSteps} variants={staggerContainer}>
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  className={styles.step}
                  variants={slideLeft}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.div
                    className={styles.stepNumber}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
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

        {/* WHY CHOOSE US – staggered feature grid */}
        <motion.section 
          className={styles.section}
          style={{ background: 'transparent' }}
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
              <h2>Why Researchers Choose Scape Data Solutions</h2>
              <p>Careful, subject‑aware editing from people who understand academic writing.</p>
            </motion.div>

            <motion.div className={styles.featureGrid} variants={staggerContainer}>
              {whyChoosePoints.map((item, i) => (
                <motion.div 
                  key={i} 
                  className={styles.featureItem}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <motion.div
                    className={styles.featureIcon}
                    whileHover={{ rotate: -10, scale: 1.15 }}
                    transition={springTransition}
                  >
                    {item.icon}
                  </motion.div>
                  <div className={styles.featureText}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ – staggered accordion entrance */}
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
              <p>Everything you need to know about our academic editing services.</p>
            </motion.div>

            <motion.div className={styles.faqGrid} variants={staggerContainer}>
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i} 
                  className={styles.faqItem}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <motion.button 
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(i)}
                    whileHover={{ x: 4 }}
                  >
                    <span>{faq.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ display: "inline-flex" }}
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </motion.button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
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

        {/* CONTACT – scroll + animated success state */}
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
              transition={{ duration: 0.6 }}
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
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ ...springTransition, delay: 0.1 }}
                    >
                      <CheckCircle size={48} color="#22c55e" />
                    </motion.div>
                    <h3>Thank You!</h3>
                    <p>Your inquiry has been received. An academic editor will contact you shortly with a free sample edit.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.h2 variants={fadeUp} initial="hidden" animate="visible">
                      Ready for a Stronger Manuscript?
                    </motion.h2>
                    <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.05 }}>
                      Get a free sample edit and quote — see the difference a dedicated editor makes.
                    </motion.p>

                    <AnimatePresence>
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
                    </AnimatePresence>

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
                            <option value="book">Academic Book/Chapter</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className={styles.formGroup}>
                          <input 
                            type="date" 
                            name="deadline"
                            required
                            value={formData.deadline}
                            onChange={handleChange}
                          />
                        </div>
                      </motion.div>
                      <motion.div className={styles.formGroup} variants={fadeUp}>
                        <textarea 
                          name="details"
                          placeholder="Tell us about your document – field of study, word count, and any special requirements..."
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
                          <>Get Free Sample & Quote <Send size={16} /></>
                        )}
                      </motion.button>
                      <motion.p className={styles.privacyNote} variants={fadeUp}>
                        By submitting, you agree to our privacy policy. Your document stays confidential and is never used to train any models.
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