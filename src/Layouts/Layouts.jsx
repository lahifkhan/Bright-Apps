import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";

const Layouts = () => {
 

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
     
        <main className="flex-1 bg-base-300">
          <Outlet></Outlet>
        </main>
      
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
