import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import useAuthStore from "../state/authStore";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuthStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex-0">
      <AppBar position="static">
        <Toolbar>
          <Typography
            className="cursor-pointer "
            onClick={() => navigate("/")}
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            MiniSocial
          </Typography>

          {isAuthenticated ? (
            <>
              <Button color="inherit" onClick={() => navigate("/create-post")}>
                Create Post
              </Button>

              {user.role === "admin" && (
                <Button color="inherit" onClick={() => navigate("/users")}>
                  Users
                </Button>
              )}

              <Button color="inherit" onClick={() => navigate("/my-posts")}>
                My Posts
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
