// src/pages/IndustryLanding/IndustryLandingPage.jsx
//
// One component, three routes: /dental-analytics, /veterinary-analytics,
// /medical-practice-analytics (see App.jsx). Each route passes a different
// `dataKey` matching a key in industryLandingPages.js. This is deliberately
// separate from /solutions — that page surveys 20+ industries broadly;
// these pages exist purely to match one high-intent search term each.

import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import industryLandingPages from "../../data/industryLandingPages";
import { getArticlesBySlugs } from "../../services/articles";
import styles from "./IndustryLandingPage.module.css";

const IndustryLandingPage = ({ dataKey }) => {
  const data = industryLandingPages[dataKey];
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    if (data?.relatedArticleSlugs?.length) {
      getArticlesBySlugs(data.relatedArticleSlugs)
        .then(setRelatedArticles)
        .catch((err) => console.error("Failed to load related articles:", err));
    } else {
      setRelatedArticles([]);
    }
  }, [dataKey, data]);

  if (!data) {
    return <Navigate to="/solutions" replace />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${data.industry} Analytics`,
    provider: { "@type": "Organization", name: "Scape Data Solutions" },
    areaServed: "US",
    description: data.metaDescription,
  };

  return (
    <div className={styles.page}>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        path={`/${data.slug}`}
        schema={serviceSchema}
      />

      <Navbar activeNav="solutions" />

      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className={styles.badge}>{data.badge}</p>
          <h1 className={styles.heroTitle}>{data.heroTitle}</h1>
          <p className={styles.heroSub}>{data.heroSubtitle}</p>
          <Link to="/contact" className={styles.heroBtn}>
            Book a Free Demo <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <section className={styles.painSection}>
        <h2 className={styles.sectionTitle}>Sound familiar?</h2>
        <div className={styles.painGrid}>
          {data.painPoints.map((point, i) => (
            <motion.div
              key={i}
              className={styles.painCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <p>{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.kpiSection}>
        <h2 className={styles.sectionTitle}>What we track for you</h2>
        <p className={styles.sectionSub}>
          Built directly from your existing systems — no new software for your staff to learn.
        </p>
        <div className={styles.kpiGrid}>
          {data.kpis.map((kpi, i) => (
            <div key={i} className={styles.kpiCard}>
              <CheckCircle2 size={20} className={styles.kpiIcon} />
              <div>
                <h4>{kpi.name}</h4>
                <p>{kpi.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.howSection}>
        <h2 className={styles.sectionTitle}>How it works</h2>
        <div className={styles.howGrid}>
          {data.howItWorks.map((item, i) => (
            <div key={i} className={styles.howCard}>
              <span className={styles.howNumber}>{i + 1}</span>
              <h4>{item.step}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className={styles.articlesSection}>
          <h2 className={styles.sectionTitle}>Related Reading</h2>
          <div className={styles.articlesGrid}>
            {relatedArticles.map((a) => (
              <Link key={a.slug.current} to={`/resources/${a.slug.current}`} className={styles.articleCard}>
                <span>{a.category}</span>
                <h4>{a.title}</h4>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className={styles.cta}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>{data.ctaHeading}</h2>
          <p>{data.ctaSub}</p>
          <Link to="/contact" className={styles.ctaBtn}>Book a Free Demo <ArrowRight size={16} /></Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryLandingPage;