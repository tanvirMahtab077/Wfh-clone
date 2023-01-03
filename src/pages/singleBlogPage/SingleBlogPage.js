import React from "react";
import BlogSideBar from "../../components/blogSideBar/BlogSideBar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SingleBlogRead from "../../components/singleBlogRead/SingleBlogRead";

const SingleBlogPage = () => {
  return (
    <>
      <HeroBanner header={"Donate Love, Spread Happiness 2022"} />
      <div className="max-w-container mx-auto flex flex-col lg:flex-row justify-between gap-x-7 mt-10">
        <SingleBlogRead
          className={"w-full lg:w-3/4"}
          blogImgPath={"/assets/images/blog/blog-2.jpg"}
          topicDate={"Announcement, DLSH - January 31, 2022"}
          heading={"Donate Love, Spread Happiness 2022"}
          paraOne={
            "১৪ই ফেব্রুয়ারির এই দিনটা একটু অন্যভাবে চিন্তা করুন। এই দিনটি যদি অসহায় পরিবারহীন শিশুদের সাথে আনন্দ ভাগাভাগি করে কাটাতে পারেন, মাতৃস্নেহ দিয়ে একবেলা খাবার খাইয়ে দিতে পারেন, বাবা-মায়ের মতো ভালোবেসে মাথায় হাত বুলিয়ে দিতে পারেন, বিশ্বাস করুন আপনার সারাজীবনের কাটানো সকল দিনের সেরা একটি দিন হবে এই দিনটা! পরিবারহীন এসব শিশুদের মাঝে ভালোবাসা ছড়িয়ে দিতে চতুর্থবারের মত ভালোবাসা দিবসে ওয়ার্কস ফর হিউম্যানিটি ফাউন্ডেশন আয়োজন করেছে “Donate Love, Spread Happiness” প্রোগ্রাম। এতিম, পথশিশু, শিশুশ্রমিক বাচ্চাদের সাথে সারাদিন সময় কাটাব আমরা। কিছুক্ষণের জন্য শিশুদের মাঝে থাকব ওদের জগতে।"
          }
        />
        <BlogSideBar className={"w-full lg:w-1/4"} />
      </div>
    </>
  );
};

export default SingleBlogPage;
