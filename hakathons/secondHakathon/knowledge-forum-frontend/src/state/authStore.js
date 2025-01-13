import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: !!localStorage.getItem("auth_token"),

  // Login action to set auth state and store token
  login: (token) => {
    localStorage.setItem("auth_token", token);
    set({ isAuthenticated: true });
  },

  // Logout action to clear auth state and token
  logout: () => {
    localStorage.removeItem("auth_token");
    set({ isAuthenticated: false });
  },
}));

export default useAuthStore;
