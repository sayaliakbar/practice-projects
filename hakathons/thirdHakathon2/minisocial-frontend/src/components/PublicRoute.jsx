import { Navigate } from "react-router-dom";
import useAuthStore from "../state/authStore";

//eslint-disable-next-line
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  // If the user is authenticated, redirect to the homepage or dashboard
  return isAuthenticated ? <Navigate to="/" replace /> : children;
};

export default PublicRoute;
