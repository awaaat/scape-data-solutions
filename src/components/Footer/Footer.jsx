// src/components/Footer/Footer.jsx
// LEADconcept-style footer:
//   1. 5-column links grid (Company, Services, Resources, Portfolio, Others)
//   2. Contact emails
//   3. Copyright

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { NAV_COMPANY, NAV_PORTFOLIO } from "../Navbar/Navbar";
import OrderBreak from "../OrderPush/OrderBreak";

// ── Curated services subset for the footer ──────────────────────────
const FOOTER_SERVICES = [
  { label: "All Services",                 href: "/services" },
  { label: "Advanced Analytics",           href: "/services/category/analytics" },
  { label: "AI & Machine Learning",        href: "/services/category/ai-ml" },
  { label: "Finance & Risk",               href: "/services/category/finance" },
  { label: "Healthcare & Life Sciences",   href: "/services/category/healthcare" },
  { label: "Data Engineering & BI Tools",  href: "/services/category/data-engineering" },
];

// ── Curated resources subset for the footer ─────────────────────────
const FOOTER_RESOURCES = [
  { label: "All Resources",           href: "/resources" },
  { label: "Business Analytics",      href: "/resources?category=business" },
  { label: "Finance Analytics",       href: "/resources?category=finance" },
  { label: "Healthcare Analytics",    href: "/resources?category=healthcare" },
  { label: "Retail Analytics",        href: "/resources?category=retail" },
  { label: "Manufacturing Analytics", href: "/resources?category=manufacturing" },
];

// ── Others (now its own column) ─────────────────────────────────────
const FOOTER_OTHERS = [
  { label: "Our Clients",         href: "/clients" },
  { label: "Testimonials",        href: "/testimonials" },
  { label: "Recommended Reading", href: "/resources" },
  { label: "FAQ",                 href: "/faq" },
  { label: "Sitemap",             href: "/sitemap" },
];

// ── Shared "replay every time" viewport — matches rest of site ─────
const REPLAY_VIEWPORT = { once: false, amount: 0.2 };

// ── Reusable motion variants ────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const linkColVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

const linkItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut", delay: i * 0.04 },
  }),
};

// ── One footer column (heading + animated link list) ────────────────
function FooterColumn({ index, title, links }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={REPLAY_VIEWPORT}
      variants={linkColVariants}
    >
      <h3 className={styles.navyFootH}>{title}</h3>
      <ul className={styles.navyFootLinks}>
        {links.map((x, i) => (
          <motion.li
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={REPLAY_VIEWPORT}
            variants={linkItemVariants}
            whileHover={{ x: 5 }}
          >
            <Link to={x.href}>{x.label}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Footer() {
  return (
    <>
      <OrderBreak />
      <footer className={styles.navyFooter}>

        {/* ══════════════════════════════════════════
            SECTION 1 – 5-column links grid
            ══════════════════════════════════════════ */}
        <div className={styles.navyFootMain}>
          <div className={styles.container}>
            <div className={styles.navyFootGrid}>
              <FooterColumn index={0} title="Company"   links={NAV_COMPANY} />
              <FooterColumn index={1} title="Services"  links={FOOTER_SERVICES} />
              <FooterColumn index={2} title="Resources" links={FOOTER_RESOURCES} />
              <FooterColumn index={3} title="Portfolio" links={NAV_PORTFOLIO} />
              <FooterColumn index={4} title="Others"    links={FOOTER_OTHERS} />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 2 – Contact emails
            ══════════════════════════════════════════ */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "8px 36px", padding: "18px 20px", borderTop: "1px solid rgba(128,128,128,0.25)", fontSize: 14 }}>
          <a href="mailto:info@scapedatasolutions.com" style={{ color: "inherit", textDecoration: "none" }}>info@scapedatasolutions.com</a>
          <a href="mailto:allan@scapedatasolutions.com" style={{ color: "inherit", textDecoration: "none" }}>allan@scapedatasolutions.com</a>
        </div>

        {/* ══════════════════════════════════════════
            SECTION 3 – Copyright
            ══════════════════════════════════════════ */}
        <div className={styles.navyCopyright}>
          <div className={styles.container}>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={fadeUp}
            >
              © {new Date().getFullYear()} Scape Technologies. All rights reserved.
            </motion.p>
          </div>
        </div>

      </footer>
    </>
  );
}
