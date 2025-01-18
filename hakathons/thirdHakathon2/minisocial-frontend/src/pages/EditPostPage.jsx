import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import API from "../api/clientApi";

const EditPostPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.get(`/posts/${id}`);
        setContent(response.data.content);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/posts/${id}`, { content });
      alert("Post updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Failed to update post:", error);
      alert("Error updating post. Please try again.");
    }
  };

  return loading ? (
    <div className="flex justify-center items-center h-64">
      <CircularProgress />
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box
        className="p-8 bg-white shadow-md rounded-lg flex flex-col gap-4"
        sx={{ width: "100%", maxWidth: 400 }}
      >
        <Typography variant="h4" className="text-center mb-4">
          Edit Post
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            label="Post Content"
            variant="outlined"
            fullWidth
            className="mb-6"
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Update Post
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default EditPostPage;
