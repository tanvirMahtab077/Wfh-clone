import React from "react";
import PartnerSlider from "../../components/AboutSlider/AboutSlider";
import Frequently from "../../components/Frequently/Frequently";
import Mission from "../../components/Mission/Mission";
import ReachPresense from "../../components/reachPresense/ReachPresense";
import Vision from "../../components/Vision/Vision";

const AboutUs = () => {
  const statTitle = "Our Reach & Presence";
  const statDescription =
    "WFH FOUNDATION started its journey at Dhaka and working for the improvement of Poverty, Education, Women Empowerment, Health issues and so on. Now its reached to 4,50,00,000 people at 13 district and 731 volunteer engaged themselves at WFH.";
  return (
    <div>
      <Mission />
      <Vision />
      <ReachPresense statDescription={statDescription} statTitle={statTitle} />
      <PartnerSlider />
      <Frequently />
    </div>
  );
};

export default AboutUs;
