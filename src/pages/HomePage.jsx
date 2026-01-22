// frontend/src/pages/HomePage.jsx

import { ArrowRight, BarChart3, CheckCircle, ChevronRight, Database, Globe, LineChart, PieChart, Play, Shield, Star, TrendingUp, Users, Zap, BookOpen } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../services/api';
import styles from './HomePage.module.css';
import { Helmet } from "react-helmet-async";

const HomePage = () => {
    const [activeService, setActiveService] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const [typedText, setTypedText] = useState('');
    const typingRef = useRef(null);

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

    // Typing animation effect
    useEffect(() => {
        const fullText = 'Strategic Advantage';
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setTypedText((prev) => prev + fullText.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
                // Blink cursor then stop
                typingRef.current.classList.add(styles.blink);
                setTimeout(() => {
                    typingRef.current.classList.remove(styles.blink);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const handleCTAClick = (ctaName) => {
        apiService.trackInteraction('conversion', 'cta_click', {
            cta: ctaName,
            page: 'home'
        });
    };

    // Added writing services explicitly
    const services = [
        {
            icon: BarChart3,
            color: '#2563eb',
            title: 'Business Intelligence & Analytics',
            description: 'Transform raw data into interactive dashboards and reports that tell compelling stories.',
            features: ['Custom Dashboards', 'Real-time Reporting', 'KPI Tracking', 'Predictive Analytics'],
            image: '/Images/site-images/dashboard-1.jpg'
        },
        {
            icon: Database,
            color: '#16a34a',
            title: 'Data Engineering & Integration',
            description: 'Build robust data pipelines that centralize your data for seamless access and analysis.',
            features: ['ETL Pipelines', 'Data Warehousing', 'API Integration', 'Database Optimization'],
            image: '/Images/site-images/dashboard-2.jpg'
        },
        {
            icon: LineChart,
            color: '#9333ea',
            title: 'Advanced Analytics & ML',
            description: 'Leverage AI to predict outcomes, automate decisions, and uncover hidden patterns.',
            features: ['Predictive Modeling', 'Customer Segmentation', 'Churn Prediction', 'Demand Forecasting'],
            image: '/Images/site-images/dashboard-3.jpg'
        },
        {
            icon: PieChart,
            color: '#ea580c',
            title: 'Data Strategy Consulting',
            description: 'Develop comprehensive data strategy aligned with your business goals for maximum impact.',
            features: ['Maturity Assessment', 'Roadmap Development', 'Stack Selection', 'Team Training'],
            image: '/Images/site-images/data-image-1.jpg'
        },
        {
            icon: BookOpen,
            color: '#d97706',
            title: 'Writing-Related Services',
            description: 'Expert content creation, technical writing, data storytelling, and report generation to communicate insights effectively.',
            features: ['Data-Driven Content Writing', 'Technical Documentation', 'Business Reports', 'Copywriting for Analytics'],
            image: '/Images/site-images/data-image-2.jpg'
        }
    ];

    const testimonials = [
        {
            text: "Their analytics and writing services revolutionized our reporting. Now our insights are not just data – they're compelling stories that drive action.",
            author: "James Kariuki",
            title: "Director of Operations",
            company: "Regional Tech Group",
            rating: 5,
            color: '#bfdbfe'
        },
        {
            text: "The combination of ML predictions and professional writing helped us communicate complex ideas simply to stakeholders.",
            author: "Sarah Mitchell",
            title: "VP of Finance",
            company: "Continental Manufacturing",
            rating: 5,
            color: '#bbf7d0'
        },
        {
            text: "Outstanding data strategy consulting paired with top-notch writing services. Perfect for our global needs.",
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

    // Animated stats counter
    const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

    useEffect(() => {
        const statTimers = stats.map((stat, idx) => {
            let count = 0;
            const target = parseInt(stat.value);
            return setInterval(() => {
                if (count < target) {
                    count += Math.ceil(target / 50);
                    setAnimatedStats((prev) => {
                        const newStats = [...prev];
                        newStats[idx] = Math.min(count, target);
                        return newStats;
                    });
                }
            }, 20);
        });

        return () => statTimers.forEach(clearInterval);
    }, []);

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Scape Data Solutions | Unlock Your Data's True Potential</title>
                <meta name="description" content="Expert data analytics, machine learning, AI, and writing services to transform your data into captivating stories and actionable insights that drive real business growth." />
                <link rel="canonical" href="https://scapedatasolutions.com" />
            </Helmet>

            {/* Enhanced Hero with Typing Animation and Parallax */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroText} style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                            <div className={styles.badge} style={{ animation: 'pulse 2s infinite' }}>
                                <Star size={16} style={{ display: 'inline', marginRight: '8px' }} />
                                Global Expertise in Data & Writing Services
                            </div>

                            <h1 className={styles.heroTitle}>
                                Transform Your Data Into
                                <span className={styles.highlight} ref={typingRef}>{typedText}</span>
                            </h1>

                            <p className={styles.heroSubtitle}>
                                Imagine turning overwhelming data chaos into crystal-clear, story-driven insights that compel your team to act. Our blend of advanced analytics and professional writing services makes it happen – don't miss out on the competitive edge others are already gaining.
                            </p>

                            <div className={styles.ctaButtons}>
                                <Link
                                    to="/contact"
                                    onClick={() => handleCTAClick('hero_message')}
                                    className={`${styles.primaryCta} ${styles.pulseCta}`}
                                >
                                    Message Us Now for Free Insights
                                    <ArrowRight size={20} />
                                </Link>

                                <button className={styles.secondaryCta}>
                                    <Play size={20} />
                                    Watch Interactive Demo
                                </button>
                            </div>

                            <div className={styles.trustIndicators}>
                                <div className={styles.trustItem}>
                                    <CheckCircle size={16} />
                                    <span>Proven Results in Weeks</span>
                                </div>
                                <div className={styles.trustItem}>
                                    <CheckCircle size={16} />
                                    <span>Limited Spots Available</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.statsPanel} style={{ transform: `translateY(-${scrollY * 0.05}px)` }}>
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
                                            {animatedStats[idx]}+
                                        </div>
                                        <div className={styles.statLabel}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.heroImageWrapper}>
                                <img
                                    src="/Images/site-images/chart-1.jpg"
                                    alt="Interactive Analytics Dashboard"
                                    className={`${styles.heroImage} ${styles.floatAnimation}`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Full-Width Section with Hover Effects */}
            <section className={styles.fullWidthImageSection}>
                <div className={styles.imageOverlay}>
                    <img src="/Images/site-images/dashboard-1.jpg" alt="Data Analytics Visualization" className={`${styles.bgImage} ${styles.zoomAnimation}`} />
                    <div className={styles.overlayContent}>
                        <h2 className={styles.overlayTitle}>Discover Insights That Captivate and Convert</h2>
                        <p className={styles.overlayText}>
                            Why settle for boring reports when our writing and analytics services create narratives that hook your audience and drive decisions?
                        </p>
                        <Link to="/contact" className={`${styles.overlayBtn} ${styles.bounceAnimation}`}>Message for Custom Demo</Link>
                    </div>
                </div>
            </section>

            {/* Highly Interactive Services with Click Expansion and Hover Arts */}
            <section className={styles.servicesShowcase}>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Interactive Service Suite</h2>
                        <p className={styles.sectionSubtitle}>Click to explore – each service blends data mastery with persuasive writing</p>
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
                                        <img src={service.image} alt={service.title} className={styles.rotateOnHover} />
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
                                                            <li key={fidx} className={styles.fadeInFeature}>
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

            {/* Split Section with Interactive Hover */}
            <section className={styles.splitSection}>
                <div className={styles.splitImage}>
                    <img src="/Images/site-images/data-image-2.jpg" alt="Data Processing Art" className={styles.zoomOnHover} />
                </div>
                <div className={styles.splitContent}>
                    <h2 className={styles.splitTitle}>From Data Overload to Persuasive Power</h2>
                    <p className={styles.splitText}>
                        What if your data could speak for itself? Our services, including expert writing, turn raw numbers into magnetic stories that captivate stakeholders and spark immediate action.
                    </p>
                    <ul className={styles.splitList}>
                        <li><CheckCircle size={20} /> Dynamic Data Pipelines</li>
                        <li><CheckCircle size={20} /> Interactive Dashboards</li>
                        <li><CheckCircle size={20} /> AI-Powered Predictions</li>
                        <li><CheckCircle size={20} /> Compelling Report Writing</li>
                    </ul>
                    <Link to="/services" className={`${styles.splitBtn} ${styles.pulseCta}`}>
                        Discover More
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Reverse Split with Animation */}
            <section className={styles.splitSection}>
                <div className={styles.splitContent}>
                    <h2 className={styles.splitTitle}>Fortress-Level Security with Story-Telling Flair</h2>
                    <p className={styles.splitText}>
                        Protect your data while we craft narratives that build trust. Our writing services ensure even security reports are engaging and easy to understand.
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
                    <img src="/Images/site-images/data-image-3.jpg" alt="Security Visualization" className={styles.zoomOnHover} />
                </div>
            </section>

            {/* Benefits with Interactive Cards */}
            <section className={styles.benefitsSection}>
                <div className={styles.benefitsBackground}>
                    <img src="/Images/site-images/dashboard-2.jpg" alt="Background Art" />
                    <div className={styles.benefitsOverlay}></div>
                </div>
                <div className={styles.sectionContent}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle} style={{ color: 'white' }}>
                            Why Choose Us? The Proof is in the Engagement
                        </h2>
                        <p className={styles.sectionSubtitle} style={{ color: 'rgba(255,255,255,0.9)' }}>
                            Join the elite group transforming data into stories that sell – limited time offer for new clients.
                        </p>
                    </div>

                    <div className={styles.benefitsGrid}>
                        <div className={`${styles.benefitCard} ${styles.flipCard}`}>
                            <TrendingUp size={32} style={{ color: '#2563eb' }} />
                            <h3>Proven ROI</h3>
                            <p>See 30%+ efficiency gains in the first quarter</p>
                        </div>
                        <div className={`${styles.benefitCard} ${styles.flipCard}`}>
                            <Zap size={32} style={{ color: '#16a34a' }} />
                            <h3>Rapid Results</h3>
                            <p>Interactive prototypes in days</p>
                        </div>
                        <div className={`${styles.benefitCard} ${styles.flipCard}`}>
                            <Users size={32} style={{ color: '#9333ea' }} />
                            <h3>Expert Storytellers</h3>
                            <p>Data scientists + writers</p>
                        </div>
                        <div className={`${styles.benefitCard} ${styles.flipCard}`}>
                            <Globe size={32} style={{ color: '#ea580c' }} />
                            <h3>Worldwide Impact</h3>
                            <p>Localized content for global reach</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Testimonials with Click Navigation */}
            <section className={styles.testimonialsSection}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Real Stories from Satisfied Clients</h2>

                    <div className={styles.testimonialCarousel}>
                        <div className={styles.testimonialCardActive}>
                            <div className={styles.stars}>
                                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                    <Star key={i} size={24} fill="#fbbf24" color="#fbbf24" className={styles.starPulse} />
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

            {/* Urgent CTA with Countdown Animation */}
            <section className={styles.finalCta}>
                <div className={styles.ctaBackground}>
                    <img src="/Images/site-images/dashboard-3.jpg" alt="Background Visualization" />
                    <div className={styles.ctaOverlay}></div>
                </div>
                <div className={styles.ctaContentBox}>
                    <div className={styles.urgencyBadge}>
                        <Zap size={20} style={{ display: 'inline', marginRight: '8px' }} />
                        Act Now – Spots Filling Fast!
                    </div>

                    <h2 className={styles.ctaTitle}>
                        Ready to Make Your Data Irresistibly Engaging?
                    </h2>

                    <p className={styles.ctaText}>
                        Thousands are already using our data and writing services to skyrocket engagement. Don't be left behind – message us today!
                    </p>

                    <div className={styles.finalCtaButtons}>
                        <Link
                            to="/contact"
                            onClick={() => handleCTAClick('bottom_message')}
                            className={`${styles.whiteBtn} ${styles.bounceAnimation}`}
                        >
                            Message for Free Consultation
                            <ArrowRight size={20} />
                        </Link>

                        <Link
                            to="/services"
                            onClick={() => handleCTAClick('bottom_secondary')}
                            className={styles.outlineBtn}
                        >
                            Explore Interactive Services
                        </Link>
                    </div>

                    <p className={styles.disclaimer}>
                        Exclusive offer: First 10 messages get priority access.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;