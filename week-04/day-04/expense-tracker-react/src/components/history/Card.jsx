import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
export default function Card({ description, amount, id }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";

  return (
    <div className="card relative group" style={{ marginTop: "1rem" }}>
      <button
        onClick={() => {
          deleteTransaction(id);
        }}
        className="w-5 absolute top-2 -left-5 hidden group-hover:block  bg-red-500 "
      >
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
