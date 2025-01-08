import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

function Homepage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const [page, setPage] = useState(1);
  const [questionsPerPage, setQuestionsPerPage] = useState(5);

  const lastIndex = page * questionsPerPage;
  const firstIndex = lastIndex - questionsPerPage;

  useEffect(() => {
    fetchQuestions().then((data) => {
      if (data) {
        setQuestions(data);
        setFilteredQuestions(data);
        setLoading(false);
      } else {
        console.log("No data found");
      }
    });
  }, []);

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();

    const filtered = questions.filter(
      (question) =>
        question.title.toLowerCase().includes(searchQuery) ||
        question.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
    );

    setFilteredQuestions(filtered);
  };

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await fetch("/questions.json");
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <div className="container mx-auto p-4">
        {loading && <p>Loading questions....</p>}

        {filteredQuestions.length === 0 && <p>No questions found</p>}
        {filteredQuestions
          .slice(firstIndex, lastIndex)
          .map((filteredQuestion, index) => (
            <div key={filteredQuestion.id}>
              <h2 className="text-xl font-semibold text-indigo-700">
                <Link to={`/question/${filteredQuestion.id}`}>
                  {firstIndex + index + 1}. {filteredQuestion.title}
                </Link>
              </h2>
              <p>
                Tags: &nbsp;
                {filteredQuestion.tags.map((tag) => (
                  <span key={tag}>{tag} &nbsp;</span>
                ))}
              </p>
              <p>Number of answers:{filteredQuestion.answers}</p>
              <p>{filteredQuestion.timestamp}</p>
            </div>
          ))}
      </div>

      <Pagination
        postsPerPage={questionsPerPage}
        length={filteredQuestions.length}
        setPage={setPage}
        currentPage={page}
      />
    </>
  );
}

export default Homepage;
