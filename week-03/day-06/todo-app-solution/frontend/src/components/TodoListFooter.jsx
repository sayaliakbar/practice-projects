export default function TodoListFooter() {
  return (
    <div className="flex justify-between text-sm p-4 text-black/50">
      <p>5 items left</p>
      <div className="flex gap-4 font-bold ">
        <button className="text-primary-brightBlue hover:text-black">
          All
        </button>
        <button className="hover:text-black">Active</button>
        <button className="hover:text-black">Completed</button>
      </div>
      <button className="hover:text-black">Clear Completed</button>
    </div>
  );
}
