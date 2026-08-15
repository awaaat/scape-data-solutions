import { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Brain,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Heart,
  Hospital,
  Loader2,
  Send,
  Server,
  Shield,
  Sparkles,
  Users,
  Clock,
  Zap,
  Activity,
  AlertTriangle,
  Database,
  Gauge,
  Building2,
  TrendingUp,
  Lock,
  Check,
  Info,
  LayoutGrid,
  Monitor,
  User,
  ExternalLink,
  BookOpen,
  Percent,
  Thermometer,
  Wind,
  Droplet,
  FlaskConical,
  Trophy,
  RotateCcw,
  XCircle,
  PlayCircle,
  Target,
} from "lucide-react";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SEO from "../../../components/SEO/SEO";
import styles from "./ClinicalDecisionSupportPage.module.css";

// ─── ROTATING WORDS ───
const ROTATING_WORDS = [
  "Evidence-Based Alerts",
  "Real-Time Risk Scoring",
  "EHR Workflow Integration",
  "Patient-Specific Insights",
  "Actionable Recommendations",
  "Sepsis Prediction",
  "Deterioration Detection",
  "Clinical Intelligence",
];

// ─── TYPEWRITER HOOK ───
function useTypewriter(words, speed = 120, pause = 12000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [holding, setHolding] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let t;
    if (!deleting && text.length < current.length) {
      setHolding(false);
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      setHolding(true);
      t = setTimeout(() => {
        setHolding(false);
        setDeleting(true);
      }, pause);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return { text, holding };
}

// ─── COUNTER HOOK ───
function useCounter(target, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!inView) return;
    let startTime;
    let frame;
    const update = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(update);
    }, delay);
    return () => {
      clearTimeout(timeout);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [inView, target, duration, delay]);

  return { count, ref };
}

// ─── PARTICLES BACKGROUND ───
function ParticleBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const count = 120;
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.1,
        color: Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6",
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#3b82f6";
            ctx.globalAlpha = 0.05 * (1 - dist / 150);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.particlesCanvas} />;
}

// ─── SMALL CUSTOM SVG: STAT RING ───
function StatRing({ percent, size = 88, stroke = 6 }) {
  const r = (size - stroke) / 2;
  const circumference = 2 * Math.PI * r;
  const clamped = Math.max(0, Math.min(100, percent));
  const offset = circumference * (1 - clamped / 100);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={styles.statRingSvg}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="url(#statRingGradient)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <defs>
        <linearGradient id="statRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── CUSTOM SVG PANEL: ALERT OVERRIDE GAUGE ───
function AlertOverrideGauge() {
  const min = 46;
  const max = 96;
  return (
    <div className={styles.overridePanel}>
      <div className={styles.overridePanelHeader}>
        <Percent size={18} color="#f59e0b" />
        <span>Reported CDS Alert Override Rates</span>
      </div>
      <svg viewBox="0 0 320 90" className={styles.overrideSvg}>
        <defs>
          <linearGradient id="overrideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        <rect x="10" y="34" width="300" height="14" rx="7" fill="rgba(255,255,255,0.06)" />
        <rect
          x={10 + (min / 100) * 300}
          y="34"
          width={((max - min) / 100) * 300}
          height="14"
          rx="7"
          fill="url(#overrideGradient)"
        />
        <line x1={10 + (min / 100) * 300} y1="20" x2={10 + (min / 100) * 300} y2="62" stroke="#94a3b8" strokeWidth="1" />
        <line x1={10 + (max / 100) * 300} y1="20" x2={10 + (max / 100) * 300} y2="62" stroke="#94a3b8" strokeWidth="1" />
        <text x={10 + (min / 100) * 300} y="16" textAnchor="middle" fontSize="11" fill="#e2e8f0" fontWeight="600">
          {min}%
        </text>
        <text x={10 + (max / 100) * 300} y="16" textAnchor="middle" fontSize="11" fill="#e2e8f0" fontWeight="600">
          {max}%
        </text>
        <text x="10" y="80" fontSize="9" fill="#64748b">0%</text>
        <text x="290" y="80" fontSize="9" fill="#64748b">100%</text>
      </svg>
      <p className={styles.overrideCaption}>
        Across published studies, clinicians override anywhere from 46% to 96% of CDS alerts — the
        core reason alert design and specificity matter as much as detection accuracy.
      </p>
      <span className={styles.overrideSource}>Sources: JAMIA systematic review, 2026; Frontiers in Digital Health, 2025</span>
    </div>
  );
}

// ─── CUSTOM SVG PANEL: ALERT WORKFLOW DIAGRAM ───
function WorkflowDiagram() {
  const steps = [
    { label: "Clinical Data", sub: "Labs · vitals · history" },
    { label: "Risk Engine", sub: "Guideline + model scoring" },
    { label: "EHR Alert", sub: "Surfaced in workflow" },
    { label: "Clinician Action", sub: "Reviewed & actioned" },
  ];
  const boxW = 150;
  const boxH = 64;
  const gap = 40;
  const totalW = steps.length * boxW + (steps.length - 1) * gap;
  return (
    <div className={styles.workflowPanel}>
      <svg viewBox={`0 0 ${totalW} 120`} className={styles.workflowSvg} preserveAspectRatio="xMidYMid meet">
        {steps.map((s, i) => {
          const x = i * (boxW + gap);
          return (
            <g key={i}>
              <rect
                x={x}
                y={20}
                width={boxW}
                height={boxH}
                rx="12"
                fill="rgba(59,130,246,0.08)"
                stroke="#3b82f6"
                strokeWidth="1.5"
              />
              <text x={x + boxW / 2} y={45} textAnchor="middle" fontSize="13" fontWeight="700" fill="#e2e8f0">
                {s.label}
              </text>
              <text x={x + boxW / 2} y={64} textAnchor="middle" fontSize="10" fill="#94a3b8">
                {s.sub}
              </text>
              {i < steps.length - 1 && (
                <line
                  x1={x + boxW}
                  y1={20 + boxH / 2}
                  x2={x + boxW + gap}
                  y2={20 + boxH / 2}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd="url(#arrowHead)"
                />
              )}
            </g>
          );
        })}
        <defs>
          <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}

// ─── INTERACTIVE: SEPSIS RISK SIMULATOR ───
function SepsisRiskSimulator() {
  const [vitals, setVitals] = useState({
    hr: 88,
    temp: 98.6,
    rr: 16,
    sbp: 118,
    wbc: 8,
    lactate: 1.2,
  });

  const risk = useMemo(() => {
    let points = 0;
    if (vitals.hr > 90) points += Math.min((vitals.hr - 90) / 50, 1) * 20;
    if (vitals.temp > 100.4 || vitals.temp < 96.8) points += 15;
    if (vitals.rr >= 22) points += Math.min((vitals.rr - 22) / 18, 1) * 20;
    if (vitals.sbp <= 100) points += Math.min((100 - vitals.sbp) / 40, 1) * 25;
    if (vitals.wbc > 12 || vitals.wbc < 4) points += 10;
    if (vitals.lactate > 2) points += Math.min((vitals.lactate - 2) / 6, 1) * 10;
    return Math.min(Math.round(points), 100);
  }, [vitals]);

  const band =
    risk < 30
      ? { label: "Low Risk", color: "#22c55e" }
      : risk < 60
      ? { label: "Moderate Risk", color: "#f59e0b" }
      : { label: "High Risk", color: "#ef4444" };

  const set = (key) => (e) => setVitals((v) => ({ ...v, [key]: Number(e.target.value) }));

  const SLIDERS = [
    { key: "hr", label: "Heart Rate", unit: " bpm", min: 50, max: 160, icon: <Heart size={14} /> },
    { key: "temp", label: "Temperature", unit: "°F", min: 95, max: 105, step: 0.1, icon: <Thermometer size={14} /> },
    { key: "rr", label: "Respiratory Rate", unit: "/min", min: 8, max: 40, icon: <Wind size={14} /> },
    { key: "sbp", label: "Systolic BP", unit: " mmHg", min: 60, max: 160, icon: <Activity size={14} /> },
    { key: "wbc", label: "WBC Count", unit: " k/µL", min: 2, max: 25, icon: <FlaskConical size={14} /> },
    { key: "lactate", label: "Lactate", unit: " mmol/L", min: 0.5, max: 8, step: 0.1, icon: <Droplet size={14} /> },
  ];

  return (
    <div className={styles.simPanel}>
      <div className={styles.simSliders}>
        {SLIDERS.map((s) => (
          <div key={s.key} className={styles.simSliderRow}>
            <div className={styles.simSliderLabel}>
              {s.icon}
              <span>{s.label}</span>
              <span className={styles.simSliderValue}>
                {vitals[s.key]}
                {s.unit}
              </span>
            </div>
            <input
              type="range"
              min={s.min}
              max={s.max}
              step={s.step || 1}
              value={vitals[s.key]}
              onChange={set(s.key)}
              className={styles.simRange}
            />
          </div>
        ))}
      </div>
      <div className={styles.simResult}>
        <div className={styles.simGaugeWrap}>
          <StatRing percent={risk} size={140} stroke={10} />
          <div className={styles.simGaugeNumber} style={{ color: band.color }}>
            {risk}%
          </div>
        </div>
        <span className={styles.simBand} style={{ color: band.color, borderColor: band.color }}>
          {band.label}
        </span>
        <p className={styles.simVerdict}>
          {risk < 30
            ? "No alert would fire — vitals sit within a typical range."
            : risk < 60
            ? "A moderate-priority alert would surface for clinician review."
            : "A high-priority alert would fire, recommending sepsis protocol review."}
        </p>
        <p className={styles.simDisclaimer}>
          A simplified, illustrative model — not qSOFA or a clinical scoring tool. Built to show how a
          CDS risk engine reacts to changing vitals, not to score real patients.
        </p>
      </div>
    </div>
  );
}

// ─── INTERACTIVE: ALERT TRIAGE GAME ───
const ALERT_SCENARIOS = [
  {
    patient: "Patient #A",
    vitals: "HR 118 · Temp 101.8°F · RR 24 · Lactate 3.2",
    context: "Post-op day 2, new confusion noted by nursing",
    actionable: true,
    explanation: "Two-plus risk criteria plus elevated lactate and altered mentation — a genuine escalation signal.",
  },
  {
    patient: "Patient #B",
    vitals: "HR 92 · Temp 99.1°F · RR 16 · Lactate 1.1",
    context: "Known anxiety, mild tachycardia after a painful dressing change",
    actionable: false,
    explanation: "Isolated mild tachycardia with normal lactate and mentation — a common false positive.",
  },
  {
    patient: "Patient #C",
    vitals: "HR 128 · Temp 103.2°F · RR 28 · Lactate 4.6",
    context: "New productive cough, hypotensive on standing",
    actionable: true,
    explanation: "High fever, tachypnea, and markedly elevated lactate — a classic multi-criteria picture.",
  },
  {
    patient: "Patient #D",
    vitals: "HR 84 · Temp 100.6°F · RR 18 · Lactate 1.4",
    context: "Low-grade fever, recent vaccination",
    actionable: false,
    explanation: "A low-grade fever alone with otherwise normal vitals — most likely a benign response.",
  },
  {
    patient: "Patient #E",
    vitals: "HR 110 · Temp 102.4°F · RR 26 · Lactate 3.9",
    context: "Indwelling catheter, new flank pain",
    actionable: true,
    explanation: "Fever, tachycardia, and elevated lactate with a plausible infection source — worth escalating.",
  },
  {
    patient: "Patient #F",
    vitals: "HR 96 · Temp 98.9°F · RR 20 · Lactate 1.0",
    context: "Anxious about discharge, slightly elevated HR at triage",
    actionable: false,
    explanation: "Vitals are essentially normal — a routine reading that shouldn't need escalation.",
  },
];

function AlertTriageGame() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [lastResult, setLastResult] = useState(null);
  const [finished, setFinished] = useState(false);

  const current = ALERT_SCENARIOS[index];

  const answer = (actedOn) => {
    const correct = actedOn === current.actionable;
    if (correct) setScore((s) => s + 1);
    setLastResult({ correct, explanation: current.explanation });
  };

  const next = () => {
    setLastResult(null);
    if (index + 1 < ALERT_SCENARIOS.length) {
      setIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setLastResult(null);
    setFinished(false);
  };

  if (finished) {
    return (
      <div className={styles.gameFinished}>
        <Trophy size={32} color="#f59e0b" />
        <h4>
          {score} / {ALERT_SCENARIOS.length} correct
        </h4>
        <p>
          Published research puts real-world CDS override rates between 46% and 96% — every alert you
          just triaged is the kind of judgment call clinicians make dozens of times a shift.
        </p>
        <button className={styles.btnSecondary} onClick={restart}>
          <RotateCcw size={14} /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.gamePanel}>
      <div className={styles.gameProgress}>
        <span>
          Alert {index + 1} of {ALERT_SCENARIOS.length}
        </span>
        <span>Score: {score}</span>
      </div>
      <div className={styles.gameCard}>
        <div className={styles.alertBadge}>⚠️ NEW ALERT</div>
        <div className={styles.alertRow}>
          <span className={styles.alertPatient}>{current.patient}</span>
        </div>
        <p className={styles.gameVitals}>{current.vitals}</p>
        <p className={styles.gameContext}>{current.context}</p>
      </div>

      {lastResult ? (
        <div className={styles.gameFeedback}>
          {lastResult.correct ? <CheckCircle size={18} color="#22c55e" /> : <XCircle size={18} color="#ef4444" />}
          <p>{lastResult.explanation}</p>
          <button className={styles.btnPrimary} onClick={next}>
            {index + 1 < ALERT_SCENARIOS.length ? "Next Alert" : "See Results"} <ArrowRight size={14} />
          </button>
        </div>
      ) : (
        <div className={styles.gameActions}>
          <button className={styles.btnPrimary} onClick={() => answer(true)}>
            <Target size={14} /> Act on Alert
          </button>
          <button className={styles.btnSecondary} onClick={() => answer(false)}>
            Override
          </button>
        </div>
      )}
    </div>
  );
}

// ─── INTERACTIVE: TABBED WRAPPER ───
function InteractiveDemo() {
  const [tab, setTab] = useState("simulator");
  return (
    <div className={styles.interactiveWrap}>
      <div className={styles.interactiveTabs}>
        <button
          className={tab === "simulator" ? styles.interactiveTabActive : styles.interactiveTab}
          onClick={() => setTab("simulator")}
        >
          <Gauge size={14} /> Risk Score Simulator
        </button>
        <button
          className={tab === "game" ? styles.interactiveTabActive : styles.interactiveTab}
          onClick={() => setTab("game")}
        >
          <PlayCircle size={14} /> Alert Triage Challenge
        </button>
      </div>
      {tab === "simulator" ? <SepsisRiskSimulator /> : <AlertTriageGame />}
    </div>
  );
}

// ─── ANIMATION VARIANTS ───
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const VIEWPORT = { once: false, amount: 0.12 };

// ─── DATA ───
const WHO_THIS_IS_FOR = [
  { icon: <Hospital size={20} />, title: "Hospitals", desc: "Surface real-time clinical alerts to support faster recognition of deteriorating patients." },
  { icon: <Building2 size={20} />, title: "Clinics", desc: "Give clinicians evidence-based recommendations at the point of care." },
  { icon: <Users size={20} />, title: "Clinical Informatics Teams", desc: "Integrate patient data with guidelines to drive measurable quality improvements." },
  { icon: <Heart size={20} />, title: "Health Systems", desc: "Scale decision support across an organization with unified data pipelines." },
];

const WHATS_INCLUDED = [
  { title: "Real-time Clinical Risk Alerts", desc: "Sepsis, deterioration, and other critical risk flags surfaced as data changes." },
  { title: "Evidence-Based Recommendations", desc: "Guideline-driven suggestions, not generic thresholds." },
  { title: "Patient-Specific Risk Scoring", desc: "Built from labs, vitals, history, and real-time clinical data." },
  { title: "EHR Workflow Integration", desc: "Alerts appear directly in the clinical workflow via HL7/FHIR." },
  { title: "Alert Effectiveness Tracking", desc: "Measure adoption, override rates, and clinician action over time." },
  { title: "HIPAA & SOC 2 Aligned Architecture", desc: "Built with encryption at rest and in transit, and BAA-ready processes." },
  { title: "Cloud-Native Scalability", desc: "Deployable on AWS/Azure with auto-scaling for varying hospital size." },
  { title: "Automated Reporting", desc: "Generate compliance and quality reports on a schedule." },
];

const TOOLS_USED = [
  { name: "SQL" },
  { name: "Python" },
  { name: "HL7/FHIR" },
  { name: "TensorFlow" },
  { name: "PyTorch" },
  { name: "Apache Airflow" },
  { name: "Docker" },
  { name: "Kubernetes" },
];

const WHY_WORK_WITH_US = [
  "Alerts appear inside the EHR workflow, not a separate system to check.",
  "Built on evidence-based guidelines, not generic thresholds.",
  "We track clinician adoption and override rates, not just alert volume.",
  "Designed to reduce alert fatigue by prioritizing genuinely actionable flags — the 46-96% override rates seen industry-wide are the problem we design against.",
  "Every alert traces back to a specific guideline or model, so clinicians can see why it fired.",
  "Built with input from practicing clinicians to minimize workflow disruption.",
];

const EVIDENCE = [
  {
    icon: <Activity size={20} color="#3b82f6" />,
    title: "Sepsis Alerts and Mortality",
    finding:
      "A systematic review and meta-analysis of 22 studies covering 19,580 emergency department patients found that sepsis alert systems were associated with lower mortality, shorter hospital stays, and improved adherence to sepsis treatment bundles.",
    source: "JAMA Network Open, 2024",
    url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2821277",
  },
  {
    icon: <Gauge size={20} color="#3b82f6" />,
    title: "Machine Learning Early Warning",
    finding:
      "Across five hospitals monitoring nearly 591,000 patients, sepsis alerts that a clinician acted on within three hours were linked to an 18.7% relative reduction in in-hospital mortality.",
    source: "Nature Medicine, 2022 (TREWS study)",
    url: "https://www.nature.com/articles/s41591-022-01894-0",
  },
  {
    icon: <Shield size={20} color="#3b82f6" />,
    title: "Medication Safety",
    finding:
      "A multicenter randomized controlled trial of an AI-enhanced, EHR-integrated CDS system found a 49.2% reduction in medication error rates and a 47.2% reduction in adverse drug events, with clinician adoption rising from 42% to 89% over 12 months.",
    source: "Multicenter RCT, 2026",
    url: "https://pubmed.ncbi.nlm.nih.gov/42054932/",
  },
];

const FAQS = [
  { q: "Won't this add to alert fatigue clinicians already deal with?", a: "That's the central design problem. Published research puts CDS alert override rates between 46% and 96% — our approach is to prioritize genuinely actionable, patient-specific flags rather than generic thresholds, and to track override rates as a core metric, not an afterthought." },
  { q: "Can this integrate with our existing EHR?", a: "Yes. We integrate with EHRs using HL7/FHIR standards. Alerts appear directly in the clinical workflow you already use, not a separate system to check." },
  { q: "How long does implementation take?", a: "Timelines vary by scope and EHR environment. We typically start with a focused pilot on one clinical decision point, then expand based on adoption and outcomes." },
  { q: "What data sources do you use for risk scoring?", a: "We integrate labs, vitals, patient history, medications, and real-time clinical data. Models are built on evidence-based guidelines and validated against your patient population before go-live." },
  { q: "How do you measure success?", a: "We track clinician adoption rates, alert override rates, and downstream clinical outcomes like length of stay and readmission, where measurable." },
  { q: "Is the system built for HIPAA compliance?", a: "Yes. The architecture is built with HIPAA and SOC 2 alignment from day one, with encryption at rest and in transit and BAA-ready processes." },
  { q: "Can we customize the alert thresholds?", a: "Yes. While models are evidence-based, we work with your clinical team to calibrate thresholds to your patient population and practice patterns." },
  { q: "What kind of support do you provide post-implementation?", a: "Ongoing monitoring, model review, and adoption analytics, with a dedicated point of contact for your clinical and IT teams." },
];

const MARKET_BARS = [
  { year: "2024", value: 5.79, max: 10.71 },
  { year: "2025", value: 6.36, max: 10.71 },
  { year: "2030", value: 10.71, max: 10.71 },
];

const STATS = [
  { value: 18.7, prefix: "", suffix: "%", label: "Lower in-hospital mortality when a sepsis alert was acted on within 3 hours", source: "Nature Medicine, 2022" },
  { value: 49.2, prefix: "", suffix: "%", label: "Reduction in medication error rates with an AI-enhanced CDS system", source: "Multicenter RCT, 2026" },
  { value: 96, prefix: "", suffix: "%", label: "Highest reported alert override rate — the problem CDS design still has to solve", source: "JAMIA systematic review, 2026" },
  { value: 10.7, prefix: "$", suffix: "B", label: "Projected size of the global CDS market by 2030", source: "Grand View Research, 2025" },
];

// ─── SCHEMA ───
const SITE_URL = "https://www.scapedatasolutions.com";
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: WHATS_INCLUDED.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: item.title,
      description: item.desc,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: ["US", "CA", "PK", "KE", "GB"],
    },
  })),
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Scape Data Solutions",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  sameAs: ["https://www.linkedin.com/company/scape-data-solutions", "https://twitter.com/scapedata"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-757-598-0582",
    contactType: "Sales",
    email: "info@scapedatasolutions.com",
  },
};

// ─── COMPONENT ───
export default function ClinicalDecisionSupportPage() {
  const [showTop, setShowTop] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [expandedEvidence, setExpandedEvidence] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", hospital: "", phone: "" });

  const { text: typedHeadline, holding } = useTypewriter(ROTATING_WORDS);

  const { count: c1, ref: r1 } = useCounter(STATS[0].value, 2000);
  const { count: c2, ref: r2 } = useCounter(STATS[1].value, 2000);
  const { count: c3, ref: r3 } = useCounter(STATS[2].value, 2000);
  const { count: c4, ref: r4 } = useCounter(STATS[3].value, 2000);

  const counters = [
    { count: c1, ref: r1 },
    { count: c2, ref: r2 },
    { count: c3, ref: r3 },
    { count: c4, ref: r4 },
  ];

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (i) => setExpandedFaq(expandedFaq === i ? null : i);
  const toggleEvidence = (i) => setExpandedEvidence(expandedEvidence === i ? null : i);
  const change = (f, v) => setFormData((p) => ({ ...p, [f]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "", hospital: "", phone: "" });
    } catch (err) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Clinical Decision Support | Evidence-Based Alerts at the Point of Care | Scape Data Solutions"
        description="Real-time clinical risk alerts, patient-specific risk scoring, and evidence-based recommendations integrated directly into your EHR workflow, grounded in published clinical research."
        path="/clinical-decision-support"
        image="/Images/clinical-decision-support-og.webp"
        keywords="clinical decision support, CDS, EHR alerts, sepsis prediction, risk scoring, evidence-based medicine, healthcare AI, alert fatigue"
        schema={{ "@context": "https://schema.org", "@graph": [serviceSchema, faqSchema, organizationSchema] }}
      />
      <Navbar activeNav="services" />

      <main>
        <ParticleBackground />

        {/* ─── HERO ─── */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
                <div className={styles.heroBadge}>
                  <span>AI-Powered Clinical Decision Support</span>
                  <span className={styles.heroBadgeMarket}>$10.7B Market by 2030</span>
                </div>
                <h1 className={styles.heroTitle}>
                  <span>Evidence-Based Alerts</span>
                  <span className={styles.heroTitleHighlight}>at the Point of Care</span>
                </h1>
                <div className={styles.heroTypeWrap}>
                  <span className={styles.heroTypePrefix}>Surface</span>
                  <div className={styles.typeBox}>
                    <span className={styles.typeText}>
                      {typedHeadline}
                      {!holding && <span className={styles.typeCaret}>|</span>}
                    </span>
                  </div>
                </div>
                <p className={styles.heroSub}>
                  Clinical decision support tools that surface patient-specific risk and evidence-based
                  recommendations directly in your workflow — not a separate system to check.
                </p>
                <p className={styles.heroSubNote}>
                  The figures below are drawn from published clinical research on CDS systems, cited
                  throughout this page — not company-specific claims.
                </p>
                <div className={styles.heroBtnRow}>
                  <Link to="/contact" className={styles.btnPrimary}>
                    Get Started <ArrowRight size={16} />
                  </Link>
                  <button
                    className={styles.btnSecondary}
                    onClick={() => document.getElementById("interactive")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <PlayCircle size={14} /> Try It Live
                  </button>
                  <button
                    className={styles.btnSecondary}
                    onClick={() => document.getElementById("evidence")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View the Research
                  </button>
                </div>
                <div className={styles.heroTrust}>
                  <span>Built for hospital-grade infrastructure requirements</span>
                  <div className={styles.trustBadges}>
                    <span>
                      <Shield size={12} /> HIPAA
                    </span>
                    <span>
                      <Lock size={12} /> SOC 2
                    </span>
                    <span>
                      <Database size={12} /> FHIR
                    </span>
                    <span>
                      <Server size={12} /> HL7
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* ─── HERO DASHBOARD VISUAL ─── */}
              <motion.div
                className={styles.heroVisual}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: 0.3 }}
              >
                <div className={styles.heroDashboard}>
                  <div className={styles.dashboardHeader}>
                    <div className={styles.dashboardDots}>
                      <span style={{ background: "#ff5f57" }} />
                      <span style={{ background: "#febc2e" }} />
                      <span style={{ background: "#28c840" }} />
                    </div>
                    <span className={styles.dashboardTitle}>Clinical Decision Support</span>
                    <span className={styles.dashboardLive}>● Sample View</span>
                  </div>
                  <div className={styles.dashboardBody}>
                    <div className={styles.dashboardAlert}>
                      <div className={styles.alertBadge}>⚠️ HIGH RISK</div>
                      <div className={styles.alertRow}>
                        <span className={styles.alertPatient}>Patient #48291</span>
                        <span className={styles.alertCondition}>Sepsis Risk: 87%</span>
                        <span className={styles.alertTime}>Detected: 2min ago</span>
                      </div>
                      <div className={styles.alertAction}>
                        <span>📋 Evidence-Based Recommendation</span>
                        <span>Initiate sepsis protocol per SSC guidelines</span>
                      </div>
                    </div>
                    <div className={styles.dashboardMetrics}>
                      <div>
                        <span>Alert Volume</span>
                        <span className={styles.metricValue}>128</span>
                      </div>
                      <div>
                        <span>Overridden</span>
                        <span className={styles.metricValue}>31%</span>
                      </div>
                      <div>
                        <span>Avg Response</span>
                        <span className={styles.metricValue}>4.2min</span>
                      </div>
                    </div>
                    <div className={styles.dashboardChart}>
                      {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                        <div key={i} className={styles.chartBar} style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <p className={styles.dashboardDisclaimer}>Illustrative interface preview — not live patient data</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className={styles.heroStats}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              {STATS.map((s, i) => (
                <motion.div key={i} className={styles.heroStatItem} variants={fadeUp}>
                  <div className={styles.heroStatRingWrap}>
                    <StatRing percent={Math.min(100, counters[i].count)} />
                    <div className={styles.heroStatNumber}>
                      <span ref={counters[i].ref}>
                        {s.prefix}
                        {counters[i].count.toFixed(1).replace(/\.0$/, "")}
                      </span>
                      {s.suffix}
                    </div>
                  </div>
                  <p className={styles.heroStatLabel}>{s.label}</p>
                  <span className={styles.heroStatSource}>{s.source}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── THESIS BANNER ─── */}
        <motion.section className={styles.quoteBanner} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <blockquote className={styles.quoteBlock}>
              <span className={styles.quoteMark}>"</span>
              <p className={styles.quoteText}>
                The relevant guideline usually exists — it's just not in front of the clinician at the
                moment the decision is being made.
              </p>
            </blockquote>
          </div>
        </motion.section>

        {/* ─── INTERACTIVE DEMO ─── */}
        <motion.section id="interactive" className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <span className={styles.secLabel}>Try It Yourself</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>See the Logic Behind the Alerts</h2>
              <p className={styles.secSubtitle}>
                Two small interactive tools built around the same ideas as the research on this page —
                adjust vitals to see how a risk score reacts, or triage a set of alerts yourself.
              </p>
            </div>
            <InteractiveDemo />
          </div>
        </motion.section>

        {/* ─── PROBLEM SECTION ─── */}
        <motion.section className={`${styles.sec} ${styles.secAlt}`} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <h2 className={styles.secTitle}>Clinicians Are Drowning in Data</h2>
              <p className={styles.secSubtitle}>
                Clinicians have access to more data than ever, yet it's harder than ever to surface the
                data that matters — when and where it matters most.
              </p>
            </div>
            <div className={styles.problemList}>
              <div className={styles.problemItem}>
                <AlertTriangle size={24} color="#f59e0b" />
                <div>
                  <h4>Incomplete Visibility</h4>
                  <p>Clinicians make decisions under time pressure with incomplete patient history and guidelines in view.</p>
                </div>
              </div>
              <div className={styles.problemItem}>
                <Clock size={24} color="#ef4444" />
                <div>
                  <h4>Administrative Burden</h4>
                  <p>Hunting through a lengthy chart consumes time that could go to direct patient care.</p>
                </div>
              </div>
              <div className={styles.problemItem}>
                <Bell size={24} color="#8b5cf6" />
                <div>
                  <h4>Alert Fatigue</h4>
                  <p>Generic alerts get overridden at high rates, which can desensitize clinicians to genuinely critical flags.</p>
                </div>
              </div>
              <div className={`${styles.problemItem} ${styles.problemItemSolution}`}>
                <Zap size={24} color="#3b82f6" />
                <div>
                  <h4>Our Approach</h4>
                  <p>Surface the right information at the right moment — integrated directly into the EHR, tuned against override rates.</p>
                </div>
              </div>
            </div>

            <AlertOverrideGauge />
          </div>
        </motion.section>

        {/* ─── MARKET SIZE ─── */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.marketGrid}>
              <div>
                <h2 className={styles.secTitle}>The CDS Market Is Growing</h2>
                <p className={styles.secSubtitle}>
                  The global clinical decision support systems market was valued at{" "}
                  <strong>$5.79 billion in 2024</strong>, is expected to reach{" "}
                  <strong>$6.36 billion in 2025</strong>, and is projected to grow to{" "}
                  <strong>$10.71 billion by 2030</strong> — an 11.0% compound annual growth rate.
                </p>
                <ul className={styles.marketList}>
                  <li>
                    <Check size={18} color="#22c55e" /> North America holds over 43% of global CDS market share
                  </li>
                  <li>
                    <Check size={18} color="#22c55e" /> The software segment is projected to grow fastest through 2030
                  </li>
                  <li>
                    <Check size={18} color="#22c55e" /> Sepsis alerts show an 18.7% relative mortality reduction when acted on within 3 hours
                  </li>
                  <li>
                    <Check size={18} color="#22c55e" /> AI-enhanced CDS cut medication errors by 49.2% in a 2026 multicenter RCT
                  </li>
                </ul>
                <span className={styles.marketSource}>Source: Grand View Research, 2025</span>
              </div>
              <div className={styles.marketVisual}>
                <div className={styles.marketChart}>
                  {MARKET_BARS.map((b, i) => (
                    <div
                      key={i}
                      className={styles.marketBar}
                      style={{
                        height: `${(b.value / b.max) * 100}%`,
                        background: i === MARKET_BARS.length - 1 ? "#8b5cf6" : "#3b82f6",
                      }}
                    >
                      <span>{b.year}</span>
                    </div>
                  ))}
                </div>
                <p className={styles.marketCaption}>Global CDSS Market Size ($ Billions) — Grand View Research, 2025</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── WHO THIS IS FOR ─── */}
        <motion.section className={`${styles.sec} ${styles.secAlt}`} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>Who This Is For</span>
              <h2 className={styles.secTitle}>Designed for Healthcare Organizations</h2>
              <p className={styles.secSubtitle}>
                Clinicians make decisions under time pressure with incomplete visibility. We surface the
                information they need — right when they need it.
              </p>
            </div>
            <div className={styles.whoGrid}>
              {WHO_THIS_IS_FOR.map((item, i) => (
                <div key={i} className={styles.whoItem}>
                  <div className={styles.whoIcon}>{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── WHAT'S INCLUDED ─── */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <h2 className={styles.secTitle}>What's Included</h2>
              <p className={styles.secSubtitle}>
                Everything needed to surface actionable clinical intelligence at the point of care.
              </p>
            </div>
            <div className={styles.includedList}>
              {WHATS_INCLUDED.map((item, i) => (
                <div key={i} className={styles.includedItem}>
                  <CheckCircle size={20} color="#22c55e" />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── FEATURES ─── */}
        <motion.section className={`${styles.sec} ${styles.secAlt}`} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <span className={styles.secLabel}>Features</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Deep Capabilities</h2>
            </div>
            <div className={styles.featureGrid}>
              <div className={styles.featureBlock}>
                <Activity size={28} color="#3b82f6" />
                <h3>Real-time Monitoring</h3>
                <p>
                  Continuous analysis of patient vitals, labs, and clinical notes to detect early warning
                  signs as data changes.
                </p>
              </div>
              <div className={styles.featureBlock}>
                <TrendingUp size={28} color="#3b82f6" />
                <h3>Predictive Modeling</h3>
                <p>
                  Machine learning models trained on historical patient records, validated against your
                  population before deployment.
                </p>
              </div>
              <div className={styles.featureBlock}>
                <Brain size={28} color="#3b82f6" />
                <h3>Integrated Decision Support</h3>
                <p>
                  Guidelines and recommendations presented within the EHR, alongside patient context —
                  not a separate tab to check.
                </p>
              </div>
              <div className={styles.featureBlock}>
                <Gauge size={28} color="#3b82f6" />
                <h3>Outcome Tracking</h3>
                <p>
                  Dashboards showing adoption rates, override rates, and response times for continuous
                  tuning.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── FIVE RIGHTS FRAMEWORK ─── */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <span className={styles.secLabel}>Framework</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>The "Five Rights" of CDS</h2>
            </div>
            <div className={styles.rightsGrid}>
              <div className={styles.rightItem}>
                <Info size={24} color="#3b82f6" />
                <h4>Right Information</h4>
                <p>Evidence-based, patient-specific recommendations, not generic alerts.</p>
              </div>
              <div className={styles.rightItem}>
                <User size={24} color="#3b82f6" />
                <h4>Right Person</h4>
                <p>Alerts go to the clinician responsible for the patient's care.</p>
              </div>
              <div className={styles.rightItem}>
                <LayoutGrid size={24} color="#3b82f6" />
                <h4>Right Format</h4>
                <p>Clear, concise, and actionable recommendations with justification.</p>
              </div>
              <div className={styles.rightItem}>
                <Monitor size={24} color="#3b82f6" />
                <h4>Right Channel</h4>
                <p>Integrated directly into the EHR workflow, not a separate system.</p>
              </div>
              <div className={styles.rightItem}>
                <Clock size={24} color="#3b82f6" />
                <h4>Right Time</h4>
                <p>Surfaced at the moment of decision, not before or after.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── TOOLS ─── */}
        <motion.section className={`${styles.sec} ${styles.secAlt}`} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <span className={styles.secLabel}>Tech Stack</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Tools We Use</h2>
            </div>
            <div className={styles.toolsGrid}>
              {TOOLS_USED.map((tool, i) => (
                <div key={i} className={styles.toolItem}>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── HOW IT WORKS ─── */}
        <motion.section id="how-it-works" className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>Process</span>
              <h2 className={styles.secTitle}>How It Works</h2>
            </div>

            <WorkflowDiagram />

            <div className={styles.howSteps}>
              <div className={styles.howStep}>
                <div className={styles.howNumber}>01</div>
                <div>
                  <h3>Identify Decision Points</h3>
                  <p>Find where clinicians would benefit most from evidence-based support in their existing workflow.</p>
                </div>
              </div>
              <div className={styles.howStep}>
                <div className={styles.howNumber}>02</div>
                <div>
                  <h3>Build Risk Models</h3>
                  <p>Patient-specific risk scores are built from clinical data — labs, vitals, history, and real-time inputs.</p>
                </div>
              </div>
              <div className={styles.howStep}>
                <div className={styles.howNumber}>03</div>
                <div>
                  <h3>Integrate into EHR</h3>
                  <p>Alerts and recommendations appear directly in the clinical workflow, not a separate tool to check.</p>
                </div>
              </div>
              <div className={styles.howStep}>
                <div className={styles.howNumber}>04</div>
                <div>
                  <h3>Measure Adoption</h3>
                  <p>Track whether clinicians act on alerts, override rates, and whether outcomes improve as a result.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── WHY WORK WITH US ─── */}
        <motion.section className={`${styles.sec} ${styles.secAlt}`} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <span className={styles.secLabel}>Why Us</span>
              <h2 className={styles.secTitle}>Why Work With Us</h2>
            </div>
            <div className={styles.whyList}>
              {WHY_WORK_WITH_US.map((item, i) => (
                <div key={i} className={styles.whyItem}>
                  <CheckCircle size={18} color="#22c55e" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── EVIDENCE & RESEARCH ─── */}
        <motion.section id="evidence" className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <span className={styles.secLabel}>Evidence & Research</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>What Published Research Shows</h2>
              <p className={styles.secSubtitle}>
                Every figure here links to a real, peer-reviewed or industry study — not a client
                testimonial or an internal claim.
              </p>
            </div>
            <div className={styles.evidenceList}>
              {EVIDENCE.map((e, i) => (
                <div key={i} className={styles.evidenceItem} onClick={() => toggleEvidence(i)}>
                  <div className={styles.evidenceHeader}>
                    <div className={styles.evidenceIcon}>{e.icon}</div>
                    <div className={styles.evidenceHeaderText}>
                      <span className={styles.evidenceTitle}>{e.title}</span>
                      <span className={styles.evidenceSource}>{e.source}</span>
                    </div>
                    <ChevronDown size={18} className={expandedEvidence === i ? styles.evidenceChevronOpen : undefined} />
                  </div>
                  <AnimatePresence>
                    {expandedEvidence === i && (
                      <motion.div
                        className={styles.evidenceBody}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p>{e.finding}</p>
                        <a
                          href={e.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.evidenceLink}
                          onClick={(ev) => ev.stopPropagation()}
                        >
                          Read the study <ExternalLink size={13} />
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
            <p className={styles.evidenceDisclaimer}>
              <BookOpen size={14} /> These findings describe published research on clinical decision
              support systems generally. They are not a guarantee of results for any specific
              deployment.
            </p>
          </div>
        </motion.section>

        {/* ─── FAQ ─── */}
        <motion.section className={`${styles.sec} ${styles.secAlt}`} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <span className={styles.secLabel}>FAQ</span>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Frequently Asked Questions</h2>
            </div>
            <div className={styles.faqList}>
              {FAQS.map((faq, i) => (
                <div key={i} className={styles.faqItem}>
                  <div className={styles.faqTerm} onClick={() => toggleFaq(i)}>
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={expandedFaq === i ? styles.faqChevronOpen : undefined} />
                  </div>
                  <AnimatePresence>
                    {expandedFaq === i && (
                      <motion.div
                        className={styles.faqDesc}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── CTA ─── */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.ctaBox}>
              <div className={styles.ctaContent}>
                <span className={styles.ctaBadge}>Ready to talk?</span>
                <h2 className={styles.ctaTitle}>Ready to transform clinical decision-making?</h2>
                <p className={styles.ctaDesc}>
                  Tell us about your data and what you're trying to achieve — we'll take it from there.
                </p>

                {submitted ? (
                  <div className={styles.formOk}>
                    <CheckCircle size={24} color="#22c55e" />
                    <span>Thank you! Our clinical team will be in touch within one business day.</span>
                  </div>
                ) : (
                  <form className={styles.ctaForm} onSubmit={handleSubmit}>
                    {submitError && <div className={styles.formError}>{submitError}</div>}
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Full Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => change("name", e.target.value)}
                          placeholder="Dr. Jane Smith"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Email Address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => change("email", e.target.value)}
                          placeholder="jane@hospital.org"
                          required
                        />
                      </div>
                    </div>
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label>Hospital / Health System</label>
                        <input
                          type="text"
                          value={formData.hospital}
                          onChange={(e) => change("hospital", e.target.value)}
                          placeholder="Memorial Health System"
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => change("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    <div className={styles.formGroup} style={{ gridColumn: "1 / -1" }}>
                      <label>Message</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => change("message", e.target.value)}
                        placeholder="Tell us about your data, goals, and what you hope to achieve..."
                      />
                    </div>
                    <button type="submit" className={styles.submitBtn} disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 size={16} className={styles.spinner} /> Sending…
                        </>
                      ) : (
                        <>
                          <Send size={14} /> Contact Our Clinical Team
                        </>
                      )}
                    </button>
                    <p className={styles.privacy}>
                      <Lock size={12} /> We'll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            className={styles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}