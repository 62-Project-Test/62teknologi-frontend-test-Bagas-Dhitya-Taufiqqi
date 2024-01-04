import React, { useState } from "react";

const Search = ({ onSearch, placeholder }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        placeholder={placeholder}
        className="p-2 border rounded w-80"
        value={searchInput}
        onChange={handleSearchChange}
      />
      <button
        className="ml-2 p-2 bg-blue-500 text-white rounded"
        onClick={() => onSearch(searchInput)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
