import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
import banner1 from "../../../assests/bannerslider1.png";
import banner3 from "../../../assests/bannerslider2.png";
const BannerSlider = () => {
  const bannerImages = [banner1, banner3];
  return (
    <div className="relative slider-container w-full overflow-hidden">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
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
          <img src={item} alt={i+item}/>

        </SwiperSlide>
      ))}
    
  </Swiper>
  </div>
  );
};

export default BannerSlider;
