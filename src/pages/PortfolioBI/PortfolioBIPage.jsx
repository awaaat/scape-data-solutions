// src/pages/PortfolioBI/PortfolioBIPage.jsx
import { useEffect, useState } from 'react';
import SEO from "../../components/SEO/SEO";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  TrendingDown,
  ChevronUp,
  Star,
  Activity,
  Zap,
  Target,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Database,
  Server,
  Cloud,
  Code,
  Layers,
  Gauge,
  Compass,
  ScrollText,
} from 'lucide-react';
import styles from './PortfolioBIPage.module.css';
import homeStyles from '../Home/HomePage.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// ─── ENTERPRISE BI DASHBOARD DATA ──────────────────────────────
const dashboardData = [
  {
    id: 1,
    title: 'Global Retail Sales Dashboard',
    client: 'Apex Retail Group',
    industry: 'Retail',
    year: '2025',
    duration: '14 weeks',
    kpi: { label: 'Total Revenue', value: '$24.8M', change: '+12.3%', trend: 'up' },
    secondaryKpis: [
      { label: 'YoY Growth', value: '18.4%' },
      { label: 'Avg Order Value', value: '$342' },
      { label: 'Customer Count', value: '12,450' },
    ],
    problem: `Apex Retail Group operated with six regional dispatch boards that never agreed with each other. Store managers relied on weekly PDF reports to make inventory decisions, leading to frequent stockouts in high‑demand stores and excess inventory in slower locations. The company lacked a single source of truth for sales performance, regional trends, and product‑level profitability. This fragmentation meant that decisions were often made based on outdated or incomplete information, resulting in lost revenue opportunities and frustrated store managers who could not get a clear picture of their performance.`,
    solution: `We built a unified dashboard that consolidates sales data from 45 countries in real time. The dashboard pulls from POS systems, inventory databases, and carrier APIs, providing a single command view for executives and store managers alike. Drill‑down capabilities allow users to go from global revenue to individual store performance in three clicks. The system automatically refreshes every 15 minutes, ensuring that all stakeholders have access to the most current data available.`,
    approach: `We started with a comprehensive discovery phase mapping all existing data sources and reporting needs across the organisation. We then designed a star schema data model in Azure SQL that could handle the volume and variety of data sources. We built ETL pipelines using Azure Data Factory to ingest and transform data from multiple systems, and developed the front‑end with Power BI using DAX for complex aggregations. The dashboard was rolled out in phases, with weekly feedback sessions from store managers to refine the design and ensure adoption.`,
    methodology: `Our methodology combined agile development with a user‑centered design approach. We conducted 25+ interviews with stakeholders across operations, finance, and store management to understand their reporting needs. We then created low‑fidelity prototypes to validate the design before moving to development. The final dashboard includes interactive filtering, drill‑through capabilities, and export functionality for offline analysis.`,
    challenges: `The main challenges included data quality issues across different regional systems, varying definitions of key metrics, and the need to handle high volumes of transaction data. We addressed these by implementing data validation rules, establishing a common data dictionary, and using incremental data loading to manage performance.`,
    charts: [
      { type: 'bar', title: 'Monthly Sales', data: [65, 78, 90, 85, 95, 88, 92, 78, 82, 94, 97, 101], color: '#4a6cf7' },
      { type: 'line', title: 'Revenue Trend', data: [120, 145, 132, 168, 155, 190, 175, 210, 195, 230, 220, 250], color: '#fdb840' },
      { type: 'donut', title: 'Revenue by Region', data: [45, 30, 15, 10], colors: ['#4a6cf7', '#fdb840', '#6c5ce7', '#e17055'] },
      { type: 'bar', title: 'Top Products', data: [85, 72, 68, 55, 42], color: '#00b894' },
    ],
    results: [
      `Reporting cycles reduced from 3 days to under 2 hours`,
      `Stockouts decreased by 18% across the network`,
      `Store managers saved 6 hours per week on manual reporting`,
      `Regional forecasting accuracy improved by 22%`,
      `Inventory holding costs reduced by 12%`,
    ],
    insights: [
      `North America accounts for 45% of total revenue, with a 22% YoY growth rate`,
      `Q4 sales increased 22% YoY due to successful holiday campaigns`,
      `Mobile channel conversion rate grew 18% in 2025, now representing 34% of all transactions`,
      `Private label products now contribute 12% of total revenue, up from 8% in 2024`,
      `Average order value is highest in the Asia‑Pacific region at $412`,
    ],
    tableData: [
      ['Product', 'Units Sold', 'Revenue', 'Margin', 'Growth'],
      ['Product A', '12,450', '$2.1M', '42%', '+15%'],
      ['Product B', '9,230', '$1.8M', '38%', '+12%'],
      ['Product C', '7,890', '$1.4M', '35%', '+8%'],
      ['Product D', '5,200', '$0.9M', '29%', '+5%'],
      ['Product E', '3,800', '$0.6M', '25%', '+3%'],
    ],
    tech: 'Power BI · Azure SQL · DAX · Power Query · Azure Data Factory',
    metric: '30% faster reporting cycles',
    impact: 'Stockouts reduced by 18%, saving $2.4M annually',
    fullDescription: `The dashboard also includes a forecasting module that predicts demand for the next 30 days, helping procurement teams plan orders more accurately. The system automatically alerts regional managers when inventory levels fall below safety stock thresholds. Additionally, the dashboard provides a "what‑if" analysis tool that allows users to simulate the impact of pricing changes, promotions, and supply chain disruptions on revenue and inventory levels. The solution has been so successful that Apex is now planning to extend it to their wholesale distribution division.`,
  },
  {
    id: 2,
    title: 'Healthcare Patient Flow Analytics',
    client: "St. Mary's Hospital",
    industry: 'Healthcare',
    year: '2024',
    duration: '8 weeks',
    kpi: { label: 'Patient Satisfaction', value: '92%', change: '+5.2%', trend: 'up' },
    secondaryKpis: [
      { label: 'Avg Length of Stay', value: '3.2 days' },
      { label: 'Bed Occupancy', value: '78%' },
      { label: 'Readmission Rate', value: '8.4%' },
    ],
    problem: `Ward managers at St. Mary's were tracking bed availability on whiteboards updated by hand every few hours. This manual process was error‑prone and resulted in significant admission delays. Nurses spent up to 2 hours per shift manually coordinating bed assignments, taking time away from patient care. The hospital had no reliable way to predict when beds would become available, leading to patients waiting in the emergency department for extended periods.`,
    solution: `We designed a live occupancy dashboard synced to admission, discharge, and transfer events from the hospital's EHR system. The dashboard provides real‑time occupancy rates for each ward, predictive alerts for wards approaching capacity, and a patient flow timeline that visualises movement through the hospital. The system also includes a bed‑turnover prediction model that estimates when beds will become available based on historical discharge patterns.`,
    approach: `We connected to the hospital's SQL Server database via secure VPN, built an ETL pipeline using Python to clean and transform the data, and visualised everything in Tableau. We also integrated a simple machine learning model using Scikit‑Learn to forecast discharge times based on historical patterns. The dashboard was designed with input from nursing supervisors and hospital administrators, with a mobile‑friendly version for on‑the‑go access.`,
    methodology: `We followed a rapid prototyping approach, delivering a functional dashboard within 4 weeks and iterating based on user feedback. We used Tableau's row‑level security features to ensure that staff could only see data for their wards. We also implemented automated email alerts for key metrics, such as when a ward reaches 85% occupancy or when there are more than 5 patients waiting for admission.`,
    challenges: `Data integration was the biggest challenge, as the hospital used multiple systems for admissions, discharges, and patient records. We had to work with the hospital's IT team to establish secure data connections and ensure data quality. We also needed to handle the sensitive nature of patient data by implementing strict data privacy and security measures, including encryption and access controls.`,
    charts: [
      { type: 'bar', title: 'Admissions by Day', data: [42, 38, 45, 52, 48, 41, 36], color: '#e17055' },
      { type: 'line', title: 'Length of Stay Trend', data: [4.2, 4.0, 3.8, 3.5, 3.3, 3.2, 3.0], color: '#00b894' },
      { type: 'gauge', title: 'Bed Occupancy', value: 78, max: 100, color: '#4a6cf7' },
      { type: 'donut', title: 'Patient Acuity', data: [45, 30, 25], colors: ['#6c5ce7', '#fdcb6e', '#00b894'] },
    ],
    results: [
      `Average admission wait time dropped from 67 minutes to 45 minutes`,
      `Emergency department throughput improved by 18%`,
      `Nursing staff reported 30% less manual data entry and coordination`,
      `Patient satisfaction scores increased from 87% to 92%`,
      `Bed‑turnover time reduced by 22%`,
    ],
    insights: [
      `Weekday admissions are 15% higher than weekends, with Mondays being the busiest day`,
      `Average length of stay has been decreasing over the last 6 months, down from 3.8 days`,
      `Readmission rate is highest for patients with chronic conditions (12.4%)`,
      `The new discharge alert system has reduced discharge delays by 40%`,
      `Patients with high acuity (ICU) have an average LOS of 5.8 days`,
    ],
    tableData: [
      ['Ward', 'Occupancy', 'Status', 'Acuity', 'Avg LOS'],
      ['Ward A', '34/40 (85%)', 'At Capacity', 'High', '4.2 days'],
      ['Ward B', '28/35 (80%)', 'Available', 'Medium', '3.1 days'],
      ['Ward C', '42/45 (93%)', 'Over Capacity', 'High', '4.8 days'],
      ['Ward D', '20/30 (67%)', 'Available', 'Low', '2.4 days'],
      ['Ward E', '15/25 (60%)', 'Available', 'Low', '1.8 days'],
    ],
    tech: 'Tableau · SQL Server · Python (ETL) · Scikit‑Learn · Azure DevOps',
    metric: '15% reduction in avg LOS',
    impact: 'Patient satisfaction up 22% and ED wait times reduced',
    fullDescription: `We also built a mobile‑friendly version for nursing supervisors to check bed availability on the go. The system now sends SMS alerts when a ward reaches 85% occupancy, giving staff time to plan discharges or transfers. The hospital is now exploring integration with their ambulance dispatch system to reduce offload delays. The dashboard has become an essential tool for daily operations, and the hospital is planning to extend it to their outpatient clinics and rehabilitation centres. The success of this project has led to a second phase focusing on predictive analytics for patient admissions and resource allocation.`,
  },
  {
    id: 3,
    title: 'Financial Services Command Center',
    client: 'Meridian Wealth Management',
    industry: 'Finance',
    year: '2025',
    duration: '9 weeks',
    kpi: { label: 'Assets Under Management', value: '$1.2B', change: '+12.4%', trend: 'up' },
    secondaryKpis: [
      { label: 'Portfolio Alpha', value: '3.8' },
      { label: 'Sharpe Ratio', value: '1.92' },
      { label: 'Active Clients', value: '2,840' },
    ],
    problem: `Meridian Wealth Management's advisory team was manually scoring portfolio performance against static benchmarks using complex spreadsheets. This process was time‑consuming, prone to errors, and did not account for changing market conditions. Investment advisors spent over 20 hours per week preparing client reports, leaving less time for client interaction and strategic planning. There was no centralised view of portfolio risk, and the firm lacked alerts for unusual market movements that could impact client portfolios.`,
    solution: `We built an executive dashboard that provides real‑time portfolio performance, risk metrics, and client acquisition trends with automated alerting for anomalies. The system scores portfolio health in real time and flags the ones that need a human review. The dashboard consolidates data from multiple custodians and market data providers, providing a unified view of all client assets.`,
    approach: `We developed a data pipeline that ingests data from several sources: custodian APIs, market data feeds, and the firm's CRM system. We used BigQuery as the data warehouse and Looker for visualisation, with dbt for data transformation. The risk model was trained on five years of historical market data, incorporating macroeconomic indicators, sector trends, and volatility measures.`,
    methodology: `We followed a model‑driven development approach, starting with building the risk model in Python using statistical and machine learning techniques. Once validated, we integrated the model into the data pipeline and built the dashboard around it. We conducted extensive testing with the advisory team to ensure the model accurately reflected their investment philosophy and provided actionable insights.`,
    challenges: `The biggest challenge was integrating data from multiple custodians with different data formats and APIs. We had to build custom connectors for each system and implement robust error handling to ensure data reliability. We also needed to balance model complexity with interpretability, as advisors needed to explain the risk scores to clients. We addressed this by providing detailed breakdowns of risk factors and allowing users to adjust model parameters.`,
    charts: [
      { type: 'line', title: 'Portfolio Performance', data: [5, 8, 12, 15, 18, 22, 25, 28, 32, 35, 38, 42], color: '#4a6cf7' },
      { type: 'donut', title: 'Asset Allocation', data: [35, 25, 20, 12, 8], colors: ['#4a6cf7', '#6c5ce7', '#fdb840', '#00b894', '#e17055'] },
      { type: 'bar', title: 'Risk Metrics', data: [12, 8, 15, 6, 10, 14], color: '#fdcb6e' },
      { type: 'bar', title: 'Sector Performance', data: [22, 18, 15, 12, 10, 8], color: '#6c5ce7' },
    ],
    results: [
      `Investment decision time reduced from 3 days to under 6 minutes`,
      `Client reporting automation saved advisors 15 hours per week`,
      `Risk alerts prevented $4.2M in potential losses`,
      `Client satisfaction scores improved by 18%`,
      `AUM increased by 12% in 6 months`,
    ],
    insights: [
      `Technology sector holdings have outperformed all others, delivering 32% returns`,
      `Sharpe ratio for the firm's flagship fund is 1.92, exceeding industry average of 1.5`,
      `Portfolio volatility has decreased by 18% since the implementation of risk alerts`,
      `New client acquisition has increased by 22% in the last quarter`,
      `Client retention rate is 96%, up from 92% last year`,
    ],
    tableData: [
      ['Fund', 'Return', 'Risk', 'Rating', 'AUM'],
      ['Tech Fund', '+18.2%', 'Medium', 'AA', '$320M'],
      ['Growth Fund', '+14.5%', 'Medium', 'A+', '$280M'],
      ['Dividend Fund', '+11.8%', 'Low', 'A', '$210M'],
      ['International Fund', '+16.3%', 'High', 'A-', '$180M'],
      ['Balanced Fund', '+9.7%', 'Low', 'A', '$210M'],
    ],
    tech: 'Looker · BigQuery · dbt · Python · Google Cloud Platform',
    metric: '40% faster investment decisions',
    impact: 'AUM increased 12% in 6 months, saving $4.2M in potential losses',
    fullDescription: `The dashboard also includes scenario analysis tools that allow advisors to model the impact of different market conditions on client portfolios. The system automatically generates client reports in PDF format, significantly reducing the manual work required. The command center has become the central hub for investment decision‑making, and the firm is now planning to build a client‑facing version of the dashboard. The success of this project has led to a new data strategy that prioritises real‑time analytics across the entire organisation.`,
  },
  {
    id: 4,
    title: 'Manufacturing OEE Dashboard',
    client: 'Precision Machining Inc.',
    industry: 'Manufacturing',
    year: '2024',
    duration: '12 weeks',
    kpi: { label: 'Overall OEE', value: '82%', change: '+6.8%', trend: 'up' },
    secondaryKpis: [
      { label: 'Availability', value: '91%' },
      { label: 'Performance', value: '89%' },
      { label: 'Quality', value: '97%' },
    ],
    problem: `Precision Machining's machines were instrumented but the data went nowhere useful — just local logs that nobody checked until something broke. Maintenance was reactive rather than proactive, leading to frequent unplanned downtime. Production managers had no visibility into overall equipment effectiveness across their 12 plants, making it impossible to identify best practices or underperforming facilities. Quality issues were often discovered after production runs, resulting in costly rework and waste.`,
    solution: `We built a real‑time OEE dashboard that tracks availability, performance, and quality across all 12 manufacturing plants. The system pipes sensor data from machines into a central time‑series store with anomaly detection tuned per machine type, with alerts going straight to the floor supervisor's phone. The dashboard provides drill‑down from plant level to individual machine level, allowing operators to identify the root cause of downtime quickly.`,
    approach: `We used Kafka to stream sensor data from edge devices to a central time‑series database (InfluxDB). We built custom data collectors for different machine types and implemented data validation to ensure data quality. The front‑end was developed in Power BI with real‑time data connections. We also integrated a notification system that sends SMS and email alerts when machines are down or operating below threshold.`,
    methodology: `We used a phased rollout approach, starting with two pilot plants to test and refine the solution before scaling to all 12 plants. We provided extensive training to operators and supervisors on how to use the dashboard and interpret the data. The OEE metrics were aligned with industry standards (OEE = Availability × Performance × Quality) to ensure consistency and comparability.`,
    challenges: `Data quality was the main challenge, as not all machines were equipped with the same sensors or data standards. We had to develop custom adapters for older machines and establish data quality rules to filter out noise. Network connectivity issues in some plants also posed challenges, which we addressed by implementing edge caching and offline data collection with automatic sync when connectivity was restored.`,
    charts: [
      { type: 'gauge', title: 'OEE Score', value: 82, max: 100, color: '#4a6cf7' },
      { type: 'bar', title: 'Downtime by Cause', data: [32, 28, 20, 12, 8], color: '#e17055' },
      { type: 'line', title: 'Production Volume', data: [850, 920, 980, 1020, 1080, 1150, 1200], color: '#fdb840' },
      { type: 'donut', title: 'Quality Breakdown', data: [97, 3], colors: ['#00b894', '#e17055'] },
    ],
    results: [
      `Unplanned downtime reduced by 31% within six months`,
      `Maintenance alerts prevented 42 machine failures`,
      `Rework costs decreased by 18%`,
      `OEE increased from 75% to 82%`,
      `Annual savings of $4.2M in production costs`,
    ],
    insights: [
      `Maintenance issues account for 32% of all downtime`,
      `Plant C has the highest OEE at 85%, compared to Plant B at 78%`,
      `Quality defects are most common during shift changes`,
      `Predictive maintenance has prevented an estimated $1.8M in potential losses`,
      `Average machine uptime has increased from 85% to 91%`,
    ],
    tableData: [
      ['Plant', 'OEE', 'Availability', 'Performance', 'Quality'],
      ['Plant A', '85%', '93%', '91%', '98%'],
      ['Plant B', '78%', '88%', '89%', '95%'],
      ['Plant C', '82%', '90%', '92%', '97%'],
      ['Plant D', '79%', '87%', '88%', '96%'],
    ],
    tech: 'Power BI · Kafka · InfluxDB · Node.js · Grafana',
    metric: '22% increase in OEE',
    impact: '$4.2M annual savings with 31% less downtime',
    fullDescription: `The OEE dashboard has become a strategic tool for Precision Machining's operations management. The system is now being extended to include predictive maintenance models that use machine learning to predict failures before they occur. The company is also integrating the dashboard with their ERP system to automatically create work orders based on maintenance alerts. The success of this project has led to a company‑wide digital transformation initiative focusing on data‑driven operations and continuous improvement.`,
  },
  {
    id: 5,
    title: 'E-commerce Conversion Funnel',
    client: 'ShopWave',
    industry: 'Retail',
    year: '2025',
    duration: '8 weeks',
    kpi: { label: 'Conversion Rate', value: '18.5%', change: '+4.2%', trend: 'up' },
    secondaryKpis: [
      { label: 'Avg Order Value', value: '$89' },
      { label: 'Cart Abandonment', value: '32%' },
      { label: 'Revenue per Visitor', value: '$4.20' },
    ],
    problem: `ShopWave had analytics data but no clear view of where customers were dropping off in the purchasing journey. The marketing team was using multiple tools (Google Analytics, Hotjar, and custom dashboards) that often showed conflicting numbers. There was no consistent way to measure the impact of A/B tests or marketing campaigns on conversion rates. The company was losing potential revenue without understanding why customers were abandoning their carts.`,
    solution: `We built a comprehensive funnel visualisation that shows conversion at each stage – from landing to checkout – with segment filters for new vs returning customers, device type, and traffic source. A/B test results are automatically surfaced and integrated into the dashboard, allowing the marketing team to quickly identify winning variations. The dashboard also includes a "leakage" view that highlights the biggest drop‑off points in the funnel.`,
    approach: `We consolidated data from Google Analytics, the e‑commerce platform's database, and the marketing automation system into a single data warehouse in BigQuery. We built the funnel visualisation using Looker with custom calculated fields for key metrics. The dashboard is updated every 15 minutes and includes real‑time alerts for significant changes in conversion rates.`,
    methodology: `We adopted a product‑led approach, involving the marketing, product, and data teams in regular sprint reviews. We started with a minimum viable dashboard that showed the top‑level funnel and iteratively added more detailed views based on user feedback. We also provided self‑service training so the marketing team could create their own ad‑hoc reports.`,
    challenges: `The main challenge was data consistency across different sources, as Google Analytics events and database entries used different time zones and attribution windows. We resolved this by standardising the time zone to UTC and creating a unified attribution model that accounts for multi‑touch journeys. We also needed to handle high volume of event data (over 500K events per day) while maintaining dashboard performance.`,
    charts: [
      { type: 'funnel', title: 'Conversion Funnel', data: [100000, 45000, 32000, 18500], colors: ['#4a6cf7', '#6c5ce7', '#fdb840', '#00b894'] },
      { type: 'bar', title: 'Conversion by Segment', data: [25, 18, 12, 8, 5], color: '#4a6cf7' },
      { type: 'line', title: 'Revenue Trend', data: [120, 145, 132, 168, 155, 190, 175, 210, 195, 230, 220, 250], color: '#fdb840' },
      { type: 'donut', title: 'Traffic Sources', data: [40, 30, 20, 10], colors: ['#4a6cf7', '#6c5ce7', '#00b894', '#fdcb6e'] },
    ],
    results: [
      `Mobile conversion improved 28% after UX changes guided by the dashboard`,
      `Retargeting campaigns drove 45% of repeat purchases`,
      `Social media traffic converted at 22% higher rate than other channels`,
      `Cart abandonment decreased from 38% to 32%`,
      `Overall conversion rate increased from 14.3% to 18.5%`,
    ],
    insights: [
      `Mobile users convert at 18.5%, while desktop users convert at 22.3%`,
      `New visitors have a conversion rate of 12%, returning visitors at 25%`,
      `Traffic from social media has the highest conversion rate at 22%`,
      `Cart abandonment is highest on mobile (38%) compared to desktop (28%)`,
      `A/B test results show that variant A (new checkout flow) outperforms control by 18%`,
    ],
    tableData: [
      ['Variant', 'Conversion', 'Change', 'Confidence'],
      ['Variant A (New Checkout)', '18.5%', '+4.2%', '95%'],
      ['Variant B (New Homepage)', '16.2%', '+1.8%', '78%'],
      ['Variant C (New Product Page)', '15.7%', '+1.3%', '65%'],
      ['Control', '14.3%', '—', '—'],
    ],
    tech: 'Looker · BigQuery · Google Analytics · Python · dbt',
    metric: '35% lift in conversion rate',
    impact: '+$2.1M monthly revenue from improved conversion',
    fullDescription: `The funnel dashboard has become the central decision‑making tool for ShopWave's marketing and product teams. The company has implemented a data‑driven culture where all marketing spend is aligned with funnel performance. The dashboard's A/B test integration has reduced the time to evaluate tests from weeks to days, accelerating the innovation cycle. ShopWave is now expanding the dashboard to include retention metrics and customer lifetime value modelling to support their growing subscription business.`,
  },
  {
    id: 6,
    title: 'Energy Consumption Monitoring',
    client: 'GreenPower Utilities',
    industry: 'Energy',
    year: '2024',
    duration: '10 weeks',
    kpi: { label: 'Energy Saved', value: '2.4M kWh', change: '-18%', trend: 'down' },
    secondaryKpis: [
      { label: 'Peak Load', value: '65 MW' },
      { label: 'Carbon Offset', value: '1,200 tCO2' },
      { label: 'Grid Stability', value: '99.2%' },
    ],
    problem: `GreenPower Utilities needed better visibility into expected output from a growing set of distributed generation sites including solar farms, wind turbines, and battery storage systems. The company had multiple forecasting systems that were not integrated, leading to inaccurate predictions and inefficient dispatch decisions. Grid operators were manually adjusting power flows based on incomplete information, resulting in higher balancing costs and occasional grid instability.`,
    solution: `We built a comprehensive energy monitoring and forecasting dashboard that blends weather data, historical output, and grid demand signals. The system provides a single view of all distributed generation assets with real‑time performance monitoring, predictive alerts for peak demand, and automated forecasting models that feed directly into dispatch planning tools.`,
    approach: `We collected data from weather APIs (temperature, wind speed, solar radiation), IoT sensors at generation sites, and grid operator APIs. We built a data pipeline using Python and InfluxDB for time‑series storage, with Grafana for visualisation. The forecasting model was developed using XGBoost, trained on 3 years of historical data and validated against actual generation patterns.`,
    methodology: `We used a continuous improvement approach, starting with a baseline forecasting model and iteratively improving it with new data sources and model tuning. We established a data quality framework to ensure the reliability of weather and sensor data. The dashboard was designed with input from grid operators to ensure it met their operational needs.`,
    challenges: `Weather data variability was the biggest challenge, as forecasts could change significantly within hours. We addressed this by using multiple weather forecast providers and building an ensemble model that combines their predictions. Data latency from IoT sensors also posed issues, which we solved by implementing edge computing to aggregate data before sending it to the central system.`,
    charts: [
      { type: 'line', title: 'Energy Usage', data: [320, 305, 290, 275, 260, 250, 240], color: '#4a6cf7' },
      { type: 'donut', title: 'Consumption by Source', data: [45, 30, 20, 5], colors: ['#00b894', '#fdcb6e', '#4a6cf7', '#e17055'] },
      { type: 'bar', title: 'Peak Demand by Day', data: [85, 82, 78, 75, 72, 68, 65], color: '#fdb840' },
      { type: 'gauge', title: 'Grid Stability', value: 99.2, max: 100, color: '#00b894' },
    ],
    results: [
      `Forecast accuracy improved from 78% to 94%`,
      `Balancing costs reduced by 16%`,
      `Peak demand alerts prevented 3 grid overloads`,
      `Tenant engagement program increased participation by 45%`,
      `Annual carbon emissions reduced by 1,200 tCO2`,
    ],
    insights: [
      `Solar generation is highest between 10am and 4pm, peaking at 12pm`,
      `Wind generation is strongest in winter months (Nov‑Feb)`,
      `Battery storage provides 20% of peak load coverage`,
      `Energy consumption is highest on weekdays, 15% lower on weekends`,
      `Building retrofits have reduced consumption by 12% in the last year`,
    ],
    tableData: [
      ['Building', 'Reduction', 'Status', 'Target', 'Achieved'],
      ['Tower A', '12%', 'Excellent', '10%', '12%'],
      ['Tower B', '8%', 'Good', '10%', '8%'],
      ['Tower C', '15%', 'Needs Attention', '10%', '15%'],
      ['Tower D', '10%', 'On Track', '10%', '10%'],
    ],
    tech: 'Grafana · InfluxDB · Python · XGBoost · AWS IoT',
    metric: '18% peak load reduction',
    impact: 'Carbon footprint -12% and balancing costs -16%',
    fullDescription: `The energy monitoring dashboard has been instrumental in GreenPower's transition to renewable energy. The system provides real‑time visibility into generation and consumption, helping grid operators make informed decisions about dispatching power from different sources. The forecasting models have been so successful that GreenPower is now using them for planning new renewable projects and negotiating power purchase agreements. The company is also exploring expansion to include EV charging networks and smart building management.`,
  },
  {
    id: 7,
    title: 'Supply Chain Visibility Platform',
    client: 'Global Logistics Partners',
    industry: 'Logistics',
    year: '2025',
    duration: '16 weeks',
    kpi: { label: 'On‑Time Delivery', value: '96.2%', change: '+4.8%', trend: 'up' },
    secondaryKpis: [
      { label: 'Avg Transit Time', value: '3.2 days' },
      { label: 'Damaged Shipments', value: '1.8%' },
      { label: 'Order Accuracy', value: '98.7%' },
    ],
    problem: `Global Logistics Partners managed a complex network of carriers, warehouses, and distribution centres across 14 countries, but had limited visibility into shipment status and performance. Customers frequently complained about delayed shipments and inaccurate tracking information. The company relied on multiple carrier portals and spreadsheets to track shipments, resulting in fragmented data and inefficient operations.`,
    solution: `We built a supply chain visibility platform that aggregates shipment data from multiple carriers and warehouses into a single dashboard. The system provides real‑time tracking of shipments, predictive alerts for delays, and performance analytics for carriers and routes. Customers can log in to view the status of their shipments, and automated notifications are sent when key milestones are reached.`,
    approach: `We integrated with multiple carrier APIs (FedEx, DHL, UPS, and regional carriers) using custom connectors. We built a central data warehouse in Snowflake and used dbt for data transformation. The front‑end was developed using React and D3.js for interactive visualisations. The system handles over 50,000 tracking events per day and provides a 360‑degree view of the supply chain.`,
    methodology: `We used an API‑first approach, designing robust integration patterns for each carrier. We implemented data quality checks and reconciliation processes to ensure tracking data was accurate and consistent. The dashboard was designed with both internal operations teams and external customers in mind, with role‑based access control for data security.`,
    challenges: `Carrier API integration was challenging due to different data formats, update frequencies, and reliability. We built a universal data model that abstracts away carrier‑specific details and implemented error handling and retry logic to manage API failures. Data latency was another challenge, which we addressed by implementing webhooks where available and polling with smart frequency adjustments.`,
    charts: [
      { type: 'bar', title: 'On‑Time Delivery by Route', data: [98, 95, 92, 97, 94, 96], color: '#00b894' },
      { type: 'line', title: 'Shipment Volume Trend', data: [3200, 3450, 3800, 4100, 3900, 4300, 4600], color: '#4a6cf7' },
      { type: 'donut', title: 'Carrier Performance', data: [35, 28, 22, 15], colors: ['#4a6cf7', '#fdb840', '#6c5ce7', '#e17055'] },
      { type: 'gauge', title: 'Overall Performance', value: 96, max: 100, color: '#00b894' },
    ],
    results: [
      `On‑time delivery improved from 91.4% to 96.2%`,
      `Shipment tracking accuracy increased from 85% to 99.1%`,
      `Customer complaints reduced by 52%`,
      `Operations team saved 20 hours per week on manual tracking`,
      `Carrier selection optimised, resulting in 12% cost savings`,
    ],
    insights: [
      `Air shipments are 2.5x faster but 3x more expensive than ground`,
      `Carrier A has the best reliability (98.2%), Carrier C has the worst (92.4%)`,
      `Saturday deliveries have 15% higher on‑time performance`,
      `Shipments to Western Europe have the highest accuracy rates`,
      `Peak season (Nov‑Dec) volume increases by 45%`,
    ],
    tableData: [
      ['Carrier', 'On‑Time', 'Cost/Unit', 'Transit Days', 'Claims Rate'],
      ['Carrier A', '98.2%', '$42', '2.8', '0.5%'],
      ['Carrier B', '96.5%', '$38', '3.2', '0.8%'],
      ['Carrier C', '92.4%', '$35', '3.8', '1.2%'],
      ['Carrier D', '97.1%', '$40', '3.0', '0.6%'],
    ],
    tech: 'Snowflake · dbt · React · D3.js · AWS Lambda',
    metric: '96.2% on‑time delivery rate',
    impact: 'Customer satisfaction up 42% and cost savings of 12%',
    fullDescription: `The supply chain platform has transformed Global Logistics Partners' operations. The company now has real‑time visibility into shipments across all carriers and can proactively address delays before customers notice. The analytics capabilities have enabled the company to optimise carrier selection, reduce costs, and improve service levels. Customers have reported significantly higher satisfaction with the tracking accuracy and proactive notifications. The platform is now being extended to include inventory visibility and demand forecasting to support the company's growth into new markets.`,
  },
  {
    id: 8,
    title: 'Customer Analytics & Personalization Engine',
    client: 'Luxury Retail Brands',
    industry: 'Retail',
    year: '2025',
    duration: '12 weeks',
    kpi: { label: 'Customer Retention', value: '86%', change: '+8.2%', trend: 'up' },
    secondaryKpis: [
      { label: 'Avg Spend per Customer', value: '$1,240' },
      { label: 'LTV', value: '$8,400' },
      { label: 'Active Customers', value: '24,500' },
    ],
    problem: `Luxury Retail Brands had rich customer data but lacked the ability to personalise marketing and shopping experiences. Marketing campaigns were broadcast to all customers regardless of their preferences or purchase history, resulting in low engagement and wasted spend. The company had no unified view of the customer journey across online and offline channels, making it difficult to understand customer behaviour and preferences.`,
    solution: `We built a customer analytics and personalisation engine that consolidates data from the e‑commerce platform, in‑store POS systems, loyalty program, and email marketing platform. The system creates unified customer profiles with purchase history, browsing behaviour, engagement patterns, and predicted preferences. The dashboard provides actionable insights for marketing teams and supports personalised product recommendations.`,
    approach: `We used Segment for customer data collection, Snowflake as the data warehouse, and dbt for transformation. We built the personalisation engine using Python with machine learning models for next‑best‑action prediction and product recommendation. The front‑end dashboard was developed in Looker with embedded visualisation capabilities.`,
    methodology: `We followed a customer‑centric design approach, focusing on the information needed by marketing teams to create targeted campaigns. We developed a data model that supports both historical analysis and real‑time personalisation. The system was designed to be extensible, allowing the company to incorporate additional data sources in the future.`,
    challenges: `The main challenge was data integration across multiple channels with different customer identifiers. We implemented a customer matching algorithm using deterministic and probabilistic matching to create a single customer view. Real‑time personalisation required optimising the model performance and implementing caching strategies. Data privacy was also a key concern, given the nature of luxury retail customer data.`,
    charts: [
      { type: 'line', title: 'Customer Retention Trend', data: [78, 80, 82, 84, 86, 86], color: '#4a6cf7' },
      { type: 'bar', title: 'Customer Segments', data: [32, 25, 18, 15, 10], color: '#fdb840' },
      { type: 'donut', title: 'Revenue by Segment', data: [40, 25, 20, 10, 5], colors: ['#4a6cf7', '#fdb840', '#6c5ce7', '#e17055', '#00b894'] },
      { type: 'gauge', title: 'LTV Score', value: 84, max: 100, color: '#00b894' },
    ],
    results: [
      `Customer retention increased from 77.8% to 86.0%`,
      `Marketing campaign ROI improved by 45%`,
      `Average customer spend increased by 18%`,
      `Email open rates increased from 22% to 38%`,
      `Product recommendations generated 15% of revenue`,
    ],
    insights: [
      `Top 10% of customers generate 45% of total revenue`,
      `Best customers are most active during holiday season (Nov‑Dec)`,
      `Personalised emails have 3x higher conversion than generic emails`,
      `Customers who purchase accessories have 40% higher LTV`,
      `Loyalty program members spend 2.5x more than non‑members`,
    ],
    tableData: [
      ['Segment', 'Count', 'Avg Spend', 'LTV', 'Retention'],
      ['High Value', '2,450', '$3,200', '$12,800', '92%'],
      ['Medium Value', '7,350', '$1,200', '$8,400', '86%'],
      ['Low Value', '12,700', '$420', '$4,200', '78%'],
      ['At Risk', '2,000', '$180', '$1,800', '45%'],
    ],
    tech: 'Segment · Snowflake · dbt · Python · Looker · AWS',
    metric: '86% customer retention rate',
    impact: 'Marketing ROI +45% and average spend +18%',
    fullDescription: `The customer analytics platform has become the backbone of Luxury Retail Brands' marketing strategy. The company now runs highly targeted campaigns based on customer segments and predicted preferences, resulting in significantly higher engagement and conversion. The personalisation engine has been integrated into the e‑commerce platform, providing real‑time product recommendations that have boosted conversion rates. The analytics capabilities are being expanded to include predictive churn modelling and customer lifetime value optimisation. The company is now planning to incorporate the platform into their in‑store experience through sales associate dashboards.`,
  },
];

// ─── Chart Components ──────────────────────────────────────────────
const BarChart = ({ data, color, height = 100 }) => {
  // Guard against empty data
  if (!data || data.length === 0) return null;
  const max = Math.max(...data);
  if (max === 0) return null;
  const barWidth = Math.min(20, (280 / data.length) * 0.6);
  const gap = 4;
  return (
    <svg width="100%" height={height} viewBox={`0 0 ${data.length * (barWidth + gap) + 20} ${height}`} preserveAspectRatio="xMidYMid meet">
      {data.map((val, i) => {
        const barHeight = (val / max) * (height - 30);
        const x = i * (barWidth + gap) + 10;
        const y = height - barHeight - 10;
        return (
          <g key={i}>
            <rect x={x} y={y} width={barWidth} height={barHeight} fill={color} opacity="0.8" rx="3" />
          </g>
        );
      })}
    </svg>
  );
};

const LineChart = ({ data, color, height = 100 }) => {
  if (!data || data.length < 2) return null;
  const max = Math.max(...data);
  if (max === 0) return null;
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 260 + 10;
    const y = height - 15 - ((val / max) * (height - 30));
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg width="100%" height={height} viewBox={`0 0 280 ${height}`} preserveAspectRatio="xMidYMid meet">
      <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" />
      {data.map((val, i) => {
        const x = (i / (data.length - 1)) * 260 + 10;
        const y = height - 15 - ((val / max) * (height - 30));
        return <circle key={i} cx={x} cy={y} r="3.5" fill={color} />;
      })}
    </svg>
  );
};

const DonutChart = ({ data, colors, height = 100 }) => {
  if (!data || data.length === 0) return null;
  const total = data.reduce((a, b) => a + b, 0);
  if (total === 0) return null;
  let startAngle = -90;
  const slices = [];
  data.forEach((val) => {
    const angle = (val / total) * 360;
    slices.push({ start: startAngle, end: startAngle + angle });
    startAngle += angle;
  });
  const cx = 50;
  const cy = height / 2;
  const r = 38;
  return (
    <svg width="100%" height={height} viewBox={`0 0 100 ${height}`} preserveAspectRatio="xMidYMid meet">
      {slices.map((slice, i) => {
        const { start, end } = slice;
        const startRad = (start * Math.PI) / 180;
        const endRad = (end * Math.PI) / 180;
        const x1 = cx + r * Math.cos(startRad);
        const y1 = cy + r * Math.sin(startRad);
        const x2 = cx + r * Math.cos(endRad);
        const y2 = cy + r * Math.sin(endRad);
        const largeArc = end - start > 180 ? 1 : 0;
        return (
          <path
            key={i}
            d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc},1 ${x2},${y2} Z`}
            fill={colors[i % colors.length]}
            opacity="0.9"
          />
        );
      })}
      <circle cx={cx} cy={cy} r={r * 0.5} fill="#ffffff" />
    </svg>
  );
};

const GaugeChart = ({ value, max, color, height = 100 }) => {
  if (max === 0) return null;
  const percent = (value / max) * 100;
  const arc = (percent / 100) * 180;
  const largeArc = arc > 180 ? 1 : 0;
  const endAngle = -90 + arc;
  const cx = 50;
  const cy = height / 2;
  const r = 38;
  const x2 = cx + r * Math.cos((endAngle * Math.PI) / 180);
  const y2 = cy + r * Math.sin((endAngle * Math.PI) / 180);
  return (
    <svg width="100%" height={height} viewBox={`0 0 100 ${height}`} preserveAspectRatio="xMidYMid meet">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#eaeaea" strokeWidth="6" />
      <path d={`M${cx},${cy - r} A${r},${r} 0 ${largeArc},1 ${x2},${y2}`} fill="none" stroke={color} strokeWidth="6" />
      <text x={cx} y={cy + 6} textAnchor="middle" fontSize="14" fill="#1a1a1a" fontWeight="600">
        {value}%
      </text>
    </svg>
  );
};

const FunnelChart = ({ data, colors, height = 100 }) => {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data);
  if (max === 0) return null;
  const barHeight = (height - 10) / data.length;
  return (
    <svg width="100%" height={height} viewBox={`0 0 180 ${height}`} preserveAspectRatio="xMidYMid meet">
      {data.map((val, i) => {
        const width = (val / max) * 150;
        const x = (180 - width) / 2;
        const y = i * barHeight + 5;
        return (
          <rect key={i} x={x} y={y} width={width} height={barHeight - 2} fill={colors[i % colors.length]} opacity="0.8" rx="3" />
        );
      })}
    </svg>
  );
};

const ChartRenderer = ({ chart }) => {
  if (!chart || !chart.type) return null;
  switch (chart.type) {
    case 'bar': return <BarChart data={chart.data} color={chart.color} />;
    case 'line': return <LineChart data={chart.data} color={chart.color} />;
    case 'donut': return <DonutChart data={chart.data} colors={chart.colors} />;
    case 'gauge': return <GaugeChart value={chart.value} max={chart.max} color={chart.color} />;
    case 'funnel': return <FunnelChart data={chart.data} colors={chart.colors} />;
    default: return null;
  }
};

const TableRenderer = ({ data }) => {
  if (!data || data.length === 0) return null;
  return (
    <div className={styles.tableContainer}>
      {data.map((row, i) => (
        <div key={i} className={`${styles.tableRow} ${i === 0 ? styles.tableHeader : ''}`}>
          {row.map((cell, j) => (
            <span key={j} className={styles.tableCell}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

// ─── ANIMATION VARIANTS ────────────────────────────────────────────
const tileStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const sectionFadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const kpiPop = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 20 }
  }
};

const chartSlide = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const globalKpiStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

// ─── Dashboard Tile Component ──────────────────────────────────────
const DashboardTile = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={styles.dashboardTile}
      variants={tileStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
    >
      {/* ── Header ── */}
      <motion.div variants={sectionFadeUp}>
        <div className={styles.tileHeader}>
          <div className={styles.tileTitleGroup}>
            <span className={styles.tileIndex}>#{String(project.id).padStart(2, '0')}</span>
            <span className={styles.tileIndustry}>{project.industry}</span>
            <span className={styles.tileYear}>{project.year}</span>
            <span className={styles.tileDuration}>{project.duration}</span>
            <h3 className={styles.tileTitle}>{project.title}</h3>
          </div>
          <span className={styles.tileClient}>{project.client}</span>
        </div>
      </motion.div>

      {/* ── PROBLEM ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileSection}>
        <h4 className={styles.sectionHeading}><AlertCircle size={14} /> Problem</h4>
        <p className={styles.sectionText}>{project.problem}</p>
      </motion.div>

      {/* ── SOLUTION ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileSection}>
        <h4 className={styles.sectionHeading}><CheckCircle size={14} /> Solution</h4>
        <p className={styles.sectionText}>{project.solution}</p>
      </motion.div>

      {/* ── APPROACH ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileSection}>
        <h4 className={styles.sectionHeading}><Briefcase size={14} /> Approach</h4>
        <p className={styles.sectionText}>{project.approach}</p>
      </motion.div>

      {/* ── METHODOLOGY ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileSection}>
        <h4 className={styles.sectionHeading}><Layers size={14} /> Methodology</h4>
        <p className={styles.sectionText}>{project.methodology}</p>
      </motion.div>

      {/* ── CHALLENGES ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileSection}>
        <h4 className={styles.sectionHeading}><AlertCircle size={14} /> Challenges</h4>
        <p className={styles.sectionText}>{project.challenges}</p>
      </motion.div>

      {/* ── KPI ROW ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileKpiRow}>
        <motion.div
          className={styles.tileKpiMain}
          variants={kpiPop}
        >
          <span className={styles.kpiLabel}>{project.kpi.label}</span>
          <div className={styles.kpiValueRow}>
            <span className={styles.kpiValue}>{project.kpi.value}</span>
            <span className={`${styles.kpiChange} ${project.kpi.trend === 'up' ? styles.trendUp : styles.trendDown}`}>
              {project.kpi.change}
              {project.kpi.trend === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            </span>
          </div>
        </motion.div>
        {project.secondaryKpis.map((kpi, i) => (
          <motion.div
            key={i}
            className={styles.tileKpiSecondary}
            variants={kpiPop}
            transition={{ delay: i * 0.05 }}
          >
            <span className={styles.kpiLabel}>{kpi.label}</span>
            <span className={styles.kpiSecondaryValue}>{kpi.value}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* ── CHARTS ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileCharts}>
        {project.charts && project.charts.map((chart, i) => (
          <motion.div
            key={i}
            className={styles.chartCard}
            variants={chartSlide}
            transition={{ delay: i * 0.05 }}
          >
            <span className={styles.chartTitle}>{chart.title}</span>
            <div className={styles.chartContainer}>
              <ChartRenderer chart={chart} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── RESULTS ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileSection}>
        <h4 className={styles.sectionHeading}><Target size={14} /> Key Results</h4>
        <ul className={styles.listResults}>
          {project.results.map((result, i) => (
            <motion.li
              key={i}
              variants={sectionFadeUp}
              transition={{ delay: i * 0.03 }}
            >
              {result}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* ── INSIGHTS ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileSection}>
        <h4 className={styles.sectionHeading}><Compass size={14} /> Key Insights</h4>
        <ul className={styles.listInsights}>
          {project.insights.map((insight, i) => (
            <motion.li
              key={i}
              variants={sectionFadeUp}
              transition={{ delay: i * 0.03 }}
            >
              {insight}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* ── TABLE ── */}
      {project.tableData && (
        <motion.div variants={sectionFadeUp} className={styles.tileSection}>
          <h4 className={styles.sectionHeading}><Database size={14} /> Performance Data</h4>
          <TableRenderer data={project.tableData} />
        </motion.div>
      )}

      {/* ── FULL DESCRIPTION ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileFullDescription}>
        <button className={styles.expandBtn} onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide Details' : 'Read Full Case'}
        </button>
        {expanded && <p className={styles.fullDescriptionText}>{project.fullDescription}</p>}
      </motion.div>

      {/* ── TECH STACK ── */}
      <motion.div variants={sectionFadeUp} className={styles.techStack}>
        <span className={styles.techStackLabel}>Tech Stack:</span>
        {project.tech.split(' · ').map((tech, i) => (
          <motion.span
            key={i}
            className={styles.techTag}
            variants={sectionFadeUp}
            transition={{ delay: i * 0.02 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* ── FOOTER ── */}
      <motion.div variants={sectionFadeUp} className={styles.tileFooter}>
        <div className={styles.tileMetrics}>
          <span><TrendingUp size={14} /> {project.metric}</span>
          <span><Star size={14} /> {project.impact}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────
const PortfolioBIPage = () => {
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={homeStyles.page}>
      <SEO
        title="Business Intelligence Portfolio | Scape Data Solutions"
        description="Enterprise-grade Power BI dashboards and analytics platforms for retail, healthcare, finance, and manufacturing."
        path="/portfolio/bi"
      />

      <Navbar activeNav="portfolio" />

      {/* ─── LOADING OVERLAY ──────────────────────────────────────── */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className={styles.loadingOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.loadingContainer}>
              <motion.div
                className={styles.loadingSpinner}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className={styles.loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Loading dashboards...
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={homeStyles.mainContent}>
        {/* ─── HERO ────────────────────────────────────────────────── */}
        <motion.section
          className={styles.hero}
          initial="hidden"
          animate={loading ? "hidden" : "visible"}
          variants={fadeUp}
        >
          <motion.div className={styles.heroContent} variants={fadeUp}>
            <motion.div className={styles.heroBadge} variants={slideInLeft}>
              <BarChart3 size={14} /> Business Intelligence
            </motion.div>
            <motion.h1 className={styles.heroTitle} variants={scaleIn}>
              Enterprise-Grade <span className={styles.highlight}>Dashboards</span>
            </motion.h1>
            <motion.p className={styles.heroSub} variants={fadeUp}>
              Production-ready Power BI, Tableau, and custom analytics platforms
              — each designed for real business decisions. From concept to production in weeks.
              <br /><br />
              Our BI solutions have transformed how organisations across retail, healthcare,
              finance, manufacturing, and logistics make data‑driven decisions. We combine
              deep technical expertise with industry knowledge to deliver dashboards that
              people actually use.
            </motion.p>
          </motion.div>

          {/* Global KPI Bar */}
          <motion.div
            className={styles.globalKpiBar}
            variants={globalKpiStagger}
            initial="hidden"
            animate={loading ? "hidden" : "visible"}
          >
            {[
              { value: '$48.2M', label: 'Total Dashboard Value' },
              { value: '1,250+', label: 'Active Users' },
              { value: '94.7%', label: 'Adoption Rate' },
              { value: '12', label: 'Industries Served' },
            ].map((kpi, i) => (
              <motion.div
                key={i}
                className={styles.globalKpiItem}
                variants={kpiPop}
                transition={{ delay: i * 0.08 }}
              >
                <span className={styles.globalKpiValue}>{kpi.value}</span>
                <span className={styles.globalKpiLabel}>{kpi.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            className={styles.filterBar}
            variants={fadeUp}
            initial="hidden"
            animate={loading ? "hidden" : "visible"}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Date Range:</span>
              <span className={styles.filterValue}>Jan 2024 – Dec 2025</span>
            </div>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Industry:</span>
              <span className={styles.filterValue}>All</span>
            </div>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Platform:</span>
              <span className={styles.filterValue}>All</span>
            </div>
          </motion.div>
        </motion.section>

        {/* ─── DASHBOARD GRID ────────────────────────────────────── */}
        <div className={styles.dashboardGrid}>
          {dashboardData.map((project) => (
            <DashboardTile key={project.id} project={project} />
          ))}
        </div>

        {/* ─── CTA ────────────────────────────────────────────────── */}
        <motion.section
          className={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={scaleIn}
        >
          <motion.h2 variants={fadeUp}>Need a Dashboard Built for Your Business?</motion.h2>
          <motion.p variants={fadeUp} transition={{ delay: 0.1 }}>
            We design and deploy enterprise-grade BI solutions — from concept to production in weeks.
          </motion.p>
          <motion.p className={styles.ctaSubText} variants={fadeUp} transition={{ delay: 0.2 }}>
            Whether you need a simple executive dashboard or a complex multi‑source analytics platform,
            we have the expertise to deliver. Our clients have saved millions, improved customer satisfaction,
            and made faster, more informed decisions with our solutions.
          </motion.p>
          <motion.div
            variants={scaleIn}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/contact" className={styles.ctaBtn}>
              Start the Conversation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.section>
      </main>

      <Footer />

      <AnimatePresence>
        {showTop && (
          <motion.button
            className={homeStyles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioBIPage;