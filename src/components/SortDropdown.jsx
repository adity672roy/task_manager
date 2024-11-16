import React from "react";

const SortDropdown = ({ setSortOption }) => {
  return (
    <div className="sort_dropdown">
      <p>Sort By: </p>
      <select onChange={(e) => setSortOption(e.target.value)}>
        <option value="dateNewest">Newest</option>
        <option value="dateOldest">Oldest</option>
        <option value="title">Title (A-Z)</option>
        <option value="completed">Completion Status</option>
      </select>
    </div>
  );
};

export default SortDropdown;
