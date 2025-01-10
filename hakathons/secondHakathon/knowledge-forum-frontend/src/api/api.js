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

export default api;
