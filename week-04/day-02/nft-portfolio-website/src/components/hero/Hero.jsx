import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
export default function Hero() {
  return (
    <div className="grid grid-cols-2 w-full mt-10  px-mobile-x md:px-tablet-x lg:px-laptop-x relative">
      <LeftColumn></LeftColumn>
      <RightColumn></RightColumn>
      <div
        className="w-[25rem] h-[25rem] absolute bottom-0 -left-40 rounded-full 
    bg-gradient-to-r from-primary-blue via-primary-blue to-primary-blue 
    opacity-50 filter blur-[80px] z-10"
      ></div>
    </div>
  );
}
