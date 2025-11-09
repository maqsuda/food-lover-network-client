import React, { use, useState } from "react";
import { FaEye, FaFileImport, FaTwitter } from "react-icons/fa";
import { FaEnvelope, FaGoogle, FaKey, FaLock, FaUser } from "react-icons/fa6";
import "../login/Login.css";

import { Link } from "react-router";
import { LuEyeClosed } from "react-icons/lu";
import { AuthContext } from "../../contexts/AuthContext";

const Registration = () => {
  const { createUser, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;
    const conformPassword = event.target.conformPassword.value;
    console.log(name, email, photo, password, conformPassword);
    setError("");
    setSuccess(false);

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        setSuccess(true);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleShowConformPassword = (event) => {
    event.preventDefault();
    setShowConformPassword(!showConformPassword);
  };

  return (
    <div className="Login_Item bg-cover bg-center h-screen pt-20">
      <div className="flex items-center justify-center h-full bg-black-50 ">
        <div class="backdrop-blur-xl rounded-lg shadow-lg py-4 px-8 w-[600px] bg-opacity-50 bg-transparent">
          <h2 class="text-center text-2xl font-semibold text-white mb-2">
            Sign Up An Account
          </h2>
          <p class="text-center text-sm font-semibold text-white mb-6">
            Enter personal data to create your account
          </p>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              {/* Name  */}
              <div class="relative flex justify-between items-center mb-4">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                  <FaUser></FaUser>
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="pl-10 rounded-lg w-full text-white border-b-2 focus:border-[#CE2600]   placeholder-white py-2 px-2 font-bold"
                />
              </div>

              {/* Email */}

              <div class="relative flex justify-between items-center mb-4">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                  <FaEnvelope></FaEnvelope>
                </div>

                <input
                  type="email"
                  name="email"
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
                  name="photo"
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full rounded-lg border-b-2 text-white focus:border-[#CE2600] focus:outline-none placeholder-white py-2 pl-10 font-bold"
                />

                <button
                  onClick={handleShowPassword}
                  className=" btn-xs absolute top-2 right-5 bg-transparent border-none text-lg font-bold text-white"
                >
                  {showPassword ? <FaEye /> : <LuEyeClosed />}
                </button>
              </div>

              {/* Conformed Password */}

              <div class="relative flex justify-between items-center mb-4 text-white">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaLock></FaLock>
                </div>

                <input
                  type={showConformPassword ? "text" : "password"}
                  name="conformPassword"
                  placeholder="Conformed Password"
                  className="pl-10 rounded-lg w-full text-white border-b-2 focus:border-[#CE2600]  focus:outline-none placeholder-white py-2 px-2 font-bold"
                />
                <button
                  onClick={handleShowConformPassword}
                  className=" btn-xs absolute top-2 right-5 bg-transparent border-none text-lg text-white font-bold"
                >
                  {showConformPassword ? <FaEye /> : <LuEyeClosed />}
                </button>
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
                      className="text-white hover:text-[#CE2600] hover:underline font-bold"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </fieldset>
            {error && (
              <p className="text-[#CE2600] font-bold text-center">{error}</p>
            )}
            {success && (
              <p className="text-green-700 font-bold text-center">
                Account Created Successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
