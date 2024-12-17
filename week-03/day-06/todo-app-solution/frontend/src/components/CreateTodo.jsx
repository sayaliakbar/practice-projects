export default function CreateTodo() {
  return (
    <div className="w-full relative mt-4 sm:mt-0">
      <input
        className="leading-none w-full py-4 px-11 sm:px-16 rounded-lg text-xs sm:text-body"
        type="text"
        placeholder="Create a new todo..."
      />
      <div className="p-2 sm:p-3 rounded-full border border-black/25 absolute top-3 left-4 sm:left-5"></div>
    </div>
  );
}
