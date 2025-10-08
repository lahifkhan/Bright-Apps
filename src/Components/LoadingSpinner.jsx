import React from 'react';
import { PacmanLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className='min-h-screen justify-center flex  items-center'>
            <PacmanLoader size={100}></PacmanLoader>
        </div>
    );
};

export default LoadingSpinner;