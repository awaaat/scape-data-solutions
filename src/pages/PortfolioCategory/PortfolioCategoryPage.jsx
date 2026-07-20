// src/pages/PortfolioCategoryPage.jsx (rename to PortfolioBIPage.jsx, etc.)
import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  ChevronUp,
  Star,
  // Change icon per category
  BarChart3, // for BI, or Brain, GitBranch, Smartphone
} from 'lucide-react';
import styles from '../PortfolioCategory/PortfolioCategoryPage.module.css';
import homeStyles from '../Home/HomePage.module.css';

// ─── Floating Orbs (same as above) ─────────────────────────────
const FloatingOrbs = () => { /* ... copy from PortfolioPage */ };

// ─── Projects array – replace with your projects ──────────────
const projects = [
  // ... your projects with link
];

const PortfolioCategoryPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

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
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
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
          style={{ backgroundImage: 'url(/Images/site-images/bi-hero.jpg)', position: 'relative', overflow: 'hidden' }}
        >
          <FloatingOrbs />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <BarChart3 size={14} /> Dashboards & BI
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Data Visualizations That <span className={styles.highlight}>Drive Action</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              We build interactive dashboards that turn raw data into clear, actionable insights.
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
          <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
            Our Projects
            <motion.span className={styles.titleUnderline} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3 }} />
          </motion.h2>
          <motion.div className={styles.projectGrid} variants={stagger}>
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                className={styles.projectCard}
                variants={cardVariant}
                whileHover={{ y: -6, boxShadow: '0 12px 32px rgba(0,0,0,0.06)', borderColor: '#fdb840' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    {/* Change icon per category */}
                    <BarChart3 size={24} color="#fdb840" />
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
                <a href={proj.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                  View Project <ArrowRight size={14} />
                </a>
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
          <h2>Ready to Start?</h2>
          <Link to="/contact" className={styles.ctaBtn}>
            Let’s Talk <ArrowRight size={18} />
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
          whileHover={{ scale: 1.08, backgroundColor: '#fdb840', color: '#fff' }}
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </div>
  );
};

export default PortfolioCategoryPage;