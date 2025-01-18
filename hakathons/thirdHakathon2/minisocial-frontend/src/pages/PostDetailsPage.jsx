import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import API from "../api/clientApi";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../state/authStore";

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { user } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.get(`/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <CircularProgress />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-64">
        <Typography variant="h6">Post not found.</Typography>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Card className="shadow-md max-w-2xl mx-auto">
        <CardContent>
          <Typography variant="h5" className="mb-2">
            {post.content}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            By: {post.author.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="mt-4">
            Created At: {new Date(post.createdAt).toLocaleString()}
          </Typography>
          <div className="mt-4 flex justify-between">
            {user && (user._id === post.author.id || user.role === "admin") && (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  className="mt-4"
                  onClick={() => navigate(`/posts/${id}/edit`)}
                >
                  Edit Post
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  className="mt-4"
                  onClick={async () => {
                    try {
                      await API.delete(`/posts/${id}`);
                      alert("Post deleted successfully!");
                      navigate("/");
                    } catch (error) {
                      console.error("Failed to delete post:", error);
                      alert("Error deleting post. Please try again.");
                    }
                  }}
                >
                  Delete Post
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostDetailsPage;
