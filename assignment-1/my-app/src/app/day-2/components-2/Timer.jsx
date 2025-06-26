"use client"
import useTimer from "../hook/useTimer";


export default function timer()
{
    const {time, start, pause, reset}= useTimer(60);

    return(

        <main>
            <h2>CountDown: {time}</h2>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </main>
        
    )
}