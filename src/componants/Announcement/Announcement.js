import React from 'react';
import './Announcement.css'
import love from '../../image/loveimg.jpg';

const Announcement = () => {
    return (
        <div className='announcement'>
            <div>
                <h1>Non-Profit Organization In Bangladesh</h1>
                <h2>WORKS FOR HUMANITY FOUNDATION</h2>
                <h4>WFH FOUNDATION is a socio-economic development  non-profit  organization in Bangladesh that is working to remove illiteracy, make every people aware of their rights, and increase awareness about child marriage with different charitable activities in Bangladesh. It also aims to ensure every human being’s participation in blood donation and make people aware of the disease.</h4>
                <br />
                <h4>WFH FOUNDATION has four individual depts. including four individual teams which are governed by Dept. Head.</h4>
                <h3>Dept. of Education</h3>
                <h4>75% of students only read the academic book. Most of them never read storybooks or they hardly know about literature which is a crying need for enlightening the human mind or outlook. Education dept. is collecting books for a library named “BOIBARI” and it distributes books among the student from class three to class nine. Students who had no goal or planning for their future, are starting to think maturely and they make an aim for their career.</h4>
                <h3>Dept. of Awareness</h3>
                <h4>Lack of awareness is one of the root reasons for any problems. Dept. of Awareness is doing regular workshops to increase public awareness. At present, it’s working for stopping child marriage.</h4>
                <h3>Dept. of Health & Blood</h3>
                <h4>Can a human being imagine his body without blood? Or is it possible to make it by machine? Ans. Is NO, But blood can be needed for anyone, anytime. Basically, Dept. of Health & Blood is working for managing blood donors for needy patients.</h4>
            </div>
            <div>
            <h2>ANNOUNCEMENT</h2>
            <div className='border'>
              <div className='love-img-box'><img className='love-img' src={love} alt="love" /></div>
                <h1>Announcement, DLSH - March 1, 2022</h1>
                <h2><a href="">ভালোবাসা দিবসে পথশিশুদের পাশে ওয়ার্কস ফর হিউমিনিটি ফাউন্ডেশন</a></h2>
                <h4><a href="">ভালোবাসা দিবসে যেখানে সবাই তাদের পরিবার পরিজন,প্রিয় মানুষের সাথে ভালোবাসা দিবস উদযাপন করে সেখানে সমাজ কথিত সুবিধাবঞ্চিত পথশিশু সবার মাঝে খুশি ছড়িয়ে দিতে দিনব্যাপী নানা কার্যক্রমের মাধ্যমে বিশ্বসাহিত্য কেন্দ্রে ভালোবাসা দিবস উদযাপন করেছে ওয়ার্কস ফর হিউম্যানিটি ফাউন্ডেশন। ভালোবাসা শুধু ভালোবাসার মানুষটির জন্য নয়, বরং পরিবারবিহীন মানুষদেরও রয়েছে ভালোবাসা পাওয়ার অধিকার; এই ধারণা প্রেক্ষিতে  ২০১৮ সাল […]</a></h4>
            </div>
            </div>
        </div>
    );
};

export default Announcement;