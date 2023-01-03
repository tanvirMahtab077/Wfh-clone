import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import Image from "../layouts/image/Image";

const SingleBlogRead = ({
  topicDate,
  heading,
  blogImgPath,
  paraOne,
  className,
}) => {
  return (
    <div className={`px-5 font-pop ${className}`}>
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
        এই আয়োজনে অংশগ্রহণ করতে পারেন যেভাবেঃ <br />
        <br /> ১. ভলান্টিয়ার হিসেবে (অনুষ্ঠানে সরাসরি অংশগ্রহণ করতে ভলান্টিয়ার
        হিসেবে রেজিস্ট্রেশন আবশ্যক। রেজিস্ট্রেশন চার্জ ৩০০/-। পাচ্ছেন টিশার্ট,
        আইডি কার্ড, সার্টিফিকেট ও লাঞ্চবক্স।)
        <br /> ২. দাতা হিসেবে (এতিম শিশুদের জন্য একটি দিনকে আনন্দময় করে তুলতে
        যেকোনো পরিমাণ অর্থ অনুদান হিসেবে পাঠাতে পারেন)
        <br /> ৩. ১৫০/- অনুদানের মাধ্যমে একটি শিশুর একবেলা খাবারের দায়িত্ব নিতে
        পারেন। একজন দাতা চাইলে যত খুশি ততজন শিশুর খাবারের দায়িত্ব নিতে পারবেন।
        <br />
        ৪. স্পন্সর হিসেবে (আপনার ব্যবসা প্রতিষ্ঠান হতে শিশুদের জন্য উপহার
        পাঠিয়ে স্পন্সর হিসেবে যুক্ত হতে পারেন)
        <br /> ৫. আয়োজনের ছবি তুলে বা ভিডিওধারণ করে এবং প্রচার মাধ্যম হিসেবে
        ফটোগ্রাফার বা মিডিয়া পার্টনার হিসেবে যুক্ত হতে পারেন (এক্ষেত্রে কোন
        ধরনের রেজিস্ট্রেশন চার্জ লাগবে না)
      </p>
      <p className="text-justify mt-3 leading-7 text-primary/70">
        <br /> ভলান্টিয়ার বা ডোনার হিসেবে যুক্ত হতে চাইলে রেজিস্ট্রেশন লিংক{" "}
        <br /> কিভাবে রেজিস্ট্রেশন করবেনঃ <br />
        <br /> ১) দাতা/ ভলান্টিয়ার হিসেবে এই উদ্যোগে যুক্ত হতে চাইলে প্রথমে
        রেজিস্ট্রেশন লিংকের ফর্মটি পূরণ করতে হবে। এরপর ফি/অনুদান পাঠিয়ে
        রেজিস্ট্রেশন সম্পন্ন করতে হবে। <br /> ২) ফি/অনুদান পাঠানোর পর DLSH স্পেস
        ফর্ম অনুযায়ী নাম স্পেস যে নাম্বার থেকে ফি/অনুদান পাঠাবেন উক্ত নাম্বার
        উল্লেখ করে মেসেজ করুন 01794013834 এই নাম্বারে।উদাহরণঃ DLSH Mesbah Munna
        01816-656455 ফিরতি মেসেজে আপনাকে একটি কোড দেওয়া হবে। কোড পেয়ে গেলেই
        আপনার রেজিস্ট্রেশন সম্পন্ন হবে।কোভিড সংক্রমণের ফলে নিরাপত্তাজনিত কারণে
        ইভেন্টের দিন কোড নাম্বার ছাড়া কাউকে প্রবেশ করতে দেওয়া হবেনা।
      </p>
      <p className="text-justify mt-3 leading-7 text-primary/70">
        <br /> অনুদান পাঠানোর মাধ্যমঃ
        <br />
        <br /> বিকাশঃ +8801816-656455 (personal) +8801746-921283 (personal)
        +8801794-013834 (personal)
        <br /> রকেটঃ 01746921283-6
        <br /> নগদঃ 01746921283
        <br /> ব্যাংকঃ A/C NAME: MOHAMMAD ABU KHALID199.151.0058567
        (DBBL)Branch: Uttara Sonargaon Janapath. SWIFT: DBBLBDDHROUTING:
        090264656
      </p>
      <p className="text-justify mt-3 leading-7 text-primary/70">
        <br />
        রেজিস্ট্রেশনের শেষ সময় ১০ফেব্রুয়ারি, ২০২২।
        <br /> যেকোন প্রয়োজনে যোগাযোগঃ
        <br /> +8801816-656455/ 01746921283
        <br /> “Donate Love, Spread Happiness”
        <br />
        <br /> #wfhfoundation #DLSH
      </p>

      <p className="text-xl font-semibold mt-10 leading-7 text-primary">
        Leave A Reply
      </p>
      <p className="text-justify mt-3 mb-5 leading-7 text-primary/60">
        Your email address will not be published. Required fields are marked *
      </p>

      <div className="flex flex-col">
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
      </div>
    </div>
  );
};

export default SingleBlogRead;
