"use client"

import { useState } from "react";

export default function useClipboard(){
    const[copied, setCopied] = useState(false);
    const copy = async(text) =>{
        try{
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(()=>
                setCopied(false),1500);
        }
        catch(err)
        {
            console.error('failed to copy',err);
        }
    };
    return{copied,copy};
}