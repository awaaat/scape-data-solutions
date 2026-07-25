// src/data/serviceContent/manufacturingRetail.js
//
// Manufacturing and retail analytics.
// Each export matches the prop shape expected by ServiceContentPage.

export const manufacturingAnalytics = {
  slug: "manufacturing-analytics",
  name: "Manufacturing Analytics",
  nameHighlight: "Manufacturing",
  badge: "Run Leaner, Smarter Operations",
  heroSub: "Production data turned into clear insight on throughput, downtime, and cost drivers across your operation.",
  heroQuote: "We know something's slowing the line down, we just can't see what.",
  stats: [{ value: "Real-Time", label: "Production visibility" }, { value: "Root-Cause", label: "Not just symptom tracking" }, { value: "Measured", label: "Cost per unit, by line and shift" }],
  audience: ["Manufacturers", "Plant Managers", "Operations Leaders", "Continuous Improvement Teams"],
  problem: [
    "Manufacturing generates enormous amounts of machine, sensor, and production data, but most plants still rely on end-of-shift spreadsheets to understand what happened, days after the problem occurred.",
    "We build analytics that surface throughput, downtime, and quality issues in near real time, and trace them back to root causes — a specific machine, shift, or process step — rather than leaving you with a generic dip in a chart.",
  ],
  offerings: ["Production monitoring dashboards", "Downtime and root-cause analysis", "Cost-per-unit tracking by line and shift", "Forecasting for capacity planning", "Continuous improvement reporting"],
  tools: ["SQL", "Python", "Power BI", "Historian data integration"],
  workflow: [
    { title: "Connect Production Data", description: "We integrate data from machines, sensors, and MES/ERP systems into one analytics layer." },
    { title: "Build Monitoring", description: "Dashboards surface throughput, downtime, and quality metrics as they happen, not at shift-end." },
    { title: "Trace Root Causes", description: "Downtime and quality issues are traced to specific causes — machine, shift, process step." },
    { title: "Support Continuous Improvement", description: "Reporting tracks the impact of improvement initiatives over time, not just current-state snapshots." },
  ],
  whyUs: ["Real-time visibility instead of end-of-shift spreadsheets", "Root-cause tracing, not just symptom dashboards", "Built to integrate with your existing machines and MES/ERP systems", "Designed to support ongoing continuous improvement, not a one-off report"],
  faqs: [
    { q: "Do we need new sensors or IoT devices installed?", a: "Often no — we start with data you already have from machines and MES/ERP systems, and only recommend new instrumentation where it's genuinely needed." },
    { q: "Can this integrate with our existing MES or ERP system?", a: "Yes, we design integrations around your existing systems rather than requiring a replacement." },
  ],
  metaDescription: "Manufacturing analytics that surface throughput, downtime, and cost drivers in real time, traced back to specific root causes.",
  serviceType: "Manufacturing Analytics",
};

export const manufacturingForecasting = {
  slug: "manufacturing-forecasting",
  name: "Manufacturing Forecasting",
  nameHighlight: "Forecasting",
  badge: "Plan Production Around Real Demand",
  heroSub: "Production and demand forecasting that accounts for your actual lead times, capacity, and seasonality.",
  heroQuote: "We're always either overproducing or scrambling to catch up.",
  stats: [{ value: "Accurate", label: "Demand-aligned production plans" }, { value: "Capacity-Aware", label: "Forecasts, not just demand numbers" }, { value: "Updated", label: "As new data comes in" }],
  audience: ["Manufacturers", "Production Planners", "Supply Chain Teams", "Operations Leaders"],
  problem: [
    "Production planning based on last year's numbers or gut feel leads to two expensive failure modes: overproduction that ties up capital, or underproduction that means scrambling and missed deadlines.",
    "We build forecasting models that combine historical demand, seasonality, and your actual production capacity and lead times, so production plans are grounded in a realistic picture, not a rough guess.",
  ],
  offerings: ["Demand forecasting incorporating seasonality and trends", "Capacity-aware production planning", "Lead-time and constraint modeling", "Forecast accuracy tracking over time", "Integration with ERP/production planning systems"],
  tools: ["Python", "Time-series forecasting", "SQL", "ERP integration"],
  workflow: [
    { title: "Analyze Demand History", description: "We build forecasts from your actual sales and order history, accounting for seasonality and trend." },
    { title: "Incorporate Capacity", description: "Forecasts are checked against your real production capacity and lead times, not treated in isolation." },
    { title: "Deliver the Plan", description: "A production plan is generated that balances demand forecasts with what your operation can actually produce." },
    { title: "Track & Refine", description: "Forecast accuracy is tracked over time and models are refined as conditions change." },
  ],
  whyUs: ["Forecasts account for your real capacity and lead times, not just demand in isolation", "Accuracy is tracked over time, not assumed", "Built to integrate with your existing ERP/planning systems", "Designed for manufacturing constraints, not a generic retail forecasting template"],
  faqs: [
    { q: "How far in advance can you forecast?", a: "This depends on your product and lead times — we validate forecast accuracy at the horizon that's actually useful for your planning cycle." },
    { q: "Can this integrate with our ERP's production planning module?", a: "Yes, we design forecasts to feed directly into your existing planning system rather than existing as a separate spreadsheet." },
  ],
  metaDescription: "Manufacturing forecasting that accounts for your real production capacity and lead times, not just historical demand in isolation.",
  serviceType: "Manufacturing Analytics",
};

export const manufacturingKPIs = {
  slug: "manufacturing-kpis",
  name: "Manufacturing KPIs",
  nameHighlight: "KPIs",
  badge: "Metrics That Drive Action",
  heroSub: "OEE, yield, and throughput dashboards built around the metrics that actually change how your plant operates.",
  heroQuote: "We track a dozen metrics and none of them tell us what to do next.",
  stats: [{ value: "OEE", label: "Overall equipment effectiveness tracking" }, { value: "Actionable", label: "Not just tracked for reporting's sake" }, { value: "Benchmarked", label: "Against your own historical baseline" }],
  audience: ["Plant Managers", "Operations Leaders", "Continuous Improvement Teams", "Manufacturers"],
  problem: [
    "Tracking metrics for the sake of a monthly report doesn't improve anything — KPIs only matter when they're tied to a specific action someone takes when the number moves.",
    "We design KPI dashboards (OEE, yield, throughput, scrap rate) around the decisions they should trigger, benchmarked against your own historical performance so a deviation is immediately visible and actionable.",
  ],
  offerings: ["OEE (Overall Equipment Effectiveness) tracking", "Yield and scrap rate monitoring", "Throughput and cycle time dashboards", "Historical benchmarking and trend alerts", "KPI rollups by line, shift, and plant"],
  tools: ["SQL", "Power BI", "Historian/MES data integration"],
  workflow: [
    { title: "Define Action Triggers", description: "We identify what action each KPI should trigger before building the dashboard around it." },
    { title: "Build the Metrics", description: "OEE, yield, and throughput calculations are built correctly for your specific equipment and process." },
    { title: "Benchmark Historically", description: "Metrics are compared against your own historical baseline, not an arbitrary industry average." },
    { title: "Alert & Escalate", description: "Deviations trigger alerts so the right person acts before the issue compounds." },
  ],
  whyUs: ["KPIs are tied to specific actions, not just tracked for reporting", "Benchmarked against your own historical performance, not generic industry numbers", "Built to reflect your actual equipment and process, not a generic OEE template", "Alerting ensures deviations get noticed and acted on quickly"],
  faqs: [
    { q: "How is OEE calculated for our specific equipment?", a: "We calculate OEE (availability × performance × quality) using your actual equipment data and downtime categorization, not a generic formula." },
    { q: "Can we track KPIs by shift, not just plant-wide?", a: "Yes, we build rollups at whatever granularity is useful — by line, shift, or plant — since shift-level detail often reveals what plant-wide averages hide." },
  ],
  metaDescription: "Manufacturing KPI dashboards for OEE, yield, and throughput, tied to specific actions and benchmarked against your own historical baseline.",
  serviceType: "Manufacturing Analytics",
};

export const factoryPerformanceAnalytics = {
  slug: "factory-performance-analytics",
  name: "Factory Performance Analytics",
  nameHighlight: "Performance",
  badge: "See the Whole Plant Clearly",
  heroSub: "Plant-wide performance analytics connecting production, quality, and cost data into one clear picture.",
  heroQuote: "Production says one thing, finance says another, and quality has their own numbers entirely.",
  stats: [{ value: "Unified", label: "Production, quality, and cost view" }, { value: "Root-Cause", label: "Analysis, not just dashboards" }, { value: "Continuous", label: "Improvement tracking built in" }],
  audience: ["Plant Managers", "Operations Executives", "Continuous Improvement Teams", "Multi-Plant Manufacturers"],
  problem: [
    "Production, quality, and finance often each maintain their own separate view of plant performance, none of which fully agrees with the others, making it hard to see the true picture or compare plants consistently.",
    "We build a unified factory performance view that connects production, quality, and cost data, with root-cause analysis behind the numbers, so plant leadership can see clearly what's driving performance and what to fix.",
  ],
  offerings: ["Unified production, quality, and cost dashboards", "Root-cause analysis for performance issues", "Cross-plant benchmarking and comparison", "Forecasting for capacity and cost planning", "Continuous improvement impact tracking"],
  tools: ["SQL", "Python", "Power BI", "ERP/MES integration"],
  workflow: [
    { title: "Connect the Silos", description: "Production, quality, and cost data are integrated into one consistent, reconciled view." },
    { title: "Build the Dashboard", description: "A unified performance dashboard is built showing throughput, quality, and cost together." },
    { title: "Analyze Root Causes", description: "Performance issues are traced to specific causes, not left as an unexplained dip." },
    { title: "Track Improvement", description: "The impact of improvement initiatives is tracked over time against the unified baseline." },
  ],
  whyUs: ["One reconciled view instead of three departments with three different numbers", "Root-cause analysis, not just a performance dashboard", "Supports fair cross-plant benchmarking using consistent definitions", "Tracks whether improvement initiatives are actually working"],
  faqs: [
    { q: "Can this compare performance across multiple plants fairly?", a: "Yes — we build consistent metric definitions across plants so comparisons are apples-to-apples, not skewed by different local definitions." },
    { q: "How do you reconcile production, quality, and finance numbers that disagree?", a: "We trace the disagreement to its source (usually different definitions or data lags) and build a single reconciled model that all three can trust." },
  ],
  metaDescription: "Factory performance analytics unifying production, quality, and cost data into one clear, root-cause-driven view of plant performance.",
  serviceType: "Manufacturing Analytics",
};

export const qualityControlAnalytics = {
  slug: "quality-control-analytics",
  name: "Quality Control Analytics",
  nameHighlight: "Quality Control",
  badge: "Catch Issues Before They Compound",
  heroSub: "Quality data analyzed to catch defect trends early and trace them to the specific process step causing them.",
  heroQuote: "By the time we see the defect trend, we've already shipped a batch of bad product.",
  stats: [{ value: "Early", label: "Trend detection, not after-the-fact" }, { value: "Root-Cause", label: "Traced to process step" }, { value: "Tracked", label: "Corrective action effectiveness" }],
  audience: ["Quality Managers", "Manufacturers", "Continuous Improvement Teams", "Regulated Industries"],
  problem: [
    "Quality control data is often reviewed only after a batch has already shipped, meaning defect trends get caught too late to prevent real cost — scrap, rework, or a customer complaint.",
    "We build analytics that monitor quality metrics in near real time, detect emerging defect trends early, and trace them back to the specific process step or input causing them.",
  ],
  offerings: ["Real-time quality metric monitoring", "Statistical process control (SPC) charting", "Defect trend detection and root-cause tracing", "Corrective action tracking and effectiveness measurement", "Compliance-ready quality reporting"],
  tools: ["SQL", "Python", "SPC tools", "Power BI"],
  workflow: [
    { title: "Monitor Quality Metrics", description: "Defect rates and quality measurements are tracked continuously, not reviewed only at batch-end." },
    { title: "Detect Trends Early", description: "Statistical process control identifies emerging issues before they become a full batch problem." },
    { title: "Trace Root Cause", description: "Defects are traced back to the specific process step, machine, or input responsible." },
    { title: "Track Corrective Action", description: "We monitor whether corrective actions actually reduce the defect rate over time." },
  ],
  whyUs: ["Catches defect trends early, before a full batch is affected", "Root-cause tracing, not just a defect count dashboard", "Statistical process control done properly, with correct control limits", "Tracks whether corrective actions are actually working, not just logged"],
  faqs: [
    { q: "Do you use standard SPC methods or something custom?", a: "We apply standard, statistically valid SPC methods (control charts, capability analysis) rather than ad-hoc thresholds, so results are defensible." },
    { q: "Can this support compliance reporting for regulated industries?", a: "Yes, we build reporting that meets the documentation standards common in regulated manufacturing environments." },
  ],
  metaDescription: "Quality control analytics that detect defect trends early using statistical process control, traced to the specific root cause.",
  serviceType: "Manufacturing Analytics",
};

export const productionAnalytics = {
  slug: "production-analytics",
  name: "Production Analytics",
  nameHighlight: "Production",
  badge: "Throughput, Explained",
  heroSub: "Production data analyzed to explain what's actually driving throughput, cost, and cycle time on your line.",
  heroQuote: "Our output is inconsistent shift to shift and we don't know why.",
  stats: [{ value: "Explained", label: "Throughput variation, not just measured" }, { value: "Shift-Level", label: "Detail, not just plant averages" }, { value: "Forecasted", label: "Capacity for planning ahead" }],
  audience: ["Manufacturers", "Plant Managers", "Production Planners", "Operations Teams"],
  problem: [
    "Production output often varies significantly shift to shift or line to line, but without granular analysis it's impossible to tell whether that's due to staffing, equipment, input quality, or something else entirely.",
    "We analyze production data at the shift and line level to identify what's actually driving throughput variation, so improvement efforts target the real cause rather than a guess.",
  ],
  offerings: ["Throughput and cycle time analysis by line and shift", "Variation root-cause identification", "Capacity forecasting for planning", "Bottleneck identification", "Production performance dashboards"],
  tools: ["SQL", "Python", "Power BI", "MES integration"],
  workflow: [
    { title: "Break Down by Shift & Line", description: "Production data is analyzed at a granular level, not just aggregated plant-wide." },
    { title: "Identify Variation Drivers", description: "We statistically test what factors — staffing, equipment, input — actually explain output variation." },
    { title: "Find Bottlenecks", description: "The specific constraint limiting throughput is identified, not assumed." },
    { title: "Forecast Capacity", description: "Findings feed into capacity forecasts for realistic production planning." },
  ],
  whyUs: ["Analysis at the shift and line level, not just plant-wide averages", "Statistically identifies real drivers of variation, not guesses", "Pinpoints actual bottlenecks rather than assumed ones", "Findings feed directly into capacity planning"],
  faqs: [
    { q: "Can this identify whether staffing or equipment is the real bottleneck?", a: "Yes, that's exactly the kind of question this analysis is built to answer — we test multiple candidate factors against actual output data." },
    { q: "Do we need detailed shift-level data already collected?", a: "It helps, but we can often work with what MES or ERP systems already log and build from there." },
  ],
  metaDescription: "Production analytics that identify the real drivers of throughput variation at the shift and line level, not just plant-wide averages.",
  serviceType: "Manufacturing Analytics",
};

export const retailAnalytics = {
  slug: "retail-analytics",
  name: "Retail Analytics",
  nameHighlight: "Retail",
  badge: "Know Your Customer, Grow Your Business",
  heroSub: "Customer and sales data turned into clear, actionable insight across every store, channel, and product line.",
  heroQuote: "We have sales data everywhere and no single view of what's actually working.",
  stats: [{ value: "Unified", label: "View across stores and channels" }, { value: "Actionable", label: "Segment-level recommendations" }, { value: "Tracked", label: "Performance over time, not one-off reports" }],
  audience: ["Retailers", "E-Commerce Businesses", "Merchandising Teams", "Multi-Channel Brands"],
  problem: [
    "Retail data lives across POS, e-commerce, loyalty, and marketing systems, and stitching it together manually to understand what's actually driving sales is slow and usually out of date by the time it's done.",
    "We build analytics that unify these sources into a single view of customer behavior, product performance, and channel effectiveness, with specific, actionable recommendations rather than a generic sales report.",
  ],
  offerings: ["Customer behavior and segmentation analysis", "Product and category performance tracking", "Channel and campaign effectiveness measurement", "Trend detection across stores and regions", "Actionable recommendation dashboards"],
  tools: ["SQL", "Python", "Power BI", "POS/e-commerce integration"],
  workflow: [
    { title: "Unify Data Sources", description: "POS, e-commerce, loyalty, and marketing data are brought together into one consistent view." },
    { title: "Analyze Behavior & Performance", description: "Customer segments and product performance are analyzed for real patterns, not surface-level totals." },
    { title: "Surface Recommendations", description: "Findings are turned into specific, actionable recommendations, not just a chart to interpret yourself." },
    { title: "Track Over Time", description: "Dashboards track performance continuously, so trends are caught as they emerge." },
  ],
  whyUs: ["Unifies data across every channel and store, not siloed reports", "Recommendations are specific and actionable, not just descriptive charts", "Built to track trends continuously, not a one-time analysis", "Works with your existing POS and e-commerce systems"],
  faqs: [
    { q: "Can this combine our online and in-store sales data?", a: "Yes, unifying online and offline retail data into one consistent view is one of the most common problems we solve." },
    { q: "How specific are the recommendations?", a: "We aim for segment- and product-level specificity — not 'sales are down' but which segment, which product, and what to do about it." },
  ],
  metaDescription: "Retail analytics that unify POS, e-commerce, and loyalty data into a single view, with specific, actionable recommendations.",
  serviceType: "Retail Analytics",
};

export const retailSalesAnalytics = {
  slug: "retail-sales-analytics",
  name: "Retail Sales Analytics",
  nameHighlight: "Sales",
  badge: "Real-Time Sales Intelligence",
  heroSub: "Sales performance dashboards showing exactly what's selling, where, and why — updated in real time.",
  heroQuote: "By the time the weekly sales report lands, the week's already over.",
  stats: [{ value: "Real-Time", label: "Sales visibility" }, { value: "Store & SKU", label: "Level granularity" }, { value: "Alerted", label: "When performance shifts" }],
  audience: ["Retailers", "Sales Leaders", "Store Managers", "Merchandising Teams"],
  problem: [
    "Weekly or monthly sales reports are already stale by the time they're read, and averaging across stores and products hides the specific outliers — a struggling store, a breakout product — that actually matter.",
    "We build real-time sales dashboards that show performance at the store and SKU level, with alerts when something shifts meaningfully, so decisions happen while there's still time to act.",
  ],
  offerings: ["Real-time sales dashboards by store, channel, and product", "Store and SKU-level performance ranking", "Trend and anomaly alerting", "Sales forecasting for planning", "Exportable reporting for regional and executive review"],
  tools: ["SQL", "Power BI", "POS integration"],
  workflow: [
    { title: "Connect POS Data", description: "Sales data is integrated from your point-of-sale and e-commerce systems in near real time." },
    { title: "Build the Dashboard", description: "Performance is shown at store and SKU level, not just company-wide totals." },
    { title: "Set Up Alerts", description: "Notifications trigger when a store or product breaks from its normal pattern." },
    { title: "Forecast Ahead", description: "Sales trends feed into forecasts for inventory and staffing planning." },
  ],
  whyUs: ["Real-time visibility instead of a stale weekly report", "Store and SKU-level detail, not hidden by company-wide averages", "Alerts catch meaningful shifts as they happen", "Feeds directly into inventory and staffing decisions"],
  faqs: [
    { q: "How real-time is 'real-time' here?", a: "This depends on your POS system's data availability, but we build for the freshest update cycle your systems can support, typically same-day or better." },
    { q: "Can we compare store performance fairly across different sizes and locations?", a: "Yes, we build normalized comparisons (e.g. sales per square foot) so store comparisons account for size and location differences." },
  ],
  metaDescription: "Real-time retail sales analytics at the store and SKU level, with alerts when performance shifts and forecasts for planning ahead.",
  serviceType: "Retail Analytics",
};

export const retailPricingAnalytics = {
  slug: "retail-pricing-analytics",
  name: "Retail Pricing Analytics",
  nameHighlight: "Pricing",
  badge: "Price With Evidence, Not Guesswork",
  heroSub: "Price elasticity and competitive analysis that shows exactly where you're leaving margin on the table.",
  heroQuote: "We set prices the same way we did five years ago.",
  stats: [{ value: "Elasticity", label: "Modeled per product and segment" }, { value: "Benchmarked", label: "Against competitor pricing" }, { value: "Simulated", label: "Before a price change goes live" }],
  audience: ["Retailers", "Pricing Teams", "Merchandising Leaders", "E-Commerce Businesses"],
  problem: [
    "Pricing decisions made on habit or a single blanket rule leave money on the table in both directions — underpricing products with real pricing power, and overpricing ones where demand is more sensitive than assumed.",
    "We model price elasticity by product and segment, incorporate competitive pricing data, and let you simulate the impact of a price change before it goes live, rather than finding out after the fact.",
  ],
  offerings: ["Price elasticity modeling by product/segment", "Competitive pricing benchmarking", "Promotional pricing analysis", "Price change scenario simulation", "Margin impact tracking"],
  tools: ["SQL", "Python", "Statistical modeling"],
  workflow: [
    { title: "Model Elasticity", description: "We estimate how demand actually responds to price changes for each product and segment." },
    { title: "Benchmark Competitors", description: "Your pricing is compared against the actual competitive landscape, not assumptions about it." },
    { title: "Simulate Changes", description: "Proposed price changes are simulated for volume and margin impact before going live." },
    { title: "Track Results", description: "Actual outcomes are tracked against the simulation to refine future pricing decisions." },
  ],
  whyUs: ["Elasticity is modeled per product, not applied as one blanket assumption", "Competitive benchmarking uses real market data, not guesses", "Simulate before you commit, reducing pricing risk", "Margin impact is tracked, not assumed"],
  faqs: [
    { q: "How do you gather competitor pricing data?", a: "This depends on your market — we use available public pricing data, market data providers, or your own competitive tracking process, whichever fits your situation." },
    { q: "Can this recommend specific price points, or just analysis?", a: "We provide specific price recommendations backed by the elasticity model, not just descriptive analysis to interpret yourself." },
  ],
  metaDescription: "Retail pricing analytics modeling price elasticity by product and segment, with competitive benchmarking and pre-launch simulation.",
  serviceType: "Retail Analytics",
};

export const retailRevenueAnalytics = {
  slug: "retail-revenue-analytics",
  name: "Retail Revenue Analytics",
  nameHighlight: "Revenue",
  badge: "See What's Actually Driving Revenue",
  heroSub: "Revenue broken down by driver — traffic, conversion, basket size — so you know exactly what to fix.",
  heroQuote: "Revenue is down, but we don't know if it's traffic, conversion, or basket size.",
  stats: [{ value: "Decomposed", label: "Revenue by real driver" }, { value: "Store-Level", label: "Detail, not just totals" }, { value: "Tracked", label: "Trends over time" }],
  audience: ["Retail Executives", "Finance Teams", "Store Operations", "Merchandising Leaders"],
  problem: [
    "A revenue decline can come from fewer customers walking in, fewer of them buying, or each purchase being smaller — and each of those problems has a completely different fix. Most reports just show the total going down.",
    "We decompose revenue into its real drivers — traffic, conversion rate, and average basket size — at the store level, so you can see exactly which lever moved and target the fix accordingly.",
  ],
  offerings: ["Revenue decomposition (traffic, conversion, basket size)", "Store-level revenue driver analysis", "Trend tracking over time", "Comparison across stores and regions", "Actionable driver-specific recommendations"],
  tools: ["SQL", "Python", "Power BI", "POS integration"],
  workflow: [
    { title: "Decompose Revenue", description: "Total revenue is broken into traffic, conversion, and basket size components." },
    { title: "Analyze by Store", description: "Drivers are examined at the store level to catch what plant-wide averages would hide." },
    { title: "Identify the Real Issue", description: "We pinpoint which specific driver is responsible for a revenue change." },
    { title: "Recommend Action", description: "Findings translate into a specific recommendation tied to the actual driver, not a generic 'boost sales' suggestion." },
  ],
  whyUs: ["Revenue is decomposed into real, actionable drivers, not left as one number", "Store-level detail catches what company-wide totals hide", "Recommendations target the actual driver, not a generic fix", "Trends tracked over time to catch issues as they emerge"],
  faqs: [
    { q: "How do you measure foot traffic if we don't have people counters?", a: "We can estimate traffic from proxies (transaction counts, POS data patterns) if direct counters aren't available, though direct counting is more precise where feasible." },
    { q: "Can this show which stores are underperforming and why?", a: "Yes, store-level driver decomposition is specifically designed to show which stores are struggling and on which specific metric." },
  ],
  metaDescription: "Retail revenue analytics that decompose revenue into traffic, conversion, and basket size, at the store level, to target the real driver.",
  serviceType: "Retail Analytics",
};
