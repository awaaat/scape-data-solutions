// src/pages/PortfolioBIPage.jsx
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  PieChart,
  ChevronUp,
  Star,
} from 'lucide-react';
import styles from '../PortfolioCategory/PortfolioCategoryPage.module.css';
import homeStyles from '../Home/HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const projects = [
  {
    title: 'Global Retail Sales Dashboard',
    client: 'Apex Retail Group',
    industry: 'Retail',
    desc: 'A unified dashboard consolidating sales data from 45 countries, with drill‑down to store, product, and daily granularity. Powered by Power BI and Azure SQL.',
    tech: 'Power BI, Azure SQL, DAX, Power Query',
    metric: '30% faster reporting cycles',
    impact: 'Enabled real‑time inventory adjustments, reducing stockouts by 18%.',
  },
  {
    title: 'Healthcare Patient Flow Analytics',
    client: 'St. Mary’s Hospital',
    industry: 'Healthcare',
    desc: 'Interactive dashboard that tracks patient admissions, bed occupancy, and discharge times to optimise resource allocation.',
    tech: 'Tableau, SQL Server, Python (ETL)',
    metric: '15% reduction in average length of stay',
    impact: 'Improved patient satisfaction scores by 22%.',
  },
  {
    title: 'Financial Services KPI Command Center',
    client: 'Meridian Wealth Management',
    industry: 'Finance',
    desc: 'Executive dashboard showing portfolio performance, risk metrics, and client acquisition trends with alerting for anomalies.',
    tech: 'Looker, BigQuery, dbt',
    metric: '40% faster investment decisions',
    impact: 'Increased AUM by 12% in 6 months.',
  },
  {
    title: 'Manufacturing OEE Dashboard',
    client: 'Precision Machining Inc.',
    industry: 'Manufacturing',
    desc: 'Live monitoring of Overall Equipment Effectiveness across 12 plants, with downtime root‑cause analysis.',
    tech: 'Power BI, Kafka, Node.js',
    metric: '22% increase in OEE',
    impact: 'Saved $4.2M in annual production costs.',
  },
  {
    title: 'E‑commerce Conversion Funnel',
    client: 'ShopWave',
    industry: 'Retail',
    desc: 'Analytics dashboard that visualises user journeys from landing to purchase, with segment‑based conversion rates and A/B test results.',
    tech: 'Tableau, Google Analytics, Python',
    metric: '35% lift in conversion rate',
    impact: 'Drove an extra $2.1M in monthly revenue.',
  },
  {
    title: 'Energy Consumption Monitoring',
    client: 'GreenPower Utilities',
    industry: 'Energy',
    desc: 'Dashboard displaying real‑time energy usage across commercial buildings, with predictive alerts for peak demand.',
    tech: 'Grafana, InfluxDB, Python',
    metric: '18% reduction in peak load',
    impact: 'Reduced carbon footprint by 12%.',
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
          <PieChart size={24} color="#fdb840" />
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

const PortfolioBIPage = () => {
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
        <title>Business Intelligence Portfolio | Scape Data Solutions</title>
        <meta
          name="description"
          content="Interactive dashboards and BI platforms that turn raw data into clear, actionable insights."
        />
      </Helmet>

      <Navbar activeNav="portfolio" />

      <main className={homeStyles.mainContent}>
        {/* Hero */}
        <motion.section
          className={styles.hero}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ backgroundImage: 'url(/Images/site-images/bi-hero.jpg)' }}
        >
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <BarChart3 size={14} /> Dashboards & BI
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Data Visualizations That <span className={styles.highlight}>Drive Action</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              We build interactive dashboards that turn raw data into clear, actionable insights
              for every level of your organisation.
            </motion.p>
          </div>
        </motion.section>

        {/* Project list — large-scale animated blocks */}
        <motion.section
          className={styles.gridSection}
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <h2 className={styles.sectionTitle}>Our BI Projects</h2>
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

        {/* CTA */}
        <motion.section
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2>Need a Dashboard That Fits Your Needs?</h2>
          <Link to="/contact" className={styles.ctaBtn}>
            Let’s Build It <ArrowRight size={18} />
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

export default PortfolioBIPage;