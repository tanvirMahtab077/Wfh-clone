import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '../Slider/Slider';
import eshikhon from '../../Assests/Imgs/eshikhon.png'
import ibr from '../../Assests/Imgs/20220209_221905.png'
import apon from '../../Assests/Imgs/Apon-Foundation.png'
import canvas from '../../Assests/Imgs/Canvas.png'
import cri from '../../Assests/Imgs/CRI.png'
import yb from '../../Assests/Imgs/young-banlga.png'
import tribeni from '../../Assests/Imgs/tribeni.png'
import shh from '../../Assests/Imgs/SHH.png'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { MdOutlineArrowRightAlt } from 'react-icons/md';


const AboutSlider = () => {
    const data = {
        navigation: true,
        pagination: true,
        autoplay: true,
        slidesPerView: 4
    }
    return (
        <div className="bg-[url('/src/Assests/Imgs/mapbg.png')] py-20">
            <div className='p-8 bg-[#0097FA] mt-10 mb-5 relative after:content:"" before:content:"" before:table after:table after:border-[12px] after:border-solid after:border-transparent after:border-t-[#0097FA] after:absolute after:-bottom-6 after:left-1/2 after:-ml-3 after:z-10'>
                <h1 className='text-4xl font-bold text-white text-center'>Partners</h1>
            </div>
            <Slider data={data}>
                <SwiperSlide>
                  <div>
                    <div>
                    <img className='h-[70px] w-[180px] cursor-pointer my-10' src={yb} alt="" />
                   
                    </div>
                    <div>
                    <img className='h-[70px] w-[180px] cursor-pointer my-10' src={cri} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div>
                 <div>
                 <img className='h-[70px] w-[180px] cursor-pointer my-10' src={apon} alt="" />
                    </div>
                    <div>
                    <img className='h-[70px] w-[180px] cursor-pointer my-10' src={tribeni} alt="" />
                    </div>
                 </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                        <div>
                        <img className='h-[70px] w-[180px] cursor-pointer my-10' src={shh} alt="" />
                        </div>
                    <div>
                        <img className='h-[70px] w-[180px] cursor-pointer my-10' src={ibr} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                    <div>
                    <img className='h-[70px] w-[180px] cursor-pointer my-10' src={canvas} alt="" />
                    </div>
                    <div>
                    <img className='h-[70px] w-[180px] cursor-pointer my-10' src={eshikhon} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                    <div>
                    <img className='h-[70px] w-[180px] cursor-pointer my-10' src={yb} alt="" />
                   
                    </div>
                    <div>
                    <img className='h-[70px] w-[180px] cursor-pointer my-10' src={cri} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                 <div>
                 <img className='h-[70px] w-[180px] cursor-pointer my-10' src={apon} alt="" />
                    </div>
                    <div>
                    <img className='h-[70px] w-[180px] cursor-pointer my-10' src={tribeni} alt="" />
                    </div>
                 </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                        <div>
                        <img className='h-[70px] w-[180px] cursor-pointer my-10' src={shh} alt="" />
                        </div>
                    <div>
                        <img className='h-[70px] w-[180px] cursor-pointer my-10' src={ibr} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                    <div>
                    <img className='h-[70px] w-[180px] cursor-pointer my-10' src={canvas} alt="" />
                    </div>
                    <div>
                    <img className='h-[70px] w-[180px] cursor-pointer my-10' src={eshikhon} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
            </Slider>
            <div className='flex items-center flex-col'>
                <p className='text-lg text-center mt-10 mb-3'>When we are alone we can do so little; <br />
                    But together we can do so much.</p>
                <PrimaryButton>Be a Partner<MdOutlineArrowRightAlt className='text-2xl ml-2' /></PrimaryButton>
            </div>
        </div>
    );
};

export default AboutSlider;