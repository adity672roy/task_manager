import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TaskInput = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");

  const handleAdd = () => {
    if (title) {
      onAddTask(title, priority);
      setTitle("");
      setPriority("low");
    }
  };

  return (
    <div className="task_input">
      <input
        type="text"
        placeholder="Add a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      
      <select value={priority} onChange={(e) => setPriority(e.target.value)} className="select">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleAdd} className="add_btn">
        <FaPlus color="white" className="add_icon"/>
      </button>
    </div>
  );
};

export default TaskInput;
