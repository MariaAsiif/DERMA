import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
import banner1 from "../../../assests/bannerslider1.png";
import banner2 from "../../../assests/Awaken Your.png";
import banner3 from "../../../assests/bannerslider2.png";
const BannerSlider = () => {
  const bannerImages = [banner1,banner2, banner3];
  return (
    <div className="flex justify-center items-center bg-[#C9E065]/90 relative slider-container w-full lg:h-[calc(100vh-114px)] overflow-hidden">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      
    >
    {
      bannerImages.map((item, i) => (
        <SwiperSlide key={i}>
          <img src={item} alt={i+item} className=" object-cover"/>
        </SwiperSlide>
      ))}
    
  </Swiper>
  </div>
  );
};

export default BannerSlider;
