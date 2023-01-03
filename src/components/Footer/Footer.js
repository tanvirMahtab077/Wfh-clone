import React from "react";
import {
  FaHouseUser,
  FaMobileAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import logo from "../../Assests/Imgs/logo-white.png";

const Footer = () => {
  return (
    <div className="bg-[#484848] w-[100%]">
      <div className="px-4 max-w-container mx-auto py-14">
        <div className="grid sm-grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-[#0097FA] text-xl pb-2 font-medium">
              MAIN OFFICE
            </h2>
            <div className="border-b-2 mb-4 w-16 border-[#0097FA]"></div>
            <div className="text-white">
              <p className="leading-7">
                Our aim is to make a beautiful country without poverty where
                every person would have involvement in the economical growth.
              </p>
              <p className="py-3 flex">
                <FaHouseUser className="mr-1 mt-1" />
                House 33, Munshibari Road, Zhigatola, Dhaka - 1209
              </p>
              <p className="flex">
                <FaMobileAlt className="mr-1 mt-1" />
                (+880) 1794 013 834
              </p>
              <p className="py-3 flex duration-500 hover:text-[#0097FA]">
                <BsFillEnvelopeFill className="mr-1 mt-1" />
                <a href="#/"> info@wfhbd.org</a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0097FA] text-xl pb-2 font-medium">
              FOOTER LINKS
            </h2>
            <div className="border-b-2 mb-4 w-16 border-[#0097FA]"></div>
            <div className="text-white">
              <p className="py-3 duration-500 hover:text-[#0097FA]">
                <a href="#/"> FAQ</a>
              </p>
              <p className="duration-500 hover:text-[#0097FA]">
                <a href="#/"> Press & Media</a>
              </p>
              <p className="py-3 duration-500 hover:text-[#0097FA]">
                <a href="#/"> Careers</a>
              </p>
              <p className="duration-500 hover:text-[#0097FA]">
                <a href="#/"> Contact Us</a>
              </p>
              <p className="py-3 duration-500 hover:text-[#0097FA]">
                <a href="#/"> Privacy Policy</a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[#0097FA] text-xl pb-2 font-medium">
              NEWSLETTER
            </h2>
            <div className="border-b-2 mb-4 w-16 border-[#0097FA]"></div>
            <p className="leading-7 text-white">
              Sign up to hear and get our daily new update via email.
            </p>
            <input
              className="w-full py-2 pl-6 my-4 text-xl border-none outline-none sm:w-full"
              type="email"
              name="email"
              placeholder="Enter E-mail Address"
              id=""
              required
            />
            <br />
            <input
              className="uppercase hover:text-[#0097FA] hover:bg-white duration-700 bg-[#0097FA] text-xs font-bold text-white  py-3 px-6 cursor-pointer tracking-wide"
              type="submit"
              value="Subscribe"
            />
          </div>
        </div>
      </div>
      <div className="border-b mb-4  border-[#5f6163]"></div>
      <div className="text-center w-72 mx-auto py-12 text-white">
        <img className="pb-4" src={logo} alt="wfh" />
        <p className="text-start py-2">Spread Happiness Over The World</p>
        <p className="flex text-xl py-2 ml-3 mt-1">
          {" "}
          <span className="mr-7 hover:text-blueTxt linear duration-300 cursor-pointer">
            <FaFacebookF />
          </span>{" "}
          <span className="mr-7 hover:text-blueTxt linear duration-300 cursor-pointer">
            <FaInstagram />
          </span>{" "}
          <span className="mr-7 hover:text-blueTxt linear duration-300 cursor-pointer">
            <FaTwitter />
          </span>{" "}
          <span className="mr-7 hover:text-blueTxt linear duration-300 cursor-pointer">
            <FaLinkedinIn />
          </span>{" "}
          <span className="hover:text-blueTxt linear duration-300 cursor-pointer">
            <FaYoutube />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
