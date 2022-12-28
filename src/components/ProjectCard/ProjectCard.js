import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ portfolio, badge, title, description, link }) => {
    return (
        <div className='text-left w-[430px] lg:w-[300px] mb-10'>
            <div className='mb-2 w-full h-[300px] lg:h-[220px] relative'>
                <span className="px-2 bg-[#0097FA] text-white left-0 font-semibold absolute font-sans">{badge}</span>
                <img className='w-full h-full' src={portfolio} alt="" />
            </div>
            <div>
                <Link className='font-semibold mb-2 font-sans' to={link}>{title} <br />-2022</Link>
                <p className='text-sm font-normal text-zinc-400 font-sans'>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;