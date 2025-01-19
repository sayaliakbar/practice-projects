import { useNavigate, useLocation } from "react-router-dom";
import {
  Visibility,
  Delete,
  Edit,
  FavoriteBorder,
  Favorite,
} from "@mui/icons-material";

import postStore from "../state/postStore";
import { handleError } from "../utils/errorHandler";

//eslint-disable-next-line
const SettingButtons = ({ post, user, renderPosts }) => {
  const {
    deletePost,
    setErrors,
    fetchPosts,
    fetchMyPosts,
    likePost,
    fetchPost,
    setEdit,
  } = postStore();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLikePost = async (postId) => {
    try {
      await likePost(postId);
    } catch (err) {
      handleError(err, setErrors);
    } finally {
      if (renderPosts === fetchPosts) {
        fetchPosts();
      } else if (renderPosts === fetchMyPosts) {
        fetchMyPosts(user.id);
      } else if (renderPosts === fetchPost) {
        fetchPost(postId);
      }
    }
  };
  const handlePostDetails = (id) => {
    setEdit(true);
    navigate(`/posts/${id}`);
  };

  const handleEditPost = async (id) => {
    if (location.pathname != `/posts/${id}`) {
      navigate(`/posts/${id}/`);
    }
    setEdit(false);
  };

  const handleDeletePost = async (id) => {
    try {
      if (location.pathname === `/posts/${id}`) {
        await deletePost(id);
      } else {
        await deletePost(id);
      }
    } catch (err) {
      handleError(err, setErrors);
    } finally {
      if (renderPosts === fetchPosts) {
        fetchPosts();
      } else if (renderPosts === fetchMyPosts) {
        fetchMyPosts(user.id);
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="flex justify-end gap-2">
      {post.likes.map((like) => like._id).includes(user.id) ? (
        <Favorite
          style={{ cursor: "pointer", hover: "opacity: 0.5" }}
          color="primary"
          onClick={() => handleLikePost(post._id)}
        />
      ) : (
        <FavoriteBorder
          style={{ cursor: "pointer", hover: "opacity: 0.5" }}
          color="primary"
          onClick={() => handleLikePost(post._id)}
        />
      )}

      {location.pathname != `/posts/${post._id}` && (
        <Visibility
          style={{ cursor: "pointer", hover: "opacity: 0.5" }}
          color="primary"
          onClick={() => handlePostDetails(post._id)}
        />
      )}
      {user && (user.id === post.author._id || user.role === "admin") && (
        <Edit
          style={{ cursor: "pointer", hover: "opacity: 0.5" }}
          color="primary"
          onClick={() => handleEditPost(post._id)}
        />
      )}
      {user && (user.id === post.author._id || user.role === "admin") && (
        <Delete
          style={{ cursor: "pointer", hover: "opacity: 0.5" }}
          color="error"
          onClick={() => handleDeletePost(post._id)}
        />
      )}
    </div>
  );
};

export default SettingButtons;
