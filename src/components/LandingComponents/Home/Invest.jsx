import React from "react";
import invImg from "../../../assests/div.sc_promo_image.png";
const Invest = () => {
  return (
    <div className="container px-2 md:my-20 mx-auto md:px-6">
      <section className="mb-5 lg:mb-10">
        <div className="flex flex-wrap">
          <div className="mb-5 lg:mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
                src={invImg}
                alt={invImg}
                className="z-[10] w-full  lg:ml-[50px]"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-[#C9E065] p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-8 text-3xl font-bold text-[#1F3D64]">
                  INVEST IN YOUR SKIN BECAUSE IT WILL ALWAYS PAY OFF IN THE LONG
                  RUN
                </h2>
                <p className="mb-8 pb-2 lg:pb-0 text-[#1F3D64]">
                  Investing in your skin is a wise decision that yields
                  long-term benefits. At our acne clinic, we prioritize the
                  well-being of your skin and provide effective solutions for a
                  variety of acne-related concerns. Our team of expert
                  dermatologists is dedicated to delivering personalized care to
                  help you achieve a clear and healthy complexion.
                </p>
                <div className="mx-auto flex flex-col md:flex-row md:justify-around xl:justify-start"></div>
                <button className="rounded-full font-bold lg:text-auto text-[14px] font-sans mt-3 bg-[#1F3D64] text-[#C9E065] transform delay-100 ease-out  hover:bg-white hover:text-[#1F3D64] uppercase px-8 py-3  ">
                  contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invest;
