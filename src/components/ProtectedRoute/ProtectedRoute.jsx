// src/components/ProtectedRoute/ProtectedRoute.jsx
//
// Wrap any route element that requires login:
//   <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
//
// `loginPath` lets different areas send an unauthenticated visitor to
// different login pages -- e.g. business-intel uses its own login page
// (same accounts/JWT as client login, just a separate front door) while
// everything else defaults to the client /login page.
//
// Redirects (preserving the intended destination in state, so the
// login page can send them back after a successful login) while the
// initial auth check is in flight, shows nothing (auth resolves fast
// and a spinner here would just flash).

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children, loginPath = "/client-portal/login" }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (!isAuthenticated) {
    return <Navigate to={loginPath} replace state={{ from: location.pathname }} />;
  }

  return children;
}
