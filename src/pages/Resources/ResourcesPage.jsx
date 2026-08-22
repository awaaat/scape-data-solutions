import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import { getAllArticles } from "../../services/articles";
import { quartoArticlesList } from "../../data/quartoArticlesIndex";
import styles from "./ResourcesPage.module.css";

// ─── Animation variants ────────────────────────────────────────────
const staggerGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Hero image (animated GIF) ────────────────────────────────────
const HERO_IMAGE_URL =
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3FhZ3g5d3h4YzY0dXU4Z2JqN2ZxN2VzZWZ0c2x4d3U0eHl0a2p4bCZlcD12X2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/L8K62iTDkzGX6/giphy.gif";

const ResourcesPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setLoading(true);
    setLoadError(false);
    getAllArticles()
      .then((data) => {
        const sanityArticles = Array.isArray(data) ? data : [];
        setArticles([...quartoArticlesList, ...sanityArticles]);
      })
      .catch((err) => {
        console.error("Failed to load articles:", err);
        setArticles(quartoArticlesList);
        setLoadError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(
    () =>
      ["All", ...Array.from(new Set(articles.map((a) => a.category).filter(Boolean)))],
    [articles]
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const catParam = (params.get("category") || "").toLowerCase();
    if (!catParam) return;
    const match = categories.find(
      (c) => c.toLowerCase() === catParam || c.toLowerCase().includes(catParam) || catParam.includes(c.toLowerCase())
    );
    if (match) setActiveCategory(match);
  }, [location.search, categories]);
  const filteredArticles = useMemo(
    () =>
      activeCategory === "All"
        ? articles
        : articles.filter((a) => a.category === activeCategory),
    [articles, activeCategory]
  );

  return (
    <div className={styles.page}>
      <SEO
        title="Resources | Dental & Practice Analytics Guides - Scape Data Solutions"
        description="Practical guides on dental KPIs, patient retention, and reducing no-shows — written for practice owners, not data scientists."
        path="/resources"
      />

      <Navbar activeNav="resources" />

      <main className={styles.mainContent}>
        {/* ─── LOADING OVERLAY ─────────────────────────────────────── */}
        <AnimatePresence>
          {loading && (
            <motion.div
              className={styles.loadingOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.loadingSpinner} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── HERO ──────────────────────────────────────────────────── */}
        <section ref={heroRef} className={styles.hero}>
          <div className={styles.aiVisualContainer}>
            <div className={styles.aiVisual}>
              <svg
                className={styles.circuitSvg}
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4a6cf7" stopOpacity="0.6">
                      <animate
                        attributeName="stopOpacity"
                        values="0.6;0.1;0.6"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="100%" stopColor="#6c5ce7" stopOpacity="0.2">
                      <animate
                        attributeName="stopOpacity"
                        values="0.2;0.6;0.2"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                  <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4a6cf7" stopOpacity="0.3">
                      <animate
                        attributeName="stopOpacity"
                        values="0.3;0.7;0.3"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="100%" stopColor="#a29bfe" stopOpacity="0.1">
                      <animate
                        attributeName="stopOpacity"
                        values="0.1;0.5;0.1"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                  <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6c5ce7" stopOpacity="0.4">
                      <animate
                        attributeName="stopOpacity"
                        values="0.4;0.1;0.4"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="100%" stopColor="#4a6cf7" stopOpacity="0.1">
                      <animate
                        attributeName="stopOpacity"
                        values="0.1;0.5;0.1"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                </defs>

                <path
                  d="M100,300 L200,200 L300,200 L350,150 L400,150"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="500"
                    to="0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="stroke-dasharray" values="500" dur="0.01s" fill="freeze" />
                </path>
                <path
                  d="M400,150 L450,200 L550,200 L600,250 L700,250"
                  stroke="url(#grad2)"
                  strokeWidth="2"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="500"
                    to="0"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="stroke-dasharray" values="500" dur="0.01s" fill="freeze" />
                </path>
                <path
                  d="M100,300 L150,350 L250,350 L300,400 L400,400"
                  stroke="url(#grad1)"
                  strokeWidth="2"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="500"
                    to="0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="stroke-dasharray" values="500" dur="0.01s" fill="freeze" />
                </path>
                <path
                  d="M400,400 L500,400 L550,450 L650,450 L700,450"
                  stroke="url(#grad3)"
                  strokeWidth="2"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="500"
                    to="0"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="stroke-dasharray" values="500" dur="0.01s" fill="freeze" />
                </path>
                <path
                  d="M200,200 L200,350"
                  stroke="url(#grad2)"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="300"
                    to="0"
                    dur="3.2s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="stroke-dasharray" values="300" dur="0.01s" fill="freeze" />
                </path>
                <path
                  d="M300,200 L300,350"
                  stroke="url(#grad3)"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="300"
                    to="0"
                    dur="3.8s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="stroke-dasharray" values="300" dur="0.01s" fill="freeze" />
                </path>
                <path
                  d="M500,200 L500,400"
                  stroke="url(#grad1)"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="300"
                    to="0"
                    dur="4.2s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="stroke-dasharray" values="300" dur="0.01s" fill="freeze" />
                </path>
                <path
                  d="M600,250 L600,450"
                  stroke="url(#grad2)"
                  strokeWidth="1.5"
                  fill="none"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="300"
                    to="0"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                  <animate attributeName="stroke-dasharray" values="300" dur="0.01s" fill="freeze" />
                </path>

                <circle cx="100" cy="300" r="6" fill="#4a6cf7">
                  <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="200" r="5" fill="#6c5ce7">
                  <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="200" r="4" fill="#4a6cf7">
                  <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="350" cy="150" r="5" fill="#a29bfe">
                  <animate attributeName="r" values="5;7;5" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="150" r="6" fill="#4a6cf7">
                  <animate attributeName="r" values="6;8;6" dur="2.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="450" cy="200" r="4" fill="#6c5ce7">
                  <animate attributeName="r" values="4;6;4" dur="2.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="550" cy="200" r="5" fill="#4a6cf7">
                  <animate attributeName="r" values="5;7;5" dur="3.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="600" cy="250" r="6" fill="#a29bfe">
                  <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="700" cy="250" r="5" fill="#4a6cf7">
                  <animate attributeName="r" values="5;8;5" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="350" r="4" fill="#6c5ce7">
                  <animate attributeName="r" values="4;6;4" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="350" r="5" fill="#4a6cf7">
                  <animate attributeName="r" values="5;7;5" dur="2.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="400" r="6" fill="#a29bfe">
                  <animate attributeName="r" values="6;9;6" dur="2.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="400" r="5" fill="#4a6cf7">
                  <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0.5;0.9" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="500" cy="400" r="4" fill="#6c5ce7">
                  <animate attributeName="r" values="4;6;4" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="550" cy="450" r="5" fill="#4a6cf7">
                  <animate attributeName="r" values="5;7;5" dur="3.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="650" cy="450" r="6" fill="#a29bfe">
                  <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="700" cy="450" r="5" fill="#4a6cf7">
                  <animate attributeName="r" values="5;8;5" dur="2.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.8s" repeatCount="indefinite" />
                </circle>

                <circle cx="100" cy="300" r="3" fill="#fff">
                  <animate
                    attributeName="cx"
                    values="100;200;300;350;400"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values="300;200;200;150;150"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;1;0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="400" cy="150" r="3" fill="#fff">
                  <animate
                    attributeName="cx"
                    values="400;450;550;600;700"
                    dur="4.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values="150;200;200;250;250"
                    dur="4.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;1;0"
                    dur="4.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="100" cy="300" r="3" fill="#fff">
                  <animate
                    attributeName="cx"
                    values="100;150;250;300;400"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values="300;350;350;400;400"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;1;0"
                    dur="5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="400" cy="400" r="3" fill="#fff">
                  <animate
                    attributeName="cx"
                    values="400;500;550;650;700"
                    dur="3.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values="400;400;450;450;450"
                    dur="3.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;1;0"
                    dur="3.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>

              <div
                className={styles.dataParticle}
                style={{ left: '10%', top: '20%', animationDelay: '0s' }}
              />
              <div
                className={styles.dataParticle}
                style={{ left: '25%', top: '60%', animationDelay: '0.5s' }}
              />
              <div
                className={styles.dataParticle}
                style={{ left: '50%', top: '15%', animationDelay: '1s' }}
              />
              <div
                className={styles.dataParticle}
                style={{ left: '70%', top: '40%', animationDelay: '1.5s' }}
              />
              <div
                className={styles.dataParticle}
                style={{ left: '85%', top: '70%', animationDelay: '2s' }}
              />
              <div
                className={styles.dataParticle}
                style={{ left: '40%', top: '80%', animationDelay: '0.8s' }}
              />
              <div
                className={styles.dataParticle}
                style={{ left: '60%', top: '25%', animationDelay: '1.2s' }}
              />
              <div
                className={styles.dataParticle}
                style={{ left: '15%', top: '45%', animationDelay: '1.8s' }}
              />

              <div
                className={styles.glowOrb}
                style={{
                  left: '20%',
                  top: '30%',
                  width: '300px',
                  height: '300px',
                  animationDelay: '0s',
                }}
              />
              <div
                className={styles.glowOrb}
                style={{
                  right: '20%',
                  bottom: '20%',
                  width: '400px',
                  height: '400px',
                  animationDelay: '2s',
                }}
              />
              <div
                className={styles.glowOrb}
                style={{
                  left: '50%',
                  top: '50%',
                  width: '200px',
                  height: '200px',
                  animationDelay: '4s',
                }}
              />
            </div>
          </div>

          {/* ─── Hero Row: text + image side-by-side ───────────────── */}
          <div className={styles.heroRow}>
            <motion.div
              className={styles.heroContent}
              style={{ opacity, y }}
            >
              <motion.p
                className={styles.heroBadge}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                RESOURCES
              </motion.p>

              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              >
                Answers to the Questions Practice Owners Actually Ask
              </motion.h1>

              <motion.p
                className={styles.heroSub}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              >
                No general "AI trends" content here. These are practical guides on the specific
                problems that show up in your practice management reports like no-shows, retention,
                KPIs, which are written to be useful on their own, whether or not you ever talk to us.
              </motion.p>

              <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <span>Scroll to explore</span>
                <div className={styles.scrollLine} />
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroImageWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={HERO_IMAGE_URL}
                alt="Data analytics animation"
                className={styles.heroImage}
              />
              <p className={styles.imageCredit}>
                Animation by{' '}
                <a href="https://giphy.com" target="_blank" rel="noopener noreferrer">
                  GIPHY
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── GRID SECTION ──────────────────────────────────────────── */}
        <section className={styles.gridSection}>
          <div className={styles.container}>
            {/* Grid Header – animates on scroll */}
            <motion.div
              className={styles.gridHeader}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={styles.gridTitle}>Latest Guides & Insights</h2>
              <Link to="/resources" className={styles.gridViewAll}>
                All articles <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Filter Bar – animates on scroll */}
            {!loading && articles.length > 0 && (
              <motion.div
                className={styles.filterBar}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {categories.map((category, idx) => (
                  <motion.button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={
                      activeCategory === category
                        ? `${styles.filterButton} ${styles.filterButtonActive}`
                        : styles.filterButton
                    }
                    aria-pressed={activeCategory === category}
                    // Each button animates individually on scroll
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 + 0.1 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            )}

            {loading && <p className={styles.loadingText}>Loading articles…</p>}

            {!loading && loadError && articles.length === 0 && (
              <p className={styles.emptyText}>
                Couldn't load articles right now. Please refresh the page.
              </p>
            )}

            {!loading && !loadError && articles.length === 0 && (
              <p className={styles.emptyText}>No articles published yet.</p>
            )}

            {/* Article Grid – stagger on scroll */}
            {!loading && filteredArticles.length > 0 && (
              <motion.div
                className={styles.grid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={staggerGrid}
                key={activeCategory}
              >
                {filteredArticles.map((article) => (
                  <motion.div key={article.slug.current} variants={cardItem}>
                    <Link to={`/resources/${article.slug.current}`} className={styles.card}>
                      <span className={styles.cardCategory}>{article.category}</span>
                      <h3 className={styles.cardTitle}>{article.title}</h3>
                      <p className={styles.cardExcerpt}>{article.excerpt}</p>
                      <span className={styles.cardMeta}>
                        Read more <ArrowRight size={14} />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {!loading && !loadError && articles.length > 0 && filteredArticles.length === 0 && (
              <p className={styles.emptyText}>No articles in this category yet.</p>
            )}
          </div>
        </section>

        {/* ─── RECOMMENDED READING ────────────────────────────────── */}
        <motion.section
          className={styles.recommendedSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.recommendedContainer}>
            <div className={styles.recommendedContent}>
              <p>
                Looking for what our team reads, not just what we write?{' '}
                <Link to="/resources">See our recommended reading →</Link>
              </p>
            </div>
          </div>
        </motion.section>

        {/* ─── CTA ──────────────────────────────────────────────────── */}
        <motion.section
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
              <h2>Want This Built for Your Practice?</h2>
              <p>
                These guides explain the metrics. We build the dashboard that tracks them
                automatically.
              </p>
              <Link to="/contact" className={styles.ctaBtn}>
                Talk to Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;