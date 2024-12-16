export default function CreateTodo() {
  return (
    <div className="w-full relative">
      <input
        className="w-full py-4 px-16 rounded-lg"
        type="text"
        placeholder="Create a new todo..."
      />
      <div className="p-3 rounded-full border border-black/25 absolute top-4 left-5"></div>
    </div>
  );
}
