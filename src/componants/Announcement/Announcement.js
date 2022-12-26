import React from 'react';
import './Announcement.css'
import love from '../../image/loveimg.jpg';

const Announcement = () => {
    return (
        <div className='announcement'>
            <div class="border-l-2 h-16 border-blue-600 ...">
                <h1 className='text-xl pl-2 b2 text-blue-600'>Non-Profit Organization In Bangladesh</h1>
                <h2 className='text-2xl pl-2 font-bold pb-4'>WORKS FOR HUMANITY FOUNDATION</h2>
                <p className='text-gray-500'>WFH FOUNDATION is a socio-economic development  non-profit  organization in Bangladesh that is working to remove illiteracy, make every people aware of their rights, and increase awareness about child marriage with different charitable activities in Bangladesh. It also aims to ensure every human being’s participation in blood donation and make people aware of the disease.</p>
                <p className='text-gray-500 py-4'>WFH FOUNDATION has four individual depts. including four individual teams which are governed by Dept. Head.</p>
                <h3 className='py-4 text-xl font-bold'>Dept. of Education</h3>
                <p className='text-gray-500'>75% of students only read the academic book. Most of them never read storybooks or they hardly know about literature which is a crying need for enlightening the human mind or outlook. Education dept. is collecting books for a library named “BOIBARI” and it distributes books among the student from class three to class nine. Students who had no goal or planning for their future, are starting to think maturely and they make an aim for their career.</p>
                <h3 className='py-4 text-xl font-bold'>Dept. of Awareness</h3>
                <p className='text-gray-500'>Lack of awareness is one of the root reasons for any problems. Dept. of Awareness is doing regular workshops to increase public awareness. At present, it’s working for stopping child marriage.</p>
                <h3 className='py-4 text-xl font-bold'>Dept. of Health & Blood</h3>
                <p className='text-gray-500'>Can a human being imagine his body without blood? Or is it possible to make it by machine? Ans. Is NO, But blood can be needed for anyone, anytime. Basically, Dept. of Health & Blood is working for managing blood donors for needy patients.</p>
            </div>
            <div>
            <h2 className='text-xl font-bold'>ANNOUNCEMENT</h2>
            <div class="border-b-2 w-14 my-4 border-blue-600 ..."></div>
            <div className='border announce-box'>
              <div className='love-img-box'><img className='love-img' src={love} alt="love" /></div>
               <div className='p-4'>
               <p className='text-gray-500 font-bold pt-4 text-center'>Announcement, DLSH - March 1, 2022</p>
                <h2 className='text-xl my-4 text-center font-bold'><a href="">ভালোবাসা দিবসে পথশিশুদের পাশে ওয়ার্কস ফর হিউমিনিটি ফাউন্ডেশন</a></h2>
                <p className='text-center text-l text-gray-500'><a href="">ভালোবাসা দিবসে যেখানে সবাই তাদের পরিবার পরিজন,প্রিয় মানুষের সাথে ভালোবাসা দিবস উদযাপন করে সেখানে সমাজ কথিত সুবিধাবঞ্চিত পথশিশু সবার মাঝে খুশি ছড়িয়ে দিতে দিনব্যাপী নানা কার্যক্রমের মাধ্যমে বিশ্বসাহিত্য কেন্দ্রে ভালোবাসা দিবস উদযাপন করেছে ওয়ার্কস ফর হিউম্যানিটি ফাউন্ডেশন। ভালোবাসা শুধু ভালোবাসার মানুষটির জন্য নয়, বরং পরিবারবিহীন মানুষদেরও রয়েছে ভালোবাসা পাওয়ার অধিকার; এই ধারণা প্রেক্ষিতে  ২০১৮ সাল […]</a></p>
               </div>
            </div>
            </div>
        </div>
    );
};

export default Announcement;