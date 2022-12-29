import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import portfolio1 from '../../Assests/Imgs/portfolio-4.jpg'
import portfolio2 from '../../Assests/Imgs/portfolio-7.jpg'
import SideStat from '../../components/SideStat/SideStat';

const HealthProgram = () => {
    const header = 'Health Program'
    const portfolio = {
        portfolio1: portfolio1,
        portfolio2: portfolio2
    }
    const badge = 'Health'
    const title = {
        title1: 'Mobile Weather App',
        title2: 'Health Camp, Medicine &amp; Educational Equipment For Flood Victim children'
    }
    const description = {
        description1: 'Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean',
        description2: 'Works For Humanity organized an event named “প্রাণের জন্য ত্রাণ – Relief For Flood Victims” on 15th September at Jamalpur'
    }
    const link = {
        link1: '/portfolio/mobile-weather-app/',
        link2: '/portfolio/health-camp-medicine-educational-equipment-for-flood-victim-children/'
    }
    const statTitle = 'Health Program'
    const statDescription = 'Health Program'
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
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-x-20'>
                    <ProjectCard
                        portfolio={portfolio.portfolio2}
                        badge={badge}
                        title={title.title1}
                        description={description.description1}
                        link={link.link1}
                    />
                    <ProjectCard
                        portfolio={portfolio.portfolio1}
                        badge={badge}
                        title={title.title2}
                        description={description.description2}
                        link={link.link2}
                    />
                </div>
            </div>
        </div>
    );
};

export default HealthProgram;