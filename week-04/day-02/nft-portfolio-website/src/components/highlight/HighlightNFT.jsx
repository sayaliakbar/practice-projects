import LogoIcon from "../../assets/logo-large.png";
import SixFaceImage from "../../assets/six-faces-image-featured.png";
export default function HighlightNFT() {
  return (
    <div className="flex items-center gap-10 p-10 bg-primary-darkBlue rounded-2xl">
      <div className="flex flex-col items-center gap-4">
        <img className="w-20 h-20" src={LogoIcon} alt="Company Logo" />
        <h3 className="heading-bold-h3">
          YorEyes <br /> #234
        </h3>
        <p className="paragraph-body text-text-disabled">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <img className="" src={SixFaceImage} alt="Six Face Image Featured" />
      <div className="flex flex-col items-center gap-4">
        <h3 className="heading-bold-h3">Interesting with This Item?</h3>
        <p className="paragraph-body text-text-disabled">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="button-primary-large bg-primary-blue link-button-bold-large">
          Buy on OpenSea
        </button>
      </div>
    </div>
  );
}
