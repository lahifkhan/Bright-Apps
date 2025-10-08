import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import SearchAppNotFound from "../Components/SearchAppNotFound";
import LoadingSpinner from "../Components/LoadingSpinner";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const searchedApps = search
    ? apps.filter((app) => app.title.toLowerCase().includes(search))
    : apps;

  const handleSearch = (e) => {
    setIsSearching(true);
    const term = e.target.value;
    setSearch(term.trim().toLowerCase());

    setTimeout(() => setIsSearching(false), 300);
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="w-11/12 mx-auto mt-20 bg-base-300">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#001931]">
          Our All Applications
        </h1>
        <p className="text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="mt-10 mb-5 flex justify-between">
        <h3 className="text-[#001931] font-semibold text-2xl">
          ({searchedApps.length}) Apps Found
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
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search"
          />
        </label>
      </div>

      {isSearching ? 
        <LoadingSpinner></LoadingSpinner>
       : searchedApps.length ? 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {searchedApps.map(app => 
            <AppCard key={app.id} app={app}>
              
            </AppCard>
          )}
        </div>
       : 
        <SearchAppNotFound setSearch={setSearch}></SearchAppNotFound>
      }
    </div>
  );
};

export default Apps;
