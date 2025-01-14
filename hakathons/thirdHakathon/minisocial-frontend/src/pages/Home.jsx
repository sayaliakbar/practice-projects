import useStore from "../store/useStore";
import authStore from "../store/authStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/apiClient";

const Home = () => {
  const navigate = useNavigate();

  const posts = useStore((state) => state.posts);
  const setPosts = useStore((state) => state.setPosts);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await apiClient.get("api/posts");
        setPosts(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      }
    }
    fetchPosts();
  }, [setPosts]);

  const likePost = useStore((state) => state.likePost);

  const handlelike = async (e) => {
    if (!authStore.getState().isAuthenticated) {
      navigate("/login");
      return;
    }

    const postId = e.target.value;

    // Get the authentication token from the store (adjust according to your actual store structure)
    const token = authStore.getState().token;

    try {
      await apiClient.post(
        `api/posts/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Attach the token as a Bearer token
          },
        }
      );
    } catch (err) {
      console.error("Failed to like post:", err);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <p>{post.content}</p>
          <p>Likes: {post.likes.length}</p>
          <p>Posted By: {post.user.name}</p>
          <p>Posted At: {post.createdAt}</p>
          <button
            key={post._id}
            value={post._id}
            onClick={handlelike}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Like
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
