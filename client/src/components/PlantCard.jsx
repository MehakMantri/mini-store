import React from "react";

const PlantCard = ({ plant, onAvailabilityClick }) => {
  const isAvailable =
    plant.inStock !== undefined ? plant.inStock : plant.available;
  const stockStatus = isAvailable ? "In Stock" : "Out of Stock";
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-xl transition duration-200 bg-white flex flex-col justify-between h-full border-green-200">
      <div>
        <h3 className="text-lg font-bold mb-1">{plant.name}</h3>
        <p className="text-gray-600 font-semibold mb-1">₹{plant.price}</p>
        <span
          className={`inline-block px-2 py-1 rounded text-xs font-bold mb-2 cursor-pointer ${
            isAvailable
              ? "bg-green-100 text-green-700 hover:bg-green-200"
              : "bg-red-100 text-red-700 hover:bg-red-200"
          }`}
          onClick={() => onAvailabilityClick(isAvailable)}
          title="Filter by availability"
        >
          {isAvailable ? "In Stock" : "Out of Stock"}
        </span>
        <div className="flex flex-wrap gap-1 mt-2">
          {plant.categories.map((cat, idx) => (
            <span
              key={idx}
              className="inline-block bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs border border-green-200"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
