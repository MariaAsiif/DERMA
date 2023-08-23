import React from "react";
import mes from "../../../assests/secdule.png";
const Schedule = () => {
  return (
    <div className="px-2 mb-5 lg:mb-10">
    <div className="container  mx-auto md:px-6 bg-[#C9E065]">
      <div className="px-6 py-5 lg:py-12 text-center md:px-12 lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="flex grid items-center gap-6 lg:grid-cols-2">
            <div className=" lg:mt-0">
              <h2 className="text-[#B58F2E]  leading-0 lg:text-[50px] md:text-[40px] text-[30px] font-normal mb-2">
                Book Now for a Better You
              </h2>
              <h1 className="text-[#1F3D64] lg:-mt-[25px] uppercase leading-0 lg:text-[35px] md:text-[25px] text-[22px] font-sans font-semibold">
                Schedule Your Appointment
              </h1>
              <p className="text-[#5C636E] leading-[28px]  font-normal font-sans  text-[20px]">
                Our team of experts is ready to help you achieve your goals.
                Schedule your appointment today and start your journey towards a
                healthier and happier life!
              </p>
            </div>
            <div className="mb-2 lg:mb-0">
              <img src={mes} alt={mes} className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Schedule;
