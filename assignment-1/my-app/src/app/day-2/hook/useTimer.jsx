"use client"

import { useState,useEffect } from "react"


export default function useTimer(initial)
{
    const [time,setTime]= useState(initial);
    const [isRunning,setRunning]=useState(false);

    useEffect(()=>{
        let timer;
        if(isRunning && time>0)
        {
            timer= setInterval(()=>{setTime((prev)=>prev-1)},1000);
        }


        return ()=>clearInterval(timer);
    },[time,isRunning])


    function start()
    {
        setRunning(true);
    }

    function pause()
    {
        setRunning(false);
    }


    function reset()
    {
        setRunning(false);
        setTime(initial);
    }

    return {time, start, pause, reset}
}

