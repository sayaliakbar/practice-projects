import { create } from "zustand";
import api from "../api/apiClient";

const useUserStore = create((set, get) => ({
  user: {},
  setUser: (data) => set({ user: data }),
  fetchUser: async () => {
    try {
      const response = await api.get(
        `api/users/${localStorage.getItem("user_id")}`
      );
      set({ user: response.data });
      console.log(response.data);
    } catch (err) {
      console.error("Failed to fetch user:", err);
    }
  },

  users: [],
  setUsers: (data) => set({ users: data }),
  fetchUsers: async () => {
    try {
      const response = await api.get("api/users");
      set({ users: response.data.users });
      console.log(response.data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  },
}));

export default useUserStore;
