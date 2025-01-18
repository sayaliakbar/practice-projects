import useUserStore from "../store/useUserStore";
import { useEffect } from "react";
import apiClient from "../api/apiClient";

const Users = () => {
  const { users, setUsers, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <button
              value={user._id}
              // onClick={handleUserDelete}
              className="bg-red-500 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
