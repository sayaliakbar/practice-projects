import SixFaces from "../../assets/six-faces-image.png";
export default function RightColumn() {
  return (
    <div className="flex items-end flex-col relative z-50">
      {/* Image in front */}
      <img
        className="w-[25rem] z-50 absolute right-10"
        src={SixFaces}
        alt="Six Faces Image"
      />

      {/* Blurred background container */}
      <div
        className="pt-[7.5rem] pb-10 px-10 flex gap-4 absolute z-30 bottom-0 rounded-lg border-2 border-primary-blue "
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
        className="w-80 h-80 absolute top-0 left-20 z-0 rounded-full 
    bg-gradient-to-r from-accent-purple via-accent-purple to-accent-purple 
    opacity-70 filter blur-[80px]"
      ></div>
      <div
        className="w-[25rem] h-[25rem] absolute bottom-0 -right-36 z-0 rounded-full 
    bg-gradient-to-r from-primary-blue via-primary-blue to-primary-blue 
    opacity-80 filter blur-[80px]"
      ></div>
    </div>
  );
}
