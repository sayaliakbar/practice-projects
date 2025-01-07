import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

function Homepage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const page = 0;
  let limit = 5;

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
  let count = 1;

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <div className="container mx-auto p-4">
        {loading && <p>Loading questions....</p>}

        {filteredQuestions.map((filteredQuestion) => (
          <div key={filteredQuestion.id}>
            <h2 className="font-bold">
              {count++}. {filteredQuestion.title}
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

      <Pagination postsPerPage={limit} length={filteredQuestions.length} />
    </>
  );
}

export default Homepage;
