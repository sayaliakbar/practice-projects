import BgHeaderDesktop from "/images/bg-header-desktop.svg";
import BgHeaderMobile from "/images/bg-header-mobile.svg";
export default function Header() {
  return (
    <div className="w-full">
      <img className="hidden sm:block" src={BgHeaderDesktop} alt="" />
      <img className="sm:hidden w-full" src={BgHeaderMobile} alt="" />
    </div>
  );
}
