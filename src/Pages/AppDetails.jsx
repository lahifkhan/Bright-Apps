import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import { formatDownloads } from "../Utility/FormatDownloads";
import ratingAvgIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AppNotFound from "../Components/AppNotFound";
import LoadingSpinner from "../Components/LoadingSpinner";

const AppDetails = () => {
  const { id } = useParams();
 
  console.log(id);
  const { apps,loading } = useApps();
  if(loading){
    return <LoadingSpinner></LoadingSpinner>
  }
  const singleApp = apps.find((app) => app.id === parseInt(id));
  console.log(singleApp);



  if(singleApp=== undefined){
    return <AppNotFound></AppNotFound>
  }
  const {
    title,
    downloads,
    ratingAvg,
    image,
    companyName,
    reviews,
    size,
    ratings,
    description
  } = singleApp || {};
  const dwonloadNumber = formatDownloads(downloads);
  const reviewNumber = formatDownloads(reviews);
 
  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="card lg:card-side bg-base-100 shadow-sm p-4 ">
        <figure className="w-78 ">
          <img className="rounded-2xl" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl">{title}</h2>
          <p>
            <span className="opacity-70">Developed by</span>{" "}
            <span className="bg-gradient-to-br from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
              {companyName}
            </span>
          </p>

          <hr className="my-5 opacity-15" />

          <div className="flex gap-15">
            <div className="flex flex-col items-start space-y-1">
              <img src={downloadIcon} alt="" />
              <p className="text-[#001931]">Downloads</p>
              <p className="font-extrabold text-2xl">{dwonloadNumber}</p>
            </div>

            <div className="flex flex-col  items-start space-y-1">
              <img src={ratingAvgIcon} alt="" />
              <p className="text-[#001931]">Average Ratings</p>
              <p className="font-extrabold text-2xl">{ratingAvg}</p>
            </div>

            <div className="flex flex-col  items-start space-y-1">
              <img src={reviewIcon} alt="" />
              <p className="text-[#001931]">Total Reviews</p>
              <p className="font-extrabold text-2xl">{reviewNumber}</p>
            </div>
          </div>
          <div className="card-actions mt-4">
            <button className="btn bg-[#00d390] text-white font-bold">
              Install Now ({size}MB)
            </button>
          </div>
        </div>
      </div>

      <hr className="my-10 opacity-15" />

      <div className="bg-base-100  rounded-xl  h-80 ">
        <h1 className="font-bold">Ratings</h1>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ratings} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" /> 
            <YAxis dataKey="name" type="category" />
           
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#ff8811" barSize={20} />
           
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="my-15">
        <h1 className="font-bold text-2xl">Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
