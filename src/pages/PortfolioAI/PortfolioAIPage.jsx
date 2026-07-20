import { useEffect, useState } from 'react';
import SEO from '../../components/SEO/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  TrendingUp,
  Star,
  ChevronUp,
  Code,
  Database,
  Award,
  Clock,
  BarChart,
} from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './PortfolioAIPage.module.css';

// ─── 12 PROJECTS ───
const projects = [
  {
    title: 'Predictive Maintenance for Heavy Machinery',
    client: 'MiningCorp Ltd.',
    industry: 'Mining',
    desc: 'ML models that analyse sensor data to predict equipment failures up to 48 hours in advance, reducing unplanned downtime.',
    tech: 'Python, TensorFlow, Kafka, IoT sensors',
    metric: '22% downtime reduction',
    impact: 'Saved $6.5M annually',
  },
  {
    title: 'Intelligent Customer Support Chatbot',
    client: 'E‑Commerce Express',
    industry: 'Retail',
    desc: 'Generative AI chatbot handling 70% of inquiries with natural language understanding.',
    tech: 'OpenAI API, RAG, Pinecone, Node.js',
    metric: '4.5x faster resolution',
    impact: 'CSAT increased by 35%',
  },
  {
    title: 'Document Classification & Extraction',
    client: 'LegalShield Partners',
    industry: 'Legal',
    desc: 'Automated system that classifies thousands of legal documents and extracts key clauses using NLP.',
    tech: 'spaCy, Transformers, AWS Textract',
    metric: '90% reduction in manual effort',
    impact: 'Handled 3x more cases',
  },
  {
    title: 'Real‑time Fraud Detection',
    client: 'GlobalPay Systems',
    industry: 'Finance',
    desc: 'Ensemble anomaly detection models flag suspicious transactions in milliseconds with explainable AI.',
    tech: 'XGBoost, SHAP, Kafka, Redis',
    metric: '99.8% detection accuracy',
    impact: 'Reduced fraud losses by 45%',
  },
  {
    title: 'Personalised Product Recommendation Engine',
    client: 'StyleHub Fashion',
    industry: 'Retail',
    desc: 'Collaborative filtering and content‑based system adapting to user preferences in real time.',
    tech: 'PyTorch, Elasticsearch, Docker',
    metric: '42% increase in add‑to‑cart',
    impact: 'Average order value grew 28%',
  },
  {
    title: 'Predictive Healthcare Triage',
    client: 'MediConnect Hospital',
    industry: 'Healthcare',
    desc: 'AI model predicting patient admission risk and triage severity using EHR data.',
    tech: 'Scikit‑learn, PostgreSQL, Flask',
    metric: '30% reduction in ER wait times',
    impact: 'Improved patient outcomes by 18%',
  },
  {
    title: 'Supply Chain Demand Forecasting',
    client: 'LogiCo Global',
    industry: 'Logistics',
    desc: 'Time‑series forecasting model that predicts inventory demand across 50 warehouses with 95% accuracy.',
    tech: 'Prophet, PyTorch, BigQuery',
    metric: '27% reduction in stockouts',
    impact: 'Inventory costs cut by $4.2M',
  },
  {
    title: 'AI‑Driven Credit Scoring',
    client: 'FinTrust Bank',
    industry: 'Finance',
    desc: 'Explainable AI model for credit risk assessment, reducing bias and increasing approval rates.',
    tech: 'LightGBM, SHAP, PostgreSQL',
    metric: '15% increase in approval rate',
    impact: 'Defaults decreased by 22%',
  },
  {
    title: 'Smart Energy Consumption Optimisation',
    client: 'EcoGrid Solutions',
    industry: 'Energy',
    desc: 'Reinforcement learning system that optimises energy distribution in smart grids, reducing waste.',
    tech: 'RLlib, AWS IoT, TimescaleDB',
    metric: '18% reduction in energy waste',
    impact: 'Saved $3.8M annually',
  },
  {
    title: 'Automated Code Review with LLMs',
    client: 'DevAI Inc.',
    industry: 'Technology',
    desc: 'LLM‑based system that reviews pull requests, catches bugs, and suggests improvements, reducing review time by 50%.',
    tech: 'OpenAI, LangChain, GitHub API',
    metric: '50% faster code reviews',
    impact: 'Defect rate dropped by 32%',
  },
  {
    title: 'Personalised Learning Paths for EdTech',
    client: 'EduSmart',
    industry: 'Education',
    desc: 'Adaptive learning platform that recommends personalised content based on student performance and learning style.',
    tech: 'TensorFlow, React, Node.js',
    metric: '28% improvement in test scores',
    impact: 'Student engagement increased 40%',
  },
  {
    title: 'Predictive Crop Yield for Agriculture',
    client: 'AgriTech Solutions',
    industry: 'Agriculture',
    desc: 'Satellite imagery and weather data combined with ML to predict crop yields, helping farmers make informed decisions.',
    tech: 'CNNs, TensorFlow, GIS',
    metric: '92% yield prediction accuracy',
    impact: 'Crop loss reduced by 25%',
  },
];

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
const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

// NOTE: `once: false` + a reasonably small `amount` is what makes elements
// fade in AND out again every time you scroll past them. Each animated block
// below now gets its OWN viewport trigger (see hero split below) instead of
// sharing one trigger across a huge section, which is what was causing
// certain elements (like the hero title) to sometimes miss their animation.
const VIEWPORT = { once: false, amount: 0.12 };

// ─── PROJECT CARD ───
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className={`${styles.card} group`}
      variants={fadeUp}
      custom={index}
      transition={{ delay: index * 0.05 }}
    >
      <div className={styles.cardContent}>
        <motion.div className={styles.cardHeader} variants={fadeIn}>
          <motion.span className={styles.cardIndex} variants={fadeIn}>
            #{String(index + 1).padStart(2, '0')}
          </motion.span>
          <motion.span className={styles.cardIndustry} variants={fadeIn}>
            {project.industry}
          </motion.span>
        </motion.div>
        <motion.h3 className={styles.cardTitle} variants={fadeIn}>
          {project.title}
        </motion.h3>
        <motion.p className={styles.cardDesc} variants={fadeIn}>
          {project.desc}
        </motion.p>
        <motion.div className={styles.cardTech} variants={fadeIn}>
          {project.tech}
        </motion.div>
        <motion.div className={styles.cardMetrics} variants={staggerFast}>
          <motion.span variants={fadeIn}><TrendingUp size={14} /> {project.metric}</motion.span>
          <motion.span variants={fadeIn}><Star size={14} /> {project.impact}</motion.span>
        </motion.div>
      </div>

      <motion.div className={styles.cardFooter} variants={fadeIn}>
        <motion.span className={styles.cardClient} variants={fadeIn}>
          {project.client}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

// ─── "AI IN ACTION" DEMO PANELS ───
// Two small, self-looping animated widgets that *show* the kind of systems
// being built, instead of just describing them in prose. Nothing in these
// panels is clickable — they're illustrative, not fake navigation.

const demoConversations = [
  {
    q: 'Why do we see fraud spikes at month-end?',
    a: 'Batch payment processing clusters transactions, making anomalies harder to isolate in real time.',
  },
  {
    q: 'How fast can the model retrain?',
    a: 'Incremental retraining runs in under 20 minutes on each new transaction batch.',
  },
  {
    q: 'What signals matter most for triage?',
    a: 'Velocity, geolocation drift, and device fingerprint mismatches carry the highest weight.',
  },
];

const ChatDemoPanel = () => {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
    const answerTimer = setTimeout(() => setShowAnswer(true), 1100);
    const nextTimer = setTimeout(() => {
      setIndex((i) => (i + 1) % demoConversations.length);
    }, 4400);
    return () => {
      clearTimeout(answerTimer);
      clearTimeout(nextTimer);
    };
  }, [index]);

  const current = demoConversations[index];

  return (
    <div className={styles.demoPanel}>
      <div className={styles.demoPanelHeader}>
        <span className={styles.demoPanelLabel}>Live query example</span>
      </div>
      <div className={styles.demoChatBody}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`q-${index}`}
            className={styles.demoBubbleUser}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {current.q}
          </motion.div>
        </AnimatePresence>

        {showAnswer ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={`a-${index}`}
              className={styles.demoBubbleAi}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              {current.a}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className={styles.demoTyping}>
            <span /><span /><span />
          </div>
        )}
      </div>
    </div>
  );
};

const agentSteps = [
  { type: 'cmd', text: 'Move fraud rules to real-time scoring' },
  { type: 'log', text: 'Reading transaction_pipeline.py — 214 lines' },
  { type: 'log', text: 'Scanning feature store for drift' },
  { type: 'log', text: 'Retraining ensemble on last 90 days' },
  { type: 'result', text: 'Accuracy 99.8% · latency 42ms' },
];

const AgentDemoPanel = () => {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    if (visibleCount >= agentSteps.length) {
      const resetTimer = setTimeout(() => setVisibleCount(1), 2400);
      return () => clearTimeout(resetTimer);
    }
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 900);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className={styles.demoPanel}>
      <div className={styles.demoPanelHeader}>
        <div className={styles.codeDots}>
          <span className={styles.codeDotRed} />
          <span className={styles.codeDotYellow} />
          <span className={styles.codeDotGreen} />
        </div>
        <span className={styles.demoPanelLabel}>Agent run</span>
      </div>
      <div className={styles.demoAgentBody}>
        {agentSteps.slice(0, visibleCount).map((step, i) => (
          <motion.p
            key={i}
            className={
              step.type === 'cmd'
                ? styles.demoAgentCmd
                : step.type === 'result'
                ? styles.demoAgentResult
                : styles.demoAgentLog
            }
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {step.type === 'cmd' ? '❯ ' : step.type === 'result' ? '✓ ' : '· '}
            {step.text}
          </motion.p>
        ))}
        {visibleCount < agentSteps.length && <span className={styles.demoCursor} />}
      </div>
    </div>
  );
};

// ─── MAIN COMPONENT ───
const PortfolioAIPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // News items with proper images
  const newsItems = [
    {
      date: 'Jul 16, 2026',
      title: 'Introducing Our New Predictive Analytics Suite',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=315&fit=crop&crop=center',
    },
    {
      date: 'Jul 12, 2026',
      title: 'Scape Data Solutions Named AI Innovator of the Year',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=315&fit=crop&crop=center',
    },
    {
      date: 'Jul 8, 2026',
      title: 'Open‑Source Release: Our NLP Toolkit Now Available',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=315&fit=crop&crop=center',
    },
    {
      date: 'Jul 4, 2026',
      title: 'Partnership with GlobalPay to Enhance Fraud Detection',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=315&fit=crop&crop=center',
    },
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="AI Applications | Scape Data Solutions"
        description="AI and machine learning projects delivered by Scape Data Solutions across retail, finance, healthcare and more."
        path="/portfolio/ai"
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
            {/* Badge */}
            <motion.div className={styles.heroBadgeWrap} variants={fadeUp}>
              <motion.button className={styles.heroBadge} variants={scaleUp}>
                <motion.span className={styles.badgeNew} variants={fadeIn}>AI</motion.span>
                <motion.span className={styles.badgeText} variants={fadeIn}>
                  <span className={styles.badgeStrong}>Intelligent Solutions</span>
                  <span className={styles.badgeDot}> • </span>
                  <span className={styles.badgeSub}>Real‑World Impact</span>
                </motion.span>
                <motion.span className={styles.badgeIcon} variants={fadeIn}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Title */}
            <motion.h1 className={styles.heroTitle} variants={stagger}>
              <motion.span variants={fadeUp}>AI</motion.span>{' '}
              <motion.span variants={fadeUp}>Solutions</motion.span>
              <motion.span variants={fadeUp} className={styles.mobileBreak}><br /></motion.span>{' '}
              <motion.span variants={fadeUp}>for</motion.span>{' '}
              <motion.span variants={fadeUp}>Your</motion.span>{' '}
              <motion.span className={styles.heroHighlight} variants={fadeUp}>
                <span className={styles.highlightText}>Business.</span>
                <motion.span
                  className={styles.highlightUnderline}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p className={styles.heroSub} variants={fadeUp}>
              From predictive models to generative AI – <br className={styles.tabletBreak} />
              systems that learn, adapt, and deliver measurable value.
            </motion.p>

            {/* CTAs */}
            <motion.div className={styles.heroCtas} variants={stagger}>
              <motion.div variants={scaleUp}>
                <Link to="/contact" className={styles.ctaPrimary}>
                  Talk to Our AI Experts <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ===== PROJECT GRID ===== */}
          <motion.div
            className={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={stagger}
            id="projects"
          >
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </motion.div>
        </section>

        {/* ===== OUR APPROACH ===== */}
        <motion.section
          className={styles.approach}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <motion.div className={styles.approachBg} variants={fadeIn} />
          <motion.div className={styles.approachContainer} variants={stagger}>
            <motion.div className={styles.approachGrid} variants={stagger}>
              <motion.div className={styles.approachLeft} variants={stagger}>
                <motion.p className={styles.approachLabel} variants={fadeUp}>
                  Our Approach
                </motion.p>
                <motion.h2 className={styles.approachTitle} variants={stagger}>
                  <motion.span variants={fadeUp}>End‑to‑End AI</motion.span>
                  <motion.span variants={fadeUp}><br /></motion.span>
                  <motion.span className={styles.approachAccent} variants={fadeUp}>
                    For Every Industry.
                  </motion.span>
                </motion.h2>
                <motion.p className={styles.approachDesc} variants={fadeUp}>
                  We handle data, model training, deployment, and monitoring – so you get production‑ready AI without the headaches.
                </motion.p>
                <motion.div className={styles.approachCtas} variants={stagger}>
                  <motion.div variants={scaleUp}>
                    <Link to="/contact" className={styles.approachCtaPrimary}>
                      Get a Free Consultation
                    </Link>
                  </motion.div>
                  <motion.div variants={scaleUp}>
                    <Link to="/portfolio" className={styles.approachCtaSecondary}>
                      See All Work
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div className={styles.approachStats} variants={stagger}>
                  <motion.div variants={fadeUp}>
                    <p className={styles.statNumber}>12+</p>
                    <p className={styles.statLabel}>Industries Served</p>
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <p className={styles.statNumber}>20+</p>
                    <p className={styles.statLabel}>Successful Deployments</p>
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <p className={styles.statNumber}>98%</p>
                    <p className={styles.statLabel}>Client Satisfaction</p>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div className={styles.approachRight} variants={scaleUp}>
                <motion.div className={styles.codeWindow} variants={scaleUp}>
                  <motion.div className={styles.codeHeader} variants={fadeIn}>
                    <div className={styles.codeDots}>
                      <span className={styles.codeDotRed} />
                      <span className={styles.codeDotYellow} />
                      <span className={styles.codeDotGreen} />
                    </div>
                    <span className={styles.codeTitle}>portfolio.ai</span>
                  </motion.div>
                  <motion.div className={styles.codeBody} variants={staggerFast}>
                    <motion.p variants={fadeIn}>
                      <span className={styles.codePrompt}>$</span> python train_model.py --dataset mining --epochs 100
                    </motion.p>
                    <motion.p variants={fadeIn}>
                      <span className={styles.codeOutput}>→</span> Accuracy: 94.7%
                    </motion.p>
                    <motion.p variants={fadeIn}>
                      <span className={styles.codeOutput}>→</span> Downtime reduction: 22%
                    </motion.p>
                    <motion.p className={styles.codeMuted} variants={fadeIn}>
                      ... ready for deployment.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ===== AI IN ACTION (new animated demo panels) ===== */}
        <motion.section
          className={styles.aiInAction}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <motion.div className={styles.aiInActionContainer} variants={stagger}>
            <motion.p className={styles.approachLabel} variants={fadeUp}>
              See It Work
            </motion.p>
            <motion.h2 className={styles.aiInActionTitle} variants={fadeUp}>
              Real Systems, Not Slideware.
            </motion.h2>
            <motion.div className={styles.demoGrid} variants={stagger}>
              <motion.div variants={scaleUp}>
                <ChatDemoPanel />
              </motion.div>
              <motion.div variants={scaleUp}>
                <AgentDemoPanel />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ===== STATS ===== */}
        <motion.section
          className={styles.stats}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <motion.div className={styles.statsGlow} variants={fadeIn} />
          <motion.div className={styles.statsContainer} variants={stagger}>
            <motion.div className={styles.statsGrid} variants={stagger}>
              <motion.div variants={scaleUp}>
                <motion.div
                  className={styles.statsNumber}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {projects.reduce((acc, p) => acc + parseInt(p.metric) || 0, 0)}%
                </motion.div>
                <motion.p className={styles.statsLabel} variants={fadeIn}>
                  Average Improvement
                </motion.p>
              </motion.div>
              <motion.div variants={scaleUp}>
                <motion.div
                  className={styles.statsNumber}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {projects.length}
                </motion.div>
                <motion.p className={styles.statsLabel} variants={fadeIn}>
                  Live Projects
                </motion.p>
              </motion.div>
              <motion.div variants={scaleUp}>
                <motion.div
                  className={styles.statsNumber}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  5+
                </motion.div>
                <motion.p className={styles.statsLabel} variants={fadeIn}>
                  Years of AI Excellence
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ===== TECHNOLOGIES (NO CUBES - just clean text) ===== */}
        <motion.section
          className={styles.tech}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <motion.div className={styles.techContainer} variants={stagger}>
            <motion.h2 className={styles.techTitle} variants={fadeUp}>
              Technologies We Master
            </motion.h2>
            <motion.div className={styles.techGrid} variants={stagger}>
              <motion.div className={styles.techItem} variants={scaleUp}>
                <Database size={22} /> Python
              </motion.div>
              <motion.div className={styles.techItem} variants={scaleUp}>
                <Code size={22} /> TensorFlow
              </motion.div>
              <motion.div className={styles.techItem} variants={scaleUp}>
                <Brain size={22} /> PyTorch
              </motion.div>
              <motion.div className={styles.techItem} variants={scaleUp}>
                <Database size={22} /> PostgreSQL
              </motion.div>
              <motion.div className={styles.techItem} variants={scaleUp}>
                <Award size={22} /> Scikit‑learn
              </motion.div>
              <motion.div className={styles.techItem} variants={scaleUp}>
                <Clock size={22} /> Kafka
              </motion.div>
              <motion.div className={styles.techItem} variants={scaleUp}>
                <BarChart size={22} /> Power BI
              </motion.div>
              <motion.div className={styles.techItem} variants={scaleUp}>
                <Brain size={22} /> Transformers
              </motion.div>
              <motion.div className={styles.techItem} variants={scaleUp}>
                <Database size={22} /> MongoDB
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ===== TESTIMONIALS ===== */}
        <motion.section
          className={styles.testimonials}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <motion.div className={styles.testimonialsContainer} variants={stagger}>
            <motion.h2 className={styles.testimonialsTitle} variants={fadeUp}>
              What Our Clients Say
            </motion.h2>
            <motion.div className={styles.testimonialsGrid} variants={stagger}>
              {[
                { quote: 'They delivered a predictive maintenance system that saved us $6.5M in the first year.', author: 'CTO, MiningCorp Ltd.' },
                { quote: 'Our CSAT jumped 35% thanks to the intelligent chatbot – it\'s like having a 24/7 support team.', author: 'VP Product, E‑Commerce Express' },
                { quote: 'Fraud detection accuracy of 99.8% – we\'ve never felt more secure.', author: 'Head of Risk, GlobalPay Systems' },
              ].map((t, i) => (
                <motion.div key={i} className={styles.testimonial} variants={scaleUp} transition={{ delay: i * 0.08 }}>
                  <motion.p variants={fadeIn}>“{t.quote}”</motion.p>
                  <motion.span variants={fadeIn}>– {t.author}</motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ===== NEWS with proper images ===== */}
        <motion.section
          className={styles.news}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <motion.div className={styles.newsContainer} variants={stagger}>
            <motion.div className={styles.newsHeader} variants={fadeUp}>
              <motion.h2 className={styles.newsTitle} variants={fadeUp}>
                Latest News
              </motion.h2>
              <motion.div variants={scaleUp}>
                <Link to="/resources" className={styles.newsAll}>All posts →</Link>
              </motion.div>
            </motion.div>
            <motion.div className={styles.newsGrid} variants={stagger}>
              {newsItems.map((item, i) => (
                <motion.div key={i} className={styles.newsCard} variants={scaleUp} transition={{ delay: i * 0.06 }}>
                  <motion.div
                    className={styles.newsImageWrap}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={item.image} alt={item.title} className={styles.newsImage} loading="lazy" />
                  </motion.div>
                  <motion.div className={styles.newsDate} variants={fadeIn}>
                    {item.date}
                  </motion.div>
                  <motion.h3 variants={fadeIn}>
                    {item.title}
                  </motion.h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
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
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p className={styles.finalCtaDesc} variants={fadeUp}>
              Let's discuss how we can build a custom AI solution for you.
            </motion.p>
            <motion.div className={styles.finalCtaButton} variants={scaleUp}>
              <Link to="/contact" className={styles.ctaPrimary}>
                Start a Project <ArrowRight size={18} />
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

export default PortfolioAIPage;