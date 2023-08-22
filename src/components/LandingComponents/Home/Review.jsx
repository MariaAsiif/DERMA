import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import avatar from "../../../assests/avatar.png";
const Review = () => {
  const review = [
    {
      UserName: "Taylor Perkins",
      desc: " Very efficient and painless treatment",
      rating: (
        <>
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
        </>
      ),
    },
    {
      UserName: "George Thomas",
      desc: " Highly effective acne treatment that cleared my skin in no time!",
      rating: (
        <>
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
        </>
      ),
    },
    {
      UserName: "Amy Le Mar",
      desc: " Impressive results! This acne treatment minimized my blemishes and prevented new ones.",
      rating: (
        <>
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStar className="text-[#B58F2E] text-[20px]" />
        </>
      ),
    },
    {
      UserName: "Olivia Greens",
      desc: "Regained my confidence thanks to this effective acne treatment",
      rating: (
        <>
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarHalf className="text-[#B58F2E] text-[20px]" />
        </>
      ),
    },
    {
      UserName: "Liam Jones ",
      desc: " Clear skin at last! This acne treatment exceeded my expectations",
      rating: (
        <>
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
          <BsStarFill className="text-[#B58F2E] text-[20px]" />
        </>
      ),
    },
  ];
  return (
    <>
      <div className="container mx-auto  xl:px-20 px-5">
        <div className="text-center">
          <h2 className="text-[#C9E065]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr ">
            Our Patients Reviews
          </h2>
          <h1 className="text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] md:text-[30px] text-[22px] font-sans font-semibold">
            Our Patients satisfaction review
          </h1>
        </div>
        <div className="pt-[40px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
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
            modules={[Pagination, Autoplay]}
            className="swiper_review"
          >
            <div className="grid lg:grid-cols-4 gap-5 ">
              {review.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className=" flex flex-col justify-center items-center p-4 rounded-md h-[180px] rounded-lg bg-gray-200 shadow-xl ">
                    <h1 className="text-[#1F3D64] font-mons font-bold text-[18px] ">
                      {item?.UserName}
                    </h1>
                    <div className=" flex items-center pt-3">
                      {item?.rating}
                    </div>
                    <p className=" pt-3 text-center font-mons text-[14px] font-normal">
                      {item?.desc}
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
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Review;
