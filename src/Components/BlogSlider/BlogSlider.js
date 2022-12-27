import { React } from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '../Slider/Slider';
import blog1 from '../../Assests/Imgs/blog-1.jpg'
import blog2 from '../../Assests/Imgs/blog-2.jpg'
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import BlogCard from './BlogCard';

const BlogSlider = () => {
    const data = {
        navigation: false,
        pagination: false,
        autoplay: true,
        slidesPerView: 3
    }
    const blogimg = {
        img1: blog1,
        img2: blog2
    }
    return (
        <div className='mx-3 lg:mx-40 my-20'>
            <div className='mb-20'>
                <div className='flex items-center mb-5 md:mb-0'>
                    <span className='border border-t-0 border-r-0 border-b-0 border-[#0097FA] py-7  bg-[#0097FA] mr-5'></span>
                    <div>
                        <h1 className='text-[#0097FA] text-lg font-semibold'>Helping Hands News</h1>
                        <h1 className='font-bold text-3xl'>From Our Blog</h1>
                    </div>
                </div>
            </div>
            <Slider data={data}>
                <SwiperSlide>
                    <BlogCard
                        blogimg={blogimg.img1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard
                        blogimg={blogimg.img2}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard
                        blogimg={blogimg.img1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard
                        blogimg={blogimg.img2}
                    />
                </SwiperSlide>
            </Slider>
            <div className='flex items-center flex-col'>
                <p className='text-lg text-center mt-10 mb-3'>Please find below our Blogs.</p>
                <PrimaryButton>View All<MdOutlineArrowRightAlt className='text-2xl ml-2' /></PrimaryButton>
            </div>
        </div>
    );
};

export default BlogSlider;