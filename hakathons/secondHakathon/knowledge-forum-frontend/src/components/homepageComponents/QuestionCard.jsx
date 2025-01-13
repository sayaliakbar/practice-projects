import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const QuestionCard = ({ question }) => (
  <div className="p-4 bg-white shadow rounded">
    <h2 className="text-xl font-semibold">
      <Link to={`/questions/${question._id}`}>{question.title}</Link>
    </h2>
    <p className="text-gray-600">{question.description}</p>
    <p className="text-sm text-gray-500">
      Tags: {question.tags.map((tag) => tag.name).join(", ")}
    </p>
    <p className="text-sm text-gray-500">Author: {question.author.name}</p>
    <p className="text-sm text-gray-500">
      {question.createdAt === question.updatedAt
        ? `Posted: ${new Date(question.updatedAt).toLocaleString()}`
        : `Updated: ${new Date(question.createdAt).toLocaleString()}`}
    </p>
  </div>
);

export default QuestionCard;
