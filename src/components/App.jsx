import React from "react";

function App() {
  const [header, setHeder] = React.useState("Hello");
  const [isMouseOver, setMouseOver] = React.useState(false);
  function handleClick() {
    setHeder("Submitted");
  }

  // onMouseEnter={}
  // onMouseLeave={}

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseLeave() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{header}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
