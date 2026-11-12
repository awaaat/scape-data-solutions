// src/pages/OurServices/ServicesHeroSlider.jsx
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./ServicesHeroSlider.module.css";
import { orderUrl, orderLabel } from "../../components/OrderPush/orderLinks";

const SLIDES = [
  {
    img: "/Images/services/services-hero-1.webp",
    tag: "All Industries",
    title: "Services that transform every industry.",
    sub: "From academic research to retail, we deliver analytics and AI solutions that solve real problems with measurable results.",
    alt: { label: "See our work", to: "/portfolio" },
  },
  {
    img: "/Images/services/services-hero-2.webp",
    tag: "Healthcare & Life Sciences",
    title: "Analytics that improve patient care and cut costs.",
    sub: "Patient flow, readmission risk, clinical trials and hospital operations, all built on your own data.",
    alt: { label: "Healthcare services", to: "/services/category/healthcare" },
  },
];

const INTERVAL = 9000;

export default function ServicesHeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n) => setI((n + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((p) => (p + 1) % SLIDES.length), INTERVAL);
    return () => clearTimeout(t);
  }, [i, paused]);

  const s = SLIDES[i];

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Services overview"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
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
        <div className={styles.glow} />
      </div>

      <div className={styles.content} key={i}>
        <span className={`${styles.badge} ${styles.rise1}`}>{s.tag}</span>
        {i === 0 ? (
          <h1 className={`${styles.title} ${styles.rise2}`}>{s.title}</h1>
        ) : (
          <h2 className={`${styles.title} ${styles.rise2}`}>{s.title}</h2>
        )}
        <p className={`${styles.sub} ${styles.rise3}`}>{s.sub}</p>
        <div className={`${styles.btnRow} ${styles.rise4}`}>
          <a href={orderUrl({ medium: "services-hero-slider" })} className={styles.btnPrimary}>
            {orderLabel()} <ArrowRight size={16} />
          </a>
          <Link to={s.alt.to} className={styles.btnGlass}>{s.alt.label}</Link>
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
          </button>
        ))}
      </div>

      {!paused && (
        <div className={styles.progress} key={"p" + i} style={{ animationDuration: INTERVAL + "ms" }} />
      )}
    </section>
  );
}
