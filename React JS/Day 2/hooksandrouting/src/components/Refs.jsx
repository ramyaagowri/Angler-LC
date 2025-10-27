import React, { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Refs() {
  const { commonStyles } = useContext(ThemeContext);
  const inputRef = useRef(null);
  const handleChange = () => {
    inputRef.current.focus();
  };
  return (
    <div style={{ ...commonStyles, gap: "10px" }}>
      <input type="text" ref={inputRef} placeholder="Enter name here" />
      <button onClick={handleChange}>Focus Input</button>
    </div>
  );
}

export default Refs;
