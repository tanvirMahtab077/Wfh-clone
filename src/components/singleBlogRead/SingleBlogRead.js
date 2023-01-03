import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Image from "../layouts/image/Image";

const SingleBlogRead = ({
  topicDate,
  heading,
  blogImgPath,
  paraOne,
  paraTwo,
  paraThree,
  paraFour,
  paraFive,
  className,
}) => {
  return (
    <div className={`px-5 lg:px-0 font-pop ${className}`}>
      <p className="mt-3">
        <Link
          className="text-sm font-semibold text-primary/60 hover:text-primary linear duration-300"
          to="#"
        >
          {topicDate}
        </Link>
      </p>
      <h3 className="font-bold text-3xl text-primary my-4 lg:mb-8">
        {heading}
      </h3>
      <Image src={blogImgPath} imgClass={"w-full"} />
      <p className="text-justify mt-7 leading-7 text-primary/70">{paraOne}</p>
      <Image src={blogImgPath} imgClass={"w-5/6 lg:w-3/5 m-auto mt-9"} />
      <p className="text-center mt-2 text-primary/70">DLSH 2019 – Narsingdi</p>
      <p className="text-justify mt-7 leading-7 text-primary/70 text-base">
        {paraTwo}
      </p>
      <p className="text-justify mt-3 leading-7 text-primary/70">{paraThree}</p>
      <p className="text-justify mt-3 leading-7 text-primary/70">{paraFour}</p>
      <p className="text-justify mt-3 leading-7 text-primary/70">{paraFive}</p>

      <p className="text-xl font-semibold mt-10 leading-7 text-primary">
        Leave A Reply
      </p>
      <p className="text-justify mt-3 mb-5 leading-7 text-primary/60">
        Your email address will not be published. Required fields are marked *
      </p>

      <form className="flex flex-col" action="" method="">
        <label className="mb-1 text-[13px] text-primary/80">COMMENT*</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="8"
          className="border-solid border-[1px] border-secondary/30 focus:border-primary linear duration-300 px-4 py-3 w-full outline-0 mb-6"
        ></textarea>
        <label className="mb-1 text-[13px] text-primary/80">NAME*</label>
        <input
          type="email"
          className="border-solid border-[1px] border-secondary/30 focus:border-primary linear duration-300 px-4 py-3 w-full outline-0 mb-6"
        />
        <label className="mb-1 text-[13px] text-primary/80">EMAIL*</label>
        <input
          type="text"
          className="border-solid border-[1px] border-secondary/30 focus:border-primary linear duration-300 px-4 py-3 w-full outline-0 mb-6"
        />
        <label className="mb-1 text-[13px] text-primary/80">WEBSITE*</label>
        <input
          type="text"
          className="border-solid border-[1px] border-secondary/30 focus:border-primary linear duration-300 px-4 py-3 w-full outline-0 mb-6"
        />
        <div className="flex gap-x-2 items-center">
          <input className="mb-1" type={"checkbox"} id={"check"} />
          <label className="mb-1 text-sm text-primary/80" for={"check"}>
            Save My Name, Email, And Website In This Browser For The Next Time I
            Comment.
          </label>
        </div>
        <div className="flex justify-end mt-2">
          <button className="py-3 px-4 bg-primary text-white font-semibold mb-5 hover:bg-[#006bb3] mt-3 text-sm linear duration-300">
            POST COMMENT
          </button>
        </div>

        <div className="flex justify-end mt-2">
          <button className="py-3 px-4 hover:bg-primary border-2 border-secondary/30 hover:border-primary text-primary/80 hover:text-white font-semibold mb-5 bg-white mt-3 text-sm linear duration-300 rounded-md flex items-center gap-x-1">
            NEXT POST{" "}
            <MdOutlineKeyboardArrowRight className="font-bold text-[22px]" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SingleBlogRead;
