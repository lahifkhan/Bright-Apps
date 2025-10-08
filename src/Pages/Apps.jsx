import React from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const {apps} = useApps();
  return (
    <div>
      <div>
        <div className="w-11/12 mx-auto mt-20 ">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#001931]">Our All Applications</h1>
            <p className="text-[#627382]">
              Explore All Apps on the Market developed by us. We code for Millions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
            {apps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
