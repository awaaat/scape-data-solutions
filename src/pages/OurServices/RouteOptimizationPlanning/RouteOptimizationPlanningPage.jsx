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
  MapPin,
  Navigation,
  AlertCircle,
  Award,
  Zap,
  GitBranch,
  Fuel,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./RouteOptimizationPlanningPage.module.css";
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
    title: "Data Integration & Route Planning",
    desc: "We integrate data from your TMS, GPS, telematics, and mapping systems. We consolidate information on delivery locations, vehicle capacities, driver schedules, time windows, and traffic patterns to build a complete operational picture."
  },
  {
    icon: <MapPin size={22} />,
    title: "Dynamic Route Optimization",
    desc: "We use advanced algorithms to generate optimal routes that minimize mileage, fuel consumption, and total driving time. We consider traffic congestion, road conditions, delivery time windows, vehicle capacity, and driver hours-of-service regulations."
  },
  {
    icon: <Navigation size={22} />,
    title: "Real‑Time Re‑optimization & Rerouting",
    desc: "When unexpected events occur — traffic accidents, weather disruptions, new orders, or cancellations — we dynamically reroute drivers in real‑time. This minimizes delays and ensures that deliveries stay on schedule."
  },
  {
    icon: <Truck size={22} />,
    title: "Vehicle & Load Optimization",
    desc: "We optimize load planning and vehicle assignments to maximize capacity utilization. We ensure that each vehicle is loaded efficiently, reducing the number of trips and lowering overall costs."
  },
  {
    icon: <Clock size={22} />,
    title: "Time Window & Service Level Management",
    desc: "We respect customer delivery time windows and service level agreements. We prioritize routes to ensure that high‑priority deliveries arrive on time while maintaining overall efficiency."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Improvement & Analytics",
    desc: "We provide dashboards that track key metrics — mileage, fuel consumption, on‑time delivery rate, and cost per mile. We identify opportunities for further optimization and recommend changes to improve performance over time."
  },
];

const features = [
  {
    icon: <MapPin size={22} />,
    title: "Multi‑Stop Route Optimization",
    desc: "Optimize routes with hundreds of stops, sequencing them to minimize total travel time and distance."
  },
  {
    icon: <Navigation size={22} />,
    title: "Dynamic Re‑routing",
    desc: "Automatically adjust routes in real‑time based on traffic, weather, or new orders. Always have the most efficient route."
  },
  {
    icon: <Fuel size={22} />,
    title: "Fuel Cost Optimization",
    desc: "Minimize fuel consumption by reducing mileage, avoiding congestion, and optimizing vehicle assignments."
  },
  {
    icon: <Clock size={22} />,
    title: "Time Window Compliance",
    desc: "Ensure that all deliveries meet their scheduled time windows, improving customer satisfaction and on‑time performance."
  },
  {
    icon: <Truck size={22} />,
    title: "Capacity & Load Optimization",
    desc: "Maximize vehicle utilization by optimizing load planning and assigning the right vehicle to each route."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Performance Analytics & Reporting",
    desc: "Track key metrics — cost per mile, on‑time delivery rate, fuel usage — and identify opportunities for improvement."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "10‑20% Fuel Cost Reduction",
    desc: "Minimize fuel consumption through optimized routing, reducing mileage and eliminating unnecessary detours."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "Higher On‑Time Delivery Rates",
    desc: "Achieve 95‑98% on‑time delivery with dynamic routing that adapts to real‑time conditions."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Response to Changes",
    desc: "Respond to new orders, cancellations, and disruptions in minutes, not hours, with real‑time route updates."
  },
  {
    icon: <Truck size={18} />,
    title: "Better Vehicle Utilization",
    desc: "Reduce the number of vehicles needed by optimizing load planning and route sequencing."
  },
  {
    icon: <Users size={18} />,
    title: "Reduced Driver Overtime",
    desc: "Balance workloads and minimize overtime with efficient route planning that respects driver hours."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Deliver faster, cheaper, and more reliably than competitors with superior route planning capabilities."
  },
];

const RouteOptimizationPlanningPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Route Optimization & Planning | Scape Data Solutions"
      description="AI-powered route optimization that reduces fuel costs and maximizes fleet efficiency."
      path="/services/route-optimization-planning"
      schema={buildServiceSchema({
        name: "Route Optimization & Planning",
        description: "AI-powered route optimization that reduces fuel costs and maximizes fleet efficiency.",
        path: "/services/route-optimization-planning",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Navigation size={14} /> <span>Route Optimization & Planning</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Deliver Faster, Cheaper, <span className={styles.highlight}>Greener</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered route optimization that reduces fuel costs, improves on‑time delivery, and
              maximizes fleet efficiency. Plan smarter routes that adapt to real‑time conditions.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Routes <ArrowRight size={16} />
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
                <span className={styles.statValue}>98%</span>
                <span className={styles.statLabel}>On‑Time Delivery</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>20%</span>
                <span className={styles.statLabel}>Mileage Reduction</span>
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
            <h2>Route Planning is <span className={styles.highlight}>Expensive and Inefficient</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Of delivery costs are attributed to inefficient routing — unnecessary mileage, congestion, and poor sequencing that could be eliminated with better planning.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>50%</span>
                <p>Of logistics managers rely on manual or outdated route planning methods, leading to suboptimal routes and higher costs.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$100B+</span>
                <p>Estimated annual waste in logistics due to inefficient route planning — a cost that businesses can no longer afford to ignore.</p>
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
                Smarter Routes. <span className={styles.highlight}>Better Results.</span>
              </h2>
              <p>
                Route planning is one of the most critical functions in logistics — and one of the
                most challenging. Every day, dispatchers must balance dozens of factors: delivery
                locations, time windows, vehicle capacities, driver schedules, traffic, weather,
                and unexpected disruptions.
              </p>
              <p>
                Our Route Optimization & Planning service uses AI and advanced algorithms to
                generate optimal routes that minimize mileage, fuel consumption, and total driving
                time. We consider all constraints — time windows, vehicle capacity, driver hours,
                and more — to produce plans that are both efficient and practical.
              </p>
              <p>
                We also provide real‑time rerouting, automatically adjusting routes when conditions
                change. This ensures that your drivers are always on the most efficient path, even
                when unexpected events occur.
              </p>
              <p>
                With our solution, you reduce costs, improve on‑time delivery, and build a more
                resilient, responsive logistics operation.
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
                <Navigation size={48} />
                <span>Route Optimization</span>
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
            How We Optimize Routes
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
                <h4>Optimized Route Plans</h4>
                <p>Daily route plans that minimize mileage, fuel consumption, and total driving time, while respecting all constraints.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Real‑Time Rerouting & Dispatch</h4>
                <p>Dynamic route adjustments in response to traffic, weather, cancellations, or new orders, ensuring drivers stay efficient.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Vehicle & Load Assignment</h4>
                <p>Optimal vehicle and driver assignments for each route, balancing capacity, efficiency, and compliance.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Time Window & SLA Management</h4>
                <p>Route plans that ensure all deliveries meet their scheduled time windows and service level agreements.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Performance Dashboards</h4>
                <p>Real‑time visibility into key metrics — fuel consumption, mileage, on‑time delivery rate, and cost per mile.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Continuous Improvement Insights</h4>
                <p>Data‑driven recommendations to further optimize route planning and reduce costs over time.</p>
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
            <h2>Ready to Optimize Your Routes?</h2>
            <p>
              Let's build a route optimization system that reduces fuel costs, improves on‑time
              delivery, and maximizes fleet efficiency. You'll deliver faster, cheaper, and greener.
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

export default RouteOptimizationPlanningPage;
