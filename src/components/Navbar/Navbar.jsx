// src/components/Navbar/Navbar.jsx - Toptal-style header: one clean white bar, mega-menu for Services,
// a single blue order button that names the service on the page you are on.
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import styles from "./Navbar.module.css";
import useUniformNavGap from "./useUniformNavGap";
import { orderUrl, orderLabel } from "../OrderPush/orderLinks";

export const NAV_COMPANY = [
  { label: "Company", href: "/company" },
  { label: "Why Us?", href: "/why-us" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
];

export const NAV_SERVICES = [
  { label: "All Services", href: "/services" },
  { label: "Academic & Research", href: "/services/category/academic" },
  { label: "Advanced Analytics", href: "/services/category/analytics" },
  { label: "Finance & Risk", href: "/services/category/finance" },
  { label: "Healthcare & Life Sciences", href: "/services/category/healthcare" },
  { label: "Manufacturing & Supply Chain", href: "/services/category/manufacturing" },
  { label: "Retail & E-Commerce", href: "/services/category/retail" },
  { label: "AI & Machine Learning", href: "/services/category/ai-ml" },
  { label: "Data Engineering & BI Tools", href: "/services/category/data-engineering" },
  { label: "Statistical & Research Methods", href: "/services/category/research-methods" },
  { label: "Academic Writing & Publishing", href: "/services/category/academic-writing" },
  { label: "Assignment & Software Help", href: "/services/category/assignment-help" },
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

function Drop({ title, to, items, wide, right, promo, active }) {
  return (
    <li className={styles.hasDrop}>
      <Link to={to} className={`${styles.navLink}${active ? " " + styles.navActive : ""}`}>
        {title} <ChevronDown size={14} />
      </Link>
      <div className={`${styles.drop}${wide ? " " + styles.dropWide : ""}${right ? " " + styles.dropRight : ""}`}>
        <div className={styles.dropInner}>
          <div className={`${styles.dropGrid}${wide ? " " + styles.dropGrid2 : ""}`}>
            {items.map((x) => <Link key={x.href} to={x.href} className={styles.dropLink}>{x.label}</Link>)}
          </div>
          {promo && (
            <div className={styles.promo}>
              <p className={styles.promoKicker}>Ready when you are</p>
              <p className={styles.promoTitle}>Know what you need?</p>
              <p className={styles.promoText}>Pick a service, tell us the brief, get a fixed quote in 24 hours.</p>
              <a className={styles.promoBtn} href={orderUrl({ service: null, medium: "nav-mega" })}>Place an order <ArrowRight size={15} /></a>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Navbar({ activeNav = "" }) {
  const location = useLocation();
  useUniformNavGap(location.pathname);
  const [navOpen, setNavOpen] = useState(false);
  const [open, setOpen] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const mobileRef = useRef(null);
  const [deskH, setDeskH] = useState(72);
  const [mobH, setMobH] = useState(60);

  useEffect(() => {
    const measure = () => {
      const d = headerRef.current ? headerRef.current.offsetHeight : 72;
      const m = mobileRef.current ? mobileRef.current.offsetHeight : 60;
      setDeskH(d); setMobH(m);
      document.documentElement.style.setProperty("--nav-h", (window.innerWidth >= 1024 ? d : m) + "px");
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (headerRef.current) ro.observe(headerRef.current);
    if (mobileRef.current) ro.observe(mobileRef.current);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, []);

  useEffect(() => {
    const on = () => setIsScrolled(window.scrollY > 4);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setNavOpen(false); }, [location.pathname]);

  const orderText = orderLabel("Order now");
  const close = () => setNavOpen(false);
  const acc = (key, label, items) => (
    <li>
      <button className={styles.drawerAcc} onClick={() => setOpen(open === key ? "" : key)} aria-expanded={open === key}>
        {label} <ChevronDown size={16} style={{ transform: open === key ? "rotate(180deg)" : "none" }} />
      </button>
      {open === key && <ul className={styles.drawerSub}>{items.map((x) => <li key={x.href}><Link to={x.href} onClick={close}>{x.label}</Link></li>)}</ul>}
    </li>
  );

  return (
    <>
      {/* mobile bar */}
      <div ref={mobileRef} className={`${styles.mobileHeader}${isScrolled ? " " + styles.scrolled : ""}`}>
        <div className={styles.mContainer}>
          <Link to="/" className={styles.mobileLogo}><img src="/Images/site-images/logo.svg" alt="Scape Data Solutions" /></Link>
          <a className={styles.mobileOrder} href={orderUrl({ medium: "nav-mobile" })}>{orderText}</a>
          <button className={`${styles.burger}${navOpen ? " " + styles.burgerOpen : ""}`} onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu"><span /><span /><span /></button>
        </div>
      </div>

      <AnimatePresence>
        {navOpen && (
          <>
            <motion.div className={styles.overlay} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} />
            <motion.nav className={styles.drawer} initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "tween", duration: 0.25, ease: "easeInOut" }}>
              <button className={styles.drawerClose} onClick={close} aria-label="Close menu">✕</button>
              <ul className={styles.drawerList}>
                {acc("serv", "Services", NAV_SERVICES)}
                <li><Link to="/business-intel" onClick={close}>Business Intel</Link></li>
                {acc("port", "Portfolio", NAV_PORTFOLIO)}
                {acc("res", "Resources", NAV_RESOURCES_INDUSTRY)}
                {acc("comp", "Company", NAV_COMPANY)}
                <li><Link to="/clients" onClick={close}>Our Clients</Link></li>
                <li><Link to="/testimonials" onClick={close}>Testimonials</Link></li>
                <li><a href="https://portal.scapedatasolutions.com/" onClick={close}>Client Portal</a></li>
                <li><Link to="/contact" onClick={close}>Contact</Link></li>
              </ul>
              <a className={styles.drawerCta} href={orderUrl({ medium: "nav-drawer" })}>{orderText} <ArrowRight size={16} /></a>
              <a className={styles.drawerMail} href="mailto:info@scapedatasolutions.com">info@scapedatasolutions.com</a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* desktop bar */}
      <header ref={headerRef} className={`${styles.navbarFixed}${isScrolled ? " " + styles.scrolled : ""}`}>
        <div className={styles.navbarInner}>
          <Link to="/" className={styles.navbarBrand}><img src="/Images/site-images/logo.svg" alt="Scape Data Solutions" /></Link>
          <ul className={styles.navList}>
            <Drop title="Services" to="/services" items={NAV_SERVICES} wide promo active={activeNav === "services"} />
            <li><Link to="/business-intel" className={`${styles.navLink}${activeNav === "business-intel" ? " " + styles.navActive : ""}`}>Business Intel</Link></li>
            <Drop title="Portfolio" to="/portfolio" items={NAV_PORTFOLIO} active={activeNav === "portfolio"} />
            <Drop title="Resources" to="/resources" items={NAV_RESOURCES_INDUSTRY} wide right active={activeNav === "resources"} />
            <Drop title="Company" to="/company" items={NAV_COMPANY} right active={activeNav === "company"} />
            <li><Link to="/clients" className={`${styles.navLink}${activeNav === "clients" ? " " + styles.navActive : ""}`}>Clients</Link></li>
          </ul>
          <div className={styles.navRight}>
            <Link to="/contact" className={`${styles.navTextLink}${activeNav === "contact" ? " " + styles.navActive : ""}`}>Contact</Link>
            <a href={orderUrl({ medium: "nav-top" })} className={styles.navOrder}>{orderText}</a>
          </div>
        </div>
      </header>

      <div className={styles.navSpacer} style={{ height: deskH }} />
      <div data-nav-end className={styles.navSpacerMobile} style={{ height: mobH }} />
    </>
  );
}
