import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const QuestionDetailPage = () => {
  const { id } = useParams(); // Get the question ID from the URL
  const [question, setQuestion] = useState(null); // Store question details
  const [newAnswer, setNewAnswer] = useState(""); // Track new answer input
  const [replyInputs, setReplyInputs] = useState({}); // Track reply inputs for each answer

  // Fetch question details
  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch(`/questions.json`);
      const data = await response.json();
      const selectedQuestion = data.find((q) => q.id === parseInt(id));
      setQuestion({
        ...selectedQuestion,
        description: "This is a detailed description of the question.",
        answers: [
          {
            id: 1,
            content: "This is an example answer.",
            replies: ["Great answer!", "Can you elaborate?"],
          },
        ],
      });
    };

    fetchQuestion();
  }, [id]);

  // Handle new answer submission
  const handleAddAnswer = () => {
    if (newAnswer.trim() !== "") {
      const updatedAnswers = [
        ...question.answers,
        { id: question.answers.length + 1, content: newAnswer, replies: [] },
      ];
      setQuestion({ ...question, answers: updatedAnswers });
      setNewAnswer("");
    }
  };

  // Handle reply submission
  const handleAddReply = (answerId) => {
    const reply = replyInputs[answerId];
    if (reply?.trim() !== "") {
      const updatedAnswers = question.answers.map((answer) => {
        if (answer.id === answerId) {
          return {
            ...answer,
            replies: [...answer.replies, reply],
          };
        }
        return answer;
      });
      setQuestion({ ...question, answers: updatedAnswers });
      setReplyInputs({ ...replyInputs, [answerId]: "" });
    }
  };

  // Handle reply input change
  const handleReplyInputChange = (answerId, value) => {
    setReplyInputs({ ...replyInputs, [answerId]: value });
  };

  if (!question) return <p className="text-center">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Question Details */}
      <div className="container mx-auto px-6 py-6 bg-white shadow rounded-lg">
        <h1 className="text-3xl font-bold text-indigo-700">{question.title}</h1>
        <p className="text-gray-600 mt-2">{question.description}</p>
        <p className="text-sm text-gray-500 mt-4">
          Tags: {question.tags.join(", ")}
        </p>
        <p className="text-sm text-gray-400">Posted: {question.timestamp}</p>
      </div>

      {/* Answers Section */}
      <div className="container mx-auto px-6 py-6">
        <h2 className="text-2xl font-semibold text-indigo-600">Answers</h2>
        <div className="mt-4 space-y-4">
          {question.answers.map((answer) => (
            <div key={answer.id} className="p-4 bg-white shadow rounded-lg">
              <p className="text-gray-700">{answer.content}</p>

              {/* Replies */}
              <div className="mt-2 ml-4 text-sm text-gray-600">
                <p>Replies:</p>
                <ul className="list-disc list-inside">
                  {answer.replies.map((reply, index) => (
                    <li key={index}>{reply}</li>
                  ))}
                </ul>
              </div>

              {/* Add Reply Form */}
              <div className="mt-4 ml-4">
                <textarea
                  value={replyInputs[answer.id] || ""}
                  onChange={(e) =>
                    handleReplyInputChange(answer.id, e.target.value)
                  }
                  placeholder="Write your reply..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                ></textarea>
                <button
                  onClick={() => handleAddReply(answer.id)}
                  className="mt-2 px-3 py-1 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500"
                >
                  Submit Reply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Answer Form */}
      <div className="container mx-auto px-6 py-6 bg-white shadow rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700">Your Answer</h3>
        <textarea
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="Write your answer here..."
          className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <button
          onClick={handleAddAnswer}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500"
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
