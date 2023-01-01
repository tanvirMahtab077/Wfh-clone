import React from 'react';
import AnnouncementCalander from '../../components/announcementCalendar/AnnouncementCalander';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import img from '../../Assests/Imgs/portfolio-6.jpg'
import PostsNavButton from '../../components/postsNavButton/PostsNavButton';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const BusinessCard = () => {
    const header = "Business Card"
    return (
        <div>
            <HeroBanner header={header}></HeroBanner>
            <div>
                <div className='flex flex-col lg:flex-row mx-3 lg:mx-44 my-10'>
                    <div className='lg:mr-10'>
                        <img className='w-auto' src={img} alt="" />
                        <h1 className='text-xl font-semibold font-pop my-3'>{header}</h1>
                        <div className='font-sans text-[#8c8c8c] w-full text-[15px]'>
                            <div className='p-7 bg-[#0097FA] float-right text-white ml-3 mb-3'>
                                <ul>
                                    <li>
                                        <span className='text-right font-semibold inline-block min-w-[110px] px-3'>Client: </span>
                                        <span>BuildingX</span>
                                    </li>
                                    <li>
                                        <span className='text-right font-semibold inline-block min-w-[110px] px-3 py-1'>Status:</span>
                                        <span>In Progress</span>
                                    </li>
                                    <li>
                                        <span className='text-right font-semibold inline-block min-w-[110px] px-3 pb-1'>Location: </span>
                                        <span>Mountain View CA 94043</span>
                                    </li>
                                    <li>
                                        <span className='text-right font-semibold inline-block min-w-[110px] px-3'>Bulding Area: </span>
                                        <span>Approx: 330,000 m2</span>
                                    </li>
                                </ul>
                            </div>
                            <div className=''>
                                <p className='my-2'>Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean varius ex ut ex laoreet Aenean the fermentum.</p>
                                <h1 className='text-xl font-semibold font-pop my-3 text-black'>Project Overview</h1>
                                <p className='my-2'>Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean varius ex ut ex laoreet fermentum. Aenean sit amet massa eu velit commodo cursus fringilla a tellus. Morbi eros urna, mollis porta feugiat non, ornare eu augue. Sed rhoncus est sit amet diam tempus, et tristique est viverra. Etiam ex tellus, sectur at dapibus id, luctus at odio. Proin mattis congue tristique.</p>
                                <ul className='list list-disc list-inside ml-6 my-3'>
                                    <li>Providing all materials, labor equipment.</li>
                                    <li>
                                        Eget Egestas. Aenean varius ex ut ex laoreet Aenean.
                                    </li>
                                    <li>
                                        Aenean varius ex ut ex laoreet Aenean fermentum.
                                    </li>
                                    <li>
                                        Aenean varius ex ut ex laoreet Aenean fermentum.
                                    </li>
                                </ul>
                                <h1 className='text-xl font-semibold font-pop my-3 text-black'>Proconstruction Services</h1>
                                <p className='my-2'>Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean varius ex ut ex laoreet Aenean the fermentum.</p>
                                <h1 className='text-xl font-semibold font-pop my-3 text-black'>Reliable & Experienced</h1>
                                <p className='my-2'>Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean varius ex ut ex laoreet Aenean the fermentum.</p>
                                <ul className='list list-disc list-inside ml-6 my-3 mb-10'>
                                    <li>Providing all materials, labor equipment.</li>
                                    <li>
                                        Eget Egestas. Aenean varius ex ut ex laoreet Aenean.
                                    </li>
                                    <li>
                                        Aenean varius ex ut ex laoreet Aenean fermentum.
                                    </li>
                                    <li>
                                        Aenean varius ex ut ex laoreet Aenean fermentum.
                                    </li>
                                </ul>
                            </div>
                            <hr className='py-5' />
                            <div className='float-left'>
                                <PostsNavButton link={"/portfolio/mobile-weather-app/"}><HiOutlineChevronLeft /> Previous Post</PostsNavButton>
                            </div>
                            <div className='float-right'>
                                <PostsNavButton link={"/portfolio/application-mobile/"}>Next Post <HiOutlineChevronRight /></PostsNavButton>
                            </div>
                        </div>
                    </div>
                    <div className='my-10 lg:my-0'>
                        <AnnouncementCalander></AnnouncementCalander>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessCard;