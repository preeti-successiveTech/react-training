"use client";

import { useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState([
    { name: 'hii', completed: false },
    { name: 'gym', completed: false },
    { name: 'study', completed: false },
    { name: 'notes', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  // Delete an item from the list
  function deleteItem(indexToDelete) {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  }

  // Add a new item to the list
  function add() {
    if (inputValue.trim() !== '') {
      const newTodo = {
        name: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  }

  // Toggle the completion status of a todo
  function toggleComplete(index) {
    setTodos(prevTodos =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <>
      <div id="toDoList">
        <input
          type="text"
          placeholder="Enter the item"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={add}>Add</button>
        <div>
          <ul>
            {todos.map((todo, index) => (
              <li
                key={index}
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none', // Strike-through if completed
                  opacity: todo.completed ? 0.5 : 1, // Optional: Make it slightly faded if completed
                  transition: 'opacity 0.3s ease', // Optional: Smooth fade effect
                }}
              >
                <div id="list">
                  <p>{todo.name}</p>
                  <button onClick={() => deleteItem(index)}>X</button>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(index)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
