import React, { useState } from "react";
const dummyImages = [
"https://plus.unsplash.com/premium_photo-1674237276501-595398f90f87?q=80&w=423&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
"https://plus.unsplash.com/premium_photo-1724129049491-832dd86609df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3V0ZG9vciUyMHBhcnNsZXl8ZW58MHx8MHx8fDA%3D",
"https://images.unsplash.com/photo-1755179906261-99e6b32bf023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG91dGRvb3IlMjByb3NlbWVycnklMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
"https://images.unsplash.com/photo-1547836800-da4bff614a67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3V0ZG9vciUyMEJvdWdhaW52aWxsZWF8ZW58MHx8MHx8fDA%3D",
"https://images.unsplash.com/photo-1722435693095-903d4d77d040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T3V0ZG9vciUyMGphc21pbmV8ZW58MHx8MHx8fDA%3D",
"https://images.unsplash.com/photo-1753389281121-49a8d6428c92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T3V0ZG9vciUyMG1hcmlnb2xkfGVufDB8fDB8fHww",
"https://images.unsplash.com/photo-1679411216531-d899cb6da3d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25ha2VwbGFudHxlbnwwfHwwfHx8MA%3D%3D",
];
const PlantCard = ({ plant, onAvailabilityClick }) => {
  const [wishlisted, setWishlisted] = useState(false);
  const isAvailable =
    plant.inStock !== undefined ? plant.inStock : plant.available;
   const imgUrl =
    plant.image ||
    dummyImages[Math.floor(Math.random() * dummyImages.length)];
  return (
    <div className="bg-gradient-to-br from-green-50 via-green-100 to-green-200 border border-green-200 rounded-3xl shadow-2xl hover:scale-105 transition-all duration-200 p-6 flex flex-col justify-between h-full relative group">
      <div className="relative mb-4">
        <img
          src={imgUrl}
          alt={plant.name}
          className="w-full h-48 object-cover rounded-2xl border border-green-100 shadow-lg"
        />
        <button
          className={`absolute top-3 right-3 text-2xl transition ${
            wishlisted
              ? "text-pink-500 scale-110"
              : "text-gray-300 group-hover:text-pink-400"
          }`}
          onClick={() => setWishlisted((w) => !w)}
          aria-label="Add to wishlist"
        >
          {wishlisted ? "♥" : "♡"}
        </button>
      </div>
      <div>
        <h3 className="text-xl font-extrabold mb-1 text-green-800">
          {plant.name}
        </h3>
        <p className="text-green-700 font-bold mb-2 text-lg">
          ₹{plant.price}
        </p>
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 cursor-pointer shadow ${
            isAvailable
              ? "bg-green-200 text-green-800 hover:bg-green-300"
              : "bg-red-200 text-red-800 hover:bg-red-300"
          }`}
          onClick={() => onAvailabilityClick(isAvailable)}
          title="Filter by availability"
        >
          {isAvailable ? "In Stock" : "Out of Stock"}
        </span>
        <div className="flex flex-wrap gap-2 mt-3">
          {plant.categories.map((cat, idx) => (
            <span
              key={idx}
              className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs border border-green-300 font-semibold shadow"
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
