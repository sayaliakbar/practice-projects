import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import { numberWithCommas } from "../../utils/numberWithCommas";
export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div>
      <h5 className="font-bold text-xs leading-none">YOUR BALANCE</h5>
      <h4 className="balance font-bold text-xl">${numberWithCommas(total)}</h4>
    </div>
  );
}
