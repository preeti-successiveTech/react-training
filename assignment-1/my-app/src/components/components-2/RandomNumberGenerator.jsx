"use client";
import { useState } from "react";

export default function RandomNumberGenerator(){
    let [randomNumber, setRandomNumber] = useState(1);
    function generate()
    {
        setRandomNumber(parseInt(Math.random() *100));
    }
    return(<>
        <h1>Number: {randomNumber}</h1>
        <button onClick={generate}>random</button>
    </>);
}