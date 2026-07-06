// src/components/Navbar/Navbar.jsx
// LEADconcept-style:
//   - Top bar: email + phone left
//   - Main nav: logo left | links center
//   - NO bottom border on nav bar (clean, like LEADconcept)
//   - Active link = blue underline from bottom

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Phone } from "lucide-react";
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

// ─── Resources – SEO content hub, grouped by audience ─────────────
export const NAV_RESOURCES_INDUSTRY = [
  { label: "All Resources",              href: "/resources"                        },
  { label: "Business Analytics",         href: "/resources?category=business"      },
  { label: "Finance Analytics",          href: "/resources?category=finance"       },
  { label: "Healthcare Analytics",       href: "/resources?category=healthcare"    },
  { label: "Dental Analytics",           href: "/dental-analytics"                 },
  { label: "Veterinary Analytics",       href: "/veterinary-analytics"             },
  { label: "Medical Practice Analytics", href: "/medical-practice-analytics"       },
  { label: "Retail Analytics",           href: "/resources?category=retail"        },
  { label: "Manufacturing Analytics",    href: "/resources?category=manufacturing" },
  { label: "Logistics Analytics",        href: "/resources?category=logistics"     },
  { label: "Energy & Utilities",         href: "/resources?category=energy"        },
  { label: "Real Estate Analytics",      href: "/resources?category=realestate"    },
  { label: "Government & Public Sector", href: "/resources?category=government"    },
  { label: "Media & Entertainment",      href: "/resources?category=media"         },
  { label: "Telecommunications",         href: "/resources?category=telecom"       },
  { label: "Agriculture Analytics",      href: "/resources?category=agriculture"   },
  { label: "Insurance Analytics",        href: "/resources?category=insurance"     },
  { label: "Legal Analytics",            href: "/resources?category=legal"         },
  { label: "Education Analytics",        href: "/resources?category=education"     },
];

export const NAV_RESOURCES_STUDENTS = [
  { label: "Research & Thesis Support",     href: "/resources?category=research"      },
  { label: "Data Analysis (SPSS/R/Stata)",  href: "/resources?category=data-analysis" },
  { label: "Chapter 4 & Results Writing",   href: "/resources?category=chapter4"      },
  { label: "Statistical Methods Explained", href: "/resources?category=statistics"    },
];

// kept for backward compatibility with any other file importing NAV_RESOURCES
export const NAV_RESOURCES = NAV_RESOURCES_INDUSTRY;

export default function Navbar({ activeNav = "" }) {
  const location = useLocation();
  const [navOpen,  setNavOpen]  = useState(false);
  const [compOpen, setCompOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const [portOpen, setPortOpen] = useState(false);
  const [resOpen,  setResOpen]  = useState(false);

  useEffect(() => { setNavOpen(false); }, [location.pathname]);

  return (
    <>
      {/* ══════════════════════════════════════
          TOP BAR  – contacts left
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
                <li>
                  <button className={styles.drawerAcc} onClick={() => setResOpen(!resOpen)}>
                    Resources <span>{resOpen ? "▲" : "▼"}</span>
                  </button>
                  {resOpen && (
                    <ul className={styles.drawerSub}>
                      {NAV_RESOURCES_INDUSTRY.map((x, i) => (
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
          DESKTOP NAV – logo · links
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
              {/* dropRight: anchors panel to the right edge so it doesn't overflow off-screen */}
              <div className={`${styles.drop} ${styles.dropRight}`}>
                <div className={styles.dropGrid1}>
                  {NAV_PORTFOLIO.map((x, i) => (
                    <Link key={i} to={x.href} className={styles.dropLink}>{x.label}</Link>
                  ))}
                </div>
              </div>
            </li>
            <li className={styles.hasDrop}>
              <Link to="/resources" className={`${styles.navLink}${activeNav === "resources" ? " " + styles.navActive : ""}`}>
                Resources <ChevronDown size={12} />
              </Link>
              {/* dropRight: anchors panel to the right edge so it doesn't overflow off-screen */}
              <div className={`${styles.drop} ${styles.dropWide} ${styles.dropRight}`}>
                <div className={styles.dropGrid}>
                  {NAV_RESOURCES_INDUSTRY.map((x, i) => (
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
        </div>
      </motion.header>
    </>
  );

}