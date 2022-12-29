import React from 'react';
import missionImg from '../../Assests/Imgs/mision-2.jpg';

const Mission = () => {
    return (
      <div className='mx-24 my-12'>
          <div className='grid sm-grid-cols-1 gap-8 lg:grid-cols-2'>
            <div>
                <h3 className='text-xl text-bold'>Our Mission</h3>
                <p className='text-lg leading-6'>WFH FOUNDATION is a Non-profit Organization which is working to remove illiteracy, to make every people aware about their rights, and increasing awareness about child marriage. It also aims to ensure every human being’s participation in blood donation and make people aware about disease.</p>
            </div>
            <div>
              <img src={missionImg} alt="mission-img" />
            </div>
        </div>
      </div>
    );
};

export default Mission;