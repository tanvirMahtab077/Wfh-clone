import React from "react";
import "./HeroBanner.css";

const HeroBanner = ({ header }) => {
  return (
    <div className="banner ">
      <div className="text-center py-16 lg:py-28">
        <h1 className="text-lg lg:text-3xl font-bold z-10 text-white">
          {header}
        </h1>
        <p className="text-xs lg:text-base mt-2 text-white opacity-80">
          Home / {header}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
