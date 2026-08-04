// src/pages/Auth/LoginPage.jsx
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loader2, LogIn } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import styles from "./Auth.module.css";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || "/dashboard";

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
        title="Log In | Scape Data Solutions"
        description="Log in to your Scape Data Solutions account to manage your projects."
        path="/login"
      />
      <Navbar activeNav="" />

      <main className={styles.mainContent}>
        <div className={styles.card}>
          <span className={styles.eyebrow}><LogIn size={12} /> Client Login</span>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Log in to view and manage your projects.</p>

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
            <Link to="/forgot-password">Forgot your password?</Link>
            <span>Don't have an account? <Link to="/signup">Sign up</Link></span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
