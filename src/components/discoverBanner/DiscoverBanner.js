import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs'
import banner from '../../Assests/Imgs/discover-banner.jpg'

const DiscoverBanner = () => {
    return (
        <div className='my-20'>
            <div className='relative'>
                <img className='h-screen lg:h-auto' src={banner} alt="" />
                <div className='absolute top-1/4 lg:left-1/4 lg:right-1/4 mx-4 lg:mx-0 text-center'>
                    <h1 className='text-4xl text-white font-pop font-semibold leading-[52px]'>Discover what’s possible when a community creates together.</h1>
                    <div className='mb-10'>
                        <span className='border-4 border-t-0 border-r-0 border-l-0 px-10 border-white'></span>
                    </div>
                    <q className='text-white font-pop'>Go out into the world today and love the people you meet. Let your presence light new light in the hearts of people.</q>
                    <p className='text-white font-bold italic'>–Mother Teresa</p>
                    <div className='mx-auto w-16 my-6'>
                        <BsFillPlayCircleFill className='text-white text-6xl rounded-full border-[8.9px] border-white border-opacity-40 cursor-pointer hover:scale-75 duration-700' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverBanner;