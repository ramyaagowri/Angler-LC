import React, { useState, useCallback } from "react";
import Button from "./SimpleButton";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    console.log("Inside callback");
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <Button onClick={increment} label="Increment Count" />
      memoise the function itself ,like it prevents the re-render of the
      component till the function reference changes
      <h3>Count: {count}</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
}

export default UseCallback;
