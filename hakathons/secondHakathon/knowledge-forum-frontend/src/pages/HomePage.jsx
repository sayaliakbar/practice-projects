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
    selectedTags,
    fetchQuestions,
    fetchTags,
    setCurrentPage,
    setSelectedTags,
  } = useQuestionsStore();

  useEffect(() => {
    fetchTags();
    fetchQuestions(currentPage);
  }, [currentPage, fetchQuestions, fetchTags]);

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
            <div className="space-y-4">
              {questions.map((question) => (
                <QuestionCard key={question._id} question={question} />
              ))}
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
