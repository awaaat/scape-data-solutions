// src/context/AuthContext.jsx
//
// Global auth state. Wrap <App /> with <AuthProvider> in main.jsx (see
// the frontend bundle README for the exact one-line change). Any
// component can then call useAuth() to read the current user or
// trigger login/signup/logout — no prop drilling through Navbar/pages.

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import * as authApi from "../services/authApi";
import { clearTokens, getAccessToken, getRefreshToken, isLoggedIn } from "../services/tokenStorage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // true until the initial /me/ check resolves

  // On first load, if a token already exists (returning visitor),
  // hydrate the user from /users/me/ rather than trusting a possibly
  // stale localStorage copy of their profile.
  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      if (!isLoggedIn()) {
        setLoading(false);
        return;
      }
      try {
        const me = await authApi.getMe();
        if (!cancelled) setUser(me);
      } catch {
        // Access token invalid/expired and refresh also failed —
        // httpClient already cleared tokens in that case.
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    hydrate();
    return () => { cancelled = true; };
  }, []);

  const signup = useCallback(async (fields) => {
    return authApi.signup(fields); // does not log the person in — email must be verified first
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const data = await authApi.login({ email, password });
    setUser(data.user);
    return data;
  }, []);

  const logout = useCallback(async () => {
    const refresh = getRefreshToken();
    try {
      await authApi.logout(refresh);
    } finally {
      clearTokens();
      setUser(null);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    try {
      const me = await authApi.getMe();
      setUser(me);
      return me;
    } catch {
      return null;
    }
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    isAuthenticated: Boolean(user) && Boolean(getAccessToken()),
    signup,
    login,
    logout,
    refreshProfile,
  }), [user, loading, signup, login, logout, refreshProfile]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth() must be used inside <AuthProvider>. See main.jsx.");
  }
  return ctx;
}
