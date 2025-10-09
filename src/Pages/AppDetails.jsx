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
import { isInstalled,  setInstalledApps } from "../Utility/localStorage";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const AppDetails = () => {
  const { id } = useParams();

  console.log(id);
  const { apps, loading } = useApps();

  const singleApp = apps.find((app) => app.id === parseInt(id));
  const [installed, setInstalled] = useState(false);
 

  useEffect(() => {
    if (singleApp) {
      const isAppInstalled = isInstalled(singleApp);
      setInstalled(isAppInstalled);
    }
  }, [singleApp]);
  console.log(singleApp);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (singleApp === undefined) {
    return <AppNotFound></AppNotFound>;
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
    description,
  } = singleApp || {};
  const dwonloadNumber = formatDownloads(downloads);
  const reviewNumber = formatDownloads(reviews);

  const handleInstallBtn = () => {
    setInstalledApps(singleApp);
    setInstalled(true);

    Swal.fire({
      title: "Successfully Installed",
      icon: "success",
      draggable: true,
    });
  };

  const isInstalledApp = isInstalled(singleApp);
  console.log(isInstalledApp);

  return (
    <div className="w-11/12 mx-auto my-20">
      <div className="card lg:card-side bg-base-100 shadow-sm p-4 ">
        <figure className="w-78 p-2 ">
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

          <div className="flex gap-3 md:gap-15">
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
            <button
              onClick={handleInstallBtn}
              className="btn !bg-[#00d390] !text-white font-bold "
              disabled={installed}
            >
              {installed ? "Installed" : ` Install Now (${size}MB)`}
            </button>
          </div>
        </div>
      </div>

      <hr className="my-10 opacity-15" />

      <div className="  rounded-xl  h-80 p-3 ">
        <h1 className="font-bold text-2xl text-[#001931] mb-3">Ratings</h1>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[...ratings].reverse()} layout="vertical">
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
        <h1 className="font-bold text-2xl text-[#001931]">Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
