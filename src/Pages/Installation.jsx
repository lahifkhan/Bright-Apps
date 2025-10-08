import React, { useState } from "react";
import { loadInstalled, removeFromLocalDb } from "../Utility/localStorage";
import { MdOutlineFileDownload } from "react-icons/md";
import { formatDownloads } from "../Utility/FormatDownloads";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { IoMdArrowDropdown } from "react-icons/io";

const Installation = () => {
  const [installed, setInstalled] = useState(() => loadInstalled());
  const handleUninstall = (p) => {
    removeFromLocalDb(p);
    setInstalled((prev) => prev.filter((ap) => ap.id !== p.id));
    toast.success("Successfully Uninstall");
  };
    const handleSort = (type) => {
    if (type === 'Low-High') {
      const sortedData = [...installed].sort((a, b) => a.downloads - b.downloads);
      setInstalled(sortedData)
    } else if (type === 'High-low') {
      const sortedDataDesc = [...installed].sort((a, b) => b.downloads - a.downloads);
      setInstalled(sortedDataDesc);
    } 
  }

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mt-20">
        <h2 className="text-5xl font-bold text-[#001931]">
          Your Installed Apps
        </h2>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="mt-10 mb-5 flex justify-between">
        <h3 className="text-[#001931] font-semibold text-2xl">
          ({installed.length}) Apps Found
        </h3>

       
        <button
          className="btn"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } }
        >
          Sort By downloads <IoMdArrowDropdown />

        </button>

        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" }}
        >
          <li onClick={()=> handleSort("Low-High")}>
            <a>Low-High</a>
          </li>
          <li onClick={()=> handleSort("High-low")}>
            <a>High-low</a>
          </li>
        </ul>
      </div>
      <div className="space-y-3">
        {installed.map((p) => (
          <div key={p.id} className="card card-side bg-base-100 shadow-xl  p-4">
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{p.title}</h3>

              <div className=" flex gap-7 items-center">
                <div className="w-fit bg-[#F1F5E8] p-1 rounded-sm">
                  <p className="flex gap-1 items-center text-[#00D390] ">
                    <MdOutlineFileDownload size={20} />
                    {formatDownloads(p.downloads)}
                  </p>
                </div>
                <div className="w-fit  bg-[#FFF0E1] p-1 rounded-sm">
                  <p className="flex gap-1 items-center text-[#FF8811]">
                    {" "}
                    <FaStar /> {p.ratingAvg}
                  </p>
                </div>
                <p className="text-[#627382]">{p.size} MB</p>
              </div>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <button
                onClick={() => handleUninstall(p)}
                className="btn bg-[#00d390] text-white"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Installation;
