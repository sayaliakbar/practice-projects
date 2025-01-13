import axios from "axios";

// Base API URL from Vercel backend deployment
const API_BASE_URL = "https://knowledge-forum-backend.vercel.app/api";

// Axios instance for API calls
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
