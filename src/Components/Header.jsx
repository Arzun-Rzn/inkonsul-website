import React, { useEffect, useState } from "react";
import "../Styles/Header.css";
import logo from "../assets/logo.png"; 
const Header = () => {
    const [isShrink, setIsShrink] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
    <header className={`header ${isShrink ? "shrink" : ""}`}>
      <div className="header-container">
        
            {/* Left Section */}
        <a href="/" className="header-left">
            <img src={logo} alt="Inkonsul Logo" className="logo" />
            <div className="brand-wrap">
                <span className="brand-full">Inkonsul Technologies</span>
                <span className="brand-short">Inkonsul Technologies</span>
            </div>
        </a>

        {/* Center Navigation */}
        <nav className="nav">
            <a href="#">Company</a>
            <a href="#">Services</a>
            <a href="#">Solution Hub</a>
            <a href="#">Insights</a>
            <a href="#">Careers</a>
            <a href="#">Contact Us</a>
        </nav>

        {/* Right Section */}
        <div className="header-right">
            {/* Hamburger */}
                <div
                className="hamburger"
                onClick={() => setMenuOpen(true)}
                >
                <span></span>
                <span></span>
                <span></span>
                </div>
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
        </div>
        {/* Mobile Sidebar */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

            <div className="menu-header">
                <span>Menu</span>
                <button onClick={() => setMenuOpen(false)}>✕</button>
            </div>

            <ul>
                <li>Home</li>
                <li>Company</li>
                <li>Services</li>
                <li>Solution Hub</li>
                <li>Insights</li>
                <li>Careers</li>
                <li>Contact Us</li>
            </ul>

            <div className="menu-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Sign Up</button>
            </div>

            </div>

            {/* Overlay */}
            {menuOpen && (
            <div
                className="menu-overlay"
                onClick={() => setMenuOpen(false)}
            ></div>
            )}
      </div>  

      

    </header>
  );
};

export default Header;