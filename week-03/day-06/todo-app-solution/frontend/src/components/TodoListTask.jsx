import crossIcon from "../assets/images/icon-cross.svg";
import TodoListTaskCheckIcon from "./TodoListTaskCheckIcon";
export default function TodoListTask() {
  return (
    <li className="border-b-2 py-3 sm:py-4 pl-11 sm:pl-16 pr-10 relative group hover:bg-gray-100 cursor-pointer break-words">
      <input
        id="checkbox1"
        className="  absolute p-2 left-4 top-4 sm:top-4 sm:left-5 appearance-none rounded-full border border-black/25 sm:p-3 cursor-pointer peer hover:border-t-cyan-400 hover:border-l-cyan-400 hover:border-r-purple-400 hover:border-b-purple-400 "
        type="checkbox"
      />
      <label
        className="leading-none cursor-pointer peer-checked:line-through peer-checked:text-gray-500 w-fit text-xs sm:text-body "
        htmlFor="checkbox1"
      >
        <TodoListTaskCheckIcon></TodoListTaskCheckIcon>
        Complete online JavaScript course
      </label>
      <button className="group-hover:visible invisible">
        <img
          className="absolute top-1/2 right-4 -translate-y-1/2  w-3 h-3 "
          src={crossIcon}
          alt="Remove item"
        />
      </button>
    </li>
  );
}
