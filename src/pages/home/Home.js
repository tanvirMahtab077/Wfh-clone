import React from 'react'
import Banner from '../../components/banner/Banner'
import Announcement from '../../components/Announcement/Announcement';
import DonationCards from '../../components/DonationCards/DonationCards';
import ActivitySlider from "../../components/ActivitySlider/ActivitySlider";
import PartnerSlider from "../../components/PartnerSlider/PartnerSlider";
import BlogSlider from "../../components/BlogSlider/BlogSlider";
import '../../pages/home/Home.css';
import DiscoverBanner from '../../components/discoverBanner/DiscoverBanner';


const Home = () => {
  return (
    <>
      <Banner />
      <DonationCards></DonationCards>
      <Announcement></Announcement>
      <ActivitySlider />
      <DiscoverBanner />
      <PartnerSlider />
      <BlogSlider />
    </>
  )
}

export default Home