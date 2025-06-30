"use client"
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/context-3/AuthContext";


export default function Login() {
    const { isAuthenticated, setIsAuthenticated} = useAuth();    //from authcontext
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const router = useRouter()

    const Handlesubmit = (e) => {
        e.preventDefault()    //prevent reloading of the form
        if (name == 'Preeti' && password == '123') {
            setIsAuthenticated(true);
            console.log("isAuthenticated is", isAuthenticated);
            alert('User LoggedIn Successfully');
            setInterval(() => {
                router.push('/day-3/pages/about');
            }, 1000);

        }
        setname(' ')
        setpassword(' ')
    }
    console.log("my isAuthenticated", isAuthenticated)  // debugging message

    return (
        <div>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <div>
                    <form style={{ display: "flex", flexDirection: "column", gap: '20px', paddingTop: '200px', textAlignLast: "center" }}>
                        <div style={{fontSize:"40px",fontWeight:"bold"}}>Log In</div>
                        <input type="text" placeholder="enter the text" onChange={(e) => setname(e.target.value)} value={name} />
                        <input type="text" placeholder="enter the password" onChange={(e) => setpassword(e.target.value)} value={password} />
                        <div>
                            <button onClick={Handlesubmit} style={{ backgroundColor: 'rgb(49, 137, 221)', color: "white", paddingLeft: '20px', paddingRight: '20px', fontSize: '20px', border: 'none', borderRadius: '15px' }}>submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}