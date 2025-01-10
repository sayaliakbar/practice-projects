import { useEffect, useState } from "react";
import api from "../api/api";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1; // Number of items per page
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("auth_token") // Check token on initial load
  );

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await api.get("/tags");
        setTags(response.data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  const handleTagSelection = (tagId) => {
    setSelectedTags(
      (prevSelected) =>
        prevSelected.includes(tagId)
          ? prevSelected.filter((id) => id !== tagId) // Remove if already selected
          : [...prevSelected, tagId] // Add if not selected
    );
  };

  useEffect(() => {
    const fetchQuestions = async (page) => {
      setLoading(true);
      try {
        const response = await api.get(
          `/questions?page=${page}&limit=${itemsPerPage}`
        );
        setQuestions(response.data.questions);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions(currentPage);
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.get(
        `/questions?search=${searchQuery}&page=1&limit=${itemsPerPage}`
      );
      setQuestions(response.data.questions);
      setTotalPages(response.data.totalPages);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error searching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFilteredQuestions = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `/questions?tags=${selectedTags.join(",")}&page=1&limit=${itemsPerPage}`
      );
      setQuestions(response.data.questions);
      setTotalPages(response.data.totalPages);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error fetching filtered questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    // Implement logout logic here
    localStorage.removeItem("auth_token");
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Knowledge Forum Questions</h1>
      <div className="mb-4">
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Login
          </button>
        )}
      </div>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search questions by title or description..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Search
        </button>
      </form>
      {/* Tag Filtering */}
      <div className="mb-4">
        <p className="font-semibold">Filter by Tags:</p>
        <div className="grid grid-cols-3 gap-2">
          {tags.map((tag) => (
            <label
              key={tag._id}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedTags.includes(tag._id)}
                onChange={() => handleTagSelection(tag._id)}
              />
              <span>{tag.name}</span>
            </label>
          ))}
        </div>
        <button
          onClick={fetchFilteredQuestions}
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Apply Filters
        </button>
      </div>
      {loading ? (
        <p>Loading questions...</p>
      ) : (
        <>
          {questions.length === 0 && <p>No questions found.</p>}
          <div className="space-y-4">
            {questions.map((question) => (
              <div key={question._id} className="p-4 bg-white shadow rounded">
                <h2 className="text-xl font-semibold">
                  <Link to={`/questions/${question._id}`}>
                    {question.title}
                  </Link>
                </h2>
                <p className="text-gray-600">{question.description}</p>
                <p className="text-sm text-gray-500">
                  Tags: {question.tags.map((tag) => tag.name).join(", ")}
                </p>
                <p className="text-sm text-gray-500">
                  Author: {question.author.name}
                </p>

                <p className="text-sm text-gray-500">
                  {question.createdAt === question.updatedAt
                    ? `Posted: ${new Date(question.updatedAt).toLocaleString()}`
                    : `Updated: ${new Date(
                        question.createdAt
                      ).toLocaleString()}`}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}

          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 ${
                    currentPage === index + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200"
                  } rounded`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
