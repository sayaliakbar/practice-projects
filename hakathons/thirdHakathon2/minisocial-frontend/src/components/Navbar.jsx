import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import DrawerComponent from "./DrawerComponent";
import useAuthStore from "../state/authStore";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuthStore();
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <div className="flex items-center space-x-2 w-full sm:w-fit justify-between">
          <Typography
            className="cursor-pointer w-fit"
            onClick={() => navigate("/")}
            variant="h6"
          >
            MiniSocial
          </Typography>
          {location.pathname === "/" && <SearchBar />}
          <div className="sm:hidden flex items-center">
            <DrawerComponent />
          </div>
        </div>

        {isAuthenticated ? (
          <>
            <div className="hidden sm:flex">
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
            </div>
          </>
        ) : (
          <div className="hidden sm:flex">
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
