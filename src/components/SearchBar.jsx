import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search_bar">
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FaSearch color="gray" className="search_icon" />
    </div>
  );
};

export default SearchBar;
