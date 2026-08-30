// src/components/Navbar/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import styles from "./Navbar.module.css";

// Navigation data
export const NAV_COMPANY = [
  { label: "Company", href: "/company" },
  { label: "Why Us?", href: "/why-us" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
];

export const NAV_SERVICES = [
  { label: "All Services", href: "/services" },
  { label: "Academic & Research", href: "/services?category=academic" },
  { label: "Advanced Analytics", href: "/services?category=analytics" },
  { label: "Finance & Risk", href: "/services?category=finance" },
  { label: "Healthcare & Life Sciences", href: "/services?category=healthcare" },
  { label: "Manufacturing & Supply Chain", href: "/services?category=manufacturing" },
  { label: "Retail & E-Commerce", href: "/services?category=retail" },
  { label: "AI & Machine Learning", href: "/services?category=ai-ml" },
  { label: "Data Engineering & BI Tools", href: "/services?category=data-engineering" },
  { label: "Statistical & Research Methods", href: "/services?category=research-methods" },
  { label: "Academic Writing & Publishing", href: "/services?category=academic-writing" },
  { label: "Assignment & Software Help", href: "/services?category=assignment-help" },
];

export const NAV_PORTFOLIO = [
  { label: "Dashboards & BI", href: "/portfolio/bi" },
  { label: "AI Applications", href: "/portfolio/ai" },
  { label: "Data Pipelines", href: "/portfolio/pipelines" },
  { label: "Mobile Analytics", href: "/portfolio/mobile" },
];

export const NAV_RESOURCES_INDUSTRY = [
  { label: "All Resources", href: "/resources" },
  { label: "Business Analytics", href: "/resources?category=business" },
  { label: "Finance Analytics", href: "/resources?category=finance" },
  { label: "Healthcare Analytics", href: "/resources?category=healthcare" },
  { label: "Dental Analytics", href: "/dental-analytics" },
  { label: "Veterinary Analytics", href: "/veterinary-analytics" },
  { label: "Medical Practice Analytics", href: "/medical-practice-analytics" },
  { label: "Retail Analytics", href: "/resources?category=retail" },
  { label: "Manufacturing Analytics", href: "/resources?category=manufacturing" },
  { label: "Logistics Analytics", href: "/resources?category=logistics" },
  { label: "Energy & Utilities", href: "/resources?category=energy" },
  { label: "Real Estate Analytics", href: "/resources?category=realestate" },
  { label: "Government & Public Sector", href: "/resources?category=government" },
  { label: "Media & Entertainment", href: "/resources?category=media" },
  { label: "Telecommunications", href: "/resources?category=telecom" },
  { label: "Agriculture Analytics", href: "/resources?category=agriculture" },
  { label: "Insurance Analytics", href: "/resources?category=insurance" },
  { label: "Legal Analytics", href: "/resources?category=legal" },
  { label: "Education Analytics", href: "/resources?category=academic" },
];

export const NAV_RESOURCES_STUDENTS = [
  { label: "Research & Thesis Support", href: "/resources?category=research" },
  { label: "Data Analysis (SPSS/R/Stata)", href: "/resources?category=data-analysis" },
  { label: "Chapter 4 & Results Writing", href: "/resources?category=chapter4" },
  { label: "Statistical Methods Explained", href: "/resources?category=statistics" },
];

export const NAV_RESOURCES = NAV_RESOURCES_INDUSTRY;

// Inline social icons (no external icon-package dependency)
const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.91 8.44-9.93z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

export default function Navbar({ activeNav = "" }) {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [compOpen, setCompOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const [portOpen, setPortOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  // Measure the ACTUAL rendered height of the top bar + header (desktop)
  // and the mobile header, so the spacer below always matches reality --
  // no more hardcoded px guesses that drift out of sync after style edits.
  const topBarRef = useRef(null);
  const headerRef = useRef(null);
  const mobileHeaderRef = useRef(null);
  const [desktopSpacerHeight, setDesktopSpacerHeight] = useState(0);
  const [mobileSpacerHeight, setMobileSpacerHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      const topBarH = topBarRef.current ? topBarRef.current.offsetHeight : 0;
      const headerH = headerRef.current ? headerRef.current.offsetHeight : 0;
      setDesktopSpacerHeight(topBarH + headerH - 100);
      setMobileSpacerHeight(mobileHeaderRef.current ? mobileHeaderRef.current.offsetHeight : 0);
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (topBarRef.current) ro.observe(topBarRef.current);
    if (headerRef.current) ro.observe(headerRef.current);
    if (mobileHeaderRef.current) ro.observe(mobileHeaderRef.current);

    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div
        ref={topBarRef}
        className={`${styles.navTopBar}${isScrolled ? " " + styles.navTopBarHidden : ""}`}
      >
        <div className={styles.navTopInner}>
          <div className={styles.navTopLeft}>
            <a href="mailto:info@scapedatasolutions.com" className={styles.navTopContact}>
              <Mail size={18} />
              info@scapedatasolutions.com
            </a>
          </div>

          <div className={styles.navTopSocial}>
            <a
              href="https://www.facebook.com/profile.php?id=61591435187674"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.navSocialIcon}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/scape-data-solutions/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.navSocialIcon}
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <div ref={mobileHeaderRef} className={styles.mobileHeader}>
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

      <AnimatePresence>
        {navOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNavOpen(false)}
            />
            <motion.nav
              className={styles.drawer}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
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
                <li><a href="https://portal.scapedatasolutions.com/" onClick={() => setNavOpen(false)}>Client Portal</a></li>
                <li><Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link></li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <header
        ref={headerRef}
        className={`${styles.navbarFixed}${isScrolled ? " " + styles.navbarFixedTop : ""}`}
      >
        <div
          className={styles.navbarBorder}
          style={{
            opacity: isScrolled ? 1 : 0,
            transition: "opacity 0.2s ease",
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
              <a href="https://portal.scapedatasolutions.com/" className={styles.navLink}>
                Client Portal
              </a>
            </li>
            <li>
              <Link to="/contact" className={`${styles.navLink}${activeNav === "contact" ? " " + styles.navActive : ""}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <div className={styles.navSpacer} style={{ height: desktopSpacerHeight }} />
      <div className={styles.navSpacerMobile} style={{ height: mobileSpacerHeight }} />
    </>
  );
}