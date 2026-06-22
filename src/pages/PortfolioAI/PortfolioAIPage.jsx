import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Sparkles,
  TrendingUp,
  Star,
  ChevronUp,
} from 'lucide-react';
import styles from '../PortfolioCategory/PortfolioCategoryPage.module.css';
import homeStyles from '../Home/HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const projects = [
  {
    title: 'Predictive Maintenance for Heavy Machinery',
    client: 'MiningCorp Ltd.',
    industry: 'Mining',
    desc: 'ML models that analyse sensor data to predict equipment failures up to 48 hours in advance, reducing unplanned downtime.',
    tech: 'Python, TensorFlow, Kafka, IoT sensors',
    metric: '22% downtime reduction',
    impact: 'Saved $6.5M annually in maintenance costs.',
  },
  {
    title: 'Intelligent Customer Support Chatbot',
    client: 'E-Commerce Express',
    industry: 'Retail',
    desc: 'Generative AI chatbot that handles 70% of customer inquiries, with natural language understanding and personalised responses.',
    tech: 'OpenAI API, RAG, Pinecone, Node.js',
    metric: '4.5x faster resolution time',
    impact: 'Customer satisfaction (CSAT) increased by 35%.',
  },
  {
    title: 'Document Classification & Extraction',
    client: 'LegalShield Partners',
    industry: 'Legal',
    desc: 'Automated system that classifies thousands of legal documents and extracts key clauses using NLP.',
    tech: 'spaCy, Transformers, AWS Textract',
    metric: '90% reduction in manual effort',
    impact: 'Legal team now handles 3x more cases with same headcount.',
  },
  {
    title: 'Real-time Fraud Detection',
    client: 'GlobalPay Systems',
    industry: 'Finance',
    desc: 'Ensemble of anomaly detection models that flag suspicious transactions in milliseconds with explainable AI features.',
    tech: 'XGBoost, SHAP, Kafka, Redis',
    metric: '99.8% detection accuracy',
    impact: 'Reduced fraud losses by 45% in first quarter.',
  },
  {
    title: 'Personalised Product Recommendation Engine',
    client: 'StyleHub Fashion',
    industry: 'Retail',
    desc: 'Collaborative filtering and content-based recommendation system that adapts to user preferences in real time.',
    tech: 'PyTorch, Elasticsearch, Docker',
    metric: '42% increase in add-to-cart rate',
    impact: 'Average order value grew by 28%.',
  },
  {
    title: 'Predictive Healthcare Triage',
    client: 'MediConnect Hospital',
    industry: 'Healthcare',
    desc: 'AI model that predicts patient admission risk and triage severity using EHR data, helping ER teams prioritise.',
    tech: 'Scikit-learn, PostgreSQL, Flask',
    metric: '30% reduction in ER wait times',
    impact: 'Improved patient outcomes by 18%.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ── One animated project block. Each instance gets its own ref/inView
   so it animates independently as it scrolls into frame — big, slow,
   staggered reveals rather than a static card grid. ── */
const ProjectBlock = ({ proj, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const rise = {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };
  const slideX = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      className={styles.projectCard}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={container}
    >
      <motion.span className={styles.cardIndex} variants={rise}>
        {String(index + 1).padStart(2, '0')}
      </motion.span>

      <motion.div className={styles.cardHeader} variants={slideX}>
        <motion.div
          className={styles.cardIcon}
          whileHover={{ scale: 1.12, rotate: 6 }}
          transition={{ type: 'spring', stiffness: 320 }}
        >
          <Sparkles size={24} color="#00d4ff" />
        </motion.div>
        <span className={styles.cardIndustry}>{proj.industry}</span>
      </motion.div>

      <motion.h3 className={styles.cardTitle} variants={rise}>
        {proj.title}
      </motion.h3>
      <motion.p className={styles.cardClient} variants={rise}>
        {proj.client}
      </motion.p>
      <motion.p className={styles.cardDesc} variants={rise}>
        {proj.desc}
      </motion.p>

      <motion.div className={styles.cardTech} variants={slideX}>
        {proj.tech}
      </motion.div>

      <motion.div className={styles.cardMetrics} variants={rise}>
        <span><TrendingUp size={15} /> {proj.metric}</span>
        <span><Star size={15} /> {proj.impact}</span>
      </motion.div>
    </motion.div>
  );
};

const PortfolioAIPage = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), []);

  const [showTop, setShowTop] = useState(false);
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={homeStyles.page}>
      <Helmet>
        <title>AI Applications | Scape Data Solutions</title>
        <meta name="description" content="AI and machine learning projects delivered by Scape Data Solutions across retail, finance, healthcare and more." />
      </Helmet>

      <Navbar activeNav="portfolio" />

      <main className={homeStyles.mainContent}>

        <motion.section
          className={styles.hero}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ backgroundImage: 'url(/Images/site-images/ai-hero.jpg)' }}
        >
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Brain size={14} /> AI Applications
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Intelligent Solutions for <span className={styles.highlight}>Real-World Problems</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              From predictive models to generative AI, we build systems that learn, adapt, and deliver measurable business value.
            </motion.p>
          </div>
        </motion.section>

        {/* Section intro — large-scale animated blocks below */}
        <motion.section
          className={styles.gridSection}
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <h2 className={styles.sectionTitle}>AI Projects</h2>
          <motion.span
            className={styles.titleUnderline}
            initial={{ scaleX: 0 }}
            animate={isGridInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.section>

        <div className={styles.projectGrid}>
          {projects.map((proj, i) => (
            <ProjectBlock key={i} proj={proj} index={i} />
          ))}
        </div>

        <motion.section
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2>Ready to Harness the Power of AI?</h2>
          <Link to="/contact" className={styles.ctaBtn}>
            Talk to Our AI Experts <ArrowRight size={18} />
          </Link>
        </motion.section>

      </main>

      <Footer />

      {showTop && (
        <motion.button
          className={homeStyles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </div>
  );
};

export default PortfolioAIPage;