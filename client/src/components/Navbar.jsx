import React from 'react';
import { Link } from 'react-router-dom'; // Only if using React Router

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md">
      <ul className="flex justify-center gap-6 text-sm font-semibold">
        <li><Link to="/home" className="hover:text-gray-400 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-400 transition">About</Link></li>
        <li><Link to="/projects" className="hover:text-gray-400 transition">Projects</Link></li>
        <li><Link to="/services" className="hover:text-gray-400 transition">Services</Link></li>
        <li><Link to="/contact" className="hover:text-gray-400 transition">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
