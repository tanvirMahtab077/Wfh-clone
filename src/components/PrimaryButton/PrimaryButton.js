import React from 'react';

const PrimaryButton = ({ children, className }) => {
    return (
      <button
        className={`uppercase text-white font-bold bg-[#0097FA] text-xs py-2 px-6 rounded-lg hover:bg-[#003457] duration-500 flex items-center ${className}`}
      >
        {children}
      </button>
    );
};

export default PrimaryButton;