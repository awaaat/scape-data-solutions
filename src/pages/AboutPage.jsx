// frontend/src/pages/AboutPage.jsx

import { ArrowRight, Award, Lightbulb, Shield, Target, TrendingUp, Users } from 'lucide-react';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { apiService } from '../services/api';
import styles from './AboutPage.module.css';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const handleCTAClick = (cta) => {
        apiService.trackInteraction('conversion', 'about_cta_click', { cta });
    };

    const team = [
        {
            name: "Dr. Robert Chen",
            role: "Chief Data Scientist & CEO",
            bio: "PhD in Machine Learning from Stanford. 15+ years leading data science teams at Fortune 500 companies including Google and Amazon.",
            expertise: ["Deep Learning", "AI Strategy", "Research"],
            image: "/Images/site-images/Dr-Robert-Chen.Webp"
        },
        {
            name: "Elena Rodriguez",
            role: "Head of Analytics & Operations",
            bio: "Former Head of Analytics at McKinsey. Built and scaled analytics practices across 20+ countries.",
            expertise: ["Business Intelligence", "Analytics Strategy", "Team Leadership"],
            image: "/Images/site-images/Elena-Rodriguez.Webp"
        },
        {
            name: "David Kimani",
            role: "Lead ML Engineer",
            bio: "10+ years building production ML systems. Former ML Engineer at Microsoft Azure ML team.",
            expertise: ["MLOps", "Production Systems", "Cloud Architecture"],
            image: "/Images/site-images/David-Kimani.Webp"
        },
        {
            name: "Sarah Mwangi",
            role: "Senior Data Scientist",
            bio: "PhD candidate in Statistics. Specializes in predictive modeling and time-series forecasting.",
            expertise: ["Statistical Modeling", "Forecasting", "Experimentation"],
            image: "/Images/site-images/Sarah-Mwangi.Webp"
        },
        {
            name: "Ahmed Hassan",
            role: "Data Engineering Lead",
            bio: "Built data infrastructure for scale-ups and enterprises. Expert in cloud-native data architecture.",
            expertise: ["Data Engineering", "ETL/ELT", "Data Warehousing"],
            image: "/Images/site-images/Ahmed-Hassan.Webp"
        },
        {
            name: "Patricia Ochieng",
            role: "Customer Success Manager",
            bio: "Ensures client satisfaction and project success. 8+ years in technical account management.",
            expertise: ["Client Relations", "Project Management", "Strategy"],
            image: "/Images/site-images/Patricia-Ochieng.Webp"
        }
    ];

    const values = [
        {
            icon: <Target size={36} />,
            title: "Results-Driven",
            description: "We measure success by your ROI, not just deliverables. Every project must demonstrate clear business value."
        },
        {
            icon: <Users size={36} />,
            title: "Partnership Mindset",
            description: "We become an extension of your team, invested in your long-term success, not just project completion."
        },
        {
            icon: <Award size={36} />,
            title: "Excellence in Execution",
            description: "We deliver enterprise-grade solutions with attention to detail, security, and scalability."
        },
        {
            icon: <TrendingUp size={36} />,
            title: "Continuous Innovation",
            description: "We stay ahead of industry trends, constantly evolving our methods to deliver cutting-edge solutions."
        },
        {
            icon: <Shield size={36} />,
            title: "Data Security & Privacy",
            description: "Your data security is our top priority. We implement industry-leading practices and maintain strict compliance standards."
        },
        {
            icon: <Lightbulb size={36} />,
            title: "Knowledge Transfer",
            description: "We empower your team through comprehensive training and documentation, ensuring long-term independence and capability."
        }
    ];

    return (
        <div className={styles.container}>
            <Helmet>
                <title>About Us | Expert Data Science Team - Scape Data Solutions</title>
                <meta name="description" content="Meet our expert data science team. Founded by scientists and engineers from leading tech companies. 50+ clients, 200+ projects, 98% satisfaction rate." />
                <link rel="canonical" href="https://scapedatasolutions.com/about" />

                <meta property="og:title" content="About Us | Expert Data Science Team - Scape Data Solutions" />
                <meta property="og:description" content="Meet our expert data science team. 50+ clients, 200+ projects completed, 98% satisfaction rate." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://scapedatasolutions.com/about" />
                <meta property="og:image" content="https://scapedatasolutions.com/Images/site-images/Dr-Robert-Chen.Webp" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us | Expert Data Science Team" />
                <meta name="twitter:description" content="Meet our expert data science team. 50+ clients, 98% satisfaction." />
                <meta name="twitter:image" content="https://scapedatasolutions.com/Images/site-images/Dr-Robert-Chen.Webp" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "Scape Data Solutions",
                            "description": "Expert data science and analytics team serving 50+ organizations worldwide",
                            "url": "https://scapedatasolutions.com/about",
                            "foundingDate": "2018",
                            "numberOfEmployees": "50+",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "ratingCount": "200",
                                "bestRating": "5"
                            }
                        }
                    })}
                </script>
            </Helmet>

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Data Experts You Can Trust</h1>
                    <p className={styles.heroSubtitle}>
                        Founded by data scientists and engineers from leading tech companies, we've grown
                        into a trusted partner for organizations seeking to unlock the power of their data.
                    </p>
                    <div className={styles.statsRow}>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>50+</div>
                            <div className={styles.statLabel}>Client Organizations</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>200+</div>
                            <div className={styles.statLabel}>Projects Completed</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>98%</div>
                            <div className={styles.statLabel}>Client Satisfaction</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>15+</div>
                            <div className={styles.statLabel}>Years Combined Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.missionSection}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Our Mission</h2>
                    <p className={styles.missionText}>
                        To democratize data science and make world-class analytics accessible to businesses
                        of all sizes. We believe every company deserves the competitive advantage that comes
                        from data-driven decision making.
                    </p>
                </div>
            </section>

            <section className={styles.valuesSection}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Our Values</h2>
                    <div className={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.teamSection}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Meet Our Leadership</h2>
                    <p className={styles.sectionSubtitle}>
                        Our team combines deep technical expertise with real-world business experience
                    </p>
                    <div className={styles.teamGrid}>
                        {team.map((member, index) => (
                            <div key={index} className={styles.teamCard}>
                                <div className={styles.avatarContainer}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={styles.avatar}
                                    />
                                </div>
                                <h3 className={styles.memberName}>{member.name}</h3>
                                <div className={styles.memberRole}>{member.role}</div>
                                <p className={styles.memberBio}>{member.bio}</p>
                                <div className={styles.expertise}>
                                    {member.expertise.map((skill, idx) => (
                                        <span key={idx} className={styles.skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Let's Build Something Great Together</h2>
                    <p className={styles.ctaText}>
                        Partner with a team that's committed to your success
                    </p>
                    <Link
                        to="/contact"
                        onClick={() => handleCTAClick('about_bottom')}
                        className={styles.ctaButton}
                    >
                        Start Your Journey <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;