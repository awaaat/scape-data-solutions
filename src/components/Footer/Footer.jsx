// src/components/Footer/Footer.jsx
// LEADconcept-style footer:
//   1. 6-column (3×2) contact/office strip with divider lines
//   2. 4-column links grid (headings underlined with white)
//   3. Payment scroll strip
//   4. Copyright

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { NAV_COMPANY, NAV_SERVICES, NAV_PORTFOLIO, NAV_RESOURCES } from "../Navbar/Navbar";

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

// ── Payment methods (doubled for infinite scroll) ───────────────────
const PAYMENTS_BASE = [
  { label: "PayPal",        img: "/Images/site-images/paypal.webp",        href: "https://www.paypal.com"     },
  { label: "Wire Transfer", img: "/Images/site-images/wire-transfer.webp", href: "https://wiretransfer.io"    },
  { label: "Mastercard",    img: "/Images/site-images/master.webp",        href: "https://www.mastercard.us"  },
  { label: "Visa",          img: "/Images/site-images/visa.webp",          href: "https://visa.com"           },
  { label: "Wise",          img: "/Images/site-images/wise.png",           href: "https://wise.com"           },
  { label: "Payoneer",      img: "/Images/site-images/payoneer_f.webp",    href: "https://www.payoneer.com"   },
  { label: "Remitly",       img: "/Images/site-images/RELY_BIG.webp",      href: "https://www.remitly.com"    },
  { label: "WorldRemit",    img: "/Images/site-images/WorldRemit.webp",    href: "https://www.worldremit.com" },
];
const PAYMENTS = [...PAYMENTS_BASE, ...PAYMENTS_BASE];

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

            {/* Services */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={linkColVariants}
            >
              <h3 className={styles.navyFootH}>Services</h3>
              <ul className={styles.navyFootLinks}>
                {NAV_SERVICES.map((x, i) => (
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
                {NAV_RESOURCES.map((x, i) => (
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
          SECTION 3 – Payment methods scroll
          ══════════════════════════════════════════ */}
      <div className={styles.navyPayStrip}>
        <div className={styles.container}>
          <motion.span
            className={styles.navyPayLabel}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={REPLAY_VIEWPORT}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            We Accept
          </motion.span>
          <motion.div
            className={styles.navyPayInner}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={REPLAY_VIEWPORT}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className={styles.navyPayScroll}>
              <div className={styles.navyPayTrack}>
                {PAYMENTS.map((m, i) => (
                  <motion.a
                    key={i}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.navyPayItem}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={m.img} alt={m.label} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION 4 – Copyright
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