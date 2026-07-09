// src/pages/Home/HomePage.jsx
// Final version with fixed reCAPTCHA, visible "Why Choose Us" heading,
// always-visible stats numbers, and full-length blog content

import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  AnimatePresence, motion, useInView, useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight, Award, BarChart3, BookOpen, Brain, CheckCircle,
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Clock,
  Cloud, Code, Database, Globe, Heart, Lock, Phone, Shield,
  Sparkles, Star, Target, TrendingUp, Users, Zap, X, Mail,
  Linkedin, Twitter, Youtube, Facebook, Eye, Activity,
  Terminal, BarChart2, Cpu, Layers, GitBranch,
  Server, Search,
  Filter, Bell, Settings, HelpCircle,
  MessageSquare, ThumbsUp,
  Calendar, Hash, Percent, DollarSign,
  AlertCircle, Info, CheckSquare, ArrowUpRight,
  Loader2,
} from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../Home/HomePage.module.css";
import { submitLead } from "../../services/api";
import SEO from "../../components/SEO/SEO";

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════ */

const SLIDES = [
  {
    headline: "Turn Data Into",
    headline2: "Revenue & Growth",
    sub: "Stop guessing. Start knowing. We help you make smarter business decisions, reduce costs, and unlock new revenue streams with data you already have.",
    accent: "#fdb840",
    imgLaptop: "/Images/site-images/home-bnr-lap-img.png",
    imgTab: "/Images/site-images/home-bnr-tab-img.png",
    imgMobile: "/Images/site-images/home-bnr-mob-img.png",
    stat: { val: "98%", label: "Accuracy" },
    tag: "SMARTER DECISIONS",
  },
  {
    headline: "Real-Time",
    headline2: "Business Intelligence",
    sub: "Make faster, smarter decisions with real-time analytics. Spot trends instantly, respond to market shifts, and stay ahead of competitors.",
    accent: "#fdb840",
    imgLaptop: "/Images/site-images/vetvine_1.webp",
    imgTab: "/Images/site-images/vetvine_2.webp",
    imgMobile: "/Images/site-images/vetvine_3.webp",
    stat: { val: "99.9%", label: "Uptime" },
    tag: "REAL-TIME INSIGHTS",
  },
  {
    headline: "Scale Your",
    headline2: "Business With Confidence",
    sub: "Build a data foundation that grows with you. Handle growth seamlessly with enterprise-grade solutions that protect your business and your customers.",
    accent: "#fdb840",
    imgLaptop: "/Images/site-images/mb-lap.webp",
    imgTab: "/Images/site-images/home-bnr-tab-img.png",
    imgMobile: "/Images/site-images/mb-mob.webp",
    stat: { val: "3,500+", label: "Projects Delivered" },
    tag: "SCALABLE GROWTH",
  },
];

const SERVICES = [
  { slug:"ai-ml",      icon:<Brain size={28}/>,      color:"#fdb840", title:"Smarter Business Decisions",      desc:"Predict customer behavior, reduce churn, and automate operations with AI that actually delivers ROI.",                  detail:"We build AI that solves real business problems — not just proof-of-concepts.",             tags:["TensorFlow","PyTorch","Hugging Face"], longDesc:`Stop relying on gut feelings. Our AI helps you predict customer churn before it happens, automate repetitive tasks to cut costs, and detect issues before they impact your bottom line. We train models on YOUR data to solve YOUR specific business problems.` },
  { slug:"big-data",   icon:<Database size={28}/>,   color:"#00d4ff", title:"Data Infrastructure That Works",         desc:"Build a reliable, scalable data foundation that handles growth without breaking — so you can focus on running your business.",                       detail:"Modern infrastructure designed for performance and cost-efficiency at any scale.",                   tags:["Spark","Kafka","Airflow"],             longDesc:`Your business generates massive amounts of data. We build the infrastructure to handle it — so you get reliable insights when you need them, without expensive downtime or bottlenecks.` },
  { slug:"bi",         icon:<BarChart3 size={28}/>,  color:"#a259ff", title:"Business Intelligence That Drives Action",        desc:"Turn messy data into clear dashboards that help your entire team make better, faster decisions.",                            detail:"Self-service analytics that reveal hidden opportunities and risks.",                  tags:["Tableau","Power BI","Looker"],         longDesc:`Data is worthless if people can't understand it. We build intuitive dashboards that help your sales, marketing, and operations teams see exactly what's happening — so they can act quickly and confidently.` },
  { slug:"governance", icon:<Shield size={28}/>,     color:"#00e676", title:"Data Security & Compliance",   desc:"Protect your business and build customer trust with enterprise-grade security and regulatory compliance.",                             detail:"Peace of mind that your data — and your customers — are protected.",                    tags:["Collibra","Ranger","OneTrust"],        longDesc:`Data breaches cost millions and destroy trust. We ensure your business is protected with enterprise-grade security, GDPR compliance, and HIPAA readiness — so you can focus on growth, not fines.` },
  { slug:"predictive", icon:<TrendingUp size={28}/>, color:"#ff6b6b", title:"See The Future Of Your Business",         desc:"Forecast sales, anticipate demand, and manage risk with 96% accuracy — so you can plan with confidence.",                      detail:"Make proactive decisions that protect your bottom line.",                      tags:["Prophet","XGBoost","LightGBM"],        longDesc:`Stop reacting to the market — start anticipating it. We help you forecast sales, demand, and risk with uncanny accuracy. The result: you make smarter decisions, faster.` },
  { slug:"realtime",   icon:<Zap size={28}/>,        color:"#fdb840", title:"Real-Time Business Insights",          desc:"See what's happening in your business right now. Detect problems instantly, spot opportunities immediately, and respond in real-time.",                            detail:"Build responsive operations that react to events as they happen.",                tags:["Flink","Kinesis","Redis"],             longDesc:`In today's fast-paced world, waiting for reports means losing opportunities. We give you real-time visibility into your business — so you can detect fraud, spot trends, and respond instantly.` },
  { slug:"cloud",      icon:<Cloud size={28}/>,      color:"#00d4ff", title:"Cost-Effective Cloud Solutions",              desc:"Scale your infrastructure automatically while reducing costs — on AWS, Azure, or GCP. Only pay for what you use.",                    detail:"Elastic infrastructure that grows with your business.",                     tags:["AWS","Azure","GCP","Snowflake"],       longDesc:`Stop overpaying for infrastructure you don't need. We design cloud solutions that automatically scale with your business — so you only pay for what you use, when you use it.` },
  { slug:"customer",   icon:<Target size={28}/>,     color:"#a259ff", title:"Understand Your Customers Better",           desc:"Build a complete, 360-degree view of your customers to boost retention, increase lifetime value, and personalize experiences.",                             detail:"Turn customer data into loyalty and growth.",                        tags:["Segment","Mixpanel","Amplitude"],      longDesc:`Your customers leave data everywhere. We unify that data — from sales, support, and marketing — into one complete view. The result: deeper customer understanding, higher retention, and experiences that drive loyalty.` },
  { slug:"custom-dev", icon:<Code size={28}/>,       color:"#00e676", title:"Custom Business Tools",           desc:"Build tools that perfectly fit your business workflows — so you work smarter, not harder.",                       detail:"Solutions tailored to your specific business challenges.",                     tags:["Python","React","Node.js"],            longDesc:`Generic software doesn't fit your unique business. We build custom applications and tools that solve YOUR specific problems — so you work smarter, not harder.` },
  { slug:"privacy",    icon:<Lock size={28}/>,       color:"#ff6b6b", title:"Customer Privacy & Trust",       desc:"Protect your customers' data and build trust with robust privacy controls and consent management.",                  detail:"Build trust through responsible data practices.",                         tags:["Privacy Tools","Encryption"],         longDesc:`Data privacy is a competitive advantage. We help you implement robust privacy controls that protect your customers and build trust — while keeping you compliant with regulations.` },
  { slug:"strategy",   icon:<Globe size={28}/>,      color:"#fdb840", title:"Data Strategy & Roadmap",          desc:"Expert guidance to transform your data from a cost center to a growth engine — starting with a clear, actionable roadmap.",              detail:"A clear path from where you are to where you want to be.",                        tags:["Frameworks","Roadmapping"],           longDesc:`Most data initiatives fail. We help you avoid that. We assess where you are, identify opportunities, and build a roadmap that delivers quick wins while building toward long-term growth.` },
  { slug:"training",   icon:<BookOpen size={28}/>,   color:"#00d4ff", title:"Team Upskilling & Workshops",        desc:"Build your team's data skills with hands-on workshops tailored to your business and industry.",                  detail:"Create a genuine data-driven culture in your organization.",                               tags:["Python","R","SQL","ML"],              longDesc:`Technology without skilled people is wasted investment. We train your team — from basic data literacy to advanced analytics — using YOUR real business data and use cases.` },
];

const BLOG_POSTS = [
  {
    title: "How AI Can Grow Your Business",
    excerpt: "Most companies are sitting on AI use cases they haven't identified yet, things like demand forecasting, churn prediction, and automated quality checks that pay for themselves within a quarter. We walk through the three areas where AI tends to deliver the fastest return, and how to tell if your data is actually ready for it.",
    date: "June 15, 2026",
    slug: "future-of-ai-analytics",
    category: "AI",
    readTime: "5 min",
    color: "#fdb840",
    content: `Most companies don't lack data, they lack a clear view of which AI use case will actually move the needle for their specific business. We've found that the fastest wins tend to cluster around three areas: predicting which customers are about to churn so you can intervene before they leave, forecasting demand closely enough to cut excess inventory without risking stockouts, and automating the repetitive review work that eats up your team's time without adding real value. In each case, the businesses that succeed start small. They pick one well defined problem, use the data they already have, and measure results in weeks rather than waiting for a sweeping transformation. The companies that struggle tend to do the opposite: they try to overhaul everything at once before proving the model works on a narrow case. If you're evaluating where to start, look first at whichever process currently relies on someone's gut feeling and a spreadsheet. That's usually where AI earns its keep fastest.`,
  },
  {
    title: "Data Security Without The Headache",
    excerpt: "Compliance doesn't have to mean hiring a dedicated security team or grinding your roadmap to a halt. We break down a practical, staged approach to GDPR, HIPAA, and SOC 2 readiness that most growing companies can implement in a few months, starting with the controls that matter most.",
    date: "June 5, 2026",
    slug: "data-governance-strategies",
    category: "Governance",
    readTime: "7 min",
    color: "#00d4ff",
    content: `Security and compliance work tends to get postponed because it feels like an enormous, vague project with no clear starting point. In practice, it breaks down into a manageable sequence. Start by mapping where sensitive data actually lives across your systems, since most teams are surprised by how scattered it is. From there, prioritize access controls: limiting who can see what is usually the single highest impact change you can make, and it's also the one auditors check first. Encryption at rest and in transit should come next, followed by a logging setup that lets you answer "who accessed this and when" without digging through raw server logs. Finally, build a lightweight incident response plan before you need one, not after. None of this requires a large dedicated team. With the right tooling and a clear sequence, a small group can get a mid sized company to GDPR and SOC 2 readiness within a few months, and HIPAA readiness shortly after if health data is involved. The key is treating it as a series of concrete, scoped steps rather than one intimidating initiative.`,
  },
  {
    title: "Real-Time Decisions = Real Results",
    excerpt: "The gap between businesses that see a problem in real time and those that find out about it the next morning is widening fast. We look at what real-time analytics actually requires in practice, what it costs, and which businesses get the most value from making the jump.",
    date: "May 20, 2026",
    slug: "real-time-analytics-game-changer",
    category: "Analytics",
    readTime: "6 min",
    color: "#a259ff",
    content: `There's a meaningful difference between knowing what happened in your business yesterday and knowing what's happening right now. A retailer that notices a sudden spike in cart abandonment within minutes can investigate and fix a broken checkout flow before it costs thousands of dollars in lost sales. The same retailer relying on next day reports finds out only after the damage is done. Real time analytics doesn't require ripping out your existing systems. Most businesses can start by identifying the two or three metrics where speed actually changes the outcome, things like fraud signals, site errors, or inventory thresholds, and building lightweight streaming pipelines around just those. The infrastructure choices matter less than people assume. What matters more is defining clear thresholds for when a metric should trigger a human response, because a real time dashboard nobody is watching delivers no more value than a weekly report. Businesses that get this right typically see faster issue resolution within the first month and meaningfully better customer retention within two or three quarters.`,
  },
  {
    title: "Cloud vs On-Premise: What's Right For You?",
    excerpt: "There's no universal right answer here, despite what most vendors will tell you. We compare the real cost, security, and performance tradeoffs of cloud and on-premise infrastructure for different company sizes and industries, so you can make the call with your specific numbers instead of someone else's marketing.",
    date: "May 10, 2026",
    slug: "cloud-vs-on-premise-analytics",
    category: "Cloud",
    readTime: "8 min",
    color: "#00e676",
    content: `Cloud providers will tell you cloud is always cheaper and more flexible. On-premise vendors will tell you the opposite. The honest answer depends heavily on your usage pattern and industry. If your workloads are spiky, meaning you need a lot of computing power some days and very little on others, cloud almost always wins because you only pay for what you use. If your workloads are steady and predictable around the clock, the economics shift, and a well utilized on-premise setup can end up costing less over a three to five year horizon. Regulated industries like healthcare and finance often lean on-premise or hybrid for specific data sets due to compliance requirements, even when cloud would otherwise make sense. The mistake we see most often is companies choosing based on what's trendy rather than running the actual numbers for their workload. Before deciding, model out your realistic usage over the next two years, including growth, and price both options honestly. That fifteen minutes of math will tell you more than any vendor pitch.`,
  },
  {
    title: "Building A Data-Driven Culture",
    excerpt: "Buying the right tools is the easy part. Getting your team to actually trust and use data when making decisions is the hard part, and it's where most data initiatives quietly fail. We share what's worked for organizations that successfully made the shift from gut feeling to evidence.",
    date: "April 28, 2026",
    slug: "data-driven-culture",
    category: "Culture",
    readTime: "6 min",
    color: "#ff6b6b",
    content: `Plenty of companies invest heavily in dashboards and analytics platforms only to find that decisions in the room still get made based on whoever speaks most confidently. The technology was never the bottleneck. The real obstacle is usually trust: people don't act on data they don't understand or believe in. Building a genuinely data driven culture starts with making data accessible and explainable to the people who need to use it, not just to the analysts who built the dashboard. It also requires leadership to visibly change a decision based on data at least once, publicly, so the team sees that the numbers actually carry weight. Training matters less than people expect. What matters more is repetition: small wins where a data backed decision clearly outperformed a gut call, repeated often enough that it becomes the default way people think. Organizations that pull this off usually see the shift happen gradually over six to twelve months, not overnight, and it tends to start with one or two visible champions rather than a company wide mandate.`,
  },
  {
    title: "MLOps: Making AI Actually Work",
    excerpt: "The majority of machine learning models built inside companies never make it into production, and the ones that do often degrade quietly within months without anyone noticing. We explain what MLOps actually involves and why it's the difference between a model that works in a demo and one that keeps working for years.",
    date: "April 15, 2026",
    slug: "rise-of-mlops",
    category: "MLOps",
    readTime: "7 min",
    color: "#fdb840",
    content: `Building a machine learning model that performs well in a notebook is the easy part. Keeping that model accurate and reliable once it's deployed and facing real world data is where most projects quietly fail. Models drift over time as customer behavior, market conditions, and underlying data patterns shift, and without monitoring in place, a model can degrade for months before anyone realizes its predictions have become unreliable. MLOps is the discipline that closes this gap. It covers automated retraining pipelines, monitoring for performance drift, version control for both data and models, and clear rollback procedures when something goes wrong. None of this is exciting work, which is exactly why it gets skipped. But the businesses that invest in it see a very different outcome: models that stay accurate for years instead of months, and engineering teams that catch problems in dashboards instead of in angry customer emails. If you have a model running in production today with no monitoring around it, that's the single highest priority gap to close before building anything new.`,
  },
];

const TECH_ROW1 = [
  { name:"Python",        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name:"TensorFlow",    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name:"PyTorch",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name:"OpenCV",        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name:"React",         icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name:"Node.js",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name:"AWS",           icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name:"Azure",         icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name:"Docker",        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name:"Kubernetes",    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name:"MongoDB",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name:"PostgreSQL",    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name:"Redis",         icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name:"TypeScript",    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name:"Java",          icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name:"GCP",           icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name:"Tableau",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  { name:"Kafka",         icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
];
const TECH_ROW2 = [
  { name:"Snowflake",     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name:"Databricks",    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
  { name:"dbt",           icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
  { name:"Airflow",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name:"FastAPI",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name:"LangChain",     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name:"XGBoost",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name:"Flink",         icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name:"Terraform",     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name:"Kubernetes",    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name:"GraphQL",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name:"Elasticsearch", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
  { name:"Prometheus",    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { name:"Grafana",       icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name:"Looker",        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name:"Power BI",      icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name:"MLflow",        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name:"Vertex AI",     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
];

const CLIENTS_WITH_LOGOS = [
  { name:"Versi Systems",          logo:"/Images/site-images/versi-logo.webp",       fallback:"Versi Systems" },
  { name:"Valley King Properties", logo:"/Images/site-images/valleyking-logo.webp",  fallback:"Valley King" },
  { name:"ZillaOnline",            logo:"/Images/site-images/zilla-logo.webp",       fallback:"ZillaOnline" },
  { name:"TopSwap",                logo:"/Images/site-images/topswap-logo.webp",     fallback:"TopSwap" },
  { name:"ArchCrown",              logo:"/Images/site-images/archcrown-logo.webp",   fallback:"ArchCrown" },
  { name:"King's Liquidation",     logo:"/Images/site-images/kings-logo.webp",       fallback:"King's Liquidation" },
  { name:"BilBio Kuwait",          logo:"/Images/site-images/bilbio-logo.webp",      fallback:"BilBio Kuwait" },
  { name:"GoGuess Portugal",       logo:"/Images/site-images/goguess-logo.webp",     fallback:"GoGuess" },
  { name:"Odontyn",                logo:"/Images/site-images/odontyn-logo.webp",     fallback:"Odontyn" },
  { name:"CastNet Commerce",       logo:"/Images/site-images/castnet-logo.webp",     fallback:"CastNet" },
  { name:"Aerocast LLC",           logo:"/Images/site-images/aerocast-logo.webp",    fallback:"Aerocast LLC" },
  { name:"PrimeCad",               logo:"/Images/site-images/primecad-logo.webp",    fallback:"PrimeCad" },
  { name:"TechCorp Global",        logo:"/Images/site-images/techcorp-logo.webp",    fallback:"TechCorp Global" },
  { name:"FinanceHub Inc",         logo:"/Images/site-images/financehub-logo.webp",  fallback:"FinanceHub Inc" },
  { name:"RetailMax",              logo:"/Images/site-images/retailmax-logo.webp",   fallback:"RetailMax" },
  { name:"DataDrive",              logo:"/Images/site-images/datadrive-logo.webp",   fallback:"DataDrive" },
  { name:"InsightIQ",              logo:"/Images/site-images/insightiq-logo.webp",   fallback:"InsightIQ" },
  { name:"Predictix",              logo:"/Images/site-images/predictix-logo.webp",   fallback:"Predictix" },
];

const TESTIMONIALS = [
  { name:"Omar AlQabandi",       role:"CEO",                     company:"BilBio Kuwait",        img:"/Images/site-images/Omar-AlQabandi.webp",        quote:"The team delivered on time and on budget, with quality work. A true partner who understands our business.",                                            rating:5 },
  { name:"Nathan French",        role:"Director of I.T./ Marketing", company:"Treaterpro.com", img:"/Images/site-images/nathan.webp", quote:"The best team I've worked with for complex projects. They deliver results, not excuses.",                                 rating:5 },
  { name:"Edward Mazzer",        role:"CEO",                     company:"Italy",                 img:"/Images/site-images/tesi_img.webp",               quote:"They understood our business needs and executed flawlessly on our data integration project.",                                rating:5 },
  { name:"Charles Johnson",      role:"CEO",                     company:"BidLock, LLC",          img:"/Images/site-images/charles_johnson.webp",       quote:"Phenomenal team. Professional, patient, and truly the best in the business.",                                rating:5 },
  { name:"Pedro Madeira Gomes",  role:"CEO",                     company:"GoGuess, Portugal",     img:"/Images/site-images/tesi_img.webp",               quote:"Reliable, effective, and trustworthy. They understand our business needs and communicate clearly.",                       rating:5 },
  { name:"Paul Duhamel",         role:"CEO",                     company:"Duhamel Psychology",    img:"/Images/site-images/tesi_img.webp",               quote:"Professional, cooperative, and delivered beyond expectations. Highly recommended.",                                  rating:5 },
  { name:"Jessica Hoff",         role:"CEO",                     company:"ID Solutions",          img:"/Images/site-images/tesi_img.webp",               quote:"Timely communication and exceptional service. A true partner, not just a vendor.",                   rating:5 },
  { name:"Mike Carlson",         role:"CEO",                     company:"Luxxle App",            img:"/Images/site-images/tesi_img.webp",               quote:"The best team I've worked with. Outstanding professionalism and technical expertise.",            rating:5 },
  { name:"Heather Atencio",      role:"CEO",                     company:"Valley King Properties", img:"/Images/site-images/heather.webp",              quote:"We've worked with them for over 2 years on a complex project. They're integral to our success.",                                           rating:5 },
  { name:"Joshua DuBois",        role:"CEO",                     company:"Aerocast LLC",          img:"/Images/site-images/joshua.webp",                 quote:"One of the best teams we've worked with. Highly recommended.",                                            rating:5 },
];

const GROWTH_CARDS = [
  { img:"/Images/site-images/card7.webp", title:"Global Client References",     text:"We can provide references from our global clients to verify our reputation and past work. Talk directly to business leaders who've seen real results." },
  { img:"/Images/site-images/card2.webp", title:"Flexible Payment Options",     text:"We offer customised payment plans based on your project scope and budget. Client satisfaction and partnership are our top priorities." },
  { img:"/Images/site-images/card3.webp", title:"Regular Progress Updates",     text:"We provide regular updates from our demo servers so you can track progress and ensure we're aligned with your business goals." },
  { img:"/Images/site-images/card4.webp", title:"Multiple Payment Methods",     text:"We accept payments from Credit Cards, PayPal, US Bank Wire Transfer, and International Wire Transfers for your convenience." },
  { img:"/Images/site-images/card5.webp", title:"Direct Developer Access",    text:"We provide direct access to our developers and team leads to ensure quick turnarounds and clear, efficient communication." },
  { img:"/Images/site-images/card6.webp", title:"Hire Dedicated Virtual Teams",  text:"We offer dedicated resources to work for you full-time, virtually, at a fraction of the local cost — with the same quality and reliability." },
  { img:"/Images/site-images/card1.webp", title:"24/7 Global Support",    text:"We provide 24/7 online communication and support worldwide via Phone, Skype, and Email. We're always available when you need us." },
  { img:"/Images/site-images/card8.webp", title:"Secure Partnerships",        text:"We offer NDA and contract agreements signed by both parties to ensure a secure, professional, and trustworthy partnership." },
];

const WHY_CHOOSE = [
  { icon:<Users size={26}/>,     title:"Experienced Team",       desc:"We understand YOUR industry — not just data. Decades of experience across finance, healthcare, retail, and more.",         color:"#fdb840" },
  { icon:<Award size={26}/>,     title:"Proven Track Record",    desc:"3,500+ projects delivered with a 99.5% satisfaction rate. Our clients see ROI within months, not years.",             color:"#00d4ff" },
  { icon:<Shield size={26}/>,    title:"Security & Trust",    desc:"Your data is protected with enterprise-grade security. GDPR, HIPAA, and SOC 2 compliance built-in from day one.",                       color:"#a259ff" },
  { icon:<Zap size={26}/>,       title:"Faster Results",    desc:"We work in weekly sprints with regular demos — you see real, tangible progress every single week.",         color:"#00e676" },
  { icon:<Globe size={26}/>,     title:"Global Reach",      desc:"Offices in the US, Pakistan, and Canada, serving 60+ countries with round-the-clock, multilingual support.",                    color:"#ff6b6b" },
  { icon:<Heart size={26}/>,     title:"Long-Term Partnerships",  desc:"Our average engagement spans over 3 years. We build lasting partnerships that grow with your business.", color:"#fdb840" },
];

const PROCESS = [
  { step:"01", title:"Discovery",   desc:"We learn about your business — your goals, challenges, and opportunities. No technical jargon, just real understanding.",     icon:<Search size={20}/> },
  { step:"02", title:"Design",      desc:"We design a solution that fits YOUR business — not the other way around. Scalable, secure, and built for your needs.",              icon:<Layers size={20}/> },
  { step:"03", title:"Development", desc:"We build in weekly sprints with regular demos. You see progress every week and give feedback throughout.",                       icon:<Code size={20}/> },
  { step:"04", title:"Testing",     desc:"Rigorous testing ensures everything works perfectly before launch. No surprises, no downtime.",        icon:<CheckSquare size={20}/> },
  { step:"05", title:"Deployment",  desc:"We handle the entire launch process with zero downtime. Smooth, confident, and stress-free.",              icon:<Server size={20}/> },
  { step:"06", title:"Support",     desc:"24/7 monitoring and support keep your solution running at peak performance. We're always here when you need us.",          icon:<Activity size={20}/> },
];

const CASE_STUDIES = [
  { title:"E-Commerce Revenue Boost",    client:"RetailMax",             industry:"Retail",        challenge:"Stagnant sales and a 74% cart abandonment rate were throttling growth despite heavy ad spend.", solution:"AI-driven personalisation engine with dynamic pricing, product recommendations, and cart recovery flows.", result:"85% revenue growth in 6 months with 35% higher conversion and 42% lower cart abandonment.",    img:"/Images/site-images/dashboard-1.jpg", fullDesc:"We implemented a real-time machine learning model that analysed customer behaviour — browsing patterns, purchase history, session context — and dynamically adjusted pricing and product recommendations. We also built an automated cart recovery workflow that sent personalised re-engagement at optimal intervals. The outcome was an 85% revenue increase within six months, a 42% reduction in cart abandonment, and a measurably higher customer lifetime value across all segments." },
  { title:"Healthcare Cost Reduction",   client:"HealthTech Solutions",  industry:"Healthcare",    challenge:"Rising operational costs and inefficient resource allocation were straining hospital budgets while patient wait times climbed.", solution:"Predictive analytics platform for patient flow optimisation, staff scheduling, and resource allocation.", result:"45% cost reduction and 30% faster patient throughput with 18-point improvement in satisfaction scores.", img:"/Images/site-images/chart-1.jpg",     fullDesc:"We built a predictive model that forecasted patient admissions and resource requirements 48 hours in advance, drawing on historical admission patterns, seasonal data, and real-time bed availability. This allowed administrators to align staffing with demand dynamically. The result was a 45% cost reduction, 30% throughput improvement, and an 18-point jump in patient satisfaction scores — all within eight months of go-live." },
  { title:"Supply Chain Excellence",     client:"Industrial Leader",     industry:"Manufacturing", challenge:"Inefficient inventory management and cascading delays were costing millions annually across a 12-warehouse network.", solution:"Real-time analytics with ML demand forecasting and automated replenishment triggers integrated with IoT sensors.", result:"50% cost savings and 99.8% on-time delivery, eliminating $8M in waste across the full network.",          img:"/Images/site-images/dashboard-2.jpg", fullDesc:"We deployed a real-time analytics platform that integrated IoT sensor data from 50,000+ devices with historical demand signals to predict inventory needs and trigger automated replenishment at optimal order quantities. The result was a 50% reduction in holding costs, near-perfect delivery performance, and a 65% reduction in waste across the network — delivering $8M in savings in the first year alone." },
  { title:"Fintech Fraud Prevention",    client:"FinanceHub Inc",        industry:"FinTech",       challenge:"$15M annual fraud losses and slow manual review processes were damaging customer trust and profitability.", solution:"Real-time anomaly detection with machine learning, integrating with transaction processing systems.", result:"99.7% fraud capture rate, 70% reduction in false positives, and $12M recovered in first year.", img:"/Images/site-images/dashboard-1.jpg", fullDesc:"We deployed a hybrid ML model (ensemble of isolation forest and neural networks) that scored each transaction in under 50ms. The system integrated with the client's existing payment gateway, automatically flagging suspicious transactions for review and even blocking high-risk ones. Over the first year, fraud losses dropped by 80%, false positives were reduced by 70%, and customer satisfaction improved as legitimate transactions sailed through without friction." },
];

const PARTNERS = ["AWS Partner","Microsoft Gold","Google Cloud","Snowflake Elite","Tableau Partner","Power BI Partner","Databricks","Confluent","dbt Partner","Fivetran","Collibra","OneTrust"];

const FAQS = [
  { q:"How quickly will I see ROI?",                     a:"Most clients see initial insights within 2–4 weeks and full ROI within 3–6 months. Many achieve 4–7× returns in the first year through improved efficiency, cost savings, and revenue growth. We track ROI metrics from day one and report transparently." },
  { q:"What makes you different from other providers?", a:"We focus on YOUR business results, not just technology. Our AI achieves 98%+ accuracy using models trained on YOUR data. We provide full transparency, ongoing support, and a team that understands YOUR industry." },
  { q:"How do you handle data security?",           a:"We implement enterprise-grade encryption at rest and in transit, role-based access control, and continuous 24/7 threat monitoring. We are GDPR, HIPAA, SOC 2, and CCPA compliant by design. Regular third-party audits and penetration testing are standard, not optional." },
  { q:"Can you work with our existing systems?",       a:"Yes — we integrate with 300+ platforms including mainframe systems, cloud services, ERPs, CRMs, and custom applications. We handle data migration, API development, and end-to-end connectivity testing. Your operations experience minimal disruption throughout." },
  { q:"What do projects typically cost and how long do they take?",a:"Projects range from $30K for focused initiatives to $500K+ for enterprise-scale transformations. Timelines span from 6 weeks for quick wins to 6–12 months for comprehensive platforms. We provide transparent, fixed-price proposals with no hidden costs." },
  { q:"What happens after implementation?",                        a:"You get 90 days of dedicated post-launch support, full documentation, hands-on training for your team, and access to our 24/7 monitoring infrastructure. We also offer optional managed service agreements for continuous optimisation and model retraining." },
  { q:"Do you offer ongoing managed services?",                 a:"Yes. Our managed services cover pipeline maintenance, dashboard updates, model retraining, infrastructure management, and proactive performance optimisation — so your team focuses on business outcomes while we handle the data engineering." },
  { q:"How do you handle real-time data at scale?",       a:"We specialise in high-throughput, low-latency streaming architectures using Apache Flink, Kafka, and Kinesis, capable of processing hundreds of millions of events per day with sub-100ms end-to-end latency. Fault tolerance, exactly-once semantics, and 99.9% uptime are standard." },
  { q:"Do you offer training for our internal teams?",             a:"Absolutely. We provide custom training programmes covering data literacy, SQL, Python, machine learning, and BI tools. Our hands-on workshops are tailored to your industry use cases and include ongoing mentorship to ensure learning translates to real-world application." },
  { q:"Can you help with data migration from legacy systems?",     a:"Yes, we have extensive experience migrating legacy data warehouses to modern cloud platforms. We use automated migration tools, perform rigorous validation, and design rollback strategies to ensure zero data loss and minimal downtime." },
];

const INDUSTRIES = [
  { icon:<Heart size={22}/>,     name:"Healthcare",    stat:"45% cost reduction", color:"#ff6b6b" },
  { icon:<DollarSign size={22}/>,name:"Finance",       stat:"$12M saved annually",   color:"#fdb840" },
  { icon:<BarChart2 size={22}/>, name:"Retail",        stat:"85% revenue growth",color:"#00d4ff" },
  { icon:<Cpu size={22}/>,       name:"Manufacturing", stat:"70% less downtime", color:"#a259ff" },
  { icon:<Cloud size={22}/>,     name:"Technology",    stat:"20× data capacity", color:"#00e676" },
  { icon:<Globe size={22}/>,     name:"Logistics",     stat:"99.8% on-time delivery",     color:"#fdb840" },
];

const LIVE_METRICS = [
  { label:"Events Processed",    val:"8.4M",  unit:"/min",  icon:<Activity size={14}/>,   color:"#fdb840", delta:"+2.3%" },
  { label:"Active Pipelines",    val:"1,247", unit:"",      icon:<GitBranch size={14}/>,  color:"#00d4ff", delta:"+18"   },
  { label:"Avg Query Time",      val:"87",    unit:"ms",    icon:<Zap size={14}/>,        color:"#a259ff", delta:"-4ms"  },
  { label:"Models in Prod",      val:"342",   unit:"",      icon:<Brain size={14}/>,      color:"#00e676", delta:"+7"    },
  { label:"Data Ingested Today", val:"14.2",  unit:"TB",    icon:<Database size={14}/>,   color:"#ff6b6b", delta:"+1.8TB"},
  { label:"Uptime",              val:"99.99", unit:"%",     icon:<Server size={14}/>,     color:"#fdb840", delta:"stable"},
];

const AWARDS = [
  { year:"2025", title:"Gartner Cool Vendor",        category:"Data & Analytics" },
  { year:"2025", title:"G2 Leader",                  category:"Business Intelligence" },
  { year:"2024", title:"Clutch Top 1000",             category:"AI Companies" },
  { year:"2024", title:"Forbes Technology Council",  category:"Member" },
  { year:"2023", title:"ISO 27001 Certified",         category:"Information Security" },
  { year:"2023", title:"AWS Advanced Partner",        category:"Data & Analytics" },
];

const DATA_FACTS = [
  "Every day, we process over 8.4 million events per minute.",
  "Our AI models achieve 98% accuracy – among the highest in the industry.",
  "We've delivered 3,500+ projects across 60+ countries.",
  "Our real-time pipelines handle sub-100ms latency for instant decisions.",
  "We maintain 99.99% uptime across all managed services.",
  "Our clients save an average of $4.2M per year with our solutions.",
];

const T1_DUP = [...TECH_ROW1, ...TECH_ROW1];
const T2_DUP = [...TECH_ROW2, ...TECH_ROW2];
const PARTNERS_DUP = [...PARTNERS, ...PARTNERS];

const NEWS_ITEMS = [
  "🚀 New AI model achieves 99.1% accuracy in fraud detection",
  "📊 Client retention hits all-time high of 96%",
  "🌍 Expanding operations to 5 new countries in 2026",
  "🏆 Named 'Best Data Analytics Provider' by G2",
];

const fadeUp  = { hidden:{opacity:0,y:30},  visible:{opacity:1,y:0,  transition:{duration:0.6,ease:"easeOut"}} };
const slideL  = { hidden:{opacity:0,x:-40}, visible:{opacity:1,x:0,  transition:{duration:0.6,ease:"easeOut"}} };
const slideR  = { hidden:{opacity:0,x:40},  visible:{opacity:1,x:0,  transition:{duration:0.6,ease:"easeOut"}} };
const stagger = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.06,delayChildren:0.05}} };
const spring  = { hidden:{opacity:0,scale:0.9}, visible:{opacity:1,scale:1,transition:{type:"spring",stiffness:300,damping:20}} };

const REPLAY_VIEWPORT = { once:false, amount:0.15 };
const REPLAY_VIEWPORT_LOW = { once:false, amount:0.08 };

const HeroStatsParagraph = () => (
  <motion.p
    className={styles.heroStatsParagraph}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
  >
    You didn't build your business by guessing, and you shouldn't run it that way.{" "}
    With over 90 % model accuracy, 99.9% uptime, and 500+ successful projects across 60+ countries,
    you get more than just reports. You get certainty and clear insights that reveal
    your next revenue opportunity before your competitors see it.{" "}
    The fastest way to grow isn't working harder but knowing exactly
    where to focus.
  </motion.p>
);
export default function HomePage() {

  const [slide,           setSlide]           = useState(0);
  const [testi,           setTesti]           = useState(0);
  const [showTop,         setShowTop]         = useState(false);
  const [submitted,       setSubmitted]       = useState(false);
  const [formErrors,      setFormErrors]      = useState({});
  const [expandedCase,    setExpandedCase]    = useState(null);
  const [expandedFaq,     setExpandedFaq]     = useState(null);
  const [scrollPct,       setScrollPct]       = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedBlog,    setSelectedBlog]    = useState(null);
  const [glitch,          setGlitch]          = useState(false);
  const [liveData,        setLiveData]        = useState([55,68,42,81,73,90,77,63,88,71]);
  const [typedText,       setTypedText]       = useState("");
  const [headlineIdx,     setHeadlineIdx]     = useState(0);
  const [ripples,         setRipples]         = useState([]);
  const [particles,       setParticles]       = useState([]);
  const [hovSvc,          setHovSvc]          = useState(null);
  const [metricTick,      setMetricTick]      = useState(0);
  const [activeProcStep,  setActiveProcStep]  = useState(null);
  const [formData,        setFormData]        = useState({name:"",email:"",phone:"",subject:"",message:"",human:false});
  const [counters,        setCounters]        = useState({clients:0,projects:0,satisfaction:0,countries:0,years:0});
  const [activeIndustry,  setActiveIndustry]  = useState(0);
  const [chatOpen,        setChatOpen]        = useState(false);
  const [chatMsg,         setChatMsg]         = useState("");
  const [chatLog,         setChatLog]         = useState([{from:"bot",text:"Hi! 👋 How can Scape Data Solutions help your business grow today?"}]);
  const [factIndex,       setFactIndex]       = useState(0);
  const [visitorCount,    setVisitorCount]    = useState(1423);
  const [newsIndex,       setNewsIndex]       = useState(0);
  const [loading,         setLoading]         = useState(false);
  const [submitError,     setSubmitError]     = useState(null);

  const heroRef         = useRef(null);
  const {scrollY}       = useScroll();
  const heroParallax    = useTransform(scrollY,[0,600],[0,80]);
  const heroOpacity     = useTransform(scrollY,[0,380],[1,0.3]);
  const navBg           = useTransform(scrollY,[0,80],["rgba(255,255,255,0)","rgba(255,255,255,0.97)"]);

  const HEADLINES = ["Smarter Decisions","Faster Growth","More Revenue","Less Risk","Better Customer Insights","Competitive Advantage"];
  useEffect(()=>{
    let i=0; let current=HEADLINES[headlineIdx]; setTypedText("");
    const iv=setInterval(()=>{ setTypedText(current.slice(0,i+1)); i++; if(i>=current.length){clearInterval(iv); setTimeout(()=>setHeadlineIdx(p=>(p+1)%HEADLINES.length),2000);} },60);
    return ()=>clearInterval(iv);
  },[headlineIdx]);

  useEffect(()=>{
    const iv=setInterval(()=>{
      setLiveData(p=>[...p.slice(1),Math.floor(Math.random()*40+52)]);
      setMetricTick(p=>p+1);
    },1600);
    return ()=>clearInterval(iv);
  },[]);

  useEffect(()=>{
    const iv=setInterval(()=>{ setGlitch(true); setTimeout(()=>setGlitch(false),180); },7500);
    return ()=>clearInterval(iv);
  },[]);

  useEffect(()=>{
    const h=()=>{ const d=document.documentElement; setScrollPct((window.scrollY/(d.scrollHeight-window.innerHeight))*100); setShowTop(window.scrollY>500); };
    window.addEventListener("scroll",h);
    return ()=>window.removeEventListener("scroll",h);
  },[]);

  useEffect(()=>{ const t=setInterval(()=>setSlide(s=>(s+1)%SLIDES.length),5500); return ()=>clearInterval(t); },[]);
  useEffect(()=>{ const t=setInterval(()=>setTesti(t=>(t+1)%TESTIMONIALS.length),6200); return ()=>clearInterval(t); },[]);
  useEffect(()=>{ const t=setInterval(()=>setActiveIndustry(p=>(p+1)%INDUSTRIES.length),2800); return ()=>clearInterval(t); },[]);

  const counterRef      = useRef(null);
  const isCounterInView = useInView(counterRef,{once:false,amount:0.4});
  useEffect(()=>{
    if(!isCounterInView) return;
    const targets={clients:200,projects:500,satisfaction:99.5,countries:60,years:6};
    let step=0; const steps=90;
    const iv=setInterval(()=>{
      step++; const ease=1-Math.pow(1-step/steps,3);
      setCounters({clients:targets.clients*ease,projects:targets.projects*ease,satisfaction:targets.satisfaction*ease,countries:targets.countries*ease,years:targets.years*ease});
      if(step>=steps) clearInterval(iv);
    },2000/steps);
    return ()=>clearInterval(iv);
  },[isCounterInView]);

  useEffect(()=>{
    setParticles(Array.from({length:80},()=>({
      x:Math.random()*100, y:Math.random()*100,
      size:Math.random()*4+1, duration:Math.random()*15+8,
      delay:Math.random()*6, opacity:Math.random()*0.3+0.05,
    })));
  },[]);

  useEffect(()=>{
    const h=e=>{ if(e.key==="Escape"){setSelectedService(null);setSelectedBlog(null);} };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[]);

  useEffect(()=>{
    const iv=setInterval(()=>{ setFactIndex(p=>(p+1)%DATA_FACTS.length); },4000);
    return ()=>clearInterval(iv);
  },[]);

  useEffect(()=>{
    const iv=setInterval(()=>{ setVisitorCount(p=>p+Math.floor(Math.random()*3+1)); },5000);
    return ()=>clearInterval(iv);
  },[]);

  useEffect(()=>{
    const iv=setInterval(()=>setNewsIndex(p=>(p+1)%NEWS_ITEMS.length),5000);
    return ()=>clearInterval(iv);
  },[]);

  const stars  = (n=5) => [...Array(n)].map((_,i)=><Star key={i} size={13} fill="#fdb840" color="#fdb840"/>);
  const change = (f,v) => setFormData(p=>({...p,[f]:v}));
  const addRipple = useCallback(e=>{
    const r=e.currentTarget.getBoundingClientRect();
    const id=Date.now();
    setRipples(p=>[...p,{id,x:e.clientX-r.left,y:e.clientY-r.top}]);
    setTimeout(()=>setRipples(p=>p.filter(r=>r.id!==id)),700);
  },[]);

  const validate=()=>{
    const e={};
    if(!formData.name.trim()) e.name="Name is required";
    if(!/\S+@\S+\.\S+/.test(formData.email)) e.email="Valid email required";
    if(!formData.phone.trim()) e.phone="Phone is required";
    if(!formData.subject.trim()) e.subject="Subject is required";
    if(!formData.message.trim()) e.message="Message is required";
    if(!formData.human) e.human="Please confirm you're human";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setFormErrors(errs); return; }
    setLoading(true);
    setSubmitError(null);
    try {
      await submitLead({ name:formData.name, email:formData.email, phone:formData.phone, service:formData.subject, message:formData.message, company:"" });
      setSubmitted(true);
      setFormData({ name:"", email:"", phone:"", subject:"", message:"", human:false });
    } catch (error) {
      setSubmitError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sendChat=()=>{
    if(!chatMsg.trim()) return;
    setChatLog(l=>[...l,{from:"user",text:chatMsg}]);
    setChatMsg("");
    setTimeout(()=>setChatLog(l=>[...l,{from:"bot",text:"Thanks for reaching out! Our team will respond within 1 hour. For urgent queries, call +1 (757) 598-0582 or WhatsApp us."}]),900);
  };

  const maxLive = Math.max(...liveData);

  const ClientCard = ({ client }) => {
    const [imgErr, setImgErr] = useState(false);
    if (imgErr) {
      return <div className={styles.clientTextCard}>{client.fallback || client.name}</div>;
    }
    return (
      <div className={styles.clientLogoCard}>
        <img src={client.logo} alt={client.name} onError={() => setImgErr(true)} />
      </div>
    );
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Scape Data Solutions | AI-Powered Data Analytics & Business Intelligence"
        description="Transform your business with expert data analytics, AI, machine learning, and business intelligence solutions. 1200+ clients, 98% satisfaction."
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      {/* scroll progress */}
      <div className={styles.progressTrack}><motion.div className={styles.progressBar} style={{width:`${scrollPct}%`}}/></div>

      {/* News ticker */}
      <div className={styles.newsTicker}>
        <div className={styles.container}>
          <div className={styles.newsRow}>
            <span className={styles.newsLabel}><Bell size={12} /> Latest</span>
            <AnimatePresence mode="wait">
              <motion.span key={newsIndex} className={styles.newsText} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.5}}>
                {NEWS_ITEMS[newsIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Live metrics ticker */}
      <div className={styles.metricsTicker}>
        <div className={styles.metricsTrack}>
          {[...LIVE_METRICS,...LIVE_METRICS].map((m,i)=>(
            <span key={i} className={styles.metricsItem}>
              <span style={{color:m.color}}>{m.icon}</span>
              <span className={styles.metricsLabel}>{m.label}:</span>
              <motion.span className={styles.metricsVal} key={metricTick} initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:0.4}}>
                {m.val}{m.unit}
              </motion.span>
              <span className={styles.metricsDelta} style={{color:m.delta.startsWith("-")?"#ff6b6b":"#00e676"}}>{m.delta}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Navbar ── */}
      <Navbar activeNav="home" style={{ backgroundColor: navBg }} />

      <main className={styles.mainContent}>

        {/* ═══ HERO ═══ */}
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.particlesContainer}>
            {particles.map((p,i)=>(
              <motion.div key={i} className={styles.particle}
                style={{left:`${p.x}%`,top:`${p.y}%`,width:p.size,height:p.size,opacity:p.opacity}}
                animate={{y:[0,-30,0],x:[0,15,0],opacity:[p.opacity,p.opacity*3,p.opacity]}}
                transition={{duration:p.duration,delay:p.delay,repeat:Infinity,ease:"easeInOut"}}/>
            ))}
          </div>
          <div className={styles.heroGrid}/>
          <motion.div className={styles.heroBg} style={{y:heroParallax}}/>
          <motion.div className={styles.container}>
            <div className={styles.heroWrap}>

              {/* Left */}
              <motion.div className={styles.heroText} style={{opacity:heroOpacity}} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={slideL}>
                <AnimatePresence mode="wait">
                  <motion.div key={slide} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:0.5}}>
                    <motion.div className={styles.heroBadge} initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:0.2}}>
                      <Sparkles size={13}/> {SLIDES[slide].tag}
                    </motion.div>
                    <h1 className={`${styles.heroTitle}${glitch?" "+styles.glitch:""}`}>
                      <span className={styles.heroLine1}>{SLIDES[slide].headline}</span>
                      <span className={styles.heroLine2} style={{color:SLIDES[slide].accent}}>{SLIDES[slide].headline2}</span>
                    </h1>
                    <p className={styles.heroSub}>{SLIDES[slide].sub}</p>
                  </motion.div>
                </AnimatePresence>

                <div className={styles.typedRow}>
                  <Terminal size={13}/>&nbsp;We help you achieve&nbsp;<span className={styles.typed}>{typedText}<span className={styles.caret}>|</span></span>
                </div>

                <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={REPLAY_VIEWPORT} transition={{duration:0.5}} style={{display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"}}>
                  <Link to="/contact" className={styles.heroBtn} onClick={addRipple} style={{borderColor:SLIDES[slide].accent}}>
                    {ripples.map(r=><span key={r.id} className={styles.ripple} style={{left:r.x,top:r.y}}/>)}
                    Start Growing Your Business <ArrowRight size={16}/>
                  </Link>
                  <Link to="/portfolio" className={styles.heroBtnSecondary}>
                    See Our Work <Eye size={15}/>
                  </Link>
                </motion.div>

                <div className={styles.heroControls}>
                  <motion.button className={styles.heroArrow} onClick={()=>setSlide(s=>(s-1+SLIDES.length)%SLIDES.length)} whileHover={{scale:1.1,backgroundColor:SLIDES[slide].accent,color:"#fff"}} transition={{duration:0.2}}>
                    <ChevronLeft size={16}/>
                  </motion.button>
                  <div className={styles.heroDots}>
                    {SLIDES.map((_,i)=>(
                      <motion.button key={i} className={`${styles.heroDot}${i===slide?" "+styles.heroDotOn:""}`}
                        onClick={()=>setSlide(i)} whileHover={{scale:1.35}} style={i===slide?{backgroundColor:SLIDES[slide].accent}:{}}/>
                    ))}
                  </div>
                  <motion.button className={styles.heroArrow} onClick={()=>setSlide(s=>(s+1)%SLIDES.length)} whileHover={{scale:1.1,backgroundColor:SLIDES[slide].accent,color:"#fff"}} transition={{duration:0.2}}>
                    <ChevronRight size={16}/>
                  </motion.button>
                </div>

                <div className={styles.trustRow}>
                  {["GDPR","HIPAA","SOC 2","ISO 27001"].map((b,i)=>(
                    <motion.span key={i} className={styles.trustBadge} whileHover={{scale:1.08,backgroundColor:"#fdb840",color:"#fff"}} transition={{duration:0.2}}>
                      <Shield size={10}/>{b}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Right - Devices */}
              <motion.div className={styles.heroDevices} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={slideR}>
                <AnimatePresence mode="wait">
                  <motion.div key={`dev-${slide}`} className={styles.devGroup}
                    initial={{opacity:0,scale:0.9,rotateY:5}} animate={{opacity:1,scale:1,rotateY:0}} exit={{opacity:0,scale:0.9,rotateY:-5}}
                    transition={{duration:0.5}}>
                    <motion.div className={styles.devLaptop} animate={{y:[0,-10,0]}} transition={{duration:3,repeat:Infinity,ease:"easeInOut"}}>
                      <img src={SLIDES[slide].imgLaptop} alt="Dashboard"/>
                      <motion.div className={styles.devBadge} initial={{scale:0}} animate={{scale:1}} transition={{delay:0.5,type:"spring",stiffness:350}}>
                        <span className={styles.devBadgeVal}>{SLIDES[slide].stat.val}</span>
                        <span className={styles.devBadgeLbl}>{SLIDES[slide].stat.label}</span>
                      </motion.div>
                    </motion.div>
                    <motion.div className={styles.devTablet} animate={{y:[0,-6,0]}} transition={{duration:2.5,repeat:Infinity,ease:"easeInOut"}}>
                      <img src={SLIDES[slide].imgTab} alt="Chart"/>
                    </motion.div>
                    <motion.div className={styles.devPhone} animate={{y:[0,-4,0]}} transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}>
                      <img src={SLIDES[slide].imgMobile} alt="Analytics"/>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
                {/* ── Stats strip below devices ── */}
                <HeroStatsParagraph />
              </motion.div>
            </div>

            {/* Stats bar */}
            <motion.div className={styles.statsBar} ref={counterRef} initial="hidden" animate={isCounterInView?"visible":"hidden"} variants={stagger}>
              {[
                {val:Math.floor(counters.clients)+"+",  lbl:"Happy Clients",      icon:<Users size={17}/>,    color:"#fdb840"},
                {val:Math.floor(counters.projects)+"+", lbl:"Projects Delivered", icon:<BarChart2 size={17}/>,color:"#00d4ff"},
                {val:counters.satisfaction.toFixed(1)+"%",lbl:"Satisfaction Rate",icon:<Star size={17}/>,     color:"#a259ff"},
                {val:Math.floor(counters.countries)+"+",lbl:"Countries Served",   icon:<Globe size={17}/>,    color:"#00e676"},
                {val:Math.floor(counters.years)+"+",    lbl:"Years of Excellence",icon:<Award size={17}/>,    color:"#ff6b6b"},
              ].map((s,i)=>(
                <motion.div key={i} className={styles.statCell} variants={spring}
                  whileHover={{y:-4,boxShadow:`0 6px 20px ${s.color}20`}}>
                  <div className={styles.statIcon} style={{color:s.color}}>{s.icon}</div>
                  <motion.span className={styles.statNum} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:i*0.1}}>{s.val}</motion.span>
                  <span className={styles.statLbl}>{s.lbl}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Fact ticker */}
        <div className={styles.factTicker}>
          <div className={styles.container}>
            <div className={styles.factRow}>
              <span className={styles.factLabel}><Info size={14} /> Did you know?</span>
              <AnimatePresence mode="wait">
                <motion.span key={factIndex} className={styles.factText} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.5}}>
                  {DATA_FACTS[factIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Sparkle ticker */}
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {[...Array(4)].map((_,rep)=>
              ["AI & Machine Learning","Big Data Engineering","Real-Time Analytics","Cloud Solutions","Data Governance","Business Intelligence","Predictive Analytics","Custom Development","Data Privacy","Strategy Consulting"].map((t,i)=>(
                <span key={`${rep}-${i}`} className={styles.tickerItem}><Sparkles size={11}/>{t}</span>
              ))
            )}
          </div>
        </div>

        {/* Intro section */}
        <motion.section className={styles.intro} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.introWrap}>
              <div className={styles.introLeft}>
                <h2 className={styles.introH}><span className={styles.introAccent}>Scape Data Solutions</span> helps businesses make smarter decisions, grow faster, and reduce costs. We turn your data into actionable insights that drive real business results.</h2>
                <p className={styles.introP}>We believe in delivering measurable business outcomes, not just technology. Our work helps companies across industries improve efficiency, increase revenue, and build competitive advantage. We combine deep industry expertise with practical data solutions that work for YOUR business.</p>
                <motion.strong className={styles.introQuote} initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={REPLAY_VIEWPORT} transition={{duration:0.5,delay:0.15}}>
                  "WE TAKE TREMENDOUS <span className={styles.introU}>PRIDE</span> IN SERVING A WORLD-CLASS <span className={styles.introU}>CUSTOMER</span> BASE"
                </motion.strong>
                <div className={styles.introAwards}>
                  {AWARDS.map((a,i)=>(
                    <motion.div key={i} className={styles.awardChip} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={REPLAY_VIEWPORT} transition={{delay:i*0.06}} whileHover={{y:-2,backgroundColor:"#fdb84022"}}>
                      <Award size={11} color="#fdb840"/>
                      <div><span className={styles.awardTitle}>{a.title}</span><span className={styles.awardCat}>{a.category} · {a.year}</span></div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={styles.introPanel}>
                <div className={styles.ipHeader}><Activity size={14}/> Performance Metrics <motion.span className={styles.livePulse} animate={{opacity:[1,0.2,1]}} transition={{duration:1,repeat:Infinity}}/></div>
                {[
                  {label:"Model Accuracy",   val:98,   color:"#fdb840"},
                  {label:"Client Retention", val:96,   color:"#00d4ff"},
                  {label:"Uptime SLA",       val:99.9, color:"#00e676"},
                  {label:"On-time Delivery", val:97,   color:"#a259ff"},
                  {label:"Support Response", val:94,   color:"#ff6b6b"},
                ].map((m,i)=>(
                  <div key={i} className={styles.metricRow}>
                    <span className={styles.metricLabel}>{m.label}</span>
                    <div className={styles.metricBar}>
                      <motion.div className={styles.metricFill} initial={{width:0}} whileInView={{width:`${m.val}%`}} viewport={REPLAY_VIEWPORT} transition={{duration:1,delay:i*0.1}} style={{backgroundColor:m.color}}/>
                    </div>
                    <span className={styles.metricVal}>{m.val}%</span>
                  </div>
                ))}
                <div className={styles.ipCerts}>
                  {["GDPR","HIPAA","SOC 2","ISO"].map((c,i)=><span key={i} className={styles.ipCert}><CheckCircle size={10}/>{c}</span>)}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Industries */}
        <section className={`${styles.sec} ${styles.secNavy}`}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <h3 className={`${styles.secTitle} ${styles.secTitleLight}`}>Industries We Serve</h3>
            </div>
            <motion.div className={styles.industryGrid} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={stagger}>
              {INDUSTRIES.map((ind,i)=>(
                <motion.div key={i} className={`${styles.industryCard}${activeIndustry===i?" "+styles.industryCardOn:""}`}
                  variants={spring} onClick={()=>setActiveIndustry(i)}
                  whileHover={{y:-4,boxShadow:`0 8px 24px ${ind.color}20`}}>
                  <div className={styles.indIcon} style={{color:ind.color}}>{ind.icon}</div>
                  <h4 className={styles.indName}>{ind.name}</h4>
                  <p className={styles.indStat} style={{color:ind.color}}>{ind.stat}</p>
                  {activeIndustry===i&&<motion.div className={styles.indActive} layoutId="indActive" style={{backgroundColor:ind.color}}/>}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Growth Cards */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT_LOW} variants={stagger}>
          <div className={styles.container}>
            <div className={styles.secHead}><h3 className={styles.secTitle}>Unlock Business Growth</h3><img src="/Images/site-images/client-icon.webp" className={styles.secIcon} alt=""/></div>
            <div className={styles.growthGrid}>
              {GROWTH_CARDS.map((card,i)=>(
                <motion.div key={i} className={styles.growthCard} variants={fadeUp}
                  whileHover={{y:-6,boxShadow:"0 12px 36px rgba(0,0,0,0.08)",borderColor:"#fdb840"}}>
                  <motion.img src={card.img} alt={card.title} className={styles.growthImg} whileHover={{scale:1.08,rotate:3}} transition={{duration:0.3}}/>
                  <div><h5 className={styles.growthTitle}>{card.title}</h5><p className={styles.growthText}>{card.text}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* WHY CHOOSE US */}
        <section className={styles.sec} style={{}}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <h3 className={styles.secTitle}>Why Choose Us</h3>
              <img src="/Images/site-images/client-icon.webp" className={styles.secIcon} alt=""/>
            </div>
            <div className={styles.whyGrid}>
              {WHY_CHOOSE.map((item,i)=>(
                <motion.div key={i} className={styles.whyCard}
                  initial={{opacity:0, y:48}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:false, amount:0.25}}
                  transition={{duration:0.7, ease:'easeOut', delay:i*0.08}}>
                  <span className={styles.whyCardChip} style={{color:item.color}}>{item.title.split(' ')[0]}</span>
                  <h4 className={styles.whyTitle}>{item.title}</h4>
                  <p className={styles.whyDesc}>{item.desc}</p>
                  <div className={styles.whyLine} style={{backgroundColor:item.color}}/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className={`${styles.sec} ${styles.secLight}`}>
          <div className={styles.container}>
            <div className={styles.secHead}><h3 className={styles.secTitle}>Our Services</h3><img src="/Images/site-images/client-icon.webp" className={styles.secIcon} alt=""/></div>
            <motion.div className={styles.servGrid} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT_LOW} variants={stagger}>
              {SERVICES.map((svc,i)=>(
                <motion.div key={i} className={styles.servCard} variants={fadeUp}
                  onHoverStart={()=>setHovSvc(i)} onHoverEnd={()=>setHovSvc(null)}
                  style={{"--sc":svc.color}}>
                  <div className={styles.servFront}>
                    <motion.div className={styles.servIcon}
                      animate={hovSvc===i?{rotate:8,scale:1.05}:{rotate:0,scale:1}}
                      transition={{duration:0.3}}>
                      {svc.icon}
                    </motion.div>
                    <h4 className={styles.servTitle}>{svc.title}</h4>
                    <p className={styles.servDesc}>{svc.desc}</p>
                    <div className={styles.servTags}>{svc.tags.map((t,j)=><span key={j} className={styles.servTag}>{t}</span>)}</div>
                  </div>
                  <div className={styles.servBack}>
                    <p className={styles.servDetail}>{svc.detail}</p>
                    <button className={styles.servCta} onClick={()=>setSelectedService(svc)}>
                      Learn More <ArrowRight size={14}/>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Modal */}
        <AnimatePresence>
          {selectedService&&(
            <motion.div className={styles.lightbox} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelectedService(null)}>
              <motion.div className={styles.lightboxContent} initial={{scale:0.9,y:30,opacity:0}} animate={{scale:1,y:0,opacity:1}} exit={{scale:0.9,y:30,opacity:0}} transition={{type:"spring",stiffness:350,damping:28}} onClick={e=>e.stopPropagation()}>
                <button className={styles.lightboxClose} onClick={()=>setSelectedService(null)}><X size={21}/></button>
                <div className={styles.lightboxColorBar} style={{backgroundColor:selectedService.color}}/>
                <div className={styles.lightboxBody}>
                  <div className={styles.lbIconLarge} style={{color:selectedService.color}}>{selectedService.icon}</div>
                  <span className={styles.lightboxCategory}>Service</span>
                  <h2>{selectedService.title}</h2>
                  <div className={styles.lightboxTags}>{selectedService.tags.map((t,i)=><span key={i} className={styles.lightboxTag} style={{borderColor:selectedService.color,color:selectedService.color}}>{t}</span>)}</div>
                  <div className={styles.lightboxLongDesc}><p>{selectedService.longDesc}</p></div>
                  <div className={styles.lightboxActions}>
                    <Link to="/contact" className={styles.lightboxBtn} style={{backgroundColor:selectedService.color,color:"#fff"}}>Get Started <ArrowRight size={14}/></Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TECHNOLOGIES */}
        <section className={`${styles.sec} ${styles.secGrey}`}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <h3 className={styles.secTitle}>Technologies We Use</h3>
            </div>
          </div>
          <div className={styles.techBlock}>
            <div className={styles.marqueeRow}>
              <div className={styles.marqueeTrack}>
                {T1_DUP.map((tech, i) => (
                  <div key={i} className={styles.techChip}>
                    <div className={styles.techChipIcon}>
                      <img src={tech.icon} alt={tech.name} onError={e => { e.target.style.display = "none"; e.target.parentNode.innerHTML = `<span style="font-size:10px;font-weight:700;color:#1a3a8f">${tech.name.slice(0,2).toUpperCase()}</span>`; }} />
                    </div>
                    <span className={styles.techChipName}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.marqueeRow}>
              <div className={`${styles.marqueeTrack} ${styles.marqueeRev}`}>
                {T2_DUP.map((tech, i) => (
                  <div key={i} className={styles.techChip}>
                    <div className={styles.techChipIcon}>
                      <img src={tech.icon} alt={tech.name} onError={e => { e.target.style.display = "none"; e.target.parentNode.innerHTML = `<span style="font-size:10px;font-weight:700;color:#1a3a8f">${tech.name.slice(0,2).toUpperCase()}</span>`; }} />
                    </div>
                    <span className={styles.techChipName}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Awards */}
        <section className={`${styles.sec} ${styles.secLight}`}>
          <div className={styles.container}>
            <div className={styles.secHead}><h3 className={styles.secTitle}>Partners & Awards</h3><img src="/Images/site-images/client-icon.webp" className={styles.secIcon} alt=""/></div>
          </div>
          <div className={styles.partnersMarquee}><div className={styles.partnersTrack}>{PARTNERS_DUP.map((p,i)=><motion.div key={i} className={styles.partnerChip} whileHover={{scale:1.07,backgroundColor:"#fdb840",color:"#fff"}} transition={{duration:0.2}}>{p}</motion.div>)}</div></div>
        </section>

        {/* Case Studies */}
        <motion.section className={styles.sec} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT_LOW} variants={stagger}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <h3 className={styles.secTitle}>Case Studies</h3>
              <img src="/Images/site-images/client-icon.webp" className={styles.secIcon} alt=""/>
            </div>
            <div className={styles.caseGrid}>
              {CASE_STUDIES.map((s, i) => (
                <motion.div key={i} className={styles.caseCard} variants={fadeUp}
                  whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.08)", borderColor: "#fdb840" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setExpandedCase(expandedCase === i ? null : i)}>
                  <div className={styles.caseBody}>
                    <h5 className={styles.caseTitle}>{s.title}</h5>
                    <p className={styles.caseClient}>{s.client}</p>
                    <p className={styles.caseDescription}>{s.result}</p>
                    <div className={styles.caseMetrics}>
                      <span className={styles.caseMetricChip}><Activity size={10} style={{ marginRight: 3, verticalAlign: "-1px" }} />Impact: {s.result.split('%')[0]}%+</span>
                      <span className={styles.caseMetricChip}>{s.industry}</span>
                    </div>
                    <ul className={styles.caseList}>
                      <li className={styles.caseListItem}><span className={styles.caseListIcon}>▸</span> Challenge: {s.challenge.slice(0, 60)}…</li>
                      <li className={styles.caseListItem}><span className={styles.caseListIcon}>▸</span> Solution: {s.solution.slice(0, 60)}…</li>
                    </ul>
                    <motion.button className={styles.caseBtn} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}
                      onClick={(e) => { e.stopPropagation(); setExpandedCase(expandedCase === i ? null : i); }}>
                      {expandedCase === i ? "Show Less" : "Read Full Story"} <ArrowRight size={14} />
                    </motion.button>
                    <AnimatePresence>
                      {expandedCase === i && (
                        <motion.div className={styles.caseFull} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                          <p>{s.fullDesc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process */}
        <section className={`${styles.sec} ${styles.secLight}`}>
          <div className={styles.container}>
            <div className={styles.secHead}><h3 className={styles.secTitle}>Our Process</h3><img src="/Images/site-images/client-icon.webp" className={styles.secIcon} alt=""/></div>
            <div className={styles.processTimeline}>
              {PROCESS.map((step,i)=>(
                <motion.div key={i} className={`${styles.processStep}${activeProcStep===i?" "+styles.processStepOn:""}`}
                  initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={REPLAY_VIEWPORT_LOW} transition={{delay:Math.min(i*0.06,0.3),duration:0.4}}
                  onClick={()=>setActiveProcStep(activeProcStep===i?null:i)}>
                  <motion.div className={styles.processNumber} whileHover={{scale:1.1,backgroundColor:"#fdb840",color:"#fff"}} transition={{duration:0.2}}>
                    {activeProcStep===i ? step.icon : step.step}
                  </motion.div>
                  <div className={styles.processContent}>
                    <h4 className={styles.processTitle}>{step.title}</h4>
                    <AnimatePresence>
                      {activeProcStep===i&&(
                        <motion.p className={styles.processDesc} initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} transition={{duration:0.3}}>{step.desc}</motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}><h3 className={styles.secTitle}>Frequently Asked Questions</h3><img src="/Images/site-images/client-icon.webp" className={styles.secIcon} alt=""/></div>
            <div className={styles.faqGrid}>
              {FAQS.map((faq,i)=>(
                <motion.div key={i} className={`${styles.faqItem}${expandedFaq===i?" "+styles.faqItemOpen:""}`}
                  initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={REPLAY_VIEWPORT_LOW} transition={{delay:Math.min(i*0.04,0.2),duration:0.3}}>
                  <div className={styles.faqQuestion} onClick={()=>setExpandedFaq(expandedFaq===i?null:i)}>
                    <h4>{faq.q}</h4>
                    <motion.span animate={{rotate:expandedFaq===i?180:0}} transition={{duration:0.3}}><ChevronDown size={17}/></motion.span>
                  </div>
                  <AnimatePresence>
                    {expandedFaq===i&&(
                      <motion.div className={styles.faqAnswer} initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} transition={{duration:0.3}}>
                        <p>{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog */}
        <section className={`${styles.sec} ${styles.secLight}`}>
          <div className={styles.container}>
            <div className={styles.secHead}><h3 className={styles.secTitle}>Latest Insights</h3><img src="/Images/site-images/client-icon.webp" className={styles.secIcon} alt=""/></div>
            <motion.div className={styles.blogGrid} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT_LOW} variants={stagger}>
              {BLOG_POSTS.map((post,i)=>(
                <motion.div key={i} className={styles.blogCard} variants={fadeUp} whileHover={{y:-6,boxShadow:"0 12px 36px rgba(0,0,0,0.06)"}}>
                  <div className={styles.blogColorBar} style={{backgroundColor:post.color}}/>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogCategory} style={{color:post.color,borderColor:post.color}}>{post.category}</span>
                    <span className={styles.blogReadTime}><Clock size={10}/>&nbsp;{post.readTime}</span>
                  </div>
                  <div className={styles.blogDate}>{post.date}</div>
                  <h4 className={styles.blogTitle}>{post.title}</h4>
                  <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  <button className={styles.blogLink} onClick={()=>setSelectedBlog(post)}>
                    Read More <ArrowRight size={12}/>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Modal */}
        <AnimatePresence>
          {selectedBlog&&(
            <motion.div className={styles.lightbox} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelectedBlog(null)}>
              <motion.div className={styles.lightboxContent} initial={{scale:0.9,y:30,opacity:0}} animate={{scale:1,y:0,opacity:1}} exit={{scale:0.9,y:30,opacity:0}} transition={{type:"spring",stiffness:350,damping:28}} onClick={e=>e.stopPropagation()}>
                <button className={styles.lightboxClose} onClick={()=>setSelectedBlog(null)}><X size={21}/></button>
                <div className={styles.lightboxColorBar} style={{backgroundColor:selectedBlog.color}}/>
                <div className={styles.lightboxBody}>
                  <span className={styles.lightboxCategory} style={{color:selectedBlog.color}}>{selectedBlog.category}</span>
                  <h2>{selectedBlog.title}</h2>
                  <div className={styles.lightboxMeta}>
                    <span>{selectedBlog.date}</span><span>·</span>
                    <span><Clock size={11}/>&nbsp;{selectedBlog.readTime}</span>
                  </div>
                  <div className={styles.lightboxLongDesc}><p>{selectedBlog.content}</p></div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials */}
        <section className={styles.sec}>
          <div className={styles.container}>
            <div className={styles.secHead}><h3 className={styles.secTitle}>What Our Clients Say</h3><img src="/Images/site-images/client-icon.webp" className={styles.secIcon} alt=""/></div>
            <div className={styles.testiWrap}>
              <AnimatePresence mode="wait">
                <motion.div key={testi} className={styles.testiCard} initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-30}} transition={{duration:0.4}}>
                  <div className={styles.testiTop}>
                    <motion.img src={TESTIMONIALS[testi].img} alt={TESTIMONIALS[testi].name} className={styles.testiAv} whileHover={{scale:1.05,borderColor:"#fdb840"}}/>
                    <div>
                      <strong className={styles.testiName}>{TESTIMONIALS[testi].name}</strong>
                      <p className={styles.testiRole}>{TESTIMONIALS[testi].role} — {TESTIMONIALS[testi].company}</p>
                      <div className={styles.stars}>{stars(TESTIMONIALS[testi].rating)}</div>
                    </div>
                  </div>
                  <blockquote className={styles.testiQ}>"{TESTIMONIALS[testi].quote}"</blockquote>
                  <div className={styles.testiFooter}>
                    <Link to="/testimonials" className={styles.testiMore}>Read more testimonials <ArrowRight size={11}/></Link>
                    <span className={styles.testiCount}>{testi+1} / {TESTIMONIALS.length}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className={styles.testiNav}>
                <motion.button className={styles.testiBtn} onClick={()=>setTesti(t=>(t-1+TESTIMONIALS.length)%TESTIMONIALS.length)} whileHover={{backgroundColor:"#fdb840",color:"#fff"}}><ChevronLeft size={18}/></motion.button>
                <div className={styles.testiDots}>{TESTIMONIALS.map((_,i)=><motion.span key={i} className={`${styles.tDot}${i===testi?" "+styles.tDotOn:""}`} onClick={()=>setTesti(i)} whileHover={{scale:1.3}}/>)}</div>
                <motion.button className={styles.testiBtn} onClick={()=>setTesti(t=>(t+1)%TESTIMONIALS.length)} whileHover={{backgroundColor:"#fdb840",color:"#fff"}}><ChevronRight size={18}/></motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <motion.section className={`${styles.sec} ${styles.secDark}`} initial="hidden" whileInView="visible" viewport={REPLAY_VIEWPORT} variants={fadeUp}>
          <div className={styles.container}>
            <div className={styles.secHead}>
              <h3 className={`${styles.secTitle} ${styles.secTitleLight}`}>Get In Touch</h3>
              <img src="/Images/site-images/client-icon.webp" className={styles.secIcon} alt=""/>
            </div>
            <p className={styles.secLead}>We believe that strong outcomes begin with a clear understanding of your data needs. Your feedback, questions, and inquiries are always welcome.</p>
            {submitted ? (
              <motion.div className={styles.formOk} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:350}}>
                <CheckCircle size={22}/> Thank you — our data team will be in touch shortly.
              </motion.div>
            ) : (
              <form className={styles.cForm} onSubmit={handleSubmit} noValidate>
                {submitError && <div style={{color:"#e74c3c",marginBottom:12,fontSize:14}}>{submitError}</div>}
                <div className={styles.fRow}>
                  <div className={styles.fGroup}>
                    <label className={styles.fLabel}>Your Name *</label>
                    <input type="text" placeholder="Name" value={formData.name} onChange={e => change("name", e.target.value)} />
                    {formErrors.name && <span className={styles.fErr}>{formErrors.name}</span>}
                  </div>
                  <div className={styles.fGroup}>
                    <label className={styles.fLabel}>Email Address *</label>
                    <input type="email" placeholder="Email" value={formData.email} onChange={e => change("email", e.target.value)} />
                    {formErrors.email && <span className={styles.fErr}>{formErrors.email}</span>}
                  </div>
                </div>
                <div className={styles.fRow}>
                  <div className={styles.fGroup}>
                    <label className={styles.fLabel}>Phone *</label>
                    <input type="text" placeholder="Phone" value={formData.phone} onChange={e => change("phone", e.target.value)} />
                    {formErrors.phone && <span className={styles.fErr}>{formErrors.phone}</span>}
                  </div>
                  <div className={styles.fGroup}>
                    <label className={styles.fLabel}>Subject *</label>
                    <input type="text" placeholder="Subject" value={formData.subject} onChange={e => change("subject", e.target.value)} />
                    {formErrors.subject && <span className={styles.fErr}>{formErrors.subject}</span>}
                  </div>
                </div>
                <div className={styles.fGroup}>
                  <label className={styles.fLabel}>Message *</label>
                  <textarea rows={4} placeholder="Message" value={formData.message} onChange={e => change("message", e.target.value)} />
                  {formErrors.message && <span className={styles.fErr}>{formErrors.message}</span>}
                </div>
                <div className={styles.fBottom}>
                  <label className={styles.captcha}>
                    <input type="checkbox" checked={formData.human} onChange={e => change("human", e.target.checked)} />
                    <span>I'm not a robot</span>
                    <div className={styles.captchaLogo}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                      <small>reCAPTCHA</small>
                    </div>
                  </label>
                  {formErrors.human && <span className={styles.fErr}>{formErrors.human}</span>}
                  <motion.button type="submit" className={styles.submitBtn} disabled={loading}
                    whileHover={!loading ? { scale: 1.02, backgroundColor: "#fdb840", color: "#fff" } : {}}
                    whileTap={!loading ? { scale: 0.97 } : {}}>
                    {loading ? (<><Loader2 size={18} className={styles.spinner} /> Sending…</>) : ("SEND MESSAGE")}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Side fixed */}
      <div className={styles.sideFixed}>
        <motion.a href="https://wa.me/+923218465214" className={`${styles.sideBtn} ${styles.sideBtnWA}`} whileHover={{x:6}} transition={{type:"spring",stiffness:380}}><i className="fab fa-whatsapp"/> WhatsApp</motion.a>
      </div>

      {/* Chat widget */}
      <div className={styles.chatWidget}>
        <AnimatePresence>
          {chatOpen&&(
            <motion.div className={styles.chatBox} initial={{opacity:0,y:20,scale:0.9}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20,scale:0.9}} transition={{duration:0.3}}>
              <div className={styles.chatHeader}>
                <div className={styles.chatHeaderInfo}><div className={styles.chatAvatar}><MessageSquare size={14}/></div><div><strong>Scape Data Support</strong><span><motion.span className={styles.livePulse} animate={{opacity:[1,0.2,1]}} transition={{duration:1,repeat:Infinity}}/>Online</span></div></div>
                <button onClick={()=>setChatOpen(false)}><X size={16}/></button>
              </div>
              <div className={styles.chatLog}>
                {chatLog.map((msg,i)=>(
                  <motion.div key={i} className={`${styles.chatMsg} ${msg.from==="user"?styles.chatMsgUser:styles.chatMsgBot}`} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.3}}>
                    {msg.text}
                  </motion.div>
                ))}
              </div>
              <div className={styles.chatInput}>
                <input value={chatMsg} onChange={e=>setChatMsg(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder="Type your message..."/>
                <motion.button onClick={sendChat} whileHover={{scale:1.1}} transition={{duration:0.2}}><ArrowRight size={15}/></motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button className={styles.chatToggle} onClick={()=>setChatOpen(!chatOpen)} whileHover={{scale:1.1}} whileTap={{scale:0.95}} animate={chatOpen?{}:{y:[0,-4,0]}} transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}>
          {chatOpen?<X size={20}/>:<MessageSquare size={20}/>}
          {!chatOpen&&<motion.span className={styles.chatBadge} animate={{scale:[1,1.2,1]}} transition={{duration:1.5,repeat:Infinity}}>1</motion.span>}
        </motion.button>
      </div>

      {/* Scroll top */}
      <AnimatePresence>
        {showTop&&(
          <motion.button className={styles.scrollTop} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
            initial={{opacity:0,scale:0.5,y:20}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.5,y:20}}
            transition={{type:"spring",stiffness:350,damping:28}} whileHover={{scale:1.1,backgroundColor:"#fdb840",color:"#fff"}}>
            <ChevronUp size={20}/>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}