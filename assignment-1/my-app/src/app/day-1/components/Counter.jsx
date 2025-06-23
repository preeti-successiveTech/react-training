// 4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
// Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
// Display the updated count on the screen.
"use client"
import { useState } from "react";

export default function Counter(){
const  [count,setCount]= useState(0);
  function Increment(){
    setCount(count+1);
   }
  function Decrement(){
    setCount(count-1);
   }
    return(
        <div id= "counter">
            <p>count: {count} </p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
}