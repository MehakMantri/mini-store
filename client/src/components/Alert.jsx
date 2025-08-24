import React from "react";

const Alert = ({ type = "info", message, onClose }) => {
  if (!message) return null;
  const color =
    type === "success"
      ? "bg-green-100 text-green-800 border-green-300"
      : type === "error"
      ? "bg-red-100 text-red-800 border-red-300"
      : "bg-blue-100 text-blue-800 border-blue-300";
  return (
    <div
      className={`border ${color} px-4 py-2 rounded mb-2 flex items-center justify-between`}
    >
      <span>{message}</span>
      {onClose && (
        <button className="ml-4 text-lg" onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
