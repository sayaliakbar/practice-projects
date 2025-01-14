import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: !!localStorage.getItem("auth_token"),

  // Login action to set auth state and store token
  login: (token, id, name) => {
    localStorage.setItem("auth_token", token);
    localStorage.setItem("user_id", id);
    localStorage.setItem("user_name", name);
    set({ isAuthenticated: true });
  },

  // Logout action to clear auth state and token
  logout: () => {
    localStorage.clear();

    set({ isAuthenticated: false });
  },
}));

export default useAuthStore;
