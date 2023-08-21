import React from "react";
import mes from "../../../assests/mess.png";
const Mession = () => {
  return (
    <div className=" mb-5 lg:mb-10 px-2">
      <div className="container  mx-auto md:px-6 bg-[#C9E065]">
          <div className="px-6 py-12 text-center md:px-12 lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="flex grid items-center gap-12 lg:grid-cols-2">
                <div className="mt-12 lg:mt-0">
                  <h2 className="text-[#B58F2E]  leading-0 lg:text-[60px] md:text-[50px] text-[40px] font-normal font-Herr ">
                    Healthy Skin Begins Here{" "}
                  </h2>
                  <h1 className="text-[#1F3D64] lg:-mt-[30px] uppercase leading-0 lg:text-[41px] md:text-[30px] text-[22px] font-sans font-semibold">
                    Mission and Vision
                  </h1>
                  <p className="text-[#5C636E] leading-[28px]  font-normal font-sans  text-[20px]">
                    When you book a consultation with one of our specialists,
                    they will conduct a detailed examination, diagnose your
                    condition, and develop a customized treatment plan tailored
                    to your specific needs. To ensure the effectiveness of the
                    treatment, we take into account your medical history and
                    carefully consider your unique skin type.
                  </p>
                </div>
                <div className="mb-12 lg:mb-0">
                  <img
                    src={mes}
                    alt={mes}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
  );
};

export default Mession;
