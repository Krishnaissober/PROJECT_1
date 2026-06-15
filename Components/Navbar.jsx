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
      <div className="hidden gap-20 md:flex font-semibold text-center text-xl hover:text-[#4A6B53] transition-colors">
        <NavLink to="/home"> Products </NavLink>
        <NavLink to="/Contact"> Sustainability </NavLink>
        <NavLink to="/Explore"> Wholesale </NavLink>
      </div>
      <button className="md:hidden" onClick={togglebtn}>
        {isOpen ? <X /> : <Menu />}
      </button>
      <div
        className={`${isOpen ? "flex" : "hidden"} flex flex-col fixed top-20 left-0 font-semibold gap-2 bg-white text-center w-full shadow-xl  py-9 z-{90} border-b-2 shadow-xl`}
      >
        <NavLink to="/home"> Products </NavLink>
        <NavLink to="/Contact"> Sustainability </NavLink>
        <NavLink to="/Explore"> Wholesale </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
