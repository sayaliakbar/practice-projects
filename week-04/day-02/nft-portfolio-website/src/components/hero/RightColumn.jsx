import SixFaces from "../../assets/six-faces-image.png";
export default function RightColumn() {
  return (
    <div className="flex items-center flex-col relative">
      <div className=" w-[25rem] relative">
        <img
          className="w-[25rem] absolute"
          src={SixFaces}
          alt="Six Faces Image"
        />
      </div>
      {/* Image in front */}
      <div className="h-[18rem]"> </div>
      {/* Blurred background container */}
      <div
        className="pt-[7.5rem] pb-10 px-10 flex -z-10 gap-4 rounded-lg border-2 border-primary-blue "
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
        className="w-80 h-80 absolute top-0 -left-20 -z-50 rounded-full 
    bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 
    opacity-70 filter blur-[80px]"
      ></div>

      <div
        className="w-[25rem] h-[25rem] absolute bottom-0 -right-32 -z-50 rounded-full 
    bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 
    opacity-80 filter blur-[100px]"
      ></div>
    </div>
  );
}
