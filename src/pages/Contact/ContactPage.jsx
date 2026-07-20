// src/pages/Contact/ContactPage.jsx
import {
  CheckCircle, Mail, MapPin, Phone, Send, ChevronUp, Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ContactPage.module.css";
import hStyles from "../Home/HomePage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { apiService } from "../../services/api";

// ─── Motion variants ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const slideL = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const slideR = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const REPLAY_VIEWPORT = { once: false, amount: 0.15 };

const TYPED_WORDS = [
  "a Free Consultation",
  "Real Business Results",
  "a Clear Data Roadmap",
  "Measurable ROI",
  "Your Competitive Advantage",
];

// ─── Offices ──────────────────────────────────────────────────────
const OFFICES = [
  {
    label: "US Office",
    value: "1024 Iron Point Road, Suite 200\nFolsom, California 95630\nUS: +1 (757) 598-0582",
  },
  {
    label: "UK Office",
    value: "60 Cannon Street\nLondon EC4N 6NP, United Kingdom\nUK: +44 7454 744014",
  },
  {
    label: "Canada Office",
    value: "400 Centre Street South\nWhitby, ON L1N 0G4, Canada",
  },
  {
    label: "Pakistan Office",
    value: "9th Floor, Tricon Corporate Centre\n73 Jail Road, Gulberg\nLahore 54000, Pakistan",
  },
  {
    label: "Nairobi Office",
    value: "Global Trade Centre, 14th Floor\nWestlands Road, Nairobi, Kenya\nKE: +254 718 889 559",
  },
];

export default function ContactPage() {
  const formRef     = useRef(null);
  const successRef  = useRef(null);

  const [showTop,   setShowTop]   = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState(null);
  const [particles, setParticles] = useState([]);
  const [ripples,   setRipples]   = useState([]);
  const [typedText, setTypedText] = useState("");
  const [wordIdx,   setWordIdx]   = useState(0);
  const [pulse,     setPulse]     = useState(false);

  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", service: "", message: "",
  });

  // ── Scroll to top on mount ────────────────────────────────────
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);

  // ── Show/hide scroll-to-top button ───────────────────────────
  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // ── Floating particles ────────────────────────────────────────
  useEffect(() => {
    setParticles(Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 12 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.25 + 0.05,
    })));
  }, []);

  // ── Typewriter ────────────────────────────────────────────────
  useEffect(() => {
    let i = 0;
    const word = TYPED_WORDS[wordIdx];
    setTypedText("");
    const iv = setInterval(() => {
      setTypedText(word.slice(0, i + 1));
      i++;
      if (i >= word.length) {
        clearInterval(iv);
        setTimeout(() => setWordIdx(p => (p + 1) % TYPED_WORDS.length), 2000);
      }
    }, 65);
    return () => clearInterval(iv);
  }, [wordIdx]);

  // ── Periodic pulse on form ────────────────────────────────────
  useEffect(() => {
    const iv = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  // ── Scroll to top when success state appears ──────────────────
  useEffect(() => {
    if (!submitted) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }, [submitted]);

  // ── Handlers ─────────────────────────────────────────────────
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const addRipple = useCallback((e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples(p => [...p, { id, x: e.clientX - r.left, y: e.clientY - r.top }]);
    setTimeout(() => setRipples(p => p.filter(r => r.id !== id)), 700);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await apiService.submitLead(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
    } catch (err) {
      setError(
        err.message ||
        "Failed to send message. Please email us directly at info@scapedatasolutions.com",
      );
    } finally {
      setLoading(false);
    }
  };

  // ─── Render ───────────────────────────────────────────────────
  return (
    <div className={hStyles.page}>
      <Helmet>
        <title>Contact Us | Get Free Data Consultation - Scape Data Solutions</title>
        <meta
          name="description"
          content="Contact Scape Data Solutions for a free consultation. Offices in the US, Canada, Pakistan, and Nairobi. Email: info@scapedatasolutions.com. 24-hour response time."
        />
        <link rel="canonical" href="https://www.scapedatasolutions.com/contact" />
      </Helmet>

      <Navbar activeNav="contact" />

      <main className={hStyles.mainContent} style={{ paddingTop: "0" }}>
        <div className={styles.container}>

          {submitted ? (
            /* ─── SUCCESS STATE ─────────────────────────────── */
            <motion.section
              ref={successRef}
              className={styles.successSection}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{ paddingTop: "40px", paddingBottom: "60px" }}
            >
              <div className={styles.successContent}>
                <motion.div
                  className={styles.successIcon}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 350, delay: 0.2 }}
                >
                  <CheckCircle size={64} />
                </motion.div>

                <motion.h1 className={styles.successTitle} variants={slideL}>
                  Message Received!
                </motion.h1>

                <motion.p className={styles.successText} variants={fadeUp}>
                  Thank you for reaching out! We've received your message and will
                  get back to you within 24 hours.
                </motion.p>

                <motion.div className={styles.nextSteps} variants={fadeUp}>
                  <h3>What happens next?</h3>
                  <ul>
                    {[
                      "We'll review your inquiry",
                      "A team member will reach out within 24 hours",
                      "We'll schedule a free consultation call",
                      "You'll receive a custom proposal",
                    ].map((s, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.3 + i * 0.12,
                          type: "spring",
                          stiffness: 280,
                        }}
                      >
                        {s}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.a
                  href="/"
                  className={styles.homeButton}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03, backgroundColor: "#1a1a2e", color: "#fdb840" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Return to Home
                </motion.a>
              </div>
            </motion.section>

          ) : (
            <>
              {/* ─── HERO ──────────────────────────────────── */}
              <motion.section
                className={styles.hero}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >
                {/* Floating particles */}
                <div
                  style={{
                    position: "absolute", inset: 0, zIndex: 1,
                    pointerEvents: "none", overflow: "hidden",
                  }}
                >
                  {particles.map((p, i) => (
                    <motion.div
                      key={i}
                      style={{
                        position: "absolute",
                        left: `${p.x}%`, top: `${p.y}%`,
                        width: p.size, height: p.size,
                        borderRadius: "50%",
                        backgroundColor: "#fdb840",
                        opacity: p.opacity,
                      }}
                      animate={{
                        y: [0, -28, 0], x: [0, 12, 0],
                        opacity: [p.opacity, p.opacity * 3.5, p.opacity],
                      }}
                      transition={{
                        duration: p.duration, delay: p.delay,
                        repeat: Infinity, ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>

                <div className={styles.heroContent}>
                  <motion.div
                    className={hStyles.heroBadge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ marginBottom: 16 }}
                  >
                    <Sparkles size={13} /> Free Consultation
                  </motion.div>

                  <motion.h1 className={styles.heroTitle} variants={slideL}>
                    Let's Start a Conversation
                  </motion.h1>

                  <motion.p className={styles.heroSubtitle} variants={fadeUp}>
                    Ready to transform your data into your biggest competitive advantage?
                    Schedule a free consultation with our team.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 8,
                      marginTop: 18, fontSize: 13.5,
                      color: "rgba(255,255,255,0.85)",
                      fontFamily: "monospace",
                    }}
                  >
                    <span style={{ color: "#fdb840", fontSize: 12 }}>›</span>
                    Book&nbsp;
                    <span style={{ color: "#fdb840", fontWeight: 700 }}>
                      {typedText}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.75, repeat: Infinity }}
                        style={{ marginLeft: 1 }}
                      >|</motion.span>
                    </span>
                  </motion.div>
                </div>
              </motion.section>

              {/* ─── CONTACT GRID ──────────────────────────── */}
              <section className={styles.contactSection}>
                <div className={styles.sectionContent}>
                  <div className={styles.contactGrid}>

                    {/* ── LEFT: Info ── */}
                    <motion.div
                      className={styles.contactInfo}
                      initial="hidden" whileInView="visible"
                      viewport={REPLAY_VIEWPORT} variants={slideL}
                    >
                      <h2 className={styles.infoTitle}>Get in Touch</h2>
                      <p className={styles.infoText}>
                        We respond to all inquiries within 24 hours. Let's discuss
                        how we can help solve your data challenges.
                      </p>

                      <div className={styles.contactMethods}>
                        {[
                          {
                            icon: <Mail size={17} />,
                            label: "Email",
                            value: "info@scapedatasolutions.com\nallan@scapedatasolutions.com",
                          },
                          {
                            icon: <Phone size={17} />,
                            label: "Phone",
                            value: "US: +1 (757) 598-0582\nUK: +44 7454 744014",
                          },
                        ].map((m, i) => (
                          <motion.div
                            key={i}
                            className={styles.contactMethod}
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={REPLAY_VIEWPORT}
                            transition={{ delay: i * 0.12, type: "spring", stiffness: 260 }}
                          >
                            <motion.div
                              className={styles.methodIcon}
                              whileHover={{
                                scale: 1.12,
                                backgroundColor: "#fdb840",
                                color: "#fff",
                                borderColor: "#fdb840",
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              {m.icon}
                            </motion.div>
                            <div>
                              <div className={styles.methodLabel}>{m.label}</div>
                              <div className={styles.methodValue}>
                                {m.value.split("\n").map((l, j) => (
                                  <span key={j} style={{ display: "block" }}>{l}</span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* ── What to Expect ── */}
                      <motion.div
                        className={styles.benefits}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={REPLAY_VIEWPORT}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className={styles.benefitsTitle}>What to Expect:</h3>
                        <ul className={styles.benefitsList}>
                          {[
                            "Free 30-minute consultation",
                            "Custom solution proposal",
                            "No obligation quote",
                            "Response within 24 hours",
                          ].map((b, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -12 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={REPLAY_VIEWPORT}
                              transition={{ delay: 0.4 + i * 0.1 }}
                            >
                              {b}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>

                    {/* ── RIGHT: Form ── */}
                    <motion.div
                      className={styles.formContainer}
                      ref={formRef}
                      initial="hidden" whileInView="visible"
                      viewport={REPLAY_VIEWPORT} variants={slideR}
                      animate={
                        pulse
                          ? { boxShadow: "0 0 0 3px rgba(253,184,64,0.35)" }
                          : { boxShadow: "none" }
                      }
                      transition={{ duration: 0.4 }}
                    >
                      <form onSubmit={handleSubmit} className={styles.form}>

                        {/* Live "agent online" bar */}
                        <motion.div
                          style={{
                            display: "flex", alignItems: "center", gap: 8,
                            fontSize: 11.5, color: "#555",
                            paddingBottom: 10,
                            borderBottom: "1px solid #f0f0f0",
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <motion.span
                            style={{
                              width: 7, height: 7, borderRadius: "50%",
                              backgroundColor: "#00e676", display: "inline-block",
                            }}
                            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.4, repeat: Infinity }}
                          />
                          Our team is online and ready to help
                        </motion.div>

                        <AnimatePresence>
                          {error && (
                            <motion.div
                              className={styles.errorBox}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                            >
                              {error}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Name + Email */}
                        {[
                          { label: "Full Name *",      name: "name",  type: "text",  placeholder: "John Doe",          required: true },
                          { label: "Email Address *",  name: "email", type: "email", placeholder: "john@company.com",  required: true },
                        ].map((f, i) => (
                          <motion.div
                            key={i}
                            className={styles.formGroup}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={REPLAY_VIEWPORT}
                            transition={{ delay: 0.1 + i * 0.08 }}
                          >
                            <label className={styles.label}>{f.label}</label>
                            <input
                              type={f.type}
                              name={f.name}
                              value={formData[f.name]}
                              onChange={handleChange}
                              className={styles.input}
                              required={f.required}
                              placeholder={f.placeholder}
                            />
                          </motion.div>
                        ))}

                        {/* Company + Phone */}
                        <motion.div
                          className={styles.formRow}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={REPLAY_VIEWPORT}
                          transition={{ delay: 0.25 }}
                        >
                          <div className={styles.formGroup}>
                            <label className={styles.label}>Company</label>
                            <input
                              type="text" name="company"
                              value={formData.company} onChange={handleChange}
                              className={styles.input} placeholder="Your Company"
                            />
                          </div>
                          <div className={styles.formGroup}>
                            <label className={styles.label}>Phone</label>
                            <input
                              type="tel" name="phone"
                              value={formData.phone} onChange={handleChange}
                              className={styles.input} placeholder="+1 2712 345 678"
                            />
                          </div>
                        </motion.div>

                        {/* Service select */}
                        <motion.div
                          className={styles.formGroup}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={REPLAY_VIEWPORT}
                          transition={{ delay: 0.32 }}
                        >
                          <label className={styles.label}>What can we help you with? *</label>
                          <select
                            name="service" value={formData.service}
                            onChange={handleChange} className={styles.select} required
                          >
                            <option value="">Select an area...</option>
                            {[
                              "I want to understand my business data better",
                              "I need a dashboard or reporting system",
                              "I want to predict customer behaviour or sales",
                              "I need help automating decisions with data",
                              "I want to improve my marketing with data",
                              "I need to clean up or organise my data",
                              "I want to reduce costs using data insights",
                              "I need a data strategy for my business",
                              "I'm not sure — I just know data can help me",
                            ].map(o => <option key={o} value={o}>{o}</option>)}
                          </select>
                        </motion.div>

                        {/* Message */}
                        <motion.div
                          className={styles.formGroup}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={REPLAY_VIEWPORT}
                          transition={{ delay: 0.38 }}
                        >
                          <label className={styles.label}>Tell Us About Your Project *</label>
                          <textarea
                            name="message" value={formData.message}
                            onChange={handleChange} className={styles.textarea}
                            required rows={4}
                            placeholder="Tell us about your data challenges, goals, and what you're hoping to achieve..."
                          />
                        </motion.div>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          className={styles.submitButton}
                          disabled={loading}
                          onClick={!loading ? addRipple : undefined}
                          style={{ position: "relative", overflow: "hidden" }}
                          whileHover={
                            !loading
                              ? { scale: 1.02, backgroundColor: "#1a1a2e", color: "#fdb840", borderColor: "#1a1a2e" }
                              : {}
                          }
                          whileTap={!loading ? { scale: 0.97 } : {}}
                        >
                          {ripples.map(r => (
                            <motion.span
                              key={r.id}
                              style={{
                                position: "absolute", borderRadius: "50%",
                                width: 140, height: 140,
                                left: r.x - 70, top: r.y - 70,
                                backgroundColor: "rgba(255,255,255,0.25)",
                                pointerEvents: "none",
                              }}
                              initial={{ scale: 0, opacity: 1 }}
                              animate={{ scale: 2.5, opacity: 0 }}
                              transition={{ duration: 0.65, ease: "easeOut" }}
                            />
                          ))}
                          {loading ? (
                            <>
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                style={{
                                  display: "inline-block", width: 16, height: 16,
                                  border: "2px solid #1a1a2e",
                                  borderTopColor: "transparent", borderRadius: "50%",
                                }}
                              />
                              Processing...
                            </>
                          ) : (
                            <><Send size={16} /> Send Message</>
                          )}
                        </motion.button>

                        <p className={styles.privacy}>
                          By submitting this form, you agree to our privacy policy.
                          We'll never share your information.
                        </p>
                      </form>
                    </motion.div>

                  </div>
                </div>
              </section>

              {/* ─── OFFICES SECTION ── */}
              <section className={styles.contactSection} style={{ paddingTop: 0 }}>
                <div className={styles.sectionContent}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={REPLAY_VIEWPORT}
                    transition={{ delay: 0.1 }}
                  >
                    <h2
                      className={styles.infoTitle}
                      style={{ marginBottom: 24, textAlign: "center" }}
                    >
                      Our Offices
                    </h2>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: "16px",
                      }}
                    >
                      {OFFICES.map((o, i) => (
                        <motion.div
                          key={o.label}
                          className={styles.contactMethod}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={REPLAY_VIEWPORT}
                          transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 260 }}
                          style={{ alignItems: "flex-start" }}
                        >
                          <motion.div
                            className={styles.methodIcon}
                            whileHover={{
                              scale: 1.12,
                              backgroundColor: "#fdb840",
                              color: "#fff",
                              borderColor: "#fdb840",
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <MapPin size={17} />
                          </motion.div>
                          <div>
                            <div className={styles.methodLabel}>{o.label}</div>
                            <div className={styles.methodValue}>
                              {o.value.split("\n").map((l, j) => (
                                <span key={j} style={{ display: "block" }}>{l}</span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>

            </>
          )}

        </div>
      </main>

      <Footer />

      {/* ─── Scroll to Top ───────────────────────────────────────── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className={hStyles.scrollTop}
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
}