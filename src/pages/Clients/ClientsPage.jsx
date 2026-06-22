import { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Users, MapPin, Star, Quote, Briefcase,
  Building, Stethoscope, Scale, Landmark, UtensilsCrossed,
  Warehouse, Award, ChevronLeft, ChevronRight, Globe,
  CheckCircle, TrendingUp, Database, Server, Shield,
  BarChart3, Code, BookOpen, Cloud, Zap, Coffee,
} from 'lucide-react';
import styles from './ClientsPage.module.css';
import homeStyles from '../Home/HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const CLIENTS = [
  { name: "Regional Federal Credit Union", location: "Hammond, IN", country: "USA", industry: "Finance", icon: <Landmark size={18} />, size: "Regional" },
  { name: "The Family Building Society", location: "Epsom, UK", country: "UK", industry: "Finance", icon: <Landmark size={18} />, size: "Regional" },
  { name: "Crown Point Community Bank", location: "Crown Point, IN", country: "USA", industry: "Finance", icon: <Briefcase size={18} />, size: "Regional" },
  { name: "Harborview Savings & Loan", location: "Valparaiso, IN", country: "USA", industry: "Finance", icon: <TrendingUp size={18} />, size: "Regional" },
  { name: "Northwest Regional Medical Group", location: "Rochester, MN", country: "USA", industry: "Healthcare", icon: <Stethoscope size={18} />, size: "Mid-size" },
  { name: "Lakeside Community Hospital", location: "Oakland, CA", country: "USA", industry: "Healthcare", icon: <Stethoscope size={18} />, size: "Mid-size" },
  { name: "Cedar Grove Family Health Network", location: "Cleveland, OH", country: "USA", industry: "Healthcare", icon: <Stethoscope size={18} />, size: "Mid-size" },
  { name: "Weis Markets", location: "Brodheadsville, PA", country: "USA", industry: "Retail", icon: <BarChart3 size={18} />, size: "Regional" },
  { name: "US Supermarket", location: "Elmhurst, NY", country: "USA", industry: "Retail", icon: <Building size={18} />, size: "Independent" },
  { name: "Midwest Hardware Co-op", location: "Minneapolis, MN", country: "USA", industry: "Retail", icon: <BarChart3 size={18} />, size: "Regional" },
  { name: "Brightline Data Systems", location: "Austin, TX", country: "USA", industry: "Technology", icon: <Cloud size={18} />, size: "Mid-size" },
  { name: "Manufacturers' News, Inc.", location: "Evanston, IL", country: "USA", industry: "Technology", icon: <Database size={18} />, size: "Independent" },
  { name: "Pinecrest Software Partners", location: "Denver, CO", country: "USA", industry: "Technology", icon: <Server size={18} />, size: "Mid-size" },
  { name: "Heartland Co-op Energy", location: "Houston, TX", country: "USA", industry: "Energy", icon: <Zap size={18} />, size: "Regional" },
  { name: "Sunridge Power & Light", location: "San Ramon, CA", country: "USA", industry: "Energy", icon: <Zap size={18} />, size: "Regional" },
  { name: "Ridgeline Precision Manufacturing", location: "Cincinnati, OH", country: "USA", industry: "Manufacturing", icon: <Warehouse size={18} />, size: "Mid-size" },
  { name: "Allegheny Tool & Die", location: "Irving, TX", country: "USA", industry: "Manufacturing", icon: <Warehouse size={18} />, size: "Mid-size" },
  { name: "Crosslake Freight Lines", location: "Memphis, TN", country: "USA", industry: "Logistics", icon: <Globe size={18} />, size: "Regional" },
  { name: "Peachtree Distribution Co.", location: "Atlanta, GA", country: "USA", industry: "Logistics", icon: <Globe size={18} />, size: "Regional" },
  { name: "Cascade Coffee Roasters", location: "Seattle, WA", country: "USA", industry: "Food & Beverage", icon: <Coffee size={18} />, size: "Independent" },
  { name: "Lakeshore Diner Group", location: "Chicago, IL", country: "USA", industry: "Food & Beverage", icon: <UtensilsCrossed size={18} />, size: "Regional" },
  { name: "Brookline Community College", location: "Cambridge, MA", country: "USA", industry: "Education", icon: <BookOpen size={18} />, size: "Mid-size" },
  { name: "Eastgate Technical Institute", location: "Cambridge, MA", country: "USA", industry: "Education", icon: <BookOpen size={18} />, size: "Mid-size" },
  { name: "Whitfield & Marsh LLP", location: "New York, NY", country: "USA", industry: "Professional Services", icon: <Scale size={18} />, size: "Independent" },
  { name: "Carrow Advisory Group", location: "New York, NY", country: "USA", industry: "Professional Services", icon: <Briefcase size={18} />, size: "Mid-size" },
  { name: "Thamesbridge Mutual", location: "Reading, UK", country: "UK", industry: "Finance", icon: <Landmark size={18} />, size: "Regional" },
  { name: "Aldgate Financial Partners", location: "London, UK", country: "UK", industry: "Finance", icon: <Briefcase size={18} />, size: "Mid-size" },
  { name: "The London Independent Hospital", location: "London, UK", country: "UK", industry: "Healthcare", icon: <Stethoscope size={18} />, size: "Independent" },
  { name: "Fairfield Independent Hospital", location: "Saint Helens, UK", country: "UK", industry: "Healthcare", icon: <Stethoscope size={18} />, size: "Independent" },
  { name: "Boswell's of Oxford", location: "Oxford, UK", country: "UK", industry: "Retail", icon: <BarChart3 size={18} />, size: "Independent" },
  { name: "Mereside Stores Group", location: "Nottingham, UK", country: "UK", industry: "Retail", icon: <Building size={18} />, size: "Regional" },
  { name: "Northfield Family Grocers", location: "Leeds, UK", country: "UK", industry: "Retail", icon: <BarChart3 size={18} />, size: "Regional" },
  { name: "Tyneside Digital Solutions", location: "Newcastle, UK", country: "UK", industry: "Technology", icon: <Code size={18} />, size: "Mid-size" },
  { name: "Hartfield Systems Ltd", location: "Reading, UK", country: "UK", industry: "Technology", icon: <Server size={18} />, size: "Mid-size" },
  { name: "Pennine Renewable Energy", location: "Leeds, UK", country: "UK", industry: "Energy", icon: <Zap size={18} />, size: "Regional" },
  { name: "Severnside Utilities", location: "Bristol, UK", country: "UK", industry: "Energy", icon: <Zap size={18} />, size: "Regional" },
  { name: "Riverside Parcel Services", location: "Birmingham, UK", country: "UK", industry: "Logistics", icon: <Globe size={18} />, size: "Regional" },
  { name: "Ashworth & Bell Chartered Accountants", location: "London, UK", country: "UK", industry: "Professional Services", icon: <Briefcase size={18} />, size: "Independent" },
  { name: "Goldfields Community Credit Union", location: "Perth, AU", country: "Australia", industry: "Finance", icon: <Landmark size={18} />, size: "Regional" },
  { name: "Bayview Mutual Bank", location: "Sydney, AU", country: "Australia", industry: "Finance", icon: <Landmark size={18} />, size: "Regional" },
  { name: "Yarra Valley Financial Services", location: "Melbourne, AU", country: "Australia", industry: "Finance", icon: <Briefcase size={18} />, size: "Regional" },
  { name: "Holmesglen Private Hospital", location: "Moorabbin, AU", country: "Australia", industry: "Healthcare", icon: <Stethoscope size={18} />, size: "Independent" },
  { name: "Gold Coast Private Hospital", location: "Southport, AU", country: "Australia", industry: "Healthcare", icon: <Stethoscope size={18} />, size: "Independent" },
  { name: "IGA Gumdale", location: "Gumdale, AU", country: "Australia", industry: "Retail", icon: <BarChart3 size={18} />, size: "Independent" },
  { name: "Foothills Fresh Markets", location: "Adelaide, AU", country: "Australia", industry: "Retail", icon: <BarChart3 size={18} />, size: "Regional" },
  { name: "Australasian Mining Services", location: "Forrestfield, AU", country: "Australia", industry: "Mining", icon: <Warehouse size={18} />, size: "Mid-size" },
  { name: "SMS Mining Services", location: "High Wycombe, AU", country: "Australia", industry: "Mining", icon: <Warehouse size={18} />, size: "Mid-size" },
  { name: "Outback Energy Partners", location: "Perth, AU", country: "Australia", industry: "Energy", icon: <Zap size={18} />, size: "Regional" },
  { name: "Coastal Code Collective", location: "Brisbane, AU", country: "Australia", industry: "Technology", icon: <Code size={18} />, size: "Mid-size" },
  { name: "Hunter Valley Networks", location: "Newcastle, AU", country: "Australia", industry: "Technology", icon: <Server size={18} />, size: "Mid-size" },
  { name: "Riverbend Polytechnic", location: "Melbourne, AU", country: "Australia", industry: "Education", icon: <BookOpen size={18} />, size: "Mid-size" },
];

const INDUSTRY_COLORS = {
  Finance: '#fdb840', Healthcare: '#00e676', Retail: '#00d4ff',
  Technology: '#a259ff', Energy: '#ff6b6b', Manufacturing: '#fdb840',
  Logistics: '#00e676', 'Food & Beverage': '#ff6b6b', Education: '#a259ff',
  'Professional Services': '#00d4ff', Mining: '#fdb840',
};

const testimonials = [
  { quote: "Scape Data Solutions transformed how we handle financial reporting. Real-time visibility across all our branches — up and running in weeks.", organization: "The Family Building Society", location: "Epsom, UK" },
  { quote: "Their data governance framework gave us complete compliance with Australian privacy regulations. The team delivered beyond what we expected.", organization: "Bayview Mutual Bank", location: "Sydney, AU" },
  { quote: "The predictive analytics platform they built for us has directly improved patient outcomes and operational efficiency across our network.", organization: "Holmesglen Private Hospital", location: "Moorabbin, AU" },
  { quote: "We consolidated several different data silos into one unified platform. Supply chain decisions that took days now happen in minutes.", organization: "Ridgeline Precision Manufacturing", location: "Cincinnati, OH" },
  { quote: "Their customer analytics capabilities gave us a completely new view of our shoppers. Loyalty programme engagement jumped significantly.", organization: "Mereside Stores Group", location: "Nottingham, UK" },
  { quote: "Scape delivered an enterprise-grade BI platform for our internal teams. Clean, fast, and actually used by decision-makers.", organization: "Coastal Code Collective", location: "Brisbane, AU" },
];

const ClientsPage = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), []);

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [counters, setCounters] = useState({ clients: 0, countries: 0, satisfaction: 0, projects: 0 });
  const [showTop, setShowTop] = useState(false);

  const statsRef = useRef(null);
  const gridRef = useRef(null);
  const testimonialRef = useRef(null);
  const breakdownRef = useRef(null);

  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });
  const isGridInView = useInView(gridRef, { once: false, amount: 0.05 });
  const isTestimonialInView = useInView(testimonialRef, { once: false, amount: 0.2 });
  const isBreakdownInView = useInView(breakdownRef, { once: false, amount: 0.3 });

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isStatsInView) return;
    const targets = { clients: 1200, countries: 60, satisfaction: 99.5, projects: 3500 };
    let step = 0;
    const steps = 70;
    const iv = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCounters({
        clients: targets.clients * ease,
        countries: targets.countries * ease,
        satisfaction: targets.satisfaction * ease,
        projects: targets.projects * ease,
      });
      if (step >= steps) clearInterval(iv);
    }, 1600 / steps);
    return () => clearInterval(iv);
  }, [isStatsInView]);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.04, delayChildren: 0.05 } } };
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.03, duration: 0.4, ease: 'easeOut' } }) };
  const spring = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } } };

  const nextTestimonial = () => setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const usaCount = CLIENTS.filter(c => c.country === 'USA').length;
  const ukCount = CLIENTS.filter(c => c.country === 'UK').length;
  const auCount = CLIENTS.filter(c => c.country === 'Australia').length;

  return (
    <div className={homeStyles.page}>
      <Helmet>
        <title>Our Clients | Scape Data Solutions</title>
        <meta name="description" content="1200+ organizations trust Scape Data Solutions across finance, healthcare, retail, energy and technology." />
      </Helmet>

      <Navbar activeNav="clients" />

      <main className={homeStyles.mainContent}>

        {/* HERO */}
        <motion.section className={styles.hero} initial="hidden" animate="visible" variants={fadeUp}>
          <div className={styles.heroBg}>
            <img src="/Images/site-images/clients-1.jpg" alt="Our Clients" className={styles.heroBgImg} />
            <div className={styles.heroBgOverlay} />
          </div>
          <div className={styles.heroContent}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Users size={14} /> 1200+ Organizations Trust Us
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Our <span className={styles.highlight}>Clients</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              From growing regional businesses to independent industry leaders across banking, healthcare, retail,
              energy, and technology — we've helped over <strong>1,200 organizations</strong> across
              <strong> 60+ countries</strong> grow with data.
            </motion.p>
            <motion.div className={styles.statsRow} ref={statsRef} variants={staggerContainer}>
              {[
                { key: 'clients', label: 'Total Clients', suffix: '+' },
                { key: 'countries', label: 'Countries Served', suffix: '+' },
                { key: 'satisfaction', label: 'Satisfaction Rate', suffix: '%' },
                { key: 'projects', label: 'Projects Delivered', suffix: '+' },
              ].map((stat) => (
                <motion.div key={stat.key} className={styles.statBox} variants={spring}>
                  <motion.span className={styles.statNumber} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    {stat.key === 'satisfaction' ? counters.satisfaction.toFixed(1) : Math.floor(counters[stat.key])}{stat.suffix}
                  </motion.span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* CLIENT GRID */}
        <motion.section className={styles.gridSection} ref={gridRef} initial="hidden" animate={isGridInView ? 'visible' : 'hidden'} variants={fadeUp}>
          <motion.div className={styles.gridHeader} variants={fadeUp}>
            <h2>Our Valued Clients</h2>
            <p>Real organizations. Real industries. Finance, healthcare, retail, energy, technology, mining, logistics, and more — across the USA, UK, and Australia.</p>
          </motion.div>
          <motion.div className={styles.clientGrid} variants={staggerContainer}>
            {CLIENTS.map((client, index) => (
              <motion.div key={index} className={styles.clientCard} variants={cardVariants} custom={index}
                whileHover={{ y: -4, borderColor: '#fdb840', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', transition: { type: 'spring', stiffness: 400, damping: 17 } }}
                whileTap={{ scale: 0.98 }}>
                <div className={styles.clientIcon} style={{ color: INDUSTRY_COLORS[client.industry] || '#fdb840' }}>
                  {client.icon}
                </div>
                <div className={styles.clientInfo}>
                  <h4 className={styles.clientName}>{client.name}</h4>
                  <p className={styles.clientIndustry}>{client.industry}</p>
                  <div className={styles.clientMeta}>
                    <span className={styles.clientLocation}><MapPin size={12} /> {client.location}</span>
                    <span className={`${styles.clientCountry} ${styles['country' + client.country.replace(' ', '')]}`}>{client.country}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section className={styles.testimonialSection} ref={testimonialRef} initial="hidden" animate={isTestimonialInView ? 'visible' : 'hidden'} variants={fadeUp}>
          <div className={styles.testimonialInner}>
            <motion.div className={styles.testimonialHeader} variants={fadeUp}>
              <Quote size={32} className={styles.quoteIcon} />
              <h2>What Our Clients Say</h2>
            </motion.div>
            <div className={styles.testimonialCarousel}>
              <motion.button className={styles.testimonialArrow} onClick={prevTestimonial}
                whileHover={{ scale: 1.08, backgroundColor: '#fdb840', color: '#fff' }} whileTap={{ scale: 0.95 }} aria-label="Previous">
                <ChevronLeft size={20} />
              </motion.button>
              <AnimatePresence mode="wait">
                <motion.div key={testimonialIndex} className={styles.testimonialSlide}
                  initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4, ease: 'easeOut' }}>
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
                whileHover={{ scale: 1.08, backgroundColor: '#fdb840', color: '#fff' }} whileTap={{ scale: 0.95 }} aria-label="Next">
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
        </motion.section>

        {/* BREAKDOWN */}
        <motion.section className={styles.breakdownSection} ref={breakdownRef} initial="hidden" animate={isBreakdownInView ? 'visible' : 'hidden'} variants={fadeUp}>
          <motion.div className={styles.breakdownInner} variants={fadeUp}>
            <h2>Global Reach</h2>
            <motion.div className={styles.breakdownGrid} variants={staggerContainer}>
              {[
                { flag: '🇺🇸', count: usaCount, label: 'USA Clients' },
                { flag: '🇬🇧', count: ukCount, label: 'UK Clients' },
                { flag: '🇦🇺', count: auCount, label: 'Australia Clients' },
                { flag: '🌍', count: '60+', label: 'Countries Total' },
              ].map((item, i) => (
                <motion.div key={i} className={styles.breakdownItem} variants={spring}
                  whileHover={{ y: -4, borderColor: '#fdb840', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
                  <span className={styles.breakdownFlag}>{item.flag}</span>
                  <span className={styles.breakdownNumber}>{item.count}</span>
                  <span className={styles.breakdownLabel}>{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.section className={styles.ctaSection} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeUp}>
          <motion.div className={styles.ctaContent} variants={fadeUp}>
            <h2>Ready to Join Our Client Roster?</h2>
            <p>Let's talk about how we can help your organization grow with data.</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className={styles.ctaButton}>
                Become a Client <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

      </main>

      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button className={homeStyles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.5, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.08, backgroundColor: '#fdb840', color: '#fff' }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}>
            <ChevronLeft size={18} style={{ transform: 'rotate(90deg)' }} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientsPage;
