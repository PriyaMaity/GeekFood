import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <div className="logo-name">
        <img className="logo-img" src={logo} alt="" />
        <h1>GeekFood</h1>
      </div>

      <div className="pages">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="">Quote</a>
          </li>
          <li>
            <a href="">Restaurants</a>
          </li>
          <li>
            <a href="">Foods</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <button>Get Started</button>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile Menu (Visible only when toggled) */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Quote</a>
          </li>
          <li>
            <a href="#">Restaurants</a>
          </li>
          <li>
            <a href="#">Foods</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
