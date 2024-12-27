export default function Output({ title, price }) {
  return (
    <div className="text-center">
      <h5>{title}</h5>
      <p>${price}</p>
    </div>
  );
}
