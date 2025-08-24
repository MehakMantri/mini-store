import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

const AddPlantForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState("");
  const [available, setAvailable] = useState(true);
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("info");
  const [loading, setLoading] = useState(false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMsgType("info");

    // validations
    if (!name.trim() || !price) {
      setMessage("⚠️ Name and Price are required");
      setMsgType("error");
      return;
    }
    if (isNaN(Number(price)) || Number(price) <= 0) {
      setMessage("⚠️ Price must be a positive number");
      setMsgType("error");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name: name.trim(),
        price: Number(price),
        categories: categories
          ? categories
              .split(",")
              .map((c) => c.trim())
              .filter(Boolean)
          : [],
        inStock: Boolean(available),
      };
      await axios.post(`${API_BASE_URL}/api/plants`, payload);
      setMessage("✅ Plant added successfully!");
      setMsgType("success");
      setName("");
      setPrice("");
      setCategories("");
      setAvailable(true);
    } catch (err) {
      let errorMsg = "❌ Failed to add plant";
      if (err.response && err.response.data) {
        errorMsg += ": " + JSON.stringify(err.response.data);
      } else if (err.message) {
        errorMsg += ": " + err.message;
      }
      setMessage(errorMsg);
      setMsgType("error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-green-200 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 border border-green-100 flex flex-col gap-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">🌱</span>
          <h2 className="text-2xl font-extrabold text-green-700">
            Add New Plant
          </h2>
        </div>
        <Alert
          type={msgType}
          message={message}
          onClose={() => setMessage("")}
        />
        <input
          type="text"
          placeholder="Plant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-green-600 text-lg bg-green-50"
          required
          disabled={loading}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-green-600 text-lg bg-green-50"
          required
          disabled={loading}
        />
        <input
          type="text"
          placeholder="Categories (comma separated)"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-green-600 text-lg bg-green-50"
          required
          disabled={loading}
        />
        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
            className="mr-2 accent-green-600 scale-125"
            disabled={loading}
          />
          <span className="text-green-700 font-semibold text-lg">
            Available
          </span>
        </label>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-3 rounded-xl font-bold text-lg hover:scale-105 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-pulse">Adding...</span>
          ) : (
            <>Add Plant</>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddPlantForm;
