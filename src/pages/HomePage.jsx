import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, CheckCircle, ChevronRight, Database, BookOpen, Shield, Star, TrendingUp, Users, Zap, Globe, LineChart, PieChart, Brain, Target, Clock, Award, Play, Sparkles } from 'lucide-react';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [typedText, setTypedText] = useState('');
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Typing animation
  useEffect(() => {
    const text = 'Strategic Advantage';
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setTypedText(text.substring(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: BarChart3,
      color: '#3b82f6',
      gradient: 'from-blue-500 to-cyan-500',
      title: 'Business Intelligence & Analytics',
      description: 'Transform raw data into interactive dashboards and actionable insights that drive informed decision-making.',
      features: ['Custom Dashboards', 'Real-time Reporting', 'KPI Tracking', 'Predictive Analytics'],
      metric: '98% accuracy',
      impact: '3x faster insights',
      image: '/Images/site-images/dashboard-1.jpg'
    },
    {
      icon: BookOpen,
      color: '#f59e0b',
      gradient: 'from-amber-500 to-orange-500',
      title: 'Professional Writing Services',
      description: 'Expert content creation, technical documentation, and data storytelling that communicates insights effectively.',
      features: ['Data Storytelling', 'Technical Writing', 'Business Reports', 'Copywriting'],
      metric: '85% engagement',
      impact: '2.5x conversions',
      image: '/Images/site-images/data-image-2.jpg'
    },
    {
      icon: Database,
      color: '#10b981',
      gradient: 'from-emerald-500 to-teal-500',
      title: 'Data Engineering & Integration',
      description: 'Build robust data pipelines that centralize information from multiple sources for seamless access.',
      features: ['ETL Automation', 'Cloud Migration', 'API Integration', 'Real-time Sync'],
      metric: '99.9% uptime',
      impact: '70% cost savings',
      image: '/Images/site-images/dashboard-2.jpg'
    },
    {
      icon: Brain,
      color: '#8b5cf6',
      gradient: 'from-violet-500 to-purple-500',
      title: 'AI & Machine Learning',
      description: 'Deploy intelligent models that predict outcomes, automate decisions, and uncover hidden patterns.',
      features: ['Predictive Models', 'NLP Solutions', 'Computer Vision', 'AutoML'],
      metric: '92% accuracy',
      impact: '5x ROI',
      image: '/Images/site-images/dashboard-3.jpg'
    },
    {
      icon: LineChart,
      color: '#ec4899',
      gradient: 'from-pink-500 to-rose-500',
      title: 'Advanced Analytics',
      description: 'Leverage statistical modeling and AI to discover insights that give you a competitive advantage.',
      features: ['Customer Segmentation', 'Churn Prediction', 'Demand Forecasting', 'A/B Testing'],
      metric: '90% precision',
      impact: '4x revenue',
      image: '/Images/site-images/data-image-1.jpg'
    }
  ];

  const stats = [
    { value: 180, label: 'Projects Delivered', color: '#3b82f6', icon: Target },
    { value: 35, label: 'Enterprise Clients', color: '#10b981', icon: Users },
    { value: 85, label: 'Client Retention', color: '#8b5cf6', icon: Award },
    { value: 12, label: 'Years Experience', color: '#f59e0b', icon: Clock }
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

  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, idx) => {
      let current = 0;
      const increment = stat.value / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setAnimatedStats(prev => {
          const next = [...prev];
          next[idx] = Math.floor(current);
          return next;
        });
      }, 30);
    });
  }, []);

  return (
    <div className={styles.homepageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div
          className={styles.heroParallaxBg}
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        />

        <div className={styles.heroContentWrapper}>
          <div className={styles.heroGrid}>
            <div className={styles.heroTextContent} style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              <div className={styles.heroBadge}>
                <Star className={styles.badgeIcon} />
                <span>Trusted by 35+ Enterprise Clients</span>
              </div>

              <h1 className={styles.heroTitle}>
                Transform Your Data Into
                <span className={styles.heroTitleHighlight}>
                  {typedText}
                  <span className={styles.cursorBlink}>|</span>
                </span>
              </h1>

              <p className={styles.heroSubtitle}>
                Expert analytics and professional writing services that turn complex data into clear, actionable insights. We help you make better decisions faster.
              </p>

              <div className={styles.heroCtaButtons}>
                <button className={styles.ctaPrimary}>
                  <span className={styles.ctaContent}>
                    Get Started
                    <ArrowRight className={styles.ctaIcon} />
                  </span>
                </button>

                <button className={styles.ctaSecondary}>
                  <span className={styles.ctaContent}>
                    <Play className={styles.ctaIcon} />
                    View Demo
                  </span>
                </button>
              </div>

              <div className={styles.trustIndicators}>
                <div className={styles.trustItem}>
                  <CheckCircle className={styles.trustIcon} />
                  <span>Free Consultation</span>
                </div>
                <div className={styles.trustItem}>
                  <CheckCircle className={styles.trustIcon} />
                  <span>Quick Turnaround</span>
                </div>
                <div className={styles.trustItem}>
                  <CheckCircle className={styles.trustIcon} />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>

            <div className={styles.heroStatsPanel} style={{ transform: `translateY(-${scrollY * 0.05}px)` }}>
              <div className={styles.statsGrid}>
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className={styles.statCard} style={{ borderTop: `4px solid ${stat.color}` }}>
                      <Icon className={styles.statIcon} style={{ color: stat.color }} />
                      <div className={styles.statNumber} style={{ color: stat.color }}>
                        {animatedStats[idx]}+
                      </div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className={styles.heroImageWrapper}>
                <img
                  src="/Images/site-images/chart-1.jpg"
                  alt="Interactive Analytics Dashboard"
                  className={`${styles.heroImage} ${styles.heroImageFloat}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className={styles.socialProofBar}>
        <div className={styles.socialProofContent}>
          <div className={styles.proofItem}>
            <Star className={`${styles.proofIcon} ${styles.proofStar}`} />
            <span>4.9/5 Client Rating</span>
          </div>
          <div className={styles.proofDivider} />
          <div className={styles.proofItem}>
            <Users className={styles.proofIcon} />
            <span>180+ Projects Delivered</span>
          </div>
          <div className={styles.proofDivider} />
          <div className={styles.proofItem}>
            <Globe className={styles.proofIcon} />
            <span>Global Service Coverage</span>
          </div>
        </div>
      </div>

      {/* Full Width Interactive Image Section */}
      <section className={styles.fullwidthImageSection}>
        <div className={styles.fullwidthImageOverlay}>
          <img
            src="/Images/site-images/dashboard-1.jpg"
            alt="Data Analytics Visualization"
            className={styles.fullwidthBgImage}
            style={{
              transform: hoveredCard === 'fullwidth' ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          <div className={styles.fullwidthOverlayGradient} />
          <div
            className={styles.fullwidthOverlayContent}
            onMouseEnter={() => setHoveredCard('fullwidth')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 className={styles.fullwidthTitle}>Discover Insights That Captivate</h2>
            <p className={styles.fullwidthText}>
              Transform boring reports into narratives that hook your audience and drive decisions
            </p>
            <button className={styles.fullwidthCtaBtn}>
              <Sparkles className={styles.btnIcon} />
              Explore Our Services
              <ArrowRight className={styles.btnIcon} />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Comprehensive Data Solutions</h2>
            <p className={styles.sectionSubtitle}>
              Click each card to explore how we blend data science with persuasive storytelling
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeService === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  onMouseEnter={() => setHoveredCard(`service-${idx}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`${styles.serviceCard} ${isActive ? styles.serviceCardActive : ''}`}
                >
                  <div className={styles.serviceImageWrapper}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className={styles.serviceImage}
                      style={{
                        transform: hoveredCard === `service-${idx}` ? 'scale(1.15) rotate(2deg)' : 'scale(1)',
                        filter: isActive ? 'brightness(0.4)' : 'brightness(0.6)'
                      }}
                    />
                    <div className={styles.serviceOverlay}>
                      <div className={styles.serviceContent}>
                        <div
                          className={`${styles.serviceIcon} bg-gradient-to-br ${service.gradient}`}
                          style={{
                            transform: hoveredCard === `service-${idx}` ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                          }}
                        >
                          <Icon className={styles.iconSvg} />
                        </div>

                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>

                        <div className={`${styles.serviceFeatures} ${isActive ? styles.featuresVisible : styles.featuresHidden}`}>
                          {service.features.map((feature, fidx) => (
                            <div key={fidx} className={styles.featureItem}>
                              <ChevronRight className={styles.featureIcon} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className={styles.serviceMetrics}>
                          <div className={styles.metricItem}>
                            <div className={styles.metricValue} style={{ color: service.color }}>
                              {service.metric}
                            </div>
                            <div className={styles.metricLabel}>Success Rate</div>
                          </div>
                          <div className={styles.metricItem}>
                            <div className={`${styles.metricValue} ${styles.metricImpact}`}>{service.impact}</div>
                            <div className={styles.metricLabel}>Impact</div>
                          </div>
                        </div>

                        <button className={`${styles.serviceCta} ${isActive ? styles.ctaActive : ''}`}>
                          {isActive ? 'Get Started' : 'Learn More'}
                          <ArrowRight className={styles.serviceCtaIcon} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Split Section with Interactive Images */}
      <section className={styles.splitSection}>
        <div
          className={styles.splitImageContainer}
          onMouseEnter={() => setHoveredCard('split-1')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/Images/site-images/data-image-2.jpg"
            alt="Data Processing"
            className={styles.splitImage}
            style={{
              transform: hoveredCard === 'split-1' ? 'scale(1.15)' : 'scale(1)'
            }}
          />
        </div>
        <div className={styles.splitContent}>
          <h2 className={styles.splitTitle}>From Data Overload to Persuasive Power</h2>
          <p className={styles.splitText}>
            Transform raw numbers into magnetic stories that captivate stakeholders and spark immediate action.
          </p>
          <ul className={styles.splitFeatures}>
            <li className={styles.splitFeatureItem}>
              <CheckCircle className={styles.featureCheckIcon} />
              Dynamic Data Pipelines
            </li>
            <li className={styles.splitFeatureItem}>
              <CheckCircle className={styles.featureCheckIcon} />
              Interactive Dashboards
            </li>
            <li className={styles.splitFeatureItem}>
              <CheckCircle className={styles.featureCheckIcon} />
              AI-Powered Predictions
            </li>
            <li className={styles.splitFeatureItem}>
              <CheckCircle className={styles.featureCheckIcon} />
              Compelling Report Writing
            </li>
          </ul>
          <button className={styles.splitCtaBtn}>
            Discover More
            <ArrowRight className={styles.btnArrowIcon} />
          </button>
        </div>
      </section>

      {/* Reverse Split Section */}
      <section className={`${styles.splitSection} ${styles.splitSectionReverse}`}>
        <div className={styles.splitContent}>
          <h2 className={styles.splitTitle}>Enterprise-Grade Security Meets Storytelling</h2>
          <p className={styles.splitText}>
            Protect your data while we craft narratives that build trust and engagement.
          </p>
          <div className={styles.securityBadges}>
            <div className={styles.securityBadge}>
              <Shield className={styles.securityIcon} />
              <span>SOC 2 Compliant</span>
            </div>
            <div className={styles.securityBadge}>
              <Shield className={styles.securityIcon} />
              <span>GDPR Ready</span>
            </div>
            <div className={styles.securityBadge}>
              <Shield className={styles.securityIcon} />
              <span>256-bit Encryption</span>
            </div>
          </div>
        </div>
        <div
          className={styles.splitImageContainer}
          onMouseEnter={() => setHoveredCard('split-2')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/Images/site-images/data-image-3.jpg"
            alt="Security Visualization"
            className={styles.splitImage}
            style={{
              transform: hoveredCard === 'split-2' ? 'scale(1.15)' : 'scale(1)'
            }}
          />
        </div>
      </section>

      {/* Benefits Section with Background Image */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsBgWrapper}>
          <img src="/Images/site-images/dashboard-2.jpg" alt="Background" className={styles.benefitsBgImage} />
          <div className={styles.benefitsOverlay} />
        </div>
        <div className={`${styles.sectionContainer} ${styles.benefitsContainer}`}>
          <div className={styles.sectionHeader}>
            <h2 className={`${styles.sectionTitle} ${styles.benefitsTitle}`}>Why Choose Us</h2>
            <p className={`${styles.sectionSubtitle} ${styles.benefitsSubtitle}`}>
              Proven expertise delivering measurable results
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <TrendingUp className={styles.benefitIcon} style={{ color: '#3b82f6' }} />
              <h3 className={styles.benefitTitle}>Proven ROI</h3>
              <p className={styles.benefitText}>30%+ efficiency gains in first quarter</p>
            </div>

            <div className={styles.benefitCard}>
              <Zap className={styles.benefitIcon} style={{ color: '#10b981' }} />
              <h3 className={styles.benefitTitle}>Rapid Delivery</h3>
              <p className={styles.benefitText}>Working prototypes in days, not months</p>
            </div>

            <div className={styles.benefitCard}>
              <Users className={styles.benefitIcon} style={{ color: '#8b5cf6' }} />
              <h3 className={styles.benefitTitle}>Expert Team</h3>
              <p className={styles.benefitText}>Data scientists and professional writers</p>
            </div>

            <div className={styles.benefitCard}>
              <Shield className={styles.benefitIcon} style={{ color: '#f59e0b' }} />
              <h3 className={styles.benefitTitle}>Secure & Compliant</h3>
              <p className={styles.benefitText}>Enterprise-grade security standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>What Our Clients Say</h2>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialStars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`${styles.starIcon} ${styles.starFilled}`} />
              ))}
            </div>

            <blockquote className={styles.testimonialQuote}>
              "{testimonials[activeTestimonial].text}"
            </blockquote>

            <div className={styles.testimonialAuthorSection}>
              <div
                className={styles.authorAvatar}
                style={{ backgroundColor: testimonials[activeTestimonial].color }}
              />
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{testimonials[activeTestimonial].author}</div>
                <div className={styles.authorTitle}>{testimonials[activeTestimonial].title}</div>
                <div className={styles.authorCompany}>{testimonials[activeTestimonial].company}</div>
              </div>
            </div>

            <div className={styles.testimonialDots}>
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`${styles.testimonialDot} ${idx === activeTestimonial ? styles.dotActive : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Background Image */}
      <section className={styles.finalCtaSection}>
        <div className={styles.ctaBgWrapper}>
          <img src="/Images/site-images/dashboard-3.jpg" alt="Background" className={styles.ctaBgImage} />
          <div className={styles.ctaOverlay} />
        </div>
        <div className={styles.ctaContentBox}>
          <h2 className={styles.ctaMainTitle}>
            Ready to Transform Your
            <span className={styles.ctaTitleHighlight}>
              Data Into Decisions?
            </span>
          </h2>

          <p className={styles.ctaMainText}>
            Join 180+ companies leveraging our analytics and writing expertise to drive growth
          </p>

          <div className={styles.ctaButtonsWrapper}>
            <button className={styles.ctaBtnPrimary}>
              <span className={styles.ctaBtnContent}>
                Get Started Today
                <ArrowRight className={styles.ctaBtnIcon} />
              </span>
            </button>

            <button className={styles.ctaBtnSecondary}>
              Schedule Consultation
            </button>
          </div>

          <div className={styles.ctaTrustItems}>
            <div className={styles.ctaTrustItem}>
              <Shield className={styles.ctaTrustIcon} />
              <span>No Long-term Contracts</span>
            </div>
            <div className={styles.ctaTrustItem}>
              <Zap className={`${styles.ctaTrustIcon} ${styles.ctaTrustIconYellow}`} />
              <span>Quick Response Time</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;