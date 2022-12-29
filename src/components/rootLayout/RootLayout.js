import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from '../../components/Footer/Footer';


const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;