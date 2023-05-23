import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay , Pagination } from "swiper";
import BannerImg from '../../../assests/Slider.png'
import { Link } from 'react-router-dom';
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
                            <div className='absolute  lg:top-60 md:top-[30%] top-[20%] right-1  lg:right-16 md:right-5'>
                                <div className='max-w-[800px] m-auto  '>
                                    <h1 className='lg:text-[64px] text-[15px]  md:text-[25px] text-[#B58F2E] leading-0 font-bold font-sans text-left uppercase '>UK's No. 1 </h1>
                                    <span className='leading-0 md:text-[30px] text-[18px] -mt-6 lg:text-[64px] leading-0 font-bold font-sans text-left uppercase text-[#1F3D64]'> clinic for acne </span>
                                    <div className='pt-[30px]'>
                                        <button className='rounded-full font-bold font-sans  bg-[#C9E065] text-[#1F3D64] hover:bg-[#1F3D64] lg:text-auto md:text-auto text-[10px] hover:text-[#C9E065] uppercase lg:px-8 md:px-8 px-2 lg:py-3 md:py-3 py-1 '>learn more</button>
                                        <Link to="/booking" className='rounded-full font-bold font-sans  mx-3 bg-[#1F3D64] text-[#C9E065] lg:text-auto md:text-auto text-[10px] hover:bg-[#C9E065] hover:text-[#1F3D64] uppercase lg:px-8 md:px-8 px-2 lg:py-3 md:py-3 py-1 '>book now</Link>
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