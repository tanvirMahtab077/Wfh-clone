import React from 'react'
import Banner from '../../components/banner/Banner'
import ActivitySlider from "../../components/ActivitySlider/ActivitySlider";
import PartnerSlider from "../../components/PartnerSlider/PartnerSlider";
import BlogSlider from "../../components/BlogSlider/BlogSlider";

const Home = () => {
  return (
    <>
    <Banner/>
    <ActivitySlider />
    <PartnerSlider />
    <BlogSlider />
    </>
  )
}

export default Home