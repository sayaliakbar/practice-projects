import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

import useAuthStore from "../state/authStore";

import postStore from "../state/postStore";
import { handleError } from "../utils/errorHandler";
import timeAgo from "../utils/timeAgo";

import Pagination from "../components/Pagination";
import SortBy from "../components/SortBy";
import SortOrder from "../components/SortOrder";
import PostPerPage from "../components/PostPerPage";
import ShowLikes from "../components/ShowLikes";
import SettingButtons from "../components/SettingButtons";

const PostsPage = () => {
  const { user } = useAuthStore();
  const { posts, fetchPosts, totalPages } = postStore();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        await fetchPosts();
      } catch (err) {
        handleError(err, setErrors);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <div className="p-4 bg-gray-100 flex flex-col items-center min-h-[calc(100vh-64px)] relative">
      {user.name && (
        <Typography variant="h4" className="mb-4 text-center">
          Welcome {user.name}!
        </Typography>
      )}

      {errors.length <= 0 && (
        <div className="w-full flex justify-between items-center mb-4">
          <SortBy />

          <SortOrder />
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:grid-cols-4 w-full mb-24">
          {posts.length === 0 && !errors.length ? (
            <Alert className="text-center" severity="info">
              No posts found.
            </Alert>
          ) : (
            errors.length != 0 &&
            errors.map((error) => (
              <Alert
                key={error.message}
                sx={{ display: "flex", justifyContent: "center" }}
                severity="error"
              >
                {error.message}
              </Alert>
            ))
          )}

          {posts.length != 0 &&
            posts.map((post) => (
              <Card key={post._id} className="shadow-md ">
                <CardContent className="flex flex-col justify-between h-full">
                  <div className="">
                    <Typography variant="h6" className="break">
                      {post.content.slice(0, 50)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      By: {post.author.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Posted: {timeAgo(post.createdAt)}
                    </Typography>
                    {post.likes.length > 0 && (
                      <ShowLikes likes={post.likes}></ShowLikes>
                    )}
                  </div>
                  <SettingButtons
                    post={post}
                    user={user}
                    renderPosts={fetchPosts}
                  />
                </CardContent>
              </Card>
            ))}
        </div>
      )}

      {errors.length <= 0 && (
        <div className=" flex absolute bottom-4 ">
          <PostPerPage />
          {totalPages > 1 && <Pagination />}
        </div>
      )}
    </div>
  );
};

export default PostsPage;
