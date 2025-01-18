import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Button,
  Alert,
} from "@mui/material";
import useAuthStore from "../state/authStore";
import { useNavigate } from "react-router-dom";
import postStore from "../state/postStore";
import { handleError } from "../utils/errorHandler";

const MyPostsPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { user } = useAuthStore();
  const { errors, setErrors } = useState([]);
  const { posts, fetchMyPosts } = postStore();

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true); // Set loading state
      try {
        const response = await fetchMyPosts(user.id);
        console.log(response);
      } catch (err) {
        console.log(err.message);
        handleError(err, setErrors); // Handle errors
      } finally {
        setLoading(false); // Ensure loading is reset
      }
    };

    loadPosts();
  }, [fetchMyPosts, setErrors, user.id]); // Dependencies

  // const handleDeletePost = async () => {
  //   try {
  //     await API.delete(`/posts/${post._id}`);
  //     alert("Post deleted successfully.");
  //     // Add delete post logic here
  //   } catch (error) {
  //     console.error("Failed to delete post:", error);
  //   }
  // };

  return (
    <>
      {errors ? (
        <div className="p-4 bg-gray-100 min-h-screen">
          <Alert severity="error">
            <Typography variant="body1">{errors.message}</Typography>
          </Alert>
        </div>
      ) : (
        <div className="p-4 bg-gray-100 min-h-screen">
          <Typography variant="h4" className="mb-4 text-center">
            My Posts
          </Typography>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <CircularProgress />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center">
              <Typography variant="h6">
                You have not created any posts yet.
              </Typography>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {posts.map((post) => (
                <Card key={post._id} className="shadow-md">
                  <CardContent>
                    <Typography variant="h6">{post.content}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Created At: {new Date(post.createdAt).toLocaleString()}
                    </Typography>
                    <div className="flex justify-between mt-4">
                      <Button
                        variant="text"
                        className="text-blue-500 mt-2"
                        onClick={() => navigate(`/posts/${post._id}`)}
                      >
                        View Details
                      </Button>

                      <Button variant="text">Delete</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyPostsPage;
