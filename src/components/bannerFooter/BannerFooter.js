import React from "react";
import Button from "../layouts/button/Button";

const BannerFooter = () => {
  return (
    <div className="bg-primary font-pop text-xl text-white">
      <div
        className={`max-w-container mx-auto flex flex-col lg:flex-row py-8 px-3 md:px-4 xl:px-0 items-center gap-y-7 justify-between`}
      >
        <p className="lg:w-4/5 flex items-center font-semibold">
          Non-Profit Organization In Bangladesh
        </p>
        <Button
          className="text-base font-semibold px-3 lg:px-6 py-3 bg-white text-black hover:text-blueTxt rounded-md text-sm md:text-base"
          btnText="Donate Now"
        />
      </div>
    </div>
  );
};

export default BannerFooter;
