import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import AppNotFound from "../Components/AppNotFound";
import LoadingSpinner from "../Components/LoadingSpinner";
import SearchAppNotFound from "../Components/SearchAppNotFound";

const Apps = () => {
  const { apps,loading } = useApps();
  const [search,setSearch] = useState("");
  

  const term = search.trim().toLocaleLowerCase();
  const searchData = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;
  if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }
  console.log(searchData);
  return (
    <div>
      <div>
        <div className="w-11/12 mx-auto mt-20 ">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#001931]">
              Our All Applications
            </h1>
            <p className="text-[#627382]">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          <div className="mt-10 mb-5 flex justify-between">
            <h3 className="text-[#001931] font-semibold text-2xl ">
              ({searchData.length}) Apps Found
            </h3>

            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} required placeholder="Search" />
            </label>
          </div>
          {
            searchData.length ? <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {searchData.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div> :<SearchAppNotFound setSearch={setSearch}></SearchAppNotFound>
          }
          
          
        </div>
      </div>
    </div>
  );
};

export default Apps;
