// src/pages/Services/Chapter4Analysis/Chapter4AnalysisPage.jsx
//
// Dedicated page for /services/chapter-4-analysis.
// Design system: "Annotated Manuscript" — paper ground, ink type,
// highlighter-amber annotations. See Chapter4AnalysisPage.module.css.

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Users,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Clock,
  FileCheck2,
} from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import SEO from "../../../components/SEO/SEO";
import { fadeUp, staggerContainer, VIEW_ONCE } from "../../../utils/animations";
import styles from "./Chapter4AnalysisPage.module.css";

/* =========================================================================
   REVEAL WRAPPER
   ========================================================================= */
const Reveal = ({ children, className, as: Tag = "div" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.15 });
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {children}
    </MotionTag>
  );
};

/* =========================================================================
   MARGIN NOTE — signature annotation, used beside prose blocks
   ========================================================================= */
const MarginNote = ({ label = "Margin note", children }) => (
  <motion.aside variants={fadeUp} className={styles.marginNote}>
    <span className={styles.marginNoteLabel}>{label}</span>
    {children}
  </motion.aside>
);

/* =========================================================================
   REGRESSION SCATTER BREAK
   ========================================================================= */
const RegressionBreak = () => (
  <svg viewBox="0 0 400 200" className={styles.breakSvg}>
    <line x1="20" y1="170" x2="380" y2="170" stroke="#d99a2b" strokeWidth="1" opacity="0.3" />
    <line x1="20" y1="170" x2="20" y2="20" stroke="#d99a2b" strokeWidth="1" opacity="0.3" />
    {[...Array(14)].map((_, i) => {
      const x = 40 + i * 24 + (i % 3) * 6;
      const y = 160 - i * 9 - (i % 4) * 8;
      return (
        <motion.circle
          key={i} cx={x} cy={y} r="4" fill="#d99a2b"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.85, scale: 1 }}
          viewport={VIEW_ONCE}
          transition={{ delay: i * 0.06, duration: 0.4, type: "spring" }}
        />
      );
    })}
    <motion.line
      x1="30" y1="165" x2="370" y2="30"
      stroke="#16212c" strokeWidth="3"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={VIEW_ONCE}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
    />
  </svg>
);

/* =========================================================================
   DEMO 1: SPSS-STYLE OUTPUT PANEL
   ========================================================================= */
const OutputPanelDemo = () => (
  <motion.div
    className={styles.outputPanel}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
  >
    <div className={styles.outputPanelBar}>
      <span className={styles.outputDot} style={{ background: "#ff5f57" }} />
      <span className={styles.outputDot} style={{ background: "#febc2e" }} />
      <span className={styles.outputDot} style={{ background: "#28c840" }} />
      <span className={styles.outputPanelTitle}>Output1 — ANOVA Results</span>
    </div>
    <div className={styles.outputPanelBody}>
      <div className={styles.outputHeading}>Test of Between-Subjects Effects</div>
      <table className={styles.outputTable}>
        <thead>
          <tr>
            <th>Source</th>
            <th>Sum of Sq.</th>
            <th>df</th>
            <th>F</th>
            <th>Sig.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intervention Group</td>
            <td>184.220</td>
            <td>2</td>
            <td>9.412</td>
            <td className={styles.sigCellPositive}>.000</td>
          </tr>
          <tr>
            <td>Age Category</td>
            <td>12.041</td>
            <td>3</td>
            <td>1.108</td>
            <td className={styles.sigCellNeutral}>.348</td>
          </tr>
          <tr>
            <td>Group × Age</td>
            <td>41.887</td>
            <td>6</td>
            <td>2.201</td>
            <td className={styles.sigCellPositive}>.043</td>
          </tr>
          <tr>
            <td>Error</td>
            <td>210.664</td>
            <td>108</td>
            <td>—</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.outputFootnote}>a. R Squared = .512 (Adjusted R Squared = .487)</div>
      <div className={styles.outputCaret}>
        <span className={styles.outputCaretDot} />
        Interpreting for Objective 2: intervention group shows a significant effect, p &lt; .05
      </div>
    </div>
  </motion.div>
);

/* =========================================================================
   DEMO 2: ANNOTATED CHAPTER 4 DOCUMENT
   ========================================================================= */
const ChapterAnatomyDemo = () => {
  const rows = [
    { label: "4.1", title: "Response Rate & Demographic Profile", note: "Sets the sample context before any test is reported." },
    { label: "4.2", title: "Descriptive Statistics", note: "Means, SDs, and frequencies for every study variable." },
    { label: "4.3", title: "Assumption Testing", note: "Normality, homogeneity, multicollinearity checks, shown, not assumed." },
    { label: "4.4", title: "Hypothesis 1 — Test & Result", note: "One clearly labelled subsection per hypothesis, no exceptions." },
    { label: "4.5", title: "Hypothesis 2 — Test & Result", note: "Same structure repeated, so a reader always knows where they are." },
    { label: "4.6", title: "Summary of Findings", note: "Ties every result back to the original objectives before Chapter 5." },
  ];
  return (
    <div className={styles.docMockWrap}>
      <div className={styles.docMockPage}>
        <div className={styles.docMockHeader}>CHAPTER FOUR: RESULTS AND FINDINGS</div>
        {rows.map((r, i) => (
          <motion.div
            key={r.label}
            className={styles.docMockRow}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEW_ONCE}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <span className={styles.docMockNum}>{r.label}</span>
            <div className={styles.docMockLines}>
              <div className={styles.docMockTitle}>{r.title}</div>
              <div className={styles.docMockBar} />
              <div className={styles.docMockBarShort} />
            </div>
            <div className={styles.docMockNote}>{r.note}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   DEMO 3: DECISION TREE FOR TEST SELECTION
   ========================================================================= */
const TestDecisionTree = () => (
  <svg viewBox="0 0 640 320" className={styles.treeSvg}>
    <motion.rect x="255" y="10" width="130" height="46" rx="8" className={styles.treeNodeRoot}
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VIEW_ONCE} transition={{ duration: 0.4 }} />
    <text x="320" y="38" textAnchor="middle" className={styles.treeLabelRoot}>What is your data?</text>

    <motion.line x1="320" y1="56" x2="140" y2="110" className={styles.treeLine}
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VIEW_ONCE} transition={{ duration: 0.5, delay: 0.2 }} />
    <motion.line x1="320" y1="56" x2="500" y2="110" className={styles.treeLine}
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VIEW_ONCE} transition={{ duration: 0.5, delay: 0.2 }} />

    <motion.rect x="60" y="110" width="160" height="42" rx="8" className={styles.treeNode}
      initial={{ opacity: 0, y: -6 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW_ONCE} transition={{ duration: 0.4, delay: 0.35 }} />
    <text x="140" y="136" textAnchor="middle" className={styles.treeLabel}>Categorical / Ranked</text>

    <motion.rect x="420" y="110" width="160" height="42" rx="8" className={styles.treeNode}
      initial={{ opacity: 0, y: -6 }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW_ONCE} transition={{ duration: 0.4, delay: 0.35 }} />
    <text x="500" y="136" textAnchor="middle" className={styles.treeLabel}>Continuous / Normal</text>

    <motion.line x1="140" y1="152" x2="90" y2="205" className={styles.treeLineFaint}
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VIEW_ONCE} transition={{ duration: 0.5, delay: 0.5 }} />
    <motion.line x1="140" y1="152" x2="200" y2="205" className={styles.treeLineFaint}
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VIEW_ONCE} transition={{ duration: 0.5, delay: 0.5 }} />
    <motion.line x1="500" y1="152" x2="440" y2="205" className={styles.treeLineFaint}
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VIEW_ONCE} transition={{ duration: 0.5, delay: 0.5 }} />
    <motion.line x1="500" y1="152" x2="560" y2="205" className={styles.treeLineFaint}
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VIEW_ONCE} transition={{ duration: 0.5, delay: 0.5 }} />

    {[
      { x: 15, label: "Chi-Square" },
      { x: 150, label: "Mann-Whitney / Kruskal-Wallis" },
      { x: 355, label: "t-Test / ANOVA" },
      { x: 500, label: "Regression / Correlation" },
    ].map((leaf, i) => (
      <g key={leaf.label}>
        <motion.rect x={leaf.x} y="205" width="150" height="46" rx="8" className={styles.treeLeaf}
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VIEW_ONCE}
          transition={{ duration: 0.4, delay: 0.65 + i * 0.08 }} />
        <text x={leaf.x + 75} y="233" textAnchor="middle" className={styles.treeLeafLabel}>{leaf.label}</text>
      </g>
    ))}
  </svg>
);

/* =========================================================================
   DEMO 4: CODED TRANSCRIPT PREVIEW (qualitative)
   ========================================================================= */
const TranscriptDemo = () => {
  const lines = [
    { speaker: "P4", text: "I think the biggest change was just... feeling like someone was actually checking in on me.", code: "Perceived Support" },
    { speaker: "P4", text: "Before that I would just skip appointments because what was the point.", code: "Disengagement" },
    { speaker: "P7", text: "Once the reminders started, I actually showed up. It sounds small but it wasn't.", code: "Behavioural Change" },
  ];
  return (
    <div className={styles.transcriptWrap}>
      <div className={styles.transcriptBar}>
        <span className={styles.outputDot} style={{ background: "#ff5f57" }} />
        <span className={styles.outputDot} style={{ background: "#febc2e" }} />
        <span className={styles.outputDot} style={{ background: "#28c840" }} />
        <span className={styles.outputPanelTitle}>Interview_07.docx — coded</span>
      </div>
      <div className={styles.transcriptBody}>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={styles.transcriptLine}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW_ONCE}
            transition={{ duration: 0.45, delay: i * 0.12 }}
          >
            <span className={styles.transcriptSpeaker}>{line.speaker}</span>
            <span className={styles.transcriptText}>{line.text}</span>
            <span className={styles.transcriptCode}>{line.code}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   DEMO 5: ANNOTATED MISTAKES REVIEW
   ========================================================================= */
const MistakesReviewDemo = () => {
  const items = [
    { top: "18%", left: "10%", text: "Hypothesis referenced here was never stated in Chapter 1" },
    { top: "44%", left: "58%", text: "Levene's test not reported before running ANOVA" },
    { top: "70%", left: "16%", text: "p = .06 described as \"significant\" in the narrative" },
  ];
  return (
    <div className={styles.reviewWrap}>
      <div className={styles.reviewPage}>
        <div className={styles.reviewLineTitle} />
        <div className={styles.reviewLine} />
        <div className={styles.reviewLine} />
        <div className={styles.reviewLineShort} />
        <div className={styles.reviewLine} />
        <div className={styles.reviewLine} />
        <div className={styles.reviewLineShort} />
        {items.map((item, i) => (
          <motion.div
            key={i}
            className={styles.reviewFlag}
            style={{ top: item.top, left: item.left }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEW_ONCE}
            transition={{ duration: 0.35, delay: i * 0.15, type: "spring" }}
          >
            <span className={styles.reviewFlagDot} />
            <span className={styles.reviewFlagText}>{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================================
   PAGE
   ========================================================================= */
const Chapter4AnalysisPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chapter 4 Analysis",
    description:
      "Data coding, statistical analysis, and results write-up for thesis and dissertation Chapter 4, Results and Findings.",
    provider: { "@type": "ProfessionalService", name: "Scape Data Solutions" },
    areaServed: ["US", "CA", "PK", "KE", "GB"],
  };

  const faqItems = [
    { q: "Do you write the whole chapter or just run the stats?", a: "Both. We can run analysis only and hand back annotated output, or provide the full written Chapter 4 draft with narrative interpretation woven in, depending on what stage you're at and what your supervisor expects to see." },
    { q: "Can you match my university's specific format?", a: "Yes. Send your department's guidelines, whether that's APA 7th, a custom faculty template, or a specific table numbering convention, and we build the chapter directly against it rather than a generic default." },
    { q: "What if my supervisor asks for changes?", a: "One revision round is included in every project. If a second round is needed after that, it's billed at a reduced rate rather than a fresh project fee." },
    { q: "Can you help me prepare for my defense?", a: "Yes. We run a walkthrough session covering every result in the chapter, in plain language, so you can answer panel questions about your own analysis without needing to look anything up." },
    { q: "Do you handle qualitative data as well as quantitative?", a: "Yes. Thematic analysis, content analysis, and NVivo-based coding for interview or open-response data are supported just as closely as statistical testing, including help defending your coding decisions." },
    { q: "What if my data has missing values or outliers?", a: "Data cleaning is part of the process. We document how missing data and outliers were treated, using an approach appropriate to your sample size and study design, so it can be reported transparently in the chapter itself." },
    { q: "How do you actually decide which statistical test to use?", a: "Test selection follows your research questions and hypotheses first, then the type and distribution of your data. We check assumptions such as normality and homogeneity of variance before committing to a parametric test, and explain the reasoning in plain terms so it isn't a black box to you." },
    { q: "Will I actually understand my own results afterward?", a: "That's the explicit goal, not a side benefit. Every result comes with a plain language explanation, and the defense walkthrough exists specifically so the chapter reads and defends as work you understand deeply." },
    { q: "Which software do you work in?", a: "SPSS, STATA, R, Excel, AMOS, and SmartPLS for quantitative work, and NVivo for qualitative coding. If your department mandates a specific tool or syntax style, tell us up front and we'll work inside it." },
    { q: "How fast can you realistically turn a chapter around?", a: "Standard projects run five to seven days from a complete dataset. If your submission window is tighter, Express (48–72 hours) and Rush (24 hours, pre-coded data) tiers exist for exactly that situation." },
  ];

  const relatedArticles = [
    { title: "How to Structure a Chapter 4", slug: "how-to-structure-chapter-4" },
    { title: "Common SPSS Mistakes", slug: "common-spss-mistakes" },
    { title: "Aligning Objectives, Hypotheses & Results", slug: "aligning-objectives-hypotheses-results" },
    { title: "How to Interpret Regression Results", slug: "interpreting-regression-results" },
    { title: "Choosing the Right Statistical Test", slug: "choosing-the-right-statistical-test" },
    { title: "Reporting Effect Sizes Correctly", slug: "reporting-effect-sizes" },
  ];

  const pricingTiers = [
    {
      tier: "Standard",
      turnaround: "5–7 days",
      desc: "For a complete, cleaned dataset and a normal submission runway. Full analysis, full chapter draft, one revision round.",
      featured: false,
    },
    {
      tier: "Express",
      turnaround: "48–72 hours",
      desc: "For an approaching deadline. Same depth of analysis and write-up, prioritized ahead of standard-queue projects.",
      featured: true,
    },
    {
      tier: "Rush",
      turnaround: "24 hours",
      desc: "For a defense in days, not weeks, with data that's already coded and clean. Fastest turnaround we offer.",
      featured: false,
    },
  ];

  // NOTE: sample copy only — swap in verified client quotes (with permission)
  // before this section goes live.
  const testimonials = [
    {
      quote: "The margin notes on my draft caught a mismatched hypothesis I'd missed through three supervisor reviews.",
      name: "PhD Candidate",
      program: "Public Health · Mixed Methods",
    },
    {
      quote: "I could actually answer my panel's questions about the ANOVA myself. That was the whole point of the walkthrough.",
      name: "Master's Student",
      program: "Business Administration · Quantitative",
    },
    {
      quote: "Turnaround on the Express tier meant I didn't have to ask my committee for another extension.",
      name: "Doctoral Researcher",
      program: "Education · Qualitative",
    },
  ];

  const statsBandItems = [
    { value: "300+", label: "Theses & dissertations supported" },
    { value: "7", label: "Analysis platforms: SPSS, STATA, R, Excel, AMOS, SmartPLS, NVivo" },
    { value: "24hr", label: "Fastest rush turnaround available" },
    { value: "1 free", label: "Revision round on every project" },
  ];

  return (
    <>
      <SEO
        title="Chapter 4 Analysis Help | Thesis & Dissertation Results Writing | Scape Data Solutions"
        description="Stuck on your dissertation Chapter 4? Get expert statistical analysis, SPSS/STATA/R data coding, and a defensible Results & Findings chapter, formatted to your university's requirements."
        path="/services/chapter-4-analysis"
        schema={schema}
      />
      <Navbar />

      <main className={styles.page}>
        {/* ══════════════════════ HERO ══════════════════════ */}
        <section className={styles.heroSection}>
          <div className={styles.heroGradient} />
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroContent}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span className={styles.heroBadge} variants={fadeUp}>
                <Sparkles size={13} /> Thesis & Dissertation Chapter 4 Specialists
              </motion.span>
              <motion.h1 className={styles.heroTitle} variants={fadeUp}>
                <span className={styles.highlight}>Chapter 4</span> Analysis, Done Properly
              </motion.h1>
              <motion.p className={styles.heroSub} variants={fadeUp}>
                From raw dataset to a Results and Findings chapter you can defend line by line —
                statistical analysis, data coding, and academic writing built around your actual
                objectives and hypotheses, not a generic template.
              </motion.p>
              <motion.p className={styles.heroQuote} variants={fadeUp}>
                <MessageCircle size={14} /> "I'm stuck writing Chapter 4."
              </motion.p>
              <motion.div className={styles.heroStats} variants={fadeUp}>
                <div className={styles.statBlock}>
                  <span className={styles.statValue}>300+</span>
                  <span className={styles.statLabel}>Theses supported</span>
                </div>
                <div className={styles.statBlock}>
                  <span className={styles.statValue}>APA/MLA</span>
                  <span className={styles.statLabel}>Formatting included</span>
                </div>
                <div className={styles.statBlock}>
                  <span className={styles.statValue}>1 free</span>
                  <span className={styles.statLabel}>Revision round</span>
                </div>
              </motion.div>
              <motion.div className={styles.heroActions} variants={fadeUp}>
                <Link to="/contact" className={styles.ctaButton}>
                  Get Started <ArrowRight size={16} />
                </Link>
                <a href="#how-it-works" className={styles.ctaGhost}>
                  See how it works
                </a>
              </motion.div>
            </motion.div>

            <OutputPanelDemo />
          </div>
        </section>

        {/* ══════════════════════ TRUST BAR ══════════════════════ */}
        <section className={styles.trustBar}>
          <div className={styles.shell}>
            <div className={styles.trustRow}>
              <span className={styles.trustLabel}>Chapter 4 support across every field</span>
              <div className={styles.trustItems}>
                {["Public Health", "Business", "Education", "Nursing", "Psychology", "Engineering"].map((f) => (
                  <span key={f} className={styles.trustItem}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════ WHO IT'S FOR ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>Who this is for</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Built for every stage of graduate research
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionLead}>
              Whether this is your first dataset or your third dissertation chapter, the same
              underlying discipline applies: the right test, checked assumptions, and results
              that answer the question you actually asked.
            </motion.p>
            <div className={styles.audienceGrid}>
              {["Undergraduate Students", "Masters Students", "PhD Candidates"].map((a) => (
                <motion.div key={a} variants={fadeUp} className={styles.audienceChip}>
                  <Users size={15} /> {a}
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ══════════════════════ THE PROBLEM, LONG FORM ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>The problem</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Why <span className={styles.marked}>Chapter 4</span> is where most students stall
            </motion.h2>
            <div className={styles.withMargin}>
              <div>
                <motion.p variants={fadeUp} className={styles.essayText}>
                  By the time you reach Chapter 4, the hard part is supposedly behind you. The
                  literature review is written, the methodology is approved, and the data has
                  been collected. Then you open your dataset, or your export from SPSS, STATA, or
                  NVivo, and realise that "analyse the results" is not actually one task. It is a
                  sequence of smaller, more technical decisions, each of which has to be right
                  before the next one makes sense: which variables need to be cleaned, which test
                  each hypothesis actually calls for, whether your data even meets that test's
                  assumptions, and how to translate a printout full of F-values and p-values into
                  sentences a non-statistician on your committee will accept as a real finding.
                </motion.p>
                <motion.p variants={fadeUp} className={styles.essayText}>
                  Most of the guidance available online treats Chapter 4 as a formatting problem:
                  use this heading style, use this table template. In practice, the formatting is
                  the easy ten percent. The part that actually gets a chapter sent back for
                  revision is almost always something upstream of formatting — <strong>a
                  hypothesis in Chapter 4 that does not match the wording used in Chapter 1</strong>,
                  a parametric test run on data that quietly failed its normality assumption, or a
                  results section that reports numbers without ever explaining what they mean for
                  the research question that was originally asked.
                </motion.p>
                <motion.p variants={fadeUp} className={styles.essayText}>
                  We handle the full chain rather than one link of it: the data cleaning, the test
                  selection and assumption checking, the actual analysis, the tables and figures,
                  and the narrative interpretation that connects every result back to a specific
                  objective or hypothesis. The chapter that comes back to you is not a stack of
                  disconnected statistical output. It is an argument, built the way your committee
                  expects to read one.
                </motion.p>
              </div>
              <MarginNote label="Reviewer's note">
                Ninety percent of the revision requests we see trace back to one of three things:
                drifted hypotheses, unchecked assumptions, or unexplained numbers. We check for
                all three before a chapter ever reaches you.
              </MarginNote>
            </div>
          </div>
        </Reveal>

        {/* ══════════════════════ ANIMATED BREAK ══════════════════════ */}
        <section className={styles.breakSection}>
          <RegressionBreak />
        </section>

        {/* ══════════════════════ ANATOMY OF A CHAPTER 4 ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>Structure</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              The anatomy of a defensible Chapter 4
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionLead}>
              A strong Results chapter is not a data dump, it is a small number of sections, each
              doing one specific job, in a consistent order that lets an examiner find exactly
              what they're looking for. Here is the structure we build every chapter around,
              mapped onto a real page layout so you can see how the pieces sit next to each other.
            </motion.p>
            <ChapterAnatomyDemo />
          </div>
        </Reveal>

        {/* ══════════════════════ WORKED EXAMPLE ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>Worked example</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              What a single result actually looks like when we're done
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.essayText}>
              It helps to see one result carried all the way through, rather than described in
              the abstract. Say Objective 2 of your study is to determine whether an intervention
              programme affects patient engagement, and Hypothesis 2 states that engagement
              scores differ significantly across intervention groups. The panel below is close to
              what the raw statistical output looks like once the test has actually been run,
              before it gets translated into chapter prose.
            </motion.p>
            <motion.div variants={fadeUp}>
              <OutputPanelDemo />
            </motion.div>
            <motion.p variants={fadeUp} className={styles.essayText}>
              On its own, that table proves nothing to a reader who isn't already fluent in ANOVA
              output. The version that goes into your actual Chapter 4 reads closer to this: "A
              one-way ANOVA revealed a statistically significant effect of intervention group on
              engagement scores, F(2, 108) = 9.41, p &lt; .001, indicating that the type of
              intervention received was associated with meaningfully different levels of patient
              engagement. This supports Hypothesis 2." Same result, but now it answers the actual
              research question instead of just reporting a number.
            </motion.p>
          </div>
        </Reveal>

        {/* ══════════════════════ STATS BAND ══════════════════════ */}
        <section className={styles.statsBand}>
          <div className={styles.shell}>
            <div className={styles.statsGrid}>
              {statsBandItems.map((s) => (
                <motion.div
                  key={s.label}
                  className={styles.statsCell}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW_ONCE}
                  transition={{ duration: 0.5 }}
                >
                  <span className={styles.statsCellValue}>{s.value}</span>
                  <span className={styles.statsCellLabel}>{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════ TEST SELECTION, LONG FORM + TREE ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>Method</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              How we decide which statistical test to run
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.essayText}>
              Test selection is not a matter of preference or what a template says to use by
              default. It follows directly from three things: what your hypothesis is actually
              claiming, what type of data you collected to test it, and whether that data
              satisfies the assumptions the test requires. Skip the third step and you can end up
              with a p-value that looks clean and means very little, which is exactly the kind of
              thing an experienced examiner catches immediately.
            </motion.p>
            <motion.p variants={fadeUp} className={styles.essayText}>
              In practice this covers independent and paired t-tests for comparing two groups or
              two time points, one-way and factorial ANOVA or ANCOVA for three or more groups,
              simple and multiple regression for modelling relationships between predictors and
              an outcome, logistic regression when the outcome itself is categorical, chi-square
              tests for relationships between categorical variables, Pearson, Spearman, or
              Kendall correlation depending on your data's scale and distribution, and
              non-parametric alternatives such as Mann-Whitney U, Kruskal-Wallis, or Wilcoxon when
              normality assumptions genuinely do not hold. For studies built around latent
              constructs, exploratory and confirmatory factor analysis, and structural equation
              modelling in AMOS or SmartPLS, are used to test more complex, multi-variable
              relationships rather than a single hypothesis at a time.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.treeWrap}>
              <TestDecisionTree />
            </motion.div>
          </div>
        </Reveal>

        {/* ══════════════════════ OFFERINGS ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>What's included</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Everything between your dataset and a finished chapter
            </motion.h2>
            <div className={styles.offeringsGrid}>
              {[
                "Data coding and cleaning",
                "Descriptive statistics tables and charts",
                "Hypothesis testing aligned to research objectives",
                "APA/MLA formatted results narrative",
                "Alignment check against Chapter 1 & 3",
                "Revision support before your defense",
              ].map((o) => (
                <motion.div key={o} variants={fadeUp} className={styles.offeringRow}>
                  <CheckCircle size={18} className={styles.offeringIcon} />
                  <span>{o}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeUp} className={styles.toolsRow}>
              <span className={styles.toolsLabel}>Tools we use:</span>
              {["SPSS", "STATA", "Excel", "R", "AMOS", "SmartPLS", "NVivo"].map((t) => (
                <span key={t} className={styles.toolTag}>{t}</span>
              ))}
            </motion.div>
          </div>
        </Reveal>

        {/* ══════════════════════ QUALITATIVE, LONG FORM + TRANSCRIPT DEMO ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>Qualitative research</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              When Chapter 4 is a qualitative chapter
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.essayText}>
              Not every Results chapter is built around p-values. If your study relies on
              interviews, open-ended survey responses, or document analysis, the equivalent rigour
              is a clear, defensible coding process. That means starting with either an inductive
              or deductive coding framework, applying it consistently across every transcript, and
              being able to explain, to a panel, exactly why a given quote was assigned to a given
              theme rather than a neighbouring one.
            </motion.p>
            <motion.p variants={fadeUp} className={styles.essayText}>
              We support this through thematic analysis, content analysis, and structured coding
              inside NVivo, with a clean audit trail from raw transcript to final theme. Below is
              a small slice of what that coding process actually looks like against real
              transcript text, the kind of view your supervisor or a qualitative methods examiner
              will expect to see evidence of, even if it doesn't make it into the final chapter
              verbatim.
            </motion.p>
            <motion.div variants={fadeUp}>
              <TranscriptDemo />
            </motion.div>
            <motion.p variants={fadeUp} className={styles.essayText}>
              The chapter text that follows from this does not just present themes in isolation.
              Each theme is introduced, supported with two or three well-chosen participant quotes
              rather than a wall of excerpts, and tied explicitly back to the research question it
              addresses, the same objective-by-objective logic that runs through the quantitative
              side of our work.
            </motion.p>
          </div>
        </Reveal>

        {/* ══════════════════════ COMMON MISTAKES + ANNOTATED DEMO ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>Common mistakes</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Where Chapter 4 drafts usually go wrong
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.essayText}>
              These are the issues that show up most often in drafts we're brought in to review,
              in roughly the order a careful reviewer would find them. None of them are exotic.
              All of them are the kind of thing that gets a chapter sent back for revision before
              the underlying research even gets a fair hearing.
            </motion.p>
            <MistakesReviewDemo />
            <motion.div variants={fadeUp} className={styles.mistakesList}>
              <p><strong>Hypotheses that drift.</strong> The wording tested in Chapter 4 doesn't quite match what was stated in Chapter 1, which reads as sloppy even when the underlying analysis is sound.</p>
              <p><strong>Untested assumptions.</strong> A parametric test run without checking normality or homogeneity of variance first, which quietly undermines every result built on top of it.</p>
              <p><strong>Missing effect sizes.</strong> Significance reported on its own, without an effect size or confidence interval, which most committees and journals now expect as standard.</p>
              <p><strong>Inconsistent tables.</strong> Formatting that shifts from one table to the next instead of following APA, or the department's guide, consistently throughout.</p>
              <p><strong>Numbers without meaning.</strong> Raw statistical output pasted into the chapter without a sentence explaining what it actually tells the reader about the research question.</p>
            </motion.div>
          </div>
        </Reveal>

        {/* ══════════════════════ WORKFLOW, TIMELINE STYLE ══════════════════════ */}
        <Reveal className={styles.section} id="how-it-works">
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>Process</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              How it works
            </motion.h2>
            <div className={styles.timeline}>
              {[
                { title: "Send Chapters 1 to 3 & Data", description: "We review your objectives, hypotheses, and questionnaire alongside your raw dataset before touching a single test." },
                { title: "Data Cleaning & Coding", description: "Missing values, outliers, and variable coding are handled and documented, so the decisions are transparent, not hidden." },
                { title: "Test Selection", description: "Every objective or hypothesis is matched to the correct method, quantitative or qualitative, with assumptions checked first." },
                { title: "Analysis & Interpretation", description: "Each test is run, checked, and translated into plain-language interpretation, not just pasted output." },
                { title: "Chapter 4 Draft", description: "A full draft arrives with tables, figures, and narrative built in your required format, ready for your supervisor." },
                { title: "Revision & Defense Prep", description: "One free revision round, plus a walkthrough so you can defend every single result confidently and in your own words." },
              ].map((step, i) => (
                <motion.div key={step.title} variants={fadeUp} className={styles.timelineStep}>
                  <div className={styles.timelineMarker}>
                    <span className={styles.timelineNumber}>{String(i + 1).padStart(2, "0")}</span>
                    {i < 5 && <span className={styles.timelineConnector} />}
                  </div>
                  <div className={styles.timelineContent}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ══════════════════════ TURNAROUND / PRICING CARDS ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>Turnaround</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Choose your turnaround
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.sectionLead}>
              Every tier gets the same depth of analysis and the same free revision round. The
              only thing that changes is how quickly it lands in your inbox.
            </motion.p>
            <div className={styles.pricingGrid}>
              {pricingTiers.map((p) => (
                <motion.div
                  key={p.tier}
                  variants={fadeUp}
                  className={`${styles.pricingCard} ${p.featured ? styles.pricingCardFeatured : ""}`}
                >
                  {p.featured && <span className={styles.pricingBadge}>Most requested</span>}
                  <span className={styles.pricingTier}>{p.tier}</span>
                  <span className={styles.pricingTurnaround}>
                    <Clock size={13} style={{ verticalAlign: "-2px", marginRight: 6 }} />
                    {p.turnaround}
                  </span>
                  <p className={styles.pricingDesc}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ══════════════════════ TESTIMONIALS ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>What students say</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              From students who've defended their own numbers
            </motion.h2>
            <div className={styles.testimonialGrid}>
              {testimonials.map((t) => (
                <motion.div key={t.name + t.program} variants={fadeUp} className={styles.testimonialCard}>
                  <p className={styles.testimonialQuote}>{t.quote}</p>
                  <div className={styles.testimonialMeta}>
                    <span className={styles.testimonialName}>{t.name}</span>
                    <span className={styles.testimonialProgram}>{t.program}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ══════════════════════ WHY US, PROSE + CHECKLIST ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>Why work with us</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              A chapter you could defend without opening a laptop
            </motion.h2>
            <motion.p variants={fadeUp} className={styles.essayText}>
              None of this is meant to sound like a checklist you've seen on ten other services'
              pages. The distinction we actually hold ourselves to is simple: a chapter is only
              done when you could stand in front of a panel and explain any single result in it,
              in your own words.
            </motion.p>
            <div className={styles.whyList}>
              {[
                "Results are matched objective by objective and hypothesis by hypothesis, never loosely",
                "Formatted to your university's specific style guide, not a generic template",
                "Statistical assumptions are checked and reported, never quietly assumed",
                "Qualitative and quantitative studies are both fully, equally supported",
                "You leave able to defend every result live, not just submit it",
                "Fast turnaround available for genuinely tight submission deadlines",
              ].map((w) => (
                <motion.div key={w} variants={fadeUp} className={styles.whyRow}>
                  <ShieldCheck size={18} className={styles.offeringIcon} />
                  <span>{w}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ══════════════════════ FAQ ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>FAQ</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Frequently asked questions
            </motion.h2>
            <div className={styles.faqList}>
              {faqItems.map((f) => (
                <motion.details key={f.q} variants={fadeUp} className={styles.faqItem}>
                  <summary>
                    {f.q} <ChevronDown size={16} className={styles.faqChevron} />
                  </summary>
                  <p>{f.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ══════════════════════ RELATED ARTICLES ══════════════════════ */}
        <Reveal className={styles.section}>
          <div className={styles.sectionInner}>
            <motion.span variants={fadeUp} className={styles.eyebrow}>Read more</motion.span>
            <motion.h2 variants={fadeUp} className={styles.sectionTitle}>
              Related articles
            </motion.h2>
            <div className={styles.articlesList}>
              {relatedArticles.map((a) => (
                <motion.div key={a.slug} variants={fadeUp}>
                  <Link to={`/resources/${a.slug}`} className={styles.articleLink}>
                    {a.title} <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ══════════════════════ FINAL CTA ══════════════════════ */}
        <section className={styles.finalCta}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEW_ONCE}
            variants={staggerContainer}
            className={styles.finalCtaInner}
          >
            <motion.span variants={fadeUp} className={styles.finalCtaEyebrow}>
              <FileCheck2 size={13} style={{ verticalAlign: "-2px", marginRight: 6 }} />
              Deadline approaching?
            </motion.span>
            <motion.h2 variants={fadeUp}>Let's get Chapter 4 moving.</motion.h2>
            <motion.p variants={fadeUp}>
              Send your Chapters 1 to 3 and your data. We'll tell you exactly what's needed and
              what it'll take to get a defensible draft in your hands.
            </motion.p>
            <motion.div variants={fadeUp} className={styles.finalCtaActions}>
              <Link to="/contact" className={styles.finalCtaButton}>
                Talk To Us <ArrowRight size={16} />
              </Link>
              <span className={styles.finalCtaNote}>Free initial review · 1 revision round included</span>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Chapter4AnalysisPage;