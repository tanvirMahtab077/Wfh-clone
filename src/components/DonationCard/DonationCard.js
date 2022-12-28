import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import './DonationCard.css';
import {FaLongArrowAltRight} from "react-icons/fa";
import { FaBeer,  } from "@react-icons/all-files/fa/FaBeer";

const DonationCard = ({donation}) => {
    const {name, btn, img, description, cardColor} = donation;

    return (
        <div className='flex flex-col item-center w-[300px] h-[400px] text-center'>
          <img className="rounded-t-lg w-full h-[200px]" src={img} alt="" />
          <div className={`flex flex-col justify-center w-full h-[200px] text-center p-4 text-white ${cardColor} rounded-b-lg`}>
            <h2 class="my-3 text-sm font-bold">{name}</h2>
            <p className='text-sm'>{description}</p>
            <div className='mx-auto'>
            <PrimaryButton>{btn}<FaLongArrowAltRight/></PrimaryButton>
            </div>
          </div>
        </div>
    );
};

export default DonationCard;