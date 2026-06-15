import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglebtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="hidden gap-20 md:flex font-semibold text-center">
        <NavLink to="/home"> Home </NavLink>
        <NavLink to="/Contact"> Contact </NavLink>
        <NavLink to="/Explore"> About Us </NavLink>
      </div>
      <button className="md:hidden" onClick={togglebtn}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <div
        className={`${isOpen ? "flex" : "hidden"} flex flex-col absolute top-20 right-1 font-semibold gap-2 text-center w-full shadow-xl`}
      >
        <NavLink to="/home"> Home </NavLink>
        <NavLink to="/Contact"> Contact </NavLink>
        <NavLink to="/Explore"> About Us </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
