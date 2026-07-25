// src/components/Footer/Footer.jsx
// LEADconcept-style footer:
//   1. 6-column (3×2) contact/office strip with divider lines
//   2. 4-column links grid (headings underlined with white)
//   3. Payment scroll strip
//   4. Copyright

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { NAV_COMPANY, NAV_PORTFOLIO } from "../Navbar/Navbar";

// ── Contact / office items (6 cells → 3 columns × 2 rows) ──────────
const OFFICES = [
  // ── Row 1 ──────────────────────────────────────────────────────────
  {
    icon: "/Images/site-images/us_flag.webp",
    title: "US Office:",
    lines: [
      { text: "1024 Iron Point Road, Suite 200" },
      { text: "Folsom, California 95630"        },
      { text: "US: +1 (757) 598-0582", href: "tel:+17575980582" },
    ],
  },
  {
    icon: "/Images/site-images/uk-icon.jpeg",
    title: "UK Office:",
    lines: [
      { text: "60 Cannon Street"                },
      { text: "London EC4N 6NP, United Kingdom" },
      { text: "UK: +44 7454 744014", href: "tel:+447454744014" },
    ],
  },
  {
    icon: "/Images/site-images/email_icon.webp",
    title: "General Inquiry:",
    lines: [
      { text: "info@scapedatasolutions.com",  href: "mailto:info@scapedatasolutions.com"  },
      { text: "allan@scapedatasolutions.com", href: "mailto:allan@scapedatasolutions.com" },
    ],
  },
  // ── Row 2 ──────────────────────────────────────────────────────────
  {
    icon: "/Images/site-images/canada-flag.webp.webp",
    title: "Canada Office:",
    lines: [
      { text: "400 Centre Street South"    },
      { text: "Whitby, ON L1N 0G4, Canada" },
    ],
  },
  {
    icon: "/Images/site-images/pak_flag.webp",
    title: "Pakistan Office:",
    lines: [
      { text: "9th Floor, Tricon Corporate Centre" },
      { text: "73 Jail Road, Gulberg"              },
      { text: "Lahore 54000, Pakistan"             },
    ],
  },
  {
    icon: "/Images/site-images/nairobi-k.jpg",
    title: "Nairobi Office:",
    lines: [
      { text: "Global Trade Centre, 14th Floor" },
      { text: "Westlands Road, Nairobi, Kenya"  },
      { text: "KE: +254 718 889 559", href: "tel:+254718889559" },
    ],
  },
];

// ── Curated services subset for the footer ──────────────────────────
// (The full 11-category list lives in the Navbar's "Services" dropdown.
//  The footer only needs the handful most people will click.)
const FOOTER_SERVICES = [
  { label: "All Services",                 href: "/services" },
  { label: "Advanced Analytics",           href: "/services?category=analytics" },
  { label: "AI & Machine Learning",        href: "/services?category=ai-ml" },
  { label: "Finance & Risk",               href: "/services?category=finance" },
  { label: "Healthcare & Life Sciences",   href: "/services?category=healthcare" },
  { label: "Data Engineering & BI Tools",  href: "/services?category=data-engineering" },
];

// ── Curated resources subset for the footer ─────────────────────────
// (The full industry list lives in the Navbar's "Resources" dropdown.
//  The footer only needs the handful most people will click.)
const FOOTER_RESOURCES = [
  { label: "All Resources",         href: "/resources" },
  { label: "Business Analytics",    href: "/resources?category=business" },
  { label: "Finance Analytics",     href: "/resources?category=finance" },
  { label: "Healthcare Analytics",  href: "/resources?category=healthcare" },
  { label: "Retail Analytics",      href: "/resources?category=retail" },
  { label: "Manufacturing Analytics", href: "/resources?category=manufacturing" },
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

export default function Footer() {
  return (
    <footer className={styles.navyFooter}>

      {/* ══════════════════════════════════════════
          SECTION 1 – 6-cell contact/office grid
          (3 columns × 2 rows, divided by borders)
          ══════════════════════════════════════════ */}
      <div className={styles.navyOffStrip}>
        <div className={styles.container}>
          <div className={styles.navyOffGrid}>
            {OFFICES.map((office, i) => (
              <motion.div
                key={i}
                className={styles.navyOffItem}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={REPLAY_VIEWPORT}
                whileHover={{ y: -4 }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              >
                <motion.div
                  className={styles.navyOffIcon}
                  initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={REPLAY_VIEWPORT}
                  whileHover={{ scale: 1.12, rotate: 4 }}
                  transition={{ delay: i * 0.08 + 0.1, duration: 0.4, type: "spring", stiffness: 260, damping: 16 }}
                >
                  <img src={office.icon} alt={office.title} />
                </motion.div>
                <div className={styles.navyOffText}>
                  <h4>{office.title}</h4>
                  {office.lines.map((line, j) =>
                    line.href ? (
                      <p key={j}>
                        <a
                          href={line.href}
                          {...(line.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {line.text}
                        </a>
                      </p>
                    ) : (
                      <p key={j}>{line.text}</p>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 2 – 4-column links grid
          ══════════════════════════════════════════ */}
      <div className={styles.navyFootMain}>
        <div className={styles.container}>
          <div className={styles.navyFootGrid}>

            {/* Company */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={linkColVariants}
            >
              <h3 className={styles.navyFootH}>Company</h3>
              <ul className={styles.navyFootLinks}>
                {NAV_COMPANY.map((x, i) => (
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

            {/* Services (curated subset — full list is in the Navbar dropdown) */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={linkColVariants}
            >
              <h3 className={styles.navyFootH}>Services</h3>
              <ul className={styles.navyFootLinks}>
                {FOOTER_SERVICES.map((x, i) => (
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

            {/* Resources */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={linkColVariants}
            >
              <h3 className={styles.navyFootH}>Resources</h3>
              <ul className={styles.navyFootLinks}>
                {FOOTER_RESOURCES.map((x, i) => (
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

            {/* Portfolio + Other Links */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={linkColVariants}
            >
              <h3 className={styles.navyFootH}>Portfolio</h3>
              <ul className={styles.navyFootLinks}>
                {NAV_PORTFOLIO.map((x, i) => (
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
              <h3 className={`${styles.navyFootH} ${styles.navyFootHMt}`}>Others</h3>
              <ul className={styles.navyFootLinks}>
                {[
                  { to: "/clients", label: "Our Clients" },
                  { to: "/testimonials", label: "Testimonials" },
                  { to: "/resources", label: "Recommended Reading" },
                  { to: "/faq", label: "FAQ" },
                  { to: "/sitemap", label: "Sitemap" },
                ].map((x, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={REPLAY_VIEWPORT}
                    variants={linkItemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <Link to={x.to}>{x.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
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
            © {new Date().getFullYear()} Scape Data Solutions. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}