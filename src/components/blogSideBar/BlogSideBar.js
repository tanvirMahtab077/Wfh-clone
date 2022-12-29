import React from "react";
import { BiSearch } from "react-icons/bi";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const BlogSideBar = ({ className }) => {
  return (
    <div className={`font-pop px-5 lg:px-0 mt-6 lg:mt-0 ${className}`}>
      <div className="">
        <p className="text-lg text-primary mb-2">Search</p>
        <form className="relative inline-block flex items-center justify-center gap-x-2">
          <input className="py-2.5 px-2 pr-3 outline-0 border-[1px] border-black/40 focus:border-primary text-[#55555] w-[70%] linear duration-300" />
          <PrimaryButton className={"py-3.5 !font-semibold"}>
            Search
          </PrimaryButton>
        </form>
      </div>
      {/* Recent Posts */}
      <div className="">
        <h4 className="mb-4 mt-10 font-semibold text-2xl text-primary">
          Recent Posts
        </h4>
        <div className="font-sans text-primary flex flex-col gap-y-4 text-sm w-[90%]">
          <p className="hover:text-blueTxt linear duration-300">
            <a href="#">
              ভালোবাসা দিবসে পথশিশুদের পাশে ওয়ার্কস ফর হিউমিনিটি ফাউন্ডেশন
            </a>
          </p>
          <p className="hover:text-blueTxt linear duration-300">
            <a href="#">Donate Love, Spread Happiness 2022</a>
          </p>
        </div>
      </div>

      {/* Recent Comments */}
      <div className="">
        <h4 className="mb-4 mt-10 font-semibold text-2xl text-primary">
          Recent Comments
        </h4>
        <div className="font-sans text-primary flex flex-col gap-y-4 ">
          <p className="text-primary/70 hover:text-blueTxt text-sm linear duration-300 ml-9">
            <a href="#" className="">
              Anonymous on 4
            </a>
          </p>
        </div>

        <div className="mt-16">
          <form className="relative inline-block lg:mr-14 flex lg:block">
            <input
              className="py-2 px-2 pr-3 outline-0 border-[1px] border-black/20 focus:border-primary text-[#55555] w-[70%] lg:w-[110%] linear duration-300"
              placeholder="Search"
            />
            <BiSearch
              className={`text-2xl absolute top-2.5 right-[108px] lg:right-[-13px] cursor-pointer linear duration-300 hover:text-blueTxt"
              }`}
            />
          </form>
          <h4 className="mt-6 font-semibold text-xl text-primary">
            Recent Posts
          </h4>
          <div className="border-b-2 mb-4 mt-2 w-24 border-[#0097FA]"></div>
          <div className="font-sans text-primary flex flex-col gap-y-4  w-[90%]">
            <div>
              <p className="hover:text-blueTxt linear duration-300">
                <a href="#">
                  ভালোবাসা দিবসে পথশিশুদের পাশে ওয়ার্কস ফর হিউমিনিটি ফাউন্ডেশন
                </a>
              </p>
              <p className="text-primary/40 text-xs mt-2 mb-1">March 1 2022</p>
            </div>

            <div>
              <p className="hover:text-blueTxt linear duration-300">
                <a href="#">Donate Love, Spread Happiness 2022</a>
              </p>
              <p className="text-primary/40 text-xs mt-2 mb-1">March 1 2022</p>
            </div>
          </div>
        </div>

        <div className="">
          <h4 className="mt-10 font-semibold text-xl text-primary">
            SIGN UP FOR NEWSLETTER
          </h4>
          <div className="border-b-2 mb-4 mt-2 w-24 border-[#0097FA]"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
