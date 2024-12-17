import TodoListFooter from "./TodoListFooter";
import TodoListTask from "./TodoListTask";
export default function TodoList() {
  return (
    <div className="w-full bg-white shadow-2xl rounded-lg overflow-hidden dark:bg-gray-800">
      <ul className="overflow-y-auto max-h-64 w-full  flex flex-col">
        <TodoListTask></TodoListTask>
      </ul>
      <TodoListFooter />
    </div>
  );
}
