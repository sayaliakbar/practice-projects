export default function Heading({ heading, title, description }) {
  return (
    <div className="flex flex-col items-center  gap-4 mx-48">
      <h6 className="heading-bold-h6 text-accent-cyan ">{heading}</h6>
      <h2 className="heading-bold-h2">{title}</h2>
      <p className="paragraph-body text-text-disabled">{description}</p>
    </div>
  );
}
