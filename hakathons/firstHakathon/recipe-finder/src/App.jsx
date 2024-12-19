import React, { useEffect, useState } from "react";
import { fetchRecipes } from "./api";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes();
        console.log("Fetched recipes:", data); // Debugging log
        setRecipes(data);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };

    getRecipes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Recipe Finder</h1>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe.id}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-32 h-32 object-cover"
              />
              <p>{recipe.title}</p>
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default App;
