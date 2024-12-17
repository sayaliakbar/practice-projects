import TodoListFooter from "./TodoListFooter";
import crossIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";
export default function TodoList() {
  return (
    <div className="w-full bg-white shadow-2xl rounded-lg overflow-hidden">
      <ul className="overflow-y-auto max-h-64 w-full  flex flex-col">
        {/* List Item 1 */}
        <li className="border-b-2 py-4 pl-16 pr-10 relative group hover:bg-gray-100 cursor-pointer break-words">
          <input
            id="checkbox1"
            className=" absolute left-5 appearance-none rounded-full border border-black/25 p-3 cursor-pointer peer hover:border-t-cyan-400 hover:border-l-cyan-400 hover:border-r-purple-400 hover:border-b-purple-400 "
            type="checkbox"
          />
          <label
            className="  cursor-pointer peer-checked:line-through peer-checked:text-gray-500 w-fit"
            htmlFor="checkbox1"
          >
            <img
              className=" bg-gradient-to-br from-cyan-400 border to-purple-500 w-7 h-7 absolute left-[19px] top-[15px] p-2 rounded-full hover:border hover:border-t-cyan-400 hover:border-l-cyan-400 hover:border-r-purple-400 hover:border-b-purple-400 invisible"
              src={checkIcon}
              alt="Checked"
            />
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
      </ul>
      <TodoListFooter />
    </div>
  );
}
