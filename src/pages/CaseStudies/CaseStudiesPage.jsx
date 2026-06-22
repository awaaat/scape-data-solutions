// src/pages/CaseStudies/CaseStudiesPage.jsx
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../Home/HomePage.module.css";
import pageStyles from "./CaseStudiesPage.module.css";

const CaseStudiesPage = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Case Studies | Scape Data Solutions</title>
        <meta name="description" content="Real results from real client partnerships." />
      </Helmet>

      <Navbar activeNav="" />

      <main className={styles.mainContent}>
        <section className={pageStyles.hero}>
          <div className={styles.container}>
            <div className={pageStyles.heroContent}>
              <h1 className={pageStyles.heroTitle}>Case Studies</h1>
              <p className={pageStyles.heroSubtext}>Real results from real client partnerships.</p>
            </div>
          </div>
        </section>

        <section className={`${styles.sec} ${pageStyles.placeholderSection}`}>
          <div className={styles.container}>
            <p className={pageStyles.placeholderText}>
              Content for this page is coming soon. This is a placeholder so the
              route and navigation work correctly — replace with real content.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
