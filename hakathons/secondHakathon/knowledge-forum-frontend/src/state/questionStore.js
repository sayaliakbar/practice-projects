import { create } from "zustand";
import api from "../api/api";

const useQuestionsStore = create((set) => ({
  questions: [],
  tags: [],
  currentPage: 1,
  totalPages: 1,
  searchQuery: "",
  selectedTags: [],
  loading: false,

  // Actions
  setQuestions: (data) => set({ questions: data }),
  setTags: (data) => set({ tags: data }),
  setLoading: (status) => set({ loading: status }),
  setTotalPages: (pages) => set({ totalPages: pages }),
  setCurrentPage: (page) => set({ currentPage: page }),

  fetchQuestions: async (page, query = "", tags = []) => {
    set({ loading: true });
    try {
      const response = await api.get(
        `/questions?page=${page}&limit=5&search=${query}&tags=${tags.join(",")}`
      );
      set({
        questions: response.data.questions,
        totalPages: response.data.totalPages,
        currentPage: page,
      });
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      set({ loading: false });
    }
  },
  fetchTags: async () => {
    try {
      const response = await api.get("/tags");
      set({ tags: response.data });
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  },
}));
export default useQuestionsStore;
