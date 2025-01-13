import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import QuestionDetailPage from "./pages/QuestionDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";
import CreateQuestionPage from "./pages/CreateQuestionPage";

const App = () => {
  const handleSearch = (query) => {
    console.log(query);
  };
  return (
    <ErrorBoundary>
      <Router>
        <Navbar onSearch={handleSearch} />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/questions/:id" element={<QuestionDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create-question" element={<CreateQuestionPage />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
