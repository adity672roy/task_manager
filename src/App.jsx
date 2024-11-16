import React, { useState, useEffect } from "react";
import "./App.css";
import SortDropdown from "./components/SortDropdown";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import SearchBar from "./components/SearchBar";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("dateNewest");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks).map((task) => ({
        ...task,
        date: new Date(task.date),
      }));
      setTasks(parsedTasks);
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      priority,
      date: new Date(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTask = (id, updatedTitle, updatedPriority) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title: updatedTitle, priority: updatedPriority }
          : task
      )
    );
  };

  const getSortedTasks = (tasks) => {
    const sortedTasks = [...tasks];
    switch (sortOption) {
      case "dateNewest":
        return sortedTasks.sort((a, b) => b.date - a.date);
      case "dateOldest":
        return sortedTasks.sort((a, b) => a.date - b.date);
      case "title":
        return sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
      case "completed":
        return sortedTasks.sort((a, b) => a.completed - b.completed);
      default:
        return sortedTasks;
    }
  };

  const filteredTasks = getSortedTasks(
    tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="App">
      <div className="app_content">
        <div className="header">
          <h1 className="heading">Task Manager</h1>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <TaskInput onAddTask={addTask} />
        <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggleComplete={toggleComplete}
          onUpdateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default App;
