import Output from "./Output";
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";

export default function Display({}) {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div
      className="display flex justify-evenly bg-white border-x border-black border-b p-2
    "
    >
      <Output title={"Income"} price={income} name="income" />
      <div style={{ border: "1px solid black" }}></div>
      <Output
        title={"Expense"}
        price={Math.abs(expense).toFixed(2)}
        name="expense"
      />
    </div>
  );
}
