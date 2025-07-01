import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;

    setTasks((prevTasks) => [...prevTasks, task.trim()]);
    setTask(""); // Clear input after adding
  };

  return (
    <div>
      <h2>Todo List</h2>

      {/* Form with controlled input */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value={task}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Task list */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
