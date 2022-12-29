import React from 'react';

;

const PrimaryButton = ({ children}) => {

 return (
        
        <button className = "uppercase text-white font-bold  bg-black text-xs py-2 px-6 my-4 rounded-lg bg-opacity-20  hover:bg-[#616569] duration-500 flex items-center">{children}</button>
    );
};

export default PrimaryButton;