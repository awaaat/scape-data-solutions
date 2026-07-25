// src/data/serviceContent/dataEngineeringAI.js
//
// Data engineering & applied AI/ML services.
// Each export matches the prop shape expected by ServiceContentPage.

export const dataEngineering = {
  slug: "data-engineering",
  name: "Data Engineering",
  nameHighlight: "Engineering",
  badge: "For Teams Scaling Their Data Stack",
  heroSub: "Reliable pipelines, clean models, and a data foundation your analytics and ML teams can actually build on.",
  heroQuote: "Every dashboard we build is only as good as the data underneath it.",
  stats: [
    { value: "10+", label: "Pipeline technologies supported" },
    { value: "99%+", label: "Target pipeline uptime" },
    { value: "0", label: "Manual data hand-offs, once live" },
  ],
  audience: ["Growing Data Teams", "Analytics Leaders", "Startups Scaling Up", "Enterprises Modernizing Legacy Systems"],
  problem: [
    "Most data problems aren't analysis problems — they're plumbing problems. Reports that break every time a source schema changes, dashboards fed by three different spreadsheets that don't agree with each other, and analysts who spend more time reconciling numbers than interpreting them.",
    "We build the data infrastructure layer that everything else depends on: pipelines that move data reliably from source to destination, models that organize it consistently, and monitoring that tells you when something breaks before your stakeholders notice.",
  ],
  offerings: [
    "Pipeline design and implementation (batch and streaming)",
    "Data modeling for analytics and reporting workloads",
    "Automation of recurring data workflows",
    "Data quality checks and monitoring built into the pipeline",
    "Documentation so your team can maintain what we build",
  ],
  tools: ["Python", "SQL", "Airflow", "dbt", "Snowflake", "BigQuery"],
  workflow: [
    { title: "Audit Current State", description: "We map your existing data sources, pipelines, and pain points before writing a line of code." },
    { title: "Design the Architecture", description: "Pipeline structure, data models, and tooling choices are documented and reviewed with your team before build starts." },
    { title: "Build & Test", description: "Pipelines are built incrementally, tested against real data, and validated against your existing (manual) numbers." },
    { title: "Handoff & Monitor", description: "You get working documentation, monitoring dashboards, and a system your team can extend without us." },
  ],
  whyUs: [
    "We document everything — no black-box pipelines only we understand",
    "Built for your actual data volume and query patterns, not a generic template",
    "Data quality checks are built in from day one, not bolted on later",
    "We hand off cleanly — this isn't a system you're locked into needing us for",
  ],
  faqs: [
    { q: "Do you work with our existing tools, or do we need to switch platforms?", a: "We build within your existing stack wherever practical. We'll recommend a change only if your current tooling genuinely can't support what you need." },
    { q: "How long does a typical pipeline project take?", a: "A single well-defined pipeline usually takes 2-4 weeks. Larger data platform builds run longer and are typically delivered in phases so you see working pipelines early." },
    { q: "Can you fix an existing pipeline instead of building new ones?", a: "Yes — a lot of our work is auditing and repairing pipelines that have drifted or broken over time, not just greenfield builds." },
    { q: "What happens after you hand off the pipeline?", a: "You get full documentation and, if needed, a support window while your team gets comfortable maintaining it. No dependency on us to keep it running." },
  ],
  metaDescription: "Data engineering services that build reliable pipelines, clean data models, and monitoring your analytics and ML teams can actually depend on.",
  serviceType: "Data Engineering",
};

export const dataWarehouseDevelopment = {
  slug: "data-warehouse-development",
  name: "Data Warehouse Development",
  nameHighlight: "Warehouse",
  badge: "One Source of Truth",
  heroSub: "A properly modeled data warehouse that ends the spreadsheet-reconciliation cycle for good.",
  heroQuote: "Which number is the real one — sales' spreadsheet or finance's dashboard?",
  stats: [
    { value: "1", label: "Consistent source of truth" },
    { value: "Star", label: "Schema modeling as standard" },
    { value: "Zero", label: "Manual reconciliation, once live" },
  ],
  audience: ["Finance & Analytics Teams", "Multi-System Businesses", "Growing Enterprises", "BI Teams"],
  problem: [
    "When sales lives in a CRM, orders live in an ERP, and marketing lives in three different ad platforms, every report becomes an argument about whose numbers are right. A data warehouse exists to end that argument — one consistent, modeled, queryable version of the truth.",
    "We design and build warehouses using proven dimensional modeling patterns (star schemas, conformed dimensions) so your reporting is fast, consistent, and doesn't fall over every time a new data source gets added.",
  ],
  offerings: [
    "Dimensional data modeling (star schema design)",
    "Historical data loading and ongoing incremental updates",
    "Slowly changing dimension handling for accurate historical reporting",
    "Performance tuning for fast dashboard and report queries",
    "Access controls and documentation for self-serve analytics",
  ],
  tools: ["Snowflake", "BigQuery", "Redshift", "dbt", "SQL"],
  workflow: [
    { title: "Define Business Questions", description: "We start from the decisions your warehouse needs to support, not just the tables you currently have." },
    { title: "Model the Data", description: "Dimensional models are designed around your actual reporting needs and reviewed before implementation." },
    { title: "Build & Backfill", description: "Historical data is loaded and validated against your existing reports so numbers reconcile from day one." },
    { title: "Enable Self-Serve", description: "We document the model so your BI tool of choice can query it directly, without a data team bottleneck." },
  ],
  whyUs: [
    "Modeled around your actual business questions, not a generic template",
    "Historical data is validated against your existing numbers before cutover",
    "Built for the BI tool you already use — Power BI, Tableau, Looker, or others",
    "Clear documentation so your analysts can self-serve without waiting on engineering",
  ],
  faqs: [
    { q: "How is this different from just connecting our BI tool directly to source systems?", a: "Direct connections mean every report re-derives its own logic and definitions, which is exactly how numbers end up disagreeing. A warehouse centralizes that logic once." },
    { q: "Can you migrate an existing warehouse instead of starting over?", a: "Yes — a lot of engagements are re-modeling or fixing a warehouse that's grown messy over time, not building from scratch." },
    { q: "Do we need a huge data team to maintain this?", a: "No. We design for maintainability with clear documentation and reasonable automation, so a lean team can keep it running." },
  ],
  metaDescription: "Data warehouse development with proper dimensional modeling, so your team stops arguing about whose numbers are right.",
  serviceType: "Data Engineering",
};

export const etlPipelineDevelopment = {
  slug: "etl-pipeline-development",
  name: "ETL Pipeline Development",
  nameHighlight: "Pipeline",
  badge: "Data That Moves On Its Own",
  heroSub: "Automated, monitored pipelines that move your data reliably — no more manual exports and CSV hand-offs.",
  heroQuote: "Someone still exports this by hand every Monday morning.",
  stats: [
    { value: "24/7", label: "Automated pipeline runs" },
    { value: "0", label: "Manual CSV exports, once live" },
    { value: "Alerted", label: "The moment a pipeline fails" },
  ],
  audience: ["Operations Teams", "Analytics Teams", "Growing Businesses", "IT Departments"],
  problem: [
    "Manual data movement — someone exporting a report, emailing a spreadsheet, or copy-pasting numbers between systems — is fragile, slow, and doesn't scale. It also fails silently: nobody notices a missed export until a report looks wrong three weeks later.",
    "We build ETL (and ELT) pipelines that automate this movement end to end, with monitoring that alerts your team the moment something breaks, instead of leaving it to be discovered by accident.",
  ],
  offerings: [
    "Source-to-destination pipeline design and build",
    "Scheduling and orchestration (no manual triggers)",
    "Error handling and automatic retry logic",
    "Monitoring and alerting for pipeline failures",
    "Documentation covering data flow and dependencies",
  ],
  tools: ["Airflow", "dbt", "Python", "Fivetran", "SQL"],
  workflow: [
    { title: "Map Data Flow", description: "We identify every source, transformation, and destination the pipeline needs to touch." },
    { title: "Build the Pipeline", description: "Extraction, transformation, and loading logic is built and tested against real production data." },
    { title: "Add Monitoring", description: "Alerting is wired in so failures are caught immediately, not discovered downstream." },
    { title: "Automate & Handoff", description: "The pipeline runs on its own schedule, with documentation for your team to maintain and extend it." },
  ],
  whyUs: [
    "Built with monitoring and alerting from the start, not added as an afterthought",
    "Designed to handle the messy edge cases in your actual source data",
    "No dependency on us to keep the pipeline running after handoff",
    "Works with your existing infrastructure — cloud or on-premises",
  ],
  faqs: [
    { q: "What happens if a data source changes its format?", a: "Well-built pipelines fail loudly and specifically when a schema changes, rather than silently producing wrong data — that's part of what we design for." },
    { q: "Can this replace our current manual export process entirely?", a: "In almost every case, yes. If there's a genuine reason a step needs to stay manual (e.g. a manual approval step), we design the pipeline around that rather than forcing full automation." },
    { q: "Do you support real-time/streaming pipelines, not just batch?", a: "Yes, depending on your use case — we'll recommend batch, micro-batch, or streaming based on how fresh the data actually needs to be." },
  ],
  metaDescription: "ETL pipeline development that automates data movement end to end, with monitoring that catches failures immediately instead of weeks later.",
  serviceType: "Data Engineering",
};

export const dataMigration = {
  slug: "data-migration",
  name: "Data Migration",
  nameHighlight: "Migration",
  badge: "Move Systems Without Losing Data",
  heroSub: "Careful, validated data migration for system upgrades, cloud moves, and consolidations — with no surprises at cutover.",
  heroQuote: "We can't switch systems, all our historical data lives in the old one.",
  stats: [
    { value: "100%", label: "Data reconciled before cutover" },
    { value: "0", label: "Surprise data loss incidents" },
    { value: "Tested", label: "Rollback plan for every migration" },
  ],
  audience: ["IT Leaders", "Companies Upgrading Systems", "Businesses Moving to the Cloud", "Post-Merger Teams"],
  problem: [
    "Migrating data between systems — a legacy database to a modern platform, an on-premises system to the cloud, or two systems merging after an acquisition — is where a lot of data quietly goes missing or gets corrupted, usually discovered only after go-live.",
    "We treat migration as a data quality problem first: profile the source, map it carefully to the destination, migrate in validated batches, and reconcile every record before the old system gets switched off.",
  ],
  offerings: [
    "Source data profiling and destination mapping",
    "Migration scripting for structured and unstructured data",
    "Data reconciliation and validation before cutover",
    "Rollback planning in case something needs to be reversed",
    "Post-migration support during the transition period",
  ],
  tools: ["SQL", "Python", "Cloud migration tools", "ETL platforms"],
  workflow: [
    { title: "Profile Source Data", description: "We assess data quality, volume, and structure in the source system before planning the migration." },
    { title: "Map & Design", description: "Field-level mapping between source and destination is documented and reviewed before any data moves." },
    { title: "Migrate in Batches", description: "Data moves in validated batches, not one risky bulk transfer, so issues are caught early and contained." },
    { title: "Reconcile & Cut Over", description: "Every migrated record is checked against the source before the old system is retired." },
  ],
  whyUs: [
    "Every migration includes a tested rollback plan, not just a hope it works",
    "We reconcile data record-by-record, not just check row counts match",
    "Support continues through your transition period, not just the cutover date",
    "Experience across legacy databases, cloud platforms, and merged systems",
  ],
  faqs: [
    { q: "What if we discover a data quality issue partway through?", a: "This is common and expected — we build in time for issues found during profiling, since fixing them before migration is far cheaper than after." },
    { q: "How do you handle downtime during cutover?", a: "We plan migrations to minimize downtime, often using parallel-run periods where both systems operate briefly so we can validate before fully switching over." },
    { q: "Can you migrate unstructured data too — documents, files, attachments?", a: "Yes, we handle both structured (database) and unstructured (files, documents) migration, with the same validation rigor for each." },
  ],
  metaDescription: "Data migration services with record-level validation and tested rollback plans, so system upgrades and cloud moves don't lose data.",
  serviceType: "Data Engineering",
};

export const dataQualityAssessment = {
  slug: "data-quality-assessment",
  name: "Data Quality Assessment",
  nameHighlight: "Quality",
  badge: "Know What's Actually Wrong With Your Data",
  heroSub: "A clear-eyed audit of your data's accuracy, completeness, and consistency — with a prioritized plan to fix it.",
  heroQuote: "We think our data is fine, but nobody's actually checked.",
  stats: [
    { value: "Scored", label: "Quality across every key table" },
    { value: "Ranked", label: "Issues by business impact" },
    { value: "Actionable", label: "Remediation plan, not just a report" },
  ],
  audience: ["Data Teams", "Analytics Leaders", "Companies Before a BI Rollout", "Compliance Teams"],
  problem: [
    "Most organizations assume their data is roughly fine until a report produces an obviously wrong number, at which point trust in the entire system erodes. Data quality problems are usually there long before anyone notices — missing values, duplicate records, inconsistent formats, violated business rules.",
    "We assess data quality systematically: profiling completeness, accuracy, consistency, and timeliness across your key tables, and delivering a prioritized list of what to fix first based on actual business impact, not just what's easiest to fix.",
  ],
  offerings: [
    "Data profiling across accuracy, completeness, and consistency",
    "Business rule validation against your actual requirements",
    "Duplicate and anomaly detection",
    "A scored quality report by table and field",
    "Prioritized remediation roadmap",
  ],
  tools: ["SQL", "Python", "Data profiling tools", "Great Expectations"],
  workflow: [
    { title: "Scope Key Data", description: "We identify which tables and fields matter most to your business decisions, focusing the assessment there first." },
    { title: "Profile & Test", description: "Data is profiled for completeness, accuracy, and consistency, and validated against your actual business rules." },
    { title: "Score & Rank", description: "Issues are quantified and ranked by business impact and effort to fix, not just listed." },
    { title: "Deliver the Roadmap", description: "You get a clear, prioritized plan for remediation — not just a report describing problems." },
  ],
  whyUs: [
    "We rank issues by business impact, not just technical severity",
    "Assessment covers your actual business rules, not generic quality checks",
    "Deliverable is a roadmap you can act on, not just a diagnostic report",
    "We can also implement the fixes, not just identify them",
  ],
  faqs: [
    { q: "How long does an assessment take?", a: "A focused assessment on key tables typically takes 1-3 weeks depending on data volume and complexity." },
    { q: "Do you fix the issues you find, or just report them?", a: "Both are available — some clients want the assessment only, others have us implement the remediation directly after." },
    { q: "Can this be an ongoing service, not just a one-time audit?", a: "Yes — we can set up recurring quality monitoring so issues are caught continuously, not just at a single point in time." },
  ],
  metaDescription: "Data quality assessment that scores accuracy, completeness, and consistency across your key data, with a prioritized plan to fix it.",
  serviceType: "Data Engineering",
};

export const machineLearningConsulting = {
  slug: "machine-learning-consulting",
  name: "Machine Learning Consulting",
  nameHighlight: "Machine Learning",
  badge: "Models Built to Solve Your Actual Problem",
  heroSub: "Machine learning solutions scoped to a specific business problem, built for accuracy, explainability, and real deployment.",
  heroQuote: "We know we need machine learning, we're just not sure for what.",
  stats: [
    { value: "Framed", label: "Around a specific business problem" },
    { value: "Validated", label: "Against held-out real data" },
    { value: "Deployed", label: "Into your actual workflow" },
  ],
  audience: ["Enterprises", "Startups Scaling ML", "Regulated Industries", "Data-Mature Teams"],
  problem: [
    "A lot of machine learning projects fail not because the model is bad, but because the problem was never clearly defined, or the model never made it past a notebook into an actual decision workflow. Machine learning only creates value when it changes what someone does next.",
    "We work backward from the decision you need to improve — customer churn, demand, fraud, maintenance timing — then select the model, features, and evaluation approach that fit that decision, not the other way around.",
  ],
  offerings: [
    "Problem framing and feasibility assessment",
    "Feature engineering from your existing data",
    "Model selection, training, and validation",
    "Interpretability analysis where explainability matters (regulated industries)",
    "Deployment support and monitoring for drift over time",
  ],
  tools: ["Python", "scikit-learn", "XGBoost", "TensorFlow", "PyTorch"],
  workflow: [
    { title: "Define the Decision", description: "We start with what decision or action the model needs to improve, not the algorithm." },
    { title: "Explore & Engineer", description: "Your data is explored and engineered into features that actually carry predictive signal." },
    { title: "Model & Validate", description: "Multiple approaches are tested and validated against held-out data, not just training accuracy." },
    { title: "Deploy & Monitor", description: "The model is integrated into your actual workflow with monitoring to catch performance drift." },
  ],
  whyUs: [
    "We frame the business problem before touching an algorithm",
    "Interpretability is prioritized where your industry or use case requires it",
    "Validation is rigorous — we don't report training accuracy as if it were real performance",
    "We build for deployment and monitoring, not just a one-off model in a notebook",
  ],
  faqs: [
    { q: "Do we need a data science team already in place?", a: "No — we can work as your ML function end-to-end, or alongside an existing team, depending on what you need." },
    { q: "How do you handle model explainability?", a: "For use cases in regulated industries or high-stakes decisions, we prioritize interpretable models or add explainability layers (e.g. SHAP) so decisions can be justified." },
    { q: "What happens if the model's performance degrades over time?", a: "We set up monitoring to detect drift and can establish a retraining cadence so performance doesn't silently decay." },
  ],
  metaDescription: "Machine learning consulting that starts from your business decision, not the algorithm — with rigorous validation and real deployment.",
  serviceType: "Machine Learning",
};

export const deepLearningSolutions = {
  slug: "deep-learning-solutions",
  name: "Deep Learning Solutions",
  nameHighlight: "Deep Learning",
  badge: "For Problems Simpler Models Can't Solve",
  heroSub: "Neural network solutions for image, text, and complex pattern recognition problems — built and validated for production use.",
  heroQuote: "We tried a simpler model, and it just doesn't perform well enough.",
  stats: [
    { value: "Purpose-Built", label: "Architecture per problem" },
    { value: "Benchmarked", label: "Against simpler baselines" },
    { value: "Production-Ready", label: "Not just a research notebook" },
  ],
  audience: ["Enterprises", "Product Teams", "Research-Backed Startups", "Manufacturing & Healthcare"],
  problem: [
    "Deep learning is genuinely necessary for some problems — image recognition, complex language understanding, certain forecasting tasks — and genuinely unnecessary overkill for others. The first job is figuring out which one you actually have.",
    "Where deep learning is the right tool, we build architectures matched to the problem (convolutional networks for images, transformer-based models for text, recurrent or temporal models for sequences), and we always benchmark against simpler models to confirm the added complexity is earning its keep.",
  ],
  offerings: [
    "Problem and data suitability assessment for deep learning",
    "Custom architecture design and training",
    "Benchmarking against simpler baseline models",
    "Model optimization for inference speed and cost",
    "Production deployment and performance monitoring",
  ],
  tools: ["PyTorch", "TensorFlow", "Hugging Face", "ONNX"],
  workflow: [
    { title: "Assess Fit", description: "We confirm deep learning is actually the right approach before committing to it, benchmarking against simpler models." },
    { title: "Design Architecture", description: "The network architecture is chosen and tuned specifically for your data and problem type." },
    { title: "Train & Validate", description: "Models are trained with proper validation splits and evaluated against real-world performance requirements." },
    { title: "Deploy & Optimize", description: "Models are optimized for inference cost and speed, then deployed into your production environment." },
  ],
  whyUs: [
    "We won't recommend deep learning where a simpler model performs just as well",
    "Every model is benchmarked against a baseline so you know the complexity is justified",
    "Built for production deployment, not just a research demonstration",
    "Ongoing monitoring to catch performance degradation after deployment",
  ],
  faqs: [
    { q: "How do we know if we actually need deep learning?", a: "We assess this directly — if a simpler, cheaper model performs comparably, we'll tell you and build that instead." },
    { q: "What kind of data volume do we need?", a: "It depends on the problem, but deep learning generally benefits from larger datasets. We'll assess your data volume early and flag if it's a limiting factor." },
    { q: "Can these models run in real time?", a: "Yes, depending on the use case — we optimize models specifically for inference speed where real-time performance matters." },
  ],
  metaDescription: "Deep learning solutions for image, text, and complex pattern recognition problems, benchmarked against simpler models and built for production.",
  serviceType: "Machine Learning",
};

export const generativeAIConsulting = {
  slug: "generative-ai-consulting",
  name: "Generative AI Consulting",
  nameHighlight: "Generative AI",
  badge: "Practical Use Cases, Not Hype",
  heroSub: "Generative AI applied to genuine business problems — content generation, summarization, and internal tooling — grounded in your actual data.",
  heroQuote: "Everyone says we need generative AI, but for what, exactly?",
  stats: [
    { value: "Scoped", label: "To specific, measurable use cases" },
    { value: "Grounded", label: "In your own data, not just a raw model" },
    { value: "Evaluated", label: "Against real accuracy benchmarks" },
  ],
  audience: ["Enterprises", "Product Teams", "Content-Heavy Businesses", "Customer Support Teams"],
  problem: [
    "Generative AI gets pitched as a solution to everything, which usually means it gets applied to nothing useful. The genuine value is narrower and more specific: automating a particular writing task, summarizing internal knowledge, or answering questions grounded in your own documents rather than the open internet.",
    "We start by identifying whether generative AI is actually the right tool for your specific use case, then build it grounded in your real data (via retrieval-augmented approaches where relevant) and evaluated against concrete accuracy and usefulness benchmarks, not vibes.",
  ],
  offerings: [
    "Use case identification and feasibility assessment",
    "Retrieval-augmented generation grounded in your own documents/data",
    "Prompt engineering and evaluation frameworks",
    "Integration into existing tools and workflows",
    "Accuracy and hallucination monitoring post-deployment",
  ],
  tools: ["OpenAI API", "LangChain", "Vector databases", "Python"],
  workflow: [
    { title: "Identify the Use Case", description: "We assess whether generative AI genuinely fits your problem, and scope a specific, measurable use case." },
    { title: "Ground in Your Data", description: "Where relevant, we build retrieval systems so outputs are grounded in your actual documents, not generic web knowledge." },
    { title: "Build & Evaluate", description: "The system is built and tested against concrete accuracy and usefulness benchmarks, not subjective impressions." },
    { title: "Deploy & Monitor", description: "We integrate the tool into your workflow and monitor for hallucination or accuracy drift over time." },
  ],
  whyUs: [
    "We'll tell you honestly if generative AI isn't the right fit for your use case",
    "Outputs are grounded in your own data wherever accuracy matters",
    "Evaluation is concrete and measurable, not just 'it feels good'",
    "We monitor for hallucination and drift after deployment, not just at launch",
  ],
  faqs: [
    { q: "How do you prevent the system from making things up?", a: "Where factual accuracy matters, we ground responses in retrieval from your actual documents rather than relying on the model's general knowledge, and we monitor outputs for hallucination." },
    { q: "Can this work with our existing customer support or internal tools?", a: "Yes — most of our generative AI work integrates directly into existing workflows and tools rather than being a standalone product." },
    { q: "How do you measure whether it's actually working?", a: "We define specific, measurable success criteria upfront (accuracy, resolution rate, time saved) and evaluate against them, not general impressions." },
  ],
  metaDescription: "Generative AI consulting focused on specific, measurable use cases, grounded in your own data and evaluated against real accuracy benchmarks.",
  serviceType: "Artificial Intelligence",
};

export const llmDevelopment = {
  slug: "llm-development",
  name: "LLM Development",
  nameHighlight: "LLM",
  badge: "Language Models Built for Your Domain",
  heroSub: "Custom large language model applications — fine-tuned, retrieval-grounded, and evaluated for your specific domain and use case.",
  heroQuote: "The off-the-shelf chatbot doesn't understand our industry's terminology.",
  stats: [
    { value: "Domain-Tuned", label: "Not generic off-the-shelf" },
    { value: "Grounded", label: "In your documents and data" },
    { value: "Tested", label: "Against domain-specific accuracy benchmarks" },
  ],
  audience: ["Enterprises", "Specialized Industries", "Product Teams", "Internal Tooling Teams"],
  problem: [
    "General-purpose language models are trained on the open internet, which means they're often shaky on your industry's specific terminology, internal processes, or proprietary knowledge. Getting real value out of an LLM usually requires adapting it to your domain, not just prompting a generic model harder.",
    "We build LLM applications tailored to your specific domain — through retrieval grounding in your documents, fine-tuning where appropriate, and structured evaluation against your actual use cases — rather than shipping a thin wrapper around a generic model.",
  ],
  offerings: [
    "Domain-specific retrieval-augmented generation (RAG) systems",
    "Fine-tuning for specialized terminology and tasks where appropriate",
    "Evaluation frameworks for accuracy and domain relevance",
    "Integration with internal knowledge bases and tools",
    "Ongoing monitoring for accuracy and cost management",
  ],
  tools: ["OpenAI API", "Anthropic API", "LangChain", "Vector databases", "Python"],
  workflow: [
    { title: "Assess Domain Needs", description: "We identify where a general model falls short for your specific terminology, processes, or knowledge." },
    { title: "Ground & Adapt", description: "The model is grounded in your documents via retrieval, and fine-tuned where that genuinely adds value over retrieval alone." },
    { title: "Evaluate Rigorously", description: "Performance is tested against domain-specific accuracy benchmarks, not generic language model leaderboards." },
    { title: "Deploy & Monitor", description: "The application is integrated into your tools, with ongoing monitoring for accuracy and cost." },
  ],
  whyUs: [
    "We ground models in your actual domain knowledge, not a generic wrapper",
    "Fine-tuning is used only where it genuinely outperforms retrieval-based grounding",
    "Evaluation is specific to your domain's terminology and tasks",
    "We monitor ongoing cost and accuracy, not just launch-day performance",
  ],
  faqs: [
    { q: "Do we need to fine-tune a model, or is retrieval enough?", a: "Retrieval-augmented generation is often sufficient and cheaper than fine-tuning. We assess which approach — or combination — fits your specific need before building." },
    { q: "How do you handle sensitive or proprietary data?", a: "We design systems with your data governance requirements in mind, including options for on-premises or private cloud deployment where needed." },
    { q: "How do you measure whether the model understands our domain?", a: "We build evaluation sets specific to your domain's actual terminology and use cases, rather than relying on generic benchmarks." },
  ],
  metaDescription: "LLM development tailored to your domain — retrieval-grounded, evaluated against real accuracy benchmarks, not a generic model wrapper.",
  serviceType: "Artificial Intelligence",
};

export const naturalLanguageProcessing = {
  slug: "natural-language-processing",
  name: "Natural Language Processing",
  nameHighlight: "Language Processing",
  badge: "Turn Unstructured Text Into Structured Insight",
  heroSub: "Extract structure and meaning from text data — documents, reviews, support tickets, transcripts — at a scale manual review can't match.",
  heroQuote: "We have thousands of customer comments and no time to read them.",
  stats: [
    { value: "Scaled", label: "Beyond what manual review can cover" },
    { value: "Structured", label: "Output from unstructured text" },
    { value: "Validated", label: "Against human-labeled samples" },
  ],
  audience: ["Customer Experience Teams", "Research Teams", "Legal & Compliance", "Product Teams"],
  problem: [
    "Text data — reviews, support tickets, survey responses, legal documents, transcripts — often contains the most valuable insight in a business, and is also the hardest to analyze at scale. Reading it manually doesn't scale past a few hundred records.",
    "We build NLP systems that extract structure from this text — sentiment, categories, entities, key themes — validated against human-labeled samples so you can trust the output isn't just plausible-sounding noise.",
  ],
  offerings: [
    "Sentiment and emotion classification",
    "Entity extraction and categorization",
    "Topic modeling and theme identification",
    "Document classification and routing",
    "Validation against human-labeled ground truth",
  ],
  tools: ["Python", "spaCy", "Hugging Face Transformers", "scikit-learn"],
  workflow: [
    { title: "Define What to Extract", description: "We clarify exactly what structure or insight you need from the text — sentiment, categories, entities, themes." },
    { title: "Build & Train", description: "Models are built and trained (or fine-tuned) on samples representative of your actual text data." },
    { title: "Validate Against Humans", description: "Output is checked against a human-labeled sample to quantify real accuracy, not assumed accuracy." },
    { title: "Deploy at Scale", description: "The validated system processes your full text volume, with monitoring for accuracy drift over time." },
  ],
  whyUs: [
    "We validate against human-labeled ground truth, not just plausible-looking output",
    "Systems are built for your specific text domain, not a generic sentiment model",
    "Output is structured and usable directly in dashboards and reports",
    "We flag where confidence is low rather than presenting everything as certain",
  ],
  faqs: [
    { q: "How accurate is this compared to a human reading everything?", a: "We measure this directly by validating against a human-labeled sample, so you know the real accuracy rate rather than assuming it works." },
    { q: "Can this handle industry-specific or technical language?", a: "Yes — models are trained or adapted on your actual text data, so they learn your domain's specific terminology rather than relying on generic language patterns." },
    { q: "What do we do with low-confidence results?", a: "We build systems to flag low-confidence classifications for human review rather than forcing a guess, so you can trust the high-confidence output." },
  ],
  metaDescription: "Natural language processing that extracts structured insight from text at scale, validated against human-labeled accuracy benchmarks.",
  serviceType: "Artificial Intelligence",
};

export const computerVisionSolutions = {
  slug: "computer-vision-solutions",
  name: "Computer Vision Solutions",
  nameHighlight: "Computer Vision",
  badge: "Automated Visual Inspection & Analysis",
  heroSub: "Image and video analysis for quality inspection, object detection, and automated visual workflows — built for production accuracy.",
  heroQuote: "Someone still manually inspects every unit that comes off the line.",
  stats: [
    { value: "Automated", label: "Visual inspection at scale" },
    { value: "Benchmarked", label: "Against manual inspection accuracy" },
    { value: "Integrated", label: "Into existing production workflows" },
  ],
  audience: ["Manufacturing", "Quality Assurance Teams", "Security & Monitoring", "Retail Operations"],
  problem: [
    "Visual inspection — checking products for defects, monitoring security footage, counting inventory, reading documents — is time-consuming, inconsistent between inspectors, and doesn't scale with volume. It's also exactly the kind of pattern-recognition task computer vision is well suited for.",
    "We build vision systems trained on your actual images (not stock datasets), benchmarked against your current manual inspection accuracy, and integrated directly into your production line or workflow rather than left as a standalone demo.",
  ],
  offerings: [
    "Defect and anomaly detection for quality inspection",
    "Object detection and counting",
    "Document and form data extraction",
    "Integration with cameras and production line systems",
    "Ongoing accuracy monitoring and retraining",
  ],
  tools: ["PyTorch", "TensorFlow", "OpenCV", "YOLO"],
  workflow: [
    { title: "Collect & Label Data", description: "We work with your actual images — not generic stock datasets — labeling examples representative of real conditions." },
    { title: "Train & Benchmark", description: "Models are trained and benchmarked directly against your current manual inspection accuracy." },
    { title: "Integrate", description: "The system is connected to your cameras and production workflow, not left as a standalone tool." },
    { title: "Monitor & Retrain", description: "Performance is monitored over time, with retraining scheduled as conditions or products change." },
  ],
  whyUs: [
    "Trained on your actual production images, not generic stock photo datasets",
    "Benchmarked directly against your current manual inspection accuracy",
    "Built for integration into your existing line, not a standalone demo",
    "Ongoing monitoring catches accuracy drift as products or conditions change",
  ],
  faqs: [
    { q: "How much labeled data do we need to get started?", a: "It varies by task, but we can often start with a modest labeled sample and expand as the system is refined — we'll scope this specifically for your case." },
    { q: "Can this integrate with our existing cameras and line equipment?", a: "In most cases yes — we design for integration with your actual hardware rather than requiring a full equipment replacement." },
    { q: "What happens when our product changes?", a: "We build in a retraining process so the system adapts to new product variants rather than silently degrading in accuracy." },
  ],
  metaDescription: "Computer vision solutions for defect detection, quality inspection, and visual analysis, trained on your data and benchmarked against manual accuracy.",
  serviceType: "Artificial Intelligence",
};

export const recommendationSystems = {
  slug: "recommendation-systems",
  name: "Recommendation Systems",
  nameHighlight: "Recommendation",
  badge: "Personalized, Not Generic",
  heroSub: "Recommendation models built on your actual customer behavior — not a generic 'customers also bought' rule.",
  heroQuote: "Our recommendations are the same for every customer.",
  stats: [
    { value: "Personalized", label: "Per customer, not per product" },
    { value: "Measured", label: "By actual conversion lift" },
    { value: "Continuously", label: "Retrained on real behavior" },
  ],
  audience: ["E-Commerce", "Retail", "Media & Content Platforms", "SaaS Products"],
  problem: [
    "Generic recommendation rules — 'customers who bought X also bought Y' — ignore what actually makes each customer's purchase history different, leaving real revenue on the table from cross-sell and up-sell opportunities that are specific to that individual customer.",
    "We build recommendation models trained on your actual transaction and behavior data, evaluated by measurable conversion lift rather than assumed relevance, and retrained continuously as customer behavior evolves.",
  ],
  offerings: [
    "Personalized product/content recommendation models",
    "Cross-sell and up-sell opportunity identification",
    "A/B testing framework for measuring actual lift",
    "Integration with your e-commerce or content platform",
    "Continuous retraining as behavior data accumulates",
  ],
  tools: ["Python", "TensorFlow Recommenders", "Collaborative filtering", "SQL"],
  workflow: [
    { title: "Analyze Behavior Data", description: "We start from your actual transaction and browsing history, not assumptions about customer preferences." },
    { title: "Build & Test Models", description: "Multiple recommendation approaches are tested against held-out data before deployment." },
    { title: "A/B Test in Production", description: "Recommendations are measured against a control group to quantify real conversion lift." },
    { title: "Retrain Continuously", description: "Models are retrained on an ongoing basis as new behavior data accumulates." },
  ],
  whyUs: [
    "Recommendations are personalized per customer, not a static product-pairing rule",
    "We measure actual conversion lift through A/B testing, not assumed relevance",
    "Models are retrained continuously, so they don't go stale as behavior shifts",
    "Built for integration into your actual platform, not a standalone demo",
  ],
  faqs: [
    { q: "How do you measure whether recommendations are actually working?", a: "We run A/B tests comparing the model against your current approach (or no recommendations), measuring actual conversion and revenue lift." },
    { q: "Do we need a large amount of transaction history to get started?", a: "It helps, but we can work with more modest data volumes using techniques suited to sparse data, and improve as more behavior data accumulates." },
    { q: "How often do the models need retraining?", a: "This depends on how quickly your customer behavior and catalog change — we set a retraining cadence appropriate to your business." },
  ],
  metaDescription: "Recommendation systems built on your actual customer behavior data, measured by real conversion lift through A/B testing.",
  serviceType: "Artificial Intelligence",
};

export const predictiveAnalytics = {
  slug: "predictive-analytics",
  name: "Predictive Analytics",
  nameHighlight: "Predictive",
  badge: "Forecasts Built Into Your Workflow",
  heroSub: "Predictive models for churn, demand, risk, and failure — built to trigger action, not just sit in a report.",
  heroQuote: "We got a prediction, but nobody knew what to do with it.",
  stats: [
    { value: "Actionable", label: "Predictions tied to specific actions" },
    { value: "Validated", label: "Against real historical outcomes" },
    { value: "Monitored", label: "For accuracy drift over time" },
  ],
  audience: ["Enterprises", "Operations Teams", "Customer Success Teams", "Manufacturing"],
  problem: [
    "A prediction that doesn't change what anyone does isn't useful, no matter how accurate it is. Predictive analytics only creates value when it's tied directly to a specific action — flagging a customer for retention outreach, scheduling maintenance before a failure, adjusting inventory before a demand spike.",
    "We build predictive models around the decision they need to inform, integrate them directly into the workflow where that decision gets made, and validate them rigorously against real historical outcomes rather than reporting inflated training accuracy.",
  ],
  offerings: [
    "Predictive model design for churn, demand, risk, or failure",
    "Feature engineering from your existing operational data",
    "Rigorous validation against held-out historical data",
    "Integration into the workflow where the prediction triggers action",
    "Ongoing monitoring for prediction accuracy drift",
  ],
  tools: ["Python", "scikit-learn", "XGBoost", "SQL"],
  workflow: [
    { title: "Define the Action", description: "We start with what decision or intervention the prediction needs to trigger, not just the forecast itself." },
    { title: "Build the Model", description: "Features are engineered from your operational data and the model is trained and tuned for your specific outcome." },
    { title: "Validate Rigorously", description: "Performance is tested against held-out historical data to confirm real predictive accuracy, not just training fit." },
    { title: "Integrate & Monitor", description: "Predictions are delivered directly into the workflow where action happens, with ongoing accuracy monitoring." },
  ],
  whyUs: [
    "Models are built around a specific action, not a standalone report nobody uses",
    "Validation uses held-out historical data, not inflated training accuracy",
    "Predictions are delivered where the decision actually happens",
    "We monitor for drift so accuracy doesn't silently degrade after launch",
  ],
  faqs: [
    { q: "What kind of outcomes can you predict?", a: "Common examples include customer churn, demand spikes, equipment failure, and credit or fraud risk — but the approach applies to any outcome with enough historical data." },
    { q: "How do you make sure the prediction actually gets used?", a: "We design the delivery mechanism (alert, dashboard, workflow trigger) around how your team actually works, not as a separate report to check manually." },
    { q: "How is this different from a simple trend analysis?", a: "Predictive models account for multiple interacting factors simultaneously and are validated for accuracy, rather than extrapolating a single historical trend." },
  ],
  metaDescription: "Predictive analytics for churn, demand, and risk — built around a specific action, validated against real outcomes, and monitored for drift.",
  serviceType: "Machine Learning",
};

export const predictiveMaintenance = {
  slug: "predictive-maintenance",
  name: "Predictive Maintenance",
  nameHighlight: "Maintenance",
  badge: "Zero Unplanned Downtime",
  heroSub: "Equipment failure prediction from your sensor and maintenance history data — with enough lead time to actually act.",
  heroQuote: "The machine went down mid-shift with zero warning.",
  stats: [
    { value: "1M+", label: "Sensor readings analyzed to date" },
    { value: "Weeks", label: "Of lead time before predicted failure" },
    { value: "Ranked", label: "Assets by remaining useful life" },
  ],
  audience: ["Manufacturing", "Fleet Operators", "Facilities Management", "Utilities"],
  problem: [
    "Unplanned equipment downtime is one of the most expensive failure modes in operations — not just the repair itself, but the missed production, rush parts, and schedule disruption that ripples outward from it.",
    "We build models from your sensor and maintenance history data that flag likely failures with real lead time, and we turn those flags into concrete maintenance plans rather than vague 'schedule an inspection' notices.",
  ],
  offerings: [
    "Equipment health modeling from sensor and maintenance data",
    "Failure prediction with actionable lead time",
    "Remaining useful life estimation per asset",
    "Maintenance plan recommendations, not just alerts",
    "Asset investment prioritization based on failure risk",
  ],
  tools: ["Python", "Time-series analysis", "scikit-learn", "SQL"],
  workflow: [
    { title: "Ingest Sensor Data", description: "We work with your existing sensor and maintenance history data — no need for entirely new instrumentation in most cases." },
    { title: "Model Failure Patterns", description: "Models learn the signatures that precede real historical failures in your specific equipment." },
    { title: "Validate Lead Time", description: "We confirm predictions provide genuinely actionable lead time, not last-minute warnings." },
    { title: "Deliver Maintenance Plans", description: "Alerts come with specific recommended actions, not just a flag to investigate." },
  ],
  whyUs: [
    "Alerts come with concrete recommended actions, not vague warnings",
    "Models are validated for real lead time, not just retrospective pattern-matching",
    "Built from your existing sensor data wherever possible",
    "Asset prioritization helps direct capital investment, not just maintenance scheduling",
  ],
  faqs: [
    { q: "Do we need new sensors installed, or can you use what we have?", a: "We start with your existing sensor and maintenance data wherever possible, and only recommend new instrumentation if it's genuinely necessary for accurate prediction." },
    { q: "How much lead time do predictions typically provide?", a: "This varies by equipment and failure mode, but we validate and report actual lead time for your specific assets rather than a generic promise." },
    { q: "Can this integrate with our existing CMMS?", a: "Yes, we can integrate predictions and recommended actions directly into your computerized maintenance management system." },
  ],
  metaDescription: "Predictive maintenance models built from your sensor and maintenance history data, delivering real lead time before equipment failure.",
  serviceType: "Manufacturing Analytics",
};

export const mlOpsConsulting = {
  slug: "mlops-consulting",
  name: "MLOps Consulting",
  nameHighlight: "MLOps",
  badge: "Models That Stay Reliable in Production",
  heroSub: "Deployment, monitoring, and retraining infrastructure so your models keep performing after launch day.",
  heroQuote: "The model worked great in the notebook, then things fell apart in production.",
  stats: [
    { value: "Monitored", label: "For drift, not just deployed and forgotten" },
    { value: "Automated", label: "Retraining pipelines" },
    { value: "Versioned", label: "Models and data, for reproducibility" },
  ],
  audience: ["Data Science Teams", "Enterprises Scaling ML", "Engineering Teams", "Startups"],
  problem: [
    "A model that performs well in a notebook and one that performs reliably in production are two different engineering problems. Without proper MLOps infrastructure, models silently degrade as data drifts, deployments become fragile one-off scripts, and nobody notices performance dropping until it's a real business problem.",
    "We build the operational infrastructure around your models — versioning, automated retraining, monitoring, and rollback — so machine learning in production is treated with the same engineering discipline as any other critical system.",
  ],
  offerings: [
    "Model deployment pipeline design",
    "Data and model versioning for reproducibility",
    "Automated retraining pipelines",
    "Drift detection and performance monitoring",
    "Rollback and incident response planning",
  ],
  tools: ["MLflow", "Docker", "Kubernetes", "Python", "CI/CD tools"],
  workflow: [
    { title: "Assess Current State", description: "We review your existing model deployment process and identify the operational gaps." },
    { title: "Build the Pipeline", description: "Deployment, versioning, and monitoring infrastructure is built around your specific model and team workflow." },
    { title: "Automate Retraining", description: "Retraining pipelines are set up to trigger on schedule or when drift is detected." },
    { title: "Monitor & Respond", description: "Ongoing monitoring flags performance issues, with a clear rollback plan if a deployment goes wrong." },
  ],
  whyUs: [
    "We treat production ML with the same rigor as any other critical infrastructure",
    "Drift detection catches degrading performance before it becomes a business problem",
    "Retraining is automated, not a manual task someone forgets to do",
    "Every deployment has a tested rollback plan",
  ],
  faqs: [
    { q: "We already have models in production — can you improve the existing setup instead of starting over?", a: "Yes, a lot of our MLOps work is auditing and hardening an existing (often fragile) deployment process, not building from scratch." },
    { q: "How do you detect when a model needs retraining?", a: "We set up monitoring for data and prediction drift, so retraining is triggered by measurable degradation rather than a fixed guess at a schedule." },
    { q: "Does this require a specific cloud platform?", a: "No — we build MLOps infrastructure that fits your existing infrastructure, whether that's a specific cloud provider or on-premises." },
  ],
  metaDescription: "MLOps consulting for model deployment, versioning, drift monitoring, and automated retraining — so ML performs reliably in production, not just in a notebook.",
  serviceType: "Machine Learning",
};

export const chatbotDevelopment = {
  slug: "chatbot-development",
  name: "Chatbot Development",
  nameHighlight: "Chatbot",
  badge: "Grounded in Your Actual Knowledge Base",
  heroSub: "Conversational tools that answer accurately from your own documentation and data — not a generic FAQ bot.",
  heroQuote: "Our chatbot gives confidently wrong answers about our own products.",
  stats: [
    { value: "Grounded", label: "In your actual documentation" },
    { value: "Measured", label: "Resolution rate, not just usage" },
    { value: "Escalates", label: "To a human when confidence is low" },
  ],
  audience: ["Customer Support Teams", "Internal Tools Teams", "SaaS Companies", "E-Commerce"],
  problem: [
    "Generic chatbots frequently give confident, plausible-sounding, and wrong answers because they're not actually grounded in your specific product, policies, or knowledge base. That erodes trust faster than having no chatbot at all.",
    "We build chatbots grounded directly in your documentation and data, designed to escalate to a human when confidence is genuinely low rather than guessing, and measured by resolution rate and accuracy rather than just conversation volume.",
  ],
  offerings: [
    "Conversation design mapped to your actual support use cases",
    "Retrieval grounding in your documentation and knowledge base",
    "Escalation logic for low-confidence situations",
    "Integration with your existing support and CRM tools",
    "Ongoing accuracy monitoring and conversation analytics",
  ],
  tools: ["LangChain", "OpenAI/Anthropic APIs", "Vector databases", "Python"],
  workflow: [
    { title: "Map Use Cases", description: "We identify the specific questions and tasks the chatbot needs to handle, based on your real support volume." },
    { title: "Ground in Your Data", description: "The chatbot is connected to your actual documentation and knowledge base, not general internet knowledge." },
    { title: "Build Escalation Logic", description: "Clear rules determine when the bot hands off to a human rather than guessing at an answer." },
    { title: "Deploy & Measure", description: "The chatbot is integrated into your support tools, tracked for resolution rate and accuracy over time." },
  ],
  whyUs: [
    "Answers are grounded in your actual documentation, not generic web knowledge",
    "Clear escalation to a human when confidence is genuinely low",
    "Measured by resolution rate and accuracy, not just conversation count",
    "Integrates with your existing support and CRM systems",
  ],
  faqs: [
    { q: "How do you prevent the bot from making up answers?", a: "The bot retrieves and grounds its answers in your actual documentation, and is designed to escalate rather than guess when the answer isn't clearly supported." },
    { q: "Can this integrate with our existing help desk software?", a: "Yes, we build for integration with your existing support and CRM tools rather than a standalone system." },
    { q: "How do we measure if the chatbot is actually helping?", a: "We track resolution rate, escalation rate, and accuracy against a validation set, not just raw conversation volume." },
  ],
  metaDescription: "Chatbot development grounded in your actual documentation, with clear escalation to humans and measured resolution rate, not just usage volume.",
  serviceType: "Artificial Intelligence",
};
