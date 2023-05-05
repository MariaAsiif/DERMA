import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay , Pagination } from "swiper";
import BannerImg from '../../../assests/Slider.png'
const BannerSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay , Pagination]}
                className="slider_swiper"
            >
                {Array(5).fill(5).map((_, i) => (
                    <SwiperSlide key={i}>
                        <div className='relative'>
                            <img src={BannerImg} alt={BannerImg} className='object-cover' />
                            <div className='absolute top-60 right-16'>
                                <div className='max-w-[800px] m-auto  '>
                                    <h1 className='text-[64px] text-[#B58F2E] leading-0 font-bold font-sans text-left uppercase '>UK's No. 1 </h1>
                                    <span className='leading-0 text-[] -mt-6 text-[64px] leading-0 font-bold font-sans text-left uppercase text-[#1F3D64]'> clinic for acne </span>
                                    <div className='pt-[30px]'>
                                        <button className='rounded-full font-bold font-sans  bg-[#C9E065] text-[#1F3D64] hover:bg-[#1F3D64] hover:text-[#C9E065] uppercase px-8 py-3 '>learn more</button>
                                        <button className='rounded-full font-bold font-sans  mx-3 bg-[#1F3D64] text-[#C9E065] hover:bg-[#C9E065] hover:text-[#1F3D64] uppercase px-8 py-3 '>book now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>

        </>
    )
}

export default BannerSlider