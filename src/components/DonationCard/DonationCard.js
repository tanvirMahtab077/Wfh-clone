import React from 'react';
import SecondaryButton from '../secondaryButton/SecondaryButton';
import './DonationCard.css';
import { FaLongArrowAltRight } from "react-icons/fa";

const DonationCard = ({ donation }) => {
  const { name, btn, img, description, cardColor } = donation;

  return (
    <div className='flex flex-col item-center w-[280px] h-[460px] text-center'>
      <img className="rounded-t-lg w-full h-[200px]" src={img} alt="" />
      <div className={`flex flex-col justify-center w-full h-[400px] text-center px-6 text-white ${cardColor} rounded-b-lg`}>
        <h2 class="mb-3 text-xl font-bold">{name}</h2>
        <p className=''>{description}</p>
        <div className='mx-auto'>
          <SecondaryButton>{btn}<FaLongArrowAltRight className='ml-2' /></SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;