"use client";
import React, { useState } from "react";

export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h3>Select a Name</h3>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">-- Choose an option --</option>
        <option value="Meena">Meena</option>
        <option value="Anuj">Anuj</option>
        <option value="Anil">Anil</option>
        <option value="Rinku">Rinku</option>
      </select>

      {selectedOption && (
        <p>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
}
