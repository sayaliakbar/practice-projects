import Logo from "./Logo";
import Navbar from "./Navbar";
import Joinbutton from "./Joinbutton";

export default function Header() {
  return (
    <div className="py-6 px-[4.5rem] flex justify-between items-center gap-10">
      <div className="flex gap-10 items-center">
        <Logo></Logo>
        <Navbar></Navbar>
      </div>
      <Joinbutton></Joinbutton>
    </div>
  );
}
