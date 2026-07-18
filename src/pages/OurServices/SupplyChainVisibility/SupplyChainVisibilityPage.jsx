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
  Truck,
  Package,
  AlertCircle,
  Award,
  Zap,
  MapPin,
  Globe,
  Radio,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./SupplyChainVisibilityPage.module.css";
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

const steps = [
  {
    icon: <Database size={22} />,
    title: "Data Integration & Aggregation",
    desc: "We connect to your existing systems — TMS, WMS, ERP, carrier APIs, IoT sensors, and GPS trackers. We aggregate shipment data from multiple sources into a unified platform, providing a single source of truth for all your logistics operations."
  },
  {
    icon: <Globe size={22} />,
    title: "Real‑Time Location Tracking",
    desc: "We provide real‑time visibility into the location and status of every shipment — whether it's on a truck, a ship, a plane, or in a warehouse. We track milestones like departure, arrival, customs clearance, and delivery with precise timestamps."
  },
  {
    icon: <Radio size={22} />,
    title: "Predictive ETA & Alerts",
    desc: "We use machine learning to predict accurate estimated times of arrival (ETAs), incorporating traffic, weather, and historical performance data. We send proactive alerts when delays are predicted, enabling you to communicate with customers and adjust operations."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Exception & Risk Detection",
    desc: "We automatically detect exceptions — such as temperature breaches, route deviations, or customs holds — and trigger notifications. We flag potential risks like weather disruptions or supplier issues before they impact your supply chain."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Performance Analytics & Dashboards",
    desc: "We provide interactive dashboards that show key metrics — on‑time delivery rate, transit time variability, carrier performance, and cost per shipment. You can drill down to individual shipments or aggregate across regions and carriers."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Improvement & Optimization",
    desc: "We analyze historical data to identify bottlenecks, inefficiencies, and patterns. We recommend changes to routing, carrier selection, and inventory placement to improve speed, reduce costs, and increase reliability over time."
  },
];

const features = [
  {
    icon: <Truck size={22} />,
    title: "Multi‑Carrier & Multi‑Mode Tracking",
    desc: "Track shipments across all modes — road, rail, air, and ocean — regardless of carrier. We integrate with major carriers and freight forwarders for comprehensive visibility."
  },
  {
    icon: <MapPin size={22} />,
    title: "GPS & IoT Sensor Integration",
    desc: "Connect to GPS trackers and IoT sensors that monitor temperature, humidity, shock, and location. Gain real‑time insights into the condition of your cargo."
  },
  {
    icon: <Clock size={22} />,
    title: "Accurate ETA & Delay Predictions",
    desc: "Our AI models forecast arrival times with high accuracy, updating dynamically as new data arrives. We alert you to potential delays before they happen."
  },
  {
    icon: <AlertCircle size={22} />,
    title: "Exception & Compliance Monitoring",
    desc: "Automatically detect customs holds, document issues, temperature excursions, and other exceptions. Maintain compliance with regulatory requirements."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Interactive Dashboards & Reports",
    desc: "Visualize key metrics, trends, and performance data with customizable dashboards. Generate reports for stakeholders and executives."
  },
  {
    icon: <Users size={22} />,
    title: "Collaboration & Communication Tools",
    desc: "Share shipment status with customers, suppliers, and partners via portal or API. Reduce phone calls and emails by providing self‑service visibility."
  },
];

const benefits = [
  {
    icon: <CheckCircle size={18} />,
    title: "Improved On‑Time Delivery",
    desc: "Achieve 98%+ on‑time delivery rates with proactive exception management and accurate ETAs."
  },
  {
    icon: <DollarSign size={18} />,
    title: "Reduced Logistics Costs",
    desc: "Optimize routes, carrier selection, and inventory levels to reduce freight and carrying costs by 10‑20%."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Exception Resolution",
    desc: "Identify and resolve exceptions in minutes, not hours, by having real‑time visibility and automated alerts."
  },
  {
    icon: <Users size={18} />,
    title: "Enhanced Customer Satisfaction",
    desc: "Provide accurate, proactive delivery updates that build trust and reduce support inquiries."
  },
  {
    icon: <Shield size={18} />,
    title: "Risk Mitigation & Resilience",
    desc: "Detect supply chain risks early and take corrective action to minimize disruption."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Deliver a superior customer experience and operate more efficiently than competitors."
  },
];

const SupplyChainVisibilityPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Supply Chain Visibility & Tracking | Scape Data Solutions"
      description="AI-powered supply chain visibility that provides real-time tracking and predictive ETAs."
      path="/services/supply-chain-visibility-tracking"
      schema={buildServiceSchema({
        name: "Supply Chain Visibility & Tracking",
        description: "AI-powered supply chain visibility that provides real-time tracking and predictive ETAs.",
        path: "/services/supply-chain-visibility-tracking",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Globe size={14} /> <span>Supply Chain Visibility & Real‑Time Tracking</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Know Where Your <span className={styles.highlight}>Shipments</span> Are — <span className={styles.highlight}>Always</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered supply chain visibility that provides real‑time tracking, predictive ETAs,
              and proactive exception alerts. End the blind spots in your supply chain and deliver
              with confidence.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Get Full Visibility <ArrowRight size={16} />
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
                <span className={styles.statValue}>98%</span>
                <span className={styles.statLabel}>On‑Time Delivery</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Faster Exception Resolution</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15%</span>
                <span className={styles.statLabel}>Logistics Cost Reduction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className={styles.problemSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.problemContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.problemLabel}>The Challenge</span>
            <h2>Supply Chains Have <span className={styles.highlight}>Blind Spots</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of companies lack real‑time visibility into their supply chains, relying on outdated manual processes and phone calls to track shipments.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of logistics professionals cite visibility as their top challenge — resulting in missed deliveries, unhappy customers, and higher costs.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$1.2T</span>
                <p>Estimated annual cost of supply chain disruptions — many of which could be avoided with better visibility and early warning systems.</p>
              </div>
            </div>
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
                End‑to‑End Visibility <span className={styles.highlight}>Across Your Supply Chain</span>
              </h2>
              <p>
                Today's supply chains are more complex than ever — spanning multiple carriers, modes,
                and geographies. Yet many companies operate with blind spots, relying on spreadsheets,
                phone calls, and outdated systems that leave them reactive rather than proactive.
              </p>
              <p>
                Our Supply Chain Visibility & Real‑Time Tracking service provides a unified view of
                your entire supply chain. We integrate data from your TMS, WMS, ERP, carrier APIs,
                IoT sensors, and GPS trackers to create a single source of truth.
              </p>
              <p>
                You can track every shipment in real‑time, predict ETAs with high accuracy, and
                receive alerts before delays happen. Our dashboards give you visibility into
                key metrics — on‑time delivery, transit time variability, carrier performance,
                and cost — enabling data‑driven decision‑making.
              </p>
              <p>
                End the uncertainty, reduce costs, and deliver a superior customer experience with
                comprehensive supply chain visibility.
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
                <Globe size={48} />
                <span>Supply Chain Visibility</span>
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
            How We Deliver Visibility
          </motion.h2>
          <div className={styles.howGrid}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={styles.howCard}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
              >
                <div className={styles.howIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.deliverablesSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            What We Deliver
          </motion.h2>
          <div className={styles.deliverablesGrid}>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Real‑Time Shipment Dashboard</h4>
                <p>Unified view of all shipments, with location, status, and ETA displayed in real‑time.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Predictive ETA & Alert System</h4>
                <p>AI‑powered arrival predictions with proactive alerts for delays, exceptions, and risks.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Carrier & Mode Performance Scorecard</h4>
                <p>Compare carrier reliability, transit times, and costs to optimize your selection.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Exception & Compliance Monitoring</h4>
                <p>Automated detection of customs holds, temperature breaches, and other issues.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Customer & Partner Portals</h4>
                <p>Self‑service visibility for customers and partners, reducing inquiries and improving satisfaction.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Supply Chain Analytics & Reports</h4>
                <p>Detailed insights into transit times, cost per shipment, and supply chain performance.</p>
              </div>
            </div>
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
            <h2>Ready to See Your Supply Chain Clearly?</h2>
            <p>
              Let's build a visibility platform that gives you real‑time control over your logistics,
              reduces costs, and improves customer satisfaction. End the blind spots and operate
              with confidence.
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

export default SupplyChainVisibilityPage;
