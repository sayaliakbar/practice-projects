import { create } from "zustand";
import api from "../api/clientApi";
import { handleError } from "../utils/errorHandler";

const useUserStore = create((set, get) => ({
  users: [],
  user: null,
  errors: [],
  loading: false,
  search: "",
  sortBy: "createdAt",
  sortOrder: "desc",
  limit: 10,
  page: 1,
  totalPages: 0,
  currentPage: 0,

  // State Setters
  setErrors: (errors) => set({ errors }),
  setLoading: (loading) => set({ loading }),
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
    const { search, sortBy, sortOrder, limit, page, setErrors, setLoading } =
      get();
    try {
      setLoading(true);
      const response = await api.get(
        `/users/?search=${search}&sortOrder=${sortOrder}&sortBy=${sortBy}&limit=${limit}&page=${page}`
      );
      set({
        users: response.data.users,
        totalPages: response.data.pagination.totalPages,
        currentPage: response.data.pagination.currentPage,
      });
    } catch (err) {
      handleError(err, setErrors);
    } finally {
      setLoading(false);
    }
  },
  // Filter users by search
  filterUsers: async (search) => {
    get().updateAndFetch({ search, page: 1 });
  },

  // Fetch users by user
  fetchMyUsers: async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      set({ users: response.data.users });
    } catch (err) {
      handleError(err, setErrors);
    }
  },
}));

export default useUserStore;
