"use client"

import { useMemo, useState } from "react";

export default function StudentList(){
    const initialStudents = ['Preeti', 'Neha','Akash'];
    const [students, setStudents] = useState(initialStudents);
    const[inputValue,setInputValue] = useState('');
    function add(){
        if(inputValue)
        {
            setStudents([...students,inputValue]);
        }
    };
    const displayStudent = useMemo(()=>{
        return students.map((name,index)=>(
                    <li key ={index}>{name}</li>
                ));
    },[students])
    return(
        <div>
            <h2>StudentList</h2>
            <input type="text" placeholder="Enter the student name " value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button onClick={add}>Add student</button>
            <ul>
                {displayStudent}
            </ul>
        </div>
    )
}