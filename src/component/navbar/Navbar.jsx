import React from "react";
import logo from "../../../public/review.png";
import { NavLink } from "react-router";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/" className="mr-5 ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="mr-5 ">
          All Reviews
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="mr-5 ">
          My Reviews
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-sm mx-auto bg-white z-50 backdrop-blur-sm fixed">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold text-[#CE2600]"
          >
            {links}
          </ul>
        </div>
        <div className="text-xl flex items-center gap-2">
          <img src={logo} className="size-6 md:size-16 rounded-full"></img>
          <span className="text-xs md:text-2xl font-bold text-[#CE2600]">
            Food Lover Network
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-[#CE2600]">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
