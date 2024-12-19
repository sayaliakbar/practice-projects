import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../api";
import Navbar from "../homepage/Navbar";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await apiClient.get(`recipes/${id}/information/`, {
          params: { apiKey: "c6b036fda8a64e37b20cd90048647c43" },
        });
        setRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="p-4">
        <h1 className="text-3xl font-bold">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-fit   h-64  my-4"
        />
        <p>
          <strong>Cooking Time:</strong> {recipe.readyInMinutes} mins
        </p>
        <p>
          <strong>Difficulty:</strong> {recipe.difficulty || "Unknown"}
        </p>
        <h2 className="text-2xl mt-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h2 className="text-2xl mt-4">Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetail;
