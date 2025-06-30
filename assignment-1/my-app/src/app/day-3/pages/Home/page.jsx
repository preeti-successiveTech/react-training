"use client"

import { useEffect } from "react";
import { useAuth } from "@/context/context-3/AuthContext";

export default function Home(){
        const {isAuthenticated,setisAuthenticated}=useAuth();
        console.log(isAuthenticated)

    return(
                <div style={{backgroundColor:"rgb(250, 249, 246)",height:'100vh'}}>
                    <div style={{fontSize:'50px',textAlign:'center',paddingTop:'25%',fontWeight:'bold'}}>
                    Welcome Preeti
                    </div>
            </div>

        
    )
}