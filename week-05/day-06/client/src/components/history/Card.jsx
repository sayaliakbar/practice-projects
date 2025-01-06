import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import { numberWithCommas } from "../../utils/numberWithCommas";
//eslint-disable-next-line
export default function Card({ description, amount, id }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";

  return (
    <div className="card group" style={{ marginTop: "1rem" }}>
      <div
        className="peer relative flex justify-between bg-white p-2 border-r-4 border-r-green-500 border-b-2 border-l-2 "
        style={{ borderRightColor: amount < 0 ? "red" : "green" }}
      >
        <p>{description}</p>

        <p>
          {" "}
          {sign}${numberWithCommas(Math.abs(amount))}
        </p>
        <button
          onClick={() => {
            deleteTransaction(id);
          }}
          className="w-5 hidden absolute -left-5 text-white group-hover:block bg-red-500"
        >
          X
        </button>
      </div>
    </div>
  );
}
