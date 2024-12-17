import ShowTodoTask from "./ShowTodoTask";
export default function TodoListFooter() {
  return (
    <div className="flex justify-between text-xs sm:text-sm p-4 text-black/50">
      <p>5 items left</p>
      {/* <ShowTodoTask className="sm:hidden"></ShowTodoTask> */}
      <button className="hover:text-black">Clear Completed</button>
    </div>
  );
}
