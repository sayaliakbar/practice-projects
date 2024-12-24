import ArrowDropDown from "../../assets/arrow_drop_down.png";
export default function Navbar() {
  return (
    <div className=" gap-6 paragraph-caption text-text-disabled hidden lg:flex">
      <a href="#" className=" flex link-button-bold-medium">
        Home
        <img src={ArrowDropDown} alt="Drop down arrow" />
      </a>
      <a href="#" className="">
        NFT
      </a>
      <a href="#" className="">
        Roadmap
      </a>
      <a href="#" className="">
        About Us
      </a>
      <a href="#" className="">
        Contact Us
      </a>
      <a href="#" className="flex">
        Pages
        <img src={ArrowDropDown} alt=" Drop down arrow" />
      </a>
    </div>
  );
}
