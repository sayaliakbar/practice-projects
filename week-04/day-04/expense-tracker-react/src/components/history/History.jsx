import Card from "./Card";
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";

export default function History() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h4>History</h4>
      <div style={{ border: "1px solid black" }}></div>
      <ul className="max-h-200px overflow-y-auto">
        {transactions.map((transaction) => (
          <Card
            key={transaction.id}
            id={transaction.id}
            description={transaction.text}
            amount={transaction.amount}
          />
        ))}
      </ul>
    </div>
  );
}
