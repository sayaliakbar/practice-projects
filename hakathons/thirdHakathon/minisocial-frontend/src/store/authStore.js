import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: !!localStorage.getItem("auth_token"),

  user: {
    id: localStorage.getItem("user_id"),
    name: localStorage.getItem("user_name"),
    role: localStorage.getItem("role"),
  },

  login: (token, id, name, role) => {
    try {
      localStorage.setItem("auth_token", token);
      localStorage.setItem("user_id", id);
      localStorage.setItem("user_name", name);
      localStorage.setItem("role", role);

      set({
        isAuthenticated: true,
        user: { id, name, role },
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },

  logout: () => {
    try {
      localStorage.clear();
      set({
        isAuthenticated: false,
        user: { id: null, name: null, role: null },
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));

export default useAuthStore;
