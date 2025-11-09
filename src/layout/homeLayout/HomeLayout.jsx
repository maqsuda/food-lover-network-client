import React from "react";
import { Outlet } from "react-router";
import Footer from "../../component/footer/Footer";
import Navbar from "../../component/navbar/Navbar";

const HomeLayput = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayput;
