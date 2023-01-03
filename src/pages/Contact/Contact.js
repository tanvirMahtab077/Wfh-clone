import React from "react";
import "./Contact.css";

import { FaMapMarkerAlt, FaPhoneAlt, FaLink, FaEnvelope } from "react-icons/fa";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

const Contact = () => {
  const header = "Contact Us";
  return (
    <div className="contact">
      <HeroBanner header={header}></HeroBanner>

      {/* banner end  */}

      <div className="px-8 mt-10 lg:flex-row  flex lg:justify-center flex-col input-box">
        <div className="box-width">
          <div className="grid lg:grid-cols-3 gap-8">
            <input
              type="text"
              placeholder="Your Name*"
              className="border-solid border-[1px] border-secondary/30 rounded-md focus:border-primary linear duration-300 pl-2 p-3 outline-0"
            />
            <input
              type="text"
              placeholder="Your Email*"
              className="border-solid border-[1px] border-secondary/30 rounded-md focus:border-primary linear duration-300 pl-2 p-3 outline-0"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="border-solid border-[1px] border-secondary/30 rounded-md focus:border-primary linear duration-300 pl-2 p-3 outline-0"
            />
          </div>

          <textarea
            placeholder="Your Message"
            name=""
            id=""
            cols="30"
            rows="8"
            className="border-solid border-[1px] border-secondary/30 rounded-md focus:border-primary linear duration-300 pl-2 p-3 w-full mt-8 outline-0"
          ></textarea>

          <div className="flex justify-center mt-2">
            <button className="py-2 px-4 bg-primary text-white font-semibold rounded-full mb-5 hover:bg-[#006bb3] mt-3 linear duration-300">
              SEND MESSAGE
            </button>
          </div>
        </div>

        <div className="lg:ml-10">
          <h1 className="text-primary font-pop font-semibold text-3xl pl-3 border-solid  border-l-2 border-primary">
            Main Office
          </h1>

          <div className="text-primary/60">
            <p className="flex mt-2">
              {" "}
              <span className="m-1 text-primary/60">
                {" "}
                <FaMapMarkerAlt />{" "}
              </span>{" "}
              House 33 Munsibari road, jigatola 1209
            </p>
            <p className="flex mt-2">
              {" "}
              <span className="m-1 text-primary/60">
                <FaPhoneAlt />
              </span>{" "}
              +8801794013834
            </p>

            <p className="flex mt-2">
              {" "}
              <span className="m-1 text-primary/60">
                <FaEnvelope />
              </span>{" "}
              info@wfhbd.org
            </p>
            <p className="mt-2 flex">
              {" "}
              <span className="m-1 text-primary/60">
                <FaLink />
              </span>{" "}
              www.wfhbd.org
            </p>
          </div>
        </div>
      </div>

      {/*  input box end  */}

      <div className="mt-5 mb-10 p-5 lg:mx-8">
        <iframe
          style={{ width: "100%", height: "450px" }}
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=600&amp;height=450&amp;hl=en&amp;q=WFH%20Foundation,%2033%20Munshi%20Bari%20Rd,%20Dhaka%201209%20+(WFH%20Foundation,%2033%20Munshi%20Bari%20Rd,%20Dhaka%201209)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>

        {/* https://maps-generator.com/ */}
      </div>
    </div>
  );
};

export default Contact;
