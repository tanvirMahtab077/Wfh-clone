import { React } from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '../Slider/Slider';
import blog1 from '../../Assests/Imgs/blog-1.jpg'
import blog2 from '../../Assests/Imgs/blog-2.jpg'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import BlogCard from './BlogCard';

const BlogSlider = () => {
    const data = {
        navigation: false,
        pagination: false,
        autoplay: false,
        slidesPerView: 3
    }
    const blogimg = {
        img1: blog1,
        img2: blog2
    }
    const date = {
        date1: ' March 1,2022',
        date2: ' January 31,2022'
    }
    const title = {
        title1: 'Donate Love, Spread Happiness 2022',
        title2: 'ভালোবাসা দিবসে পথশিশুদের পাশে ওয়ার্কস ফর হিউমিনিটি ফাউন্ডেশন'
    }
    const description = {
        description1: '১৪ই ফেব্রুয়ারির এই দিনটা একটু অন্যভাবে চিন্তা করুন। এই দিনটি যদি অসহায় পরিবারহীন শিশুদের সাথে আনন্দ ভাগাভাগি করে কাটাতে পারেন, মাতৃস্নেহ দিয়ে একবেলা খাবার খাইয়ে দিতে পারেন, বাবা-মায়ের মতো ভালোবেসে',
        description2: 'ভালোবাসা দিবসে যেখানে সবাই তাদের পরিবার পরিজন,প্রিয় মানুষের সাথে ভালোবাসা দিবস উদযাপন করে সেখানে সমাজ কথিত সুবিধাবঞ্চিত পথশিশু সবার মাঝে খুশি ছড়িয়ে দিতে দিনব্যাপী নানা কার্যক্রমের মাধ্যমে বিশ্বসাহিত্য কেন্দ্রে ভালোবাসা'
    }
    const link = {
        link1: '2022/01/31/donate-love-spread-happiness-2022/',
        link2: '/2022/03/01/dlsh2022/',
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
                        date={date.date1}
                        title={title.title1}
                        description={description.description1}
                        link={link.link1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard
                        blogimg={blogimg.img2}
                        date={date.date2}
                        title={title.title2}
                        description={description.description2}
                        link={link.link2}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard
                        blogimg={blogimg.img1}
                        date={date.date1}
                        title={title.title1}
                        description={description.description1}
                        link={link.link1}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BlogCard
                        blogimg={blogimg.img2}
                        date={date.date2}
                        title={title.title2}
                        description={description.description2}
                        link={link.link2}
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