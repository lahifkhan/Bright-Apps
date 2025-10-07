import React from "react";
import appStoreImg from "../assets/appStore.png";
import googlePlayImg from "../assets/googlePlay.png";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="mt-20">
      <div className="text-center space-y-4">
        <h1 className="font-extrabold text-5xl">
          We Build <br />{" "}
          <span className="bg-gradient-to-br from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
            Productive{" "}
          </span>
          Apps
        </h1>
        <p className="text-[#627382]">
          At Bright-Apps, we craft innovative apps designed to make everyday
          life simpler, smarter, and more exciting. <br /> Our goal is to turn
          your ideas into digital experiences that truly make an impact.
        </p>

        <div className="space-x-3 mt-14">
          <button className="btn">
            <a
              className="flex items-center gap-1"
              href="https://play.google.com"
              target="_blank"
            >
              <img src={googlePlayImg} alt="" /> Google Play
            </a>
          </button>
          <button className="btn">
            <a
              className="flex items-center gap-1"
              href="https://www.apple.com/app-store/"
              target="_blank"
            >
              <img src={appStoreImg} alt="" /> App Store
            </a>
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-8 ">
        <img className="w-xl" src={heroImg} alt="" />
      </div>
      <div className="bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white p-20 space-y-12">
        <h1 className="text-center font-bold text-4xl">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex flex-col  md:flex-row justify-around">
          <div className="text-center space-y-2">
            <p className="text-xs">Total Downloads</p>
            <p className="text-6xl font-bold">29.6M</p>
            <p className="text-xs">21% more than last month</p>
          </div>

          <hr className="block md:hidden my-4" />

          <div className="text-center space-y-2">
            <p className="text-xs">Total Reviews</p>
            <p className="text-6xl font-bold">906K</p>
            <p className="text-xs">46% more than last month</p>
          </div>
           <hr className="block md:hidden my-4" />
          <div className="text-center space-y-2">
            <p className="text-xs">Active Apps</p>
            <p className="text-6xl font-bold">132+</p>
            <p className="text-xs">31 more will Launch</p>
          </div>
           <hr className="block md:hidden my-4" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
