/* eslint-disable react/prop-types */

const Pagination = ({ currentPage, totalPages, onPageChange }) =>
  totalPages > 1 && (
    <div className="flex justify-center mt-6 space-x-2">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 ${
            currentPage === index + 1
              ? "bg-indigo-600 text-white"
              : "bg-gray-200"
          } rounded`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );

export default Pagination;
