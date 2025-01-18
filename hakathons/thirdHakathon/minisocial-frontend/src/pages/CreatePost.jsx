import usePostStore from "../store/usePostStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { createPost, error } = usePostStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value.trim();
    const success = await createPost(content);
    if (success) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1 className="font-bold">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="content">Content:</label>
          <br />

          {error && <p className="text-red-500 mb-2">{error}</p>}
          <textarea className="border w-full" id="content" name="content" />
        </div>
        <button className="bg-blue-600 text-white px-2" type="submit">
          Create Post
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
