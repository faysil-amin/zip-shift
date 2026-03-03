import React, { useState } from "react";
import { NavLink } from "react-router";
import Container from "./Cotainer/Container";
import Logo from "../Logo/Logo";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [color, setColor] = useState("Services");
  const link = (
    <>
      <li
        className={`${color === "Services" ? "bg-secondary rounded-lg px-2 py-1" : ""}`}
        onClick={() => setColor("Services")}
      >
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li
        className={`${color === "Coverage" ? "bg-secondary rounded-lg px-2 py-1" : ""}`}
        onClick={() => setColor("Coverage")}
      >
        <NavLink to={"/coverage"}>Coverage</NavLink>
      </li>
      <li
        className={`${color === "AboutUs" ? "bg-secondary rounded-lg px-2 py-1" : ""}`}
        onClick={() => setColor("AboutUs")}
      >
        {" "}
        <NavLink to={"/aboutus"}>About Us</NavLink>
      </li>
      <li
        className={`${color === "Pricing" ? "bg-secondary rounded-lg px-2 py-1" : ""}`}
        onClick={() => setColor("Pricing")}
      >
        <NavLink to={"/pricing"}>Pricing</NavLink>
      </li>
      <li
        className={`${color === "Blog" ? "bg-secondary rounded-lg px-2 py-1" : ""}`}
        onClick={() => setColor("Blog")}
      >
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li
        className={`${color === "Contact" ? "bg-secondary rounded-lg px-2 py-1" : ""}`}
        onClick={() => setColor("Contac")}
      >
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <Container>
      <div className="navbar bg-base-100 rounded-lg py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="font-semibold menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="text-sm md:text-xl hidden md:flex">
            <Logo></Logo>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-4 font-semibold">{link}</ul>
        </div>
        <div className="navbar-end  md:flex items-center gap-2 ">
          <button className="md:px-4 px-2 py-1 md:py-2  rounded-lg font-semibold  border border-mauve-500 hover:bg-mauve-200">
            <NavLink className="text-sm md:text-xl">SingIn</NavLink>
          </button>

          <div className="flex">
            <button className="md:px-4 px-2 py-1 md:py-2  rounded-lg font-semibold  bg-secondary">
              <NavLink className="text-sm md:text-xl">SingUp</NavLink>
            </button>
            <NavLink className="bg-black p-1 md:p-2 text-secondary flex items-center justify-center font-bold text-xl rounded-[50%]">
              <FiArrowUpRight />
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
