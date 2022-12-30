import React from 'react';
import Mission from '../Mission/Mission';
import ReachPresence from '../ReachPresence/ReachPresence';
import Vision from '../Vision/Vision';

const AboutUs = () => {
    return (
        <div className="mx-24">
            <Mission></Mission>
           <Vision></Vision>
           <ReachPresence></ReachPresence>
        </div>
    );
};

export default AboutUs;