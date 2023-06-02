import React from 'react'
// Import Swiper React components
import rv1 from '../../../assests/rv2.png'
// import rv2 from '../../../assests/rv1.png'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
// import { BsStarFill } from 'react-icons/bs';
import R1 from '../../../assests/r_1.png'
import R2 from '../../../assests/r_2.png'
import R3 from '../../../assests/r_3.png'
import R4 from '../../../assests/r_4.png'
import R5 from '../../../assests/r_5.png'
const Review = () => {
  const review = [{ Pic: R1 , UserName: "Sophia", desc: " Very efficient and painless treatment" }, {Pic: R2 , UserName: "Grace", desc: " Highly effective acne treatment that cleared my skin in no time!" }, { Pic: R3 , UserName: "Lily", desc: " Impressive results! This acne treatment minimized my blemishes and prevented new ones." }, { Pic: R4 , UserName: "Emily", desc: "Regained my confidence thanks to this effective acne treatment" }, {Pic: R5 , UserName: "Charlotte", desc: " Clear skin at last! This acne treatment exceeded my expectations" }]

  return (
    <>
      <div className='container mx-auto  xl:px-20 px-5 xl:pt-[80px] pt-[40px]'>
        <div className='text-center'>
          <h2 className='text-[#C9E065]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr '>Testimonialss</h2>
          <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] md:text-[30px] text-[22px] font-sans font-semibold'>Our Clients' Reviews</h1>
        </div>

        <div className='pt-[40px]'>

          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}

            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}

            modules={[Pagination]}
            className="swiper_review"
          >
            <div className='grid lg:grid-cols-2 gap-5 '>
              {review.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className='flex xl:flex-nowrap md:flex-nowrap flex-wrap '>
                    <div className='flex justify-center items-center xl:w-auto w-full '>
                      <img src={rv1} alt={rv1} className='object-cover rounded-full ' />
                    </div>
                    <div className='pl-3' >
                      <p className='text-[17px] italic text-[#5C636E] font-normal font-intr '>{item?.desc}</p>
                      <h2 className='text-[#1D1D1D] text-[11px] uppercase font-sans font-bold pt-3'>{item?.UserName}</h2>
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