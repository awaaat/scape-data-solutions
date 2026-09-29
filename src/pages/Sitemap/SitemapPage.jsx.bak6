// src/pages/Sitemap/SitemapPage.jsx
import { useEffect } from "react";
import SEO from "../../components/SEO/SEO";
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
      { label: "Why Choose Us", path: "/why-us" },
      { label: "Team", path: "/team" },
      { label: "Careers", path: "/careers" },
      { label: "Recommended Reading", path: "/resources" },
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
    title: "Resources",
    color: "#ff6b6b",
    links: [
      { label: "All Resources", path: "/resources" },
      { label: "Dental KPI Dashboard", path: "/resources/dental-kpi-dashboard" },
      { label: "Reduce Dental No-Shows", path: "/resources/reduce-dental-no-shows" },
      { label: "Patient Retention for Dental Clinics", path: "/resources/patient-retention-dental-clinic" },
      { label: "Veterinary KPI Dashboard", path: "/resources/veterinary-kpi-dashboard" },
      { label: "Veterinary Client Retention", path: "/resources/veterinary-client-retention" },
      { label: "Medical Practice Revenue Cycle Analytics", path: "/resources/medical-practice-revenue-cycle-analytics" },
      { label: "Reduce Patient No-Shows With Predictive Analytics", path: "/resources/reduce-patient-no-shows-predictive-analytics" },
      { label: "Dental Analytics", path: "/dental-analytics" },
      { label: "Veterinary Analytics", path: "/veterinary-analytics" },
      { label: "Medical Practice Analytics", path: "/medical-practice-analytics" },
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
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Sitemap", path: "/sitemap" },
    ],
  },
];

const SitemapPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);

  return (
    <div className={styles.page}>
      <SEO
        title="Sitemap | Scape Data Solutions"
        description="Every page on the Scape Data Solutions website."
        path="/sitemap"
      />

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