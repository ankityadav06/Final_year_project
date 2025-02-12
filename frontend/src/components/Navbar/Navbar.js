import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import logo from "../assets/Logo.png"; 
import './Navbar.css';
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in (e.g., from localStorage)
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Converts to true if user exists
  }, []);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <ul className="page_link">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/courses" className="hover:text-gray-300">Courses</Link></li>
          <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
        </ul>
        
        {/* Profile & Authentication Icons */}
        <div className="logo_icons">
          {/* Profile Icon (Visible only when logged in) */}
          {isLoggedIn ? (
            <Link to="/profile">
              <FaUserCircle size={24} className="hover:text-gray-300" />
            </Link>
          ) : (
            /* Login Icon (Visible only when logged out) */
            <Link to="/login">
              <MdLogin size={24} className="hover:text-gray-300" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
