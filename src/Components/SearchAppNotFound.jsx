import React from 'react';
import AppNotfoundImg from "../assets/App-Error.png"


const SearchAppNotFound = ({setSearch}) => {
    
    return (
        <div className='flex flex-col items-center space-y-4 '>
            <img src={AppNotfoundImg} alt="" />
            <h1 className='font-bold text-[#001931] text-3xl'>No Apps Found</h1>
            <p>The App you are requesting is not found on our system.  please try another apps</p>
            <button onClick={()=>setSearch("")} className="btn bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white w-fit">Show All Apps</button>
        </div>
    );
};

export default SearchAppNotFound;