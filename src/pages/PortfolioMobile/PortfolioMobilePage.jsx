// src/pages/PortfolioMobilePage.jsx
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Smartphone,
  TrendingUp,
  BarChart4,
  ChevronUp,
  Star,
} from 'lucide-react';
import styles from '../PortfolioCategory/PortfolioCategoryPage.module.css';
import homeStyles from '../Home/HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const projects = [
  {
    title: 'Mobile App User Engagement Analytics',
    client: 'FitTrack Health',
    industry: 'Health & Fitness',
    desc: 'Comprehensive analytics platform tracking user sessions, retention cohorts, and feature adoption to drive engagement.',
    tech: 'Firebase Analytics, BigQuery, Looker, Python',
    metric: '2.5x engagement lift',
    impact: 'Monthly active users grew by 180%.',
  },
  {
    title: 'E‑commerce Conversion Funnel Optimisation',
    client: 'ShopWave Mobile',
    industry: 'Retail',
    desc: 'Funnel analysis that identifies drop‑off points in the mobile checkout process, with A/B test integration.',
    tech: 'Amplitude, Segment, Python, Airflow',
    metric: '32% conversion rate increase',
    impact: 'Added $4.5M in annual revenue.',
  },
  {
    title: 'Mobile Game Performance Monitoring',
    client: 'Arcade Studios',
    industry: 'Gaming',
    desc: 'Real‑time dashboard that tracks player retention, session length, and crash rates, with alerts for anomalies.',
    tech: 'Unity Analytics, Grafana, InfluxDB',
    metric: '35% reduction in crash rate',
    impact: 'Average session time increased by 22%.',
  },
  {
    title: 'Travel App User Journey Analytics',
    client: 'Wanderlust Travel',
    industry: 'Travel',
    desc: 'End‑to‑end tracking of user interactions from search to booking, with personalisation based on behaviour.',
    tech: 'Mixpanel, AWS Kinesis, Redshift, Tableau',
    metric: '45% higher booking completion',
    impact: 'Customer lifetime value (LTV) rose by 28%.',
  },
  {
    title: 'Social Media App Sentiment Analysis',
    client: 'SocialSphere',
    industry: 'Social Media',
    desc: 'Analytics that mines user comments and reactions to gauge sentiment and trend topics, powering content recommendations.',
    tech: 'Google Cloud Natural Language API, Pub/Sub, BigQuery',
    metric: '94% sentiment accuracy',
    impact: 'Content engagement increased by 37%.',
  },
  {
    title: 'Banking App User Experience Analytics',
    client: 'Digital Federal Credit Union',
    industry: 'Finance',
    desc: 'Dashboard tracking user friction points, feature usage, and session abandonment to improve UX.',
    tech: 'Heap, Snowflake, Looker, dbt',
    metric: '27% reduction in drop‑off',
    impact: 'App Store rating improved from 3.8 to 4.6.',
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
          <BarChart4 size={24} color="#00e676" />
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

const PortfolioMobilePage = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), []);

  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={homeStyles.page}>
      <Helmet>
        <title>Mobile Analytics Portfolio | Scape Data Solutions</title>
        <meta
          name="description"
          content="Mobile app analytics projects delivered by Scape Data Solutions across health, retail, gaming, travel, social, and finance."
        />
      </Helmet>

      <Navbar activeNav="portfolio" />

      <main className={homeStyles.mainContent}>
        <motion.section
          className={styles.hero}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ backgroundImage: 'url(/Images/site-images/mobile-hero.jpg)' }}
        >
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Smartphone size={14} /> Mobile Analytics
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Understand Your <span className={styles.highlight}>Mobile Users</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              We deliver deep analytics that reveal how users interact with your app, so you can optimise engagement and retention.
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
          <h2 className={styles.sectionTitle}>Mobile Analytics Projects</h2>
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
          <h2>Ready to Unlock Mobile Insights?</h2>
          <Link to="/contact" className={styles.ctaBtn}>
            Get Started <ArrowRight size={18} />
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

export default PortfolioMobilePage;