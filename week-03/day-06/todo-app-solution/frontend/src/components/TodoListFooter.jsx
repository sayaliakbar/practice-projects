// import ShowTodoTask from "./ShowTodoTask";
export default function TodoListFooter() {
  return (
    <div className="flex justify-between text-xs sm:text-sm p-4 text-black/50 dark:text-white/50">
      <p>5 items left</p>
      {/* <ShowTodoTask className="sm:hidden"></ShowTodoTask> */}
      <button className="hover:text-black dark:hover:text-white">
        Clear Completed
      </button>
    </div>
  );
}
