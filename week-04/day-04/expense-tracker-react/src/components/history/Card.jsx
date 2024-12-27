export default function Card({ description, amount }) {
  const sign = amount < 0 ? "-" : "+";
  return (
    <div className="card relative group" style={{ marginTop: "1rem" }}>
      <button className="w-5 absolute top-2 -left-6 hidden group-hover:block  bg-red-500 ">
        X
      </button>
      <div
        className="peer flex justify-between bg-white p-2 border-r-4 border-r-green-500 border-b-2 border-l-2 "
        style={{ borderRightColor: amount < 0 ? "red" : "green" }}
      >
        <p>{description}</p>
        <p>
          {" "}
          {sign}${Math.abs(amount)}
        </p>
      </div>
    </div>
  );
}
