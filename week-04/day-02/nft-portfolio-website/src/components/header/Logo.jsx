import LogoIcon from "../../assets/logo.png";
export default function Logo() {
  return (
    <div className="header-logo flex items-center gap-2">
      <img
        className="logo-icon w-8 h-8 md:w-10 md:h-10"
        src={LogoIcon}
        alt=""
      />
      <h6 className="heading-bold-h6 md:hidden">YORFY</h6>
      <h5 className="heading-bold-h5 hidden md:block">YORFY</h5>
    </div>
  );
}
