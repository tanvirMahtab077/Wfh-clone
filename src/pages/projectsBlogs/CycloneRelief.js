import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ProjectBlogLayout from '../../components/projectBlogLayout/ProjectBlogLayout';
import imgMain from '../../Assests/Imgs/portfolio-2.jpg'
import cyclone from "../../Assests/Imgs/Cyclone-Roanu.jpg"
import PostsNavButton from '../../components/postsNavButton/PostsNavButton';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const CycloneRelief = () => {
    const header = "Distribute Relief To Cyclone Roanu Affected Coastal People"
    const heading = "Distribute relief to cyclone Roanu affected coastal people"
    const description1 = "When the founding members were planning to start an organization in order to help people, the cyclone Roanu hit the littoral area and people lost their shelter and remained hungry for more than three days."
    return (
        <div>
            <HeroBanner header={header}></HeroBanner>
            <ProjectBlogLayout
                img={imgMain}
                heading={heading}
                description1={description1}
                sector={"Emergency Response"}
                beneficiary={"200 People"}
                date={"July 2, 2016"}
                location={"Cox's Bazaar, Bangladesh"}
            >
                <div className='mt-10 lg:mt-28'>
                    <div className='lg:ml-56 mb-5'>
                        <img className='w-auto mb-3' src={cyclone} alt="" />
                        <p>Distribute relief to cyclone Roanu affected people</p>
                    </div>
                    <p className='mb-10'>WFH Foundation distributed relief in more than 450 families in Cox’s Bazar and Chittagong area affected by the cyclone Roanu (Biscuits, Puffed Rice, dry Food, Water purification tablets, Medicine, Oral Saline).</p>
                    <div>
                        <hr className='py-5' />
                        <div className='float-left'>
                            <PostsNavButton link={"/portfolio/they-read-they-build/"}><HiOutlineChevronLeft /> Previous Post</PostsNavButton>
                        </div>
                        <div className='float-right'>
                            <PostsNavButton link={"/portfolio/winter-clothes-distribution/"}>Next Post <HiOutlineChevronRight /></PostsNavButton>
                        </div>
                    </div>
                </div>
            </ProjectBlogLayout>
        </div>
    );
};

export default CycloneRelief;