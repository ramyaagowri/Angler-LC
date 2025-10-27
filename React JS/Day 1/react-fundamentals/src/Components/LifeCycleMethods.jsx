import React, { useEffect, useState } from "react";

function LifeCycleMethods() {
  const [count, setCount] = useState(0);

  // useEffect to Mount, Update, and Unmount
  useEffect(() => {
    console.log("Component Mounted (componentDidMount)");

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Component Unmounted (componentWillUnmount)");
    };
  }, []); // empty dependency array, runs only once (mount)

  // useEffect to demonstrate Update
  useEffect(() => {
    if (count !== 0) {
      console.log("Component Updated (componentDidUpdate), count:", count);
    }
  }, [count]); // runs whenever `count` changes

  return (
    <div style={{ padding: "20px", border: "1px solid black" }}>
      <h2>Timer Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LifeCycleMethods;
