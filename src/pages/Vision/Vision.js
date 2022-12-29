import React from 'react';
import visionImg from '../../Assests/Imgs/vission.jpg';

const Vision = () => {
    return (
        <div className='mx-24 my-48'>
             <div className='py-12 pr-2 bg-[#F4F5F9]'>
          <div className='grid sm-grid-cols-1 gap-8 lg:grid-cols-2'>
          <div>
              <img src={visionImg} alt="mission-img" />
            </div>
            <div>
                <h3 className='text-xl text-bold'>Our Vision</h3>
                <p className='text-lg leading-6'>To make a beautiful country without poverty, which will be an example of perfection and where every person (Man, Woman, Transgender) will have basic education and will have involvement in the economy.</p>
            </div>
         
        </div>
      </div>
        </div>
    );
};

export default Vision;