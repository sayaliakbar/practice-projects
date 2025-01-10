import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import QuestionDetails from "../components/questionDetailComponents/QuestionDetails";
import AnswersList from "../components/questionDetailComponents//AnswerList";
import AddAnswerForm from "../components/questionDetailComponents/AddAnswerForm";

const QuestionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchQuestionDetails = async () => {
      try {
        const response = await api.get(`/questions/${id}`, {
          signal: controller.signal,
        });
        setQuestion(response.data);
        setAnswers(response.data.answers || []);
      } catch (error) {
        console.error("Error fetching question details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestionDetails();
    return () => controller.abort();
  }, [id]);

  const isAuthenticated = () => !!localStorage.getItem("auth_token");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {loading ? (
        <p>Loading question...</p>
      ) : question ? (
        <>
          <QuestionDetails question={question} />
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
