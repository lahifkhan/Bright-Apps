import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen justify-center flex  items-center">
      <ClipLoader size={100}></ClipLoader>
    </div>
  );
};

export default LoadingSpinner;
