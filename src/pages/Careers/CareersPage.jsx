// src/pages/Career/CareerPage.jsx
import { useEffect, useState, useRef } from "react";
import SEO from "../../components/SEO/SEO";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronUp, ArrowLeft, ArrowRight, Upload, CheckCircle, Globe } from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./CareersPage.module.css";
import { fetchJobs, fetchJobDetail, submitJobApplication } from "../../services/api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let _csc = null;
const loadCountryStateCity = () => {
  if (!_csc) _csc = import("country-state-city");
  return _csc;
};
import {
  WORK_AUTH_CHOICES,
  NOTICE_PERIOD_CHOICES,
  REMOTE_PREFERENCE_CHOICES,
  GENDER_CHOICES,
  VETERAN_STATUS_CHOICES,
  DISABILITY_STATUS_CHOICES,
  DEPARTMENT_CHOICES,
  JOB_TYPE_CHOICES,
  LOCATION_TYPE_CHOICES,
} from "../../data/jobConstants";

// ─── Animation variants (used inside sections, not for scroll triggers) ─
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

// ─── Benefits data ──────────────────────────────────────────────
const BENEFITS = [
  { icon: "", title: "Competitive compensation", desc: "Competitive cash and equity-based compensation packages to attract top talent." },
  { icon: "", title: "Health and wellness", desc: "Comprehensive health insurance including medical, dental, vision, and disability coverage." },
  { icon: "", title: "Life and family", desc: "Life and AD&D insurance and fertility benefits to ensure our team's well-being." },
  { icon: "", title: "Flexible vacation", desc: "We work hard but avoid burnout. Take time off when you need it." },
  { icon: "", title: "Visa sponsorship", desc: "We support international talent with visa sponsorship to join our team." },
  { icon: "", title: "401(k) plan", desc: "Retirement savings plan to secure your financial future." },
];

const PROCESS_STEPS = [
  { number: 1, title: "Submit your application", desc: "Our team will review your CV and statement of exceptional work." },
  { number: 2, title: "Screening interview", desc: "A short interview to learn more about you and assess if the role fits." },
  { number: 3, title: "Technical interviews", desc: "Sessions where we dive deep into your technical expertise." },
  { number: 4, title: "Offer extended", desc: "If you've demonstrated exceptional skills, we'll extend an offer to join us." },
];

const initialFilters = { department: "", job_type: "", location_type: "" };

// ─── LazySection ─────────────────────────────────────────────────
// Renders children ONLY when the section first enters the viewport.
// After that, children stay in the DOM (so they can be re‑animated later).
function LazySection({ children, className, ...props }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <div ref={ref} className={className} {...props}>
      {isInView ? children : null}
    </div>
  );
}

// ─── IntersectionObserver hook for re‑animation on every scroll ─
// Exactly the same pattern as ServicesPage's `animateOnScroll`
function useRevealOnScroll(className = styles.visible) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(className);
          } else {
            el.classList.remove(className); // removes so animation replays on next entry
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [className]);
  return ref;
}

// ─── Hero ──────────────────────────────────────────────────────
function Hero() {
  const ref = useRevealOnScroll(); // re-animate on every scroll
  return (
    <section ref={ref} className={`${styles.hero} ${styles.animateOnScroll}`}>
      <div className={styles.heroGrid} />
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Join our team of data experts
          </h1>
          <p className={styles.heroSub}>
            We are researchers, engineers, and builders on a mission to understand the world through data.
            Join us if you want to shape the future of analytics and AI.
          </p>
          <div className={styles.heroActions}>
            <a href="#open-roles" className={styles.btnPrimary}>
              View Open Roles <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Benefits ──────────────────────────────────────────────────
function Benefits() {
  const ref = useRevealOnScroll();
  return (
    <section ref={ref} className={`${styles.benefitsSection} ${styles.animateOnScroll}`}>
      <div className={styles.container}>
        <div className={styles.benefitsHead}>
          <p className={styles.sectionLabel}>Why Scape Data Solutions</p>
          <h2 className={styles.sectionTitle}>Ambitious goals, fast execution</h2>
          <p className={styles.sectionSub}>
            We are driven by curiosity, commitment, and a strong sense of urgency.
            Join us if you want to work on frontier analytics and ship products that matter.
          </p>
        </div>
        <motion.div
          className={styles.benefitsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={stagger}
        >
          {BENEFITS.map((b, i) => (
            <motion.div key={i} className={styles.benefitCard} variants={fadeUp}>
              <div className={styles.benefitIcon}>{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Offices ──────────────────────────────────────────────────
function Offices() {
  const ref = useRevealOnScroll();
  return (
    <section ref={ref} className={`${styles.officesSection} ${styles.animateOnScroll}`}>
      <div className={styles.container}>
        <div className={styles.officesGrid}>
          <div className={styles.officesLeft}>
            <p className={styles.sectionLabel}>Offices</p>
            <h2 className={styles.sectionTitle}>Collaboration across borders</h2>
            <p className={styles.sectionSub}>
              We are hiring across all our offices. We prioritize in‑person work
              to support fast‑paced, collaborative projects.
            </p>
          </div>
          <div className={styles.officesRight}>
            <div className={styles.globeWrap}>
              <Globe size={120} className={styles.globeIcon} />
              <div className={styles.globeDots}>
                <span className={styles.globeDot} style={{ top: "20%", left: "30%" }} />
                <span className={styles.globeDot} style={{ top: "40%", left: "70%" }} />
                <span className={styles.globeDot} style={{ top: "70%", left: "20%" }} />
                <span className={styles.globeDot} style={{ top: "80%", left: "60%" }} />
                <span className={styles.globeDot} style={{ top: "30%", left: "85%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Job List ──────────────────────────────────────────────────
function JobList({ onSelect }) {
  const [Country, setCountry] = useState(null);
  const [City, setCity] = useState(null);
  useEffect(() => {
    loadCountryStateCity().then((mod) => {
      setCountry(() => mod.Country);
      setCity(() => mod.City);
    });
  }, []);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState(initialFilters);

  const ref = useRevealOnScroll();

  useEffect(() => {
    setLoading(true);
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([, v]) => v !== "")
    );
    fetchJobs(activeFilters)
      .then(setJobs)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [filters]);

  const updateFilter = (key, value) => setFilters((f) => ({ ...f, [key]: value }));
  const clearFilters = () => setFilters(initialFilters);
  const hasActiveFilters = Object.values(filters).some((v) => v !== "");

  return (
    <section
      ref={ref}
      className={`${styles.featuredSection} ${styles.animateOnScroll}`}
      id="open-roles"
    >
      <div className={styles.container}>
        <div className={styles.featuredGrid}>
          <div className={styles.featuredLeft}>
            <p className={styles.sectionLabel}>Join us</p>
            <h2 className={styles.sectionTitle}>Featured roles</h2>
          </div>
          <div className={styles.featuredRight}>
            {/* Filter Bar */}
            <div className={styles.filterBar}>
              <select
                className={styles.filterSelect}
                value={filters.department}
                onChange={(e) => updateFilter("department", e.target.value)}
              >
                <option value="">All departments</option>
                {DEPARTMENT_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
              <select
                className={styles.filterSelect}
                value={filters.job_type}
                onChange={(e) => updateFilter("job_type", e.target.value)}
              >
                <option value="">All job types</option>
                {JOB_TYPE_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
              <select
                className={styles.filterSelect}
                value={filters.location_type}
                onChange={(e) => updateFilter("location_type", e.target.value)}
              >
                <option value="">All locations</option>
                {LOCATION_TYPE_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
              {hasActiveFilters && (
                <button type="button" className={styles.clearFiltersBtn} onClick={clearFilters}>
                  Clear
                </button>
              )}
            </div>

            {/* Loading / Error / Empty */}
            {loading && <p className={styles.stateText}>Loading open roles...</p>}
            {error && <p className={styles.stateText}>{error}</p>}
            {!loading && !error && jobs.length === 0 && (
              <div className={styles.noOpenings}>
                <p className={styles.noOpeningsTitle}>No open positions right now</p>
                <p className={styles.noOpeningsText}>
                  {hasActiveFilters
                    ? "No roles match your current filters. Try clearing them."
                    : "We're always interested in talented people. Reach out and we'll keep you in mind."}
                </p>
                {hasActiveFilters ? (
                  <button className={styles.btnSecondary} onClick={clearFilters}>Clear filters</button>
                ) : (
                  <Link to="/contact" className={styles.btnSecondary}>Get in touch</Link>
                )}
              </div>
            )}

            {/* Job Rows – re‑animate on every scroll */}
            <motion.div
              className={styles.jobList}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={stagger}
            >
              {jobs.map((job, i) => (
                <motion.div
                  key={job.slug}
                  className={styles.jobRow}
                  onClick={() => onSelect(job.slug)}
                  variants={fadeUp}
                >
                  <div className={styles.jobInfo}>
                    <span className={styles.jobTitle}>{job.title}</span>
                    <div className={styles.jobTags}>
                      {job.location && <span className={styles.jobTag}>{job.location}</span>}
                      <span className={styles.jobTag}>{job.department_display}</span>
                      <span className={styles.jobTag}>{job.job_type_display}</span>
                    </div>
                  </div>
                  <ArrowRight className={styles.jobArrow} />
                </motion.div>
              ))}
            </motion.div>

            <div className={styles.viewAllWrap}>
              <a href="#open-roles" className={styles.viewAllBtn}>
                View all open roles <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Job Detail ────────────────────────────────────────────────
function JobDetail({ slug, onBack }) {
  const [job, setJob] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("summary");
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    fetchJobDetail(slug).then(setJob).catch((e) => setError(e.message));
  }, [slug]);

  if (error) {
    return (
      <div className={styles.container}>
        <button onClick={onBack} className={styles.backLink}><ArrowLeft size={16} /> Back to roles</button>
        <p className={styles.stateText}>{error}</p>
      </div>
    );
  }

  if (!job) return <div className={styles.container}><p className={styles.stateText}>Loading...</p></div>;

  const tabs = [{ key: "summary", label: "Summary" }];
  if (job.responsibilities?.length > 0) tabs.push({ key: "responsibilities", label: "Duties" });
  if (job.requirements?.length > 0) tabs.push({ key: "requirements", label: "Requirements" });
  if (job.nice_to_have?.length > 0) tabs.push({ key: "nice_to_have", label: "Nice to Have" });
  tabs.push({ key: "apply", label: "How to Apply" });

  const goToApply = () => {
    setActiveTab("apply");
    setApplying(true);
  };

  return (
    <section className={styles.detailSection}>
      <div className={styles.container}>
        <button onClick={onBack} className={styles.backLink}><ArrowLeft size={16} /> Back to roles</button>

        <div className={styles.detailHeader}>
          <div>
            <h1 className={styles.detailTitle}>{job.title}</h1>
            <div className={styles.detailMeta}>
              <span>{job.department_display}</span>
              <span>·</span>
              <span>{job.job_type_display}</span>
              <span>·</span>
              <span>{job.location_type_display}</span>
              {job.location && <><span>·</span><span>{job.location}</span></>}
            </div>
            {job.salary_range && <p className={styles.detailSalary}>{job.salary_range}</p>}
          </div>
          <button className={styles.btnPrimary} onClick={goToApply}>Apply for this role</button>
        </div>

        <div className={styles.tabNav}>
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`${styles.tabButton} ${activeTab === t.key ? styles.tabButtonActive : ""}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.tabPanel}>
          {activeTab === "summary" && <p className={styles.description}>{job.description}</p>}
          {activeTab === "responsibilities" && (
            <ul className={styles.bulletList}>
              {job.responsibilities.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          )}
          {activeTab === "requirements" && (
            <ul className={styles.bulletList}>
              {job.requirements.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          )}
          {activeTab === "nice_to_have" && (
            <ul className={styles.bulletList}>
              {job.nice_to_have.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          )}
          {activeTab === "apply" && (
            <div>
              <p className={styles.applyIntro}>
                Applying takes a few minutes. Have your resume ready as a PDF or DOCX file before you start.
              </p>
              {!applying ? (
                <button className={styles.btnPrimary} onClick={() => setApplying(true)}>Start Application</button>
              ) : (
                <ApplicationForm slug={slug} onCancel={() => setApplying(false)} />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Application Form ───────────────────────────────────────────
const initialForm = {
  full_name: "", email: "", phone: "", date_of_birth: "",
  city: "", country: "", postal_code: "",
  linkedin_url: "", github_url: "", stackoverflow_url: "", portfolio_url: "",
  current_company: "", years_of_experience: "",
  work_authorization: "", visa_sponsorship_required: false,
  expected_salary: "", notice_period: "", earliest_start_date: "",
  remote_preference: "", open_to_relocation: false,
  cover_letter: "", how_heard: "", consent_given: false,
  gender: "", self_described_gender: "", veteran_status: "", disability_status: "", ethnicity: "",
};

function ApplicationForm({ slug, onCancel }) {
  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState(null);
  const [showEeo, setShowEeo] = useState(false);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const change = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});

    if (!resume) {
      setFieldErrors({ resume: "Please attach your resume (PDF or DOCX, max 5MB)." });
      return;
    }
    if (!form.consent_given) {
      setFieldErrors({ consent_given: "You must accept the privacy policy to apply." });
      return;
    }

    const fd = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value === "" || value === null || value === undefined) return;
      fd.append(key, typeof value === "boolean" ? String(value) : value);
    });
    fd.append("resume", resume);

    setStatus("submitting");
    try {
      await submitJobApplication(slug, fd);
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      if (err.fieldErrors) {
        const flat = {};
        Object.entries(err.fieldErrors).forEach(([k, v]) => {
          flat[k] = Array.isArray(v) ? v[0] : v;
        });
        setFieldErrors(flat);
      }
      setError(err.message || "Something went wrong submitting your application.");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successBox}>
        <CheckCircle size={40} color="#00c853" />
        <h3>Application received. Thank you!</h3>
        <p>We'll be in touch if there's a match.</p>
      </div>
    );
  }

  return (
    <form className={styles.applyForm} onSubmit={handleSubmit}>
      <button type="button" className={styles.backLink} onClick={onCancel}>
        <ArrowLeft size={16} /> Cancel
      </button>

      {error && <div className={styles.formError}>{error}</div>}

      <h3>Your details</h3>
      <div className={styles.formRow}>
        <Field label="Full name *" error={fieldErrors.full_name}>
          <input required value={form.full_name} onChange={(e) => change("full_name", e.target.value)} />
        </Field>
        <Field label="Email *" error={fieldErrors.email}>
          <input type="email" required value={form.email} onChange={(e) => change("email", e.target.value)} />
        </Field>
      </div>
      <div className={styles.formRow}>
        <Field label="Phone" error={fieldErrors.phone}>
          <input value={form.phone} onChange={(e) => change("phone", e.target.value)} />
        </Field>
        <Field label="Date of birth" error={fieldErrors.date_of_birth}>
          <DatePicker
            selected={form.date_of_birth ? new Date(form.date_of_birth) : null}
            onChange={(date) => change("date_of_birth", date ? date.toISOString().slice(0, 10) : "")}
            dateFormat="MMM d, yyyy"
            placeholderText="Select date"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            maxDate={new Date()}
            className={styles.datePickerInput}
            wrapperClassName={styles.datePickerWrapper}
          />
        </Field>
      </div>
      <div className={styles.formRow}>
        <Field label="Country" error={fieldErrors.country}>
          <select
            value={form.country}
            onChange={(e) => {
              change("country", e.target.value);
              change("city", "");
            }}
          >
            <option value="">Select</option>
            {Country && Country.getAllCountries().map((c) => (
              <option key={c.isoCode} value={c.isoCode}>{c.name}</option>
            ))}
          </select>
        </Field>
        <Field label="City" error={fieldErrors.city}>
          <select
            value={form.city}
            onChange={(e) => change("city", e.target.value)}
          >
            <option value="">{form.country ? "Select" : "Select a country first"}</option>
            {form.country &&
              City && City.getCitiesOfCountry(form.country).map((city) => (
                <option key={city.name} value={city.name}>{city.name}</option>
              ))}
          </select>
        </Field>
      </div>
      <div className={styles.formRow}>
        <Field label="Postal code" error={fieldErrors.postal_code}>
          <input value={form.postal_code} onChange={(e) => change("postal_code", e.target.value)} />
        </Field>
      </div>

      <h3>Links</h3>
      <div className={styles.formRow}>
        <Field label="LinkedIn" error={fieldErrors.linkedin_url}>
          <input type="url" value={form.linkedin_url} onChange={(e) => change("linkedin_url", e.target.value)} />
        </Field>
        <Field label="GitHub" error={fieldErrors.github_url}>
          <input type="url" value={form.github_url} onChange={(e) => change("github_url", e.target.value)} />
        </Field>
      </div>
      <div className={styles.formRow}>
        <Field label="Stack Overflow" error={fieldErrors.stackoverflow_url}>
          <input type="url" value={form.stackoverflow_url} onChange={(e) => change("stackoverflow_url", e.target.value)} />
        </Field>
        <Field label="Portfolio" error={fieldErrors.portfolio_url}>
          <input type="url" value={form.portfolio_url} onChange={(e) => change("portfolio_url", e.target.value)} />
        </Field>
      </div>

      <h3>Professional</h3>
      <div className={styles.formRow}>
        <Field label="Current company" error={fieldErrors.current_company}>
          <input value={form.current_company} onChange={(e) => change("current_company", e.target.value)} />
        </Field>
        <Field label="Years of experience" error={fieldErrors.years_of_experience}>
          <input type="number" min="0" value={form.years_of_experience} onChange={(e) => change("years_of_experience", e.target.value)} />
        </Field>
      </div>
      <div className={styles.formRow}>
        <Field label="Work authorization" error={fieldErrors.work_authorization}>
          <select value={form.work_authorization} onChange={(e) => change("work_authorization", e.target.value)}>
            <option value="">Select</option>
            {WORK_AUTH_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </Field>
        <Field label="">
          <label className={styles.checkboxRow}>
            <input type="checkbox" checked={form.visa_sponsorship_required} onChange={(e) => change("visa_sponsorship_required", e.target.checked)} />
            I will require visa sponsorship
          </label>
        </Field>
      </div>

      <h3>Compensation and availability</h3>
      <div className={styles.formRow}>
        <Field label="Expected salary" error={fieldErrors.expected_salary}>
          <input value={form.expected_salary} onChange={(e) => change("expected_salary", e.target.value)} placeholder="e.g. $70,000 to $85,000" />
        </Field>
        <Field label="Notice period" error={fieldErrors.notice_period}>
          <select value={form.notice_period} onChange={(e) => change("notice_period", e.target.value)}>
            <option value="">Select</option>
            {NOTICE_PERIOD_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </Field>
      </div>
      <div className={styles.formRow}>
        <Field label="Earliest start date" error={fieldErrors.earliest_start_date}>
          <DatePicker
            selected={form.earliest_start_date ? new Date(form.earliest_start_date) : null}
            onChange={(date) => change("earliest_start_date", date ? date.toISOString().slice(0, 10) : "")}
            dateFormat="MMM d, yyyy"
            placeholderText="Select date"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            minDate={new Date()}
            className={styles.datePickerInput}
            wrapperClassName={styles.datePickerWrapper}
          />
        </Field>
        <Field label="Remote preference" error={fieldErrors.remote_preference}>
          <select value={form.remote_preference} onChange={(e) => change("remote_preference", e.target.value)}>
            <option value="">Select</option>
            {REMOTE_PREFERENCE_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </Field>
      </div>
      <label className={styles.checkboxRow}>
        <input type="checkbox" checked={form.open_to_relocation} onChange={(e) => change("open_to_relocation", e.target.checked)} />
        I'm open to relocating for this role
      </label>

      <h3>Resume *</h3>
      <Field label="" error={fieldErrors.resume}>
        <label className={styles.fileInput}>
          <Upload size={16} />
          {resume ? resume.name : "Upload PDF or DOCX (max 5MB)"}
          <input
            type="file"
            accept=".pdf,.docx"
            hidden
            onChange={(e) => setResume(e.target.files[0] || null)}
          />
        </label>
      </Field>

      <Field label="Cover letter" error={fieldErrors.cover_letter}>
        <textarea rows={5} value={form.cover_letter} onChange={(e) => change("cover_letter", e.target.value)} />
      </Field>
      <Field label="How did you hear about this role?" error={fieldErrors.how_heard}>
        <input value={form.how_heard} onChange={(e) => change("how_heard", e.target.value)} />
      </Field>

      <button type="button" className={styles.eeoToggle} onClick={() => setShowEeo((s) => !s)}>
        {showEeo ? "Hide" : "Show"} optional equal opportunity questions
      </button>

      <AnimatePresence>
        {showEeo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.eeoBlock}
          >
            <p className={styles.eeoNote}>
              These questions are entirely optional and never affect your application.
            </p>
            <div className={styles.formRow}>
              <Field label="Gender">
                <select value={form.gender} onChange={(e) => change("gender", e.target.value)}>
                  <option value="">Prefer not to say</option>
                  {GENDER_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </Field>
              {form.gender === "self_describe" && (
                <Field label="Self-described gender">
                  <input value={form.self_described_gender} onChange={(e) => change("self_described_gender", e.target.value)} />
                </Field>
              )}
            </div>
            <div className={styles.formRow}>
              <Field label="Veteran status">
                <select value={form.veteran_status} onChange={(e) => change("veteran_status", e.target.value)}>
                  <option value="">Prefer not to say</option>
                  {VETERAN_STATUS_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </Field>
              <Field label="Disability status">
                <select value={form.disability_status} onChange={(e) => change("disability_status", e.target.value)}>
                  <option value="">Prefer not to say</option>
                  {DISABILITY_STATUS_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Ethnicity (self-described)">
              <input value={form.ethnicity} onChange={(e) => change("ethnicity", e.target.value)} />
            </Field>
          </motion.div>
        )}
      </AnimatePresence>

      <p className={styles.disclaimerText}>
        By submitting this application, you confirm the information provided is accurate to the best
        of your knowledge. We will use it only to evaluate your candidacy for this role, in line with
        our privacy practices. Submitting an application does not guarantee an interview or an offer.
      </p>

      <label className={styles.checkboxRow}>
        <input
          type="checkbox"
          checked={form.consent_given}
          onChange={(e) => change("consent_given", e.target.checked)}
        />
        I consent to my data being stored and processed for this application *
      </label>
      {fieldErrors.consent_given && <span className={styles.fieldError}>{fieldErrors.consent_given}</span>}

      <button type="submit" className={styles.btnPrimary} disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <div className={styles.field}>
      {label && <label>{label}</label>}
      {children}
      {error && <span className={styles.fieldError}>{error}</span>}
    </div>
  );
}

// ─── Process ──────────────────────────────────────────────────
function Process() {
  const ref = useRevealOnScroll();
  return (
    <section ref={ref} className={`${styles.processSection} ${styles.animateOnScroll}`}>
      <div className={styles.container}>
        <div className={styles.processGrid}>
          <div className={styles.processLeft}>
            <p className={styles.sectionLabel}>What to expect</p>
            <h2 className={styles.sectionTitle}>Interview process</h2>
            <p className={styles.sectionSub}>
              We generally do not use recruiters for assessments. Applications are evaluated by our technical team members.
            </p>
          </div>
          <div className={styles.processRight}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className={styles.processStep}>
                <div className={styles.processNumber}>{step.number}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────
const CareerPage = () => {
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className={styles.page}>
      <SEO
        title="Careers | Scape Data Solutions"
        description="Join our team of data experts. Browse open roles and apply."
        path="/careers"
      />

      <Navbar activeNav="careers" />

      <main>
        {selectedSlug ? (
          <JobDetail slug={selectedSlug} onBack={() => setSelectedSlug(null)} />
        ) : (
          <>
            {/* EVERY section, including Hero, is lazy‑loaded and re‑animated */}
            <LazySection>
              <Hero />
            </LazySection>

            <LazySection>
              <Benefits />
            </LazySection>

            <LazySection>
              <JobList onSelect={setSelectedSlug} />
            </LazySection>

            <LazySection>
              <Process />
            </LazySection>

            <LazySection>
              <Offices />
            </LazySection>
          </>
        )}
      </main>

      <Footer />

      {showTop && (
        <motion.button
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </div>
  );
};

export default CareerPage;