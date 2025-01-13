import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/createQuestionPage.jsx/FormInput";
import TagSelector from "../components/TagSelector";

import api from "../api/api";

const CreateQuestionPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch available tags for selection
    const fetchTags = async () => {
      try {
        const response = await api.get("/tags");
        setTags(response.data);
      } catch (err) {
        console.error("Error fetching tags:", err);
      }
    };

    fetchTags();
  }, []);

  const handleTagSelect = (tagId) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    if (!description.trim()) {
      setError("Description is required.");
      return;
    }

    if (title.length > 100) {
      setError("Title cannot exceed 100 characters.");
      return;
    }

    if (description.length > 500) {
      setError("Description cannot exceed 500 characters.");
      return;
    }

    if (selectedTags.length === 0) {
      setError("Select at least one tag.");
      return;
    }

    try {
      await api.post(
        "/questions",
        {
          title,
          description,
          tags: selectedTags,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        }
      );

      navigate("/"); // Redirect to homepage after successful creation
    } catch (err) {
      console.error("Error creating question:", err);
      setError("Error creating question. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6">Create a New Question</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your question title"
        />
        <FormInput
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Provide additional details..."
        />
        <TagSelector
          tags={tags}
          selectedTags={selectedTags}
          onTagSelect={handleTagSelect}
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
        >
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default CreateQuestionPage;
