import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import { getAllArticles } from "../../services/articles";
import styles from "./ResourcesPage.module.css";

const ResourcesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    getAllArticles()
      .then(setArticles)
      .catch((err) => console.error("Failed to load articles:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.page}>
      <SEO
        title="Resources | Dental & Practice Analytics Guides - Scape Data Solutions"
        description="Practical guides on dental KPIs, patient retention, and reducing no-shows — written for practice owners, not data scientists."
        path="/resources"
      />

      <Navbar activeNav="resources" />

      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className={styles.heroBadge}>INSIGHTS</p>
          <h1 className={styles.heroTitle}>Answers to the Questions <span className={styles.heroAccent}>Practice Owners Actually Ask</span></h1>
          <p className={styles.heroSub}>
            No general "AI trends" content here. These are practical guides on the specific problems that show up
            in your practice management reports — no-shows, retention, KPIs — written to be useful on their own,
            whether or not you ever talk to us.
          </p>
        </motion.div>
      </section>

      <section className={styles.grid}>
        {loading && <p style={{ padding: "0 40px" }}>Loading articles…</p>}
        {!loading && articles.length === 0 && (
          <p style={{ padding: "0 40px" }}>No articles published yet.</p>
        )}
        {articles.map((article, i) => (
          <motion.div
            key={article.slug.current}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
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
      </section>

      <section className={styles.recommendedLink}>
        <p>
          Looking for what our team reads, not just what we write?{" "}
          <Link to="/blog">See our recommended reading &rarr;</Link>
        </p>
      </section>

      <section className={styles.cta}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Want This Built for Your Practice?</h2>
          <p>These guides explain the metrics. We build the dashboard that tracks them automatically.</p>
          <Link to="/contact" className={styles.ctaBtn}>Talk to Us <ArrowRight size={16} /></Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;