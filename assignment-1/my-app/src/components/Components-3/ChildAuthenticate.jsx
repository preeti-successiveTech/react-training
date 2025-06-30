"use client";

import { useAuth } from "@/context/context-3/AuthContext";
import { useState } from "react";

export const ChildAuthenticate = () => {
  const { isAuthenticated, user, login, logOut } = useAuth();
  const [userName, setUserName] = useState("");

  const wrapperStyle = {
    height: "100vh",
    display: "grid",
    placeItems: "center",
  };

  const formStyle = {
    background: "white",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(8.5px)",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    padding: "3rem 3.5rem",
    color: "Black",
    width: 400,
    textAlign: "center" 
  };

  // Increased size and same width for input and button
  const inputStyle = {
    width: "100%",
    padding: "1rem 1.2rem",
    margin: "1.5rem 0 2rem 0",
    borderRadius: "12px",
    border: "solid",
    outline: "none",
    fontSize: "1.25rem",
    background: "rgba(159, 164, 218, 0.03)",
    color: "Black",
  };

  const buttonStyle = {
    padding: "1.2rem 0",
    width: "100%",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#6a11cb",
    backgroundImage: "linear-gradient(315deg, #6a11cb 0%, #2575fc 74%)",
    color: "white",
    fontSize: "1.25rem",
    cursor: "pointer",
    fontWeight: "700",
    transition: "background 0.3s ease",
  };

  return (
    <div style={wrapperStyle}>
      <div style={formStyle}>
        {isAuthenticated ? (
          <div>
            <h2>Welcome, {user}!</h2>
          </div>
        ) : (
          <>
            <h2>Please Log In</h2>
            <input
              type="text"
              placeholder="Enter username"
              style={inputStyle}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </>
        )}
        <button
          style={buttonStyle}
          onClick={() => {
            if (isAuthenticated) {
              logOut();
            } else if (userName.trim()) {
              login(userName);
              setUserName("");
            } else {
              alert("Please enter a username.");
            }
          }}
        >
          {isAuthenticated ? "Log Out" : "Log In"}
        </button>
      </div>
    </div>
  );
};
