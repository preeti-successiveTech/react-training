"use client"

import { useEffect, useState } from "react"

export default function useLocalStorage(key, initialValue){
    const [value,setValue] = useState(()=>{
        if(typeof window === 'undefined')
            return initialValue;
    try{
        const stored = window.localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue ;
    }
    catch(err)
    {
        console.error('LocalStorage error',err);
        return initialValue;
    }
    });
    useEffect(()=>{
        try{
            window.localStorage.setItem(key, JSON.stringify(value));
        }
         catch(err)
    {
        console.error('failed to save LOcalStorage error',err);
    }
    },[key,value]);
    return [value,setValue];
}