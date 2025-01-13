import { useState } from "react";

const ReplyForm = ({ answerId, handleAddReply }) => {
  const [newReply, setNewReply] = useState("");

  return (
    <form
      onSubmit={(e) => handleAddReply(e, answerId, newReply)}
      className="mt-2"
    >
      <textarea
        value={newReply}
        onChange={(e) => setNewReply(e.target.value)}
        placeholder="Add your reply..."
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Submit Reply
      </button>
    </form>
  );
};

export default ReplyForm;
