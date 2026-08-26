// src/pages/Auth/ResetPasswordPage.jsx
//
// Landed on from the password reset email link:
//   {FRONTEND_BASE_URL}/reset-password?uid=...&token=...
// (see users/emails.py build_reset_url).

import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle2, KeyRound, Loader2 } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import styles from "./Auth.module.css";
import { confirmPasswordReset } from "../../services/authApi";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!uid || !token) {
      setError("This reset link is missing information — please use the link from your email.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    try {
      await confirmPasswordReset({ uid, token, newPassword: password });
      setDone(true);
    } catch (err) {
      setError(err.message || "This reset link is invalid or has expired.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <SEO title="Reset Password | Scape Data Solutions" description="Set a new password for your Scape Data Solutions account." path="/client-portal/reset-password" />
      <Navbar activeNav="" />

      <main className={styles.mainContent}>
        <div className={styles.card}>
          {done ? (
            <div className={styles.centerText}>
              <div className={styles.statusIcon}><CheckCircle2 size={40} className={styles.statusIconSuccess} /></div>
              <h1 className={styles.title}>Password updated</h1>
              <p className={styles.subtitle}>You can now log in with your new password.</p>
              <div className={styles.footerLinks}>
                <Link to="/client-portal/login">Go to login</Link>
              </div>
            </div>
          ) : (
            <>
              <span className={styles.eyebrow}><KeyRound size={12} /> New Password</span>
              <h1 className={styles.title}>Set a new password</h1>
              <p className={styles.subtitle}>Choose a strong password you haven't used before.</p>

              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {error && <div className={styles.formError}>{error}</div>}

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="password">New password</label>
                  <input
                    id="password" name="password" type="password" autoComplete="new-password"
                    className={styles.input} value={password} onChange={(e) => setPassword(e.target.value)}
                    required minLength={8}
                  />
                  <span className={styles.hint}>At least 8 characters.</span>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="confirm">Confirm new password</label>
                  <input
                    id="confirm" name="confirm" type="password" autoComplete="new-password"
                    className={styles.input} value={confirm} onChange={(e) => setConfirm(e.target.value)}
                    required minLength={8}
                  />
                </div>

                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? <Loader2 size={16} className={styles.spin} /> : null}
                  {loading ? "Updating…" : "Update password"}
                </button>
              </form>

              <div className={styles.footerLinks}>
                <Link to="/client-portal/login">Back to login</Link>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
