import React, { useRef, useState } from 'react';
import follow1 from '../../../assests/before after for website.png'
import follow2 from '../../../assests/before after for website (1).png'
import follow3 from '../../../assests/before after for website (2).png'
import follow4 from '../../../assests/bf-1.png'
import follow5 from '../../../assests/f3.png'
import follow6 from '../../../assests/bf5.png'
import follow7 from '../../../assests/bf7.png'
import follow8 from '../../../assests/bf8.png'
import follow9 from '../../../assests/bf9.png'
import follow10 from '../../../assests/bf10-.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Autoplay, EffectCards, EffectCoverflow, FreeMode, Pagination } from 'swiper';

// import required modules
//import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function BeforeAfter() {
    let lists = [follow1, follow2, follow3, follow4, follow5, follow6, follow7, follow8, follow9, follow10]

    return (
        <>
        <div className='mb-5 lg:mb-10 px-2'>
        <h2 className="text-center font-sans  font-medium text-[23px] p-2">
            Before | After
          </h2>
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        freeMode={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        initialSlide={1}
        modules={[EffectCoverflow,Autoplay,FreeMode]}
        className="mySwiper"
        breakpoints={{
          
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
         
        }}
      >
            {
              lists.map((item, i) => (
                <SwiperSlide key={i}>
                  <img src={item} alt={i+item} />

                </SwiperSlide>
              ))}
            
          </Swiper>
          </div>
          
        </>
      );
    }