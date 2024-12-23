import ThreeDots from "../../assets/three-dots.png";
export default function CommunityCard() {
  return (
    <div className="rounded-lg w-[26.5rem] p-4 flex items-center justify-between gap-4 bg-primary-darkBlue">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-[rgba(217,217,217,1)] rounded-full flex items-center"></div>
        <div className="flex flex-col">
          <h6 className="heading-bold-h6">ShooPharDhie</h6>
          <p className="paragraph-label text-text-disabled">
            Last Online 2 Hour Ago
          </p>
        </div>
      </div>

      <img src={ThreeDots} alt="" />
    </div>
  );
}
