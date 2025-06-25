"use client"
import useLocalStorage from "../hook/useLocalStorage";

export default function LocalStorage(){
    const [name,setName] = useLocalStorage('usename','');
    return(
        <div>
            <h2>Save name to LocalStorage</h2>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter the text"></input>
        <p>Hello , {name || 'Guest'}</p>

            </div>
    );
}