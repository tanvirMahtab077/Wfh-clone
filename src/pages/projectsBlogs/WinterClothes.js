import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ProjectBlogLayout from '../../components/projectBlogLayout/ProjectBlogLayout';
import imgMain from '../../Assests/Imgs/portfolio-1.jpg'
import winter1 from '../../Assests/Imgs/winter1.jpg'
import winter2 from '../../Assests/Imgs/winter2.jpg'
import winter3 from '../../Assests/Imgs/winter3.jpg'
import winter4 from '../../Assests/Imgs/winter4.jpg'
import winter5 from '../../Assests/Imgs/winter5.jpg'
import PostsNavButton from '../../components/postsNavButton/PostsNavButton';
import { HiOutlineChevronLeft } from 'react-icons/hi';

const WinterClothes = () => {
    const header = "Winter Clothes Distribution"
    const heading = "Winter Clothes Distribution - 2022"
    const description1 = "Winters in the northern part of Bangladesh are extremely cold and affects highly to the disabled, children and the elderly, who have no Winter clothes or shelter."
    const description2 = "Poor people particularly senior citizens are neglected persons and have to do labor work for life sustenance.Due to this most of them are engulfed by cold.It has a negative impact on their health and fall ill and in certain circumstances, it becomes life - threatening."
    const description3 = "Considering the fact our volunteers visited Chilmari Upozela of Kurigram districts, Bangladesh and during field visit identified most vulnerable persons particularly senior citizens, who are greatly affected by severe coldness and health are damaged.The beneficiaries are identified by participatory approach and finally selected most vulnerable groups."
    return (
        <div>
            <HeroBanner header={header}></HeroBanner>
            <ProjectBlogLayout
                img={imgMain}
                heading={heading}
                description1={description1}
                description2={description2}
                description3={description3}
                sector={"Emergency Response"}
                beneficiary={"400 People"}
                date={"July 2, 2016"}
                location={"Kurigram, Bangladesh"}
            >
                <div>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 my-3'>
                        <img className='w-auto h-full object-cover' src={winter1} alt="" />
                        <img className='w-auto h-full object-cover' src={winter2} alt="" />
                        <img className='w-auto h-full object-cover' src={winter3} alt="" />
                        <img className='w-auto h-full object-cover lg:hidden block' src={winter4} alt="" />
                    </div>
                    <div className='grid lg:grid-cols-2 gap-3 mb-5'>
                        <img className='w-auto h-full object-cover hidden lg:block' src={winter4} alt="" />
                        <img className='w-auto h-full object-cover' src={winter5} alt="" />
                    </div>
                    <p>In this winter season WFH Foundation distributed 400 Blanket and winter clothes to most needy widow, Disable, & senior citizens.</p>
                    <p className='mb-10'>The beneficiaries after receiving warm blanket and winter clothes extended great thanks to Donors and WFH Foundation for their kind support and saving the life in severe coldness.</p>
                    <hr className='py-5' />
                    <div className='float-left'>
                        <PostsNavButton link={"/portfolio/distribute-relief-to-cyclone-roanu-affected-coastal-people/"}><HiOutlineChevronLeft /> Previous Post</PostsNavButton>
                    </div>
                </div>
            </ProjectBlogLayout>
        </div>
    );
};

export default WinterClothes;