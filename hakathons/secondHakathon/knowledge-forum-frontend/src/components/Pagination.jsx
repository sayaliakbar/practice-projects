//eslint-disable-next-line
const Pagination = ({ postsPerPage, length }) => {
  const paginationNumbers = [];

  console.log(Math.ceil(length / postsPerPage));
  if (length > postsPerPage) {
    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
      paginationNumbers.push(i);
    }

    return (
      <div className="pagination">
        {paginationNumbers.map((pageNumber) => (
          <button key={pageNumber}>{pageNumber}</button>
        ))}
      </div>
    );
  } else {
    return null;
  }
};
export default Pagination;
