import Heading from "./Heading";
import HighlightNFT from "./HighlightNFT";
export default function Highlight() {
  return (
    <div className="mx-[4.5rem] text-center flex flex-col items-center gap-10">
      <Heading
        heading="Featued"
        title="Hot Trending On This Week from Yorfy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ></Heading>
      <HighlightNFT></HighlightNFT>
    </div>
  );
}
