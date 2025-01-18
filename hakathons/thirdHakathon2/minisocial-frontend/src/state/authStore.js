import { create } from "zustand";
import API from "../api/clientApi";

// Utility function to manage localStorage operations
const storage = {
  get: (key) => localStorage.getItem(key),
  set: (key, value) => localStorage.setItem(key, value),
  remove: (key) => localStorage.removeItem(key),
  clear: () => localStorage.clear(),
};

const useAuthStore = create((set) => ({
  isAuthenticated: !!storage.get("auth_token"),
  user: {
    id: storage.get("user_id"),
    name: storage.get("user_name"),
    role: storage.get("role"),
  },

  // Login function
  login: async (email, password) => {
    const response = await API.post("/auth/login", { email, password });

    // Save to localStorage
    const { token, id, name, role } = response.data;
    storage.set("auth_token", token);
    storage.set("user_id", id);
    storage.set("user_name", name);
    storage.set("role", role);

    // Update Zustand state
    set({
      errors: null,
      isAuthenticated: true,
      user: { id, name, role },
    });

    return response;
  },

  // Logout function
  logout: () => {
    storage.clear(); // Clear localStorage
    set({
      isAuthenticated: false,
      user: { id: null, name: null, role: null },
      error: null, // Reset error state
    });
  },
}));

export default useAuthStore;
