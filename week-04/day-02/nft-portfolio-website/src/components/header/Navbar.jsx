import ArrowDropDown from "../../assets/arrow_drop_down.png";
export default function Navbar() {
  return (
    <div className="header_navbar flex gap-6 text-sm leading-6 h-6">
      <a href="#" className="header_navbar_home flex font-700">
        Home
        <img src={ArrowDropDown} alt="" />
      </a>
      <a href="#" className="header_navbar_nft">
        NFT
      </a>
      <a href="#" className="header_navbar_roadmap">
        Roadmap
      </a>
      <a href="#" className="header_navbar_about">
        About Us
      </a>{" "}
      <a href="#" className="header_navbar_contact">
        Contact Us
      </a>
      <a href="#" className="header_navbar_pages flex">
        Pages
        <img src={ArrowDropDown} alt="" />
      </a>
    </div>
  );
}
