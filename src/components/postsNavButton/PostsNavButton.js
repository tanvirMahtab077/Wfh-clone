import React from 'react';
import { Link } from 'react-router-dom';

const PostsNavButton = ({ link, children }) => {
    return (
        <div>
            <Link to={link} className='border-2 hover:text-white hover:bg-[#0097FA] hover:cursor-pointer px-5 py-3 font-semibold rounded-md flex items-center duration-500'>{children}</Link>
        </div>
    );
};

export default PostsNavButton;