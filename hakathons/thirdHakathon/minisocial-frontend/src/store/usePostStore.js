import { create } from "zustand";
import api from "../api/apiClient";

const usePostStore = create((set, get) => ({
  posts: [],
  currentPage: 1,
  totalPages: 1,
  totalPosts: 0,
  searchQuery: "",
  loading: false,
  sortBy: "createdAt",
  order: "asc",
  error: null,

  // Generic setter for state
  setState: (key, value) => set({ [key]: value }),

  // Fetch posts with params
  fetchPosts: async (params = {}) => {
    const { currentPage, searchQuery, sortBy, order } = { ...get(), ...params };
    set({ loading: true, error: null });
    try {
      const response = await api.get(
        `/api/posts?page=${currentPage}&search=${searchQuery}&sortBy=${sortBy}&order=${order}`
      );
      const { posts, pagination } = response.data;
      set({
        posts,
        totalPosts: pagination.totalPosts,
        totalPages: pagination.totalPages,
        currentPage,
      });

      return response.data;
    } catch (err) {
      set({ error: err.response?.data?.message || "Error fetching posts" });
    } finally {
      set({ loading: false });
    }
  },

  // Fetch post by ID
  fetchPostById: async (id) => {
    try {
      const response = await api.get(`/api/posts/${id}`);
      return response.data;
    } catch (err) {
      set({
        error: err.response?.data?.message || "Error fetching post by ID",
      });
    }
  },

  // Create post with optimistic updates
  createPost: async (content) => {
    const tempPost = { id: Date.now(), content };
    set((state) => ({ posts: [tempPost, ...state.posts] }));
    try {
      const response = await api.post("/api/posts", { content });
      return response.data;
    } catch (err) {
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== tempPost.id),
        error: err.response?.data?.errors?.[0]?.msg || "Error creating post",
      }));
    }
  },
}));

export default usePostStore;
