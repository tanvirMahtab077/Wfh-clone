import React from 'react';
import AboutSlider from '../../components/AboutSlider/AboutSlider';
import Frequently from '../../components/Frequently/Frequently';
import Mission from '../../components/Mission/Mission';
import ReachPresence from '../../components/ReachPresence/ReachPresence';
import Vision from '../Vision/Vision';




const AboutUs = () => {
    return (
        <div className="mx-24">
           
         <Mission/>
     <Vision></Vision>
         <ReachPresence/>
         <AboutSlider/>
         <Frequently/>
        </div>
    );
};

export default AboutUs;