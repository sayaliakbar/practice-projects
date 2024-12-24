import Output from "./Output";
import "./display.css";
export default function Display() {
  return (
    <div className="display">
      <Output />
      <div style={{ border: "1px solid black" }}></div>
      <Output />
    </div>
  );
}
