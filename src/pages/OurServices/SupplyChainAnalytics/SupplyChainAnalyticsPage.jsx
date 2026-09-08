import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO/SEO';
import styles from './SupplyChainAnalyticsPage.module.css';

export default function SupplyChainAnalyticsPage() {
  return (
    <div className={styles.container}>
      <SEO
        title={"Supply Chain Analytics"}
        description={"Gain end‑to‑end visibility and improve logistics, procurement, and distribution."}
        keywords={"Supply Chain Analytics, manufacturing, data analytics services, Scape Data Solutions"}
      />
      <section style={{ padding: '4rem 0 5rem' }}>
        <p style={{ textTransform: 'uppercase', fontSize: '.75rem', letterSpacing: '.08em', fontWeight: 600, color: 'var(--color-text-secondary, #64748b)', marginBottom: '.5rem' }}>{"manufacturing"}</p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '.5rem' }}>{"Supply Chain Analytics"}</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary, #64748b)', marginBottom: '1.5rem' }}>{"Optimize your supply chain"}</p>
        <p style={{ maxWidth: '680px', lineHeight: 1.7, marginBottom: '2rem' }}>{"Gain end‑to‑end visibility and improve logistics, procurement, and distribution."}</p>
        <ul style={{ display: 'grid', gap: '.6rem', maxWidth: '520px', marginBottom: '2.5rem', paddingLeft: '1.2rem' }}>
          <li>{"Logistics Optimization"}</li>
          <li>{"Supplier Scorecards"}</li>
          <li>{"Demand‑Supply Matching"}</li>
          <li>{"Risk Dashboards"}</li>
        </ul>
        <p>
          <Link to="/contact" style={{ display: 'inline-block', padding: '.75rem 1.6rem', borderRadius: '999px', background: 'var(--color-text, #0a0a0a)', color: 'var(--color-bg, #fff)', textDecoration: 'none', fontWeight: 500 }}>
            Talk to our team about {"Supply Chain Analytics"}
          </Link>
        </p>
      </section>
    </div>
  );
}
