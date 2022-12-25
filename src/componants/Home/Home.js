import React from 'react';
import Announcement from '../Announcement/Announcement';
import DonationCards from '../DonationCards/DonationCards';
import './Home.css';

const Home = () => {
    return (
        <div className='home-content'>
            <DonationCards></DonationCards>
            <Announcement></Announcement>
        </div>
    );
};

export default Home;