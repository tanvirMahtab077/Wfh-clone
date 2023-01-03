import React from "react";
import BlogCardSingle from "../blogCardSingle/BlogCardSingle";

const BlogShowcase = ({ className }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:flex-wrap gap-x-5 gap-y-8 ${className}`}
    >
      <BlogCardSingle
        blogImgPath={"/assets/images/blog/blog-1.jpg"}
        topicDate={"Announcement, DLSH - March 1, 2022"}
        heading={"ভালোবাসা দিবসে পথশিশুদের পাশে ওয়ার্কস ফর হিউমিনিটি ফাউন্ডেশন"}
        content={`ভালোবাসা দিবসে যেখানে সবাই তাদের পরিবার পরিজন,প্রিয় মানুষের সাথে
        ভালোবাসা দিবস উদযাপন করে সেখানে সমাজ কথিত সুবিধাবঞ্চিত পথশিশু সবার মাঝে
        খুশি ছড়িয়ে দিতে দিনব্যাপী নানা কার্যক্রমের মাধ্যমে বিশ্বসাহিত্য
        কেন্দ্রে ভালোবাসা`}
        blogLink={
          `/wfh-blogs/ভালোবাসা-দিবসে-পথশিশুদের-পাশে-ওয়ার্কস-ফর-হিউমিনিটি-ফাউন্ডেশন`
        }
      />
      <BlogCardSingle
        blogImgPath={"/assets/images/blog/blog-2.jpg"}
        topicDate={"Announcement, DLSH - January 31, 2022"}
        heading={"Donate Love, Spread Happiness 2022"}
        content={`১৪ই ফেব্রুয়ারির এই দিনটা একটু অন্যভাবে চিন্তা করুন। এই দিনটি যদি অসহায় পরিবারহীন শিশুদের সাথে আনন্দ ভাগাভাগি করে কাটাতে পারেন, মাতৃস্নেহ দিয়ে একবেলা খাবার খাইয়ে দিতে পারেন, বাবা-মায়ের মতো ভালোবেসে`}
        blogLink={`/wfh-blogs/donate-love-spread-happiness-2022`}
      />
    </div>
  );
};

export default BlogShowcase;
