// frontend/src/pages/HomePage.jsx

import { ArrowRight, BarChart3, CheckCircle, ChevronRight, Database, Globe, LineChart, PieChart, Play, Shield, Star, TrendingUp, Users, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../services/api';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [activeService, setActiveService] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.floor((Date.now() - startTime) / 1000);
            apiService.trackInteraction('engagement', 'time_on_page', {
                page: 'home',
                seconds: timeSpent
            });
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleCTAClick = (ctaName) => {
        apiService.trackInteraction('conversion', 'cta_click', {
            cta: ctaName,
            page: 'home'
        });
    };

    const services = [
        {
            icon: BarChart3,
            color: '#2563eb',
            title: 'Business Intelligence & Analytics',
            description: 'Transform raw data into interactive dashboards and reports.',
            features: ['Custom Dashboards', 'Real-time Reporting', 'KPI Tracking', 'Predictive Analytics'],
            image: '/Images/site-images/dashboard-1.jpg'
        },
        {
            icon: Database,
            color: '#16a34a',
            title: 'Data Engineering & Integration',
            description: 'Build robust data pipelines that centralize your data.',
            features: ['ETL Pipelines', 'Data Warehousing', 'API Integration', 'Database Optimization'],
            image: '/Images/site-images/dashboard-2.jpg'
        },
        {
            icon: LineChart,
            color: '#9333ea',
            title: 'Advanced Analytics & ML',
            description: 'Leverage AI to predict outcomes and automate decisions.',
            features: ['Predictive Modeling', 'Customer Segmentation', 'Churn Prediction', 'Demand Forecasting'],
            image: '/Images/site-images/dashboard-3.jpg'
        },
        {
            icon: PieChart,
            color: '#ea580c',
            title: 'Data Strategy Consulting',
            description: 'Develop comprehensive data strategy aligned with goals.',
            features: ['Maturity Assessment', 'Roadmap Development', 'Stack Selection', 'Team Training'],
            image: '/Images/site-images/data-image-1.jpg'
        }
    ];

    const testimonials = [
        {
            text: "The analytics dashboards transformed how we track performance across East African operations. Real-time decisions instead of waiting weeks.",
            author: "James Kariuki",
            title: "Director of Operations",
            company: "Regional Tech Group",
            rating: 5,
            color: '#bfdbfe'
        },
        {
            text: "Game-changer for our US operations. Their insights optimized our supply chain and reduced costs significantly.",
            author: "Sarah Mitchell",
            title: "VP of Finance",
            company: "Continental Manufacturing",
            rating: 5,
            color: '#bbf7d0'
        },
        {
            text: "Expertise spans African and Western markets perfectly. Complex analytics delivered on time with excellent support.",
            author: "Dr. Amina Hassan",
            title: "Chief Data Officer",
            company: "Healthcare Network Africa",
            rating: 5,
            color: '#e9d5ff'
        }
    ];

    const stats = [
        { value: '180+', label: 'Projects Delivered', color: '#2563eb' },
        { value: '35+', label: 'Enterprise Clients', color: '#16a34a' },
        { value: '85%', label: 'Client Retention', color: '#9333ea' },
        { value: '12+', label: 'Years Experience', color: '#ea580c' }
    ];

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroText} style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
                            <div className={styles.badge}>
                                <Star size={16} style={{ display: 'inline', marginRight: '8px' }} />
                                Serving Enterprises Across the Globe
                            </div>

                            <h1 className={styles.heroTitle}>
                                Transform Your Data Into
                                <span className={styles.highlight}> Strategic Advantage</span>
                            </h1>

                            <p className={styles.heroSubtitle}>
                                Stop drowning in data. Start making decisions that drive measurable ROI.
                                We turn complex datasets into clear, actionable insights that fuel growth.
                            </p>

                            <div className={styles.ctaButtons}>
                                <Link
                                    to="/contact"
                                    onClick={() => handleCTAClick('hero_primary')}
                                    className={styles.primaryCta}
                                >
                                    Get Your Free Data Audit
                                    <ArrowRight size={20} />
                                </Link>

                                <button className={styles.secondaryCta}>
                                    <Play size={20} />
                                    Watch Demo
                                </button>
                            </div>

                            <div className={styles.trustIndicators}>
                                <div className={styles.trustItem}>
                                    <CheckCircle size={16} />
                                    <span>No Credit Card Required</span>
                                </div>
                                <div className={styles.trustItem}>
                                    <CheckCircle size={16} />
                                    <span>Free Consultation</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.statsPanel}>
                            <div className={styles.statsGrid}>
                                {stats.map((stat, idx) => (
                                    <div
                                        key={idx}
                                        className={styles.statItem}
                                        style={{
                                            animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                                            borderTop: `4px solid ${stat.color}`,
                                            padding: '1.5rem',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '12px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        }}
                                    >
                                        <div className={styles.statNumber} style={{ color: stat.color }}>
                                            {stat.value}
                                        </div>
                                        <div className={styles.statLabel}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.heroImageWrapper}>
                                <img
                                    src="/Images/site-images/chart-1.jpg"
                                    alt="Analytics Dashboard"
                                    className={styles.heroImage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full-Width Image Section with Overlay Text */}
            <section className={styles.fullWidthImageSection}>
                <div className={styles.imageOverlay}>
                    <img src="/Images/site-images/dashboard-1.jpg" alt="Data Analytics" className={styles.bgImage} />
                    <div className={styles.overlayContent}>
                        <h2 className={styles.overlayTitle}>Real-Time Insights, Real Results</h2>
                        <p className={styles.overlayText}>
                            See how our clients transformed scattered data into strategic intelligence
                        </p>
                    </div>
                </div>
            </section>

            {/* Interactive Services Showcase */}
            <section className={styles.servicesShowcase}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Core Services</h2>
                        <p className={styles.sectionSubtitle}>End-to-end data solutions tailored to your needs</p>
                    </div>

                    <div className={styles.servicesShowcaseGrid}>
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            const isActive = activeService === idx;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveService(idx)}
                                    className={`${styles.showcaseCard} ${isActive ? styles.showcaseCardActive : ''}`}
                                >
                                    <div className={styles.showcaseCardImage}>
                                        <img src={service.image} alt={service.title} />
                                        <div className={styles.showcaseCardOverlay}>
                                            <div className={styles.showcaseCardContent}>
                                                <div className={styles.showcaseIcon} style={{ background: service.color }}>
                                                    <Icon size={32} color="white" />
                                                </div>
                                                <h3 className={styles.showcaseCardTitle}>{service.title}</h3>
                                                <p className={styles.showcaseCardDesc}>{service.description}</p>
                                                {isActive && (
                                                    <ul className={styles.showcaseFeatures}>
                                                        {service.features.map((feature, fidx) => (
                                                            <li key={fidx}>
                                                                <ChevronRight size={16} />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                <div className={styles.showcaseCardArrow}>
                                                    <ArrowRight size={24} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Split Image Section */}
            <section className={styles.splitSection}>
                <div className={styles.splitImage}>
                    <img src="/Images/site-images/data-image-2.jpg" alt="Data Processing" />
                </div>
                <div className={styles.splitContent}>
                    <h2 className={styles.splitTitle}>From Chaos to Clarity</h2>
                    <p className={styles.splitText}>
                        We don't just analyze data – we transform it into a strategic asset. Our proven process
                        takes your scattered information and turns it into actionable intelligence that drives growth.
                    </p>
                    <ul className={styles.splitList}>
                        <li><CheckCircle size={20} /> Automated data pipelines</li>
                        <li><CheckCircle size={20} /> Real-time dashboards</li>
                        <li><CheckCircle size={20} /> Predictive analytics</li>
                        <li><CheckCircle size={20} /> Custom ML models</li>
                    </ul>
                    <Link to="/services" className={styles.splitBtn}>
                        Explore Services
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Reverse Split Section */}
            <section className={styles.splitSection}>
                <div className={styles.splitContent}>
                    <h2 className={styles.splitTitle}>Enterprise-Grade Security</h2>
                    <p className={styles.splitText}>
                        Your data stays yours. We implement bank-level encryption, comply with international
                        standards, and ensure your sensitive information is protected at every step.
                    </p>
                    <div className={styles.securityBadges}>
                        <div className={styles.securityBadge}>
                            <Shield size={24} />
                            <span>SOC 2 Compliant</span>
                        </div>
                        <div className={styles.securityBadge}>
                            <Shield size={24} />
                            <span>GDPR Ready</span>
                        </div>
                        <div className={styles.securityBadge}>
                            <Shield size={24} />
                            <span>256-bit Encryption</span>
                        </div>
                    </div>
                </div>
                <div className={styles.splitImage}>
                    <img src="/Images/site-images/data-image-3.jpg" alt="Security" />
                </div>
            </section>

            {/* Benefits Grid with Background */}
            <section className={styles.benefitsSection}>
                <div className={styles.benefitsBackground}>
                    <img src="/Images/site-images/dashboard-2.jpg" alt="Background" />
                    <div className={styles.benefitsOverlay}></div>
                </div>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
                            What Sets Us Apart
                        </h2>
                        <p className={styles.sectionSubtitle} style={{ color: 'rgba(255,255,255,0.9)' }}>
                            We don't just analyze data. We partner with you to transform it into revenue.
                        </p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitCard}>
                            <TrendingUp size={32} style={{ color: '#2563eb' }} />
                            <h3>Proven ROI</h3>
                            <p>Measurable improvements within the first quarter</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <Zap size={32} style={{ color: '#16a34a' }} />
                            <h3>Fast Deployment</h3>
                            <p>See insights in weeks, not months</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <Users size={32} style={{ color: '#9333ea' }} />
                            <h3>Expert Team</h3>
                            <p>Work with experienced data professionals</p>
                        </div>
                        <div className={styles.benefitCard}>
                            <Globe size={32} style={{ color: '#ea580c' }} />
                            <h3>Global Reach</h3>
                            <p>African expertise, international standards</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={styles.testimonialsSection}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>What Our Clients Say</h2>

                    <div className={styles.testimonialCarousel}>
                        <div className={styles.testimonialCardActive}>
                            <div className={styles.stars}>
                                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                    <Star key={i} size={24} fill="#fbbf24" color="#fbbf24" />
                                ))}
                            </div>

                            <p className={styles.testimonialQuote}>
                                "{testimonials[activeTestimonial].text}"
                            </p>

                            <div className={styles.testimonialAuthor}>
                                <div
                                    className={styles.avatar}
                                    style={{ background: testimonials[activeTestimonial].color }}
                                />
                                <div>
                                    <div className={styles.authorName}>
                                        {testimonials[activeTestimonial].author}
                                    </div>
                                    <div className={styles.authorTitle}>
                                        {testimonials[activeTestimonial].title}
                                    </div>
                                    <div className={styles.authorCompany}>
                                        {testimonials[activeTestimonial].company}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.testimonialDots}>
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTestimonial(idx)}
                                        className={`${styles.dot} ${idx === activeTestimonial ? styles.dotActive : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA with Background Image */}
            <section className={styles.finalCta}>
                <div className={styles.ctaBackground}>
                    <img src="/Images/site-images/dashboard-3.jpg" alt="Background" />
                    <div className={styles.ctaOverlay}></div>
                </div>
                <div className={styles.ctaContentBox}>
                    <div className={styles.urgencyBadge}>
                        <Zap size={20} style={{ display: 'inline', marginRight: '8px' }} />
                        Start Your Data Transformation Today
                    </div>

                    <h2 className={styles.ctaTitle}>
                        Ready to Turn Your Data Into Your Biggest Competitive Advantage?
                    </h2>

                    <p className={styles.ctaText}>
                        Join organizations across Africa, the US, and worldwide that are making smarter, data-driven decisions.
                    </p>

                    <div className={styles.finalCtaButtons}>
                        <Link
                            to="/contact"
                            onClick={() => handleCTAClick('bottom_primary')}
                            className={styles.whiteBtn}
                        >
                            Schedule Your Free Consultation
                            <ArrowRight size={20} />
                        </Link>

                        <Link
                            to="/services"
                            onClick={() => handleCTAClick('bottom_secondary')}
                            className={styles.outlineBtn}
                        >
                            Explore Our Services
                        </Link>
                    </div>

                    <p className={styles.disclaimer}>
                        No pressure. No obligation. Just a conversation about your data goals.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;