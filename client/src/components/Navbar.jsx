import React from "react";

const Navbar = () => (
  <nav className="bg-green-700 text-white px-4 py-3 flex items-center justify-between shadow-lg fixed w-full top-0 z-50">
    <div className="font-bold text-xl flex items-center gap-2">
      <span className="text-2xl">🌱</span> Urvann Mini Store
    </div>
    <div className="space-x-4 font-medium">
      <a href="/" className="hover:underline hover:text-green-200 transition">
        Home
      </a>
      <a
        href="/admin"
        className="hover:underline hover:text-green-200 transition"
      >
        Admin
      </a>
    </div>
  </nav>
);

export default Navbar;
