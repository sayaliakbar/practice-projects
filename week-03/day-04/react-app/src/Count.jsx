import { useState } from "react";

export default function Count() {
  let [count, setCount] = useState(0);
  let inCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>React Use State</h1>
      <h2>Count={count}</h2>
      <button onClick={inCount}>Increase Count</button>
    </div>
  );
}
