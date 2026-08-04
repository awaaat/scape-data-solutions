export const manufacturingKPIs = {
  slug: "manufacturing-kpis",
  category: "Manufacturing & Supply Chain",
  priority: "Medium Priority",

  hero: {
    eyebrow: "Manufacturing & Supply Chain",
    title: "Manufacturing KPIs",
    subtitle:
      "Data-driven Manufacturing KPIs that improve throughput, reduce downtime, and cut operating costs.",
    description:
      "Track OEE, yield, scrap rate, and downtime in one live dashboard instead of chasing numbers across spreadsheets and shift reports. See where the line is losing time and cost before it shows up on the P&L.",
    primaryCta: { label: "Get Started", href: "/contact" },
    secondaryCta: { label: "See Our Work", href: "/portfolio" },
  },

  stats: [
    { value: "1M+", label: "Data points processed daily" },
    { value: "<200ms", label: "Average query latency" },
    { value: "5+", label: "Integration methods" },
  ],

  overview: {
    heading: "One dashboard for the numbers that run the plant",
    body:
      "Most plants track KPIs after the fact, pulled together manually at the end of a shift or a week. By then the downtime has already happened and the scrap is already made. We connect directly to your production data so OEE, yield, cycle time, and cost-per-unit update as the line runs, and flag the shifts, machines, or SKUs quietly dragging performance down.",
  },

  features: [
    {
      icon: "activity",
      title: "Process Monitoring",
      description:
        "Live OEE, throughput, and cycle-time tracking by line, shift, and machine, updated as production runs.",
    },
    {
      icon: "search",
      title: "Root-Cause Analysis",
      description:
        "Downtime and scrap automatically tied back to the machine, shift, operator, or material batch behind it.",
    },
    {
      icon: "trending-up",
      title: "Forecasting",
      description:
        "Predict output, bottlenecks, and maintenance needs before they hit the schedule, based on your own production history.",
    },
    {
      icon: "refresh-cw",
      title: "Continuous Improvement",
      description:
        "Track the impact of process changes over time, so improvement initiatives are backed by data, not gut feel.",
    },
  ],

  kpisTracked: [
    "Overall Equipment Effectiveness (OEE)",
    "Yield & First-Pass Quality",
    "Scrap & Rework Rate",
    "Downtime by Cause",
    "Cycle Time & Throughput",
    "Cost per Unit",
    "Labor & Machine Utilization",
    "On-Time Delivery",
  ],

  whyItMatters: {
    heading: "Why manufacturing KPI tracking pays for itself",
    points: [
      {
        title: "Catch problems on the shift they happen",
        description:
          "Real-time alerts on downtime, scrap, and quality drift mean supervisors can act during the shift, not review it a week later.",
      },
      {
        title: "See the real cost of every line",
        description:
          "Cost-per-unit and utilization by line and SKU show which products and machines are actually profitable.",
      },
      {
        title: "Stop rebuilding reports by hand",
        description:
          "One connected source of truth replaces the manual spreadsheet rollups most plants still run at shift-end.",
      },
    ],
  },

  integrations: [
    "MES & SCADA systems",
    "ERP platforms",
    "PLC & sensor data",
    "Power BI, Tableau, Looker",
  ],

  cta: {
    heading: "Ready to see your plant's numbers in real time?",
    subheading:
      "Let's discuss how a live KPI dashboard can cut downtime and cost on your line.",
    primaryCta: { label: "Contact Sales", href: "/contact" },
    secondaryCta: { label: "View Our Work", href: "/portfolio" },
  },
};