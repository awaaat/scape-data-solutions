import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO/SEO';
import styles from './GraphPadPrismHelpPage.module.css';

export default function GraphPadPrismHelpPage() {
  return (
    <div className={styles.container}>
      <SEO
        title={"GraphPad Prism Help"}
        description={"Expert help with GraphPad Prism Help, delivered fast — accurate results, clear explanations, and on-time delivery."}
        keywords={"GraphPad Prism Help, assignment-help, data analytics services, Scape Data Solutions"}
      />
      <section style={{ padding: '4rem 0 5rem' }}>
        <p style={{ textTransform: 'uppercase', fontSize: '.75rem', letterSpacing: '.08em', fontWeight: 600, color: 'var(--color-text-secondary, #64748b)', marginBottom: '.5rem' }}>{"assignment-help"}</p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '.5rem' }}>{"GraphPad Prism Help"}</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary, #64748b)', marginBottom: '1.5rem' }}>{"Get it right, the first time"}</p>
        <p style={{ maxWidth: '680px', lineHeight: 1.7, marginBottom: '2rem' }}>{"Expert help with GraphPad Prism Help, delivered fast — accurate results, clear explanations, and on-time delivery."}</p>
        <ul style={{ display: 'grid', gap: '.6rem', maxWidth: '520px', marginBottom: '2.5rem', paddingLeft: '1.2rem' }}>
          <li>{"Concept Walkthrough"}</li>
          <li>{"Step-by-Step Solutions"}</li>
          <li>{"Output Interpretation"}</li>
          <li>{"Revision Support"}</li>
        </ul>
        <p>
          <Link to="/contact" style={{ display: 'inline-block', padding: '.75rem 1.6rem', borderRadius: '999px', background: 'var(--color-text, #0a0a0a)', color: 'var(--color-bg, #fff)', textDecoration: 'none', fontWeight: 500 }}>
            Talk to our team about {"GraphPad Prism Help"}
          </Link>
        </p>
      </section>
    </div>
  );
}
