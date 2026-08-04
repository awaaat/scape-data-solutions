// src/components/AuthFloatingCTA/AuthFloatingCTA.jsx
//
// Mounted ONCE in App.jsx (see AppContent), outside <Routes> — that's
// what makes this show up on every single page without touching a
// single page file or the Navbar. Far more reliable than adding a
// link to each page individually: there's no page this can "forget"
// to appear on, because it isn't attached to any specific page at all.
//
// Logged out: floating "Sign Up" / "Log In" pair.
// Logged in:  floating "Dashboard" button, with an unread-message badge.
// Hides itself on the auth/dashboard pages themselves (no point telling
// someone already on /login to log in).

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, LogIn, UserPlus } from "lucide-react";
import styles from "./AuthFloatingCTA.module.css";
import { useAuth } from "../../context/AuthContext";
import { getUnreadCount } from "../../services/projectsApi";

const HIDDEN_ON = ["/signup", "/login", "/verify-email", "/forgot-password", "/reset-password", "/dashboard"];

export default function AuthFloatingCTA() {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    if (!isAuthenticated) return;
    let cancelled = false;

    const poll = () => {
      getUnreadCount()
        .then((data) => { if (!cancelled) setUnread(data?.unread_messages || 0); })
        .catch(() => {});
    };
    poll();
    const interval = setInterval(poll, 60000); // light poll — badge freshness, not live chat
    return () => { cancelled = true; clearInterval(interval); };
  }, [isAuthenticated]);

  if (HIDDEN_ON.includes(location.pathname)) return null;

  if (isAuthenticated) {
    return (
      <div className={styles.wrap}>
        <Link to="/dashboard" className={`${styles.pill} ${styles.pillAccount}`}>
          <LayoutDashboard size={16} />
          <span>{user?.full_name ? user.full_name.split(" ")[0] : "Dashboard"}</span>
          {unread > 0 && <span className={styles.badge}>{unread > 9 ? "9+" : unread}</span>}
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.group}>
        <Link to="/login" className={`${styles.pill} ${styles.pillGhost}`}>
          <LogIn size={16} />
          <span>Log In</span>
        </Link>
        <Link to="/signup" className={`${styles.pill} ${styles.pillPrimary}`}>
          <UserPlus size={16} />
          <span>Sign Up Free</span>
        </Link>
      </div>
    </div>
  );
}
