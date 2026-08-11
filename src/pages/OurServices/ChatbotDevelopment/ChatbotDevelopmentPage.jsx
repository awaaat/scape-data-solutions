// src/pages/Services/ChatbotDevelopment/ChatbotDevelopmentPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight, Bot, User, Zap, Shield, Award, Target, Star, Clock,
  Workflow, Building, DollarSign, TrendingUp, PieChart, Code,
  RefreshCw, Brain, Plus, Minus, CheckCircle2, MessagesSquare,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./ChatbotDevelopmentPage.module.css";
import SEO from "../../../components/SEO/SEO";

/**
 * No stock photography anywhere on this page. Every visual is a generated
 * SVG illustration, drawn specifically for the section it sits in, using
 * the page's own accent color (var(--color-accent)) so they always match
 * the live theme instead of being baked-in raster assets.
 */
const Illustration = ({ variant, className = "" }) => {
  const svgProps = { viewBox: "0 0 400 300", xmlns: "http://www.w3.org/2000/svg", className };

  switch (variant) {
    // ── Hero / solutions / history: chat bubbles wired into a small network ──
    case "network":
      return (
        <svg {...svgProps}>
          <defs>
            <linearGradient id="gradNet" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <line x1="120" y1="150" x2="200" y2="90" stroke="var(--color-border)" strokeWidth="2" />
          <line x1="120" y1="150" x2="200" y2="210" stroke="var(--color-border)" strokeWidth="2" />
          <line x1="200" y1="90" x2="290" y2="130" stroke="var(--color-border)" strokeWidth="2" />
          <line x1="200" y1="210" x2="290" y2="170" stroke="var(--color-border)" strokeWidth="2" />
          <line x1="290" y1="130" x2="290" y2="170" stroke="var(--color-border)" strokeWidth="2" />
          <circle cx="120" cy="150" r="10" fill="var(--color-border)" />
          <circle cx="200" cy="90" r="7" fill="var(--color-border)" />
          <circle cx="200" cy="210" r="7" fill="var(--color-border)" />
          <circle cx="290" cy="130" r="7" fill="var(--color-border)" />
          <circle cx="290" cy="170" r="7" fill="var(--color-border)" />
          <rect x="70" y="105" width="90" height="52" rx="16" fill="url(#gradNet)" />
          <circle cx="95" cy="131" r="4" fill="var(--color-bg)" />
          <circle cx="112" cy="131" r="4" fill="var(--color-bg)" />
          <circle cx="129" cy="131" r="4" fill="var(--color-bg)" />
        </svg>
      );

    // ── Consulting: a brain/roadmap radiating outward ──
    case "consulting":
      return (
        <svg {...svgProps}>
          <defs>
            <radialGradient id="gradBrain" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.15" />
            </radialGradient>
          </defs>
          {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * Math.PI * 2;
            const x = 200 + Math.cos(angle) * 95;
            const y = 150 + Math.sin(angle) * 75;
            return <line key={i} x1="200" y1="150" x2={x} y2={y} stroke="var(--color-border)" strokeWidth="2" />;
          })}
          {[...Array(6)].map((_, i) => {
            const angle = (i / 6) * Math.PI * 2;
            const x = 200 + Math.cos(angle) * 95;
            const y = 150 + Math.sin(angle) * 75;
            return <circle key={i} cx={x} cy={y} r="6" fill="var(--color-border)" />;
          })}
          <circle cx="200" cy="150" r="42" fill="url(#gradBrain)" />
        </svg>
      );

    // ── Development: code brackets fused with a chat bubble ──
    case "dev":
      return (
        <svg {...svgProps}>
          <text x="118" y="172" fontFamily="monospace" fontSize="86" fill="var(--color-border)">&lt;</text>
          <text x="240" y="172" fontFamily="monospace" fontSize="86" fill="var(--color-border)">/&gt;</text>
          <rect x="164" y="118" width="72" height="46" rx="12" fill="var(--color-accent)" opacity="0.85" />
          <circle cx="182" cy="141" r="3.5" fill="var(--color-bg)" />
          <circle cx="200" cy="141" r="3.5" fill="var(--color-bg)" />
          <circle cx="218" cy="141" r="3.5" fill="var(--color-bg)" />
        </svg>
      );

    // ── Support: circular refresh loop around a chat bubble ──
    case "support":
      return (
        <svg {...svgProps}>
          <circle cx="200" cy="150" r="70" fill="none" stroke="var(--color-border)" strokeWidth="3" strokeDasharray="10 8" />
          <path d="M 262 150 A 62 62 0 0 0 200 88" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 200 78 L 210 90 L 190 92 Z" fill="var(--color-accent)" />
          <rect x="168" y="128" width="64" height="42" rx="14" fill="var(--color-accent)" opacity="0.85" />
          <circle cx="184" cy="149" r="3" fill="var(--color-bg)" />
          <circle cx="200" cy="149" r="3" fill="var(--color-bg)" />
          <circle cx="216" cy="149" r="3" fill="var(--color-bg)" />
        </svg>
      );

    // ── Strategy: target with a plotted path ──
    case "strategy":
      return (
        <svg {...svgProps}>
          <circle cx="200" cy="150" r="72" fill="none" stroke="var(--color-border)" strokeWidth="2" />
          <circle cx="200" cy="150" r="46" fill="none" stroke="var(--color-border)" strokeWidth="2" />
          <circle cx="200" cy="150" r="20" fill="var(--color-accent)" opacity="0.85" />
          <path d="M 90 220 L 150 190 L 180 160" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeDasharray="6 6" />
          <circle cx="90" cy="220" r="6" fill="var(--color-border)" />
          <circle cx="150" cy="190" r="6" fill="var(--color-border)" />
        </svg>
      );

    // ── Circuit / tech pattern ──
    case "circuit":
      return (
        <svg {...svgProps}>
          <g stroke="var(--color-border)" strokeWidth="2" fill="none">
            <path d="M40 60 H140 V120 H220" />
            <path d="M40 220 H100 V160 H260" />
            <path d="M360 80 H300 V180 H340 V240" />
            <path d="M220 120 V220" />
          </g>
          <g fill="var(--color-accent)">
            <circle cx="40" cy="60" r="5" />
            <circle cx="220" cy="120" r="5" />
            <circle cx="220" cy="220" r="5" />
            <circle cx="360" cy="80" r="5" />
            <circle cx="340" cy="240" r="5" />
            <circle cx="40" cy="220" r="5" />
          </g>
          <rect x="175" y="140" width="50" height="34" rx="8" fill="var(--color-accent)" opacity="0.85" />
        </svg>
      );

    // ── Grounded in data: documents feeding into a chat bubble ──
    case "grounded":
      return (
        <svg {...svgProps}>
          <rect x="60" y="90" width="70" height="90" rx="8" fill="none" stroke="var(--color-border)" strokeWidth="2" />
          <line x1="74" y1="112" x2="116" y2="112" stroke="var(--color-border)" strokeWidth="2" />
          <line x1="74" y1="128" x2="116" y2="128" stroke="var(--color-border)" strokeWidth="2" />
          <line x1="74" y1="144" x2="104" y2="144" stroke="var(--color-border)" strokeWidth="2" />
          <line x1="130" y1="135" x2="230" y2="150" stroke="var(--color-border)" strokeWidth="2" strokeDasharray="4 5" />
          <rect x="235" y="115" width="105" height="66" rx="18" fill="var(--color-accent)" opacity="0.85" />
          <circle cx="265" cy="148" r="4" fill="var(--color-bg)" />
          <circle cx="288" cy="148" r="4" fill="var(--color-bg)" />
          <circle cx="311" cy="148" r="4" fill="var(--color-bg)" />
        </svg>
      );

    // ── Case study 1: rising result bars with a check ──
    case "resultBars":
      return (
        <svg {...svgProps} preserveAspectRatio="xMidYMid slice">
          <rect x="60" y="190" width="34" height="70" rx="4" fill="var(--color-border)" />
          <rect x="120" y="150" width="34" height="110" rx="4" fill="var(--color-border)" />
          <rect x="180" y="110" width="34" height="150" rx="4" fill="var(--color-accent)" opacity="0.85" />
          <rect x="240" y="70" width="34" height="190" rx="4" fill="var(--color-accent)" />
          <circle cx="320" cy="90" r="26" fill="none" stroke="var(--color-accent)" strokeWidth="3" />
          <path d="M310 90 L318 98 L332 80" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    // ── Case study 2: chat conversation stack, multilingual dots ──
    case "conversation":
      return (
        <svg {...svgProps} preserveAspectRatio="xMidYMid slice">
          <rect x="60" y="70" width="150" height="42" rx="14" fill="var(--color-border)" />
          <rect x="190" y="122" width="150" height="42" rx="14" fill="var(--color-accent)" opacity="0.85" />
          <rect x="60" y="174" width="120" height="42" rx="14" fill="var(--color-border)" />
          <rect x="150" y="226" width="150" height="42" rx="14" fill="var(--color-accent)" />
        </svg>
      );

    default:
      return null;
  }
};

const ArtBlock = ({ variant, wrapClass = "", index = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  return (
    <motion.div
      ref={ref}
      className={`${styles.artWrap} ${wrapClass}`}
      initial={{ opacity: 0, scale: 0.94, y: 18 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Illustration variant={variant} />
    </motion.div>
  );
};

// ─── SCROLL REVEAL (section wrapper) ──────────────────────────────
const ScrollSection = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.12 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

// ─── COUNTER ──────────────────────────────────────────────────────
const Counter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = Math.ceil(end / (duration * 60));
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);
  return (
    <span ref={ref} className={styles.statsNumber}>
      {count}
      {suffix}
    </span>
  );
};

// ─── FAQ ACCORDION ──────────────────────────────────────────────
const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className={styles.faqItem}>
    <button className={styles.faqQuestion} onClick={toggle} aria-expanded={isOpen}>
      <span>{question}</span>
      <span className={styles.faqIcon}>{isOpen ? <Minus size={16} /> : <Plus size={16} />}</span>
    </button>
    <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ""}`}>
      <p>{answer}</p>
    </div>
  </div>
);

// ─── BUSINESS CHAT (capped, animated — the hero's signature piece) ───
const MAX_MESSAGES = 8;

const seedMessages = [
  { id: "s1", from: "bot", text: "Hello — I'm ScapeBot. How can I help your business today?" },
  { id: "s2", from: "user", text: "We're looking to automate customer support for our SaaS product. What do you offer?" },
  { id: "s3", from: "bot", text: "We build custom AI chatbots powered by RAG and LLMs, grounded in your own knowledge base, with clean hand-off to human agents." },
  { id: "s4", from: "user", text: "How do you handle data security and privacy?" },
  { id: "s5", from: "bot", text: "Enterprise-grade encryption, access controls, and compliance with GDPR, SOC2, and HIPAA. Your data stays yours." },
];

const botFollowUps = [
  "We've helped companies like yours cut support tickets significantly.",
  "Our analytics dashboard shows resolution rate and accuracy at a glance.",
  "Want to schedule a demo call with our team?",
  "We integrate with your existing CRM and helpdesk tools.",
  "Our chatbots are trained on your own documentation, not generic web data.",
  "We monitor accuracy continuously after launch, not just at handoff.",
];

const BusinessChat = () => {
  const [messages, setMessages] = useState(seedMessages);
  const [typing, setTyping] = useState(false);
  const [newMsg, setNewMsg] = useState("");
  const responseIndexRef = useRef(0);
  const scrollRef = useRef(null);

  const pushMessage = (msg) => {
    setMessages((prev) => {
      const next = [...prev, msg];
      return next.length > MAX_MESSAGES ? next.slice(next.length - MAX_MESSAGES) : next;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTyping(true);
      const delay = 1200 + Math.random() * 800;
      setTimeout(() => {
        pushMessage({
          id: `b-${Date.now()}`,
          from: "bot",
          text: botFollowUps[responseIndexRef.current % botFollowUps.length],
        });
        responseIndexRef.current += 1;
        setTyping(false);
      }, delay);
    }, 5500 + Math.random() * 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages, typing]);

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    pushMessage({ id: `u-${Date.now()}`, from: "user", text: newMsg });
    setNewMsg("");
    setTyping(true);
    setTimeout(() => {
      pushMessage({
        id: `b-${Date.now()}`,
        from: "bot",
        text: "Thanks for the message — our team will follow up with you shortly.",
      });
      setTyping(false);
    }, 1500);
  };

  return (
    <motion.div
      className={styles.chatCard}
      initial={{ opacity: 0, scale: 0.96, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.chatHeader}>
        <span className={styles.chatTitle}><MessagesSquare size={16} /> Live demo — ScapeBot</span>
        <span className={styles.chatStatus}>Online</span>
      </div>
      <div className={styles.chatMessages} ref={scrollRef}>
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              layout
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className={`${styles.chatMessage} ${msg.from === "user" ? styles.chatMessageUser : styles.chatMessageBot}`}
            >
              <span className={`${styles.chatAvatar} ${msg.from === "user" ? styles.chatAvatarUser : styles.chatAvatarBot}`}>
                {msg.from === "user" ? <User size={14} /> : <Bot size={14} />}
              </span>
              <div className={styles.chatBubble}>
                <p>{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <AnimatePresence>
          {typing && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`${styles.chatMessage} ${styles.chatMessageBot}`}
            >
              <span className={`${styles.chatAvatar} ${styles.chatAvatarBot}`}><Bot size={14} /></span>
              <div className={styles.chatBubble}>
                <div className={styles.typingRow}><span /><span /><span /></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.chatInputRow}>
        <input
          type="text"
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Type your message…"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} aria-label="Send message">
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

// ─── DATA ──────────────────────────────────────────────────────────
const heroStats = [
  { end: 650, label: "Projects delivered" },
  { end: 18, label: "Years in industry" },
  { end: 300, label: "Active customers" },
  { end: 500, label: "Employees" },
];

const services = [
  { icon: <Brain size={20} />, art: "consulting", title: "AI Chatbot Consulting", desc: "Before a single line of code is written, we map what the bot actually needs to do, what it should never do, and how it fits your existing support workflow." },
  { icon: <Code size={20} />, art: "dev", title: "Custom Chatbot Development", desc: "Every chatbot is built around your data, your tone of voice, and your operational constraints — architecture, retrieval pipeline, and UI designed together." },
  { icon: <RefreshCw size={20} />, art: "support", title: "Support & Maintenance", desc: "Launch is the beginning, not the end. We keep monitoring accuracy, retraining on new documentation, and patching edge cases after go-live." },
  { icon: <Target size={20} />, art: "strategy", title: "AI Strategy & Roadmapping", desc: "For teams still deciding where a chatbot fits, we score use cases by effort and impact, so your first release solves a real bottleneck." },
];

const solutionTypes = [
  { title: "Rule-based flows", desc: "Deterministic, scripted conversations for simple, high-volume tasks like password resets or order status lookups." },
  { title: "AI assistants for ERPs & CRMs", desc: "Bots that sit on top of your internal systems, answering questions and triggering actions without staff opening the underlying tool." },
  { title: "Complex conversational agents", desc: "Multi-turn, context-aware agents that hold an entire support conversation and know when to hand off to a human." },
  { title: "Lead qualification bots", desc: "Front-of-funnel bots that ask the right qualifying questions and route warm leads straight to sales." },
  { title: "Multi-channel bots", desc: "One knowledge base, deployed consistently across your website, WhatsApp, and in-app chat." },
];

const keyFeatures = [
  { title: "Multilingual support", desc: "Conversations in your customers' language, not just yours." },
  { title: "Data security", desc: "Encryption, access controls, and audit trails by default." },
  { title: "Context-based responses", desc: "The bot remembers what was already said in the conversation." },
  { title: "Multi-channel integration", desc: "Website, app, and messaging platforms from one backend." },
  { title: "Empathy modelling", desc: "Tone that adapts to frustration, urgency, or confusion." },
  { title: "Confidence-aware escalation", desc: "Hands off to a human the moment certainty drops." },
];

const whyUs = [
  { icon: <Shield size={18} />, title: "Security you can trust", desc: "ISO 9001 and ISO 27001 certification underpin every project we ship." },
  { icon: <Award size={18} />, title: "Proven expertise", desc: "Nearly two decades of experience across 650+ delivered projects." },
  { icon: <Zap size={18} />, title: "Rapid delivery", desc: "Proof of concept in 2–6 weeks, MVP in 2–4 months, on time and on budget." },
  { icon: <Target size={18} />, title: "Case-by-case approach", desc: "No generic templates — 300+ clients have needed 300+ different solutions." },
  { icon: <Star size={18} />, title: "Industry recognition", desc: "Rated 4.8/5 on Clutch and recognized by independent review platforms." },
  { icon: <CheckCircle2 size={18} />, title: "Accuracy-first measurement", desc: "We track resolution rate and precision, not just conversation volume." },
];

const projects = [
  { title: "AI chatbot for customer service", client: "SaaS support desk", result: "24/7 coverage", art: "resultBars", desc: "An AI chatbot built to be a company's front-line support representative around the clock, grounded in the internal knowledge base with retrieval-augmented generation." },
  { title: "AI chat assistant rollout", client: "Multi-language support desk", result: "Multi-language rollout", art: "conversation", desc: "A conversational assistant deployed across a client's website and app, trained with retrieval, an LLM, and a reasoning-and-acting agent loop." },
];

const industries = ["Fintech & Banking", "Healthcare", "Ecommerce", "Media & Entertainment", "E-learning", "Telecommunications", "Manufacturing", "Logistics", "Agriculture", "Automotive", "IoT", "Sports & Lifestyle", "Security", "Tourism & Hospitality", "Oil & Gas", "Retail", "Professional Services", "IT Services"];

const keyTech = [
  { name: "Large language models", desc: "Models like GPT-4 and LLaMA generate human-like replies by weighing context and the shape of the conversation so far — what makes a bot feel like it's listening, not pattern-matching keywords." },
  { name: "Retrieval-augmented generation", desc: "RAG pulls information from your documents and APIs in real time before the model answers — the single biggest lever for reducing hallucinations." },
  { name: "Guardrail models", desc: "A second layer that checks outputs before they reach the user, filtering unsafe or off-brand content without slowing the conversation down." },
  { name: "Speech-to-text / text-to-speech", desc: "Converts spoken language to text and back, opening the door to hands-free voice interactions on kiosks and phone lines." },
];

const collaborationModels = [
  { name: "Team augmentation", tag: "TA", desc: "Scale your in-house team with seasoned AI engineers when you need to fill a skill gap fast.", features: ["Extensive scope", "Flexible budget", "Pay-as-you-go"] },
  { name: "Dedicated team", tag: "DT", desc: "A hand-picked team working exclusively on your project for deep, long-term involvement.", features: ["Large talent pool", "Cost savings", "Transparent pricing"] },
  { name: "End-to-end delivery", tag: "EPD", desc: "From idea to launch, we handle everything, delivered on time and within budget.", features: ["Predefined scope", "Fixed budget", "Warranty & support"] },
];

const benefits = [
  { icon: <Clock size={18} />, title: "24/7 support", desc: "A well-built bot answers outside office hours and across time zones without a queue." },
  { icon: <Workflow size={18} />, title: "Process automation", desc: "Repetitive work — ticket logging, password resets, complaint intake — happens without a human touching it." },
  { icon: <Building size={18} />, title: "Stronger brand consistency", desc: "The same tone and messaging across every channel, the way a well-trained agent would deliver it." },
  { icon: <DollarSign size={18} />, title: "Lower operational cost", desc: "Chatbots typically cost a fraction of a human interaction, and cut onboarding overhead too." },
  { icon: <TrendingUp size={18} />, title: "Higher conversion", desc: "Well-designed chatbots have been shown to lift conversion rates meaningfully in ecommerce and retail." },
  { icon: <PieChart size={18} />, title: "Better customer analytics", desc: "Every conversation is a data point feeding directly back into sales and marketing." },
];

const implementationSteps = [
  { title: "Define objectives and use cases", desc: "Start narrow. One well-solved problem beats a bot that tries to do everything at launch." },
  { title: "Choose the right chatbot type", desc: "Rule-based, retrieval-augmented, or a full conversational agent — the right choice depends on the use case." },
  { title: "Select platform and technology", desc: "Model, hosting, and integration surface, chosen against your existing stack." },
  { title: "Design the conversation flow", desc: "Map the real conversations your support team already has, including the ones that go wrong." },
  { title: "Develop and ground the bot", desc: "Build the retrieval pipeline against your actual documentation, not a sample dataset." },
  { title: "Integrate with business systems", desc: "CRM, helpdesk, and ticketing tools, so the bot can act, not just answer." },
  { title: "Test rigorously", desc: "Adversarial testing against edge cases, ambiguous phrasing, and attempts to jailbreak the bot." },
  { title: "Deploy and monitor", desc: "Launch with logging in place from day one — you can't improve what you can't see." },
  { title: "Optimize continuously", desc: "Retrain on new documentation and real conversation logs on a regular cadence." },
];

const faqs = [
  { q: "How much does it cost to develop an AI chatbot?", a: "Cost depends on scope, integrations, and how much of your existing data needs to be structured for retrieval. We size projects after a short discovery call rather than quoting blind." },
  { q: "How long does it take to build one?", a: "A proof of concept typically ships in 2–6 weeks. A production-ready MVP takes 2–4 months. Larger, multi-system integrations take longer." },
  { q: "How do you prevent the bot from making things up?", a: "We ground every answer strictly in your documentation through retrieval-augmented generation. When confidence is genuinely low, the bot escalates to a human instead of guessing." },
  { q: "Which platforms can it integrate with?", a: "Websites, mobile apps, WhatsApp and other messaging platforms, and helpdesk or CRM systems like Zendesk, Salesforce, and Intercom." },
  { q: "How do you handle data security and privacy?", a: "Enterprise-grade encryption, strict access controls, and compliance with regulations such as GDPR and HIPAA where applicable. Your data is never used to train models for anyone else." },
  { q: "How do we know if the chatbot is actually helping?", a: "We track resolution rate, answer accuracy, and customer satisfaction — not raw conversation volume, which can hide a bot that's busy but not useful." },
  { q: "Can it hand off to a human agent?", a: "Yes — escalation logic is built in from the start, triggered by low confidence, explicit request, or signs of frustration." },
  { q: "Do you offer a trial before full commitment?", a: "We typically start with a scoped proof of concept, tested against a sample of your real support tickets, before any larger build begins." },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────
const ChatbotDevelopmentPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (i) => setOpenFAQ(openFAQ === i ? null : i);

  return (
    <PageLayout>
      <SEO
        title="AI Chatbot Development Services | Scape Data Solutions"
        description="Custom AI chatbots grounded in your own data — RAG, LLMs, and enterprise-grade security. 650+ projects delivered."
        path="/services/chatbot-development"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "AI Chatbot Development",
              provider: { "@type": "Organization", name: "Scape Data Solutions", url: "https://www.scapedatasolutions.com" },
              areaServed: ["US", "CA", "PK", "KE", "GB"],
              description: "Conversational AI tools that answer accurately from your own documentation and data.",
              offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", price: "Contact for pricing" } },
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            },
          ],
        }}
      />

      {/* ═══ HERO — copy sits right under the nav ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.container}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeTag}>New</span> AI chatbot development
              </div>
              <h1 className={styles.heroTitle}>
                AI chatbots that actually know your business
              </h1>
              <p className={styles.heroSub}>
                We design, build, and ground conversational AI in your own documentation — so it answers accurately
                instead of guessing, and knows exactly when to hand off to a human.
              </p>
              <div className={styles.heroBtnRow}>
                <Link to="/contact" className={styles.btnPrimary}>Get a consultation <ArrowRight size={16} /></Link>
                <a href="#services" className={styles.btnSecondary}>See how it works</a>
              </div>
            </div>
            <div className={styles.heroVisual}>
              <BusinessChat />
              <ArtBlock variant="network" wrapClass={styles.artHero} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className={styles.statsBand}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {heroStats.map((s, i) => (
              <div key={i}>
                <Counter end={s.end} />
                <p className={styles.statsLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <ScrollSection>
        <section id="services" className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>What we do</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Our AI chatbot development services</h2>
              <p className={`${styles.secSubtitle} ${styles.secSubtitleCenter}`}>
                We lean on retrieval-augmented generation, careful prompt design, and cloud infrastructure to build
                chatbots that understand what users actually mean — not just the words they typed.
              </p>
            </div>
            <div className={styles.featureGrid}>
              {services.map((s, i) => (
                <div key={i} className={styles.featureCard}>
                  <ArtBlock variant={s.art} index={i} />
                  <span className={styles.featureCardIcon}>{s.icon}</span>
                  <p className={styles.featureCardTitle}>{s.title}</p>
                  <p className={styles.featureCardDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Solutions ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.solutionsLayout}>
              <div>
                <span className={styles.secLabel}>Chatbot types</span>
                <h2 className={styles.secTitle}>Chatbot solutions we build</h2>
                <p className={styles.secSubtitle}>
                  Complexity should match the problem, not the budget you have left over. We build across the full
                  range, from simple deterministic flows to agents that hold an entire support conversation.
                </p>
                <ul className={styles.serviceList}>
                  {solutionTypes.map((s, i) => (
                    <li key={i} className={styles.serviceItem}>
                      <div>
                        <p className={styles.serviceTitle}>{s.title}</p>
                        <p className={styles.serviceDesc}>{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <ArtBlock variant="network" wrapClass={styles.artTall} />
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Key features — quiet reference list ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>Under the hood</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Key chatbot features</h2>
              <p className={`${styles.secSubtitle} ${styles.secSubtitleCenter}`}>
                Modern chatbots don't rely on matching phrases against a script. Here's what we build into every one.
              </p>
            </div>
            <div className={styles.defList}>
              {keyFeatures.map((f, i) => (
                <div key={i} className={styles.defRow}>
                  <p className={styles.defTerm}><CheckCircle2 size={16} /> {f.title}</p>
                  <p className={styles.defDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Why us ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>Why us</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Why choose us as your chatbot partner</h2>
            </div>
            <div className={styles.whyGrid}>
              {whyUs.map((item, i) => (
                <div key={i} className={styles.whyCard}>
                  <span className={styles.whyCardIcon}>{item.icon}</span>
                  <p className={styles.whyCardTitle}>{item.title}</p>
                  <p className={styles.whyCardDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Projects ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>Case studies</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Projects we're proud of</h2>
            </div>
            <div className={styles.caseList}>
              {projects.map((p, i) => (
                <div key={i} className={styles.caseItem}>
                  <ArtBlock variant={p.art} index={i} />
                  <div className={styles.caseBody}>
                    <div className={styles.caseHeader}>
                      <span className={styles.caseTitle}>{p.title}</span>
                      <span className={styles.caseResult}>{p.result}</span>
                    </div>
                    <p className={styles.caseClient}>{p.client}</p>
                    <p>{p.desc}</p>
                    <Link to="/case-studies" className={styles.caseLink}>Read more <ArrowRight size={14} /></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Industries ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>Industries</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Industries we build chatbots for</h2>
              <p className={`${styles.secSubtitle} ${styles.secSubtitleCenter}`}>
                No matter your sector, we craft solutions around the workflows you already have.
              </p>
            </div>
            <ul className={styles.industryList}>
              {industries.map((ind, i) => (
                <li key={i} className={styles.industryItem}><span className={styles.industryName}>{ind}</span></li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Key technologies ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.techLayout}>
              <ArtBlock variant="circuit" wrapClass={styles.artTall} />
              <div>
                <span className={styles.secLabel}>Technology</span>
                <h2 className={styles.secTitle}>Key technologies behind AI chatbots</h2>
                <ul className={styles.serviceList}>
                  {keyTech.map((tech, i) => (
                    <li key={i} className={styles.serviceItem}>
                      <div>
                        <p className={styles.serviceTitle}>{tech.name}</p>
                        <p className={styles.serviceDesc}>{tech.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Collaboration models ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>Ways to work together</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Our collaboration models</h2>
            </div>
            <div className={styles.collabGrid}>
              {collaborationModels.map((model, i) => (
                <div key={i} className={styles.collabCard}>
                  <span className={styles.collabTag}>{model.tag}</span>
                  <h3>{model.name}</h3>
                  <p>{model.desc}</p>
                  <ul>{model.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Benefits ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>Outcomes</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Benefits of custom chatbot development</h2>
            </div>
            <div className={styles.defList}>
              {benefits.map((b, i) => (
                <div key={i} className={styles.benefitCard}>
                  <p className={styles.benefitTerm}>{b.icon} {b.title}</p>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Evolution / history ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.historyLayout}>
              <ArtBlock variant="network" wrapClass={styles.artSticky} />
              <div>
                <span className={styles.secLabel}>Context</span>
                <h2 className={styles.secTitle}>From ELIZA to modern LLMs</h2>
                <p>
                  Chatbots aren't new — they date back to 1966, when Joseph Weizenbaum built ELIZA at MIT to mimic a
                  psychotherapist by reflecting a user's own words back at them. PARRY followed in 1972, simulating a
                  patient rather than a therapist. Jabberwacky, starting in 1988, was among the first to learn from
                  the conversations it had rather than run from a fixed script.
                </p>
                <p>
                  A.L.I.C.E. arrived in 1995 as one of the first bots capable of giving genuinely context-relevant
                  replies, and by the early 2000s SmarterChild was doing something similar on mainstream messaging
                  platforms, reaching millions of casual users who had no idea they were talking to software.
                </p>
                <p>
                  The 2010s brought voice assistants like Alexa and scheduling tools like x.ai. Today, models like
                  GPT-4 do something qualitatively different: they reason across long context windows — which is
                  what makes grounding them in your own data, rather than the open internet, the difference between
                  a bot that helps and one that confidently misleads.
                </p>
                <h3>How we roll out a chatbot</h3>
                <ol className={styles.stepList}>
                  {implementationSteps.map((s, i) => (
                    <li key={i}>
                      <strong>{s.title}.</strong> {s.desc}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Grounded in your data ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.scapeLayout}>
              <div>
                <span className={styles.secLabel}>Our approach</span>
                <h2 className={styles.secTitle}>Grounded in your actual knowledge base</h2>
                <p className={styles.secSubtitle}>
                  Conversational tools that answer accurately from your own documentation and data — not a generic
                  FAQ bot wearing your logo.
                </p>
                <p className={styles.quote}>"Our chatbot gives confidently wrong answers about our own products."</p>
                <p>
                  That's the complaint we hear most often, and it has a specific cause: generic chatbots aren't
                  grounded in your specific product, policies, or knowledge base, so they generate plausible-sounding
                  answers instead of correct ones. That erodes trust faster than having no chatbot at all.
                </p>
                <p>
                  We build chatbots grounded directly in your documentation, designed to escalate to a human the
                  moment confidence genuinely drops, and measured by resolution rate and accuracy — not conversation
                  volume, which can make a useless bot look busy.
                </p>
                <ul className={styles.checkList}>
                  <li><CheckCircle2 size={16} /> Conversation design mapped to your real support use cases</li>
                  <li><CheckCircle2 size={16} /> Retrieval grounding in your documentation and knowledge base</li>
                  <li><CheckCircle2 size={16} /> Escalation logic for low-confidence situations</li>
                  <li><CheckCircle2 size={16} /> Integration with your existing support and CRM tools</li>
                  <li><CheckCircle2 size={16} /> Ongoing accuracy monitoring and conversation analytics</li>
                </ul>
              </div>
              <ArtBlock variant="grounded" wrapClass={styles.artSticky} />
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── FAQ ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>FAQ</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Frequently asked questions</h2>
            </div>
            <div className={styles.faqList}>
              {faqs.map((item, idx) => (
                <FAQItem key={idx} question={item.q} answer={item.a} isOpen={openFAQ === idx} toggle={() => toggleFAQ(idx)} />
              ))}
            </div>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Contact — form only, offices live in the footer ─── */}
      <ScrollSection>
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>Get in touch</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Ready to talk about chatbot development?</h2>
              <p className={`${styles.secSubtitle} ${styles.secSubtitleCenter}`}>
                Tell us about your data and what you're trying to achieve — we'll take it from there.
              </p>
            </div>
            <form className={styles.cForm}>
              <div className={styles.fGroup}>
                <label className={styles.fLabel}>Full name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className={styles.fGroup}>
                <label className={styles.fLabel}>Email</label>
                <input type="email" placeholder="john@company.com" />
              </div>
              <div className={styles.fGroup}>
                <label className={styles.fLabel}>Message</label>
                <textarea rows="4" placeholder="Tell us about your chatbot needs…" />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className={styles.submitBtn}>
                Send message <ArrowRight size={16} />
              </motion.button>
            </form>
          </div>
        </section>
      </ScrollSection>

      {/* ─── Final CTA ─── */}
      <ScrollSection>
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={styles.finalCtaContent}>
              <h2>Start your digital transformation journey today</h2>
              <p>Drop us a line and our team will get back to you within one business day.</p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ display: "inline-block" }}>
                <Link to="/contact" className={styles.finalCtaBtn}>Contact us <ArrowRight size={16} /></Link>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollSection>
    </PageLayout>
  );
};

export default ChatbotDevelopmentPage;