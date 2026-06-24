// src/components/Navbar/Navbar.jsx
// LEADconcept-style:
//   - Top bar: email + phone left | colored square social icons right
//   - Main nav: logo left | links center | GET A QUOTE CTA right
//   - NO bottom border on nav bar (clean, like LEADconcept)
//   - Active link = blue underline from bottom

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown, Mail, Phone,
  Facebook, Instagram, Twitter, Linkedin,
} from "lucide-react";
import styles from "../Components.module.css";

// ─── Navigation data ──────────────────────────────────────────────
export const NAV_COMPANY = [
  { label: "Company",    href: "/company"    },
  { label: "History",    href: "/history"    },
  { label: "Why Us?",    href: "/why-us"     },
  { label: "Expertise",  href: "/expertise"  },
  { label: "Career",     href: "/career"     },
  { label: "Blog",       href: "/blog"       },
  { label: "FAQ",        href: "/faq"        },
  { label: "Contact Us", href: "/contact"    },
];

// ─── Updated Services – industry categories ──────────────────────
export const NAV_SERVICES = [
  { label: "All Services",        href: "/services"                      },
  { label: "Business",            href: "/services?category=business"    },
  { label: "Finance",             href: "/services?category=finance"     },
  { label: "Healthcare",          href: "/services?category=healthcare"  },
  { label: "Retail",              href: "/services?category=retail"      },
  { label: "Manufacturing",       href: "/services?category=manufacturing" },
  { label: "Logistics",           href: "/services?category=logistics"   },
  { label: "Energy & Utilities",  href: "/services?category=energy"      },
  { label: "Real Estate",         href: "/services?category=realestate"  },
  { label: "Government",          href: "/services?category=government"  },
  { label: "Media & Entertainment", href: "/services?category=media"     },
  { label: "Telecommunications",  href: "/services?category=telecom"     },
  { label: "Agriculture",         href: "/services?category=agriculture" },
  { label: "Insurance",           href: "/services?category=insurance"   },
  { label: "Legal",               href: "/services?category=legal"       },
  { label: "Education",           href: "/services?category=education"   },
];

export const NAV_PORTFOLIO = [
  { label: "Dashboards & BI",  href: "/portfolio/bi"        },
  { label: "AI Applications",  href: "/portfolio/ai"        },
  { label: "Data Pipelines",   href: "/portfolio/pipelines" },
  { label: "Mobile Analytics", href: "/portfolio/mobile"    },
];

// ── Social icons using Lucide (no FA dependency) ────────────────────
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

const SOCIALS = [
  { cls: styles.navSocFb, href: "https://facebook.com",  label: "Facebook",  Icon: Facebook  },
  { cls: styles.navSocIg, href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { cls: styles.navSocX,  href: "https://twitter.com",   label: "X",         Icon: Twitter   },
  { cls: styles.navSocLi, href: "https://linkedin.com",  label: "LinkedIn",  Icon: Linkedin  },
  { cls: styles.navSocPi, href: "https://pinterest.com", label: "Pinterest", Icon: PinterestSvg },
  { cls: styles.navSocYt, href: "https://youtube.com",   label: "YouTube",   Icon: YoutubeSvg  },
];

export default function Navbar({ activeNav = "" }) {
  const location = useLocation();
  const [navOpen,  setNavOpen]  = useState(false);
  const [compOpen, setCompOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const [portOpen, setPortOpen] = useState(false);

  useEffect(() => { setNavOpen(false); }, [location.pathname]);

  return (
    <>
      {/* ══════════════════════════════════════
          TOP BAR  – contacts left · socials right
          ══════════════════════════════════════ */}
      <div className={styles.navTopBar}>
        <div className={styles.navTopInner}>

          <div className={styles.navTopLeft}>
            <a href="mailto:info@scapedatasolutions.com" className={styles.navTopContact}>
              <Mail size={13} />
              info@scapedatasolutions.com
            </a>
            <span className={styles.navTopSep} />
            <a href="tel:+17575980582" className={styles.navTopContact}>
              <Phone size={13} />
              +1 (757) 598-0582
            </a>
          </div>

          <div className={styles.navTopRight}>
            {SOCIALS.map(({ cls, href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.navSocBtn} ${cls}`}
                aria-label={label}
                title={label}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MOBILE HEADER
          ══════════════════════════════════════ */}
      <div className={styles.mobileHeader}>
        <div className={styles.mContainer}>
          <Link to="/" className={styles.mobileLogo}>
            <img src="/Images/site-images/logo.svg" alt="Scape Data Solutions" />
          </Link>
          <button
            className={`${styles.burger}${navOpen ? " " + styles.burgerOpen : ""}`}
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {navOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setNavOpen(false)}
            />
            <motion.nav
              className={styles.drawer}
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
            >
              <button className={styles.drawerClose} onClick={() => setNavOpen(false)}>✕</button>
              <ul className={styles.drawerList}>
                <li><Link to="/" onClick={() => setNavOpen(false)}>Home</Link></li>
                <li>
                  <button className={styles.drawerAcc} onClick={() => setCompOpen(!compOpen)}>
                    Company <span>{compOpen ? "▲" : "▼"}</span>
                  </button>
                  {compOpen && (
                    <ul className={styles.drawerSub}>
                      {NAV_COMPANY.map((x, i) => (
                        <li key={i}><Link to={x.href} onClick={() => setNavOpen(false)}>{x.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <button className={styles.drawerAcc} onClick={() => setServOpen(!servOpen)}>
                    Services <span>{servOpen ? "▲" : "▼"}</span>
                  </button>
                  {servOpen && (
                    <ul className={styles.drawerSub}>
                      {NAV_SERVICES.map((x, i) => (
                        <li key={i}><Link to={x.href} onClick={() => setNavOpen(false)}>{x.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
                <li><Link to="/clients" onClick={() => setNavOpen(false)}>Our Clients</Link></li>
                <li>
                  <button className={styles.drawerAcc} onClick={() => setPortOpen(!portOpen)}>
                    Portfolio <span>{portOpen ? "▲" : "▼"}</span>
                  </button>
                  {portOpen && (
                    <ul className={styles.drawerSub}>
                      {NAV_PORTFOLIO.map((x, i) => (
                        <li key={i}><Link to={x.href} onClick={() => setNavOpen(false)}>{x.label}</Link></li>
                      ))}
                    </ul>
                  )}
                </li>
                <li><Link to="/testimonials" onClick={() => setNavOpen(false)}>Testimonials</Link></li>
                <li><Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link></li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════
          DESKTOP NAV – logo · links · CTA
          No bottom border, clean like LEADconcept
          ══════════════════════════════════════ */}
      <motion.header
        className={styles.navbarFixed}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className={styles.navbarInner}>

          {/* Logo */}
          <Link to="/" className={styles.navbarBrand}>
            <img src="/Images/site-images/logo.svg" alt="Scape Data Solutions" />
          </Link>

          {/* Nav links */}
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={`${styles.navLink}${activeNav === "home" ? " " + styles.navActive : ""}`}>
                Home
              </Link>
            </li>
            <li className={styles.hasDrop}>
              <Link to="/company" className={`${styles.navLink}${activeNav === "company" ? " " + styles.navActive : ""}`}>
                Company <ChevronDown size={12} />
              </Link>
              <div className={`${styles.drop} ${styles.dropWide}`}>
                <div className={styles.dropGrid}>
                  {NAV_COMPANY.map((x, i) => (
                    <Link key={i} to={x.href} className={styles.dropLink}>{x.label}</Link>
                  ))}
                </div>
              </div>
            </li>
            <li className={styles.hasDrop}>
              <Link to="/services" className={`${styles.navLink}${activeNav === "services" ? " " + styles.navActive : ""}`}>
                Services <ChevronDown size={12} />
              </Link>
              <div className={`${styles.drop} ${styles.dropWide}`}>
                <div className={styles.dropGrid}>
                  {NAV_SERVICES.map((x, i) => (
                    <Link key={i} to={x.href} className={styles.dropLink}>{x.label}</Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link to="/clients" className={styles.navLink}>Our Clients</Link>
            </li>
            <li className={styles.hasDrop}>
              <Link to="/portfolio" className={styles.navLink}>
                Portfolio <ChevronDown size={12} />
              </Link>
              <div className={styles.drop}>
                <div className={styles.dropGrid1}>
                  {NAV_PORTFOLIO.map((x, i) => (
                    <Link key={i} to={x.href} className={styles.dropLink}>{x.label}</Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link to="/testimonials" className={styles.navLink}>Testimonials</Link>
            </li>
            <li>
              <Link to="/contact" className={`${styles.navLink}${activeNav === "contact" ? " " + styles.navActive : ""}`}>
                Contact
              </Link>
            </li>
          </ul>

          {/* GET A QUOTE CTA */}
          <div className={styles.navbarRight}>
            <Link to="/contact" className={styles.navCta}>GET A QUOTE</Link>
          </div>
        </div>
      </motion.header>
    </>
  );
}