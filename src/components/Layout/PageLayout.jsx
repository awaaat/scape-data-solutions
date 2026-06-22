// src/components/Layout/PageLayout.jsx
// Shared layout – now uses standalone Navbar and Footer components

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, Bell, ChevronUp, X, Activity,
  GitBranch, Zap, Brain, Database, Server, MessageSquare
} from "lucide-react";
import styles from "../Components.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// ─── Define animations directly (no external import) ────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const slideL = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const slideR = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.05 } }
};

export const spring = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

export const REPLAY_VIEWPORT = { once: false, amount: 0.15 };
export const REPLAY_VIEWPORT_LOW = { once: false, amount: 0.08 };

// ─── Data for live metrics and news ──────────────────────────────
const LIVE_METRICS = [
  { label:"Events Processed",    val:"8.4M",  unit:"/min",  icon:<Activity size={14}/>,   color:"#fdb840", delta:"+2.3%" },
  { label:"Active Pipelines",    val:"1,247", unit:"",      icon:<GitBranch size={14}/>,  color:"#00d4ff", delta:"+18"   },
  { label:"Avg Query Time",      val:"87",    unit:"ms",    icon:<Zap size={14}/>,        color:"#a259ff", delta:"-4ms"  },
  { label:"Models in Prod",      val:"342",   unit:"",      icon:<Brain size={14}/>,      color:"#00e676", delta:"+7"    },
  { label:"Data Ingested Today", val:"14.2",  unit:"TB",    icon:<Database size={14}/>,   color:"#ff6b6b", delta:"+1.8TB"},
  { label:"Uptime",              val:"99.99", unit:"%",     icon:<Server size={14}/>,     color:"#fdb840", delta:"stable"},
];

const NEWS_ITEMS = [
  "🚀 New AI model achieves 99.1% accuracy in fraud detection",
  "📊 Client retention hits all-time high of 96%",
  "🌍 Expanding operations to 5 new countries in 2026",
  "🏆 Named 'Best Data Analytics Provider' by G2",
];

export default function PageLayout({ children, activeNav = "" }) {
  const [showTop, setShowTop] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [metricTick, setMetricTick] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);
  const [liveData, setLiveData] = useState([55,68,42,81,73,90,77,63,88,71]);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");
  const [chatLog, setChatLog] = useState([{from:"bot", text:"Hi! 👋 How can Scape Data Solutions help your business grow today?"}]);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const d = document.documentElement;
      setScrollPct((window.scrollY / (d.scrollHeight - window.innerHeight)) * 100);
      setShowTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // News ticker
  useEffect(() => {
    const t = setInterval(() => setNewsIndex(p => (p + 1) % NEWS_ITEMS.length), 5000);
    return () => clearInterval(t);
  }, []);

  // Live data simulation
  useEffect(() => {
    const t = setInterval(() => {
      setLiveData(p => [...p.slice(1), Math.floor(Math.random() * 40 + 52)]);
      setMetricTick(p => p + 1);
    }, 1600);
    return () => clearInterval(t);
  }, []);

  const sendChat = useCallback(() => {
    if (!chatMsg.trim()) return;
    setChatLog(l => [...l, { from: "user", text: chatMsg }]);
    setChatMsg("");
    setTimeout(() => {
      setChatLog(l => [...l, {
        from: "bot",
        text: "Thanks for reaching out! Our team will respond within 1 hour. For urgent queries, call +1 (312) 212-3396 or WhatsApp us."
      }]);
    }, 900);
  }, [chatMsg]);

  const maxLive = Math.max(...liveData);

  return (
    <div className={styles.page}>

      {/* ── Scroll progress ── */}
      <div className={styles.progressTrack}>
        <motion.div className={styles.progressBar} style={{ width: `${scrollPct}%` }} />
      </div>

      {/* ── News ticker ── */}
      <div className={styles.newsTicker}>
        <div className={styles.container}>
          <div className={styles.newsRow}>
            <span className={styles.newsLabel}><Bell size={12} /> Latest</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={newsIndex}
                className={styles.newsText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {NEWS_ITEMS[newsIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Floating live widget ── */}
      <motion.div
        className={styles.floatingWidget}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        <div className={styles.fwHeader}>
          <Activity size={12} /> <span>Live Metrics</span>
          <motion.span
            className={styles.livePulse}
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
        <div className={styles.fwBars}>
          {liveData.map((v, i) => (
            <motion.div
              key={i}
              className={styles.fwBar}
              animate={{ height: `${(v / maxLive) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className={styles.fwFoot}>
          <span className={styles.fwVal}>{liveData[liveData.length - 1]}K</span>
          <span className={styles.fwLbl}>events/sec</span>
        </div>
      </motion.div>

      {/* ── Metrics ticker ── */}
      <div className={styles.metricsTicker}>
        <div className={styles.metricsTrack}>
          {[...LIVE_METRICS, ...LIVE_METRICS].map((m, i) => (
            <span key={i} className={styles.metricsItem}>
              <span style={{ color: m.color }}>{m.icon}</span>
              <span className={styles.metricsLabel}>{m.label}:</span>
              <motion.span
                className={styles.metricsVal}
                key={metricTick}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {m.val}{m.unit}
              </motion.span>
              <span
                className={styles.metricsDelta}
                style={{ color: m.delta.startsWith("-") ? "#ff6b6b" : "#00e676" }}
              >
                {m.delta}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Navbar ── */}
      <Navbar activeNav={activeNav} />

      {/* ── Page content ── */}
      <main className={styles.mainContent}>
        {children}
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Side fixed buttons ── */}
      <div className={styles.sideFixed}>
        <motion.a
          href="https://wa.me/+923218465214"
          className={`${styles.sideBtn} ${styles.sideBtnWA}`}
          whileHover={{ x: 6 }}
        >
          <i className="fab fa-whatsapp" /> WhatsApp
        </motion.a>
      </div>

      {/* ── Chat widget ── */}
      <div className={styles.chatWidget}>
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              className={styles.chatBox}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.chatHeader}>
                <div className={styles.chatHeaderInfo}>
                  <div className={styles.chatAvatar}><MessageSquare size={14} /></div>
                  <div>
                    <strong>Scape Data Support</strong>
                    <span>
                      <motion.span
                        className={styles.livePulse}
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      Online
                    </span>
                  </div>
                </div>
                <button onClick={() => setChatOpen(false)}><X size={16} /></button>
              </div>
              <div className={styles.chatLog}>
                {chatLog.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`${styles.chatMsg} ${msg.from === "user" ? styles.chatMsgUser : styles.chatMsgBot}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </div>
              <div className={styles.chatInput}>
                <input
                  value={chatMsg}
                  onChange={e => setChatMsg(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendChat()}
                  placeholder="Type your message..."
                />
                <motion.button
                  onClick={sendChat}
                  whileHover={{ scale: 1.1, backgroundColor: "#fdb840" }}
                >
                  <ArrowRight size={15} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          className={styles.chatToggle}
          onClick={() => setChatOpen(!chatOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={chatOpen ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {chatOpen ? <X size={20} /> : <MessageSquare size={20} />}
          {!chatOpen && (
            <motion.span
              className={styles.chatBadge}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              1
            </motion.span>
          )}
        </motion.button>
      </div>

      {/* ── Scroll to top ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            className={styles.scrollTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            whileHover={{ scale: 1.1, backgroundColor: "#fdb840", color: "#fff" }}
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}