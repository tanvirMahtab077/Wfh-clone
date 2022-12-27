import React from 'react';
import portfolio1 from '../../Assests/Imgs/portfolio-1.jpg'
import portfolio2 from '../../Assests/Imgs/portfolio-2.jpg'
import portfolio3 from '../../Assests/Imgs/portfolio-3.jpg'
import portfolio4 from '../../Assests/Imgs/portfolio-4.jpg'
import portfolio5 from '../../Assests/Imgs/portfolio-5.jpg'
import portfolio6 from '../../Assests/Imgs/portfolio-6.jpg'
import portfolio7 from '../../Assests/Imgs/portfolio-7.jpg'
import portfolio8 from '../../Assests/Imgs/portfolio-8.jpg'
import portfolio9 from '../../Assests/Imgs/portfolio-9.jpg'
import portfolio10 from '../../Assests/Imgs/portfolio-10.jpg'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import HeroBanner from '../../components/HeroBanner/HeroBanner';

const AllProjects = () => {
    const portfolio = {
        portfolio1: portfolio1,
        portfolio2: portfolio2,
        portfolio3: portfolio3,
        portfolio4: portfolio4,
        portfolio5: portfolio5,
        portfolio6: portfolio6,
        portfolio7: portfolio7,
        portfolio8: portfolio8,
        portfolio9: portfolio9,
        portfolio10: portfolio10
    }
    const badge = {
        emergency: 'Emeregency Response',
        education: 'Education',
        health: 'Health',
        awareness: 'Awareness',
        projectTribeni: 'Prject Tribeni',
        portfolio: 'Portfolio'
    }
    const title = {
        title1: 'Winter clothes distribution',
        title2: 'Distribute relief to cyclone Roanu affected coastal people',
        title3: 'পড়বে ওরা,গড়বে দেশ (They Read, They Build)',
        title4: 'Health Camp, Medicine &amp; Educational Equipment For Flood Victim children',
        title5: 'Application mobile',
        title6: 'Business card',
        title7: 'Mobile Weather App',
        title8: 'LowPoly Social',
        title9: 'Special bikes',
        title10: 'Moderats eloquenti'
    }
    const description = {
        description1: 'Winters in the northern part of Bangladesh are extremely cold and affects highly to the disabled, children and the elderly,',
        description2: 'When the founding members were planning to start an organization in order to help people, the cyclone Roanu hit the',
        description3: 'Students from poor families can’t buy educational materials. Though they have talent, because of poverty, students from rural areas have',
        description4: 'Works For Humanity organized an event named “প্রাণের জন্য ত্রাণ – Relief For Flood Victims” on 15th September at Jamalpur',
        description5: 'Proin sagittis feugiat elit finibus pretium. Donec et tortor non purus vulputate tincidunt. Cras congue posuer eros eget egestas. Aenean'
    }
    const link = {
        link1: '/portfolio/winter-clothes-distribution/',
        link2: '/portfolio/distribute-relief-to-cyclone-roanu-affected-coastal-people/',
        link3: '/portfolio/they-read-they-build/',
        link4: '/portfolio/health-camp-medicine-educational-equipment-for-flood-victim-children/',
        link5: '/portfolio/application-mobile/',
        link6: '/portfolio/business-card/',
        link7: '/portfolio/mobile-weather-app/',
        link8: '/portfolio/lowpoly-social/',
        link9: '/portfolio/special-bikes/',
        link10: '/portfolio/moderats-eloquenti/'
    }
    const header = 'All Development Projects'
    return (
        <div>
            <HeroBanner
                header={header}
            />
            <div className='mx-8 lg:mx-40 my-10 lg:my-20'>
                <div className='lg:flex items-center lg:justify-between mb-20'>
                    <div className='flex items-center mb-5 md:mb-0'>
                        <span className='border border-t-0 border-r-0 border-b-0 border-[#0097FA] py-5  bg-[#0097FA] mr-5'></span>
                        <div>
                            <h1 className='font-bold text-3xl font-sans'>All Projects</h1>
                        </div>
                    </div>
                    <p className='text-sm text-zinc-400 font-sans'>We invite you on a journey through selected case studies of our work <br /> in support of the SDG agenda.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-x-20 '>
                    <ProjectCard
                        portfolio={portfolio.portfolio10}
                        badge={badge.projectTribeni}
                        title={title.title10}
                        description={description.description5}
                        link={link.link10}
                    />
                    <ProjectCard
                        portfolio={portfolio.portfolio9}
                        badge={badge.projectTribeni}
                        title={title.title9}
                        description={description.description5}
                        link={link.link9}
                    />
                    <ProjectCard
                        portfolio={portfolio.portfolio8}
                        badge={badge.awareness}
                        title={title.title8}
                        description={description.description5}
                        link={link.link8}
                    />
                    <ProjectCard
                        portfolio={portfolio.portfolio7}
                        badge={badge.health}
                        title={title.title7}
                        description={description.description5}
                        link={link.link7}
                    />
                    <ProjectCard
                        portfolio={portfolio.portfolio6}
                        badge={badge.education}
                        title={title.title6}
                        description={description.description5}
                        link={link.link6}
                    />
                    <ProjectCard
                        portfolio={portfolio.portfolio5}
                        badge={badge.portfolio}
                        title={title.title5}
                        description={description.description5}
                        link={link.link5}
                    />
                    <ProjectCard
                        portfolio={portfolio.portfolio4}
                        badge={badge.health}
                        title={title.title4}
                        description={description.description4}
                        link={link.link4}
                    />
                    <ProjectCard
                        portfolio={portfolio.portfolio3}
                        badge={badge.education}
                        title={title.title3}
                        description={description.description3}
                        link={link.link3}
                    />
                    <ProjectCard
                        portfolio={portfolio.portfolio2}
                        badge={badge.emergency}
                        title={title.title2}
                        description={description.description2}
                        link={link.link2}
                    />
                    <ProjectCard
                        portfolio={portfolio.portfolio1}
                        badge={badge.emergency}
                        title={title.title1}
                        description={description.description1}
                        link={link.link1}
                    />
                </div>
            </div>
        </div>
    );
};

export default AllProjects;