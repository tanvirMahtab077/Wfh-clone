import React from 'react';
import AnnouncementCalander from '../announcementCalendar/AnnouncementCalander';

const ProjectBlogLayout = ({ img, heading, description1, description2, description3, description4, children, sector, beneficiary, date, location }) => {
    return (
        <div className='flex flex-col lg:flex-row mx-3 lg:mx-44 my-10'>
            <div className='lg:mr-10'>
                <img className='w-auto' src={img} alt="" />
                <h1 className='text-xl font-semibold font-pop my-3'>{heading}</h1>
                <div className='font-sans text-[#8c8c8c] w-full text-[15px]'>
                    <div className='p-7 bg-[#0097FA] float-right text-white ml-3 mb-3'>
                        <ul>
                            <li>
                                <span className='text-right font-semibold inline-block min-w-[110px] px-3'>Sector: </span>
                                <span>{sector}</span>
                            </li>
                            <li>
                                <span className='text-right font-semibold inline-block min-w-[110px] px-3 py-1'>Beneficiary:</span>
                                <span>{beneficiary}</span>
                            </li>
                            <li>
                                <span className='text-right font-semibold inline-block min-w-[110px] px-3 pb-1'>Date: </span>
                                <span>{date}</span>
                            </li>
                            <li>
                                <span className='text-right font-semibold inline-block min-w-[110px] px-3'>Location: </span>
                                <span>{location}</span>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <p className='my-2'>{description1}</p>
                        <p className='my-2'>{description2}</p>
                        <p className='my-2'>{description3}</p>
                        <p className='my-2'>{description4}</p>
                    </div>
                    {children}
                </div>
            </div>
            <div className='my-10 lg:my-0'>
                <AnnouncementCalander></AnnouncementCalander>
            </div>
        </div>
    );
};

export default ProjectBlogLayout;