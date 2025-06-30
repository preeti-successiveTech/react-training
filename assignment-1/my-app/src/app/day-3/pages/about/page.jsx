"use client"

import Router from "next/router";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import { useAuth } from "@/context/context-3/AuthContext";

export default function About(){
    const router= useRouter();
    const {isAuthenticated,setisAuthenticated}=useAuth();
        useEffect(()=>{
            console.log("this is the isAuthenticated",isAuthenticated)

        if(!isAuthenticated){
            console.log("this is the isAuthenticated",isAuthenticated)
            router.push('/day-3/pages/Login')
        }
    },[])
    console.log("hello nirmit ji",isAuthenticated)
    return(
        <div style={{backgroundColor:"rgb(250, 249, 246)",height:'100vh'}}>
            <div style={{margin:'auto',width:'75%',textAlign:'center',paddingTop:'25%'}}>
                            {isAuthenticated ? (
                <div  style={{fontSize:'50px',fontWeight:"bold"}}>Welcome to About Page</div>
            ):(
                <div style={{fontSize:'50px',fontWeight:"bold"}}>
                    Kindly, Login
                </div>
            )}
            </div>

        </div>
    )
}