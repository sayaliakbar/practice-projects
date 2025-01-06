export default function Output({ title, price, name }) {
  return (
    <div className="text-center">
      <h5>{title}</h5>
      <p
        className="font-bold"
        style={{ color: name != "income" ? "red" : "green" }}
      >
        ${price}
      </p>
    </div>
  );
}
