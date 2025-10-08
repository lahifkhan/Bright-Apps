import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../Components/LoadingSpinner";

const Layouts = () => {
  const { loading } = useApps();
  console.log(loading);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <main className="flex-1">
          <Outlet></Outlet>
        </main>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
