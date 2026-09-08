// src/pages/IndustryLanding/IndustryLandingPage.jsx
//
// One component, three routes: /dental-analytics, /veterinary-analytics,
// /medical-practice-analytics (see App.jsx). Each route passes a different
// `dataKey` matching a key in industryLandingPages.js. This is deliberately
// separate from /solutions — that page surveys 20+ industries broadly;
// these pages exist purely to match one high-intent search term each.

import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Users,
  Shield,
  Clock,
  BarChart3,
  Activity,
  Quote,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import industryLandingPages from "../../data/industryLandingPages";
import { getArticlesBySlugs } from "../../services/articles";
import styles from "./IndustryLandingPage.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};
// once: false → every section replays its entrance animation each time it
// re-enters the viewport, both scrolling down AND scrolling back up.
const VIEWPORT = { once: false, amount: 0.2 };

const KPI_ICONS = [TrendingUp, Users, Shield, Clock, BarChart3, Activity];

const IndustryLandingPage = ({ dataKey }) => {
  const data = industryLandingPages[dataKey];
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [openFaq, setOpenFaq] = useState(0);

  const { scrollYProgress } = useScroll();
  const heroBgY = useTransform(scrollYProgress, [0, 0.15], ["0%", "40%"]);
  const heroBgOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.4]);

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
    return <Navigate to="/services" replace />;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${data.industry} Analytics`,
    provider: { "@type": "Organization", name: "Scape Data Solutions" },
    areaServed: "US",
    description: data.metaDescription,
  };

  const faqSchema = data.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <div className={styles.page}>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        path={`/${data.slug}`}
        schema={faqSchema ? { "@context": "https://schema.org", "@graph": [serviceSchema, faqSchema] } : serviceSchema}
      />

      <Navbar activeNav="solutions" />

      <main>
        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <motion.div className={styles.heroBg} style={{ y: heroBgY, opacity: heroBgOpacity }} />
          <div className={styles.container}>
            <motion.div
              className={styles.heroInner}
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p className={styles.badge} variants={fadeUp}>
                <Sparkles size={13} /> {data.badge}
              </motion.p>
              <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                {data.heroTitle}
              </motion.h1>
              <motion.p className={styles.heroSub} variants={fadeUp}>
                {data.heroSubtitle}
              </motion.p>
              <motion.div className={styles.heroBtnRow} variants={fadeUp}>
                <Link to="/contact" className={styles.heroBtn}>
                  Book a Free Demo <ArrowRight size={17} />
                </Link>
                <Link to="/services" className={styles.heroBtnGhost}>
                  See All Services
                </Link>
              </motion.div>

              {data.heroStats?.length > 0 && (
                <motion.div className={styles.heroStatsRow} variants={fadeUp}>
                  {data.heroStats.map((s, i) => (
                    <div key={i} className={styles.heroStat}>
                      <span className={styles.heroStatValue}>{s.value}</span>
                      <span className={styles.heroStatLabel}>{s.label}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* ═══ PAIN POINTS ═══ */}
        <motion.section
          className={styles.sec}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.secHead}>
              <p className={styles.secLabel}>The problem</p>
              <h2 className={styles.secTitle}>Sound familiar?</h2>
            </div>
            <motion.div
              className={styles.painGrid}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              {data.painPoints.map((point, i) => (
                <motion.div key={i} className={styles.painCard} variants={fadeUp}>
                  <div className={styles.painIconWrap}>
                    <XCircle size={18} />
                  </div>
                  <h3 className={styles.painCardTitle}>{point.title}</h3>
                  <p className={styles.painCardDesc}>{point.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ═══ BEFORE / AFTER COMPARISON ═══ */}
        {data.comparison && (
          <motion.section
            className={`${styles.sec} ${styles.compareSection}`}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
          >
            <div className={styles.container}>
              <div className={styles.secHead} style={{ textAlign: "center" }}>
                <p className={`${styles.secLabel} ${styles.secLabelCenter}`}>The shift</p>
                <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>
                  From guesswork to a live dashboard
                </h2>
              </div>
              <div className={styles.compareGrid}>
                <motion.div
                  className={`${styles.compareCol} ${styles.compareColBad}`}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className={styles.compareColHead}>Before Scape</h3>
                  <ul className={styles.compareList}>
                    {data.comparison.before.map((item, i) => (
                      <li key={i} className={styles.compareListItem}>
                        <XCircle size={16} className={styles.compareIconBad} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className={`${styles.compareCol} ${styles.compareColGood}`}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className={styles.compareColHead}>With Scape</h3>
                  <ul className={styles.compareList}>
                    {data.comparison.after.map((item, i) => (
                      <li key={i} className={styles.compareListItem}>
                        <CheckCircle2 size={16} className={styles.compareIconGood} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* ═══ KPI GRID ═══ */}
        <motion.section
          className={`${styles.sec} ${styles.kpiSection}`}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <p className={`${styles.secLabel} ${styles.secLabelCenter}`}>What you'll see</p>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>What we track for you</h2>
              <p className={`${styles.secSub} ${styles.secSubCenter}`}>
                Built directly from your existing systems — no new software for your staff to learn.
              </p>
            </div>
            <motion.div
              className={styles.kpiGrid}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              {data.kpis.map((kpi, i) => {
                const Icon = KPI_ICONS[i % KPI_ICONS.length];
                return (
                  <motion.div key={i} className={styles.kpiCard} variants={scaleIn}>
                    <div className={styles.kpiIconWrap}>
                      <Icon size={19} />
                    </div>
                    <h3 className={styles.kpiCardTitle}>{kpi.name}</h3>
                    <p className={styles.kpiCardDesc}>{kpi.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* ═══ HOW IT WORKS ═══ */}
        <motion.section
          className={styles.sec}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.secHead} style={{ textAlign: "center" }}>
              <p className={`${styles.secLabel} ${styles.secLabelCenter}`}>The process</p>
              <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>How it works</h2>
            </div>
            <motion.div
              className={styles.howGrid}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              {data.howItWorks.map((item, i) => (
                <motion.div key={i} className={styles.howItemWrap} variants={fadeUp}>
                  <div className={styles.howCard}>
                    <span className={styles.howNumber}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 className={styles.howTitle}>{item.step}</h3>
                    <p className={styles.howDesc}>{item.description}</p>
                  </div>
                  {i < data.howItWorks.length - 1 && (
                    <ArrowRight size={18} className={styles.howArrow} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ═══ WHO IT'S FOR ═══ */}
        {data.whoItsFor?.length > 0 && (
          <motion.section
            className={`${styles.sec} ${styles.whoSection}`}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
          >
            <div className={styles.container}>
              <div className={styles.secHead} style={{ textAlign: "center" }}>
                <p className={`${styles.secLabel} ${styles.secLabelCenter}`}>Built for</p>
                <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Who this is for</h2>
              </div>
              <motion.div
                className={styles.whoGrid}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                variants={stagger}
              >
                {data.whoItsFor.map((w, i) => (
                  <motion.span key={i} className={styles.whoChip} variants={fadeUp}>
                    {w}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* ═══ DIFFERENTIATORS ═══ */}
        {data.differentiators?.length > 0 && (
          <motion.section
            className={styles.sec}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
          >
            <div className={styles.container}>
              <div className={styles.secHead}>
                <p className={styles.secLabel}>Why Scape</p>
                <h2 className={styles.secTitle}>What makes this different</h2>
              </div>
              <motion.div
                className={styles.diffGrid}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                variants={stagger}
              >
                {data.differentiators.map((d, i) => (
                  <motion.div key={i} className={styles.diffCard} variants={fadeUp}>
                    <div className={styles.diffIconWrap}>
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <h3 className={styles.diffTitle}>{d.title}</h3>
                      <p className={styles.diffDesc}>{d.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* ═══ TESTIMONIAL ═══ */}
        {data.testimonial && (
          <motion.section
            className={`${styles.sec} ${styles.testiSection}`}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={scaleIn}
          >
            <div className={styles.container}>
              <div className={styles.testiCard}>
                <Quote size={28} className={styles.testiQuoteIcon} />
                <p className={styles.testiText}>&ldquo;{data.testimonial.quote}&rdquo;</p>
                <div>
                  <strong className={styles.testiName}>{data.testimonial.name}</strong>
                  <p className={styles.testiRole}>{data.testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* ═══ RELATED ARTICLES ═══ */}
        {relatedArticles.length > 0 && (
          <motion.section
            className={`${styles.sec} ${styles.articlesSection}`}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
          >
            <div className={styles.container}>
              <div className={styles.secHead} style={{ textAlign: "center" }}>
                <p className={`${styles.secLabel} ${styles.secLabelCenter}`}>Learn more</p>
                <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>Related Reading</h2>
              </div>
              <motion.div
                className={styles.articlesGrid}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                variants={stagger}
              >
                {relatedArticles.map((a) => (
                  <motion.div key={a.slug.current} variants={fadeUp}>
                    <Link to={`/resources/${a.slug.current}`} className={styles.articleCard}>
                      <span className={styles.articleCardTag}>{a.category}</span>
                      <h3 className={styles.articleCardTitle}>{a.title}</h3>
                      <span className={styles.articleCardArrow}>
                        Read article <ArrowRight size={14} />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* ═══ FAQ ═══ */}
        {data.faqs?.length > 0 && (
          <motion.section
            className={styles.sec}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={fadeUp}
          >
            <div className={styles.container}>
              <div className={styles.secHead} style={{ textAlign: "center" }}>
                <p className={`${styles.secLabel} ${styles.secLabelCenter}`}>FAQ</p>
                <h2 className={`${styles.secTitle} ${styles.secTitleCenter}`}>
                  Frequently Asked Questions
                </h2>
              </div>
              <div className={styles.faqList}>
                {data.faqs.map((f, i) => {
                  const open = openFaq === i;
                  return (
                    <div key={i} className={styles.faqItem}>
                      <button
                        className={styles.faqQuestion}
                        onClick={() => setOpenFaq(open ? -1 : i)}
                        aria-expanded={open}
                      >
                        <span>{f.q}</span>
                        <ChevronDown
                          size={18}
                          className={`${styles.faqIcon} ${open ? styles.faqIconOpen : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            className={styles.faqAnswerWrap}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <p className={styles.faqAnswer}>{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        )}

        {/* ═══ FINAL CTA ═══ */}
        <motion.section
          className={styles.cta}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={fadeUp}
        >
          <div className={styles.container}>
            <div className={styles.ctaInner}>
              <h2 className={styles.ctaHeading}>{data.ctaHeading}</h2>
              <p className={styles.ctaSub}>{data.ctaSub}</p>
              <Link to="/contact" className={styles.ctaBtn}>
                Book a Free Demo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryLandingPage;