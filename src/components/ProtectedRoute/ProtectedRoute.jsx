// src/components/ProtectedRoute/ProtectedRoute.jsx
//
// Wrap any route element that requires login:
//   <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
// Redirects to /login (preserving the intended destination in state,
// so LoginPage can send them back after a successful login) while the
// initial auth check is in flight, shows nothing (auth resolves fast
// and a spinner here would just flash).

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
