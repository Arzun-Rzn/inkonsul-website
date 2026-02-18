import "../styles/Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo logo-text">
        <span className="i">I</span>T
        <span className="full"> Inkonsul</span>
      </div>

      {/* Links */}
      <ul className={open ? "nav-links open" : "nav-links"}>

        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>

        <button className="nav-btn">Get Started</button>

      </ul>

      {/* Mobile Toggle */}
      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

    </nav>
  );
}
