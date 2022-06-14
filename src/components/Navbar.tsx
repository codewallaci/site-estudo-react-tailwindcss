import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 w-full px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#009bd6] px-8">
        CloudTech.io
      </h1>
      <ul className="hidden md:flex items-center">
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          <li className="p-4 cursor-pointer">Inicio</li>
        </Link>

        <Link to="about" spy={true} smooth={true}>
          <li className="p-4 cursor-pointer">Sobre</li>
        </Link>

        <Link to="contact" spy={true} smooth={true}>
          <li className="p-4 cursor-pointer ">Contato</li>
        </Link>
        <Link to="price" spy={true} smooth={true}>
          <button className="w-[110px] my-6 mx-auto py-2 bg-[#00b8ff] text-white font-bold rounded-lg">
            PLANOS
          </button>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-[#161616]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#009bd6] mt-8 ml-4">
          CloudTech.io
        </h1>
        <ul className="p-4 uppercase ">
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            <li className="p-4 border-b border-gray-500 ">Inicio</li>
          </Link>
          <Link to="about" spy={true} smooth={true}>
            <li className="p-4 border-b border-gray-500 ">Sobre</li>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <li className="p-4 border-b border-gray-500 ">Contato</li>
          </Link>
          <Link to="price" spy={true} smooth={true}>
            <button className="w-[200px] my-6 mx-auto py-2 bg-[#00b8ff] text-white font-bold rounded-lg">
              PLANOS
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};
