"use client";

import { useEffect, useState } from "react";

export default function SlideShow() {
  const arr = [
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=1024x1024&w=is&k=20&c=9Qfj9S124ojed7s4OWu3a3vbbMC76QYkqczg4L4M-Sc=",
    "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1721132447246-5d33f3008b05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/614012698/photo/i-am-a-strong-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=M8XJSCOa21rzuPEltMp0Csl3y3vDmQe8OtBcj7fjKHU=",
  ];

  const [currentSlide, SetCurrentSlide] = useState(
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
  );
  const [value, setValue] = useState(0);
  const [i, setI] = useState(1);
  const [inputValue, setInputValue] = useState(0);
  const [show, setShow] = useState(true);

  function timer() {
    setI(() => inputValue);
  }

  function pauseSlide() {
    setShow((prev) => !prev);
  }

  useEffect(() => {
    const id = setInterval(() => {
      if (show) {
        SetCurrentSlide(arr[value]);
        setValue((prevValue) => {
          return prevValue === arr.length - 1 ? 0 : prevValue + 1;
        });
      }
    }, 1000 * i);

    return () => {
      clearInterval(id);
    };
  }, [show, i, value]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <img
        src={currentSlide}
        width={400}
        height={300}
        style={{
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
        alt="Slideshow"
      />

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <input
          type="number"
          placeholder="Enter the time interval"
          onChange={(e) => setInputValue(Number(e.target.value))}
          style={{
            padding: "8px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "200px",
          }}
        />
        <button
          onClick={timer}
          style={{
            padding: "8px 16px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Set Timer
        </button>
        <button
          onClick={pauseSlide}
          style={{
            padding: "8px 16px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {show ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
