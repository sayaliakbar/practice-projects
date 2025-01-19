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
import ShowLikes from "../components/ShowLikes";
import SettingButtons from "../components/SettingButtons";
import { handleError } from "../utils/errorHandler";
import timeAgo from "../utils/timeAgo";

const MyPostsPage = () => {
  const { user } = useAuthStore();
  const { myPosts, fetchMyPosts } = postStore();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        await fetchMyPosts(user.id);
      } catch (err) {
        handleError(err, setErrors);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []); // Dependencies

  return (
    <>
      {errors.length > 0 ? (
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
      ) : (
        <div className="p-4 bg-gray-100 min-h-[calc(100vh-64px)]">
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: 2 }}
          >
            My Posts
          </Typography>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <CircularProgress />
            </div>
          ) : myPosts.length === 0 ? (
            <div className="text-center">
              <Typography variant="h6">
                You have not created any posts yet.
              </Typography>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {myPosts.map((myPost) => (
                <Card key={myPost._id} className="shadow-md">
                  <CardContent>
                    <Typography variant="h6">{myPost.content}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Posted: {timeAgo(myPost.createdAt)}
                    </Typography>
                    <ShowLikes likes={myPost.likes} />

                    <SettingButtons
                      post={myPost}
                      user={user}
                      renderPosts={fetchMyPosts}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyPostsPage;
