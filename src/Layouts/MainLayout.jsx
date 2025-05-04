import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div className="relative h-screen bg-[url('https://i.ibb.co.com/27ddcXxv/Rectangle-1.png')] bg-center text-white bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
