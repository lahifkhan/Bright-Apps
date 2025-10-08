import React from "react";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";



const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="navbar w-11/12 mx-auto ">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"} className={({isActive})=> isActive ? "border-b-1  text-[#632ee3] rounded-none font-semibold" :"font-semibold"}>Home</NavLink>
              </li>

              <li>
                <NavLink to={"/apps"} className={({isActive})=> isActive ? "border-b-1  text-[#632ee3] rounded-none font-semibold" :"font-semibold"}>Apps</NavLink>
              </li>
              <li>
                <NavLink to={"/installation"} className={({isActive})=> isActive ? "border-b-1  text-[#632ee3] rounded-none font-semibold" :"font-semibold"}>Installation</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/"} className="font-bold text-xl p-0">Bright-Apps</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"} className={({isActive})=> isActive ? "border-b-1  text-[#632ee3] rounded-none font-semibold" :"font-semibold"}  >Home</NavLink>
            </li>

            <li>
              <NavLink to={"/apps"} className={({isActive})=> isActive ? "border-b-1  text-[#632ee3] rounded-none font-semibold" :"font-semibold"}>Apps</NavLink>
            </li>
            <li>
              <NavLink  to={"/installation"} className={({isActive})=> isActive ? "border-b-1  text-[#632ee3] rounded-none font-semibold" :"font-semibold"}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/lahifkhan" target="_blank" className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white"> <FaGithub size={25} /> Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
