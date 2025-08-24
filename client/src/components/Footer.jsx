import React from "react";

const Footer = () => (
  <footer className="bg-green-700 text-white py-4 text-center mt-8 shadow-lg">
    <span>
      &copy; {new Date().getFullYear()} Urvann Mini Store. All rights reserved.
    </span>
    <div className="mt-2 text-sm">
      Made with <span className="text-pink-300">♥</span> for plant lovers.
    </div>
  </footer>
);

export default Footer;
