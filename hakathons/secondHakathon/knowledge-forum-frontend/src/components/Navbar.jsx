import { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import useAuthStore from "../state/authStore";
import useDebounce from "../hooks/useDebounce";

//eslint-disable-next-line
const Navbar = ({ onSearch }) => {
  const { isAuthenticated, logout } = useAuthStore();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    onSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, onSearch]);

  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold">
        Knowledge Forum
      </Link>

      {/* Show Search Bar Only on Home Page */}
      {location.pathname === "/" && (
        <input
          type="text"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded w-1/3"
        />
      )}

      <div className="space-x-4">
        <button
          onClick={() => navigate("/create-question")}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Ask
        </button>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
