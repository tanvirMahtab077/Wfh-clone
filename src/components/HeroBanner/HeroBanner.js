import React from 'react';
import './HeroBanner.css'

const HeroBanner = ({ header }) => {
    return (
        <div className='banner h-[200px] lg:h-[320px]'>
            <div className='text-center pt-12 lg:pt-24'>
                <h1 className='text-lg lg:text-3xl font-bold z-10 text-white'>{header}</h1>
                <p className='text-xs lg:text-base mt-2 text-white opacity-80'>Home / {header}</p>
            </div>
        </div>
    );
};

export default HeroBanner;