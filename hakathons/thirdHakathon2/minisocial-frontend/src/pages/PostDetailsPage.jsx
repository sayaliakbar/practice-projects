import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import useAuthStore from "../state/authStore";
import usePostStore from "../state/postStore";

import SettingButtons from "../components/SettingButtons";
import ShowLikes from "../components/ShowLikes";

import timeAgo from "../utils/timeAgo";
import { handleError } from "../utils/errorHandler";

const PostDetailsPage = () => {
  const { id } = useParams();

  const { post, fetchPost } = usePostStore();
  const { user } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        await fetchPost(id);
      } catch (err) {
        handleError(err, setErrors);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-64">
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  // if (!post) {
  //   return (
  //     <div className="flex justify-center items-center h-64">
  //       <Typography variant="h6">Post not found.</Typography>
  //     </div>
  //   );
  // }

  return loading ? (
    <div className="flex justify-center items-center h-64">
      <CircularProgress />
    </div>
  ) : (
    <div className="p-4 bg-gray-100 min-h-[calc(100vh-64px)]">
      <Card className="shadow-md max-w-2xl mx-auto">
        <CardContent>
          <Typography variant="h5" className="mb-2">
            {post.content}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            By: {post.author.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="mt-4">
            Posted: {timeAgo(post.createdAt)}
          </Typography>
          <ShowLikes likes={post.likes} />
          <div>
            {user && (user._id === post.author.id || user.role === "admin") && (
              <SettingButtons post={post} user={user} renderPosts={fetchPost} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostDetailsPage;
