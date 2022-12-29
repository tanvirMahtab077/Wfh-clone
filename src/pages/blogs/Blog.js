import React from "react";
import Banner from "../../components/banner/Banner";
import BlogShowcase from "../../components/blogShowcase/BlogShowcase";
import BlogSideBar from "../../components/blogSideBar/BlogSideBar";

const Blog = () => {
  return (
    <>
    
      <div className="max-w-container mx-auto flex flex-col lg:flex-row justify-start gap-x-7 mt-12">
        <BlogShowcase className={"w-full lg:w-3/4"} />
        <BlogSideBar className={"w-full lg:w-1/4"} />
      </div>
    </>
  );
};

export default Blog;
