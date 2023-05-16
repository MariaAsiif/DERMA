import React from 'react'
import follow1 from '../../assests/before after for website.png'
import follow2 from '../../assests/before after for website (1).png'
import follow3 from '../../assests/before after for website (2).png'
import follow4 from '../../assests/bf-1.png'
import send from '../../assests/pseudo.png'
import { Swiper, SwiperSlide } from "swiper/react";
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper";
const Footer = () => {
  return (
    <>
      <div className='pt-[50px]'>
        <div className='container mx-auto px-10 pb-5
 '>
          <h2 className='text-center font-sans  font-medium text-[23px] pb-5'>Before | After</h2>


          <Swiper
            slidesPerView={3}
            spaceBetween={30}
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
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >

            <SwiperSlide>
              <img src={follow1} alt="folow" className='object-cover ' />
              {/* <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={follow2} srcSet={follow2} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={follow1} srcSet={follow1} alt="Image two" />}
              /> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={follow2} alt="folow" className='object-cover ' />

              {/* <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={follow3} srcSet={follow3} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={follow4} srcSet={follow4} alt="Image two" />}
              /> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={follow3} alt="folow" className='object-cover ' />
              {/* <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={follow2} srcSet={follow2} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={follow1} srcSet={follow1} alt="Image two" />}
              /> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={follow4} alt="folow" className='object-cover ' />
              {/* <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={follow2} srcSet={follow2} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={follow1} srcSet={follow1} alt="Image two" />}
              /> */}
            </SwiperSlide>

          </Swiper>
          {/* <div className='flex items-center justify-center'>
          <img src={follow1} alt="folow" className='object-cover w-[30%]' />
          <img src={follow2} alt="folow" className='object-cover w-[30%]' />
          <img src={follow3} alt="folow" className='object-cover w-[30%]' /> */}

          {/* </div> */}
        </div>

        {/* bottom footer */}

        <div className='bg-[#EFEFEF] mt-5 pt-[20px] h-full pb-3'>
          <div className='container mx-auto xl:px-0 px-5'>
            <div className="flex xl:flex-nowrap  flex-wrap justify-between ">
              <div className='xl:w-[40%] md:w-[40%]'>
                <h2 className='font-semibold font-sans  text-[20px] text-[#171928]'>About Us</h2>
                <p className='pt-6 font-sans  leading-[28px] font-normal text-[15px]'>
                  Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut
                  labore et dolore magna
                </p>
              </div>
              <div className='xl:w-[25%] md:w-[25%] '>
                <h2 className='font-semibold text-[20px] xl:pt-0 pt-2 text-[#171928] font-sans '>Quick Links</h2>
                <div className='xl:pt-6 pt-3'>
                  <ul className=''>
                    <li className='text-[#1D1D1D] pb-2 font-sans font-semibold text-[15px] '>About</li>
                    <li className='text-[#1D1D1D] pb-2 font-sans font-semibold text-[15px] '>Surgeries</li>
                    <li className='text-[#1D1D1D] pb-2 font-sans font-semibold text-[15px] '>Services</li>
                    <li className='text-[#1D1D1D] pb-2 font-sans font-semibold text-[15px] '>Contact</li>
                  </ul>
                </div>
              </div>
              <div className='xl:w-[40%] md:w-[40%] '>
                <h2 className='font-semibold xl:text-center font-sans xl:pt-0 pt-2 text-[20px] text-[#171928]'>Contact Us</h2>
                <div className='xl:pt-6 pt-3 xl:text-center'>
                  <p>176 W Street Name, New York, NY 10014
                    Mon-Fri: 10am - 7pm EST</p>
                  <span>info@londonacneuk.com</span>
                </div>
              </div>
              <div className='col-span-2 xl:pt-0 pt-3'>
                <p className='text-[#1F3D64] font-sans text-[15px]'>Subscribe to our newsletter You can be always up to date with our Clinic and Cosmetic Center news!</p>
                <div className='pt-5'>
                  <div className='flex justify-between items-center'>
                    <h2 className='text-[10px] font-bold font-sans uppercase
                  '>email address</h2>
                    <div className='flex items-center'>
                      <h2 className='text-[#1F3D64] font-sans font-semibold mx-3 text-[10px]'>Subscribe </h2>
                      <img src={send} alt='send' className='object-cover' />
                    </div>
                  </div>
                  <div className='pt-1'>
                    <textarea rows={3} style={{ background: 'rgba(255, 255, 255, 0.28)' }} className='w-full bg-transparent border rounded'></textarea>
                    <p className='text-[12px] text-[#565C66] font-sans font-normal'>London Acne © 2023. All rights reserved. Terms of use and Privacy Policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer