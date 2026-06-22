// src/pages/Blog/BlogPage.jsx
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./BlogPage.module.css";

const BLOGS = [
  {
    tag: "Machine Learning",
    color: "#fdb840",
    title: "Towards Data Science",
    source: "towardsdatascience.com",
    url: "https://towardsdatascience.com",
    summary: "The most widely read publication in applied data science and ML. Covers everything from SQL optimisation and dbt macros to LLM-powered analytics pipelines and production ML. Editorially rigorous since a 2024 revamp that filters out noise and surfaces practical, production-ready work. If you follow one feed in this space, this is it.",
  },
  {
    tag: "Statistical Modelling",
    color: "#00d4ff",
    title: "Simply Statistics",
    source: "simplystatistics.org",
    url: "https://simplystatistics.org",
    summary: "Written by three Johns Hopkins biostatistics professors, this is one of the few statistics blogs that combines academic rigour with readable prose. Covers causal inference, reproducibility, the misuse of p-values, and the practical limits of predictive modelling. Essential reading if your work sits at the intersection of statistics and decisions.",
  },
  {
    tag: "MLOps",
    color: "#a259ff",
    title: "Evidently AI Blog",
    source: "evidentlyai.com",
    url: "https://www.evidentlyai.com/blog",
    summary: "Practical, unsparing writing on ML model monitoring, data drift detection, and what it actually takes to keep models honest in production. Particularly strong on the gap between a model that works in a notebook and one that holds up six months after deployment. Their curated list of 50 engineering ML blogs is itself a resource worth bookmarking.",
  },
  {
    tag: "Quantitative Finance",
    color: "#00e676",
    title: "Databricks: AI in Financial Services",
    source: "databricks.com",
    url: "https://www.databricks.com/blog/8-ai-and-data-trends-shaping-financial-services-2026",
    summary: "Databricks publishes some of the most grounded writing on AI in financial services. Their 2026 outlook identifies eight structural shifts reshaping risk decisioning, real-time fraud detection, and regulatory compliance. The core argument, that competitive advantage now belongs to firms with platform coherence rather than isolated AI pilots, reflects what we see in practice with clients.",
  },
  {
    tag: "Data Engineering",
    color: "#ff6b6b",
    title: "Data Engineering Weekly",
    source: "dataengineeringweekly.com",
    url: "https://www.dataengineeringweekly.com",
    summary: "A weekly newsletter that cuts through the noise on modern data infrastructure. Covers Apache Iceberg table formats, lakehouse governance, Kafka streaming patterns, cost-efficient orchestration with Airflow and Prefect, and the evolving dbt ecosystem. High signal-to-noise ratio, well-annotated, and reliably useful for engineers building or maintaining production data stacks.",
  },
  {
    tag: "Machine Learning",
    color: "#fdb840",
    title: "Neptune AI Blog",
    source: "neptune.ai",
    url: "https://neptune.ai/blog",
    summary: "Focused on the operational side of ML: experiment tracking, model versioning, reproducibility, and team collaboration workflows. Neptune publishes detailed comparisons of MLOps tooling and honest post-mortems on what breaks in production. Useful for anyone managing a team of data scientists who run a large number of experiments and need structure around them.",
  },
  {
    tag: "Analytics",
    color: "#00d4ff",
    title: "Locally Optimistic",
    source: "locallyoptimistic.com",
    url: "https://locallyoptimistic.com",
    summary: "Written by analytics engineers and data leads at growth-stage companies. Covers data team structure, the modern analytics stack, metric definitions, and the cultural challenges of building data-driven organisations. Benn Stancil's essays in particular are worth reading for anyone who wants a sharp, occasionally contrarian take on where analytics practice is heading.",
  },
  {
    tag: "Business Intelligence",
    color: "#a259ff",
    title: "Tableau Blog",
    source: "tableau.com",
    url: "https://www.tableau.com/blog",
    summary: "Tableau's blog covers data visualisation best practices, dashboard design principles, and how analytics is being applied across industries from healthcare to financial services. Strong on the storytelling side of BI and how to present complex findings to non-technical stakeholders. Particularly useful for anyone responsible for executive-level reporting.",
  },
  {
    tag: "AI Research",
    color: "#00e676",
    title: "Google DeepMind Blog",
    source: "deepmind.google",
    url: "https://deepmind.google/discover/blog",
    summary: "DeepMind publishes landmark research on reinforcement learning, protein structure prediction, mathematical reasoning, and the safety of large-scale AI systems. Not always immediately applicable to commercial data work, but essential context for anyone building on top of frontier models or advising clients on where AI capability is heading in the next two to three years.",
  },
  {
    tag: "Statistical Modelling",
    color: "#ff6b6b",
    title: "Andrew Gelman: Statistical Modeling, Causal Inference, and Social Science",
    source: "statmodeling.stat.columbia.edu",
    url: "https://statmodeling.stat.columbia.edu",
    summary: "Andrew Gelman's blog at Columbia is where Bayesian methodology, causal inference, and statistical practice collide with genuine intellectual honesty. He regularly dissects published research that misuses statistics, discusses prior selection in Bayesian models, and writes about the replication crisis in a way that is directly relevant to anyone building models that inform real decisions.",
  },
  {
    tag: "Quantitative Finance",
    color: "#fdb840",
    title: "Quant at Risk",
    source: "quantatrisk.com",
    url: "https://quantatrisk.com",
    summary: "Practical quantitative finance, written by practitioners. Covers credit risk modelling, value-at-risk, portfolio construction, backtesting methodology, and Python implementation of financial models. One of the few blogs that bridges academic finance theory and the messy reality of building risk systems inside regulated institutions. Useful reading before any credit or market risk engagement.",
  },
  {
    tag: "Data Engineering",
    color: "#00d4ff",
    title: "Monzo Data Blog",
    source: "monzo.com",
    url: "https://monzo.com/blog/technology",
    summary: "Monzo's engineering and data team publish unusually transparent accounts of how they build and operate ML infrastructure at scale inside a regulated UK bank. Topics include their internal data stack, AutoML experiments, MLOps maturity, and A/B testing infrastructure. Valuable not just for the technical content but for the honest writing about what did not work.",
  },
  {
    tag: "AI & LLMs",
    color: "#a259ff",
    title: "Hugging Face Blog",
    source: "huggingface.co",
    url: "https://huggingface.co/blog",
    summary: "The central resource for open-source NLP, LLM fine-tuning, and multimodal model development. Covers new model releases, training techniques, RLHF, parameter-efficient fine-tuning methods like LoRA, and practical guides to deploying transformer models in production. If you are building any system that touches language models, this is required reading.",
  },
  {
    tag: "Analytics",
    color: "#00e676",
    title: "Mode Analytics Blog",
    source: "mode.com",
    url: "https://mode.com/blog",
    summary: "Mode's relaunched blog focuses on exploratory analytics and the practical combination of SQL and Python in notebooks. Strong on case studies from high-growth technology companies and on the question of when to keep analysis in a notebook versus when to promote it to a production pipeline. Useful for analysts who sit at the boundary between data and product.",
  },
  {
    tag: "Machine Learning",
    color: "#ff6b6b",
    title: "Stripe Engineering Blog",
    source: "stripe.com",
    url: "https://stripe.com/blog/engineering",
    summary: "Stripe's engineering team writes openly about building and operating ML infrastructure at very large scale. Topics include fraud detection model architecture, reproducible research practices, real-time feature computation, and the data tooling they have built internally. The fraud detection writing is particularly relevant for any financial services ML engagement.",
  },
  {
    tag: "Data Strategy",
    color: "#fdb840",
    title: "Datafloq",
    source: "datafloq.com",
    url: "https://datafloq.com",
    summary: "A platform focused on the business and strategic dimensions of data, AI, and big data. Covers topics including data governance frameworks, AI ethics and regulation, cloud strategy, and the organisational changes required to become genuinely data-driven. Useful for CxO-level reading and for framing data initiatives inside larger digital transformation programmes.",
  },
  {
    tag: "Quantitative Finance",
    color: "#00d4ff",
    title: "SSRN: Quantitative Finance eJournal",
    source: "ssrn.com",
    url: "https://www.ssrn.com/index.cfm/en/fin/",
    summary: "The Social Science Research Network hosts pre-publication working papers across quantitative finance, risk management, and financial econometrics. This is where practitioners and researchers share new work before it reaches journals, making it the fastest way to stay current on credit risk methodology, factor model research, and derivative pricing. Free to access.",
  },
  {
    tag: "MLOps",
    color: "#a259ff",
    title: "ZenML Blog",
    source: "zenml.io",
    url: "https://www.zenml.io/blog",
    summary: "ZenML writes practically and clearly about building portable, reproducible ML pipelines. Covers pipeline design patterns, stack configuration, the tradeoffs between different MLOps frameworks, and how to structure ML projects for long-term maintainability rather than just fast experimentation. Worth reading before designing an MLOps architecture from scratch.",
  },
  {
    tag: "Statistics",
    color: "#00e676",
    title: "Cross Validated (Stack Exchange)",
    source: "stats.stackexchange.com",
    url: "https://stats.stackexchange.com",
    summary: "Not a blog in the traditional sense, but the best single resource for rigorous statistical methodology questions. The community answers cover everything from the correct interpretation of confidence intervals and mixed-effects model specification to Bayesian prior selection and survival analysis assumptions. The quality of accepted answers is consistently high and peer-reviewed by the community.",
  },
  {
    tag: "AI & LLMs",
    color: "#ff6b6b",
    title: "Anthropic Research Blog",
    source: "anthropic.com",
    url: "https://www.anthropic.com/research",
    summary: "Anthropic publishes research on large language model safety, interpretability, and alignment. Their work on constitutional AI, mechanistic interpretability, and evaluating model behaviour under adversarial conditions is directly relevant for any organisation considering deploying LLMs in high-stakes environments such as finance, healthcare, or legal.",
  },
  {
    tag: "Data Engineering",
    color: "#fdb840",
    title: "dbt Labs Blog",
    source: "getdbt.com",
    url: "https://www.getdbt.com/blog",
    summary: "dbt has become the standard for analytics engineering and SQL-based data transformation. Their blog covers the evolution of the modern data stack, semantic layer design, metric consistency across reporting surfaces, and best practices for testing and documenting data models. Essential reading for any team running dbt in production or evaluating whether to adopt it.",
  },
  {
    tag: "Business Intelligence",
    color: "#00d4ff",
    title: "Thoughtspot Blog",
    source: "thoughtspot.com",
    url: "https://www.thoughtspot.com/blog",
    summary: "Thoughtspot focuses on self-service analytics and natural language search over business data. Their blog addresses the challenge of democratising data access across organisations without sacrificing governance, and covers AI-powered BI, the limits of traditional dashboards, and what genuinely data-literate organisations look like in practice.",
  },
];

const BlogPage = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  return (
    <div className={styles.page}>
      <Helmet>
        <title>Blog | Scape Data Solutions</title>
        <meta name="description" content="Curated reading on AI, statistical modelling, quantitative finance, data engineering, MLOps, and business intelligence." />
      </Helmet>

      <Navbar activeNav="blog" />

      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className={styles.heroBadge}>CURATED READING</p>
          <h1 className={styles.heroTitle}>Resources Worth <span className={styles.heroAccent}>Your Time</span></h1>
          <p className={styles.heroSub}>We do not publish for the sake of publishing. Instead, here are the external blogs, journals, and publications our team actually reads, annotated with why they matter for serious data and AI work.</p>
        </motion.div>
      </section>

      <section className={styles.body}>
        {BLOGS.map((b, i) => (
          <motion.div key={i} className={styles.entry}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className={styles.entryMeta}>
              <span className={styles.entryTag} style={{ color: b.color }}>{b.tag}</span>
              <div className={styles.entryLine} style={{ background: b.color }} />
            </div>
            <div className={styles.entryBody}>
              <div className={styles.entryTop}>
                <h3 className={styles.entryTitle}>{b.title}</h3>
                <a href={b.url} target="_blank" rel="noopener noreferrer" className={styles.entryLink}>
                  {b.source} <ArrowUpRight size={14} />
                </a>
              </div>
              <p className={styles.entrySummary}>{b.summary}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className={styles.cta}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Want Our Team to Solve Your Data Problem?</h2>
          <p>Reading is useful. Having experts build it is better.</p>
          <Link to="/contact" className={styles.ctaBtn}>Talk to Us <ArrowRight size={16} /></Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
