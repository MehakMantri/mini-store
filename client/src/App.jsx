import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <>
      <nav className="bg-green-600 text-white p-4 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
