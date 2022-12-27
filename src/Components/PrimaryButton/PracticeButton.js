import React from 'react';
import PrimaryButton from './PrimaryButton';

const PracticeButton = () => {
    //here the classname variable is passed as a prop to primarybutton you can use classenames you want. (I have used tailwindcss)
    const classname = "uppercase text-white font-bold bg-[#0097FA] text-xs py-2 px-6 rounded-lg hover:bg-[#003457] duration-500 flex items-center"
    return (
        <div>
            <PrimaryButton classname={classname}>Be a Partner</PrimaryButton>
        </div>
    );
};

export default PracticeButton;