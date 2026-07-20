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
  Package,
  MapPin,
  Navigation,
  AlertCircle,
  Award,
  Zap,
  Gauge,
  Truck,
  UserCheck,
  Radio,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./LastMileDeliveryAnalyticsPage.module.css";
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
    desc: "We connect to your delivery management systems, GPS trackers, routing software, customer databases, and feedback platforms. We aggregate data on delivery routes, driver performance, delivery times, customer communication, and service exceptions into a unified analytics layer."
  },
  {
    icon: <MapPin size={22} />,
    title: "Route Optimization & Sequencing",
    desc: "We use advanced algorithms to optimize delivery routes and sequencing — minimizing mileage, time, and cost while respecting delivery time windows, vehicle capacity, and driver constraints. We adjust routes dynamically based on real‑time traffic and order changes."
  },
  {
    icon: <Clock size={22} />,
    title: "ETAs & Delivery Time Window Management",
    desc: "We provide accurate estimated times of arrival (ETAs) to customers, incorporating real‑time traffic, weather, and historical performance. We track delivery time windows and alert drivers when they are at risk of missing a commitment, enabling proactive communication."
  },
  {
    icon: <Users size={22} />,
    title: "Customer Delivery Experience Analytics",
    desc: "We track delivery success rates, customer communication effectiveness, and feedback scores. We identify customers who have had poor delivery experiences and recommend personalized follow‑up actions to improve satisfaction and retention."
  },
  {
    icon: <Activity size={22} />,
    title: "Driver Performance & Productivity Monitoring",
    desc: "We track driver performance metrics — deliveries per hour, on‑time rate, customer ratings, and adherence to procedures. We identify top performers and those who need coaching, enabling data‑driven training and performance improvement."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Improvement & Optimization",
    desc: "We provide dashboards that track key metrics — cost per delivery, delivery success rates, and customer satisfaction scores. We identify opportunities for improvement and recommend changes to routing, driver training, and communication strategies."
  },
];

const features = [
  {
    icon: <Navigation size={22} />,
    title: "Dynamic Route Optimization",
    desc: "Generate optimal delivery routes that adapt to real‑time traffic, weather, and order changes, reducing mileage and fuel costs by 10‑20%."
  },
  {
    icon: <Clock size={22} />,
    title: "Accurate ETA & Time Window Management",
    desc: "Provide customers with precise arrival estimates and alerts, reducing missed deliveries and improving satisfaction."
  },
  {
    icon: <UserCheck size={22} />,
    title: "Driver Performance Scorecards",
    desc: "Individualized driver reports with metrics on productivity, on‑time performance, and customer feedback, enabling coaching and recognition."
  },
  {
    icon: <Package size={22} />,
    title: "Delivery Success & Exception Analysis",
    desc: "Track delivery success rates, identify failed deliveries, and analyze root causes — incorrect addresses, customer unavailability, and more."
  },
  {
    icon: <Users size={22} />,
    title: "Customer Experience & NPS Tracking",
    desc: "Monitor customer feedback, ratings, and NPS scores to identify delivery issues and improve the overall experience."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Cost & Performance Dashboards",
    desc: "Visualize key metrics — cost per delivery, delivery success rate, driver productivity — in customizable dashboards for operations and leadership."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "10‑20% Logistics Cost Reduction",
    desc: "Optimize routes, reduce fuel consumption, and eliminate inefficiencies in the final delivery segment."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "97%+ First‑Time Delivery Success",
    desc: "Achieve higher delivery success rates with better route planning, accurate ETAs, and proactive customer communication."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Delivery Times",
    desc: "Reduce average delivery times with optimized sequencing, enabling more deliveries per driver and shorter customer wait times."
  },
  {
    icon: <Users size={18} />,
    title: "Improved Customer Satisfaction",
    desc: "Deliver a superior delivery experience with accurate ETAs, proactive alerts, and rapid issue resolution."
  },
  {
    icon: <Truck size={18} />,
    title: "Better Driver Productivity",
    desc: "Increase driver efficiency with optimized routes and real‑time support, reducing overtime and increasing job satisfaction."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Stand out with a superior delivery experience that builds customer loyalty and attracts new business."
  },
];

const LastMileDeliveryAnalyticsPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Last-Mile Delivery Analytics | Scape Data Solutions"
      description="AI-powered analytics that optimize delivery routes and improve on-time performance."
      path="/services/last-mile-delivery-analytics"
      schema={buildServiceSchema({
        name: "Last-Mile Delivery Analytics",
        description: "AI-powered analytics that optimize delivery routes and improve on-time performance.",
        path: "/services/last-mile-delivery-analytics",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Package size={14} /> <span>Last‑Mile Delivery Analytics</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Perfect the <span className={styles.highlight}>Final Mile</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered analytics that optimizes delivery routes, improves on‑time performance, and
              enhances the customer experience. Reduce costs, increase efficiency, and deliver
              satisfaction with every package.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Last Mile <ArrowRight size={16} />
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
                <span className={styles.statValue}>20%</span>
                <span className={styles.statLabel}>Cost Reduction</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>97%</span>
                <span className={styles.statLabel}>First‑Time Delivery Success</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>15%</span>
                <span className={styles.statLabel}>Driver Productivity Gain</span>
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
            <h2>Last‑Mile Logistics is <span className={styles.highlight}>Costly and Complex</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>40%</span>
                <p>Of total logistics costs are attributed to last‑mile delivery — making it the most expensive part of the supply chain.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>60%</span>
                <p>Of customers are dissatisfied with their delivery experience due to inaccurate ETAs, missed windows, or lack of communication.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Of delivery failures are caused by inefficient route planning or failure to adapt to real‑time conditions.</p>
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
                Deliver <span className={styles.highlight}>Better</span>. Deliver <span className={styles.highlight}>Faster</span>.
              </h2>
              <p>
                Last‑mile delivery is the most visible, most expensive, and most challenging part of
                the logistics chain. It's where customer expectations are met — or broken. A late
                delivery, a missed time window, or a lack of communication can undo months of
                work and damage your brand.
              </p>
              <p>
                Our Last‑Mile Delivery Analytics service uses AI and advanced analytics to optimize
                the final segment of your supply chain. We analyze delivery routes, driver performance,
                customer preferences, and communication effectiveness to improve on‑time delivery
                rates and reduce costs.
              </p>
              <p>
                We provide accurate ETAs and proactive alerts that keep customers informed and
                satisfied. We identify failed deliveries and recommend interventions to prevent
                them in the future. We track driver productivity and provide coaching to improve
                performance.
              </p>
              <p>
                With our solution, you reduce costs, increase efficiency, and deliver an
                exceptional customer experience that builds loyalty and drives repeat business.
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
                <Package size={48} />
                <span>Last‑Mile Analytics</span>
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
            How We Optimize Last‑Mile Delivery
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
                <h4>Optimized Delivery Routes</h4>
                <p>Daily route plans that minimize mileage, time, and cost while respecting delivery windows and driver constraints.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Driver Performance Dashboards</h4>
                <p>Individualized driver reports with metrics on productivity, on‑time performance, and customer feedback.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Customer Communication & ETA Alerts</h4>
                <p>Automated, personalized communication with customers — accurate ETAs, delivery confirmation, and alerts for exceptions.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Delivery Success & Exception Tracking</h4>
                <p>Real‑time visibility into delivery success rates, failed deliveries, and root causes — enabling rapid improvement.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Customer Experience & NPS Measurement</h4>
                <p>Track customer satisfaction, feedback, and NPS scores to identify delivery issues and improve the experience.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Cost & Performance Dashboards</h4>
                <p>Visualize key metrics — cost per delivery, delivery success rate, driver productivity — in customizable dashboards.</p>
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
            <h2>Ready to Perfect Your Last Mile?</h2>
            <p>
              Let's build a last‑mile delivery analytics system that reduces costs, improves
              efficiency, and delivers an exceptional customer experience. You'll turn your
              last‑mile operations into a competitive advantage.
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

export default LastMileDeliveryAnalyticsPage;
