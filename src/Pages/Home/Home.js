import React from 'react';
import ActivitySlider from "../../components/ActivitySlider/ActivitySlider";
import PartnerSlider from "../../components/PartnerSlider/PartnerSlider";
import BlogSlider from "../../components/BlogSlider/BlogSlider";


const Home = () => {
    return (
        <>
            <ActivitySlider />
            <PartnerSlider />
            <BlogSlider />
        </>
    );
};

export default Home;