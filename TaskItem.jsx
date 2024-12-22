import React from "react";
import { useTasks } from "./App";
import "./TaskItem.css";

function TaskItem({ task }) {
  const { toggleTask } = useTasks();

  return (
    <div
      className={`task-item ${task.completed ? "completed" : ""}`}
      onClick={() => toggleTask(task.id)}
    >
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="checkbox"
        />
      </div>
      <span className="task-text">{task.text}</span>
    </div>
  );
}

export default TaskItem;
