// frontend/src/pages/SolutionsPage.jsx

import { ArrowRight, Building2, Factory, GraduationCap, Heart, Landmark, Plane, ShoppingCart, Smartphone, TrendingUp, Truck, X, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../services/api';
import styles from './SolutionsPage.module.css';
import { Helmet } from "react-helmet-async";

const SolutionsPage = () => {
    // Track selected industry for popup
    const [selectedIndustry, setSelectedIndustry] = useState(null);

    // Scroll to top on component mount
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

    const industries = [
        {
            icon: <Building2 size={40} />,
            name: "Financial Services",
            description: "Banks, Insurance, Fintech",
            challenges: [
                "Fraud detection and prevention",
                "Risk assessment and management",
                "Customer lifetime value prediction",
                "Regulatory compliance reporting"
            ],
            solutions: [
                "Real-time fraud detection systems",
                "Credit risk scoring models",
                "Customer segmentation and targeting",
                "Automated compliance dashboards"
            ],
            results: "45% reduction in fraud losses, 30% increase in approval rates"
        },
        {
            icon: <ShoppingCart size={40} />,
            name: "Retail & E-commerce",
            description: "Online and brick-and-mortar retailers",
            challenges: [
                "Inventory optimization",
                "Customer churn prediction",
                "Demand forecasting",
                "Price optimization"
            ],
            solutions: [
                "AI-powered demand forecasting",
                "Dynamic pricing engines",
                "Customer behavior analytics",
                "Supply chain optimization"
            ],
            results: "60% reduction in stockouts, 25% increase in profit margins"
        },
        {
            icon: <Heart size={40} />,
            name: "Healthcare",
            description: "Hospitals, Clinics, Health Insurance",
            challenges: [
                "Patient outcome prediction",
                "Resource allocation",
                "Claims processing optimization",
                "Operational efficiency"
            ],
            solutions: [
                "Predictive health analytics",
                "Capacity planning systems",
                "Claims fraud detection",
                "Patient flow optimization"
            ],
            results: "40% faster claims processing, 35% improvement in resource utilization"
        },
        {
            icon: <Factory size={40} />,
            name: "Manufacturing",
            description: "Production and industrial companies",
            challenges: [
                "Quality control",
                "Predictive maintenance",
                "Production optimization",
                "Supply chain visibility"
            ],
            solutions: [
                "IoT sensor analytics",
                "Predictive maintenance models",
                "Production forecasting",
                "Quality assurance automation"
            ],
            results: "50% reduction in downtime, 20% increase in production efficiency"
        },
        {
            icon: <TrendingUp size={40} />,
            name: "Telecommunications",
            description: "Telecom operators and service providers",
            challenges: [
                "Network optimization",
                "Customer churn reduction",
                "Revenue assurance",
                "Service quality monitoring"
            ],
            solutions: [
                "Network performance analytics",
                "Churn prediction models",
                "Revenue leakage detection",
                "Customer experience tracking"
            ],
            results: "35% reduction in churn, 15% increase in ARPU"
        },
        {
            icon: <Truck size={40} />,
            name: "Logistics & Transportation",
            description: "Shipping, delivery, freight companies",
            challenges: [
                "Route optimization",
                "Fleet management",
                "Delivery time prediction",
                "Cost reduction"
            ],
            solutions: [
                "AI-powered route planning",
                "Real-time tracking systems",
                "Predictive maintenance for vehicles",
                "Demand forecasting for capacity"
            ],
            results: "30% reduction in fuel costs, 40% improvement in delivery times"
        },
        {
            icon: <Zap size={40} />,
            name: "Energy & Utilities",
            description: "Power, water, renewable energy providers",
            challenges: [
                "Demand forecasting",
                "Grid optimization",
                "Outage prediction",
                "Energy consumption patterns"
            ],
            solutions: [
                "Smart grid analytics",
                "Predictive maintenance systems",
                "Load forecasting models",
                "Customer usage analytics"
            ],
            results: "25% improvement in grid efficiency, 40% reduction in outages"
        },
        {
            icon: <GraduationCap size={40} />,
            name: "Education",
            description: "Universities, schools, e-learning platforms",
            challenges: [
                "Student performance tracking",
                "Enrollment predictions",
                "Resource allocation",
                "Personalized learning paths"
            ],
            solutions: [
                "Learning analytics platforms",
                "Predictive enrollment models",
                "Student success prediction",
                "Curriculum optimization"
            ],
            results: "35% improvement in student outcomes, 20% increase in retention"
        },
        {
            icon: <Landmark size={40} />,
            name: "Government & Public Sector",
            description: "Federal, state, and local agencies",
            challenges: [
                "Citizen service optimization",
                "Budget allocation",
                "Fraud detection",
                "Policy impact analysis"
            ],
            solutions: [
                "Citizen engagement analytics",
                "Resource optimization models",
                "Compliance monitoring systems",
                "Performance dashboards"
            ],
            results: "45% faster service delivery, 30% cost savings"
        },
        {
            icon: <Plane size={40} />,
            name: "Travel & Hospitality",
            description: "Hotels, airlines, travel agencies",
            challenges: [
                "Dynamic pricing",
                "Demand forecasting",
                "Customer satisfaction",
                "Revenue management"
            ],
            solutions: [
                "Revenue optimization systems",
                "Customer sentiment analysis",
                "Booking prediction models",
                "Personalization engines"
            ],
            results: "20% increase in revenue per room, 35% higher customer satisfaction"
        },
        {
            icon: <Smartphone size={40} />,
            name: "Technology & SaaS",
            description: "Software companies, tech startups",
            challenges: [
                "User behavior analysis",
                "Churn prediction",
                "Product analytics",
                "Growth optimization"
            ],
            solutions: [
                "Product usage analytics",
                "Cohort analysis tools",
                "Predictive churn models",
                "A/B testing frameworks"
            ],
            results: "50% reduction in churn, 40% increase in user engagement"
        },
        {
            icon: <Building2 size={40} />,
            name: "Real Estate",
            description: "Property management, real estate firms",
            challenges: [
                "Property valuation",
                "Market trend analysis",
                "Tenant screening",
                "Investment optimization"
            ],
            solutions: [
                "Automated valuation models",
                "Market prediction analytics",
                "Risk assessment tools",
                "Portfolio optimization"
            ],
            results: "25% more accurate valuations, 30% faster deal closing"
        }
    ];

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Industry Solutions | Data Analytics by Sector - Scape Data Solutions</title>
                <meta name="description" content="Industry-specific data solutions for finance, healthcare, retail, manufacturing, telecom, logistics. Tailored analytics for your sector" />
                <link rel="canonical" href="https://scapedatasolutions.com/solutions" />
            </Helmet>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Industry-Specific Data Solutions
                    </h1>
                    <p className={styles.heroSubtitle}>
                        We understand that every industry has unique data challenges. Our solutions are
                        tailored to deliver maximum impact in your specific sector.
                    </p>
                    <div className={styles.heroStats}>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>20+</div>
                            <div className={styles.statLabel}>Industries Served</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>200+</div>
                            <div className={styles.statLabel}>Solutions Deployed</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statNumber}>90%</div>
                            <div className={styles.statLabel}>Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className={styles.industriesSection}>
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Solutions by Industry</h2>
                    <p className={styles.sectionSubtitle}>
                        Deep expertise across multiple sectors means we understand your business from day one
                    </p>

                    <div className={styles.industriesGrid}>
                        {industries.map((industry, index) => (
                            <div
                                key={`industry-${index}`}
                                className={styles.industryCard}
                                onClick={() => handleCardClick(industry)}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.industryIcon}>
                                        {industry.icon}
                                    </div>
                                    <div className={styles.cardHeaderText}>
                                        <h3 className={styles.industryName}>{industry.name}</h3>
                                        <p className={styles.industryDescription}>{industry.description}</p>
                                    </div>
                                    <div className={styles.expandIcon}>
                                        <ArrowRight size={24} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popup Modal */}
            {selectedIndustry && (
                <div className={styles.modalOverlay} onClick={closePopup}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closePopup}>
                            <X size={24} />
                        </button>
                        <div className={styles.modalHeader}>
                            <div className={styles.industryIcon}>
                                {selectedIndustry.icon}
                            </div>
                            <div>
                                <h3 className={styles.industryName}>{selectedIndustry.name}</h3>
                                <p className={styles.industryDescription}>{selectedIndustry.description}</p>
                            </div>
                        </div>
                        <div className={styles.industryDetails}>
                            <div className={styles.detailSection}>
                                <h4 className={styles.detailTitle}>Common Challenges</h4>
                                <ul className={styles.detailList}>
                                    {selectedIndustry.challenges.map((challenge, idx) => (
                                        <li key={`challenge-${idx}`}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.detailSection}>
                                <h4 className={styles.detailTitle}>Our Solutions</h4>
                                <ul className={styles.detailList}>
                                    {selectedIndustry.solutions.map((solution, idx) => (
                                        <li key={`solution-${idx}`}>{solution}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.resultsBox}>
                                <strong>Typical Results: </strong>
                                {selectedIndustry.results}
                            </div>

                            <Link
                                to="/contact"
                                onClick={() => handleSolutionClick(selectedIndustry.name)}
                                className={styles.learnMoreBtn}
                            >
                                Contact Us <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Don't See Your Industry?</h2>
                    <p className={styles.ctaText}>
                        We've worked with businesses across dozens of sectors. Let's discuss how we can
                        help solve your specific data challenges.
                    </p>
                    <Link
                        to="/contact"
                        className={styles.ctaButton}
                        onClick={() => handleSolutionClick('cta_contact')}
                    >
                        Schedule a Consultation <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SolutionsPage;