import React from 'react'
// Import Swiper React components
// import rev1 from '../../../assests/Ellipse 1.png'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { BsStarFill } from 'react-icons/bs';
import { Truncate } from '../../../util/TrucateString';
import avatar from '../../../assests/avatar.png'
const Review = () => {

  const review = [{ UserName: "Luna wong", desc: " Very efficient and painless treatment" }, { UserName: "claudia baltag", desc: " Highly effective acne treatment that cleared my skin in no time!" }, { UserName: "Amy Le Mar", desc: " Impressive results! This acne treatment minimized my blemishes and prevented new ones." }, { UserName: "John Paul Collier", desc: "Regained my confidence thanks to this effective acne treatment" }, { UserName: "Nichola Burrows", desc: " Clear skin at last! This acne treatment exceeded my expectations" }]
  return (
    <>
      <div className='container mx-auto  xl:px-20 px-5 pt-[80px]'>
        <div className='text-center'>
          <h2 className='text-[#C9E065]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr '>Our Patients Reviews</h2>
          <h1 className='text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] md:text-[30px] text-[22px] font-sans font-semibold'>Our Patients satisfaction review</h1>
        </div>

        <div className='pt-[40px]'>

          <Swiper
            slidesPerView={4}
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
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}

            modules={[Pagination]}
            className="swiper_review"
          >
            <div className='grid lg:grid-cols-4 gap-5 '>
              {review.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className=' p-4 rounded-md h-[280px] bg-white' style={{ boxShadow: '0px 12px 12px rgba(0, 0, 0, 0.16)', border: ' 3px solid rgba(28, 28, 28, 0.1)' }}>
                    <div className='flex flex-col justify-center items-center'>
                      <img src={avatar} alt={avatar} className='object-cover rounded-full w-[32%]' />
                      <div className=' flex items-center'>
                        <BsStarFill className='text-[#B58F2E] text-[22px]' />
                        <span className='pl-2 font-mons font-extrabold text-[22px] text-[#1E1E1E]'>5</span></div>
                      <h1 className='text-[#1F3D64] font-mons font-bold text-[18px] '>{item?.UserName}</h1>
                      <p className=' pt-3  text-[#8C8C8C] text-center font-mons text-[14px] font-normal'>{item?.desc}</p>
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