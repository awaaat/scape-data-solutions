import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO/SEO';
import styles from './ScientificResearchConsultingPage.module.css';

export default function ScientificResearchConsultingPage() {
  return (
    <div className={styles.container}>
      <SEO
        title={"Scientific Research Consulting"}
        description={"Rigorous Scientific Research Consulting support, from design through interpretation, for dissertations and peer-reviewed research."}
        keywords={"Scientific Research Consulting, research-methods, data analytics services, Scape Data Solutions"}
      />
      <section style={{ padding: '4rem 0 5rem' }}>
        <p style={{ textTransform: 'uppercase', fontSize: '.75rem', letterSpacing: '.08em', fontWeight: 600, color: 'var(--color-text-secondary, #64748b)', marginBottom: '.5rem' }}>{"research-methods"}</p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '.5rem' }}>{"Scientific Research Consulting"}</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary, #64748b)', marginBottom: '1.5rem' }}>{"Rigor you can defend"}</p>
        <p style={{ maxWidth: '680px', lineHeight: 1.7, marginBottom: '2rem' }}>{"Rigorous Scientific Research Consulting support, from design through interpretation, for dissertations and peer-reviewed research."}</p>
        <ul style={{ display: 'grid', gap: '.6rem', maxWidth: '520px', marginBottom: '2.5rem', paddingLeft: '1.2rem' }}>
          <li>{"Method Selection"}</li>
          <li>{"Model Specification"}</li>
          <li>{"Assumption Testing"}</li>
          <li>{"Results Interpretation"}</li>
        </ul>
        <p>
          <Link to="/contact" style={{ display: 'inline-block', padding: '.75rem 1.6rem', borderRadius: '999px', background: 'var(--color-text, #0a0a0a)', color: 'var(--color-bg, #fff)', textDecoration: 'none', fontWeight: 500 }}>
            Talk to our team about {"Scientific Research Consulting"}
          </Link>
        </p>
      </section>
    </div>
  );
}
