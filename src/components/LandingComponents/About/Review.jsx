import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import R1 from "../../../assests/male.png";
import R2 from "../../../assests/female.png";
const Review = () => {
  const review = [
    {
      Pic: R1,
      UserName: "Sophia",
      desc: " Very efficient and painless treatment",
    },
    {
      Pic: R2,
      UserName: "Grace",
      desc: " Highly effective acne treatment that cleared my skin in no time!",
    },
    {
      Pic: R1,
      UserName: "Lily",
      desc: " Impressive results! This acne treatment minimized my blemishes and prevented new ones.",
    },
    {
      Pic: R2,
      UserName: "Emily",
      desc: "Regained my confidence thanks to this effective acne treatment",
    },
    {
      Pic: R1,
      UserName: "Charlotte",
      desc: " Clear skin at last! This acne treatment exceeded my expectations",
    },
  ];
  return (
    <>
      <div className="mb-5 lg:mb-10 px-2">
        <div className="container mx-auto xl:px-20 ">
          <div className="text-center">
            <h2 className="text-[#C9E065]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal mb-2">
              Testimonialss
            </h2>
            <h1 className="text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] md:text-[30px] text-[22px] font-sans font-semibold">
              Our Clients' Reviews
            </h1>
          </div>

          <div className="pt-[20px]">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              modules={[Autoplay]}
              className="swiper_review"
            >
              <div className="grid gap-5 ">
                {review.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex md:flex-nowrap flex-wrap rounded-lg bg-gray-200 shadow-xl justify-center p-2 h-[300px] md:h-[150px]">
                      <div className="flex justify-center items-center xl:w-auto w-full ">
                        <img
                          src={item?.Pic}
                          alt={item?.Pic}
                          className="object-cover rounded-full shadow-2xl"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center xl:w-auto w-full pl-3">
                        <p className="text-[17px] italic text-[#5C636E] font-normal font-intr ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className="inline-block w-6"
                          >
                            <path
                              fill="currentColor"
                              d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                            />
                          </svg>
                          {item?.desc}
                        </p>
                        <h2 className="text-[#1D1D1D] text-[11px] uppercase font-sans font-bold pt-3">
                          {item?.UserName}
                        </h2>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
