import React, { useState } from "react";
import "../styles/FidgetSpinner.scss";

const FidgetSpinner = () => {
  const [rotateSpeed, setRotateSpeed] = useState(0.85);

  const handleSpeedChange = (e) => {
    setRotateSpeed(parseFloat(e.target.value));
  };

  return (
    <div className="fidget-spinner-container">
      <div
        className="fidget"
        style={{
          animationDuration: `${rotateSpeed}s`,
        }}
      >
        <div className="end" style={{ transform: "rotate(0deg) translate(0, -65px)" }}></div>
        <div className="end" style={{ transform: "rotate(120deg) translate(0, -65px)" }}></div>
        <div className="end" style={{ transform: "rotate(240deg) translate(0, -65px)" }}></div>
        <div className="center"></div>
      </div>
      <label>
        Rotation Speed:
        <input
          type="range"
          min="0.2"
          max="2"
          step="0.05"
          value={rotateSpeed}
          onChange={handleSpeedChange}
        />
      </label>
    </div>
  );
};

export default FidgetSpinner;