// src/pages/Career/CareerPage.jsx
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ArrowLeft, ArrowRight, Upload, CheckCircle } from "lucide-react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "../Home/HomePage.module.css";
import pageStyles from "./CareerPage.module.css";
import { fetchJobs, fetchJobDetail, submitJobApplication } from "../../services/api";
import { Country, City } from "country-state-city";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const initialFilters = { department: "", job_type: "", location_type: "" };

// ─── Job List (filterable list, not cards) ─────────────────────
function JobList({ onSelect }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState(initialFilters);

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
    <section className={pageStyles.listSection}>
      <div className={styles.container}>
        <motion.h1 className={pageStyles.heroTitle} initial="hidden" animate="visible" variants={fadeUp}>
          Open <span className={pageStyles.accent}>Roles</span>
        </motion.h1>

        <div className={pageStyles.filterBar}>
          <select
            className={pageStyles.filterSelect}
            value={filters.department}
            onChange={(e) => updateFilter("department", e.target.value)}
          >
            <option value="">All departments</option>
            {DEPARTMENT_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
          <select
            className={pageStyles.filterSelect}
            value={filters.job_type}
            onChange={(e) => updateFilter("job_type", e.target.value)}
          >
            <option value="">All job types</option>
            {JOB_TYPE_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
          <select
            className={pageStyles.filterSelect}
            value={filters.location_type}
            onChange={(e) => updateFilter("location_type", e.target.value)}
          >
            <option value="">All locations</option>
            {LOCATION_TYPE_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
          {hasActiveFilters && (
            <button type="button" className={pageStyles.clearFiltersBtn} onClick={clearFilters}>
              Clear filters
            </button>
          )}
        </div>

        {loading && <p className={pageStyles.stateText}>Loading open roles...</p>}
        {error && <p className={pageStyles.stateText}>{error}</p>}

        {!loading && !error && jobs.length === 0 && (
          <div className={pageStyles.noOpeningsContent}>
            <h2 className={pageStyles.noOpeningsTitle}>No Open Positions Right Now</h2>
            <p className={pageStyles.noOpeningsText}>
              {hasActiveFilters
                ? "No roles match your current filters. Try clearing them to see all open positions."
                : "We don't have any active roles at the moment, but we're always interested in talented people. Reach out and we'll keep you in mind as new opportunities open up."}
            </p>
            {hasActiveFilters ? (
              <button type="button" className={pageStyles.noOpeningsBtn} onClick={clearFilters}>
                Clear filters
              </button>
            ) : (
              <Link to="/contact" className={pageStyles.noOpeningsBtn}>Get In Touch</Link>
            )}
          </div>
        )}

        <div className={pageStyles.jobList}>
          {jobs.map((job, i) => (
            <motion.button
              key={job.slug}
              className={pageStyles.jobRow}
              onClick={() => onSelect(job.slug)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: i * 0.03 }}
            >
              <div className={pageStyles.jobRowMain}>
                <div className={pageStyles.jobRowHeader}>
                  <h3>{job.title}</h3>
                  {job.is_featured && <span className={pageStyles.badge}>Featured</span>}
                </div>
                <p className={pageStyles.jobMeta}>
                  {job.department_display} · {job.job_type_display} · {job.location_type_display}
                  {job.location ? ` · ${job.location}` : ""}
                </p>
                {job.summary && <p className={pageStyles.jobSummary}>{job.summary}</p>}
              </div>
              <div className={pageStyles.jobRowSide}>
                {job.salary_range && <p className={pageStyles.jobSalary}>{job.salary_range}</p>}
                <span className={pageStyles.viewLink}>View role <ArrowRight size={14} /></span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Job Detail (tabbed, like a formal job posting) ────────────
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
        <button onClick={onBack} className={pageStyles.backLink}><ArrowLeft size={16} /> Back to roles</button>
        <p className={pageStyles.stateText}>{error}</p>
      </div>
    );
  }

  if (!job) return <div className={styles.container}><p className={pageStyles.stateText}>Loading...</p></div>;

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
    <section className={pageStyles.detailSection}>
      <div className={styles.container}>
        <button onClick={onBack} className={pageStyles.backLink}><ArrowLeft size={16} /> Back to roles</button>

        <div className={pageStyles.detailHeader}>
          <div>
            <h1 className={pageStyles.detailTitle}>{job.title}</h1>
            <p className={pageStyles.jobMeta}>
              {job.department_display} · {job.job_type_display} · {job.location_type_display}
              {job.location ? ` · ${job.location}` : ""}
            </p>
            {job.salary_range && <p className={pageStyles.jobSalary}>{job.salary_range}</p>}
          </div>
          <button className={pageStyles.applyButton} onClick={goToApply}>
            Apply for this role
          </button>
        </div>

        <div className={pageStyles.tabNav}>
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`${pageStyles.tabButton} ${activeTab === t.key ? pageStyles.tabButtonActive : ""}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={pageStyles.tabPanel}>
          {activeTab === "summary" && (
            <p className={pageStyles.description}>{job.description}</p>
          )}
          {activeTab === "responsibilities" && (
            <ul className={pageStyles.bulletList}>
              {job.responsibilities.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          )}
          {activeTab === "requirements" && (
            <ul className={pageStyles.bulletList}>
              {job.requirements.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          )}
          {activeTab === "nice_to_have" && (
            <ul className={pageStyles.bulletList}>
              {job.nice_to_have.map((l, i) => <li key={i}>{l}</li>)}
            </ul>
          )}
          {activeTab === "apply" && (
            <div>
              <p className={pageStyles.applyIntro}>
                Applying takes a few minutes. Have your resume ready as a PDF or DOCX file before you start.
              </p>
              {!applying ? (
                <button className={pageStyles.applyButton} onClick={() => setApplying(true)}>
                  Start Application
                </button>
              ) : (
                <div className={pageStyles.applyCenterWrap}><ApplicationForm slug={slug} onCancel={() => setApplying(false)} /></div>
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
      <div className={pageStyles.successBox}>
        <CheckCircle size={40} color="#00c853" />
        <h3>Application received. Thank you!</h3>
        <p>We'll be in touch if there's a match.</p>
      </div>
    );
  }

  return (
    <form className={pageStyles.applyForm} onSubmit={handleSubmit}>
      <button type="button" className={pageStyles.backLink} onClick={onCancel}>
        <ArrowLeft size={16} /> Cancel
      </button>

      {error && <div className={pageStyles.formError}>{error}</div>}

      <h3>Your details</h3>
      <div className={pageStyles.formRow}>
        <Field label="Full name *" error={fieldErrors.full_name}>
          <input required value={form.full_name} onChange={(e) => change("full_name", e.target.value)} />
        </Field>
        <Field label="Email *" error={fieldErrors.email}>
          <input type="email" required value={form.email} onChange={(e) => change("email", e.target.value)} />
        </Field>
      </div>
      <div className={pageStyles.formRow}>
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
            className={pageStyles.datePickerInput}
            wrapperClassName={pageStyles.datePickerWrapper}
          />
        </Field>
      </div>
      <div className={pageStyles.formRow}>
        <Field label="Country" error={fieldErrors.country}>
          <select
            value={form.country}
            onChange={(e) => {
              change("country", e.target.value);
              change("city", "");
            }}
          >
            <option value="">Select</option>
            {Country.getAllCountries().map((c) => (
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
              City.getCitiesOfCountry(form.country).map((city) => (
                <option key={city.name} value={city.name}>{city.name}</option>
              ))}
          </select>
        </Field>
      </div>
      <div className={pageStyles.formRow}>
        <Field label="Postal code" error={fieldErrors.postal_code}>
          <input value={form.postal_code} onChange={(e) => change("postal_code", e.target.value)} />
        </Field>
      </div>

      <h3>Links</h3>
      <div className={pageStyles.formRow}>
        <Field label="LinkedIn" error={fieldErrors.linkedin_url}>
          <input type="url" value={form.linkedin_url} onChange={(e) => change("linkedin_url", e.target.value)} />
        </Field>
        <Field label="GitHub" error={fieldErrors.github_url}>
          <input type="url" value={form.github_url} onChange={(e) => change("github_url", e.target.value)} />
        </Field>
      </div>
      <div className={pageStyles.formRow}>
        <Field label="Stack Overflow" error={fieldErrors.stackoverflow_url}>
          <input type="url" value={form.stackoverflow_url} onChange={(e) => change("stackoverflow_url", e.target.value)} />
        </Field>
        <Field label="Portfolio" error={fieldErrors.portfolio_url}>
          <input type="url" value={form.portfolio_url} onChange={(e) => change("portfolio_url", e.target.value)} />
        </Field>
      </div>

      <h3>Professional</h3>
      <div className={pageStyles.formRow}>
        <Field label="Current company" error={fieldErrors.current_company}>
          <input value={form.current_company} onChange={(e) => change("current_company", e.target.value)} />
        </Field>
        <Field label="Years of experience" error={fieldErrors.years_of_experience}>
          <input type="number" min="0" value={form.years_of_experience} onChange={(e) => change("years_of_experience", e.target.value)} />
        </Field>
      </div>
      <div className={pageStyles.formRow}>
        <Field label="Work authorization" error={fieldErrors.work_authorization}>
          <select value={form.work_authorization} onChange={(e) => change("work_authorization", e.target.value)}>
            <option value="">Select</option>
            {WORK_AUTH_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </Field>
        <Field label="">
          <label className={pageStyles.checkboxRow}>
            <input type="checkbox" checked={form.visa_sponsorship_required} onChange={(e) => change("visa_sponsorship_required", e.target.checked)} />
            I will require visa sponsorship
          </label>
        </Field>
      </div>

      <h3>Compensation and availability</h3>
      <div className={pageStyles.formRow}>
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
      <div className={pageStyles.formRow}>
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
            className={pageStyles.datePickerInput}
            wrapperClassName={pageStyles.datePickerWrapper}
          />
        </Field>
        <Field label="Remote preference" error={fieldErrors.remote_preference}>
          <select value={form.remote_preference} onChange={(e) => change("remote_preference", e.target.value)}>
            <option value="">Select</option>
            {REMOTE_PREFERENCE_CHOICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </Field>
      </div>
      <label className={pageStyles.checkboxRow}>
        <input type="checkbox" checked={form.open_to_relocation} onChange={(e) => change("open_to_relocation", e.target.checked)} />
        I'm open to relocating for this role
      </label>

      <h3>Resume *</h3>
      <Field label="" error={fieldErrors.resume}>
        <label className={pageStyles.fileInput}>
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

      <button type="button" className={pageStyles.eeoToggle} onClick={() => setShowEeo((s) => !s)}>
        {showEeo ? "Hide" : "Show"} optional equal opportunity questions
      </button>

      <AnimatePresence>
        {showEeo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={pageStyles.eeoBlock}
          >
            <p className={pageStyles.eeoNote}>
              These questions are entirely optional and never affect your application.
            </p>
            <div className={pageStyles.formRow}>
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
            <div className={pageStyles.formRow}>
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

      <p className={pageStyles.disclaimerText}>
        By submitting this application, you confirm the information provided is accurate to the best
        of your knowledge. We will use it only to evaluate your candidacy for this role, in line with
        our privacy practices. Submitting an application does not guarantee an interview or an offer.
      </p>

      <label className={pageStyles.checkboxRow}>
        <input
          type="checkbox"
          checked={form.consent_given}
          onChange={(e) => change("consent_given", e.target.checked)}
        />
        I consent to my data being stored and processed for this application *
      </label>
      {fieldErrors.consent_given && <span className={pageStyles.fieldError}>{fieldErrors.consent_given}</span>}

      <button type="submit" className={pageStyles.applyButton} disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <div className={pageStyles.field}>
      {label && <label>{label}</label>}
      {children}
      {error && <span className={pageStyles.fieldError}>{error}</span>}
    </div>
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
      <Helmet>
        <title>Careers | Scape Data Solutions</title>
        <meta name="description" content="Join our team of data experts. Browse open roles and apply." />
      </Helmet>

      <Navbar activeNav="careers" />

      <main className={styles.mainContent}>
        {selectedSlug ? (
          <JobDetail slug={selectedSlug} onBack={() => setSelectedSlug(null)} />
        ) : (
          <JobList onSelect={setSelectedSlug} />
        )}
      </main>

      <Footer />

      {showTop && (
        <motion.button
          className={styles.scrollTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </div>
  );
};

export default CareerPage;
