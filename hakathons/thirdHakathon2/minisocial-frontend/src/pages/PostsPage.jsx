import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

import useAuthStore from "../state/authStore";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
import postStore from "../state/postStore";
import { handleError } from "../utils/errorHandler";
import Pagination from "../components/Pagination";
import SortBy from "../components/SortBy";
import SortOrder from "../components/SortOrder";

import { Visibility, Delete, Edit } from "@mui/icons-material";

const PostsPage = () => {
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const { user } = useAuthStore();
  const {
    posts,
    search,
    fetchPosts,
    deletePost,
    totalPages,
    currentPage,
    setCurrentPage,
    sortBy,
    sortOrder,
    setSortBy,
    setSortOrder,
  } = postStore();

  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        handleError(err, setErrors);
        setLoading(false);
      });
  }, [fetchPosts]);

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePostDetails = (id) => {
    navigate(`/posts/${id}`);
  };

  const handleEditPost = async (id) => {
    navigate(`/posts/${id}/edit`);
  };

  const handleDeletePost = async (id) => {
    await deletePost(id)
      .then(() => {
        fetchPosts();
      })
      .catch((err) => {
        handleError(err, setErrors);
      });
  };

  return (
    <div className="p-4 bg-gray-100 flex flex-col items-center">
      {user && (
        <Typography variant="h4" className="mb-4 text-center">
          Welcome, {user.name}
        </Typography>
      )}
      <div className="w-full flex justify-between items-center mb-4">
        <SortBy value={sortBy} onChange={handleSortChange} />
        <SearchBar value={search} />
        <SortOrder value={sortOrder} onChange={setSortOrder} />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {posts.length == 0 && !errors ? (
            <Alert className="text-center" severity="info">
              No posts found.
            </Alert>
          ) : (
            errors.length != 0 &&
            errors.map((error) => (
              <Alert
                key={error.message}
                className="text-center"
                severity="error"
              >
                {error.message}
              </Alert>
            ))
          )}

          {posts.length != 0 &&
            posts.map((post) => (
              <Card key={post._id} className="shadow-md">
                <CardContent>
                  <Typography variant="h6">{post.content}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    By: {post.author.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Posted: {post.createdAt}
                  </Typography>
                  <div className="flex justify-end mt-4 gap-2">
                    <Visibility
                      style={{ cursor: "pointer", hover: "opacity: 0.5" }}
                      color="primary"
                      onClick={() => handlePostDetails(post._id)}
                    />
                    {user &&
                      (user.id === post.author._id ||
                        user.role === "admin") && (
                        <Edit
                          style={{ cursor: "pointer", hover: "opacity: 0.5" }}
                          color="primary"
                          onClick={() => handleEditPost(post._id)}
                        />
                      )}
                    {user &&
                      (user.id === post.author._id ||
                        user.role === "admin") && (
                        <Delete
                          style={{ cursor: "pointer", hover: "opacity: 0.5" }}
                          color="error"
                          onClick={() => handleDeletePost(post._id)}
                        />
                      )}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PostsPage;
