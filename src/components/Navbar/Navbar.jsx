import React from "react";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div>
        {" "}
        <img className="navbar-logo" src={logo} alt="logo" />{" "}
      </div>
      <div className="links-container">
        <p>
          <a href="#home">Home </a>
        </p>
        <p>
          <a href="#home">About Us </a>
        </p>
        <p>
          <a href="#home">Features</a>
        </p>
        <p>
          <a href="#home">Solutions </a>
        </p>
      </div>
    </div>
  );
}
