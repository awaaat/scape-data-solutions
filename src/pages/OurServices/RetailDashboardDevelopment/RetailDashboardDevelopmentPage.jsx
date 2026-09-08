import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO/SEO';
import styles from './RetailDashboardDevelopmentPage.module.css';

export default function RetailDashboardDevelopmentPage() {
  return (
    <div className={styles.container}>
      <SEO
        title={"Retail Dashboard Development"}
        description={"AI-powered Retail Dashboard Development that helps retailers grow revenue and serve customers more effectively."}
        keywords={"Retail Dashboard Development, retail, data analytics services, Scape Data Solutions"}
      />
      <section style={{ padding: '4rem 0 5rem' }}>
        <p style={{ textTransform: 'uppercase', fontSize: '.75rem', letterSpacing: '.08em', fontWeight: 600, color: 'var(--color-text-secondary, #64748b)', marginBottom: '.5rem' }}>{"retail"}</p>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '.5rem' }}>{"Retail Dashboard Development"}</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary, #64748b)', marginBottom: '1.5rem' }}>{"Know your customer, grow your business"}</p>
        <p style={{ maxWidth: '680px', lineHeight: 1.7, marginBottom: '2rem' }}>{"AI-powered Retail Dashboard Development that helps retailers grow revenue and serve customers more effectively."}</p>
        <ul style={{ display: 'grid', gap: '.6rem', maxWidth: '520px', marginBottom: '2.5rem', paddingLeft: '1.2rem' }}>
          <li>{"Customer Insights"}</li>
          <li>{"Trend Analysis"}</li>
          <li>{"Performance Dashboards"}</li>
          <li>{"Actionable Recommendations"}</li>
        </ul>
        <p>
          <Link to="/contact" style={{ display: 'inline-block', padding: '.75rem 1.6rem', borderRadius: '999px', background: 'var(--color-text, #0a0a0a)', color: 'var(--color-bg, #fff)', textDecoration: 'none', fontWeight: 500 }}>
            Talk to our team about {"Retail Dashboard Development"}
          </Link>
        </p>
      </section>
    </div>
  );
}
