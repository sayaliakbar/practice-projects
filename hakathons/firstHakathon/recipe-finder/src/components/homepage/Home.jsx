import { useEffect, useState } from "react";
// import { fetchRecipes } from "../../api";
import { useNavigate } from "react-router-dom";
import { initRecipes } from "../../init";

import Navbar from "./Navbar";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8;
  const navigate = useNavigate();

  let favourite = [];
  const updateFavourite = (id) => {
    if (!favourite.includes(id)) {
      favourite.push(id);
      console.log(favourite);
    }
  };

  const showFavourites = () => {
    if (favourite) {
      const filteredRecipes = recipes.filter((recipe) =>
        favourite.includes(recipe.id)
      );
      setRecipes(filteredRecipes);
      console.log(filteredRecipes);
    }
  };

  useEffect(() => {
    const getRecipes = async () => {
      try {
        console.log(initRecipes);
        // const data = await fetchRecipes();
        // console.log(data);
        setRecipes(initRecipes);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };

    getRecipes();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Navbar showFavourites={showFavourites}></Navbar>
      <div className="p-4">
        <header className="mb-4">
          <div className="flex justify-center mb-4">
            <input
              type="text"
              placeholder="Search recipies..."
              className="w-1/2 p-2 border rounded-lg shadow-sm"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentRecipes.length > 0 ? (
            currentRecipes.map((recipe) => (
              <div
                key={recipe.id}
                // Navigate to recipe detail page
                className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer flex flex-col gap-4 justify-between"
              >
                <div>
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

                <div className="flex justify-between">
                  <button
                    className="bg-slate-900 py-1 px-2 rounded-lg text-white"
                    onClick={() => navigate(`/recipe/${recipe.id}`)}
                  >
                    View
                  </button>
                  <button
                    className="bg-blue-500 py-1 px-2 rounded-lg text-white"
                    onClick={() => updateFavourite(recipe.id)}
                  >
                    Favourite
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

        <div className="flex justify-center mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-4 py-2 mx-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <button onClick={showFavourites}> Show</button>
    </div>
  );
};

export default Home;
