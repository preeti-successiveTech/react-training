// 5.Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.
"use client"
import { useState } from "react";



export default function CounterWithStep(){
    const [count, setCount] = useState(0);
    let [value, setValue] = useState(0);
    function Increment(){

        setCount(count+parseInt(value));
    }
     function Decrement(){
        setCount(count- parseInt(value));
    }

    return(<>
    <p>count is : {count}</p>
    <input type="number" placeholder="Enter the value" onChange={(e)=>setValue(e.target.value)}></input>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </>);
}
