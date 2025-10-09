import React, { useState } from "react";
import { loadInstalled, removeFromLocalDb } from "../Utility/localStorage";
import { MdOutlineFileDownload } from "react-icons/md";
import { formatDownloads } from "../Utility/FormatDownloads";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { IoMdArrowDropdown } from "react-icons/io";
  


const Installation = () => {
  const [installed, setInstalled] = useState(() => loadInstalled());
  const [sortOrder, setSortOrder] = useState('none')
  const handleUninstall = (p) => {
    removeFromLocalDb(p);
    setInstalled((prev) => prev.filter((ap) => ap.id !== p.id));
    toast.success("Successfully Uninstall");
  };
    const sortedItem = (() => {
    if (sortOrder === 'downloads-asc') {
      return [...installed].sort((a, b) => a.downloads - b.downloads)
    } else if (sortOrder === 'downloads-desc') {
      return [...installed].sort((a, b) => b.downloads - a.downloads)
    } else {
      return installed
    }
  })()

  return (
    <div className="w-11/12 mx-auto my-8">
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

       
       <label className='form-control max-w-xs w-full '>
          <select
            className='select select-bordered'
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value='none'>Sort by downloads</option>
            <option value='downloads-asc'>Low-High</option>
            <option value='downloads-desc'>High-Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-3 min-h-screen">
        {sortedItem.map((p) => (
          <div key={p.id} className="card card-side bg-base-100 shadow-xl flex flex-col md:flex-row p-4">
            <figure>
              <img
                className="w-40 h-28 object-cover rounded-2xl"
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
