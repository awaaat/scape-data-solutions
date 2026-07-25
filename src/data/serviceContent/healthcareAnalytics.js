// src/data/serviceContent/healthcareAnalytics.js
//
// Healthcare & clinical analytics.
// Each export matches the prop shape expected by ServiceContentPage.

export const healthcareBI = {
  slug: "healthcare-bi",
  name: "Healthcare BI",
  nameHighlight: "Healthcare",
  badge: "Clinical & Operational Data, Unified",
  heroSub: "Business intelligence built for healthcare's specific data structures, compliance needs, and reporting cadence.",
  heroQuote: "Our clinical and financial data live in completely different systems that never talk to each other.",
  stats: [{ value: "Unified", label: "Clinical and operational view" }, { value: "Compliant", label: "Reporting built with healthcare needs in mind" }, { value: "Actionable", label: "Not just compliance dashboards" }],
  audience: ["Hospitals", "Health Systems", "Clinics", "Healthcare Administrators"],
  problem: [
    "Healthcare data is fragmented across EHR, billing, and operational systems, each with its own structure and access restrictions, making a unified view of performance genuinely hard to build without healthcare-specific expertise.",
    "We build BI solutions designed around healthcare's specific data structures and compliance requirements, unifying clinical and operational data into dashboards that support real decisions, not just compliance reporting.",
  ],
  offerings: ["EHR, billing, and operational data integration", "Clinical and financial KPI dashboards", "Compliance-ready reporting", "Data governance suited to healthcare access requirements", "Self-serve reporting for clinical and administrative teams"],
  tools: ["SQL", "Power BI", "EHR data integration", "HL7/FHIR"],
  workflow: [
    { title: "Map Data Sources", description: "We identify where clinical, financial, and operational data live and how they need to connect." },
    { title: "Integrate & Model", description: "Data is unified into a consistent model, respecting healthcare data structures and access rules." },
    { title: "Build Dashboards", description: "KPI dashboards are designed for both clinical and administrative decision-making." },
    { title: "Govern Access", description: "Data governance is set up to meet healthcare's specific compliance and privacy requirements." },
  ],
  whyUs: ["Built with healthcare-specific data structures and compliance in mind, not a generic BI template", "Unifies clinical and financial views that usually live in separate silos", "Governance respects healthcare access and privacy requirements", "Designed for real decision-making, not just compliance box-checking"],
  faqs: [
    { q: "Can this integrate with our EHR system?", a: "Yes, we work with standard healthcare data formats and integration approaches (HL7/FHIR) to connect with most major EHR systems." },
    { q: "How do you handle patient data privacy requirements?", a: "We design access controls and data handling specifically around healthcare privacy requirements from the start of the project, not as an afterthought." },
  ],
  metaDescription: "Healthcare business intelligence that unifies clinical and operational data, built around healthcare's specific compliance and data needs.",
  serviceType: "Healthcare Analytics",
};

export const healthcareDashboardDevelopment = {
  slug: "healthcare-dashboard-development",
  name: "Healthcare Dashboard Development",
  nameHighlight: "Dashboard",
  badge: "Built for Clinical & Operational Decisions",
  heroSub: "Custom healthcare dashboards that support real clinical and operational decisions, not just static compliance reports.",
  heroQuote: "Our dashboards get generated monthly and nobody acts on them until the next crisis.",
  stats: [{ value: "Decision-First", label: "Dashboard design" }, { value: "Real-Time", label: "Where clinically relevant" }, { value: "Role-Specific", label: "Views for clinical vs. admin users" }],
  audience: ["Hospitals", "Clinics", "Health Systems", "Clinical & Administrative Leaders"],
  problem: [
    "Many healthcare dashboards are built as static, generic reports that get generated and forgotten, rather than tools clinicians and administrators actually check to make decisions.",
    "We design dashboards around the specific decisions each role needs to make — a charge nurse managing bed capacity, an administrator tracking cost, a physician tracking patient outcomes — with real-time data where it matters clinically.",
  ],
  offerings: ["Custom dashboard design by role (clinical, operational, executive)", "Real-time data integration where clinically relevant", "KPI tracking for outcomes, cost, and capacity", "Alerting for critical thresholds", "Mobile-friendly access for clinical staff"],
  tools: ["Power BI", "SQL", "EHR data integration"],
  workflow: [
    { title: "Define Role Needs", description: "We identify what decisions each user role — clinical, operational, executive — actually needs to make." },
    { title: "Design by Role", description: "Dashboards are tailored to each role rather than a single generic view for everyone." },
    { title: "Integrate Real-Time Data", description: "Clinically time-sensitive metrics are updated in near real time, not batch-refreshed overnight." },
    { title: "Deploy & Alert", description: "Critical thresholds trigger alerts so issues get attention when they happen." },
  ],
  whyUs: ["Dashboards are role-specific, not one generic view for every user", "Real-time data where clinical urgency actually requires it", "Built to trigger action, not just display information", "Mobile-friendly for clinical staff who aren't at a desk"],
  faqs: [
    { q: "Can different roles see different dashboards?", a: "Yes, we design role-specific views by default — a nurse manager and a hospital administrator need very different information." },
    { q: "How real-time does the data need to be?", a: "We assess this per metric — some (like bed capacity) benefit from real-time updates, others (like monthly cost trends) don't need to be." },
  ],
  metaDescription: "Custom healthcare dashboard development designed around real clinical and operational decisions, with role-specific views and alerting.",
  serviceType: "Healthcare Analytics",
};

export const clinicAnalytics = {
  slug: "clinic-analytics",
  name: "Clinic Analytics",
  nameHighlight: "Clinic",
  badge: "Practice Performance, Clearly Measured",
  heroSub: "Appointment, wait time, and outcome data turned into a clear view of how your clinic is actually running.",
  heroQuote: "We can feel that scheduling is a mess, but we can't point to why.",
  stats: [{ value: "Real-Time", label: "Clinic operations visibility" }, { value: "Predictive", label: "Demand forecasting for staffing" }, { value: "Tracked", label: "Patient satisfaction alongside efficiency" }],
  audience: ["Clinics", "Medical Practices", "Practice Managers", "Multi-Location Providers"],
  problem: [
    "Clinics generate scheduling, billing, and clinical data constantly, but most practices only notice a problem — long waits, high no-show rates, underused appointment slots — once patients start complaining.",
    "We build analytics that track appointment lead times, no-show rates, clinician utilization, and patient satisfaction together, so operational issues are visible before they become a pattern of complaints.",
  ],
  offerings: ["Appointment and no-show rate tracking", "Clinician utilization analysis", "Patient satisfaction correlation with operations", "Demand forecasting for scheduling and staffing", "Real-time operational dashboards"],
  tools: ["SQL", "Power BI", "Practice management system integration"],
  workflow: [
    { title: "Connect Practice Data", description: "We integrate your scheduling, billing, and EHR data into one operational view." },
    { title: "Track Key Metrics", description: "No-shows, wait times, and utilization are tracked continuously, not reviewed only when complaints arise." },
    { title: "Forecast Demand", description: "Appointment demand is forecast to support smarter scheduling and staffing decisions." },
    { title: "Surface Issues Early", description: "Dashboards flag emerging problems — a specific day, provider, or service line — before they compound." },
  ],
  whyUs: ["Tracks operations continuously, not just after complaints surface", "Connects satisfaction data to operational causes, not treated separately", "Forecasts demand to support proactive scheduling", "Built to work with your existing practice management system"],
  faqs: [
    { q: "Can this integrate with our practice management software?", a: "Yes, we design integrations around your existing system rather than requiring a replacement." },
    { q: "How does this help reduce no-shows specifically?", a: "We identify which patient segments, appointment types, or times of day have the highest no-show risk, so you can target reminders or scheduling changes where they matter most." },
  ],
  metaDescription: "Clinic analytics tracking appointments, wait times, and clinician utilization, so operational issues surface before patients complain.",
  serviceType: "Healthcare Analytics",
};

export const clinicalDecisionSupport = {
  slug: "clinical-decision-support",
  name: "Clinical Decision Support",
  nameHighlight: "Decision Support",
  badge: "Evidence-Based Alerts at the Point of Care",
  heroSub: "Clinical decision support tools that surface patient-specific risk and evidence-based recommendations directly in your workflow.",
  heroQuote: "The relevant guideline exists, it's just not in front of the clinician when the decision is being made.",
  stats: [{ value: "Real-Time", label: "Patient risk alerts" }, { value: "Evidence-Based", label: "Recommendations, not guesses" }, { value: "Integrated", label: "Into the EHR workflow" }],
  audience: ["Hospitals", "Clinics", "Clinical Informatics Teams", "Health Systems"],
  problem: [
    "Clinicians make decisions under time pressure with incomplete visibility into a patient's full history and the latest evidence-based guidelines — the information exists, it's just not surfaced at the point of decision.",
    "We build clinical decision support tools that integrate patient data with evidence-based guidelines to deliver real-time alerts and recommendations directly within the clinical workflow, not a separate system to check.",
  ],
  offerings: ["Real-time clinical risk alerts (e.g. sepsis, deterioration)", "Evidence-based recommendation integration", "Patient-specific risk scoring", "EHR workflow integration", "Alert effectiveness and adoption tracking"],
  tools: ["SQL", "Python", "EHR integration (HL7/FHIR)"],
  workflow: [
    { title: "Identify Decision Points", description: "We find where clinicians would benefit most from evidence-based support in their existing workflow." },
    { title: "Build Risk Models", description: "Patient-specific risk scores are built from clinical data — labs, vitals, history." },
    { title: "Integrate into EHR", description: "Alerts and recommendations appear directly in the clinical workflow, not a separate tool." },
    { title: "Measure Adoption", description: "We track whether clinicians act on alerts and whether outcomes improve as a result." },
  ],
  whyUs: ["Alerts appear inside the EHR workflow, not a separate system to check", "Built on evidence-based guidelines, not generic thresholds", "We track actual clinician adoption, not just alert volume", "Designed to reduce alert fatigue by prioritizing genuinely actionable flags"],
  faqs: [
    { q: "Won't this add to alert fatigue clinicians already deal with?", a: "We specifically design for this — prioritizing high-value, actionable alerts over volume, and tracking adoption to catch alerts that get routinely ignored." },
    { q: "Can this integrate with our existing EHR?", a: "Yes, we build using standard healthcare interoperability formats (HL7/FHIR) to integrate with most major EHR systems." },
  ],
  metaDescription: "Clinical decision support tools that deliver evidence-based, patient-specific alerts directly inside the EHR workflow, not a separate system.",
  serviceType: "Healthcare Analytics",
};

export const hospitalAnalytics = {
  slug: "hospital-analytics",
  name: "Hospital Analytics",
  nameHighlight: "Hospital",
  badge: "Operational & Clinical Data, Together",
  heroSub: "Hospital-wide analytics connecting bed capacity, staffing, cost, and outcomes into one operational picture.",
  heroQuote: "Every department has their own numbers and none of them agree.",
  stats: [{ value: "Unified", label: "View across departments" }, { value: "Predictive", label: "Capacity and demand forecasting" }, { value: "Actionable", label: "Not just compliance reporting" }],
  audience: ["Hospitals", "Health Systems", "Hospital Administrators", "Operations Leaders"],
  problem: [
    "Hospital departments — bed management, staffing, finance, clinical quality — often each maintain separate reporting, making it hard to see the whole operational picture or understand how decisions in one area affect another.",
    "We build hospital-wide analytics that unify operational, financial, and clinical data, giving leadership one consistent view to base capacity, staffing, and investment decisions on.",
  ],
  offerings: ["Bed capacity and patient flow analytics", "Staffing and productivity tracking", "Cost and revenue cycle analysis", "Clinical quality and outcome metrics", "Predictive demand forecasting"],
  tools: ["SQL", "Power BI", "EHR/ERP integration"],
  workflow: [
    { title: "Unify Data Sources", description: "Operational, financial, and clinical data are integrated into one consistent hospital-wide view." },
    { title: "Build Core Dashboards", description: "Capacity, staffing, and quality metrics are surfaced together, not siloed by department." },
    { title: "Forecast Demand", description: "Predictive models support proactive capacity and staffing decisions." },
    { title: "Support Decisions", description: "Leadership gets one consistent view to base cross-departmental decisions on." },
  ],
  whyUs: ["One consistent hospital-wide view instead of siloed departmental reports", "Connects operational, financial, and clinical data together", "Forecasting supports proactive capacity and staffing planning", "Built for actual decision-making, not just compliance reporting"],
  faqs: [
    { q: "Can this work across multiple hospital sites?", a: "Yes, we design for multi-site comparison with consistent metric definitions across locations." },
    { q: "How does this differ from our existing department-level reports?", a: "This connects those reports into one consistent model so cross-departmental trade-offs (e.g. staffing vs. capacity) become visible, which siloed reports can't show." },
  ],
  metaDescription: "Hospital-wide analytics connecting bed capacity, staffing, cost, and clinical outcomes into one consistent operational view.",
  serviceType: "Healthcare Analytics",
};

export const hospitalOperationsAnalytics = {
  slug: "hospital-operations-analytics",
  name: "Hospital Operations Analytics",
  nameHighlight: "Operations",
  badge: "Efficiency Without Sacrificing Care",
  heroSub: "Operational data analyzed to reduce waste and bottlenecks without compromising patient care quality.",
  heroQuote: "We need to cut costs, but not in a way that hurts patient care.",
  stats: [{ value: "Efficiency", label: "Gains tied to real bottlenecks" }, { value: "Quality-Protected", label: "Metrics tracked alongside cost" }, { value: "Benchmarked", label: "Against your own baseline" }],
  audience: ["Hospitals", "Operations Directors", "Health System Executives", "Quality Improvement Teams"],
  problem: [
    "Cost-cutting initiatives that ignore operational detail risk cutting the wrong thing — reducing staff on a unit that's actually understaffed, or delaying a process step that's not actually the bottleneck.",
    "We analyze operational data to find genuine inefficiencies and bottlenecks, tracking quality metrics alongside cost so efficiency gains don't come at the expense of patient care.",
  ],
  offerings: ["Process and workflow bottleneck analysis", "Cost driver identification by department", "Quality metric tracking alongside efficiency initiatives", "Benchmarking against historical performance", "Operational improvement impact tracking"],
  tools: ["SQL", "Python", "Power BI"],
  workflow: [
    { title: "Map Operational Flow", description: "We trace patient and process flow through departments to find real bottlenecks." },
    { title: "Identify Cost Drivers", description: "Cost data is analyzed by department and process step, not just aggregated totals." },
    { title: "Protect Quality Metrics", description: "Quality and outcome measures are tracked alongside any efficiency initiative." },
    { title: "Track Impact", description: "We measure whether operational changes actually improved efficiency without harming care quality." },
  ],
  whyUs: ["Finds genuine bottlenecks, not assumed ones", "Quality metrics are tracked alongside cost, not ignored in pursuit of savings", "Benchmarked against your own historical baseline for fair comparison", "Tracks whether changes actually worked, not just implemented and assumed successful"],
  faqs: [
    { q: "How do you make sure cost-cutting doesn't hurt patient care?", a: "We track clinical quality and outcome metrics alongside every efficiency initiative, so any negative impact on care would be visible immediately." },
    { q: "Can this identify which specific department or process is the real bottleneck?", a: "Yes, that's the core purpose — tracing patient and process flow to find where delays or waste actually occur, not where they're assumed to be." },
  ],
  metaDescription: "Hospital operations analytics that find real efficiency gains and bottlenecks, tracking quality metrics alongside cost so care isn't compromised.",
  serviceType: "Healthcare Analytics",
};

export const medicalClaimsAnalytics = {
  slug: "medical-claims-analytics",
  name: "Medical Claims Analytics",
  nameHighlight: "Claims",
  badge: "Faster Processing, Fewer Losses",
  heroSub: "Claims data analyzed to speed up processing, catch fraud, and reduce denial rates.",
  heroQuote: "Denials keep coming back for the same reasons and nobody's tracking why.",
  stats: [{ value: "Faster", label: "Claims processing cycle" }, { value: "Flagged", label: "Fraud risk in real time" }, { value: "Reduced", label: "Denial rates through pattern analysis" }],
  audience: ["Payers", "Health Systems", "Billing Departments", "Insurance Providers"],
  problem: [
    "Claims processing involves enormous volume and complexity, and inefficiencies — slow processing, repeat denials, missed fraud — compound quietly across thousands of claims before anyone notices the pattern.",
    "We analyze claims data to speed up processing, identify recurring denial patterns worth fixing at the root, and flag suspicious claims for review before they're paid out incorrectly.",
  ],
  offerings: ["Claims processing time and bottleneck analysis", "Denial pattern identification and root-cause analysis", "Fraud risk scoring", "Provider and claimant risk profiling", "Claims dashboard and reporting"],
  tools: ["SQL", "Python", "Statistical modeling"],
  workflow: [
    { title: "Analyze Processing Flow", description: "We identify where claims slow down or get stuck in the processing pipeline." },
    { title: "Trace Denial Patterns", description: "Recurring denial reasons are traced to root causes, not just tallied." },
    { title: "Score Fraud Risk", description: "Claims are scored for fraud risk based on patterns in your historical data." },
    { title: "Report & Improve", description: "Dashboards track processing time, denial rates, and fraud flags over time." },
  ],
  whyUs: ["Traces denial patterns to root cause, not just counts them", "Fraud scoring based on your actual historical claims data", "Identifies specific processing bottlenecks, not a generic efficiency claim", "Reduces both processing time and payment risk simultaneously"],
  faqs: [
    { q: "Can this reduce our specific denial rate, not just flag denials generally?", a: "Yes, we trace denials to their specific root causes — a coding issue, a documentation gap, a particular provider — so you can fix the actual source." },
    { q: "How does fraud scoring work without a lot of false positives?", a: "We calibrate models against your own historical fraud cases to balance catching real fraud against flagging too many legitimate claims for review." },
  ],
  metaDescription: "Medical claims analytics that speed up processing, trace denial patterns to root cause, and flag fraud risk before claims are paid.",
  serviceType: "Healthcare Analytics",
};

export const healthcareRevenueAnalytics = {
  slug: "healthcare-revenue-analytics",
  name: "Healthcare Revenue Analytics",
  nameHighlight: "Revenue",
  badge: "See Where Revenue Actually Leaks",
  heroSub: "Revenue cycle data analyzed to find exactly where reimbursement is being lost — coding, denials, or collections.",
  heroQuote: "We know we're leaving money on the table, we just can't see where.",
  stats: [{ value: "Traced", label: "Revenue leakage by source" }, { value: "Benchmarked", label: "Against payer contracts" }, { value: "Tracked", label: "Collections performance over time" }],
  audience: ["Health Systems", "Revenue Cycle Teams", "Hospital Finance", "Medical Billing Departments"],
  problem: [
    "Revenue leakage in healthcare comes from many small sources — undercoding, denied claims, slow collections, contract underpayment — and without granular analysis, it's nearly impossible to tell which is actually costing the most.",
    "We analyze revenue cycle data end to end to trace exactly where reimbursement is being lost, benchmarked against your payer contracts, so remediation efforts target the largest leaks first.",
  ],
  offerings: ["Revenue cycle leakage analysis (coding, denials, collections)", "Payer contract benchmarking", "Collections performance tracking", "Reimbursement forecasting", "Revenue improvement opportunity prioritization"],
  tools: ["SQL", "Python", "Power BI"],
  workflow: [
    { title: "Map the Revenue Cycle", description: "We trace the full path from service delivery to payment, identifying where value is lost along the way." },
    { title: "Benchmark Against Contracts", description: "Actual reimbursement is compared against contracted rates to find underpayment." },
    { title: "Quantify Leakage", description: "Each leakage source is quantified so remediation can be prioritized by actual dollar impact." },
    { title: "Track Improvement", description: "Collections and reimbursement performance are tracked over time as fixes are implemented." },
  ],
  whyUs: ["Quantifies leakage by source, so you know what to fix first", "Benchmarks against your actual payer contracts, not generic industry rates", "Prioritizes by dollar impact, not just process improvement for its own sake", "Tracks whether fixes actually recovered revenue"],
  faqs: [
    { q: "Can you identify if we're being underpaid relative to our contracts?", a: "Yes, contract benchmarking against actual reimbursement is one of the most common and highest-value findings in this analysis." },
    { q: "How is this different from a standard revenue cycle report?", a: "We trace leakage to specific, quantified sources and prioritize by dollar impact, rather than presenting a general dashboard of metrics." },
  ],
  metaDescription: "Healthcare revenue analytics that trace reimbursement leakage to its source — coding, denials, or contract underpayment — and prioritize fixes by impact.",
  serviceType: "Healthcare Analytics",
};

export const patientFlowAnalytics = {
  slug: "patient-flow-analytics",
  name: "Patient Flow Analytics",
  nameHighlight: "Patient Flow",
  badge: "Reduce Wait Times, Improve Throughput",
  heroSub: "Patient movement data analyzed to find bottlenecks in admission, treatment, and discharge — and fix them.",
  heroQuote: "Patients are stuck waiting somewhere in our system and we can't pinpoint exactly where.",
  stats: [{ value: "Mapped", label: "End-to-end patient journey" }, { value: "Bottlenecks", label: "Identified, not assumed" }, { value: "Reduced", label: "Wait times through targeted fixes" }],
  audience: ["Hospitals", "Emergency Departments", "Operations Leaders", "Patient Experience Teams"],
  problem: [
    "Patients experience delays somewhere between admission, treatment, and discharge, but without tracing the full patient journey, it's hard to tell whether the bottleneck is triage, bed availability, lab turnaround, or discharge planning.",
    "We map the complete patient flow through your facility and identify precisely where delays accumulate, so improvement efforts target the actual bottleneck rather than a guess.",
  ],
  offerings: ["End-to-end patient journey mapping", "Bottleneck and wait time analysis by department", "Discharge planning efficiency analysis", "Real-time patient flow dashboards", "Capacity and staffing recommendations tied to flow data"],
  tools: ["SQL", "Python", "EHR integration"],
  workflow: [
    { title: "Map the Patient Journey", description: "We trace patient movement from admission through discharge across every department touchpoint." },
    { title: "Identify Bottlenecks", description: "Delays are quantified by department and step, revealing where time is actually being lost." },
    { title: "Build Real-Time Dashboards", description: "Current patient flow status is visible in real time, not reconstructed after the fact." },
    { title: "Recommend Fixes", description: "Findings translate into specific staffing or process recommendations tied to the actual bottleneck." },
  ],
  whyUs: ["Traces the full patient journey, not just one department in isolation", "Identifies actual bottlenecks with data, not assumptions", "Real-time visibility, not a retrospective monthly report", "Recommendations are tied to the specific bottleneck found"],
  faqs: [
    { q: "Can this show whether the bottleneck is in the ED, beds, or discharge?", a: "Yes, tracing the full journey by department is exactly how we identify which specific stage is actually causing the delay." },
    { q: "How real-time is the patient flow dashboard?", a: "We build for real-time or near-real-time visibility where your EHR/systems support it, so staff can act on current conditions, not yesterday's data." },
  ],
  metaDescription: "Patient flow analytics that map the full patient journey and identify exactly where wait times and bottlenecks accumulate.",
  serviceType: "Healthcare Analytics",
};
