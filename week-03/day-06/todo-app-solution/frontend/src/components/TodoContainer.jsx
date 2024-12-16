import TodoHeader from "./TodoHeader";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
export default function TodoContainer() {
  return (
    <div className="w-[38%] absolute top-14 flex flex-col gap-4 items-center">
      <TodoHeader></TodoHeader>
      <CreateTodo></CreateTodo>
      <TodoList></TodoList>
      <p className="text-center m-10 text-black/50 text-sm ">
        Drag and drop to reorder list
      </p>
    </div>
  );
}
