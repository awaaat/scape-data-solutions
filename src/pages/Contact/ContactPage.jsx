// src/pages/ContactPage.jsx
import {
  CheckCircle, Mail, MapPin, Phone, Send, ChevronUp
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ContactPage.module.css";
import hStyles from "../Home/HomePage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { apiService } from "../../services/api";

// ─── Motion variants ──────────────────────────────────────────────
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

export default function ContactPage() {
  const formRef = useRef(null);

  const [showTop, setShowTop] = useState(false);

  const [formData, setFormData] = useState({
    name: "", email: "", company: "", phone: "", service: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ─── Effects ──────────────────────────────────────────────────
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Handlers ──────────────────────────────────────────────────
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Single source of truth: the backend handles the user confirmation
      // email, the internal team notification, and the Brevo sync — all
      // server-side, fire-and-forget, on this one call.
      await apiService.submitLead(formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
    } catch (err) {
      setError(err.message || "Failed to send message. Please email us directly at info@scapedatasolutions.com");
    } finally {
      setLoading(false);
    }
  };

  // ─── Render ────────────────────────────────────────────────────
  return (
    <div className={hStyles.page}>
      <Helmet>
        <title>Contact Us | Get Free Data Consultation - Scape Data Solutions</title>
        <meta name="description" content="Contact Scape Data Solutions for a free consultation. Located in Westlands, Nairobi. Email: info@scapedatasolutions.com. 24-hour response time." />
        <link rel="canonical" href="https://scapedatasolutions.com/contact" />
      </Helmet>

      <Navbar activeNav="contact" />

      {/* ─── MAIN CONTENT ──────────────────────────────────────────── */}
      <main className={hStyles.mainContent} style={{ paddingTop: "80px" }}>

        <div className={styles.container}>

          {submitted ? (
            // ─── Success State ──────────────────────────────────
            <motion.section
              className={styles.successSection}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{ paddingTop: "40px", paddingBottom: "60px" }}
            >
              <div className={styles.successContent}>
                <motion.div
                  className={styles.successIcon}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 350, delay: 0.2 }}
                >
                  <CheckCircle size={64} />
                </motion.div>
                <motion.h1 className={styles.successTitle} variants={slideL}>
                  Message Received!
                </motion.h1>
                <motion.p className={styles.successText} variants={fadeUp}>
                  Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                </motion.p>
                <motion.div className={styles.nextSteps} variants={fadeUp}>
                  <h3>What happens next?</h3>
                  <ul>
                    {[
                      "We'll review your inquiry",
                      "A team member will reach out within 24 hours",
                      "We'll schedule a free consultation call",
                      "You'll receive a custom proposal"
                    ].map((s, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
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
                  whileHover={{ backgroundColor: "#1d4ed8", transform: "translateY(-2px)" }}
                >
                  Return to Home
                </motion.a>
              </div>
            </motion.section>
          ) : (
            // ─── Contact Form ────────────────────────────────────
            <>
              {/* Hero */}
              <motion.section className={styles.hero} initial="hidden" animate="visible" variants={fadeUp}>
                <div className={styles.heroContent}>
                  <motion.div className={hStyles.heroBadge} variants={fadeUp} style={{ marginBottom: 16 }}>
                    <Mail size={13} /> Free Consultation
                  </motion.div>
                  <motion.h1 className={styles.heroTitle} variants={slideL}>Let's Start a Conversation</motion.h1>
                  <motion.p className={styles.heroSubtitle} variants={fadeUp}>
                    Ready to transform your data into your biggest competitive advantage?
                    Schedule a free consultation with our team.
                  </motion.p>
                </div>
              </motion.section>

              {/* Contact Grid */}
              <section className={styles.contactSection}>
                <div className={styles.sectionContent}>
                  <div className={styles.contactGrid}>

                    {/* Info */}
                    <motion.div
                      className={styles.contactInfo}
                      initial="hidden"
                      whileInView="visible"
                      viewport={REPLAY_VIEWPORT}
                      variants={slideL}
                    >
                      <h2 className={styles.infoTitle}>Get in Touch</h2>
                      <p className={styles.infoText}>
                        We respond to all inquiries within 24 hours. Let's discuss how we can help solve your data challenges.
                      </p>
                      <div className={styles.contactMethods}>
                        {[
                          { icon: <Mail size={24} />, label: "Email", value: "info@scapedatasolutions.com\nscapedatasolutions@gmail.com" },
                          { icon: <MapPin size={24} />, label: "Office", value: "Delta Corner Tower (Chiromo Road) Westlands, Nairobi" },
                          { icon: <Phone size={24} />, label: "Phone", value: "+1 (312) 212-3396\n+92 (300) 159-6662" },
                        ].map((m, i) => (
                          <motion.div
                            key={i}
                            className={styles.contactMethod}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={REPLAY_VIEWPORT}
                            transition={{ delay: i * 0.1 }}
                          >
                            <motion.div
                              className={styles.methodIcon}
                              whileHover={{ scale: 1.1, backgroundColor: "#fdb840", color: "#fff" }}
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
                      <motion.div
                        className={styles.benefits}
                        initial={{ opacity: 0, y: 20 }}
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
                            "Response within 24 hours"
                          ].map((b, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
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

                    {/* Form */}
                    <motion.div
                      className={styles.formContainer}
                      ref={formRef}
                      initial="hidden"
                      whileInView="visible"
                      viewport={REPLAY_VIEWPORT}
                      variants={slideR}
                    >
                      <form onSubmit={handleSubmit} className={styles.form}>
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

                        {[
                          { label: "Full Name *", name: "name", type: "text", placeholder: "John Doe", required: true },
                          { label: "Email Address *", name: "email", type: "email", placeholder: "john@company.com", required: true },
                        ].map((f, i) => (
                          <div key={i} className={styles.formGroup}>
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
                          </div>
                        ))}

                        <div className={styles.formRow}>
                          <div className={styles.formGroup}>
                            <label className={styles.label}>Company</label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className={styles.input}
                              placeholder="Your Company"
                            />
                          </div>
                          <div className={styles.formGroup}>
                            <label className={styles.label}>Phone</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={styles.input}
                              placeholder="+1 2712 345 678"
                            />
                          </div>
                        </div>

                        <div className={styles.formGroup}>
                          <label className={styles.label}>Service Interested In *</label>
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={styles.select}
                            required
                          >
                            <option value="">Select a service...</option>
                            {[
                              "Advanced Analytics",
                              "Machine Learning",
                              "Deep Learning",
                              "Data Engineering",
                              "Business Intelligence",
                              "Predictive Analytics",
                              "Customer Analytics",
                              "Consulting & Strategy",
                              "MLOps",
                              "Report Writing",
                              "Other / Not Sure"
                            ].map(o => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </div>

                        <div className={styles.formGroup}>
                          <label className={styles.label}>Tell Us About Your Project *</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={styles.textarea}
                            required
                            rows={6}
                            placeholder="Tell us about your data challenges, goals, and what you're hoping to achieve..."
                          />
                        </div>

                        <motion.button
                          type="submit"
                          className={styles.submitButton}
                          disabled={loading}
                          whileHover={
                            !loading
                              ? { backgroundColor: "#2563eb", transform: "translateY(-2px)", boxShadow: "0 8px 16px rgba(59,130,246,0.3)" }
                              : {}
                          }
                          whileTap={!loading ? { scale: 0.98 } : {}}
                        >
                          {loading ? "Processing..." : <><Send size={20} /> Send Message</>}
                        </motion.button>

                        <p className={styles.privacy}>
                          By submitting this form, you agree to our privacy policy. We'll never share your information.
                        </p>
                      </form>
                    </motion.div>

                  </div>
                </div>
              </section>
            </>
          )}

        </div>
      </main>

      <Footer />

      {/* ─── Scroll to Top ──────────────────────────────────────────── */}
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