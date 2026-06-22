// src/services/api.js
//
// Talks to the real Django backend (see leads/views.py — ContactView).
// Single live endpoint right now: POST /api/contact/
//
// Required fields the backend validates: name, email, service, message
// Optional: company, phone, page_url
//
// `withCredentials: true` is mandatory — the backend's VisitorTrackingMiddleware
// links every lead to a session cookie (Visitor model), and CORS_ALLOW_CREDENTIALS
// is True specifically to allow that cookie across origins in dev/staging.

// In dev, falls back to the local Django runserver default (port 8000).
// In production, set VITE_API_URL=https://api.scapedatasolutions.com/api
// in your .env (or hosting platform's env vars) — that's the domain implied
// by ALLOWED_HOSTS in the backend's .env.example.
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

class ApiError extends Error {
  constructor(message, status, fieldErrors) {
    super(message);
    this.status = status;
    this.fieldErrors = fieldErrors || null;
  }
}

/**
 * Submits a contact/lead form to POST /api/contact/
 * Accepts whatever shape the various forms collect and maps it onto the
 * exact fields the backend's LeadSerializer expects.
 */
async function submitLead(formData = {}) {
  const payload = {
    name: formData.name?.trim() || "",
    email: formData.email?.trim() || "",
    service: formData.service || formData.service_interest || formData.subject || "General Inquiry",
    message: formData.message || "",
    company: formData.company || "",
    phone: formData.phone || "",
    page_url: typeof window !== "undefined" ? window.location.href : "",
  };

  let response;
  try {
    response = await fetch(`${API_BASE_URL}/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // sends the session cookie the visitor middleware relies on
      body: JSON.stringify(payload),
    });
  } catch (networkErr) {
    throw new ApiError(
      "Couldn't reach the server. Check your connection and try again, or email us directly at info@scapedatasolutions.com",
      0
    );
  }

  if (response.status === 429) {
    throw new ApiError("Too many submissions — please wait a minute and try again.", 429);
  }

  let data = null;
  try {
    data = await response.json();
  } catch {
    // empty/non-JSON body — fall through to status handling below
  }

  if (!response.ok) {
    // DRF validation errors come back as { field: ["msg", ...], ... }
    if (response.status === 400 && data && typeof data === "object") {
      const firstField = Object.keys(data)[0];
      const firstMsg = Array.isArray(data[firstField]) ? data[firstField][0] : data[firstField];
      throw new ApiError(firstMsg || "Please check the form and try again.", 400, data);
    }
    throw new ApiError(
      "Something went wrong sending your message. Please try again or email us directly at info@scapedatasolutions.com",
      response.status
    );
  }

  return data; // { message: "Thanks — we've received your message..." }
}

/**
 * Logs a page view to POST /api/track-visit/ (see visitors/views.py — TrackPageView).
 * Fire-and-forget by design: a failed tracking call should never break navigation
 * or surface an error to the visitor, so this never throws — it just logs.
 *
 * Matches the actual call site in App.jsx:
 *   const pageName = location.pathname.replace('/', '') || 'home';
 *   apiService.trackPageView(pageName);
 * — i.e. a bare path segment with NO leading slash (e.g. "portfolio/ai", "home").
 *
 * Also accepts an object for flexibility if other call sites need more control:
 *   trackPageView({ url, title, referrer })
 */
async function trackPageView(arg) {
  const loc = typeof window !== "undefined" ? window.location : null;

  let url = loc ? loc.href : "";
  let title = typeof document !== "undefined" ? document.title : "";
  let referrer = typeof document !== "undefined" ? document.referrer : "";

  if (typeof arg === "string") {
    const path = arg.startsWith("/") ? arg : `/${arg}`;
    url = loc ? `${loc.origin}${path}` : path;
  } else if (arg && typeof arg === "object") {
    url = arg.url || url;
    title = arg.title ?? title;
    referrer = arg.referrer ?? referrer;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/track-visit/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // same session cookie the visitor middleware reads
      body: JSON.stringify({ url, title, referrer }),
    });

    if (!response.ok) {
      // Non-fatal — log only. A 400 "No active session" can happen on the very
      // first request before the session cookie round-trips; nothing to do about it.
      console.warn("trackPageView: backend returned", response.status);
    }
  } catch (err) {
    // Network issue, ad blocker, etc. — never let this break the app.
    console.warn("trackPageView failed:", err.message);
  }
}

// Object-style export — used by pages that do `apiService.submitLead(...)` /
// `apiService.trackPageView(...)`
export const apiService = { submitLead, trackPageView };

// Named exports — used by pages that do
// `import { submitLead } from "../../services/api"` or `import { trackPageView } ...`
export { submitLead, trackPageView };

export default apiService;