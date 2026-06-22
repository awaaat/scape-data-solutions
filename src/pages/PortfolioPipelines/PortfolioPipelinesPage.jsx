// src/pages/PortfolioPipelinesPage.jsx
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  GitBranch,
  Database,
  Clock,
  Zap,
  Server,
  TrendingUp,
  Shield,
  ChevronUp,
  Star,
} from 'lucide-react';
import styles from '../PortfolioCategory/PortfolioCategoryPage.module.css';
import homeStyles from '../Home/HomePage.module.css';

const projects = [
  {
    title: 'Real‑time Payment Fraud Detection Pipeline',
    client: 'FinSecure Bank',
    industry: 'Finance',
    desc: 'Low‑latency pipeline that processes thousands of transactions per second, applying ML models to flag fraud in real time.',
    tech: 'Apache Kafka, Flink, Redis, Scala, TensorFlow',
    metric: '99.7% detection accuracy',
    impact: 'Reduced false positives by 60%.',
  },
  {
    title: 'IoT Sensor Data Ingestion for Smart Manufacturing',
    client: 'AutoTech Industries',
    industry: 'Manufacturing',
    desc: 'Scalable pipeline that ingests data from 5,000+ sensors across factories, enabling predictive maintenance and quality control.',
    tech: 'MQTT, InfluxDB, Telegraf, Grafana',
    metric: '15% reduction in scrap rate',
    impact: 'Yield improved by 9%.',
  },
  {
    title: 'Customer 360 Data Lake',
    client: 'OmniRetail Group',
    industry: 'Retail',
    desc: 'Unified data lake that combines CRM, web, and POS data to create a single customer view for personalisation and analytics.',
    tech: 'AWS S3, Glue, Athena, dbt, Redshift',
    metric: '3x faster query performance',
    impact: 'Enabled 360‑degree customer segmentation.',
  },
  {
    title: 'Healthcare ETL for Clinical Trials',
    client: 'ResearchMed',
    industry: 'Healthcare',
    desc: 'Secure ETL pipeline that transforms and anonymises patient data from multiple sources for clinical trial analytics.',
    tech: 'Apache Airflow, Python, PostgreSQL, FHIR',
    metric: '80% reduction in data prep time',
    impact: 'Accelerated trial data analysis by 2 months.',
  },
  {
    title: 'Social Media Sentiment Streaming Pipeline',
    client: 'BrandWatch Inc.',
    industry: 'Marketing',
    desc: 'Streaming pipeline that consumes Twitter, Reddit, and news feeds, performs sentiment analysis, and delivers alerts.',
    tech: 'Kafka, Spark Streaming, NLP (VADER), Elasticsearch',
    metric: '5‑second latency',
    impact: 'Brand reputation response time cut by 85%.',
  },
  {
    title: 'Log Aggregation and Monitoring',
    client: 'CloudScale Technologies',
    industry: 'Technology',
    desc: 'Centralised log pipeline that collects, parses, and visualises logs from 200+ microservices for observability.',
    tech: 'ELK Stack (Elasticsearch, Logstash, Kibana), Beats',
    metric: '99.9% log collection reliability',
    impact: 'Mean time to resolution (MTTR) reduced by 40%.',
  },
];

const PortfolioPipelinesPage = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), []);

  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
      setShowTop(scrolled > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className={homeStyles.page}>
      <div className={homeStyles.progressTrack}>
        <motion.div
          className={homeStyles.progressBar}
          style={{ width: `${scrollProgress}%` }}
          animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
        />
      </div>

      <main className={homeStyles.mainContent}>
        <motion.section
          className={styles.hero}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ backgroundImage: 'url(/Images/site-images/pipelines-hero.jpg)' }}
        >
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <GitBranch size={14} /> Data Pipelines
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Scalable Infrastructure for <span className={styles.highlight}>Data‑Driven Success</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              We design and build robust, real‑time data pipelines that ensure your data is always fresh, accurate, and accessible.
            </motion.p>
          </div>
        </motion.section>

        <motion.section
          className={styles.gridSection}
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <h2 className={styles.sectionTitle}>Pipeline Projects</h2>
          <motion.div className={styles.projectGrid} variants={stagger}>
            {projects.map((proj, i) => (
              <motion.div key={i} className={styles.projectCard} variants={cardVariant}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <Server size={24} color="#a259ff" />
                  </div>
                  <span className={styles.cardIndustry}>{proj.industry}</span>
                </div>
                <h3 className={styles.cardTitle}>{proj.title}</h3>
                <p className={styles.cardClient}>{proj.client}</p>
                <p className={styles.cardDesc}>{proj.desc}</p>
                <div className={styles.cardTech}>{proj.tech}</div>
                <div className={styles.cardMetrics}>
                  <span><TrendingUp size={14} /> {proj.metric}</span>
                  <span><Star size={14} /> {proj.impact}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2>Need a Pipeline That Grows With You?</h2>
          <Link to="/contact" className={styles.ctaBtn}>
            Let’s Architect It <ArrowRight size={18} />
          </Link>
        </motion.section>
      </main>

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

export default PortfolioPipelinesPage;