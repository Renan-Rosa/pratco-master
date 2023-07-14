import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <img className="w-[100px] my-4" src={Logo} alt="/" />
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#home" class="nav_link active-link">
            Home
          </a>
        </li>
        <li className="p-4">
          <a href="#problema" class="nav_link active-link">
            Problema
          </a>
        </li>
        <li className="p-4">
          <a href="#proposta" class="nav_link active-link">
            Proposta
          </a>
        </li>
        <li className="p-4">
          <a href="#nicho" class="nav_link active-link">
            Nicho
          </a>
        </li>
        <li className="p-4">
          <a href="#contato" class="nav_link active-link">
            Contato
          </a>
        </li>
        <li className="p-4">
          <a href="#" class="nav_link active-link">
            <button className="bg-[#44ee77] text-black w-[115px] rounded-md font-medium px-2 py-1">
              Login
            </button>
          </a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <img className="w-[100px] my-4" src={Logo} alt="/" />
        </h1>
        <li className="p-4 border-b border-gray-600">
          <a href="#home" class="nav_link active-link">
            Home
          </a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="#problema" class="nav_link active-link">
            Problema
          </a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="#proposta" class="nav_link active-link">
            Prosposta
          </a>
        </li>
        <li className="p-4 border-b border-gray-600">
          <a href="#nicho" class="nav_link active-link">
            Nicho
          </a>
        </li>
        <li className="p-4">Contato</li>
      </ul>
    </div>
  );
};

export default Navbar;
