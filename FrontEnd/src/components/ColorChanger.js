import React, { useState } from "react";
import "./ColorChanger.css";
function ColorChanger() {
  const [color, setColor] = useState({ r: 255, g: 255, b: 255 });

  const handleColorChange = (event) => {
    const { name, value } = event.target;
    setColor((prevColor) => ({
      ...prevColor,
      [name]: parseInt(value),
    }));
  };

  return (
    <div>
      <label htmlFor="red">Red:</label>
      <input
        type="range"
        min="0"
        max="255"
        name="r"
        value={color.r}
        onChange={handleColorChange}
      />
      <br />
      <label htmlFor="green">Green:</label>
      <input
        type="range"
        min="0"
        max="255"
        name="g"
        value={color.g}
        onChange={handleColorChange}
      />
      <br />
      <label htmlFor="blue">Blue:</label>
      <input
        type="range"
        min="0"
        max="255"
        name="b"
        value={color.b}
        onChange={handleColorChange}
      />
      <br />
      <div
        style={{
          backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
          width: "100px",
          height: "100px",
        }}
      ></div>
    </div>
  );
}

export default ColorChanger;
