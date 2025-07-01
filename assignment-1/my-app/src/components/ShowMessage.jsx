"use client";
import React, { useState } from "react";

function Message() {
  return <p>The secret message is now visible!</p>;
}

export default function ShowMessage() {
  const [inputValue, setInputValue] = useState("");
  const [shouldShowMessage, setShouldShowMessage] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim().toLowerCase() === "show") {
      setShouldShowMessage(true);
    } else {
      setShouldShowMessage(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type 'show' and click"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>

      {shouldShowMessage && <Message />}
    </div>
  );
}
