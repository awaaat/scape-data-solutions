import { Fragment, useEffect, useState } from "react";
import styles from "./ExcelVisuals.module.css";

function useTick(ms, mod) {
  const [s, setS] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setS((x) => (x + 1) % mod), ms);
    return () => clearInterval(id);
  }, [ms, mod]);
  return s;
}

/* ================= HERO SPREADSHEET ================= */
const ROWS = [["Jan", 42, 30], ["Feb", 48, 33], ["Mar", 45, 35], ["Apr", 57, 38], ["May", 63, 40], ["Jun", 72, 44]];
const HEADS = ["Month", "Revenue", "Cost", "Profit", "Margin"];
const COLS = ["A", "B", "C", "D", "E"];
const PROFITS = ROWS.map((r) => r[1] - r[2]);
const SUM_REV = ROWS.reduce((a, r) => a + r[1], 0);
const SUM_COST = ROWS.reduce((a, r) => a + r[2], 0);
const SUM_PROFIT = PROFITS.reduce((a, b) => a + b, 0);
const MAX_P = Math.max(...PROFITS);

export function HeroSpreadsheet() {
  const step = useTick(1100, 14);
  let ref = "D8";
  let formula = "=SUM(D2:D7)";
  if (step < 6) {
    ref = `D${step + 2}`;
    formula = `=B${step + 2}-C${step + 2}`;
  } else if (step < 12) {
    const r = step - 4;
    ref = `E${r}`;
    formula = `=D${r}/B${r}`;
  }

  const value = (c, r) => {
    if (r === 1) return HEADS[COLS.indexOf(c)];
    if (r === 8) {
      if (c === "A") return "Total";
      if (c === "B") return SUM_REV;
      if (c === "C") return SUM_COST;
      if (c === "D") return step >= 12 ? SUM_PROFIT : "";
      return "";
    }
    const i = r - 2;
    if (c === "A") return ROWS[i][0];
    if (c === "B") return ROWS[i][1];
    if (c === "C") return ROWS[i][2];
    if (c === "D") return step >= i ? PROFITS[i] : "";
    return step >= 6 + i ? `${Math.round((PROFITS[i] / ROWS[i][1]) * 100)}%` : "";
  };

  return (
    <div className={styles.heroWrap}>
      <span className={`${styles.chip} ${styles.chipA}`}>=XLOOKUP()</span>
      <span className={`${styles.chip} ${styles.chipB}`}>PivotTable</span>
      <span className={`${styles.chip} ${styles.chipC}`}>Solver</span>
      <span className={`${styles.chip} ${styles.chipD}`}>Power Query</span>

      <div className={styles.xl}>
        <div className={styles.titleBar}>
          <i /><i /><i />
          <span>Q3_Forecast_Model.xlsx — Excel</span>
        </div>
        <div className={styles.ribbon}>
          {["File", "Home", "Insert", "Formulas", "Data", "View"].map((t) => (
            <span key={t} className={t === "Formulas" ? styles.tabOn : styles.tab}>{t}</span>
          ))}
        </div>
        <div className={styles.fbar}>
          <span className={styles.nameBox}>{ref}</span>
          <span className={styles.fx}>fx</span>
          <span className={styles.formula}>
            <span key={step} className={styles.typed}>{formula}</span>
            <span className={styles.caret} />
          </span>
        </div>

        <div className={styles.xlBody}>
          <div className={styles.grid}>
            <div className={styles.corner} />
            {COLS.map((c) => (
              <div key={c} className={`${styles.colHead} ${ref.startsWith(c) ? styles.headOn : ""}`}>{c}</div>
            ))}
            {Array.from({ length: 8 }).map((_, i) => {
              const r = i + 1;
              return (
                <Fragment key={r}>
                  <div className={`${styles.rowHead} ${ref.slice(1) === String(r) ? styles.headOn : ""}`}>{r}</div>
                  {COLS.map((c) => {
                    const v = value(c, r);
                    const cls = [
                      styles.cell,
                      r === 1 ? styles.hd : "",
                      c !== "A" && r > 1 ? styles.num : "",
                      r === 8 ? styles.tot : "",
                      ref === `${c}${r}` ? styles.sel : "",
                    ].join(" ");
                    return (
                      <div key={c} className={cls}>
                        {v !== "" && <span className={styles.pop}>{v}</span>}
                      </div>
                    );
                  })}
                </Fragment>
              );
            })}
          </div>

          <div className={styles.side}>
            <span className={styles.sideLabel}>Profit by month ($K)</span>
            <div className={styles.kpi}>{step >= 12 ? `$${SUM_PROFIT}K` : "Calculating…"}</div>
            <div className={styles.bars}>
              {PROFITS.map((p, i) => (
                <div key={i} className={styles.barCol}>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ height: step >= i ? `${(p / MAX_P) * 100}%` : "0%" }} />
                  </div>
                  <span className={styles.barLbl}>{ROWS[i][0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.status}>
          <span>Ready</span>
          <span>{step >= 12 ? `Σ Profit: $${SUM_PROFIT}K` : "Calculate"}</span>
        </div>
      </div>
    </div>
  );
}

/* ================= SCENARIO LAB (overview) ================= */
export function ScenarioLab() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 90);
    return () => clearInterval(id);
  }, []);
  const calc = (k) => {
    const g = 8 + 7 * Math.sin(k / 25);
    const c = 6 + 5 * Math.sin(k / 17 + 1);
    const v = 4 + 4 * Math.sin(k / 31 + 2);
    const rev = 1000 * (1 + g / 100) * (1 + v / 100);
    const cost = 700 * (1 - c / 100) * (1 + v / 100);
    return { g, c, v, profit: rev - cost };
  };
  const now = calc(t);
  const pts = Array.from({ length: 40 }, (_, i) => calc(t - (39 - i) * 2).profit);
  const lo = Math.min(...pts);
  const hi = Math.max(...pts);
  const line = pts.map((p, i) => `${(i / 39) * 200},${54 - ((p - lo) / (hi - lo || 1)) * 46}`).join(" ");
  const delta = (now.profit / 400 - 1) * 100;
  const sliders = [
    ["Price growth", now.g, 15, `+${now.g.toFixed(1)}%`],
    ["Cost reduction", now.c, 12, `-${now.c.toFixed(1)}%`],
    ["Volume change", now.v, 8, `+${now.v.toFixed(1)}%`],
  ];

  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span>Scenario Manager</span>
        <span className={styles.live}><i /> Live</span>
      </div>
      {sliders.map(([label, val, max, txt]) => (
        <div key={label} className={styles.sl}>
          <div className={styles.slTop}><span>{label}</span><b>{txt}</b></div>
          <div className={styles.slTrack}>
            <div className={styles.slFill} style={{ width: `${Math.min(100, (val / max) * 100)}%` }} />
            <div className={styles.slKnob} style={{ left: `${Math.min(100, (val / max) * 100)}%` }} />
          </div>
        </div>
      ))}
      <div className={styles.kpiRow}>
        <span className={styles.kpiVal}>${Math.round(now.profit)}K</span>
        <span className={styles.kpiDelta}>{delta >= 0 ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}% vs plan</span>
      </div>
      <svg viewBox="0 0 200 60" className={styles.spark} preserveAspectRatio="none">
        <polygon points={`${line} 200,60 0,60`} className={styles.sparkArea} />
        <polyline points={line} className={styles.sparkLine} />
      </svg>
    </div>
  );
}

/* ================= FEATURE MINI-VISUALS ================= */
function ForecastViz() {
  return (
    <svg viewBox="0 0 200 90" className={styles.vizSvg} preserveAspectRatio="none">
      <polygon points="120,44 150,32 175,22 200,12 200,40 175,38 150,40" className={styles.band} />
      <polyline pathLength="1" points="0,70 25,62 50,66 75,50 100,54 120,44" className={styles.lineSolid} />
      <polyline points="120,44 150,36 175,30 200,24" className={styles.lineDash} />
      <circle cx="120" cy="44" r="3" className={styles.dotAcc} />
    </svg>
  );
}

function SolverViz() {
  const items = [["Product A", 78, 0], ["Product B", 54, 0.4], ["Product C", 91, 0.8]];
  return (
    <div className={styles.vizCol}>
      {items.map(([n, w, d]) => (
        <div key={n} className={styles.sRow}>
          <span>{n}</span>
          <div className={styles.sTrack}>
            <i className={styles.solveFill} style={{ "--w": `${w}%`, animationDelay: `${d}s` }} />
          </div>
        </div>
      ))}
      <div className={styles.badge}>● Solver found a solution</div>
    </div>
  );
}

function ScenarioToggleViz() {
  const s = useTick(1400, 3);
  const D = [["Base", 100, "$420K"], ["Best", 138, "$580K"], ["Worst", 64, "$270K"]];
  return (
    <div className={styles.vizCol}>
      <div className={styles.pills}>
        {D.map(([n], i) => (
          <span key={n} className={`${styles.pill} ${s === i ? styles.pillOn : ""}`}>{n}</span>
        ))}
      </div>
      <div className={styles.bigNum}>{D[s][2]}</div>
      <div className={styles.sTrack}>
        <i className={styles.tFill} style={{ width: `${D[s][1] / 1.4}%` }} />
      </div>
    </div>
  );
}

function RegressionViz() {
  const pts = [[15, 70], [30, 62], [42, 64], [58, 50], [72, 52], [88, 38], [105, 40], [120, 28], [140, 30], [160, 16], [178, 18]];
  return (
    <svg viewBox="0 0 200 90" className={styles.vizSvg} preserveAspectRatio="none">
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.6" className={styles.pt} style={{ animationDelay: `${i * 0.18}s` }} />
      ))}
      <line x1="10" y1="74" x2="182" y2="14" pathLength="1" className={styles.trend} />
      <text x="128" y="84" className={styles.r2}>R² = 0.94</text>
    </svg>
  );
}

function DashboardViz() {
  const s = useTick(1200, 3);
  return (
    <div className={styles.dash}>
      <svg viewBox="0 0 40 40" className={styles.donut}>
        <circle cx="20" cy="20" r="16" className={styles.donutBg} />
        <circle cx="20" cy="20" r="16" pathLength="100" className={styles.donutFg} />
      </svg>
      <div className={styles.miniBars}>
        {[55, 80, 45, 90, 65].map((h, i) => (
          <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>
      <div className={styles.slicers}>
        {["2024", "North", "Q3"].map((c, i) => (
          <span key={c} className={`${styles.pill} ${s === i ? styles.pillOn : ""}`}>{c}</span>
        ))}
      </div>
    </div>
  );
}

function VbaViz() {
  const n = useTick(750, 8);
  const L = ["Sub RefreshReport()", '  Sheets("Data").Refresh', '  Range("D2:D7").Calculate', '  MsgBox "Report updated"', "End Sub"];
  return (
    <div className={styles.vba}>
      {L.map((l, i) => i < n && (
        <div key={i} className={styles.codeLine}>
          <span className={styles.codeTyped}>{l}</span>
        </div>
      ))}
    </div>
  );
}

export const FEATURE_VIZ = [
  <ForecastViz key="f" />,
  <SolverViz key="s" />,
  <ScenarioToggleViz key="t" />,
  <RegressionViz key="r" />,
  <DashboardViz key="d" />,
  <VbaViz key="v" />,
];

/* ================= MONTE CARLO ================= */
export function MonteCarloViz() {
  const c = useTick(60, 220);
  const p = Math.min(c, 170) / 170;
  const n = Math.round(p * 10000);
  const bins = Array.from({ length: 21 }, (_, i) => {
    const g = Math.exp(-((i - 11) ** 2) / (2 * 3.4 ** 2));
    const r = Math.abs((Math.sin(i * 12.9898) * 43758.5453) % 1);
    return Math.min(1, g * (0.12 + 0.88 * p) + r * 0.35 * (1 - p) * (0.3 + g));
  });
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span>Monte Carlo Simulation</span>
        <span className={styles.live}><i /> Running</span>
      </div>
      <div className={styles.hist}>
        {bins.map((h, i) => (
          <div key={i} className={`${styles.hBar} ${i < 7 ? styles.hLoss : ""}`} style={{ height: `${h * 100}%` }} />
        ))}
        <div className={styles.meanLine} style={{ left: `${(11.5 / 21) * 100}%` }} />
      </div>
      <div className={styles.stats}>
        <div><span>Iterations</span><b>{n.toLocaleString()}</b></div>
        <div><span>Mean profit</span><b>${Math.round(380 + 40 * p)}K</b></div>
        <div><span>P(profit &gt; 0)</span><b>{Math.round(60 + 27 * p)}%</b></div>
      </div>
    </div>
  );
}

/* ================= SOLVER PANEL ================= */
export function SolverPanel() {
  const t = useTick(450, 10);
  const prog = t < 2 ? 0 : t < 8 ? (t - 1) / 7 : 1;
  const solved = t >= 8;
  const vars = [["$B$2  Product A", 120], ["$B$3  Product B", 85], ["$B$4  Product C", 150]];
  return (
    <div className={styles.panel}>
      <div className={styles.panelHead}>
        <span>Solver Parameters</span>
        <span className={styles.live}><i /> Optimizing</span>
      </div>
      <div className={styles.row}><span>Set Objective</span><b className={styles.val}>$B$8 → Max</b></div>
      {vars.map(([n, v]) => (
        <div key={n} className={styles.row}>
          <span>{n}</span>
          <b className={styles.val}>{Math.round(v * prog)} units</b>
        </div>
      ))}
      <div className={styles.row}><span>Subject to</span><b className={styles.val}>Hours ≤ 400 · Cost ≤ $60K</b></div>
      <div className={styles.row}><span>Profit</span><b className={styles.val}>${Math.round(prog * 48200).toLocaleString()}</b></div>
      <div className={styles.solveRow}>
        <button type="button" className={`${styles.solveBtn} ${t < 2 ? styles.pulse : ""}`}>Solve</button>
        <div className={styles.prog}><div className={styles.progFill} style={{ width: `${prog * 100}%` }} /></div>
      </div>
      <div className={styles.solveMsg}>{solved ? "✔ Solver found a solution. All constraints satisfied." : t < 2 ? "Ready to solve…" : "Solving…"}</div>
    </div>
  );
}
