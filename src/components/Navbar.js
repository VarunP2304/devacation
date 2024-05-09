// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          SDG Dashboard
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/solutions" className="navbar-link">
              Solutions
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/countries" className="navbar-link">
              Countries
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/fact-sheet" className="navbar-link">
              Fact Sheet
            </Link>
          </li>
          {/* Add more navbar items and links here */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
