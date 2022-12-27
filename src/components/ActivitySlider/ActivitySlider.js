import React from 'react';
import Slider from '../Slider/Slider';
import portfolio1 from '../../Assests/Imgs/portfolio-1.jpg'
import portfolio2 from '../../Assests/Imgs/portfolio-2.jpg'
import portfolio3 from '../../Assests/Imgs/portfolio-3.jpg'
import portfolio4 from '../../Assests/Imgs/portfolio-4.jpg'
import portfolio5 from '../../Assests/Imgs/portfolio-5.jpg'
import portfolio6 from '../../Assests/Imgs/portfolio-6.jpg'
import portfolio7 from '../../Assests/Imgs/portfolio-7.jpg'
import portfolio8 from '../../Assests/Imgs/portfolio-8.jpg'
import portfolio9 from '../../Assests/Imgs/portfolio-9.jpg'
import portfolio10 from '../../Assests/Imgs/portfolio-10.jpg'
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { MdOutlineArrowRightAlt } from 'react-icons/md'
const ActivitySlider = () => {
    const data = {
        navigation: true,
        pagination: true,
        autoplay: true,
        slidesPerView: 4
    }
    return (
        <div className='mx-3 lg:mx-40 my-20'>
            <div className='lg:flex items-center lg:justify-between mb-20'>
                <div className='flex items-center mb-5 md:mb-0'>
                    <span className='border border-t-0 border-r-0 border-b-0 border-[#0097FA] py-7  bg-[#0097FA] mr-5'></span>
                    <div>
                        <h1 className='text-[#0097FA] text-lg font-semibold'>Joining Hands To Help The World’s</h1>
                        <h1 className='font-bold text-3xl'>Some Outstanding Activities</h1>
                    </div>
                </div>
                <p className='text-sm text-zinc-400 font-sans'>We invite you on a journey through selected case studies of our work <br /> in support of the SDG agenda.</p>
            </div>
            <Slider
                data={data}
            >
                <SwiperSlide>
                    <div className='text-left w-[370px] h-[370px]'>
                        <div className='mb-2 w-full h-[220px]'>
                            <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">Emeregency Response</span>
                            <img className='w-full h-full' src={portfolio1} alt="" />
                        </div>
                        <div>
                            <Link className='font-semibold mb-2 font-sans' to='/portfolio/winter-clothes-distribution/'>Winter clothes distribution <br />-2022</Link>
                            <p className='text-sm font-normal text-zinc-400 font-sans'>Winters in the northern part of Bangladesh are extremely cold and affects highly to the disabled, children and the elderly,</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-left w-[370px] h-[370px]'>
                        <div className='mb-2 w-full h-[220px]'>
                            <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">Emeregency Response</span>
                            <img className='w-full h-full' src={portfolio2} alt="" />
                        </div>
                        <div>
                            <Link className='font-semibold mb-2 font-sans' to="/portfolio/distribute-relief-to-cyclone-roanu-affected-coastal-people/">Distribute relief to cyclone Roanu affected coastal people</Link>
                            <p className='text-sm font-normal text-zinc-400 font-sans'>When the founding members were planning to start an organization in order to help people, the cyclone Roanu hit the</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-left w-[370px] h-[370px]'>
                        <div className='mb-2 w-full h-[220px]'>
                            <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">Education</span>
                            <img className='w-full h-full' src={portfolio3} alt="" />
                        </div>
                        <div>
                            <Link className='font-semibold mb-2 font-sans' to="/portfolio/they-read-they-build/">পড়বে ওরা,গড়বে দেশ (They Read, They Build)</Link>
                            <p className='text-sm font-normal text-zinc-400 font-sans'>Students from poor families can’t buy educational materials. Though they have talent, because of poverty, students from rural areas have</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-left w-[370px] h-[370px]'>
                        <div className='mb-2 w-full h-[220px]'>
                            <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">Health</span>
                            <img className='w-full h-full' src={portfolio4} alt="" />
                        </div>
                        <div>
                            <Link className='font-semibold mb-2 font-sans' to="/portfolio/health-camp-medicine-educational-equipment-for-flood-victim-children/">Health Camp, Medicine &amp; Educational Equipment For Flood Victim children</Link>
                            <p className='text-sm font-normal text-zinc-400 font-sans'>Works For Humanity organized an event named “প্রাণের জন্য ত্রাণ – Relief For Flood Victims” on 15th September at Jamalpur</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-left w-[370px] h-[370px]'>
                        <div className='mb-2 w-full h-[220px]'>
                            <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">Portfolio</span>
                            <img className='w-full h-full' src={portfolio5} alt="" />
                        </div>
                        <div>
                            <Link className='font-semibold mb-2 font-sans' to="/portfolio/application-mobile/">Application mobile</Link>
                            <p className='text-sm font-normal text-zinc-400 font-sans'>Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-left w-[370px] h-[370px]'>
                        <div className='mb-2 w-full h-[220px]'>
                            <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">Education</span>
                            <img className='w-full h-full' src={portfolio6} alt="" />
                        </div>
                        <div>
                            <Link className='font-semibold mb-2 font-sans' to="/portfolio/business-card/">Business card</Link>
                            <p className='text-sm font-normal text-zinc-400 font-sans'>Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-left w-[370px] h-[370px]'>
                        <div className='mb-2 w-full h-[220px]'>
                            <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">Health</span>
                            <img className='w-full h-full' src={portfolio7} alt="" />
                        </div>
                        <div>
                            <Link className='font-semibold mb-2 font-sans' to="/portfolio/mobile-weather-app/">Mobile Weather App</Link>
                            <p className='text-sm font-normal text-zinc-400 font-sans'>Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-left w-[370px] h-[370px]'>
                        <div className='mb-2 w-full h-[220px]'>
                            <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">Awareness</span>
                            <img className='w-full h-full' src={portfolio8} alt="" />
                        </div>
                        <div>
                            <Link className='font-semibold mb-2 font-sans' to="/portfolio/lowpoly-social/">LowPoly Social</Link>
                            <p className='text-sm font-normal text-zinc-400 font-sans'>Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-left w-[370px] h-[370px]'>
                        <div className='mb-2 w-full h-[220px]'>
                            <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">Project Tribeni</span>
                            <img className='w-full h-full' src={portfolio9} alt="" />
                        </div>
                        <div>
                            <Link className='font-semibold mb-2 font-sans' to="/portfolio/special-bikes/">Special bikes</Link>
                            <p className='text-sm font-normal text-zinc-400 font-sans'>Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='text-left w-[370px] h-[370px]'>
                        <div className='mb-2 w-full h-[220px]'>
                            <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">Project Tribeni</span>
                            <img className='w-full h-full' src={portfolio10} alt="" />
                        </div>
                        <div>
                            <Link className='font-semibold mb-2 font-sans' to="/portfolio/moderats-eloquenti/">Moderats eloquenti</Link>
                            <p className='text-sm font-normal text-zinc-400 font-sans'>Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Slider>
            <div className='flex items-center flex-col'>
                <p className='text-lg text-center mt-10 mb-3'>Please find below our development projects.</p>
                <PrimaryButton>View All<MdOutlineArrowRightAlt className='text-2xl ml-2' /></PrimaryButton>
            </div>
        </div >
    );
};

export default ActivitySlider;