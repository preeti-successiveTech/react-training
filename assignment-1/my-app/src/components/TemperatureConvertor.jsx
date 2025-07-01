"use client";
import React, { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);

    if (value === "" || isNaN(value)) {
      setFahrenheit("");
    } else {
      const f = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);

    if (value === "" || isNaN(value)) {
      setCelsius("");
    } else {
      const c = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Temperature Converter</h2>

      <div>
        <label>
          Celsius:
          <input
            type="text"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="°C"
          />
        </label>
      </div>

      <div>
        <label>
          Fahrenheit:
          <input
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="°F"
          />
        </label>
      </div>
    </div>
  );
}

export default TemperatureConverter;
