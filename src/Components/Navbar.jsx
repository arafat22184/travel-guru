import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-gray-950 py-3 px-8 font-semibold rounded ${
            isActive ? "border-b-4 rounded-none border-white" : ""
          }`
        }
        to={"/news"}
      >
        News
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-gray-950 py-3 px-8 font-semibold rounded ${
            isActive ? "border-b-4 rounded-none border-white" : ""
          }`
        }
        to={"/destination"}
      >
        Destination
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-gray-950 py-3 px-8 font-semibold rounded ${
            isActive ? "border-b-4 rounded-none border-white" : ""
          }`
        }
        to={"/blog"}
      >
        Blog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `hover:bg-gray-950 py-3 px-8 font-semibold rounded ${
            isActive ? "border-b-4 rounded-none border-white" : ""
          }`
        }
        to={"/contact"}
      >
        Contact
      </NavLink>
      <NavLink
        className="py-3 px-8 font-semibold bg-[#F9A51A] hover:bg-amber-200 rounded text-black"
        to={"/login"}
      >
        Login
      </NavLink>
    </>
  );

  return (
    <div className="w-11/12 max-w-8xl mx-auto flex items-center justify-between pt-10">
      {/* Start */}
      <div className="flex items-center gap-6 md:gap-0">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="px-0 btn btn-ghost lg:hidden"
          >
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52  shadow "
          >
            {links}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="w-[120px] h-[56px]" src={logo} alt="" />
        </Link>
      </div>
      {/* Search btn */}

      <div className="relative w-[370px]">
        <input
          type="search"
          name="search"
          placeholder="Search your Destination..."
          className="border border-white bg-white/20 text-white placeholder:text-gray-300 rounded-xl w-full pl-10 py-2"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none" />
      </div>

      {/* Last */}
      <div className="hidden lg:flex">
        <ul className="menu items-center menu-horizontal px-1 gap-4">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
