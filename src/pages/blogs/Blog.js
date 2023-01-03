import React from "react";
import BlogShowcase from "../../components/blogShowcase/BlogShowcase";
import BlogSideBar from "../../components/blogSideBar/BlogSideBar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

const Blog = () => {
  return (
    <>
      <HeroBanner header={"WFH Blogs"} />
      <div className="max-w-container mx-auto flex flex-col lg:flex-row justify-start gap-x-7 mt-10">
        <BlogShowcase className={"w-full lg:w-3/4"} />
        <BlogSideBar className={"w-full lg:w-1/4"} />
      </div>
    </>
  );
};

export default Blog;
