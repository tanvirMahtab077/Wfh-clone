import React from 'react';
import DonationCard from '../DonationCard/DonationCard';
import './DonationCards.css';

const DonationCards = () => {
   const donations=[
        {
            id:1, img: ' https://i.ibb.co/d0ZYrZq/img1.jpg', name:'Who We Are', description:'WFH Foundation, a non-profit organization in Bangladesh which is working to make Bangladesh better.', btn:'REAd MORE'
        },
        {
            id:2, img: 'https://i.ibb.co/dJGVT9B/img2.jpg', name:'What We Do', description:'We work for the backward sections of the society in Bangladesh through fundamental development', btn:'OUR WORKS'
        },
        {
            id:3, img: 'https://i.ibb.co/GQ8MSBd/img3.png', name:'Make A Donation', description:'Break the cycle of poverty by donating to education, health, awareness, empowerment and community building.', btn:'DONATE NOW'
        },
        {
            id:4, img: 'https://i.ibb.co/X2BvFnr/img4.jpg', name:'Be A Volunteer', description:'Volunteering can be personally rewarding and helps you ‘give something back’ to your community.', btn:'BE A VOLUNTEER'
        },
    ]
    return (
        <div className='cards'>
{
    donations.map(donation => <DonationCard 
    key={donation.id}
    donation={donation}></DonationCard>)
}

        </div>
    );
};

export default DonationCards;