import React from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "./App";
import "./TaskList.css";

function TaskList() {
  const { tasks } = useTasks();

  return (
    <div className="task-list">
      {tasks.length > 0 && tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      
    </div>
  );
}

export default TaskList;