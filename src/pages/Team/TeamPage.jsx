// src/pages/TeamPage.jsx
import { useEffect } from 'react';
import SEO from "../../components/SEO/SEO";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './TeamPage.module.css';

const TeamPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const members = [
    { name: 'Alice Mwangi', role: 'Data Analyst', img: '/Images/site-images/avatar-placeholder.webp' },
    { name: 'James Oduor', role: 'ML Engineer', img: '/Images/site-images/avatar-placeholder.webp' },
    { name: 'Grace Wanjiru', role: 'BI Developer', img: '/Images/site-images/avatar-placeholder.webp' },
    { name: 'Peter Maina', role: 'Data Engineer', img: '/Images/site-images/avatar-placeholder.webp' },
    { name: 'Faith Akinyi', role: 'UX Designer', img: '/Images/site-images/avatar-placeholder.webp' },
    { name: 'Samuel Kariuki', role: 'DevOps', img: '/Images/site-images/avatar-placeholder.webp' },
  ];

  return (
    <div className={styles.container}>
      <SEO
        title="Our Team | Scape Data Solutions"
        description="Meet the talented professionals behind Scape Data Solutions – data scientists, engineers, and designers."
        path="/team"
      />

      <section className={styles.hero}>
        <h1>Our Team</h1>
        <p>Diverse talents, unified mission – delivering data excellence.</p>
      </section>

      <section className={styles.grid}>
        {members.map((m, i) => (
          <div key={i} className={styles.card}>
            <img src={m.img} alt={m.name} />
            <h3>{m.name}</h3>
            <p>{m.role}</p>
          </div>
        ))}
      </section>

      <section className={styles.cta}>
        <h2>Join Our Team</h2>
        <p>We're always looking for passionate data professionals.</p>
        <Link to="/careers" className={styles.ctaBtn}>View Openings <ArrowRight size={18} /></Link>
      </section>
    </div>
  );
};

export default TeamPage;