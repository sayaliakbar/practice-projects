import { create } from "zustand";

import api from "../api/clientApi";

const usePostStore = create((set, get) => ({
  posts: [],
  error: null,
  search: "",
  sortBy: "createdAt",
  sortOrder: "desc",
  limit: 9,
  page: 1,
  totalPages: 0,
  currentPage: 0,
  setCurrentPage: (page) => {
    set({ page });
    get().fetchPosts();
  },
  setSortBy: (sortBy) => {
    set({ sortBy });
    get().fetchPosts();
  },
  setSortOrder: (sortOrder) => {
    set({ sortOrder });
    get().fetchPosts();
  },

  fetchPosts: async () => {
    const { search, sortBy, sortOrder, limit, page } = get();
    const response = await api.get(
      `/posts/?search=${search}&sortOrder=${sortOrder}&sortBy=${sortBy}&limit=${limit}&page=${page}`
    );

    set({
      posts: response.data.posts,
      totalPages: response.data.pagination.totalPages,
      currentPage: response.data.pagination.currentPage,
    });

    return response;
  },

  filterPosts: async (search) => {
    set({ search, page: 1 });
    await get().fetchPosts();
    return get().posts;
  },

  fetchMyPosts: async (userId) => {
    const response = await api.get(`/posts/user/${userId}`);
    set({ posts: response.data });
    return response;
  },

  fetchPost: async (postId) => {
    try {
      const response = await api.get(`/posts/${postId}`);
      set({ post: response.data, loading: false });
    } catch (error) {
      set({ error, loading: false });
    }
  },

  createPost: async (data) => {
    const response = await api.post("/posts", data);
    return response;
  },

  updatePost: async (postId, data) => {
    try {
      await api.put(`/posts/${postId}`, data);
    } catch (error) {
      set({ error });
    }
  },

  deletePost: async (postId) => {
    const response = await api.delete(`/posts/${postId}`);
    return response;
  },

  clearError: () => set({ error: null }),
}));

export default usePostStore;
