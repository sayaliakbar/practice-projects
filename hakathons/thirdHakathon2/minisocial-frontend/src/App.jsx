import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Users from "./pages/UsersPage";
import Posts from "./pages/PostsPage";
import PostDetails from "./pages/PostDetailsPage";
import CreatePostPage from "./pages/CreatePostPage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import MyPostsPage from "./pages/MyPostsPage";
import EditPostPage from "./pages/EditPostPage";

const App = () => {
  return (
    <div className="App flex flex-col justify-center min-h-screen">
      <Router>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/my-posts"
              element={
                <PrivateRoute>
                  <MyPostsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <Users />
                </PrivateRoute>
              }
            />
            <Route
              path="/posts/:id"
              element={
                <PrivateRoute>
                  <PostDetails />
                </PrivateRoute>
              }
            />

            <Route
              path="/create-post"
              element={
                <PrivateRoute>
                  <CreatePostPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/posts/:id/edit"
              element={
                <PrivateRoute>
                  <EditPostPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
