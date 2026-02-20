import React, { useEffect, useState } from "react";
import "../Styles/Header.css";
import logo from "../assets/logo.png"; 
const Header = () => {
    const [isShrink, setIsShrink] = useState(false);

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
            <span className="brand-name">Inkonsul Technologies</span>
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
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
        </div>

      </div>  

      

    </header>
  );
};

export default Header;