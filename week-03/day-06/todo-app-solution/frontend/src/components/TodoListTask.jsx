import crossIcon from "../assets/images/icon-cross.svg";
import TodoListTaskCheckIcon from "./TodoListTaskCheckIcon";
export default function TodoListTask() {
  return (
    <li className="border-b-2 py-4 pl-16 pr-10 relative group hover:bg-gray-100 cursor-pointer break-words">
      <input
        id="checkbox1"
        className=" absolute left-5 appearance-none rounded-full border border-black/25 p-3 cursor-pointer peer hover:border-t-cyan-400 hover:border-l-cyan-400 hover:border-r-purple-400 hover:border-b-purple-400 "
        type="checkbox"
      />
      <label
        className="cursor-pointer peer-checked:line-through peer-checked:text-gray-500 w-fit"
        htmlFor="checkbox1"
      >
        <TodoListTaskCheckIcon></TodoListTaskCheckIcon>
        Complete online JavaScript fdfasdfasdfasdfsd
        dfasdfdsfasffsdafjsdhdjhfjsdahfjdshfkjsdhsdlfjkfjsakjfkdsalfjlakshfjksdahfkljsd
        FJFJSHDJF
      </label>
      <img
        className="absolute top-1/2 right-4 -translate-y-1/2 group-hover:visible invisible"
        src={crossIcon}
        alt="Remove item"
      />
    </li>
  );
}
