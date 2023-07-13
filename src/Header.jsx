import React from "react";
import Logo from "./assets/logo.png";
import './App.css'

const Header = () => {
  return (
    <nav className="container">
    <div className="logo">
      <img src={Logo} alt="logo" />
    </div>
    <ul>
      <li href="#">Menu</li>
      <li href="#">Location</li>
      <li href="#">About</li>
      <li href="#">Contact</li>
    </ul>

    <button>login</button>
  </nav>
  );
};

export default Header;
