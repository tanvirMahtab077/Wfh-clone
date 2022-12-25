import React from 'react';
import DonationCards from '../DonationCards/DonationCards';
import './Home.css';

const Home = () => {
    return (
        <div className='home-content'>
            <DonationCards></DonationCards>
        </div>
    );
};

export default Home;