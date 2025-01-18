import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import API from "../api/clientApi";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get("/users");
        setUsers(response.data.users);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response.data.message);
        console.error("Failed to fetch users:", err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Typography variant="h4" className="mb-4 text-center">
        Users
      </Typography>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <CircularProgress />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {error && (
            <Alert severity="warning" className="text-center">
              {error}
            </Alert>
          )}
          {users.map((user) => (
            <Card key={user._id} className="shadow-md">
              <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Email: {user.email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Role: {user.role}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersPage;
