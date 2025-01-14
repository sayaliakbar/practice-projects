import { create } from "zustand";

const useStore = create((set) => ({
  // User State
  user: null,
  setUser: (user) => set({ user }),

  // Posts State
  posts: [],
  setPosts: (posts) => set({ posts }),

  // Add a new post
  addPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),

  // Like a post by ID
  likePost: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      ),
    })),
}));
export default useStore;
