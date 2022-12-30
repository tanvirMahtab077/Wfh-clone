import React from 'react';
import { FcBullish } from "react-icons/fc";
import { FaUserFriends } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import {FiMapPin } from "react-icons/fi";

const ReachPresence = () => {
    return (
        <div id='mission' className='my-12'>
            <div className='grid sm-grid-cols-1 gap-8 lg:grid-cols-2'>
                <div className='flex'>
                    <div className="border-l-2 border-[#0097FA] h-10"></div>
                    <div>
                        <h3 className='text-3xl font-bold ml-2 mb-3'>Our Reach & Presence</h3>
                        <p className='text-[15px] font-normal text-gray-400 leading-6'>WFH FOUNDATION started its journey at Dhaka and working for the improvement of Poverty, Education, Women Empowerment, Health issues and so on. Now its reached to 4,50,00,000 people at 13 district and 731 volunteer engaged themselves at WFH.</p>
                    </div>
                </div>
                <div className='flex'>
                  <div>
                  <div className='flex mr-24 mb-10'>
                       <FcBullish className='text-5xl' />
                            <div className="border-l-2 mx-4 border-gray-300 h-16"></div>
                            <div className='mx-3'>
                                <h2 className='text-2xl font-bold text-[#4CAF50]'>120</h2>
                                <p className='text-xl font-bold'>Project</p>
                            </div>
                    </div>
                  <div className='flex mr-24 pb-10'>
                       <BsEmojiSmile className='text-5xl text-[#FF9800]' />
                            <div className="border-l-2 mx-4 border-gray-300 h-16"></div>
                            <div className='mx-3'>
                                <h2 className='text-2xl font-bold text-[#FF9800]'>120,000</h2>
                                <p className='text-xl font-bold'>Beneficiary</p>
                            </div>
                    </div>
                  </div>
                    <div>
                    <div className='flex pb-10'>
                       <FaUserFriends className='text-5xl text-[#FEC501]' />
                            <div className="border-l-2 mx-4 border-gray-300 h-16"></div>
                            <div className='mx-3'>
                                <h2 className='text-2xl font-bold text-[#FEC501]'>228</h2>
                                <p className='text-xl font-bold'>Volunteer</p>
                            </div>
                    </div> <div className='flex pb-10'>
                       <FiMapPin className='text-5xl text-[#558EEA]' />
                            <div className="border-l-2 mx-4 border-gray-300 h-16"></div>
                            <div className='mx-3'>
                                <h2 className='text-2xl font-bold text-[#558EEA]'>13</h2>
                                <p className='text-xl font-bold'>District</p>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReachPresence;