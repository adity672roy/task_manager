import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdCheck } from "react-icons/md";

const Task = ({ task, onDelete, onToggleComplete, onUpdateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editPriority, setEditPriority] = useState(task.priority);

  const handleUpdate = () => {
    onUpdateTask(task.id, editTitle, editPriority);
    setIsEditing(false);
  };

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <div className="task_edit">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <div className="task_btns">
            <select
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <button onClick={handleUpdate} className="task_btn">
              <MdCheck />
            </button>
            <button onClick={() => setIsEditing(false)} className="task_btn">
              <IoMdClose color="red" />
            </button>
          </div>
        </div>
      ) : (
        <>
          <span className={`${task.completed ? "line" : ""} task_title`}>
            <p>{task.title}</p>
          </span>
          <div className="task_btns">
            <button onClick={onToggleComplete} className="task_btn">
              <IoCheckmarkSharp color={`${task.completed ? "red" : "green"}`} />
            </button>
            <button onClick={() => setIsEditing(true)} className="task_btn">
              <FiEdit2 color="green" />
            </button>
            <button onClick={onDelete} className="task_btn">
              <BsTrash color="red" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
