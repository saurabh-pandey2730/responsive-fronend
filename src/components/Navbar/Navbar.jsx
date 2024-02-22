import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white h-24">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src='data:image/jpeg;base64,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'
           alt="logo" className="md:cursor-pointer h-16" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden gap-x-4 ">
        <Link to ='/register' className="bg-blue-700 text-white  px-6 py-2 rounded-full gap-x-4">
         Register
    </Link>
        <button className="bg-[#a554eb]  mx-6 w-24 h-11  text-white inline rounded-full ">
        Cart <BsCart3 className="inline" />
    </button>
    
        </div>
       
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
          <Link to ='/register' className="bg-blue-700 text-white  px-6 py-2 rounded-full">
      Register
    </Link>
    <button className="bg-[#a554eb]  mx-16 w-24 h-11  text-white inline rounded-full md:hidden ">
        Cart <BsCart3 className="inline" />
    </button>

          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
