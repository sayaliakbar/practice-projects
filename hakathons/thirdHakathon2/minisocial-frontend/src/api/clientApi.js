import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/",
});

// Add auth token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
