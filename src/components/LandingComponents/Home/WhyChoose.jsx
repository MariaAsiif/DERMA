import React from "react";
import whyChooseImg from "../../../assests/Group 24.png";
const WhyChoose = () => {
  return (
    <>
    <div className="px-2 md:my-20 mx-auto md:px-6 mb-5 lg:mb-10">
      <div className="bg-[#1F3D64] py-5 ">
        <div className="container mx-auto  xl:px-20 px-2 py-2 ">
          <div className="flex md:items-center lg:flex-nowrap md:flex-nowrap flex-wrap ">
            <div className="w-full ">
              <img
                src={whyChooseImg}
                alt={whyChooseImg}
                className="object-cover w-full"
              />
            </div>
            <div className="lg:pl-10 md:pl-5 w-[100%]">
              <h2 className="text-white leading-0 lg:text-[60px] text-[40px] font-normal">
                Why Choose Us
              </h2>
              <h1 className="text-[#C9E065]  -mt-[10px] uppercase leading-0 lg:text-[41px] text-[25px] font-sans font-medium">
                Why we are best in UK’s
              </h1>
              <p className="text-[16px] text-white leading-[28px] font-sans text-justify  font-normal">
                At London Acne Clinic, we pride ourselves on delivering
                exceptional care and treatment to our valued patients. Our team
                comprises skilled and knowledgeable dermatologists who are
                passionately dedicated to helping patients achieve their
                skincare goals. Through personalized treatment plans and the use
                of advanced techniques, we strive to provide the highest
                standard of care. Our comprehensive range of services includes
                effective treatments for acne, blemishes, pigmentation, melasma,
                as well as surgical procedures like mole and wart removal. By
                leveraging our expertise and staying up-to-date with the latest
                advancements in dermatology, we ensure that our patients receive
                top-notch care tailored to their unique needs. The outstanding
                results achieved by our patients speak for themselves, and we
                take pride in the positive feedback we have received. Experience
                the difference at London Acne Clinic, where we prioritize your
                skincare needs and go above and beyond to exceed your
                expectations.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default WhyChoose;
