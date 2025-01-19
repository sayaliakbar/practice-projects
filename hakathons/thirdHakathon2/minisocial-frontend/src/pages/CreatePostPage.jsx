import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import postStore from "../state/postStore";
import { handleError } from "../utils/errorHandler";

const CreatePostPage = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const { createPost } = postStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await createPost({ content });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      handleError(err, setErrors);
    } finally {
      setSuccess(true);
      setContent("");
      setErrors(null);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
      {errors &&
        errors.map((error, index) => (
          <Alert severity="error" key={index} className="mb-2">
            {error.msg}
          </Alert>
        ))}
      {success && (
        <Alert severity="success" className="mb-2">
          Post created successfully!
        </Alert>
      )}
      <Box
        className="p-8 bg-white shadow-md rounded-lg flex flex-col gap-4"
        sx={{ width: "100%", maxWidth: 400 }}
      >
        <Typography variant="h4" className="text-center mb-4">
          Create Post
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            label="Post Content"
            variant="outlined"
            fullWidth
            className="mb-6"
            multiline
            rows={4}
            onChange={(e) => {
              setContent(e.target.value);
              setErrors(null); // Clear errors on input change
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="bg-blue-500 hover:bg-blue-600 text-white"
            disabled={loading || !content.trim()} // Disable when loading or content is empty
            startIcon={
              loading && <CircularProgress size={20} color="inherit" />
            } // Add loading icon
          >
            {loading ? "Creating..." : "Create Post"}
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default CreatePostPage;
