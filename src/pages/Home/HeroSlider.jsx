// src/pages/Home/HeroSlider.jsx
import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HeroSlider.module.css";
import { orderUrl } from "../../components/OrderPush/orderLinks";

const SLIDES = [
  {
    img: "/Images/site-images/hero/hero-1.webp",
    tag: "Data Analytics · BI Dashboards",
    title: "Businesses grow on the quality of their data.",
    sub: "We turn the numbers you already have into dashboards, forecasts and decisions you can act on.",
    cta: { label: "Place an Order", href: "order" },
    alt: { label: "Our services", to: "/services" },
  },
  {
    img: "/Images/site-images/hero/hero-2.webp",
    tag: "Consulting · Strategic Analytics",
    title: "Decisions backed by real numbers, not guesswork.",
    sub: "Boards, founders and operations teams work with us to find where revenue is made and where it leaks.",
    cta: { label: "Request a Consultation", href: "/contact" },
    alt: { label: "See our work", to: "/portfolio" },
  },
  {
    img: "/Images/site-images/hero/hero-3.webp",
    tag: "ETL · Data Engineering",
    title: "One trusted source for every scattered spreadsheet.",
    sub: "We connect sales, support and inventory tools into one pipeline so nobody copies numbers by hand.",
    cta: { label: "Place an Order", href: "order" },
    alt: { label: "Data engineering", to: "/services" },
  },
  {
    img: "/Images/site-images/hero/hero-4.webp",
    tag: "Predictive Analytics · ML",
    title: "See demand and churn before they happen.",
    sub: "Forecasting models built from your history, early enough for your team to act on them.",
    cta: { label: "Request a Consultation", href: "/contact" },
    alt: { label: "Case studies", to: "/case-studies" },
  },
  {
    img: "/Images/site-images/hero/hero-5.webp",
    tag: "Research · Academic Support",
    title: "Rigorous analysis for dissertations and research.",
    sub: "SPSS, R, Python and Stata analysis, written up clearly and defended with confidence.",
    cta: { label: "Place an Order", href: "order" },
    alt: { label: "Read our resources", to: "/resources" },
  },
];

const INTERVAL = 15000;

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const timer = useRef(null);

  const go = useCallback((n) => setI((n + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    timer.current = setTimeout(() => setI((p) => (p + 1) % SLIDES.length), INTERVAL);
    return () => clearTimeout(timer.current);
  }, [i]);

  const s = SLIDES[i];
  const primaryHref = s.cta.href === "order" ? orderUrl({ medium: "home-hero-slider" }) : s.cta.href;
  const primaryIsRouter = s.cta.href !== "order" && s.cta.href.startsWith("/");

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Featured services"
    >
      <div className={styles.slides} aria-hidden="true">
        {SLIDES.map((sl, idx) => (
          <div key={sl.img} className={`${styles.slide} ${idx === i ? styles.slideOn : ""}`}>
            <img
              src={sl.img}
              alt=""
              className={styles.slideImg}
              loading="eager"
              fetchpriority={idx === 0 ? "high" : "auto"}
            />
          </div>
        ))}
        <div className={styles.shade} />
      </div>

      <div className={styles.content} key={i}>
        <span className={`${styles.badge} ${styles.rise1}`}>{s.tag}</span>
        <h1 className={`${styles.title} ${styles.rise2}`}>{s.title}</h1>
        <p className={`${styles.sub} ${styles.rise3}`}>{s.sub}</p>
        <div className={`${styles.btnRow} ${styles.rise4}`}>
          {primaryIsRouter ? (
            <Link to={primaryHref} className={styles.btnPrimary}>
              {s.cta.label} <ArrowRight size={16} />
            </Link>
          ) : (
            <a href={primaryHref} className={styles.btnPrimary}>
              {s.cta.label} <ArrowRight size={16} />
            </a>
          )}
          <Link to={s.alt.to} className={styles.btnLight}>{s.alt.label}</Link>
        </div>
      </div>

      <button className={`${styles.arrow} ${styles.arrowL}`} onClick={() => go(i - 1)} aria-label="Previous slide">
        <ChevronLeft size={18} />
      </button>
      <button className={`${styles.arrow} ${styles.arrowR}`} onClick={() => go(i + 1)} aria-label="Next slide">
        <ChevronRight size={18} />
      </button>

      <div className={styles.dots} role="tablist">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === i}
            aria-label={"Go to slide " + (idx + 1)}
            className={`${styles.dot} ${idx === i ? styles.dotOn : ""}`}
            onClick={() => go(idx)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
