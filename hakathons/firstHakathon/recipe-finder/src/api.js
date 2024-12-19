import axios from "axios";

// Created an Axios instance with the base URL
const apiClient = axios.create({
  baseURL: "https://api.spoonacular.com/", // Base URL only
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

export const fetchRecipes = async () => {
  try {
    const response = await apiClient.get("/recipes/random/", {
      params: {
        number: "20",
        apiKey: "c6b036fda8a64e37b20cd90048647c43", // Your API key
      },
    });
    return response.data.recipes; // Adjust based on API response
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
