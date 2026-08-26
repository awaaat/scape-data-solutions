// src/pages/Auth/BusinessIntelLoginPage.jsx
//
// Separate front door from the client LoginPage, but calls the exact
// same useAuth().login() -- same accounts, same JWT, same backend.
// This exists only because business-intel and the client dashboard are
// two different services in the product, and a business-intel visitor
// shouldn't land on a page branded "Client Login". A person can hold
// both a client account and use it here -- it's the same account
// either way, just a different door and a different redirect target.

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loader2, LogIn } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import SEO from "../../components/SEO/SEO";
import styles from "./BusinessIntelAuth.module.css";
import { useAuth } from "../../context/AuthContext";

export default function BusinessIntelLoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/business-intel/dashboard";

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(form);
      navigate(redirectTo, { replace: true });
    } catch (err) {
      setError(err.message || "Couldn't log in. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Log In | Business Location Intelligence | Scape Data Solutions"
        description="Log in to your Business Location Intelligence account to view and generate site-selection reports."
        path="/business-intel/login"
      />
      <Navbar activeNav="" />

      <main className={styles.mainContent}>
        <div className={styles.card}>
          <span className={styles.eyebrow}><LogIn size={12} /> Business Intelligence Login</span>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Log in to view and generate site-selection reports.</p>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {error && <div className={styles.formError}>{error}</div>}

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email" autoComplete="email"
                className={styles.input} value={form.email} onChange={handleChange} required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">Password</label>
              <input
                id="password" name="password" type="password" autoComplete="current-password"
                className={styles.input} value={form.password} onChange={handleChange} required
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? <Loader2 size={16} className={styles.spin} /> : null}
              {loading ? "Logging in…" : "Log in"}
            </button>
          </form>

          <div className={styles.footerLinks}>
            <Link to="/business-intel/forgot-password">Forgot your password?</Link>
            <span>Don't have an account? <Link to="/business-intel/signup">Sign up</Link></span>
          </div>
        </div>
      </main>
    </div>
  );
}