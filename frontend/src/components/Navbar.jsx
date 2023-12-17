// frontend/src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl lg:text-3xl font-bold">
          Startup Directory
        </Link>
        <div className="flex text-base lg:text-xl">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/add-startup" className="nav-link inline-block lg:text-xl">
            Add Startup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
