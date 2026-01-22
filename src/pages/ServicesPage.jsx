// frontend/src/pages/ServicesPage.jsx

import {
    ArrowRight,
    BarChart3,
    Brain,
    CheckCircle,
    Code,
    Database,
    FileText,
    GitBranch,
    LineChart,
    PieChart,
    Sparkles,
    Target,
    TrendingUp,
    Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../services/api';
import styles from './ServicesPage.module.css';
import { Helmet } from "react-helmet-async";

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const [activeService, setActiveService] = useState(0);

    const handleServiceClick = (serviceName) => {
        apiService.trackInteraction('engagement', 'service_click', { service: serviceName });
    };

    const services = [
        {
            icon: <BarChart3 size={40} />,
            title: "Advanced Analytics & Business Intelligence",
            shortDesc: "Transform raw data into strategic business intelligence",
            fullDesc: "Stop guessing and start knowing. Our advanced analytics uncover hidden patterns, predict trends, and reveal opportunities your competitors are missing. We deliver insights that directly impact your bottom line.",
            benefits: [
                "Identify revenue opportunities and cost savings",
                "Predict customer behavior with high accuracy",
                "Reduce operational inefficiencies significantly",
                "Make data-driven decisions in real-time",
                "Interactive dashboards for all stakeholders"
            ],
            deliverables: [
                "Custom analytics dashboards (Tableau, Power BI, Looker)",
                "Automated reporting systems",
                "Statistical analysis and insights",
                "Strategic recommendations report",
                "KPI tracking and monitoring"
            ],
            complexity: "Moderate Complexity",
            engagement: "Project-Based or Retainer",
            color: "blue",
            image: '/Images/site-images/dashboard-1.jpg'
        },
        {
            icon: <Brain size={40} />,
            title: "Machine Learning Solutions",
            shortDesc: "Automate decisions with intelligent ML models",
            fullDesc: "Leverage machine learning to automate complex decision-making, predict outcomes, and gain competitive advantages. Our ML models learn from your data and improve over time.",
            benefits: [
                "Automate repetitive analytical tasks",
                "Forecast demand and trends accurately",
                "Detect anomalies and fraud in real-time",
                "Personalize customer experiences at scale",
                "Optimize pricing and inventory management"
            ],
            deliverables: [
                "Custom ML models (regression, classification, clustering)",
                "Predictive forecasting systems",
                "Recommendation engines",
                "Churn prediction models",
                "Model deployment and monitoring"
            ],
            complexity: "Advanced Complexity",
            engagement: "Project-Based",
            color: "purple",
            image: '/Images/site-images/dashboard-2.jpg'
        },
        {
            icon: <Zap size={40} />,
            title: "Deep Learning & Neural Networks",
            shortDesc: "Advanced AI for complex pattern recognition",
            fullDesc: "Harness the power of deep learning for computer vision, natural language processing, and complex pattern recognition. Perfect for unstructured data like images, text, and audio.",
            benefits: [
                "Process and analyze images and video",
                "Extract insights from text documents",
                "Speech recognition and generation",
                "Advanced pattern recognition",
                "State-of-the-art accuracy on complex tasks"
            ],
            deliverables: [
                "Custom neural networks (CNN, RNN, LSTM, Transformers)",
                "Computer vision solutions",
                "NLP and text analytics",
                "Time series forecasting",
                "Transfer learning implementations"
            ],
            complexity: "Expert Level",
            engagement: "Project-Based",
            color: "indigo",
            image: '/Images/site-images/dashboard-3.jpg'
        },
        {
            icon: <Database size={40} />,
            title: "Data Engineering & Infrastructure",
            shortDesc: "Build scalable, robust data pipelines",
            fullDesc: "Your data infrastructure is the foundation of everything. We build enterprise-grade data pipelines, warehouses, and lakes that scale with your business and ensure data quality.",
            benefits: [
                "Eliminate data silos and inconsistencies",
                "Process millions of records efficiently",
                "High uptime and data availability",
                "Seamless integration with existing systems",
                "Cloud-native and scalable architecture"
            ],
            deliverables: [
                "Data warehouses and data lakes",
                "ETL/ELT pipelines (Airflow, dbt)",
                "Data quality frameworks",
                "API integrations",
                "Cloud infrastructure setup (AWS, Azure, GCP)"
            ],
            complexity: "Advanced Complexity",
            engagement: "Project-Based or Ongoing",
            color: "green",
            image: '/Images/site-images/data-image-1.jpg'
        },
        {
            icon: <LineChart size={40} />,
            title: "Predictive Analytics & Forecasting",
            shortDesc: "Anticipate future trends and outcomes",
            fullDesc: "Stop reacting and start anticipating. Our predictive models forecast sales, demand, churn, and market trends so you can stay ahead and make proactive decisions.",
            benefits: [
                "Forecast revenue with high accuracy",
                "Predict customer churn before it happens",
                "Optimize inventory and reduce waste",
                "Plan capacity and resources efficiently",
                "Scenario planning and what-if analysis"
            ],
            deliverables: [
                "Time series forecasting models (ARIMA, Prophet, LSTM)",
                "Churn prediction systems",
                "Demand forecasting tools",
                "Scenario planning frameworks",
                "Risk assessment models"
            ],
            complexity: "Moderate to Advanced",
            engagement: "Project-Based",
            color: "red",
            image: '/Images/site-images/data-image-2.jpg'
        },
        {
            icon: <PieChart size={40} />,
            title: "Customer Analytics & Segmentation",
            shortDesc: "Understand and serve customers better",
            fullDesc: "Not all customers are equal. We help you identify your most valuable segments, understand their behavior, and tailor your approach to maximize lifetime value and retention.",
            benefits: [
                "Increase customer lifetime value significantly",
                "Reduce churn by identifying at-risk customers",
                "Personalize marketing with precision",
                "Identify high-value customer segments",
                "Optimize customer acquisition costs"
            ],
            deliverables: [
                "Customer segmentation models (RFM, K-means)",
                "Lifetime value predictions",
                "Churn analysis and prevention",
                "Behavioral analytics dashboards",
                "Behavioral analytics dashboards",
                "Marketing attribution models"
            ],
            complexity: "Moderate Complexity",
            engagement: "Project-Based",
            color: "orange",
            image: '/Images/site-images/data-image-3.jpg'
        },
        {
            icon: <Code size={40} />,
            title: "Data Science Consulting & Strategy",
            shortDesc: "Expert guidance for your data journey",
            fullDesc: "Not sure where to start? Our data scientists and strategists will audit your current state, identify opportunities, and create a comprehensive roadmap for data transformation.",
            benefits: [
                "Clear data strategy and roadmap",
                "Identify quick wins and long-term goals",
                "Technology stack recommendations",
                "Team training and upskilling",
                "Best practices and governance frameworks"
            ],
            deliverables: [
                "Data maturity assessment",
                "Strategic roadmap and priorities",
                "Technology recommendations",
                "Team training sessions",
                "Governance and security frameworks"
            ],
            complexity: "Advisory Level",
            engagement: "Consulting Engagement",
            color: "cyan",
            image: '/Images/site-images/chart-1.jpg'
        },
        {
            icon: <FileText size={40} />,
            title: "Technical Report Writing & Documentation",
            shortDesc: "Professional reports and documentation",
            fullDesc: "Clear, professional documentation of your data projects, analyses, and models. Perfect for stakeholder communication, compliance, or publication.",
            benefits: [
                "Professional presentation of findings",
                "Reproducible research documentation",
                "Compliance-ready reports",
                "Stakeholder-friendly visualizations",
                "Publication-quality documents"
            ],
            deliverables: [
                "Technical analysis reports",
                "Model documentation",
                "Data dictionaries",
                "Executive summaries",
                "Methodology documentation"
            ],
            complexity: "Foundational Level",
            engagement: "Per Deliverable",
            color: "slate",
            image: '/Images/site-images/dashboard-1.jpg'
        },
        {
            icon: <GitBranch size={40} />,
            title: "MLOps & Model Deployment",
            shortDesc: "Production-ready ML systems",
            fullDesc: "Take your models from notebooks to production. We build robust ML pipelines with monitoring, versioning, and automated retraining.",
            benefits: [
                "Automated model deployment",
                "Continuous model monitoring",
                "Version control for models",
                "A/B testing infrastructure",
                "Performance tracking and alerts"
            ],
            deliverables: [
                "CI/CD pipelines for ML",
                "Model serving infrastructure",
                "Monitoring dashboards",
                "Automated retraining pipelines",
                "API endpoints for predictions"
            ],
            complexity: "Advanced Complexity",
            engagement: "Project-Based",
            color: "teal",
            image: '/Images/site-images/dashboard-2.jpg'
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Statistical Analysis & Research",
            shortDesc: "Rigorous statistical analysis",
            fullDesc: "Hypothesis testing, A/B testing, experimental design, and statistical modeling. Perfect for research projects or validating business decisions.",
            benefits: [
                "Scientific rigor in decision making",
                "Validate hypotheses with confidence",
                "Design effective experiments",
                "Understand causal relationships",
                "Publication-ready analysis"
            ],
            deliverables: [
                "Hypothesis testing and confidence intervals",
                "A/B test design and analysis",
                "Regression analysis",
                "Causal inference studies",
                "Statistical reports with visualizations"
            ],
            complexity: "Moderate Complexity",
            engagement: "Project-Based",
            color: "emerald",
            image: '/Images/site-images/dashboard-3.jpg'
        }
    ];

    const getColorStyles = (color) => {
        const colors = {
            blue: { bg: '#eff6ff', text: '#2563eb', gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
            purple: { bg: '#f3e8ff', text: '#9333ea', gradient: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)' },
            green: { bg: '#dcfce7', text: '#16a34a', gradient: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' },
            orange: { bg: '#ffedd5', text: '#ea580c', gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' },
            red: { bg: '#fee2e2', text: '#dc2626', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' },
            indigo: { bg: '#e0e7ff', text: '#4f46e5', gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' },
            cyan: { bg: '#cffafe', text: '#0891b2', gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)' },
            slate: { bg: '#f1f5f9', text: '#475569', gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)' },
            teal: { bg: '#ccfbf1', text: '#0d9488', gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)' },
            emerald: { bg: '#d1fae5', text: '#059669', gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }
        };
        return colors[color];
    };

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Data Science Services | Analytics, ML, AI Solutions - Scape Data Solutions</title>
                <meta name="description" content="Comprehensive data science services including advanced analytics, machine learning, deep learning, data engineering, predictive analytics" />
                <link rel="canonical" href="https://scapedatasolutions.com/services" />
            </Helmet>

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <Sparkles size={16} />
                        <span>10+ Specialized Service Areas</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Comprehensive Data Science Services
                    </h1>
                    <p className={styles.heroSubtitle}>
                        From strategic consulting to production ML systems, we offer flexible data science services
                        tailored to your unique needs and business objectives.
                    </p>
                    <div className={styles.heroFeatures}>
                        <div className={styles.heroFeatureItem}>
                            <CheckCircle size={20} />
                            <span>Expert Team</span>
                        </div>
                        <div className={styles.heroFeatureItem}>
                            <CheckCircle size={20} />
                            <span>Flexible Engagement</span>
                        </div>
                        <div className={styles.heroFeatureItem}>
                            <CheckCircle size={20} />
                            <span>Proven Results</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.servicesSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => {
                            const colors = getColorStyles(service.color);
                            return (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setActiveService(index);
                                        handleServiceClick(service.title);
                                        document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={styles.serviceCard}
                                >
                                    <div className={styles.serviceIconBox} style={{ background: colors.bg }}>
                                        <div style={{ color: colors.text }}>
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h3 className={styles.serviceTitle}>
                                        {service.title}
                                    </h3>
                                    <p className={styles.serviceShortDesc}>
                                        {service.shortDesc}
                                    </p>
                                    <div className={styles.learnMoreLink}>
                                        Learn More <ArrowRight size={18} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="service-details" className={styles.detailSection}>
                <div className={styles.detailContainer}>
                    <div className={styles.detailCard}>
                        <div className={styles.detailHeader}>
                            <div className={styles.detailHeaderLeft}>
                                <div className={styles.detailIconTitle}>
                                    <div
                                        className={styles.detailIconWrapper}
                                        style={{ background: getColorStyles(services[activeService].color).gradient }}
                                    >
                                        {services[activeService].icon}
                                    </div>
                                    <div>
                                        <h2 className={styles.detailTitle}>
                                            {services[activeService].title}
                                        </h2>
                                        <div className={styles.serviceMeta}>
                                            <span className={styles.metaPill} style={{
                                                background: getColorStyles(services[activeService].color).bg,
                                                color: getColorStyles(services[activeService].color).text
                                            }}>
                                                {services[activeService].complexity}
                                            </span>
                                            <span className={styles.metaPill} style={{
                                                background: getColorStyles(services[activeService].color).bg,
                                                color: getColorStyles(services[activeService].color).text
                                            }}>
                                                {services[activeService].engagement}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className={styles.detailDescription}>
                                    {services[activeService].fullDesc}
                                </p>
                            </div>

                            <div className={styles.detailImageWrapper}>
                                <img
                                    src={services[activeService].image}
                                    alt={services[activeService].title}
                                    className={styles.detailImage}
                                />
                            </div>
                        </div>

                        <div className={styles.detailBody}>
                            <div className={styles.detailGrid}>
                                <div className={styles.detailBlock}>
                                    <h3 className={styles.detailSectionTitle}>
                                        <Target size={24} style={{ color: '#16a34a' }} />
                                        Key Benefits
                                    </h3>
                                    <ul className={styles.benefitsList}>
                                        {services[activeService].benefits.map((benefit, idx) => (
                                            <li key={idx} className={styles.benefitItem}>
                                                <CheckCircle size={20} style={{ color: '#22c55e', flexShrink: 0 }} />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.detailBlock}>
                                    <h3 className={styles.detailSectionTitle}>
                                        <Sparkles size={24} style={{ color: '#2563eb' }} />
                                        What You Get
                                    </h3>
                                    <ul className={styles.deliverablesList}>
                                        {services[activeService].deliverables.map((item, idx) => (
                                            <li key={idx} className={styles.deliverableItem}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className={styles.detailFooter}>
                                <Link
                                    to="/contact"
                                    onClick={() => handleServiceClick(`${services[activeService].title}_cta`)}
                                    className={styles.detailCtaBtn}
                                    style={{ background: getColorStyles(services[activeService].color).gradient }}
                                >
                                    Let's Discuss Your Project
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.pagination}>
                        {services.map((service, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveService(index)}
                                className={`${styles.pagDot} ${index === activeService ? styles.active : ''}`}
                                style={{
                                    background: index === activeService ? getColorStyles(service.color).text : '#e2e8f0'
                                }}
                                title={service.title}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.processSection}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>
                        Our Proven Process
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        We've refined our approach over hundreds of projects to deliver results faster and more reliably.
                    </p>

                    <div className={styles.processGrid}>
                        {[
                            {
                                step: "01",
                                title: "Discovery & Audit",
                                desc: "We analyze your current data landscape and identify quick wins",
                                color: "#3b82f6"
                            },
                            {
                                step: "02",
                                title: "Strategy & Roadmap",
                                desc: "We create a custom plan aligned with your business objectives",
                                color: "#9333ea"
                            },
                            {
                                step: "03",
                                title: "Build & Deploy",
                                desc: "Our team builds and implements your solution with zero disruption",
                                color: "#16a34a"
                            },
                            {
                                step: "04",
                                title: "Optimize & Scale",
                                desc: "We continuously improve and expand as your needs evolve",
                                color: "#ea580c"
                            }
                        ].map((phase, idx) => (
                            <div key={idx} className={styles.processStep}>
                                <div className={styles.stepNumber} style={{ background: phase.color }}>
                                    {phase.step}
                                </div>
                                <h3 className={styles.stepTitle}>{phase.title}</h3>
                                <p className={styles.stepDescription}>{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <div className={styles.ctaBadge}>
                        <Sparkles size={16} />
                        Ready to Get Started?
                    </div>
                    <h2 className={styles.ctaTitle}>
                        Transform Your Data Into Results
                    </h2>
                    <p className={styles.ctaText}>
                        Schedule a free consultation to discuss which services are right for your unique situation.
                        We'll help you understand the possibilities and create a custom plan.
                    </p>
                    <Link
                        to="/contact"
                        className={styles.ctaButton}
                    >
                        Schedule Free Consultation
                        <ArrowRight size={20} />
                    </Link>
                    <p className={styles.ctaDisclaimer}>
                        No obligation. Just an honest conversation about your data goals and how we can help.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;