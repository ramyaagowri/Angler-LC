import React, { useState } from "react";

function PropsAndState({ name }) {
  //props
  // const name = props;
  const [count, setCount] = useState(10);
  const decrement = () => setCount((count) => count - 1);
  return (
    <>
      <p>Decrement using functional Components : {count}</p>
      <p>
        <button onClick={() => decrement()}>Decrement</button>
      </p>
      <p>Component created by : {name}</p> //props.name
    </>
  );
}

export default PropsAndState;
