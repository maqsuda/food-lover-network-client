import React, { useState } from "react";
import {
  FaEnvelope,
  FaPassport,
  FaSortAmountUpAlt,
  FaStamp,
  FaUser,
} from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

// import login from "../";
import { TbPassword } from "react-icons/tb";
import "./Login.css";
import { BsListNested } from "react-icons/bs";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
// import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="Login_Item bg-cover bg-center h-screen">
      {/* <div>
                <img src={login}></img>
            </div> */}

      <div className="flex items-center justify-center h-full bg-black-50 ">
        <div class="backdrop-blur-xl rounded-lg shadow-lg p-8 w-[600px]  bg-opacity-50 bg-transparent">
          <h2 class="text-center text-2xl font-semibold text-white mb-2">
            Sign In
          </h2>
          <p class="text-center text-sm font-semibold text-white mb-6">
            Enter personal data to sign in your account
          </p>

          <div class="flex justify-between items-center mb-4">
            {/* <FaEnvelope className='text-4xl text-white mr-2 '></FaEnvelope> */}
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border-b-2 text-white focus:border-[#CE2600] focus:outline-none  py-2 px-2 font-bold"
            />
          </div>

          <div class="flex justify-between items-center mb-4 relative">
            {/* <FaUser className='text-4xl text-white mr-2'></FaUser>  */}
            {/* {/* <TbPassword className='text-4xl text-white mr-2'></TbPassword> */}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className=" rounded-lg w-full text-white border-b-2 focus:border-[#CE2600]  focus:outline-none  py-2 px-2 font-bold"
            />
            <button
              onClick={handleShowPassword}
              className="btn-xs absolute top-2 right-5 bg-transparent border-none text-lg font-bold"
            >
              {showPassword ? <FaEye /> : <LuEyeClosed />}
            </button>
          </div>
          <div class="flex justify-between items-center mb-4 text-white hover:cursor-pointer  hover:text-[#CE2600]">
            <p className="underline">Forget Password ?</p>
          </div>

          <div class="flex justify-between items-center mb-4">
            <button className="btn w-full text-white bg-[#CE2600]">
              Sign In
            </button>
          </div>

          <div class="flex items-center mb-4 text-white gap-2">
            <input type="checkbox" name="" id="" />
            <p>Keep me signed in</p>
          </div>

          <div class="flex justify-between items-center mb-4 text-white gap-2">
            <div>
              <p>
                {/* <Link className="focus:text-amber-500" to="/register">
                  Sign Up
                </Link>{" "} */}
                OR sign in with
              </p>
            </div>

            <div className="flex gap-4 items-center">
              <FaGoogle className="text-2xl hover:cursor-pointer hover:text-[#CE2600] hover:border-white"></FaGoogle>
              <FaTwitter className="text-4xl"></FaTwitter>
              <FaFacebook className="text-3xl"></FaFacebook>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
