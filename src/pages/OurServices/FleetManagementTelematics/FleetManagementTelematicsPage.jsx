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
  Gauge,
  AlertTriangle,
  Award,
  Zap,
  MapPin,
  Wrench,
  Fuel,
  UserCheck,
  Radio,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./FleetManagementTelematicsPage.module.css";
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
    title: "Telematics Data Integration",
    desc: "We connect to your existing telematics systems — GPS trackers, ELDs, engine diagnostics, dashcams, and fuel sensors. We aggregate data from multiple sources into a unified platform, creating a comprehensive view of your fleet's performance and health."
  },
  {
    icon: <Gauge size={22} />,
    title: "Vehicle Health Monitoring & Diagnostics",
    desc: "We continuously monitor engine diagnostics, fault codes, and maintenance indicators. We detect emerging issues before they cause breakdowns, schedule preventive maintenance, and reduce unplanned downtime."
  },
  {
    icon: <Activity size={22} />,
    title: "Driver Behavior & Safety Analytics",
    desc: "We track driver behavior — speeding, harsh braking, rapid acceleration, cornering, and hours‑of‑service compliance. We identify high‑risk drivers and provide coaching recommendations to improve safety and reduce accident rates."
  },
  {
    icon: <Fuel size={22} />,
    title: "Fuel Consumption & Efficiency Analysis",
    desc: "We analyze fuel usage patterns, identify inefficiencies, and recommend improvements — such as route optimization, idle reduction, and driving behavior changes. We help you reduce fuel costs by 10‑20%."
  },
  {
    icon: <MapPin size={22} />,
    title: "Real‑Time Location & Utilization Tracking",
    desc: "We provide real‑time location data for every vehicle, along with utilization metrics — distance traveled, engine hours, and idle time. We help you optimize asset utilization and reduce unnecessary costs."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Compliance & Reporting",
    desc: "We automate compliance reporting for regulations like ELD (Hours‑of‑Service), IFTA fuel tax, and DOT inspections. We ensure you stay compliant and avoid costly fines."
  },
];

const features = [
  {
    icon: <Truck size={22} />,
    title: "Real‑Time Vehicle Tracking",
    desc: "View location, speed, and status of every vehicle in your fleet on an interactive map. Know where your assets are at all times."
  },
  {
    icon: <Wrench size={22} />,
    title: "Predictive Maintenance",
    desc: "Get alerts when a vehicle needs service — based on mileage, engine hours, or fault codes — before a breakdown occurs."
  },
  {
    icon: <UserCheck size={22} />,
    title: "Driver Scorecards & Safety Reports",
    desc: "Individualized driver performance reports with coaching recommendations to improve safety and reduce risk."
  },
  {
    icon: <Fuel size={22} />,
    title: "Fuel Consumption & Idle Monitoring",
    desc: "Track fuel consumption, identify excessive idling, and implement strategies to reduce fuel costs."
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "Incident & Accident Detection",
    desc: "Automatically detect harsh events — accidents, hard braking, rollovers — and receive immediate alerts."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Fleet Performance Dashboards",
    desc: "Visualize key metrics — cost per mile, fuel efficiency, vehicle utilization, and safety incidents — in customizable dashboards."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "10‑20% Fuel Cost Reduction",
    desc: "Optimize fuel efficiency through better driving behavior, reduced idling, and smarter routing."
  },
  {
    icon: <Shield size={18} />,
    title: "50% Fewer Accidents",
    desc: "Reduce accidents and incidents with driver coaching, safety scorecards, and real‑time alerts."
  },
  {
    icon: <Wrench size={18} />,
    title: "30% Lower Maintenance Costs",
    desc: "Predict maintenance needs before breakdowns occur, reducing repair costs and downtime."
  },
  {
    icon: <Clock size={18} />,
    title: "Reduced Downtime",
    desc: "Keep your vehicles on the road with proactive maintenance and rapid issue resolution."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "100% ELD Compliance",
    desc: "Stay compliant with Hours‑of‑Service regulations and avoid fines with automated logging and reporting."
  },
  {
    icon: <Award size={18} />,
    title: "Enhanced Driver Retention",
    desc: "Safer, more efficient operations lead to higher driver satisfaction and lower turnover."
  },
];

const FleetManagementTelematicsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Fleet Management & Telematics Analytics | Scape Data Solutions"
      description="AI-powered fleet management and telematics analytics that monitor vehicle health and reduce fuel costs."
      path="/services/fleet-management-telematics"
      schema={buildServiceSchema({
        name: "Fleet Management & Telematics Analytics",
        description: "AI-powered fleet management and telematics analytics that monitor vehicle health and reduce fuel costs.",
        path: "/services/fleet-management-telematics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Truck size={14} /> <span>Fleet Management & Telematics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Manage Your Fleet <span className={styles.highlight}>Smarter</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered fleet management and telematics analytics that monitors vehicle health,
              reduces fuel costs, improves driver safety, and ensures compliance. Gain complete
              visibility and control over your fleet operations.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Fleet <ArrowRight size={16} />
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
                <span className={styles.statValue}>15%</span>
                <span className={styles.statLabel}>Fuel Savings</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>50%</span>
                <span className={styles.statLabel}>Accident Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Maintenance Cost Reduction</span>
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
            <h2>Fleet Operations are <span className={styles.highlight}>Complex and Costly</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Of fleet operating costs are attributed to fuel — yet most fleets lack the visibility to identify and reduce fuel waste effectively.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of fleet managers report that they lack real‑time data on vehicle health and driver behavior, leading to reactive rather than proactive management.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$10,000+</span>
                <p>Average cost of an accident involving a commercial vehicle — not including liability and insurance increases.</p>
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
                Complete Fleet <span className={styles.highlight}>Visibility & Control</span>
              </h2>
              <p>
                Managing a fleet is a constant balancing act. You need to keep vehicles on the road,
                control costs, ensure driver safety, and comply with regulations — all while delivering
                on customer expectations. Without real‑time data, you're operating in the dark.
              </p>
              <p>
                Our Fleet Management & Telematics Analytics service provides comprehensive visibility
                into every aspect of your fleet operations. We integrate data from GPS trackers,
                engine diagnostics, ELDs, dashcams, and fuel sensors to create a unified view of your
                fleet's performance.
              </p>
              <p>
                We monitor vehicle health in real‑time, predicting maintenance needs before breakdowns
                occur. We analyze driver behavior to improve safety and reduce accidents. We track
                fuel consumption and identify inefficiencies to cut costs. We automate compliance
                reporting to keep you on the right side of regulations.
              </p>
              <p>
                With our solution, you reduce costs, improve safety, and build a more reliable,
                efficient fleet operation.
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
                <Truck size={48} />
                <span>Fleet Telematics</span>
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
            How We Manage Your Fleet
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
                <h4>Fleet Performance Dashboard</h4>
                <p>Real‑time visibility into vehicle location, health, utilization, and performance metrics across your entire fleet.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Predictive Maintenance Alerts</h4>
                <p>Automated alerts when vehicles need service — before breakdowns occur — reducing downtime and repair costs.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Driver Safety Scorecards</h4>
                <p>Individualized driver performance reports with coaching recommendations to improve safety and reduce accidents.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Fuel Consumption & Efficiency Analysis</h4>
                <p>Detailed fuel usage reports with recommendations to reduce consumption and identify waste.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Compliance & ELD Reporting</h4>
                <p>Automated Hours‑of‑Service, IFTA, and DOT reporting to ensure full compliance and avoid fines.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Fleet Utilization & Cost Analysis</h4>
                <p>Insights into cost per mile, vehicle utilization, and total cost of ownership to optimize your fleet economics.</p>
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
            <h2>Ready to Optimize Your Fleet?</h2>
            <p>
              Let's build a fleet management system that gives you real‑time visibility, reduces
              costs, and improves safety. You'll have the data you need to make smarter decisions
              and operate more efficiently.
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

export default FleetManagementTelematicsPage;
