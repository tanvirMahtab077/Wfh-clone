import React from 'react';
import visionImg from '../../Assests/Imgs/vission.jpg';
import { BiCaretRight } from "react-icons/bi";

const Vision = () => {
    return (
        <div id='vision' className='my-48'>
            <div className='py-12 pr-2 bg-[#F4F5F9]'>
                <div className='grid sm-grid-cols-1 gap-8 lg:grid-cols-2'>
                    <div className='relative'>
                        <div className='absolute mt-36 ml-60'>
                            <div class="rounded-full flex p-4 outline-1 shadow-lg relative bg-[#FFFFFF] m-3">
                          <a href="https://www.youtube.com/watch?v=LajtLm8FCEw&ab_channel=WFHFoundation"> <BiCaretRight className='text-[#0097FA] text-2xl shadow-lg hove:duration-50'/></a>
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