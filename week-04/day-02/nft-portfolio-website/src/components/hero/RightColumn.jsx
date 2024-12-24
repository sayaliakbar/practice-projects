import SixFaces from "../../assets/six-faces-image.png";
export default function RightColumn() {
  return (
    <div className="flex items-end flex-col relative">
      {/* Image in front */}
      <img
        className="w-[17.5rem] h-[19.5rem] md:w-[15.75rem] lg:w-[25rem] lg:h-[23rem]   absolute right-10"
        src={SixFaces}
        alt="Six Faces Image"
      />

      {/* Blurred background container */}
      <div
        className="pt-[7.5rem] pb-10 px-10 flex gap-4 absolute  bottom-0 rounded-lg border-2 border-primary-blue "
        style={{
          backdropFilter: "blur(80px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent background
        }}
      >
        <button className="button-primary-large link-button-semibold-large bg-primary-blue">
          Buy on OpenSea
        </button>
        <button className="button-secondary-large link-button-semibold-large">
          Know More
        </button>
      </div>
      <div
        className="w-[15rem] h-[15rem] lg:w-80 lg:h-80 absolute  lg:left-20 md:top-10 md:-left-14 -z-50 rounded-full 
    bg-gradient-to-r from-accent-purple via-accent-purple to-accent-purple 
    opacity-70 filter blur-[80px]"
      ></div>
      <div
        className=" w-[25rem] h-[25rem] absolute bottom-0 -right-36 -z-50 rounded-full 
    bg-gradient-to-r from-primary-blue via-primary-blue to-primary-blue 
    opacity-80 filter blur-[80px]"
      ></div>
    </div>
  );
}
