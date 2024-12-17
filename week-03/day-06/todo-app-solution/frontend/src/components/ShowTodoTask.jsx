export default function ShowTodoTask() {
  return (
    <div className="flex gap-4 font-bold text-black/50 bg-white p-4 w-full justify-center rounded-lg shadow-2xl text-sm dark:bg-gray-800">
      <button className="text-primary-brightBlue hover:text-black dark:hover:text-white ">
        All
      </button>
      <button className="hover:text-black dark:hover:text-white dark:text-white/50">
        Active
      </button>
      <button className="hover:text-black dark:hover:text-white dark:text-white/50">
        Completed
      </button>
    </div>
  );
}
