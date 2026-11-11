// src/pages/Home/HomeShowcase.jsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, BarChart3, Database, GraduationCap } from "lucide-react";
import styles from "./HomeShowcase.module.css";
import { orderUrl } from "../../components/OrderPush/orderLinks";

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
      { threshold: 0.15 }
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

const POINTS = [
  "Clear dashboards your whole team can read",
  "Forecasts built from your own history",
  "Clean, connected data behind every number",
];

const CARDS = [
  { img: "card-1.webp", icon: BarChart3, title: "Dashboards & BI",
    text: "Live dashboards that show revenue, costs and performance in one place.", to: "/business-intel" },
  { img: "card-2.webp", icon: Database, title: "Data Engineering",
    text: "Pipelines and warehouses that connect your tools into one trusted source.", to: "/services" },
  { img: "card-3.webp", icon: GraduationCap, title: "Research & Analysis",
    text: "Statistical analysis for dissertations, journals and academic projects.", to: "/services" },
];

// Rows alternate image-left / image-right automatically by index.
const ROWS = [
  { img: "row-1.webp", kicker: "Business Intelligence", title: "See the whole business in one view",
    text: "We connect your sales, finance and operations data so decisions stop depending on spreadsheets.",
    bullets: ["Executive and team dashboards", "Automated weekly reports", "Alerts when numbers move"], to: "/business-intel" },
  { img: "row-2.webp", kicker: "Data Engineering", title: "Data you can trust, every morning",
    text: "Reliable pipelines clean, join and refresh your data so every report starts from the same source.",
    bullets: ["Warehouse design and setup", "Scheduled, monitored pipelines", "Quality checks on every load"], to: "/services" },
  { img: "row-3.webp", kicker: "Research & Analysis", title: "Rigorous analysis for research work",
    text: "Statistical support for students and institutions, with methods explained and results you can defend.",
    bullets: ["Study design and methodology", "SPSS, R and Python analysis", "Clear write-up of findings"], to: "/services" },
];

const STATS = [
  { n: "500+", l: "Projects delivered" },
  { n: "12", l: "Industries served" },
  { n: "98%", l: "Client satisfaction" },
  { n: "24h", l: "Quote turnaround" },
];

export default function HomeShowcase() {
  return (
    <>
      {/* 1. intro: the ONLY image with the large corner */}
      <section className={styles.zSec}>
        <div className={styles.zInner}>
          <div className={styles.zSplit}>
            <Reveal className={styles.zImgCol}>
              <img src={IMG + "intro.webp"} alt="Data analytics" className={`${styles.zImg} ${styles.zImgHero}`} loading="lazy" />
            </Reveal>
            <Reveal delay={150} className={styles.zTextCol}>
              <span className={styles.kicker}>Who we are</span>
              <h2 className={styles.h2}>Better data. Better decisions.</h2>
              <p className={styles.p}>
                Scape Technologies helps businesses, institutions and researchers turn raw numbers
                into decisions they can act on, from the first clean dataset to the final dashboard.
              </p>
              <ul className={styles.list}>
                {POINTS.map((p) => (<li key={p}><Check size={16} /> {p}</li>))}
              </ul>
              <Link to="/about" className={styles.btn}>About us <ArrowRight size={16} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. three image cards, all same radius */}
      <section className={`${styles.zSec} ${styles.zTint}`}>
        <div className={styles.zInner}>
          <Reveal className={styles.head}>
            <span className={styles.kicker}>What we do</span>
            <h2 className={styles.h2}>Where we can help</h2>
          </Reveal>
          <div className={styles.grid}>
            {CARDS.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 120}>
                  <Link to={c.to} className={styles.zCard}>
                    <div className={styles.zCardImgWrap}>
                      <img src={IMG + c.img} alt="" className={styles.zCardImg} loading="lazy" />
                    </div>
                    <div className={styles.zCardBody}>
                      <span className={styles.zCardIcon}><Icon size={18} /></span>
                      <h3>{c.title}</h3>
                      <p>{c.text}</p>
                      <span className={styles.more}>Learn more <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. zigzag rows: image side flips by index */}
      {ROWS.map((r, i) => (
        <section key={r.title} className={`${styles.zSec} ${i % 2 ? styles.zTint : ""}`}>
          <div className={styles.zInner}>
            <div className={`${styles.zSplit} ${i % 2 === 0 ? styles.zFlip : ""}`}>
              <Reveal className={styles.zImgCol}>
                <img src={IMG + r.img} alt="" className={styles.zImg} loading="lazy" />
              </Reveal>
              <Reveal delay={150} className={styles.zTextCol}>
                <span className={styles.kicker}>{r.kicker}</span>
                <h2 className={styles.h2}>{r.title}</h2>
                <p className={styles.p}>{r.text}</p>
                <ul className={styles.list}>
                  {r.bullets.map((b) => (<li key={b}><Check size={16} /> {b}</li>))}
                </ul>
                <Link to={r.to} className={styles.zLink}>Learn more <ArrowRight size={16} /></Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* 4. dark stats band with photo behind */}
      <section className={styles.zBand}>
        <img src={IMG + "band.webp"} alt="" className={styles.zBandImg} loading="lazy" />
        <div className={styles.zBandShade} />
        <div className={styles.zInner}>
          <Reveal className={styles.zBandHead}>
            <span className={`${styles.kicker} ${styles.kickerLight}`}>Our track record</span>
            <h2 className={`${styles.h2} ${styles.h2Light}`}>Numbers that back the work</h2>
          </Reveal>
          <div className={styles.zStats}>
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <div className={styles.zStat}><strong>{s.n}</strong><span>{s.l}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA banner, square corners */}
      <section className={styles.zCta}>
        <img src={IMG + "banner.webp"} alt="" className={styles.zCtaImg} loading="lazy" />
        <div className={styles.zCtaShade} />
        <Reveal className={styles.zCtaContent}>
          <h2 className={`${styles.h2} ${styles.h2Light}`}>Ready to see what your data can do?</h2>
          <p className={styles.zCtaSub}>Tell us what you need. We will come back with a clear plan and a quote.</p>
          <div className={styles.zCtaBtns}>
            <a href={orderUrl({ medium: "home-banner" })} className={styles.btn}>Place an Order <ArrowRight size={16} /></a>
            <Link to="/business-intel" className={styles.btnLight}>Business Intel</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
