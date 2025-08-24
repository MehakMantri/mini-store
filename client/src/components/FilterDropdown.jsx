import React from "react";

const FilterDropdown = ({ categories, selected, setSelected }) => {
  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="p-2 border border-green-200 rounded-md mb-4"
    >
      <option value="">All Categories</option>
      {categories.map((cat, idx) => (
        <option key={idx} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
