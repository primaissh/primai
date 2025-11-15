// Admin authentication utilities

export const ADMIN_CREDENTIALS = {
  email: "admin@primai.com",
  password: "primai2024"
};

export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false; // Server-side rendering

  const authenticated = localStorage.getItem("admin_authenticated");
  const loginTime = localStorage.getItem("admin_login_time");

  if (!authenticated || !loginTime) return false;

  // Check if session is expired (24 hours)
  const loginDate = new Date(loginTime);
  const now = new Date();
  const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 3600);

  if (hoursDiff > 24) {
    // Session expired, clear it
    logoutAdmin();
    return false;
  }

  return authenticated === "true";
}

export function logoutAdmin(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem("admin_authenticated");
  localStorage.removeItem("admin_login_time");
}

export function loginAdmin(email: string, password: string): boolean {
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    if (typeof window !== 'undefined') {
      localStorage.setItem("admin_authenticated", "true");
      localStorage.setItem("admin_login_time", new Date().toISOString());
    }
    return true;
  }
  return false;
}
