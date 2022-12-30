import React from 'react';
import volunteer from '../../Assests/Imgs/volunteer.png'
import partner from '../../Assests/Imgs/partner.png'
import group from '../../Assests/Imgs/group.png'
import donation from '../../Assests/Imgs/donation.png'
import './helpBanner.css'

const HelpBanner = () => {
    return (
        <div>
            <div className='my-20'>
                <div
                    className="font-pop pb-16 w-auto lg:h-[160%]"
                    style={{
                        background: "url('assets/images/banner/help-banner.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className='container mb-20'>
                        <h1 className='text-4xl text-white font-pop font-semibold leading-[52px] text-center py-16'>How To Help?</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-10 lg:mx-40 mx-20'>
                            <div
                                className='card bg-transparent border-l-[3px] border-r-[3px] border-b-[3px] pb-8 px-5 relative max-w-[300px] border-white text-center font-pop before:content:"" before:absolute before:top-0 before:w-[70px] before:h-[3px] before:bg-white before:z-10 after:content:"" after:absolute after:top-0 after:w-[70px] after:h-[3px] after:bg-white after:z-10 before:left-0 after:right-0'>
                                <div>
                                    <img className='hover:cursor-pointer mx-auto z-20 img-rotate -mt-8 duration-300 ease-linear' src={volunteer} alt="" />
                                </div>
                                <div className='pt-4'>
                                    <h1 className='text-white font-semibold my-4 text-lg font-pop'>Be A Volunteer</h1>
                                    <p className='text-sm font-sans text-white text-opacity-80'>The best way to find yourself is to lose yourself in service of others.</p>
                                </div>
                            </div>
                            <div
                                className='card bg-transparent border-l-[3px] border-r-[3px] border-b-[3px] pb-8 px-5 relative max-w-[300px] border-white text-center font-pop before:content:"" before:absolute before:top-0 before:w-[70px] before:h-[3px] before:bg-white before:z-10 after:content:"" after:absolute after:top-0 after:w-[70px] after:h-[3px] after:bg-white after:z-10 before:left-0 after:right-0'>
                                <div>
                                    <img className='hover:cursor-pointer mx-auto z-20 img-rotate -mt-8 duration-300 ease-linear' src={donation} alt="" />
                                </div>
                                <div className='pt-4'>
                                    <h1 className='text-white font-semibold my-4 text-lg font-pop'>Make A Donation</h1>
                                    <p className='text-sm font-sans text-white text-opacity-80'>We make a living by what we get, but we make a life by what we give.</p>
                                </div>
                            </div>
                            <div
                                className='card bg-transparent border-l-[3px] border-r-[3px] border-b-[3px] pb-8 px-5 relative max-w-[300px] border-white text-center font-pop before:content:"" before:absolute before:top-0 before:w-[70px] before:h-[3px] before:bg-white before:z-10 after:content:"" after:absolute after:top-0 after:w-[70px] after:h-[3px] after:bg-white after:z-10 before:left-0 after:right-0'>
                                <div>
                                    <img className='hover:cursor-pointer mx-auto z-20 img-rotate -mt-8 duration-300 ease-linear' src={group} alt="" />
                                </div>
                                <div className='pt-4'>
                                    <h1 className='text-white font-semibold my-4 text-lg font-pop'>Sharing</h1>
                                    <p className='text-sm font-sans text-white text-opacity-80'>Share our story with your friends and family, together we can make a batter world</p>
                                </div>
                            </div>
                            <div
                                className='card bg-transparent border-l-[3px] border-r-[3px] border-b-[3px] pb-8 px-5 relative max-w-[300px] border-white text-center font-pop before:content:"" before:absolute before:top-0 before:w-[70px] before:h-[3px] before:bg-white before:z-10 after:content:"" after:absolute after:top-0 after:w-[70px] after:h-[3px] after:bg-white after:z-10 before:left-0 after:right-0'>
                                <div>
                                    <img className='hover:cursor-pointer mx-auto z-20 img-rotate -mt-8 duration-300 ease-linear' src={partner} alt="" />
                                </div>
                                <div className='pt-4'>
                                    <h1 className='text-white font-semibold my-4 text-lg font-pop'>Be A Partner</h1>
                                    <p className='text-sm font-sans text-white text-opacity-80'>When we alone we can do so little; But together we can do so much.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpBanner;