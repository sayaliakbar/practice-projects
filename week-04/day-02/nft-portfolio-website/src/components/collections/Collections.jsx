import Heading from "../highlight/Heading";
import CollectionCard from "./CollectionCard";
import Sixface1 from "../../assets/six-faces-image-collections-1.png";
import Sixface2 from "../../assets/six-faces-image-collections-2.png";
import Sixface3 from "../../assets/six-faces-image-collections-3.png";
export default function Collections() {
  return (
    <div className="mx-[4.5rem] my-24 flex text-center flex-col items-center gap-10">
      <Heading
        heading="Collections"
        title="Yorfy NFT Collections"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ></Heading>
      <div className=" flex gap-4">
        <CollectionCard
          image={Sixface1}
          title={"YorNoose #432"}
        ></CollectionCard>
        <CollectionCard
          image={Sixface2}
          title={"YorHayr #332"}
        ></CollectionCard>
        <CollectionCard
          image={Sixface3}
          title={"YorMwoth #765"}
        ></CollectionCard>
      </div>
      <button className="button-secondary-large link-button-semibold-large">
        View Open Sea
      </button>
    </div>
  );
}
