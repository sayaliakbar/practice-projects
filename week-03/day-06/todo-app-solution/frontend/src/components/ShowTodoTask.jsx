export default function ShowTodoTask() {
  return (
    <div className="flex gap-4 font-bold text-black/50 bg-white p-4 w-full justify-center rounded-lg shadow-2xl text-sm">
      <button className="text-primary-brightBlue hover:text-black">All</button>
      <button className="hover:text-black">Active</button>
      <button className="hover:text-black">Completed</button>
    </div>
  );
}
