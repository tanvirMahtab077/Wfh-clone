import React from "react";
import missionImg from "../../Assests/Imgs/mision-2.jpg";
import { BiCaretRight } from "react-icons/bi";

const Mission = () => {
  return (
    <div id="mission" className="my-16 px-4 max-w-container mx-auto ">
      <div className="grid sm-grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex">
          <div className="border-l-2 border-[#0097FA] h-9"></div>
          <div>
            <h3 className="text-3xl text-primary font-pop font-semibold ml-3 mb-3">
              Our Mission
            </h3>
            <p className="text-[15px] font-normal text-primary/70 leading-6">
              WFH FOUNDATION is a Non-profit Organization which is working to
              remove illiteracy, to make every people aware about their rights,
              and increasing awareness about child marriage. It also aims to
              ensure every human being’s participation in blood donation and
              make people aware about disease.
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute">
            <div className="hover:cursor-pointer hover:scale-75 duration-500 rounded-full border-8 border-white border-opacity-40">
              <div className="rounded-full flex relative p-3 bg-white">
                <a
                  href={`https://www.youtube.com/watch?v=qg9lbpiJCXY&ab_channel=WFHFoundation`}
                >
                  {" "}
                  <BiCaretRight className="text-[#0097FA] lg:text-4xl text-2xl rounded-full" />
                </a>
              </div>
            </div>
          </div>
          <img src={missionImg} alt="mission-img" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
