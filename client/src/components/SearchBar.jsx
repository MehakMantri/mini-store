import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search plants..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-2 border border-green-200 rounded-md mb-4"
    />
  );
};

export default SearchBar;
