import React from 'react'
import Banner from '../../components/banner/Banner'
import Announcement from '../../components/Announcement/Announcement';
import DonationCards from '../../components/DonationCards/DonationCards';
import ActivitySlider from "../../components/ActivitySlider/ActivitySlider";
import PartnerSlider from "../../components/PartnerSlider/PartnerSlider";
import BlogSlider from "../../components/BlogSlider/BlogSlider";
import '../../pages/home/Home.css';
import DiscoverBanner from '../../components/discoverBanner/DiscoverBanner';
import HelpBanner from '../../components/helpBanner/HelpBanner';
import ReachPresense from '../../components/reachPresense/ReachPresense';


const Home = () => {
  const statHead = "Lorem Ipsum Is Simply Dummy Text"
  const statTitle = "Reach And Presence"
  const statDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
  return (
    <>
      <Banner />
      <DonationCards></DonationCards>
      <Announcement></Announcement>
      <ReachPresense statHead={statHead} statTitle={statTitle} statDescription={statDescription} />
      <HelpBanner />
      <ActivitySlider />
      <DiscoverBanner />
      <PartnerSlider />
      <BlogSlider />
    </>
  )
}

export default Home