// src/pages/Services/RegulatoryComplianceAnalytics/RegulatoryComplianceAnalyticsPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  Shield,
  Clock,
  Lock,
  AlertCircle,
  Scale,
  ShieldCheck,
  Globe,
  Users,
  Sparkles,
  ArrowRight,
  Check,
  AlertTriangle,
  DollarSign,
  FileCheck2,
  ChevronDown,
  ChevronUp,
  Book,
  Database,
  BookOpen,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./RegulatoryComplianceAnalyticsPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── ANIMATED COUNTER (no box, just a number that counts up in view) ──
const AnimatedNumber = ({ value, suffix = "", prefix = "", decimals = 0, duration = 1.4 }) => {
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  const handleEnter = () => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    };
    requestAnimationFrame(tick);
  };

  return (
    <motion.span onViewportEnter={handleEnter} viewport={{ once: true, amount: 0.6 }}>
    <SEO
      title="Regulatory Compliance Analytics | Scape Data Solutions"
      description="Audit-ready regulatory compliance analytics that help organizations monitor requirements and reduce risk."
      path="/services/regulatory-compliance-analytics"
      schema={buildServiceSchema({
        name: "Regulatory Compliance Analytics",
        description: "Audit-ready regulatory compliance analytics that help organizations monitor requirements and reduce risk.",
        path: "/services/regulatory-compliance-analytics",
      })}
    />
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
};

// ─── COMPLIANCE SCAN ANIMATION ──────────────────────────────────
const ComplianceScan = () => {
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setScanning((p) => !p), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.scanContainer}>
      <div className={styles.scanCircle}>
        <motion.div
          className={styles.scanPulse}
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
        <motion.div
          className={styles.scanRing}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={styles.scanRing}
          style={{ width: "80%", height: "80%" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={styles.scanRing}
          style={{ width: "60%", height: "60%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={styles.scanCenter}
          animate={{ boxShadow: ["0 0 0px rgba(253,184,64,0.4)", "0 0 26px rgba(253,184,64,0.5)", "0 0 0px rgba(253,184,64,0.4)"] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          <Shield size={34} className={styles.scanShield} />
        </motion.div>
        <motion.div
          className={styles.scanBeam}
          animate={{ rotate: scanning ? 360 : 0, opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className={styles.scanStatus}>
        <motion.span
          className={styles.scanDot}
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className={styles.scanText}>Active Compliance Scan</span>
      </div>
    </div>
  );
};

// ─── REGULATORY WAVE ANIMATION ──────────────────────────────────
const RegulatoryWaves = () => {
  const labels = ["GDPR", "SOX", "PCI", "HIPAA", "CCPA", "GLBA"];
  return (
    <div className={styles.waveContainer}>
      <svg viewBox="0 0 600 100" className={styles.waveSvg} preserveAspectRatio="none">
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M0,${50 + i * 10} C150,${30 + i * 8} 250,${70 + i * 10} 400,${50 + i * 8} C500,${30 + i * 6} 550,${70 + i * 10} 600,${50 + i * 8}`}
            fill="none"
            stroke={`rgba(253,184,64,${0.35 - i * 0.09})`}
            strokeWidth="2"
            animate={{
              d: [
                `M0,${50 + i * 10} C150,${30 + i * 8} 250,${70 + i * 10} 400,${50 + i * 8} C500,${30 + i * 6} 550,${70 + i * 10} 600,${50 + i * 8}`,
                `M0,${50 + i * 10} C150,${70 + i * 8} 250,${30 + i * 10} 400,${50 + i * 8} C500,${70 + i * 6} 550,${30 + i * 10} 600,${50 + i * 8}`,
                `M0,${50 + i * 10} C150,${30 + i * 8} 250,${70 + i * 10} 400,${50 + i * 8} C500,${30 + i * 6} 550,${70 + i * 10} 600,${50 + i * 8}`,
              ],
            }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`c${i}`}
            cy="50"
            r="3.5"
            fill="#fdb840"
            animate={{ opacity: [0, 1, 0], cx: [80 + i * 60, 560 - i * 20] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 1.1 }}
          />
        ))}
      </svg>
      <div className={styles.waveLabels}>
        {labels.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
};

// ─── LIVE STATUS LINE (replaces boxed metrics strip) ───────────
const ComplianceStatusLine = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.statusLine}>
      <span className={styles.statusItem}>
        <motion.span
          className={styles.stripDot}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
        Compliant
      </span>
      <span className={styles.statusDivider} />
      <span className={styles.statusItem}>
        <AnimatedNumber value={96.4} decimals={1} suffix="%" /> score
      </span>
      <span className={styles.statusDivider} />
      <span className={styles.statusItem}>6 frameworks active</span>
      <span className={styles.statusDivider} />
      <span className={styles.statusItem}>{time.toLocaleTimeString()}</span>
    </div>
  );
};

// ─── REGULATORY FRAMEWORKS — flowing index, no cards ───────────
const RegulatoryFrameworksDetail = () => {
  const [expanded, setExpanded] = useState(null);
  const frameworks = [
    {
      name: "GDPR",
      color: "#fdb840",
      description:
        "The General Data Protection Regulation governs how organizations handle EU citizens' personal data. It requires explicit consent, data portability, and breach notification within 72 hours. Organizations must implement data protection by design and default.",
      penalty: "Up to €20 million or 4% of annual global revenue",
      requirements: "89 requirements",
      keyAreas: ["Data Protection by Design", "Right to Erasure", "Data Portability", "Breach Notification", "Data Protection Impact Assessments"],
    },
    {
      name: "SOX",
      color: "#f5a623",
      description:
        "The Sarbanes-Oxley Act mandates financial reporting accuracy and internal controls for publicly traded companies. It includes strict penalties for fraud and requires CEO/CFO certification of financial statements.",
      penalty: "Up to $5 million in fines and 20 years imprisonment",
      requirements: "67 requirements",
      keyAreas: ["Financial Reporting", "Internal Controls", "Audit Committees", "CEO/CFO Certification", "Whistleblower Protection"],
    },
    {
      name: "PCI DSS",
      color: "#e89020",
      description:
        "The Payment Card Industry Data Security Standard sets security requirements for organizations handling credit card information with 12 core requirements for data protection, network security, and access control.",
      penalty: "Fines up to $500,000 per incident",
      requirements: "78 requirements",
      keyAreas: ["Network Security", "Cardholder Data Protection", "Vulnerability Management", "Access Control", "Security Monitoring"],
    },
    {
      name: "HIPAA",
      color: "#d47d1a",
      description:
        "The Health Insurance Portability and Accountability Act protects patient health information with privacy, security, and breach notification rules for healthcare organizations and their business associates.",
      penalty: "Up to $1.5 million per violation category",
      requirements: "56 requirements",
      keyAreas: ["Privacy Rule", "Security Rule", "Breach Notification", "Patient Rights", "Business Associate Agreements"],
    },
    {
      name: "CCPA",
      color: "#c06a14",
      description:
        "The California Consumer Privacy Act grants California consumers rights over their personal data, including the right to know, delete, and opt-out of the sale of their personal information.",
      penalty: "$2,500 per violation, $7,500 for intentional violations",
      requirements: "45 requirements",
      keyAreas: ["Consumer Rights", "Data Disclosure", "Opt-out Rights", "Non-discrimination", "Data Inventory"],
    },
    {
      name: "GLBA",
      color: "#a8580e",
      description:
        "The Gramm-Leach-Bliley Act requires financial institutions to protect consumer financial information with privacy policies, security safeguards, and pretexting protection measures.",
      penalty: "Up to $100,000 per violation",
      requirements: "38 requirements",
      keyAreas: ["Financial Privacy Rule", "Safeguards Rule", "Pretexting Protection", "Customer Notification", "Information Security Program"],
    },
  ];

  return (
    <div className={styles.frameworksList}>
      {frameworks.map((fw, i) => (
        <motion.div
          key={fw.name}
          className={styles.frameworkRow}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: i * 0.06, duration: 0.5 }}
        >
          <motion.div
            className={styles.frameworkRowLine}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: i * 0.06 + 0.15, duration: 0.6, ease: "easeOut" }}
            style={{ background: fw.color }}
          />
          <div className={styles.frameworkRowHead} onClick={() => setExpanded(expanded === i ? null : i)}>
            <span className={styles.frameworkRowIndex}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.frameworkRowName} style={{ color: fw.color }}>
              {fw.name}
            </span>
            <span className={styles.frameworkRowPenalty}>{fw.penalty}</span>
            <span className={styles.frameworkRowReq}>{fw.requirements}</span>
            <motion.span animate={{ rotate: expanded === i ? 180 : 0 }} className={styles.frameworkRowToggle}>
              <ChevronDown size={18} />
            </motion.span>
          </div>
          <AnimatePresence>
            {expanded === i && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={styles.frameworkRowBody}
              >
                <p className={styles.frameworkRowDesc}>{fw.description}</p>
                <div className={styles.frameworkKeyFlow}>
                  {fw.keyAreas.map((area, idx) => (
                    <motion.span
                      key={area}
                      className={styles.frameworkKeyChip}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                    >
                      <Check size={12} /> {area}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

// ─── REAL WORLD VIOLATIONS — vertical timeline, no cards ───────
const RealWorldViolations = () => {
  const [expanded, setExpanded] = useState(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 80%", "end 40%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothLine = useSpring(lineHeight, { stiffness: 60, damping: 20 });

  const violations = [
    {
      company: "Meta (Facebook)",
      fine: "$1.3 Billion",
      regulation: "GDPR",
      year: "2023",
      description:
        "The largest GDPR fine to date was imposed on Meta for transferring EU user data to the US without adequate safeguards. The violation involved systematic data transfers that failed to meet GDPR's requirements for international data transfers.",
      impact:
        "This ruling set a precedent for international data transfers, requiring organizations to implement robust data protection measures and proper legal mechanisms for cross-border data flows.",
      lessons:
        "Organizations must ensure appropriate safeguards for international data transfers, including Standard Contractual Clauses or Binding Corporate Rules.",
    },
    {
      company: "Amazon",
      fine: "$877 Million",
      regulation: "GDPR",
      year: "2023",
      description:
        "Amazon was fined for violating GDPR's data processing requirements in its targeted advertising operations. The violation involved processing personal data for advertising purposes without proper legal basis.",
      impact:
        "The fine highlighted the importance of obtaining proper consent for data processing activities and maintaining clear records of processing purposes.",
      lessons: "Companies must have a clear legal basis for processing personal data and maintain transparent records of processing activities.",
    },
    {
      company: "Goldman Sachs",
      fine: "$550 Million",
      regulation: "SOX",
      year: "2022",
      description:
        "The financial services giant was penalized for failure to maintain accurate financial records and internal controls. The violation involved inadequate documentation and controls around financial reporting.",
      impact:
        "This case reinforced the critical importance of financial reporting accuracy and internal control frameworks in the financial services industry.",
      lessons: "Financial institutions must maintain robust internal controls and accurate documentation for all financial transactions.",
    },
    {
      company: "Capital One",
      fine: "$390 Million",
      regulation: "PCI DSS",
      year: "2021",
      description:
        "A security breach exposed 106 million customer records, including credit card applications and personal information. The violation involved inadequate security controls and failure to properly protect customer data.",
      impact: "Highlighted the need for robust PCI DSS compliance and the importance of continuous security monitoring and vulnerability management.",
      lessons: "Organizations must implement comprehensive security controls and continuously monitor for vulnerabilities.",
    },
  ];

  return (
    <div className={styles.violationsContainer} ref={sectionRef}>
      <div className={styles.violationsHeader}>
        <span className={styles.violationsBadge}>
          <AlertTriangle size={14} />
          Real world violations
        </span>
        <p className={styles.violationsSubtitle}>
          These cases demonstrate the significant consequences of non-compliance and the importance of robust
          regulatory compliance programs. Organizations face substantial financial penalties, reputational damage,
          and operational disruption when compliance fails.
        </p>
      </div>

      <div className={styles.timeline}>
        <div className={styles.timelineTrack}>
          <motion.div className={styles.timelineFill} style={{ height: smoothLine }} />
        </div>
        {violations.map((v, i) => (
          <motion.div
            key={v.company}
            className={styles.timelineRow}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <motion.span
              className={styles.timelineDot}
              whileInView={{ scale: [0, 1.4, 1] }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
            />
            <div className={styles.timelineContent} onClick={() => setExpanded(expanded === i ? null : i)}>
              <div className={styles.violationTop}>
                <span className={styles.violationCompany}>{v.company}</span>
                <span className={styles.violationFine}>{v.fine}</span>
                <span className={styles.violationRegulation}>{v.regulation}</span>
                <span className={styles.violationYear}>{v.year}</span>
              </div>
              <p className={styles.violationDescription}>{v.description}</p>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className={styles.violationExpand}
                  >
                    <p className={styles.violationImpact}>
                      <strong>Impact:</strong> {v.impact}
                    </p>
                    <p className={styles.violationLessons}>
                      <strong>Key lesson:</strong> {v.lessons}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <span className={styles.violationToggle}>{expanded === i ? "Show less" : "Learn more"}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ─── COMPLIANCE CHALLENGES — marquee + alternating flow ────────
const ComplianceChallenges = () => {
  const challenges = [
    {
      icon: <Database size={22} />,
      title: "Data Complexity",
      description:
        "Modern enterprises generate massive volumes of data across multiple systems, making it difficult to track data lineage and ensure consistent compliance across all data sources. Organizations must maintain visibility into data movement, processing, and storage.",
    },
    {
      icon: <Scale size={22} />,
      title: "Regulatory Fragmentation",
      description:
        "GDPR, SOX, HIPAA, PCI DSS, CCPA, GLBA and other regulations each have unique requirements, creating a complex compliance landscape that organizations must navigate simultaneously across different jurisdictions.",
    },
    {
      icon: <Clock size={22} />,
      title: "Real-time Requirements",
      description:
        "Regulations increasingly require continuous monitoring and immediate response to violations, but traditional approaches are batch-based and reactive rather than proactive and real-time.",
    },
    {
      icon: <Users size={22} />,
      title: "Access Governance",
      description:
        "Managing user permissions across systems while maintaining least-privilege access is a significant operational challenge, particularly in large organizations with complex organizational structures.",
    },
    {
      icon: <DollarSign size={22} />,
      title: "Cost of Non-Compliance",
      description:
        "The average cost of a compliance violation is $14.8 million in fines, legal fees, and remediation costs, not including reputational damage and loss of customer trust.",
    },
    {
      icon: <AlertCircle size={22} />,
      title: "Audit Preparedness",
      description:
        "Organizations spend months preparing for audits with manual processes that are error-prone and resource-intensive, often resulting in incomplete or inadequate documentation.",
    },
  ];

  const marqueeItems = [...challenges, ...challenges];

  return (
    <div className={styles.challengesContainer}>
      <div className={styles.challengesHeader}>
        <span className={styles.challengesBadge}>
          <AlertCircle size={14} />
          The compliance challenge
        </span>
        <h3 className={styles.challengesTitle}>
          Why Regulatory Compliance <span className={styles.highlight}>Is So Difficult</span>
        </h3>
      </div>

      <div className={styles.marqueeMask}>
        <motion.div
          className={styles.marqueeTrack}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {marqueeItems.map((c, i) => (
            <span className={styles.marqueeItem} key={i}>
              {c.title}
              <span className={styles.marqueeDot}>•</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className={styles.challengesFlow}>
        {challenges.map((challenge, i) => (
          <motion.div
            key={challenge.title}
            className={`${styles.challengeFlowRow} ${i % 2 === 1 ? styles.challengeFlowRowReverse : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={styles.challengeFlowIcon}
              whileInView={{ rotate: [0, -8, 8, 0] }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              {challenge.icon}
            </motion.div>
            <div className={styles.challengeFlowText}>
              <h4 className={styles.challengeTitle}>{challenge.title}</h4>
              <p className={styles.challengeDescription}>{challenge.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ─── SCAPE SOLUTIONS — zig-zag flowing list connected by a drawn path ──
const ScapeSolutions = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 85%", "end 50%"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const smoothPath = useSpring(pathLength, { stiffness: 50, damping: 20 });

  const solutions = [
    {
      title: "Automated Data Lineage",
      description:
        "Track every data transformation with cryptographic provenance, ensuring complete visibility into data movement, processing, and storage across your entire infrastructure. This enables organizations to demonstrate compliance with data protection requirements.",
    },
    {
      title: "Real-time Policy Monitoring",
      description:
        "Continuous scanning with intelligent alerting and automated remediation workflows that detect and respond to violations instantly. This reduces the time between violation detection and resolution from weeks to minutes.",
    },
    {
      title: "Audit Trail Generation",
      description:
        "Comprehensive logging with blockchain-verified audit records that satisfy the most stringent regulatory requirements and stand up to regulatory scrutiny. Generate audit-ready reports on demand.",
    },
    {
      title: "Access Governance",
      description:
        "Granular role-based access control with automated privilege monitoring and least-privilege enforcement to prevent unauthorized access and maintain compliance with access control requirements.",
    },
    {
      title: "Risk Analytics Dashboard",
      description:
        "Visualize compliance posture with real-time dashboards, drill-down analytics, and predictive risk modeling to proactively identify and address compliance risks before they become violations.",
    },
    {
      title: "Automated Compliance Reporting",
      description:
        "One-click generation of regulatory-ready documentation packages with customizable templates and automated updates, saving hundreds of hours of manual reporting effort.",
    },
  ];

  return (
    <div className={styles.solutionsContainer} ref={sectionRef}>
      <div className={styles.solutionsHeader}>
        <span className={styles.solutionsBadge}>
          <ShieldCheck size={14} />
          Scape solutions
        </span>
        <h3 className={styles.solutionsTitle}>
          How Scape <span className={styles.highlight}>Automates Compliance</span>
        </h3>
        <p className={styles.solutionsSubtitle}>
          Our AI-powered compliance platform provides end-to-end automation for regulatory requirements, reducing
          risk and ensuring audit readiness across all major regulatory frameworks.
        </p>
      </div>

      <div className={styles.solutionsFlowWrap}>
        <svg className={styles.solutionsPath} viewBox="0 0 4 600" preserveAspectRatio="none">
          <motion.line x1="2" y1="0" x2="2" y2="600" stroke="#fdb840" strokeWidth="2" style={{ pathLength: smoothPath }} />
        </svg>
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            className={`${styles.solutionFlowRow} ${i % 2 === 1 ? styles.solutionFlowRowReverse : ""}`}
            initial={{ opacity: 0, x: i % 2 === 1 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.solutionFlowIndex}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h4 className={styles.solutionTitle}>{s.title}</h4>
              <p className={styles.solutionDescription}>{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ─── MAIN PAGE ──────────────────────────────────────────────────
const RegulatoryComplianceAnalyticsPage = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  return (
    <PageLayout>

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroPattern} />
          <div className={styles.heroGradient} />
          <div className={styles.heroParticles}>
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.particle}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                }}
                animate={{ y: [0, -30 - Math.random() * 50, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 4 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4 }}
              />
            ))}
          </div>
        </div>

        <div className={styles.heroLayout}>
          <motion.div className={styles.heroLeft} style={{ opacity: heroOpacity, scale: heroScale }}>
            <motion.div
              className={styles.heroBadge}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={14} />
              <span>AI-Powered Compliance Intelligence</span>
            </motion.div>

            <h1 className={styles.heroTitle}>
              {["Audit-Ready", "Regulatory Compliance", "Analytics"].map((line, i) => (
                <motion.span
                  key={line}
                  className={styles.heroTitleLine}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                  style={i === 0 ? { color: "#fdb840" } : i === 2 ? { opacity: 0.8 } : {}}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Automate regulatory compliance monitoring with AI that tracks data lineage, maps policy requirements,
              and generates audit-ready reports — giving you complete visibility and control across GDPR, SOX,
              HIPAA, PCI DSS, CCPA, and GLBA.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <Link to="/contact" className={styles.primaryBtn}>
                <ShieldCheck size={18} />
                Start Compliance Review
                <ArrowRight size={16} className={styles.btnArrow} />
              </Link>
              <a href="#frameworks" className={styles.secondaryBtn}>
                <BookOpen size={18} />
                Learn More
              </a>
            </motion.div>

            <motion.div
              className={styles.heroTrust}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span>
                <Lock size={14} /> Enterprise Security
              </span>
              <span>
                <FileCheck2 size={14} /> Audit Ready
              </span>
              <span>
                <Globe size={14} /> Global Coverage
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroRight}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ComplianceScan />
            <ComplianceStatusLine />
            <RegulatoryWaves />
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT IS REGULATORY COMPLIANCE ────────────────────── */}
      <section className={styles.whatIs}>
        <div className={styles.container}>
          <div className={styles.whatIsLayout}>
            <div className={styles.whatIsContent}>
              <div className={styles.sectionBadge}>
                <Book size={16} />
                <span>Understanding Compliance</span>
              </div>
              <h2 className={styles.sectionTitle}>
                What is <span className={styles.highlight}>Regulatory Compliance?</span>
              </h2>
              <div className={styles.paragraphs}>
                {[
                  "Regulatory compliance is the process of ensuring that an organization follows all laws, regulations, standards, and ethical practices that apply to its business operations. This includes data protection (GDPR), financial reporting (SOX), payment security (PCI DSS), healthcare privacy (HIPAA), and many other regulatory frameworks that govern how organizations handle sensitive information and conduct their operations.",
                  "Effective compliance requires organizations to understand which regulations apply to them, implement appropriate controls and processes, monitor compliance continuously, and maintain audit-ready documentation for regulators and stakeholders. The complexity of modern regulatory environments means that organizations must invest in robust compliance programs that can adapt to changing requirements.",
                  "At its core, regulatory compliance involves four key elements: understanding the regulations that apply to your organization, implementing controls to meet requirements, monitoring compliance continuously, and reporting to regulators with complete documentation. Each of these elements presents significant challenges that organizations must address to maintain compliance and avoid penalties.",
                ].map((p, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>
            </div>

            <div className={styles.whatIsSidebar}>
              {[
                { value: 14.8, prefix: "$", suffix: "M", label: "Average cost of non-compliance" },
                { value: 60, suffix: "%", label: "Organizations experienced a violation" },
                { value: 72, suffix: "h", label: "GDPR breach notification deadline" },
                { value: 4, suffix: "%", label: "Maximum GDPR fine (annual revenue)" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className={styles.statLine}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className={styles.statLineValue}>
                    <AnimatedNumber value={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                  </span>
                  <span className={styles.statLineLabel}>{stat.label}</span>
                  <motion.span
                    className={styles.statLineBar}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── REGULATORY FRAMEWORKS ────────────────────────────── */}
      <section id="frameworks" className={styles.frameworks}>
        <div className={styles.container}>
          <div className={styles.frameworksHeader}>
            <div className={styles.sectionBadge}>
              <Scale size={16} />
              <span>Regulatory Frameworks</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Comprehensive <span className={styles.highlight}>Regulatory</span> Coverage
            </h2>
            <p className={styles.sectionSubtitle}>
              All major regulatory frameworks, automated and monitored in real-time by Scape's compliance platform.
              Each framework has unique requirements that our platform addresses through specialized compliance
              modules.
            </p>
          </div>
          <RegulatoryFrameworksDetail />
        </div>
      </section>

      {/* ─── REAL WORLD VIOLATIONS ────────────────────────────── */}
      <section className={styles.violations}>
        <div className={styles.container}>
          <RealWorldViolations />
        </div>
      </section>

      {/* ─── COMPLIANCE CHALLENGES ────────────────────────────── */}
      <section className={styles.challenges}>
        <ComplianceChallenges />
      </section>

      {/* ─── SCAPE SOLUTIONS ────────────────────────────────────── */}
      <section className={styles.solutions}>
        <div className={styles.container}>
          <ScapeSolutions />
        </div>
      </section>

      {/* ─── COMPLIANCE STATS ──────────────────────────────────── */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsHeader}>
            <h2 className={styles.statsTitle}>
              The <span className={styles.highlight}>Compliance</span> Advantage
            </h2>
            <p className={styles.statsSubtitle}>
              Organizations using Scape's compliance platform achieve significant improvements in efficiency, risk
              reduction, and audit readiness across all regulatory frameworks.
            </p>
          </div>
          <div className={styles.statsFlowRow}>
            {[
              { value: 70, suffix: "%", label: "Time Savings", desc: "Reduction in manual compliance tasks" },
              { value: 100, suffix: "%", label: "Audit Readiness", desc: "Always prepared for inspections" },
              { value: 0, prefix: "$", label: "Regulatory Fines", desc: "Protection against penalties" },
              { value: 3, suffix: "x", label: "Efficiency Gain", desc: "Faster compliance operations" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className={styles.statFlowItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className={styles.statValue}>
                  <AnimatedNumber value={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statDesc}>{stat.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <motion.div
              className={styles.ctaBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
            >
              <Sparkles size={16} />
              <span>Ready to Transform Compliance?</span>
            </motion.div>
            <h2 className={styles.ctaTitle}>
              Turn Compliance into <br />
              <span className={styles.ctaHighlight}>Competitive Advantage</span>
            </h2>
            <p className={styles.ctaDesc}>
              Join leading organizations using Scape to automate regulatory compliance, reduce risk, and build trust
              with regulators and stakeholders.
            </p>
            <Link to="/contact" className={styles.ctaBtn}>
              <ShieldCheck size={18} />
              Start Compliance Review
              <ArrowRight size={16} className={styles.btnArrow} />
            </Link>
            <div className={styles.ctaTrust}>
              <span>
                <Lock size={14} /> Enterprise Security
              </span>
              <span>
                <FileCheck2 size={14} /> Audit Ready
              </span>
              <span>
                <Globe size={14} /> Global Coverage
              </span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default RegulatoryComplianceAnalyticsPage;