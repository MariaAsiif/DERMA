import React from "react";
import sr1 from "../../../assests/div.custom-video-player (1).png";
import sr2 from "../../../assests/div.custom-video-player.png";
const ServicesTreatment = () => {
  return (
    
    <div className=" px-2 md:px-0 mb-5 lg:mb-10 services" id="services">
      <div className="container mx-auto px-10 py-5 bg-[#1F3D64]">
        <h1 className="text-center font-normal font-Herr xl:text-[60px] md:text-[45px] text-[40px] text-white ">
          How We Do It
        </h1>
        <h2 className="xl:text-[41px] md:text-[30px] text-[20px] text-[#C9E065] text-center uppercase">
          Treatment & Services
        </h2>
        <p className="text-center font-mons max-w-[900px] xl:text-[16px] text-[14px] mx-auto pt-[30px] text-white font-medium leading-[20px]">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim.
        </p>

        <div className="flex items-center pt-[30px]">
          <div>
            <img src={sr2} alt={sr2} className="object-cover" />
          </div>
          <div>
            <img src={sr1} alt={sr1} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTreatment;
