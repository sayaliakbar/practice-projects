/* eslint-disable react/prop-types */
const QuestionDetails = ({ question }) => {
  return (
    <div className="bg-white p-6 shadow rounded">
      <h1 className="text-2xl font-bold">{question.title}</h1>
      <p className="text-gray-700 mt-2">{question.description}</p>
      <p className="text-sm text-gray-500">
        Author: {question.author?.name ?? "Unknown"}
      </p>
      <p className="text-sm text-gray-500">
        {question.createdAt === question.updatedAt
          ? `Posted: ${new Date(question.updatedAt).toLocaleString()}`
          : `Updated: ${new Date(question.createdAt).toLocaleString()}`}
      </p>
      <p className="text-sm text-gray-500">
        Tags: {question.tags?.map((tag) => tag.name).join(", ") || "No tags"}
      </p>
    </div>
  );
};

export default QuestionDetails;
