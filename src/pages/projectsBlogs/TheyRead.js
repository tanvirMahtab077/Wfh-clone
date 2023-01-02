import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ProjectBlogLayout from '../../components/projectBlogLayout/ProjectBlogLayout';
import imgMain from '../../Assests/Imgs/portfolio-3.jpg'
import img from "../../Assests/Imgs/education.jpg"
import PostsNavButton from '../../components/postsNavButton/PostsNavButton';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

const TheyRead = () => {
    const header = "পড়বে ওরা,গড়বে দেশ (They Read, They Build)"
    const description1 = "Students from poor families can’t buy educational materials. Though they have talent, because of poverty, students from rural areas have to stop their education at the primary level. Nearly 10,000 pens and 10,000 notebooks have been given to the students of govt. primary school who belong to a poor family in Jamalpur District."
    return (
        <div>
            <HeroBanner header={header}></HeroBanner>
            <ProjectBlogLayout
                img={imgMain}
                heading={header}
                description1={description1}
                sector={"Education"}
                beneficiary={"2500 Students"}
                date={"March 3, 2017"}
                location={"Jamalpur, Bangladesh"}
            >
                <div>
                    <img className='w-auto lg:w-1/2 my-10 lg:ml-56' src={img} alt="" />
                    <hr className='py-5' />
                    <div className='float-left'>
                        <PostsNavButton link={"/portfolio/health-camp-medicine-educational-equipment-for-flood-victim-children/"}><HiOutlineChevronLeft /> Previous Post</PostsNavButton>
                    </div>
                    <div className='float-right'>
                        <PostsNavButton link={"/portfolio/distribute-relief-to-cyclone-roanu-affected-coastal-people/"}>Next Post <HiOutlineChevronRight /></PostsNavButton>
                    </div>
                </div>
            </ProjectBlogLayout>
        </div>
    );
};

export default TheyRead;