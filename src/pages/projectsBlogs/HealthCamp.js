import React from 'react';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import ProjectBlogLayout from '../../components/projectBlogLayout/ProjectBlogLayout';
import imgMain from '../../Assests/Imgs/portfolio-4.jpg'
import img1 from '../../Assests/Imgs/health-camp1.jpg'
import img2 from '../../Assests/Imgs/health-camp2.jpg'
import PostsNavButton from '../../components/postsNavButton/PostsNavButton';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const HealthCamp = () => {
    const header = "Health Camp, Medicine & Educational Equipment For Flood Victim children"
    const description1 = "Works For Humanity organized an event named “প্রাণের জন্য ত্রাণ – Relief For Flood Victims” on 15th September at Jamalpur District. Dept of Health & Blood arranged health camp distributed medicine to almost 500 children and aged people and provided them free medical treatment through health camp which was too much effective for those poor people"
    return (
        <div>
            <HeroBanner header={header}></HeroBanner>
            <ProjectBlogLayout
                img={imgMain}
                heading={header}
                description1={description1}
                sector={"Health"}
                beneficiary={"500 Children"}
                date={"September 19, 2017"}
                location={"Jamalpur, Bangladesh"}
            >
                <div className='mt-10'>
                    <div className='mb-3'>
                        <img src={img1} alt="" className='lg:w-2/3 mx-auto' />
                        <p className='text-center mt-3 mb-4 lg:mb-8'>Health Camp – Dr. Raihan Ferpous</p>
                        <p>On the same day, the Dept of Education provided a notebook, pen, balloon to 226 students of primary school. Those kids were happier by getting the balloon rather than a notebook and pen. Their heavenly smile was the biggest gift for our team.</p>
                    </div>
                    <div className='mb-8'>
                        <img src={img2} alt="" className='lg:w-2/3 mx-auto' />
                        <p className='text-center mt-3 mb-4 lg:mb-8'>Educational Equipment Distribution</p>
                        <p>Food items like Biscuits, Puffed Rice, Molasses, Rice Flacks, etc were given to almost 800 people. Local Police, Chairman, and Head Master helped us a lot to complete the program peacefully. The people of Jamalpur are too gentle and kind to us. They co-operate with us in every step and welcomed us with their warm love.</p>
                    </div>
                    <hr className='py-5' />
                    <div className='float-left'>
                        <PostsNavButton link={"/portfolio/application-mobile/"}><HiOutlineChevronLeft /> Previous Post</PostsNavButton>
                    </div>
                    <div className='float-right'>
                        <PostsNavButton link={"/portfolio/they-read-they-build/"}>Next Post <HiOutlineChevronRight /></PostsNavButton>
                    </div>
                </div>
            </ProjectBlogLayout>
        </div>
    );
};

export default HealthCamp;