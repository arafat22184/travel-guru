import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import LoginNavbar from "../Components/LoginNavbar";

const AuthLayout = () => {
  return (
    <div>
      <LoginNavbar></LoginNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
