import React from "react";

const SearchSection = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Projects"
        className="w-full border border-gray-500 p-1 rounded-md hover:bg-green-300 focus:border-black"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchSection;
