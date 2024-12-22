import React, { useState, createContext, useContext } from "react";
import Header from "./Header";
import Input from "./Input";
import TaskList from "./TaskList";
import "./App.css";

// Create Context
const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

function App() {
  const [tasks, setTasks] = useState([]); // Initialize with an empty array

  const addTask = (taskText) => {
    if (taskText) {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask }}>
      <div className="app-container">
        <div className="todo-app">
          <div className="app">
            <Header />
            <Input />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskContext.Provider>
  );
}

export default App;