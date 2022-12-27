import React, { useState, useEffect } from "react";
import Button from "../layouts/button/Button";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import Image from "../layouts/image/Image";
import NavItem from "../navItem/NavItem";
import DropdownBox from "../dropdownBox/DropdownBox";

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
        <div className="max-w-container mx-auto flex flex-col lg:flex-row py-2.5 md:py-4 px-3 md:px-4 xl:px-0 justify-between">
          <div className="w-auto lg:w-1/5 flex items-center">
            <a href="#">
              <Image src={"assets/images/logo.png"} />
            </a>
          </div>
          <div className="w-auto lg:w-4/5 flex justify-end">
            <form className="relative inline-block mr-12">
              <input
                className="py-2 px-2 pr-3 outline-0 border-[1px] border-black-30 focus:border-primary text-[#55555] w-[100%] focus:w-[126%] linear duration-300"
                placeholder="Search..."
                onClick={() => setSearchFocus(!searchFocus)}
                onBlur={() => setSearchFocus(!searchFocus)}
              />
              <BiSearch
                className={`text-2xl absolute top-2 right-[-43px] cursor-pointer linear duration-300 hover:text-blueTxt ${
                  searchFocus && "text-blueTxt"
                }`}
              />
            </form>
          </div>
        </div>
      </div>

      <nav className="bg-primary font-pop text-sm text-white font-semibold">
        <div className="max-w-container mx-auto flex flex-col lg:flex-row px-3 xl:px-0 relative">
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
            <div className="w-full linear duration-300 lg:flex lg:justify-between items-center pl-2 lg:pl-0 ">
              <ul className="h-[5vw] cursor-pointer list-none flex flex-col lg:flex-row items-center gap-4 md:gap-7 lg:gap-10 xl:gap-12 linear duration-300 my-6 md:my-9 lg:my-0">
                <NavItem href={"#"} linkName={"HOME"} className={""} />
                <NavItem
                  href={"#"}
                  linkName={"ABOUT US"}
                  className={""}
                  Arrow={IoIosArrowDown}
                >
                  <DropdownBox>
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Mission"}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Vision"}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Partners"}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Reach & Presence"}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Awards & Prizes"}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Press & Media"}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"FAQ"}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Who We Are"}
                      linkClass={"after:hidden"}
                    />
                  </DropdownBox>
                </NavItem>
                <NavItem
                  href={"#"}
                  linkName={"PROGRAM"}
                  className={""}
                  Arrow={IoIosArrowDown}
                >
                  <DropdownBox>
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"All Projects"}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Education Program "}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Health Program "}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Awareness Program "}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Emergency Response"}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"Project Tribeni"}
                      linkClass={"after:hidden"}
                    />
                    <NavItem
                      className={
                        "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20 opacity-0 group-hover:opacity-100"
                      }
                      linkName={"DLSH"}
                      linkClass={"after:hidden"}
                    />
                  </DropdownBox>
                </NavItem>
                <NavItem
                  href={"#"}
                  linkName={"GET INVOLVED"}
                  className={""}
                  Arrow={IoIosArrowDown}
                />
                <NavItem
                  href={"#"}
                  linkName={"TEAM"}
                  className={""}
                  Arrow={IoIosArrowDown}
                />
                <NavItem href={"#"} linkName={"WFH BLOG"} className={""} />
                <NavItem href={"#"} linkName={"CONTACT"} className={""} />
              </ul>
              <Button
                className="h-full flex items-center text-base px-3 lg:px-6 bg-white text-blueTxt/70 hover:text-blueTxt"
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
