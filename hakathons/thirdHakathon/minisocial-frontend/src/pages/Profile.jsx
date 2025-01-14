import useStore from "../store/useStore";
import apiClient from "../api/apiClient";
import { useEffect } from "react";

const Profile = () => {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await apiClient.get(
          `api/users/${localStorage.getItem("user_id")}`
        );
        setUser(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    }
    fetchUser();
  }, [setUser]);

  return (
    <div>
      <h1 className="font-bold">Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h2 className="font-bold">Posts</h2>
      {user.posts &&
        user.posts.map((post) => (
          <div key={post._id}>
            <p>{post.content}</p>
            <p>Likes: {post.likes.length}</p>
          </div>
        ))}
    </div>
  );
};

export default Profile;
