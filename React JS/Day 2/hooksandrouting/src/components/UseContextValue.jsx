import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function UseContextValue() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme == "light" ? "white" : "grey",
      }}
    >
      <button onClick={() => toggleTheme()}>Change Theme</button>
    </div>
  );
}

export default UseContextValue;
