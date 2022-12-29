import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Button from "../layouts/button/Button";
import Image from "../layouts/image/Image";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const BlogCardSingle = ({
  className,
  blogImgPath,
  topicDate,
  heading,
  content,
  blogLink,
}) => {
  return (
    <div className="lg:h-[700px] font-pop text-center lg:w-[47%] flex flex-col justify-between items-center gap-y-8 lg:gap-y-4 border-[1px] border-solid rounded-md pb-8 shadow-md">
      <div className="flex flex-col items-center gap-y-4 overflow-hidden">
        <a href={blogLink}>
          <Image src={blogImgPath} />
        </a>
        <p className="mt-3">
          <a
            className="text-sm font-semibold text-primary/60 hover:text-primary  linear duration-300"
            href="#"
          >
            {topicDate}
          </a>
        </p>
        <h3 className="px-10 font-semibold text-2xl text-primary hover:text-blueTxt linear duration-300">
          <a href={blogLink}>{heading}</a>
        </h3>
        <p className="px-9 text-primary/70">{content}</p>
      </div>
      <PrimaryButton className={"mt-2 items-end"}>
        READ MORE
        <MdOutlineArrowRightAlt className="text-2xl ml-2" />
      </PrimaryButton>
    </div>
  );
};

export default BlogCardSingle;
