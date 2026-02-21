import React from "react";
import { NavLink } from "react-router-dom";

import "../Styles/Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>

        {/* Header */}
        <div className="sidebar-header">
          <h2>Inkonsul Technologies</h2>

          <button
            className="sidebar-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">

          <NavLink to="/" onClick={onClose}>
            Home
          </NavLink>

          <NavLink to="/company" onClick={onClose}>
            Company
          </NavLink>

          <NavLink to="/services" onClick={onClose}>
            Services
          </NavLink>

          <NavLink to="/solutions" onClick={onClose}>
            Solution Hub
          </NavLink>

          <NavLink to="/insights" onClick={onClose}>
            Insights
          </NavLink>

          <NavLink to="/careers" onClick={onClose}>
            Careers
          </NavLink>

          <NavLink to="/contact" onClick={onClose}>
            Contact Us
          </NavLink>

        </nav>

        {/* Bottom Buttons */}
        <div className="sidebar-actions">

          <button className="login-btn">
            Login
          </button>

          <button className="signup-btn">
            Sign Up
          </button>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;