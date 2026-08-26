// src/pages/BusinessIntelLandingPage/BusinessIntelLandingPage.jsx
//
// Public marketing page for the business-intel product, living at bare
// /business-intel. This is the page a logged-out visitor lands on --
// the actual product (report list, "new query", etc.) now lives at
// /business-intel/dashboard, behind <ProtectedRoute>.

import { Link } from "react-router-dom";
import { BarChart3, MapPin, ShieldCheck, TrendingUp } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import { useAuth } from "../../context/AuthContext";
import styles from "./BusinessIntelLandingPage.module.css";

const FEATURES = [
  {
    icon: MapPin,
    title: "Site-selection scoring",
    body: "Drop in a location and business type; get a data-backed read on whether it's a strong fit before you sign a lease.",
  },
  {
    icon: TrendingUp,
    title: "Demand & competition context",
    body: "See how investment size, target segment, and planned branch count line up against what the area can realistically support.",
  },
  {
    icon: ShieldCheck,
    title: "Anomaly flags",
    body: "Reports that look statistically off get flagged automatically, so you know when to dig deeper before trusting a result.",
  },
];

export default function BusinessIntelLandingPage() {
  const { isAuthenticated } = useAuth();
  const primaryCtaTo = isAuthenticated ? "/business-intel/dashboard" : "/business-intel/signup";
  const primaryCtaLabel = isAuthenticated ? "Go to dashboard" : "Get started";

  return (
    <div className={styles.page}>
      <SEO
        title="Business Location Intelligence | Scape Data Solutions"
        description="Site-selection reports for new business locations -- demand, competition, and risk signals before you commit."
        path="/business-intel"
      />
      <Navbar activeNav="business-intel" />

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}><BarChart3 size={12} /> Business Location Intelligence</span>
          <h1 className={styles.heroTitle}>Know before you open the doors</h1>
          <p className={styles.heroSubtitle}>
            Generate a site-selection report for any location in minutes -- demand
            signals, competition density, and a confidence score, so the decision
            to open a branch is backed by data, not a gut feeling.
          </p>
          <div className={styles.heroActions}>
            <Link to={primaryCtaTo} className={styles.primaryBtn}>{primaryCtaLabel}</Link>
            {!isAuthenticated && (
              <Link to="/business-intel/login" className={styles.secondaryBtn}>Log in</Link>
            )}
          </div>
        </section>

        <section className={styles.features}>
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title} className={styles.featureCard}>
              <div className={styles.featureIcon}><Icon size={22} /></div>
              <h3 className={styles.featureTitle}>{title}</h3>
              <p className={styles.featureBody}>{body}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
