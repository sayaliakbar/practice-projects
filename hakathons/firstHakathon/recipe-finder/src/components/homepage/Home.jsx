import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initRecipes } from "../../init";

import Navbar from "./Navbar";

// Main component for the Home page
const Home = () => {
  // State hooks for managing data
  const [recipes, setRecipes] = useState([]); // List of all recipes
  const [searchQuery, setSearchQuery] = useState(""); // Search input value
  const [currentPage, setCurrentPage] = useState(1); // Current page in pagination
  const [favourite, setFavourite] = useState([]); // List of favourite recipe IDs
  const [showingFavourites, setShowingFavourites] = useState(false); // Flag to show only favourites

  const recipesPerPage = 8; // Number of recipes displayed per page
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Fetch initial recipes on component mount
  useEffect(() => {
    const getRecipes = async () => {
      try {
        setRecipes(initRecipes); // Load initial recipes from a static source
      } catch (error) {
        console.error("Failed to fetch recipes:", error); // Log error if fetching fails
      }
    };

    getRecipes();
  }, []);

  // Toggle a recipe's favourite status
  const updateFavourite = (id) => {
    setFavourite((prevFavourites) => {
      if (prevFavourites.includes(id)) {
        return prevFavourites.filter((favId) => favId !== id); // Remove from favourites
      } else {
        return [...prevFavourites, id]; // Add to favourites
      }
    });
  };

  // Toggle between showing all recipes and only favourites
  const toggleFavouritesView = () => {
    setShowingFavourites((prevState) => !prevState);
    if (!showingFavourites) {
      // Show only favourites
      setRecipes((prevRecipes) =>
        prevRecipes.filter((recipe) => favourite.includes(recipe.id))
      );
    } else {
      // Reset to all recipes
      setRecipes(initRecipes);
    }
  };

  // Update the search query and reset to the first page
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate indices for paginated recipes
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  // Calculate total number of pages based on filtered recipes
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  // Change the current page, ensuring it's within valid range
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {/* Navigation bar component */}
      <Navbar
        onHomeClick={() => setRecipes(initRecipes)} // Reset to initial recipes on Home click
        showFavourites={toggleFavouritesView} // Toggle favourites view
      />
      <div className="p-4">
        <header className="mb-4">
          {/* Search bar */}
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search recipes..."
              className="w-1/2 p-2 border rounded-lg shadow-sm"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </header>

        {/* Recipe grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentRecipes.length > 0 ? (
            currentRecipes.map((recipe) => (
              <div
                key={recipe.id} // Unique key for each recipe
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer flex flex-col gap-4 justify-between"
              >
                <div>
                  {/* Recipe image and details */}
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <h2 className="text-lg font-bold mt-2">{recipe.title}</h2>
                  <p className="text-sm text-gray-600">
                    Cooking Time: {recipe.readyInMinutes} mins
                  </p>
                  <p className="text-sm text-gray-600">
                    Health Score: {recipe.healthScore || "Unknown"}
                  </p>
                </div>

                {/* Buttons for viewing and updating favourites */}
                <div className="flex justify-between">
                  <button
                    className="bg-slate-900 py-1 px-2 rounded-lg text-white"
                    onClick={() => navigate(`/recipe/${recipe.id}`)} // Navigate to recipe details
                  >
                    View
                  </button>
                  <button
                    className={`py-1 px-2 rounded-lg text-white ${
                      favourite.includes(recipe.id)
                        ? "bg-red-500" // Red for favourite
                        : "bg-blue-500" // Blue for non-favourite
                    }`}
                    onClick={() => updateFavourite(recipe.id)}
                  >
                    {favourite.includes(recipe.id)
                      ? "Unfavourite" // Show "Unfavourite" if already in favourites
                      : "Favourite"}{" "}
                    {/* Show "Favourite" if not in favourites */}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">
              No recipes found.
            </p>
          )}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-6">
          {currentRecipes.length > 0 &&
            filteredRecipes.length > recipesPerPage && ( // Show pagination only if needed
              <>
                <button
                  onClick={() => handlePageChange(currentPage - 1)} // Go to previous page
                  disabled={currentPage === 1} // Disable if on the first page
                  className="px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index} // Unique key for each page
                    onClick={() => handlePageChange(index + 1)} // Go to selected page
                    className={`px-4 py-2 mx-1 rounded ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white" // Highlight current page
                        : "bg-gray-300 hover:bg-gray-400" // Default style for other pages
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)} // Go to next page
                  disabled={currentPage === totalPages || totalPages === 0} // Disable if on the last page or no pages exist
                  className="px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                  Next
                </button>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Home;
