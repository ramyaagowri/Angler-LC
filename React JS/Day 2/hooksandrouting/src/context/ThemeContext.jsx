import React, { useState } from "react";

export const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const commonStyles = {
    width: "300px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, commonStyles }}>
      {children}
    </ThemeContext.Provider>
  );
}
