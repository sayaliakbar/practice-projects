import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
export default function Header() {
  return (
    <h3 className="header text-center py-8 font-bold text-xl leading-none">
      Expense Tracker
    </h3>
  );
}
