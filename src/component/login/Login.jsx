import React, { use, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

import "./Login.css";

import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

const Login = () => {
  const { signIn, emailReset, signInWithGoogle } = use(AuthContext);
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  // const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        //  console.log(result.user);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
          // password: result.user.password,
          // conformPassword: result.user.conformPassword,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then(() => {
            // console.log("data after user save", data);
          });

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "User Already Exists.",
          showConfirmButton: false,
          timer: 1500,
        });
        // setError(error.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // setError("");

    signIn(email, password)
      .then(() => {
        event.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
        // setError("Email or Password do not matched");

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Email or Password do not matched",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    // console.log("Forget Password", email);
    emailReset(email)
      .then(() => {
        // alert("please check your email");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please check your email",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        //    console.log(error.message);
      });
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
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <div class="flex justify-between items-center mb-4">
                {/* <FaEnvelope className='text-4xl text-white mr-2 '></FaEnvelope> */}
                <input
                  type="email"
                  ref={emailRef}
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-lg border-b-2 text-white focus:border-[#CE2600] focus:outline-none  py-2 px-2 font-bold"
                />
              </div>

              <div class="flex justify-between items-center mb-4 relative">
                {/* <FaUser className='text-4xl text-white mr-2'></FaUser>  */}
                {/* {/* <TbPassword className='text-4xl text-white mr-2'></TbPassword> */}
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className=" rounded-lg w-full text-white border-b-2 focus:border-[#CE2600]  focus:outline-none  py-2 px-2 font-bold"
                />
                <button
                  onClick={handleShowPassword}
                  className="btn-xs absolute top-2 right-5 bg-transparent border-none text-lg text-white font-bold"
                >
                  {showPassword ? <FaEye /> : <LuEyeClosed />}
                </button>
              </div>
              <div
                onClick={handleForgetPassword}
                class="flex justify-between items-center mb-4 text-white hover:cursor-pointer  hover:text-[#CE2600]"
              >
                <a className="link link-hover">Forget Password ?</a>
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
                    <Link
                      className="focus:text-[#CE2600] font-bold hover:underline hover:cursor-pointer"
                      to="/register"
                    >
                      Register
                    </Link>{" "}
                    OR sign in with
                  </p>
                </div>

                <div className="flex gap-4 items-center">
                  <FaGoogle
                    onClick={handleGoogleSignIn}
                    className="text-2xl hover:cursor-pointer hover:text-[#CE2600] hover:border-white"
                  ></FaGoogle>
                  <FaXTwitter className="text-3xl"></FaXTwitter>
                  <FaFacebook className="text-3xl"></FaFacebook>
                </div>
              </div>
            </fieldset>
            {/* {error && (
              <p className="text-[#CE2600] font-bold text-center">{error}</p>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
