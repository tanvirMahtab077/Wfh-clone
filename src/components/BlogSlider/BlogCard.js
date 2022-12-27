import React, { useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BlogCard = ({ blogimg, date, title, description, link }) => {
    const [background, setBackground] = useState('')
    const [zoom, setZoom] = useState('')
    const [icon, setIcon] = useState('')
    const [hide, sethide] = useState(true)
    const handleFocus = () => {
        const zoomClass = 'w-full h-full scale-125 duration-1000'
        const backgroundClass = 'bg-black bg-opacity-50 w-[370px] h-[260px] z-10 duration-1000 absolute cursor-pointer'
        const iconClass = 'w-10 h-10 mx-auto mt-[110px] text-white font-bold'
        setBackground(backgroundClass)
        setZoom(zoomClass)
        setIcon(iconClass)
        sethide(false)

    }
    const handleHover = () => {
        const bakcgrounClasses = 'w-[370px] h-[260px] absolute'
        const iconClass = 'hidden'
        const zoomClass = 'w-full h-full scale-100 duration-1000'
        setZoom(zoomClass)
        setBackground(bakcgrounClasses)
        setIcon(iconClass)
        sethide(true)
    }
    return (
        <div className='border w-[370px] h-[580px] hover:shadow-lg mb-10'>
            <div onMouseEnter={handleFocus} onMouseLeave={handleHover}>
                <div className={background}><BsPlusCircle className={icon} hidden={hide} /></div>
                <div className='w-[370px] h-[260px] overflow-hidden'>
                    <img className={zoom} src={blogimg} alt="" />
                </div>
            </div>
            <div className='px-8 pt-3 pb-8'>
                <p className='text-[#888888] text-base mb-2'>Announcement,DLSH <span className='text-[#0097FA] text-3xl'>-</span> {date}</p>
                <Link className='font-bold text-lg' to={link}>{title}</Link>
                <p className='text-[#888888] text-sm mt-4'>{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;