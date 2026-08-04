// src/components/FloatingPrompt/promptQuestions.js
//
// Curated, business/BI-focused. Intentionally does NOT pull from the
// academic "assignment help" / dissertation / thesis service routes —
// this widget's job is to surface real consulting services, not to
// funnel traffic toward coursework-completion pages.

const PROMPT_QUESTIONS = [
  { text: "Need help with BI or dashboard reporting?", path: "/services/business-intelligence" },
  { text: "Struggling to forecast demand accurately?", path: "/services/demand-forecasting" },
  { text: "Want a live sales performance dashboard?", path: "/services/sales-performance-dashboard" },
  { text: "Looking to reduce customer churn?", path: "/services/customer-churn-lifetime-value" },
  { text: "Need fraud detection built into your systems?", path: "/services/fraud-detection-prevention" },
  { text: "Want clearer supply chain visibility?", path: "/services/supply-chain-visibility-tracking" },
  { text: "Curious what AI automation could save you?", path: "/services/ai-automation" },
  { text: "Need help optimizing inventory levels?", path: "/services/inventory-management-analytics" },
  { text: "Want predictive maintenance for your equipment?", path: "/services/predictive-maintenance" },
  { text: "Looking for a Power BI consultant?", path: "/services/power-bi-consulting" },
  { text: "Need a custom ETL pipeline built?", path: "/services/etl-pipeline-development" },
  { text: "Want to understand your customer segments better?", path: "/services/customer-segmentation-profiling" },
  { text: "Need healthcare analytics or a clinical dashboard?", path: "/services/healthcare-bi" },
  { text: "Looking to optimize pricing strategy?", path: "/services/pricing-optimization" },
  { text: "Want a chatbot built for your business?", path: "/services/chatbot-development" },
  { text: "Need help migrating or warehousing your data?", path: "/services/data-warehouse-development" },
];

export default PROMPT_QUESTIONS;
