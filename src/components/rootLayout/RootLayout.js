import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
