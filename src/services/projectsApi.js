// src/services/projectsApi.js
//
// Talks to the `projects` app (client project submission + messaging).
// Every path/response shape here matches projects/urls.py + views.py
// exactly (see the projects app bundle delivered earlier).

import { authRequest, API_BASE_URL } from "./httpClient";
import { getAccessToken } from "./tokenStorage";

/** GET /api/projects/ — the logged-in client's own projects (paginated). */
export function listProjects() {
  return authRequest("/projects/");
}

/**
 * POST /api/projects/ — submit a new project. `attachment` (optional)
 * must be a File object; when present this sends multipart/form-data,
 * otherwise plain JSON.
 */
export function createProject({ title, description, category, budget, currency, deadline, attachment }) {
  if (attachment) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (category) formData.append("category", category);
    if (budget !== undefined && budget !== "") formData.append("budget", budget);
    if (currency) formData.append("currency", currency);
    if (deadline) formData.append("deadline", deadline);
    formData.append("attachment", attachment);
    return authRequest("/projects/", { method: "POST", body: formData, isFormData: true });
  }
  return authRequest("/projects/", {
    method: "POST",
    body: { title, description, category, budget: budget || null, currency, deadline: deadline || null },
  });
}

/** GET /api/projects/<id>/ */
export function getProject(id) {
  return authRequest(`/projects/${id}/`);
}

/** PATCH /api/projects/<id>/ — only while status is submitted/under_review. */
export function updateProject(id, fields) {
  return authRequest(`/projects/${id}/`, { method: "PATCH", body: fields });
}

/** GET /api/projects/unread-count/ — dashboard badge. */
export function getUnreadCount() {
  return authRequest("/projects/unread-count/");
}

/** GET /api/projects/<id>/messages/ */
export function listMessages(projectId) {
  return authRequest(`/projects/${projectId}/messages/`);
}

/** POST /api/projects/<id>/messages/  Body: { body } */
export function sendMessage(projectId, body) {
  return authRequest(`/projects/${projectId}/messages/`, { method: "POST", body: { body } });
}

/** POST /api/projects/<id>/messages/mark-read/ */
export function markMessagesRead(projectId) {
  return authRequest(`/projects/${projectId}/messages/mark-read/`, { method: "POST" });
}

/**
 * Opens the live message websocket for a project. Auth is via the JWT
 * access token as a query param (see contracts/channels_auth.py /
 * projects consumer — reused JWT middleware). Returns the raw
 * WebSocket instance; caller owns onmessage/onclose/close().
 */
export function openProjectSocket(projectId) {
  const access = getAccessToken();
  const wsBase = API_BASE_URL.replace(/^http/, "ws").replace(/\/api\/?$/, "");
  return new WebSocket(`${wsBase}/ws/projects/${projectId}/messages/?access=${encodeURIComponent(access || "")}`);
}
