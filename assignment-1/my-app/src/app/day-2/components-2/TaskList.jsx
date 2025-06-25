import { useCallback, useState } from "react";

export default function TaskList() {
  const [task, setTask] = useState([
    { id: 1, title: "java", completed: false },
    { id: 2, title: "react", completed: false },
    { id: 3, title: "next", completed: false },
    { id: 4, title: "C++", completed: false },
    { id: 5, title: "Python", completed: false },
  ]);
  const completeTask = useCallback((id) => {
    setTask((prev) =>
      prev.map((task) => 
        task.id === id ? { ...task, completed: true } : task)
    );
  }, []);
  return (
    <div>
      <h2>Task list</h2>
      <ul>
        {task.map((task) => 
          <li key={task.id}>
            {task.title}
            {console.log("hiii")}
            <button onClick={()=>completeTask(task.id)} disabled={task.completed}>{task.completed ? "completed" : "complete"}</button>
          </li>,
          <li>"hii"</li>
        )}
      </ul>
    </div>
  );
}
