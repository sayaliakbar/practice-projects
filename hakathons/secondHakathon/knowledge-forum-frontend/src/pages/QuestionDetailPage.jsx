import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import QuestionDetails from "../components/questionDetailComponents/QuestionDetails";
import AnswersList from "../components/questionDetailComponents/AnswerList";
import AddAnswerForm from "../components/questionDetailComponents/AddAnswerForm";
import useAuthStore from "../state/authStore";

const QuestionDetailPage = () => {
  const { id } = useParams();

  const { isAuthenticated } = useAuthStore();

  const navigate = useNavigate();

  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await api.get(`/questions/${id}`);
        setQuestion(response.data);
        setAnswers(response.data.answers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching question:", error);
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [id]);

  const deleteQuestion = async () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      await api.delete(`/questions/${id}`);

      navigate("/");
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {loading ? (
        <p>Loading question...</p>
      ) : question ? (
        <>
          <QuestionDetails
            question={question}
            deleteQuestion={deleteQuestion}
            isAuthenticated={isAuthenticated}
          />
          <AnswersList
            answers={answers}
            setAnswers={setAnswers}
            isAuthenticated={isAuthenticated}
            navigate={navigate}
          />
          <AddAnswerForm
            questionId={id}
            answers={answers}
            setAnswers={setAnswers}
            isAuthenticated={isAuthenticated}
            navigate={navigate}
          />
        </>
      ) : (
        <p>Question not found.</p>
      )}
    </div>
  );
};

export default QuestionDetailPage;
