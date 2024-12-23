import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
export default function Hero() {
  return (
    <div className="grid grid-cols-2 absolute w-full top-[8rem] px-[4.5rem]">
      <LeftColumn></LeftColumn>
      <RightColumn></RightColumn>
    </div>
  );
}
