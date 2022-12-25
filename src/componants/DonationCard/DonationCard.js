import React from 'react';
import './DonationCard.css';

const DonationCard = ({donation}) => {
    const {name, btn, img, description} = donation;
    return (
        <div className='single-card'>
            <img className="rounded-t-lg" src={img} alt="" />
          <div className='text-center p-4 text-white bg-indigo-600 rounded-b-lg'>
          <h2 class="my-3 text-2xl font-bold">{name}</h2>
            <h3>{description}</h3>
            <button class="bg-blue-500 hocus:bg-blue-600 my-4">{btn}</button>
          </div>
        </div>
    );
};

export default DonationCard;