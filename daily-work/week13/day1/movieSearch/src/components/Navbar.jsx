import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#0a0022] text-white text-lg p-4">
      <img src="../../public/disney.png" alt="" />
      <Link to="/">HOME</Link>
      <img src="../../public/profile.png" alt="" />
    </div>
  );
};

export default Navbar;
