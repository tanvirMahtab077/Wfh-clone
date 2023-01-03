import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import SingleBlogRead from "../../components/singleBlogRead/SingleBlogRead";
import SingleBlogSideBar from "../../components/singleBlogSideBar/SingleBlogSideBar";

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
          paraOne={`১৪ই ফেব্রুয়ারির এই দিনটা একটু অন্যভাবে চিন্তা করুন। এই দিনটি যদি অসহায় পরিবারহীন শিশুদের সাথে আনন্দ ভাগাভাগি করে কাটাতে পারেন, মাতৃস্নেহ দিয়ে একবেলা খাবার খাইয়ে দিতে পারেন, বাবা-মায়ের মতো ভালোবেসে মাথায় হাত বুলিয়ে দিতে পারেন, বিশ্বাস করুন আপনার সারাজীবনের কাটানো সকল দিনের সেরা একটি দিন হবে এই দিনটা! পরিবারহীন এসব শিশুদের মাঝে ভালোবাসা ছড়িয়ে দিতে চতুর্থবারের মত ভালোবাসা দিবসে ওয়ার্কস ফর হিউম্যানিটি ফাউন্ডেশন আয়োজন করেছে “Donate Love, Spread Happiness” প্রোগ্রাম। এতিম, পথশিশু, শিশুশ্রমিক বাচ্চাদের সাথে সারাদিন সময় কাটাব আমরা। কিছুক্ষণের জন্য শিশুদের মাঝে থাকব ওদের জগতে।`}
          paraTwo={
            <Fragment>
              এই আয়োজনে অংশগ্রহণ করতে পারেন যেভাবেঃ
              <br /> ১. ভলান্টিয়ার হিসেবে (অনুষ্ঠানে সরাসরি অংশগ্রহণ করতে
              ভলান্টিয়ার হিসেবে রেজিস্ট্রেশন আবশ্যক। রেজিস্ট্রেশন চার্জ ৩০০/-।
              পাচ্ছেন টিশার্ট, আইডি কার্ড, সার্টিফিকেট ও লাঞ্চবক্স।)
              <br /> ২. দাতা হিসেবে (এতিম শিশুদের জন্য একটি দিনকে আনন্দময় করে
              তুলতে যেকোনো পরিমাণ অর্থ অনুদান হিসেবে পাঠাতে পারেন)
              <br /> ৩. ১৫০/- অনুদানের মাধ্যমে একটি শিশুর একবেলা খাবারের
              দায়িত্ব নিতে পারেন। একজন দাতা চাইলে যত খুশি ততজন শিশুর খাবারের
              দায়িত্ব নিতে পারবেন।
              <br />
              ৪. স্পন্সর হিসেবে (আপনার ব্যবসা প্রতিষ্ঠান হতে শিশুদের জন্য উপহার
              পাঠিয়ে স্পন্সর হিসেবে যুক্ত হতে পারেন)
              <br /> ৫. আয়োজনের ছবি তুলে বা ভিডিওধারণ করে এবং প্রচার মাধ্যম
              হিসেবে ফটোগ্রাফার বা মিডিয়া পার্টনার হিসেবে যুক্ত হতে পারেন
              (এক্ষেত্রে কোন ধরনের রেজিস্ট্রেশন চার্জ লাগবে না)
            </Fragment>
          }
          paraThree={
            <Fragment>
              <br /> ভলান্টিয়ার বা ডোনার হিসেবে যুক্ত হতে চাইলে{" "}
              <Link
                to={"/be-a-volunteer"}
                className={
                  "font-semibold mb-1 inline-block hover:text-blueTxt linear duration-300"
                }
              >
                রেজিস্ট্রেশন লিংক
              </Link>{" "}
              <br /> কিভাবে রেজিস্ট্রেশন করবেনঃ
              <br /> ১) দাতা/
              <Link
                to={"/be-a-volunteer"}
                className={
                  "font-semibold mb-1 inline-block hover:text-blueTxt linear duration-300"
                }
              >
                ভলান্টিয়ার
              </Link>{" "}
              হিসেবে এই উদ্যোগে যুক্ত হতে চাইলে প্রথমে রেজিস্ট্রেশন লিংকের
              ফর্মটি পূরণ করতে হবে। এরপর ফি/অনুদান পাঠিয়ে রেজিস্ট্রেশন সম্পন্ন
              করতে হবে। <br /> ২) ফি/অনুদান পাঠানোর পর DLSH স্পেস ফর্ম অনুযায়ী
              নাম স্পেস যে নাম্বার থেকে ফি/অনুদান পাঠাবেন উক্ত নাম্বার উল্লেখ
              করে মেসেজ করুন 01794013834 এই নাম্বারে।উদাহরণঃ DLSH Mesbah Munna
              01816-656455 ফিরতি মেসেজে আপনাকে একটি কোড দেওয়া হবে। কোড পেয়ে
              গেলেই আপনার রেজিস্ট্রেশন সম্পন্ন হবে।কোভিড সংক্রমণের ফলে
              নিরাপত্তাজনিত কারণে ইভেন্টের দিন কোড নাম্বার ছাড়া কাউকে প্রবেশ
              করতে দেওয়া হবেনা।
            </Fragment>
          }
          paraFour={
            <Fragment>
              <br /> অনুদান পাঠানোর মাধ্যমঃ
              <br /> বিকাশঃ +8801816-656455 (personal) +8801746-921283
              (personal) +8801794-013834 (personal)
              <br /> রকেটঃ 01746921283-6
              <br /> নগদঃ 01746921283
              <br /> ব্যাংকঃ A/C NAME: MOHAMMAD ABU KHALID199.151.0058567
              (DBBL)Branch: Uttara Sonargaon Janapath. SWIFT: DBBLBDDHROUTING:
              090264656
            </Fragment>
          }
          paraFive={
            <Fragment>
              <br />
              রেজিস্ট্রেশনের শেষ সময় ১০ফেব্রুয়ারি, ২০২২।
              <br /> যেকোন প্রয়োজনে যোগাযোগঃ
              <br /> +8801816-656455/ 01746921283
              <br /> “Donate Love, Spread Happiness”
              <br />
              <br /> #wfhfoundation #DLSH
            </Fragment>
          }
        />
        <SingleBlogSideBar className={"w-full lg:w-1/4"} />
      </div>
    </>
  );
};

export default SingleBlogPage;
