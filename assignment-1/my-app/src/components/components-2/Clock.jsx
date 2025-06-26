// 6.Create a functional component called Clock.
// Use the useState hook to manage a state variable named time initialized to the current time.
// Use the useEffect hook to update the time state every second to display the current time.
// Render the current time in a <p> element.
// When the component unmounts, clear the interval to stop updating the time.
"use client"
import { useEffect, useState } from "react";


export default function Clock()
{
    let currentTime = new Date().toLocaleTimeString();
    let [time, setTime] = useState(currentTime);
    
    useEffect(()=>{
        const timeId = setInterval(()=>{
            console.log("Time is running.......");
              setTime(new Date().toLocaleTimeString());
        },1000);
            return ()=>{
                 clearInterval(timeId);
            }
           
        
    },[]);
    return(<>
    <p>Time is : {time}</p>
    </>);
}
