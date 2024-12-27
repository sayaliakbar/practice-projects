import Output from "./Output";

export default function Display({ income, expense }) {
  return (
    <div className="display flex justify-evenly bg-white border-x border-black border-b">
      <Output title={"Income"} price={income} />
      <div style={{ border: "1px solid black" }}></div>
      <Output title={"Expense"} price={expense} />
    </div>
  );
}
