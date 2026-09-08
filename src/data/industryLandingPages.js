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
    heroStats: [
      { value: "2–4 wks", label: "to first live dashboard" },
      { value: "0", label: "manual exports required" },
      { value: "6+", label: "KPIs tracked automatically" },
    ],

    painPoints: [
      {
        title: "Revenue looks fine, until it doesn't",
        description:
          "Production numbers move month to month and nobody can say exactly why — until it's already a bad quarter.",
      },
      {
        title: "No-shows quietly become a habit",
        description:
          "Cancellations eat into chair time every week, but the pattern only gets noticed after months of lost production.",
      },
      {
        title: "Recall patients disappear silently",
        description:
          "Patients fall off the recall schedule and nobody notices until they've been gone a full year — or gone to a competitor.",
      },
      {
        title: "Every number lives somewhere different",
        description:
          "Production, collections, and recall data are split across your PMS, spreadsheets, and someone's memory — never in one place.",
      },
    ],

    comparison: {
      before: [
        "Monthly reports built by hand from PMS exports",
        "No-shows discovered after the appointment is missed",
        "Recall gaps found by accident, if at all",
        "Provider performance compared informally, if ever",
      ],
      after: [
        "Live dashboard updates automatically, every day",
        "At-risk appointments flagged before they happen",
        "Overdue recall patients surfaced weekly, by name",
        "Provider and hygienist production compared side by side",
      ],
    },

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
        description:
          "We securely connect to your practice management system (Dentrix, Eaglesoft, Open Dental, and others) — no manual exports required.",
      },
      {
        step: "Build",
        description:
          "We build a dashboard around the metrics that matter for your practice specifically, not a generic template.",
      },
      {
        step: "Predict",
        description:
          "AI models flag which patients are likely to no-show or churn, so your front desk knows exactly who to call.",
      },
      {
        step: "Act",
        description: "You get a weekly view your whole team can act on, not a report that sits unread.",
      },
    ],

    whoItsFor: [
      "Single-location general practices",
      "Multi-provider group practices",
      "DSOs standardizing reporting across locations",
      "Practices switching from spreadsheet reporting",
    ],

    differentiators: [
      {
        title: "Built on your PMS, not a generic template",
        description: "Every dashboard is built around your specialty mix, fee schedule, and how your team actually works.",
      },
      {
        title: "Predictive, not just historical",
        description: "We don't just show you last month's numbers — we flag which patients and appointments need attention this week.",
      },
      {
        title: "No new software to learn",
        description: "Your PMS stays the system of record. The dashboard sits on top, updating itself automatically.",
      },
      {
        title: "A partner, not a one-off report",
        description: "As your practice grows or adds providers, your dashboard evolves with it, no rebuild required.",
      },
    ],

    testimonial: {
      quote:
        "We went from finding out about recall drop-off by accident to getting a weekly list of exactly who to call. It changed how our front desk operates.",
      name: "Practice Manager",
      role: "Multi-provider general dental practice",
    },

    faqs: [
      {
        q: "Which practice management systems do you support?",
        a: "We connect directly to Dentrix, Eaglesoft, Open Dental, and most major PMS platforms. If you use something else, tell us during your walkthrough and we'll confirm compatibility.",
      },
      {
        q: "Will this require extra work from my front desk team?",
        a: "No. The connection is read-only and automatic. Your team keeps working in the PMS exactly as before — the dashboard simply reflects what's already there.",
      },
      {
        q: "How long until we see our first dashboard?",
        a: "Most practices see a working first version within 2 to 4 weeks, with refinements based on your feedback after that.",
      },
      {
        q: "Can this work across multiple locations?",
        a: "Yes. Multi-location practices and DSOs get a single dashboard that compares performance across every site, alongside per-location views.",
      },
    ],

    relatedArticleSlugs: [
      "dental-kpi-dashboard",
      "reduce-dental-no-shows",
      "patient-retention-dental-clinic",
      "why-your-dental-practice-numbers-are-lying-to-you",
    ],
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
    heroStats: [
      { value: "2–4 wks", label: "to first live dashboard" },
      { value: "1", label: "dashboard for every location" },
      { value: "6+", label: "KPIs tracked automatically" },
    ],

    painPoints: [
      {
        title: "Retention is measured in fragments",
        description:
          "Wellness visits, sick visits, and boarding all tell a different retention story — and nobody's stitching them together.",
      },
      {
        title: "Seasonal swings are pure guesswork",
        description:
          "Staffing and scheduling get built on gut feel instead of the demand patterns already sitting in your data.",
      },
      {
        title: "Missed appointments bleed revenue quietly",
        description:
          "No-shows and reschedules chip away at monthly revenue in a way that never shows up as one big, obvious number.",
      },
      {
        title: "Multi-location reporting means spreadsheets",
        description:
          "Comparing clinics means manually pulling exports and stitching them together by hand, every single month.",
      },
    ],

    comparison: {
      before: [
        "Retention tracked loosely, if at all, per visit type",
        "Staffing decisions based on gut feel",
        "Reschedules and no-shows go unmeasured",
        "Multi-location comparisons built in spreadsheets",
      ],
      after: [
        "One retention number across wellness, sick, and boarding",
        "Demand forecasts built from your own seasonal history",
        "At-risk clients flagged before their next visit is missed",
        "Every clinic compared side by side, automatically",
      ],
    },

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

    whoItsFor: [
      "Single-site companion animal clinics",
      "Multi-location veterinary groups",
      "Practices with heavy seasonal demand swings",
      "Clinics tracking wellness, sick, and boarding separately",
    ],

    differentiators: [
      {
        title: "Built for how clinics actually run",
        description: "We separate wellness, sick, and boarding revenue instead of blending them into one misleading number.",
      },
      {
        title: "Forecasting, not just reporting",
        description: "See seasonal demand swings coming weeks ahead, so staffing decisions stop being reactive.",
      },
      {
        title: "One view across every location",
        description: "Multi-site groups get a single dashboard that compares clinics fairly, without a single manual export.",
      },
      {
        title: "No disruption to your PMS",
        description: "Your practice management system stays exactly as is. The dashboard reads from it, automatically.",
      },
    ],

    testimonial: {
      quote:
        "Our busiest and slowest months used to catch us off guard every year. Now we can see the seasonal pattern coming and staff for it ahead of time.",
      name: "Clinic Operations Lead",
      role: "Multi-location veterinary group",
    },

    faqs: [
      {
        q: "Which practice management systems do you support?",
        a: "We connect to Cornerstone, AVImark, ezyVet, and most major veterinary PMS platforms. Let us know what you use during your walkthrough.",
      },
      {
        q: "Can you separate wellness, sick, and boarding revenue?",
        a: "Yes — this is one of the most common requests we get, and it's built into the dashboard from day one.",
      },
      {
        q: "Do you support multi-location clinics?",
        a: "Yes. You get one dashboard that rolls up all locations, plus the ability to drill into any single clinic.",
      },
      {
        q: "How does appointment forecasting work?",
        a: "We use your own historical appointment data to model seasonal demand, so you can see busy and slow periods coming weeks in advance.",
      },
    ],

    relatedArticleSlugs: [
      "veterinary-kpi-dashboard",
      "veterinary-client-retention",
      "how-to-measure-veterinary-clinic-performance",
    ],
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
    heroStats: [
      { value: "2–4 wks", label: "to first live dashboard" },
      { value: "0", label: "added front-office work" },
      { value: "6+", label: "KPIs tracked automatically" },
    ],

    painPoints: [
      {
        title: "Revenue cycle issues surface weeks late",
        description: "Denials, aging AR, and underpayments are usually discovered a full billing cycle after they happened.",
      },
      {
        title: "No-shows disrupt the whole schedule",
        description: "Providers lose productive time to missed appointments, with no early visibility into who's actually at risk.",
      },
      {
        title: "Patients quietly stop coming back",
        description: "Panels keep growing on paper, but it's unclear how many existing patients have silently churned.",
      },
      {
        title: "Reporting means pulling from everywhere",
        description: "EHR, billing, and scheduling data all live in separate systems that someone has to manually reconcile.",
      },
    ],

    comparison: {
      before: [
        "AR and denial issues found a billing cycle late",
        "No-show risk invisible until the seat is empty",
        "Patient churn tracked informally, if at all",
        "Reports assembled by hand from 3+ systems",
      ],
      after: [
        "Revenue cycle leakage flagged as it happens",
        "At-risk appointments surfaced before they're missed",
        "Panel growth measured net of quiet churn",
        "One live dashboard, sourced automatically",
      ],
    },

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

    whoItsFor: [
      "Independent primary care practices",
      "Specialty groups with multiple providers",
      "Practices managing their own revenue cycle",
      "Multi-location medical groups",
    ],

    differentiators: [
      {
        title: "Built around your EHR, not against it",
        description: "We connect to what you already use — Epic, athenahealth, eClinicalWorks, and others — with no rip-and-replace.",
      },
      {
        title: "Revenue cycle visibility, in real time",
        description: "Denials, aging AR, and underpayments surface as they happen, not a billing cycle later.",
      },
      {
        title: "No added front-office burden",
        description: "The connection is read-only and automatic — your staff keeps working exactly as they do today.",
      },
      {
        title: "One dashboard, every specialty",
        description: "Whether it's a single-provider practice or a multi-site specialty group, the metrics are built around how you actually operate.",
      },
    ],

    testimonial: {
      quote:
        "We used to find out about billing problems a month later, buried in a report. Now we see it the week it happens, and we can actually do something about it.",
      name: "Practice Administrator",
      role: "Multi-provider medical group",
    },

    faqs: [
      {
        q: "Which EHR and billing systems do you support?",
        a: "We connect to Epic, athenahealth, eClinicalWorks, and most major EHR and billing platforms. Tell us what you use and we'll confirm compatibility during your walkthrough.",
      },
      {
        q: "Is patient data handled securely?",
        a: "Yes. Connections are read-only, encrypted, and built to align with HIPAA requirements throughout.",
      },
      {
        q: "Will this add work for our front office or billing team?",
        a: "No. There's no new software for your team to learn — the dashboard reads from systems you already use, automatically.",
      },
      {
        q: "How quickly can we see revenue cycle issues?",
        a: "Once connected, denials, aging AR, and underpayments surface on your dashboard as they occur, not weeks later in a monthly report.",
      },
    ],

    relatedArticleSlugs: [
      "medical-practice-revenue-cycle-analytics",
      "reduce-patient-no-shows-predictive-analytics",
      "data-analytics-consulting-services-guide",
    ],
    ctaHeading: "See your practice's numbers, automatically.",
    ctaSub: "Book a free walkthrough. We'll show you what your dashboard would actually look like with your data.",
  },
};

export default industryLandingPages;