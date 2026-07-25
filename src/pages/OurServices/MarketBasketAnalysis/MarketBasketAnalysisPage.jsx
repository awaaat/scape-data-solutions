import React, { useState, useEffect, useRef } from 'react';
import styles from './MarketBasketAnalysisPage.module.css';
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

const MarketBasketAnalysisPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState(null);
  const [counters, setCounters] = useState({ aov: 0, conversion: 0, lift: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const statsRef = useRef(null);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isLoading) {
      const targetAOV = 25;
      const targetConversion = 18;
      const targetLift = 30;
      let startAOV = 0;
      let startConversion = 0;
      let startLift = 0;
      const duration = 2000;
      const steps = 60;
      const incrementAOV = targetAOV / steps;
      const incrementConversion = targetConversion / steps;
      const incrementLift = targetLift / steps;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounters({
            aov: Math.min(startAOV + incrementAOV * currentStep, targetAOV),
            conversion: Math.min(startConversion + incrementConversion * currentStep, targetConversion),
            lift: Math.min(startLift + incrementLift * currentStep, targetLift),
          });
        } else {
          clearInterval(interval);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: '🔗',
      title: 'Association Rules',
      description: 'Discover which products are frequently bought together using advanced association rule mining with support, confidence, and lift metrics.',
      details: ['Support threshold optimization', 'Confidence scoring', 'Lift analysis', 'Rule visualization'],
    },
    {
      icon: '⏱️',
      title: 'Time‑based Patterns',
      description: 'Analyze temporal patterns to predict when customers are likely to purchase complementary items based on historical timing.',
      details: ['Purchase interval analysis', 'Seasonal trend detection', 'Predictive timing models', 'Behavioral sequencing'],
    },
    {
      icon: '📦',
      title: 'Bundle Recommendations',
      description: 'Create intelligent product bundles that increase average order value and customer satisfaction through strategic pairing.',
      details: ['Dynamic bundle generation', 'Price optimization', 'Inventory alignment', 'Personalization engine'],
    },
    {
      icon: '📧',
      title: 'Campaign Automation',
      description: 'Automate cross‑sell campaigns across email, on‑site, and in‑store channels with AI‑driven triggers and personalization.',
      details: ['Trigger-based workflows', 'Multi-channel orchestration', 'A/B testing integration', 'Real-time optimization'],
    },
  ];

  const benefits = [
    {
      icon: '📈',
      title: '25% Higher AOV',
      description: 'Retailers using our solution see average order value increase by 25% or more.',
    },
    {
      icon: '🔄',
      title: '18% Better Conversion',
      description: 'Conversion rates improve by 18% through intelligent cross‑sell recommendations.',
    },
    {
      icon: '👥',
      title: '30% Lift in Engagement',
      description: 'Customer engagement metrics show a 30% lift with personalized basket recommendations.',
    },
    {
      icon: '📊',
      title: 'Data‑Driven Decisions',
      description: 'Make informed decisions with real‑time analytics and actionable insights.',
    },
  ];

  const faqs = [
    {
      question: 'What is Market Basket Analysis?',
      answer: 'Market Basket Analysis is a data mining technique that identifies products frequently purchased together. It uses association rules to uncover hidden patterns in customer purchasing behavior.',
    },
    {
      question: 'How does cross‑sell benefit my business?',
      answer: 'Cross‑sell increases average order value by recommending complementary products. It improves customer satisfaction by helping customers discover relevant items they might need.',
    },
    {
      question: 'How quickly can I see results?',
      answer: 'Results vary by data volume, but many clients see measurable improvements within 4‑6 weeks of implementation.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We implement enterprise‑grade encryption and security protocols to protect your data. We comply with GDPR, CCPA, and other privacy regulations.',
    },
  ];

  if (isLoading) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}>
          <div className={styles.loaderRing}></div>
          <div className={styles.loaderRing}></div>
          <div className={styles.loaderRing}></div>
          <div className={styles.loaderText}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <SEO
        title="Market Basket & Cross-Sell Analysis | Scape Data Solutions"
        description="Uncover hidden purchase patterns with AI-powered market basket analysis and drive cross-sell revenue through smarter product bundling."
        path="/services/market-basket-analysis"
        schema={buildServiceSchema({
          name: "Market Basket & Cross-Sell Analysis",
          description: "Uncover hidden purchase patterns with AI-powered market basket analysis and drive cross-sell revenue through smarter product bundling.",
          path: "/services/market-basket-analysis",
        })}
      />
      {/* Scroll to top */}
      {showScrollTop && (
        <button className={styles.scrollTop} onClick={scrollToTop}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}

      {/* Video Modal */}
      {isVideoOpen && (
        <div className={styles.videoModal} onClick={() => setIsVideoOpen(false)}>
          <div className={styles.videoModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.videoModalClose} onClick={() => setIsVideoOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Market Basket Analysis"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <a href="/">Home</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <a href="/services">Services</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span>Market Basket & Cross‑Sell Analysis</span>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Market Basket & Cross‑Sell Analysis</h1>
              <p className={styles.heroSubtitle}>Uncover hidden purchase patterns</p>

              <div className={styles.heroDescription}>
                <p>
                  Your customers' baskets contain valuable clues about their preferences. Our Market Basket Analysis
                  service uses association rule mining to uncover which items are often purchased together. We also analyze
                  temporal patterns – for example, a customer who buys a laptop is likely to buy a bag within two weeks.
                </p>
                <p>
                  We apply these insights to your e‑commerce site, in‑store promotions, and email campaigns. We recommend
                  product bundles, trigger‑based cross‑sell offers, and placement strategies that increase average order
                  value. We also help you identify under‑performing categories that could benefit from strategic pairing.
                </p>
                <p className={styles.highlightText}>
                  Retailers using our solution have increased average order value by 25% and improved conversion rates by
                  18%. You turn your data into revenue without increasing marketing spend.
                </p>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>+{Math.round(counters.aov)}%</span>
                  <span className={styles.statLabel}>AOV</span>
                  <div className={styles.statBar}>
                    <div className={styles.statBarFill} style={{ width: `${counters.aov}%` }}></div>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>+{Math.round(counters.conversion)}%</span>
                  <span className={styles.statLabel}>Conversion</span>
                  <div className={styles.statBar}>
                    <div className={styles.statBarFill} style={{ width: `${counters.conversion}%` }}></div>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statValue}>+{Math.round(counters.lift)}%</span>
                  <span className={styles.statLabel}>Lift</span>
                  <div className={styles.statBar}>
                    <div className={styles.statBarFill} style={{ width: `${counters.lift}%` }}></div>
                  </div>
                </div>
              </div>

              <div className={styles.heroActions}>
                <a href="/contact" className={`${styles.button} ${styles.buttonPrimary}`}>
                  Get This Service
                  <svg viewBox="0 0 11 11" fill="none">
                    <path d="M6.36482 0.293945L10.9998 4.92895V5.40895L6.33482 10.0889L5.46482 8.70895L8.10482 6.02395H0.694824V4.32895H8.11982L5.47982 1.64395L6.36482 0.293945Z" fill="currentColor" />
                  </svg>
                </a>
                <button className={styles.watchDemo} onClick={() => setIsVideoOpen(true)}>
                  <span className={styles.playIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </span>
                  Watch Demo
                </button>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroCard}>
                <div className={styles.heroCardHeader}>
                  <div className={styles.heroCardDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>Basket Analysis Dashboard</span>
                </div>
                <div className={styles.heroCardBody}>
                  <div className={styles.heroChart}>
                    <div className={styles.heroChartBar} style={{ height: '85%' }}><span>85%</span></div>
                    <div className={styles.heroChartBar} style={{ height: '62%' }}><span>62%</span></div>
                    <div className={styles.heroChartBar} style={{ height: '91%' }}><span>91%</span></div>
                    <div className={styles.heroChartBar} style={{ height: '47%' }}><span>47%</span></div>
                    <div className={styles.heroChartBar} style={{ height: '73%' }}><span>73%</span></div>
                    <div className={styles.heroChartBar} style={{ height: '58%' }}><span>58%</span></div>
                    <div className={styles.heroChartBar} style={{ height: '96%' }}><span>96%</span></div>
                  </div>
                  <div className={styles.heroChartLabels}>
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className={styles.tabsSection}>
        <div className={styles.container}>
          <div className={styles.tabsHeader}>
            <button
              className={`${styles.tabButton} ${activeTab === 'overview' ? styles.active : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'features' ? styles.active : ''}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'benefits' ? styles.active : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              Benefits
            </button>
            <button
              className={`${styles.tabButton} ${activeTab === 'faq' ? styles.active : ''}`}
              onClick={() => setActiveTab('faq')}
            >
              FAQ
            </button>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'overview' && (
              <div className={styles.tabPanel}>
                <h2>How Market Basket Analysis Drives Revenue</h2>
                <div className={styles.overviewGrid}>
                  <div className={styles.overviewText}>
                    <p>
                      Market Basket Analysis (MBA) is a powerful technique that reveals product associations
                      within customer transactions. By analyzing purchasing patterns, businesses can uncover
                      opportunities for cross‑selling and upselling that directly impact revenue.
                    </p>
                    <p>
                      Our solution goes beyond simple "people who bought X also bought Y" recommendations.
                      We analyze the temporal dimension – understanding when customers are likely to purchase
                      complementary items – to deliver timely, relevant offers that convert.
                    </p>
                    <p>
                      The result is a complete understanding of your customer's journey, enabling you to
                      optimize every touchpoint from discovery to purchase.
                    </p>
                    <div className={styles.overviewStats}>
                      <div>
                        <span className={styles.overviewStatNumber}>239+</span>
                        <span className={styles.overviewStatLabel}>Clients Served</span>
                      </div>
                      <div>
                        <span className={styles.overviewStatNumber}>697+</span>
                        <span className={styles.overviewStatLabel}>Projects Delivered</span>
                      </div>
                      <div>
                        <span className={styles.overviewStatNumber}>19.8%</span>
                        <span className={styles.overviewStatLabel}>Satisfaction Rate</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.overviewImage}>
                    <img src="/Images/site-images/market-basket-overview.jpg" alt="Market Basket Overview" />
                    <div className={styles.overviewImageBadge}>
                      <span>📈</span>
                      <span>+25% AOV</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className={styles.tabPanel}>
                <h2>Key Features</h2>
                <div className={styles.featuresGrid}>
                  {features.map((feature, index) => (
                    <div key={index} className={styles.featureCard}>
                      <div className={styles.featureIcon}>{feature.icon}</div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                      <ul className={styles.featureDetails}>
                        {feature.details.map((detail, idx) => (
                          <li key={idx}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <a href="/contact" className={styles.featureLink}>
                        Learn More
                        <svg viewBox="0 0 11 11" fill="none">
                          <path d="M6.36482 0.293945L10.9998 4.92895V5.40895L6.33482 10.0889L5.46482 8.70895L8.10482 6.02395H0.694824V4.32895H8.11982L5.47982 1.64395L6.36482 0.293945Z" fill="currentColor" />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className={styles.tabPanel}>
                <h2>Why Choose Our Solution</h2>
                <div className={styles.benefitsGrid}>
                  {benefits.map((benefit, index) => (
                    <div key={index} className={styles.benefitCard}>
                      <div className={styles.benefitIcon}>{benefit.icon}</div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                      <div className={styles.benefitProgress}>
                        <div className={styles.benefitProgressBar} style={{ width: `${85 + index * 5}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className={styles.tabPanel}>
                <h2>Frequently Asked Questions</h2>
                <div className={styles.faqList}>
                  {faqs.map((faq, index) => (
                    <div key={index} className={`${styles.faqItem} ${openFaq === index ? styles.open : ''}`}>
                      <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                        <span>{faq.question}</span>
                        <span className={styles.faqToggle}>{openFaq === index ? '−' : '+'}</span>
                      </button>
                      <div className={styles.faqAnswer}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaContent}>
              <h2>Ready to unlock hidden revenue?</h2>
              <p>Let's analyze your customer baskets and find the cross‑sell opportunities that drive growth.</p>
              <div className={styles.ctaActions}>
                <a href="/contact" className={`${styles.button} ${styles.buttonLight}`}>
                  Get This Service
                  <svg viewBox="0 0 11 11" fill="none">
                    <path d="M6.36482 0.293945L10.9998 4.92895V5.40895L6.33482 10.0889L5.46482 8.70895L8.10482 6.02395H0.694824V4.32895H8.11982L5.47982 1.64395L6.36482 0.293945Z" fill="currentColor" />
                  </svg>
                </a>
                <a href="/portfolio" className={styles.ctaSecondaryLink}>See Our Work</a>
              </div>
            </div>
            <div className={styles.ctaImage}>
              <img src="/Images/site-images/cta-market-basket.jpg" alt="Contact us" />
              <div className={styles.ctaImageOverlay}>
                <div className={styles.ctaImageStat}>
                  <span>25%</span>
                  <span>Average AOV Increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketBasketAnalysisPage;