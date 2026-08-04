// src/pages/Auth/SignupPage.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, Sparkles, MailCheck } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import styles from "./Auth.module.css";
import { useAuth } from "../../context/AuthContext";

const initialForm = { fullName: "", email: "", phone: "", password: "", consentGiven: false };

export default function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setFieldErrors({});

    if (!form.consentGiven) {
      setError("Please agree to the privacy policy to create an account.");
      return;
    }

    setLoading(true);
    try {
      await signup(form);
      setDone(true);
    } catch (err) {
      setError(err.message || "Couldn't create your account. Please try again.");
      if (err.fieldErrors) setFieldErrors(err.fieldErrors);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Create an Account | Scape Data Solutions"
        description="Sign up for a Scape Data Solutions account to submit projects and message our team directly."
        path="/signup"
      />
      <Navbar activeNav="" />

      <main className={styles.mainContent}>
        <div className={styles.card}>
          {done ? (
            <div className={styles.centerText}>
              <div className={styles.statusIcon}>
                <MailCheck size={40} className={styles.statusIconSuccess} />
              </div>
              <h1 className={styles.title}>Check your email</h1>
              <p className={styles.subtitle}>
                We've sent a verification link to <strong>{form.email}</strong>. Click it to
                activate your account, then come back and log in.
              </p>
              <div className={styles.footerLinks}>
                <Link to="/login">Already verified? Log in</Link>
                <Link to="/">Back to home</Link>
              </div>
            </div>
          ) : (
            <>
              <span className={styles.eyebrow}><Sparkles size={12} /> Client Account</span>
              <h1 className={styles.title}>Create your account</h1>
              <p className={styles.subtitle}>
                Sign up to submit projects and message our team directly.
              </p>

              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {error && <div className={styles.formError}>{error}</div>}

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="fullName">Full name</label>
                  <input
                    id="fullName" name="fullName" type="text" autoComplete="name"
                    className={`${styles.input}${fieldErrors.full_name ? " " + styles.hasError : ""}`}
                    value={form.fullName} onChange={handleChange} required
                  />
                  {fieldErrors.full_name && <span className={styles.fieldError}>{fieldErrors.full_name[0]}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email" autoComplete="email"
                    className={`${styles.input}${fieldErrors.email ? " " + styles.hasError : ""}`}
                    value={form.email} onChange={handleChange} required
                  />
                  {fieldErrors.email && <span className={styles.fieldError}>{fieldErrors.email[0]}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="phone">Phone number</label>
                  <input
                    id="phone" name="phone" type="tel" autoComplete="tel"
                    placeholder="e.g. 0712345678 or +254712345678"
                    className={`${styles.input}${fieldErrors.phone ? " " + styles.hasError : ""}`}
                    value={form.phone} onChange={handleChange} required
                  />
                  <span className={styles.hint}>Kenyan mobile numbers only, for account verification.</span>
                  {fieldErrors.phone && <span className={styles.fieldError}>{fieldErrors.phone[0]}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="password">Password</label>
                  <input
                    id="password" name="password" type="password" autoComplete="new-password"
                    className={`${styles.input}${fieldErrors.password ? " " + styles.hasError : ""}`}
                    value={form.password} onChange={handleChange} required minLength={8}
                  />
                  <span className={styles.hint}>At least 8 characters.</span>
                  {fieldErrors.password && <span className={styles.fieldError}>{fieldErrors.password[0]}</span>}
                </div>

                <label className={styles.checkboxRow}>
                  <input
                    type="checkbox" name="consentGiven"
                    checked={form.consentGiven} onChange={handleChange}
                  />
                  <span>
                    I agree to Scape Data Solutions' <a href="/faq" target="_blank" rel="noreferrer">privacy policy</a> and
                    consent to being contacted about my account and projects.
                  </span>
                </label>

                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? <Loader2 size={16} className={styles.spin} /> : null}
                  {loading ? "Creating account…" : "Create account"}
                </button>
              </form>

              <div className={styles.footerLinks}>
                <span>Already have an account? <Link to="/login">Log in</Link></span>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
