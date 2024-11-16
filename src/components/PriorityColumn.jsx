import React from "react";
import Task from "./Task";

const PriorityColumn = ({
  title,
  tasks,
  onDelete,
  onToggleComplete,
  onUpdateTask,
}) => {
  return (
    <div className="priority_column">
      <h3 className="priority_title">{title}</h3>
      {tasks.length === 0 ? (
        <p className="no_task">No tasks</p>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => onDelete(task.id)}
            onToggleComplete={() => onToggleComplete(task.id)}
            onUpdateTask={onUpdateTask}
          />
        ))
      )}
    </div>
  );
};

export default PriorityColumn;
