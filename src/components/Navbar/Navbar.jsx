// src/components/Navbar/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail, Phone } from "lucide-react";
import styles from "./Navbar.module.css";

// ─── Navigation data ──────────────────────────────────────────────
export const NAV_COMPANY = [
  { label: "Company",    href: "/company"    },
  { label: "Why Us?",    href: "/why-us"     },
  { label: "Careers",     href: "/careers"    },
  { label: "FAQ",        href: "/faq"        },
];

// ─── Services dropdown – matches the real categories in src/data/servicesData.js ──
export const NAV_SERVICES = [
  { label: "All Services",                  href: "/services" },
  { label: "Academic & Research",            href: "/services?category=academic" },
  { label: "Advanced Analytics",             href: "/services?category=analytics" },
  { label: "Finance & Risk",                 href: "/services?category=finance" },
  { label: "Healthcare & Life Sciences",     href: "/services?category=healthcare" },
  { label: "Manufacturing & Supply Chain",   href: "/services?category=manufacturing" },
  { label: "Retail & E-Commerce",            href: "/services?category=retail" },
  { label: "AI & Machine Learning",          href: "/services?category=ai-ml" },
  { label: "Data Engineering & BI Tools",    href: "/services?category=data-engineering" },
  { label: "Statistical & Research Methods", href: "/services?category=research-methods" },
  { label: "Academic Writing & Publishing",  href: "/services?category=academic-writing" },
  { label: "Assignment & Software Help",     href: "/services?category=assignment-help" },
];

export const NAV_PORTFOLIO = [
  { label: "Dashboards & BI",  href: "/portfolio/bi"        },
  { label: "AI Applications",  href: "/portfolio/ai"        },
  { label: "Data Pipelines",   href: "/portfolio/pipelines" },
  { label: "Mobile Analytics", href: "/portfolio/mobile"    },
];

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
  { label: "Education Analytics",        href: "/resources?category=academic"      },
];

export const NAV_RESOURCES_STUDENTS = [
  { label: "Research & Thesis Support",     href: "/resources?category=research"      },
  { label: "Data Analysis (SPSS/R/Stata)",  href: "/resources?category=data-analysis" },
  { label: "Chapter 4 & Results Writing",   href: "/resources?category=chapter4"      },
  { label: "Statistical Methods Explained", href: "/resources?category=statistics"    },
];

export const NAV_RESOURCES = NAV_RESOURCES_INDUSTRY;

export default function Navbar({ activeNav = "" }) {
  const location = useLocation();
  const [navOpen,  setNavOpen]  = useState(false);
  const [compOpen, setCompOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const [portOpen, setPortOpen] = useState(false);
  const [resOpen,  setResOpen]  = useState(false);

  // ─── Scroll state for the border line ────────────────────────────
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <li><Link to="/business-intel" onClick={() => setNavOpen(false)}>Business Intel</Link></li>
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
          DESKTOP NAV – Static (no collapse on scroll)
          ══════════════════════════════════════ */}
      <header className={styles.navbarFixed}>
        {/* ─── Scroll-activated border line ──────────────────────── */}
        <div
          className={styles.navbarBorder}
          style={{
            opacity: isScrolled ? 1 : 0,
            transition: 'opacity 0.2s ease'
          }}
        />
        <div className={styles.navbarInner}>
          <Link to="/" className={styles.navbarBrand}>
            <img src="/Images/site-images/logo.svg" alt="Scape Data Solutions" />
          </Link>

          <ul className={styles.navList}>
            <li>
              <Link to="/" className={`${styles.navLink}${activeNav === "home" ? " " + styles.navActive : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/business-intel" className={`${styles.navLink}${activeNav === "business-intel" ? " " + styles.navActive : ""}`}>
                Business Intel
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
              <Link to="/clients" className={`${styles.navLink}${activeNav === "clients" ? " " + styles.navActive : ""}`}>Our Clients</Link>
            </li>
            <li className={styles.hasDrop}>
              <Link to="/portfolio" className={`${styles.navLink}${activeNav === "portfolio" ? " " + styles.navActive : ""}`}>
                Portfolio <ChevronDown size={12} />
              </Link>
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
              <div className={`${styles.drop} ${styles.dropWide} ${styles.dropRight}`}>
                <div className={styles.dropGrid}>
                  {NAV_RESOURCES_INDUSTRY.map((x, i) => (
                    <Link key={i} to={x.href} className={styles.dropLink}>{x.label}</Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link to="/testimonials" className={`${styles.navLink}${activeNav === "testimonials" ? " " + styles.navActive : ""}`}>Testimonials</Link>
            </li>
            <li>
              <Link to="/contact" className={`${styles.navLink}${activeNav === "contact" ? " " + styles.navActive : ""}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}