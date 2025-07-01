"use client";

import React, { useState } from "react";

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  // Sample data to filter
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Strawberry",
    "Blueberry",
    "Grapes",
  ];

  // Controlled input handler
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Filter items based on search query
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Fruits</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={handleChange}
      />

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>No matching items</li>
        )}
      </ul>
    </div>
  );
}
