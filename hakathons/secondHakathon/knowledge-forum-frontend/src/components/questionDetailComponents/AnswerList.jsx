/* eslint-disable react/prop-types */
import ReplyForm from "./ReplyForm";
import api from "../../api/api";

const AnswersList = ({ answers, setAnswers, isAuthenticated, navigate }) => {
  const hanldDeleteAnswer = async (e) => {
    const answerId = e.target.value;

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    try {
      await api.delete(`/answers/${answerId}`);

      setAnswers((prevAnswers) =>
        prevAnswers.filter((answer) => answer._id !== answerId)
      );
    } catch (error) {
      console.error("Error deleting answer:", error);
    }
  };

  const handleAddReply = async (e, answerId, newReply, setNewReply) => {
    e.preventDefault();

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      const response = await api.post(`/reply/${answerId}/replies`, {
        content: newReply,
      });

      setAnswers((prevAnswers) =>
        prevAnswers.map((answer) => {
          if (answer._id === answerId) {
            return {
              ...answer,
              replies: [...answer.replies, response.data],
            };
          }
          return answer;
        })
      );
      setNewReply("");
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  const handldeDeleteReply = async (e) => {
    const replyId = e.target.value;

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    try {
      await api.delete(`/reply/${replyId}`);

      setAnswers((prevAnswers) =>
        prevAnswers.map((answer) => ({
          ...answer,
          replies: answer.replies.filter((reply) => reply._id !== replyId),
        }))
      );
    } catch (error) {
      console.error("Error deleting reply:", error);
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
              By {answer.author.name ?? "Unknown"}
            </p>
            {isAuthenticated &&
              answer.author._id === localStorage.getItem("user_id") && (
                <button
                  onClick={hanldDeleteAnswer}
                  className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
                  key={answer._id}
                  value={answer._id}
                >
                  Delete Answer
                </button>
              )}

            {answer.replies?.length > 0 && (
              <div className="mt-4 pl-4 border-l border-gray-300">
                <h3 className="text-sm font-medium">Replies:</h3>
                {answer.replies.map((reply) => (
                  <div key={reply._id} className="mt-2">
                    <p>{reply.content}</p>
                    <p className="text-sm text-gray-500">
                      By {reply.author?.name ?? "Unknown"}
                    </p>
                    {isAuthenticated &&
                      reply.author._id === localStorage.getItem("user_id") && (
                        <button
                          key={reply._id}
                          value={reply._id}
                          onClick={handldeDeleteReply}
                          className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
                        >
                          Delete Reply
                        </button>
                      )}
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
