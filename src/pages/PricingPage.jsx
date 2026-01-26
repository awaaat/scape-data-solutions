// frontend/src/pages/PricingPage.jsx

import { ArrowRight, Award, Check, ChevronDown, TrendingUp, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { apiService } from '../services/api';
import styles from './PricingPage.module.css';

const PricingPage = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [expandedAddons, setExpandedAddons] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const handlePlanClick = (plan) => {
        apiService.trackInteraction('conversion', 'pricing_plan_click', { plan });
    };

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const plans = [
        {
            name: "Starter",
            icon: <Zap size={32} />,
            tagline: "Perfect for small businesses & startups",
            priceLabel: "Affordable Entry Point",
            priceDescription: "Starting from low monthly rates",
            description: "Essential analytics to get started with data-driven decisions",
            features: [
                "Custom analytics dashboard",
                "Up to 3 data sources",
                "Monthly reporting",
                "Email support (48hr response)",
                "Basic data integration",
                "Shared analyst support",
                "Quarterly strategy sessions",
                "Standard security protocols"
            ],
            cta: "Get a Quote",
            popular: false,
            minContract: "3 months minimum"
        },
        {
            name: "Professional",
            icon: <TrendingUp size={32} />,
            tagline: "Most popular for growing companies",
            priceLabel: "Best Value",
            priceDescription: "Competitive pricing for scaling teams",
            description: "Advanced analytics and predictive models for scaling businesses",
            features: [
                "Everything in Starter, plus:",
                "Unlimited data sources",
                "Real-time dashboards",
                "Predictive analytics",
                "Machine learning models (basic)",
                "Priority email support",
                "Shared data scientist access",
                "Bi-weekly strategy sessions",
                "API access",
                "Custom integrations (up to 5)"
            ],
            cta: "Get a Quote",
            popular: true,
            minContract: "6 months minimum"
        },
        {
            name: "Enterprise",
            icon: <Award size={32} />,
            tagline: "For established organizations",
            priceLabel: "Custom Solutions",
            priceDescription: "Tailored pricing for your needs",
            description: "Full-scale data transformation with dedicated support",
            features: [
                "Everything in Professional, plus:",
                "Dedicated analyst/scientist",
                "Custom AI/ML development",
                "Deep learning solutions",
                "Data engineering support",
                "Advanced security & compliance",
                "Priority onboarding",
                "Weekly check-ins",
                "Custom SLAs",
                "Phone & email support",
                "Strategic consulting included"
            ],
            cta: "Contact Sales",
            popular: false,
            minContract: "12 months minimum"
        }
    ];

    const addOns = [
        {
            name: "Data Engineering",
            description: "Build and maintain scalable data infrastructure"
        },
        {
            name: "Custom ML Model Development",
            description: "Custom machine learning models for your specific use case"
        },
        {
            name: "Deep Learning Solutions",
            description: "Advanced neural networks and computer vision"
        },
        {
            name: "Training & Workshops",
            description: "Upskill your team on data literacy and analytics"
        },
        {
            name: "Data Audit & Assessment",
            description: "Comprehensive assessment of your data landscape"
        },
        {
            name: "Report Writing & Documentation",
            description: "Professional technical reports and documentation"
        }
    ];

    const faqs = [
        {
            question: "What's included in the free consultation?",
            answer: "A 30-minute call to discuss your data challenges, review your current setup, and outline a potential roadmap. No pressure, no obligation."
        },
        {
            question: "How is pricing determined?",
            answer: "Pricing is customized based on your specific needs, team size, data volume, and required features. Contact us for a detailed quote tailored to your requirements."
        },
        {
            question: "Why minimum contracts?",
            answer: "Data transformation takes time to show real results. Minimum contracts ensure we can deliver sustainable value rather than quick fixes that don't last."
        },
        {
            question: "Can I upgrade or downgrade my plan?",
            answer: "Yes! You can change plans at any renewal period. We'll adjust your billing and service level accordingly."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept bank transfers, credit cards, mobile money, and can work with purchase orders. International payments via PayPal or Wise."
        },
        {
            question: "Do you offer custom packages?",
            answer: "Absolutely! For unique requirements, we can create a custom package that fits your specific needs and budget. Just contact us to discuss."
        },
        {
            question: "Can I cancel my subscription?",
            answer: "After your minimum contract period, you can cancel anytime with 30 days notice. We'll help with a smooth transition of your data and systems."
        }
    ];

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Pricing & Plans | Flexible Data Science Solutions - Scape Data Solutions</title>
                <meta name="description" content="Transparent pricing for data analytics, machine learning, and AI services. Starter, Professional, and Enterprise plans. Free consultation included." />
                <link rel="canonical" href="https://scapedatasolutions.com/pricing" />

                <meta property="og:title" content="Pricing & Plans | Flexible Data Science Solutions" />
                <meta property="og:description" content="Transparent pricing for data analytics and AI. Starter, Professional, and Enterprise plans available." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://scapedatasolutions.com/pricing" />
                <meta property="og:image" content="https://scapedatasolutions.com/logo-1.jpeg" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Pricing & Plans | Data Science Solutions" />
                <meta name="twitter:description" content="Flexible pricing plans for all business sizes." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "PriceSpecification",
                        "name": "Data Analytics Services Pricing",
                        "description": "Flexible pricing plans for data analytics and AI services",
                        "priceCurrency": "USD",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Starter Plan",
                                "description": "Essential analytics for small businesses"
                            },
                            {
                                "@type": "Offer",
                                "name": "Professional Plan",
                                "description": "Advanced analytics for growing companies"
                            },
                            {
                                "@type": "Offer",
                                "name": "Enterprise Plan",
                                "description": "Full-scale data transformation"
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Flexible Pricing That Grows With You
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Contract-based solutions designed for businesses of all sizes.
                        Get a custom quote that matches your exact needs.
                    </p>
                </div>
            </section>

            <section className={styles.plansSection}>
                <div className={styles.sectionContent}>
                    <div className={styles.plansGrid}>
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
                            >
                                {plan.popular && (
                                    <div className={styles.popularBadge}>Most Popular</div>
                                )}

                                <div className={styles.planHeader}>
                                    <div className={styles.planIcon}>{plan.icon}</div>
                                    <h3 className={styles.planName}>{plan.name}</h3>
                                    <p className={styles.planTagline}>{plan.tagline}</p>
                                </div>

                                <div className={styles.planPricing}>
                                    <div className={styles.priceLabel}>{plan.priceLabel}</div>
                                    <div className={styles.priceDescription}>{plan.priceDescription}</div>
                                    <div className={styles.minContract}>{plan.minContract}</div>
                                </div>

                                <p className={styles.planDescription}>{plan.description}</p>

                                <ul className={styles.featuresList}>
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className={styles.feature}>
                                            <Check size={20} className={styles.checkIcon} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    onClick={() => handlePlanClick(plan.name)}
                                    className={styles.planCTA}
                                >
                                    {plan.cta} <ArrowRight size={20} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.addOnsSection}>
                <div className={styles.sectionContent}>
                    <div
                        className={styles.addOnsHeader}
                        onClick={() => setExpandedAddons(!expandedAddons)}
                    >
                        <div>
                            <h2 className={styles.sectionTitle}>Additional Services & Add-Ons</h2>
                            <p className={styles.sectionSubtitle}>
                                Enhance your plan with specialized project-based services
                            </p>
                        </div>
                        <div className={`${styles.expandIcon} ${expandedAddons ? styles.rotated : ''}`}>
                            <ChevronDown size={32} />
                        </div>
                    </div>

                    <div className={`${styles.addOnsGrid} ${expandedAddons ? styles.visible : ''}`}>
                        {addOns.map((addon, index) => (
                            <div key={index} className={styles.addonCard}>
                                <h3 className={styles.addonName}>{addon.name}</h3>
                                <p className={styles.addonDescription}>{addon.description}</p>
                                <Link to="/contact" className={styles.addonLink}>
                                    Get Pricing <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.faqSection}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>

                    <div className={styles.faqGrid}>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`${styles.faqItem} ${expandedFaq === index ? styles.expanded : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className={styles.faqHeader}>
                                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                                    <div className={`${styles.faqIcon} ${expandedFaq === index ? styles.rotated : ''}`}>
                                        <ChevronDown size={24} />
                                    </div>
                                </div>
                                <div className={`${styles.faqAnswer} ${expandedFaq === index ? styles.visible : ''}`}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
                    <p className={styles.ctaText}>
                        Schedule a free consultation to discuss your needs and get a custom quote
                    </p>
                    <Link to="/contact" className={styles.ctaButton}>
                        Get Your Custom Quote <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;