import React from 'react';
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css/autoplay";

import "./slider.css";

const Slider = ({ children, data }) => {
    return (
        <Swiper
            slidesPerView={data.slidesPerView}
            spaceBetween={10}
            navigation={data.navigation}
            loop={true}
            pagination={data.pagination === true ? {
                clickable: true
            } : false}
            autoplay={data.autoplay}
            breakpoints={{
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "@1.50": {
                    slidesPerView: data.slidesPerView,
                    spaceBetween: 10,
                },
            }}
            modules={[Pagination, Navigation, Autoplay]}
        >

            {children}

        </Swiper>
    );
};

export default Slider;