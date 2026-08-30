import { useEffect, useState, useRef } from 'react';
import SEO from "../../components/SEO/SEO";
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Users, MapPin, Star, Quote, Briefcase,
  Building, Stethoscope, Scale, Landmark, UtensilsCrossed,
  Warehouse, ChevronLeft, ChevronRight, Globe,
  BarChart3, Code, BookOpen, Cloud, Zap, Coffee,
  TrendingUp, Database, Server,
} from 'lucide-react';
import styles from './ClientsPage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// ─── Client Data ──────────────────────────────────────────────────────
const CLIENTS = [
  { name: "Regional Federal Credit Union", location: "Hammond, IN", country: "USA", industry: "Finance", icon: <Landmark size={18} /> },
  { name: "The Family Building Society", location: "Epsom, UK", country: "UK", industry: "Finance", icon: <Landmark size={18} /> },
  { name: "Crown Point Community Bank", location: "Crown Point, IN", country: "USA", industry: "Finance", icon: <Briefcase size={18} /> },
  { name: "Harborview Savings & Loan", location: "Valparaiso, IN", country: "USA", industry: "Finance", icon: <TrendingUp size={18} /> },
  { name: "Northwest Regional Medical Group", location: "Rochester, MN", country: "USA", industry: "Healthcare", icon: <Stethoscope size={18} /> },
  { name: "Lakeside Community Hospital", location: "Oakland, CA", country: "USA", industry: "Healthcare", icon: <Stethoscope size={18} /> },
  { name: "Cedar Grove Family Health Network", location: "Cleveland, OH", country: "USA", industry: "Healthcare", icon: <Stethoscope size={18} /> },
  { name: "Weis Markets", location: "Brodheadsville, PA", country: "USA", industry: "Retail", icon: <BarChart3 size={18} /> },
  { name: "US Supermarket", location: "Elmhurst, NY", country: "USA", industry: "Retail", icon: <Building size={18} /> },
  { name: "Midwest Hardware Co-op", location: "Minneapolis, MN", country: "USA", industry: "Retail", icon: <BarChart3 size={18} /> },
  { name: "Brightline Data Systems", location: "Austin, TX", country: "USA", industry: "Technology", icon: <Cloud size={18} /> },
  { name: "Manufacturers' News, Inc.", location: "Evanston, IL", country: "USA", industry: "Technology", icon: <Database size={18} /> },
  { name: "Pinecrest Software Partners", location: "Denver, CO", country: "USA", industry: "Technology", icon: <Server size={18} /> },
  { name: "Heartland Co-op Energy", location: "Houston, TX", country: "USA", industry: "Energy", icon: <Zap size={18} /> },
  { name: "Sunridge Power & Light", location: "San Ramon, CA", country: "USA", industry: "Energy", icon: <Zap size={18} /> },
  { name: "Ridgeline Precision Manufacturing", location: "Cincinnati, OH", country: "USA", industry: "Manufacturing", icon: <Warehouse size={18} /> },
  { name: "Allegheny Tool & Die", location: "Irving, TX", country: "USA", industry: "Manufacturing", icon: <Warehouse size={18} /> },
  { name: "Crosslake Freight Lines", location: "Memphis, TN", country: "USA", industry: "Logistics", icon: <Globe size={18} /> },
  { name: "Peachtree Distribution Co.", location: "Atlanta, GA", country: "USA", industry: "Logistics", icon: <Globe size={18} /> },
  { name: "Cascade Coffee Roasters", location: "Seattle, WA", country: "USA", industry: "Food & Beverage", icon: <Coffee size={18} /> },
  { name: "Lakeshore Diner Group", location: "Chicago, IL", country: "USA", industry: "Food & Beverage", icon: <UtensilsCrossed size={18} /> },
  { name: "Brookline Community College", location: "Cambridge, MA", country: "USA", industry: "Education", icon: <BookOpen size={18} /> },
  { name: "Eastgate Technical Institute", location: "Cambridge, MA", country: "USA", industry: "Education", icon: <BookOpen size={18} /> },
  { name: "Whitfield & Marsh LLP", location: "New York, NY", country: "USA", industry: "Professional Services", icon: <Scale size={18} /> },
  { name: "Carrow Advisory Group", location: "New York, NY", country: "USA", industry: "Professional Services", icon: <Briefcase size={18} /> },
  { name: "Thamesbridge Mutual", location: "Reading, UK", country: "UK", industry: "Finance", icon: <Landmark size={18} /> },
  { name: "Aldgate Financial Partners", location: "London, UK", country: "UK", industry: "Finance", icon: <Briefcase size={18} /> },
  { name: "The London Independent Hospital", location: "London, UK", country: "UK", industry: "Healthcare", icon: <Stethoscope size={18} /> },
  { name: "Fairfield Independent Hospital", location: "Saint Helens, UK", country: "UK", industry: "Healthcare", icon: <Stethoscope size={18} /> },
  { name: "Boswell's of Oxford", location: "Oxford, UK", country: "UK", industry: "Retail", icon: <BarChart3 size={18} /> },
  { name: "Mereside Stores Group", location: "Nottingham, UK", country: "UK", industry: "Retail", icon: <Building size={18} /> },
  { name: "Northfield Family Grocers", location: "Leeds, UK", country: "UK", industry: "Retail", icon: <BarChart3 size={18} /> },
  { name: "Tyneside Digital Solutions", location: "Newcastle, UK", country: "UK", industry: "Technology", icon: <Code size={18} /> },
  { name: "Hartfield Systems Ltd", location: "Reading, UK", country: "UK", industry: "Technology", icon: <Server size={18} /> },
  { name: "Pennine Renewable Energy", location: "Leeds, UK", country: "UK", industry: "Energy", icon: <Zap size={18} /> },
  { name: "Severnside Utilities", location: "Bristol, UK", country: "UK", industry: "Energy", icon: <Zap size={18} /> },
  { name: "Riverside Parcel Services", location: "Birmingham, UK", country: "UK", industry: "Logistics", icon: <Globe size={18} /> },
  { name: "Ashworth & Bell Chartered Accountants", location: "London, UK", country: "UK", industry: "Professional Services", icon: <Briefcase size={18} /> },
  { name: "Goldfields Community Credit Union", location: "Perth, AU", country: "Australia", industry: "Finance", icon: <Landmark size={18} /> },
  { name: "Bayview Mutual Bank", location: "Sydney, AU", country: "Australia", industry: "Finance", icon: <Landmark size={18} /> },
  { name: "Yarra Valley Financial Services", location: "Melbourne, AU", country: "Australia", industry: "Finance", icon: <Briefcase size={18} /> },
  { name: "Holmesglen Private Hospital", location: "Moorabbin, AU", country: "Australia", industry: "Healthcare", icon: <Stethoscope size={18} /> },
  { name: "Gold Coast Private Hospital", location: "Southport, AU", country: "Australia", industry: "Healthcare", icon: <Stethoscope size={18} /> },
  { name: "IGA Gumdale", location: "Gumdale, AU", country: "Australia", industry: "Retail", icon: <BarChart3 size={18} /> },
  { name: "Foothills Fresh Markets", location: "Adelaide, AU", country: "Australia", industry: "Retail", icon: <BarChart3 size={18} /> },
  { name: "Australasian Mining Services", location: "Forrestfield, AU", country: "Australia", industry: "Mining", icon: <Warehouse size={18} /> },
  { name: "SMS Mining Services", location: "High Wycombe, AU", country: "Australia", industry: "Mining", icon: <Warehouse size={18} /> },
  { name: "Outback Energy Partners", location: "Perth, AU", country: "Australia", industry: "Energy", icon: <Zap size={18} /> },
  { name: "Coastal Code Collective", location: "Brisbane, AU", country: "Australia", industry: "Technology", icon: <Code size={18} /> },
  { name: "Hunter Valley Networks", location: "Newcastle, AU", country: "Australia", industry: "Technology", icon: <Server size={18} /> },
  { name: "Riverbend Polytechnic", location: "Melbourne, AU", country: "Australia", industry: "Education", icon: <BookOpen size={18} /> },
];

const INDUSTRY_COLORS = {
  Finance: '#fdb840',
  Healthcare: '#00e676',
  Retail: '#00d4ff',
  Technology: '#a259ff',
  Energy: '#ff6b6b',
  Manufacturing: '#fdb840',
  Logistics: '#00e676',
  'Food & Beverage': '#ff6b6b',
  Education: '#a259ff',
  'Professional Services': '#00d4ff',
  Mining: '#fdb840',
};

const testimonials = [
  { quote: "Scape Data Solutions transformed how we handle financial reporting. Real-time visibility across all our branches — up and running in weeks.", organization: "The Family Building Society", location: "Epsom, UK" },
  { quote: "Their data governance framework gave us complete compliance with Australian privacy regulations. The team delivered beyond what we expected.", organization: "Bayview Mutual Bank", location: "Sydney, AU" },
  { quote: "The predictive analytics platform they built for us has directly improved patient outcomes and operational efficiency across our network.", organization: "Holmesglen Private Hospital", location: "Moorabbin, AU" },
  { quote: "We consolidated several different data silos into one unified platform. Supply chain decisions that took days now happen in minutes.", organization: "Ridgeline Precision Manufacturing", location: "Cincinnati, OH" },
  { quote: "Their customer analytics capabilities gave us a completely new view of our shoppers. Loyalty programme engagement jumped significantly.", organization: "Mereside Stores Group", location: "Nottingham, UK" },
  { quote: "Scape delivered an enterprise-grade BI platform for our internal teams. Clean, fast, and actually used by decision-makers.", organization: "Coastal Code Collective", location: "Brisbane, AU" },
];

// ─── Generated SVG Visuals ───────────────────────────────────────────

const HeroChart = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "400px", height: "auto" }}>
    <defs>
      <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx="200" cy="160" r="120" fill="url(#hubGlow)" />
    <circle cx="200" cy="160" r="95" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 6" opacity="0.25" />
    <circle cx="200" cy="160" r="60" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 6" opacity="0.3" />

    {[
      [200, 55], [305, 100], [335, 195], [270, 275],
      [130, 275], [65, 195], [95, 100], [200, 265],
    ].map(([x, y], i) => (
      <line key={`l${i}`} x1="200" y1="160" x2={x} y2={y} stroke="#3b82f6" strokeWidth="1.2" opacity="0.35" />
    ))}

    <circle cx="200" cy="160" r="26" fill="#3b82f6" />
    <circle cx="200" cy="160" r="26" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4">
      <animate attributeName="r" values="26;36;26" dur="2.8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0;0.4" dur="2.8s" repeatCount="indefinite" />
    </circle>
    <text x="200" y="165" fontSize="11" fontWeight="600" fill="#fff" fontFamily="system-ui" textAnchor="middle">SCAPE</text>

    {[
      [200, 55, 5], [305, 100, 4], [335, 195, 5], [270, 275, 4],
      [130, 275, 5], [65, 195, 4], [95, 100, 5], [200, 265, 4],
    ].map(([x, y, r], i) => (
      <circle key={`n${i}`} cx={x} cy={y} r={r} fill="#3b82f6" opacity="0.85">
        <animate attributeName="opacity" values="0.85;0.35;0.85" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
      </circle>
    ))}

    <text x="200" y="308" fontSize="9" fill="#888" fontFamily="system-ui" textAnchor="middle">Trusted across 60+ countries worldwide</text>
  </svg>
);

const GlobalMap = () => (
  <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "400px", height: "auto" }}>
    <rect x="20" y="15" width="360" height="210" rx="12" stroke="#3b82f6" strokeWidth="1.5" opacity="0.1" />
    <ellipse cx="100" cy="90" rx="60" ry="50" fill="#3b82f6" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
    <ellipse cx="200" cy="80" rx="40" ry="35" fill="#3b82f6" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
    <ellipse cx="280" cy="100" rx="50" ry="40" fill="#3b82f6" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
    <ellipse cx="150" cy="150" rx="45" ry="30" fill="#3b82f6" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
    <line x1="100" y1="90" x2="200" y2="80" stroke="#3b82f6" strokeWidth="0.5" opacity="0.15" />
    <line x1="200" y1="80" x2="280" y2="100" stroke="#3b82f6" strokeWidth="0.5" opacity="0.15" />
    <line x1="100" y1="90" x2="150" y2="150" stroke="#3b82f6" strokeWidth="0.5" opacity="0.15" />
    <line x1="280" y1="100" x2="150" y2="150" stroke="#3b82f6" strokeWidth="0.5" opacity="0.15" />
    <circle cx="80" cy="80" r="6" fill="#3b82f6" opacity="0.9">
      <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="120" cy="100" r="5" fill="#3b82f6" opacity="0.8">
      <animate attributeName="r" values="5;9;5" dur="2.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="180" cy="75" r="4" fill="#3b82f6" opacity="0.7">
      <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="220" cy="85" r="5" fill="#3b82f6" opacity="0.8">
      <animate attributeName="r" values="5;9;5" dur="2.2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.2s" repeatCount="indefinite" />
    </circle>
    <circle cx="290" cy="95" r="4" fill="#3b82f6" opacity="0.7">
      <animate attributeName="r" values="4;8;4" dur="2.8s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.8s" repeatCount="indefinite" />
    </circle>
    <circle cx="310" cy="110" r="3" fill="#3b82f6" opacity="0.6">
      <animate attributeName="r" values="3;7;3" dur="3.2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.2s" repeatCount="indefinite" />
    </circle>
    <circle cx="140" cy="140" r="4" fill="#3b82f6" opacity="0.7">
      <animate attributeName="r" values="4;8;4" dur="2.4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.4s" repeatCount="indefinite" />
    </circle>
    <circle cx="170" cy="155" r="3" fill="#3b82f6" opacity="0.6">
      <animate attributeName="r" values="3;7;3" dur="3.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="250" cy="145" r="4" fill="#3b82f6" opacity="0.7">
      <animate attributeName="r" values="4;8;4" dur="2.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.7;0.3;0.7" dur="2.6s" repeatCount="indefinite" />
    </circle>
    <rect x="35" y="200" width="6" height="6" rx="1" fill="#3b82f6" opacity="0.6" />
    <text x="46" y="206" fontSize="9" fill="#888" fontFamily="system-ui">Global client presence</text>
  </svg>
);

const DataPattern = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.03 }}>
    <rect x="10" y="10" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="40" y="10" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="70" y="10" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="100" y="10" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="130" y="10" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="160" y="10" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="10" y="40" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="40" y="40" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="70" y="40" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="130" y="40" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="160" y="40" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="10" y="70" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="70" y="70" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="100" y="70" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="130" y="70" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="10" y="100" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="40" y="100" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="100" y="100" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="130" y="100" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="160" y="100" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="10" y="130" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="40" y="130" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="70" y="130" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="100" y="130" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="160" y="130" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="10" y="160" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="70" y="160" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="100" y="160" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="130" y="160" width="20" height="20" rx="4" fill="#3b82f6" />
    <rect x="160" y="160" width="20" height="20" rx="4" fill="#3b82f6" />
  </svg>
);

// ─── Component ──────────────────────────────────────────────────────
const ClientsPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const testimonialRef = useRef(null);
  const breakdownRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: false, amount: 0.1 });
  const isGridInView = useInView(gridRef, { once: false, amount: 0.05 });
  const isTestimonialInView = useInView(testimonialRef, { once: false, amount: 0.2 });
  const isBreakdownInView = useInView(breakdownRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.05 } } };
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.03, duration: 0.4, ease: 'easeOut' } }) };
  const spring = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } } };

  const nextTestimonial = () => setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className={styles.page}>
      <SEO
        title="Our Clients | Scape Data Solutions"
        description="Organizations across finance, healthcare, retail, energy and technology trust Scape Data Solutions."
        path="/clients"
      />

      <Navbar activeNav="clients" />

      <main className={styles.main}>

        {/* ─── HERO ──────────────────────────────────────────────────── */}
        <motion.section className={styles.hero} ref={heroRef} initial="hidden" animate={isHeroInView ? 'visible' : 'hidden'} variants={staggerContainer}>
          <div className={styles.container}>
            <div className={styles.heroInner}>
              <motion.div className={styles.heroLeft} variants={fadeUp}>
                <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                  Our Clients
                </motion.h1>
                <motion.p className={styles.heroSub} variants={fadeUp}>
                  From growing regional businesses to independent industry leaders across banking, healthcare, retail,
                  energy, and technology. We've helped organizations around the world grow with data.
                </motion.p>
                <motion.div className={styles.heroStats} variants={fadeUp}>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatNumber}>120+</span>
                    <span className={styles.heroStatLabel}>USA Clients</span>
                  </div>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatNumber}>30+</span>
                    <span className={styles.heroStatLabel}>UK Clients</span>
                  </div>
                  <div className={styles.heroStat}>
                    <span className={styles.heroStatNumber}>20+</span>
                    <span className={styles.heroStatLabel}>Australia Clients</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div className={styles.heroVisual} variants={fadeUp}>
                <HeroChart />
              </motion.div>
            </div>
          </div>
        </motion.section>

        <section className={styles.container} style={{ padding: "2.5rem 1.5rem" }}>
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "2rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "0 0 0.4rem" }}>Want to be our next success story?</h2>
            <p style={{ margin: "0 0 1.2rem", opacity: 0.75 }}>Submit your project through the client portal and see how quickly we get to work.</p>
            <a href="https://portal.scapedatasolutions.com/portal/signup" className={styles.ctaButton}>Submit a Project <ArrowRight size={16} /></a>
          </div>
        </section>

        {/* ─── CLIENT GRID ───────────────────────────────────────────── */}
        <motion.section className={styles.gridSection} ref={gridRef} initial="hidden" animate={isGridInView ? 'visible' : 'hidden'} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <motion.h2 variants={fadeUp}>Our Valued Clients</motion.h2>
              <motion.p variants={fadeUp}>Real organizations. Real industries. Finance, healthcare, retail, energy, technology, mining, logistics, and more across the USA, UK, and Australia.</motion.p>
            </div>
            <motion.div className={styles.clientGrid} variants={staggerContainer}>
              {CLIENTS.map((client, index) => (
                <motion.div key={index} className={styles.clientCard} variants={cardVariants} custom={index}
                  whileHover={{ y: -4, borderColor: '#3b82f6', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}
                  whileTap={{ scale: 0.98 }}>
                  <div className={styles.clientIcon} style={{ color: INDUSTRY_COLORS[client.industry] || '#3b82f6' }}>
                    {client.icon}
                  </div>
                  <div className={styles.clientInfo}>
                    <h3 className={styles.clientName}>{client.name}</h3>
                    <p className={styles.clientIndustry}>{client.industry}</p>
                    <div className={styles.clientMeta}>
                      <span className={styles.clientLocation}><MapPin size={12} /> {client.location}</span>
                      <span className={`${styles.clientCountry} ${styles['country' + client.country.replace(' ', '')]}`}>{client.country}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
        <motion.section className={styles.testimonialSection} ref={testimonialRef} initial="hidden" animate={isTestimonialInView ? 'visible' : 'hidden'} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.testimonialInner}>
              <motion.div className={styles.testimonialHeader} variants={fadeUp}>
                <Quote size={28} className={styles.quoteIcon} />
                <h2>What Our Clients Say</h2>
              </motion.div>
              <div className={styles.testimonialCarousel}>
                <motion.button className={styles.testimonialArrow} onClick={prevTestimonial}
                  whileHover={{ scale: 1.05, backgroundColor: '#3b82f6', color: '#fff' }} whileTap={{ scale: 0.95 }} aria-label="Previous">
                  <ChevronLeft size={20} />
                </motion.button>
                <AnimatePresence mode="wait">
                  <motion.div key={testimonialIndex} className={styles.testimonialSlide}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
                    <p className={styles.testimonialQuote}>"{testimonials[testimonialIndex].quote}"</p>
                    <div className={styles.testimonialAuthor}>
                      <strong>{testimonials[testimonialIndex].organization}</strong>
                      <span>{testimonials[testimonialIndex].location}</span>
                    </div>
                    <div className={styles.testimonialStars}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fdb840" color="#fdb840" />)}
                    </div>
                  </motion.div>
                </AnimatePresence>
                <motion.button className={styles.testimonialArrow} onClick={nextTestimonial}
                  whileHover={{ scale: 1.05, backgroundColor: '#3b82f6', color: '#fff' }} whileTap={{ scale: 0.95 }} aria-label="Next">
                  <ChevronRight size={20} />
                </motion.button>
              </div>
              <div className={styles.testimonialDots}>
                {testimonials.map((_, index) => (
                  <motion.button key={index}
                    className={`${styles.testimonialDot} ${index === testimonialIndex ? styles.activeDot : ''}`}
                    onClick={() => setTestimonialIndex(index)} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                    aria-label={`Testimonial ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── GLOBAL REACH ──────────────────────────────────────────── */}
        <motion.section className={styles.breakdownSection} ref={breakdownRef} initial="hidden" animate={isBreakdownInView ? 'visible' : 'hidden'} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.breakdownInner}>
              <motion.h2 variants={fadeUp}>Global Reach</motion.h2>
              <motion.div className={styles.breakdownGrid} variants={staggerContainer}>
                {[
                  { flag: '🇺🇸', count: '120+', label: 'USA Clients' },
                  { flag: '🇬🇧', count: '30+', label: 'UK Clients' },
                  { flag: '🇦🇺', count: '20+', label: 'Australia Clients' },
                  { flag: '🌍', count: '60+', label: 'Countries Total' },
                ].map((item, i) => (
                  <motion.div key={i} className={styles.breakdownItem} variants={spring}
                    whileHover={{ y: -4, borderColor: '#3b82f6', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
                    <span className={styles.breakdownFlag}>{item.flag}</span>
                    <span className={styles.breakdownNumber}>{item.count}</span>
                    <span className={styles.breakdownLabel}>{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className={styles.breakdownVisual} variants={fadeUp}>
                <GlobalMap />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ─── CTA ───────────────────────────────────────────────────── */}
        <motion.section className={styles.ctaSection} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeUp}>
          <div className={styles.container}>
            <motion.div className={styles.ctaCard} variants={fadeUp}>
              <div className={styles.ctaPattern}>
                <DataPattern />
              </div>
              <h2>Ready to Join Our Client Roster?</h2>
              <p>Let's talk about how we can help your organization grow with data.</p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" className={styles.ctaButton}>
                  Become a Client <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

      </main>

      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button className={styles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.08, backgroundColor: '#3b82f6', color: '#fff' }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}>
            <ChevronLeft size={18} style={{ transform: 'rotate(90deg)' }} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientsPage;
