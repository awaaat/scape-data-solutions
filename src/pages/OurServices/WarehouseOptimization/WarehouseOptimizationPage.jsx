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
  Boxes,
  Layers,
  AlertCircle,
  Award,
  Zap,
  GitBranch,
  Truck,
  ClipboardList,
  Gauge,
} from "lucide-react";
import PageLayout from "../../../components/Layout/PageLayout";
import styles from "./WarehouseOptimizationPage.module.css";
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
    title: "Warehouse Data Integration",
    desc: "We connect to your WMS, ERP, inventory systems, and automation equipment. We aggregate data on inventory levels, order patterns, picking productivity, storage utilization, and operational workflows to create a comprehensive view of your warehouse operations."
  },
  {
    icon: <Layers size={22} />,
    title: "Slotting & Storage Optimization",
    desc: "We analyze product velocity, seasonality, and physical characteristics to recommend optimal storage locations. We ensure that fast‑moving items are placed in the most accessible locations, reducing travel time and increasing picking productivity by up to 40%."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Picking Path & Workflow Optimization",
    desc: "We design efficient picking routes and workflows that minimize travel time and maximize throughput. We recommend optimal batch sizes, zone assignments, and picking methods — piece picking, case picking, or pallet picking — to match your order profile."
  },
  {
    icon: <Package size={22} />,
    title: "Inventory & Replenishment Optimization",
    desc: "We analyze demand patterns, lead times, and supply variability to recommend optimal inventory levels and replenishment frequencies. We reduce carrying costs, prevent stockouts, and improve the accuracy of inventory counts."
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Labor & Resource Productivity Analytics",
    desc: "We track key productivity metrics — picks per hour, order accuracy, labor utilization, and idle time. We identify bottlenecks and inefficiencies, enabling targeted training and process improvements that boost productivity."
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Continuous Improvement & Reporting",
    desc: "We provide real‑time dashboards that track key warehouse performance indicators (KPIs) — order cycle time, fill rate, inventory accuracy, cost per unit handled. We recommend continuous improvements to keep your warehouse operating at peak efficiency."
  },
];

const features = [
  {
    icon: <Boxes size={22} />,
    title: "Slotting & Storage Optimization",
    desc: "Optimize storage locations based on product velocity, size, and seasonality to reduce travel time and increase picking productivity."
  },
  {
    icon: <GitBranch size={22} />,
    title: "Picking Path & Workflow Design",
    desc: "Design efficient picking routes and workflows that minimize travel time and maximize throughput, reducing labor costs and increasing order accuracy."
  },
  {
    icon: <Package size={22} />,
    title: "Inventory & Replenishment Optimization",
    desc: "Optimize inventory levels and replenishment frequencies to reduce carrying costs, prevent stockouts, and improve service levels."
  },
  {
    icon: <Gauge size={22} />,
    title: "Labor & Resource Productivity Tracking",
    desc: "Monitor key productivity metrics — picks per hour, order accuracy, labor utilization — to identify bottlenecks and improve efficiency."
  },
  {
    icon: <ClipboardList size={22} />,
    title: "Order Accuracy & Quality Management",
    desc: "Track order accuracy rates, identify root causes of errors, and implement corrective actions to improve quality and reduce returns."
  },
  {
    icon: <Eye size={22} />,
    title: "Executive & Operational Dashboards",
    desc: "Tailored dashboards for warehouse managers and executives, with drill‑down to individual zones, shifts, and processes."
  },
];

const benefits = [
  {
    icon: <DollarSign size={18} />,
    title: "15‑30% Productivity Increase",
    desc: "Boost warehouse productivity through optimized slotting, picking paths, and labor utilization, reducing costs and improving throughput."
  },
  {
    icon: <CheckCircle size={18} />,
    title: "99%+ Order Accuracy",
    desc: "Achieve near‑perfect order accuracy with optimized workflows, quality management, and error‑prevention strategies."
  },
  {
    icon: <Package size={18} />,
    title: "20‑30% Inventory Cost Reduction",
    desc: "Reduce carrying costs, prevent stockouts, and minimize obsolescence with optimized inventory and replenishment planning."
  },
  {
    icon: <Zap size={18} />,
    title: "Faster Order Fulfillment",
    desc: "Reduce order cycle times, enabling faster shipping and improved customer satisfaction."
  },
  {
    icon: <Users size={18} />,
    title: "Improved Staff Engagement",
    desc: "Better workflows and clear performance metrics increase staff morale and reduce turnover."
  },
  {
    icon: <Award size={18} />,
    title: "Competitive Advantage",
    desc: "Operate a lean, efficient warehouse that delivers superior service at lower cost, outperforming competitors."
  },
];

const WarehouseOptimizationPage = () => {
  return (
    <PageLayout>
    <SEO
      title="Warehouse Optimization & Inventory Management | Scape Data Solutions"
      description="AI-powered warehouse optimization and inventory management that reduces costs and accelerates fulfillment."
      path="/services/warehouse-optimization-inventory-management"
      schema={buildServiceSchema({
        name: "Warehouse Optimization & Inventory Management",
        description: "AI-powered warehouse optimization and inventory management that reduces costs and accelerates fulfillment.",
        path: "/services/warehouse-optimization-inventory-management",
      })}
    />

      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <motion.div className={styles.heroContent} initial="hidden" animate="visible" variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={fadeUp}>
              <Boxes size={14} /> <span>Warehouse Optimization & Inventory Management</span>
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={fadeUp}>
              Transform Your Warehouse into a <span className={styles.highlight}>Productivity Engine</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              AI-powered warehouse optimization and inventory management that reduces costs, improves
              order accuracy, and accelerates fulfillment. Achieve peak efficiency with data‑driven
              insights and automated workflows.
            </motion.p>
            <motion.div className={styles.heroCta} variants={fadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className={styles.heroBtn}>
                  Optimize Your Warehouse <ArrowRight size={16} />
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
                <span className={styles.statValue}>30%</span>
                <span className={styles.statLabel}>Productivity Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>99%</span>
                <span className={styles.statLabel}>Order Accuracy</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>25%</span>
                <span className={styles.statLabel}>Inventory Cost Reduction</span>
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
            <h2>Warehouses are <span className={styles.highlight}>Inefficient and Costly</span></h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>50%</span>
                <p>Of warehouse labor time is spent on non‑productive activities — walking, searching, and waiting — driving up costs and slowing fulfillment.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>30%</span>
                <p>Of warehouse operations lack visibility into key metrics — productivity, accuracy, utilization — making it impossible to identify and address inefficiencies.</p>
              </div>
              <div className={styles.problemStat}>
                <span className={styles.problemNumber}>$1.5T</span>
                <p>Estimated annual cost of warehousing globally — with significant savings possible through better optimization and automation.</p>
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
                Run a <span className={styles.highlight}>Lean, Agile</span> Warehouse
              </h2>
              <p>
                Warehouses are at the heart of the supply chain — but they are often the least
                optimized link. Inefficient slotting, poor picking paths, and inaccurate inventory
                levels drive up costs, slow down fulfillment, and frustrate customers.
              </p>
              <p>
                Our Warehouse Optimization & Inventory Management service uses AI and advanced
                analytics to transform your warehouse into a productivity engine. We analyze
                product velocity, order patterns, storage utilization, and workforce productivity
                to identify opportunities for improvement.
              </p>
              <p>
                We optimize slotting — placing fast‑moving items in the most accessible locations —
                to reduce travel time and increase picking productivity by up to 40%. We design
                efficient picking paths and workflows that minimize wasted motion and maximize
                throughput.
              </p>
              <p>
                We also optimize inventory levels and replenishment frequencies to reduce carrying
                costs, prevent stockouts, and improve accuracy. Our real‑time dashboards provide
                visibility into key performance indicators, enabling continuous improvement.
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
                <Boxes size={48} />
                <span>Warehouse Optimization</span>
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
            How We Optimize Your Warehouse
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
                <h4>Slotting & Storage Optimization Plan</h4>
                <p>Recommendations for optimal storage locations based on product velocity, size, and seasonality to reduce travel time and increase picking productivity.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Picking Path & Workflow Design</h4>
                <p>Efficient picking routes and workflows that minimize travel time and maximize throughput, reducing labor costs and increasing order accuracy.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Inventory & Replenishment Plan</h4>
                <p>Optimized inventory levels and replenishment frequencies to reduce carrying costs, prevent stockouts, and improve service levels.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Labor & Productivity Analytics Dashboard</h4>
                <p>Real‑time tracking of key productivity metrics — picks per hour, order accuracy, labor utilization — to identify bottlenecks and improve efficiency.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Order Accuracy & Quality Management Report</h4>
                <p>Tracking of order accuracy rates, identification of root causes of errors, and corrective actions to improve quality and reduce returns.</p>
              </div>
            </div>
            <div className={styles.deliverableItem}>
              <CheckCircle size={20} className={styles.deliverableIcon} />
              <div>
                <h4>Executive & Operational Dashboards</h4>
                <p>Tailored dashboards for warehouse managers and executives, with drill‑down to individual zones, shifts, and processes.</p>
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
            <h2>Ready to Optimize Your Warehouse?</h2>
            <p>
              Let's build a warehouse optimization and inventory management system that reduces
              costs, improves order accuracy, and accelerates fulfillment. You'll run a lean,
              agile warehouse that delivers superior service at lower cost.
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

export default WarehouseOptimizationPage;
