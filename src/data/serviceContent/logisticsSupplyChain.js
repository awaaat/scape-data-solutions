// src/data/serviceContent/logisticsSupplyChain.js
//
// Logistics & supply chain analytics.
// Each export matches the prop shape expected by ServiceContentPage.

export const transportAnalytics = {
  slug: "transport-analytics",
  name: "Transport Analytics",
  nameHighlight: "Transport",
  badge: "Run Leaner, Smarter Logistics",
  heroSub: "Transportation data analyzed for cost, efficiency, and reliability across your entire logistics network.",
  heroQuote: "We know transport costs are too high, but not which routes or carriers are the problem.",
  stats: [{ value: "Cost-per-Mile", label: "Tracked by route and carrier" }, { value: "Root-Cause", label: "Delay and cost analysis" }, { value: "Forecasted", label: "Capacity and demand" }],
  audience: ["Logistics Teams", "Manufacturers", "Distributors", "Transportation Managers"],
  problem: [
    "Transportation costs and delays are usually driven by a specific subset of routes, carriers, or conditions, but without granular analysis, cost-cutting efforts get applied evenly instead of where they'd have the most impact.",
    "We analyze transportation data by route, carrier, and shipment type to find where cost and delay are concentrated, so improvement efforts target the actual drivers.",
  ],
  offerings: ["Cost-per-mile and cost-per-shipment analysis", "Route and carrier performance benchmarking", "Delay root-cause analysis", "Capacity and demand forecasting", "Transportation dashboards and reporting"],
  tools: ["SQL", "Python", "Power BI"],
  workflow: [
    { title: "Analyze Cost & Performance", description: "Transportation cost and reliability data is broken down by route, carrier, and shipment type." },
    { title: "Find Root Causes", description: "Delays and cost overruns are traced to their specific source, not treated as a general trend." },
    { title: "Benchmark Carriers", description: "Carrier performance is compared fairly on cost, reliability, and service quality." },
    { title: "Forecast Demand", description: "Capacity needs are forecast to support proactive transportation planning." },
  ],
  whyUs: ["Identifies which specific routes or carriers drive cost, not a general average", "Root-cause analysis for delays, not just delay counts", "Fair carrier benchmarking across cost and reliability together", "Forecasting supports proactive capacity planning"],
  faqs: [
    { q: "Can this tell us which specific carriers are underperforming?", a: "Yes, carrier benchmarking on cost, reliability, and service quality together is a core part of this analysis." },
    { q: "How granular is the cost analysis?", a: "We break costs down to the route and shipment level wherever your data supports it, since that's where the real drivers usually hide." },
  ],
  metaDescription: "Transport analytics that identify which specific routes and carriers drive cost and delay, with fair benchmarking and demand forecasting.",
  serviceType: "Logistics Analytics",
};

export const warehouseAnalytics = {
  slug: "warehouse-analytics",
  name: "Warehouse Analytics",
  nameHighlight: "Warehouse",
  badge: "Faster Fulfillment, Lower Cost",
  heroSub: "Warehouse operations data analyzed for storage efficiency, pick performance, and labor productivity.",
  heroQuote: "We know our warehouse could run faster, we just don't know what's actually slowing it down.",
  stats: [{ value: "Optimized", label: "Slotting and pick paths" }, { value: "Measured", label: "Labor productivity by task" }, { value: "Simulated", label: "Impact of process changes" }],
  audience: ["Warehouse Operators", "Distribution Centers", "3PLs", "Operations Managers"],
  problem: [
    "Warehouse inefficiency often hides in specific details — a poorly located high-velocity SKU, an inefficient pick path, uneven labor allocation — that don't show up in aggregate throughput numbers.",
    "We analyze warehouse operations data to find these specific inefficiencies and recommend concrete changes to storage layout, pick paths, and labor allocation.",
  ],
  offerings: ["Storage slotting optimization analysis", "Pick path and labor productivity analysis", "Order accuracy and fulfillment speed tracking", "Capacity and throughput forecasting", "Process change simulation before implementation"],
  tools: ["SQL", "Python", "Power BI", "WMS integration"],
  workflow: [
    { title: "Analyze Current Operations", description: "We assess storage layout, pick paths, and labor allocation against your actual order patterns." },
    { title: "Identify Inefficiencies", description: "Specific bottlenecks — misplaced SKUs, inefficient paths, uneven labor — are pinpointed with data." },
    { title: "Simulate Changes", description: "Proposed layout or process changes are simulated before physical implementation." },
    { title: "Track Impact", description: "We measure whether implemented changes actually improved throughput and cost." },
  ],
  whyUs: ["Finds specific inefficiencies, not just a general 'improve efficiency' recommendation", "Simulates changes before you invest in physical rework", "Built to integrate with your existing WMS data", "Tracks whether changes actually delivered the expected improvement"],
  faqs: [
    { q: "Can this recommend a specific new storage layout?", a: "Yes, slotting recommendations based on actual SKU velocity and order patterns are a core deliverable." },
    { q: "Do you need access to our WMS system?", a: "Ideally yes, since WMS data gives the most accurate picture, but we can work with other operational data if WMS access isn't available." },
  ],
  metaDescription: "Warehouse analytics that find specific inefficiencies in storage layout, pick paths, and labor allocation, simulated before implementation.",
  serviceType: "Logistics Analytics",
};

export const shipmentAnalytics = {
  slug: "shipment-analytics",
  name: "Shipment Analytics",
  nameHighlight: "Shipment",
  badge: "Visibility From Dock to Doorstep",
  heroSub: "Shipment data analyzed for on-time performance, cost, and customer experience across your entire fulfillment chain.",
  heroQuote: "We don't know where shipments are actually failing until the customer complains.",
  stats: [{ value: "Tracked", label: "On-time performance by shipment type" }, { value: "Predictive", label: "ETAs, not static estimates" }, { value: "Root-Cause", label: "Failure and delay analysis" }],
  audience: ["E-Commerce Businesses", "Distributors", "Logistics Teams", "Customer Experience Teams"],
  problem: [
    "Shipment failures and delays often go unnoticed until a customer complains, at which point the root cause is hard to trace back through carriers, warehouses, and transit legs after the fact.",
    "We analyze shipment data end to end to track on-time performance, predict realistic ETAs, and trace delays back to their specific cause — a carrier, a warehouse, or a specific lane.",
  ],
  offerings: ["On-time delivery performance tracking", "Predictive ETA modeling", "Delay and failure root-cause analysis", "Carrier and lane performance comparison", "Customer experience impact analysis"],
  tools: ["SQL", "Python", "Carrier API integration"],
  workflow: [
    { title: "Track Shipment Performance", description: "On-time rates and delivery times are tracked across carriers, lanes, and shipment types." },
    { title: "Predict ETAs", description: "Delivery estimates are modeled from real historical performance, not static carrier promises." },
    { title: "Trace Failures", description: "Delays and failures are traced to their specific cause in the fulfillment chain." },
    { title: "Report & Improve", description: "Findings feed into carrier negotiations and process improvements." },
  ],
  whyUs: ["Predictive ETAs based on real historical performance, not carrier promises", "Traces failures to specific causes, not just tallies late shipments", "Compares carriers and lanes fairly to inform sourcing decisions", "Connects shipment performance to actual customer experience impact"],
  faqs: [
    { q: "Can this tell us which specific carrier or lane is underperforming?", a: "Yes, carrier and lane comparison is a core part of this analysis, useful directly in carrier negotiations." },
    { q: "How accurate are the predictive ETAs compared to carrier estimates?", a: "We validate predictions against actual historical delivery performance and typically outperform generic carrier ETAs for your specific lanes." },
  ],
  metaDescription: "Shipment analytics that predict realistic ETAs and trace delivery delays to their specific cause across carriers and lanes.",
  serviceType: "Logistics Analytics",
};

export const fleetAnalytics = {
  slug: "fleet-analytics",
  name: "Fleet Analytics",
  nameHighlight: "Fleet",
  badge: "Lower Costs, Safer Roads",
  heroSub: "Fleet and driver data analyzed for fuel efficiency, maintenance timing, and safety risk.",
  heroQuote: "We're spending more on fuel and maintenance than we should be, and we don't know why.",
  stats: [{ value: "Benchmarked", label: "Vehicle performance across the fleet" }, { value: "Predictive", label: "Maintenance timing" }, { value: "Scored", label: "Driver safety risk" }],
  audience: ["Fleet Operators", "Logistics Companies", "Delivery Businesses", "Fleet Managers"],
  problem: [
    "Fleet costs — fuel, maintenance, insurance — are driven by specific vehicles, routes, and driver behaviors, but without granular telematics analysis, cost-cutting gets applied evenly rather than where it would actually help.",
    "We analyze telematics and maintenance data to identify which vehicles and behaviors drive cost and risk, and to predict maintenance needs before they become breakdowns.",
  ],
  offerings: ["Fuel efficiency analysis by vehicle and route", "Predictive maintenance scheduling", "Driver safety behavior scoring", "Fleet cost benchmarking", "Real-time fleet performance dashboards"],
  tools: ["SQL", "Python", "Telematics integration"],
  workflow: [
    { title: "Integrate Telematics Data", description: "Vehicle and driver data from your existing telematics systems is brought into one analytics view." },
    { title: "Benchmark Performance", description: "Vehicles and drivers are compared fairly to identify true underperformers." },
    { title: "Predict Maintenance Needs", description: "Failure risk is predicted from vehicle data, giving lead time to act before a breakdown." },
    { title: "Score Safety Behavior", description: "Driver behavior (harsh braking, speeding) is scored to identify risk and inform training." },
  ],
  whyUs: ["Identifies which specific vehicles or drivers drive cost and risk", "Predictive maintenance provides real lead time, not just reactive alerts", "Driver safety scoring supports targeted training, not blanket policy", "Works with your existing telematics system"],
  faqs: [
    { q: "Do we need new telematics hardware installed?", a: "In most cases we work with your existing telematics data — we only recommend new hardware if your current setup genuinely lacks the needed data." },
    { q: "Can this identify specific high-risk drivers for coaching?", a: "Yes, driver-level safety scoring is designed specifically to support targeted coaching rather than blanket fleet-wide policy." },
  ],
  metaDescription: "Fleet analytics that identify which vehicles and driver behaviors drive fuel cost and safety risk, with predictive maintenance timing.",
  serviceType: "Logistics Analytics",
};

export const supplyPlanning = {
  slug: "supply-planning",
  name: "Supply Planning",
  nameHighlight: "Supply Planning",
  badge: "Align Supply With Real Demand",
  heroSub: "Supply planning built on realistic demand forecasts and actual supplier lead times, not static reorder rules.",
  heroQuote: "Our reorder points haven't been updated in years, and it shows.",
  stats: [{ value: "Aligned", label: "Supply plans to real demand" }, { value: "Lead-Time Aware", label: "Not a generic buffer" }, { value: "Reduced", label: "Both stockouts and excess inventory" }],
  audience: ["Manufacturers", "Distributors", "Supply Chain Planners", "Procurement Teams"],
  problem: [
    "Static reorder points and buffer stock rules, set once and never revisited, drift out of sync with actual demand and supplier performance over time, leading to both stockouts and tied-up capital.",
    "We build supply planning models grounded in real demand forecasts and actual supplier lead-time performance, so replenishment decisions reflect current reality, not historical assumptions.",
  ],
  offerings: ["Demand-aligned reorder point calculation", "Supplier lead-time variability analysis", "Safety stock optimization", "Supply plan scenario simulation", "Ongoing plan monitoring and adjustment"],
  tools: ["SQL", "Python", "ERP integration"],
  workflow: [
    { title: "Analyze Demand & Supply", description: "We build realistic demand forecasts and assess actual supplier lead-time performance and variability." },
    { title: "Recalculate Reorder Points", description: "Reorder points and safety stock are recalculated based on current demand and supplier reality, not outdated assumptions." },
    { title: "Simulate Scenarios", description: "Supply plans are tested against demand spikes and supply disruptions before committing." },
    { title: "Monitor & Adjust", description: "Plans are revisited on an ongoing basis as demand and supplier performance shift." },
  ],
  whyUs: ["Reorder points reflect current demand and supplier reality, not outdated defaults", "Accounts for actual lead-time variability, not an assumed constant", "Scenario simulation before committing to a plan change", "Ongoing monitoring keeps the plan current as conditions shift"],
  faqs: [
    { q: "How often should reorder points be updated?", a: "This depends on how quickly your demand and supplier performance change — we build in a regular review cadence appropriate to your business." },
    { q: "Can this reduce both stockouts and excess inventory at once?", a: "Yes, that's the specific goal — properly calibrated safety stock reduces both failure modes simultaneously, rather than trading one for the other." },
  ],
  metaDescription: "Supply planning grounded in real demand forecasts and actual supplier lead times, reducing both stockouts and excess inventory.",
  serviceType: "Logistics Analytics",
};

export const deliveryPerformanceAnalytics = {
  slug: "delivery-performance-analytics",
  name: "Delivery Performance Analytics",
  nameHighlight: "Delivery",
  badge: "On-Time, Every Time — Or Know Why Not",
  heroSub: "Delivery performance broken down by driver, route, and time window to find exactly where service is falling short.",
  heroQuote: "Our on-time rate is fine on average, but customers still complain constantly.",
  stats: [{ value: "Granular", label: "Performance by route and window" }, { value: "Root-Cause", label: "Behind every missed delivery" }, { value: "Customer-Linked", label: "Satisfaction tied to delivery data" }],
  audience: ["Delivery Businesses", "E-Commerce", "Last-Mile Logistics", "Customer Experience Teams"],
  problem: [
    "An acceptable average on-time rate can hide a specific route, driver, or time window that's consistently failing — and consistently generating the complaints leadership actually hears about.",
    "We break delivery performance down to a granular level — by driver, route, and delivery window — and connect it to customer feedback, so you can see precisely where service is falling short.",
  ],
  offerings: ["On-time performance analysis by driver, route, and window", "Root-cause analysis for missed deliveries", "Customer satisfaction correlation with delivery data", "Delivery cost-to-serve analysis", "Performance dashboards for operations teams"],
  tools: ["SQL", "Python", "Power BI"],
  workflow: [
    { title: "Break Down Performance", description: "On-time rates are analyzed at the driver, route, and time-window level, not just as one average." },
    { title: "Trace Root Causes", description: "Missed deliveries are traced to their specific cause — traffic, routing, driver, or capacity." },
    { title: "Connect to Customer Feedback", description: "Delivery data is correlated with satisfaction scores and complaints to find the real pain points." },
    { title: "Report for Action", description: "Findings are delivered to operations teams in a form they can act on directly." },
  ],
  whyUs: ["Granular breakdown reveals problems a good average hides", "Root-cause analysis, not just a tally of late deliveries", "Connects delivery data directly to customer satisfaction", "Built for action by operations teams, not just executive reporting"],
  faqs: [
    { q: "Our average on-time rate looks fine — why would we need this?", a: "A good average can mask a specific route or time window that's consistently failing and driving the complaints you actually hear about — that's exactly what this analysis surfaces." },
    { q: "Can this identify specific problem drivers or routes?", a: "Yes, granular breakdown by driver and route is a core part of the analysis, not just an aggregate view." },
  ],
  metaDescription: "Delivery performance analytics broken down by driver, route, and time window, connected to customer satisfaction data.",
  serviceType: "Logistics Analytics",
};

export const freightCostAnalytics = {
  slug: "freight-cost-analytics",
  name: "Freight Cost Analytics",
  nameHighlight: "Freight Cost",
  badge: "Find Hidden Cost, Not Just Rate Cuts",
  heroSub: "Freight spend analyzed to catch billing errors, rate creep, and true cost-to-serve by lane and carrier.",
  heroQuote: "We think we're being overcharged somewhere, we just can't prove it.",
  stats: [{ value: "Audited", label: "Freight invoices for errors" }, { value: "Benchmarked", label: "Against market rate indices" }, { value: "True Cost", label: "Per lane, per carrier" }],
  audience: ["Manufacturers", "Distributors", "Logistics Teams", "Procurement"],
  problem: [
    "Freight invoices are complex, and billing errors, accessorial charges, and gradual rate creep often go unnoticed for months or years, quietly inflating logistics spend.",
    "We audit freight cost data against contracted rates and market benchmarks, and calculate true cost-to-serve by lane and carrier, so you can see exactly where money is being lost and negotiate from a position of evidence.",
  ],
  offerings: ["Freight invoice audit for billing errors", "Rate benchmarking against market indices", "True cost-to-serve calculation by lane and carrier", "Carrier contract compliance monitoring", "Freight spend forecasting"],
  tools: ["SQL", "Python", "Freight audit tools"],
  workflow: [
    { title: "Audit Invoices", description: "Freight invoices are checked against contracted rates to catch billing errors and unauthorized surcharges." },
    { title: "Benchmark Rates", description: "Your rates are compared against market indices to identify where you're paying above market." },
    { title: "Calculate True Cost", description: "Cost-to-serve is calculated by lane and carrier, including hidden accessorial charges." },
    { title: "Support Negotiation", description: "Findings are packaged as evidence for carrier rate negotiations." },
  ],
  whyUs: ["Catches billing errors that manual invoice review typically misses", "Benchmarks against real market rate data, not assumptions", "Calculates true cost including accessorial charges often overlooked", "Findings are structured specifically to support carrier negotiations"],
  faqs: [
    { q: "How much can typically be recovered from a freight audit?", a: "This varies by shipping volume and current billing accuracy, but freight invoice errors are common enough that most audits identify some recoverable spend." },
    { q: "Can this help us negotiate better carrier rates?", a: "Yes, the market benchmarking and cost analysis are specifically structured to give you evidence for rate negotiations, not just internal reporting." },
  ],
  metaDescription: "Freight cost analytics that audit invoices for billing errors and benchmark rates against the market to find hidden logistics cost.",
  serviceType: "Logistics Analytics",
};
