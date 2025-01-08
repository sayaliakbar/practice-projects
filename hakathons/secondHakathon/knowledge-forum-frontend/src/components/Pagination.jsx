//eslint-disable-next-line
const Pagination = ({ postsPerPage, length, setPage, currentPage }) => {
  const paginationNumbers = [];

  if (length > postsPerPage) {
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
      paginationNumbers.push(i);
    }

    return (
      <div className="pagination flex justify-center items-center gap-4 mb-10">
        {paginationNumbers.map((pageNumber) => (
          <button
            onClick={() => {
              setPage(pageNumber);
            }}
            className={`px-4 ${
              currentPage === pageNumber ? "bg-slate-600" : "bg-slate-400"
            }`}
            key={pageNumber}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  } else {
    return null;
  }
};
export default Pagination;
