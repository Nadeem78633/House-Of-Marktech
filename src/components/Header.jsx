import React, { useState } from "react";
import "../assets/css/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>House of MarkTech</h1>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={toggleMenu}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
   
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
