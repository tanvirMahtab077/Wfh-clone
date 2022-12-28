import React, { useState, useEffect } from "react";
import Button from "../layouts/button/Button";
import { VscThreeBars } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import Image from "../layouts/image/Image";
import NavItem from "../navItem/NavItem";
import DropdownBox from "../dropdownBox/DropdownBox";
import { Link } from "react-router-dom";

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
                <div
                    className={`max-w-container mx-auto flex py-2.5 md:py-4 px-3 md:px-4 xl:px-0 items-center gap-y-7 justify-between ${open ? "" : ""
                        }`}
                >
                    {hamOpen ? (
                        <VscThreeBars
                            className="lg:hidden text-blueTxt text-3xl ml-1 md:text-3xl cursor-pointer z-20"
                            onClick={handleNavItems}
                        />
                    ) : (
                        <CgClose
                            className="text-blueTxt lg:hidden text-3xl ml-1 md:text-3xl font-bold cursor-pointer z-20"
                            onClick={handleNavItems}
                        />
                    )}
                    <div className="w-1/2 lg:w-1/5 flex justify-center lg:justify-start items-center ml-[20vw] lg:ml-0">
                        <Link to="/">
                            <Image src={"assets/images/logo.png"} />
                        </Link>
                    </div>
                    <div className="lg:w-4/5 flex justify-end">
                        <form className="relative inline-block lg:mr-14 lg:block justify-end">
                            <input
                                className="py-2 px-2 pr-3 outline-0 border-[1px] border-black-30 focus:border-primary text-[#55555] w-[70%] focus:w-[100%] lg:w-[100%] lg:focus:w-[126%] linear duration-300"
                                placeholder="Search..."
                                onClick={() => setSearchFocus(!searchFocus)}
                                onBlur={() => setSearchFocus(!searchFocus)}
                            />
                            <BiSearch
                                className={`text-2xl absolute top-2 right-[8px] lg:right-[-43px] cursor-pointer linear duration-300 hover:text-blueTxt ${searchFocus && "text-blueTxt"
                                    }`}
                            />
                        </form>
                    </div>
                </div>
            </div>

            <nav
                className={`${open
                    ? "animate-[slideX_.4s_ease_1] lg:!animate-none"
                    : "translate-x-[-100%] lg:translate-x-[0%]"
                    } bg-white lg:bg-primary w-[60vw] md:w-[33vw] lg:w-full h-screen lg:h-auto fixed lg:static top-0 linear duration-300 border-r-[1px] lg:border-r-[0px] border-solid border-black/20 font-pop text-sm font-semibold !text-black lg:!text-white active:!text-blueTxt shadow-lg z-10 pt-11 lg:pt-0`}
            >
                <div className="lg:max-w-container mx-auto flex flex-col lg:flex-row px-3 xl:px-0 relative">
                    <div className="w-full linear duration-300 lg:flex lg:justify-between items-center pl-2 lg:pl-0">
                        <ul className="lg:h-[4.8vw] cursor-pointer list-none flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-7 lg:gap-10 xl:gap-12 linear duration-300 my-6 md:my-9 lg:my-0">
                            <NavItem href={"/"} linkName={"HOME"} className={""} />
                            <NavItem
                                href={"#"}
                                linkName={"ABOUT US"}
                                className={""}
                                Arrow={IoIosArrowDown}
                            >
                                <DropdownBox>
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Mission"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Vision"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Partners"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Reach & Presence"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Awards & Prizes"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Press & Media"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"FAQ"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5"
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
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"All Projects"}
                                        linkClass={"after:hidden"}
                                        href={"all-projects"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Education Program "}
                                        linkClass={"after:hidden"}
                                        href={"education-program"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Health Program "}
                                        linkClass={"after:hidden"}
                                        href={"health-program"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Awareness Program "}
                                        linkClass={"after:hidden"}
                                        href={"awareness-program"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Emergency Response"}
                                        linkClass={"after:hidden"}
                                        href={"emergency-response"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Project Tribeni"}
                                        linkClass={"after:hidden"}
                                        href={"project-tribeni"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5"
                                        }
                                        linkName={"DLSH"}
                                        linkClass={"after:hidden"}
                                        href={"dlsh"}
                                    />
                                </DropdownBox>
                            </NavItem>
                            <NavItem
                                href={"#"}
                                linkName={"GET INVOLVED"}
                                className={""}
                                Arrow={IoIosArrowDown}
                            >
                                <DropdownBox>
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Make A Donation"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Be A Volunteer"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Be A Media Representative"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5"
                                        }
                                        linkName={"Be A Sponsor Or Partner"}
                                        linkClass={"after:hidden"}
                                    />
                                </DropdownBox>
                            </NavItem>
                            <NavItem
                                href={"#"}
                                linkName={"TEAM"}
                                className={""}
                                Arrow={IoIosArrowDown}
                            >
                                <DropdownBox>
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5 border-b-[1px] border-solid border-black/20"
                                        }
                                        linkName={"Volunteers"}
                                        linkClass={"after:hidden"}
                                    />
                                    <NavItem
                                        className={
                                            "linear duration-300 font-sans font-normal hover:text-blueTxt py-1 group-hover:py-3.5"
                                        }
                                        linkName={"Campus Ambassador"}
                                        linkClass={"after:hidden"}
                                    />
                                </DropdownBox>
                            </NavItem>
                            <NavItem href={"#"} linkName={"WFH BLOG"} className={""} />
                            <NavItem href={"#"} linkName={"CONTACT"} className={""} />
                        </ul>
                        <Button
                            className="lg:h-full w-[35vw] lg:flex items-center justify-center text-center text-base px-3 lg:px-6 py-3 lg:py-0 bg-white text-blueTxt lg:text-blueTxt/70 hover:text-blueTxt lg:w-auto mb-4 lg:mb-0 mx-auto lg:mx-0 border-[1px] lg:border-[0px] border-solid border-primary"
                            btnText="Donate Now"
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;