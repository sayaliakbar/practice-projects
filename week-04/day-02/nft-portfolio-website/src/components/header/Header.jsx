import Logo from "./Logo";
import Navbar from "./Navbar";
import Joinbutton from "./Joinbutton";
import MenuIcon from "./Menu";

export default function Header() {
  return (
    <div className=" mobile-padding md:tablet-padding lg:laptop-padding flex justify-between items-center gap-10">
      <div className="flex gap-10 items-center lg:">
        <Logo></Logo>
        <Navbar></Navbar>
      </div>

      <div className="flex gap-4 items-center">
        <MenuIcon></MenuIcon> <Joinbutton></Joinbutton>
      </div>
    </div>
  );
}
