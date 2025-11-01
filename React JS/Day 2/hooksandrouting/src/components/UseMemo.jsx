import React, { useState, useMemo } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {} //heavy loop
    return num * 2;
  };

  //caches the result
  const result = useMemo(() => expensiveCalculation(count), [count]);


  return (
    <div>
      <h3>Count: {count}</h3>
      <h4>Double: {result}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <input
        placeholder="Type something"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default UseMemo;
