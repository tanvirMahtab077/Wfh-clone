import React from "react";
import { BiMap } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import { VscSmiley } from "react-icons/vsc";
import { CountUp } from "use-count-up";
import { BsPeople } from "react-icons/bs";

const ReachPresense = ({ statHead, statTitle, statDescription }) => {
  return (
    <div id="reach" className="px-4 my-16 max-w-container mx-auto">
      <div className="mb-20 lg:flex items-center">
        <div className="mb-14 lg:mb-5 mr-14">
          <div className="flex items-center mb-5">
            <span className="border border-t-0 border-r-0 border-b-0 border-[#0097FA] py-7 lg:py-6  bg-[#0097FA] mr-3"></span>
            <div>
              <h1 className="text-[#0097FA] text-lg font-semibold">
                {statHead}
              </h1>
              <h1 className="text-primary font-pop font-semibold ml-3 text-2xl lg:text-3xl">
                {statTitle}
              </h1>
            </div>
          </div>
          <p className="text-sm text-primary/70 lg:w-[680px]">
            {statDescription}
          </p>
        </div>
        <div className="lg:ml-5 grid grid-cols-2 gap-10">
          <div className="text-[#ff9800] font-semibold text-2xl flex items-center">
            <BsPeople className="w-14 h-14" />
            <span className="border border-t-0 border-r-0 border-b-0 border-black py-7 mx-3  bg-black opacity-10"></span>
            <div>
              <CountUp isCounting end={228} duration={3.2} />
              <h4 className="text-base text-black font-bold">Volunteer</h4>
            </div>
          </div>
          <div className="text-[#8bca4e] font-semibold text-2xl flex items-center">
            <GiProgression className="w-14 h-14" />
            <span className="border border-t-0 border-r-0 border-b-0 border-black py-7 mx-3  bg-black opacity-10"></span>
            <div>
              <CountUp isCounting end={120} duration={3.2} />
              <h4 className="text-base text-black font-bold">Project</h4>
            </div>
          </div>
          <div className="text-[#fec501] font-semibold text-2xl flex items-center">
            <VscSmiley className="w-14 h-14" />
            <span className="border border-t-0 border-r-0 border-b-0 border-black py-7 mx-3  bg-black opacity-10"></span>
            <div>
              <CountUp isCounting end={12000} duration={3.2} />
              <h4 className="text-base text-black font-bold">Beneficiary</h4>
            </div>
          </div>
          <div className="text-[#5586e8] font-semibold text-2xl flex items-center">
            <BiMap className="w-14 h-14" />
            <span className="border border-t-0 border-r-0 border-b-0 border-black py-7 mx-3  bg-black opacity-10"></span>
            <div>
              <CountUp isCounting end={13} duration={3.2} />
              <h4 className="text-base text-black font-bold">District</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachPresense;
