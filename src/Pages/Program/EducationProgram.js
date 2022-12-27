import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import portfolio1 from '../../Assests/Imgs/portfolio-3.jpg'
import portfolio2 from '../../Assests/Imgs/portfolio-6.jpg'
import SideStat from '../../components/SideStat/SideStat';

const EducationProgram = () => {
    const header = 'Education Program'
    const portfolio = {
        portfolio1: portfolio1,
        portfolio2: portfolio2
    }
    const badge = 'Education'
    const title = {
        title1: 'Business card',
        title2: 'পড়বে ওরা,গড়বে দেশ (They Read, They Build)'
    }
    const description = {
        description1: 'Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean',
        description2: 'Students from poor families can’t buy educational materials. Though they have talent, because of poverty, students from rural areas have'
    }
    const link = {
        link1: '/portfolio/business-card/',
        link2: '/portfolio/they-read-they-build/'
    }
    const statTitle = 'Education Program'
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

export default EducationProgram;