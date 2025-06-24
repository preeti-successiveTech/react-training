// 3.Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.
// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).
"use client";

import { useState } from "react";

export default function ToDoList() {
  let list =[]; 
    let [todos, setTodos] = useState("");
    function add(){
       list.push(todos);
        console.log(list);
    }
  return <>
  <label>Enter the item</label>
  <input type="text" placeholder="Enter the item" onChange={(e)=>setTodos(e.target.value)}></input>
  <button onClick={add}>Add</button>
    <div>
      <ul> 
        {list.map((value,index)=>{
          <li key = {index}>{value}</li>
        })}
       
      
      </ul>
    </div>
  </>
}
