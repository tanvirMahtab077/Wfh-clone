import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs'

const DiscoverBanner = () => {
    return (
        <div className='my-20'>
            <div className='py-1 lg:py-16 h-screen lg:h-[160%] w-auto'
                style={{
                    background: "url('assets/images/banner/discover-banner.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className='text-center lg:w-1/2 lg:mx-auto mt-32 lg:mt-10 mx-3'>
                    <h1 className='text-4xl text-white font-pop font-semibold leading-[52px]'>Discover what’s possible when a community creates together.</h1>
                    <div className='mb-10'>
                        <span className='border-4 border-t-0 border-r-0 border-l-0 px-10 border-white'></span>
                    </div>
                    <q className='text-white font-pop'>Go out into the world today and love the people you meet. Let your presence light new light in the hearts of people.</q>
                    <p className='text-white font-bold italic'>–Mother Teresa</p>
                    <div className='mx-auto w-16 my-6'>
                        <BsFillPlayCircleFill className='text-white text-6xl rounded-full border-[8.9px] border-white border-opacity-40 cursor-pointer hover:scale-75 duration-500' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscoverBanner;