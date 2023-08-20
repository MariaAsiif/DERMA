import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper"; // Import required modules
import { Link } from "react-router-dom";
import banner1 from "../../../assests/image01.jpg";
import banner2 from "../../../assests/image02.jpg";
import banner3 from "../../../assests/Slider.jpg";
SwiperCore.use([Autoplay, Pagination, Navigation]); // Initialize Swiper modules
const BannerSlider = () => {
  const bannerImages = [banner1, banner2, banner3];
  return (
    <div className="slider-container w-full overflow-hidden mt-6 sm:mt-[60px] md:mt-[76px] lg:mt-[82px] xl:mt-[35px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="slider-swiper"
      >
        {bannerImages.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="">
              <img
                src={item}
                alt={`Banner ${i + 1}`}
                className="w-full object-cover"
              />
              <div
                className={`absolute ${
                  i === 1 || i === 2 ? "left-1" : "right-1"
                } top-[20%] sm:top-1/4 md:top-1/4 lg:top-1/5 xl:top-1/5 2xl:top-1/6`}
              >
                <div className="max-w-[800px] mx-auto">
                  <h1 className="text-xs sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-bold font-sans text-left uppercase text-[#B58F2E] mb-2 md:mb-8 lg:mb-12">
                    UK's No. 1
                  </h1>
                  <h1 className="text-xs sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-bold font-sans text-left uppercase text-[#1F3D64] mb-2 md:mb-8 lg:mb-12">
                    clinic for acne
                  </h1>
                  <div className="pt-[30px]">
                    <Link
                      to="/aboutUs"
                      className="rounded-full font-bold font-sans bg-[#C9E065] text-[#1F3D64] hover:bg-white hover:border hover:text-black text-[10px]  uppercase px-2 py-1 sm:px-4 sm:py-2 md:px-8 md:py-3"
                    >
                      learn more
                    </Link>
                    <Link
                      to="/booking"
                      className="rounded-full font-bold font-sans mx-3 bg-[#1F3D64] text-[#C9E065] text-[10px] hover:bg-white hover:border hover:text-black uppercase px-2 py-1 sm:px-8 sm:py-3 md:px-8 md:py-3"
                    >
                      book now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
