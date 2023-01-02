import React from 'react';
import visionImg from '../../Assests/Imgs/vission.jpg';
import { BiCaretRight } from "react-icons/bi";

const Vision = () => {
    return (
        <div className='mx-3 lg:mx-44 my-48'>
            <div className='py-12 pr-2 bg-[#F4F5F9]'>
                <div className='grid sm-grid-cols-1 gap-8 lg:grid-cols-2'>
                    <div className='relative'>
                        <div className='absolute lg:mt-36 lg:ml-60 mt-24 ml-40'>
                            <div className='hover:cursor-pointer hover:scale-75 duration-500 rounded-full border-8 border-white border-opacity-40'>
                                <div className="rounded-full flex relative p-2 bg-white">
                                    <a href="https://www.youtube.com/watch?v=LajtLm8FCEw&ab_channel=WFHFoundation"> <BiCaretRight className='text-[#0097FA] lg:text-5xl text-2xl rounded-full' /></a>
                                </div>
                            </div>

                        </div>
                        <img src={visionImg} alt="mission-img" />

                    </div>
                    <div className='flex'>
                        <div className="border-l-2 border-[#0097FA] h-10"></div>
                        <div>
                            <h3 className='text-3xl font-bold ml-2 mb-3'>Our Vision</h3>
                            <p className='text-[15px] font-normal text-gray-400 leading-6'>To make a beautiful country without poverty, which will be an example of perfection and where every person (Man, Woman, Transgender) will have basic education and will have involvement in the economy.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Vision;