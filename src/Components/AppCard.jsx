import React from "react";
import { formatDownloads } from "../Utility/FormatDownloads";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
const AppCard = ({ app }) => {
  const { title, downloads, ratingAvg, image } = app;
  const dwonloadNumber = formatDownloads(downloads);
  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <figure className="h-48 overflow-hidden">
        <img src={image} alt="" className="object-cover w-full" />
      </figure>
      <div className="card-body p-0 ">
        <h2 className=" text-base font-bold">{title}</h2>

        <div className=" flex justify-between">
          <div className="w-fit bg-[#F1F5E8] p-1 rounded-sm">
            <p className="flex gap-1 items-center text-[#00D390] ">
            
            <MdOutlineFileDownload size={20} />
            {dwonloadNumber}
          </p>

          </div>
         <div className="w-fit  bg-[#FFF0E1] p-1 rounded-sm">

            <p className="flex gap-1 items-center text-[#FF8811]"> <FaStar /> {ratingAvg}</p>

         </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
