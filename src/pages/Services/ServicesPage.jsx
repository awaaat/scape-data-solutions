// src/pages/ServicesPage.jsx
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  ChevronUp,
  X,
  MessageSquare,
  Activity,
  Server,
  GitBranch,
  Brain,
  Database,
  Zap,
  Sparkles,
  Star,
  Shield,
  Target,
  TrendingUp,
  BarChart3,
  Beaker,
  BookOpen,
  Lock,
  Globe,
  CheckCircle,
  Cloud,
  Heart,
  Factory,
  ShoppingBag,
  Truck,
  Zap as ZapIcon,
  Home,
  Building,
  Film,
  Wifi,
  Users,
  Trees,
  Scale,
  Gavel,
  Utensils,
  Trophy,
  Leaf,
  Briefcase,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./ServicesPage.module.css";
import homeStyles from "../Home/HomePage.module.css";
import SEO from "../../components/SEO/SEO";

// ─── 46 Industry‑Focused Services ────────────────────────────────
const SERVICE_CARDS = [
  // ========== BUSINESS ==========
  {
    id: 1,
    category: "business",
    title: "Customer Churn & Lifetime Value",
    href: "/services?category=business",
    tagline: "Turn customers into loyal advocates",
    description: "Predict churn, increase CLV, and drive growth with customer intelligence.",
    detailedDescription: [
      "Acquiring a new customer costs 5‑7 times more than retaining an existing one. Our Customer Churn & Lifetime Value service puts the power of prediction in your hands. We analyze every touchpoint – purchase history, support interactions, usage patterns, and even social sentiment – to build a comprehensive profile of customer loyalty.",
      "Our machine learning models flag customers who are likely to churn weeks or even months in advance, giving you time to act. We don't just tell you who is at risk – we tell you why, and we suggest personalized offers, outreach, or product adjustments to keep them engaged. For high‑value segments, we even automate retention campaigns.",
      "The payoff: churn rates drop by an average of 35%, and customer lifetime value increases by 50% or more. You'll also gain deeper insights into what drives loyalty, helping you refine your product and marketing strategies for long‑term growth."
    ],
    features: ["Churn Prediction", "CLV Modeling", "Segmentation", "Retention Campaigns"],
    metrics: { churn: "-35%", clv: "+50%", accuracy: "96%" },
    liveLoad: 81,
    demand: "High",
    items: ["Churn Risk Scores", "Customer Lifetime Value", "Segment Insights", "Retention Playbooks"]
  },
  {
    id: 2,
    category: "business",
    title: "Sales Forecasting & Demand Planning",
    href: "/services?category=business",
    tagline: "Predict demand, optimize revenue",
    description: "Forecast sales with precision and align inventory to market trends.",
    detailedDescription: [
      "No business can afford to guess demand – yet many still rely on spreadsheets and gut feel. Our Sales Forecasting & Demand Planning service replaces guesswork with data science. We combine your internal sales data with external signals like economic indicators, competitor pricing, and even weather patterns to produce forecasts that are up to 95% accurate.",
      "We tailor our models to your specific industry – whether you're selling software subscriptions, consumer goods, or industrial equipment. Our system generates rolling forecasts that update as new data arrives, so you always have a current view of expected demand. This enables smarter inventory management, better pricing, and more effective sales territory planning.",
      "Our clients typically see a 20% increase in revenue (by avoiding stockouts and capturing more sales) and a 15% reduction in inventory holding costs. You'll also gain the confidence to pursue aggressive growth strategies knowing you have reliable numbers behind every decision."
    ],
    features: ["Time Series Forecasting", "Demand Sensing", "Inventory Optimization", "Pricing Analytics"],
    metrics: { accuracy: "95%", revenue: "+20%", inventory: "-15%" },
    liveLoad: 69,
    demand: "High",
    items: ["Sales Predictions", "Demand Drivers", "Scenario Planning", "Stock Optimization"]
  },
  {
    id: 3,
    category: "business",
    title: "Market Basket & Cross‑Sell Analysis",
    href: "/services?category=business",
    tagline: "Uncover hidden purchase patterns",
    description: "Discover which products are frequently bought together and optimise cross‑selling.",
    detailedDescription: [
      "Your customers' baskets contain valuable clues about their preferences. Our Market Basket Analysis service uses association rule mining to uncover which items are often purchased together. We also analyze temporal patterns – for example, a customer who buys a laptop is likely to buy a bag within two weeks.",
      "We apply these insights to your e‑commerce site, in‑store promotions, and email campaigns. We recommend product bundles, trigger‑based cross‑sell offers, and placement strategies that increase average order value. We also help you identify under‑performing categories that could benefit from strategic pairing.",
      "Retailers using our solution have increased average order value by 25% and improved conversion rates by 18%. You turn your data into revenue without increasing marketing spend."
    ],
    features: ["Association Rules", "Time‑based Patterns", "Bundle Recommendations", "Campaign Automation"],
    metrics: { aov: "+25%", conversion: "+18%", lift: "+30%" },
    liveLoad: 57,
    demand: "Medium",
    items: ["Frequent Itemsets", "Cross‑sell Triggers", "Bundle Design", "Performance Tracking"]
  },
  {
    id: 4,
    category: "business",
    title: "Competitive Intelligence & Market Positioning",
    href: "/services?category=business",
    tagline: "Know your market, outsmart competitors",
    description: "Monitor competitor activity, market trends, and consumer sentiment to stay ahead.",
    detailedDescription: [
      "In a crowded market, awareness of your competitors' moves is crucial. Our Competitive Intelligence service aggregates data from public sources – news, social media, financial reports, and job postings – to provide a real‑time view of your competitive landscape.",
      "We use natural language processing to extract strategic signals: pricing changes, new product launches, executive movements, and customer sentiment towards competitors. We then benchmark your performance against industry peers and highlight gaps and opportunities. You also get a forward‑looking view of emerging threats.",
      "Clients using our solution have been able to proactively adjust pricing and product strategies, gaining a 10‑15% market share advantage over less informed rivals. You make decisions based on facts, not fear."
    ],
    features: ["Competitor Monitoring", "Sentiment Analysis", "Market Trend Forecasting", "SWOT Automation"],
    metrics: { market_share: "+12%", response_time: "-60%", insight: "3,000+ signals/month" },
    liveLoad: 48,
    demand: "Medium",
    items: ["Competitor Dashboards", "Alerting System", "Trend Reports", "Executive Briefs"]
  },

  // ========== FINANCE ==========
  {
    id: 5,
    category: "finance",
    title: "Fraud Detection & Risk Management",
    href: "/services?category=finance",
    tagline: "Protect your assets, build trust",
    description: "Detect fraudulent transactions in real‑time and manage financial risk.",
    detailedDescription: [
      "Financial fraud is growing in sophistication, and traditional rule‑based systems can't keep up. Our Fraud Detection & Risk Management service uses cutting‑edge AI to spot suspicious activity in real‑time. We analyze hundreds of transaction attributes – amount, location, device, velocity, and more – to score each transaction for risk.",
      "Our models are trained on millions of legitimate and fraudulent transactions, so they learn to distinguish between genuine anomalies and fraud. We also provide explainable AI, so your compliance team can understand why a transaction was flagged. This reduces false positives, which means fewer legitimate customers are inconvenienced.",
      "Financial institutions using our system have reduced fraud losses by up to 60% while cutting false positives to under 0.5%. We also help you stay ahead of regulators with comprehensive reporting and audit trails. You protect your bottom line and your reputation."
    ],
    features: ["Anomaly Detection", "Real‑time Alerts", "Risk Scoring", "Compliance Reporting"],
    metrics: { fraud: "-60%", detection: "99.2%", false_pos: "0.5%" },
    liveLoad: 73,
    demand: "High",
    items: ["Transaction Monitoring", "Behavioral Analytics", "Risk Dashboards", "Regulatory Reports"]
  },
  {
    id: 6,
    category: "finance",
    title: "Regulatory Compliance Analytics",
    href: "/services?category=finance",
    tagline: "Stay ahead of regulations",
    description: "Automate compliance monitoring and reporting to avoid fines and reputational damage.",
    detailedDescription: [
      "Financial regulations are evolving rapidly, and non‑compliance can cost millions in fines and lost customer trust. Our Regulatory Compliance Analytics service takes the burden off your legal and compliance teams. We automate the collection, lineage, and reporting of data required for GDPR, SOX, PCI‑DSS, and other frameworks.",
      "We build a living data dictionary that tracks where each piece of data comes from, how it's transformed, and who has access to it. This gives you a complete audit trail in minutes – not weeks. Our dashboards provide real‑time compliance status, flagging any gaps or violations before they become problems.",
      "Our clients achieve 100% audit readiness with zero major findings. They reduce the time spent on compliance reporting by 70%, freeing up teams to focus on strategic initiatives. You gain peace of mind knowing your data practices meet the highest standards."
    ],
    features: ["Data Lineage", "Audit Trails", "Automated Reporting", "Policy Monitoring"],
    metrics: { compliance: "100%", audits: "0 issues", time: "-70%" },
    liveLoad: 54,
    demand: "Medium",
    items: ["Compliance Dashboards", "Data Privacy", "Audit Automation", "Policy Management"]
  },
  {
    id: 7,
    category: "finance",
    title: "Credit Risk Scoring & Underwriting",
    href: "/services?category=finance",
    tagline: "Lend smart, lend safe",
    description: "Improve credit decisions with AI‑driven risk assessment and predictive scoring.",
    detailedDescription: [
      "Traditional credit scoring models often miss nuance, leaving good borrowers out and exposing lenders to hidden risks. Our Credit Risk Scoring service uses alternative data – such as cash flow patterns, payment history, social behaviour, and even education – to build a more complete picture of creditworthiness.",
      "We use machine learning to predict default probabilities with higher accuracy than conventional FICO‑style models. Our solution also provides explainability, so your underwriters understand the rationale behind each score. We can even integrate real‑time data to adjust scores as a borrower's situation changes.",
      "Lenders using our system have seen a 20% reduction in default rates and a 30% increase in approval rates for qualified applicants. You expand access to credit while protecting your portfolio from losses."
    ],
    features: ["Alternative Data Integration", "Default Prediction", "Explainable AI", "Real‑time Updates"],
    metrics: { default: "-20%", approval: "+30%", accuracy: "94%" },
    liveLoad: 61,
    demand: "High",
    items: ["Credit Scoring", "Underwriting Automation", "Portfolio Monitoring", "Regulatory Compliance"]
  },
  {
    id: 8,
    category: "finance",
    title: "Algorithmic Trading Analytics",
    href: "/services?category=finance",
    tagline: "Trade smarter, not harder",
    description: "Optimise trading strategies with predictive analytics and real‑time market data.",
    detailedDescription: [
      "In today's fast‑paced markets, speed and insight are everything. Our Algorithmic Trading Analytics service helps hedge funds, prop desks, and asset managers build and refine trading algorithms. We analyse historical market data, news sentiment, macroeconomic indicators, and even social media chatter to identify patterns and generate alpha.",
      "Our platform allows you to backtest strategies against decades of data, optimise entry/exit points, and automatically adjust to changing volatility. We also provide risk management modules to cap drawdowns and ensure compliance with your firm's risk appetite.",
      "Traders using our solution have achieved a 12‑15% improvement in Sharpe ratios and a 30% reduction in maximum drawdown. You gain a systematic edge without relying on gut feel."
    ],
    features: ["Backtesting", "Sentiment Analysis", "Risk Controls", "Real‑time Execution"],
    metrics: { sharpe: "+15%", drawdown: "-30%", win_rate: "+8%" },
    liveLoad: 49,
    demand: "Medium",
    items: ["Strategy Optimization", "Market Microstructure", "News Impact", "Portfolio Rebalancing"]
  },

  // ========== HEALTHCARE ==========
  {
    id: 9,
    category: "healthcare",
    title: "Patient Outcome Prediction",
    href: "/services?category=healthcare",
    tagline: "Better care, better outcomes",
    description: "Predict patient risks and improve treatment plans with AI‑powered insights.",
    detailedDescription: [
      "Every patient is unique, and outcomes depend on a complex interplay of factors – genetics, lifestyle, social determinants, and more. Our Patient Outcome Prediction service gives clinicians a powerful tool to anticipate risks and tailor treatments. We integrate electronic health records, claims data, and even social data to build holistic patient profiles.",
      "Our models predict the likelihood of readmission, complications, and treatment response with high accuracy. This allows care teams to prioritize high‑risk patients, adjust care plans, and allocate resources more effectively. For example, we can flag which diabetic patients are likely to need hospitalization in the next 30 days, enabling preemptive intervention.",
      "Healthcare providers using our solution have reduced readmission rates by 20% and improved patient satisfaction scores significantly. We also help you demonstrate value‑based care outcomes to payers, strengthening your negotiating position and reputation."
    ],
    features: ["Risk Stratification", "Readmission Prediction", "Treatment Optimization", "Population Health"],
    metrics: { readmission: "-20%", accuracy: "92%", patients: "1M+" },
    liveLoad: 59,
    demand: "Medium",
    items: ["Risk Scores", "Care Recommendations", "Outcome Tracking", "Population Analytics"]
  },
  {
    id: 10,
    category: "healthcare",
    title: "Operational Efficiency in Healthcare",
    href: "/services?category=healthcare",
    tagline: "Streamline healthcare operations",
    description: "Optimize staff scheduling, resource allocation, and patient flow for better efficiency.",
    detailedDescription: [
      "Hospitals and clinics face immense pressure to deliver quality care while managing costs. Our Operational Efficiency service uses process mining and predictive analytics to optimize every part of your operation. We analyze patient flow from admission to discharge, identifying bottlenecks that cause delays and inefficiencies.",
      "We build predictive models for bed demand, staff requirements, and equipment utilization – so you can allocate resources proactively. For instance, we can forecast emergency department surges and schedule staff accordingly, reducing wait times and improving patient satisfaction. We also provide real‑time dashboards that let managers see current status and make quick adjustments.",
      "The impact: our clients have reduced average wait times by 30%, cut operating costs by 15%, and increased staff productivity without adding headcount. Patients experience smoother care journeys, and staff report less burnout due to better workload distribution."
    ],
    features: ["Process Mining", "Resource Optimization", "Patient Flow", "Staff Scheduling"],
    metrics: { wait: "-30%", cost: "-15%", efficiency: "+25%" },
    liveLoad: 44,
    demand: "Medium",
    items: ["Bed Utilization", "Staff Allocation", "Patient Flow Maps", "Operational Dashboards"]
  },
  {
    id: 11,
    category: "healthcare",
    title: "Drug Adherence & Clinical Trial Analytics",
    href: "/services?category=healthcare",
    tagline: "Boost adherence, accelerate trials",
    description: "Monitor patient adherence and optimize clinical trial designs with data.",
    detailedDescription: [
      "Drug adherence is a major challenge – non‑adherence costs the healthcare system billions and leads to poor outcomes. Our Drug Adherence Analytics uses prescription data, refill patterns, and even IoT pill‑bottle sensors to identify patients at risk of dropping off. We then personalize interventions – reminders, simplified regimens, or caregiver involvement – to keep patients on track.",
      "For clinical trials, we help design more effective studies by simulating patient cohorts, predicting dropout rates, and optimizing endpoints. We also monitor trial data in real‑time to detect safety signals early, allowing you to stop or adapt trials before they fail.",
      "Pharma companies using our solution have improved adherence by 40% and reduced trial times by 25%. You bring life‑changing drugs to market faster and at lower cost."
    ],
    features: ["Adherence Prediction", "Intervention Recommendations", "Trial Simulation", "Safety Monitoring"],
    metrics: { adherence: "+40%", trial_time: "-25%", success_rate: "+15%" },
    liveLoad: 42,
    demand: "Low",
    items: ["Patient Engagement", "Refill Analytics", "Trial Dashboards", "Regulatory Submissions"]
  },

  // ========== RETAIL ==========
  {
    id: 12,
    category: "retail",
    title: "Personalized Recommendations",
    href: "/services?category=retail",
    tagline: "Delight every customer",
    description: "Drive sales with AI‑powered product recommendations tailored to each shopper.",
    detailedDescription: [
      "Shoppers are overwhelmed by choice, and generic recommendations often miss the mark. Our Personalized Recommendations service uses deep learning to understand each customer's unique tastes and context – not just what they bought, but when, where, and why. We build models that continuously learn from every interaction, improving recommendations in real‑time.",
      "We integrate with your e‑commerce platform, mobile app, and even in‑store kiosks to deliver consistent, cross‑channel personalization. Our AI considers factors like browsing history, items in cart, seasonal trends, and even weather to suggest products that actually resonate. We also support A/B testing so you can refine your approach.",
      "Retailers using our solution see conversion rates increase by 30% or more, and average order values rise by 15%. Shoppers feel understood and valued, which boosts loyalty and repeat purchases. We help you turn every visitor into a satisfied customer."
    ],
    features: ["Collaborative Filtering", "Real‑time Recommendations", "A/B Testing", "Personalization"],
    metrics: { conversion: "+30%", aov: "+15%", engagement: "+50%" },
    liveLoad: 68,
    demand: "High",
    items: ["Product Recommendations", "Personalized Emails", "On‑site Suggestions", "Behavior Analysis"]
  },
  {
    id: 13,
    category: "retail",
    title: "Inventory & Pricing Optimization",
    href: "/services?category=retail",
    tagline: "Maximize margins, minimize waste",
    description: "Optimize inventory levels and pricing strategies to boost profitability.",
    detailedDescription: [
      "Retailers often struggle with overstock that eats margins and stockouts that lose sales. Our Inventory & Pricing Optimization service brings science to these challenges. We combine demand forecasting with inventory simulation to find the sweet spot – enough stock to meet demand without excess. We also incorporate lead times, supplier reliability, and seasonal patterns.",
      "On the pricing side, our AI models analyze competitor pricing, customer price sensitivity, and demand elasticity to recommend optimal prices in real‑time. You can adopt dynamic pricing strategies that respond to market conditions, maximizing margin on high‑demand items and clearing slow‑movers at the right time.",
      "Our clients typically see gross margins increase by 10%, stockout rates drop by 40%, and overall sales rise by 12%. You gain a competitive edge by having the right products at the right price, every time."
    ],
    features: ["Demand Forecasting", "Dynamic Pricing", "Inventory Optimization", "Markdown Planning"],
    metrics: { margin: "+10%", stockout: "-40%", sales: "+12%" },
    liveLoad: 57,
    demand: "Medium",
    items: ["Inventory Levels", "Price Elasticity", "Markdown Recommendations", "Supplier Analytics"]
  },
  {
    id: 14,
    category: "retail",
    title: "Store Footfall & Traffic Analytics",
    href: "/services?category=retail",
    tagline: "Understand in‑store behaviour",
    description: "Analyse foot traffic patterns to improve store layout, staffing, and promotions.",
    detailedDescription: [
      "Physical retail is not dead – but it needs to be smarter. Our Store Footfall Analytics uses sensors, Wi‑Fi, and video analytics to track customer movement inside your stores. We map heatmaps, dwell times, and conversion zones to understand which areas attract or repel customers.",
      "We also correlate footfall with sales data to measure the effectiveness of in‑store promotions, displays, and layout changes. For multi‑store chains, we compare performance across locations and identify best practices. Our predictive models forecast traffic based on weather, events, and promotions, helping you staff appropriately.",
      "Retailers using our solution have increased sales per square foot by 12%, reduced over‑staffing costs by 15%, and improved promotional ROI by 20%. You turn your physical space into a data‑driven asset."
    ],
    features: ["Heatmaps", "Dwell Time Analysis", "Conversion Tracking", "Traffic Forecasting"],
    metrics: { sales_per_sqft: "+12%", staffing: "-15%", promo_roi: "+20%" },
    liveLoad: 46,
    demand: "Medium",
    items: ["Heatmaps", "Zone Performance", "Staff Scheduling", "Promo Effectiveness"]
  },
  {
    id: 15,
    category: "retail",
    title: "Omnichannel Attribution & Journey Analytics",
    href: "/services?category=retail",
    tagline: "Map every customer touchpoint",
    description: "Track customers across channels to understand the true path to purchase.",
    detailedDescription: [
      "Customers interact with your brand across multiple channels – web, app, social, email, in‑store. Understanding which touchpoints matter most is key to optimising your marketing mix. Our Omnichannel Attribution service stitches together data from all these sources to build a unified customer journey.",
      "We use multi‑touch attribution models (linear, time‑decay, Shapley) to assign credit to each interaction, giving you a clear picture of what drives conversions. We also identify drop‑off points and opportunities for re‑engagement. Our dashboards show the ROI of each channel, so you can allocate budgets more effectively.",
      "Marketers using our solution have improved marketing ROI by 25% and reduced wasted spend by 18%. You finally have a complete view of your customers and can deliver consistent, personalised experiences across all channels."
    ],
    features: ["Multi‑touch Attribution", "Journey Mapping", "ROI Measurement", "Budget Optimization"],
    metrics: { mroi: "+25%", waste: "-18%", conversion: "+22%" },
    liveLoad: 51,
    demand: "Medium",
    items: ["Attribution Models", "Journey Visualization", "Channel Performance", "Budget Planning"]
  },

  // ========== MANUFACTURING ==========
  {
    id: 16,
    category: "manufacturing",
    title: "Predictive Maintenance",
    href: "/services?category=manufacturing",
    tagline: "Zero unplanned downtime",
    description: "Predict equipment failures before they happen to minimize downtime and maintenance costs.",
    detailedDescription: [
      "Unplanned downtime is the silent killer of manufacturing productivity – it can cost a factory millions per hour. Our Predictive Maintenance service turns your machines into self‑monitoring assets. We install IoT sensors or tap into existing SCADA data to capture vibration, temperature, pressure, and other indicators of wear and tear.",
      "Our AI models analyze this data to detect subtle changes that precede breakdowns, often days or weeks in advance. We send alerts with recommended actions – whether it's a lubrication check, a part replacement, or a full overhaul. This allows you to schedule maintenance at convenient times, avoiding production stops.",
      "Manufacturers using our solution have reduced unplanned downtime by 50% and maintenance costs by 25%. Equipment lifespan extends by up to 30%, and you can defer capital expenditure on new machinery. Safety incidents also decrease because you're addressing issues before they become hazardous."
    ],
    features: ["Sensor Analytics", "Failure Prediction", "Maintenance Scheduling", "Anomaly Detection"],
    metrics: { downtime: "-50%", cost: "-25%", lifespan: "+30%" },
    liveLoad: 61,
    demand: "High",
    items: ["Equipment Health Monitoring", "Failure Alerts", "Maintenance Plans", "Asset Optimization"]
  },
  {
    id: 17,
    category: "manufacturing",
    title: "Supply Chain Analytics",
    href: "/services?category=manufacturing",
    tagline: "Optimize your supply chain",
    description: "Gain end‑to‑end visibility and improve logistics, procurement, and distribution.",
    detailedDescription: [
      "Modern supply chains are global, complex, and fragile – a single disruption can cascade across your entire operation. Our Supply Chain Analytics service gives you real‑time visibility into every link, from raw materials to finished goods. We integrate data from your ERP, TMS, WMS, and even external sources like weather and geopolitical news.",
      "Our AI models identify bottlenecks, predict delays, and recommend alternative routes or suppliers. We also simulate disruptions so you can pre‑plan responses. On the strategic side, we help you optimize supplier selection, inventory positioning, and transportation modes to reduce costs while maintaining service levels.",
      "Clients have achieved 20% reduction in logistics costs, 30% improvement in on‑time delivery, and complete visibility across their supply chain. You become more resilient to shocks and can confidently meet customer expectations even in turbulent times."
    ],
    features: ["Supply Chain Visibility", "Route Optimization", "Supplier Performance", "Risk Management"],
    metrics: { cost: "-20%", delivery: "+30%", visibility: "100%" },
    liveLoad: 55,
    demand: "Medium",
    items: ["Logistics Optimization", "Supplier Scorecards", "Demand‑Supply Matching", "Risk Dashboards"]
  },
  {
    id: 18,
    category: "manufacturing",
    title: "Quality Assurance & Defect Detection",
    href: "/services?category=manufacturing",
    tagline: "Zero defects, every time",
    description: "Use computer vision and data analytics to detect defects early and reduce rework.",
    detailedDescription: [
      "Even small defects can lead to costly recalls and reputational damage. Our Quality Assurance service uses computer vision and sensor data to inspect products at every stage of production. We deploy cameras and AI models that can detect surface defects, dimensional inaccuracies, and assembly errors with superhuman precision.",
      "We also analyze process parameters – temperature, pressure, speed – to predict when quality is likely to drift, allowing you to adjust before defects occur. Our dashboards provide a real‑time quality score and highlight root causes of defects, so you can permanently fix issues.",
      "Manufacturers using our solution have reduced defect rates by 60% and rework costs by 40%. You deliver higher quality products, reduce waste, and build a reputation for reliability."
    ],
    features: ["Computer Vision", "Statistical Process Control", "Root Cause Analysis", "Real‑time Monitoring"],
    metrics: { defects: "-60%", rework: "-40%", yield: "+15%" },
    liveLoad: 49,
    demand: "Medium",
    items: ["Visual Inspection", "Sensor Integration", "Quality Dashboards", "Corrective Actions"]
  },
  {
    id: 19,
    category: "manufacturing",
    title: "Digital Twin & Process Simulation",
    href: "/services?category=manufacturing",
    tagline: "Simulate before you build",
    description: "Create virtual replicas of your production lines to test changes without risk.",
    detailedDescription: [
      "Changing a production line is expensive and risky. Our Digital Twin service creates a high‑fidelity virtual model of your manufacturing process. You can simulate the impact of new equipment, layout changes, or process parameters – all before spending a dollar in the real world.",
      "We use historical data and physics‑based modelling to ensure accuracy. You can run thousands of scenarios to find the optimal configuration, balancing throughput, quality, and cost. Once implemented, the digital twin remains synchronized with the real line, providing ongoing optimization insights.",
      "Manufacturers using digital twins have reduced commissioning time by 40%, improved throughput by 18%, and avoided costly mistakes. You innovate with confidence."
    ],
    features: ["Physics‑based Modelling", "Scenario Simulation", "Optimization", "Live Synchronization"],
    metrics: { commissioning: "-40%", throughput: "+18%", roi: "5x" },
    liveLoad: 38,
    demand: "Low",
    items: ["Virtual Commissioning", "Process Optimization", "What‑if Analysis", "Training Simulator"]
  },

  // ========== LOGISTICS & SUPPLY CHAIN ==========
  {
    id: 20,
    category: "logistics",
    title: "Route Optimization & Fleet Management",
    href: "/services?category=logistics",
    tagline: "Deliver faster, cheaper, greener",
    description: "Optimize delivery routes in real‑time to reduce fuel, time, and carbon footprint.",
    detailedDescription: [
      "Logistics companies face rising fuel costs, driver shortages, and demanding customer expectations. Our Route Optimization & Fleet Management service uses real‑time data and AI to plan the most efficient routes for every vehicle. We consider traffic congestion, road conditions, delivery time windows, and even vehicle capacity to minimise driving time and fuel consumption.",
      "Our system dynamically adjusts routes as new data comes in – if a delivery is cancelled or a road is closed, we reroute the driver instantly. We also provide driver‑friendly mobile apps with turn‑by‑turn navigation. Beyond routing, we help you monitor vehicle health, driver behaviour, and compliance with hours‑of‑service regulations.",
      "Fleet operators using our solution have cut fuel costs by up to 18%, improved on‑time delivery rates to 98%, and reduced CO₂ emissions significantly. Drivers appreciate the clarity and reduced stress, leading to better retention and safety."
    ],
    features: ["Dynamic Routing", "Telematics Integration", "Driver Safety Analytics", "Compliance Monitoring"],
    metrics: { fuel: "-18%", on_time: "98%", emissions: "-22%" },
    liveLoad: 58,
    demand: "Medium",
    items: ["Route Planning", "Fleet Health", "Driver Performance", "Carbon Reporting"]
  },
  {
    id: 21,
    category: "logistics",
    title: "Warehouse Automation & Inventory Optimization",
    href: "/services?category=logistics",
    tagline: "Smarter storage, faster fulfillment",
    description: "Optimize warehouse layouts, picking paths, and inventory placement with AI.",
    detailedDescription: [
      "Warehousing is a major cost centre, and even small inefficiencies add up quickly. Our Warehouse Automation & Inventory Optimization service uses AI to redesign your physical and logical warehouse. We analyse order patterns, product velocity, and seasonal demand to recommend optimal storage locations and picking routes.",
      "We also implement real‑time inventory tracking and predictive replenishment – so you never run out of high‑demand items, and slow‑movers don't crowd your prime space. Our solution integrates with your WMS and can even guide autonomous robots or pick‑to‑light systems for maximum efficiency.",
      "Warehouses using our approach have reduced picking time by up to 40%, increased throughput by 25%, and lowered inventory carrying costs by 15%. Your team works smarter, not harder, and customers get their orders faster."
    ],
    features: ["Slotting Optimization", "Picking Path Optimization", "Real‑time Inventory", "Demand‑Based Replenishment"],
    metrics: { picking: "-40%", throughput: "+25%", cost: "-15%" },
    liveLoad: 49,
    demand: "Medium",
    items: ["Layout Design", "Picking Algorithms", "Inventory Tuning", "Automation Readiness"]
  },
  {
    id: 22,
    category: "logistics",
    title: "Last‑Mile Delivery Analytics",
    href: "/services?category=logistics",
    tagline: "Perfect the final mile",
    description: "Optimise the most expensive part of delivery with predictive analytics.",
    detailedDescription: [
      "Last‑mile delivery accounts for up to 40% of total logistics costs. Our Last‑Mile Delivery Analytics helps you cut those costs while improving customer satisfaction. We analyse historical delivery data, traffic patterns, and customer preferences (e.g., preferred time windows) to optimise delivery sequencing and scheduling.",
      "We also incorporate real‑time signals – weather, road closures, and driver availability – to adjust plans on the fly. Our system provides customers with accurate ETAs and proactive notifications, reducing missed deliveries and repeat attempts. We also help you evaluate different delivery models (drones, lockers, crowdsourced) with simulation.",
      "Companies using our solution have reduced last‑mile costs by 20% and improved first‑time delivery success rates to 97%. Customers appreciate the reliability, leading to higher NPS and repeat business."
    ],
    features: ["Delivery Sequencing", "Dynamic Scheduling", "Customer Communication", "Model Simulation"],
    metrics: { cost: "-20%", success: "97%", nps: "+15" },
    liveLoad: 52,
    demand: "Medium",
    items: ["Route Sequencing", "Time‑slot Optimization", "Real‑time Alerts", "Performance Dashboards"]
  },

  // ========== ENERGY & UTILITIES ==========
  {
    id: 23,
    category: "energy",
    title: "Energy Consumption Forecasting",
    href: "/services?category=energy",
    tagline: "Predict usage, optimize supply",
    description: "Forecast energy demand with high accuracy to balance supply, reduce costs, and improve grid stability.",
    detailedDescription: [
      "Energy markets are volatile, and demand can swing unexpectedly. Our Energy Consumption Forecasting service helps you predict usage patterns days and weeks ahead with remarkable accuracy. We combine historical consumption data, weather forecasts, economic indicators, and even event calendars to build robust predictive models.",
      "For utilities, this means better load balancing, fewer power outages, and smarter bidding in wholesale markets. For large enterprises, it enables strategic energy purchasing and demand‑response participation – saving money and reducing carbon footprint. We provide both short‑term (hourly) and long‑term (seasonal) forecasts.",
      "Our clients have reduced forecasting errors by over 30%, resulting in substantial cost savings and improved reliability. We also help you report on sustainability metrics, enhancing your ESG profile."
    ],
    features: ["Load Forecasting", "Weather Integration", "Market Price Prediction", "Demand Response"],
    metrics: { accuracy: "97%", cost_savings: "+15%", emissions: "-10%" },
    liveLoad: 52,
    demand: "Medium",
    items: ["Consumption Trends", "Peak Alerts", "Renewable Integration", "Reporting Dashboards"]
  },
  {
    id: 24,
    category: "energy",
    title: "Renewable Energy Optimization",
    href: "/services?category=energy",
    tagline: "Maximize renewable output",
    description: "Optimize the performance of solar, wind, and other renewable assets with predictive analytics.",
    detailedDescription: [
      "Renewables are the future, but their intermittent nature poses challenges. Our Renewable Energy Optimization service helps you squeeze maximum output from your solar, wind, or hydro assets. We ingest weather forecasts, historical generation data, and equipment health metrics to predict generation with high precision.",
      "Our AI then recommends optimal operating parameters and maintenance schedules to minimise downtime and maximise yield. For grid operators, we provide insights to integrate renewables smoothly, reducing curtailment and reliance on backup fossil fuels. We also forecast market prices so you can sell energy at the best times.",
      "Renewable producers using our solution have increased annual generation by 8‑12% and reduced maintenance costs by 20%. You accelerate your return on investment and contribute to a cleaner grid."
    ],
    features: ["Generation Forecasting", "Performance Monitoring", "Curtailment Reduction", "Revenue Optimization"],
    metrics: { yield: "+10%", maintenance: "-20%", roi: "+25%" },
    liveLoad: 43,
    demand: "Low",
    items: ["Solar/PV Analytics", "Wind Farm Optimization", "Hydro Scheduling", "Grid Integration"]
  },
  {
    id: 25,
    category: "energy",
    title: "Grid Resilience & Outage Prediction",
    href: "/services?category=energy",
    tagline: "Keep the lights on",
    description: "Predict and prevent power outages with AI‑driven grid monitoring.",
    detailedDescription: [
      "Every minute of outage costs utilities and customers millions. Our Grid Resilience service analyses data from smart meters, weather sensors, and equipment health to predict outages before they occur. We identify vulnerable segments of the grid – aging transformers, overloaded lines, or areas prone to storms – and recommend preventative actions.",
      "When an outage does happen, our system helps you pinpoint the root cause and estimate restoration time faster. We also simulate the cascading effects of failures, so you can design more resilient networks. Our dashboards give operators a clear view of grid health in real‑time.",
      "Utilities using our solution have reduced outage duration by 30% and avoided 40% of potential failures. You improve customer satisfaction and reduce regulatory penalties."
    ],
    features: ["Anomaly Detection", "Predictive Alerts", "Root Cause Analysis", "Resilience Planning"],
    metrics: { outage_duration: "-30%", prevention: "+40%", reliability: "99.99%" },
    liveLoad: 41,
    demand: "Low",
    items: ["Grid Monitoring", "Failure Prediction", "Restoration Planning", "Weather Impact"]
  },

  // ========== REAL ESTATE ==========
  {
    id: 26,
    category: "realestate",
    title: "Property Valuation & Investment Analytics",
    href: "/services?category=realestate",
    tagline: "Know what a property is truly worth",
    description: "Use AI to value properties, assess investment opportunities, and mitigate risk.",
    detailedDescription: [
      "Real estate investment involves billions of dollars, and decisions often rely on outdated comparables and intuition. Our Property Valuation & Investment Analytics service brings data science to the table. We integrate public records, market data, demographic trends, and even satellite imagery to build accurate valuation models.",
      "Our models account for local economic conditions, school quality, crime rates, transit access, and future development plans – giving you a 360‑degree view of a property's potential. For developers, we provide scenario analysis to assess project viability under different market conditions, interest rates, and construction costs.",
      "Investors using our platform have improved their return on investment by up to 20% and reduced risk exposure by identifying overvalued assets early. We help you build a resilient, high‑performing portfolio."
    ],
    features: ["Automated Valuation", "Market Forecasting", "Scenario Analysis", "Risk Assessment"],
    metrics: { roi: "+20%", accuracy: "96%", risk: "-30%" },
    liveLoad: 41,
    demand: "Low",
    items: ["Property Scoring", "Investment Insights", "Portfolio Analytics", "Development Planning"]
  },
  {
    id: 27,
    category: "realestate",
    title: "Smart Building Management",
    href: "/services?category=realestate",
    tagline: "Efficient, sustainable, intelligent buildings",
    description: "Optimize energy use, maintenance, and occupant comfort in commercial and residential buildings.",
    detailedDescription: [
      "Buildings account for a large share of global energy consumption and greenhouse gas emissions. Our Smart Building Management service transforms your properties into intelligent, responsive assets. We deploy sensors and integrate with your BMS to collect data on temperature, occupancy, lighting, and equipment performance.",
      "Our AI models learn the building's behaviour patterns and optimise HVAC, lighting, and other systems in real‑time – balancing comfort with energy savings. We also predict equipment failures, schedule maintenance proactively, and send automated alerts. Tenants enjoy a comfortable, healthy environment, and you reduce operational costs.",
      "Commercial buildings using our solution have cut energy consumption by 15‑25%, reduced maintenance expenses by 18%, and achieved higher tenant satisfaction scores. You also enhance your ESG profile and attract eco‑conscious tenants."
    ],
    features: ["Energy Optimization", "Predictive Maintenance", "Occupancy Analytics", "Tenant Experience"],
    metrics: { energy: "-20%", cost: "-18%", satisfaction: "4.6/5" },
    liveLoad: 39,
    demand: "Low",
    items: ["Building Performance", "Alerts & Notifications", "Utility Management", "Tenant Portals"]
  },
  {
    id: 28,
    category: "realestate",
    title: "Real Estate Market Intelligence",
    href: "/services?category=realestate",
    tagline: "Spot trends before they hit the market",
    description: "Analyse market dynamics to identify emerging hotspots and investment opportunities.",
    detailedDescription: [
      "The real estate market moves fast, and those who spot trends early win. Our Market Intelligence service aggregates data from multiple sources – listings, transactions, demographic shifts, infrastructure projects, and even social sentiment – to identify emerging trends in specific neighborhoods or property types.",
      "We build leading indicators that predict price appreciation, rental yield, and demand. Our dashboards allow you to filter by location, property type, and investment horizon, and we provide alerts when a new opportunity arises. We also benchmark your portfolio against market performance.",
      "Investors and developers using our intelligence have outperformed the market by an average of 8% annually. You make decisions with foresight, not hindsight."
    ],
    features: ["Trend Forecasting", "Heatmaps", "Sentiment Analysis", "Portfolio Benchmarking"],
    metrics: { outperformance: "+8%", accuracy: "91%", alerts: "50+ per month" },
    liveLoad: 35,
    demand: "Low",
    items: ["Market Heatmaps", "Trend Reports", "Investment Alerts", "Portfolio Tracking"]
  },

  // ========== GOVERNMENT & PUBLIC SECTOR ==========
  {
    id: 29,
    category: "government",
    title: "Citizen Service Analytics",
    href: "/services?category=government",
    tagline: "Deliver responsive, efficient public services",
    description: "Analyse citizen interactions to improve service delivery, reduce wait times, and increase satisfaction.",
    detailedDescription: [
      "Citizens expect government services to be as convenient as the private sector, yet many agencies struggle with backlogs and low satisfaction. Our Citizen Service Analytics service gives you a comprehensive view of all citizen touchpoints – from phone calls and emails to in‑person visits and online forms.",
      "We apply natural language processing to categorise and analyse service requests, identifying common issues and delays. Our predictive models forecast demand for services (like permit applications or health benefits) so you can staff appropriately. We also provide real‑time dashboards that let managers track performance and respond proactively.",
      "Government clients have reduced average resolution times by 30%, improved citizen satisfaction scores by 25%, and increased operational efficiency by 20%. You build trust and demonstrate accountability with clear, evidence‑based reporting."
    ],
    features: ["Request Categorization", "Demand Forecasting", "Performance Dashboards", "Satisfaction Tracking"],
    metrics: { resolution: "-30%", satisfaction: "+25%", efficiency: "+20%" },
    liveLoad: 46,
    demand: "Medium",
    items: ["Service Request Analysis", "Call Center Analytics", "Online Portal Optimization", "Feedback Mining"]
  },
  {
    id: 30,
    category: "government",
    title: "Public Safety & Crime Analytics",
    href: "/services?category=government",
    tagline: "Make communities safer with data",
    description: "Use predictive analytics to allocate police resources, prevent crime, and improve emergency response.",
    detailedDescription: [
      "Public safety agencies face limited resources and increasing expectations. Our Public Safety & Crime Analytics service helps you deploy officers and emergency services more effectively. We combine historical incident data with demographic, economic, and environmental factors – even weather and public events – to create accurate risk maps.",
      "Our predictive models forecast crime hotspots and times, enabling proactive patrolling and community engagement. For emergency response, we optimise dispatch routes and predict call volumes to ensure adequate coverage. We also provide dashboards that give commanders a real‑time operational picture.",
      "Agencies using our solution have seen crime reductions of 8‑15% in targeted areas, improved response times by 20%, and better community trust through transparent data sharing. You save lives and resources."
    ],
    features: ["Crime Forecasting", "Resource Allocation", "Emergency Response Optimization", "Community Dashboards"],
    metrics: { crime: "-12%", response: "+20%", trust: "+18%" },
    liveLoad: 47,
    demand: "Medium",
    items: ["Risk Mapping", "Patrol Optimization", "Dispatch Analytics", "Community Reporting"]
  },
  {
    id: 31,
    category: "government",
    title: "Social Welfare & Benefit Optimization",
    href: "/services?category=government",
    tagline: "Deliver aid to those who need it most",
    description: "Use data to improve the targeting and efficiency of social welfare programs.",
    detailedDescription: [
      "Social welfare programs are essential but often inefficient, with resources reaching the wrong recipients or being duplicated. Our Social Welfare Analytics helps governments design more effective programs. We analyse demographic data, income, and historical aid usage to predict demand and identify eligible populations.",
      "We also detect fraud and duplication, ensuring that funds go to the right people. Our models can simulate the impact of policy changes – like adjusting eligibility thresholds – so you can see outcomes before implementing them. We provide interactive dashboards for policymakers to monitor program performance.",
      "Governments using our solution have increased benefit uptake by 20%, reduced leakage by 15%, and improved programme ROI. You serve your citizens better and demonstrate fiscal responsibility."
    ],
    features: ["Eligibility Prediction", "Fraud Detection", "Policy Simulation", "Performance Monitoring"],
    metrics: { uptake: "+20%", leakage: "-15%", roi: "+30%" },
    liveLoad: 38,
    demand: "Low",
    items: ["Benefit Forecasting", "Risk Assessment", "Impact Analysis", "Program Dashboards"]
  },

  // ========== MEDIA & ENTERTAINMENT ==========
  {
    id: 32,
    category: "media",
    title: "Content Performance Analytics",
    href: "/services?category=media",
    tagline: "Create content that resonates",
    description: "Analyse audience engagement to guide content creation, distribution, and monetisation.",
    detailedDescription: [
      "Media companies produce vast amounts of content, but not all of it connects with audiences. Our Content Performance Analytics service gives you a data‑driven view of what works. We aggregate engagement metrics from platforms, social media, and even sentiment analysis to determine what makes content go viral – and what falls flat.",
      "Our models identify patterns in viewer behaviour, content attributes, and distribution channels, recommending optimal formats, lengths, and topics. We also forecast audience engagement for upcoming productions, helping you decide where to invest. For advertisers, we provide audience insights that enhance targeting and ROI.",
      "Media clients have increased viewer retention by 30%, improved ad revenue by 15%, and reduced content production waste by 20%. You create content that people actually want to watch."
    ],
    features: ["Engagement Analytics", "Content Attribution", "Audience Segmentation", "Monetization Optimization"],
    metrics: { retention: "+30%", ad_revenue: "+15%", waste: "-20%" },
    liveLoad: 53,
    demand: "Medium",
    items: ["Performance Scores", "Trend Analysis", "Competitive Intelligence", "Licensing Insights"]
  },
  {
    id: 33,
    category: "media",
    title: "Personalised Content Recommendations",
    href: "/services?category=media",
    tagline: "Keep audiences engaged",
    description: "Recommend content that keeps users watching, reading, or listening longer.",
    detailedDescription: [
      "In the attention economy, the battle is for users' time. Our Personalised Content Recommendations service helps you keep audiences glued to your platform. We analyse viewing history, search behaviour, and even real‑time engagement signals to suggest the next piece of content that each user is most likely to enjoy.",
      "Our algorithms go beyond collaborative filtering – we incorporate contextual factors like time of day, device, and even mood inferred from interaction patterns. We also support cold‑start scenarios for new users with smart onboarding. The result is a highly personalised experience that feels intuitive.",
      "Streaming services and publishers using our system have increased average watch/read time by 25%, reduced churn by 18%, and boosted subscription conversions by 12%. You build a loyal, engaged audience that keeps coming back."
    ],
    features: ["Recommendation Engine", "Real‑time Personalization", "Churn Prevention", "Usage Analytics"],
    metrics: { engagement: "+25%", churn: "-18%", conversions: "+12%" },
    liveLoad: 56,
    demand: "High",
    items: ["Content Suggestions", "Personalized Playlists", "User Journeys", "A/B Testing"]
  },
  {
    id: 34,
    category: "media",
    title: "Sentiment & Brand Reputation Analytics",
    href: "/services?category=media",
    tagline: "Know what the world thinks",
    description: "Monitor public sentiment towards your brand, shows, or talent in real‑time.",
    detailedDescription: [
      "In the age of social media, reputation can change overnight. Our Sentiment & Brand Reputation service uses advanced NLP to monitor conversations across news, social platforms, and forums. We track sentiment, mention volume, and key drivers – so you can react to positive or negative shifts instantly.",
      "We provide dashboards that highlight emerging issues, influencer sentiment, and competitive comparisons. For media companies, we also analyse sentiment around specific shows, characters, or talent, guiding marketing and PR strategies. We even predict the impact of events on future audience engagement.",
      "Media firms using our solution have improved their brand sentiment scores by 20% and reduced crisis response time by 60%. You protect your reputation and make smarter content and marketing decisions."
    ],
    features: ["Sentiment Tracking", "Influencer Identification", "Crisis Detection", "Competitive Benchmarking"],
    metrics: { sentiment: "+20%", response_time: "-60%", coverage: "100,000+ sources" },
    liveLoad: 45,
    demand: "Medium",
    items: ["Social Listening", "Sentiment Trends", "Alerting", "Reputation Score"]
  },

  // ========== TELECOMMUNICATIONS ==========
  {
    id: 35,
    category: "telecom",
    title: "Network Performance & Optimization",
    href: "/services?category=telecom",
    tagline: "Reliable, fast, always‑on networks",
    description: "Monitor and optimise network performance to reduce downtime and improve customer experience.",
    detailedDescription: [
      "Telecom networks are the backbone of modern life, and any downtime or slowdown is unacceptable. Our Network Performance & Optimization service gives you a real‑time view of your entire infrastructure – from cell towers to fibre backhaul. We ingest performance data, alarms, and traffic logs to identify anomalies before they affect users.",
      "Our AI models predict equipment failures and traffic congestion, enabling proactive maintenance and capacity planning. We also optimise routing to balance load and prioritise critical traffic, ensuring that your customers experience low latency and high reliability. For 5G and IoT networks, we provide specialised analytics to handle massive device connectivity.",
      "Network operators using our solution have reduced major outages by 40%, improved customer complaint resolution by 35%, and achieved 99.99% availability on key services. You build a reputation for reliability that retains customers and attracts new ones."
    ],
    features: ["Anomaly Detection", "Traffic Engineering", "Predictive Maintenance", "Customer Experience Monitoring"],
    metrics: { outages: "-40%", resolution: "+35%", availability: "99.99%" },
    liveLoad: 60,
    demand: "High",
    items: ["Network Health", "Capacity Planning", "Root Cause Analysis", "Service Dashboards"]
  },
  {
    id: 36,
    category: "telecom",
    title: "Customer Churn & Loyalty for Telecom",
    href: "/services?category=telecom",
    tagline: "Keep subscribers happy",
    description: "Predict churn and implement retention strategies that reduce subscriber turnover.",
    detailedDescription: [
      "Telecom subscribers are notoriously fickle, with high churn rates costing operators billions. Our Customer Churn & Loyalty service is custom‑built for the telecom industry. We analyse call detail records, data usage, plan changes, support tickets, and even social media sentiment to identify subscribers who are likely to leave.",
      "Our models provide a churn probability score for every subscriber, along with key drivers – whether it's price sensitivity, poor network experience, or lack of engagement. We then recommend personalised offers, service upgrades, or outreach campaigns to retain high‑value customers. We also track the effectiveness of each intervention.",
      "Telecom clients using our solution have reduced churn by up to 30% in their postpaid segments and increased customer lifetime value by 20%. You stop the revenue leak and grow your subscriber base profitably."
    ],
    features: ["Churn Prediction", "Loyalty Scoring", "Offer Optimization", "Retention Campaign Management"],
    metrics: { churn: "-30%", clv: "+20%", nps: "+15" },
    liveLoad: 66,
    demand: "High",
    items: ["Churn Risk", "Usage Patterns", "Sentiment Analysis", "Retention Playbooks"]
  },
  {
    id: 37,
    category: "telecom",
    title: "5G & IoT Traffic Analytics",
    href: "/services?category=telecom",
    tagline: "Unlock the potential of 5G and IoT",
    description: "Analyse the massive data streams from 5G and IoT devices to drive new revenue streams.",
    detailedDescription: [
      "5G and IoT generate unprecedented volumes of data, but many operators struggle to monetise it. Our 5G & IoT Traffic Analytics helps you extract value from this data. We analyse device behaviour, location, and application usage to understand how your network is being used and where new opportunities lie.",
      "Our models identify patterns that can be sold as insights to enterprises – for example, footfall heatmaps, asset tracking optimisation, or predictive maintenance for industrial IoT. We also help you optimise network slicing to guarantee performance for different use cases, from autonomous vehicles to smart cities.",
      "Operators using our solution have created new B2B revenue streams worth over $5M annually and improved network efficiency by 20%. You become a data‑powered service provider, not just a connectivity pipe."
    ],
    features: ["Data Monetization", "Network Slicing", "Use Case Analytics", "B2B Insights"],
    metrics: { revenue: "+$5M", efficiency: "+20%", customers: "+30%" },
    liveLoad: 44,
    demand: "Medium",
    items: ["Device Analytics", "Application Mapping", "Slicing Optimization", "Enterprise Solutions"]
  },

  // ========== AGRICULTURE & AGTECH ==========
  {
    id: 38,
    category: "agriculture",
    title: "Precision Agriculture & Yield Prediction",
    href: "/services?category=agriculture",
    tagline: "Grow more with less",
    description: "Optimise planting, irrigation, and harvesting with satellite and sensor data.",
    detailedDescription: [
      "Agriculture faces pressure to feed a growing population while conserving resources. Our Precision Agriculture service uses satellite imagery, drone data, and ground sensors to monitor crop health, soil moisture, and weather conditions at granular levels. We provide actionable insights – such as variable‑rate fertilisation, targeted irrigation, and pest detection – that increase yield while reducing inputs.",
      "Our yield prediction models combine historical data with current conditions to forecast harvest volume and quality weeks in advance. This helps farmers plan logistics, negotiate with buyers, and manage risk. We also provide a mobile app that delivers alerts and recommendations directly to the farm manager.",
      "Farmers using our solution have increased yields by 15‑20%, reduced water usage by 25%, and cut fertiliser costs by 18%. You produce more food with a smaller environmental footprint."
    ],
    features: ["Satellite Analytics", "IoT Sensors", "Yield Forecasting", "Variable‑Rate Application"],
    metrics: { yield: "+18%", water: "-25%", costs: "-18%" },
    liveLoad: 40,
    demand: "Low",
    items: ["Crop Health", "Irrigation Optimization", "Pest Alerts", "Harvest Planning"]
  },
  {
    id: 39,
    category: "agriculture",
    title: "Agricultural Supply Chain Traceability",
    href: "/services?category=agriculture",
    tagline: "From farm to fork, transparent",
    description: "Track produce from source to store to ensure quality, safety, and sustainability.",
    detailedDescription: [
      "Consumers and regulators demand transparency in food supply chains. Our Traceability service uses blockchain‑like ledgers combined with IoT sensors to record every step of the journey – from planting to processing to retail. We capture data on temperature, humidity, handling, and storage conditions.",
      "We provide a public‑facing portal where consumers can scan a QR code to see the product's origin and journey. For producers, we offer dashboards to monitor quality and compliance. In case of contamination or recall, we can pinpoint the affected batches within minutes, minimising waste and liability.",
      "Agribusinesses using our solution have reduced recall costs by 60%, improved brand trust, and gained premium pricing for traceable products. You build a reputation for quality and safety."
    ],
    features: ["Blockchain‑based Ledger", "IoT Integration", "Consumer Transparency", "Recall Management"],
    metrics: { recall_cost: "-60%", trust: "+30%", premium: "+10%" },
    liveLoad: 34,
    demand: "Low",
    items: ["Journey Mapping", "Quality Monitoring", "Consumer Portal", "Compliance Reporting"]
  },

  // ========== INSURANCE ==========
  {
    id: 40,
    category: "insurance",
    title: "Telematics & Usage‑Based Insurance",
    href: "/services?category=insurance",
    tagline: "Pay for how you drive",
    description: "Use telematics to price premiums based on actual driving behaviour, reducing risk.",
    detailedDescription: [
      "Traditional insurance pricing relies on broad demographics, often penalising safe drivers. Our Telematics service collects data from vehicle sensors and mobile apps to evaluate driving behaviour – speed, braking, cornering, and even phone usage. We build a risk profile that reflects true individual risk.",
      "We help insurers design usage‑based insurance (UBI) products that reward safe drivers with lower premiums. Our analytics also help you detect fraud and improve claims handling. For fleet operators, we provide driver coaching to reduce accidents and insurance costs.",
      "Insurers using our solution have improved loss ratios by 15%, increased customer engagement, and attracted a younger, tech‑savvy demographic. You win with fairness and efficiency."
    ],
    features: ["Telematics Integration", "Risk Scoring", "UBI Product Design", "Fleet Monitoring"],
    metrics: { loss_ratio: "-15%", engagement: "+40%", fraud: "-25%" },
    liveLoad: 48,
    demand: "Medium",
    items: ["Driver Scoring", "Behaviour Insights", "Policy Customisation", "Claims Analytics"]
  },
  {
    id: 41,
    category: "insurance",
    title: "Claims Fraud Detection",
    href: "/services?category=insurance",
    tagline: "Spot fraud, save money",
    description: "Identify suspicious claims with AI and prevent fraudulent payouts.",
    detailedDescription: [
      "Insurance fraud is a multi‑billion dollar problem. Our Claims Fraud Detection service uses machine learning to flag suspicious claims in real‑time. We analyse claim history, claimant behaviour, network connections, and external data to assign a fraud score to each claim.",
      "Our models are trained on millions of legitimate and fraudulent claims, so they learn subtle patterns that humans miss. We also provide explainable AI, so your investigators understand why a claim was flagged, speeding up manual review. We continuously update the model as new fraud tactics emerge.",
      "Insurers using our system have reduced fraud losses by 40% and improved investigation productivity by 50%. You protect your bottom line and keep premiums fair for honest customers."
    ],
    features: ["Fraud Scoring", "Network Analysis", "Explainable AI", "Case Management"],
    metrics: { fraud: "-40%", productivity: "+50%", false_pos: "1.2%" },
    liveLoad: 55,
    demand: "Medium",
    items: ["Claim Scoring", "Investigation Tools", "Dashboard", "Reporting"]
  },

  // ========== LEGAL & COMPLIANCE ==========
  {
    id: 42,
    category: "legal",
    title: "Contract Analytics & Risk Assessment",
    href: "/services?category=legal",
    tagline: "Know your contracts inside out",
    description: "Use NLP to analyse contracts, extract obligations, and assess risks.",
    detailedDescription: [
      "Legal teams are drowning in contracts – leases, vendor agreements, NDAs – each with hidden risks and opportunities. Our Contract Analytics service uses natural language processing to extract key clauses, obligations, and deadlines from thousands of documents in seconds.",
      "We highlight unusual clauses, missing terms, or misaligned obligations. Our risk scoring flags contracts that pose financial, regulatory, or operational risk. We also provide a searchable repository with semantic search, so you can find any clause across all contracts instantly.",
      "Legal departments using our solution have reduced contract review time by 70%, identified millions in potential savings, and improved compliance. You focus on high‑value strategy, not document drudgery."
    ],
    features: ["NLP Extraction", "Risk Scoring", "Obligation Tracking", "Semantic Search"],
    metrics: { review_time: "-70%", savings: "$2M+", compliance: "100%" },
    liveLoad: 37,
    demand: "Low",
    items: ["Clause Extraction", "Risk Dashboard", "Deadline Alerts", "Repository"]
  },

  // ========== EDUCATION (Last) ==========
  {
    id: 43,
    category: "education",
    title: "Student Performance Analytics",
    href: "/services?category=education",
    tagline: "Predict and improve student outcomes",
    description: "Identify at‑risk students early and personalise learning paths with AI‑driven insights.",
    detailedDescription: [
      "Every student learns differently, and traditional one‑size‑fits‑all teaching often leaves some behind. Our Student Performance Analytics service uses machine learning to identify patterns in student data – from grades and attendance to participation and even behavioural cues. We create a dynamic risk profile for each student, so you can intervene early and meaningfully.",
      "We integrate with your existing systems (SIS, LMS, etc.) to build a unified view of each learner. Our dashboards highlight which students are thriving and which are struggling, and we recommend specific interventions like tutoring, schedule adjustments, or mental health support. This isn't just about grades – we help you nurture the whole student.",
      "The result: higher graduation rates, improved test scores, and a more engaged student body. Institutions using our solution have seen retention improve by over 25% within a single academic year. We also help you demonstrate impact to stakeholders with clear, visual reports."
    ],
    features: ["Predictive Modeling", "Engagement Tracking", "Early Warning Systems", "Personalised Learning"],
    metrics: { accuracy: "94%", retention: "+25%", students: "500K+" },
    liveLoad: 62,
    demand: "High",
    items: ["Risk Prediction", "Intervention Recommendations", "Engagement Dashboards", "Performance Trends"]
  },
  {
    id: 44,
    category: "education",
    title: "Staff Behavior & Retention",
    href: "/services?category=education",
    tagline: "Empower your educators",
    description: "Understand staff satisfaction, predict turnover, and build a thriving school culture.",
    detailedDescription: [
      "Teacher burnout and turnover are at crisis levels in many regions. Our Staff Behavior & Retention service helps you understand what drives your educators – and what pushes them away. We analyse survey responses, performance reviews, attendance, and even anonymised communication patterns to gauge morale and predict attrition.",
      "Our AI models identify early warning signs – like declining engagement or increased absenteeism – and recommend targeted support, such as professional development, workload redistribution, or wellness initiatives. We also help you benchmark against regional averages to see how you stack up.",
      "By investing in your staff, you reduce turnover costs, maintain instructional quality, and create a positive school culture. Clients have reduced teacher churn by up to 40% in two years, saving hundreds of thousands in recruitment and training expenses."
    ],
    features: ["Sentiment Analysis", "Retention Modeling", "Workload Optimization", "Feedback Analytics"],
    metrics: { retention: "+30%", satisfaction: "4.7/5", turnover: "-40%" },
    liveLoad: 48,
    demand: "Medium",
    items: ["Staff Satisfaction Surveys", "Burnout Prediction", "Professional Development Plans", "Workload Balancing"]
  },
  {
    id: 45,
    category: "education",
    title: "Curriculum Effectiveness & Learning Analytics",
    href: "/services?category=education",
    tagline: "Teach what works",
    description: "Analyse which teaching methods and curricula deliver the best outcomes.",
    detailedDescription: [
      "Not all curricula are equal, and even within a school, some methods work better than others. Our Learning Analytics service evaluates the effectiveness of different teaching approaches, materials, and assessments. We correlate student performance with instructional variables to identify what drives success.",
      "We provide reports that compare cohorts, teachers, and schools, revealing best practices that can be scaled. Our models also predict how changes to the curriculum might impact student outcomes, helping you make evidence‑based decisions. We integrate with digital learning tools to capture granular interaction data.",
      "Educational institutions using our analytics have improved standardised test scores by 12% and reduced achievement gaps. You ensure that every student receives the best possible education."
    ],
    features: ["Effectiveness Measurement", "A/B Testing", "Predictive Modelling", "Benchmarking"],
    metrics: { scores: "+12%", gap: "-20%", satisfaction: "4.5/5" },
    liveLoad: 40,
    demand: "Medium",
    items: ["Curriculum Evaluation", "Teacher Effectiveness", "Intervention Analysis", "Report Generation"]
  },
  {
    id: 46,
    category: "education",
    title: "Thesis Data Analysis (Chapter 4)",
    href: "/services?category=education",
    tagline: "Turn your data into a compelling thesis",
    description: "Expert guidance for your thesis Chapter 4 – from statistical analysis to interpretation and writing.",
    detailedDescription: [
      "Writing Chapter 4 of your thesis – the data analysis chapter – is often the most daunting part. Our service provides one‑on‑one guidance to help you navigate every step, from choosing the right statistical tests to presenting your findings with clarity and confidence.",
      "We work with you to understand your research questions and data structure. We then recommend appropriate analytical techniques – whether it's regression, ANOVA, factor analysis, or qualitative coding. We help you run the analyses using SPSS, R, Python, or NVivo, and we explain the outputs in plain language.",
      "Beyond number crunching, we assist with interpreting the results in the context of your research objectives and literature review. We also guide you in structuring the chapter, writing clear narratives, creating professional tables and figures, and ensuring your arguments flow logically.",
      "Our support extends to checking for common pitfalls – missing data, assumption violations, or over‑interpretation – so your chapter is robust and academically sound. Students we've helped consistently report higher grades and reduced stress. Let us help you turn data into a compelling story that impresses your committee."
    ],
    features: ["Statistical Consulting", "Data Visualization", "SPSS / R / Python", "Writing Assistance"],
    metrics: { success_rate: "98%", students_helped: "2,000+", score_improvement: "+25%" },
    liveLoad: 45,
    demand: "Medium",
    items: ["Test Selection", "Analysis Execution", "Interpretation", "Writing & Formatting"]
  },
];

// ─── Categories ──────────────────────────────────────────────────
const categories = [
  { id: "all", label: "All Services", icon: <Sparkles size={16} /> },
  { id: "business", label: "Business", icon: <TrendingUp size={16} /> },
  { id: "finance", label: "Finance", icon: <Shield size={16} /> },
  { id: "healthcare", label: "Healthcare", icon: <Heart size={16} /> },
  { id: "retail", label: "Retail", icon: <Target size={16} /> },
  { id: "manufacturing", label: "Manufacturing", icon: <Factory size={16} /> },
  { id: "logistics", label: "Logistics", icon: <Truck size={16} /> },
  { id: "energy", label: "Energy", icon: <ZapIcon size={16} /> },
  { id: "realestate", label: "Real Estate", icon: <Home size={16} /> },
  { id: "government", label: "Government", icon: <Building size={16} /> },
  { id: "media", label: "Media", icon: <Film size={16} /> },
  { id: "telecom", label: "Telecom", icon: <Wifi size={16} /> },
  { id: "agriculture", label: "Agriculture", icon: <Trees size={16} /> },
  { id: "insurance", label: "Insurance", icon: <Scale size={16} /> },
  { id: "legal", label: "Legal", icon: <Gavel size={16} /> },
  { id: "education", label: "Education", icon: <BookOpen size={16} /> },
];

const CATEGORY_BREAKDOWN = [
  { label: "Business", key: "business", color: "#fdb840" },
  { label: "Finance", key: "finance", color: "#00d4ff" },
  { label: "Healthcare", key: "healthcare", color: "#a259ff" },
  { label: "Retail", key: "retail", color: "#ff6b6b" },
  { label: "Manufacturing", key: "manufacturing", color: "#4fc3f7" },
  { label: "Logistics", key: "logistics", color: "#00e676" },
];

// ─── Helpers ──────────────────────────────────────────────────────
const generateParticles = (count) =>
  Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.2 + 0.05,
  }));

// ─── Variants ─────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const REPLAY_VIEWPORT = { once: false, amount: 0.15 };

// ─── Component ─────────────────────────────────────────────────────
const ServicesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFromUrl = queryParams.get("category") || "all";

  const validCategories = categories.map(c => c.id);
  const initialCategory = validCategories.includes(categoryFromUrl) ? categoryFromUrl : "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const cardsSectionRef = useRef(null);
  const filterSectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");
  const [chatLog, setChatLog] = useState([
    { from: "bot", text: "Hi! 👋 How can Scape Data Solutions help your business today?" },
  ]);
  const [showTop, setShowTop] = useState(false);
  const [liveData, setLiveData] = useState([55, 68, 42, 81, 73, 90, 77, 63, 88, 71]);
  const [metricTick, setMetricTick] = useState(0);
  const [particles] = useState(generateParticles(50));
  const [serviceLoads, setServiceLoads] = useState(
    Object.fromEntries(SERVICE_CARDS.map((c) => [c.id, c.liveLoad]))
  );
  const [counters, setCounters] = useState({ clients: 0, projects: 0, satisfaction: 0 });
  const [breakdownPct, setBreakdownPct] = useState(
    Object.fromEntries(CATEGORY_BREAKDOWN.map((c) => [c.key, 0]))
  );

  const introRef = useRef(null);
  const isIntroInView = useInView(introRef, { once: false, amount: 0.2 });
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.4 });

  // Update active category from URL
  useEffect(() => {
    const cat = queryParams.get("category") || "all";
    if (validCategories.includes(cat)) {
      setActiveCategory(cat);
      if (cat !== "all" && filterSectionRef.current) {
        setTimeout(() => {
          const top =
            filterSectionRef.current.getBoundingClientRect().top +
            window.pageYOffset -
            110;
          window.scrollTo({ top, behavior: "smooth" });
        }, 150);
      }
    }
  }, [location.search]);

  const filteredServices =
    activeCategory === "all"
      ? SERVICE_CARDS
      : SERVICE_CARDS.filter((s) => s.category === activeCategory);

  // Live load simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => [...prev.slice(1), Math.floor(Math.random() * 40 + 52)]);
      setMetricTick((t) => t + 1);
      setServiceLoads((prev) => {
        const next = { ...prev };
        SERVICE_CARDS.forEach((c) => {
          const drift = Math.floor(Math.random() * 9) - 4;
          next[c.id] = Math.max(15, Math.min(96, (prev[c.id] ?? c.liveLoad) + drift));
        });
        return next;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
      setShowTop(scrolled > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Counters animation
  useEffect(() => {
    if (!isStatsInView) return;
    const targets = { clients: 1200, projects: 3500, satisfaction: 99.5 };
    let step = 0;
    const steps = 70;
    const iv = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCounters({
        clients: targets.clients * ease,
        projects: targets.projects * ease,
        satisfaction: targets.satisfaction * ease,
      });
      if (step >= steps) clearInterval(iv);
    }, 1400 / steps);
    return () => clearInterval(iv);
  }, [isStatsInView]);

  // Breakdown animation
  useEffect(() => {
    if (!isIntroInView) return;
    const counts = Object.fromEntries(CATEGORY_BREAKDOWN.map((c) => [c.key, 0]));
    SERVICE_CARDS.forEach((s) => {
      if (counts[s.category] !== undefined) {
        counts[s.category] = (counts[s.category] || 0) + 1;
      }
    });
    const max = Math.max(...Object.values(counts));
    const targets = Object.fromEntries(
      CATEGORY_BREAKDOWN.map((c) => [c.key, Math.round((counts[c.key] / max) * 100)])
    );
    let step = 0;
    const steps = 50;
    const iv = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setBreakdownPct(
        Object.fromEntries(CATEGORY_BREAKDOWN.map((c) => [c.key, Math.round(targets[c.key] * ease)]))
      );
      if (step >= steps) clearInterval(iv);
    }, 900 / steps);
    return () => clearInterval(iv);
  }, [isIntroInView]);

  const sendChat = () => {
    if (!chatMsg.trim()) return;
    setChatLog((prev) => [...prev, { from: "user", text: chatMsg }]);
    setChatMsg("");
    setTimeout(() => {
      setChatLog((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for reaching out! Our team will respond within 1 hour. For urgent queries, call +1 (312) 212-3396.",
        },
      ]);
    }, 900);
  };

  const maxLive = Math.max(...liveData);

  return (
    <div className={homeStyles.page}>
      <SEO
        title="Data Analytics & AI Services | 46 Industry Solutions — Scape Data Solutions"
        description="Explore 46 expert data analytics and AI services across business, finance, healthcare, retail, manufacturing, logistics, energy, real estate, government, media, telecom, agriculture, insurance, legal and education. 1200+ clients, 98% satisfaction rate, proven ROI across every industry."
        path="/services"
      />
      {/* scroll progress */}
      <div className={homeStyles.progressTrack}>
        <motion.div
          className={homeStyles.progressBar}
          style={{ width: `${scrollProgress}%` }}
          animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* particles */}
      <div className={styles.particlesContainer}>
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -25, 0],
              x: [0, 12, 0],
              opacity: [p.opacity, p.opacity * 2, p.opacity],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* floating widget */}
      <motion.div
        className={homeStyles.floatingWidget}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.6, type: "spring", stiffness: 200 }}
      >
        <div className={homeStyles.fwHeader}>
          <Activity size={11} /> <span>Live Metrics</span>
          <motion.span
            className={homeStyles.livePulse}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
        <div className={homeStyles.fwBars}>
          {liveData.map((v, i) => (
            <motion.div
              key={i}
              className={homeStyles.fwBar}
              animate={{ height: `${(v / maxLive) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className={homeStyles.fwFoot}>
          <motion.span
            className={homeStyles.fwVal}
            key={liveData[liveData.length - 1]}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {liveData[liveData.length - 1]}K
          </motion.span>
          <span className={homeStyles.fwLbl}>events/sec</span>
        </div>
      </motion.div>

      {/* metrics ticker */}
      <div className={homeStyles.metricsTicker}>
        <div className={homeStyles.metricsTrack}>
          {[
            { label: "Events", val: "8.4M", unit: "/min", icon: <Activity size={13} />, color: "#fdb840", delta: "+2.3%" },
            { label: "Pipelines", val: "1,247", unit: "", icon: <GitBranch size={13} />, color: "#00d4ff", delta: "+18" },
            { label: "Query Time", val: "87", unit: "ms", icon: <Zap size={13} />, color: "#a259ff", delta: "-4ms" },
            { label: "Models", val: "342", unit: "", icon: <Brain size={13} />, color: "#00e676", delta: "+7" },
            { label: "Ingested", val: "14.2", unit: "TB", icon: <Database size={13} />, color: "#ff6b6b", delta: "+1.8TB" },
            { label: "Uptime", val: "99.99", unit: "%", icon: <Server size={13} />, color: "#fdb840", delta: "stable" },
          ]
            .concat([
              { label: "Events", val: "8.4M", unit: "/min", icon: <Activity size={13} />, color: "#fdb840", delta: "+2.3%" },
              { label: "Pipelines", val: "1,247", unit: "", icon: <GitBranch size={13} />, color: "#00d4ff", delta: "+18" },
              { label: "Query Time", val: "87", unit: "ms", icon: <Zap size={13} />, color: "#a259ff", delta: "-4ms" },
              { label: "Models", val: "342", unit: "", icon: <Brain size={13} />, color: "#00e676", delta: "+7" },
              { label: "Ingested", val: "14.2", unit: "TB", icon: <Database size={13} />, color: "#ff6b6b", delta: "+1.8TB" },
              { label: "Uptime", val: "99.99", unit: "%", icon: <Server size={13} />, color: "#fdb840", delta: "stable" },
            ])
            .map((m, i) => (
              <span key={i} className={homeStyles.metricsItem}>
                <span style={{ color: m.color }}>{m.icon}</span>
                <span className={homeStyles.metricsLabel}>{m.label}:</span>
                <motion.span
                  className={homeStyles.metricsVal}
                  key={metricTick}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {m.val}
                  {m.unit}
                </motion.span>
                <span
                  className={homeStyles.metricsDelta}
                  style={{ color: m.delta.startsWith("-") ? "#ff6b6b" : "#00e676" }}
                >
                  {m.delta}
                </span>
              </span>
            ))}
        </div>
      </div>

      <Navbar activeNav="services" />

      <main className={homeStyles.mainContent}>
        {/* HERO SECTION */}
        <section
          className={styles.heroSection}
          style={{
            backgroundImage: `url(/Images/site-images/services-banner.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
          }}
        >
          <div className={styles.heroGradient} style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
          <div className={styles.heroShapes}>
            <motion.div
              className={styles.shape1}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className={styles.shape2}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className={styles.shape3}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className={homeStyles.container}>
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <motion.div
                className={styles.heroBadge}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles size={14} /> <span>46 Industry‑Focused Services</span>
              </motion.div>
              <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                Services That <span className={styles.highlight}>Transform</span> Every Industry
              </motion.h1>
              <motion.p className={styles.heroSub} variants={fadeUp}>
                From Business to Education, we deliver AI and analytics solutions that solve real‑world problems – with measurable results.
              </motion.p>
              <motion.div
                className={styles.heroStats}
                variants={fadeUp}
                ref={statsRef}
                initial="hidden"
                animate={isStatsInView ? "visible" : "hidden"}
              >
                <motion.div
                  className={styles.statItem}
                  whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(253,184,64,0.2)" }}
                >
                  <div className={styles.statValue}>{Math.floor(counters.clients)}+</div>
                  <div className={styles.statLabel}>Clients</div>
                </motion.div>
                <motion.div
                  className={styles.statItem}
                  whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(253,184,64,0.2)" }}
                >
                  <div className={styles.statValue}>{Math.floor(counters.projects)}+</div>
                  <div className={styles.statLabel}>Projects</div>
                </motion.div>
                <motion.div
                  className={styles.statItem}
                  whileHover={{ y: -4, boxShadow: "0 8px 20px rgba(253,184,64,0.2)" }}
                >
                  <div className={styles.statValue}>{counters.satisfaction.toFixed(1)}%</div>
                  <div className={styles.statLabel}>Satisfaction</div>
                </motion.div>
              </motion.div>
              <motion.div className={styles.heroCta} variants={fadeUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className={styles.heroBtn}>
                    Get Started <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/portfolio" className={styles.heroBtnSecondary}>
                    See Our Work <Star size={15} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div className={styles.liveStatsPanel} variants={fadeUp}>
                {categories
                  .filter((c) => c.id !== "all")
                  .slice(0, 6)
                  .map((cat) => {
                    const catServices = SERVICE_CARDS.filter((s) => s.category === cat.id);
                    const avgLoad = catServices.length
                      ? Math.round(
                          catServices.reduce((sum, s) => sum + (serviceLoads[s.id] ?? s.liveLoad), 0) /
                            catServices.length
                        )
                      : 0;
                    return (
                      <motion.div
                        key={cat.id}
                        className={styles.liveStatCell}
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(253,184,64,0.1)" }}
                      >
                        <div className={styles.liveStatHead}>
                          {cat.icon} {cat.label}
                          <motion.span
                            className={homeStyles.livePulse}
                            animate={{ opacity: [1, 0.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        </div>
                        <motion.div
                          className={styles.liveStatVal}
                          key={avgLoad}
                          initial={{ opacity: 0.5 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {avgLoad}%
                        </motion.div>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <div className={styles.introSection} ref={introRef}>
          <div className={homeStyles.container}>
            <div className={styles.introGrid}>
              <motion.div
                className={styles.introText}
                initial={{ opacity: 0, x: -30 }}
                animate={isIntroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <p className={styles.introPara}>
                  <strong>Scape Data Solutions</strong> is a hub of technology and a distinction
                  among data firms that offer a full range of analytics and AI services that are
                  constantly being accentuated with new trends and technologies. We can pick up a
                  project from any phase and complete it on time and within budget using our highly
                  successful project development methodology.
                </p>
                <p className={styles.introPara}>
                  We use change control techniques to facilitate clients in modifying solutions
                  whether it's in the design or development phase. No project is taken lightly. From
                  simple dashboards to large‑scale AI platforms, we ensure client satisfaction every
                  step of the way.
                </p>
              </motion.div>

              <motion.div
                className={styles.introPanel}
                initial={{ opacity: 0, x: 30 }}
                animate={isIntroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={styles.ipHeader}>
                  <Activity size={14} /> Service Demand Breakdown
                  <motion.span
                    className={homeStyles.livePulse}
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
                {CATEGORY_BREAKDOWN.map((c) => (
                  <div key={c.key} className={styles.metricRow}>
                    <span className={styles.metricLabel}>{c.label}</span>
                    <div className={styles.metricBar}>
                      <motion.div
                        className={styles.metricFill}
                        style={{ backgroundColor: c.color, width: `${breakdownPct[c.key]}%` }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <span className={styles.metricVal}>{breakdownPct[c.key]}%</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ─── FILTER SECTION – Sidebar (sticky) + Cards ─── */}
        <section className={styles.filterSection} ref={filterSectionRef}>
          <div className={homeStyles.container}>
            <motion.h2
              className={styles.filterTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={REPLAY_VIEWPORT}
              transition={{ duration: 0.5 }}
            >
              Explore by Industry
            </motion.h2>

            <div className={styles.filterLayout}>
              {/* Sidebar – sticky */}
              <div className={styles.filterSidebar}>
                <ul className={styles.sidebarList}>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <motion.button
                        className={`${styles.sidebarBtn} ${activeCategory === cat.id ? styles.active : ""}`}
                        onClick={() => setActiveCategory(cat.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {cat.icon}
                        {cat.label}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cards Grid */}
              <div className={styles.filterCards}>
                <div className={styles.cardsGrid}>
                  {filteredServices.map((card) => {
                    const load = serviceLoads[card.id] ?? card.liveLoad;
                    return (
                      <motion.div
                        key={card.id}
                        className={styles.card}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.15 }}
                        variants={cardVariants}
                        whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedService(card)}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <div className={styles.cardBody}>
                          <h5 className={styles.cardTitle}>
                            <Link
                              to={card.href}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {card.title}
                            </Link>
                          </h5>
                          <p className={styles.cardDescription}>{card.description}</p>

                          <div className={styles.cardMetrics}>
                            <motion.span
                              className={styles.cardMetricChip}
                              key={load}
                              initial={{ opacity: 0.4 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Activity size={10} style={{ marginRight: 3, verticalAlign: "-1px" }} />
                              Demand: {load}%
                            </motion.span>
                            <span className={styles.cardMetricChip}>{card.demand} Priority</span>
                          </div>

                          <ul className={styles.cardList}>
                            {card.items.slice(0, 4).map((item, i) => (
                              <motion.li
                                key={i}
                                className={styles.cardListItem}
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <img
                                  src="/Images/site-images/contentul-arroe.webp"
                                  alt=""
                                  className={styles.arrowIcon}
                                  onError={(e) => { e.target.style.display = "none"; }}
                                />
                                {item}
                              </motion.li>
                            ))}
                            {card.items.length > 4 && (
                              <li className={styles.cardListItem}>
                                <span className={styles.moreItems}>+{card.items.length - 4} more</span>
                              </li>
                            )}
                          </ul>
                          <motion.button
                            className={styles.cardBtn}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedService(card);
                            }}
                          >
                            Learn More <ArrowRight size={14} />
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA STRIP */}
        <div className={styles.ctaStrip}>
          <div className={homeStyles.container}>
            <motion.p
              className={styles.ctaText}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={REPLAY_VIEWPORT}
            >
              Please <Link to="/contact">contact us</Link> and find out more about{" "}
              <strong>Scape Data Solutions</strong> and how we can help you grow your business!
            </motion.p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className={homeStyles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.08, backgroundColor: "#fdb840", color: "#fff" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* CHAT WIDGET */}
      <div className={homeStyles.chatWidget}>
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              className={homeStyles.chatBox}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className={homeStyles.chatHeader}>
                <div className={homeStyles.chatHeaderInfo}>
                  <div className={homeStyles.chatAvatar}>
                    <MessageSquare size={13} />
                  </div>
                  <div>
                    <strong>Scape Data Support</strong>
                    <span>
                      <motion.span
                        className={homeStyles.livePulse}
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      Online
                    </span>
                  </div>
                </div>
                <button onClick={() => setChatOpen(false)}>
                  <X size={15} />
                </button>
              </div>
              <div className={homeStyles.chatLog}>
                {chatLog.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`${homeStyles.chatMsg} ${
                      msg.from === "user" ? homeStyles.chatMsgUser : homeStyles.chatMsgBot
                    }`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </div>
              <div className={homeStyles.chatInput}>
                <input
                  value={chatMsg}
                  onChange={(e) => setChatMsg(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendChat()}
                  placeholder="Type..."
                />
                <motion.button
                  onClick={sendChat}
                  whileHover={{ scale: 1.08, backgroundColor: "#fdb840" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          className={homeStyles.chatToggle}
          onClick={() => setChatOpen(!chatOpen)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          animate={chatOpen ? {} : { y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {chatOpen ? <X size={18} /> : <MessageSquare size={18} />}
          {!chatOpen && (
            <motion.span
              className={homeStyles.chatBadge}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              1
            </motion.span>
          )}
        </motion.button>
      </div>

      {/* SERVICE MODAL */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className={styles.modalClose}
                onClick={() => setSelectedService(null)}
                whileHover={{ rotate: 90, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <X size={22} />
              </motion.button>
              <div className={styles.modalHeader} style={{ borderBottom: `3px solid #fdb840` }}>
                <div className={styles.modalIcon} />
                <h2>{selectedService.title}</h2>
                <p>{selectedService.tagline}</p>
              </div>
              <div className={styles.modalBody}>
                <div className={styles.modalDescription}>
                  {(selectedService.detailedDescription || [selectedService.longDesc]).map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className={styles.modalMetrics}>
                  {Object.entries(selectedService.metrics).map(([key, value]) => (
                    <div key={key} className={styles.modalMetric}>
                      <div className={styles.modalMetricValue}>{value}</div>
                      <div className={styles.modalMetricLabel}>{key}</div>
                    </div>
                  ))}
                </div>

                <h3>Key Features</h3>
                <ul className={styles.modalFeatures}>
                  {selectedService.features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <CheckCircle size={17} style={{ color: "#fdb840" }} />
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className={styles.modalBtn}
                    style={{ borderColor: "#fdb840", color: "#fdb840" }}
                  >
                    Get This Service <ArrowRight size={17} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;