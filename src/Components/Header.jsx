import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "../Styles/Header.css";
import Sidebar from "./Sidebar";
import logo from "../assets/logo.png";

const Header = () => {
  const [isShrink, setIsShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Lock body scroll when sidebar is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  /* Shrink on scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className={`header ${isShrink ? "shrink" : ""}`}>
        <div className="header-container">

          {/* LEFT (Logo + Brand) */}
          <Link to="/" className="header-left">
            <img src={logo} alt="Inkonsul Logo" className="logo" />

            <div className="brand-wrap">
              <span className="brand-full">Inkonsul Technologies</span>
              <span className="brand-short">Inkonsul Technologies</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="nav">

            <NavLink to="/company" className="nav-link">
              Company
            </NavLink>

            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>

            <NavLink to="/solutions" className="nav-link">
              Solution Hub
            </NavLink>

            <NavLink to="/insights" className="nav-link">
              Insights
            </NavLink>

            <NavLink to="/careers" className="nav-link">
              Careers
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              Contact Us
            </NavLink>

          </nav>

          {/* RIGHT */}
          <div className="header-right">

            {/* Hamburger (Mobile) */}
            <div
              className="hamburger"
              onClick={() => setMenuOpen(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            {/* Desktop Buttons */}
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>

          </div>

        </div>
      </header>

      {/* SIDEBAR */}
      <Sidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Header;