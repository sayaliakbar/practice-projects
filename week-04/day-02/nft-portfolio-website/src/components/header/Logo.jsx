import LogoIcon from "../../assets/Logo.png";
export default function Logo() {
  return (
    <div className="header-logo flex items-center gap-2">
      <img className="logo-icon w-10 h-10" src={LogoIcon} alt="" />
      <h5 className="font-700 text-2xl leading-10">YORFY</h5>
    </div>
  );
}
