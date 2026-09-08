import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO/SEO';
import styles from './ThesisDataAnalysisPage.module.css';

export default function ThesisDataAnalysisPage() {
  return (
    <div className={styles.container}>
      <SEO
        title={"Thesis Data Analysis"}
        description={"Professional Thesis Data Analysis that strengthens your manuscript for submission, review, and publication."}
        keywords={"Thesis Data Analysis, academic-writing, data analytics services, Scape Data Solutions"}
      />
      <section style={{ padding: '4rem 0 5rem' }}>
        <p style={{ textTransform: 'uppercase', fontSize: '.75rem', letterSpacing: '.08em', fontWeight: 600, color: 'var(--color-text-secondary, #64748b)', marginBottom: '.5rem' }}>{"academic-writing"}</p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '.5rem' }}>{"Thesis Data Analysis"}</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary, #64748b)', marginBottom: '1.5rem' }}>{"Publication-ready, every time"}</p>
        <p style={{ maxWidth: '680px', lineHeight: 1.7, marginBottom: '2rem' }}>{"Professional Thesis Data Analysis that strengthens your manuscript for submission, review, and publication."}</p>
        <ul style={{ display: 'grid', gap: '.6rem', maxWidth: '520px', marginBottom: '2.5rem', paddingLeft: '1.2rem' }}>
          <li>{"Structure & Flow"}</li>
          <li>{"Language Polishing"}</li>
          <li>{"Formatting & Citations"}</li>
          <li>{"Submission Readiness"}</li>
        </ul>
        <p>
          <Link to="/contact" style={{ display: 'inline-block', padding: '.75rem 1.6rem', borderRadius: '999px', background: 'var(--color-text, #0a0a0a)', color: 'var(--color-bg, #fff)', textDecoration: 'none', fontWeight: 500 }}>
            Talk to our team about {"Thesis Data Analysis"}
          </Link>
        </p>
      </section>
    </div>
  );
}
