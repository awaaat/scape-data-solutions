import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Smartphone,
  Users,
  Target,
  Repeat,
  BarChart4,
  TrendingUp,
  Star,
  Check,
  ChevronUp,
  Activity,
  Layers,
  GitBranch,
} from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './PortfolioMobilePage.module.css';

// ─── PROJECTS ──────────────────────────────────────────────
const projects = [
  {
    title: 'Mobile App User Engagement Analytics',
    client: 'FitTrack Health',
    industry: 'Health & Fitness',
    desc: 'Comprehensive analytics platform tracking user sessions, retention cohorts, and feature adoption to drive engagement.',
    tech: 'Firebase Analytics · BigQuery · Looker · Python',
    metric: '2.5x engagement lift',
    impact: 'Monthly active users grew by 180%',
  },
  {
    title: 'E‑commerce Conversion Funnel Optimisation',
    client: 'ShopWave Mobile',
    industry: 'Retail',
    desc: 'Funnel analysis that identifies drop‑off points in the mobile checkout process, with A/B test integration.',
    tech: 'Amplitude · Segment · Python · Airflow',
    metric: '32% conversion rate increase',
    impact: 'Added $4.5M in annual revenue',
  },
  {
    title: 'Mobile Game Performance Monitoring',
    client: 'Arcade Studios',
    industry: 'Gaming',
    desc: 'Real‑time dashboard that tracks player retention, session length, and crash rates, with alerts for anomalies.',
    tech: 'Unity Analytics · Grafana · InfluxDB',
    metric: '35% crash rate reduction',
    impact: 'Average session time increased by 22%',
  },
  {
    title: 'Travel App User Journey Analytics',
    client: 'Wanderlust Travel',
    industry: 'Travel',
    desc: 'End‑to‑end tracking of user interactions from search to booking, with personalisation based on behaviour.',
    tech: 'Mixpanel · AWS Kinesis · Redshift · Tableau',
    metric: '45% higher booking completion',
    impact: 'Customer lifetime value (LTV) rose by 28%',
  },
  {
    title: 'Social Media Sentiment Analysis',
    client: 'SocialSphere',
    industry: 'Social Media',
    desc: 'Analytics that mines user comments and reactions to gauge sentiment and trend topics, powering content recommendations.',
    tech: 'Google Cloud NLP · Pub/Sub · BigQuery',
    metric: '94% sentiment accuracy',
    impact: 'Content engagement increased by 37%',
  },
  {
    title: 'Banking App User Experience Analytics',
    client: 'Digital Federal Credit Union',
    industry: 'Finance',
    desc: 'Dashboard tracking user friction points, feature usage, and session abandonment to improve UX.',
    tech: 'Heap · Snowflake · Looker · dbt',
    metric: '27% reduction in drop‑off',
    impact: 'App Store rating improved from 3.8 to 4.6',
  },
];

// ─── FEATURES ──────────────────────────────────────────────
const features = [
  {
    icon: Users,
    title: 'User Acquisition & Attribution',
    desc: 'Track install sources, first‑time user behaviour, and campaign performance across all channels.',
    visual: 'acquisition',
  },
  {
    icon: Activity,
    title: 'In‑App Engagement Analysis',
    desc: 'Measure session depth, feature adoption, and user flows to understand what keeps users coming back.',
    visual: 'engagement',
  },
  {
    icon: Target,
    title: 'Conversion & Funnel Optimisation',
    desc: 'Identify drop‑off points, run A/B tests, and personalise experiences based on user segments.',
    visual: 'funnel',
  },
];

// ─── USE CASES ─────────────────────────────────────────────
const useCases = [
  {
    icon: Smartphone,
    title: 'Retention & Churn Prediction',
    desc: 'Predict which users are at risk of churning and automatically trigger re‑engagement campaigns.',
    list: ['Cohort analysis and retention curves', 'Predictive churn modeling', 'Automated re‑engagement workflows'],
    visual: 'retention',
  },
  {
    icon: BarChart4,
    title: 'Real‑Time Performance Dashboards',
    desc: 'Monitor key metrics like active users, session duration, and crash rates in real time.',
    list: ['Live user activity monitoring', 'Custom alerting and anomaly detection', 'Executive‑friendly dashboards'],
    visual: 'dashboard',
  },
  {
    icon: GitBranch,
    title: 'A/B Testing & Experimentation',
    desc: 'Run controlled experiments to validate product decisions and measure impact with statistical rigour.',
    list: ['Multi‑variant A/B testing', 'Statistical significance calculation', 'Iterative feature rollout'],
    visual: 'experiment',
  },
  {
    icon: Layers,
    title: 'Data Integration & Warehousing',
    desc: 'Unify data from multiple sources into a single, queryable warehouse for comprehensive analysis.',
    list: ['Connectors for 50+ data sources', 'ETL pipelines and data modeling', 'Self‑service analytics with Looker'],
    visual: 'warehouse',
  },
];

// ─── ANIMATION VARIANTS ────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};
const VIEWPORT = { once: false, amount: 0.12 };

// ─── HERO CHAT MOCKUP ──────────────────────────────────────
const HeroChatMockup = () => {
  const [messages, setMessages] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);
  const containerRef = useRef(null);

  const chatSequence = [
    { type: 'user', text: 'Show me our retention cohorts for the last 6 months' },
    { type: 'ai', text: "Here's your retention analysis — I've broken it down by cohort month and calculated the 30‑day, 60‑day, and 90‑day retention rates. Overall 90‑day retention is 68%." },
    { type: 'user', text: 'What\'s driving the drop‑off in the Q3 cohort?' },
    { type: 'ai', text: 'The Q3 cohort shows a 12% drop at day 7. I\'ve correlated this with a decline in feature X usage — users who don\'t activate feature X by day 3 have 3x higher churn. Recommended: re‑engagement campaign.' },
    { type: 'user', text: 'Can you show me the funnel for that cohort?' },
    { type: 'ai', text: 'Sure. Here\'s the funnel: 100% install → 78% registration → 62% first action → 45% repeat → 28% purchase. The biggest drop is between registration and first action.' },
    { type: 'user', text: 'What about the Android vs iOS comparison?' },
    { type: 'ai', text: 'iOS users have 15% higher retention and 20% higher LTV. Android users convert faster initially but drop off sooner. I\'d recommend optimizing the Android onboarding flow.' },
    { type: 'user', text: 'Which features drive the most engagement for returning users?' },
    { type: 'ai', text: 'Top 3 features: push notifications (2.8x lift), weekly digest (2.1x), and social sharing (1.9x). Users who engage with all three have 75% 90‑day retention.' },
    { type: 'user', text: 'What\'s the revenue impact of improving retention by 5%?' },
    { type: 'ai', text: 'A 5% retention improvement would increase LTV by 12% and annual recurring revenue by approximately $2.1M based on current user base and average spend.' },
    { type: 'user', text: 'Can we see the cohort breakdown by acquisition channel?' },
    { type: 'ai', text: 'Organic users have the highest 90‑day retention (72%), followed by paid social (65%), and influencer (58%). Paid social has the highest initial conversion but drops faster.' },
    { type: 'user', text: 'What about the impact of the new onboarding flow?' },
    { type: 'ai', text: 'The new onboarding flow increased 7‑day retention by 18% and reduced drop‑off at the registration step by 32%. It\'s now our standard for all new users.' },
    { type: 'user', text: 'Show me the daily active user trend for the last 30 days' },
    { type: 'ai', text: 'DAU has grown 22% month‑over‑month, with a spike on weekends (up 15% vs weekdays). The highest activity is between 7‑9 PM local time.' },
  ];

  // Seed initial messages
  useEffect(() => {
    const initialMessages = chatSequence.slice(0, 3);
    setMessages(initialMessages);
    setNextIndex(3);
  }, []);

  // Append new messages one by one
  useEffect(() => {
    if (nextIndex >= chatSequence.length) return;
    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, chatSequence[nextIndex]]);
      setNextIndex((i) => i + 1);
    }, 3200);
    return () => clearTimeout(timer);
  }, [nextIndex]);

  // Scroll container to bottom when messages update
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={styles.heroMockup}>
      <div className={styles.mockupHeader}>
        <div className={styles.mockupDots}>
          <span className={styles.mockupDot} style={{ background: '#ff5f6d' }} />
          <span className={styles.mockupDot} style={{ background: '#ffc107' }} />
          <span className={styles.mockupDot} style={{ background: '#4caf50' }} />
        </div>
        <span className={styles.mockupTitle}>Mobile Analytics · Live</span>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem', color: '#22c55e' }}>
          <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
          Live
        </span>
      </div>
      <div className={styles.mockupBody}>
        <div className={styles.mockupMessagesContainer} ref={containerRef}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`${styles.mockupMessage} ${msg.type === 'user' ? styles.mockupMessageUser : styles.mockupMessageAI}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className={styles.mockupInput}>
          <span className={styles.mockupInputText}>Ask about your mobile analytics...</span>
          <span className={styles.mockupSend}>
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
};

// ─── FEATURE CARD ──────────────────────────────────────────
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <motion.div className={styles.featureCard} variants={scaleUp}>
      <div className={styles.featureIcon}>
        <Icon size={20} />
      </div>
      <h3 className={styles.featureTitle}>{feature.title}</h3>
      <p className={styles.featureDesc}>{feature.desc}</p>
      <div className={styles.featureVisual}>
        {feature.visual === 'acquisition' && (
          <div className={styles.acquisitionVisual}>
            <div className={styles.acqBar} style={{ height: '70%' }} />
            <div className={styles.acqBar} style={{ height: '45%' }} />
            <div className={styles.acqBar} style={{ height: '85%' }} />
            <div className={styles.acqBar} style={{ height: '60%' }} />
            <div className={styles.acqBar} style={{ height: '90%' }} />
            <div className={styles.acqBar} style={{ height: '50%' }} />
          </div>
        )}
        {feature.visual === 'engagement' && (
          <div className={styles.engagementVisual}>
            <div className={styles.engLine} />
            <div className={styles.engPoints}>
              <span className={styles.engPoint} />
              <span className={styles.engPoint} />
              <span className={styles.engPoint} />
              <span className={styles.engPoint} />
              <span className={styles.engPoint} />
            </div>
          </div>
        )}
        {feature.visual === 'funnel' && (
          <div className={styles.funnelVisual}>
            <div className={styles.funnelBar} style={{ width: '100%' }} />
            <div className={styles.funnelBar} style={{ width: '75%' }} />
            <div className={styles.funnelBar} style={{ width: '55%' }} />
            <div className={styles.funnelBar} style={{ width: '35%' }} />
            <div className={styles.funnelBar} style={{ width: '20%' }} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── USE CASE CARD ─────────────────────────────────────────
const UseCaseCard = ({ useCase, index }) => {
  const Icon = useCase.icon;
  return (
    <motion.div className={styles.useCaseCard} variants={fadeUp} transition={{ delay: index * 0.08 }}>
      <div className={styles.useCaseHeader}>
        <div className={styles.useCaseIcon}>
          <Icon size={18} />
        </div>
        <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
      </div>
      <p className={styles.useCaseDesc}>{useCase.desc}</p>
      <ul className={styles.useCaseList}>
        {useCase.list.map((item, i) => (
          <li key={i} className={styles.useCaseListItem}>
            <Check size={14} /> {item}
          </li>
        ))}
      </ul>
      <div className={styles.useCaseVisual}>
        {useCase.visual === 'retention' && (
          <div className={styles.retentionVisual}>
            {[85, 72, 68, 55, 48].map((v, i) => (
              <div key={i} className={styles.retentionRow}>
                <span className={styles.retentionLabel}>Cohort {i + 1}</span>
                <div className={styles.retentionBarWrap}>
                  <motion.div
                    className={styles.retentionBar}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${v}%` }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                  />
                </div>
                <span className={styles.retentionValue}>{v}%</span>
              </div>
            ))}
          </div>
        )}
        {useCase.visual === 'dashboard' && (
          <div className={styles.dashboardVisual}>
            <div className={styles.dashStat}>
              <span className={styles.dashStatValue}>1,248</span>
              <span className={styles.dashStatLabel}>Active Users</span>
            </div>
            <div className={styles.dashStat}>
              <span className={styles.dashStatValue}>4.2m</span>
              <span className={styles.dashStatLabel}>Avg. Session</span>
            </div>
            <div className={styles.dashSparkline}>
              {[20, 35, 28, 42, 38, 55, 48, 62, 55, 70, 60, 75].map((h, i) => (
                <div
                  key={i}
                  className={styles.dashSparkBar}
                  style={{ height: `${(h / 75) * 100}%` }}
                />
              ))}
            </div>
          </div>
        )}
        {useCase.visual === 'experiment' && (
          <div className={styles.experimentVisual}>
            <div className={styles.expVariant}>
              <span className={styles.expLabel}>Control</span>
              <div className={styles.expBarWrap}>
                <div className={styles.expBar} style={{ width: '48%' }} />
              </div>
              <span className={styles.expValue}>48%</span>
            </div>
            <div className={styles.expVariant}>
              <span className={styles.expLabel}>Variant A</span>
              <div className={styles.expBarWrap}>
                <div className={styles.expBar} style={{ width: '62%', background: '#4f8cf7' }} />
              </div>
              <span className={styles.expValue}>62%</span>
            </div>
            <div className={styles.expVariant}>
              <span className={styles.expLabel}>Variant B</span>
              <div className={styles.expBarWrap}>
                <div className={styles.expBar} style={{ width: '55%', background: '#a78bfa' }} />
              </div>
              <span className={styles.expValue}>55%</span>
            </div>
          </div>
        )}
        {useCase.visual === 'warehouse' && (
          <div className={styles.warehouseVisual}>
            <div className={styles.whSource}>Firebase</div>
            <div className={styles.whSource}>Amplitude</div>
            <div className={styles.whSource}>Mixpanel</div>
            <div className={styles.whArrow}>↓</div>
            <div className={styles.whWarehouse}>BigQuery</div>
            <div className={styles.whArrow}>↓</div>
            <div className={styles.whSource}>Looker</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── PROJECT ROW ───────────────────────────────────────────
const ProjectRow = ({ project, index }) => (
  <motion.div className={styles.projectRow} variants={fadeUp} transition={{ delay: index * 0.04 }}>
    <div className={styles.projectMeta}>
      <span className={styles.projectIndustry}>{project.industry}</span>
      <span className={styles.projectClient}>{project.client}</span>
    </div>
    <h3 className={styles.projectTitle}>{project.title}</h3>
    <p className={styles.projectDesc}>{project.desc}</p>
    <div className={styles.projectTech}>{project.tech}</div>
    <div className={styles.projectMetrics}>
      <span className={styles.projectMetric}>
        <TrendingUp size={14} /> {project.metric}
      </span>
      <span className={styles.projectImpact}>
        <Star size={14} /> {project.impact}
      </span>
    </div>
  </motion.div>
);

// ─── MAIN COMPONENT ────────────────────────────────────────
const PortfolioMobilePage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.page}>
      <SEO
        title="Mobile Analytics Portfolio | Scape Data Solutions"
        description="Mobile app analytics projects delivered by Scape Data Solutions across health, retail, gaming, travel, social, and finance."
        path="/portfolio/mobile"
      />

      <Navbar activeNav="portfolio" />

      <main className={styles.main}>

        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <motion.div
              className={styles.heroGrid}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              <div className={styles.heroContent}>
                <motion.div className={styles.heroBadge} variants={fadeUp}>
                  <Smartphone size={14} /> Mobile Analytics
                </motion.div>
                <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                  Understand your <br />
                  <span className={styles.heroHighlight}>mobile users</span>{' '}
                  <span className={styles.heroHighlightAlt}>like never before.</span>
                </motion.h1>
                <motion.p className={styles.heroSub} variants={fadeUp}>
                  We deliver deep analytics that reveal how users interact with your app
                  from acquisition to retention so you can optimise every step of the journey.
                </motion.p>
                <motion.div className={styles.heroCtas} variants={stagger}>
                  <motion.div variants={scaleUp}>
                    <Link to="/contact" className={styles.ctaPrimary}>
                      Talk to Our Mobile Analysts <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                  <motion.div variants={scaleUp}>
                    <a href="#projects" className={styles.ctaSecondary}>
                      View Case Studies
                    </a>
                  </motion.div>
                </motion.div>
                <motion.div className={styles.heroTrust} variants={fadeUp}>
                  <span className={styles.trustItem}>
                    <Check size={14} /> SOC 2 Type II
                  </span>
                  <span className={styles.trustItem}>
                    <Check size={14} /> GDPR &amp; CCPA
                  </span>
                  <span className={styles.trustItem}>
                    <Check size={14} /> 99.9% Uptime
                  </span>
                </motion.div>
              </div>
              <motion.div className={styles.heroVisual} variants={scaleUp}>
                <HeroChatMockup />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className={styles.features}>
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              <motion.p className={styles.sectionEyebrow} variants={fadeUp}>Features</motion.p>
              <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
                Enterprise-grade mobile analytics, <br />ready to deploy.
              </motion.h2>
              <motion.p className={styles.sectionSub} variants={fadeUp}>
                Secure data isolation, real-time insights, and production-ready dashboards for every team.
              </motion.p>
            </motion.div>
            <motion.div
              className={styles.featuresGrid}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              {features.map((feature, i) => (
                <FeatureCard key={i} feature={feature} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== USE CASES ===== */}
        <section className={styles.useCases}>
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              <motion.p className={styles.sectionEyebrow} variants={fadeUp}>Use Cases</motion.p>
              <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
                Analytics that drive action.
              </motion.h2>
            </motion.div>
            <motion.div
              className={styles.useCasesGrid}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              {useCases.map((useCase, i) => (
                <UseCaseCard key={i} useCase={useCase} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section className={styles.projects} id="projects">
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.sectionHeader}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              <motion.p className={styles.sectionEyebrow} variants={fadeUp}>Selected Work</motion.p>
              <motion.h2 className={styles.sectionTitle} variants={fadeUp}>
                Mobile analytics in production.
              </motion.h2>
            </motion.div>
            <motion.div
              className={styles.projectsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              {projects.map((project, i) => (
                <ProjectRow key={i} project={project} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className={styles.stats}>
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.statsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              <motion.div className={styles.statItem} variants={scaleUp}>
                <div className={styles.statNumber}>{projects.length}</div>
                <p className={styles.statLabel}>Analytics Projects</p>
              </motion.div>
              <motion.div className={styles.statItem} variants={scaleUp}>
                <div className={styles.statNumber}>120M+</div>
                <p className={styles.statLabel}>Events Processed / Day</p>
              </motion.div>
              <motion.div className={styles.statItem} variants={scaleUp}>
                <div className={styles.statNumber}>4.6★</div>
                <p className={styles.statLabel}>Avg. App Store Rating</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className={styles.cta}>
          <div className={styles.sectionContainer}>
            <motion.div
              className={styles.ctaContent}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              variants={stagger}
            >
              <motion.h2 className={styles.ctaTitle} variants={fadeUp}>
                Ready to unlock mobile insights?
              </motion.h2>
              <motion.p className={styles.ctaDesc} variants={fadeUp}>
                Let's build an analytics layer that turns user behaviour into your competitive advantage.
              </motion.p>
              <motion.div className={styles.ctaButtons} variants={stagger}>
                <motion.div variants={scaleUp}>
                  <Link to="/contact" className={styles.ctaPrimary}>
                    Start Now <ArrowRight size={18} />
                  </Link>
                </motion.div>
                <motion.div variants={scaleUp}>
                  <Link to="/contact" className={styles.ctaSecondary}>
                    Contact Sales
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />

      {showTop && (
        <motion.button
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </div>
  );
};

export default PortfolioMobilePage;