import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu">
        <NavLink to="/gallery">gallery</NavLink>

        <NavLink to="/contact">contact</NavLink>

        <NavLink to="/about">about</NavLink>

        <NavLink to="/">Home</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
