import Card from "./Card";
import { GlobalContext } from "../../context/GlobalState";
import { useContext, useEffect } from "react";

export default function History() {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h4>History</h4>
      <div style={{ border: "1px solid black" }}></div>
      <ul className=" ">
        {transactions.map((transaction) => (
          <Card
            key={transaction._id}
            id={transaction._id}
            description={transaction.text}
            amount={transaction.amount}
          />
        ))}
      </ul>
    </div>
  );
}
