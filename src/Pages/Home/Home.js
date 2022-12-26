import React from 'react';
import ActivitySlider from "../../Components/ActivitySlider/ActivitySlider";
import PartnerSlider from "../../Components/PartnerSlider/PartnerSlider";
import BlogSlider from "../../Components/BlogSlider/BlogSlider";


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