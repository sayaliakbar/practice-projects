import Logo from "../../components/header/Logo";
import SocialMediaIcon from "./SocialMediaIcon";

export default function Footer() {
  return (
    <div className="py-10 px-[4.5rem] flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-between w-full gap-4">
        <Logo></Logo>

        <div className="flex gap-4">
          <SocialMediaIcon iconName={"Fb"}></SocialMediaIcon>{" "}
          <SocialMediaIcon iconName={"Li"}></SocialMediaIcon>
          <SocialMediaIcon iconName={"Yt"}></SocialMediaIcon>
          <SocialMediaIcon iconName={"Lg"}></SocialMediaIcon>
        </div>
      </div>
      <div className="border bg-primary-blue w-full"></div>
      <div className="flex items-center justify-between w-full gap-4 paragraph-body text-text-disabled">
        <p>© 2022 Yorfy Template • All Rights Reserved</p>
        <p>Made With Love by Groweb Studio</p>
      </div>
    </div>
  );
}
