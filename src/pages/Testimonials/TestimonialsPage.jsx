import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ChevronUp,
  Users,
  Quote,
  Star,
  Briefcase,
  Smile,
  Award,
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './TestimonialsPage.module.css';
import homeStyles from '../Home/HomePage.module.css';

// ─── 16 Testimonials ──────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: 1,
    name: "Omar AlQabandi",
    role: "CEO",
    company: "BilBio Kuwait",
    img: "/Images/site-images/Omar-AlQabandi.webp",
    quote:
      "The team delivered on time and on budget, with quality work. A true partner who understands our business.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nathan French",
    role: "Director of I.T. / Marketing",
    company: "Treaterpro.com",
    img: "/Images/site-images/nathan.webp",
    quote:
      "The best team I've worked with for complex projects. They deliver results, not excuses.",
    rating: 5,
  },
  {
    id: 3,
    name: "Edward Mazzer",
    role: "CEO",
    company: "Tesi Group (Italy)",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "They understood our business needs and executed flawlessly on our data integration project.",
    rating: 5,
  },
  {
    id: 4,
    name: "Charles Johnson",
    role: "CEO",
    company: "BidLock, LLC",
    img: "/Images/site-images/charles_johnson.webp",
    quote:
      "Phenomenal team. Professional, patient, and truly the best in the business.",
    rating: 5,
  },
  {
    id: 5,
    name: "Pedro Madeira Gomes",
    role: "CEO",
    company: "GoGuess, Portugal",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "Reliable, effective, and trustworthy. They understand our business needs and communicate clearly.",
    rating: 5,
  },
  {
    id: 6,
    name: "Paul Duhamel",
    role: "CEO",
    company: "Duhamel Psychology",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "Professional, cooperative, and delivered beyond expectations. Highly recommended.",
    rating: 5,
  },
  {
    id: 7,
    name: "Jessica Hoff",
    role: "CEO",
    company: "ID Solutions",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "Timely communication and exceptional service. A true partner, not just a vendor.",
    rating: 5,
  },
  {
    id: 8,
    name: "Mike Carlson",
    role: "CEO",
    company: "Luxxle App",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "The best team I've worked with. Outstanding professionalism and technical expertise.",
    rating: 5,
  },
  {
    id: 9,
    name: "Heather Atencio",
    role: "CEO",
    company: "Valley King Properties",
    img: "/Images/site-images/heather.webp",
    quote:
      "We've worked with them for over 2 years on a complex project. They're integral to our success.",
    rating: 5,
  },
  {
    id: 10,
    name: "Joshua DuBois",
    role: "CEO",
    company: "Aerocast LLC",
    img: "/Images/site-images/joshua.webp",
    quote:
      "One of the best teams we've worked with. Highly recommended.",
    rating: 5,
  },
  {
    id: 11,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechCorp Global",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "Their data engineering expertise helped us scale our platform to handle 10x the traffic without a hitch.",
    rating: 5,
  },
  {
    id: 12,
    name: "James Park",
    role: "VP of Analytics",
    company: "FinanceHub Inc",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "We reduced our reporting time from days to hours. Their dashboards are a game-changer.",
    rating: 5,
  },
  {
    id: 13,
    name: "Emily Watson",
    role: "Head of Product",
    company: "HealthTech Solutions",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "Our patient analytics went from zero to hero. The team built a solution that our doctors actually use.",
    rating: 5,
  },
  {
    id: 14,
    name: "Michael Rodriguez",
    role: "Director of Operations",
    company: "RetailMax",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "We saw a 35% increase in conversion within weeks of implementing their recommendation engine.",
    rating: 5,
  },
  {
    id: 15,
    name: "Lisa Thompson",
    role: "CIO",
    company: "Industrial Leader",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "They cut our downtime by 70% with predictive maintenance. The ROI was immediate.",
    rating: 5,
  },
  {
    id: 16,
    name: "David Kimani",
    role: "CEO",
    company: "CloudMatrix Solutions",
    img: "/Images/site-images/tesi_img.webp",
    quote:
      "A truly global team that delivers top‑tier results. We've partnered with them on multiple projects.",
    rating: 5,
  },
];

// ─── Animation variants ────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: (direction) => ({
    x: direction < 0 ? 60 : -60,
    opacity: 0,
    transition: { duration: 0.4, ease: 'easeIn' },
  }),
};

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

const gridItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

// ─── Component ──────────────────────────────────────────────────────
const TestimonialsPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const timerRef = useRef(null);

  const total = TESTIMONIALS.length;

  // Auto‑play – 4 seconds
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [isPaused, total]);

  // Scroll‑to‑top button
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    clearInterval(timerRef.current);
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
    clearInterval(timerRef.current);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    clearInterval(timerRef.current);
  };

  const current = TESTIMONIALS[currentIndex];

  // Stats data
  const stats = [
    { icon: <Users size={24} />, value: '200+', label: 'Clients Worldwide' },
    { icon: <Smile size={24} />, value: '98%', label: 'Satisfaction Rate' },
    { icon: <Award size={24} />, value: '4.9/5', label: 'Average Rating' },
    { icon: <Briefcase size={24} />, value: '200+', label: 'Projects Delivered' },
  ];

  // Star color – typical yellow/gold
  const starColor = "#FDB840";

  return (
    <div className={homeStyles.page}>
      <SEO
        title="Testimonials | Scape Data Solutions"
        description="Real stories from real businesses that have grown with Scape Data Solutions."
        path="/testimonials"
      />

      <Navbar activeNav="testimonials" />

      <main className={homeStyles.mainContent}>
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroBadge}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
            >
              <Users size={14} /> {total}+ Clients & Partners
            </motion.div>
            <motion.h1
              className={styles.heroTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
            >
              What Our <span className={styles.highlight}>Clients Say</span>
            </motion.h1>
            <motion.p
              className={styles.heroSub}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
            >
              Real stories from real businesses that have grown with Scape Data Solutions.
            </motion.p>
          </div>
        </section>

        {/* ─── STATS ────────────────────────────────────────────────── */}
        <motion.section
          className={styles.statsSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className={homeStyles.container}>
            <div className={styles.statsGrid}>
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className={styles.statCard}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}
                >
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ─── SLIDER ────────────────────────────────────────────────── */}
        <section className={styles.sliderSection}>
          <div className={styles.sliderContainer}>
            <motion.h2
              className={styles.sectionTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeUp}
            >
              Featured Testimonials
            </motion.h2>

            <div
              className={styles.sliderWrapper}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className={styles.slide}
                >
                  <div className={styles.testimonialCard}>
                    <div className={styles.quoteIcon}>
                      <Quote size={32} strokeWidth={1.5} />
                    </div>

                    <blockquote className={styles.quote}>
                      “{current.quote}”
                    </blockquote>

                    <div className={styles.author}>
                      <motion.img
                        src={current.img}
                        alt={current.name}
                        className={styles.avatar}
                        onError={(e) => {
                          e.target.src = '/Images/site-images/tesi_img.webp';
                        }}
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className={styles.authorInfo}>
                        <strong className={styles.authorName}>{current.name}</strong>
                        <span className={styles.authorRole}>
                          {current.role} — {current.company}
                        </span>
                        <div className={styles.stars}>
                          {[...Array(current.rating)].map((_, i) => (
                            <Star key={i} size={14} fill={starColor} color={starColor} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                className={`${styles.arrow} ${styles.arrowLeft}`}
                onClick={prev}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className={`${styles.arrow} ${styles.arrowRight}`}
                onClick={next}
                aria-label="Next"
              >
                ›
              </button>
            </div>

            <div className={styles.dots}>
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${idx === currentIndex ? styles.dotActive : ''}`}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className={styles.counter}>
              {currentIndex + 1} / {total}
            </div>
          </div>
        </section>

        {/* ─── ALL TESTIMONIALS GRID ──────────────────────────────── */}
        <motion.section
          className={styles.gridSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeUp}
        >
          <div className={homeStyles.container}>
            <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
              All Testimonials
            </motion.h2>

            <motion.div
              className={styles.testimonialGrid}
              variants={staggerGrid}
            >
              {TESTIMONIALS.map((t) => (
                <motion.div
                  key={t.id}
                  className={styles.gridCard}
                  variants={gridItem}
                  whileHover={{
                    y: -4,
                    borderColor: '#000',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  }}
                >
                  <div className={styles.gridCardTop}>
                    <img
                      src={t.img}
                      alt={t.name}
                      className={styles.gridAvatar}
                      onError={(e) => {
                        e.target.src = '/Images/site-images/tesi_img.webp';
                      }}
                    />
                    <div>
                      <h3 className={styles.gridName}>{t.name}</h3>
                      <p className={styles.gridRole}>{t.role} — {t.company}</p>
                      <div className={styles.gridStars}>
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={13} fill={starColor} color={starColor} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={styles.gridQuote}>“{t.quote}”</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ─── CTA ──────────────────────────────────────────────────── */}
        <motion.section
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className={styles.ctaContent}>
            <h2>Ready to Join Our Satisfied Clients?</h2>
            <p>Let's talk about how we can help your organization grow with data.</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className={styles.ctaButton}>
                Start Your Project <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />

      {/* ─── Scroll to Top ──────────────────────────────────────────── */}
      {showTop && (
        <motion.button
          className={homeStyles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.08, backgroundColor: '#000', color: '#fff' }}
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </div>
  );
};

export default TestimonialsPage;