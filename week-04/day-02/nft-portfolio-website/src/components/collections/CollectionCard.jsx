import Logo from "../../assets/logo.png";
export default function CollectionCard({ image, title }) {
  return (
    <div className="p-6 border border-primary-blue rounded-lg flex flex-col gap-6">
      <img src={image} alt="" />
      <div className="flex gap-4">
        <img src={Logo} alt="Company Logo" />
        <h5 className="heading-bold-h5">{title}</h5>
      </div>
    </div>
  );
}
