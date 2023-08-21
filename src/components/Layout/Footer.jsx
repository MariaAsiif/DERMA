import React, { useEffect, useRef, useState } from "react";
import follow1 from "../../assests/before after for website.png";
import follow2 from "../../assests/before after for website (1).png";
import follow3 from "../../assests/before after for website (2).png";
import follow4 from "../../assests/bf-1.png";
import follow5 from "../../assests/f3.png";
import follow6 from "../../assests/bf5.png";
import follow7 from "../../assests/bf7.png";
import follow8 from "../../assests/bf8.png";
import follow9 from "../../assests/bf9.png";
import follow10 from "../../assests/bf10-.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const Footer = () => {
  let lists = [
    follow1,
    follow2,
    follow3,
    follow4,
    follow5,
    follow6,
    follow7,
    follow8,
    follow9,
    follow10,
  ];
  let location = useLocation().pathname;
  //const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect
  //let apiUrl =`https://graph.instagram.com/${process.env.REACT_APP_userId}/media?fields=id,media_type,media_url,thumbnail_url,caption,timestamp&limit=5&access_token=${process.env.REACT_APP_accessToken}`;
  
  // useEffect(() => {
  //   // this is to avoid memory leaks
  //   const abortController = new AbortController();

  //   async function fetchInstagramPost() {
  //     try {
  //       axios
  //         .get(apiUrl)
  //         .then((resp) => {
  //           let justImgs = resp.data.data.filter(
  //             (f) => f.media_type === "IMAGE"
  //           );
  //           setFeedsData(justImgs);
  //         });
  //     } catch (err) {
  //       console.log("error", err);
  //     }
  //   }

  //   // manually call the fecth function
  //   fetchInstagramPost();

  //   return () => {
  //     // cancel pending fetch request on component unmount
  //     abortController.abort();
  //   };
  // }, []);

  return (
    <>
      <div id="before_after">
       
          {location !== "/" &&
           <div
           className="container mx-auto px-10 pb-5"
         >
           <h2 className="text-center font-sans  font-medium text-[23px] pb-5">
             Before | After
           </h2>
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
                    {/* <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src={follow2} srcSet={follow2} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={follow1} srcSet={follow1} alt="Image two" />}
                      /> */}
                    {lists.map((item, i) => (
                      <SwiperSlide key={i}>
                        <img src={item} alt="folow" className="object-cover " />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  </div>
                }
         

          {/* </div> */}
       

        {/* bottom footer */}

        <div className="bg-[#EFEFEF] mt-5 pt-[20px] h-full pb-3">
          <div className="container mx-auto xl:px-0 px-5">
            <div className="flex xl:flex-nowrap  flex-wrap justify-between ">
              <div className="xl:w-[40%] md:w-[40%]">
                <h2 className="font-semibold font-sans  text-[20px] text-[#171928]">
                  About Us
                </h2>
                <p className="pt-6 font-sans  leading-[28px] font-normal text-[15px] max-w-[280px]">
                  When you book a consultation with one of our specialists, they
                  will conduct a detailed examination, diagnose your condition,
                  and develop a customized treatment plan tailored to your
                  specific needs.
                </p>
              </div>
              <div className="xl:w-[25%] md:w-[25%] ">
                <h2 className="font-semibold text-[20px] xl:pt-0 pt-2 text-[#171928] font-sans ">
                  Quick Links
                </h2>
                <div className="xl:pt-6 pt-3">
                  <ul className="">
                    <Link to="/aboutUs">
                      <li className="text-[#1D1D1D] hover:text-[#be9162] pb-2 font-sans font-semibold text-[15px] ">
                        About
                      </li>
                    </Link>
                    <Link to="/services">
                      <li className="text-[#1D1D1D] hover:text-[#be9162] pb-2 font-sans font-semibold text-[15px] ">
                        Surgeries
                      </li>
                    </Link>
                    <Link to="/services">
                      <li className="text-[#1D1D1D] hover:text-[#be9162] pb-2 font-sans font-semibold text-[15px] ">
                        Services
                      </li>
                    </Link>
                    <Link to="/contactus">
                      <li className="text-[#1D1D1D] hover:text-[#be9162] pb-2 font-sans font-semibold text-[15px] ">
                        Contact
                      </li>
                    </Link>
                    <Link to="/policies">
                      <li className="text-[#1D1D1D] hover:text-[#be9162] pb-2 font-sans font-semibold text-[15px] ">
                        Policies{" "}
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="xl:w-[40%] md:w-[40%] ">
                <h2 className="font-semibold xl:text-center font-sans xl:pt-0 pt-2 text-[20px] text-[#171928]">
                  Contact Us
                </h2>
                <div className="xl:pt-6 pt-3 xl:text-center">
                  <p>4 Harley Street, London, W1G 9BP</p>
                  <span>info@londonacneclinic.co.uk</span>
                </div>
              </div>
              <div className="col-span-2 xl:pt-0 ">
                {/* <p className='text-[#1F3D64] font-sans text-[15px]'>Subscribe to our newsletter You can be always up to date with our Clinic and Cosmetic Center news!</p> */}
                <div className="">
                  <div className="flex justify-between items-center">
                    {/* <h2
                      className=" font-semibold xl:text-center font-sans xl:pt-0 pt-2 text-[20px] text-[#171928]
                  "
                    >
                      Instagram Feed
                    </h2> */}
                    {/* <div className='flex items-center'>
                      <h2 className='text-[#1F3D64] font-sans font-semibold mx-3 text-[10px]'>Subscribe </h2>
                      <img src={send} alt='send' className='object-cover' />
                    </div> */}
                  </div>
                  <div className="pt-1">
                    {/* <div className="grid grid-cols-3 gap-5">
                      {feeds.slice(0, 6).map((item, i) => (
                        <a
                          href={item?.permalink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            key={i}
                            src={item?.media_url}
                            alt={item?.media_url}
                            className="object-cover w-[70px] h-[70px]"
                          />
                        </a>
                      ))}
                    </div> */}
                    {/* <textarea rows={3} style={{ background: 'rgba(255, 255, 255, 0.28)' }} className='w-full bg-transparent border rounded'></textarea> */}
                    <p className="text-[12px] text-[#565C66] font-sans font-normal">
                      {/* London Acne © 2023. All rights reserved. Terms of use and Privacy Policy */}
                      Developed and Maintained by Devops Markaz Tech Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
