import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../state/authStore";
import api from "../api/api"; // Replace with your API module if necessary

const LoginPage = () => {
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
      const response = await api.post("/auth/login", { email, password });
      const { token } = response.data;

      // Save the token and update Zustand store
      login(token);
      navigate("/"); // Redirect to homepage after login
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-6 shadow rounded w-80">
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
          className="w-full bg-indigo-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
