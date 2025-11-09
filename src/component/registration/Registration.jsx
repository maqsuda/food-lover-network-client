import React from "react";
import { FaFileImport, FaTwitter } from "react-icons/fa";
import { FaEnvelope, FaGoogle, FaKey, FaLock, FaUser } from "react-icons/fa6";
import "../login/Login.css";
import { Link } from "react-router";

const Registration = () => {
  return (
    <div className="Login_Item bg-cover bg-center h-screen">
      <div className="flex items-center justify-center h-full bg-black-50 ">
        <div class="backdrop-blur-xl rounded-lg shadow-lg p-8 w-[600px] bg-opacity-50 bg-transparent">
          <h2 class="text-center text-2xl font-semibold text-white mb-2">
            Sign Up An Account
          </h2>
          <p class="text-center text-sm font-semibold text-white mb-6">
            Enter personal data to create your account
          </p>

          {/* Name  */}
          <div class="relative flex justify-between items-center mb-4">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
              <FaUser></FaUser>
            </div>

            <input
              type="text"
              placeholder="Name"
              className="pl-10 rounded-lg w-full text-white border-b-2 focus:border-[#CE2600]  focus:outline-none placeholder-white py-2 px-2 font-bold"
            />
          </div>

          {/* Email */}

          <div class="relative flex justify-between items-center mb-4">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
              <FaEnvelope></FaEnvelope>
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border-b-2 text-white  focus:border-[#CE2600] focus:outline-none placeholder-white py-2 pl-10 font-bold"
            />
          </div>

          {/* Photo URL */}

          <div class="relative flex justify-between items-center mb-4">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
              <FaFileImport />
            </div>

            <input
              type="text"
              placeholder="Photo URL"
              className="w-full rounded-lg border-b-2 text-white  focus:border-[#CE2600] focus:outline-none placeholder-white py-2 pl-10 font-bold"
            />
          </div>

          {/* Password */}

          <div class="relative flex justify-between items-center mb-4">
            {/* <FaEnvelope className='text-4xl text-white mr-2 '></FaEnvelope> */}

            <div class="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
              <FaLock></FaLock>
            </div>

            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border-b-2 text-white focus:border-[#CE2600] focus:outline-none placeholder-white py-2 pl-10 font-bold"
            />
          </div>

          {/* Conformed Password */}

          <div class="relative flex justify-between items-center mb-4 text-white">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock></FaLock>
            </div>

            <input
              type="password"
              placeholder="Conformed Password"
              className="pl-10 rounded-lg w-full text-white border-b-2 focus:border-[#CE2600]  focus:outline-none placeholder-white py-2 px-2 font-bold"
            />
          </div>

          <div class="flex justify-between items-center mb-4 mt-10">
            <button className="btn w-full bg-[#CE2600] text-white">
              Register
            </button>
          </div>

          <div class="flex justify-between items-center mb-4 text-white gap-2">
            <div>
              <p className="p-4">
                Already Have An Account ?{" "}
                <Link
                  to="/login"
                  className="text-white hover:underline hover:text-[#CE2600] "
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
