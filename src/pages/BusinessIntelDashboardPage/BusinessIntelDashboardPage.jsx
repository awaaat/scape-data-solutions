import { useCallback, useEffect, useRef, useState } from 'react';
import { Bell, ChevronDown, CreditCard, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import {
  BUSINESS_CATEGORIES,
  TARGET_SEGMENTS,
  categoryLabel,
  submitBusinessQuery,
  getBusinessReport,
  listBusinessReports,
  computeReportStats,
  pollBusinessReport,
} from '../../services/businessIntelApi';
import styles from './BusinessIntelDashboardPage.module.css';

const STATUS_META = {
  pending: { label: 'Pending', tone: 'wait' },
  awaiting_payment: { label: 'Awaiting payment', tone: 'wait' },
  generating: { label: 'Generating', tone: 'wait' },
  ready: { label: 'Ready', tone: 'ready' },
  failed: { label: 'Failed', tone: 'failed' },
};

const RECOMMENDATION_META = {
  proceed: { label: 'Proceed', tone: 'proceed' },
  investigate_further: { label: 'Investigate further', tone: 'investigate' },
  avoid: { label: 'Avoid', tone: 'avoid' },
};

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'ready', label: 'Ready' },
  { key: 'in_progress', label: 'In progress' },
  { key: 'failed', label: 'Failed' },
  { key: 'anomalous', label: 'Flagged' },
];

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('en-KE', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

function formatKes(value) {
  if (value === null || value === undefined) return '—';
  return `KES ${Number(value).toLocaleString('en-KE')}`;
}

function matchesFilter(report, filterKey) {
  if (filterKey === 'all') return true;
  if (filterKey === 'anomalous') return report.is_anomalous;
  if (filterKey === 'in_progress') return ['pending', 'awaiting_payment', 'generating'].includes(report.status);
  return report.status === filterKey;
}

// ─── Header widgets ──────────────────────────────────────────────

function NotificationBell() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  // NOTE: there's no notifications endpoint for business-intel yet, so
  // this always shows an empty state. Wire a real unread count/list in
  // here once one exists (report-ready events, payment receipts, etc.)
  // -- the shell (bell, badge slot, dropdown) is already wired up.
  return (
    <div className={styles.bellWrap} ref={ref}>
      <button className={styles.iconButton} onClick={() => setOpen((v) => !v)} aria-label="Notifications">
        <Bell size={18} />
      </button>
      {open && (
        <div className={styles.bellDropdown}>
          <div className={styles.bellDropdownHeader}>Notifications</div>
          <div className={styles.bellEmpty}>You're all caught up.</div>
        </div>
      )}
    </div>
  );
}

function ProfileMenu({ user, activeTab, onNavigate }) {
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const displayName = user?.full_name || user?.email || 'Account';
  const initial = displayName.trim().charAt(0).toUpperCase() || '?';

  return (
    <div className={styles.profileMenu} ref={ref}>
      <button className={styles.profileTrigger} onClick={() => setOpen((v) => !v)}>
        <span className={styles.avatar}>{initial}</span>
        <span className={styles.profileName}>{displayName}</span>
        <ChevronDown size={14} />
      </button>

      {open && (
        <div className={styles.profileDropdown}>
          <div className={styles.profileDropdownHeader}>
            <span className={styles.profileDropdownName}>{user?.full_name || 'Account'}</span>
            {user?.email && <span className={styles.profileDropdownEmail}>{user.email}</span>}
          </div>

          <button
            className={`${styles.profileDropdownItem}${activeTab === 'settings' ? ' ' + styles.profileDropdownItemActive : ''}`}
            onClick={() => { onNavigate('settings'); setOpen(false); }}
          >
            <Settings size={15} /> Profile settings
          </button>
          <button
            className={`${styles.profileDropdownItem}${activeTab === 'billing' ? ' ' + styles.profileDropdownItemActive : ''}`}
            onClick={() => { onNavigate('billing'); setOpen(false); }}
          >
            <CreditCard size={15} /> Payment & billing
          </button>
          <button
            className={`${styles.profileDropdownItem} ${styles.profileDropdownDanger}`}
            onClick={logout}
          >
            <LogOut size={15} /> Log out
          </button>
        </div>
      )}
    </div>
  );
}

function BillingSection() {
  // Placeholder shell -- wire the actual payment flow up here.
  // Paystack is already configured backend-side (PAYSTACK_SECRET_KEY /
  // PAYSTACK_CALLBACK_URL / PROPERTY_REPORT_PRICE_KES in settings.py),
  // same pattern property_intel already uses for its paid reports --
  // business_intel likely wants a parallel initialize/verify pair.
  return (
    <div className={styles.sectionPanel}>
      <h2 className={styles.sectionTitle}>Payment & billing</h2>
      <p className={styles.sectionSubtitle}>
        Manage how you pay for site-selection reports once your free allowance runs out.
      </p>
      <div className={styles.sectionPlaceholder}>
        <CreditCard size={28} />
        <p>Payment integration coming soon.</p>
      </div>
    </div>
  );
}

function SettingsSection({ user }) {
  // Read-only for now -- hook the form up to PATCH /api/users/me/
  // when you're ready to let people edit these.
  return (
    <div className={styles.sectionPanel}>
      <h2 className={styles.sectionTitle}>Profile settings</h2>
      <dl className={styles.settingsGrid}>
        <div><dt>Full name</dt><dd>{user?.full_name || '—'}</dd></div>
        <div><dt>Email</dt><dd>{user?.email || '—'}</dd></div>
        <div><dt>Phone</dt><dd>{user?.phone || '—'}</dd></div>
      </dl>
      <p className={styles.sectionSubtitle}>Editing isn't wired up yet — this just displays what's on the account.</p>
    </div>
  );
}

// Login is enforced one level up by <ProtectedRoute> in App.jsx -- this
// component can assume request.user always exists by the time it mounts.
export default function BusinessIntelDashboardPage() {
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState('reports'); // reports | billing | settings

  const [stats, setStats] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [expandedDetail, setExpandedDetail] = useState(null);
  const [expandedLoading, setExpandedLoading] = useState(false);
  const [showRawJson, setShowRawJson] = useState(false);

  const [showNewQuery, setShowNewQuery] = useState(false);
  const [form, setForm] = useState({
    raw_location_input: '',
    business_category: BUSINESS_CATEGORIES[0].value,
    business_category_other: '',
    investment_amount_kes: '',
    branches_planned: 1,
    target_segment: '',
  });
  const [submitError, setSubmitError] = useState('');
  const [submitPhase, setSubmitPhase] = useState('idle');

  const refreshList = useCallback(async () => {
    setLoading(true);
    setLoadError('');
    try {
      const rows = await listBusinessReports();
      setReports(rows);
      setStats(computeReportStats(rows));
    } catch (err) {
      setLoadError(err.userMessage || 'Could not load reports. Is the backend running?');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshList();
  }, [refreshList]);

  async function handleExpand(reportId) {
    if (expandedId === reportId) {
      setExpandedId(null);
      setExpandedDetail(null);
      setShowRawJson(false);
      return;
    }
    setExpandedId(reportId);
    setExpandedDetail(null);
    setShowRawJson(false);
    setExpandedLoading(true);
    try {
      const detail = await getBusinessReport(reportId);
      setExpandedDetail(detail);
    } catch {
      setExpandedDetail({ error: true });
    } finally {
      setExpandedLoading(false);
    }
  }

  function updateForm(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleNewQuerySubmit(e) {
    e.preventDefault();
    setSubmitError('');
    const payload = {
      raw_location_input: form.raw_location_input,
      business_category: form.business_category,
      investment_amount_kes: form.investment_amount_kes || undefined,
      branches_planned: Number(form.branches_planned) || 1,
      target_segment: form.target_segment || undefined,
    };
    if (form.business_category === 'other') {
      payload.business_category_other = form.business_category_other;
    }

    setSubmitPhase('submitting');
    try {
      const { report_id } = await submitBusinessQuery(payload);
      setSubmitPhase('polling');
      await pollBusinessReport(report_id, { onUpdate: refreshList });
      setSubmitPhase('done');
      await refreshList();
      setTimeout(() => {
        setShowNewQuery(false);
        setSubmitPhase('idle');
        setForm((prev) => ({ ...prev, raw_location_input: '', investment_amount_kes: '' }));
      }, 900);
    } catch (err) {
      // A 402 here means the account's free reports are used up --
      // payment isn't implemented yet, so this is a dead end for now;
      // the message from the backend says so plainly.
      setSubmitError(err.userMessage || 'Something went wrong generating this report.');
      setSubmitPhase('idle');
    }
  }

  const visibleReports = reports.filter((r) => matchesFilter(r, filter));

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Location Intel</span>
          <h1 className={styles.title}>Business Location Intelligence</h1>
        </div>
        <div className={styles.headerActions}>
          <NotificationBell />
          <ProfileMenu user={user} activeTab={activeTab} onNavigate={setActiveTab} />
        </div>
      </header>

      <nav className={styles.tabRow}>
        <div className={styles.tabGroup}>
          <button
            className={`${styles.tabButton}${activeTab === 'reports' ? ' ' + styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            Reports
          </button>
          <button
            className={`${styles.tabButton}${activeTab === 'billing' ? ' ' + styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('billing')}
          >
            Payment & billing
          </button>
          <button
            className={`${styles.tabButton}${activeTab === 'settings' ? ' ' + styles.tabButtonActive : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Profile settings
          </button>
        </div>
        {activeTab === 'reports' && (
          <button className={styles.primaryButton} onClick={() => setShowNewQuery(true)}>
            + New query
          </button>
        )}
      </nav>

      {activeTab === 'reports' && (
        <>
          {loadError && <div className={styles.errorBanner}>{loadError}</div>}

          {stats && (
            <section className={styles.statsGrid}>
              <StatCard label="Total reports" value={stats.total} />
              <StatCard label="Ready" value={stats.ready} tone="ready" />
              <StatCard label="In progress" value={stats.in_progress} tone="wait" />
              <StatCard label="Failed" value={stats.failed} tone="failed" />
              <StatCard label="Flagged anomalous" value={stats.anomalous} tone="avoid" />
              <StatCard
                label="Avg. confidence"
                value={stats.avg_confidence != null ? `${Number(stats.avg_confidence).toFixed(0)}%` : '—'}
              />
              <StatCard label="Proceed" value={stats.proceed} tone="proceed" />
              <StatCard label="Investigate" value={stats.investigate_further} tone="investigate" />
              <StatCard label="Avoid" value={stats.avoid} tone="avoid" />
            </section>
          )}

          <div className={styles.filterRow}>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`${styles.filterChip} ${filter === f.key ? styles.filterChipActive : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {loading && <div className={styles.loadingRow}>Loading reports…</div>}

          {!loading && visibleReports.length === 0 && (
            <div className={styles.emptyState}>
              <p>No reports match this filter yet.</p>
              <button className={styles.primaryButton} onClick={() => setShowNewQuery(true)}>Run your first query</button>
            </div>
          )}

          <ul className={styles.reportList}>
            {visibleReports.map((r) => {
              const statusMeta = STATUS_META[r.status] || { label: r.status, tone: 'wait' };
              const recMeta = RECOMMENDATION_META[r.recommendation];
              const isOpen = expandedId === r.id;
              return (
                <li key={r.id} className={styles.reportCard}>
                  <button className={styles.reportSummary} onClick={() => handleExpand(r.id)}>
                    <div className={styles.reportSummaryMain}>
                      <span className={styles.reportCategory}>
                        {categoryLabel(r.business_category, r.business_category_other)}
                      </span>
                      <span className={styles.reportLocation}>{r.raw_location_input}</span>
                    </div>
                    <div className={styles.reportSummaryMeta}>
                      {r.is_anomalous && <span className={styles.flagBadge}>flagged</span>}
                      {recMeta && (
                        <span className={`${styles.badge} ${styles[`tone_${recMeta.tone}`]}`}>{recMeta.label}</span>
                      )}
                      <span className={`${styles.badge} ${styles[`tone_${statusMeta.tone}`]}`}>{statusMeta.label}</span>
                      <span className={styles.reportDate}>{formatDate(r.created_at)}</span>
                      <span className={styles.chevron}>{isOpen ? '−' : '+'}</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className={styles.reportDetail}>
                      {expandedLoading && <p className={styles.loadingRow}>Loading full report…</p>}
                      {!expandedLoading && expandedDetail?.error && (
                        <p className={styles.errorBanner}>Could not load this report.</p>
                      )}
                      {!expandedLoading && expandedDetail && !expandedDetail.error && (
                        <>
                          <DetailGrid report={expandedDetail} />
                          {expandedDetail.ai_summary_text && (
                            <p className={styles.summaryText}>{expandedDetail.ai_summary_text}</p>
                          )}
                          {expandedDetail.status === 'failed' && expandedDetail.failure_reason && (
                            <p className={styles.errorBanner}>{expandedDetail.failure_reason}</p>
                          )}
                          <button
                            className={styles.linkButton}
                            onClick={() => setShowRawJson((v) => !v)}
                          >
                            {showRawJson ? 'hide raw report data' : 'show raw report data'}
                          </button>
                          {showRawJson && (
                            <pre className={styles.rawJson}>{JSON.stringify(expandedDetail, null, 2)}</pre>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}

      {activeTab === 'billing' && <BillingSection />}
      {activeTab === 'settings' && <SettingsSection user={user} />}

      {showNewQuery && (
        <div className={styles.modalOverlay} onClick={() => submitPhase === 'idle' && setShowNewQuery(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>Run a new query</h2>
            <form onSubmit={handleNewQuerySubmit} className={styles.form}>
              <label className={styles.field}>
                <span>Location</span>
                <input
                  required
                  placeholder="Coordinates, Maps link, or Plus Code"
                  value={form.raw_location_input}
                  onChange={(e) => updateForm('raw_location_input', e.target.value)}
                />
              </label>

              <label className={styles.field}>
                <span>Business type</span>
                <select
                  value={form.business_category}
                  onChange={(e) => updateForm('business_category', e.target.value)}
                >
                  {BUSINESS_CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </label>

              {form.business_category === 'other' && (
                <label className={styles.field}>
                  <span>Describe the business</span>
                  <input
                    required
                    value={form.business_category_other}
                    onChange={(e) => updateForm('business_category_other', e.target.value)}
                  />
                </label>
              )}

              <div className={styles.fieldRow}>
                <label className={styles.field}>
                  <span>Investment (KES)</span>
                  <input
                    type="number"
                    min="0"
                    value={form.investment_amount_kes}
                    onChange={(e) => updateForm('investment_amount_kes', e.target.value)}
                  />
                </label>
                <label className={styles.field}>
                  <span>Branches planned</span>
                  <input
                    type="number"
                    min="1"
                    value={form.branches_planned}
                    onChange={(e) => updateForm('branches_planned', e.target.value)}
                  />
                </label>
              </div>

              <label className={styles.field}>
                <span>Target segment</span>
                <select
                  value={form.target_segment}
                  onChange={(e) => updateForm('target_segment', e.target.value)}
                >
                  <option value="">Not specified</option>
                  {TARGET_SEGMENTS.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </label>

              {submitError && <p className={styles.errorBanner}>{submitError}</p>}

              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.linkButton}
                  disabled={submitPhase !== 'idle'}
                  onClick={() => setShowNewQuery(false)}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.primaryButton} disabled={submitPhase !== 'idle'}>
                  {submitPhase === 'idle' && 'Generate report'}
                  {submitPhase === 'submitting' && 'Submitting…'}
                  {submitPhase === 'polling' && 'Generating…'}
                  {submitPhase === 'done' && 'Done ✓'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, tone }) {
  return (
    <div className={`${styles.statCard} ${tone ? styles[`tone_${tone}`] : ''}`}>
      <span className={styles.statValue}>{value ?? '—'}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

function DetailGrid({ report }) {
  const recMeta = RECOMMENDATION_META[report.recommendation];
  return (
    <dl className={styles.detailGrid}>
      <div><dt>Opportunity</dt><dd>{report.opportunity_level || '—'}</dd></div>
      <div><dt>Recommendation</dt><dd>{recMeta ? recMeta.label : '—'}</dd></div>
      <div><dt>Confidence</dt><dd>{report.confidence_score != null ? `${report.confidence_score}%` : '—'}</dd></div>
      <div><dt>Timing</dt><dd>{report.timing || '—'}</dd></div>
      <div><dt>Anomaly risk</dt><dd>{report.anomaly_risk_score != null ? report.anomaly_risk_score.toFixed(1) : '—'}</dd></div>
      <div><dt>Price charged</dt><dd>{formatKes(report.price_charged_kes)}</dd></div>
      {report.market_gap_summary && <div className={styles.spanAll}><dt>Market gap</dt><dd>{report.market_gap_summary}</dd></div>}
      {report.competition_summary && <div className={styles.spanAll}><dt>Competition</dt><dd>{report.competition_summary}</dd></div>}
      {report.momentum_summary && <div className={styles.spanAll}><dt>Momentum</dt><dd>{report.momentum_summary}</dd></div>}
    </dl>
  );
}
