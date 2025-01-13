import { create } from "zustand";
import api from "../api/api";

const useQuestionsStore = create((set, get) => ({
  questions: [],
  tags: [],
  currentPage: 1,
  totalPages: 1,
  searchQuery: "",
  selectedTags: [],
  loading: false,
  sortBy: "createdAt",
  order: "asc",

  // Actions
  setQuestions: (data) => set({ questions: data }),
  setTags: (data) => set({ tags: data }),
  setLoading: (status) => set({ loading: status }),
  setTotalPages: (pages) => set({ totalPages: pages }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSortBy: (sortBy) => set({ sortBy }),
  setOrder: (order) => set({ order }),
  setSelectedTags: (tags) => set({ selectedTags: tags }),

  fetchQuestions: async () => {
    const { currentPage, searchQuery, selectedTags, sortBy, order } = get();
    set({ loading: true });
    try {
      const response = await api.get(
        `/questions/?search=${searchQuery}&tags=${selectedTags.join(
          ","
        )}&page=${currentPage}&limit=5&sortBy=${sortBy}&order=${order}`
      );
      set({
        questions: response.data.questions, // Verify key matches API response
        totalPages: response.data.totalPages, // Verify key matches API response
        currentPage,
      });
    } catch (error) {
      console.error("Error fetching questions:", error);
      // Optional: Add user feedback mechanism for errors
    } finally {
      set({ loading: false });
    }
  },

  fetchTags: async () => {
    try {
      const response = await api.get("/tags"); // Confirm endpoint is correct
      set({ tags: response.data }); // Verify key matches API response
    } catch (error) {
      console.error("Error fetching tags:", error);
      // Optional: Add user feedback mechanism for errors
    }
  },
}));

export default useQuestionsStore;
