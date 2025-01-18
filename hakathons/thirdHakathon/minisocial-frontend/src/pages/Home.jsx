import usePostStore from "../store/usePostStore";
import authStore from "../store/authStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const {
    posts,
    fetchPosts,
    currentPage,
    totalPages,
    totalPosts,
    loading,
    error,
    setCurrentPage,
    deletePost,
  } = usePostStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPosts();
    }, 300); // Debounce fetchPosts
    return () => clearTimeout(timer);
  }, [fetchPosts, currentPage]);

  const handlePostLike = async (e) => {
    if (!authStore.getState().isAuthenticated) {
      navigate("/login");
      return;
    }

    const postId = e.target.value;
    try {
      // Call store action for liking post
    } catch (err) {
      console.error("Failed to like post:", err);
    }
  };

  const handlePostDelete = async (e) => {
    const postId = e.target.value;
    try {
      await deletePost(postId); // Delegate deletion logic to store
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {loading ? (
        <p>Loading posts...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <>
          <h1>Total Posts: {totalPosts}</h1>
          {posts.map((post) => (
            <div key={post._id} className="mb-4 p-4 bg-white shadow">
              <p>{post.content}</p>
              <p>Likes: {post.likes.length}</p>
              <p>Posted By: {post.author.name}</p>
              <p>Posted At: {post.createdAt}</p>
              <button
                value={post._id}
                onClick={handlePostLike}
                className="bg-blue-600 text-white px-4 rounded"
              >
                Like
              </button>
              <button
                value={post._id}
                onClick={handlePostDelete}
                className="bg-red-600 text-white px-4 rounded"
              >
                Delete
              </button>
            </div>
          ))}
          <div className="mt-4 flex justify-between">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
