import React, { useState } from "react";
import "./App.css";

const COLORS = ["red", "green", "blue", "yellow", "purple"];

function ColorApp() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [clickNumber, setClickNumber] = useState(0);

  const onButtonClick = (color) => () => {
    if (backgroundColor !== color){
        setClickNumber((clickNumber) => clickNumber + 1)}
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
        <button>
          count is {clickNumber}
        </button>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColorApp;
