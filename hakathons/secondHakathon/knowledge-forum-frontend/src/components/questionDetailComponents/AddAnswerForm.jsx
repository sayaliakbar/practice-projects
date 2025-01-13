/* eslint-disable react/prop-types */
import { useState } from "react";

import api from "../../api/api";

const AddAnswerForm = ({
  questionId,
  answers,
  setAnswers,
  isAuthenticated,
  navigate,
}) => {
  const [newAnswer, setNewAnswer] = useState("");
  const handleAddAnswer = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      const response = await api.post(`/answers/${questionId}`, {
        questionId,
        content: newAnswer,
      });
      console.log(response.data);

      setAnswers([...answers, response.data]);
      setNewAnswer("");
    } catch (error) {
      console.error("Error adding answer:", error);
    }
  };

  return (
    <form onSubmit={handleAddAnswer} className="mt-4">
      <textarea
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        placeholder="Add your answer..."
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Submit Answer
      </button>
    </form>
  );
};

export default AddAnswerForm;
