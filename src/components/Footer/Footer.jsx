// src/components/Footer/Footer.jsx
// LEADconcept-style footer:
//   1. 6-column (3×2) contact/office strip with divider lines
//   2. 4-column links grid (headings underlined with white)
//   3. Payment scroll strip
//   4. Copyright

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import styles from "../Components.module.css";
import { NAV_COMPANY, NAV_SERVICES, NAV_PORTFOLIO } from "../Navbar/Navbar";

const YoutubeSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
  </svg>
);
const PinterestSvg = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 5.1 3.1 9.4 7.6 11.2-.1-1-.2-2.5.1-3.6.2-.9 1.5-6.3 1.5-6.3s-.4-.8-.4-1.9c0-1.8 1-3.1 2.3-3.1 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.7-1 4.2-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.7-2.2 3.7-5.4 0-2.8-2-4.8-4.9-4.8-3.3 0-5.3 2.5-5.3 5.1 0 1 .4 2.1.9 2.7.1.1.1.3.1.4l-.3 1.4c-.1.3-.3.4-.6.2-1.5-.7-2.5-2.9-2.5-4.7 0-3.8 2.8-7.4 8-7.4 4.2 0 7.5 3 7.5 7 0 4.2-2.6 7.5-6.3 7.5-1.2 0-2.4-.6-2.8-1.4l-.8 2.9c-.3 1.1-1 2.5-1.5 3.3.5.2 1 .2 1.5.2 6.6 0 12-5.4 12-12S18.6 0 12 0z"/>
  </svg>
);

// ── Contact / office items (6 cells → 3 columns × 2 rows) ──────────
const OFFICES = [
  {
    icon: "/scape_data_files/phone_icon.webp",
    title: "Phone:",
    lines: [
      { text: "US: +1 (757) 598-0582",   href: "tel:+17575980582"   },
      { text: "UK: +44 7454 744014",      href: "tel:+447454744014"  },
    ],
  },
  {
    icon: "/scape_data_files/email_icon.webp",
    title: "General Inquiry:",
    lines: [
      { text: "info@scapedatasolutions.com",  href: "mailto:info@scapedatasolutions.com"  },
      { text: "hello@scapedatasolutions.com", href: "mailto:hello@scapedatasolutions.com" },
    ],
  },
  {
    icon: "/scape_data_files/us_flag.webp",
    title: "US Office:",
    lines: [
      { text: "1024 Iron Point Road, Suite 200" },
      { text: "Folsom, California 95630"        },
      { text: "US: +1 (757) 598-0582", href: "tel:+17575980582" },
    ],
  },
  {
    icon: "/scape_data_files/canada-flag.webp.webp",
    title: "Canada Office:",
    lines: [
      { text: "400 Centre Street South" },
      { text: "Whitby, ON L1N 0G4, Canada" },
    ],
  },
  {
    icon: "/scape_data_files/pak_flag.webp",
    title: "Pakistan Office:",
    lines: [
      { text: "9th Floor, Tricon Corporate Centre" },
      { text: "73 Jail Road, Gulberg"              },
      { text: "Lahore 54000, Pakistan"             },
    ],
  },
  {
    icon: "/scape_data_files/nairobi-k.jpg",
    title: "Nairobi Office:",
    lines: [
      { text: "Global Trade Centre, 14th Floor"  },
      { text: "Westlands Road, Nairobi, Kenya"   },
      { text: "KE: +254 718 889 559", href: "tel:+254718889559" },
    ],
  },
];

// ── Social icons ────────────────────────────────────────────────────
const SOCIALS = [
  { href: "https://facebook.com",  label: "Facebook",  Icon: Facebook,     cls: styles.navySocIconFb },
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram,    cls: styles.navySocIconIg },
  { href: "https://twitter.com",   label: "X",         Icon: Twitter,      cls: styles.navySocIconX  },
  { href: "https://linkedin.com",  label: "LinkedIn",  Icon: Linkedin,     cls: styles.navySocIconLi },
  { href: "https://pinterest.com", label: "Pinterest", Icon: PinterestSvg, cls: styles.navySocIconPi },
  { href: "https://youtube.com",   label: "YouTube",   Icon: YoutubeSvg,   cls: styles.navySocIconYt },
];

// ── Payment methods (doubled for infinite scroll) ───────────────────
const PAYMENTS_BASE = [
  { label: "PayPal",        img: "/scape_data_files/paypal.webp",        href: "https://www.paypal.com"     },
  { label: "Wire Transfer", img: "/scape_data_files/wire-transfer.webp", href: "https://wiretransfer.io"    },
  { label: "Mastercard",    img: "/scape_data_files/master.webp",        href: "https://www.mastercard.us"  },
  { label: "Visa",          img: "/scape_data_files/visa.webp",          href: "https://visa.com"           },
  { label: "Wise",          img: "/scape_data_files/wise.png",           href: "https://wise.com"           },
  { label: "Payoneer",      img: "/scape_data_files/payoneer_f.webp",    href: "https://www.payoneer.com"   },
  { label: "Remitly",       img: "/scape_data_files/RELY_BIG.webp",      href: "https://www.remitly.com"    },
  { label: "WorldRemit",    img: "/scape_data_files/WorldRemit.webp",    href: "https://www.worldremit.com" },
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

            {/* Portfolio + Other Links */}
            <motion.div
              custom={2}
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
                  { to: "/blog", label: "Blog" },
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

            {/* Follow Us */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={linkColVariants}
            >
              <h3 className={styles.navyFootH}>Follow Us</h3>
              <div className={styles.navyFootSocials}>
              {SOCIALS.map(({ href, label, Icon, cls }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.navySocIcon} ${cls}`}
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={REPLAY_VIEWPORT}
                    transition={{ delay: i * 0.06, duration: 0.35, type: "spring", stiffness: 300, damping: 18 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
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