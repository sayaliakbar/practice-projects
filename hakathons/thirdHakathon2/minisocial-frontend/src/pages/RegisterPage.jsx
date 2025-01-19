import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import API from "../api/clientApi";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/auth/register", { name, email, password });
      setErrors(null);
      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
        setLoading(false);
      }, 1000);
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
        setLoading(false);
        return;
      } else if (err.response.data.message) {
        setErrors([{ message: err.response.data.message }]);
        setLoading(false);
        return;
      }
      setErrors([{ message: "Failed to login. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 h-[calc(100vh-64px)]">
      {errors &&
        errors.map((error, index) => (
          <Alert severity="error" key={index} className="mb-2">
            {error.message}
          </Alert>
        ))}
      {success && (
        <Alert severity="success" className="mb-2">
          Account created successfully!
        </Alert>
      )}
      <Box
        className="p-8 bg-white shadow-md rounded-lg flex flex-col gap-4"
        sx={{ width: "100%", maxWidth: 400 }}
      >
        <Typography variant="h4" className="text-center mb-4">
          Register
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            className="mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className="bg-blue-500 hover:bg-blue-600 text-white"
            disabled={
              loading || !email.trim() || !password.trim() || !name.trim()
            } // Disable when loading or content is empty
            startIcon={
              loading && <CircularProgress size={20} color="inherit" />
            } // Add loading icon
          >
            {loading ? "Creating..." : "Create Post"}
          </Button>
        </form>
        <Typography
          variant="body2"
          className="text-center mt-4 text-blue-500 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </Typography>
      </Box>
    </div>
  );
};

export default RegisterPage;
