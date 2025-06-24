// 8.Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

"use client";

import { useEffect, useState } from "react";

export default function SlideShow() {
  let arr = [
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=1024x1024&w=is&k=20&c=9Qfj9S124ojed7s4OWu3a3vbbMC76QYkqczg4L4M-Sc=",
    "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1721132447246-5d33f3008b05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/614012698/photo/i-am-a-strong-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=M8XJSCOa21rzuPEltMp0Csl3y3vDmQe8OtBcj7fjKHU=",
  ];
  let [currentSlide, SetCurrentSlide] = useState(
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"
  );
  let [value, setValue] = useState(0);
  let [i, setI] = useState(1);
  let [inputValue, setInputValue] = useState(0);
  let show = true;
  function timer() {
    setI(() => {
      return (i = inputValue);
    });
  }
  function pauseSlide() {
    show = show == true ? false : true;
  }
  useEffect(() => {
    let id = setInterval(() => {
      if (show) {
        SetCurrentSlide(arr[value]);
        console.log("Yes");
        setValue(() => {
          if (value == arr.length - 1) {
            return (value = 0);
          } else {
            return (value = value + 1);
          }
        });
      }
    }, 1000 * i);
    return () => {
      clearInterval(id);
    };
  });

  return (
    <>
      <div>
        <img src={currentSlide} width={200} height={200}></img>;
      </div>
      <input
        type="number"
        placeholder="Enter the time interval"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={timer}>manipulate timer</button>
      <button onClick={pauseSlide}>Pause/Play</button>
    </>
  );
}
