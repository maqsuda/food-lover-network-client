import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaPinterest,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-[#FFCD00] rounded mx-auto flex flex-col py-5">
      <div className="grid grid-cols-12  justify-between w-11/12 mx-auto">
        <nav className=" grid grid-flow-row md:grid-flow-col justify-items-start gap-4 text-white font-bold font-2xl p-1 col-span-11 ">
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>

        <nav className=" grid grid-flow-row md:grid-flow-col gap-4 justify-items-end col-span-1">
          <span className=" text-white font-bold font-3xl p-1">
            <FaInstagramSquare />
          </span>
          <span className=" text-white font-bold font-3xl p-1">
            <FaFacebook />
          </span>
          <span className="text-white font-bold font-3xl p-1">
            <FaPinterestP />
          </span>
        </nav>
      </div>

      <div className="flex justify-center w-full">
        <aside>
          <p className="text-white font-bold">
            © {new Date().getFullYear()} - GreenNest. All rights reserved.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
