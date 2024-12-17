import moonIcon from "../assets/images/icon-moon.svg";
export default function TodoHeader() {
  return (
    <div className=" flex justify-between items-center w-full  text-white  sm:py-4">
      <h1 className=" font-bold tracking-[0.5rem] sm:tracking-[1.25rem] pt-1 sm:text-4xl text-2xl leading-none">
        TODO
      </h1>
      <img className="w-4 h-4 sm:w-6 sm:h-6" src={moonIcon} alt="moonIcon" />
    </div>
  );
}
