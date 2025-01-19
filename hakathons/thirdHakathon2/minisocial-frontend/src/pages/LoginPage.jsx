import { useState } from "react";
import { handleError } from "../utils/errorHandler";
import {
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import useAuthStore from "../state/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuthStore();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    login(email, password)
      .then(() => {
        setErrors(null);
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((err) => {
        handleError(err, setErrors);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col bg-gray-100 h-[calc(100vh-64px)]">
        <div>
          <Stack sx={{ width: "100%" }} spacing={2}>
            {errors && (
              <>
                {errors.map((error, index) => (
                  <Alert severity="error" key={index}>
                    {error.message}
                  </Alert>
                ))}
              </>
            )}
          </Stack>
        </div>
        <Box className="p-8 bg-white shadow-md rounded-lg flex flex-col gap-4 w-full max-w-md">
          <Typography variant="h4" className="text-center mb-4">
            Login
          </Typography>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className="mb-4"
              value={email}
              onChange={(e) => {
                setErrors(null);
                setEmail(e.target.value);
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              className="mb-6"
              value={password}
              onChange={(e) => {
                setErrors(null);
                setPassword(e.target.value);
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="bg-blue-500 hover:bg-blue-600 text-white"
              disabled={loading || !email.trim() || !password.trim()} // Disable when loading or content is empty
              startIcon={
                loading && <CircularProgress size={20} color="inherit" />
              } // Add loading icon
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          <Typography
            variant="body2"
            className="text-center mt-4 text-blue-500 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Don’t have an account? Register
          </Typography>
        </Box>
      </div>
    </>
  );
};

export default LoginPage;
