// src/pages/History/HistoryPage.jsx
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./HistoryPage.module.css";

const MILESTONES = [
  {
    year: "2018",
    label: "The Beginning",
    color: "#fdb840",
    heading: "Founded in Manchester",
    body: "Scape Data Solutions was founded in Manchester by two former analysts from Barclays Corporate Banking and a statistician from the University of Manchester. The three had spent years watching firms make expensive decisions based on gut feel while sitting on warehouses of unused data. We took a small office on Piccadilly and started with three clients: a Leeds-based invoice finance lender, a retail energy broker in Salford, and a logistics firm in Sheffield. The first six months were credit scoring models and Excel replacements. It was unglamorous. It worked.",
  },
  {
    year: "2019",
    label: "First Enterprise Win",
    color: "#00d4ff",
    heading: "Aldermore Bank and a Statistical Consulting Practice",
    body: "We were brought in by Aldermore Bank to rebuild their SME credit risk scorecard after their legacy model started misfiring on newer lending cohorts. We rebuilt it using logistic regression with behavioural features and improved Gini from 0.41 to 0.67. That engagement put us on the map in UK alternative lending. Alongside it, we launched a statistical consulting arm, initially serving PhD researchers at the University of Leeds and Sheffield Hallam needing analysis support, then expanding to policy teams and market research firms across the North.",
  },
  {
    year: "2020",
    label: "Going Remote, Going Global",
    color: "#a259ff",
    heading: "First Clients Outside the UK",
    body: "COVID shut offices but opened markets. Within six weeks of the first lockdown we had onboarded our first client in the US, a Chicago-based fintech called Avant, and our first Middle East engagement with a Kuwaiti private hospital group needing patient admission forecasting models. Back in the UK we built a real-time inventory data pipeline for a Nottingham e-commerce retailer processing over 1.8 million daily events through Kafka and Postgres. By December 2020 we had active projects in five countries and had not been in a shared office for nine months.",
  },
  {
    year: "2021",
    label: "AI Practice",
    color: "#00e676",
    heading: "Machine Learning, NLP and Computer Vision",
    body: "We hired our first dedicated ML engineers and set up a proper model development workflow with version control, experiment tracking in MLflow, and structured peer review. The first NLP project was for a Birmingham-based property law firm, Gateley Legal, automating clause extraction from commercial leases. The first computer vision project was for a precision parts manufacturer in Coventry, detecting surface defects on aluminium castings using a fine-tuned ResNet model deployed on-site. We crossed 500 completed projects in October.",
  },
  {
    year: "2022",
    label: "Quant Finance",
    color: "#ff6b6b",
    heading: "Quantitative Modelling for Investment Firms",
    body: "Word of the Aldermore work had spread quietly. In 2022 we formalised a quantitative finance division after being approached by Liontrust Asset Management to build a factor-based portfolio screening tool, and by a Manchester family office to build a Monte Carlo engine for estate liquidity planning. We also took on our first IFRS 9 expected credit loss model rebuild for a regional building society, Skipton-adjacent, and started working with a Toronto-based credit analytics firm after registering a Canadian entity in Ontario.",
  },
  {
    year: "2023",
    label: "Certification",
    color: "#fdb840",
    heading: "ISO 27001, Clutch Recognition and MLOps",
    body: "Enterprise clients were asking harder questions about data security. We went through a full ISO 27001 audit with BSI Group and achieved certification in March 2023. That same quarter we were listed in Clutch Top 1000 B2B Companies and Top AI Companies globally. We launched an MLOps practice after seeing too many client models decay silently in production: the practice covers monitoring, retraining pipelines, data drift detection, and model governance documentation. The first full MLOps engagement was with a Bristol insurtech.",
  },
  {
    year: "2024",
    label: "Generative AI",
    color: "#00d4ff",
    heading: "LLMs, RAG Pipelines and 3,000 Projects",
    body: "The generative AI wave arrived and most organisations did not know what to do with it practically. We built a Retrieval-Augmented Generation system for a London-based legal publisher, enabling their editorial team to query 40 years of case law through a structured interface. We fine-tuned an open-source Mistral model on proprietary credit memos for a UK challenger bank. We built an AI agent for automated financial report extraction for a mid-market PE firm in Edinburgh. We crossed 3,000 projects in September and opened a Chicago office on West Monroe.",
  },
  {
    year: "2025",
    label: "Global Scale",
    color: "#a259ff",
    heading: "60 Countries, 3,500 Projects, 70 People",
    body: "Seven years from a Piccadilly office with three clients, Scape Data Solutions now runs active projects in over 60 countries. Our 70-plus team spans data engineers, ML researchers, statisticians, quant analysts, and BI developers. We work with firms from seed-stage startups to FTSE 100 subsidiaries. Average client engagement length is over three years. We do not win every pitch. We do not try to. We take on work where the data problem is real, the client is serious, and the solution will outlast the project.",
  },
  {
    year: "2026",
    title: "Eight Years",
    color: "#00e676",
    heading: "Still Manchester. Now Everywhere.",
    body: "Our registered office is still in Manchester. The team is distributed across London, Chicago, Dubai, Nairobi, and Toronto. We are building proprietary tooling for financial model governance, expanding our presence in the GCC and East Africa, and running applied AI research partnerships with two UK universities. The founding question has not changed: why are organisations still making bad decisions when the data to make better ones already exists inside them?",
  },
];

const Block = ({ m, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={styles.block}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.blockMeta}>
        <span className={styles.blockYear} style={{ color: m.color }}>{m.year}</span>
        <span className={styles.blockLabel} style={{ color: m.color }}>{m.label}</span>
        <div className={styles.blockLine} style={{ background: m.color }} />
      </div>
      <div className={styles.blockBody}>
        <h3 className={styles.blockHeading}>{m.heading}</h3>
        <p className={styles.blockText}>{m.body}</p>
      </div>
    </motion.div>
  );
};

const HistoryPage = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Our History | Scape Data Solutions</title>
        <meta name="description" content="Eight years of data science, AI, financial modelling, and analytics from Manchester to 60 countries." />
      </Helmet>

      <Navbar activeNav="company" />

      <section className={styles.hero} style={{backgroundImage:"url(/scape_data_files/the-journey.jpg)",backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"}}>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className={styles.heroBadge}>EST. 2018 · MANCHESTER, UK</p>
          <h1 className={styles.heroTitle}>Our <span className={styles.heroAccent}>Journey</span></h1>
          <p className={styles.heroSub}>Started in a Piccadilly office with three clients and a very clear problem to solve. Eight years later, 3,500 projects across 60 countries. Here is how it happened.</p>
        </motion.div>
      </section>

      <section className={styles.timelineSection}>
        {MILESTONES.map((m, i) => <Block key={i} m={m} i={i} />)}
      </section>

      <section className={styles.statsStrip}>
        {[
          { val: "2018", lbl: "Year Founded" },
          { val: "8",    lbl: "Years in Business" },
          { val: "3,500+", lbl: "Projects Delivered" },
          { val: "60+",  lbl: "Countries Served" },
          { val: "70+",  lbl: "Specialists" },
          { val: "99.5%", lbl: "Satisfaction Rate" },
        ].map((s, i) => (
          <motion.div key={i} className={styles.stripStat}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <span className={styles.stripVal}>{s.val}</span>
            <span className={styles.stripLbl}>{s.lbl}</span>
          </motion.div>
        ))}
      </section>

      <section className={styles.cta}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Be Part of Our Next Chapter</h2>
          <p>Whether you are a startup or an enterprise, we are ready to help you turn data into your most valuable asset.</p>
          <Link to="/contact" className={styles.ctaBtn}>Start a Conversation <ArrowRight size={18}/></Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default HistoryPage;
