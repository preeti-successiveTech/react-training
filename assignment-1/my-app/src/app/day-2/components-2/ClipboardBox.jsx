"use client"

import { useState } from "react";
import useClipboard from '../hook/useClipboard';

export default function ClipBoardBox()
{
    const [text,setText] = useState('');
    const {copied,copy} = useClipboard();

    function handleCopy(){
        if(text.trim()!=='')
        {
            copy(text);
        }
    };
    return(<>
    <div>
        <h2>Copy to useClipboard</h2>
        <input type="text" placeholder="Enter the text" value={text} onChange={(e)=> setText(e.target.value)}></input>
        <button onClick={handleCopy}>Copy</button>
        {copied && <span>Copied!</span>}
    </div>
    </>)
}