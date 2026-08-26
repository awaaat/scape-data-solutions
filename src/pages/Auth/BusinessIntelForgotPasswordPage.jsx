// src/pages/Auth/BusinessIntelForgotPasswordPage.jsx
//
// Standalone forgot-password for the business-intel product -- separate
// from ForgotPasswordPage.jsx (client flow). Same requestPasswordReset()
// call under the hood (shared backend), own door and own copy.

import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, MailCheck, KeyRound } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import SEO from "../../components/SEO/SEO";
import styles from "./BusinessIntelAuth.module.css";
import { requestPasswordReset } from "../../services/authApi";

export default function BusinessIntelForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await requestPasswordReset(email);
      // Backend always returns 202 regardless of whether the email
      // exists — same here: never reveal account existence.
      setSent(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Forgot Password | Business Location Intelligence | Scape Data Solutions"
        description="Reset your Business Location Intelligence account password."
        path="/business-intel/forgot-password"
      />
      <Navbar activeNav="" />

      <main className={styles.mainContent}>
        <div className={styles.card}>
          {sent ? (
            <div className={styles.centerText}>
              <div className={styles.statusIcon}><MailCheck size={40} className={styles.statusIconSuccess} /></div>
              <h1 className={styles.title}>Check your email</h1>
              <p className={styles.subtitle}>
                If an account exists for <strong>{email}</strong>, we've sent a link to reset your password.
              </p>
              <div className={styles.footerLinks}>
                <Link to="/business-intel/login">Back to login</Link>
              </div>
            </div>
          ) : (
            <>
              <span className={styles.eyebrow}><KeyRound size={12} /> Reset Password</span>
              <h1 className={styles.title}>Forgot your password?</h1>
              <p className={styles.subtitle}>Enter your email and we'll send you a reset link.</p>

              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {error && <div className={styles.formError}>{error}</div>}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email" autoComplete="email"
                    className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required
                  />
                </div>
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? <Loader2 size={16} className={styles.spin} /> : null}
                  {loading ? "Sending…" : "Send reset link"}
                </button>
              </form>

              <div className={styles.footerLinks}>
                <Link to="/business-intel/login">Back to login</Link>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}