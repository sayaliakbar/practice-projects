import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../state/authStore";

import {
  Menu,
  Home,
  Article,
  Add,
  Login,
  Logout,
  PersonAdd,
  PeopleAlt,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function TemporaryDrawer() {
  const { isAuthenticated, logout, user } = useAuthStore();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding onClick={() => navigate("/")}>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        {isAuthenticated && (
          <>
            <ListItem disablePadding onClick={() => navigate("/my-posts")}>
              <ListItemButton>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="My Posts" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => navigate("/create-post")}>
              <ListItemButton>
                <ListItemIcon>
                  <Add />
                </ListItemIcon>
                <ListItemText primary="Create Post" />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
      {user.role === "admin" && (
        <>
          <ListItem disablePadding onClick={() => navigate("/users")}>
            <ListItemButton>
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
        </>
      )}

      <Divider />
      <List>
        {!isAuthenticated && (
          <>
            <ListItem disablePadding onClick={() => navigate("/register")}>
              <ListItemButton>
                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => navigate("/login")}>
              <ListItemButton>
                <ListItemIcon>
                  <Login />
                </ListItemIcon>
                <ListItemText primary="Sign In" />
              </ListItemButton>
            </ListItem>
          </>
        )}

        {isAuthenticated && (
          <ListItem disablePadding onClick={logout}>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ ml: 2 }}
        onClick={toggleDrawer(true)}
      >
        <Menu />
      </IconButton>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
