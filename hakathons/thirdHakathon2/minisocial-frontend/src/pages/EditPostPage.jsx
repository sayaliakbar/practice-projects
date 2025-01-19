import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

import postStore from "../state/postStore";
import { handleError } from "../utils/errorHandler";

const EditPostPage = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { fetchPost, updatePost, post } = postStore();

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);
        await fetchPost(id);
        setContent(post.content);
      } catch (err) {
        handleError(err, setErrors);
      } finally {
        setLoading(false);
      }
    };

    fetchPostData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updatePost(id, { content });
      setTimeout(() => {
        navigate(`/posts/${id}`);
      }, 1000);
    } catch (err) {
      handleError(err, setErrors);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <div className="flex justify-center items-center h-64">
      <CircularProgress />
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
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
            disabled={loading || !content.trim()}
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
