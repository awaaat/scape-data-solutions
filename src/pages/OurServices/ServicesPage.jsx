// src/pages/OurServices/ServicesPage.jsx
import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ChevronUp,
  Layers,
  BarChart3,
  Database,
  Code,
  Activity,
  GraduationCap,
  Briefcase,
  HeartPulse,
  ShoppingBag,
  Factory,
  TrendingUp,
  BookOpen,
  PenLine,
  FlaskConical,
  BrainCircuit,
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { SERVICE_CARDS, categories, SLUG_MAP } from '../../data/servicesData';
import styles from './ServicesPage.module.css';
import homeStyles from '../Home/HomePage.module.css';

const categoryMap = {
  academic:   { icon: <GraduationCap size={16} />, label: 'Academic & Research' },
  analytics:  { icon: <TrendingUp size={16} />, label: 'Advanced Analytics' },
  finance:    { icon: <Briefcase size={16} />, label: 'Finance & Risk' },
  healthcare: { icon: <HeartPulse size={16} />, label: 'Healthcare & Life Sciences' },
  manufacturing: { icon: <Factory size={16} />, label: 'Manufacturing & Supply Chain' },
  retail:     { icon: <ShoppingBag size={16} />, label: 'Retail & E‑Commerce' },
  'assignment-help': { icon: <BookOpen size={16} />, label: 'Assignment & Software Help' },
  'academic-writing': { icon: <PenLine size={16} />, label: 'Academic Writing & Publishing' },
  'research-methods': { icon: <FlaskConical size={16} />, label: 'Statistical & Research Methods' },
  'ai-ml':    { icon: <BrainCircuit size={16} />, label: 'AI & Machine Learning' },
  'data-engineering': { icon: <Database size={16} />, label: 'Data Engineering & BI Tools' },
};

// Build valid slugs from hrefs
const validSlugs = SERVICE_CARDS
  .map(card => card.href?.replace('/services/', ''))
  .filter(Boolean);

const availableCards = SERVICE_CARDS.filter(
  card => card.category && categories.includes(card.category) && validSlugs.includes(card.href?.replace('/services/', ''))
);

const filterCategories = [
  { id: 'all', label: 'All', icon: <Layers size={16} /> },
  ...categories.map(cat => ({
    id: cat,
    label: categoryMap[cat]?.label || cat,
    icon: categoryMap[cat]?.icon || <Layers size={16} />,
  })),
];

const ServicesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get('category') || 'all';

  const validCategoryIds = filterCategories.map(c => c.id);
  const initialCategory = validCategoryIds.includes(categoryFromUrl) ? categoryFromUrl : 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const filterSectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [showTop, setShowTop] = useState(false);

  const filteredServices =
    activeCategory === 'all'
      ? availableCards
      : availableCards.filter((s) => s.category === activeCategory);

  // ─── Observer for SECTION elements (hero, filter header, sidebar, integrations, CTA) ───
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible); // remove so they re‑animate when they come back
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const targets = document.querySelectorAll(`.${styles.animateOnScroll}`);
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []); // run once

  // ─── Observer for CARDS (with staggered delay) ──────────────────
  useEffect(() => {
    if (!cardsContainerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const cards = cardsContainerRef.current.querySelectorAll(`.${styles.card}`);
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filteredServices]);

  // ─── Sync category from URL ─────────────────────────────────────
  useEffect(() => {
    const cat = queryParams.get('category') || 'all';
    if (validCategoryIds.includes(cat)) {
      setActiveCategory(cat);
      if (cat !== 'all' && filterSectionRef.current) {
        setTimeout(() => {
          const top =
            filterSectionRef.current.getBoundingClientRect().top +
            window.pageYOffset -
            110;
          window.scrollTo({ top, behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.search]);

  // ─── Scroll to top button ──────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLearnMore = (card) => {
    const slug = SLUG_MAP[card.title];
    if (slug) navigate(`/services/${slug}`);
    else if (card.href) navigate(card.href);
  };

  const getCategoryInfo = (categoryId) => {
    return categoryMap[categoryId] || { icon: <Layers size={16} />, label: categoryId };
  };

  return (
    <div className={homeStyles.page}>
      <SEO
        title="Data Analytics & AI Services | Scape Data Solutions"
        description="Expert data analytics and AI services across academic, analytics, finance, healthcare, manufacturing, and retail."
        path="/services"
      />

      <Navbar activeNav="services" />

      <main className={homeStyles.mainContent}>
        {/* ─── HERO ──────────────────────────────────────────────── */}
        <section className={`${styles.heroSection} ${styles.animateOnScroll}`}>
          <div className={styles.heroGradient} />
          <div className={homeStyles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span>{availableCards.length}+ Industry-Focused Services</span>
              </div>
              <h1 className={styles.heroTitle}>
                Services That <span className={styles.highlight}>Transform</span> Every Industry
              </h1>
              <p className={styles.heroSub}>
                From Academic Research to Retail – we deliver AI and analytics solutions that solve
                real‑world problems with measurable results.
              </p>
              <div className={styles.heroCta}>
                <Link to="/contact" className={styles.heroBtn}>
                  Get Started <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className={styles.heroBtnSecondary}>
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={homeStyles.container} style={{ padding: "2.5rem 1.5rem" }}>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "2rem" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.4rem" }}>Found the service you need?</h2>
            <p style={{ margin: "0 0 1.2rem", opacity: 0.75, maxWidth: "560px" }}>Submit your project brief in the client portal and our team will scope it within one business day, no sales call required.</p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="https://portal.scapedatasolutions.com/portal/signup" className={styles.heroBtn}>Submit a Project <ArrowRight size={16} /></a>
              <a href="https://portal.scapedatasolutions.com/portal/login" className={styles.heroBtnSecondary}>Log In</a>
            </div>
          </div>
        </section>

        {/* ─── FILTER & CARDS ────────────────────────────────────── */}
        <section className={styles.filterSection} ref={filterSectionRef}>
          <div className={homeStyles.container}>
            <div className={`${styles.filterHeader} ${styles.animateOnScroll}`}>
              <h2 className={styles.filterTitle}>Explore by Industry</h2>
            </div>

            <div className={styles.filterLayout}>
              <div className={`${styles.filterSidebar} ${styles.animateOnScroll}`}>
                <ul className={styles.sidebarList}>
                  {filterCategories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        className={`${styles.sidebarBtn} ${
                          activeCategory === cat.id ? styles.active : ''
                        }`}
                        onClick={() => setActiveCategory(cat.id)}
                      >
                        <span className={styles.sidebarIcon}>{cat.icon}</span>
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.filterCards}>
                <div className={styles.cardsGrid} ref={cardsContainerRef}>
                  {filteredServices.map((card, index) => {
                    const { icon, label } = getCategoryInfo(card.category);
                    // Stagger delay: each card gets a slightly longer delay
                    const delay = index * 50;
                    return (
                      <div
                        key={card.id || card.title}
                        className={styles.card}
                        style={{ transitionDelay: `${delay}ms` }}
                        onClick={() => handleLearnMore(card)}
                      >
                        <div className={styles.cardBody}>
                          <div className={styles.cardMeta}>
                            <span className={styles.cardCategory}>
                              {icon}
                              {label}
                            </span>
                            <span className={styles.cardDemand}>
                              <Activity
                                size={10}
                                style={{ marginRight: 3, verticalAlign: '-1px' }}
                              />
                              {card.demand || 'Standard'} Priority
                            </span>
                          </div>
                          <h3 className={styles.cardTitle}>
                            <Link
                              to={card.href}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {card.title.replace(/&amp;/g, '&')}
                            </Link>
                          </h3>
                          <p className={styles.cardDescription}>{card.description}</p>

                          <ul className={styles.cardList}>
                            {card.items && card.items.slice(0, 4).map((item, i) => (
                              <li key={i} className={styles.cardListItem}>
                                <span className={styles.cardBullet}>•</span>
                                {item}
                              </li>
                            ))}
                            {card.items && card.items.length > 4 && (
                              <li className={styles.cardListItem}>
                                <span className={styles.moreItems}>
                                  +{card.items.length - 4} more
                                </span>
                              </li>
                            )}
                          </ul>

                          <button
                            className={styles.cardBtn}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLearnMore(card);
                            }}
                          >
                            View Details <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INTEGRATIONS ────────────────────────────────────────── */}
        <section className={`${styles.integrationsSection} ${styles.animateOnScroll}`}>
          <div className={homeStyles.container}>
            <div className={styles.integrationsHeader}>
              <div>
                <p className={styles.integrationsBadge}>Integrations</p>
                <h2 className={styles.integrationsTitle}>Analytics where you already work</h2>
              </div>
              <p className={styles.integrationsSub}>
                Our solutions integrate with your existing tools — from BI platforms to cloud data warehouses.
              </p>
            </div>

            <div className={styles.integrationsGrid}>
              <div className={styles.integrationCard}>
                <div className={styles.integrationIcon}>
                  <BarChart3 size={20} />
                </div>
                <h3 className={styles.integrationCardTitle}>Power BI & Tableau</h3>
                <p className={styles.integrationCardDesc}>
                  Embed predictive analytics directly into your existing dashboards and reports.
                </p>
                <div className={styles.integrationLink}>
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              <div className={styles.integrationCard}>
                <div className={styles.integrationIcon}>
                  <Database size={20} />
                </div>
                <h3 className={styles.integrationCardTitle}>Snowflake & BigQuery</h3>
                <p className={styles.integrationCardDesc}>
                  Run ML models directly on your cloud data warehouse with zero data movement.
                </p>
                <div className={styles.integrationLink}>
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              <div className={styles.integrationCard}>
                <div className={styles.integrationIcon}>
                  <Code size={20} />
                </div>
                <h3 className={styles.integrationCardTitle}>Python & R SDKs</h3>
                <p className={styles.integrationCardDesc}>
                  Build custom analytics pipelines with our developer‑friendly SDKs and APIs.
                </p>
                <div className={styles.integrationLink}>
                  <span>Learn more</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ────────────────────────────────────────────────── */}
        <section className={`${styles.ctaSection} ${styles.animateOnScroll}`}>
          <div className={homeStyles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaHeading}>Ready to get started?</h2>
              <p className={styles.ctaText}>
                Let's discuss how our analytics and AI services can drive your business forward.
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/contact" className={styles.ctaBtnPrimary}>
                  Contact Sales <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className={styles.ctaBtnSecondary}>
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {showTop && (
        <button
          className={homeStyles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUp size={18} />
        </button>
      )}
    </div>
  );
};

export default ServicesPage;