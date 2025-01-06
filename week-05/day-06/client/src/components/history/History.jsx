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
    <div className="">
      <h4>History</h4>
      <div className="border border-solid border-black"></div>
      <ul className="transaction-list ">
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
