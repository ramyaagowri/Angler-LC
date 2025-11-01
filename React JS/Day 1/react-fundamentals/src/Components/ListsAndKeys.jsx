import React from "react";

function ListsAndKeys() {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListsAndKeys;
