import moonIcon from "../assets/images/icon-moon.svg";
export default function TodoHeader() {
  return (
    <div className="flex justify-between items-center w-full  text-white  py-4">
      <h1 className=" font-bold tracking-[1.25rem] text-4xl leading-none">
        TODO
      </h1>
      <img src={moonIcon} alt="moonIcon" />
    </div>
  );
}
