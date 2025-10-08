import React from 'react';
import pageNotFoundImg from "../assets/error-404.png"
import { useNavigate } from 'react-router';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center space-y-4 ">
              <img src={pageNotFoundImg}  alt="" />
              <h1 className="font-bold text-[#001931] text-3xl">
                Oops, page not found!
              </h1>
              <p>
                The page you are looking for is not available.
              </p>
              <button
                onClick={() => navigate("/") }
                className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white w-fit"
              >
                Go Back!
              </button>
            </div>
    );
};

export default PageNotFound;