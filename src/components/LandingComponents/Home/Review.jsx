import React from 'react'
// Import Swiper React components
import rev1 from '../../../assests/Ellipse 1.png'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { BsStarFill } from 'react-icons/bs';
const Review = () => {
  return (
    <>
      <div className='container mx-auto  xl:px-20 px-5 pt-[80px]'>
        <div className='text-center'>
          <h2 className='text-[#C9E065]  leading-0 text-[60px] font-normal font-Herr '>Our Patients Reviews</h2>
          <h1 className='text-[#1F3D64] -mt-[30px] uppercase leading-0 text-[41px] font-sans font-semibold'>Our Patients satisfaction review</h1>
        </div>

        <div className='pt-[40px]'>

          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
          
            modules={[Pagination]}
            className="swiper_review"
          >
            <div className='grid grid-cols-4 gap-5 '>
              {Array(5).fill(5).map((_, i) => (
                <SwiperSlide key={i}>
                  <div className=' p-4 rounded-md  bg-white' style={{ boxShadow: '0px 12px 12px rgba(0, 0, 0, 0.16)', border: ' 3px solid rgba(28, 28, 28, 0.1)' }}>
                    <div className='flex flex-col justify-center items-center'>
                      <img src={rev1} alt={rev1} className='object-cover rounded-full w-[30%]' />
                      <div className='pt-3 flex items-center'>
                        <BsStarFill className='text-[#B58F2E] text-[22px]' />
                        <span className='pl-2 font-mons font-extrabold text-[22px] text-[#1E1E1E]'>4.07</span></div>
                      <h1 className='text-[#1F3D64] font-mons font-bold text-[24px] pt-3'>Wade Warren</h1>
                      <p className=' pt-3  text-[#8C8C8C] text-center font-mons text-[18px] font-normal'>Awesome website and funnel for your business</p>
                    </div>

                  </div>
                </SwiperSlide>
              ))}

            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Review