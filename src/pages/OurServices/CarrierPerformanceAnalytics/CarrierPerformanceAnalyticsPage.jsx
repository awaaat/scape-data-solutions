import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { CheckCircle, Sparkles, BarChart3, TrendingUp, Award, Shield } from "lucide-react";

import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SEO from "../../../components/SEO/SEO";
import { apiService } from "../../../services/api";
import styles from "./CarrierPerformanceAnalyticsPage.module.css";

// ============================================================
//  INLINE SVG IMAGES
// ============================================================
const svg = (content) => `data:image/svg+xml,${encodeURIComponent(content)}`;

const IMAGES = {
  // ===== HERO DASHBOARD – monochrome =====
  dashboard: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#eef2f6;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="gray" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#6b7280;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#4b5563;stop-opacity:1" />
        </linearGradient>
        <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.06"/>
        </filter>
      </defs>
      <rect width="1200" height="700" fill="url(#bg)" rx="16"/>
      <rect x="20" y="20" width="1160" height="56" fill="#ffffff" rx="8" filter="url(#shadow)"/>
      <text x="50" y="54" font-family="sans-serif" font-size="20" fill="#000000" font-weight="bold">Carrier Performance Command Center</text>
      <rect x="900" y="28" width="100" height="36" fill="#000000" rx="18"/>
      <text x="920" y="51" font-family="sans-serif" font-size="13" fill="white" font-weight="600">LIVE</text>
      <rect x="1020" y="28" width="36" height="36" rx="18" fill="#eef2f6"/>
      <text x="1030" y="51" font-family="sans-serif" font-size="16" fill="#6b7280">⚡</text>

      <rect x="30" y="96" width="270" height="96" fill="#ffffff" rx="8" filter="url(#shadow)"/>
      <text x="50" y="124" font-family="sans-serif" font-size="13" fill="#6b7280">On-Time Delivery</text>
      <text x="50" y="164" font-family="sans-serif" font-size="34" fill="#000000" font-weight="bold">94.2%</text>
      <text x="50" y="184" font-family="sans-serif" font-size="11" fill="#4b5563">↑ 6.3% vs last Q</text>

      <rect x="320" y="96" width="270" height="96" fill="#ffffff" rx="8" filter="url(#shadow)"/>
      <text x="340" y="124" font-family="sans-serif" font-size="13" fill="#6b7280">Service Credits Recovered</text>
      <text x="340" y="164" font-family="sans-serif" font-size="34" fill="#000000" font-weight="bold">$87.2k</text>
      <text x="340" y="184" font-family="sans-serif" font-size="11" fill="#4b5563">↑ 12% month-over-month</text>

      <rect x="610" y="96" width="270" height="96" fill="#ffffff" rx="8" filter="url(#shadow)"/>
      <text x="630" y="124" font-family="sans-serif" font-size="13" fill="#6b7280">SLA Breaches</text>
      <text x="630" y="164" font-family="sans-serif" font-size="34" fill="#000000" font-weight="bold">12</text>
      <text x="630" y="184" font-family="sans-serif" font-size="11" fill="#4b5563">↓ 3 from last month</text>

      <rect x="900" y="96" width="270" height="96" fill="#ffffff" rx="8" filter="url(#shadow)"/>
      <text x="920" y="124" font-family="sans-serif" font-size="13" fill="#6b7280">Carriers Scored</text>
      <text x="920" y="164" font-family="sans-serif" font-size="34" fill="#000000" font-weight="bold">500+</text>
      <text x="920" y="184" font-family="sans-serif" font-size="11" fill="#6b7280">Across 45 lanes</text>

      <rect x="30" y="216" width="700" height="200" fill="#ffffff" rx="8" filter="url(#shadow)"/>
      <text x="50" y="244" font-family="sans-serif" font-size="15" fill="#000000" font-weight="bold">Monthly Performance Trend</text>
      <rect x="70" y="276" width="36" height="96" fill="url(#gray)" rx="4"/>
      <rect x="130" y="248" width="36" height="124" fill="url(#gray)" rx="4"/>
      <rect x="190" y="266" width="36" height="106" fill="url(#gray)" rx="4"/>
      <rect x="250" y="230" width="36" height="142" fill="url(#gray)" rx="4"/>
      <rect x="310" y="258" width="36" height="114" fill="url(#gray)" rx="4"/>
      <rect x="370" y="286" width="36" height="86" fill="url(#gray)" rx="4"/>
      <rect x="430" y="240" width="36" height="132" fill="url(#gray)" rx="4"/>
      <rect x="490" y="302" width="36" height="70" fill="url(#gray)" rx="4"/>
      <rect x="550" y="270" width="36" height="102" fill="url(#gray)" rx="4"/>
      <text x="70" y="406" font-family="sans-serif" font-size="10" fill="#6b7280">Jan</text>
      <text x="130" y="406" font-family="sans-serif" font-size="10" fill="#6b7280">Feb</text>
      <text x="190" y="406" font-family="sans-serif" font-size="10" fill="#6b7280">Mar</text>
      <text x="250" y="406" font-family="sans-serif" font-size="10" fill="#6b7280">Apr</text>
      <text x="310" y="406" font-family="sans-serif" font-size="10" fill="#6b7280">May</text>
      <text x="370" y="406" font-family="sans-serif" font-size="10" fill="#6b7280">Jun</text>
      <text x="430" y="406" font-family="sans-serif" font-size="10" fill="#6b7280">Jul</text>
      <text x="490" y="406" font-family="sans-serif" font-size="10" fill="#6b7280">Aug</text>
      <text x="550" y="406" font-family="sans-serif" font-size="10" fill="#6b7280">Sep</text>

      <rect x="750" y="216" width="420" height="200" fill="#ffffff" rx="8" filter="url(#shadow)"/>
      <text x="770" y="244" font-family="sans-serif" font-size="15" fill="#000000" font-weight="bold">Top Carriers</text>
      <rect x="770" y="266" width="380" height="28" fill="#f8fafc" rx="4"/>
      <text x="780" y="285" font-family="sans-serif" font-size="12" fill="#000000">Carrier A – 98% OTIF  |  Claims: 2  |  Score: A</text>
      <rect x="770" y="304" width="380" height="28" fill="#f8fafc" rx="4"/>
      <text x="780" y="323" font-family="sans-serif" font-size="12" fill="#000000">Carrier B – 91% OTIF  |  Claims: 8  |  Score: B</text>
      <rect x="770" y="342" width="380" height="28" fill="#f8fafc" rx="4"/>
      <text x="780" y="361" font-family="sans-serif" font-size="12" fill="#000000">Carrier C – 95% OTIF  |  Claims: 0  |  Score: A</text>
      <rect x="770" y="380" width="380" height="28" fill="#f8fafc" rx="4"/>
      <text x="780" y="399" font-family="sans-serif" font-size="12" fill="#000000">Carrier D – 87% OTIF  |  Claims: 15 |  Score: C</text>

      <rect x="30" y="436" width="560" height="96" fill="#ffffff" rx="8" filter="url(#shadow)"/>
      <text x="50" y="464" font-family="sans-serif" font-size="13" fill="#000000" font-weight="bold">Live Alerts</text>
      <text x="50" y="488" font-family="sans-serif" font-size="11" fill="#4b5563">Carrier B – SLA breach on Lane 202 (3 late deliveries)</text>
      <text x="50" y="506" font-family="sans-serif" font-size="11" fill="#6b7280">Accessorial fee dispute – pending review</text>
      <text x="50" y="524" font-family="sans-serif" font-size="11" fill="#4b5563">Carrier C improved by 4% this month</text>

      <rect x="610" y="436" width="560" height="96" fill="#ffffff" rx="8" filter="url(#shadow)"/>
      <text x="630" y="464" font-family="sans-serif" font-size="13" fill="#000000" font-weight="bold">Insights</text>
      <text x="630" y="488" font-family="sans-serif" font-size="11" fill="#6b7280">• Lane 101: 96% on-time, best performer</text>
      <text x="630" y="506" font-family="sans-serif" font-size="11" fill="#6b7280">• Potential savings: $240k by enforcing SLAs</text>
      <text x="630" y="524" font-family="sans-serif" font-size="11" fill="#6b7280">• 3 carriers need improvement plan</text>

      <rect x="30" y="660" width="1140" height="2" fill="#e5e5e5" rx="1"/>
      <text x="50" y="680" font-family="sans-serif" font-size="10" fill="#6b7280">Data updated: 2026-07-20 14:55 UTC</text>
    </svg>
  `),

  // ===== DATA DISCREPANCY =====
  data_discrepancy: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 400">
      <rect width="560" height="400" fill="#f8fafc" rx="8"/>
      <text x="40" y="50" font-family="sans-serif" font-size="20" fill="#000000" font-weight="bold">Carrier-Reported vs. Actual</text>
      <rect x="40" y="80" width="480" height="20" fill="#e5e5e5" rx="4"/>
      <rect x="40" y="80" width="320" height="20" fill="#4b5563" rx="4"/>
      <text x="50" y="94" font-family="sans-serif" font-size="12" fill="white">Carrier Reported: 95%</text>
      <rect x="40" y="115" width="480" height="20" fill="#e5e5e5" rx="4"/>
      <rect x="40" y="115" width="280" height="20" fill="#000000" rx="4"/>
      <text x="50" y="129" font-family="sans-serif" font-size="12" fill="white">Actual (Scape): 83%</text>
      <text x="40" y="170" font-family="sans-serif" font-size="16" fill="#000000">Discrepancy: 12%</text>
      <text x="40" y="200" font-family="sans-serif" font-size="14" fill="#6b7280">Hidden service failures and overcharges</text>
      <rect x="40" y="240" width="480" height="100" fill="#f8fafc" rx="8" stroke="#e5e5e5" stroke-width="1"/>
      <text x="60" y="270" font-family="sans-serif" font-size="14" fill="#000000">40% of organizations lack visibility</text>
      <text x="60" y="295" font-family="sans-serif" font-size="14" fill="#000000">30% of freight costs are accessorial</text>
      <text x="60" y="320" font-family="sans-serif" font-size="14" fill="#000000">$100B+ annual waste in freight</text>
    </svg>
  `),

  // ===== PLATFORM DESKTOP =====
  platform_desktop: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
      <rect width="1200" height="700" fill="#f8fafc" rx="12"/>
      <rect x="20" y="20" width="1160" height="60" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="58" font-family="sans-serif" font-size="20" fill="#000000" font-weight="bold">Carrier Performance Platform</text>
      <rect x="20" y="100" width="280" height="560" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <rect x="30" y="120" width="260" height="40" fill="#000000" rx="4"/>
      <text x="45" y="145" font-family="sans-serif" font-size="14" fill="white">Dashboard</text>
      <rect x="30" y="170" width="260" height="40" fill="#f8fafc" rx="4"/>
      <text x="45" y="195" font-family="sans-serif" font-size="14" fill="#4b5563">Scorecards</text>
      <rect x="30" y="220" width="260" height="40" fill="#f8fafc" rx="4"/>
      <text x="45" y="245" font-family="sans-serif" font-size="14" fill="#4b5563">Lane Analytics</text>
      <rect x="30" y="270" width="260" height="40" fill="#f8fafc" rx="4"/>
      <text x="45" y="295" font-family="sans-serif" font-size="14" fill="#4b5563">Spend Recovery</text>
      <rect x="30" y="320" width="260" height="40" fill="#f8fafc" rx="4"/>
      <text x="45" y="345" font-family="sans-serif" font-size="14" fill="#4b5563">Alerts</text>
      <rect x="320" y="100" width="860" height="200" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <rect x="340" y="120" width="250" height="120" fill="#f8fafc" rx="4" stroke="#e5e5e5" stroke-width="1"/>
      <text x="360" y="150" font-family="sans-serif" font-size="14" fill="#6b7280">On-Time</text>
      <text x="360" y="180" font-family="sans-serif" font-size="24" fill="#000000" font-weight="bold">94%</text>
      <rect x="620" y="120" width="250" height="120" fill="#f8fafc" rx="4" stroke="#e5e5e5" stroke-width="1"/>
      <text x="640" y="150" font-family="sans-serif" font-size="14" fill="#6b7280">Credits Recovered</text>
      <text x="640" y="180" font-family="sans-serif" font-size="24" fill="#000000" font-weight="bold">$87.2k</text>
      <rect x="900" y="120" width="250" height="120" fill="#f8fafc" rx="4" stroke="#e5e5e5" stroke-width="1"/>
      <text x="920" y="150" font-family="sans-serif" font-size="14" fill="#6b7280">SLA Breaches</text>
      <text x="920" y="180" font-family="sans-serif" font-size="24" fill="#000000" font-weight="bold">12</text>
      <rect x="340" y="260" width="820" height="30" fill="#f8fafc" rx="4"/>
      <text x="360" y="280" font-family="sans-serif" font-size="14" fill="#000000" font-weight="bold">Carrier Scorecard Summary</text>
      <rect x="320" y="320" width="860" height="340" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <rect x="340" y="340" width="820" height="40" fill="#f8fafc" rx="4"/>
      <text x="360" y="365" font-family="sans-serif" font-size="14" fill="#4b5563" font-weight="bold">Carrier</text>
      <text x="520" y="365" font-family="sans-serif" font-size="14" fill="#4b5563" font-weight="bold">OTIF</text>
      <text x="620" y="365" font-family="sans-serif" font-size="14" fill="#4b5563" font-weight="bold">Claims</text>
      <text x="720" y="365" font-family="sans-serif" font-size="14" fill="#4b5563" font-weight="bold">Spend</text>
      <text x="820" y="365" font-family="sans-serif" font-size="14" fill="#4b5563" font-weight="bold">Score</text>
      <rect x="340" y="390" width="820" height="30" fill="#ffffff" rx="4"/>
      <text x="360" y="410" font-family="sans-serif" font-size="13" fill="#000000">Carrier A</text>
      <text x="520" y="410" font-family="sans-serif" font-size="13" fill="#000000">98%</text>
      <text x="620" y="410" font-family="sans-serif" font-size="13" fill="#000000">2</text>
      <text x="720" y="410" font-family="sans-serif" font-size="13" fill="#000000">$45k</text>
      <text x="820" y="410" font-family="sans-serif" font-size="13" fill="#000000">A</text>
      <rect x="340" y="430" width="820" height="30" fill="#ffffff" rx="4"/>
      <text x="360" y="450" font-family="sans-serif" font-size="13" fill="#000000">Carrier B</text>
      <text x="520" y="450" font-family="sans-serif" font-size="13" fill="#000000">91%</text>
      <text x="620" y="450" font-family="sans-serif" font-size="13" fill="#000000">8</text>
      <text x="720" y="450" font-family="sans-serif" font-size="13" fill="#000000">$32k</text>
      <text x="820" y="450" font-family="sans-serif" font-size="13" fill="#000000">B</text>
      <rect x="340" y="470" width="820" height="30" fill="#ffffff" rx="4"/>
      <text x="360" y="490" font-family="sans-serif" font-size="13" fill="#000000">Carrier C</text>
      <text x="520" y="490" font-family="sans-serif" font-size="13" fill="#000000">95%</text>
      <text x="620" y="490" font-family="sans-serif" font-size="13" fill="#000000">0</text>
      <text x="720" y="490" font-family="sans-serif" font-size="13" fill="#000000">$28k</text>
      <text x="820" y="490" font-family="sans-serif" font-size="13" fill="#000000">A</text>
    </svg>
  `),

  // ===== PLATFORM MOBILE =====
  platform_mobile: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 493 800">
      <rect width="493" height="800" fill="#f8fafc" rx="20"/>
      <rect x="20" y="20" width="453" height="50" fill="#ffffff" rx="8" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="52" font-family="sans-serif" font-size="16" fill="#000000" font-weight="bold">Scape Mobile</text>
      <rect x="20" y="90" width="453" height="100" fill="#ffffff" rx="8" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="120" font-family="sans-serif" font-size="14" fill="#6b7280">On-Time</text>
      <text x="40" y="150" font-family="sans-serif" font-size="28" fill="#000000" font-weight="bold">94%</text>
      <text x="300" y="120" font-family="sans-serif" font-size="14" fill="#6b7280">Credits</text>
      <text x="300" y="150" font-family="sans-serif" font-size="28" fill="#000000" font-weight="bold">$87k</text>
      <rect x="20" y="210" width="453" height="100" fill="#ffffff" rx="8" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="240" font-family="sans-serif" font-size="14" fill="#6b7280">SLA Breaches</text>
      <text x="40" y="270" font-family="sans-serif" font-size="28" fill="#000000" font-weight="bold">12</text>
      <rect x="20" y="330" width="453" height="250" fill="#ffffff" rx="8" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="360" font-family="sans-serif" font-size="16" fill="#000000" font-weight="bold">Top Carriers</text>
      <rect x="30" y="380" width="413" height="40" fill="#f8fafc" rx="4"/>
      <text x="50" y="405" font-family="sans-serif" font-size="14" fill="#000000">Carrier A – 98%</text>
      <rect x="30" y="430" width="413" height="40" fill="#f8fafc" rx="4"/>
      <text x="50" y="455" font-family="sans-serif" font-size="14" fill="#000000">Carrier B – 91%</text>
      <rect x="30" y="480" width="413" height="40" fill="#f8fafc" rx="4"/>
      <text x="50" y="505" font-family="sans-serif" font-size="14" fill="#000000">Carrier C – 95%</text>
      <rect x="30" y="530" width="413" height="40" fill="#f8fafc" rx="4"/>
      <text x="50" y="555" font-family="sans-serif" font-size="14" fill="#000000">Carrier D – 87%</text>
      <rect x="20" y="600" width="453" height="150" fill="#ffffff" rx="8" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="630" font-family="sans-serif" font-size="14" fill="#4b5563">Alert: Carrier B SLA breach</text>
      <text x="40" y="660" font-family="sans-serif" font-size="14" fill="#6b7280">Alert: Accessorial fee dispute</text>
      <text x="40" y="690" font-family="sans-serif" font-size="14" fill="#4b5563">Alert: Late delivery – Lane 202</text>
      <rect x="180" y="770" width="133" height="10" fill="#e5e5e5" rx="4"/>
    </svg>
  `),

  // ===== SCORECARD 1 =====
  scorecard1: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 601 400">
      <rect width="601" height="400" fill="#f8fafc" rx="8"/>
      <rect x="20" y="20" width="561" height="50" fill="#000000" rx="6"/>
      <text x="40" y="52" font-family="sans-serif" font-size="18" fill="white" font-weight="bold">Carrier Scorecard – Q2</text>
      <rect x="20" y="90" width="260" height="130" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="120" font-family="sans-serif" font-size="14" fill="#6b7280">On-Time Delivery</text>
      <text x="40" y="150" font-family="sans-serif" font-size="32" fill="#000000" font-weight="bold">94%</text>
      <text x="40" y="180" font-family="sans-serif" font-size="12" fill="#4b5563">↑ 6% vs last quarter</text>
      <rect x="320" y="90" width="260" height="130" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <text x="340" y="120" font-family="sans-serif" font-size="14" fill="#6b7280">Service Failures</text>
      <text x="340" y="150" font-family="sans-serif" font-size="32" fill="#000000" font-weight="bold">12</text>
      <text x="340" y="180" font-family="sans-serif" font-size="12" fill="#4b5563">↓ 3 from last quarter</text>
      <rect x="20" y="240" width="560" height="130" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="270" font-family="sans-serif" font-size="14" fill="#6b7280">Credit Recovery</text>
      <text x="40" y="300" font-family="sans-serif" font-size="32" fill="#000000" font-weight="bold">$87,200</text>
      <text x="40" y="330" font-family="sans-serif" font-size="12" fill="#6b7280">Recovered this month</text>
    </svg>
  `),

  // ===== SCORECARD 2 =====
  scorecard2: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 601 400">
      <rect width="601" height="400" fill="#f8fafc" rx="8"/>
      <rect x="20" y="20" width="561" height="50" fill="#000000" rx="6"/>
      <text x="40" y="52" font-family="sans-serif" font-size="18" fill="white" font-weight="bold">Freight Spend Analysis</text>
      <rect x="20" y="90" width="260" height="130" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="120" font-family="sans-serif" font-size="14" fill="#6b7280">Total Spend</text>
      <text x="40" y="150" font-family="sans-serif" font-size="32" fill="#000000" font-weight="bold">$1.2M</text>
      <text x="40" y="180" font-family="sans-serif" font-size="12" fill="#6b7280">YTD freight cost</text>
      <rect x="320" y="90" width="260" height="130" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <text x="340" y="120" font-family="sans-serif" font-size="14" fill="#6b7280">Accessorial Fees</text>
      <text x="340" y="150" font-family="sans-serif" font-size="32" fill="#000000" font-weight="bold">$360k</text>
      <text x="340" y="180" font-family="sans-serif" font-size="12" fill="#6b7280">30% of total spend</text>
      <rect x="20" y="240" width="560" height="130" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="270" font-family="sans-serif" font-size="14" fill="#6b7280">Potential Savings</text>
      <text x="40" y="300" font-family="sans-serif" font-size="32" fill="#000000" font-weight="bold">$240k</text>
      <text x="40" y="330" font-family="sans-serif" font-size="12" fill="#4b5563">By recovering contract violations</text>
    </svg>
  `),

  // ===== SCORECARD 3 =====
  scorecard3: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 601 400">
      <rect width="601" height="400" fill="#f8fafc" rx="8"/>
      <rect x="20" y="20" width="561" height="50" fill="#000000" rx="6"/>
      <text x="40" y="52" font-family="sans-serif" font-size="18" fill="white" font-weight="bold">Carrier Accountability</text>
      <rect x="20" y="90" width="260" height="130" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="120" font-family="sans-serif" font-size="14" fill="#6b7280">SLA Compliance</text>
      <text x="40" y="150" font-family="sans-serif" font-size="32" fill="#000000" font-weight="bold">88%</text>
      <text x="40" y="180" font-family="sans-serif" font-size="12" fill="#6b7280">Target: 95%</text>
      <rect x="320" y="90" width="260" height="130" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <text x="340" y="120" font-family="sans-serif" font-size="14" fill="#6b7280">Disputes Won</text>
      <text x="340" y="150" font-family="sans-serif" font-size="32" fill="#000000" font-weight="bold">82%</text>
      <text x="340" y="180" font-family="sans-serif" font-size="12" fill="#4b5563">↑ 12% vs last year</text>
      <rect x="20" y="240" width="560" height="130" fill="#ffffff" rx="6" stroke="#e5e5e5" stroke-width="1"/>
      <text x="40" y="270" font-family="sans-serif" font-size="14" fill="#6b7280">QBR Readiness</text>
      <text x="40" y="300" font-family="sans-serif" font-size="32" fill="#000000" font-weight="bold">100%</text>
      <text x="40" y="330" font-family="sans-serif" font-size="12" fill="#6b7280">All carriers have data‑backed scorecards</text>
    </svg>
  `),

  // ===== TEAM ICONS =====
  team_transportation: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200">
      <rect width="260" height="200" fill="#f8fafc" rx="12"/>
      <text x="130" y="80" font-family="sans-serif" font-size="48" text-anchor="middle">🚛</text>
      <text x="130" y="140" font-family="sans-serif" font-size="18" text-anchor="middle" fill="#000000" font-weight="bold">Transportation</text>
      <text x="130" y="165" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#6b7280">Scorecards &amp; Lane Analytics</text>
    </svg>
  `),

  team_finance: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200">
      <rect width="260" height="200" fill="#f8fafc" rx="12"/>
      <text x="130" y="80" font-family="sans-serif" font-size="48" text-anchor="middle">💰</text>
      <text x="130" y="140" font-family="sans-serif" font-size="18" text-anchor="middle" fill="#000000" font-weight="bold">Finance</text>
      <text x="130" y="165" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#6b7280">Spend Recovery &amp; Audits</text>
    </svg>
  `),

  team_customer_care: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200">
      <rect width="260" height="200" fill="#f8fafc" rx="12"/>
      <text x="130" y="80" font-family="sans-serif" font-size="48" text-anchor="middle">📞</text>
      <text x="130" y="140" font-family="sans-serif" font-size="18" text-anchor="middle" fill="#000000" font-weight="bold">Customer Care</text>
      <text x="130" y="165" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#6b7280">SLA Alerts &amp; Proactive Support</text>
    </svg>
  `),

  team_transformation: svg(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200">
      <rect width="260" height="200" fill="#f8fafc" rx="12"/>
      <text x="130" y="80" font-family="sans-serif" font-size="48" text-anchor="middle">⚙️</text>
      <text x="130" y="140" font-family="sans-serif" font-size="18" text-anchor="middle" fill="#000000" font-weight="bold">Transformation</text>
      <text x="130" y="165" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#6b7280">Data Standardization &amp; Integration</text>
    </svg>
  `),
};

// ============================================================
//  HOOKS & ANIMATED STAT
// ============================================================
const ROTATING_WORDS = [
  "Carrier Scorecards",
  "Service‑Level Compliance",
  "Freight Spend Recovery",
  "Real‑Time SLA Tracking",
  "Contract Enforcement",
  "Lane Performance Analytics"
];

function useTypewriter(words, speed = 100, pause = 2400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [holding, setHolding] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let t;
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      setHolding(true);
      t = setTimeout(() => { setHolding(false); setDeleting(true); }, pause);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 2);
    } else {
      setDeleting(false);
      setWordIndex(i => i + 1);
    }
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return { text, holding };
}

function AnimatedStat({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState("0");
  const match = value.match(/^([\d.,]+)(.*)$/);
  const numericPart = match ? match[1] : value;
  const suffix = match ? match[2] : "";
  const target = parseFloat(numericPart.replace(/,/g, ""));
  const hasDecimal = numericPart.includes(".");

  useEffect(() => {
    if (!inView || isNaN(target)) { setDisplay(value); return; }
    let frame;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const formatted = hasDecimal ? current.toFixed(1) : Math.round(current).toLocaleString();
      setDisplay(formatted + suffix);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return <span ref={ref}>{display}</span>;
}

// ============================================================
//  MAIN COMPONENT
// ============================================================
export default function CarrierPerformanceAnalyticsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const successRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "", email: "", company: "", primaryMode: "", volume: "", details: ""
  });

  const { text: typedHeadline } = useTypewriter(ROTATING_WORDS);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await apiService.submitLead({
        name: formData.name,
        email: formData.email,
        service: `Carrier Performance Analytics - ${formData.primaryMode || "General"}`,
        message: `Company: ${formData.company}\nPrimary Mode: ${formData.primaryMode}\nMonthly Shipment Volume: ${formData.volume}\nDetails: ${formData.details}`,
        company: formData.company || "Prospective Client",
        phone: ""
      });
      setSubmitted(true);
      setTimeout(() => {
        if (successRef.current) successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } catch (err) {
      setError(err.message || "Failed to send. Please email info@scapedatasolutions.com");
    } finally {
      setLoading(false);
    }
  };

  // Scroll animation variants – once: false for both directions
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const viewport = { once: false, amount: 0.15 };

  return (
    <div className={styles.page}>
      <SEO
        title="Carrier Performance Analytics | Independent Scorecards & SLA Tracking"
        description="Scape Data Solutions' carrier performance analytics service turns tracking scans and contract terms into independent scorecards, SLA breach alerts, and service credit recovery for transportation, finance, and customer care teams."
        path="/services/carrier-performance-analytics"
      />

      <Navbar activeNav="services" />

      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        {/* ====== HERO ====== */}
        <section className={styles["home--hero"]}>
          <div className={styles["padding-global"]}>
            <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
              <div className={styles["home--hero_layout"]}>
                <div className={styles["home--hero_text-wr"]}>
                  <motion.div
                    className={styles["home--hero_badge"]}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2 }}
                      style={{ display: "inline-flex", marginRight: "0.5rem" }}
                    >
                      <Sparkles size={14} />
                    </motion.span>
                    Trusted by Transportation &amp; Finance Teams
                  </motion.div>

                  <motion.h1
                    className={styles["heading-style-h1"]}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.7 }}
                  >
                    Scape Data Solutions' first<br />
                    <span style={{ color: "#000000" }}>Carrier Performance Scorecard</span>
                  </motion.h1>

                  <motion.div
                    className={styles["typewriter-container"]}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    <p className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}>
                      for {typedHeadline}
                    </p>
                  </motion.div>

                  <motion.p
                    className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.7, delay: 0.15 }}
                  >
                    Scape Data Solutions turns tracking scans, EDI events, and negotiated contracts
                    into one independent scorecard. Transportation, finance, and customer care teams
                    act on what actually happened — not what a carrier chose to report.
                  </motion.p>

                  <motion.div
                    className={`${styles["button-group"]} ${styles["is-full-width"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.7, delay: 0.25 }}
                  >
                    <Link to="/contact" className={`${styles.button} w-inline-block`}>
                      <div className={styles["button-text"]}>Request a Demo</div>
                      <div className={styles["button-border"]} />
                      <div className={styles["button-hover-bg"]} />
                    </Link>
                    <a href="#process" className={`${styles.button} ${styles["is-secondary"]} w-inline-block`}>
                      <div className={styles["button-text"]}>How It Works</div>
                      <div className={`${styles["button-hover-bg"]} ${styles["is-secondary"]}`} />
                      <div className={`${styles["button-border"]} ${styles["is-secondary"]}`} />
                    </a>
                  </motion.div>

                  <motion.div
                    className={styles["home--hero_stats"]}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}
                  >
                    {[
                      { value: "500+", label: "Carriers Scored" },
                      { value: "18%", label: "Fewer Late Deliveries" },
                      { value: "3.4x", label: "More Credits Recovered" }
                    ].map((stat, i) => (
                      <div key={i}>
                        <span className={`${styles["heading-style-h3"]} ${styles["tc-primary"]}`}>
                          <AnimatedStat value={stat.value} />
                        </span>
                        <p className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}>{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["home--hero_bg-wr"]}>
            <div className={styles["home--hero_img-wr"]}>
              <motion.img
                src={IMAGES.dashboard}
                loading="lazy"
                width="960"
                alt="Scape Data Solutions Carrier Analytics Dashboard"
                className={styles["home--hero-img"]}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.9, delay: 0.2 }}
              />
            </div>
          </div>
          <div className={`${styles["home--pattern-top"]} ${styles["is-hero"]}`} />
        </section>

        {/* ====== PROBLEM SECTION ====== */}
        <section className={styles["section-white"]}>
          <div className={styles["padding-global"]}>
            <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
              <div className={`${styles["side_layout"]} ${styles["no-bottom-margin"]}`}>
                <motion.div
                  className={styles["side_img-wr"]}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={IMAGES.data_discrepancy}
                    loading="lazy"
                    width="560"
                    alt="Carrier performance data"
                    className={styles["side_gray-bg"]}
                  />
                </motion.div>
                <motion.div
                  className={styles["side_text-wr"]}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={staggerContainer}
                >
                  <motion.h2 variants={fadeUp}>
                    Your Carrier Performance Data is <span className={styles.highlight}>Incomplete</span>
                  </motion.h2>
                  <div className={`${styles["padding-top"]} ${styles["padding-kiwi"]}`} />
                  <motion.p
                    className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}
                    variants={fadeUp}
                  >
                    Without an independent view of carrier performance, transportation, finance, and
                    customer support teams make decisions based on carrier‑reported summaries —
                    which often hide service failures, overcharges, and contract violations.
                  </motion.p>
                  <motion.div
                    className={styles["stats_list"]}
                    variants={fadeUp}
                  >
                    <div className={`${styles["stats_list-item"]} ${styles["is-first"]}`}>
                      <p className={`${styles["heading-style-h3"]} ${styles["tc-primary"]}`}>40%</p>
                      <p className={styles["ts-p2"]}>of organizations lack visibility into carrier performance</p>
                    </div>
                    <div className={styles["stats_list-item"]}>
                      <p className={`${styles["heading-style-h3"]} ${styles["tc-primary"]}`}>30%</p>
                      <p className={styles["ts-p2"]}>of freight costs are driven by accessorial fees</p>
                    </div>
                    <div className={`${styles["stats_list-item"]} ${styles["is-last"]}`}>
                      <p className={`${styles["heading-style-h3"]} ${styles["tc-primary"]}`}>$100B+</p>
                      <p className={styles["ts-p2"]}>estimated annual waste in global freight costs</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== PLATFORM OVERVIEW ====== */}
        <div className={styles["frame-wr"]}>
          <section className={styles["section_dark"]}>
            <div className={styles["padding-global"]}>
              <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
                <div className={styles["center-layout"]}>
                  <div className={styles["max-width-paprika"]}>
                    <motion.h2
                      className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.6 }}
                    >
                      Turn fragmented carrier data into<br /> a single source of truth
                    </motion.h2>
                    <div className={`${styles["padding-top"]} ${styles["padding-kiwi"]}`} />
                    <motion.p
                      className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      Scape Data Solutions normalizes tracking scans, EDI events, and contract terms
                      into one unified scorecard. Every team sees the same performance record, so
                      disputes and negotiations are backed by evidence everyone trusts.
                    </motion.p>
                  </div>
                </div>
                <motion.div
                  className={styles["home_img-wr"]}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <img
                    src={IMAGES.platform_desktop}
                    loading="lazy"
                    width="1200"
                    alt="Scape Data Solutions unified carrier data platform"
                    className={styles["img-desktop"]}
                  />
                  <img
                    src={IMAGES.platform_mobile}
                    loading="lazy"
                    width="493"
                    alt="Scape Data Solutions unified carrier data platform, mobile view"
                    className={styles["img-mobile"]}
                  />
                </motion.div>
              </div>
            </div>
            <div className={styles["home--pattern-top"]} />
          </section>
        </div>

        {/* ====== THREE PILLARS – proper alternating layout ====== */}
        <section className={styles["section-white"]}>
          <div className={styles["padding-global"]}>
            <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
              
              {/* Pillar 1 – image left, text right */}
              <div className={styles["side_layout"]}>
                <motion.div
                  className={styles["side_img-wr"]}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={IMAGES.scorecard1}
                    loading="lazy"
                    width="601"
                    alt="Carrier scorecard dashboard"
                    className={styles["side_overflow-img"]}
                  />
                </motion.div>
                <motion.div
                  className={styles["side_text-wr"]}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={staggerContainer}
                >
                  <motion.h2 variants={fadeUp}>Optimize carrier selection</motion.h2>
                  <motion.p variants={fadeUp} className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}>
                    Use independent scorecards to see which carriers actually deliver on time,
                    at the right price, and with the fewest exceptions. Stop guessing — start
                    choosing based on evidence.
                  </motion.p>
                  <motion.ul variants={staggerContainer} className={styles["side_list-wr"]}>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Live lane‑level performance scores</div>
                    </li>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Transit time consistency tracking</div>
                    </li>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Exception root‑cause analysis</div>
                    </li>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Carrier accountability dashboards</div>
                    </li>
                  </motion.ul>
                  <motion.div variants={fadeUp} className={styles["button-wr"]}>
                    <Link to="/services/route-optimization-planning" className={styles["btn-link"]}>
                      Learn More →
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Pillar 2 – image right, text left */}
              <div className={styles["side_layout"]}>
                <motion.div
                  className={styles["side_text-wr"]}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={staggerContainer}
                >
                  <motion.h2 variants={fadeUp}>Control freight spend</motion.h2>
                  <motion.p variants={fadeUp} className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}>
                    Stop overpaying for service failures and accessorial fees. Scape Data Solutions'
                    scorecards automatically flag SLA breaches and generate claims packets, so finance
                    teams recover what's owed and renegotiate from a position of strength.
                  </motion.p>
                  <motion.ul variants={staggerContainer} className={styles["side_list-wr"]}>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Automated service credit recovery</div>
                    </li>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Accessorial fee validation</div>
                    </li>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Contract negotiation analytics</div>
                    </li>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Real‑time spend visibility</div>
                    </li>
                  </motion.ul>
                  <motion.div variants={fadeUp} className={styles["button-wr"]}>
                    <Link to="/services/freight-cost-analytics" className={styles["btn-link"]}>
                      Learn More →
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div
                  className={styles["side_img-wr"]}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={IMAGES.scorecard2}
                    loading="lazy"
                    width="601"
                    alt="Freight spend analysis"
                    className={styles["side_overflow-img"]}
                  />
                </motion.div>
              </div>

              {/* Pillar 3 – image left, text right */}
              <div className={styles["side_layout"]}>
                <motion.div
                  className={styles["side_img-wr"]}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={IMAGES.scorecard3}
                    loading="lazy"
                    width="601"
                    alt="Carrier accountability dashboard"
                    className={styles["side_overflow-img"]}
                  />
                </motion.div>
                <motion.div
                  className={styles["side_text-wr"]}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={staggerContainer}
                >
                  <motion.h2 variants={fadeUp}>Build carrier accountability</motion.h2>
                  <motion.p variants={fadeUp} className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}>
                    Hold every carrier to their promises. With an independent record of performance,
                    your team can have evidence‑backed conversations and drive continuous
                    improvement across your network.
                  </motion.p>
                  <motion.ul variants={staggerContainer} className={styles["side_list-wr"]}>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Carrier scorecards with trend analysis</div>
                    </li>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Service failure alerts in real time</div>
                    </li>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Performance‑based lane recommendations</div>
                    </li>
                    <li className={styles["side_list-item"]}>
                      <div className={styles["icon-md"]}><CheckCircle size={24} /></div>
                      <div>Data‑driven carrier QBRs</div>
                    </li>
                  </motion.ul>
                  <motion.div variants={fadeUp} className={styles["button-wr"]}>
                    <Link to="/services/fleet-management-telematics" className={styles["btn-link"]}>
                      Learn More →
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ====== WHY SCAPE ====== */}
        <div className={styles["frame-wr"]}>
          <section className={styles["section_dark"]}>
            <div className={styles["padding-global"]}>
              <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
                <div className={styles["center-layout"]}>
                  <div className={styles["max-width-paprika"]}>
                    <motion.h2
                      className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.6 }}
                    >
                      Built by data engineers, not a black box
                    </motion.h2>
                    <div className={`${styles["padding-top"]} ${styles["padding-kiwi"]}`} />
                    <motion.p
                      className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      Scape Data Solutions builds carrier scorecards from your own tracking and
                      contract data, with a methodology your team can audit line by line —
                      no proprietary rating you have to take on faith.
                    </motion.p>
                    <motion.div
                      className={`${styles["button-group"]} ${styles["is-full-width"]}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Link to="/company" className={`${styles.button} ${styles["is-secondary"]} w-inline-block`}>
                        <div className={styles["button-text"]}>About Scape Data Solutions</div>
                        <div className={`${styles["button-hover-bg"]} ${styles["is-secondary"]}`} />
                        <div className={`${styles["button-border"]} ${styles["is-secondary"]}`} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["home--pattern-top"]} />
          </section>
        </div>

        {/* ====== METRICS ====== */}
        <section className={styles["section-white"]}>
          <div className={styles["padding-global"]}>
            <div className={styles["container-large"]}>
              <div className={styles["center-layout"]}>
                <div className={styles["max-width-olive"]}>
                  <motion.h2
                    className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6 }}
                  >
                    Unlock profit trapped in your carrier network
                  </motion.h2>
                </div>
              </div>
              <div className={`${styles["padding-bottom"]} ${styles["padding-kiwi"]}`} />
              <motion.div
                className={styles["metrics_layout"]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className={styles["metrics_card"]}>
                  <div className={styles["count-wrp"]}>
                    <div className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}>5-7</div>
                    <div className={styles["metrics_value-text"]}>%</div>
                  </div>
                  <div className={styles["ts-p2"]}>reduction in freight spend</div>
                </div>
                <div className={styles["metrics_line"]} />
                <div className={styles["metrics_card"]}>
                  <div className={styles["count-wrp"]}>
                    <div className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}>15-20</div>
                    <div className={styles["metrics_value-text"]}>%</div>
                  </div>
                  <div className={styles["ts-p2"]}>contract cost savings</div>
                </div>
                <div className={styles["metrics_line"]} />
                <div className={styles["metrics_card"]}>
                  <div className={styles["count-wrp"]}>
                    <div className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}>Weeks</div>
                    <div className={styles["metrics_value-text"]} />
                  </div>
                  <div className={styles["ts-p2"]}>to implement, not months</div>
                </div>
                <div className={styles["metrics_line"]} />
                <div className={styles["metrics_card"]}>
                  <div className={styles["count-wrp"]}>
                    <div className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}>7-20</div>
                    <div className={styles["metrics_value-text"]}>x</div>
                  </div>
                  <div className={styles["ts-p2"]}>ROI in first year</div>
                </div>
                <div className={styles["metrics_blur"]} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====== TEAMS ====== */}
        <div className={styles["frame-wr"]}>
          <section className={styles["section-desert"]}>
            <div className={styles["padding-global"]}>
              <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
                <div className={styles["center-layout"]}>
                  <div className={styles["max-width-paprika"]}>
                    <motion.h2
                      className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.6 }}
                    >
                      Built for every team that touches carrier data
                    </motion.h2>
                  </div>
                </div>
                <motion.div
                  className={styles["teams_cards-grid"]}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={staggerContainer}
                >
                  <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                    <div className={styles["teams_card"]}>
                      <img src={IMAGES.team_transportation} loading="lazy" width="260" alt="Transportation" />
                    </div>
                    <div className={styles["teams_card_text-wr"]}>
                      <h3 className={styles["heading-style-h5"]}>Transportation</h3>
                      <p className={styles["ts-p2"]}>Use independent scorecards to negotiate better rates and hold carriers accountable.</p>
                    </div>
                  </motion.div>
                  <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                    <div className={styles["teams_card"]}>
                      <img src={IMAGES.team_finance} loading="lazy" width="260" alt="Finance" />
                    </div>
                    <div className={styles["teams_card_text-wr"]}>
                      <h3 className={styles["heading-style-h5"]}>Finance</h3>
                      <p className={styles["ts-p2"]}>Automatically recover service credits and validate accessorial fees.</p>
                    </div>
                  </motion.div>
                  <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                    <div className={styles["teams_card"]}>
                      <img src={IMAGES.team_customer_care} loading="lazy" width="260" alt="Customer Care" />
                    </div>
                    <div className={styles["teams_card_text-wr"]}>
                      <h3 className={styles["heading-style-h5"]}>Customer Care</h3>
                      <p className={styles["ts-p2"]}>Get ahead of delivery problems with real‑time SLA breach alerts.</p>
                    </div>
                  </motion.div>
                  <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                    <div className={styles["teams_card"]}>
                      <img src={IMAGES.team_transformation} loading="lazy" width="260" alt="Transformation" />
                    </div>
                    <div className={styles["teams_card_text-wr"]}>
                      <h3 className={styles["heading-style-h5"]}>Transformation</h3>
                      <p className={styles["ts-p2"]}>Clean, standardized carrier data for downstream systems and analytics.</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className={`${styles["home--pattern-top"]} ${styles["is-grey"]}`} />
          </section>
        </div>

        {/* ====== HOW IT WORKS ====== */}
        <section className={styles["section-white"]}>
          <div className={styles["padding-global"]}>
            <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
              <div className={styles["center-layout"]}>
                <div className={styles["max-width-paprika"]}>
                  <motion.h2
                    className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6 }}
                  >
                    How It Works in 4 Steps
                  </motion.h2>
                  <div className={`${styles["padding-top"]} ${styles["padding-kiwi"]}`} />
                  <motion.p
                    className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    From raw tracking data to actionable scorecards – we make it simple.
                  </motion.p>
                </div>
              </div>
              <div className={`${styles["padding-bottom"]} ${styles["padding-kiwi"]}`} />
              <motion.div
                className={styles["teams_cards-grid"]}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={staggerContainer}
              >
                <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                  <div className={styles["teams_card"]} style={{ background: "#f8fafc", padding: "1.5rem", textAlign: "center", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000" }}>1</div>
                    <h4 style={{ margin: "0.5rem 0" }}>Connect</h4>
                    <p className={styles["ts-p2"]}>Integrate with your TMS, EDI, and tracking data sources.</p>
                  </div>
                </motion.div>
                <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                  <div className={styles["teams_card"]} style={{ background: "#f8fafc", padding: "1.5rem", textAlign: "center", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000" }}>2</div>
                    <h4 style={{ margin: "0.5rem 0" }}>Normalize</h4>
                    <p className={styles["ts-p2"]}>Clean, standardise, and enrich the data for accurate scoring.</p>
                  </div>
                </motion.div>
                <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                  <div className={styles["teams_card"]} style={{ background: "#f8fafc", padding: "1.5rem", textAlign: "center", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000" }}>3</div>
                    <h4 style={{ margin: "0.5rem 0" }}>Score</h4>
                    <p className={styles["ts-p2"]}>Generate independent scorecards with SLA compliance and spend insights.</p>
                  </div>
                </motion.div>
                <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                  <div className={styles["teams_card"]} style={{ background: "#f8fafc", padding: "1.5rem", textAlign: "center", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                    <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#000000" }}>4</div>
                    <h4 style={{ margin: "0.5rem 0" }}>Act</h4>
                    <p className={styles["ts-p2"]}>Use alerts and dashboards to recover credits and improve carrier performance.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====== KEY FEATURES ====== */}
        <div className={styles["frame-wr"]}>
          <section className={styles["section_dark"]}>
            <div className={styles["padding-global"]}>
              <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
                <div className={styles["center-layout"]}>
                  <div className={styles["max-width-paprika"]}>
                    <motion.h2
                      className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.6 }}
                    >
                      Key Features That Drive Results
                    </motion.h2>
                  </div>
                </div>
                <motion.div
                  className={styles["teams_cards-grid"]}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={staggerContainer}
                >
                  <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                    <div className={styles["teams_card"]} style={{ padding: "1.5rem", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                      <BarChart3 size={32} color="#000000" />
                      <h4 style={{ color: "#000000", margin: "0.5rem 0" }}>Real-Time Dashboards</h4>
                      <p className={styles["ts-p2"]} style={{ color: "#6b7280" }}>Monitor carrier performance across all lanes in one view.</p>
                    </div>
                  </motion.div>
                  <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                    <div className={styles["teams_card"]} style={{ padding: "1.5rem", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                      <TrendingUp size={32} color="#000000" />
                      <h4 style={{ color: "#000000", margin: "0.5rem 0" }}>Automated Credit Recovery</h4>
                      <p className={styles["ts-p2"]} style={{ color: "#6b7280" }}>Flag SLA breaches and generate claims packets instantly.</p>
                    </div>
                  </motion.div>
                  <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                    <div className={styles["teams_card"]} style={{ padding: "1.5rem", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                      <Award size={32} color="#000000" />
                      <h4 style={{ color: "#000000", margin: "0.5rem 0" }}>Carrier Scorecards</h4>
                      <p className={styles["ts-p2"]} style={{ color: "#6b7280" }}>Independent, objective performance rankings for every carrier.</p>
                    </div>
                  </motion.div>
                  <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                    <div className={styles["teams_card"]} style={{ padding: "1.5rem", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                      <Shield size={32} color="#000000" />
                      <h4 style={{ color: "#000000", margin: "0.5rem 0" }}>Contract Enforcement</h4>
                      <p className={styles["ts-p2"]} style={{ color: "#6b7280" }}>Ensure carriers meet their SLAs and negotiate from strength.</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className={styles["home--pattern-top"]} />
          </section>
        </div>

        {/* ====== CASE STUDIES ====== */}
        <section className={styles["section-white"]}>
          <div className={styles["padding-global"]}>
            <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
              <div className={styles["center-layout"]}>
                <div className={styles["max-width-paprika"]}>
                  <motion.h2
                    className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6 }}
                  >
                    Success Stories
                  </motion.h2>
                  <div className={`${styles["padding-top"]} ${styles["padding-kiwi"]}`} />
                  <motion.p
                    className={`${styles["ts-p2"]} ${styles["tc-secondary"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    See how our clients transformed their carrier relationships.
                  </motion.p>
                </div>
              </div>
              <motion.div
                className={styles["teams_cards-grid"]}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={staggerContainer}
              >
                <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                  <div className={styles["teams_card"]} style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                    <h4 style={{ color: "#000000" }}>Global Logistics Provider</h4>
                    <p className={styles["ts-p2"]}>Recovered $1.2M in service credits in the first year by enforcing SLAs across 200+ carriers.</p>
                    <p style={{ fontWeight: "bold", color: "#000000" }}>+18% improvement in on-time delivery.</p>
                  </div>
                </motion.div>
                <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                  <div className={styles["teams_card"]} style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                    <h4 style={{ color: "#000000" }}>Retail Chain</h4>
                    <p className={styles["ts-p2"]}>Reduced accessorial fees by 30% by identifying overcharges and renegotiating contracts with data.</p>
                    <p style={{ fontWeight: "bold", color: "#000000" }}>Saved $450k annually.</p>
                  </div>
                </motion.div>
                <motion.div className={styles["teams_card-wr"]} variants={fadeUp}>
                  <div className={styles["teams_card"]} style={{ background: "#f8fafc", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e5e5e5" }}>
                    <h4 style={{ color: "#000000" }}>Manufacturing Firm</h4>
                    <p className={styles["ts-p2"]}>Improved carrier accountability and reduced late deliveries by 22% using independent scorecards.</p>
                    <p style={{ fontWeight: "bold", color: "#000000" }}>Customer satisfaction increased by 15%.</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ====== FAQ ====== */}
        <div className={styles["frame-wr"]}>
          <section className={styles["section_dark"]}>
            <div className={styles["padding-global"]}>
              <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
                <div className={styles["center-layout"]}>
                  <div className={styles["max-width-paprika"]}>
                    <motion.h2
                      className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewport}
                      transition={{ duration: 0.6 }}
                    >
                      Frequently Asked Questions
                    </motion.h2>
                  </div>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={staggerContainer}
                  style={{ maxWidth: "800px", margin: "0 auto" }}
                >
                  {[
                    { q: "What data do I need to provide?", a: "We integrate with your TMS, EDI feeds, and tracking APIs. We handle the rest." },
                    { q: "How long does implementation take?", a: "Most clients are live within 2–4 weeks, depending on data complexity." },
                    { q: "Is my data secure?", a: "Yes. We use enterprise-grade encryption and never share your data with third parties." },
                    { q: "Can I use this with multiple carriers?", a: "Absolutely. We support unlimited carriers and lanes." },
                  ].map((faq, i) => (
                    <motion.div key={i} variants={fadeUp} style={{ background: "#f8fafc", marginBottom: "1rem", borderRadius: "8px", padding: "1rem", border: "1px solid #e5e5e5" }}>
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        style={{ background: "none", border: "none", color: "#000000", fontSize: "1.1rem", fontWeight: "bold", width: "100%", textAlign: "left", cursor: "pointer" }}
                      >
                        {faq.q}
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p style={{ color: "#6b7280", marginTop: "0.5rem" }}>{faq.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            <div className={styles["home--pattern-top"]} />
          </section>
        </div>

        {/* ====== TESTIMONIALS ====== */}
        <section className={styles["section-slider"]}>
          <div className={styles["padding-global"]}>
            <div className={`${styles["container-large"]} ${styles["z-index-2"]}`}>
              <div className={styles["quote_slider-wr"]}>
                <div className={styles["heading-row"]}>
                  <motion.h2
                    className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6 }}
                  >
                    What clients say about us
                  </motion.h2>
                </div>
                <div className={styles["quote-wr"]}>
                  <div className={styles["quote_text-wr"]}>
                    <div className={styles["quote_bottom-wr"]}>
                      <p className={styles["ts-quote-sm"]}>
                        Read verified client feedback on our{" "}
                        <Link to="/testimonials" className={styles["tc-primary"]}>Testimonials page</Link>, or see
                        real results on our{" "}
                        <Link to="/portfolio" className={styles["tc-primary"]}>Portfolio</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== CTA ====== */}
        <section className={styles["section-cta"]}>
          <div className={styles["padding-global"]}>
            <div className={styles["container-large"]}>
              <div className={styles["container_2columns"]}>
                <div className={styles["text-wrapper"]}>
                  <motion.h2
                    className={`${styles["heading-style-h2"]} ${styles["tc-primary"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6 }}
                  >
                    Ready to Optimize Your Carrier Network?
                  </motion.h2>
                  <div className={`${styles["padding-bottom"]} ${styles["padding-indigo"]}`} />
                  <motion.p
                    className={`${styles["ts-p1"]} ${styles["tc-secondary"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Get a free scorecard preview built from a sample of your own tracking data.
                    Our team will walk you through the results and show you how independent
                    scoring can transform your carrier relationships and freight spend.
                  </motion.p>
                  <motion.div
                    className={`${styles["button-wr"]} ${styles["is-hero"]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Link to="/contact" className={`${styles.button} w-inline-block`}>
                      <div className={styles["button-text"]}>Get Free Scorecard Preview</div>
                      <div className={styles["button-border"]} />
                      <div className={styles["button-hover-bg"]} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["cta_gradient"]} />
        </section>
      </motion.main>

      <Footer />
    </div>
  );
}