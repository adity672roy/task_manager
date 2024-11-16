import React from "react";
import PriorityColumn from "./PriorityColumn";

const TaskList = ({ tasks, onDelete, onToggleComplete, onUpdateTask }) => {
  const highPriorityTasks = tasks.filter((task) => task.priority === "high");
  const mediumPriorityTasks = tasks.filter(
    (task) => task.priority === "medium"
  );
  const lowPriorityTasks = tasks.filter((task) => task.priority === "low");

  return (
    <div className="task_columns">
      <PriorityColumn
        title="High Priority"
        tasks={highPriorityTasks}
        onDelete={onDelete}
        onToggleComplete={onToggleComplete}
        onUpdateTask={onUpdateTask}
      />
      <PriorityColumn
        title="Medium Priority"
        tasks={mediumPriorityTasks}
        onDelete={onDelete}
        onToggleComplete={onToggleComplete}
        onUpdateTask={onUpdateTask}
      />
      <PriorityColumn
        title="Low Priority"
        tasks={lowPriorityTasks}
        onDelete={onDelete}
        onToggleComplete={onToggleComplete}
        onUpdateTask={onUpdateTask}
      />
    </div>
  );
};

export default TaskList;
