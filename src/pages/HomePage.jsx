import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, BarChart3, CheckCircle, ChevronRight, Database, BookOpen, Shield, Star, TrendingUp, Users, Zap, Globe, LineChart, PieChart, Brain, Target, Clock, Award, Play, Sparkles } from 'lucide-react';
import './HomePage.css';

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
    <div className="homepage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-parallax-bg"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        />

        <div className="hero-content-wrapper">
          <div className="hero-grid">
            <div className="hero-text-content" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              <div className="hero-badge">
                <Star className="badge-icon" />
                <span>Trusted by 35+ Enterprise Clients</span>
              </div>

              <h1 className="hero-title">
                Transform Your Data Into
                <span className="hero-title-highlight">
                  {typedText}
                  <span className="cursor-blink">|</span>
                </span>
              </h1>

              <p className="hero-subtitle">
                Expert analytics and professional writing services that turn complex data into clear, actionable insights. We help you make better decisions faster.
              </p>

              <div className="hero-cta-buttons">
                <button className="cta-primary">
                  <span className="cta-content">
                    Get Started
                    <ArrowRight className="cta-icon" />
                  </span>
                </button>

                <button className="cta-secondary">
                  <span className="cta-content">
                    <Play className="cta-icon" />
                    View Demo
                  </span>
                </button>
              </div>

              <div className="trust-indicators">
                <div className="trust-item">
                  <CheckCircle className="trust-icon" />
                  <span>Free Consultation</span>
                </div>
                <div className="trust-item">
                  <CheckCircle className="trust-icon" />
                  <span>Quick Turnaround</span>
                </div>
                <div className="trust-item">
                  <CheckCircle className="trust-icon" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>

            <div className="hero-stats-panel" style={{ transform: `translateY(-${scrollY * 0.05}px)` }}>
              <div className="stats-grid">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="stat-card" style={{ borderTop: `4px solid ${stat.color}` }}>
                      <Icon className="stat-icon" style={{ color: stat.color }} />
                      <div className="stat-number" style={{ color: stat.color }}>
                        {animatedStats[idx]}+
                      </div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="hero-image-wrapper">
                <img
                  src="/Images/site-images/chart-1.jpg"
                  alt="Interactive Analytics Dashboard"
                  className="hero-image hero-image-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <div className="social-proof-bar">
        <div className="social-proof-content">
          <div className="proof-item">
            <Star className="proof-icon proof-star" />
            <span>4.9/5 Client Rating</span>
          </div>
          <div className="proof-divider" />
          <div className="proof-item">
            <Users className="proof-icon" />
            <span>180+ Projects Delivered</span>
          </div>
          <div className="proof-divider" />
          <div className="proof-item">
            <Globe className="proof-icon" />
            <span>Global Service Coverage</span>
          </div>
        </div>
      </div>

      {/* Full Width Interactive Image Section */}
      <section className="fullwidth-image-section">
        <div className="fullwidth-image-overlay">
          <img
            src="/Images/site-images/dashboard-1.jpg"
            alt="Data Analytics Visualization"
            className="fullwidth-bg-image"
            style={{
              transform: hoveredCard === 'fullwidth' ? 'scale(1.1)' : 'scale(1)'
            }}
          />
          <div className="fullwidth-overlay-gradient" />
          <div
            className="fullwidth-overlay-content"
            onMouseEnter={() => setHoveredCard('fullwidth')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 className="fullwidth-title">Discover Insights That Captivate</h2>
            <p className="fullwidth-text">
              Transform boring reports into narratives that hook your audience and drive decisions
            </p>
            <button className="fullwidth-cta-btn">
              <Sparkles className="btn-icon" />
              Explore Our Services
              <ArrowRight className="btn-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Services Grid */}
      <section className="services-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive Data Solutions</h2>
            <p className="section-subtitle">
              Click each card to explore how we blend data science with persuasive storytelling
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isActive = activeService === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveService(idx)}
                  onMouseEnter={() => setHoveredCard(`service-${idx}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`service-card ${isActive ? 'service-card-active' : ''}`}
                >
                  <div className="service-image-wrapper">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-image"
                      style={{
                        transform: hoveredCard === `service-${idx}` ? 'scale(1.15) rotate(2deg)' : 'scale(1)',
                        filter: isActive ? 'brightness(0.4)' : 'brightness(0.6)'
                      }}
                    />
                    <div className="service-overlay">
                      <div className="service-content">
                        <div
                          className={`service-icon bg-gradient-to-br ${service.gradient}`}
                          style={{
                            transform: hoveredCard === `service-${idx}` ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                          }}
                        >
                          <Icon className="icon-svg" />
                        </div>

                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>

                        <div className={`service-features ${isActive ? 'features-visible' : 'features-hidden'}`}>
                          {service.features.map((feature, fidx) => (
                            <div key={fidx} className="feature-item">
                              <ChevronRight className="feature-icon" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="service-metrics">
                          <div className="metric-item">
                            <div className="metric-value" style={{ color: service.color }}>
                              {service.metric}
                            </div>
                            <div className="metric-label">Success Rate</div>
                          </div>
                          <div className="metric-item">
                            <div className="metric-value metric-impact">{service.impact}</div>
                            <div className="metric-label">Impact</div>
                          </div>
                        </div>

                        <button className={`service-cta ${isActive ? 'cta-active' : ''}`}>
                          {isActive ? 'Get Started' : 'Learn More'}
                          <ArrowRight className="service-cta-icon" />
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
      <section className="split-section">
        <div
          className="split-image-container"
          onMouseEnter={() => setHoveredCard('split-1')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/Images/site-images/data-image-2.jpg"
            alt="Data Processing"
            className="split-image"
            style={{
              transform: hoveredCard === 'split-1' ? 'scale(1.15)' : 'scale(1)'
            }}
          />
        </div>
        <div className="split-content">
          <h2 className="split-title">From Data Overload to Persuasive Power</h2>
          <p className="split-text">
            Transform raw numbers into magnetic stories that captivate stakeholders and spark immediate action.
          </p>
          <ul className="split-features">
            <li className="split-feature-item">
              <CheckCircle className="feature-check-icon" />
              Dynamic Data Pipelines
            </li>
            <li className="split-feature-item">
              <CheckCircle className="feature-check-icon" />
              Interactive Dashboards
            </li>
            <li className="split-feature-item">
              <CheckCircle className="feature-check-icon" />
              AI-Powered Predictions
            </li>
            <li className="split-feature-item">
              <CheckCircle className="feature-check-icon" />
              Compelling Report Writing
            </li>
          </ul>
          <button className="split-cta-btn">
            Discover More
            <ArrowRight className="btn-arrow-icon" />
          </button>
        </div>
      </section>

      {/* Reverse Split Section */}
      <section className="split-section split-section-reverse">
        <div className="split-content">
          <h2 className="split-title">Enterprise-Grade Security Meets Storytelling</h2>
          <p className="split-text">
            Protect your data while we craft narratives that build trust and engagement.
          </p>
          <div className="security-badges">
            <div className="security-badge">
              <Shield className="security-icon" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="security-badge">
              <Shield className="security-icon" />
              <span>GDPR Ready</span>
            </div>
            <div className="security-badge">
              <Shield className="security-icon" />
              <span>256-bit Encryption</span>
            </div>
          </div>
        </div>
        <div
          className="split-image-container"
          onMouseEnter={() => setHoveredCard('split-2')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img
            src="/Images/site-images/data-image-3.jpg"
            alt="Security Visualization"
            className="split-image"
            style={{
              transform: hoveredCard === 'split-2' ? 'scale(1.15)' : 'scale(1)'
            }}
          />
        </div>
      </section>

      {/* Benefits Section with Background Image */}
      <section className="benefits-section">
        <div className="benefits-bg-wrapper">
          <img src="/Images/site-images/dashboard-2.jpg" alt="Background" className="benefits-bg-image" />
          <div className="benefits-overlay" />
        </div>
        <div className="section-container benefits-container">
          <div className="section-header">
            <h2 className="section-title benefits-title">Why Choose Us</h2>
            <p className="section-subtitle benefits-subtitle">
              Proven expertise delivering measurable results
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <TrendingUp className="benefit-icon" style={{ color: '#3b82f6' }} />
              <h3 className="benefit-title">Proven ROI</h3>
              <p className="benefit-text">30%+ efficiency gains in first quarter</p>
            </div>

            <div className="benefit-card">
              <Zap className="benefit-icon" style={{ color: '#10b981' }} />
              <h3 className="benefit-title">Rapid Delivery</h3>
              <p className="benefit-text">Working prototypes in days, not months</p>
            </div>

            <div className="benefit-card">
              <Users className="benefit-icon" style={{ color: '#8b5cf6' }} />
              <h3 className="benefit-title">Expert Team</h3>
              <p className="benefit-text">Data scientists and professional writers</p>
            </div>

            <div className="benefit-card">
              <Shield className="benefit-icon" style={{ color: '#f59e0b' }} />
              <h3 className="benefit-title">Secure & Compliant</h3>
              <p className="benefit-text">Enterprise-grade security standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">What Our Clients Say</h2>

          <div className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="star-icon star-filled" />
              ))}
            </div>

            <blockquote className="testimonial-quote">
              "{testimonials[activeTestimonial].text}"
            </blockquote>

            <div className="testimonial-author-section">
              <div
                className="author-avatar"
                style={{ backgroundColor: testimonials[activeTestimonial].color }}
              />
              <div className="author-info">
                <div className="author-name">{testimonials[activeTestimonial].author}</div>
                <div className="author-title">{testimonials[activeTestimonial].title}</div>
                <div className="author-company">{testimonials[activeTestimonial].company}</div>
              </div>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`testimonial-dot ${idx === activeTestimonial ? 'dot-active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Background Image */}
      <section className="final-cta-section">
        <div className="cta-bg-wrapper">
          <img src="/Images/site-images/dashboard-3.jpg" alt="Background" className="cta-bg-image" />
          <div className="cta-overlay" />
        </div>
        <div className="cta-content-box">
          <h2 className="cta-main-title">
            Ready to Transform Your
            <span className="cta-title-highlight">
              Data Into Decisions?
            </span>
          </h2>

          <p className="cta-main-text">
            Join 180+ companies leveraging our analytics and writing expertise to drive growth
          </p>

          <div className="cta-buttons-wrapper">
            <button className="cta-btn-primary">
              <span className="cta-btn-content">
                Get Started Today
                <ArrowRight className="cta-btn-icon" />
              </span>
            </button>

            <button className="cta-btn-outline">
              Schedule Consultation
            </button>
          </div>

          <div className="cta-trust-items">
            <div className="cta-trust-item">
              <Shield className="cta-trust-icon" />
              <span>No Long-term Contracts</span>
            </div>
            <div className="cta-trust-item">
              <Zap className="cta-trust-icon cta-trust-icon-yellow" />
              <span>Quick Response Time</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;