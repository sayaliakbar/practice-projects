import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "../state/authStore";

//eslint-disable-next-line
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
};

export default PrivateRoute;
