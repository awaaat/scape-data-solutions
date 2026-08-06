// src/pages/Dashboard/DashboardPage.jsx
//
// The client-facing home base: list your own projects (GET /api/projects/),
// submit a new one (POST /api/projects/), and message admin about a
// selected project in real time — REST for history
// (GET /api/projects/<id>/messages/) plus a live websocket
// (see services/projectsApi.openProjectSocket) for anything sent while
// this page is open, either direction.

import { useCallback, useEffect, useRef, useState } from "react";
import { LogOut, Plus, Send, Loader2, Paperclip, Inbox } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SEO from "../../components/SEO/SEO";
import styles from "./DashboardPage.module.css";
import { useAuth } from "../../context/AuthContext";
import * as projectsApi from "../../services/projectsApi";

const STATUS_LABELS = {
  submitted: "Submitted",
  under_review: "Under review",
  in_progress: "In progress",
  completed: "Completed",
  cancelled: "Cancelled",
};

const CATEGORY_OPTIONS = [
  { value: "data_cleaning", label: "Data cleaning" },
  { value: "data_entry", label: "Data entry" },
  { value: "web_scraping", label: "Web scraping" },
  { value: "data_analysis", label: "Data analysis" },
  { value: "dashboard_bi", label: "Dashboard / BI" },
  { value: "database_design", label: "Database design" },
  { value: "etl_automation", label: "ETL / automation" },
  { value: "other", label: "Other" },
];

function StatusBadge({ status }) {
  return <span className={`${styles.badge} ${styles["badge_" + status]}`}>{STATUS_LABELS[status] || status}</span>;
}

function NewProjectForm({ onCreated, onCancel }) {
  const [form, setForm] = useState({ title: "", description: "", category: "", budget: "", currency: "KES", deadline: "" });
  const [attachment, setAttachment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const project = await projectsApi.createProject({ ...form, attachment });
      onCreated(project);
    } catch (err) {
      setError(err.message || "Couldn't submit your project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.newProjectForm} onSubmit={handleSubmit} noValidate autoComplete="off">
      {error && <div className={styles.formError}>{error}</div>}

      <div className={styles.field}>
        <label className={styles.label} htmlFor="title">Title</label>
        <input
          id="title" name="title" className={styles.input} value={form.title}
          onChange={handleChange} required autoComplete="off"
          placeholder="e.g. Clean and dedupe customer CSV"
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="description">Description</label>
        <textarea
          id="description" name="description" className={styles.textarea}
          value={form.description} onChange={handleChange} required minLength={20}
          autoComplete="off"
          placeholder="What do you need done? The more detail, the faster we can scope it."
        />
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="category">Category</label>
          <select
            id="category" name="category" className={styles.select}
            value={form.category} onChange={handleChange} required
          >
            <option value="" disabled>Select a category</option>
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="deadline">Deadline</label>
          <input
            id="deadline" name="deadline" type="date" className={styles.input}
            value={form.deadline} onChange={handleChange} autoComplete="off"
          />
        </div>
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="budget">Budget</label>
          <input
            id="budget" name="budget" type="number" min="0" step="1" className={styles.input}
            value={form.budget} onChange={handleChange} placeholder="Optional" autoComplete="off"
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="currency">Currency</label>
          <select id="currency" name="currency" className={styles.select} value={form.currency} onChange={handleChange}>
            <option value="KES">KES</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="attachment">
          <Paperclip size={13} /> Attachment (optional)
        </label>
        <input
          id="attachment" name="attachment" type="file" className={styles.fileInput}
          onChange={(e) => setAttachment(e.target.files?.[0] || null)}
        />
      </div>

      <div className={styles.formActions}>
        <button type="button" className={styles.secondaryBtn} onClick={onCancel}>Cancel</button>
        <button type="submit" className={styles.primaryBtn} disabled={loading}>
          {loading ? <Loader2 size={15} className={styles.spin} /> : null}
          {loading ? "Submitting…" : "Submit project"}
        </button>
      </div>
    </form>
  );
}

function MessageThread({ project }) {
  const [messages, setMessages] = useState([]);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const socketRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    projectsApi.listMessages(project.id)
      .then((data) => { if (!cancelled) setMessages(data); })
      .finally(() => { if (!cancelled) setLoading(false); });
    projectsApi.markMessagesRead(project.id).catch(() => {});

    // Live socket — every new message (from either side, REST or
    // socket) gets broadcast here (see projects/signals.py). We just
    // append whatever arrives.
    const socket = projectsApi.openProjectSocket(project.id);
    socketRef.current = socket;
    socket.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.id) setMessages((prev) => (prev.some((m) => m.id === msg.id) ? prev : [...prev, msg]));
      } catch {
        // ignore malformed frames
      }
    };

    return () => {
      cancelled = true;
      socket.close();
    };
  }, [project.id]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  const handleSend = useCallback(async (e) => {
    e.preventDefault();
    const trimmed = body.trim();
    if (!trimmed) return;
    setSending(true);
    setBody("");
    try {
      // Prefer the open socket (instant, no extra request); fall back
      // to REST if the socket isn't connected for some reason.
      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
        socketRef.current.send(JSON.stringify({ body: trimmed }));
      } else {
        await projectsApi.sendMessage(project.id, trimmed);
      }
    } catch {
      setBody(trimmed); // put it back so the person doesn't lose what they typed
    } finally {
      setSending(false);
    }
  }, [body, project.id]);

  return (
    <div className={styles.thread}>
      <div className={styles.threadLog}>
        {loading && <div className={styles.threadLoading}><Loader2 size={18} className={styles.spin} /></div>}
        {!loading && messages.length === 0 && (
          <div className={styles.threadEmpty}>No messages yet — say hello about your project.</div>
        )}
        {messages.map((m) => (
          <div key={m.id} className={`${styles.msg} ${m.sender_type === "admin" ? styles.msgAdmin : styles.msgClient}`}>
            <span className={styles.msgSender}>{m.sender_type === "admin" ? "Scape Data Team" : "You"}</span>
            <p className={styles.msgBody}>{m.body}</p>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form className={styles.threadInput} onSubmit={handleSend} autoComplete="off">
        <input
          type="text" placeholder="Type a message…" value={body} autoComplete="off"
          onChange={(e) => setBody(e.target.value)} disabled={sending}
        />
        <button type="submit" disabled={sending || !body.trim()} aria-label="Send message">
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}

export default function DashboardPage() {
  const { user, logout } = useAuth();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [showNewForm, setShowNewForm] = useState(false);

  const loadProjects = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await projectsApi.listProjects();
      const list = data.results || data; // paginated or not
      setProjects(list);
      if (!selectedId && list.length > 0) setSelectedId(list[0].id);
    } catch (err) {
      setError(err.message || "Couldn't load your projects.");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { loadProjects(); }, [loadProjects]);

  const selectedProject = projects.find((p) => p.id === selectedId) || null;

  const handleCreated = (project) => {
    setProjects((prev) => [project, ...prev]);
    setSelectedId(project.id);
    setShowNewForm(false);
  };

  return (
    <div className={styles.page}>
      <SEO title="Dashboard | Scape Data Solutions" description="Manage your projects with Scape Data Solutions." path="/dashboard" />
      <Navbar activeNav="" />

      <main className={styles.mainContent}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.pageTitle}>
              Welcome{user?.full_name ? `, ${user.full_name.split(" ")[0]}` : ""}
            </h1>
            <p className={styles.pageSubtitle}>Manage your projects and messages here.</p>
          </div>
          <button className={styles.logoutBtn} onClick={logout}>
            <LogOut size={14} /> Log out
          </button>
        </div>

        <div className={styles.layout}>
          {/* ── Project list ── */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <span>Your projects</span>
              <button className={styles.newBtn} onClick={() => setShowNewForm(true)}>
                <Plus size={14} /> New
              </button>
            </div>

            {loading && <div className={styles.sidebarLoading}><Loader2 size={18} className={styles.spin} /></div>}
            {error && <div className={styles.formError}>{error}</div>}

            {!loading && projects.length === 0 && !showNewForm && (
              <div className={styles.emptyState}>
                <Inbox size={28} />
                <p>No projects yet.</p>
                <button className={styles.primaryBtn} onClick={() => setShowNewForm(true)}>Submit your first project</button>
              </div>
            )}

            <ul className={styles.projectList}>
              {projects.map((p) => (
                <li key={p.id}>
                  <button
                    className={`${styles.projectItem}${selectedId === p.id ? " " + styles.projectItemActive : ""}`}
                    onClick={() => { setSelectedId(p.id); setShowNewForm(false); }}
                  >
                    <span className={styles.projectItemTitle}>{p.title}</span>
                    <StatusBadge status={p.status} />
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* ── Detail panel ── */}
          <section className={styles.detail}>
            {showNewForm ? (
              <>
                <h2 className={styles.detailTitle}>Submit a new project</h2>
                <NewProjectForm onCreated={handleCreated} onCancel={() => setShowNewForm(false)} />
              </>
            ) : selectedProject ? (
              <>
                <div className={styles.detailHeader}>
                  <div>
                    <h2 className={styles.detailTitle}>{selectedProject.title}</h2>
                    <StatusBadge status={selectedProject.status} />
                  </div>
                </div>
                <p className={styles.detailDescription}>{selectedProject.description}</p>
                {selectedProject.attachment_url && (
                  <a
                    href={selectedProject.attachment_url} target="_blank" rel="noreferrer"
                    className={styles.attachmentLink}
                  >
                    <Paperclip size={13} /> {selectedProject.attachment_filename || "Attachment"}
                  </a>
                )}

                <h3 className={styles.threadHeading}>Messages</h3>
                <MessageThread project={selectedProject} />
              </>
            ) : (
              !loading && (
                <div className={styles.emptyState}>
                  <Inbox size={28} />
                  <p>Select a project to see details and messages.</p>
                </div>
              )
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}