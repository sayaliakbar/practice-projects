import { create } from "zustand";
import api from "../api/clientApi";

const useUserStore = create((set, get) => ({
  users: [],
  user: null,
  search: "",
  sortBy: "createdAt",
  sortOrder: "desc",
  limit: 10,
  page: 1,
  totalPages: 0,
  currentPage: 0,

  // State Setters
  setLimit: (limit) => get().updateAndFetch({ limit }),
  setCurrentPage: (page) => get().updateAndFetch({ page }),
  setSortBy: (sortBy) => get().updateAndFetch({ sortBy }),
  setSortOrder: (sortOrder) => get().updateAndFetch({ sortOrder }),
  // Generic updater to avoid duplication
  updateAndFetch: (updates) => {
    set(updates);
    get().fetchUsers();
  },
  // Fetch all users

  fetchUsers: async () => {
    const { search, sortBy, sortOrder, limit, page } = get();

    const response = await api.get(
      `/users/?search=${search}&sortOrder=${sortOrder}&sortBy=${sortBy}&limit=${limit}&page=${page}`
    );
    set({
      users: response.data.users,
      totalPages: response.data.pagination.totalPages,
      currentPage: response.data.pagination.currentPage,
    });
  },
  // Filter users by search
  filterUsers: async (search) => {
    get().updateAndFetch({ search, page: 1 });
  },

  fetchUser: async (userId) => {
    const response = await api.get(`/users/${userId}`);
    set({ user: response.data });
  },

  updateUser: async (userId, updates) => {
    await api.patch(`/users/${userId}`, updates);
  },

  deleteUser: async (userId) => {
    await api.delete(`/users/${userId}`);
  },
}));

export default useUserStore;
