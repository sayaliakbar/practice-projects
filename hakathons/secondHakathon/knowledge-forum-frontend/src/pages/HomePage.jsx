import { useEffect } from "react";
import useQuestionsStore from "../state/questionStore";
import QuestionCard from "../components/homepageComponents/QuestionCard";
import Pagination from "../components/homepageComponents/Pagination";
import TagFilter from "../components/homepageComponents/TagFilter";

const HomePage = () => {
  const {
    questions,
    tags,
    currentPage,
    totalPages,
    loading,
    searchQuery,
    selectedTags,
    fetchQuestions,
    fetchTags,
    sortBy,
    setCurrentPage,
    setSelectedTags,
    setSortBy,
    order,
    setOrder,
  } = useQuestionsStore();

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  useEffect(() => {
    fetchQuestions();
  }, [currentPage, searchQuery, selectedTags, sortBy, order, fetchQuestions]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchQuestions(page);
  };

  const handleTagSelect = (tagId) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Knowledge Forum Questions</h1>
      <TagFilter
        tags={tags}
        selectedTags={selectedTags}
        onTagSelect={handleTagSelect}
      />
      {loading ? (
        <p>Loading questions...</p>
      ) : (
        <>
          {questions.length === 0 ? (
            <p>No questions found.</p>
          ) : (
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between">
                <p className="mr-2">{questions.length} Questions</p>
                <div className="flex items-center space-x-4">
                  <label className="cursor-pointer" htmlFor="sortBy">
                    Sort
                  </label>
                  <select
                    name="sortBy"
                    id="sortBy"
                    className="p-2 border border-gray-300 rounded cursor-pointer"
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                    }}
                  >
                    <option value="createdAt">Recent</option>
                    <option value="title">Alphabatical</option>
                  </select>
                  <label className="cursor-pointer mr-2" htmlFor="order">
                    Order
                  </label>
                  <select
                    name="order"
                    id="order"
                    className="p-2 border border-gray-300 rounded cursor-pointer"
                    value={order}
                    onChange={(e) => {
                      setOrder(e.target.value);
                    }}
                  >
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                  </select>
                </div>
              </div>
              {/* {Sort the questions by the date they were created  } */}

              <div className="space-y-4">
                {questions.map((question) => (
                  <QuestionCard key={question._id} question={question} />
                ))}
              </div>
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
