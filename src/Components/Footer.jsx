import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-[#272727]">
      <footer className="footer sm:footer-horizontal   p-10  flex justify-between w-11/12 mx-auto">
        <div className="flex-1">
          <h1 className="text-white text-xl font-bold">Bright-Apss</h1>
          <p className="text-base-100 opacity-80">
            Discover powerful, modern, and beautifully crafted applications
            designed to make your daily tasks easier and smarter. Explore,
            install, and experience innovation — all in one place.
          </p>
          <p className=" flex items-center gap-1">
            <span className="bg-gradient-to-br from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent text-md font-bold">
              Read More
            </span>
            <FaArrowRightLong color="#632ee3" />
          </p>
        </div>
        <nav className="flex-1 pl-10 text-white">
          <h6 className="footer-title ">Services</h6>
          <a className="link link-hover">App Development</a>
          <a className="link link-hover">UI/UX Design</a>
          <a className="link link-hover">API Integration</a>
          <a className="link link-hover">Maintenance & Support</a>
        </nav>
        <nav className="flex-1 text-white">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex-1 text-white ">
          <h6 className="footer-title">Tags</h6>
          <div className="flex flex-wrap gap-2">
            <a className="link link-hover border-1 border-amber-50 p-2 rounded-md">
              Apps
            </a>
            <a className="link link-hover border-1 border-amber-50 p-2 rounded-md">
              Web
            </a>
            <a className="link link-hover border-1 border-amber-50 p-2 rounded-md">
              UX
            </a>
            <a className="link link-hover border-1 border-amber-50 p-2 rounded-md">
              Cloud
            </a>
            <a className="link link-hover border-1 border-amber-50 p-2 rounded-md">
              API
            </a>
          </div>
        </nav>
        <form className="flex-1 ">
          <h6 className="footer-title text-white">Get in Touch</h6>
          <fieldset className="w-80">
            <label className="text-white">Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item bg-gradient-to-br from-[#632ee3] to-[#9f62f2]">
                <FaTelegramPlane size={20} />
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      <div className="flex justify-center gap-10 text-white mb-4">
        <p className="border-1 border-gray-600 p-1">
          <FaFacebookSquare size={25} />
        </p>
        <p className="border-1 border-gray-600 p-1">
          <FaTwitter size={25} />
        </p>
        <p className="border-1 border-gray-600 p-1"><FaInstagram  size={25}/></p>

      </div>

      <p className="text-center text-white">
        Copyright © {new Date().getFullYear()} - All right reserved
      </p>
    </div>
  );
};

export default Footer;
