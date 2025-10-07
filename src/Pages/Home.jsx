import React from "react";
import Hero from "../Components/Hero";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import { NavLink } from "react-router";

const Home = () => {
  const { apps } = useApps();
  console.log(apps);
  const trendingApps = apps.slice(0, 8);
  return (
    <div className="bg-[#d2d2d2] pb-8">
      <Hero></Hero>

      <div className="w-11/12 mx-auto mt-20 ">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-[#001931]">Trending Apps</h1>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-10">
          {trendingApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-20">
        <NavLink to={"/apps"} className="btn  font-bold text-center bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white" >Show All</NavLink>
      </div>
    </div>
  );
};

export default Home;
