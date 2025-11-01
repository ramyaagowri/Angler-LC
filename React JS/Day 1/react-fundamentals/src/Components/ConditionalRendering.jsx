import React, { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Conditional message
  const message = isLoggedIn ? "Welcome Back!" : "Please Log In";

  // Conditional style
  const style = {
    padding: "20px",
    color: isLoggedIn ? "green" : "red",
    border: "1px solid black",
    width: "200px",
    textAlign: "center",
    margin: "20px auto",
    borderRadius: "10px",
  };

  return (
    <div style={style}>
      <h2>{message}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default ConditionalRendering;
