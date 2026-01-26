import {
    ArrowRight,
    Award,
    Brain,
    Building2,
    CheckCircle,
    Cloud,
    Cpu, Database,
    Factory,
    Globe,
    GraduationCap, Heart, Landmark,
    Lock,
    Plane, ShoppingCart, Smartphone,
    Sparkles,
    Star,
    Target,
    TrendingUp, Truck,
    Users,
    X, Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { apiService } from '../services/api';
import styles from './SolutionsPage.module.css';

const SolutionsPage = () => {
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const handleSolutionClick = (solution) => {
        apiService.trackInteraction('engagement', 'solution_click', { solution });
    };

    const handleCardClick = (industry) => {
        setSelectedIndustry(industry);
    };

    const closePopup = () => {
        setSelectedIndustry(null);
    };

    const categories = [
        { id: 'all', name: 'All Industries', icon: <Globe size={18} /> },
        { id: 'enterprise', name: 'Enterprise', icon: <Building2 size={18} /> },
        { id: 'technology', name: 'Technology', icon: <Cpu size={18} /> },
        { id: 'service', name: 'Service', icon: <Users size={18} /> },
        { id: 'infrastructure', name: 'Infrastructure', icon: <Factory size={18} /> }
    ];

    const successMetrics = [
        { icon: <Award size={32} />, value: "20+", label: "Industries Served", color: "#667eea" },
        { icon: <Target size={32} />, value: "500+", label: "Solutions Deployed", color: "#764ba2" },
        { icon: <Star size={32} />, value: "98%", label: "Client Satisfaction", color: "#f093fb" },
        { icon: <TrendingUp size={32} />, value: "$50M+", label: "Value Generated", color: "#667eea" }
    ];

    const industries = [
        {
            icon: <Building2 size={40} />,
            name: "Financial Services",
            category: "enterprise",
            description: "Banks, Insurance, Fintech",
            tagline: "Secure, compliant, and intelligent financial systems",
            challenges: [
                "Fraud detection and prevention in real-time transactions",
                "Risk assessment and management across portfolios",
                "Customer lifetime value prediction and optimization",
                "Regulatory compliance reporting and automation",
                "Anti-money laundering (AML) detection",
                "Credit scoring and loan approval automation"
            ],
            solutions: [
                "Real-time fraud detection systems with ML models",
                "Credit risk scoring models with 98% accuracy",
                "Customer segmentation and targeting platforms",
                "Automated compliance dashboards and reporting",
                "Predictive analytics for market trends",
                "Personalized banking recommendations"
            ],
            technologies: ["Python", "TensorFlow", "Kafka", "PostgreSQL", "AWS", "Tableau"],
            caseStudy: "Leading bank reduced fraud losses by 45% while increasing approval rates by 30%",
            results: "45% reduction in fraud losses, 30% increase in approval rates, $10M+ annual savings",
            timeline: "3-6 months",
            roi: "400%",
            color: "#2563eb"
        },
        {
            icon: <ShoppingCart size={40} />,
            name: "Retail & E-commerce",
            category: "enterprise",
            description: "Online and brick-and-mortar retailers",
            tagline: "Data-driven commerce that converts",
            challenges: [
                "Inventory optimization across multiple channels",
                "Customer churn prediction and prevention",
                "Demand forecasting for seasonal products",
                "Price optimization and competitive analysis",
                "Personalization at scale",
                "Supply chain visibility and optimization"
            ],
            solutions: [
                "AI-powered demand forecasting with 95% accuracy",
                "Dynamic pricing engines that maximize revenue",
                "Customer behavior analytics and segmentation",
                "Supply chain optimization and automation",
                "Recommendation engines for personalization",
                "Real-time inventory tracking across channels"
            ],
            technologies: ["React", "Python", "Spark", "MongoDB", "Azure", "Power BI"],
            caseStudy: "E-commerce giant increased conversion by 60% with personalized recommendations",
            results: "60% reduction in stockouts, 25% increase in profit margins, 40% higher customer retention",
            timeline: "2-4 months",
            roi: "550%",
            color: "#16a34a"
        },
        {
            icon: <Heart size={40} />,
            name: "Healthcare",
            category: "service",
            description: "Hospitals, Clinics, Health Insurance",
            tagline: "Saving lives through intelligent data",
            challenges: [
                "Patient outcome prediction and early intervention",
                "Resource allocation and capacity planning",
                "Claims processing optimization and fraud detection",
                "Operational efficiency and cost reduction",
                "Patient readmission prevention",
                "Medical imaging analysis and diagnosis support"
            ],
            solutions: [
                "Predictive health analytics for early disease detection",
                "AI-powered capacity planning systems",
                "Claims fraud detection with 99% accuracy",
                "Patient flow optimization and scheduling",
                "Clinical decision support systems",
                "Telemedicine analytics and engagement tracking"
            ],
            technologies: ["Python", "TensorFlow", "FHIR", "PostgreSQL", "AWS", "Tableau"],
            caseStudy: "Hospital network reduced readmissions by 40% using predictive analytics",
            results: "40% faster claims processing, 35% improvement in resource utilization, 25% cost reduction",
            timeline: "4-8 months",
            roi: "350%",
            color: "#dc2626"
        },
        {
            icon: <Factory size={40} />,
            name: "Manufacturing",
            category: "infrastructure",
            description: "Production and industrial companies",
            tagline: "Smart factories, zero downtime",
            challenges: [
                "Quality control and defect detection",
                "Predictive maintenance to prevent breakdowns",
                "Production optimization and efficiency",
                "Supply chain visibility end-to-end",
                "Energy consumption optimization",
                "Worker safety and compliance monitoring"
            ],
            solutions: [
                "IoT sensor analytics for real-time monitoring",
                "Predictive maintenance models reducing downtime by 50%",
                "Production forecasting and scheduling optimization",
                "Quality assurance automation with computer vision",
                "Digital twin simulations for process optimization",
                "Supply chain risk management systems"
            ],
            technologies: ["Python", "IoT", "Apache Kafka", "InfluxDB", "Azure", "Power BI"],
            caseStudy: "Manufacturer achieved 50% reduction in unplanned downtime with predictive maintenance",
            results: "50% reduction in downtime, 20% increase in production efficiency, $8M+ annual savings",
            timeline: "3-6 months",
            roi: "425%",
            color: "#f97316"
        },
        {
            icon: <TrendingUp size={40} />,
            name: "Telecommunications",
            category: "infrastructure",
            description: "Telecom operators and service providers",
            tagline: "Connected networks, empowered customers",
            challenges: [
                "Network optimization and performance monitoring",
                "Customer churn reduction and retention",
                "Revenue assurance and leakage prevention",
                "Service quality monitoring and improvement",
                "Capacity planning for network expansion",
                "Customer experience analytics"
            ],
            solutions: [
                "Network performance analytics with real-time alerts",
                "Churn prediction models with 92% accuracy",
                "Revenue leakage detection saving millions",
                "Customer experience tracking across touchpoints",
                "Predictive network capacity planning",
                "Self-service analytics for business users"
            ],
            technologies: ["Python", "Spark", "Cassandra", "Kafka", "AWS", "Grafana"],
            caseStudy: "Telecom operator reduced churn by 35% using predictive analytics",
            results: "35% reduction in churn, 15% increase in ARPU, 99.9% network uptime",
            timeline: "3-5 months",
            roi: "380%",
            color: "#9333ea"
        },
        {
            icon: <Truck size={40} />,
            name: "Logistics & Transportation",
            category: "infrastructure",
            description: "Shipping, delivery, freight companies",
            tagline: "Optimized routes, on-time delivery",
            challenges: [
                "Route optimization for cost and time efficiency",
                "Fleet management and vehicle tracking",
                "Delivery time prediction and accuracy",
                "Cost reduction and margin improvement",
                "Last-mile delivery optimization",
                "Driver performance and safety monitoring"
            ],
            solutions: [
                "AI-powered route planning reducing fuel costs by 30%",
                "Real-time tracking systems with predictive ETAs",
                "Predictive maintenance for vehicles and equipment",
                "Demand forecasting for capacity planning",
                "Last-mile optimization algorithms",
                "Driver behavior analytics for safety"
            ],
            technologies: ["Python", "Google Maps API", "MongoDB", "Apache Kafka", "AWS", "Tableau"],
            caseStudy: "Logistics company cut fuel costs by 30% with AI route optimization",
            results: "30% reduction in fuel costs, 40% improvement in delivery times, 95% on-time rate",
            timeline: "2-4 months",
            roi: "475%",
            color: "#0891b2"
        },
        {
            icon: <Zap size={40} />,
            name: "Energy & Utilities",
            category: "infrastructure",
            description: "Power, water, renewable energy providers",
            tagline: "Smart grids, sustainable future",
            challenges: [
                "Demand forecasting for energy distribution",
                "Grid optimization and load balancing",
                "Outage prediction and prevention",
                "Energy consumption pattern analysis",
                "Renewable energy integration",
                "Asset performance management"
            ],
            solutions: [
                "Smart grid analytics with real-time optimization",
                "Predictive maintenance systems for infrastructure",
                "Load forecasting models with 97% accuracy",
                "Customer usage analytics and insights",
                "Renewable energy forecasting and optimization",
                "Outage prediction and rapid response systems"
            ],
            technologies: ["Python", "IoT", "Time Series DB", "Kafka", "Azure", "Power BI"],
            caseStudy: "Utility company improved grid efficiency by 25% using predictive analytics",
            results: "25% improvement in grid efficiency, 40% reduction in outages, $12M+ savings",
            timeline: "4-7 months",
            roi: "360%",
            color: "#eab308"
        },
        {
            icon: <GraduationCap size={40} />,
            name: "Education",
            category: "service",
            description: "Universities, schools, e-learning platforms",
            tagline: "Personalized learning, better outcomes",
            challenges: [
                "Student performance tracking and intervention",
                "Enrollment predictions and capacity planning",
                "Resource allocation and budget optimization",
                "Personalized learning paths for students",
                "Dropout prevention and retention",
                "Curriculum effectiveness analysis"
            ],
            solutions: [
                "Learning analytics platforms for educators",
                "Predictive enrollment models for planning",
                "Student success prediction and early alerts",
                "Curriculum optimization based on outcomes",
                "Personalized learning recommendation engines",
                "Engagement tracking and intervention systems"
            ],
            technologies: ["Python", "React", "PostgreSQL", "AWS", "Tableau", "LMS APIs"],
            caseStudy: "University increased retention by 20% using predictive student success models",
            results: "35% improvement in student outcomes, 20% increase in retention, 15% cost savings",
            timeline: "3-6 months",
            roi: "320%",
            color: "#6366f1"
        },
        {
            icon: <Landmark size={40} />,
            name: "Government & Public Sector",
            category: "service",
            description: "Federal, state, and local agencies",
            tagline: "Transparent, efficient, data-driven governance",
            challenges: [
                "Citizen service optimization and satisfaction",
                "Budget allocation and resource optimization",
                "Fraud detection and prevention",
                "Policy impact analysis and forecasting",
                "Emergency response coordination",
                "Public safety and crime analytics"
            ],
            solutions: [
                "Citizen engagement analytics and feedback systems",
                "Resource optimization models for budget planning",
                "Compliance monitoring and audit systems",
                "Performance dashboards for transparency",
                "Predictive policing and crime prevention",
                "Emergency response optimization systems"
            ],
            technologies: ["Python", "GIS", "PostgreSQL", "AWS GovCloud", "Tableau", "APIs"],
            caseStudy: "City government reduced service delivery time by 45% with process optimization",
            results: "45% faster service delivery, 30% cost savings, 85% citizen satisfaction",
            timeline: "4-8 months",
            roi: "290%",
            color: "#059669"
        },
        {
            icon: <Plane size={40} />,
            name: "Travel & Hospitality",
            category: "service",
            description: "Hotels, airlines, travel agencies",
            tagline: "Exceptional experiences, maximum revenue",
            challenges: [
                "Dynamic pricing and revenue optimization",
                "Demand forecasting for capacity planning",
                "Customer satisfaction and loyalty",
                "Revenue management across channels",
                "Personalization and guest experience",
                "Operational efficiency and cost control"
            ],
            solutions: [
                "Revenue optimization systems with dynamic pricing",
                "Customer sentiment analysis from reviews",
                "Booking prediction models for planning",
                "Personalization engines for guest experiences",
                "Demand forecasting with 94% accuracy",
                "Operational analytics for efficiency"
            ],
            technologies: ["Python", "React", "MongoDB", "AWS", "Tableau", "Booking APIs"],
            caseStudy: "Hotel chain increased RevPAR by 20% with AI-powered revenue management",
            results: "20% increase in revenue per room, 35% higher customer satisfaction, 15% cost reduction",
            timeline: "2-5 months",
            roi: "410%",
            color: "#8b5cf6"
        },
        {
            icon: <Smartphone size={40} />,
            name: "Technology & SaaS",
            category: "technology",
            description: "Software companies, tech startups",
            tagline: "Product analytics that drive growth",
            challenges: [
                "User behavior analysis and engagement",
                "Churn prediction and prevention",
                "Product analytics and feature adoption",
                "Growth optimization and experimentation",
                "Customer acquisition cost optimization",
                "Product-market fit validation"
            ],
            solutions: [
                "Product usage analytics with behavioral insights",
                "Cohort analysis tools for retention tracking",
                "Predictive churn models with 91% accuracy",
                "A/B testing frameworks for optimization",
                "Growth analytics and funnel optimization",
                "Customer health scoring systems"
            ],
            technologies: ["Python", "React", "PostgreSQL", "Segment", "Mixpanel", "AWS"],
            caseStudy: "SaaS company reduced churn by 50% using predictive analytics and interventions",
            results: "50% reduction in churn, 40% increase in user engagement, 3x faster growth",
            timeline: "2-4 months",
            roi: "520%",
            color: "#ec4899"
        },
        {
            icon: <Building2 size={40} />,
            name: "Real Estate",
            category: "enterprise",
            description: "Property management, real estate firms",
            tagline: "Intelligent valuations, smart investments",
            challenges: [
                "Property valuation and pricing accuracy",
                "Market trend analysis and forecasting",
                "Tenant screening and risk assessment",
                "Investment optimization and portfolio management",
                "Property maintenance prediction",
                "Market timing and opportunity identification"
            ],
            solutions: [
                "Automated valuation models (AVMs) with 95% accuracy",
                "Market prediction analytics for investment timing",
                "Risk assessment tools for tenant screening",
                "Portfolio optimization and diversification",
                "Predictive maintenance for properties",
                "Location intelligence and opportunity mapping"
            ],
            technologies: ["Python", "GIS", "PostgreSQL", "AWS", "Tableau", "Zillow API"],
            caseStudy: "Real estate firm increased deal velocity by 30% with automated valuations",
            results: "25% more accurate valuations, 30% faster deal closing, 18% higher ROI",
            timeline: "3-5 months",
            roi: "395%",
            color: "#14b8a6"
        }
    ];

    const filteredIndustries = activeFilter === 'all'
        ? industries
        : industries.filter(ind => ind.category === activeFilter);

    const whyChooseUs = [
        {
            icon: <Brain size={32} />,
            title: "Industry Expertise",
            description: "Deep domain knowledge across 20+ industries with proven track records",
            color: "#667eea"
        },
        {
            icon: <Target size={32} />,
            title: "Measurable Results",
            description: "Average 400% ROI with clear KPIs and success metrics from day one",
            color: "#764ba2"
        },
        {
            icon: <Lock size={32} />,
            title: "Security First",
            description: "Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance",
            color: "#f093fb"
        },
        {
            icon: <Cloud size={32} />,
            title: "Scalable Solutions",
            description: "Cloud-native architecture that grows with your business needs",
            color: "#667eea"
        }
    ];

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Industry Solutions | Data Analytics by Sector - Scape Data Solutions</title>
                <meta name="description" content="Industry-specific data solutions for finance, healthcare, retail, manufacturing, telecom, logistics, education, government. Tailored analytics delivering 400% average ROI." />
                <link rel="canonical" href="https://scapedatasolutions.com/solutions" />

                <meta property="og:title" content="Industry Solutions | Data Analytics by Sector" />
                <meta property="og:description" content="Tailored data solutions for 20+ industries. Finance, healthcare, retail, manufacturing, and more. 400% average ROI." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://scapedatasolutions.com/solutions" />
                <meta property="og:image" content="https://scapedatasolutions.com/logo-1.jpeg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Industry Solutions | 20+ Sectors" />
                <meta name="twitter:description" content="Tailored data analytics for your industry. 400% average ROI." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Industry-Specific Data Solutions",
                        "description": "Data analytics solutions tailored for 20+ industries",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Financial Services Solutions"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Healthcare Data Analytics"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Retail & E-commerce Solutions"
                            }
                        ]
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <Sparkles size={20} />
                        <span>Transforming 20+ Industries</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Industry-Specific <span className={styles.highlight}>Data Solutions</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        We don't just understand data—we understand YOUR industry. From finance to healthcare,
                        retail to manufacturing, we deliver solutions tailored to your sector's unique challenges and opportunities.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link to="/contact" className={styles.primaryBtn}>
                            Explore Your Industry <ArrowRight size={20} />
                        </Link>
                        <Link to="/services" className={styles.secondaryBtn}>
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Success Metrics */}
            <section className={styles.metricsSection}>
                <div className={styles.metricsGrid}>
                    {successMetrics.map((metric, idx) => (
                        <div key={idx} className={styles.metricCard} style={{ borderColor: metric.color }}>
                            <div className={styles.metricIcon} style={{ color: metric.color }}>
                                {metric.icon}
                            </div>
                            <div className={styles.metricValue}>{metric.value}</div>
                            <div className={styles.metricLabel}>{metric.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whySection}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Why Industry Leaders Choose Us</h2>
                    <p className={styles.sectionSubtitle}>
                        We combine deep industry expertise with cutting-edge technology to deliver solutions that actually work
                    </p>
                    <div className={styles.whyGrid}>
                        {whyChooseUs.map((item, idx) => (
                            <div key={idx} className={styles.whyCard}>
                                <div className={styles.whyIcon} style={{ background: `${item.color}20`, color: item.color }}>
                                    {item.icon}
                                </div>
                                <h3 className={styles.whyTitle}>{item.title}</h3>
                                <p className={styles.whyDescription}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className={styles.filterSection}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Explore Solutions by Industry</h2>
                    <p className={styles.sectionSubtitle}>
                        Select a category to see industry-specific solutions, or browse all
                    </p>
                    <div className={styles.categoryFilter}>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`${styles.categoryBtn} ${activeFilter === cat.id ? styles.active : ''}`}
                                onClick={() => setActiveFilter(cat.id)}
                            >
                                {cat.icon}
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.industriesGrid}>
                        {filteredIndustries.map((industry, index) => (
                            <div
                                key={`industry-${index}`}
                                className={styles.industryCard}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => handleCardClick(industry)}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <div className={styles.cardHeader}>
                                    <div
                                        className={styles.industryIcon}
                                        style={{
                                            background: `${industry.color}15`,
                                            color: industry.color
                                        }}
                                    >
                                        {industry.icon}
                                    </div>
                                    <div className={styles.cardHeaderText}>
                                        <h3 className={styles.industryName}>{industry.name}</h3>
                                        <p className={styles.industryTagline}>{industry.tagline}</p>
                                    </div>
                                    <div className={styles.expandIcon} style={{ color: industry.color }}>
                                        <ArrowRight size={24} />
                                    </div>
                                </div>
                                <p className={styles.industryDescription}>{industry.description}</p>
                                <div className={styles.quickStats}>
                                    <div className={styles.quickStat}>
                                        <span className={styles.statLabel}>ROI</span>
                                        <span className={styles.statValue} style={{ color: industry.color }}>
                                            {industry.roi}
                                        </span>
                                    </div>
                                    <div className={styles.quickStat}>
                                        <span className={styles.statLabel}>Timeline</span>
                                        <span className={styles.statValue} style={{ color: industry.color }}>
                                            {industry.timeline}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedIndustry && (
                <div className={styles.modalOverlay} onClick={closePopup}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closePopup}>
                            <X size={24} />
                        </button>

                        <div className={styles.modalHeader} style={{ borderColor: selectedIndustry.color }}>
                            <div
                                className={styles.modalIconLarge}
                                style={{
                                    background: `${selectedIndustry.color}20`,
                                    color: selectedIndustry.color
                                }}
                            >
                                {selectedIndustry.icon}
                            </div>
                            <div>
                                <h3 className={styles.modalTitle}>{selectedIndustry.name}</h3>
                                <p className={styles.modalTagline}>{selectedIndustry.tagline}</p>
                            </div>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.modalSection}>
                                <h4 className={styles.modalSectionTitle}>
                                    <Target size={20} style={{ color: selectedIndustry.color }} />
                                    Common Challenges
                                </h4>
                                <ul className={styles.modalList}>
                                    {selectedIndustry.challenges.map((challenge, idx) => (
                                        <li key={`challenge-${idx}`}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.modalSection}>
                                <h4 className={styles.modalSectionTitle}>
                                    <Sparkles size={20} style={{ color: selectedIndustry.color }} />
                                    Our Solutions
                                </h4>
                                <ul className={styles.modalList}>
                                    {selectedIndustry.solutions.map((solution, idx) => (
                                        <li key={`solution-${idx}`}>{solution}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.modalSection}>
                                <h4 className={styles.modalSectionTitle}>
                                    <Database size={20} style={{ color: selectedIndustry.color }} />
                                    Technologies Used
                                </h4>
                                <div className={styles.techBadges}>
                                    {selectedIndustry.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className={styles.techBadge}
                                            style={{ borderColor: selectedIndustry.color, color: selectedIndustry.color }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.caseStudyBox} style={{ borderColor: selectedIndustry.color }}>
                                <div className={styles.caseStudyIcon}>
                                    <Award size={24} style={{ color: selectedIndustry.color }} />
                                </div>
                                <div>
                                    <strong>Success Story:</strong>
                                    <p>{selectedIndustry.caseStudy}</p>
                                </div>
                            </div>

                            <div className={styles.resultsBox} style={{ background: `${selectedIndustry.color}15` }}>
                                <strong style={{ color: selectedIndustry.color }}>Typical Results: </strong>
                                {selectedIndustry.results}
                            </div>

                            <div className={styles.modalButtons}>
                                <Link
                                    to="/contact"
                                    onClick={() => handleSolutionClick(selectedIndustry.name)}
                                    className={styles.modalPrimaryBtn}
                                    style={{ background: selectedIndustry.color }}
                                >
                                    Get Started <ArrowRight size={18} />
                                </Link>
                                <Link
                                    to="/services"
                                    className={styles.modalSecondaryBtn}
                                    style={{ borderColor: selectedIndustry.color, color: selectedIndustry.color }}
                                >
                                    View Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <div className={styles.ctaBadge}>
                        <Star size={18} />
                        <span>Ready to Transform Your Industry?</span>
                    </div>
                    <h2 className={styles.ctaTitle}>Don't See Your Industry Listed?</h2>
                    <p className={styles.ctaText}>
                        We've worked with businesses across dozens of sectors worldwide. From startups to Fortune 500 companies,
                        we have the expertise to solve your unique data challenges and drive measurable results.
                    </p>
                    <div className={styles.ctaButtons}>
                        <Link
                            to="/contact"
                            className={styles.ctaButton}
                            onClick={() => handleSolutionClick('cta_contact')}
                        >
                            Schedule a Consultation <ArrowRight size={20} />
                        </Link>
                        <Link to="/case-studies" className={styles.ctaSecondaryButton}>
                            View Case Studies
                        </Link>
                    </div>
                    <div className={styles.ctaTrust}>
                        <div className={styles.trustItem}>
                            <CheckCircle size={20} />
                            <span>No long-term contracts</span>
                        </div>
                        <div className={styles.trustItem}>
                            <CheckCircle size={20} />
                            <span>Free initial consultation</span>
                        </div>
                        <div className={styles.trustItem}>
                            <CheckCircle size={20} />
                            <span>ROI guarantee</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SolutionsPage;