// src/pages/Expertise/ExpertisePage.jsx
// Left‑aligned hero, black text, compact spacing

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ChevronUp } from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../Home/HomePage.module.css";
import pageStyles from "./ExpertisePage.module.css";
import SEO from "../../components/SEO/SEO";

// ─── Animation Variants ──────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const REPLAY_VIEWPORT = { once: false, amount: 0.15 };

// ─── Typewriter Effect ──────────────────────────────────────────
function Typewriter({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        if (index === text.length) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView, text, started]);

  return <span ref={ref}>{displayText}</span>;
}

// ─── Component ──────────────────────────────────────────────────
export default function ExpertisePage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Comprehensive Expertise Areas ────────────────────────────
  const expertiseAreas = [
    {
      id: "01",
      title: "Financial Modelling & Forecasting",
      paragraphs: [
        "We build sophisticated financial models that help you understand your business's future performance. Our models incorporate cash flow projections, revenue and expense forecasting, scenario analysis, and sensitivity testing to give you a clear picture of where your business is heading.",
        "We work with businesses across industries to develop three‑statement models, discounted cash flow (DCF) valuations, merger and acquisition (M&A) models, and leveraged buyout (LBO) models. Our approach combines rigorous financial theory with practical, actionable insights that drive strategic decision‑making.",
        "Whether you're raising capital, planning an acquisition, or simply trying to understand your financial trajectory, our modelling expertise gives you the confidence to make informed decisions. We don't just build spreadsheets – we build decision‑support tools that empower your leadership team."
      ],
    },
    {
      id: "02",
      title: "Credit Risk Analytics & Modelling",
      paragraphs: [
        "We help financial institutions and lending businesses understand, measure, and manage credit risk across their portfolios. Our expertise covers the full credit risk lifecycle – from model development and validation to regulatory compliance and portfolio optimisation.",
        "We develop and validate Probability of Default (PD), Loss Given Default (LGD), and Exposure at Default (EAD) models that feed into Expected Credit Loss (ECL) estimation under IFRS 9 and Internal Ratings‑Based (IRB) frameworks. Our models are built to meet both strategic business needs and rigorous regulatory requirements.",
        "Beyond modelling, we help you implement credit risk strategies across the customer lifecycle – from acquisition and underwriting to collections and recovery. We use advanced analytics and machine learning to refine risk assessment, respond proactively to shifting market dynamics, and turn risk into a strategic driver of performance."
      ],
    },
    {
      id: "03",
      title: "Fraud Detection & Financial Crime Prevention",
      paragraphs: [
        "Financial crime costs businesses billions every year. We help you detect and prevent fraud using advanced analytics, machine learning, and real‑time monitoring. Our solutions identify suspicious patterns, flag anomalies, and block financial crime before it impacts your bottom line.",
        "We specialise in anti‑money laundering (AML) analytics, Know Your Customer (KYC) automation, and transaction monitoring systems. Our models are designed to reduce false positives while catching genuine threats, helping you stay compliant with evolving regulatory requirements while protecting your business and your customers.",
        "Our fraud detection capabilities span payment fraud, application fraud, identity fraud, and insider threats. We combine domain expertise with cutting‑edge technology to build systems that adapt to new fraud patterns in real time, keeping you one step ahead of criminals."
      ],
    },
    {
      id: "04",
      title: "Risk Management & Regulatory Compliance",
      paragraphs: [
        "Navigating the complex landscape of financial regulation requires deep expertise and robust analytics. We help financial institutions and regulated businesses meet their compliance obligations while managing risk effectively. Our services cover Basel III/IV, IFRS 9, CCAR, SOX, and AML requirements.",
        "We provide end‑to‑end support for regulatory reporting, stress testing, scenario analysis, and model risk management. Our team helps you build sustainable, cost‑effective approaches to model validation and risk management that satisfy both regulators and internal stakeholders.",
        "We also help you translate risk management strategies into commercial and hedging strategies, ensuring that your compliance efforts also drive business value. Our approach is pragmatic and business‑focused – we help you turn regulatory burden into competitive advantage."
      ],
    },
    {
      id: "05",
      title: "Customer Analytics & Personalisation",
      paragraphs: [
        "Understanding your customers is the foundation of growth. We build 360‑degree customer profiles that unify data from sales, marketing, support, and product usage, giving you a complete view of your customer relationships.",
        "Our customer analytics solutions include segmentation, churn prediction, next‑best‑action recommendations, and marketing attribution. We help you identify your most valuable customers, predict which ones are at risk of leaving, and personalise experiences that drive loyalty and revenue.",
        "We also specialise in customer lifetime value (CLV) modelling, cohort analysis, and journey mapping. Whether you're in retail, financial services, healthcare, or technology, we help you turn customer data into a strategic asset that drives sustainable growth."
      ],
    },
    {
      id: "06",
      title: "Business Intelligence & Performance Analytics",
      paragraphs: [
        "Data is worthless if people can't understand it. We build interactive dashboards and self‑service analytics that put insights at the fingertips of your decision‑makers. Using tools like Power BI, Tableau, and Looker, we create visualisations that tell a clear, compelling story about your business performance.",
        "Our BI solutions track your key performance indicators (KPIs), surface hidden trends, and empower your entire team to make data‑driven decisions. We don't just build dashboards – we build analytics cultures that transform how your organisation operates.",
        "We also provide training and change management support to ensure your team can get the most out of your BI investments. We help you move from reactive reporting to proactive, insight‑driven decision‑making at every level of your organisation."
      ],
    },
    {
      id: "07",
      title: "Predictive Analytics & Machine Learning",
      paragraphs: [
        "We build machine learning models that predict future outcomes and help you make better decisions today. Our predictive analytics capabilities include demand forecasting, sales prediction, churn modelling, lead scoring, and predictive maintenance.",
        "We work with a wide range of ML techniques – from traditional regression and time‑series analysis to advanced deep learning and ensemble methods. We use tools like TensorFlow, PyTorch, XGBoost, and Prophet to build models that deliver accurate, actionable predictions.",
        "Our approach is business‑first – we don't build models for their own sake. We work closely with you to identify high‑impact opportunities, build models that solve real problems, and deploy them into your existing workflows so you start seeing value immediately."
      ],
    },
    {
      id: "08",
      title: "Data Engineering & Infrastructure",
      paragraphs: [
        "Your analytics are only as good as the data infrastructure that supports them. We build scalable, reliable data pipelines using modern tools like Apache Spark, Kafka, Airflow, and dbt. Whether you need batch processing, real‑time streaming, or a hybrid approach, we design architectures that handle growth without breaking.",
        "We specialise in data warehousing and lakehouse architectures on Snowflake, BigQuery, and Redshift. Our infrastructure‑as‑code approach ensures that your data platform is reproducible, auditable, and cost‑optimised. We also implement data quality frameworks that ensure your analytics are built on a foundation of trust.",
        "Our engineering team follows best practices in data modelling, performance optimisation, and security. We design systems that scale with your business, handle increasing data volumes, and provide the reliability your operations demand."
      ],
    },
    {
      id: "09",
      title: "Cloud Analytics & Modernisation",
      paragraphs: [
        "The cloud offers unlimited scalability, but only if you design your architecture correctly. We help you migrate and modernise your data platforms on AWS, Azure, or GCP. Our cloud‑native solutions are elastic, cost‑efficient, and built for high availability.",
        "We specialise in serverless analytics, data lake formation, and lakehouse patterns that combine the best of data lakes and data warehouses. With our optimisation techniques, you'll never pay for resources you don't need.",
        "Our cloud expertise extends to cost management, security configuration, and performance tuning. We design architectures that automatically scale to meet demand, reducing costs during low‑usage periods and ensuring consistent performance during peak loads."
      ],
    },
    {
      id: "10",
      title: "Data Governance, Privacy & Security",
      paragraphs: [
        "Protecting your data and your customers is non‑negotiable. We implement enterprise‑grade security frameworks that cover GDPR, HIPAA, SOC 2, and CCPA compliance. Our governance solutions include data quality monitoring, master data management, and access control policies that ensure only the right people have the right access.",
        "We also provide data lineage and audit trails so you always know where your data came from and how it's being used. This is critical not only for compliance but also for building trust with your customers and partners.",
        "Our governance framework covers the full lifecycle of your data – from collection and storage to usage and deletion. We help you establish clear policies, implement robust controls, and maintain ongoing compliance with evolving regulations. With our guidance, you can turn data governance from a burden into a competitive advantage."
      ],
    },
    {
      id: "11",
      title: "Custom Development & Automation",
      paragraphs: [
        "Generic software rarely fits your business perfectly. We build custom applications, APIs, and integrations that solve your unique challenges. Whether it's a workflow automation tool, a data‑driven web application, or a complex integration between legacy and modern systems, we deliver tailored solutions.",
        "Our development team is proficient in Python, React, Node.js, and a wide range of frameworks. We follow agile methodologies and deliver working software every sprint, so you see progress and provide feedback throughout the development cycle.",
        "We understand that every business has unique workflows, data sources, and requirements. Our custom development approach ensures that the solutions we build fit seamlessly into your operations, automate manual processes, and unlock new efficiencies."
      ],
    },
    {
      id: "12",
      title: "Strategy Consulting & Business Transformation",
      paragraphs: [
        "Technology without strategy is just expensive experimentation. We help you develop a clear, actionable data strategy that aligns with your business goals and delivers measurable results. Our strategy consulting covers data maturity assessments, use‑case identification, roadmapping, and organisational change management.",
        "We work with you to identify the highest‑impact opportunities for data and analytics in your business, prioritise investments, and build a roadmap that delivers quick wins while building toward long‑term transformation.",
        "Our consultants bring deep industry experience across financial services, healthcare, retail, manufacturing, and technology. We don't just give you recommendations – we help you execute them, building the capabilities and culture you need to become a truly data‑driven organisation."
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <SEO
        title="Data & AI Expertise | Financial Modelling, Credit Risk, ML & More — Scape Data Solutions"
        description="12 deep expertise areas: financial modelling and forecasting, credit risk analytics and IFRS 9, fraud detection and AML, customer analytics, business intelligence, predictive machine learning, data engineering, cloud analytics on AWS Azure GCP, data governance, regulatory compliance, custom development and strategy consulting."
        path="/expertise"
      />

      {/* ─── Navbar ────────────────────────────────────────────── */}
      <Navbar activeNav="expertise" />

      {/* ─── Main ────────────────────────────────────────────────── */}
      <main className={styles.mainContent}>

        {/* ════════════════════════════════════════════════════════
            HERO – left‑aligned, black text, compact
            ════════════════════════════════════════════════════════ */}
        <section className={pageStyles.hero}>
          <div className={styles.container}>
            <motion.div
              className={pageStyles.heroContent}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className={pageStyles.heroLabel}>WHAT WE DO</div>
              <h1 className={pageStyles.heroTitle}>
                Our <span className={pageStyles.accent}>Expertise</span>
              </h1>
              <p className={pageStyles.heroSubtext}>
                <Typewriter text="From financial modelling and credit risk to customer analytics and cloud modernisation – we bring deep, practical expertise to every business challenge." />
              </p>
              <motion.div
                className={pageStyles.scrollIndicator}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                Explore our capabilities ↓
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            EXPERTISE SECTIONS
            ════════════════════════════════════════════════════════ */}
        {expertiseAreas.map((area, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={index}
              className={`${styles.sec} ${
                isEven ? pageStyles.sectionLight : pageStyles.sectionDark
              }`}
            >
              <div className={styles.container}>
                <motion.div
                  className={pageStyles.expertiseBlock}
                  initial="hidden"
                  whileInView="visible"
                  viewport={REPLAY_VIEWPORT}
                  variants={staggerChildren}
                >
                  <div className={pageStyles.expertiseGrid}>
                    <motion.div
                      className={pageStyles.expertiseNumber}
                      variants={slideInLeft}
                    >
                      {area.id}
                    </motion.div>
                    <motion.div
                      className={pageStyles.expertiseText}
                      variants={slideInRight}
                    >
                      <h3 className={pageStyles.expertiseTitle}>{area.title}</h3>
                      {area.paragraphs.map((p, i) => (
                        <p key={i} className={pageStyles.expertiseParagraph}>
                          {p}
                        </p>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}

        {/* ════════════════════════════════════════════════════════
            CLOSING CTA
            ════════════════════════════════════════════════════════ */}
        <section className={`${styles.sec} ${pageStyles.ctaSection}`}>
          <div className={styles.container}>
            <motion.div
              className={pageStyles.ctaBox}
              initial="hidden"
              whileInView="visible"
              viewport={REPLAY_VIEWPORT}
              variants={fadeUp}
            >
              <h2 className={pageStyles.ctaTitle}>
                Ready to put our expertise to work for you?
              </h2>
              <p className={pageStyles.ctaSub}>
                Whether you need a financial model, a credit risk framework, or a complete data transformation – we're here to help.
              </p>
              <Link to="/contact" className={pageStyles.ctaBtn}>
                Let's talk
              </Link>
            </motion.div>
          </div>
        </section>

      </main>

      {/* ─── Footer ────────────────────────────────────────────── */}
      <Footer />

      {/* ─── Back to Top ─────────────────────────────────────────── */}
      {showTop && (
        <motion.button
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          whileHover={{ scale: 1.1, backgroundColor: "#fdb840", color: "#fff" }}
        >
          <ChevronUp size={20} />
        </motion.button>
      )}

    </div>
  );
}