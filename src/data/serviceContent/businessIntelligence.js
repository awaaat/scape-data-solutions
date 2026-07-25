// src/data/serviceContent/businessIntelligence.js
//
// BI tool consulting (Power BI, Tableau, Looker Studio).
// Each export matches the prop shape expected by ServiceContentPage.

export const businessIntelligence = {
  slug: "business-intelligence",
  name: "Business Intelligence",
  nameHighlight: "Intelligence",
  badge: "One Source of Truth for Decisions",
  heroSub: "BI that centralizes fragmented data into consistent, self-serve reporting your whole company can trust.",
  heroQuote: "Finance's number and sales' number for the same metric never match.",
  stats: [{ value: "1", label: "Consistent source of truth" }, { value: "Self-Serve", label: "Reporting, not IT tickets" }, { value: "Governed", label: "Definitions and access controls" }],
  audience: ["Growing Companies", "Multi-System Businesses", "Finance & Ops Leaders", "Analytics Teams"],
  problem: [
    "When every department pulls numbers from a different system with a different definition, meetings turn into arguments about whose report is right instead of decisions about what to do next.",
    "We build a BI foundation — centralized data, consistent metric definitions, and self-serve dashboards — so your team spends meetings discussing the numbers, not disputing them.",
  ],
  offerings: ["Data pipeline design bringing sources together", "Dimensional modeling for consistent metric definitions", "Automated, scheduled reporting", "Self-serve dashboard build-out", "Governance: data lineage and access controls"],
  tools: ["Power BI", "Tableau", "Looker Studio", "SQL", "dbt"],
  workflow: [
    { title: "Audit Current Reporting", description: "We map where your metrics come from today and where definitions diverge across teams." },
    { title: "Model & Centralize", description: "Data is brought together and modeled around consistent, agreed-upon metric definitions." },
    { title: "Build Dashboards", description: "Self-serve dashboards are built for the decisions your teams actually need to make." },
    { title: "Govern & Handoff", description: "Access controls and documentation ensure the system stays trustworthy as it scales." },
  ],
  whyUs: ["Metric definitions are agreed and documented once, not argued over every meeting", "Built for self-serve, reducing dependency on a data team bottleneck", "Works with the BI tool you already use", "Governance built in from the start, not bolted on later"],
  faqs: [
    { q: "We already use a BI tool — do we need to switch?", a: "No, we build on top of your existing BI tool in almost every case. The problem is usually the data feeding it, not the tool itself." },
    { q: "How long before we see a working dashboard?", a: "Initial dashboards on priority metrics are typically live within 3-4 weeks; full governance and self-serve rollout follows in phases." },
  ],
  metaDescription: "Business intelligence services that centralize fragmented data into consistent, self-serve reporting your whole company can trust.",
  serviceType: "Business Intelligence",
};

export const powerBIConsulting = {
  slug: "power-bi-consulting",
  name: "Power BI Consulting",
  nameHighlight: "Power BI",
  badge: "Dashboards That Actually Get Used",
  heroSub: "Power BI implementations built around the decisions your team needs to make, not a generic template.",
  heroQuote: "We have twelve Power BI reports and nobody looks at most of them.",
  stats: [{ value: "Decision-First", label: "Dashboard design" }, { value: "Modeled", label: "Data, not raw table dumps" }, { value: "Governed", label: "Row-level security and access" }],
  audience: ["Microsoft Shops", "Finance Teams", "Operations Teams", "Enterprises"],
  problem: [
    "Power BI is powerful, but most implementations connect directly to messy source tables and produce slow, confusing reports that get built once and abandoned.",
    "We build Power BI solutions properly: a modeled semantic layer underneath, DAX measures that are consistent and correct, and dashboards designed around the specific decisions your team needs to make.",
  ],
  offerings: ["Semantic data model design (star schema)", "DAX measure development", "Dashboard and report design", "Row-level security implementation", "Performance tuning for large datasets"],
  tools: ["Power BI", "DAX", "Power Query", "SQL"],
  workflow: [
    { title: "Define Decisions", description: "We identify what decisions the report needs to support before designing anything." },
    { title: "Model the Data", description: "A proper semantic model is built underneath, not a direct connection to raw source tables." },
    { title: "Build & Secure", description: "Reports are built with correct DAX measures and row-level security where needed." },
    { title: "Optimize & Train", description: "Performance is tuned for your data volume, and your team is trained to maintain and extend the reports." },
  ],
  whyUs: ["Built on a proper semantic model, not a slow direct-query mess", "DAX measures are documented and consistent across reports", "Row-level security configured correctly from the start", "We train your team so you're not dependent on us afterward"],
  faqs: [
    { q: "Our existing Power BI reports are slow — can you fix them?", a: "Yes, performance issues are usually a data modeling problem, and we frequently rebuild the underlying model rather than just tweaking visuals." },
    { q: "Do you provide training for our team?", a: "Yes, we include hands-on training so your team can maintain and extend the reports independently." },
  ],
  metaDescription: "Power BI consulting with proper semantic modeling, correct DAX measures, and dashboards designed around real decisions, not templates.",
  serviceType: "Business Intelligence",
};

export const tableauConsulting = {
  slug: "tableau-consulting",
  name: "Tableau Consulting",
  nameHighlight: "Tableau",
  badge: "Visualizations Built to Persuade",
  heroSub: "Tableau dashboards designed with real data visualization principles — built to communicate, not just display.",
  heroQuote: "Our Tableau dashboard has twenty charts and nobody knows where to look.",
  stats: [{ value: "Purposeful", label: "Chart selection, not defaults" }, { value: "Modeled", label: "Data behind every dashboard" }, { value: "Fast", label: "Query performance at scale" }],
  audience: ["Analytics Teams", "Marketing & Sales", "Operations Leaders", "Enterprises"],
  problem: [
    "Tableau makes it easy to build a chart, but easy to build the wrong chart for the message — dashboards that are visually busy but communicate nothing clearly.",
    "We design Tableau dashboards around visual design principles that guide the eye to the insight, backed by a properly modeled data source so queries stay fast as your data grows.",
  ],
  offerings: ["Data source modeling and extraction strategy", "Dashboard design following visualization best practices", "Calculated fields and LOD expressions", "Performance optimization for large data sources", "Publishing and permission management on Tableau Server/Cloud"],
  tools: ["Tableau Desktop", "Tableau Server", "SQL", "Tableau Prep"],
  workflow: [
    { title: "Clarify the Message", description: "We identify what each dashboard needs to communicate before choosing a single chart type." },
    { title: "Model & Extract", description: "Data sources are modeled and extracted efficiently to keep dashboards fast." },
    { title: "Design the Dashboard", description: "Visuals are chosen deliberately to support the message, not defaulted to whatever's easiest." },
    { title: "Publish & Govern", description: "Dashboards are published with appropriate permissions and refresh schedules." },
  ],
  whyUs: ["Every chart choice is deliberate, not a default", "Data sources are modeled for performance at scale", "We follow established visualization design principles, not just Tableau defaults", "Permissions and refresh schedules set up correctly from day one"],
  faqs: [
    { q: "Our Tableau dashboards are slow to load — can this be fixed?", a: "Almost always yes — slow dashboards are usually a data extraction or modeling issue, which we address directly." },
    { q: "Can you redesign existing dashboards rather than build from scratch?", a: "Yes, a lot of our work is auditing and redesigning dashboards that have become cluttered or slow over time." },
  ],
  metaDescription: "Tableau consulting with dashboards designed around real visualization principles and data modeled for performance at scale.",
  serviceType: "Business Intelligence",
};

export const lookerStudioConsulting = {
  slug: "looker-studio-consulting",
  name: "Looker Studio Consulting",
  nameHighlight: "Looker Studio",
  badge: "Free Tool, Professional Results",
  heroSub: "Looker Studio dashboards built with real data modeling underneath, so free doesn't mean fragile.",
  heroQuote: "Our Looker Studio report breaks every time someone edits the source sheet.",
  stats: [{ value: "Modeled", label: "Data connections, not raw sheets" }, { value: "Stable", label: "Reports that don't break on edits" }, { value: "Connected", label: "To Google Ads, Analytics, Sheets & more" }],
  audience: ["Marketing Teams", "SMBs", "Google Workspace Users", "Startups"],
  problem: [
    "Looker Studio is free and accessible, but most reports connect directly to a spreadsheet that anyone can edit, breaking the dashboard the moment a column moves or a formula changes.",
    "We build Looker Studio reports on top of a properly structured data layer — whether that's BigQuery, a cleaned spreadsheet, or a connected data source — so reports stay stable as your team keeps working.",
  ],
  offerings: ["Data source structuring and connection setup", "Report and dashboard design", "Blended data sources (multiple platforms in one view)", "Calculated fields and custom metrics", "Sharing and access configuration"],
  tools: ["Looker Studio", "BigQuery", "Google Sheets", "Google Analytics", "Google Ads"],
  workflow: [
    { title: "Structure the Data", description: "We stabilize the underlying data source so it won't break from routine edits." },
    { title: "Connect Sources", description: "Multiple platforms (ads, analytics, CRM) are blended into a single consistent view where needed." },
    { title: "Build the Report", description: "Dashboards are designed around your actual reporting needs, not a generic template." },
    { title: "Configure Sharing", description: "Access and sharing settings are configured correctly for your team and stakeholders." },
  ],
  whyUs: ["Built on a stable data layer, not a fragile direct sheet connection", "Blends multiple marketing/analytics platforms into one view", "Works within your existing Google Workspace setup", "No licensing cost — Looker Studio itself is free"],
  faqs: [
    { q: "Can this replace a paid BI tool for our size of business?", a: "For many SMBs, yes — a well-built Looker Studio setup covers most reporting needs without a BI tool subscription." },
    { q: "Can it combine data from Google Ads, Analytics, and our CRM?", a: "Yes, blending multiple data sources into a single report is one of the most common things we build." },
  ],
  metaDescription: "Looker Studio consulting with a stable data layer underneath, so free reporting doesn't mean fragile reporting.",
  serviceType: "Business Intelligence",
};
