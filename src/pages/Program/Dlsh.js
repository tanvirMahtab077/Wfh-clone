import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import SideStat from '../../components/SideStat/SideStat';

const Dlsh = () => {
    const header = 'Donate Love Spread Happiness'
    const statTitle = 'Donate Love Spread Happiness'
    const statDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
    return (
        <div>
            <HeroBanner header={header} />
            <div className='mx-8 lg:mx-40 my-10 lg:my-20'>
                <SideStat
                    statTitle={statTitle}
                    statDescription={statDescription}
                />
                <div className='lg:flex items-center lg:justify-between mb-20'>
                    <div className='flex items-center mb-5 md:mb-0'>
                        <span className='border border-t-0 border-r-0 border-b-0 border-[#0097FA] py-3 bg-[#0097FA] mr-5'></span>
                        <div>
                            <h1 className='text-[#0097FA] text-lg font-semibold'>Some Outstanding Activities</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dlsh;