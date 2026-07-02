// src/data/industryLandingPages.js
//
// One entry per high-intent search term we're targeting with a dedicated
// landing page (as opposed to the broad /solutions page, which covers
// 20+ industries at a survey level). Each key becomes a route like
// /dental-analytics — see App.jsx and IndustryLandingPage.jsx.

const industryLandingPages = {
  "dental-analytics": {
    slug: "dental-analytics",
    industry: "Dental Practices",
    metaTitle: "Dental Practice Analytics & AI Dashboards | Scape Data Solutions",
    metaDescription:
      "Automated dental practice analytics — patient retention, no-show prediction, and KPI dashboards built from your practice management data. Book a free demo.",
    badge: "Dental Practice Analytics",
    heroTitle: "Know What's Actually Driving Your Practice's Revenue",
    heroSubtitle:
      "Scape connects to your practice management software and turns years of appointment, billing, and patient data into a live dashboard — so you can see recall gaps, no-show risk, and revenue leakage before they show up on your P&L.",
    painPoints: [
      "Revenue looks fine most months, but you can't tell why some months underperform.",
      "No-shows and cancellations eat into chair time and nobody catches the pattern until it's a habit.",
      "Recall patients quietly stop coming back and no one notices until they've been gone a year.",
      "Every KPI lives in a different report, or in someone's head.",
    ],
    kpis: [
      { name: "No-show rate", description: "Track and predict which upcoming appointments are at risk." },
      { name: "Patient retention", description: "See exactly which recall patients are overdue, and for how long." },
      { name: "Case acceptance rate", description: "Understand which treatment plans convert and which stall." },
      { name: "Chair utilization", description: "Spot underused operatory hours before they become a scheduling problem." },
      { name: "Production per provider", description: "Compare performance across hygienists and dentists fairly." },
      { name: "Collections ratio", description: "Catch insurance and billing leakage before it compounds." },
    ],
    howItWorks: [
      {
        step: "Connect",
        description: "We securely connect to your practice management system (Dentrix, Eaglesoft, Open Dental, and others) — no manual exports required.",
      },
      {
        step: "Build",
        description: "We build a dashboard around the metrics that matter for your practice specifically, not a generic template.",
      },
      {
        step: "Predict",
        description: "AI models flag which patients are likely to no-show or churn, so your front desk knows exactly who to call.",
      },
      {
        step: "Act",
        description: "You get a weekly view your whole team can act on, not a report that sits unread.",
      },
    ],
    relatedArticleSlugs: ["dental-kpi-dashboard", "reduce-dental-no-shows", "patient-retention-dental-clinic"],
    ctaHeading: "See your practice's numbers, automatically.",
    ctaSub: "Book a free walkthrough. We'll show you what your dashboard would actually look like with your data.",
  },

  "veterinary-analytics": {
    slug: "veterinary-analytics",
    industry: "Veterinary Practices",
    metaTitle: "Veterinary Practice Analytics & AI Dashboards | Scape Data Solutions",
    metaDescription:
      "Automated veterinary practice analytics — client retention, appointment forecasting, and revenue dashboards built from your practice management data.",
    badge: "Veterinary Practice Analytics",
    heroTitle: "Turn Years of Appointment Data Into a Clear Growth Plan",
    heroSubtitle:
      "Scape builds a live analytics dashboard from your veterinary practice management software — surfacing client retention gaps, appointment forecasting, and revenue trends your spreadsheets can't show you.",
    painPoints: [
      "Client retention is hard to measure across wellness visits, sick visits, and boarding separately.",
      "Seasonal demand swings make staffing and scheduling guesswork.",
      "Missed appointments and reschedules quietly reduce revenue every month.",
      "Reporting across multiple locations means stitching together spreadsheets by hand.",
    ],
    kpis: [
      { name: "Client retention rate", description: "See which clients haven't returned within their expected interval." },
      { name: "No-show / reschedule rate", description: "Understand where scheduling friction is costing you revenue." },
      { name: "Revenue per visit", description: "Compare performance across services, providers, and locations." },
      { name: "New client acquisition", description: "Track new clients against marketing spend and referral sources." },
      { name: "Appointment forecasting", description: "Anticipate seasonal demand swings before they hit your schedule." },
      { name: "Multi-location comparison", description: "Compare performance across every clinic from one dashboard." },
    ],
    howItWorks: [
      {
        step: "Connect",
        description: "We connect to your practice management system and pull appointment, billing, and client data automatically.",
      },
      {
        step: "Build",
        description: "We build dashboards tailored to how your clinic actually operates — single-location or multi-site.",
      },
      {
        step: "Predict",
        description: "AI models forecast demand and flag clients at risk of not rebooking.",
      },
      {
        step: "Act",
        description: "Your team gets one weekly view to work from, rather than reports from five different systems.",
      },
    ],
    relatedArticleSlugs: ["dental-kpi-dashboard", "reduce-dental-no-shows", "patient-retention-dental-clinic"],
    ctaHeading: "See your clinic's numbers, automatically.",
    ctaSub: "Book a free walkthrough and we'll show you what this looks like with your own data.",
  },

  "medical-practice-analytics": {
    slug: "medical-practice-analytics",
    industry: "Medical Practices",
    metaTitle: "Medical Practice Analytics & AI Dashboards | Scape Data Solutions",
    metaDescription:
      "Automated medical practice analytics — patient retention, no-show prediction, and revenue dashboards built directly from your EHR and billing data.",
    badge: "Medical Practice Analytics",
    heroTitle: "Turn Your EHR and Billing Data Into a Real-Time Dashboard",
    heroSubtitle:
      "Scape connects to your practice's EHR and billing systems to build a live dashboard covering patient retention, no-show risk, and revenue cycle performance — without adding work for your front-office staff.",
    painPoints: [
      "Revenue cycle issues (denials, aging AR, underpayments) are discovered weeks after they happen.",
      "No-shows disrupt provider schedules and nobody has visibility into who's at risk.",
      "Patient panels grow but it's unclear which patients have quietly stopped coming back.",
      "Reporting requires pulling data manually from multiple systems every month.",
    ],
    kpis: [
      { name: "No-show rate", description: "Predict which upcoming appointments are at risk before they happen." },
      { name: "Patient retention", description: "Track which patients haven't returned within their expected care interval." },
      { name: "Collections ratio", description: "Catch revenue cycle leakage — denials, aging AR, underpayments — early." },
      { name: "Provider productivity", description: "Compare visit volume and revenue per provider fairly." },
      { name: "Panel growth", description: "Understand net patient growth, not just new patient count." },
      { name: "Appointment utilization", description: "See where schedule gaps are costing you the most." },
    ],
    howItWorks: [
      {
        step: "Connect",
        description: "We connect to your EHR and billing systems securely, with no disruption to your existing workflow.",
      },
      {
        step: "Build",
        description: "We build a dashboard around your practice's specialty and how you actually track performance.",
      },
      {
        step: "Predict",
        description: "AI models flag no-show risk and revenue cycle issues before they show up in a monthly report.",
      },
      {
        step: "Act",
        description: "Your practice manager gets one dashboard to run the business from, updated automatically.",
      },
    ],
    relatedArticleSlugs: ["dental-kpi-dashboard", "reduce-dental-no-shows", "patient-retention-dental-clinic"],
    ctaHeading: "See your practice's numbers, automatically.",
    ctaSub: "Book a free walkthrough. We'll show you what your dashboard would actually look like with your data.",
  },
};

export default industryLandingPages;
