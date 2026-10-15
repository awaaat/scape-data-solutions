// src/pages/OurServices/ServicesCategoryPage.jsx
// One real page per Services category: /services/category/:categoryId
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import PageLayout from '../../components/Layout/PageLayout';
import { SERVICE_CARDS, categories } from '../../data/servicesData';
import styles from './ServicesPage.module.css';
import homeStyles from '../Home/HomePage.module.css';

const LABELS = {
  academic: 'Academic & Research',
  analytics: 'Advanced Analytics',
  finance: 'Finance & Risk',
  healthcare: 'Healthcare & Life Sciences',
  manufacturing: 'Manufacturing & Supply Chain',
  retail: 'Retail & E-Commerce',
  'assignment-help': 'Assignment & Software Help',
  'academic-writing': 'Academic Writing & Publishing',
  'research-methods': 'Statistical & Research Methods',
  'ai-ml': 'AI & Machine Learning',
  'data-engineering': 'Data Engineering & BI Tools',
};

const slugOf = (card) => card.href?.replace('/services/', '');
const validSlugs = SERVICE_CARDS.map(slugOf).filter(Boolean);
const availableCards = SERVICE_CARDS.filter(
  (c) => c.category && categories.includes(c.category) && validSlugs.includes(slugOf(c))
);
const clean = (t) => (t || '').replace(/&amp;/g, '&');

export default function ServicesCategoryPage() {
  const { categoryId } = useParams();

  if (!categories.includes(categoryId)) {
    return <Navigate to="/services" replace />;
  }

  const label = LABELS[categoryId] || categoryId;
  const cards = availableCards.filter((c) => c.category === categoryId);

  return (
    <PageLayout activeNav="services">
      <SEO
        title={`${label} Services`}
        description={`Explore our ${label} services: expert analytics and AI solutions with measurable results.`}
        path={`/services/category/${categoryId}`}
      />

      <section className={styles.heroSection}>
        <div className={styles.heroGradient} />
        <div className={homeStyles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>{cards.length} {cards.length === 1 ? 'Service' : 'Services'}</span>
            </div>
            <h1 className={styles.heroTitle}>{label}</h1>
            <p className={styles.heroSub}>
              Explore our {label} services: expert analytics and AI solutions built around your goals.
            </p>
            <div className={styles.heroCta}>
              <Link to="/contact" className={styles.heroBtn}>
                Get Started <ArrowRight size={16} />
              </Link>
              <Link to="/services" className={styles.heroBtnSecondary}>
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.filterSection}>
        <div className={homeStyles.container}>
          <div className={styles.cardsGrid}>
            {cards.map((card) => (
              <Link
                key={card.id || card.title}
                to={card.href}
                className={`${styles.card} ${styles.visible}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardDemand}>{card.demand || 'Standard'} Priority</span>
                  </div>
                  <h3 className={styles.cardTitle}>{clean(card.title)}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <ul className={styles.cardList}>
                    {card.items && card.items.slice(0, 4).map((item, i) => (
                      <li key={i} className={styles.cardListItem}>
                        <span className={styles.cardBullet}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className={styles.cardBtn}>
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ margin: '3rem 0 1rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>Other categories</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {categories.filter((c) => c !== categoryId).map((c) => (
                <Link
                  key={c}
                  to={`/services/category/${c}`}
                  style={{
                    padding: '0.45rem 0.95rem',
                    border: '1px solid rgba(0,0,0,0.12)',
                    borderRadius: '999px',
                    fontSize: '0.88rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  {LABELS[c] || c}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
