import checkIcon from "../assets/images/icon-check.svg";

export default function TodoListTaskCheckIcon() {
  return (
    <img
      className=" bg-gradient-to-br from-cyan-400 border to-purple-500 w-7 h-7 absolute left-[19px] top-[15px] p-2 rounded-full hover:border hover:border-t-cyan-400 hover:border-l-cyan-400 hover:border-r-purple-400 hover:border-b-purple-400 hidden"
      src={checkIcon}
      alt="Checked"
    />
  );
}
