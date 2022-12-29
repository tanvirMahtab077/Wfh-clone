import React from 'react';

const SecondaryButton = ({ children }) => {

    return (
        <button className="uppercase text-white font-bold  bg-black text-xs py-2 px-6 my-4 rounded-lg bg-opacity-20  hover:bg-opacity-50 duration-500 flex items-center">{children}</button>
    );
};

export default SecondaryButton;