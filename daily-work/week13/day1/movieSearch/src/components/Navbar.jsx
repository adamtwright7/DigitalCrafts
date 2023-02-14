import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-red-400">
      <Link to="/">Home</Link>
      Navbar
    </div>
  );
};

export default Navbar;
