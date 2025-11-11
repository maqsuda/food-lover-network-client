import React, { use, useState } from "react";
import logo from "../../assets/review.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen((dropdown) => !dropdown);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="mr-5 ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allreviews" className="mr-5 ">
          All Reviews
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-sm mx-auto bg-white z-50 backdrop-blur-sm ">
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
      <div className="navbar-end">
        {/* {user && user.email} */}

        <div>
          {user ? (
            <div className="flex gap-3">
              {/* Drop Down */}
              <div className="dropdown">
                <button onClick={toggleDropdown} className="dropdown-button">
                  <img
                    src={user.photoURL}
                    className="size-12 rounded-full"
                  ></img>
                </button>

                {open && (
                  <ul className="menu dropdown-content dropdown-right bg-[#F0F0F1]">
                    {/* <li className="pt-5"> {user && user.email}</li> */}

                    <li className="">
                      <NavLink
                        to="/addReviews"
                        className="w-[120px] hover:font-bold hover:text-[#CE2600] hover:bg-[#FFCD00]"
                      >
                        Add Reviews
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/myReviews"
                        className="w-[120px] hover:font-bold hover:text-[#CE2600] hover:bg-[#FFCD00] "
                      >
                        My Reviews
                      </NavLink>
                    </li>

                    <li>
                      <button
                        onClick={handleLogout}
                        className="px-3 border-none text-start items-start hover:font-bold hover:text-[#CE2600] hover:bg-[#FFCD00] "
                      >
                        LogOut
                      </button>
                    </li>
                  </ul>
                )}
              </div>

              {/* <button
                onClick={handleLogout}
                className="btn px-10 bg-[#388148] text-white"
              >
                LogOut
              </button> */}
            </div>
          ) : (
            <div>
              <Link to="/login" className="btn  text-white bg-[#CE2600]">
                LogIn
              </Link>
              {/* <Link to="/register" className="btn  text-white bg-[#CE2600]">
                Register
              </Link> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
