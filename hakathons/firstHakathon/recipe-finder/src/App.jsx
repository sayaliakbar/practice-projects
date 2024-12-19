import { Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import RecipeDetail from "./components/recipe-detail-page/RecipeDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id/" element={<RecipeDetail />} />
    </Routes>
  );
};

export default App;
