import React from 'react';
import ActivitySlider from "../../components/ActivitySlider/ActivitySlider";
import PartnerSlider from "../../components/PartnerSlider/PartnerSlider";
import BlogSlider from "../../components/BlogSlider/BlogSlider";
import Banner from '../../components/banner/Banner';


const Home = () => {
  return (
    <>
      <Banner />
      <ActivitySlider />
      <PartnerSlider />
      <BlogSlider />
    </>
  );
};

export default Home;