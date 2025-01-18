import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuthStore();

  const navigate = useNavigate();

  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const createPost = () => {
    if (isAuthenticated) {
      navigate("/create-post");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="bg-white shadow p-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold">
        MiniSocial
      </Link>

      {/* Show Search Bar Only on Home Page */}

      <div className="space-x-4 flex items-center">
        {isAuthenticated && user.role === "admin" && (
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded"
            onClick={() => navigate("/users")}
          >
            Users
          </button>
        )}
        <button
          onClick={createPost}
          className="px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Create Post
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
          <Link
            to="/profile"
            className="text-blue-600 font-semibold text-lg hover:underline  "
          >
            {localStorage.getItem("user_name").split(" ")[0]}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
