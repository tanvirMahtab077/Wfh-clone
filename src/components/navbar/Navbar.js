import React, { useState, useEffect } from "react";
import Button from "../layouts/button/Button";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import Image from "../layouts/image/Image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hamOpen, setHamOpen] = useState(true);
  const [searchFocus, setSearchFocus] = useState(false);

  const handleNavItems = () => {
    setOpen(!open);
    setHamOpen(!hamOpen);
  };

  useEffect(() => {
    window.innerWidth >= 1024 && setOpen(true);
    const screenResize = () => {
      window.innerWidth >= 1024 ? setOpen(true) : setOpen(false);
    };
    window.addEventListener("resize", screenResize);
  }, []);

  return (
    <>
      <div className="bg-white font-pop text-[15px] text-primary">
        <div className="max-w-container mx-auto flex flex-col lg:flex-row py-2.5 md:py-4 px-3 md:px-4 xl:px-0">
          <div className="w-auto lg:w-1/5 flex items-center">
            <a href="#">
              <Image src={"assets/images/logo.png"} />
            </a>
          </div>
          <div className="w-auto lg:w-4/5">
            <form className="relative inline-block">
              <input className="py-2 px-2 pr-3 outline-0 border-[1px] border-black-30 focus:border-primary text-[#55555] w-[100%] focus:w-[126%] linear duration-300" 
            //   onClick={()=> setSearchFocus(!searchFocus)} 
              />
              <BiSearch className="text-2xl absolute top-2 right-[-43px] cursor-pointer linear duration-300" />
            </form>
          </div>
        </div>
      </div>

      <nav className="bg-primary font-pop text-base text-white">
        <div className="max-w-container mx-auto flex flex-col lg:flex-row py-3 md:py-5 lg:py-5 xl:py-7 px-3 md:px-5 lg:px-8 xl:px-0 relative">
          <div className="w-auto lg:w-1/5 flex items-center">
            <a href="#">
              <Image src={"assets/images/logo.png"} />
            </a>
          </div>
          {hamOpen ? (
            <RiBarChartHorizontalFill
              className="lg:hidden absolute top-[17px] md:top-[25px] right-[18px] md:right-[22px] text-2xl md:text-3xl cursor-pointer"
              onClick={handleNavItems}
            />
          ) : (
            <CgClose
              className="text-white lg:hidden absolute top-[17px] md:top-[25px] right-[18px] md:right-[22px] text-3xl md:text-4xl font-bold cursor-pointer"
              onClick={handleNavItems}
            />
          )}
          {open && (
            <div className="linear duration-300 w-4/5 lg:flex justify-start lg:justify-end items-center font-semibold pl-2 lg:pl-0 ">
              <ul className="cursor-pointer text-red-200 list-none flex flex-col lg:flex-row gap-4 md:gap-7 lg:gap-10 xl:gap-12 linear duration-300 my-6 md:my-9 lg:my-0">
                <li className="linear duration-300 hover:text-white">
                  <a href="#">HOME</a>
                </li>
                <li className="linear duration-300 hover:text-white">
                  <a href="#">ABOUT US</a>
                </li>
                <li className="linear duration-300 hover:text-white">
                  <a href="#">PROGRAM</a>
                </li>
                <li className="linear duration-300 hover:text-white">
                  <a href="#">GET INVOLVED</a>
                </li>
                <li className="linear duration-300 hover:text-white">
                  <a href="#">TEAM</a>
                </li>
                <li className="linear duration-300 hover:text-white">
                  <a href="#">WFH BLOG</a>
                </li>
                <li className="linear duration-300 hover:text-white">
                  <a href="#">CONTACT</a>
                </li>
              </ul>
              <Button
                className="lg:ml-12 xl:ml-16 mb-3 lg:mb-0 py-2 lg:py-2.5 xl:py-3 px-5 lg:px-6 xl:px-8 bg-white text-blueTxt hover:text-blueTxt"
                btnText="Donate Now"
              />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
