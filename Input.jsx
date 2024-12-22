import React, { useState } from "react";
import { useTasks } from "./App";
import "./Input.css";

function Input() {
  const [inputValue, setInputValue] = useState("");
  const { addTask, tasks } = useTasks(); // Access the tasks to check if any exist

  const handleAddTask = () => {
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue(""); // Clear the input after adding the task
    }
  };

  return (
    <div className="input-container">
      <div className="input-box">
        <input
          type="text"
          placeholder="some words"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-button">+</button>
      </div>
     
      {tasks.length > 0 && <div className="separator-line"></div>} {/* Conditional line */}
    </div>
  );
}

export default Input;
