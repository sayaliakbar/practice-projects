import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  TextareaAutosize,
  Alert,
} from "@mui/material";
import { Done, Close } from "@mui/icons-material";
import useAuthStore from "../state/authStore";
import usePostStore from "../state/postStore";

import SettingButtons from "../components/SettingButtons";
import ShowLikes from "../components/ShowLikes";

import timeAgo from "../utils/timeAgo";
import { handleError } from "../utils/errorHandler";

const PostDetailsPage = () => {
  const { id } = useParams();

  const { fetchPost, setEdit, edit, updatePost, post } = usePostStore();
  // const [post, setPost] = useState(null);
  const { user } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const response = await fetchPost(id);

        setNewContent(response.data.content);
        fetchPost(id);
      } catch (err) {
        handleError(err, setErrors);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, []);

  const handleEditPost = async () => {
    setEdit(true);
    if (newContent === post.content) return;
    try {
      setNewContent(newContent.trim());
      await updatePost(id, { content: newContent });
    } catch (err) {
      handleError(err, setErrors);
    }
  };

  return loading ? (
    <div className="flex justify-center items-center h-64">
      <CircularProgress />
    </div>
  ) : (
    <div className="p-4 bg-gray-100 min-h-[calc(100vh-64px)]">
      {errors.length > 0 && (
        <div className="p-4 w-full bg-gray-100 min-h-[calc(100vh-64px)]">
          <Alert
            severity="error"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {errors.map((error, index) => (
              <Typography key={index} variant="body1">
                {error.message}
              </Typography>
            ))}
          </Alert>
        </div>
      )}

      <Card className="shadow-md max-w-2xl mx-auto">
        <CardContent>
          <TextareaAutosize
            disabled={edit}
            className={`w-full bg-white ${
              !edit && "border-2  border-gray-300 rounded-md p-2 "
            }`}
            type="text"
            onChange={(e) => setNewContent(e.target.value)}
            value={newContent}
          />
          <Typography variant="body2" color="textSecondary">
            By: {post.author.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" className="mt-4">
            Posted: {timeAgo(post.createdAt)}
          </Typography>
          {post.likes.length > 0 && <ShowLikes likes={post.likes} />}

          <div>
            {user &&
            (user._id === post.author.id || user.role === "admin") &&
            edit ? (
              <SettingButtons post={post} user={user} renderPosts={fetchPost} />
            ) : (
              <div className="flex justify-end gap-2">
                <Done
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  onClick={handleEditPost}
                />
                <Close
                  sx={{ "&:hover": { cursor: "pointer" } }}
                  onClick={() => {
                    setNewContent(post.content);
                    setEdit(true);
                  }}
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostDetailsPage;
