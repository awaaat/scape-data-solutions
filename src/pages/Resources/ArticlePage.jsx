import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import { getArticleBySlug } from "../../services/articles";
import styles from "./ArticlePage.module.css";

const SITE_URL = "https://www.scapedatasolutions.com";

const portableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className={styles.sectionHeading}>{children}</h2>,
    h3: ({ children }) => <h3 className={styles.sectionHeading}>{children}</h3>,
    normal: ({ children }) => <p className={styles.paragraph}>{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className={styles.list}>{children}</ul>,
    number: ({ children }) => <ol className={styles.list}>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setLoading(true);
    getArticleBySlug(slug)
      .then((data) => {
        if (!data) {
          navigate("/resources", { replace: true });
          return;
        }
        setArticle(data);
      })
      .catch((err) => {
        console.error("Failed to load article:", err);
        navigate("/resources", { replace: true });
      })
      .finally(() => setLoading(false));
  }, [slug, navigate]);

  if (loading) return null;
  if (!article) return null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: { "@type": "Organization", name: "Scape Data Solutions" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/resources/${article.slug.current}`,
  };

  return (
    <div className={styles.page}>
      <SEO
        title={`${article.title} | Scape Data Solutions`}
        description={article.excerpt}
        path={`/resources/${article.slug.current}`}
        schema={articleSchema}
      />

      <Navbar activeNav="resources" />

      <article className={styles.article}>
        <div className={styles.hero}>
          <Link to="/resources" className={styles.backLink}>
            <ArrowLeft size={14} /> All Resources
          </Link>
          <span className={styles.category}>{article.category}</span>
          <h1 className={styles.title}>{article.title}</h1>
        </div>

        <div className={styles.body}>
          <PortableText value={article.body} components={portableTextComponents} />
        </div>

        {article.sources && article.sources.length > 0 && (
          <div className={styles.sources}>
            <h3 className={styles.sourcesHeading}>Sources</h3>
            <ol className={styles.sourcesList}>
              {article.sources.map((src, j) => (
                <li key={j}>
                  <a href={src.url} target="_blank" rel="noopener noreferrer nofollow">
                    {src.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className={styles.inlineCta}>
          <h3>Want This Tracked Automatically?</h3>
          <p>We build the dashboard so you never have to pull this data by hand.</p>
          <Link to="/contact" className={styles.inlineCtaBtn}>
            See the Solution <ArrowRight size={16} />
          </Link>
        </div>
      </article>

      <section className={styles.cta}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Want This Tracked Automatically?</h2>
          <p>We build the dashboard so you never have to pull this data by hand.</p>
          <Link to="/contact" className={styles.ctaBtn}>Book a Free Demo <ArrowRight size={16} /></Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticlePage;