// src/pages/Services/DashboardDevelopment/DashboardDevelopmentPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  LayoutDashboard,
  BarChart3,
  PieChart,
  LineChart,
  Download,
  RefreshCw,
  Users,
  TrendingUp,
  Eye,
  Filter,
  Share2,
  Clock,
  Shield,
  Zap,
  CheckCircle,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./DashboardDevelopmentPage.module.css";
import SEO from '../../../components/SEO/SEO';
import { buildServiceSchema } from '../../../utils/serviceSchema';

// ─── Variants ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Dashboard Development Page ────────────────────────────────
const DashboardDevelopmentPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Dashboard Development | Scape Data Solutions"
      description="Custom dashboards that bring your data to life — interactive, real-time, and tailored to how your team works."
      path="/services/dashboard-development"
      schema={buildServiceSchema({
        name: "Dashboard Development",
        description: "Custom dashboards that bring your data to life — interactive, real-time, and tailored to how your team works.",
        path: "/services/dashboard-development",
      })}
    />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <LayoutDashboard size={14} /> <span>Custom Dashboard Development</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Turn Data Into <span className={styles.highlight}>Actionable Insights</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Custom dashboards that bring your data to life — interactive, real-time, and tailored
              to how your team works. From executive scorecards to operational monitors, we build
              dashboards that drive decisions.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Build Your Dashboard <ArrowRight size={16} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="#features" className={styles.heroBtnSecondary}>
                  Explore Features <Eye size={15} />
                </a>
              </motion.div>
            </motion.div>

            {/* Hero stats */}
            <motion.div className={styles.heroStats} variants={fadeUp}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>200+</span>
                <span className={styles.statLabel}>Dashboards Delivered</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>98%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.9/5</span>
                <span className={styles.statLabel}>Average Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── OVERVIEW ────────────────────────────────────────────── */}
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
              <h2>Dashboards That <span className={styles.highlight}>Work</span></h2>
              <p>
                A dashboard isn't just a collection of charts — it's a decision-making tool. We
                design dashboards that answer your most critical business questions at a glance.
                Whether you need an executive overview, a team performance tracker, or a real-time
                operational monitor, we build it with your workflows in mind.
              </p>
              <p>
                We work with the leading BI platforms — Power BI, Tableau, Looker — and also build
                custom web dashboards using modern front-end frameworks. Every dashboard we deliver
                is interactive, responsive, and backed by a robust data pipeline.
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
                <LayoutDashboard size={48} />
                <span>Interactive Dashboard</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ────────────────────────────────────────────── */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            What We Build
          </motion.h2>

          <div className={styles.featuresGrid}>
            {[
              {
                icon: <BarChart3 size={24} />,
                title: "Executive Dashboards",
                desc: "High-level KPIs and strategic metrics for C-suite decision-making.",
              },
              {
                icon: <LineChart size={24} />,
                title: "Operational Monitors",
                desc: "Real-time views of production, logistics, support, and daily operations.",
              },
              {
                icon: <PieChart size={24} />,
                title: "Financial Dashboards",
                desc: "Revenue, expenses, profitability, and cash flow at a glance.",
              },
              {
                icon: <Users size={24} />,
                title: "Sales & Marketing Dashboards",
                desc: "Pipeline, conversion rates, campaign performance, and lead tracking.",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Performance Scorecards",
                desc: "Track team and individual performance against goals and benchmarks.",
              },
              {
                icon: <Filter size={24} />,
                title: "Custom Filters & Drill-Down",
                desc: "Interactive filters and drill-down capabilities for deep exploration.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.06)" }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PLATFORMS ───────────────────────────────────────────── */}
      <section className={styles.platformsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Platforms We Work With
          </motion.h2>
          <motion.p
            className={styles.sectionSubtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the platform that fits your organization — or let us build a custom solution.
          </motion.p>

          <div className={styles.platformsGrid}>
            {[
              { name: "Power BI", icon: <BarChart3 size={28} /> },
              { name: "Tableau", icon: <PieChart size={28} /> },
              { name: "Looker", icon: <Eye size={28} /> },
              { name: "Custom Web", icon: <LayoutDashboard size={28} /> },
            ].map((platform, index) => (
              <motion.div
                key={index}
                className={styles.platformCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.platformIcon}>{platform.icon}</div>
                <span>{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            How We Build Your Dashboard
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We interview stakeholders to understand your goals, KPIs, and workflows.",
              },
              {
                step: "02",
                title: "Design",
                desc: "We wireframe the dashboard layout and data visualizations for your approval.",
              },
              {
                step: "03",
                title: "Develop",
                desc: "We build the data pipeline and dashboard, integrating with your data sources.",
              },
              {
                step: "04",
                title: "Refine",
                desc: "We test, gather feedback, and refine until the dashboard is perfect.",
              },
              {
                step: "05",
                title: "Deploy",
                desc: "We deploy the dashboard and train your team on how to use it effectively.",
              },
              {
                step: "06",
                title: "Support",
                desc: "We provide ongoing maintenance, updates, and enhancements as needed.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.processCard}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className={styles.processStep}>{item.step}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ────────────────────────────────────────────── */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Why a Custom Dashboard?
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {[
              {
                icon: <Zap size={20} />,
                title: "Real-Time Decisions",
                desc: "Stop waiting for reports. See your data live and act instantly.",
              },
              {
                icon: <Eye size={20} />,
                title: "Clarity at a Glance",
                desc: "Complex data presented simply. Everyone understands the numbers.",
              },
              {
                icon: <Clock size={20} />,
                title: "Save Hours",
                desc: "No more manual report building. Your dashboard does the work.",
              },
              {
                icon: <Share2 size={20} />,
                title: "Share & Collaborate",
                desc: "Share dashboards across your team and organization securely.",
              },
              {
                icon: <Download size={20} />,
                title: "Export & Distribute",
                desc: "Export data and visuals for presentations, emails, and meetings.",
              },
              {
                icon: <Shield size={20} />,
                title: "Secure & Governed",
                desc: "Role-based access, data encryption, and enterprise-grade security.",
              },
            ].map((benefit, index) => (
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

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Build Your Dashboard?</h2>
            <p>
              Let's discuss your data, your goals, and what an ideal dashboard looks like for your
              team. We'll deliver a solution that transforms how you see your business.
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

export default DashboardDevelopmentPage;