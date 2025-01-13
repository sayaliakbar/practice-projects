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

  const hanldeAskClick = () => {
    if (isAuthenticated) {
      navigate("/create-question");
    } else {
      navigate("/login");
    }
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

      <div className="space-x-4 flex items-center">
        <button
          onClick={hanldeAskClick}
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
        {isAuthenticated && (
          <h1>{localStorage.getItem("user_name").split(" ")[0]}</h1>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
