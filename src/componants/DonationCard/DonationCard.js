import React from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import './DonationCard.css';
import {FaLongArrowAltRight} from "react-icons/fa";
import { FaBeer,  } from "@react-icons/all-files/fa/FaBeer";

const DonationCard = ({donation}) => {
    const {name, btn, img, description, cardColor} = donation;

    return (
        <div className='single-card'>
            <img className="rounded-t-lg" src={img} alt="" />
          <div className={`text-center p-4 text-white ${cardColor} rounded-b-lg`}>
          <h2 class="my-3 text-2xl font-bold">{name}</h2>
            <h3>{description}</h3>
          <PrimaryButton>{btn} <FaLongArrowAltRight className='text-xl ml-2'/></PrimaryButton>
          </div>
        </div>
    );
};

export default DonationCard;