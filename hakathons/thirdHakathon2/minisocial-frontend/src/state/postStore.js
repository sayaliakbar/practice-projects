import { create } from "zustand";
import api from "../api/clientApi";

const usePostStore = create((set, get) => ({
  posts: [],
  myPosts: [],
  post: null,
  search: "",
  sortBy: "createdAt",
  sortOrder: "desc",
  limit: 10,
  page: 1,
  totalPages: 0,
  currentPage: 0,
  edit: true,

  // State Setters
  setEdit: (edit) => get().updateAndFetch({ edit }),
  setLimit: (limit) => get().updateAndFetch({ limit }),
  setCurrentPage: (page) => get().updateAndFetch({ page }),
  setSortBy: (sortBy) => get().updateAndFetch({ sortBy }),
  setSortOrder: (sortOrder) => get().updateAndFetch({ sortOrder }),

  // Generic updater to avoid duplication
  updateAndFetch: (updates) => {
    set(updates);
    get().fetchPosts();
  },

  // Fetch all posts
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
  },

  likePost: async (postId) => {
    await api.post(`/posts/${postId}/like`);
  },

  // Filter posts by search
  filterPosts: async (search) => {
    get().updateAndFetch({ search, page: 1 });
  },

  // Fetch posts by user
  fetchMyPosts: async (userId) => {
    const response = await api.get(`/posts/user/${userId}`);
    set({ myPosts: response.data });
  },

  // Fetch single post by ID
  fetchPost: async (postId) => {
    const response = await api.get(`/posts/${postId}`);

    set({ post: response.data });
    return response;
  },

  // Create a new post
  createPost: async (data) => {
    const response = await api.post("/posts", data);
    get().fetchPosts(); // Refresh posts after creation
    return response;
  },

  // Update an existing post
  updatePost: async (postId, data) => {
    const response = await api.put(`/posts/${postId}`, data);

    set({ post: response.data });

    get().fetchPost(postId);

    return response;
  },

  // Delete a post
  deletePost: async (postId) => {
    await api.delete(`/posts/${postId}`);
    // Refresh posts after deletion
  },
}));

export default usePostStore;
