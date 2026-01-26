import {
    ArrowRight,
    Award,
    BarChart3,
    Beaker,
    Bot,
    Brain,
    CheckCircle,
    Cloud,
    Database,
    Edit3,
    FileSearch,
    Phone,
    Play,
    Shield,
    Sparkles, Star,
    Target,
    TrendingUp,
    Users,
    X,
    Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import styles from './ServicesPage.module.css';


const ServicesPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedService, setSelectedService] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const categories = [
        { id: 'all', name: 'All Services', icon: <Sparkles size={18} /> },
        { id: 'ai', name: 'AI & ML', icon: <Brain size={18} /> },
        { id: 'data', name: 'Data Engineering', icon: <Database size={18} /> },
        { id: 'analytics', name: 'Analytics', icon: <BarChart3 size={18} /> },
        { id: 'consulting', name: 'Consulting', icon: <Beaker size={18} /> }
    ];

    const services = [
        {
            id: 1,
            category: 'ai',
            icon: <Brain size={40} />,
            title: "AI & Machine Learning",
            tagline: "Intelligence that evolves",
            description: "Build AI systems that learn, adapt, and deliver superhuman performance.",
            features: ["Deep Learning", "NLP", "Computer Vision", "Predictive Models"],
            metrics: { accuracy: "98%", projects: "500+", clients: "200+" },
            color: "#9333ea",
            gradient: "linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)"
        },
        {
            id: 2,
            category: 'data',
            icon: <Database size={40} />,
            title: "Big Data Engineering",
            tagline: "Infrastructure at scale",
            description: "Process billions of records with bulletproof data pipelines.",
            features: ["ETL Pipelines", "Data Lakes", "Real-time Processing", "Cloud Migration"],
            metrics: { throughput: "10M/s", uptime: "99.9%", storage: "5PB+" },
            color: "#16a34a",
            gradient: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)"
        },
        {
            id: 3,
            category: 'analytics',
            icon: <BarChart3 size={40} />,
            title: "Business Intelligence",
            tagline: "Insights that drive decisions",
            description: "Transform data into beautiful, actionable dashboards.",
            features: ["Custom Dashboards", "Self-Service", "Mobile BI", "Real-time Reports"],
            metrics: { dashboards: "1000+", users: "50K+", adoption: "95%" },
            color: "#2563eb",
            gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
        },
        {
            id: 4,
            category: 'ai',
            icon: <Shield size={40} />,
            title: "Data Governance",
            tagline: "Security you can trust",
            description: "Enterprise-grade protection with complete compliance.",
            features: ["GDPR Compliance", "Encryption", "Access Control", "Audit Trails"],
            metrics: { breaches: "0", compliance: "100%", audits: "Perfect" },
            color: "#4f46e5",
            gradient: "linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)"
        },
        {
            id: 5,
            category: 'analytics',
            icon: <TrendingUp size={40} />,
            title: "Predictive Analytics",
            tagline: "See the future, seize the moment",
            description: "Forecast trends with surgical precision.",
            features: ["Time Series", "Risk Modeling", "Scenario Planning", "Forecasting"],
            metrics: { accuracy: "96%", savings: "$5M+", roi: "400%" },
            color: "#dc2626",
            gradient: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)"
        },
        {
            id: 6,
            category: 'data',
            icon: <Zap size={40} />,
            title: "Real-Time Analytics",
            tagline: "Speed of thought processing",
            description: "Millisecond insights for split-second decisions.",
            features: ["Stream Processing", "Live Dashboards", "Event Detection", "IoT Integration"],
            metrics: { latency: "<50ms", events: "5B/day", availability: "99.99%" },
            color: "#ea580c",
            gradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)"
        },
        {
            id: 7,
            category: 'data',
            icon: <Cloud size={40} />,
            title: "Cloud Analytics",
            tagline: "Infinite scale, zero limits",
            description: "Elastic infrastructure that grows with you.",
            features: ["Multi-Cloud", "Serverless", "Auto-Scaling", "Cost Optimization"],
            metrics: { elasticity: "Unlimited", cost: "-50%", performance: "8x" },
            color: "#0891b2",
            gradient: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)"
        },
        {
            id: 8,
            category: 'analytics',
            icon: <Target size={40} />,
            title: "Customer Analytics",
            tagline: "Know your customers deeply",
            description: "Decode behavior, maximize lifetime value.",
            features: ["Segmentation", "Journey Mapping", "Churn Prediction", "Personalization"],
            metrics: { retention: "+40%", clv: "+60%", satisfaction: "4.8/5" },
            color: "#0d9488",
            gradient: "linear-gradient(135deg, #0d9488 0%, #0f766e 100%)"
        },
        {
            id: 9,
            category: 'ai',
            icon: <Bot size={40} />,
            title: "AI Model Training",
            tagline: "Custom intelligence, built for you",
            description: "Train models that outperform humans.",
            features: ["Custom Models", "Transfer Learning", "Fine-tuning", "Deployment"],
            metrics: { accuracy: "99%", speed: "-70%", models: "5000+" },
            color: "#6366f1",
            gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)"
        },
        {
            id: 10,
            category: 'ai',
            icon: <FileSearch size={40} />,
            title: "Data Labeling",
            tagline: "Precision at massive scale",
            description: "High-quality labels for superior models.",
            features: ["Image Annotation", "Text Labeling", "Quality Control", "Custom Taxonomy"],
            metrics: { accuracy: "99.8%", speed: "40x", volume: "500K/day" },
            color: "#059669",
            gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)"
        },
        {
            id: 11,
            category: 'consulting',
            icon: <Edit3 size={40} />,
            title: "Research & Analysis",
            tagline: "Thought leadership that matters",
            description: "Publication-ready research and insights.",
            features: ["Research Papers", "Whitepapers", "Data Analysis", "Visualizations"],
            metrics: { publications: "300+", citations: "5K+", impact: "High" },
            color: "#475569",
            gradient: "linear-gradient(135deg, #475569 0%, #334155 100%)"
        },
        {
            id: 12,
            category: 'consulting',
            icon: <Beaker size={40} />,
            title: "Data Science Consulting",
            tagline: "Strategy that wins",
            description: "Expert guidance from POC to production.",
            features: ["Strategy", "POC Development", "Team Training", "Tool Selection"],
            metrics: { roi: "500%", timeline: "3 months", satisfaction: "98%" },
            color: "#f97316",
            gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
        }
    ];

    const filteredServices = activeCategory === 'all'
        ? services
        : services.filter(s => s.category === activeCategory);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress((scrolled / maxScroll) * 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <>
            <Helmet>
                <title>Data Analytics Services | AI, ML & BI Solutions - Scape Data Solutions</title>
                <meta name="description" content="Comprehensive data services: AI/ML, Big Data Engineering, Business Intelligence, Predictive Analytics, Cloud Analytics. 1200+ clients, 99.5% satisfaction." />
                <link rel="canonical" href="https://scapedatasolutions.com/services" />

                <meta property="og:title" content="Data Analytics Services | AI & ML Solutions" />
                <meta property="og:description" content="12 elite data services from AI to analytics. Transform your business with our expert solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://scapedatasolutions.com/services" />
                <meta property="og:image" content="https://scapedatasolutions.com/Images/site-images/dashboard-1.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Data Analytics Services | 12 Elite Solutions" />
                <meta name="twitter:description" content="AI, ML, Big Data, BI, and more. 1200+ clients trust our services." />
                <meta name="twitter:image" content="https://scapedatasolutions.com/Images/site-images/dashboard-1.jpg" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Data Analytics and AI Services",
                        "provider": {
                            "@type": "Organization",
                            "name": "Scape Data Solutions"
                        },
                        "areaServed": "Worldwide",
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Data Analytics Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "AI & Machine Learning"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Big Data Engineering"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Business Intelligence"
                                    }
                                }
                            ]
                        }
                    })}
                </script>
            </Helmet>
            <div className={styles.servicesPage}>
                <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />

                {/* CREATIVE HERO - Split Screen Design */}
                <section className={styles.heroSection}>
                    <div className={styles.heroLeft}>
                        <div className={styles.heroContent}>
                            <div className={styles.heroBadge}>
                                <Sparkles size={20} />
                                <span>12 Elite Services</span>
                            </div>
                            <h1 className={styles.heroTitle}>
                                Services That <span className={styles.highlight}>Transform</span> Businesses
                            </h1>
                            <p className={styles.heroText}>
                                From AI to analytics, we deliver end-to-end solutions that drive real results.
                                Choose your weapon and dominate your industry.
                            </p>
                            <div className={styles.heroStats}>
                                <div className={styles.heroStatItem}>
                                    <div className={styles.statValue}>1200+</div>
                                    <div className={styles.statLabel}>Clients</div>
                                </div>
                                <div className={styles.heroStatItem}>
                                    <div className={styles.statValue}>3500+</div>
                                    <div className={styles.statLabel}>Projects</div>
                                </div>
                                <div className={styles.heroStatItem}>
                                    <div className={styles.statValue}>99.5%</div>
                                    <div className={styles.statLabel}>Satisfaction</div>
                                </div>
                            </div>
                            <div className={styles.heroCta}>
                                <Link to="/contact" className={styles.ctaPrimary}>
                                    Get Started <ArrowRight size={20} />
                                </Link>
                                <Link to="/contact" className={styles.ctaSecondary}>
                                    <Play size={20} /> Watch Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroRight}>
                    </div>
                </section>

                {/* CATEGORY FILTER - Interactive Pills */}
                <section className={styles.filterSection}>
                    <div className={styles.filterContainer}>
                        <h2 className={styles.filterTitle}>Explore by Category</h2>
                        <div className={styles.categoryFilter}>
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    className={`${styles.categoryBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.icon}
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SERVICES GRID - Card Masonry */}
                <section className={styles.servicesSection}>
                    <div className={styles.servicesContainer}>
                        <div className={styles.servicesGrid}>
                            {filteredServices.map((service, idx) => (
                                <div
                                    key={service.id}
                                    className={styles.serviceCard}
                                    style={{
                                        animationDelay: `${idx * 0.1}s`,
                                        background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}05 100%)`
                                    }}
                                    onClick={() => setSelectedService(service)}
                                >
                                    <div className={styles.cardTop}>
                                        <div
                                            className={styles.cardIcon}
                                            style={{ background: service.gradient }}
                                        >
                                            {service.icon}
                                        </div>
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.cardTitle}>{service.title}</h3>
                                            <p className={styles.cardTagline}>{service.tagline}</p>
                                        </div>
                                    </div>

                                    <p className={styles.cardDescription}>{service.description}</p>

                                    <div className={styles.cardFeatures}>
                                        {service.features.map((feature, i) => (
                                            <span key={i} className={styles.featureTag}>
                                                <CheckCircle size={14} style={{ color: service.color }} />
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={styles.cardMetrics}>
                                        {Object.entries(service.metrics).map(([key, value]) => (
                                            <div key={key} className={styles.metricItem}>
                                                <div className={styles.metricValue} style={{ color: service.color }}>
                                                    {value}
                                                </div>
                                                <div className={styles.metricLabel}>{key}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        className={styles.cardBtn}
                                        style={{ background: service.gradient }}
                                    >
                                        Learn More <ArrowRight size={18} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROCESS TIMELINE - Horizontal Scroll */}
                <section className={styles.processSection}>
                    <div className={styles.processContainer}>
                        <div className={styles.processHeader}>
                            <h2 className={styles.processTitle}>Our Battle-Tested Process</h2>
                            <p className={styles.processSubtitle}>From discovery to delivery in 4 proven steps</p>
                        </div>
                        <div className={styles.processTimeline}>
                            {[
                                { num: "01", title: "Discovery", desc: "Deep dive into your needs", color: "#667eea" },
                                { num: "02", title: "Strategy", desc: "Custom roadmap design", color: "#764ba2" },
                                { num: "03", title: "Build", desc: "Agile development", color: "#f093fb" },
                                { num: "04", title: "Optimize", desc: "Continuous improvement", color: "#ffecd2" }
                            ].map((step, idx) => (
                                <div key={idx} className={styles.timelineStep}>
                                    <div className={styles.stepCircle} style={{ background: step.color }}>
                                        {step.num}
                                    </div>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA SECTION - Bold & Direct */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
                        <p className={styles.ctaText}>
                            Join 1200+ companies leveraging our services for exponential growth
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link to="/contact" className={styles.ctaBtnPrimary}>
                                Start Your Project <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className={styles.ctaBtnSecondary}>
                                <Phone size={20} /> Schedule a Call
                            </Link>
                        </div>
                        <div className={styles.ctaTrust}>
                            <div className={styles.trustBadge}>
                                <Star size={16} fill="#fbbf24" color="#fbbf24" />
                                <span>5.0 Rating</span>
                            </div>
                            <div className={styles.trustBadge}>
                                <Users size={16} />
                                <span>1200+ Clients</span>
                            </div>
                            <div className={styles.trustBadge}>
                                <Award size={16} />
                                <span>Industry Leader</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICE DETAIL MODAL */}
                {selectedService && (
                    <div className={styles.modal} onClick={() => setSelectedService(null)}>
                        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                            <button className={styles.modalClose} onClick={() => setSelectedService(null)}>
                                <X size={24} />
                            </button>
                            <div className={styles.modalHeader} style={{ background: selectedService.gradient }}>
                                <div className={styles.modalIcon}>{selectedService.icon}</div>
                                <h2>{selectedService.title}</h2>
                                <p>{selectedService.tagline}</p>
                            </div>
                            <div className={styles.modalBody}>
                                <p className={styles.modalDescription}>{selectedService.description}</p>
                                <h3>Key Features</h3>
                                <ul className={styles.modalFeatures}>
                                    {selectedService.features.map((f, i) => (
                                        <li key={i}>
                                            <CheckCircle size={20} style={{ color: selectedService.color }} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className={styles.modalBtn} style={{ background: selectedService.gradient }}>
                                    Get This Service <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ServicesPage;