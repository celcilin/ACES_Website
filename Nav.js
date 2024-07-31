import React, { useState } from 'react';
import './Nav.css';
import logo from '.logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="first">
      <div className="navcontainer">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/">Ideas</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Leadership</a></li>
          </ul>
          <button className="join-button">Join Now</button>
          <div className="menu-icon" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"/>
            </svg>
          </div>
        </nav>
        <div className="heading">
          <h1>The Story of ACES</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
