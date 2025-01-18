import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import apiClient from "../api/apiClient";
import useErrorHandler from "../hooks/errorHandler";

const Login = () => {
  const { handleError } = useErrorHandler();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Send login request to the backend
      const response = await apiClient.post("api/auth/login", {
        email,
        password,
      });

      const { token, id, name, role } = response.data;

      // Save the token and update Zustand store
      login(token, id, name, role);
      navigate("/"); // Redirect to homepage after login
    } catch (err) {
      setError(handleError(err));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        noValidate
        onSubmit={handleLogin}
        className="bg-white p-6 shadow rounded w-80"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border mb-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 mb-2 text-white p-2 rounded"
        >
          Login
        </button>{" "}
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-red-600 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Login;
