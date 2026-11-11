// src/pages/Home/ImageBreaks.jsx
import { useEffect, useRef, useState } from "react";
import styles from "./ImageBreaks.module.css";

const IMG = "/Images/site-images/home/";

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") { setOn(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`${styles.reveal} ${on ? styles.in : ""} ${className}`}
         style={{ transitionDelay: delay + "ms" }}>
      {children}
    </div>
  );
}

/* wide panorama */
export function BreakStrip({ src }) {
  return (
    <div className={styles.wrap}>
      <Reveal>
        <img src={IMG + src} alt="" className={`${styles.img} ${styles.strip}`} loading="lazy" />
      </Reveal>
    </div>
  );
}

/* one large image + two small ones, uneven sizes */
export function BreakMosaic({ a, b, c }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.mosaic}>
        <Reveal className={styles.mBig}><img src={IMG + a} alt="" className={styles.img} loading="lazy" /></Reveal>
        <Reveal delay={120} className={styles.mTop}><img src={IMG + b} alt="" className={styles.img} loading="lazy" /></Reveal>
        <Reveal delay={240} className={styles.mBottom}><img src={IMG + c} alt="" className={styles.img} loading="lazy" /></Reveal>
      </div>
    </div>
  );
}

/* image with a floating card overlapping a corner */
export function BreakOffset({ src, value, label, right = false }) {
  return (
    <div className={styles.wrap}>
      <Reveal className={`${styles.offset} ${right ? styles.offsetRight : ""}`}>
        <img src={IMG + src} alt="" className={`${styles.img} ${styles.offsetImg}`} loading="lazy" />
        <div className={styles.float}><strong>{value}</strong><span>{label}</span></div>
      </Reveal>
    </div>
  );
}

/* two images, staggered vertically */
export function BreakPair({ a, b }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.pair}>
        <Reveal><img src={IMG + a} alt="" className={`${styles.img} ${styles.pairImg}`} loading="lazy" /></Reveal>
        <Reveal delay={150} className={styles.pairDrop}>
          <img src={IMG + b} alt="" className={`${styles.img} ${styles.pairImg}`} loading="lazy" />
        </Reveal>
      </div>
    </div>
  );
}

/* ===== section-synced figures (used INSIDE sections, no extra padding) ===== */
export function FigStrip({ src, title, text, narrow = false }) {
  return (
    <div className={`${styles.figWrap} ${narrow ? styles.narrow : ""}`}>
      <Reveal>
        <div className={styles.figBox}>
          <img src={IMG + src} alt="" className={`${styles.img} ${narrow ? styles.stripNarrow : styles.strip}`} loading="lazy" />
          <div className={styles.figCap}><strong>{title}</strong><span>{text}</span></div>
        </div>
      </Reveal>
    </div>
  );
}

export function FigPair({ items }) {
  return (
    <div className={styles.figWrap}>
      <div className={styles.pair}>
        {items.map((it, i) => (
          <Reveal key={it.src} delay={i * 150} className={i === 1 ? styles.pairDrop : ""}>
            <div className={styles.figBox}>
              <img src={IMG + it.src} alt="" className={`${styles.img} ${styles.pairImg}`} loading="lazy" />
              <span className={styles.chip}>{it.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function FigOffset({ src, value, label, right = false }) {
  return (
    <div className={`${styles.figWrap} ${styles.figOffsetWrap}`}>
      <Reveal className={`${styles.offset} ${right ? styles.offsetRight : ""}`}>
        <img src={IMG + src} alt="" className={`${styles.img} ${styles.offsetImg}`} loading="lazy" />
        <div className={styles.float}><strong>{value}</strong><span>{label}</span></div>
      </Reveal>
    </div>
  );
}
