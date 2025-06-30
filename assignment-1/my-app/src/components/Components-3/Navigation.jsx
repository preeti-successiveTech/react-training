"use client";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "0.75rem 2rem",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex", // Flexbox for horizontal layout
          justifyContent: "flex-end", // Align items to the right
          gap: "2rem", // Space between items
        }}
      >
        <li style={{ display: "inline-block" }}>
          <Link href="/day-3/pages/Home" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={{ display: "inline-block" }}>
          <Link href="/day-3/pages/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li style={{ display: "inline-block" }}>
          <Link href="/day-3/pages/Login" style={linkStyle}>
            <button style={buttonStyle}>Login</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// Inline styles for links and button
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "1.5rem",
};

const buttonStyle = {
  backgroundColor: "#0070f3",
  border: "none",
  padding: "0.5rem 1.5rem",
  borderRadius: "4px",
  color: "#fff",
  cursor: "pointer",
  fontSize: "1.2rem",
  transition: "background-color 0.3s ease",
};

