// src/pages/Sitemap/SitemapPage.jsx
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./SitemapPage.module.css";

const SECTIONS = [
  {
    title: "Company",
    color: "#fdb840",
    links: [
      { label: "About Us", path: "/company" },
      { label: "Our History", path: "/history" },
      { label: "Why Choose Us", path: "/why-us" },
      { label: "Management", path: "/management" },
      { label: "Team", path: "/team" },
      { label: "Expertise", path: "/expertise" },
      { label: "Careers", path: "/career" },
      { label: "Blog", path: "/blog" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Services",
    color: "#00d4ff",
    links: [
      { label: "AI and Machine Learning", path: "/services?category=ai-ml" },
      { label: "Big Data Engineering", path: "/services?category=big-data" },
      { label: "Business Intelligence", path: "/services?category=bi" },
      { label: "Data Governance", path: "/services?category=governance" },
      { label: "Predictive Analytics", path: "/services?category=predictive" },
      { label: "Real-Time Analytics", path: "/services?category=realtime" },
      { label: "Cloud Data Platforms", path: "/services?category=cloud" },
      { label: "Customer Analytics", path: "/services?category=customer" },
      { label: "Custom Development", path: "/services?category=custom-dev" },
      { label: "Data Privacy", path: "/services?category=privacy" },
      { label: "Data Strategy", path: "/services?category=strategy" },
      { label: "Training", path: "/services?category=training" },
    ],
  },
  {
    title: "Portfolio",
    color: "#a259ff",
    links: [
      { label: "BI Projects", path: "/portfolio/bi" },
      { label: "AI Projects", path: "/portfolio/ai" },
      { label: "Data Pipelines", path: "/portfolio/pipelines" },
      { label: "Mobile Analytics", path: "/portfolio/mobile" },
    ],
  },
  {
    title: "Other",
    color: "#00e676",
    links: [
      { label: "Home", path: "/" },
      { label: "Clients", path: "/clients" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "Pricing", path: "/pricing" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Sitemap", path: "/sitemap" },
    ],
  },
];

const SitemapPage = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Sitemap | Scape Data Solutions</title>
        <meta name="description" content="Every page on the Scape Data Solutions website." />
      </Helmet>

      <Navbar />

      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className={styles.heroBadge}>NAVIGATION</p>
          <h1 className={styles.heroTitle}>Sitemap</h1>
          <p className={styles.heroSub}>Every page on our website, organised by section.</p>
        </motion.div>
      </section>

      <section className={styles.body}>
        {SECTIONS.map((sec, i) => (
          <motion.div key={i} className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.05 }}>
            <div className={styles.secMeta}>
              <span className={styles.secTitle} style={{ color: sec.color }}>{sec.title}</span>
              <div className={styles.secLine} style={{ background: sec.color }} />
            </div>
            <ul className={styles.linkList}>
              {sec.links.map((lnk, j) => (
                <li key={j} className={styles.linkItem}>
                  <Link to={lnk.path} className={styles.link}>
                    <ArrowUpRight size={13} className={styles.linkIcon} />
                    {lnk.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default SitemapPage;
