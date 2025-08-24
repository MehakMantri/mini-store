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
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded-lg shadow bg-white"
    >
      <h2 className="text-xl font-bold mb-2 text-green-700">Add New Plant</h2>
      <Alert type={msgType} message={message} onClose={() => setMessage("")} />
      <input
        type="text"
        placeholder="Plant Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded mb-2 focus:outline-green-600"
        required
        disabled={loading}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-2 border rounded mb-2 focus:outline-green-600"
        required
        disabled={loading}
      />
      <input
        type="text"
        placeholder="Categories (comma separated)"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        className="w-full p-2 border rounded mb-2 focus:outline-green-600"
        required
        disabled={loading}
      />
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
          className="mr-2"
          disabled={loading}
        />
        <span className="text-green-700 font-semibold">Available</span>
      </label>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Plant"}
      </button>
    </form>
  );
};

export default AddPlantForm;
