/* eslint-disable react/prop-types */
import ReplyForm from "./ReplyForm";
import api from "../../api/api";

const AnswersList = ({ answers, setAnswers, isAuthenticated, navigate }) => {
  const handleAddReply = async (e, answerId, newReply) => {
    e.preventDefault();

    if (!isAuthenticated()) {
      navigate("/login");
      return;
    }

    if (!newReply.trim()) return;

    try {
      const response = await api.post(
        `/answers/${answerId}/replies/`,
        {
          content: newReply,
          author: localStorage.getItem("user_id"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        }
      );

      setAnswers((prevAnswers) =>
        prevAnswers.map((answer) =>
          answer._id === answerId
            ? { ...answer, replies: [...answer.replies, response.data] }
            : answer
        )
      );
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  return (
    <div className="bg-white p-6 shadow rounded">
      <h2 className="text-xl font-semibold">Answers</h2>
      {answers.length > 0 ? (
        answers.map((answer) => (
          <div key={answer._id} className="mt-4 p-4 bg-gray-50 rounded">
            <p>{answer.content}</p>
            <p className="text-sm text-gray-500">
              By {answer.author?.name ?? "Unknown"}
            </p>
            {answer.replies?.length > 0 && (
              <div className="mt-4 pl-4 border-l border-gray-300">
                <h3 className="text-sm font-medium">Replies:</h3>
                {answer.replies.map((reply) => (
                  <div key={reply._id} className="mt-2">
                    <p>{reply.content}</p>
                    <p className="text-sm text-gray-500">
                      By {reply.author?.name ?? "Unknown"}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <ReplyForm answerId={answer._id} handleAddReply={handleAddReply} />
          </div>
        ))
      ) : (
        <p>No answers yet.</p>
      )}
    </div>
  );
};

export default AnswersList;
