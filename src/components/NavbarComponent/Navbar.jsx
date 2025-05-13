import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import { NavLink, Link } from "react-router-dom";
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
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quotes"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Restaurants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/foods"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Foods
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contacts
            </NavLink>
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
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quotes"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/restaurants"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Restaurants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/foods"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Food
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
