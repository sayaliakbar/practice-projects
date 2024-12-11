import { useState } from "react";

export default function LudoBoard() {
  let [count, setCount] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });

  let blueCount = () => {
    setCount((prevCount) => {
      return { ...prevCount, blue: prevCount.blue + 1 };
    });
  };
  let redCount = () => {
    setCount((prevCount) => {
      return { ...prevCount, red: prevCount.red + 1 };
    });
  };
  let greenCount = () => {
    setCount((prevCount) => {
      return { ...prevCount, green: prevCount.green + 1 };
    });
  };
  let yellowCount = () => {
    setCount((prevCount) => {
      return { ...prevCount, yellow: prevCount.yellow + 1 };
    });
  };
  return (
    <div>
      <button onClick={blueCount} style={{ backgroundColor: "blue" }}>
        {`Blue Count = ${count.blue}`}
      </button>

      <button onClick={redCount} style={{ backgroundColor: "red" }}>
        {`Red Count = ${count.red}`}
      </button>

      <button
        onClick={greenCount}
        style={{ backgroundColor: "green" }}
      >{`Green Count = ${count.green}`}</button>

      <button
        onClick={yellowCount}
        style={{ backgroundColor: "yellow", color: "black" }}
      >{`Yellow Count = ${count.yellow}`}</button>
    </div>
  );
}
