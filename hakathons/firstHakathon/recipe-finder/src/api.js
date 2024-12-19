import axios from "axios";

// Create an Axios instance with a predefined configuration
const apiClient = axios.create({
  baseURL: "https://api.spoonacular.com/", // Base URL for all API requests
  headers: {
    "Content-Type": "application/json", // Set content type for JSON payloads
  },
});

export default apiClient; // Export the Axios instance for reuse

// Function to fetch a random list of recipes
export const fetchRecipes = async () => {
  try {
    // Make a GET request to the "random recipes" endpoint
    const response = await apiClient.get("/recipes/random/", {
      params: {
        number: "20", // Number of random recipes to fetch
        apiKey: "c6b036fda8a64e37b20cd90048647c43", // API key for authentication
      },
    });
    // Return the array of recipes from the API response
    return response.data.recipes; // Adjusted to match expected response structure
  } catch (error) {
    // Log and rethrow the error for error handling in the caller function
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
