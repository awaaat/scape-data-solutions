// src/pages/TestimonialsPage.jsx
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Users,
} from 'lucide-react';
import styles from './TestimonialsPage.module.css';
import homeStyles from '../Home/HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// ─── 16 Real Testimonials ──────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Omar AlQabandi",
    role: "CEO",
    company: "BilBio Kuwait",
    img: "/scape_data_files/Omar-AlQabandi.webp",
    quote:
      "The team delivered on time and on budget, with quality work. A true partner who understands our business.",
    rating: 5,
  },
  {
    name: "Nathan French",
    role: "Director of I.T. / Marketing",
    company: "Treaterpro.com",
    img: "/scape_data_files/nathan.webp",
    quote:
      "The best team I've worked with for complex projects. They deliver results, not excuses.",
    rating: 5,
  },
  {
    name: "Edward Mazzer",
    role: "CEO",
    company: "Tesi Group (Italy)",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "They understood our business needs and executed flawlessly on our data integration project.",
    rating: 5,
  },
  {
    name: "Charles Johnson",
    role: "CEO",
    company: "BidLock, LLC",
    img: "/scape_data_files/charles_johnson.webp",
    quote:
      "Phenomenal team. Professional, patient, and truly the best in the business.",
    rating: 5,
  },
  {
    name: "Pedro Madeira Gomes",
    role: "CEO",
    company: "GoGuess, Portugal",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "Reliable, effective, and trustworthy. They understand our business needs and communicate clearly.",
    rating: 5,
  },
  {
    name: "Paul Duhamel",
    role: "CEO",
    company: "Duhamel Psychology",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "Professional, cooperative, and delivered beyond expectations. Highly recommended.",
    rating: 5,
  },
  {
    name: "Jessica Hoff",
    role: "CEO",
    company: "ID Solutions",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "Timely communication and exceptional service. A true partner, not just a vendor.",
    rating: 5,
  },
  {
    name: "Mike Carlson",
    role: "CEO",
    company: "Luxxle App",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "The best team I've worked with. Outstanding professionalism and technical expertise.",
    rating: 5,
  },
  {
    name: "Heather Atencio",
    role: "CEO",
    company: "Valley King Properties",
    img: "/scape_data_files/heather.webp",
    quote:
      "We've worked with them for over 2 years on a complex project. They're integral to our success.",
    rating: 5,
  },
  {
    name: "Joshua DuBois",
    role: "CEO",
    company: "Aerocast LLC",
    img: "/scape_data_files/joshua.webp",
    quote:
      "One of the best teams we've worked with. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechCorp Global",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "Their data engineering expertise helped us scale our platform to handle 10x the traffic without a hitch.",
    rating: 5,
  },
  {
    name: "James Park",
    role: "VP of Analytics",
    company: "FinanceHub Inc",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "We reduced our reporting time from days to hours. Their dashboards are a game-changer.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    company: "HealthTech Solutions",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "Our patient analytics went from zero to hero. The team built a solution that our doctors actually use.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Director of Operations",
    company: "RetailMax",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "We saw a 35% increase in conversion within weeks of implementing their recommendation engine.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "CIO",
    company: "Industrial Leader",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "They cut our downtime by 70% with predictive maintenance. The ROI was immediate.",
    rating: 5,
  },
  {
    name: "David Kimani",
    role: "CEO",
    company: "CloudMatrix Solutions",
    img: "/scape_data_files/tesi_img.webp",
    quote:
      "A truly global team that delivers top‑tier results. We've partnered with them on multiple projects.",
    rating: 5,
  },
];

const TestimonialsPage = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: 'instant' }), []);

  const [index, setIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);

  // Scroll‑to‑top button visibility
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto‑rotate carousel
  useEffect(() => {
    const iv = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(iv);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className={homeStyles.page}>
      <Helmet>
        <title>Testimonials | Scape Data Solutions</title>
        <meta name="description" content="Real stories from real businesses that have grown with Scape Data Solutions." />
      </Helmet>

      <Navbar activeNav="testimonials" />

      {/* ─── MAIN CONTENT ──────────────────────────────────────────── */}
      <main className={homeStyles.mainContent}>
        {/* Hero with dual images */}
        <motion.section
          className={styles.hero}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ backgroundImage: 'url(/scape_data_files/Testimonials-Blog3-01.jpg)' }}
        >
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Users size={14} /> 16+ Clients & Partners
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              What Our <span className={styles.highlight}>Clients Say</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Real stories from real businesses that have grown with Scape Data Solutions.
            </motion.p>
          </div>
          {/* Floating second hero image */}
          <motion.img
            src="/scape_data_files/Customer-Testimonials-SMB.webp"
            alt="Customer testimonials illustration"
            className={styles.heroImageFloat}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.03, rotate: 1 }}
          />
        </motion.section>

        {/* Carousel (desktop) */}
        <section className={styles.carouselSection}>
          <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
              <motion.button
                className={styles.carouselArrow}
                onClick={prev}
                whileHover={{ scale: 1.1, backgroundColor: '#fdb840', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className={styles.carouselSlide}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <div className={styles.carouselCard}>
                    <div className={styles.carouselTop}>
                      <motion.img
                        src={TESTIMONIALS[index].img}
                        alt={TESTIMONIALS[index].name}
                        className={styles.carouselAvatar}
                        whileHover={{ scale: 1.05, borderColor: '#fdb840' }}
                        onError={(e) => { e.target.src = '/scape_data_files/tesi_img.webp'; }} // fallback
                      />
                      <div>
                        <strong className={styles.carouselName}>
                          {TESTIMONIALS[index].name}
                        </strong>
                        <p className={styles.carouselRole}>
                          {TESTIMONIALS[index].role} — {TESTIMONIALS[index].company}
                        </p>
                        <div className={styles.carouselStars}>
                          {[...Array(TESTIMONIALS[index].rating)].map((_, i) => (
                            <Star key={i} size={16} fill="#fdb840" color="#fdb840" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className={styles.carouselQuote}>
                      “{TESTIMONIALS[index].quote}”
                    </blockquote>
                    <div className={styles.carouselFooter}>
                      <span className={styles.carouselCount}>
                        {index + 1} / {TESTIMONIALS.length}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <motion.button
                className={styles.carouselArrow}
                onClick={next}
                whileHover={{ scale: 1.1, backgroundColor: '#fdb840', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            <div className={styles.carouselDots}>
              {TESTIMONIALS.map((_, i) => (
                <motion.button
                  key={i}
                  className={`${styles.carouselDot} ${i === index ? styles.activeDot : ''}`}
                  onClick={() => setIndex(i)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Grid of all testimonials */}
        <motion.section
          className={styles.gridSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeUp}
        >
          <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
            All Testimonials
            <motion.span className={styles.titleUnderline} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3 }} />
          </motion.h2>

          <motion.div className={styles.testimonialGrid} variants={stagger}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                className={styles.testimonialCard}
                variants={cardVariant}
                whileHover={{
                  y: -6,
                  borderColor: '#fdb840',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.06)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className={styles.cardTop}>
                  <motion.img
                    src={t.img}
                    alt={t.name}
                    className={styles.cardAvatar}
                    whileHover={{ scale: 1.05 }}
                    onError={(e) => { e.target.src = '/scape_data_files/tesi_img.webp'; }}
                  />
                  <div>
                    <h4 className={styles.cardName}>{t.name}</h4>
                    <p className={styles.cardRole}>{t.role} — {t.company}</p>
                    <div className={styles.cardStars}>
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={13} fill="#fdb840" color="#fdb840" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={styles.cardQuote}>“{t.quote}”</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
        >
          <motion.div className={styles.ctaContent} variants={fadeUp}>
            <h2>Ready to Join Our Satisfied Clients?</h2>
            <p>Let’s talk about how we can help your organization grow with data.</p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className={styles.ctaButton}>
                Start Your Project <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <Footer />

      {/* Scroll to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className={homeStyles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.08, backgroundColor: "#fdb840", color: "#fff" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialsPage;