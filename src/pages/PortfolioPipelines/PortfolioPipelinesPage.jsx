// src/pages/PortfolioPipelinesPage.jsx
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  GitBranch,
  Database,
  Zap,
  Radio,
  Layers,
  Eye,
  Check,
  ChevronUp,
  Terminal,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './PortfolioPipelinesPage.module.css';

// ─── PROJECTS ───
const projects = [
  {
    title: 'Real‑time Payment Fraud Detection Pipeline',
    client: 'FinSecure Bank',
    industry: 'Finance',
    desc: 'Low‑latency pipeline that processes thousands of transactions per second, applying ML models to flag fraud in real time.',
    tech: 'Apache Kafka · Flink · Redis · Scala · TensorFlow',
    metric: '99.7% detection accuracy',
  },
  {
    title: 'IoT Sensor Data Ingestion for Smart Manufacturing',
    client: 'AutoTech Industries',
    industry: 'Manufacturing',
    desc: 'Scalable pipeline that ingests data from 5,000+ sensors across factories, enabling predictive maintenance and quality control.',
    tech: 'MQTT · InfluxDB · Telegraf · Grafana',
    metric: '15% lower scrap rate',
  },
  {
    title: 'Customer 360 Data Lake',
    client: 'OmniRetail Group',
    industry: 'Retail',
    desc: 'Unified data lake that combines CRM, web, and POS data to create a single customer view for personalisation and analytics.',
    tech: 'AWS S3 · Glue · Athena · dbt · Redshift',
    metric: '3x faster queries',
  },
  {
    title: 'Healthcare ETL for Clinical Trials',
    client: 'ResearchMed',
    industry: 'Healthcare',
    desc: 'Secure ETL pipeline that transforms and anonymises patient data from multiple sources for clinical trial analytics.',
    tech: 'Apache Airflow · Python · PostgreSQL · FHIR',
    metric: '80% less prep time',
  },
  {
    title: 'Social Media Sentiment Streaming Pipeline',
    client: 'BrandWatch Inc.',
    industry: 'Marketing',
    desc: 'Streaming pipeline that consumes Twitter, Reddit, and news feeds, performs sentiment analysis, and delivers alerts.',
    tech: 'Kafka · Spark Streaming · NLP (VADER) · Elasticsearch',
    metric: '5‑second latency',
  },
  {
    title: 'Log Aggregation and Monitoring',
    client: 'CloudScale Technologies',
    industry: 'Technology',
    desc: 'Centralised log pipeline that collects, parses, and visualises logs from 200+ microservices for observability.',
    tech: 'ELK Stack · Beats',
    metric: '99.9% log reliability',
  },
];

const stages = [
  { icon: Radio, label: 'Ingest', desc: 'Stream or batch, from any source, at any volume.' },
  { icon: Layers, label: 'Transform', desc: 'Clean, join, and model data while it\u2019s still moving.' },
  { icon: GitBranch, label: 'Orchestrate', desc: 'Schedule, retry, and monitor every run automatically.' },
  { icon: Eye, label: 'Observe', desc: 'Trace lineage and catch drift down to the row.' },
];

const codeSnippets = {
  Python: `from airflow.decorators import dag, task
from datetime import datetime

@dag(schedule="@hourly", start_date=datetime(2026, 1, 1))
def transactions_pipeline():

    @task
    def extract():
        return read_stream("kafka://transactions")

    @task
    def transform(rows):
        return dedupe(normalize(rows))

    @task
    def load(rows):
        write_to("redshift://fact_transactions", rows)

    load(transform(extract()))

transactions_pipeline()`,
  SQL: `-- dbt model: models/marts/fct_transactions.sql
with source as (
    select * from {{ source('raw', 'transactions') }}
),

cleaned as (
    select
        transaction_id,
        customer_id,
        amount,
        currency,
        occurred_at
    from source
    where amount > 0
)

select * from cleaned`,
  YAML: `# pipeline.yaml
name: transactions-pipeline
trigger: hourly
source:
  type: kafka
  topic: transactions
steps:
  - transform: normalize
  - transform: dedupe
sink:
  type: redshift
  table: fact_transactions
alerting:
  on_failure: pagerduty`,
};

// ─── ANIMATION VARIANTS ───
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const staggerFast = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.02 } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const VIEWPORT = { once: false, amount: 0.12 };

// ─── STAGE CARD ───
const StageCard = ({ stage }) => {
  const Icon = stage.icon;
  return (
    <motion.div className={styles.stageCard} variants={scaleUp}>
      <div className={styles.stageIcon}><Icon size={18} /></div>
      <div className={styles.stageLabel}>{stage.label}</div>
      <div className={styles.stageDesc}>{stage.desc}</div>
    </motion.div>
  );
};

// ─── LOG-STYLE PROJECT ROW ───
const LogRow = ({ project, index }) => (
  <motion.div className={styles.logRow} variants={fadeUp} transition={{ delay: index * 0.04 }}>
    <span className={styles.logIndex}>{String(index + 1).padStart(2, '0')}</span>
    <div className={styles.logMain}>
      <div className={styles.logMeta}>
        <span className={styles.logIndustry}>{project.industry}</span>
        <span className={styles.logClient}>{project.client}</span>
      </div>
      <div className={styles.logTitle}>{project.title}</div>
      <p className={styles.logDesc}>{project.desc}</p>
      <div className={styles.logTech}>{project.tech}</div>
    </div>
    <span className={styles.logMetric}>{project.metric}</span>
  </motion.div>
);

// ═══════════════════════════════════════════════════════════════
// LIVE PIPELINE ACTIVITY — 5 self-looping demo visuals
// ═══════════════════════════════════════════════════════════════

const ThroughputPanel = () => {
  const [bars, setBars] = useState([40, 65, 50, 80, 45, 70, 55, 60]);
  const [rate, setRate] = useState(12400);

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) => [...prev.slice(1), 25 + Math.round(Math.random() * 65)]);
      setRate(9000 + Math.round(Math.random() * 6000));
    }, 850);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.demoPanel}>
      <div className={styles.demoPanelHeader}>
        <Zap size={14} />
        <span className={styles.demoPanelLabel}>Stream Throughput</span>
      </div>
      <div className={styles.throughputBody}>
        <div className={styles.throughputRate}>
          <AnimatePresence mode="wait">
            <motion.span
              key={rate}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {rate.toLocaleString()}
            </motion.span>
          </AnimatePresence>
          <span className={styles.throughputUnit}>events / sec</span>
        </div>
        <div className={styles.throughputBars}>
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className={styles.throughputBar}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const flowStages = ['Source', 'Kafka', 'Transform', 'Sink'];
const FlowPanel = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setActive((a) => (a + 1) % flowStages.length), 950);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.demoPanel}>
      <div className={styles.demoPanelHeader}>
        <GitBranch size={14} />
        <span className={styles.demoPanelLabel}>Pipeline Flow</span>
      </div>
      <div className={styles.flowBody}>
        {flowStages.map((stage, i) => (
          <div key={stage} className={styles.flowStageWrap}>
            <motion.div
              className={styles.flowNode}
              animate={{
                backgroundColor: i === active ? 'var(--color-primary)' : 'var(--color-card-hover)',
                color: i === active ? '#0a0a0a' : 'var(--color-text-secondary)',
              }}
              transition={{ duration: 0.35 }}
            >
              {stage}
            </motion.div>
            {i < flowStages.length - 1 && (
              <div className={styles.flowConnector}>
                <motion.span
                  className={styles.flowPulse}
                  animate={{
                    left: i === active ? '100%' : '0%',
                    opacity: i === active ? 1 : 0,
                  }}
                  transition={{ duration: 0.85, ease: 'easeInOut' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const logLines = [
  { level: 'INFO', text: 'kafka-consumer-3 connected to topic transactions' },
  { level: 'INFO', text: 'flink-job-2 checkpoint completed in 340ms' },
  { level: 'WARN', text: 'backpressure detected on partition 7' },
  { level: 'INFO', text: 'airflow dag etl_daily succeeded' },
  { level: 'INFO', text: 'redshift COPY loaded 1.2M rows' },
  { level: 'ERROR', text: 'retrying failed batch (attempt 2/3)' },
  { level: 'INFO', text: 'elasticsearch index rotated cleanly' },
];
const LogStreamPanel = () => {
  const [visible, setVisible] = useState([]);
  const counterRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = logLines[counterRef.current % logLines.length];
      counterRef.current += 1;
      setVisible((prev) => [...prev, { ...next, id: counterRef.current }].slice(-5));
    }, 1050);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.demoPanel} ${styles.spanTwo}`}>
      <div className={styles.demoPanelHeader}>
        <div className={styles.codeDots}>
          <span className={styles.codeDotRed} />
          <span className={styles.codeDotYellow} />
          <span className={styles.codeDotGreen} />
        </div>
        <span className={styles.demoPanelLabel}>Log Stream</span>
      </div>
      <div className={styles.logBody}>
        <AnimatePresence initial={false}>
          {visible.map((line) => (
            <motion.p
              key={line.id}
              className={
                line.level === 'ERROR' ? styles.logLineError :
                line.level === 'WARN' ? styles.logLineWarn : styles.logLineInfo
              }
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.logLevel}>{line.level}</span> {line.text}
            </motion.p>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const etlStages = ['Extract', 'Transform', 'Load', 'Validate'];
const EtlStatusPanel = () => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (step >= etlStages.length) {
      const resetTimer = setTimeout(() => setStep(0), 1800);
      return () => clearTimeout(resetTimer);
    }
    const timer = setTimeout(() => setStep((s) => s + 1), 900);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className={styles.demoPanel}>
      <div className={styles.demoPanelHeader}>
        <Database size={14} />
        <span className={styles.demoPanelLabel}>ETL Job</span>
      </div>
      <div className={styles.etlBody}>
        {etlStages.map((stage, i) => {
          const state = i < step ? 'done' : i === step ? 'running' : 'pending';
          return (
            <div key={stage} className={styles.etlRow}>
              <span className={styles.etlIcon}>
                {state === 'done' && <CheckCircle2 size={15} className={styles.etlIconDone} />}
                {state === 'running' && <Loader2 size={15} className={`${styles.etlIconRunning} ${styles.spin}`} />}
                {state === 'pending' && <span className={styles.etlDot} />}
              </span>
              <span className={state === 'pending' ? styles.etlLabelPending : styles.etlLabel}>
                {stage}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const queryText = 'SELECT region, SUM(revenue)\nFROM sales_fact\nGROUP BY region;';
const QueryConsolePanel = () => {
  const [cycle, setCycle] = useState(0);
  const [typed, setTyped] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setTyped('');
    setShowResult(false);
    let i = 0;
    const typeInterval = setInterval(() => {
      i += 1;
      setTyped(queryText.slice(0, i));
      if (i >= queryText.length) clearInterval(typeInterval);
    }, 26);

    const resultTimer = setTimeout(() => setShowResult(true), queryText.length * 26 + 400);
    const restartTimer = setTimeout(() => setCycle((c) => c + 1), queryText.length * 26 + 3400);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(resultTimer);
      clearTimeout(restartTimer);
    };
  }, [cycle]);

  return (
    <div className={styles.demoPanel}>
      <div className={styles.demoPanelHeader}>
        <Terminal size={14} />
        <span className={styles.demoPanelLabel}>Query Console</span>
      </div>
      <div className={styles.queryBody}>
        <pre className={styles.queryText}>
          {typed}
          <span className={styles.demoCursor} />
        </pre>
        {showResult && (
          <motion.div
            className={styles.queryResult}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.queryResultRow}><span>us-east</span><span>$482,110</span></div>
            <div className={styles.queryResultRow}><span>eu-west</span><span>$317,880</span></div>
            <div className={styles.queryResultRow}><span>apac</span><span>$255,430</span></div>
            <div className={styles.queryResultMeta}>3 rows · 118ms</div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ───
const PortfolioPipelinesPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);
  const [showTop, setShowTop] = useState(false);
  const [activeTab, setActiveTab] = useState('Python');

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <SEO
        title="Data Pipeline Portfolio | Scape Data Solutions"
        description="Data pipeline projects across finance, manufacturing, retail, healthcare, marketing and technology. Real-time fraud detection, IoT sensor ingestion, customer 360 data lakes, clinical trial ETL, social media streaming and log aggregation built on Kafka, Flink, Spark, Airflow, dbt, Redshift and BigQuery."
        path="/portfolio/pipelines"
      />

      <Navbar activeNav="portfolio" />

      <main className={styles.main}>

        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={stagger}
          >
            <motion.div className={styles.heroBadgeWrap} variants={fadeUp}>
              <motion.div className={styles.heroBadge} variants={scaleUp}>
                <motion.span className={styles.badgeNew} variants={fadeIn}>New</motion.span>
                <motion.span className={styles.badgeText} variants={fadeIn}>
                  <span className={styles.badgeStrong}>Streaming ETL</span>
                  <span className={styles.badgeDot}> · </span>
                  <span className={styles.badgeSub}>now in general availability</span>
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.h1 className={styles.heroTitle} variants={stagger}>
              <motion.span variants={fadeUp}>Data infrastructure</motion.span>
              <motion.span variants={fadeUp} className={styles.mobileBreak}><br /></motion.span>{' '}
              <motion.span variants={fadeUp}>for</motion.span>{' '}
              <motion.span className={styles.heroHighlight} variants={fadeUp}>
                <span className={styles.highlightText}>everything you ship.</span>
              </motion.span>
            </motion.h1>

            <motion.p className={styles.heroSub} variants={fadeUp}>
              Real‑time and batch pipelines, orchestration, and observability —
              built to run in production, not just survive a demo.
            </motion.p>

            <motion.div className={styles.heroCtas} variants={stagger}>
              <motion.div variants={scaleUp}>
                <Link to="/contact" className={styles.ctaPrimary}>
                  Talk to Our Data Engineers <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div variants={scaleUp}>
                <a href="#work" className={styles.ctaSecondary}>
                  View Case Studies
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ===== STAGE STRIP ===== */}
          <motion.div
            className={styles.stageStrip}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={stagger}
          >
            {stages.map((stage) => (
              <StageCard key={stage.label} stage={stage} />
            ))}
          </motion.div>
        </section>

        {/* ===== ONE PLATFORM / CODE ===== */}
        <motion.section
          className={styles.codeSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.codeContainer}>
            <motion.div variants={stagger}>
              <motion.p className={styles.eyebrow} variants={fadeUp}>for engineering teams</motion.p>
              <motion.h2 className={styles.codeHeading} variants={fadeUp}>
                One platform.<br />Every pipeline stage.
              </motion.h2>
              <motion.p className={styles.codeSub} variants={fadeUp}>
                Define a pipeline once, in Python, SQL, or YAML and we handle
                scheduling, retries, backfills, and monitoring underneath it.
              </motion.p>
            </motion.div>

            <div className={styles.codeGrid}>
              <motion.div variants={fadeUp}>
                <div className={styles.codeStats}>
                  <div>
                    <div className={styles.codeStatNumber}>12,400</div>
                    <div className={styles.codeStatLabel}>events / sec sustained</div>
                  </div>
                  <div>
                    <div className={styles.codeStatNumber}>&lt;80ms</div>
                    <div className={styles.codeStatLabel}>median stage latency</div>
                  </div>
                  <div>
                    <div className={styles.codeStatNumber}>6</div>
                    <div className={styles.codeStatLabel}>industries shipped</div>
                  </div>
                </div>
              </motion.div>

              <motion.div className={styles.codePanel} variants={scaleUp}>
                <div className={styles.codeTabs}>
                  {Object.keys(codeSnippets).map((tab) => (
                    <button
                      key={tab}
                      className={`${styles.codeTab} ${activeTab === tab ? styles.codeTabActive : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    className={styles.codeBlock}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {codeSnippets[activeTab]}
                  </motion.pre>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ===== WORK / LOG LIST ===== */}
        <section className={styles.workSection} id="work">
          <div className={styles.workContainer}>
            <motion.div
              className={styles.workHeader}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              <div>
                <motion.p className={styles.eyebrow} variants={fadeUp}>selected work</motion.p>
                <motion.h2 className={styles.codeHeading} variants={fadeUp}>
                  Pipelines in production.
                </motion.h2>
              </div>
            </motion.div>

            <motion.div
              className={styles.logList}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              {projects.map((project, i) => (
                <LogRow key={i} project={project} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== LIVE PIPELINE ACTIVITY ===== */}
        <motion.section
          className={styles.liveSection}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.liveContainer}>
            <motion.div className={styles.liveHeading} variants={stagger}>
              <motion.p className={styles.eyebrow} variants={fadeUp}>live pipeline activity</motion.p>
              <motion.h2 className={styles.liveTitle} variants={fadeUp}>
                Built to run, not just to demo.
              </motion.h2>
            </motion.div>
            <motion.div className={styles.demoGrid} variants={stagger}>
              <motion.div variants={scaleUp}><ThroughputPanel /></motion.div>
              <motion.div variants={scaleUp}><FlowPanel /></motion.div>
              <motion.div variants={scaleUp}><EtlStatusPanel /></motion.div>
              <motion.div variants={scaleUp} className={styles.spanTwo}><LogStreamPanel /></motion.div>
              <motion.div variants={scaleUp}><QueryConsolePanel /></motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ===== STATS ===== */}
        <motion.section
          className={styles.stats}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.statsContainer}>
            <motion.div className={styles.statsGrid} variants={stagger}>
              <motion.div variants={scaleUp}>
                <motion.div className={styles.statsNumber} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VIEWPORT} transition={{ duration: 0.6, delay: 0.1 }}>
                  {projects.length}
                </motion.div>
                <motion.p className={styles.statsLabel} variants={fadeIn}>Pipelines Shipped</motion.p>
              </motion.div>
              <motion.div variants={scaleUp}>
                <motion.div className={styles.statsNumber} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VIEWPORT} transition={{ duration: 0.6, delay: 0.2 }}>
                  200+
                </motion.div>
                <motion.p className={styles.statsLabel} variants={fadeIn}>Microservices Instrumented</motion.p>
              </motion.div>
              <motion.div variants={scaleUp}>
                <motion.div className={styles.statsNumber} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VIEWPORT} transition={{ duration: 0.6, delay: 0.3 }}>
                  99.9%
                </motion.div>
                <motion.p className={styles.statsLabel} variants={fadeIn}>Average Pipeline Uptime</motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ===== ENGAGE / TWO PATHS ===== */}
        <motion.section
          className={styles.engage}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.engageContainer}>
            <motion.p className={styles.eyebrow} variants={fadeUp}>get started</motion.p>
            <motion.h2 className={styles.engageTitle} variants={fadeUp}>
              Choose how to ship.
            </motion.h2>

            <motion.div className={styles.engageGrid} variants={stagger}>
              <motion.div className={styles.engageCard} variants={fadeUp}>
                <h3 className={styles.engageCardTitle}>Ship it yourself</h3>
                <p className={styles.engageCardDesc}>
                  Reference architectures and runbooks so your own team can stand up a pipeline fast.
                </p>
                <div className={styles.engageDivider} />
                <div className={styles.engageList}>
                  {[
                    'Reference architectures & starter templates',
                    'Runbooks and internal documentation',
                    'Usage‑based infrastructure costs',
                    'Direct access to our engineering Slack',
                  ].map((item) => (
                    <div key={item} className={styles.engageListItem}>
                      <Check size={16} /> {item}
                    </div>
                  ))}
                </div>
                <div className={styles.engageCta}>
                  <Link to="/contact" className={styles.ctaSecondary}>
                    Get the Playbook <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>

              <motion.div className={`${styles.engageCard} ${styles.engageCardFeatured}`} variants={fadeUp}>
                <h3 className={styles.engageCardTitle}>Bring in the team</h3>
                <p className={styles.engageCardDesc}>
                  Dedicated data engineers design, build, and operate the pipeline with you.
                </p>
                <div className={styles.engageDivider} />
                <div className={styles.engageList}>
                  {[
                    'Dedicated pipeline engineers',
                    'Custom SLAs and on‑call coverage',
                    'Migration audits and cost reviews',
                    'Fixed monthly retainer, no surprises',
                  ].map((item) => (
                    <div key={item} className={styles.engageListItem}>
                      <Check size={16} /> {item}
                    </div>
                  ))}
                </div>
                <div className={styles.engageCta}>
                  <Link to="/contact" className={styles.ctaPrimary}>
                    Talk to Engineering <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* ===== FINAL CTA ===== */}
        <motion.section
          className={styles.finalCta}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <motion.div className={styles.finalCtaContainer} variants={stagger}>
            <motion.h2 className={styles.finalCtaTitle} variants={fadeUp}>
              Need a pipeline that grows with you?
            </motion.h2>
            <motion.p className={styles.finalCtaDesc} variants={fadeUp}>
              Let's architect infrastructure that scales with your data, not against it.
            </motion.p>
            <motion.div className={styles.finalCtaButton} variants={scaleUp}>
              <Link to="/contact" className={styles.ctaPrimary}>
                Let's Architect It <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

      </main>

      <Footer />

      {showTop && (
        <motion.button
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </div>
  );
};

export default PortfolioPipelinesPage;