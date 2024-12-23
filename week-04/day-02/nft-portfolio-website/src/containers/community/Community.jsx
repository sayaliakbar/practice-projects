import Heading from "../../components/highlight/Heading";
import CommunityCard from "./CommunityCard";
import "./community.css";
export default function Community() {
  return (
    <div className="ml-[4.5rem] flex items-center justify-between gap-14">
      <div className="flex flex-col items-start gap-6 ">
        <Heading
          heading={"Community"}
          title={"Join Our Community and Get Many Benefits"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        ></Heading>
        <div>
          <button className="button-primary-large link-button-bold-large bg-primary-blue">
            Join Our Discord
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[31.5rem]">
        <div className=" mr-20 box-shadow">
          <CommunityCard></CommunityCard>
        </div>
        <div className="ml-10 opacity-70 box-shadow">
          <CommunityCard></CommunityCard>
        </div>
        <div className="ml-20 opacity-50">
          <CommunityCard></CommunityCard>
        </div>
      </div>
    </div>
  );
}
