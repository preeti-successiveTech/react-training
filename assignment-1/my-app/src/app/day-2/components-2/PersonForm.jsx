// 2.Create a functional component called PersonForm.
// Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
// Render three input fields for the user to enter their first name, last name, and age.
// As the user types, update the respective state variables.
// Display the entered information below the input fields.

"use client";

import { useState } from "react";

export default function PersonForm() {
  let [firstName, setFirstName] = useState("");
  let [latName, setlastName] = useState("");
  let [age, setAge] = useState("");
  return (
    <>
      <div id="form-wrapper">
        <form action={""}>
          <div id='content-1'>
          <label ><b>First Name:</b></label>
          <input
            type="text"
            placeholder="Enter the First Name"
            onChange={(e) => setFirstName(e.target.value)}
          /></div>
          <br />
          <div id='content-1'>
          <label><b>Last Name:</b></label>
          <input
            type="text"
            placeholder="Enter the Last Name"
            onChange={(e) => setlastName(e.target.value)}
          />
          </div>
          <br />
          <div id='content-1'>
          <label><b>Age:</b></label>
         <input
            type="text"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          /></div> 
        </form>
      </div>

      <h1>Form Data</h1>
      <div id="form-Data">
        <p>
          <b>FirstName: </b>
          {firstName}{" "}
        </p>
        <p>
          <b>LastName: </b>
          {latName}{" "}
        </p>
        <p>
          <b>Age: </b>
          {age}{" "}
        </p>
      </div>
    </>
  );
}
