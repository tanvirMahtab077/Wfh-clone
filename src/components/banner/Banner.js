import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerFooter from "../bannerFooter/BannerFooter";

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        keyBoardControl={true}
        infinite={true}
        showDots
      >
        <div
          className="relative w-screen bg-cover bg-no-repeat font-pop"
          style={{
            background: "url('assets/images/banner/banner_main.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-full h-full bg-black/50 text-white font-bold px-12 md:px-20 lg:px-20 py-56 text-center">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl mb-6 animate-[slideY_1s_ease_1]">
              Small Efforts Make Big Change
            </h1>
            <p className="font-normal text-lg md:text-xl lg:text-2xl w-3/4 md:w-2/3 lg:w-[38%] mx-auto mb-8 animate-[slideY_1.3s_ease_1]">
              We make a living by what we get but we make a life by what we
              give!
            </p>
            <a
              href="#"
              className="inline-block linear duration-300 py-3 md:py-5 text-white text-lg lg:text-2xl px-7 md:px-10 bg-primary/60 hover:bg-primary/80 animate-[slideY_1.8s_ease_1]"
            >
              DONATE NOW!
            </a>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[4vw] bg-black blur-2xl"></div>
        </div>
      </Carousel>
      <BannerFooter />
    </div>
  );
};

export default Banner;
