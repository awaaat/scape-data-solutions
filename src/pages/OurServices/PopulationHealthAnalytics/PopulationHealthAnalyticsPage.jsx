import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Clock,
  Eye,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Database,
  Activity,
  Heart,
  FileText,
  DollarSign,
  PieChart,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./PopulationHealthAnalyticsPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const howItems = [
  { icon: <Database size={22} />, title: "Data Aggregation", desc: "Integrate EHR, claims, social data, and community resources." },
  { icon: <PieChart size={22} />, title: "Risk Stratification", desc: "Segment populations by risk level and condition." },
  { icon: <Target size={22} />, title: "Care Gap Analysis", desc: "Identify missing preventive care and screenings." },
  { icon: <Heart size={22} />, title: "Intervention Design", desc: "Targeted programs for high-risk cohorts." },
  { icon: <Activity size={22} />, title: "Outcome Monitoring", desc: "Track quality measures and population health trends." },
  { icon: <TrendingUp size={22} />, title: "Continuous Improvement", desc: "Refine interventions based on outcomes." },
];

const features = [
  { icon: <PieChart size={22} />, title: "Risk Stratification", desc: "Segment patients by risk and chronic conditions." },
  { icon: <Users size={22} />, title: "Social Determinants", desc: "Incorporate SDOH into risk models." },
  { icon: <Target size={22} />, title: "Care Gap Detection", desc: "Identify missing vaccinations, screenings, and follow-ups." },
  { icon: <BarChart3 size={22} />, title: "Population Dashboards", desc: "Visualize health trends and outcomes." },
  { icon: <TrendingUp size={22} />, title: "Predictive Modeling", desc: "Forecast utilization and costs." },
  { icon: <Activity size={22} />, title: "Intervention Tracking", desc: "Measure the impact of care programs." },
];

const benefits = [
  { icon: <Heart size={18} />, title: "Improved Outcomes", desc: "Better management of chronic diseases." },
  { icon: <DollarSign size={18} />, title: "Lower Costs", desc: "Reduce unnecessary ER visits and hospitalizations." },
  { icon: <CheckCircle size={18} />, title: "Quality Improvement", desc: "Close care gaps and meet HEDIS/STARS measures." },
  { icon: <Shield size={18} />, title: "Proactive Care", desc: "Intervene before conditions worsen." },
  { icon: <Users size={18} />, title: "Health Equity", desc: "Address social determinants and disparities." },
  { icon: <Eye size={18} />, title: "Data-Driven Planning", desc: "Allocate resources effectively." },
];

const PopulationHealthAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Population Health Analytics | Scape Data Solutions"
      description="AI-powered population health analytics that stratify patient populations and identify high-risk cohorts."
      path="/services/population-health-analytics"
      schema={buildServiceSchema({
        name: "Population Health Analytics",
        description: "AI-powered population health analytics that stratify patient populations and identify high-risk cohorts.",
        path: "/services/population-health-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Heart size={14} /> <span>Population Health Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Manage <span className={styles.highlight}>Population Health</span> with Data
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Stratify patient populations, identify high-risk cohorts, and drive proactive care
              management with AI-powered population health analytics.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Get Started <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#how-it-works" className={styles.heroBtnSecondary}>
                  See How It Works <Eye size={15} />
                </a>
              </motion.div>
            </motion.div>
            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>25%</span>
                <span className={styles.statLabel}>Risk Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>94%</span>
                <span className={styles.statLabel}>Risk Stratification Accuracy</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Care Gap Closure</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <motion.div
              className={styles.overviewText}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2>
                Proactive Care for <span className={styles.highlight}>Every Population</span>
              </h2>
              <p>
                Population health management requires a clear view of your community's health needs.
                Our Population Health Analytics service aggregates clinical, social, and behavioral data
                to segment populations by risk, condition, and social determinants.
              </p>
              <p>
                We help you identify high-need patients, predict future healthcare utilization, and
                design targeted interventions that close care gaps. Our dashboards provide real-time
                visibility into population health metrics, enabling data-driven decision-making.
              </p>
              <p>
                Improve health outcomes, reduce costs, and meet quality benchmarks with comprehensive
                population insights.
              </p>
            </motion.div>
            <motion.div
              className={styles.overviewVisual}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.visualPlaceholder}>
                <PieChart size={48} />
                <span>Population Health Analytics</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.howSection} id="how-it-works">
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          <div className={styles.howGrid}>
            {howItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.howCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
              >
                <div className={styles.howIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Core Capabilities
          </motion.h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us?
          </motion.h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ x: 4 }}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Transform Population Health?</h2>
            <p>
              Let's build a population health analytics platform that empowers you to manage your
              community's health proactively.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link to="/contact" className={styles.ctaBtn}>
                Get Started <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PopulationHealthAnalyticsPage;
