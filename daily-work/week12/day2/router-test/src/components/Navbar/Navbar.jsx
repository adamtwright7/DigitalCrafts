import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/homepage"> Home </Link>
      <Link to="/account"> Account </Link>
    </nav>
  );
};

export default Navbar;
