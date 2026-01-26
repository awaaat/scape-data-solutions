import {
    ArrowRight,
    Award,
    BarChart3,
    BookOpen,
    Brain,
    CheckCircle,
    ChevronDown, ChevronUp,
    Clock,
    Cloud,
    Code,
    Database,
    DollarSign,
    Globe,
    Heart,
    Layers,
    Lock,
    MessageCircle, Phone,
    Play,
    Shield,
    Sparkles,
    Star,
    Target,
    TrendingUp, Users, Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';



const HomePage = () => {
    const [typedText, setTypedText] = useState('');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [currentCaseStudy, setCurrentCaseStudy] = useState(0);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [particles, setParticles] = useState([]);
    const [counters, setCounters] = useState({
        clients: 0, projects: 0, satisfaction: 0, experts: 0,
        countries: 0, awards: 0, dataProcessed: 0, uptime: 0
    });
    const [activeFeature, setActiveFeature] = useState(0);
    const [hoveredService, setHoveredService] = useState(null);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fullText = "Transform Your Business with AI-Powered Data Analytics";

    const services = [
        // ... rest of your code continues
        {
            icon: <Brain size={40} />,
            title: "AI & Machine Learning",
            shortDesc: "Advanced algorithms for predictive insights",
            description: "Harness cutting-edge AI and machine learning to automate tasks, predict outcomes, and uncover hidden patterns in your data with 98% accuracy.",
            metrics: { accuracy: "98%", speed: "10x", roi: "400%" },
            technologies: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "Hugging Face"],
            features: ["Deep Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
        },
        {
            icon: <Database size={40} />,
            title: "Big Data Engineering",
            shortDesc: "Robust infrastructure for massive datasets",
            description: "Build scalable data pipelines that process billions of records efficiently, ensuring data quality and accessibility with 99.9% uptime.",
            metrics: { throughput: "5M/sec", uptime: "99.9%", scale: "Petabyte" },
            technologies: ["Apache Spark", "Hadoop", "Kafka", "Airflow", "dbt"],
            features: ["ETL/ELT Pipelines", "Data Warehouses", "Real-time Processing", "Cloud Migration"]
        },
        {
            icon: <BarChart3 size={40} />,
            title: "Business Intelligence",
            shortDesc: "Interactive dashboards and reporting",
            description: "Transform raw data into actionable insights with stunning visualizations and self-service analytics that drive business growth.",
            metrics: { users: "50K+", insights: "Real-time", adoption: "95%" },
            technologies: ["Tableau", "Power BI", "Looker", "D3.js", "Qlik"],
            features: ["Custom Dashboards", "Self-Service Analytics", "Mobile BI", "Automated Reports"]
        },
        {
            icon: <Shield size={40} />,
            title: "Data Governance & Security",
            shortDesc: "Enterprise-grade protection and compliance",
            description: "Ensure data privacy, regulatory compliance, and security with comprehensive governance frameworks and zero-breach protection.",
            metrics: { compliance: "100%", threats: "0", audits: "Passed" },
            technologies: ["Collibra", "Informatica", "Apache Ranger", "OneTrust"],
            features: ["GDPR Compliance", "Data Quality", "Access Control", "Audit Trails"]
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Predictive Analytics",
            shortDesc: "Forecast trends and optimize decisions",
            description: "Anticipate future outcomes with advanced statistical models and machine learning algorithms achieving 96% forecast accuracy.",
            metrics: { accuracy: "96%", savings: "$5M+", efficiency: "50%" },
            technologies: ["Prophet", "ARIMA", "XGBoost", "LightGBM", "CatBoost"],
            features: ["Time Series Forecasting", "Risk Modeling", "Scenario Planning", "What-If Analysis"]
        },
        {
            icon: <Zap size={40} />,
            title: "Real-Time Analytics",
            shortDesc: "Instant insights from streaming data",
            description: "Process and analyze data in real-time with sub-100ms latency for immediate decision-making and instant alerts.",
            metrics: { latency: "<100ms", events: "5B/day", availability: "99.99%" },
            technologies: ["Apache Flink", "Kinesis", "Storm", "Redis", "Elasticsearch"],
            features: ["Stream Processing", "Live Dashboards", "Event Detection", "IoT Analytics"]
        },
        {
            icon: <Cloud size={40} />,
            title: "Cloud Analytics",
            shortDesc: "Scalable solutions on AWS, Azure, GCP",
            description: "Leverage cloud infrastructure for cost-effective, scalable analytics that grows with your business and reduces costs by 50%.",
            metrics: { elasticity: "Auto", cost: "-50%", performance: "8x" },
            technologies: ["AWS", "Azure", "GCP", "Snowflake", "Redshift"],
            features: ["Multi-Cloud Strategy", "Serverless Analytics", "Auto-Scaling", "Cost Optimization"]
        },
        {
            icon: <Target size={40} />,
            title: "Customer Analytics",
            shortDesc: "Deep insights into customer behavior",
            description: "Understand customer journeys, preferences, and lifetime value to drive 40% retention increase and maximize revenue.",
            metrics: { retention: "+40%", satisfaction: "4.8/5", conversion: "+60%" },
            technologies: ["Segment", "Mixpanel", "Amplitude", "Google Analytics"],
            features: ["Customer Segmentation", "Journey Mapping", "Churn Prediction", "Personalization"]
        },
        {
            icon: <Code size={40} />,
            title: "Custom Development",
            shortDesc: "Tailored solutions for unique needs",
            description: "Build custom analytics applications and integrations that perfectly fit your business requirements and workflows.",
            metrics: { projects: "500+", satisfaction: "98%", delivery: "On-time" },
            technologies: ["Python", "React", "Node.js", "PostgreSQL", "MongoDB"],
            features: ["Custom Applications", "API Development", "Integration Services", "Automation"]
        },
        {
            icon: <Lock size={40} />,
            title: "Data Privacy Solutions",
            shortDesc: "Privacy-first data management",
            description: "Implement privacy-by-design frameworks ensuring full GDPR, CCPA, and HIPAA compliance with advanced anonymization.",
            metrics: { compliance: "100%", privacy: "Guaranteed", certifications: "All" },
            technologies: ["Privacy Tools", "Encryption", "Anonymization", "Compliance Software"],
            features: ["Privacy Impact Assessments", "Data Anonymization", "Consent Management", "Privacy Training"]
        },
        {
            icon: <Globe size={40} />,
            title: "Data Strategy Consulting",
            shortDesc: "Expert guidance for data transformation",
            description: "Develop comprehensive data strategies with expert guidance from POC to enterprise-wide implementation.",
            metrics: { roi: "500%", timeline: "3 months", success: "98%" },
            technologies: ["Consulting Frameworks", "Best Practices", "Industry Standards"],
            features: ["Strategy Development", "Roadmap Planning", "Team Training", "Change Management"]
        },
        {
            icon: <BookOpen size={40} />,
            title: "Data Science Training",
            shortDesc: "Upskill your team with expert training",
            description: "Comprehensive training programs to build data science capabilities within your organization and drive adoption.",
            metrics: { graduates: "1000+", satisfaction: "4.9/5", skills: "Advanced" },
            technologies: ["Python", "R", "SQL", "Machine Learning", "Visualization"],
            features: ["Hands-on Workshops", "Certification Programs", "Mentorship", "Real Projects"]
        }
    ];

    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Chief Data Officer",
            company: "TechCorp Global",
            image: "/Images/site-images/Sarah-Chen.png",  // Updated
            text: "Incredible transformation! Our efficiency increased 60% and we saved $5M in the first year. The team's expertise is unmatched.",
            rating: 5,
            metrics: { roi: "500%", time: "6 months", efficiency: "+60%" }
        },
        {
            name: "Michael Rodriguez",
            role: "VP of Analytics",
            company: "FinanceHub Inc",
            image: "/Images/site-images/Michael-Rodriguez.png",  // Updated
            text: "The infrastructure upgrade was seamless. We now handle 20x more data with perfect uptime. Game-changing results.",
            rating: 5,
            metrics: { throughput: "20x", uptime: "100%", cost: "-40%" }
        },
        {
            name: "Dr. Emily Watson",
            role: "Director of Innovation",
            company: "HealthTech Solutions",
            image: "/Images/site-images/Emily-Watson.Webp",  // Updated
            text: "Predictive analytics reduced readmissions by 45%. Lives saved, costs reduced—truly remarkable impact on healthcare.",
            rating: 5,
            metrics: { readmissions: "-45%", accuracy: "98%", impact: "100K patients" }
        },
        {
            name: "James Kumar",
            role: "CTO",
            company: "RetailMax Enterprise",
            image: "/Images/site-images/James-Kumar.Webp",  // Updated
            text: "From chaos to clarity in weeks. $4M annual savings and 70% conversion increase. Best investment we've made.",
            rating: 5,
            metrics: { savings: "$4M", conversion: "+70%", deployment: "8 weeks" }
        },
        {
            name: "Lisa Thompson",
            role: "Head of BI",
            company: "Manufacturing Pro",
            image: "/Images/site-images/Lisa-Thompson.Webp",  // Updated
            text: "Unbelievable insights reduced downtime by 70%. Operations transformed completely. Couldn't be happier with results.",
            rating: 5,
            metrics: { downtime: "-70%", roi: "400%", efficiency: "+55%" }
        }
    ];

    const caseStudies = [
        {
            title: "E-Commerce Revenue Transformation",
            client: "Global Retail Empire",
            industry: "Retail",
            duration: "5 months",
            image: "/Images/site-images/dashboard-2.jpg",
            challenge: "Stagnant sales and high cart abandonment rates limiting growth potential",
            solution: "AI-driven personalization engine with dynamic pricing and predictive inventory management",
            results: [
                { metric: "Revenue Growth", value: "+85%", icon: <TrendingUp /> },
                { metric: "Conversion Rate", value: "+65%", icon: <Target /> },
                { metric: "Customer Retention", value: "+55%", icon: <Users /> }
            ],
            tech: ["Python", "TensorFlow", "AWS", "React", "BigQuery"]
        },
        {
            title: "Healthcare Cost Optimization",
            client: "Medical Network",
            industry: "Healthcare",
            duration: "7 months",
            image: "/Images/site-images/chart-1.jpg",
            challenge: "Rising operational costs and inefficient resource allocation",
            solution: "AI predictive diagnostics with real-time resource optimization system",
            results: [
                { metric: "Cost Reduction", value: "-45%", icon: <DollarSign /> },
                { metric: "Accuracy", value: "98%", icon: <CheckCircle /> },
                { metric: "Savings", value: "$6.5M", icon: <Award /> }
            ],
            tech: ["PyTorch", "scikit-learn", "Azure", "Power BI"]
        },
        {
            title: "Supply Chain Excellence",
            client: "Industrial Leader",
            industry: "Manufacturing",
            duration: "4 months",
            image: "/Images/site-images/dashboard-1.jpg",
            challenge: "Inefficient inventory management and frequent delays",
            solution: "Real-time analytics with AI forecasting and automated optimization",
            results: [
                { metric: "Cost Savings", value: "-50%", icon: <TrendingUp /> },
                { metric: "On-Time Delivery", value: "99.8%", icon: <Clock /> },
                { metric: "Waste Reduction", value: "-65%", icon: <Award /> }
            ],
            tech: ["Apache Spark", "Kafka", "GCP", "Tableau"]
        }
    ];

    const faqs = [
        {
            question: "How quickly can we see ROI from analytics?",
            answer: "Most clients see initial insights within 2-4 weeks and full ROI within 3-6 months. Many achieve 4-7x returns in the first year through improved efficiency, cost savings, and revenue growth. We provide regular progress updates and measurable KPIs throughout the engagement."
        },
        {
            question: "What makes your AI solutions unique?",
            answer: "Our AI achieves 98%+ accuracy using proprietary algorithms that continuously learn and adapt. We provide full transparency, custom solutions tailored to your business, and ongoing optimization. Unlike generic solutions, we build AI that truly understands your specific challenges and opportunities."
        },
        {
            question: "How do you ensure data security and compliance?",
            answer: "We implement military-grade encryption, AI-powered threat detection, and comply with all major regulations including GDPR, HIPAA, SOC2, and CCPA. Our security-first approach includes regular audits, penetration testing, and 24/7 monitoring. Your data is protected with multiple layers of defense."
        },
        {
            question: "Can you integrate with our existing systems?",
            answer: "Yes! We integrate seamlessly with 300+ platforms including legacy systems, cloud services, and custom applications. Our integration process is designed for minimal disruption to your operations. We handle data migration, system connectivity, and ensure everything works together perfectly."
        },
        {
            question: "What's the typical project cost and timeline?",
            answer: "Projects range from $30K for focused initiatives to $500K+ for enterprise transformations. Timelines vary from 6 weeks for quick wins to 6-12 months for comprehensive solutions. We provide transparent pricing, detailed proposals, and flexible engagement models to fit your budget and timeline."
        },
        {
            question: "What support do you provide after implementation?",
            answer: "Comprehensive support includes hands-on training for your team, detailed documentation, 90-day post-launch assistance, 24/7 monitoring, and optional managed services for ongoing optimization. We're committed to your long-term success with regular check-ins and continuous improvement."
        }
    ];

    const industries = [
        { name: "Financial Services", icon: <DollarSign />, clients: 200, growth: "+85%", description: "Banking, insurance, and fintech" },
        { name: "Healthcare", icon: <Heart />, clients: 120, growth: "+65%", description: "Hospitals, pharma, and medical devices" },
        { name: "Retail & E-commerce", icon: <Target />, clients: 300, growth: "+90%", description: "Online and brick-and-mortar retail" },
        { name: "Manufacturing", icon: <Award />, clients: 150, growth: "+55%", description: "Industrial and consumer goods" },
        { name: "Technology", icon: <Code />, clients: 250, growth: "+100%", description: "SaaS, software, and tech companies" },
        { name: "Telecommunications", icon: <Globe />, clients: 100, growth: "+45%", description: "Network operators and service providers" }
    ];

    const features = [
        {
            title: "Lightning Fast Processing",
            description: "Handle billions of events with sub-second latency",
            icon: <Zap size={32} />,
            demo: "/Images/site-images/dashboard-1.jpg"
        },
        {
            title: "Predictive AI Models",
            description: "Forecast with 98%+ accuracy using advanced algorithms",
            icon: <Brain size={32} />,
            demo: "/Images/site-images/chart-1.jpg"
        },
        {
            title: "Beautiful Dashboards",
            description: "Intuitive visualizations that tell your data story",
            icon: <BarChart3 size={32} />,
            demo: "/Images/site-images/dashboard-2.jpg"
        },
        {
            title: "Automated Insights",
            description: "AI discovers patterns you never knew existed",
            icon: <Sparkles size={32} />,
            demo: "/Images/site-images/dashboard-1.jpg"
        }
    ];

    // Typing effect
    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= fullText.length) {
                setTypedText(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    // Particles
    useEffect(() => {
        const particleArray = Array.from({ length: 20 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2
        }));
        setParticles(particleArray);
    }, []);

    // Scroll progress
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress((scrolled / maxScroll) * 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Counter animation
    useEffect(() => {
        const targets = {
            clients: 1200, projects: 3500, satisfaction: 99.5, experts: 200,
            countries: 60, awards: 45, dataProcessed: 5000, uptime: 99.99
        };
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const timer = setInterval(() => {
            setCounters(prev => {
                const updated = {};
                Object.keys(targets).forEach(key => {
                    const increment = targets[key] / steps;
                    updated[key] = Math.min(prev[key] + increment, targets[key]);
                });
                return updated;
            });
        }, interval);

        setTimeout(() => clearInterval(timer), duration);
        return () => clearInterval(timer);
    }, []);

    // Carousel timers
    useEffect(() => {
        const testimonialTimer = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);

        const caseStudyTimer = setInterval(() => {
            setCurrentCaseStudy(prev => (prev + 1) % caseStudies.length);
        }, 6000);

        const featureTimer = setInterval(() => {
            setActiveFeature(prev => (prev + 1) % features.length);
        }, 4000);

        return () => {
            clearInterval(testimonialTimer);
            clearInterval(caseStudyTimer);
            clearInterval(featureTimer);
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Scape Data Solutions | AI-Powered Data Analytics & Business Intelligence</title>
                <meta name="description" content="Transform your business with AI-powered data analytics. 1200+ clients, 3500+ projects, 99.5% satisfaction. Get expert data science, machine learning, and BI solutions." />
                <link rel="canonical" href="https://scapedatasolutions.com/" />

                <meta property="og:title" content="Scape Data Solutions | AI-Powered Data Analytics" />
                <meta property="og:description" content="Transform your business with expert data analytics and AI. 1200+ clients, 99.5% satisfaction rate." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://scapedatasolutions.com/" />
                <meta property="og:image" content="https://scapedatasolutions.com/Images/site-images/dashboard-1.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI-Powered Data Analytics & Business Intelligence" />
                <meta name="twitter:description" content="1200+ clients trust us for data analytics and AI solutions." />
                <meta name="twitter:image" content="https://scapedatasolutions.com/Images/site-images/dashboard-1.jpg" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Scape Data Solutions",
                        "url": "https://scapedatasolutions.com",
                        "logo": "https://scapedatasolutions.com/logo-1.jpeg",
                        "description": "AI-powered data analytics and business intelligence solutions",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.95",
                            "ratingCount": "1200",
                            "bestRating": "5"
                        }
                    })}
                </script>
            </Helmet>
            <div className={styles.homePage}>
                <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />

                <div className={styles.particlesContainer}>
                    {particles.map((p, i) => (
                        <div
                            key={i}
                            className={styles.dynamicParticle}
                            style={{
                                left: `${p.x}%`,
                                top: `${p.y}%`,
                                width: `${p.size}px`,
                                height: `${p.size}px`
                            }}
                        />
                    ))}
                </div>

                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>
                            <Sparkles size={20} className={styles.badgeIcon} />
                            <span>AI-Powered Analytics Platform</span>
                        </div>

                        <h1 className={styles.heroTitle}>
                            {typedText}
                            <span className={styles.cursor}>|</span>
                        </h1>

                        <p className={styles.heroSubtitle}>
                            Unlock insights • Make data-driven decisions • Scale your success
                        </p>

                        <div className={styles.heroCta}>
                            <Link to="/contact" className={styles.primaryBtn}>
                                Get Started Free
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className={styles.secondaryBtn}>
                                <Play size={20} />
                                Watch Demo
                            </Link>
                        </div>

                        <div className={styles.trustBadges}>
                            <div className={styles.trustItem}>
                                <Shield size={20} />
                                <span>Enterprise Security</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Award size={20} />
                                <span>Industry Leader</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Users size={20} />
                                <span>1200+ Clients</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Star size={20} />
                                <span>5-Star Rated</span>
                            </div>
                        </div>

                        <div className={styles.statsGrid}>
                            <div className={styles.statCard}>
                                <div className={styles.statIcon}><Users size={32} /></div>
                                <div className={styles.statNumber}>{Math.floor(counters.clients)}+</div>
                                <div className={styles.statLabel}>Happy Clients</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statIcon}><Award size={32} /></div>
                                <div className={styles.statNumber}>{Math.floor(counters.projects)}+</div>
                                <div className={styles.statLabel}>Projects Completed</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statIcon}><Star size={32} /></div>
                                <div className={styles.statNumber}>{counters.satisfaction.toFixed(1)}%</div>
                                <div className={styles.statLabel}>Satisfaction Rate</div>
                            </div>
                            <div className={styles.statCard}>
                                <div className={styles.statIcon}><Globe size={32} /></div>
                                <div className={styles.statNumber}>{Math.floor(counters.countries)}+</div>
                                <div className={styles.statLabel}>Countries Served</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Slider */}
                <section className={styles.animatedImageSection}>
                    <div className={styles.imageSlider}>
                        <div className={styles.slidingTrack}>
                            {[...Array(4)].flatMap((_, i) => [
                                <div key={`dash1-${i}`} className={styles.slideItem}>
                                    <img src="/Images/site-images/dashboard-1.jpg" alt="Analytics Dashboard" loading="lazy" />
                                </div>,
                                <div key={`chart1-${i}`} className={styles.slideItem}>
                                    <img src="/Images/site-images/chart-1.jpg" alt="Data Visualization" loading="lazy" />
                                </div>,
                                <div key={`dash2-${i}`} className={styles.slideItem}>
                                    <img src="/Images/site-images/dashboard-2.jpg" alt="Real-Time Monitoring" loading="lazy" />
                                </div>
                            ])}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className={styles.section} id="services">
                    <div className={styles.servicesSection}>
                        <div className={styles.container}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionBadge}>
                                    <Layers size={20} />
                                    <span>Our Services</span>
                                </div>
                                <h2 className={styles.sectionTitle}>Comprehensive Data Solutions</h2>
                                <p className={styles.sectionSubtitle}>
                                    From AI to analytics—everything you need to succeed with data
                                </p>
                            </div>

                            <div className={styles.servicesGrid}>
                                {services.map((service, idx) => (
                                    <div
                                        key={idx}
                                        className={styles.serviceCard}
                                        onMouseEnter={() => setHoveredService(idx)}
                                        onMouseLeave={() => setHoveredService(null)}
                                    >
                                        <div className={styles.serviceHeader}>
                                            <div className={styles.serviceIcon}>{service.icon}</div>
                                            <div>
                                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                                <p className={styles.serviceShortDesc}>{service.shortDesc}</p>
                                            </div>
                                        </div>
                                        <p className={styles.serviceDescription}>{service.description}</p>
                                        <div className={styles.serviceMetrics}>
                                            {Object.entries(service.metrics).map(([key, value]) => (
                                                <div key={key} className={styles.metricBadge}>
                                                    {key}: {value}
                                                </div>
                                            ))}
                                        </div>
                                        <div className={styles.techStack}>
                                            {service.technologies.map((tech, i) => (
                                                <span key={i} className={styles.techBadge}>{tech}</span>
                                            ))}
                                        </div>
                                        <Link to="/contact" className={styles.serviceBtn}>
                                            Learn More <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industries Section */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Industries We Serve</h2>
                            <p className={styles.sectionSubtitle}>
                                Tailored solutions for every sector
                            </p>
                        </div>
                        <div className={styles.servicesGrid}>
                            {industries.map((industry, idx) => (
                                <div key={idx} className={styles.serviceCard}>
                                    <div className={styles.serviceIcon}>{industry.icon}</div>
                                    <h3 className={styles.serviceTitle}>{industry.name}</h3>
                                    <p className={styles.serviceDescription}>{industry.description}</p>
                                    <div className={styles.serviceMetrics}>
                                        <div className={styles.metricBadge}>{industry.clients}+ Clients</div>
                                        <div className={styles.metricBadge}>{industry.growth} Growth</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className={styles.section}>
                    <div className={styles.testimonialsSection}>
                        <div className={styles.container}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionBadge}>
                                    <Star size={20} />
                                    <span>Client Success</span>
                                </div>
                                <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
                                <p className={styles.sectionSubtitle}>
                                    Hear from industry leaders who transformed with data
                                </p>
                            </div>

                            <div className={styles.testimonialCard}>
                                <div className={styles.testimonialHeader}>
                                    <div className={styles.testimonialImage}>
                                        <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
                                    </div>
                                    <div>
                                        <h4>{testimonials[currentTestimonial].name}</h4>
                                        <p>{testimonials[currentTestimonial].role}</p>
                                        <p>{testimonials[currentTestimonial].company}</p>
                                    </div>
                                    <div className={styles.ratingStars}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                                        ))}
                                    </div>
                                </div>
                                <blockquote className={styles.testimonialText}>
                                    "{testimonials[currentTestimonial].text}"
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className={styles.section}>
                    <div className={styles.faqSection}>
                        <div className={styles.container}>
                            <div className={styles.sectionHeader}>
                                <div className={styles.sectionBadge}>
                                    <MessageCircle size={20} />
                                    <span>FAQ</span>
                                </div>
                                <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                                <p className={styles.sectionSubtitle}>
                                    Get answers to common questions about our services
                                </p>
                            </div>

                            <div className={styles.faqGrid}>
                                {faqs.map((faq, idx) => (
                                    <div
                                        key={idx}
                                        className={styles.faqItem}
                                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                    >
                                        <div className={styles.faqQuestion}>
                                            <h3>{faq.question}</h3>
                                            {expandedFaq === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                        </div>
                                        <div className={`${styles.faqAnswer} ${expandedFaq === idx ? styles.faqAnswerExpanded : ''}`}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
                        <p className={styles.ctaSubtitle}>
                            Join 1200+ companies leveraging data for growth
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link to="/contact" className={styles.ctaButton}>
                                Get Started Now
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className={styles.ctaButton}>
                                <Phone size={20} />
                                Schedule a Call
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
export default HomePage;