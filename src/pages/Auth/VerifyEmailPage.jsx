// src/pages/Auth/VerifyEmailPage.jsx
//
// Landed on from the verification email link:
//   {FRONTEND_BASE_URL}/verify-email?token=...&id=...
// (see users/emails.py build_verification_url). Confirms automatically
// on mount — no button to click, since the token is already right there
// in the URL.

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import styles from "./Auth.module.css";
import { confirmEmailVerification } from "../../services/authApi";

export default function VerifyEmailPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");

  const [status, setStatus] = useState("verifying"); // verifying | success | error
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id || !token) {
      setStatus("error");
      setError("This verification link is missing information — please use the link from your email.");
      return;
    }
    confirmEmailVerification({ id, token })
      .then(() => setStatus("success"))
      .catch((err) => {
        setStatus("error");
        setError(err.message || "This verification link is invalid or has expired.");
      });
  }, [id, token]);

  return (
    <div className={styles.page}>
      <SEO title="Verify Email | Scape Data Solutions" description="Confirm your Scape Data Solutions account." path="/verify-email" />
      <Navbar activeNav="" />

      <main className={styles.mainContent}>
        <div className={`${styles.card} ${styles.centerText}`}>
          {status === "verifying" && (
            <>
              <div className={styles.statusIcon}><Loader2 size={40} className={styles.spin} /></div>
              <h1 className={styles.title}>Verifying your email…</h1>
              <p className={styles.subtitle}>This will only take a moment.</p>
            </>
          )}

          {status === "success" && (
            <>
              <div className={styles.statusIcon}><CheckCircle2 size={40} className={styles.statusIconSuccess} /></div>
              <h1 className={styles.title}>Email verified!</h1>
              <p className={styles.subtitle}>Your account is active. You can now log in.</p>
              <div className={styles.footerLinks}>
                <Link to="/login">Go to login</Link>
              </div>
            </>
          )}

          {status === "error" && (
            <>
              <div className={styles.statusIcon}><XCircle size={40} className={styles.statusIconError} /></div>
              <h1 className={styles.title}>Verification failed</h1>
              <p className={styles.subtitle}>{error}</p>
              <div className={styles.footerLinks}>
                <Link to="/signup">Sign up again</Link>
                <Link to="/login">Back to login</Link>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
