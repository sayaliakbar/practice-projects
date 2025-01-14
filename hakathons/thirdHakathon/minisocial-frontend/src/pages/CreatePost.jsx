import useStore from "../store/useStore";
import apiClient from "../api/apiClient";

const CreatePost = () => {
  const addPost = useStore((state) => state.addPost);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;

    try {
      const response = await apiClient.post("api/posts", { content });
      console.log(response.data);
      addPost(response.data);
      e.target.reset();
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <div>
      <h1 className="font-bold">Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="content">Content:</label>
          <br />
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
