import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add a new task
  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks(prev => [...prev, newTask]);
    setInput("");
  };

  // Toggle completed
  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>To-Do List</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
      />

      <button onClick={addTask} style={{ marginLeft: "8px" }}>
        Add
      </button>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{
              margin: "10px 0",
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            <span
              onClick={() => toggleTask(task.id)}
              style={{ cursor: "pointer" }}
            >
              {task.text}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: "12px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
