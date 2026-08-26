import { useEffect, useState, useRef, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import { ArrowRight, ArrowLeft, List, Link2, Check, Gift, MessageCircle, Copy } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import { getArticleBySlug, getAllArticles } from "../../services/articles";
import quartoArticlesIndex from "../../data/quartoArticlesIndex";
import styles from "./ArticlePage.module.css";

const SITE_URL = "https://www.scapedatasolutions.com";

// ─── Heading slug helper (used to build TOC anchors) ─────────────
function slugify(text) {
  return (text || "")
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const portableTextComponents = (headingsRef) => ({
  block: {
    h2: ({ children, value }) => {
      const text = (value?.children || []).map((c) => c.text).join("");
      const id = slugify(text) || `section-${headingsRef.current.length}`;
      headingsRef.current.push({ id, text, level: 2 });
      return (
        <h2 id={id} className={styles.sectionHeading}>
          {children}
        </h2>
      );
    },
    h3: ({ children, value }) => {
      const text = (value?.children || []).map((c) => c.text).join("");
      const id = slugify(text) || `section-${headingsRef.current.length}`;
      headingsRef.current.push({ id, text, level: 3 });
      return (
        <h3 id={id} className={styles.sectionHeading}>
          {children}
        </h3>
      );
    },
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
});

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const quartoArticle = quartoArticlesIndex[slug];

  const [article, setArticle] = useState(quartoArticle || null);
  const [loading, setLoading] = useState(!quartoArticle);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [related, setRelated] = useState([]);
  const [readingTime, setReadingTime] = useState(null);
  const [linkCopied, setLinkCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const quartoBodyRef = useRef(null);
  const portableHeadingsRef = useRef([]);
  const bodyRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    if (quartoArticle) {
      setArticle(quartoArticle);
      setLoading(false);
      return;
    }

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
  }, [slug, navigate, quartoArticle]);

  // ─── Build TOC for PortableText (Sanity) articles ───────────────
  useEffect(() => {
    if (!article || article.isQuarto) return;
    portableHeadingsRef.current = [];
    const id = requestAnimationFrame(() => {
      setToc([...portableHeadingsRef.current]);
    });
    return () => cancelAnimationFrame(id);
  }, [article]);

  // ─── Build TOC for Quarto (static HTML) articles ────────────────
  useEffect(() => {
    if (!article?.isQuarto) return;
    const container = quartoBodyRef.current;
    if (!container) return;

    const headings = Array.from(container.querySelectorAll("h2, h3"));
    const items = headings.map((node, i) => {
      let id = node.id;
      if (!id) {
        id = slugify(node.textContent) || `section-${i}`;
        node.id = id;
      }
      return {
        id,
        text: node.textContent,
        level: node.tagName === "H2" ? 2 : 3,
      };
    });
    setToc(items);
  }, [article]);

  // Quarto KaTeX rendering
  useEffect(() => {
    if (!article?.isQuarto) return;

    function renderMath() {
      const container = quartoBodyRef.current;
      if (!container || !window.katex) return;
      const nodes = container.querySelectorAll(".math.inline, .math.display");
      nodes.forEach((node) => {
        const tex = node.textContent;
        const displayMode = node.classList.contains("display");
        try {
          window.katex.render(tex, node, { displayMode, throwOnError: false });
        } catch (e) {
          console.error("KaTeX render error:", e);
        }
      });
    }

    // KaTeX needs its own stylesheet for fonts/layout (fractions, sqrt,
    // sums, etc). The embedded <link> in the raw Quarto HTML never loads
    // it either — <link> tags CAN execute via dangerouslySetInnerHTML,
    // but only once the KaTeX JS below has actually rendered the math
    // spans, so we load it explicitly here to guarantee it's present.
    if (!document.getElementById("katex-css")) {
      const link = document.createElement("link");
      link.id = "katex-css";
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css";
      document.head.appendChild(link);
    }

    if (window.katex) {
      renderMath();
      return;
    }

    const existing = document.getElementById("katex-js");
    if (existing) {
      existing.addEventListener("load", renderMath);
      return;
    }

    const script = document.createElement("script");
    script.id = "katex-js";
    script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js";
    script.onload = renderMath;
    document.head.appendChild(script);
  }, [article]);

  // ─── Reading time (derived from the actual rendered body text, so
  // it's correct for both PortableText and Quarto HTML without
  // duplicating word-count logic per source type) ──────────────────
  useEffect(() => {
    if (!article) return;
    const id = requestAnimationFrame(() => {
      const text = bodyRef.current?.textContent || "";
      const words = text.trim().split(/\s+/).filter(Boolean).length;
      setReadingTime(words > 0 ? Math.max(1, Math.round(words / 200)) : null);
    });
    return () => cancelAnimationFrame(id);
  }, [article]);

  // ─── Reading progress bar ────────────────────────────────────────
  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [article]);

  // ─── Active TOC section tracking ─────────────────────────────────
  // Whichever heading's top has most recently crossed the "activation
  // line" (110px from the viewport top) is the active one. This mirrors
  // how Investopedia's TOC behaves: the item stays highlighted for the
  // whole time you're reading that section, and switches the instant
  // you scroll past the next heading.
  useEffect(() => {
    if (!toc.length) return;

    function updateActive() {
      const activationLine = 130; // px from top of viewport
      let currentId = null;

      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= activationLine) {
          currentId = item.id;
        } else {
          break;
        }
      }

      // Fallback to the first heading if none have been scrolled to yet
      setActiveId(currentId || toc[0].id);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [toc]);

  // ─── Related resources (same category, excluding current) ───────
  useEffect(() => {
    if (!article) return;
    let cancelled = false;

    const quartoList = Object.values(quartoArticlesIndex || {});

    getAllArticles()
      .then((sanityList) => {
        if (cancelled) return;
        const all = [...(sanityList || []), ...quartoList];
        const filtered = all
          .filter(
            (a) =>
              a?.slug?.current &&
              a.slug.current !== article.slug?.current &&
              a.category === article.category
          )
          .slice(0, 2);
        setRelated(filtered);
      })
      .catch((err) => {
        console.error("Failed to load related articles:", err);
      });

    return () => {
      cancelled = true;
    };
  }, [article]);

  const handleCopyLink = useCallback(() => {
    if (!article) return;
    const url = `${SITE_URL}/resources/${article.slug.current}`;
    navigator.clipboard
      ?.writeText(url)
      .then(() => {
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy link:", err));
  }, [article]);

  // Assumption: there's no real referral/attribution system in this
  // codebase, so this is just the article URL tagged with a ?ref
  // param. Swap in your actual referral link format once you have one
  // (e.g. a per-user code from your affiliate system).
  const referralLink = article
    ? `${SITE_URL}/resources/${article.slug.current}?ref=share50`
    : "";

  const handleCopyShareLink = useCallback(() => {
    if (!referralLink) return;
    navigator.clipboard
      ?.writeText(referralLink)
      .then(() => {
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy referral link:", err));
  }, [referralLink]);

  const handleTocClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  }, []);

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

  const hasTakeaways = Array.isArray(article.keyTakeaways) && article.keyTakeaways.length > 0;
  const hasToc = toc.length >= 2;

  return (
    <div className={styles.page}>
      <SEO
        title={`${article.title} | Scape Data Solutions`}
        description={article.excerpt}
        path={`/resources/${article.slug.current}`}
        schema={articleSchema}
      />

      <div className={styles.progressBarTrack} aria-hidden="true">
        <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
      </div>

      <Navbar activeNav="resources" />

      <article className={styles.article}>
        <div className={styles.hero}>
          <div className={styles.heroTop}>
            <div className={styles.heroMain}>
              <Link to="/resources" className={styles.backLink}>
                <ArrowLeft size={14} /> All Resources
              </Link>
              <span className={styles.category}>{article.category}</span>
              <h1 className={styles.title}>{article.title}</h1>
              {article.publishDate && (
                <p className={styles.meta}>
                  <span>
                    {new Date(article.publishDate).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </p>
              )}
              <div className={styles.accentRule} />
            </div>

            <div className={styles.heroInfoCard}>
              <div className={styles.heroInfoRow}>
                <span className={styles.heroInfoLabel}>Reading time</span>
                <span className={styles.heroInfoValue}>
                  {readingTime ? `${readingTime} min` : "—"}
                </span>
              </div>
              <div className={styles.heroInfoDivider} />
              <button
                type="button"
                className={styles.heroInfoLink}
                onClick={handleCopyLink}
              >
                {linkCopied ? <Check size={14} /> : <Link2 size={14} />}
                {linkCopied ? "Link copied" : "Copy link"}
              </button>
              <div className={styles.heroInfoDivider} />
              <button
                type="button"
                className={styles.heroInfoLink}
                onClick={() => setShareOpen((v) => !v)}
              >
                <Gift size={14} />
                Share &amp; earn <span className={styles.heroInfoAmount}>USD 50</span>
              </button>
              {shareOpen && (
                <div className={styles.shareLinkBox}>
                  <span className={styles.shareLinkText}>{referralLink}</span>
                  <button
                    type="button"
                    className={styles.shareLinkCopyBtn}
                    onClick={handleCopyShareLink}
                    aria-label="Copy referral link"
                  >
                    {shareCopied ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                </div>
              )}
              <div className={styles.heroInfoDivider} />
              <Link to="/contact" className={styles.heroInfoLink}>
                <MessageCircle size={14} />
                Contact us
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.contentGrid}>
          {hasToc && (
            <aside className={styles.tocRail}>
              <div className={styles.toc}>
                <span className={styles.tocTitle}>
                  <List size={14} /> Table of Contents
                </span>
                <ul className={styles.tocList}>
                  {toc.map((item) => (
                    <li
                      key={item.id}
                      className={item.level === 3 ? styles.tocSubItem : styles.tocItem}
                    >
                      <a
                        href={`#${item.id}`}
                        className={`${styles.tocLink} ${
                          activeId === item.id ? styles.tocLinkActive : ""
                        }`}
                        onClick={(e) => handleTocClick(e, item.id)}
                      >
                        <span className={styles.tocArrow} aria-hidden="true">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1 0.5L7 4L1 7.5V0.5Z" fill="currentColor" />
                          </svg>
                        </span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          <div className={styles.main}>
            {hasTakeaways && (
              <div className={styles.takeaways}>
                <h3 className={styles.takeawaysTitle}>Key Takeaways</h3>
                <ul className={styles.takeawaysList}>
                  {article.keyTakeaways.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.body} ref={bodyRef}>
              {article.isQuarto ? (
                <div
                  ref={quartoBodyRef}
                  className={styles.quartoBody}
                  dangerouslySetInnerHTML={{ __html: article.html }}
                />
              ) : (
                <PortableText
                  value={article.body}
                  components={portableTextComponents(portableHeadingsRef)}
                />
              )}
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
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className={styles.related}>
          <div className={styles.article}>
            <h3>Related Resources</h3>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link
                  key={r.slug.current}
                  to={`/resources/${r.slug.current}`}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedCategory}>{r.category}</span>
                  <span className={styles.relatedTitle}>{r.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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