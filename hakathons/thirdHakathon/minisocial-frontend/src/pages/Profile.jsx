import useUserStore from "../store/useUserStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">
          Profile
        </h1>
        <div className="space-y-2">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-800">Name:</span>{" "}
            {user.name}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold text-gray-800">Email:</span>{" "}
            {user.email}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold text-gray-800">Role:</span>{" "}
            {user.role}
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mt-6 mb-4">
          Posts
        </h2>
        {user.posts && user.posts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {user.posts.map((post) => (
              <div
                key={post._id}
                className="bg-gray-50 border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <p className="text-gray-800 font-medium mb-2">{post.content}</p>
                <div className="flex justify-between text-gray-600 text-sm">
                  <p>
                    <span className="font-semibold">Likes:</span>{" "}
                    {post.likes.length}
                  </p>
                  <Link
                    to={`/posts/${post._id}`}
                    className="text-indigo-600 hover:underline focus:outline-none"
                  >
                    View Post
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">No posts to display.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
